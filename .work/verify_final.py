#!/usr/bin/env python3
"""验证最后一页：直接跳到最后一张幻灯片并截图。"""
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
        await asyncio.sleep(2)
        r = await cmd("Runtime.evaluate", {"expression": """
          (function(){
            var slides = document.querySelectorAll('.slide');
            var last = slides[slides.length-1];
            window.__go ? 0 : 0;
            return JSON.stringify({
              total: slides.length,
              lastTitle: last.getAttribute('data-title'),
              lastIndex: Array.from(slides).indexOf(last),
              qr: !!last.querySelector('img[src*="qr-opc-article"]'),
              link: !!last.querySelector('a[href*="sohu.com"]')
            });
          })()"""})
        print("STATE:", r["result"]["value"])
        # 用键盘 End 直达最后一页
        await cmd("Runtime.evaluate", {"expression": """
          document.dispatchEvent(new KeyboardEvent('keydown', {key:'End'}))"""})
        await asyncio.sleep(1.5)
        r = await cmd("Page.captureScreenshot", {"format": "png"})
        with open("/Users/fangchen/Desktop/Jiangsu Finance/.work/final-slide.png", "wb") as f:
            f.write(base64.b64decode(r["data"]))
        print("screenshot saved")

asyncio.run(main())
