#!/usr/bin/env python3
"""刷新页面，验证最后一页内容与图片。"""
import asyncio, json, base64
import websockets

WS = "ws://127.0.0.1:19323/devtools/page/106327A1F969081D2105A59058CCB169"

async def main():
    async with websockets.connect(WS, max_size=100 * 1024 * 1024) as ws:
        mid = 0
        async def cmd(method, params=None):
            nonlocal mid
            mid += 1
            await ws.send(json.dumps({"id": mid, "method": method, "params": params or {}}))
            while True:
                msg = json.loads(await ws.recv())
                if msg.get("id") == mid:
                    return msg.get("result", {})
        await cmd("Page.enable")
        await cmd("Page.reload", {"ignoreCache": True})
        await asyncio.sleep(3)
        r = await cmd("Runtime.evaluate", {"expression": """
          (function(){
            var slides = document.querySelectorAll('.slide');
            var last = slides[slides.length-1];
            return JSON.stringify({
              total: slides.length,
              lastTitle: last.getAttribute('data-title'),
              imgs: Array.from(last.querySelectorAll('img')).map(i=>i.src.split('/').pop()),
              link: !!last.querySelector('a[href*="sohu.com"]'),
              noQr: !last.querySelector('img[src*="qr-"]')
            });
          })()"""})
        print("STATE:", r["result"]["value"])
        await cmd("Runtime.evaluate", {"expression": """
          document.dispatchEvent(new KeyboardEvent('keydown', {key:'End'}))"""})
        await asyncio.sleep(1.5)
        r = await cmd("Page.captureScreenshot", {"format": "png"})
        with open("/Users/fangchen/Desktop/Jiangsu Finance/.work/final-slide.png", "wb") as f:
            f.write(base64.b64decode(r["data"]))
        print("screenshot saved")

asyncio.run(main())
