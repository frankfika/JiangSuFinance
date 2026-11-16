#!/usr/bin/env python3
"""通过 CDP 控制无头 Chrome：等页面完全加载（含图片）后打印 PDF。"""
import asyncio, base64, json, urllib.request, urllib.parse

DEBUG_PORT = 9223
URL = "http://127.0.0.1:8371/export.html"
OUT = "/Users/fangchen/Desktop/Jiangsu Finance/江苏财政厅-第一次课-交互讲义-116页.pdf"


class CDP:
    def __init__(self, ws):
        self.ws = ws
        self.mid = 0
        self.pending = {}
        self.events = []

    async def run(self):
        async for raw in self.ws:
            msg = json.loads(raw)
            if "id" in msg and msg["id"] in self.pending:
                self.pending.pop(msg["id"]).set_result(msg)
            else:
                self.events.append(msg)
                self._drain()

    def _drain(self):
        for ev in self.events:
            m = ev.get("method")
            if m in self.waiters:
                self.waiters.pop(m).set()

    async def cmd(self, method, params=None):
        self.mid += 1
        fut = asyncio.get_event_loop().create_future()
        self.pending[self.mid] = fut
        await self.ws.send(json.dumps({"id": self.mid, "method": method, "params": params or {}}))
        msg = await asyncio.wait_for(fut, timeout=60)
        if "error" in msg:
            raise RuntimeError(msg["error"])
        return msg.get("result", {})

    waiters = {}

    async def wait_event(self, method, timeout=90):
        for ev in list(self.events):
            if ev.get("method") == method:
                self.events.remove(ev)
                return
        ev = asyncio.Event()
        self.waiters[method] = ev
        await asyncio.wait_for(ev.wait(), timeout=timeout)


async def _one_shot():
    tabs = json.load(urllib.request.urlopen(f"http://127.0.0.1:{DEBUG_PORT}/json"))
    tab = next((t for t in tabs if t.get("type") == "page" and t.get("webSocketDebuggerUrl")), None)
    if tab is None:
        raise SystemExit("no debuggable page target")
    import websockets
    async with websockets.connect(tab["webSocketDebuggerUrl"], max_size=200 * 1024 * 1024) as ws:
        cdp = CDP(ws)
        runner = asyncio.create_task(cdp.run())
        await cdp.cmd("Page.enable")
        await cdp.cmd("Runtime.enable")
        await cdp.cmd("Page.navigate", {"url": URL})
        await cdp.wait_event("Page.loadEventFired", timeout=90)
        st = {}
        for _ in range(80):
            r = await cdp.cmd("Runtime.evaluate", {"expression":
                "JSON.stringify({imgs:Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0),"
                "n:document.querySelectorAll('section.slide').length,fonts:document.fonts.status})",
                "returnByValue": True})
            st = json.loads(r["result"]["value"])
            if st["imgs"] and st["fonts"] == "loaded" and st["n"] > 100:
                break
            await asyncio.sleep(0.5)
        print("ready:", st)
        await asyncio.sleep(1.5)
        r = await cdp.cmd("Page.printToPDF", {"printBackground": True,
                                              "paperWidth": 13.333, "paperHeight": 7.5,
                                              "marginTop": 0, "marginBottom": 0,
                                              "marginLeft": 0, "marginRight": 0,
                                              "displayHeaderFooter": False})
        data = base64.b64decode(r["data"])
        open(OUT, "wb").write(data)
        print("written", len(data), "bytes")
        runner.cancel()


async def main():
    last = None
    for attempt in range(1, 6):
        try:
            await _one_shot()
            return
        except Exception as e:
            last = e
            print(f"attempt {attempt} failed: {type(e).__name__}: {e}")
            import subprocess
            subprocess.run(["pkill", "-f", "remote-debugging-port=9223"])
            await asyncio.sleep(2)
            subprocess.Popen(
                ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                 "--remote-debugging-port=9223", "--headless=new", "--disable-gpu",
                 "--hide-scrollbars", "--window-size=1400,1000",
                 "--user-data-dir=/tmp/cdp-profile", "--no-first-run",
                 "--no-default-browser-check", "about:blank"],
                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
            await asyncio.sleep(5)
    raise last


asyncio.run(main())
