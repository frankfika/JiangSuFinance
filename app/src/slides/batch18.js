/* batch18 — 深度解读补页：Harness 四模式 + OpenClaw 生态全貌 */
(function () {
  /* ---- 1. DeepSeek Harness 的四种模式 ---- */
  var H = '';
  H += SK.k('Deep Dive · DeepSeek Harness') + SK.h('DeepSeek Harness 的四种模式');
  H += SK.sub('同一个 Cordis 内核，四种"出厂装配"——模式不是四个产品，是四套默认插件组合');
  H += SK.cards([
    { n: '壹', title: '标准模式', body: '完整工具组合，日常干活用这个——文件、终端、浏览器一应俱全，相当于"满配出厂"。' },
    { n: '贰', title: 'PTC 模式', body: '程序化工具调用（Programmatic Tool Calling）：模型先写一段代码，用这段代码去编排多轮工具调用——从"一步一问"变成"写个脚本批量跑"。' },
    { n: '叁', title: '极简模式', body: '只留一个 shell 工具和一个文件编辑工具，用于最小环境下的模型基准测试——把变量控制到最少，专门考模型的裸实力。' },
    { n: '肆', title: '创造模式', body: '可以检查当前运行时、在内存里试验 Cordis 插件，然后据此组合、创作出新的模式——智能体开始给自己写装配单。' }
  ]);
  H += SK.p('上课时值得停下来讲的是<b>肆 · 创造模式</b>：它让智能体自己检查自己、改装自己——这和 OpenClaw 的技能市场遥相呼应，只是一个由官方框架托管、一个由社区野装。<b>PTC 模式</b>则是工程味最重的一个：把多轮工具调用收敛成一段程序，少走弯路、少花 token，是"会用工具的模型"和"会编排工具的模型"的分水岭。');
  H += SK.table(['命令', '干什么'], [
    ['dsh --profile &lt;name&gt;', '启动指定的配置文件（选哪套装配单）'],
    ['dsh --profile headless "job"', '跑一次性任务：打印最终答案，退出'],
    ['dsh web', '一条命令起 Web 界面'],
    ['dsh plugin --profile &lt;name&gt;', '管理插件（装、卸、看依赖）']
  ]);
  H += SK.img('images/dsh-webui.png', 'dsh Web UI「探索未至之境」预览版：标准 / PTC / 极简 / 创造四种模式', 'IT之家报道截图：四种模式在 Web UI 里就是四个入口');
  H += SK.oneline('选模式就是选装哪些插件——模式即装配单。', '装配单', 'ink');
  H += SK.srcline('报道', 'https://www.ithome.com/0/989/446.htm', 'IT之家：DeepSeek Harness 四种模式原文');
  H += SK.srcline('源码', 'https://github.com/deepseek-ai/deepseek-harness', 'deepseek-ai/deepseek-harness');
  SK.add('DeepSeek Harness 的四种模式', H);

  /* ---- 2. OpenClaw 生态全貌 ---- */
  H = '';
  H += SK.k('Deep Dive · OpenClaw') + SK.h('OpenClaw 生态全貌');
  H += SK.sub('先正名：它前身叫 Clawdbot、Moltbot，因名字太像 Claude，应 Anthropic 要求改成了 OpenClaw——改名之后，它长成了一个大生态');
  H += SK.cards([
    { n: '壹', title: '聊天渠道接入', body: 'WhatsApp、Telegram、钉钉、飞书……消息从聊天软件进来，结果发回聊天软件——你平时待在哪，它就待在哪。' },
    { n: '贰', title: 'ClawHub 技能市场', body: '3000+ 技能插件的分发平台，装技能像装手机 App。同一条管道也是风险的入口：约 12% 的第三方技能被确认是恶意软件（见风险页）。' },
    { n: '叁', title: '子 Agent', body: '主 Agent 可以派生并并行调度多个子 Agent，一项大活拆给几个"徒弟"同时干——还记得前面画的五层架构里第④层那栏吗，就是它。' },
    { n: '肆', title: 'Moltbook', body: 'AI 智能体自己的社交平台：上百万智能体互相发帖、关注、评论，人类只能围观——生态热闹到这个程度，全世界也是头一份。' }
  ]);
  H += SK.bullets([
    '<b>对极客，这是游乐园</b>：渠道随便接、技能随便装、子 Agent 随便派，GitHub 上 14.5 万 Star（后来涨到 39 万）就是这么来的。',
    '<b>对机关，同一套东西是风险清单</b>：每一个"随便接"都是一条数据出口，每一个"随便装"都是一次供应链投毒的机会。',
    '<b>判断标准不变</b>：批准环境 + 可审计的企业级框架 + 白名单工具——生态再热闹，也不改变这三条的先后顺序。'
  ]);
  H += SK.oneline('同一个生态，在极客眼里是乐园，在机关眼里是清单。', '两面', 'green');
  H += SK.srcline('源码', 'https://github.com/openclaw/openclaw', 'openclaw/openclaw（前身 Clawdbot / Moltbot）');
  SK.add('OpenClaw 生态全貌', H);
})();
