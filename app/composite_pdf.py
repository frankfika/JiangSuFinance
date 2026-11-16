#!/usr/bin/env python3
"""逐页截图合成 PDF：打印管线的图片丢失问题绕不过去，
export.html 的版面本身就是打印版面（固定 1280x720 一页），
直接滚动截图再组装，所见即所得。"""
import asyncio, base64, io, json, sys, urllib.request

DEBUG_PORT = 9223
URL = "http://127.0.0.1:8371/export.html"
OUT = "/Users/fangchen/Desktop/Jiangsu Finance/江苏财政厅-第一次课-交互讲义-117页.pdf"


class CDP:
    def __init__(self, ws):
        self.ws = ws; self.mid = 0; self.pending = {}

    async def run(self):
        async for raw in self.ws:
            msg = json.loads(raw)
            if "id" in msg and msg["id"] in self.pending:
                self.pending.pop(msg["id"]).set_result(msg)

    async def cmd(self, method, params=None):
        self.mid += 1
        fut = asyncio.get_event_loop().create_future()
        self.pending[self.mid] = fut
        await self.ws.send(json.dumps({"id": self.mid, "method": method, "params": params or {}}))
        msg = await asyncio.wait_for(fut, timeout=120)
        if "error" in msg: raise RuntimeError(msg["error"])
        return msg.get("result", {})


async def main():
    import websockets
    tabs = json.load(urllib.request.urlopen(f"http://127.0.0.1:{DEBUG_PORT}/json"))
    page = next((t for t in tabs if t.get("type") == "page" and t.get("url", "").startswith("about:blank")), None)
    if page is None:
        req = urllib.request.Request(f"http://127.0.0.1:{DEBUG_PORT}/json/new?about:blank", method="PUT")
        page = json.load(urllib.request.urlopen(req))
    async with websockets.connect(page["webSocketDebuggerUrl"], max_size=200 * 1024 * 1024) as ws:
        cdp = CDP(ws)
        task = asyncio.create_task(cdp.run())
        await cdp.cmd("Page.enable")
        await cdp.cmd("Runtime.enable")
        await cdp.cmd("Network.enable")
        await cdp.cmd("Network.setCacheDisabled", {"cacheDisabled": True})
        await cdp.cmd("Emulation.setDeviceMetricsOverride",
                      {"width": 1280, "height": 720, "deviceScaleFactor": 2, "mobile": False})
        await cdp.cmd("Page.navigate", {"url": URL})
        await asyncio.sleep(8)
        st = {}
        for _ in range(60):
            r = await cdp.cmd("Runtime.evaluate", {"expression":
                "JSON.stringify({imgs:Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0),"
                "n:document.querySelectorAll('section.slide').length,fonts:document.fonts.status})",
                "returnByValue": True})
            st = json.loads(r["result"]["value"])
            if st["imgs"] and st["fonts"] == "loaded" and st["n"] > 100:
                break
            await asyncio.sleep(0.5)
        n = st["n"]
        print("slides:", n)

        pages = []
        for i in range(n):
            await cdp.cmd("Runtime.evaluate", {"expression": f"window.scrollTo(0,{i * 720})"})
            await asyncio.sleep(0.25)
            shot = await cdp.cmd("Page.captureScreenshot", {"format": "png"})
            png = base64.b64decode(shot["data"])
            im = io.BytesIO()
            from PIL import Image
            Image.open(io.BytesIO(png)).convert("RGB").save(im, "JPEG", quality=90)
            pages.append(im.getvalue())
            if (i + 1) % 20 == 0:
                print(f"  {i + 1}/{n}")

        from reportlab.lib.pagesizes import landscape
        from reportlab.pdfgen import canvas as rl_canvas
        from reportlab.lib.utils import ImageReader
        W, H = 960, 540  # 13.333x7.5in @72pt
        c = rl_canvas.Canvas(OUT, pagesize=(W, H))
        for data in pages:
            c.drawImage(ImageReader(io.BytesIO(data)), 0, 0, width=W, height=H)
            c.showPage()
        c.save()
        print("written", OUT, len(pages), "pages")
        task.cancel()


asyncio.run(main())
