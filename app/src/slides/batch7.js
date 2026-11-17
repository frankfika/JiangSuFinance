(function(){ var H='';

H += SK.k('Open Platform') + SK.h('Hugging Face 是什么') + SK.sub('公开的社区和平台：发布、浏览、下载模型、数据集和在线演示');
H += SK.bullets([
  '对初学者，它是<b>开源模型的目录和说明书集中地</b>：看模型卡、许可、公开评测',
  '规模：约 <b>296 万</b>模型仓库，但 <b>1.5% 的仓库占 99.2% 的下载</b>——头部效应极强',
  '<b>2026-09-03</b> 英伟达宣布约 <b>129 亿美元</b>收购它（待监管批准，预计 2027 上半年完成）',
  '<b>7 月</b> OpenAI 内部测试中约 <b>1200 个智能体</b>"逃出沙箱"，花<b>三天</b>攻击它的生产系统找答案；OpenAI 随后<b>停训两个月</b>并发了 <b>37 页报告</b>',
  '<b>它不是政务平台</b>，默认不是"数据不出域"的内网；上传公务材料与红线冲突'
]);
H += SK.img('images/huggingface.png', 'Hugging Face 首页截图', 'huggingface.co 首页');
H += SK.srcline('Hugging Face', 'https://huggingface.co', 'huggingface.co（模型仓库、数据集与官方博客）');
H += SK.oneline('它已是 AI 世界的关键基础设施，但先分清公开社区与内网。', '知情', 'ink');
SK.add('Hugging Face', H); H='';

H += SK.k('OpenCSG') + SK.h('OpenCSG：私有化版的 Hugging Face') + SK.sub('核心产品 CSGHub：开源（Apache 2.0）的大模型资产管理平台');
H += SK.bullets([
  '定位就是<b>私有化部署的 Hugging Face</b>：模型/数据集/提示词/智能体应用的统一仓库',
  '版本控制、溯源、细粒度权限、审计日志',
  '从 Hugging Face、ModelScope <b>多源同步</b>模型进内网；一键微调、一键推理',
  '<b>可完全离线运行</b>：Docker Compose / K8s 部署，最低 <b>4C8G</b>；适配昇腾、海光、寒武纪等国产芯片与麒麟、统信系统',
  '线上社区已有 <b>10 万+ 模型、1 万+ MCP 服务、4000+ 数据集</b>，私有化用户也能同步用'
]);
H += SK.p('为什么需要它：Hugging Face 依赖云端、平台不开源、不支持完全离线；政企要的是"在单位边界内做自己的模型资产中台"。');
H += SK.img('images/csghub.png', 'CSGHub 首页与产品界面', 'github.com/OpenCSGs/CSGHub');
H += SK.srcline('OpenCSG 官网', 'https://opencsg.com/csghub', 'opencsg.com/csghub（CSGHub 产品页与文档）');
H += SK.srcline('GitHub', 'https://github.com/OpenCSGs/csghub', 'OpenCSGs/csghub（Apache 2.0）');
SK.add('OpenCSG：私有化版', H); H='';

H += SK.k('Deployment Levels') + SK.h('私有化的四个层级') + SK.sub('Hugging Face 与本地部署的差别：层级越高，数据越可控，责任越重');
H += SK.cards([
  {n:'1', title:'调国产闭源 API', body:'数据出域到厂商云，最省事，合规靠合同与备案'},
  {n:'2', title:'私有化 SaaS / 专属云', body:'厂商在你指定的云上部署，数据逻辑隔离'},
  {n:'3', title:'内网部署开源权重', body:'私有模型仓库（如 CSGHub）+ 自建推理，数据不出域'},
  {n:'4', title:'全离线 + 国产芯片', body:'密级要求最高时的形态'}
]);
H += SK.bullets([
  '典型组合：内网开源权重 + 私有模型仓库（如 <b>CSGHub</b>）+ 自建推理（<b>vLLM</b> 等），数据不出域',
  '每往上一级，多担三件事：<b>运维、评测、补丁</b>——数据越可控，责任越重'
]);
H += SK.oneline('"下载了"不等于"已经安全"，"在本地"不等于"可以处理任何材料"。', '慎用', 'green');
SK.add('私有化层级', H); H='';

H += SK.k('AI Sovereignty') + SK.h('AI 主权') + SK.sub('数据可控 + 算力可及 + 模型可信 + 成本可持续 + 计价自主');
H += SK.bullets([
  '<b>保密性</b>：涉密不上网、上网不涉密',
  '<b>生态建设</b>：开源模型头部基本被中国厂商包揽，分发平台（<b>2026-09-03 英伟达宣布约 129 亿美元收购</b>）话语权仍在博弈',
  '<b>算力</b>：管制与特供并存（H20/B30 可售，B300 禁售）；国产训练侧刚跨过"五万卡集群"门槛，但<b>显存与互联仍有代差</b>',
  '<b>舆论导向</b>：模型有价值观，用谁家模型、哪个版本，是内容安全的一部分',
  '<b>成本</b>：token 计价、峰谷价、缓存命中率决定长期账单；<b>2026 年推理支出首超训练支出</b>——"用得起"比"买得到"更考验规划',
  '<b>计价权（新维度）</b>：<b>语言不同，消耗就不同</b>——各家的分词表按训练语料的语言分布生成，谁在语料里多，谁就切得省。同样的内容，中文在 Claude 上比英文多烧 <b>65%</b>、印地语超 <b>3 倍</b>；换成国产模型，同一段中文只要 <b>0.81–0.85 倍</b>。<b>谁定义"一个汉字算几个 token"，谁就定义了中文任务的成本</b>'
]);
H += SK.p('<b>语言 × 分词器 = 消耗差（同一篇文档，2026 年 4 月九语言实测，以"英文跑在 OpenAI 上"为 1 倍）</b>');
H += SK.table(['语言 / 口径', 'Kimi', 'Qwen', 'Claude'], [
  ['<b>中文</b>（同一段，只换分词器）', '0.81×', '0.85×', '<b>1.65×</b>'],
  ['<b>中文 vs 英文</b>（同一家内对比）', '更省', '更省', '<b>+65%</b>'],
  ['<b>印地语 vs 英文</b>（同一家内对比）', '—', '—', '<b>+3 倍以上</b>']
]);
H += SK.p('<b>为什么"计价自主"要单列一条</b>');
H += SK.table(['维度', '表面看', '实际上决定什么'], [
  ['数据可控', '涉密材料不上网', '你的材料在不在别人手里'],
  ['算力可及', '有卡、能跑', '别人卖不卖给你、卖多贵'],
  ['模型可信', '后训练改不了倾向', '模型说什么、替谁说'],
  ['成本可持续', '付得起 token', '每个中文任务多少钱；且随语言而变'],
  ['<b>计价自主</b>', '<b>分词表归谁定</b>', '<b>中文这门"母语"，长期按别人的尺子计费</b>']
]);
H += SK.oneline('AI 主权 = 数据可控 + 算力可及 + 模型可信 + 成本可持续 + 计价自主。', '主权', 'green');
SK.add('AI 主权', H); H='';

/* ---- P77B 计价自主：分词表就是隐形的货币政策 ---- */
H = '';
H += SK.k('Pricing Sovereignty') + SK.h('计价自主：分词表就是隐形的货币政策');
H += SK.sub('谁定义"一个汉字算几个 token"，谁就定义了中文任务的成本');
H += SK.bullets([
  '<b>中文是主场，却是客场计费</b>：公文、通知、台账全是中文，交给按英文语料训练的分词器，等于用外来的尺子量自家的东西',
  '<b>价差不是"谁便宜"，是"谁定义规则"</b>：分词规则是模型厂商的技术选择，却直接变成使用者的账单',
  '<b>省 token 换来的是能力，不是妥协</b>：同样 1 万 token 预算，国产模型能多读近一半材料——对"整本制度汇编一起丢进去"是实打实的能力差',
  '西方旗舰模型处理同样的中文材料要多烧 <b>30%–65%</b> 的 token——这不是技术代差，是<b>语料分布的历史</b>'
]);
H += SK.cards([
  {n:'谁受益', title:'用中文的机构', body:'财政、政务、法律、教育——每天处理大量中文材料的单位，长期为"别人的尺子"付费。'},
  {n:'谁定义', title:'模型厂商', body:'分词表是训练语料分布的直接产物：中文语料多，汉字就切得省；语料少，一个字被拆成三块。'},
  {n:'怎么办', title:'选型问三句', body:'同样材料烧几个 token？同样 token 付多少钱？同样钱能处理几份公文？'}
]);
H += SK.oneline('采购看的是"每个中文任务多少钱"，不是"每百万 token 多少钱"。', '计价', 'green');
SK.add('计价自主：分词表就是隐形的货币政策', H); H='';

H += SK.k('Case Study') + SK.h('Arete-27B 事件') + SK.sub('2026 年 11 月 6 日，本课前 10 天：一个开源基座被"改写"');
H += SK.bullets([
  '美国研究机构 Nous Research 发布 Arete-27B：在阿里开源的 <b>Qwen3.8-27B</b> 之上后训练',
  '约 <b>5280 万 token、两轮、1202 步</b>，无强化学习、无架构改动；目标是改变敏感话题上的表达倾向',
  '官方自测：倾向性表述比例从 <b>22% 降到 0.9%</b>，事实分从 <b>2.32 升到 2.98</b>（5 分制），通用能力基准与基座几乎无差',
  '他们自己的结论："高质量开源模型绝大多数来自中国。"其 <b>Hermes 产品线此前也长期基于 Qwen 等国产开源模型后训练</b>',
  '<b>伦理争议的落点</b>：权重一旦放出，发布者就再也决定不了"自己的模型"被改写成什么——这不是能力问题，是<b>权重发布后的治理真空</b>'
]);
H += SK.p('课堂三句话：开源权重可能被他人按自己的目标再训练；名字里带同一基座，不等于行为还和原模型一样；单位真正要评测的，是准备上线的那一版，而不是基座的名声。');
H += SK.img('images/arete-27b.png', 'Nous Research 官方发布页截图', 'nousresearch.com/arete');
H += SK.srcline('来源', 'https://nousresearch.com/arete', 'Nous Research 官方发布页');
H += SK.srcline('Nous Research', 'https://nousresearch.com', 'nousresearch.com（机构官网与模型线）');
SK.add('Arete-27B 事件', H); H='';

H += SK.k('DevOps → AgenticOps') + SK.h('DevOps 和 AgenticOps') + SK.sub('循环回到哪里，是两种时代的差别');
H += SK.bullets([
  '<b>DevOps</b>：左半圈 Dev（Plan→Code→Build→Test），右半圈 Ops（Release→Deploy→Operate→Monitor）',
  'Monitor 的反馈再流回 <b>Plan</b>，永不停',
  '<b>AgenticOps</b>：OpenCSG 提出的八阶段链路——Prompt→Code→Build→Test→Release→Deploy→Operate→<b>Retrain</b>',
  '最后一环不是"监控"，而是"<b>再训练</b>"：运营中积累的数据回流，驱动下一轮优化',
  '循环回到"提示词和模型"，而不是"计划"'
]);
H += SK.p('AI 不是一次交付的软件，而是持续迭代的"员工"——模型版本要跟踪、表现要回归评测、权限要定期复核、出问题要能回滚。');
H += SK.img('images/devops-infinity-loop.jpg', 'DevOps 无限循环经典图', 'DevOps 无限循环（来源 ManageEngine 官方文章页）');
H += SK.srcline('来源', 'https://www.manageengine.com/products/service-desk/itsm/devops-lifecycle-and-pipeline.html', 'ManageEngine：DevOps Lifecycle and Pipeline');
SK.add('DevOps 与 AgenticOps', H); H='';

})();
