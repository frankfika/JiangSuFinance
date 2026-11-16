# frankfika 产品 Demo 视频 · 制作说明

**成品**：`out/frankfika-demo.mp4` — 1920×1080 / 30fps / H.264+AAC / 73 秒 / 11.7 MB

## 素材来源（全部真实录制，没有摆拍、没有 mockup）

所有产品画面都是用 Playwright 驱动 Chromium **实时访问线上站点 https://www.frankfika.com 录屏**得到的，
交互是脚本真实点击的结果 —— 包括把「测测缘分」五关从头答完、拿回真实的匹配分和雷达图报告。

| 镜头 | 来源 | 说明 |
|---|---|---|
| 首页手写动画 | 线上首页 | 手写体「你好，我是陈放」逐笔写出 + 网点肖像 |
| AI 分身对话 | 线上首页 | 真实提问，站点返回带出处的检索卡片 |
| 公开履历滚动 | 线上首页 | 几个数字 / 能负责什么 / 做成了的事 / 写过的代码 |
| 测测缘分开场 | 线上首页 | 选目的、填生日，服务端实时算命理 |
| 星座 + 八字 | 线上首页 | 真实得分 90 / 90，五行柱状对比 |
| 五关答完出结果 | 线上首页 | 答完 15 道题 → 匹配度 58 + 五维雷达图 + AI 报告 |
| 快捷入口 | 线上首页 | 点「成果」，返回对应内容卡片 |
| 英文版 | 线上首页 | 切 EN，手写体换成 "Hi, I'm Frank Chen" |

**关于 AI 后端**：录制期间线上 `/api/chat` 的模型服务返回 "AI is temporarily unavailable"，
站点按设计回退到本地关键词检索 + 出处引用卡片。视频里展示的就是访客真实会看到的那一屏，
没有伪造模型回答。

## 动效标题卡

5 张标题卡是 HTML/CSS 写的动效（不是静态图），用 Chromium 逐帧截图成 PNG 序列再编码成视频，
所以文字是真正「动」起来的：栅格淡入、光晕扩散、标题逐行上推、卡片逐个弹入、顶边擦除。

- `build/cards/01-title.html` 标题卡「不是简历网站，是一个能聊天的我」
- `build/cards/02-features.html` 三类能力
- `build/cards/03-match.html` 五关结构
- `build/cards/04-stack.html` 技术栈
- `build/cards/05-outro.html` 结尾 CTA

字体：Inter / Space Grotesk / JetBrains Mono + Noto Sans SC（已下载到 `build/fonts/`，本地加载，不依赖网络）

## 视觉风格

硅谷产品发布风格，和站点本身「纸上墨」的安静风格刻意区分开：

- 近黑底色 `#05070a`，网格 + 双向光晕
- 主色薄荷绿 `#3ddc97`，辅色 `#5b8cff`
- 等宽字做标签和眉题，Noto Sans SC 做中文标题
- 录屏画面加了轻微 Ken Burns（缓慢推近/拉远），避免静态截屏的呆板

## 音乐

**Crypto** by Kevin MacLeod — <https://incompetech.com/music/royalty-free/music.html>
许可：CC BY 4.0（署名即可商用）
在视频中做了淡入淡出 + `loudnorm` 标准化（mean -17.1 dB / peak -3.7 dB）

## 重新生成

```bash
cd ~/Desktop/Jiangsu\ Finance/frankfika-demo/build
PW_ROOT=~/Baidu/GitHub/Frankfika/website node record.mjs ../rec     # 重新录屏
PW_ROOT=~/Baidu/GitHub/Frankfika/website node render_cards.mjs cards ../assets  # 重新渲染标题卡
bash prep.sh        # 归一化 + 渲染卡片视频
bash assemble.sh    # 剪辑 + 配乐 + 输出
```

注意：站点 `/api/match/quiz` 按 IP 限流（10 分钟窗口 12 次），反复录制会撞 429，
脚本失败时先等窗口过期再跑。

## 产出文件

| 文件 | 用途 |
|---|---|
| `out/frankfika-demo.mp4` | 主版本 16:9 |
| `out/frankfika-demo-web.mp4` | 压缩版，用于网页嵌入 |
| `out/frankfika-demo-vertical.mp4` | 9:16 竖版，适配短视频平台 |
