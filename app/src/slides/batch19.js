/* batch19 — 专页：认识 OpenCSG + AgenticOps 概念深化 */
(function () {
  /* ---- 1. 认识 OpenCSG ---- */
  var H = '';
  H += SK.k('VENDOR · OPENCSG') + SK.h('认识 OpenCSG：开放传神');
  H += SK.sub('一家把"开源社区 + 企业级私有化"同时做成的上海公司——前面说的"私有模型仓库"，它是最完整的一张答卷');
  H += SK.bullets([
    '<b>2023 年成立</b>，核心团队来自 GitLab、Mesosphere 等开源基础设施公司；路线是"开源共建 + 企业级落地"',
    '旗舰产品 <b>CSGHub</b>（Apache 2.0 开源）：模型、数据集、Prompt、代码、应用空间、智能体的<b>统一资产仓库</b>——版本、血缘、License 校验、评测、发布与回滚、审计日志、细粒度权限',
    '<b>CSGLite</b>：个人 AI 工作台，macOS / Windows / Linux 都能跑本地模型，OpenAI / Ollama 接口兼容',
    '<b>CSGShip</b>：智能体构建与运行平台——和 CSGHub 正好凑成"造智能体 + 管智能体"的一对',
    '私有化部署：<b>Docker Compose / K8s</b>，最低 4C8G；适配昇腾、海光、寒武纪等国产芯片与麒麟、统信系统；线上社区 10 万+ 模型、1 万+ MCP 服务可同步进内网'
  ]);
  H += SK.p('2026 年 8 月，OpenCSG 与 Dell 在<b>2026 戴尔科技峰会</b>上联合发布了<b>智能体超节点</b>（CSGHub + Xnet 传输协议 + PowerScale 存储 + GB10 计算节点）：本地单节点跑 70B–200B 量化模型，微调迭代传输时间省 90%+——"私有化大模型"从拼手艺开始变成<b>有参考图纸的工程</b>。');
  H += SK.img('images/csghub.png', 'CSGHub 产品界面', 'CSGHub：私有化的大模型资产仓库');
  H += SK.oneline('把模型当资产管，才谈得上治理。', '资产台账', 'ink');
  H += SK.srcline('产品页', 'https://opencsg.com/csghub', 'opencsg.com/csghub（产品页与文档）');
  H += SK.srcline('源码', 'https://github.com/OpenCSGs/csghub', 'OpenCSGs/csghub（Apache 2.0）');
  H += SK.srcline('联合架构', 'https://opencsg.com/blogs/b46be84c-0925-46ad-9e35-7d4fdaf4fae9', 'Dell × OpenCSG 联合架构（OpenCSG 官方博客，2025-11）');
  H += SK.srcline('社区', 'https://opencsg.com', 'opencsg.com 开放传神社区');
  SK.add('认识 OpenCSG', H);

  /* ---- 2. AgenticOps：智能体的全生命周期运维 ---- */
  H = '';
  H += SK.k('CONCEPT · AGENTICOPS') + SK.h('AgenticOps：智能体也要"运维"');
  H += SK.sub('软件时代有 DevOps，智能体时代有 AgenticOps——AI 不是一次交付的软件，是持续迭代的"员工"');
  H += SK.table(['维度', 'DevOps（软件时代）', 'AgenticOps（智能体时代）'], [
    ['交付物', '版本化的软件包，行为确定', '会"漂移"的行为体：同一个模型，换 Prompt、换工具结果就变'],
    ['监控对象', '接口可用性、性能指标', '推理质量、任务成功率、成本、有没有跑偏'],
    ['回滚', '发布有问题，回滚版本', '记忆要清理、权限要收回、模型版本要能退回'],
    ['评测', '上线前一轮测试', '<b>持续回归评测</b>：模型一升级，全部老任务重考一遍'],
    ['身份与权限', '账号体系', '智能体有角色、有凭据——凭据定期换、权限定期复核']
  ]);
  H += SK.p('这个概念的公开定义由 OpenCSG 提出：<b>AgenticOps = Prompt → Code → Build → Test → Release → Deploy → Operate → Retrain</b> 的八阶段链路。注意最后一环——循环不是回到"监控"就结束，而是回到"<b>再训练 / 再迭代</b>"：运行中积累的数据回流，驱动下一轮优化。思科等厂商 2026 年也在推同名的"智能体自治运维"，信通院把"智能体工程化"列入 2026 智能体十大关键词——方向是一致的：<b>智能体要按生产系统管，不能按玩具管</b>。');
  H += SK.bullets([
    '<b>对机关的三条落地</b>：用的哪个模型、哪个版本，要有台账；换模型必须重跑评测，"新版"不等于"更好"；智能体的账号、权限、记忆要能一键收回——出事能回滚，才敢上线'
  ]);
  H += SK.oneline('智能体上线不是终点，是运维的起点。', '全生命周期', 'green');
  H += SK.srcline('概念原文', 'https://opencsg.com/blogs/ce6ea4e4-8d0a-4f61-9863-81412f9a1601', 'OpenCSG《从 0 到 1，AgenticOps 如何打造企业级 AI 生产力？》');
  H += SK.srcline('厂商解读', 'https://www.cisco.com/site/cn/zh/learn/topics/artificial-intelligence/what-is-agentic-operations-agenticops.html', 'Cisco：智能体运维（AgenticOps）是什么');
  H += SK.srcline('最新动态', 'https://developer.aliyun.com/article/1781549', '阿里云发布 AgenticOps 全栈能力（2026-11-10）');
  H += SK.srcline('行业风向', 'https://www.secrss.com/articles/91447', '信通院 2026 智能体十大关键词：智能体工程化');
  SK.add('AgenticOps：智能体的全生命周期运维', H);
})();
