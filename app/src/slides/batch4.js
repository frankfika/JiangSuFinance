/* batch4 — P35/P36/P36A/P37/P38-40/P42/P43/P70 */
(function () {
  var H = '';

  H = '';
  H += SK.k('别混成一件事') + SK.h('RAG、知识库和微调：别混')
    + SK.sub('三样东西各管一段，混起来谈，选型就一定出错。')
    + SK.bullets([
      '知识库：把允许使用的文件<b>管起来</b>，供检索。',
      'RAG：在库里检索 → 把命中片段注入上下文 → 再生成。<b>一种用法</b>。',
      '微调：用范文让模型更像你们的格式和说法。<b>不替代检索</b>，也记不住今后才产生的新文件。',
      '顺序：能用"对话 + 当场附文件"解决的，不必上知识库；',
      '能用 RAG 按文件答的，不必谈微调。'
    ])
    + SK.oneline('先问"要解决哪一段"，再决定用哪一层。', '次第', 'ink');
  SK.add('RAG、知识库和微调：别混', H);

  H = '';
  H += SK.k('Fine-tuning') + SK.h('微调与 LoRA')
    + SK.sub('改的是"写法习惯"，不是自动拥有最新内部文件。')
    + SK.bullets([
      '用本单位范文继续调整模型，让它熟悉你们的<b>结构、术语和口气</b>。',
      '何时值得：同类文稿很多、格式口径相对固定。',
      '何时不必：偶尔起草一稿，提示词加知识库就够了。'
    ])
    + SK.table(
      ['路线', '做法', '特点'],
      [
        ['全参数微调', '全部权重参与再训练', '上限最高，但贵，且容易"学新忘旧"'],
        ['LoRA', '不动原权重，只训练一小撮附加参数（约 0.1%–1%）', '像给模型别上一本口袋笔记：省算力、可插拔']
      ])
    + SK.p('一个最新证据：2026 年 11 月 Nous Research 的 <b>Arete-27B</b> 用全参数微调只喂了 <b>5280 万 token</b>，就显著改变了模型的表达倾向而能力几乎无损——后训练改"说话方式"，比想象中便宜得多。')
    + SK.p('真实例子对照（注意看<b>路线</b>一列）：')
    + SK.table(
      ['模型', '基座', '路线', '看点'],
      [
        ['Arete-27B（Nous，2026.11）', '阿里 Qwen3.8-27B', '全参数 SFT', '只训 5280 万 token（预训练的零头），倾向性表述 22%→0.9%，能力基准纹丝不动——网上有人说"就是挂了个 LoRA"，<b>错的，是全微调</b>'],
        ['Hermes 4（Nous，2025.08）', 'Llama 3.1 / Qwen 基座', '全参数后训练（SFT+DPO）', '开源界最有名的微调家族；14B 版的基座就是 Qwen，训练数据 60B token，Hermes 系列 Hugging Face 下载超 5000 万'],
        ['DeepSeek-R1-Distill-Qwen', 'Qwen2.5（1.5B–32B）', '全参数蒸馏 SFT', '拿 R1 的思维链答案当课本微调小模型，让 7B/32B 小模型"学会推理"'],
        ['QLoRA / Guanaco（2023）', 'LLaMA 65B', 'LoRA + 4bit 量化', 'LoRA 路线的里程碑：单张 48GB 显卡就能微调 65B 模型'],
        ['Hermes 3 对齐阶段（2024）', 'Llama 3.1', 'DPO 阶段只训 LoRA', '同一家团队：SFT 全训、偏好对齐换 LoRA——<b>两条路线可以按阶段混用</b>']
      ])
    + SK.srcline('报道', 'https://www.marktechpost.com/2026/11/07/nous-research-arete-27b-qwen3-8-27b-propaganda-fine-tune/', 'MarkTechPost：Arete-27B 微调细节（5280 万 token、全参数 SFT）')
    + SK.srcline('论文原文', 'https://arxiv.org/abs/2305.14314', 'QLoRA 论文（2023）：单张 48GB 显卡微调 65B')
    + SK.bullets([
      '怎么选：统一文风格式 → <b>LoRA 足够</b>；教全新知识体系 → 才是全微调，那是信息化项目。',
      '业界共识：<b>九成单位场景 RAG 足够</b>，不要盲目上微调。预算先花在数据工程和评估上。'
    ])
    + SK.srcline('论文原文', 'https://arxiv.org/abs/2106.09685', 'LoRA 论文（2021）：只训 0.1%–1% 的附加参数');
  SK.add('微调与 LoRA', H);

  H = '';
  H += SK.k('Agent') + SK.h('智能体：按步骤做事')
    + SK.sub('产出不再是一句话，而是一次被授权的行动。')
    + SK.bullets([
      '对话助手：你问一句它答一句，产出是<b>文字</b>。',
      '智能体（Agent）：给大模型装上四件套——<b>规划、记忆、工具、循环</b>。它自己拆步骤、调工具、看结果、再决定下一步，直到把事做完。',
      '最小公式：<b>Agent = 大模型（大脑）+ 规划 + 记忆 + 工具 + 循环</b>。循环就是"思考 → 行动 → 观察"反复跑（ReAct），并配轮次上限、预算、出错重规划这些护栏。'
    ])
    + SK.p('页脚引用的那篇文章讲了什么（Anthropic《Building effective agents》，2024.12，全行业"智能体"讨论的分法原文）——它把智能体系统分成两类：')
    + SK.table(
      ['分法', '谁决定下一步', '形态'],
      [
        ['Workflow（工作流）', '人把路径<b>写死在代码里</b>', '五种积木：提示链、路由、并行、编排者-工人、评估者-优化者'],
        ['Agent（智能体）', '<b>模型自己</b>决定过程和工具用法', '一个"思考→行动→观察"的循环，跑到目标达成为止']
      ])
    + SK.p('这篇文章最有名的忠告：<b>从最简方案开始，确有必要才升级</b>——能用一次对话解决的，不必上智能体。')
    + SK.p('对标：它现在能干到哪一档（2026 年 10 月公开榜单）？')
    + SK.table(
      ['榜单', '测什么', '2026 年现状'],
      [
        ['GAIA', '通用助理上网查资料答复杂问题', '榜首 92%，已追平人类'],
        ['SWE-bench', '修真实 GitHub 问题', '一年内 60%→97%，接近"考满"'],
        ['OSWorld', '真操作电脑（看截屏点鼠标）', '榜首 90%，人类基线 72%'],
        ['WebArena', '网页办事（订票、改资料）', '榜首 74%，人类 78%——还差一截'],
        ['τ-bench', '客服式多轮调工具', '最强模型单次约 70%，"连对四次"只剩 56%——<b>可靠性是短板</b>']
      ])
    + SK.p('一把统一的尺子——METR"任务长度"：以"熟练的人要干多久"计时，智能体能独立完成的任务，从 2023 年 GPT-4 的约 <b>4 分钟</b>，涨到 2026 年初的约 <b>12 小时</b>，约每 <b>4 个月翻一倍</b>；考卷趋近"考满"，METR 已于 2026 年 9 月停止更新该榜。斯坦福《AI Index 2026》称之为"<b>锯齿状前沿</b>"：软件类近满分，读模拟钟只有 50%。')
    + SK.p('三个真实案例：① <b>Manus</b>（中国团队蝴蝶效应，2025.3 发布"全球首款通用智能体"，引发全球跟进）；② <b>Claude Code</b>（编程智能体，上线半年年化收入 10 亿美元，引爆 2026 年办公智能体大战）；③ 有客户报告 Claude Fable 5.1 一次<b>无人值守连续跑了 38 小时</b>。')
    + SK.bullets([
      '财政的对应姿势：让它"<b>查制度、核进度、出清单</b>"是智能体；让它"发邮件、改文件、付资金"必须人确认。',
      '风险同步放大：写错一段话删掉就行；做错一件事（发错邮件、删错文件）<b>就是事故</b>。'
    ])
    + SK.oneline('能动手就意味着要担责，权限设计要走在前面。', '慎', 'green')
    + SK.srcline('框架文章', 'https://www.anthropic.com/research/building-effective-agents', 'Anthropic《Building effective agents》：Workflow 与 Agent 的分法、五种工作流积木、从最简方案开始')
    + SK.srcline('能力标尺', 'https://metr.org/time-horizons/', 'METR 任务长度：2023 年约 4 分钟 → 2026 年初约 12 小时，2026-09 停更')
    + SK.srcline('榜单汇总', 'https://decodethefuture.org/en/ai-agent-benchmarks-2026/', '2026-10 GAIA / SWE-bench / OSWorld / WebArena / τ-bench 各榜口径');
  SK.add('智能体：按步骤做事', H);

  /* MCP、A2A、Skill 各自独立成页：proto-mcp.js / proto-a2a.js / proto-skill.js */

  H = '';
  H += SK.k('Selection') + SK.h('选型五问')
    + SK.sub('不必先学新词，先问五件事。')
    + SK.bullets([
      '<b>评测</b>：上线前有没有用我们关心的任务测过？',
      '<b>权限</b>：谁能用、能看哪些文件、能不能外发，管不管得住？',
      '<b>日志</b>：用过什么、生成了什么，事后查不查得到？',
      '<b>拦截</b>：涉密、敏感输入，拦不拦得住？',
      '<b>可回退</b>：模型或配置改坏了，能不能退回上一版？'
    ])
    + SK.p('再加<b>第六问（2026 年的教训）</b>：供应链——这家平台绑定的模型哪天停服、下架了怎么办？模型可替换吗？')
    + SK.oneline('选型不是比谁更聪明，是比谁的边界更清楚。', '五问', 'green');
  SK.add('选型五问', H);

  H = '';
  H += SK.k('Harness') + SK.h('Harness 工程')
    + SK.sub('模型 + Harness = 智能体。')
    + SK.p('模型是发动机，Harness（驾驭框架）是底盘、传动、仪表盘和刹车。同一台发动机，装在不同底盘上，就是轿车和卡车的区别。')
    + SK.bullets([
      'DeepSeek Harness（dsh）：<b>2026 年 8 月以 MIT 协议开源</b>的智能体运行框架。',
      '设计哲学一句话：<b>一切皆插件</b>。模型适配器、工具、沙箱、审批策略、会话管理——连"智能体思考循环"本身都是插件，没有特权内核。',
      '内核叫 Cordis，只做三件事：挂载插件、卸载插件、检查依赖。<b>热插拔</b>，不打断正在跑的长任务。',
      '可观测性：<b>追记式日志是唯一真相源</b>——"模型看到的一切，必须写进日志"，天然支持回放和审计。',
      '和传统框架的区别：传统框架想换一环要改源码；它换模型、换审批策略，挂个插件就行。'
    ])
    + SK.srcline('源码', 'https://github.com/deepseek-ai/deepseek-harness', 'deepseek-ai/deepseek-harness')
    + SK.img('images/dsh-readme.png', 'dsh 命令行入口文档：dsh web 一条命令起 Web UI，dsh plugin 管理插件', 'IT之家报道截图：@deepseek-ai/dsh 文档')
    + SK.srcline('报道', 'https://www.ithome.com/0/989/446.htm', 'IT之家：DeepSeek Harness 公测，同步开放插件生态');
  SK.add('Harness 工程', H);

  H = '';
  H += SK.k('DeepSeek Harness') + SK.h('DeepSeek Harness 深度解读')
    + SK.sub('模型是大脑，Harness 是神经系统、四肢和工作纪律。')
    + SK.table(
      ['层', '内容'],
      [
        ['Cordis 内核', '只管挂/卸插件、查依赖，热插拔'],
        ['核心插件包', '模型适配、工具、沙箱、审批策略'],
        ['应用层', '浏览器应用 / 批量运行器'],
        ['用户配置层', '任何一行配置可替换']
      ])
    + SK.bullets([
      '<b>操作路径</b>（认知，不要求装）：一条命令起 Web UI → 一条命令看整棵插件树 → 插件市场选装 → 改配置不动源码。',
      '<b>插件模式</b>：改行为靠挂插件，不靠改源码。社区已涌现细粒度权限审批、上下文压缩、长期记忆等插件。',
      '<b>权限</b>：社区权限插件给出命令级白名单/黑名单/询问的细粒度审批，纯离线运行。',
      '<b>可观测</b>：回放一次完整任务，每次上下文注入、每次工具调用都在日志里。',
      '<b>生态</b>：开源当天就有第三方插件，创新从官方路线图里解放出来。'
    ])
    + SK.p('和之前产品的区别：Claude Code / Codex 是"产品化的 Harness"（好用但封闭）；它是<b>"可拆开的 Harness"</b>（每个零件可换可审）。')
    + SK.oneline('以后评估任何智能体平台，就问——它的每一环，能不能换、能不能查？', '可拆', 'ink');
  SK.add('DeepSeek Harness 深度解读', H);

  /* 原"深度解读"页内容过多，图单独成页 */
  H = '';
  H += SK.k('DeepSeek Harness') + SK.h('DeepSeek Harness 深度解读 · 看图')
    + SK.sub('一个内核 + 一切皆插件：仓库、Web UI、插件面板长什么样。');
  H += SK.img('images/deepseek-harness.png', 'DeepSeek Harness GitHub 仓库首页', 'GitHub 仓库首页')
    + SK.img('images/dsh-webui.png', 'dsh Web UI「探索未至之境」预览版：标准 / PTC / 极简 / 创造四种模式', 'IT之家报道截图：Web UI')
    + SK.img('images/dsh-plugins.png', '插件管理面板：模型、工具、沙箱、存储、循环、调度全是可装卸的插件', 'IT之家报道截图：插件列表')
    + SK.srcline('源码', 'https://github.com/deepseek-ai/deepseek-harness', 'deepseek-ai/deepseek-harness');
  SK.add('DeepSeek Harness 深度解读（图）', H);
})();
