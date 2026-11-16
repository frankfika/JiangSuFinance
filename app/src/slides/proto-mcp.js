/* proto-mcp — MCP 独立深度页（替代 batch4 三合一卡片里的 MCP 段落） */
(function () {
  var H = '';

  H += SK.k('MCP') + SK.h('MCP：智能体的 USB-C 接口')
    + SK.sub('一个公开协议，让任何 AI 助手用同一套规矩接上任何系统——接线标准化了，但闸口要自己装。')

    + SK.p('<b>它解决什么问题：</b>以前每接一个系统都要单独开发连接器，模型 M 个、系统 N 个，集成工作量是 M×N。MCP 把它变成 M+N——系统方按协议封装一次（MCP 服务器），任何兼容的 AI 应用（MCP 客户端）都能直接用。')

    + SK.bullets([
      '<b>Host（宿主）</b>：你实际用的那个应用，如 Claude 桌面版、VS Code、ChatGPT。',
      '<b>Client（客户端）</b>：宿主里代表 AI 去连服务器的"联络员"，一个服务器配一个。',
      '<b>Server（服务器）</b>：接在真实系统上的"翻译官"，对外声明自己能提供什么。',
      '服务器对外提供三样东西：<b>Tools</b>（能执行的动作，如"查一笔支出"）、<b>Resources</b>（只读的数据，如制度原文）、<b>Prompts</b>（预设好的用法模板）。'
    ])

    + SK.p('<b>两年成为事实标准的关键节点：</b>')
    + SK.table(
      ['时间', '事件', '为什么重要'],
      [
        ['2024-11-25', 'Anthropic 开源 MCP，Claude 桌面版首日支持', '首发即有 Block、Zed、Replit 等首批接入'],
        ['2025-03-26', 'OpenAI 宣布全线支持（Agents SDK 先行）', '最大竞争对手背书，"格式战争"提前结束'],
        ['2025 年 4 月', 'Google DeepMind 宣布 Gemini 支持；微软 Build 大会跟进 Windows 11', '六大平台全部到齐'],
        ['2025-09', '官方 MCP Registry（服务器登记处）上线预览', '找服务器有了统一目录'],
        ['2025-12-09', 'Anthropic 把 MCP 捐赠给 Linux 基金会下设的 Agentic AI Foundation（与 Block、OpenAI 共同发起）', '从"某家公司的协议"变成中立行业标准，类似当年的 Kubernetes'],
        ['2026-07-28', '发布史上最大一次规范修订（无状态核心等）', '为企业级云端部署补课，同时启动 12 个月旧版废止倒计时']
      ])

    + SK.p('<b>到 2026 年的规模（各口径均已注明来源）：</b>')
    + SK.bullets([
      '捐赠当天（2025-12-09）Anthropic 官方口径：<b>1 万+个在役公开 MCP 服务器、SDK 月下载 9700 万+</b>，ChatGPT、Gemini、Copilot、VS Code 等均已接入。',
      '2026 年实测数据：10 月下旬官方 Registry 登记 <b>4.7 万+</b> 个服务器、11 月中旬增至 <b>6.4 万+</b>；Python＋TypeScript SDK <b>30 天下载约 6.5 亿次</b>——距首发刚满两年。',
      '企业侧：Stacklok 2026 年调查，<b>41%</b> 的软件组织已在有限或规模化生产环境使用 MCP 服务器。'
    ])

    + SK.p('<b>两个可查的落地实例：</b>')
    + SK.bullets([
      '<b>VS Code（2025-07-14 正式版）</b>：全球最大代码编辑器把 MCP 做进 Copilot 智能体模式，几千万开发者无需配置即可让 AI 调工具。',
      '<b>Pinterest 内部部署（2026 年 4 月披露）</b>：844 名员工通过内部 MCP 服务器每月发起约 6.6 万次工具调用，估算节省约 7000 个工程小时——这是"内网自建 MCP"的样板，接的是自己的系统，不是互联网上的现成插件。'
    ])

    + SK.p('<b>风险与注意——这是部署前必须先讲的：</b>')
    + SK.bullets([
      '<b>登记 ≠ 安检</b>：官方 Registry 只验证"这仓库是你的"，不做代码审查和恶意扫描。第三方服务器装进来，等于把它的说明书塞进了 AI 的提示词。',
      '<b>地毯式翻脸（rug pull）</b>：2025 年 9 月，一个非官方 Postmark 邮件服务器（周下载约 1500 次）被悄悄加了一行"密送攻击者"的代码——先攒口碑、后投毒，和/npm 供应链攻击同一套路。',
      '<b>真实 CVE</b>：2025 年 7 月 JFrog 披露 mcp-remote 命令注入漏洞（CVE-2025-6514，CVSS 9.6），恶意服务器可在用户电脑上执行任意命令——连接不可信服务器本身就是攻击面。',
      '我们的原则：<b>财政内网只装自审自建的 MCP 服务器</b>；工具权限最小化（制度库只读、预算系统只走白名单接口）；每次调用留痕可回查。'
    ])

    + SK.p('<b>财政厅可以怎么用（两例，均限内网自建）：</b>')
    + SK.bullets([
      '<b>制度库 MCP</b>：把预算管理一体化制度、处室操作规程封装成只读 MCP 服务器，AI 起草文件时自动引条文、答出文号——出处可回查，杜绝"编制度"。',
      '<b>预算执行 MCP</b>：AI 通过 MCP 查询指标余额、生成对账初稿，但<b>只读</b>；涉及下达、调整等写操作，一律走原系统人工流程——AI 当参谋，章还是人盖。'
    ])

    + SK.oneline('MCP 把"接一个系统"变成"接一个口"——但口上必须装自家的闸。', '接口与闸', 'ink')
    + SK.srcline('协议官网', 'https://modelcontextprotocol.io/', 'Model Context Protocol 官方网站')
    + SK.srcline('Anthropic 首发公告', 'https://www.anthropic.com/news/model-context-protocol', 'Anthropic：Introducing the Model Context Protocol（2024-11-25）')
    + SK.srcline('Anthropic 捐赠公告', 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation', 'Anthropic：捐赠 MCP 并设立 Agentic AI Foundation（2025-12-09，1 万+服务器、SDK 月下载 97M+）')
    + SK.srcline('采用度追踪（2026-10 实测）', 'https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol', 'Digital Applied：Registry 4.7 万+、TS SDK 单月 2.32 亿次 npm 下载（2026-10-21 读取）')
    + SK.srcline('采用度追踪（2026-11 实测）', 'https://guptadeepak.com/research/mcp-enterprise-guide-2025/', 'MCP Enterprise Guide 采用度追踪：Registry 6.4 万+、SDK 30 天下载约 6.56 亿（2026-11-16 更新）')
    + SK.srcline('安全通报', 'https://research.jfrog.com/vulnerabilities/mcp-remote-command-injection-rce-jfsa-2025-001290844/', 'JFrog：CVE-2025-6514，mcp-remote 命令注入，CVSS 9.6（2025-07-09）');
  SK.add('MCP：智能体的 USB-C 接口', H);
})();
