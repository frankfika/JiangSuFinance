/* batch6 — 工具专题：OpenClaw / Manus / 办公助手 / 个人助手 / 视频 / REA */
(function () {
  var H = '';
  /* 两列截图条：items = [[src, caption], ...] */
  function shotrow(items) {
    return '<div class="shotrow rise">' + items.map(function (i) {
      return '<figure><img src="' + i[0] + '" alt="' + i[1] + '"/><figcaption>' + i[1] + '</figcaption></figure>';
    }).join('') + '</div>';
  }

  /* ---- P63 OpenClaw：能力上限 ---- */
  H = '';
  H += SK.k('Bot / Crawl 类') + SK.h('OpenClaw：能力上限');
  H += SK.sub('2026 年初爆火的开源个人智能体框架，GitHub 14.5 万+ Star');
  H += SK.bullets([
    '<b>自托管</b>在你自己电脑上，接大模型当"大脑"',
    '通过 <b>3000+ 插件</b>直接操作鼠标键盘、文件、浏览器',
    '可以替你网购、发邮件、管日历——真的动手，不只是聊天',
    '伴生现象：AI 智能体社交平台 <b>Moltbook</b>，百万智能体互相发帖；课堂只放截图和报道，<b>不安装、不演示</b>',
    '来历：前身 <b>Clawdbot / Moltbot</b>——因名称近似 Claude，应 Anthropic 要求才改名为 <b>OpenClaw</b>'
  ]);
  H += SK.oneline('第一次让普通人感到"AI 真的在替我动手"。', '能力', 'green');
  H += SK.img('images/openclaw.jpg', 'OpenClaw 官网首页：THE AI THAT ACTUALLY DOES THINGS', '官网截图：替你清邮箱、发邮件、管日历');
  H += SK.img('images/openclaw-repo.png', 'openclaw/openclaw GitHub 仓库首页', 'GitHub 仓库：39 万+ Star 的开源个人智能体');
  H += SK.srcline('GitHub 仓库', 'https://github.com/openclaw/openclaw', 'openclaw/openclaw（自托管、插件市场 ClawHub）');
  H += SK.srcline('科技日报报道', 'https://www.stdaily.com/web/gdxw/pic/2026-02/12/473654_4dd32a95-e66a-481c-a901-cd38c69ac4d4.png', 'OpenClaw 报道配图');
  SK.add('OpenClaw：能力上限', H);

  /* ---- P83 OpenClaw：风险下限 ---- */
  H = '';
  H += SK.k('安全红线 · 同款产品另一面') + SK.h('OpenClaw：风险下限');
  H += SK.sub('2026 年 2 月工信部 NVDB 发布安全预警；企业侧的落地是"批准环境清单"（第七块红线）');
  H += SK.bullets([
    '<b>暴露面</b>：年初全球超 <b>13.5 万个</b>实例暴露公网，<b>1.2 万余个</b>存在远程代码执行漏洞，管理界面默认无需认证',
    '<b>供应链投毒</b>：技能市场约 <b>12%</b> 的技能是恶意软件——伪装交易机器人、财务助手，实窃密码和云凭证',
    '<b>高危漏洞</b>：CVE-2026-25253（8.8 分）——任何网站可静默接管，无需插件、无需交互',
    '<b>真实失控</b>：Meta 安全负责人测试时，它因上下文压缩丢失安全指令，强删她邮箱里 <b>200 多封邮件</b>',
    '<b>企业反应</b>：韩国多家科技巨头明令禁止员工在办公设备上使用',
    '<b>安全界共识</b>：<b>提示注入 + 凭证访问 + 外联</b>是致命三重奏（CrowdStrike、Bitdefender、思科一致警告）'
  ]);
  H += SK.oneline('① 风险 = 能力 × 权限 × 暴露面，OpenClaw 三项全拉满；② "开源"只保证代码可看，不保证使用安全。', '钉死', 'ink');
  H += SK.srcline('工信部 NVDB', 'https://nvdb.org.cn/publicAnnouncement/2019330237532790786', '《关于防范 OpenClaw 开源智能体安全风险的预警提示》');
  SK.add('OpenClaw：风险下限', H);

  /* ---- P63B Manus 收购大戏 ---- */
  H = '';
  H += SK.k('通用智能体') + SK.h('Manus 收购大戏');
  H += SK.sub('2025 年 3 月中国团队蝴蝶效应（肖弘等）发布"全球首款通用智能体"，给一个目标，它自己在云端虚拟机上规划、执行、交付');
  H += SK.bullets([
    '到 2025 年底已处理 <b>147 万亿 token</b>、创建 <b>8000 万台</b>虚拟计算机，年化收入 <b>4 亿美元</b>',
    '证明了<b>通用智能体的产品形态成立</b>，后面的办公智能体都在跟进',
    '把"你下班、它干活"的<b>异步任务</b>做成主流交互',
    '资本大戏：<b>2025.12</b> Meta 约 20 亿美元收购 → <b>2026.1</b> 商务部启动评估 → <b>2026.4</b> 国家发改委外商投资安全审查依法禁止 → <b>2026.9</b> 恢复独立运营，腾讯等购回股份，腾讯成最大股东',
    '关键是 <b>4 月 27 日</b>那一步：不是舆论叫停，是<b>法定审查程序依法禁止并要求撤销交易</b>——境外注册也躲不开实质审查'
  ]);
  H += SK.oneline('AI 智能体已是大国博弈的战略资产；选工具时，资本与合规背景也是稳定性的一部分。', '大戏', 'ink');
  H += SK.img('images/manus.png', 'Manus 官网：What can I do for you?', '官网截图：一句话委托，它替你做完');
  H += SK.srcline('Manus 官方博客', 'https://www.manus.im/zh-cn/blog/manus-resumes-independent-operations', 'Manus 恢复独立运营（2026-09-01）');
  SK.add('Manus 收购大戏', H);

  /* ---- P64 AI 办公四助手（总览） ---- */
  H = '';
  H += SK.k('工作助手类') + SK.h('AI 办公四助手');
  H += SK.sub('2026 年是"AI 办公元年"：7 月全行业月活 1.02 亿、总使用次数同比翻倍（QuestMobile）。主线——从聊天框到数字同事');
  H += SK.cards([
    { n: '1', title: '腾讯 WorkBuddy', body: 'CodeBuddy 团队出品。3 月个人版发布、6 月企业版（198 元/人/月）；7 月 PC 端月活 658.2 万居行业第一；SkillHub 7 万+ 技能、100+ 领域专家；<b>10 月与企业微信官宣联合</b>，企微 5.0.12 内置' },
    { n: '2', title: 'Claude Cowork', body: '办公智能体的"祖师爷"（1.13 研究预览）；4 月企业级 GA（RBAC/SCIM）；7 月扩至网页+移动端；<b>9 月并入统一 Claude 入口</b>。120 万条会话：业务流程 33.4%，软件开发仅 8.7%' },
    { n: '3', title: '豆包工作', body: '8.25 发布：豆包 + 飞书 + 火山引擎三线整合；操作浏览器与本地电脑、云电脑关机续跑、手机远程操控、106 个技能；新用户送 30 天订阅。飞书用户首选' },
    { n: '4', title: '千问办公', body: '8.3 公测：QoderWork、骡子快跑、悟空三合一，深度绑定钉钉；搭载 Qwen3.8-Max；首月迭代 120 版、9.4 用户破 3000 万；8.18 接入企业微信。数据分析与 PPT 是长项' }
  ]);
  H += SK.p('横评一句话：<b>先选生态，再选功能</b>——飞书选豆包工作，钉钉选千问办公，企业微信选 WorkBuddy。实测共识：<b>豆包快而善创、千问慢而精准、WorkBuddy 长于协同纪要</b>。共同的坑：幻觉和数据安全。');
  H += SK.p('<b>2026 大事记</b>：1.13 Claude Cowork 研究预览（品类起点，当月全球 SaaS 股大跌、印度软件商市值蒸发超 470 亿美元）→ 1.30 阿里 QoderWork、2.6 腾讯 WorkBuddy 内测，"桌面 Agent"赛道被点燃 → 6 月 WorkBuddy 企业版、钉钉换帅 → 8.3 千问办公三合一公测、8.25 豆包工作发布 → 9 月 WorkBuddy 开放平台、Cowork 并入统一 Claude → 10.14 WorkBuddy×企业微信官宣。');
  H += shotrow([
    ['images/workbuddy-top.jpg', 'WorkBuddy 官网：全场景 AI 办公工作台'],
    ['images/claude-cowork-top.jpg', 'claude.com：9 月起 Cowork 并入统一入口'],
    ['images/doubao-work.png', '豆包电脑版："对话 / 工作"双模式'],
    ['images/qwenwork.png', '千问办公客户端：从任务到交付']
  ]);
  H += SK.oneline('不只给建议，直接操作电脑交付成果。', '办公', 'green');
  H += SK.srcline('财新封面报道', 'https://weekly.caixin.com/2026-10-09/102491720.html', '《抢占办公室》：互联网巨头争夺 AI 办公入口');
  H += SK.srcline('WorkBuddy 官网', 'https://www.workbuddy.cn', '腾讯 WorkBuddy（AI Agent 办公新范式）');
  SK.add('AI 办公四助手', H);

  /* ---- P64A 深看：WorkBuddy ---- */
  H = '';
  H += SK.k('工作助手 · ① 深看') + SK.h('腾讯 WorkBuddy：从内部公测到"企微御用数字员工"');
  H += SK.sub('CodeBuddy 团队打造；2026 年 7 月 PC 端办公 Agent 月活 658.2 万，规模与频次双第一');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '<b>2025.12–2026.2</b>：腾讯内部两轮公测——400 个名额 4 小时抢空，扩至 2000+ 员工，日活留存约 60%',
    '<b>2026.2.6</b>：腾讯云宣布桌面 Agent WorkBuddy 启动内测，明确定位<b>非技术职场人群</b>',
    '<b>2026.3</b>：个人版发布，首月访问量 885 万，登顶国内 PC 端 AI 原生办公智能体榜首',
    '<b>2026.6</b>：企业版发布（198 元/人/月），全平台月活破 2000 万、日活超 1300 万',
    '<b>2026.8</b>：首批接入混元新一代旗舰 Hy4 preview（770B、1M 上下文）',
    '<b>2026.10.14</b>：与企业微信官宣深度联合——企微 5.0.12 起内置，权限内的消息、文档、会议直接变成它的"生产资料"'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '给目标不给步骤：自己拆任务、调模型、调技能，交付可验收的成果（PPT、看板、报告）',
    'SkillHub 技能市场 <b>7 万+ 技能</b>、200+ 预置技能包，<b>兼容 OpenClaw 技能</b>',
    '内置混元 / DeepSeek / GLM / Kimi / MiniMax，支持企业私有模型接入；覆盖 12 大行业、140+ 专业角色',
    '远程遥控：在企业微信 / QQ / 飞书 / 钉钉里发指令，电脑端与云端继续执行',
    '短板也摆出来：积分消耗偏快、长任务偶发卡顿、PPT 版式终稿仍需人工调整——<b>对外公文、含关键数字的交付物必须人工复核</b>'
  ]);
  H += SK.img('images/workbuddy.png', 'WorkBuddy 官网与客户端', '官网首页 + 客户端：新建任务 / 助理 / 项目 / 专家·技能·连接器，一句话"今天帮你做些什么？"');
  H += SK.oneline('国内办公 Agent 的第一张名片：入口在企业微信里。', 'WorkBuddy', 'green');
  H += SK.srcline('WorkBuddy 官网', 'https://www.workbuddy.cn', 'workbuddy.cn（下载 / 定价 / 文档）');
  H += SK.srcline('QuestMobile 行业数据转引', 'https://news.mydrivers.com/1/1157/1157306.htm', '2026 年 7 月 AI 办公 Agent 行业报告：WorkBuddy 月活第一');
  SK.add('深看：WorkBuddy（腾讯）', H);

  /* ---- P64B 深看：Claude Cowork ---- */
  H = '';
  H += SK.k('工作助手 · ② 深看') + SK.h('Claude Cowork：办公智能体的"祖师爷"');
  H += SK.sub('2026.1.13 研究预览首发；9 月与 Claude Chat 合并为统一 Claude——"说需求，它自己判断是回答还是开工"');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '<b>2026.1.13</b>：随 Claude 桌面端发布研究预览（Max 订阅可用）；开发团队用 Claude Code 大约<b>两周</b>做完——AI 写 AI 工具的标志性案例',
    '<b>冲击波</b>：发布当月全球 SaaS 股持续走弱，印度软件外包商市值蒸发超 <b>470 亿美元</b>——媒体称为软件股的"Cowork 时刻"',
    '<b>带动效应</b>：1.30 阿里 QoderWork、2.3 MiniMax 桌面 Agent、2.6 腾讯 WorkBuddy 内测——中国"桌面 Agent"赛道被它点燃',
    '<b>2026.4</b>：企业级 GA——RBAC、SCIM、预算管理、Zoom MCP 连接器，补上 CIO 要的治理层',
    '<b>2026.7.7</b>：扩展网页端 + 移动端，跨设备管理云端长任务；<b>7.21</b> 上线"录制技能"——录屏 + 语音讲一遍，教会它重复性操作',
    '<b>2026.9</b>：与 Claude Chat 合并为统一入口，Cowork 作为产品名退出历史舞台'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '授权本地文件夹后自主执行多步任务：把堆了 80 个文件的下载夹按类型分类、统一命名',
    '创建文档、制定计划、分析数据；MCP 连接器接 Gmail / 日历 / Slack / Chrome',
    '定时任务云端执行、免开机——设置"周一 6 点准备客户材料"，到办公室时已干完',
    '官方分析 120 万条匿名会话：<b>业务流程与运营 33.4%、内容创作 16.4%、软件开发仅 8.7%</b>——九成用途与编程无关'
  ]);
  H += SK.img('images/claude-cowork.jpg', 'claude.com 统一入口', '官网：Question what\u2019s next——登录后同一入口，自动判断聊天还是开工');
  H += SK.oneline('常规 Claude 教你做，Cowork 直接帮你做完。', '电子实习生', 'green');
  H += SK.srcline('DataCamp 教程', 'https://www.datacamp.com/zh/tutorial/claude-cowork-tutorial', 'Claude Cowork 使用教程与产品沿革');
  H += SK.srcline('澎湃：扩展至网页端与移动端', 'https://www.thepaper.cn/newsDetail_forward_33563080', '120 万条会话的场景分布（2026-07-11）');
  SK.add('深看：Claude Cowork（Anthropic）', H);

  /* ---- P64C 深看：豆包工作 ---- */
  H = '';
  H += SK.k('工作助手 · ③ 深看') + SK.h('豆包工作：飞书生态的 AI 同事');
  H += SK.sub('2026.8.25 发布，豆包 + 飞书 + 火山引擎三线整合；国内首批"办公智能体能力 + 云端基准"双认证');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '<b>组织先行</b>：7.30 飞书产品团队并入豆包（谢欣向豆包负责人赵祺汇报）；8.24 TRAE、扣子（Coze）团队整体并入——字节把 AI 力量全部收拢到豆包体系',
    '<b>2026.8.25</b>：正式发布"豆包工作"；电脑版官网可下载，也内置于最新豆包电脑版，<b>发布即送 30 天订阅</b>',
    '发布次日（8.24 更新）豆包隐私政策点名"豆包工作端"：任务模式可按需临时调用浏览器点击输入——能力边界白纸黑字写进政策',
    '8.31–9.28 飞书官方社区连续一个月核心能力培训；抖音系 TRAE Work 7 月月活 190.4 万，办公经验全盘押上'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '写方案、整理纪要、起草报告、做表格、分析数据；还能生成图片、视频、网页甚至简易应用',
    '<b>"指哪改哪"</b>：框选文档 / 表格 / PPT / 网页的任意局部直接改，不整段重生成——省算力也省时间',
    '授权后操作浏览器与本地电脑：跨软件搜集资料、比对、填表、跑专业软件；<b>云电脑后台持续运行，本地关机不中断</b>，手机可远程接续',
    '内置与推荐技能合计 <b>106 个</b>；可组建多 Agent 工作小队（数据、研究、设计并行）',
    '飞书深度打通：登录后继承权限内的聊天记录、文档、会议纪要、日程；产出沉淀回飞书，变成企业可复用知识库'
  ]);
  H += SK.img('images/doubao-work.png', '豆包电脑版"工作"模式', '豆包电脑版界面：左侧"新工作任务 / 项目"，中央"对话 / 工作"双模式切换');
  H += SK.oneline('路径越短，黏性越强——上下文就是生产力。', '上下文', 'green');
  H += SK.srcline('IT之家发布报道', 'https://www.ithome.com/0/993/865.htm', '字节跳动发布"豆包工作"，与飞书深度打通（2026-08-25）');
  SK.add('深看：豆包工作（字节）', H);

  /* ---- P64D 深看：千问办公 ---- */
  H = '';
  H += SK.k('工作助手 · ④ 深看') + SK.h('千问办公：三条产品线拧成的一股绳');
  H += SK.sub('2026.8.3 公测，QoderWork + 骡子快跑（MuleRun）+ 悟空三合一；钉钉新帅陈宇森任一号位');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '三条前身线几乎同时起步：<b>QoderWork</b>（Q-Team，丁宇，2025.8 的 Qoder 曾是阿里办公赛道市占最高）、<b>骡子快跑 MuleRun</b>（S-Team，陈宇森，云端长程 Agent，海外口碑好）、<b>悟空</b>（钉钉 AI 化重构项目）',
    '<b>2026.6.11</b>：钉钉创始人陈航卸任，92 年出生、CTF 战队出身的陈宇森接任，火速推动三线整合',
    '<b>2026.8.3</b>：千问办公公测（网页版 + 独立 PC 客户端），同日发布新一代基座模型 <b>Qwen3.8</b>',
    '公测首月迭代 <b>120 个版本</b>；9.4 注册用户破 <b>3000 万</b>',
    '<b>8.18 接入企业微信</b>——此前已接钉钉、飞书，国内三大协同办公平台全覆盖',
    '分工定型："阿里云卖、钉钉造"；定位<b>企业级</b>生产力平台，短期不考核月活'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '业内首款同时支持<b>桌面端 Agent</b>（本地文件处理）+ <b>云端 Agent</b>（7×24 长程任务）+ <b>企业协同 Agent</b>（IM 打通）三形态的产品',
    '搭载 Qwen3.8-Max：总参数 2.4 万亿、单次推理激活 950 亿、100 万 token 上下文 + 视觉理解',
    '典型玩法：律师做完尽调报告，一键沉淀为"组织级 Skill"向全团队共享；跨国企业用它自动生成英文文档、7×24 在线协同',
    '公测注册送 2000 积分、首周每日登录再领 500–2000；独立 App 端与国际版在规划中'
  ]);
  H += SK.img('images/qwenwork.png', '千问办公客户端', '官方产品图："上午好，千问办公，有什么需要我搞定的？"——任务、扩展、专家套件、连接器、定时任务');
  H += SK.oneline('三合一不是拼盘，是把三条技术线拧成一股绳。', '整合', 'green');
  H += SK.srcline('经济观察网', 'http://www.eeo.com.cn/2026/0803/985067.shtml', '《钉钉震荡两个月后，千问办公三合一》（2026-08-03）');
  H += SK.srcline('千问办公公测报道', 'https://tech.ifeng.com/c/8vHiigz6OT8', '凤凰网科技：整合 QoderWork / MuleRun / 悟空，搭载 Qwen3.8');
  SK.add('深看：千问办公（阿里）', H);

  /* ---- P65 个人助手三件套（总览） ---- */
  H = '';
  H += SK.k('个人助手类') + SK.h('个人助手三件套');
  H += SK.sub('2026 年 8–9 月"个人智能体"爆发——AI 从问答机变成替你办事的代理');
  H += SK.cards([
    { n: '1', title: 'Today（国产，9 月）<span style="color:var(--red);font-size:12px;border:1px solid var(--red);border-radius:99px;padding:1px 8px;margin-left:6px;vertical-align:2px">本课重点</span>', body: 'Teambition 创始人、前豆包 PC 端负责人齐俊元出品（2014 年就买下了 Today.ai 域名）。<b>Living Memory 活记忆 + 默认主动</b>：早晚报、没结束的事它替你盯着；连接邮箱 / 日历 / 笔记等约 32 个服务；云端电脑 24 小时在线，Mac / Windows / iOS / Android 全端，<b>免费 Beta，下课就能装</b>' },
    { n: '2', title: 'Meta Muse（9.8 发布）', body: '约两周登顶美国 App Store 免费榜，下载量与日活双双超 ChatGPT 同期（9 月下载超 250 万）。人人一台云端专属 Secure VM，关了 App 继续干活：订机票、填表单、把收藏食谱变成购物清单。<b>Sentinel 代理把关、支付走一次性卡号</b>。免费 + $20 / $100 订阅' },
    { n: '3', title: 'xAI Grok Bot（8.11）', body: '"AI 同事团队"——多个具名 Bot 共享一台云端电脑并行干活：一个通宵研究客户、一个处理工单；<b>演示一遍就学会</b>，存为例程定时重跑；10 月起按任务自动选用 Claude Opus 5.5 等最佳后端。官方明言"共享电脑不构成安全边界"' }
  ]);
  H += SK.p('<b>爆发月大事记</b>：8.11 Grok Bot Early Beta（内部原型打磨后对外开放）→ 9.8 Meta Muse 发布，次日冲至免费榜第三 → 9 月中下旬 Muse 登顶美区免费榜 → 9.23 Meta Connect：Mac 电脑操控、智能眼镜、专属邮箱、Muse Charm 随身硬件 → <b>9.24 Today 正式发布（国产 · 本课重点）</b> → 10.7 Muse iPad 版；Grok Bot 宣布多模型后端。');
  H += SK.p('共同设计：<b>记忆 + 主动 + 确认后执行</b>——最后一厘米的决定留给人。这也是第七块"安全红线"的活教材。');
  H += shotrow([
    ['images/today-top.jpg', 'today.ai：acts before you ask——记忆面板（重点看它）'],
    ['images/meta-muse-top.jpg', 'ai.meta.com/muse：你晒太阳，它去买生日礼物'],
    ['images/grok-bot.jpg', 'xAI 官方发布图：具名 AI 同事团队（桌面 + iOS）']
  ]);
  H += SK.oneline('记住画面——它们不是聊天机器人，是有身体的代理。', '代理', 'green');
  H += SK.srcline('Meta Muse 官网', 'https://ai.meta.com/muse', 'ai.meta.com/muse（Meta 个人智能体）');
  H += SK.srcline('量子位报道', 'https://m.sohu.com/a/1080496191_610300', '《豆包PC端前负责人，创业 Agent 操作系统 Today》');
  SK.add('个人助手三件套', H);

  /* ---- P65A 深看：Meta Muse ---- */
  H = '';
  H += SK.k('个人助手 · ② 深看') + SK.h('Meta Muse：住在云端虚拟机里的个人代理');
  H += SK.sub('2026.9.8 发布（美加）；上线约两周登顶美区 App Store 免费榜——消费级个人智能体的现象级产品');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    'Meta 超级智能实验室出品，扎克伯格亲自推动；<b>曾因安全考量推迟数月</b>才上线',
    '9.8 登陆 iOS / Android / 网页 / WhatsApp；次日升至免费榜第三；约两周<b>登顶总榜</b>，下载量与日活超 ChatGPT 同期；9 月下载超 250 万，iPhone 版 17.3 万条评分 4.9',
    '产品负责人 Nat Friedman 公开承认：Muse"从零开发"但<b>深受 OpenClaw 启发</b>——工作区文件（含 SOUL.md）与 OpenClaw 几乎一致',
    '9.23 Connect 大会连发四个新入口：Mac 电脑操控、智能眼镜、专属邮箱、Realtime Avatar；还有钥匙扣大小的 <b>Muse Charm</b> 硬件（12 月假日季发货）',
    '10.7 iPad 版 + Canva / Zoom 等第三方连接器；开发者平台开放不到一周收到 1500+ 连接器申请'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '每人一台云端 <b>Secure VM</b>（持久 Linux 环境 + 独立浏览器），关掉 App 它继续跑：订机票、填表单、网购、回邮件、帮你卖旧车（查行情→挂平台→回复买家→协调看车）',
    '自研 <b>Muse Spark 1.3</b> 模型驱动：100 万 token 上下文，能看图、看视频、读文档',
    '安全架构：<b>Sentinel 独立代理</b>审查每一次联网操作；密码与支付存独立凭证库，模型读不到；结账走 Stripe Link 一次性卡号',
    '读写分离、四级审批；发邮件、付款等敏感动作<b>强制人工确认</b>；全程审计轨迹可查；对话数据不进 Meta 广告系统',
    '商业模式：免费 + $20 / $100 两档订阅；扎克伯格放话未来靠<b>交易抽成</b>盈利，而非订阅费'
  ]);
  H += SK.img('images/meta-muse.jpg', 'Meta Muse 官网', '官网整页：Muse does birthday shopping while you do you');
  H += SK.oneline('第一次让普通消费者感到"AI 在替我过日子"。', 'Muse', 'green');
  H += SK.srcline('Meta Muse 官网', 'https://ai.meta.com/muse', 'ai.meta.com/muse');
  H += SK.srcline('OSCHINA 报道', 'https://www.oschina.net/news/502392/meta-ai-muse', 'Meta 发布个人 AI 智能体 Muse（2026-09-09）');
  SK.add('深看：Meta Muse', H);

  /* ---- P65B 深看：Grok Bot ---- */
  H = '';
  H += SK.k('个人助手 · ③ 深看') + SK.h('xAI Grok Bot：一支"配备主管"的常驻 AI 团队');
  H += SK.sub('2026.8.11 Early Beta；先在 SpaceXAI 内部打磨，再对外开放');
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '最初是内部原型：销售外呼、营销、办公室运营、修 Bug 等团队先用起来；曾以代号 <b>Sand</b> 在 Cursor 内测，6 月下旬完成灰度',
    '<b>2026.8.11</b>：以 Early Beta 正式发布——"always-on agents"，关掉电脑任务照跑',
    '8.21 起向 Cursor Pro+ / Teams、SuperGrok Plus 订阅开放；9 月向部分企业开放（旧金山上门接入），客户含 Legora、Supermicro、ServiceTitan',
    '<b>2026.10.7</b>：马斯克宣布多模型后端——按任务自动选用 <b>Claude Opus 5.5</b>、Midjourney、Suno 等"最能出好结果的模型"'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '每个 Bot 一台云端电脑（Linux + 浏览器 + 文件系统 + 终端），<b>没有 API 的老软件也能直接操作界面</b>',
    '具名 Bot 团队：Chief of Staff、Inbox Manager、Sales Outbound、Expense Manager…可并行、群聊里互相派活、交接任务，只在需要决策时呼叫用户',
    '<b>Teach a task</b>：你把流程演示一遍，它存为例程（Routine），之后定时自动重跑——每周报表、CRM 更新从此无人值守',
    '收费捆绑不单独卖：Cursor Ultra $200/月、Teams $120/席位、SuperGrok Heavy 内含',
    '<b>官方自己把丑话说在前面</b>："Bot 在云端共享一台属于它们的计算机"——两个 Bot 不构成两道安全边界'
  ]);
  H += SK.img('images/grok-bot.jpg', 'xAI 官方发布图：Grok Bot 团队', '具名 AI 同事：行政、收件箱、外呼、客服、报销……桌面端 + iOS 双端');
  H += SK.img('images/grokbot-teach.jpg', '官方指南截图：云端电脑 + Teach a task', '它的云电脑开着真实浏览器；"Teach a task"按钮——演示一遍它就会');
  H += SK.oneline('把"AI 同事团队"从比喻做成了产品形态。', '团队', 'green');
  H += SK.srcline('C114 通信网', 'https://www.c114.com.cn/news/16/a1318762.html', '马斯克：Grok Bot 按任务择优调用 Claude 等最佳模型（2026-10-08）');
  SK.add('深看：Grok Bot（xAI）', H);

  /* ---- P65C 深看：Today（重点推荐） ---- */
  H = '';
  H += SK.k('个人助手 · ① 深看 · 本课重点') + SK.h('Today（国产）：最重视记忆、也最主动的个人 Agent');
  H += SK.sub('齐俊元创业新作，2026.9 正式发布——<b>国产、免费、全端可用，本课重点推荐</b>：下课就能装一个亲手体验');
  H += SK.p('<b>为什么重点讲它</b>');
  H += SK.bullets([
    '它是"记忆 + 主动"最完整的中文示范：像一位靠谱的年轻同事——<b>交代的事记得住，有进展会回来汇报，不该打扰时保持沉默</b>',
    '界面只有两块：左侧持续对话流，右侧个人面板（今天 / 任务 / 记忆）；还能给 AI <b>起名字</b>、看它的日记和亲密度——人机关系被做成了产品功能',
    '拿来练手正合适：<b>个人事务</b>放心试；公务数据仍按第七块红线办——什么能进公有云，与工具无关，与纪律有关'
  ]);
  H += SK.p('<b>历史线</b>');
  H += SK.bullets([
    '创始人齐俊元：大三创业 <b>Teambition</b>（2011）→ 2019 年被阿里 1 亿美元收购，变钉钉项目模块 → 接手<b>阿里云盘</b> → 飞书产品副总裁 → 字节 Flow <b>豆包 PC 端负责人</b> → 2025.11 离职创业',
    '<b>2014 年就买下 Today.ai 域名</b>——"个人效率助手"这个念头他惦记了 12 年，直到大模型时代才觉得技术窗口到了',
    '<b>2026.7</b>：首次曝光内测，Mac / iOS / Android 版本已成型；9.8 开启公测，<b>9.24 正式发布</b>',
    '底层模型由<b>阶跃星辰</b>提供支持；公司名"此间无限（上海）智能科技"'
  ]);
  H += SK.p('<b>功能面</b>');
  H += SK.bullets([
    '<b>Living Memory（活记忆）</b>：记住你认识的人、在做项目、偏好，以及"没结束的事"；记忆可查看、修改、删除，还会<b>主动遗忘和压缩</b>——留下的信息越来越有用，而不只是越来越多',
    '<b>Proactive（主动服务）</b>：每日个性化早晚报；发现与你有关的变化主动找你——甚至因为你常用 Codex、关注 AI 产品，主动提醒你留意 GPT-6 发布',
    '关键链路案例：帮你约采访 → 第二天对方回了新邮件 → <b>无需新指令</b>，它主动提醒并把任务接下去推进',
    '连接器约 <b>32 个</b>：Microsoft 365 / Gmail / Notion / Todoist / Dropbox / Zoom / GitHub / 微信 / Apple Health…；云端电脑 24 小时在线，Mac / iPhone / Android 接续执行',
    '定价：当前<b>免费 Beta</b>；订阅页已挂出 Pro $20 / 月、Ultra $200 / 两档',
    '它和通用 Agent 的分野：别家等你带任务来，Today 先把你的邮件、日历、关系、偏好组织成一个围绕你运转的"任务世界"'
  ]);
  H += shotrow([
    ['images/today-brief.jpg', '真实界面①：首份简报 + 右侧"记忆"面板——它对你的了解一目了然'],
    ['images/today-push.jpg', '真实界面②：主动推送"刚扫完邮件，有三件事要告诉你"——紧急的、安全提醒、小事，还预约了明天的跟进'],
    ['images/today-tasks.jpg', '真实界面③：已连接的软件清单（Google / 健康 / Mac 设备…）+ 每日 RSS 定时任务']
  ]);
  H += SK.img('images/today.jpg', 'today.ai 官网', '官网整页：Meet Today —— Your personal assistant that actually knows you, and acts before you ask');
  H += SK.oneline('记忆驱动主动——最后一厘米的决定留给人。', '记忆', 'green');
  H += SK.srcline('Today 官网', 'https://today.ai', 'today.ai（Memories / Proactive / Capabilities）');
  H += SK.srcline('硅星人 Pro 深度体验（截图来源）', 'https://news.qq.com/rain/a/20260908A055UF00', '《它可能是当下最主动的 Personal AI》（2026-09-08，一周实测）');
  SK.add('深看：Today（国产）', H);

  /* ---- P72A Claude Code 做视频 ---- */
  H = '';
  H += SK.k('有趣的实践') + SK.h('Claude Code 做视频');
  H += SK.sub('模型本身不会生成视频——Claude Opus 5.5 的输出仍然只有文字。视频是程序画出来的');
  H += SK.bullets([
    '模型写出描述"每一帧长什么样"的<b>代码</b>，渲染工具把几千帧逐帧画好，拼成 MP4',
    '工作流：你说需求 → Claude Code 生成动画代码（React 或 HTML）→ <b>Remotion / HyperFrames</b> 逐帧渲染 → 输出 MP4',
    '改文案、改时长、换配色，就是<b>改一行代码再渲染一次</b>',
    'Remotion：React 写视频，GitHub 约 <b>7 万星</b>，官方给 Claude Code 出了插件和技能包',
    'HyperFrames：HeyGen 开源，HTML 写视频，Apache 2.0'
  ]);
  H += SK.table(
    ['', '代码视频（模型写程序）', '视频模型（直接生成像素）'],
    [
      ['画面里的文字', '每个字都准确', '容易错字乱码'],
      ['改一处细节', '改一行代码，别处不动', '整段重新生成'],
      ['与旁白对齐', '精确到帧', '很难控制'],
      ['写实画面、人脸、动物', '弱', '强'],
      ['重复渲染', '结果完全一致', '每次不同']
    ]
  );
  H += SK.oneline('同一个模型，套上渲染工具链，就从"写代码的"变成"做视频的"。', '工具链', 'green');
  H += SK.img('images/claude-code.png', 'Claude Code 产品页：Hand Claude a bug, fix test, or multi-day migration', '官网截图：把任务交给它，多日干完整件事');
  H += SK.srcline('Remotion 官方教程', 'https://www.remotion.dev/docs/ai/coding-agents', '用编码代理写视频');
  H += SK.srcline('Claude Code 官方文档', 'https://code.claude.com/docs/zh-cn/overview', 'code.claude.com/docs（Claude Code 是什么）');
  SK.add('Claude Code 做视频', H);

  /* ---- P73 REA 逆向工程 ---- */
  H = '';
  H += SK.k('有趣的实践') + SK.h('REA 逆向工程');
  H += SK.sub('REA（Reverse Engineer Anything），GitHub morluto/rea，MIT 协议。2026 年 4 月建仓，10 月引爆');
  H += SK.bullets([
    '一周涨星 <b>20 万+</b>，超 <b>29 万星</b>登顶 GitHub Trending，史上增长最快的项目之一',
    '<b>不是新反编译器，是一座桥</b>：通过 MCP 把 Ghidra、IDA 封装成 AI 能直接调用的接口',
    'AI 负责思考、规划、读伪代码，专业工具负责底层拆解',
    '支持二进制、App、固件、抓包文件等 <b>17 类</b>目标；追调用链、定位核心逻辑，带着证据交回结论，还主动标注"哪部分没把握"',
    '出圈案例：还原打砖块游戏音效算法（编译出 <b>63 字节</b>与原版完全一致）；调查剪映字幕模板（发现 <b>2291 个</b>模板）；追踪 <b>Notion</b> 剪贴板处理调用链',
    '底层接了 objdump、JADX、mitmproxy 等 <b>100 多个</b>工具；一行 <b>npx rea-agents setup</b> 就接进 Claude Code、Codex、Cursor'
  ]);
  H += SK.p('<b>边界必须讲全</b>：强加壳依然挡得住，大程序会撑爆上下文；不是自动还原全部源码，更不是破解工具；逆向本身不当然违法——红线在于是否破解技术保护措施、是否非法采集服务端数据、是否实质性复制代码；须遵守《计算机软件保护条例》和软件许可，不得未经授权逆向他人软件，不得用于侵入系统。责任在使用人。');
  H += SK.oneline('它捅破的是"净室开发"的窗户纸——但软件的天没塌：微信的护城河是关系链，支付宝的是牌照和风控。', '边界', 'ink');
  H += SK.srcline('GitHub', 'https://github.com/morluto/rea', 'morluto/rea');
  H += SK.srcline('REA 官网', 'https://rea.tools', 'rea.tools（官网与文档）');
  SK.add('REA 逆向工程', H);
})();
