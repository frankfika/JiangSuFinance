/* proto-a2a — A2A 协议独立深度页（替代 batch4 三合一卡片中的展开） */
(function () {
  var H = '';

  H += SK.k('A2A') + SK.h('A2A：智能体之间怎么协作')
    + SK.sub('谷歌提出、Linux 基金会托管的开放协议：让不同厂商、不同框架的智能体像同事一样交接任务。');

  H += SK.p('一句话：<b>A2A（Agent2Agent）</b>是智能体之间的"工作交接单"。MCP 解决"智能体怎么调工具"，A2A 解决"智能体怎么找另一个智能体、商量怎么干、把干了一半的活交出去"。它 2025 年 4 月由谷歌云发布，<b>两个月后（2025 年 6 月）捐给 Linux 基金会</b>中立托管——这一点和 MCP 殊途同归（MCP 也由 Anthropic 捐出、2025 年底成立 Agentic AI 基金会管理）。');

  H += SK.bullets([
    '解决的真问题：一个单位的智能体往往不是一个厂商一个框架建的——财务用一家、办公用一家。<b>没有共同语言，智能体之间就得两两定制接口</b>，N 个智能体要 N×(N−1) 套对接。',
    '三件事标准化：<b>发现</b>（每个智能体发布一张"名片"Agent Card，写明自己叫什么、会干什么、怎么连）、<b>协商</b>（双方先对齐输入输出格式和协作方式）、<b>交接</b>（以 Task 为单位委派，以 Artifact 回传结果，过程可长可短、可追问）。',
    '设计上的一个聪明点：双方<b>不必暴露内部</b>——不给对方看自己的提示词、记忆库和工具清单，只按约定的接口交接，等于"只交工作，不交底牌"。',
    '底层不新：HTTP + JSON-RPC + 流式传输（SSE），就是普通 Web 技术——<b>过得了你们现有的网关和审计设备</b>，这也是它能进财政内网语境的原因。'
  ]);

  H += SK.table(
    ['', 'MCP（接工具）', 'A2A（接智能体）'],
    [
      ['解决什么', '智能体怎么连数据库、文件、API', '智能体怎么找同事、交接任务'],
      ['类比', 'USB-C 口：插上就能用工具', '工作交接单：跨科室派活'],
      ['谁提的 / 谁管', 'Anthropic（2024），后捐给 Agentic AI 基金会', '谷歌（2025.04），Linux 基金会'],
      ['关系', '不竞争，<b>是"与"不是"或"</b>：每个智能体内部用 MCP 接工具，智能体之间用 A2A 协作', '']
    ]);

  H += SK.p('<b>发展脉络（以官宣为准）：</b>');
  H += SK.table(
    ['时间', '事件'],
    [
      ['2025.04', '谷歌云在 Cloud Next 发布 A2A，Atlassian、Salesforce、SAP、ServiceNow 等 50 余家为首发伙伴'],
      ['2025.06', '谷歌将协议、规范、SDK 一并捐给 Linux 基金会，支持公司过百家；AWS、微软、思科表态支持'],
      ['2025.08', '<b>IBM 的 BeeAI 通信协议（ACP）宣布并入 A2A</b>，原仓库归档——三条赛道并成一条，减少选型混乱'],
      ['2026.03', '<b>v1.0.0 发布</b>：首个稳定版，带来"签名名片"（可加密验证对端身份）、企业级多租户，并给出 0.x 到 1.0 的迁移路径'],
      ['2026.04', '一周年：支持组织 <b>50+ → 150+</b>，核心仓库 GitHub 星标破 2.2 万，SDK 从只有 Python 扩到五门语言；微软把它嵌进 Azure AI Foundry 和 Copilot Studio，AWS 经由 Bedrock AgentCore 支持；官方称供应链、金融、保险、IT 运维已有生产部署']
    ]);

  H += SK.p('<b>真实案例（注意甄别成色）：</b>');
  H += SK.bullets([
    '<b>华为小艺（Celia）</b>：华为把 A2A 定为鸿蒙系统里系统级助手与 App 智能体之间的互联标准——小艺可以把长任务交给某个 App 的智能体去办、或反过来驱动 App 界面。是官方点名、有框架图可查的落地。',
    '<b>微信接入</b>：官方材料也点了微信的名（手机助手经 A2A 触发发消息、打电话，有双重授权），但<b>独立核实渠道很薄</b>，有报道称更像"腾讯主导的受控接入"。写进材料可以，当论据就要打问号——这也是看所有"生态成绩"时该有的心态。',
    '<b>AP2（Agent Payments Protocol，2025.09）</b>：谷歌与 Coinbase 等发起的"智能体付款"层，架在 A2A 之上，Mastercard、PayPal 等 60 余家支付机构参与——智能体之间不止传话，还要带着密码学授权凭证<b>花钱</b>。财政关心的"支付指令谁能发、留什么痕"，正是这一层要回答的问题。'
  ]);

  H += SK.p('<b>风险与边界（不吹不黑）：</b>');
  H += SK.bullets([
    '<b>规范只管"通话"，不管"门禁"</b>：v1.0 刻意不含内置授权机制，身份认证、权限范围、审计留痕都要部署方自己做——安全是工程活，不是协议送的。',
    '<b>多数单位用不上</b>：如果你的需求是"一个问答助手 + 接上几个内部系统"，做好<b>单个智能体 + MCP</b>就够了。A2A 真正值回票价的前提是：存在<b>多个独立建设的智能体</b>，且需要跨系统、跨科室甚至跨单位交接任务。',
    '<b>"支持 A2A"≠ 真互通</b>：名片发了、接口通了，数据口径、认证流程、失败重试仍要逐对调试验证。生态在快速长大，但生产级互操作清单（注册表、测试工具）还在路线图上。'
  ]);

  H += SK.p('<b>财政厅能想到的落地用法（设想，非现成产品）：</b>');
  H += SK.bullets([
    '<b>超纲问题转办</b>：制度问答助手遇到"这笔预算还剩多少"这类超出制度库的问题，按 A2A 把任务<b>连带上文一起</b>转给预算执行助手；后者在自己系统里查数，只回传结果和出处，问答助手再组织成人话——两个库不用糊在一起，各管一段、责任清晰。',
    '<b>跨单位对账</b>：财政支付状态智能体与代理银行的智能体按 A2A 交换对账任务，回传带签名的结果件；配合 AP2 式的授权凭证思路，"哪个智能体代表谁、被允许做什么"可以逐笔留痕——这正是支付监管要的审计轨迹。'
  ]);

  H += SK.oneline('MCP 让它有手，A2A 让它有同事——但先把手长好，再谈同事。', '次序', 'ink');

  H += SK.srcline('官方发布', 'https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents', 'Linux 基金会：2025-06-23 宣布托管 A2A 项目');
  H += SK.srcline('一周年公告', 'https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year', 'Linux 基金会：2026-04-09，150+ 组织、22k+ 星标、云厂商集成与生产部署');
  H += SK.srcline('合并公告', 'https://lfaidata.foundation/communityblog/2025/08/29/acp-joins-forces-with-a2a-under-the-linux-foundations-lf-ai-data/', 'LF AI & Data：IBM 的 ACP 并入 A2A（2025-08-29）');
  H += SK.srcline('规范原文', 'https://a2a-protocol.org/latest/specification/', 'A2A 协议规范 v1.0.0（最新稳定版）');
  H += SK.srcline('安全分析', 'https://authzed.com/learn/agent-to-agent-communication-guide-google-a2a-protocol', 'AuthZed：v1.0 不含内置授权，部署需自建认证与审计');
  H += SK.srcline('背景参考', 'https://www.ibm.com/think/topics/agent2agent-protocol', 'IBM：A2A 与 MCP 的分工与互补');

  SK.add('A2A：智能体之间怎么协作', H);
})();
