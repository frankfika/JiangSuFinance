#!/usr/bin/env python3
"""验证 WAIC 页新位置与图片，并截图。"""
import asyncio, json, base64
import websockets

WS = "ws://127.0.0.1:19324/devtools/page/34BB0350B448F02D93608A03BDD99F3C"

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
        await asyncio.sleep(2.5)
        r = await cmd("Runtime.evaluate", {"expression": """
          (function(){
            var t = Array.from(document.querySelectorAll('.slide')).map(s=>s.getAttribute('data-title'));
            var wi = t.indexOf('课后就能试：报名 AI 大赛');
            var quiz = t.indexOf('课堂互动');
            var last = t[t.length-1];
            var slide = document.querySelectorAll('.slide')[wi];
            return JSON.stringify({
              total: t.length,
              waicIndex: wi, quizIndex: quiz,
              lastTitle: last,
              rightAfterQuiz: wi === quiz + 1,
              imgs: Array.from(slide.querySelectorAll('img')).map(i=>i.src.split('/').pop())
            });
          })()"""})
        print("STATE:", r["result"]["value"])
        d = json.loads(r["result"]["value"])
        # 翻到该页截图
        n = d['waicIndex'] + 1
        await cmd("Runtime.evaluate", {"expression": f"var i=document.getElementById('jumpInput'); i.value='{n}'; i.dispatchEvent(new Event('change'));"})
        await asyncio.sleep(1.2)
        r = await cmd("Page.captureScreenshot", {"format": "png"})
        with open("/Users/fangchen/Desktop/Jiangsu Finance/.work/waic-slide.png", "wb") as f:
            f.write(base64.b64decode(r["data"]))
        print("screenshot saved")

asyncio.run(main())
