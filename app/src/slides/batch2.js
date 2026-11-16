// batch2.js — P15 / P16 / P17 / P19 / P20 / P20A / P24
(function () {
  var H = '';

  // P15 三要素
  H = '';
  H += SK.k('THREE PILLARS') + SK.h('三要素：数据、算法、算力');
  H += SK.sub('大模型不是玄学，是这三样东西喂出来的');
  H += SK.bullets([
    '<b>数据</b>：模型见过的文字、图像等材料。GPT-3 用了约 3000 亿 token，2026 年前沿模型普遍 30–50 万亿 token。现在比拼的不是谁的书多，是谁的书挑得精。',
    '<b>算法</b>：模型结构和训练方法。结构清一色是 Transformer 变体（国产流行 MoE：2.8 万亿参数，每次只激活约 500 亿干活）；训练方法是"预训练广读 + 后训练教规矩"。',
    '<b>算力</b>：训练和日常回答都要消耗的计算资源，靠专用芯片和数据中心。',
    '打个比方：<b>数据是食材，算法是菜谱和厨艺，算力是厨房和灶</b>。'
  ]);
  H += SK.oneline('三样缺一样，饭都做不熟。', '三要素', 'green');
  H += SK.srcline('arXiv', 'https://arxiv.org/abs/2005.14165', 'GPT-3 论文');
  H += SK.srcline('arXiv', 'https://arxiv.org/abs/1701.06538', '稀疏混合专家（MoE）论文');
  SK.add('三要素：数据、算法、算力', H);

  // P16 训练与推理
  H = '';
  H += SK.k('TRAINING vs INFERENCE') + SK.h('训练像建厂，推理像开工');
  H += SK.sub('先分清两件事：训练是“改参数”，推理是“用参数”——一次性大投入的是建厂，天天烧钱的是开工');
  H += SK.bullets([
    '<b>训练（建厂）</b>：用海量语料反复调整模型内部几百亿到几万亿个参数，把知识“写进”权重。参数只改这一次。',
    '<b>推理（开工）</b>：你提问，它只读不改——把你给的材料读一遍，一个词一个词往外生成答案。训练一次，推理千万次。',
    '<b>为什么训练贵得离谱</b>：GPT-3 训一遍约 3640 PF-days，等于一张顶级显卡不间断跑 <b>355 年</b>；GPT-4 用约 2.5 万张 A100 连跑约 100 天，公开估算 7800 万美元；Google Gemini Ultra 约 1.91 亿美元；2026 年新一代已迈向 <b>10 亿美元级</b>——七年涨了近 30 万倍。',
    '<b>为什么推理便宜但不是免费</b>：计费按词元（token）——读材料便宜（一次性并行读完），写答案贵（每生成一个词都要把整套模型重算一遍），差 3–5 倍；刚读过的材料命中缓存还能再省九成。单次回答便宜到几分钱，但乘上每天几亿次提问，ChatGPT 早期运营成本公开估算约 <b>70 万美元/天</b>——所以免费产品都有额度。',
    '<b>关键结论</b>：<b>平时聊天不会重新训练模型</b>。参数不因你的一次提问而改变，你的内部文件不会因此写进它的“身体”。'
  ]);
  H += SK.table(['对比', '训练（建厂）', '推理（开工）'], [
    ['干什么', '调整全部内部参数，写入知识', '只做计算，参数一个不动'],
    ['读什么', '海量语料整体过上好几遍', '只读你这次给的材料'],
    ['算力规模', '上万张卡连跑数月，一次成型', '单卡几卡，秒级回答'],
    ['成本形态', '一次性投入，摊给之后所有用户', '每问一次花一次，随用量线性涨'],
    ['像什么', '建一座电厂', '每天用掉的电']
  ]);
  H += SK.bullets([
    '<b>成本结构决定商业模式</b>：训练一次、人人可租——所以绝大多数单位的现实选择是“用别人训练好的模型”，而不是自己建厂；推理随用量线性涨——所以有了按量付费、额度、排队。',
    '<b>算力管制的要害在训练</b>：门槛是万卡集群；推理的门槛低得多——这就是为什么被“卡脖子”还能做出 DeepSeek，也是后面要讲的本地部署能够成立的原因。',
    '<b>行业刻度</b>：2026 年推理支出首次超过训练支出——AI 从“建厂期”进入“天天开工期”。'
  ]);
  H += SK.oneline('它不是在学习你，是在替你读材料。', '不训练', 'ink');
  H += SK.srcline('Lambda 测算', 'https://lambda.ai/blog/gpt-3', 'GPT-3 训练 = 355 GPU 年、约 460 万美元');
  H += SK.srcline('斯坦福 AI Index 2024', 'https://hai.stanford.edu/ai-index/2024-ai-index-report', 'GPT-4 约 7800 万美元、Gemini Ultra 约 1.91 亿美元');
  H += SK.srcline('SemiAnalysis 估算', 'https://www.semianalysis.com/p/google-we-have-no-moat-and-neither', 'ChatGPT 早期运营成本约 70 万美元/天');
  SK.add('训练像建厂，推理像开工', H);

  // P17 产业链五层
  H = '';
  H += SK.k('AI VALUE CHAIN') + SK.h('AI 产业链五层');
  H += SK.sub('芯片与服务器 → 数据 → 模型 → 框架与平台 → 应用与工具');
  H += SK.cards([
    { n: '1', title: '芯片与服务器', body: '算力底座：专用芯片、整机与数据中心' },
    { n: '2', title: '数据', body: '喂进去的文字与图像；质量决定天花板' },
    { n: '3', title: '模型', body: '算法结构与权重所在，能力的直接来源' },
    { n: '4', title: '框架与平台', body: '让模型能部署、能被调用的运行底座' },
    { n: '5', title: '应用与工具', body: '对话助手、办公 AI、知识库、智能体' }
  ]);
  H += SK.bullets([
    '厅机关日常接触的是最上面一层：<b>对话助手、办公 AI、知识库、智能体</b>。',
    '上面一层要跑起来，离不开下面的算力、数据和模型。',
    '问"能不能用于公务"，其实是在问三件事：<b>模型在哪跑、数据到哪去、谁来运维</b>。',
    '每层都有多家产品和路线，课堂只建立地图，不选定采购对象。'
  ]);
  H += SK.oneline('先认地图，再谈选型。', '建地图', 'green');
  SK.add('AI 产业链五层', H);

  // P17A 算力三兄弟：CPU / GPU / TPU
  H = '';
  H += SK.k('CHIPS 101') + SK.h('算力三兄弟：CPU、GPU、TPU <span style="font-size:16px; color:var(--muted)">先分清三种芯片，再谈算力中心</span>');
  H += SK.sub('AI 不是"一种算力"，是三种"性格"完全不同的芯片在分工');
  H += SK.bullets([
    '<b>CPU（中央处理器）＝几位大厨师</b>：核少而精（几十个），什么菜都会做、决策快，但灶位少。办公、数据库、系统调度全靠它——AI 集群里它也当"大管家"。',
    '<b>GPU（图形处理器）＝一万名流水线工人</b>：上万个小核，每人只会一道简单工序，但一声令下全线同时开工。AI 计算的 99% 是同一种乘法（矩阵乘法），正好合拍——实测矩阵运算比 CPU 快几百倍。',
    '<b>TPU（张量处理器）＝只为一种活硬化的预制件工厂</b>：Google 自研自用，芯片面积几乎全让给矩阵计算，能效更高；不零售，只能在谷歌云上租。',
    '<b>NPU（神经网络单元）＝手机电脑里的低功耗小工</b>：几十 TOPS 的整数算力，负责人脸解锁、降噪、端侧小模型——不联网也能用的小 AI。',
    '<b>一条主线</b>：从 CPU 到 GPU 到 TPU/NPU，是沿着"为 AI 越来越专用"的方向一路硬化下去。芯片还有"国籍"：昇腾、寒武纪等国产芯片推理已规模替代、训练正在突围——这是后面"禁售"一页的故事。'
  ]);
  H += SK.table(['对比', 'CPU 大厨师', 'GPU 流水线', 'TPU 预制件厂', 'NPU 小工'], [
    ['核/单元数', '几十个大核', '上万个小核', '专用矩阵阵列', '嵌入式单元'],
    ['最擅长', '逻辑判断、串行任务', '并行矩阵乘法', '云端大模型训练', '端侧低功耗 AI'],
    ['在哪见得到', '所有电脑、手机', '数据中心、显卡', '谷歌云（租）', '手机、AI 电脑']
  ]);
  H += '<div class="shotrow rise">' +
    '<figure><img src="images/chip-gpu-h100-nvidia.jpg" alt="H100 GPU 实物"/><figcaption>数据中心 GPU 实物（NVIDIA H100）：AI 时代的"流水线厂房"，一卡约 3 万美元级。（图源：NVIDIA 官网）</figcaption></figure>' +
    '<figure><img src="images/chip-cpu-grace-nvidia.jpg" alt="Grace CPU 实物"/><figcaption>数据中心 CPU（NVIDIA Grace）：不干活、管调度——AI 集群里的"大管家"。（图源：NVIDIA 官网）</figcaption></figure>' +
    '</div>';
  H += SK.oneline('AI 时代不是 CPU 被淘汰，而是 CPU 管事、GPU 干活、各专其位。', '各专其位', 'green');
  H += SK.srcline('Intel 官方科普', 'https://www.intel.com/content/www/us/en/products/docs/processors/cpu-vs-gpu.html', 'CPU vs GPU：延迟导向 vs 吞吐导向');
  H += SK.srcline('实测论文', 'https://arxiv.org/html/2507.19723v1', '4096×4096 矩阵乘法：GPU 比串行 CPU 快约 593 倍');
  H += SK.srcline('NVIDIA 官方产品页', 'https://www.nvidia.com/en-us/data-center/h100/', 'H100 Tensor Core GPU');
  SK.add('算力三兄弟：CPU、GPU、TPU', H);

  // P17B 超算、智算与通用算力
  H = '';
  H += SK.k('COMPUTE INFRA') + SK.h('超算、智算与通用算力 <span style="font-size:16px; color:var(--muted)">三类基础设施，别混为一谈</span>');
  H += SK.sub('媒体里说"算力"时常把三样东西搅在一起——它们的投资逻辑和用途完全不同');
  H += SK.table(['', '通用算力（通算）', '智能算力（智算）', '超级算力（超算）'], [
    ['比喻', '水电煤', '发动机', '国家风洞'],
    ['主力芯片', 'CPU 服务器', 'GPU / AI 芯片集群', '众核 CPU＋加速卡＋专用互联'],
    ['干什么', '政务云、网站、数据库、办公系统', '大模型训练与推理、图像语音识别', '气象、航天、材料、基因、抗震模拟'],
    ['精度口径', '不太讲究', 'FP16 半精度，拼吞吐量', 'FP64 双精度，一个数都不能错'],
    ['怎么衡量', '机架数、台套', 'EFLOPS（宣传口径多为 FP16）', 'TOP500 榜 · LINPACK 实测']
  ]);
  H += SK.bullets([
    '<b>就在江苏</b>：神威·太湖之光在无锡——4 万多颗国产申威芯片，2016 年起全球 TOP500 四连冠；1 分钟算力 ≈ 全球 70 亿人用计算器不间断算 32 年。',
    '<b>全国家底</b>：2025 年底已建成 42 个万卡智算集群；江苏在用数据中心 284 个、算力总规模 88.29 EFLOPS、智算占比超 74%，省级综合算力指数全国第二。',
    '<b>布局逻辑</b>："东数西算"八大枢纽十大集群——东部枢纽服务低延迟业务，西部枢纽承接大规模训练（电便宜、地便宜）。',
    '<b>趋势</b>："超智融合"——新一代算力中心超算智算一体化设计、统一调度，同时接科学计算和大模型训推两类活。',
    '<b>防忽悠口诀</b>：听到算力数字先问三句——<b>什么精度？稠密还是稀疏？峰值还是实测？</b>同一张卡，不同口径能差几十倍。'
  ]);
  H += '<div class="shotrow rise">' +
    '<figure><img src="images/center-sunway-taihulight.jpg" alt="神威太湖之光机柜"/><figcaption>神威·太湖之光机柜（无锡国家超算中心，江苏本省素材）——纯国产芯片的国之重器。（Wikimedia Commons, CC BY-SA 4.0, 作者：懒懒的天）</figcaption></figure>' +
    '<figure><img src="images/center-gpu-dgx-b200.jpg" alt="八卡 GPU 服务器主板"/><figcaption>一台 8 卡 GPU 服务器的"内脏"——智算中心的基本单元，一柜柜这样的机器组成万卡集群。（Wikimedia Commons, CC BY-SA 4.0, 作者：Pokiiri）</figcaption></figure>' +
    '</div>';
  H += SK.oneline('通算管日常、智算管产业、超算管科研——都是"算力"，但不是一个东西。', '别混为一谈', 'ink');
  H += SK.srcline('中国信通院蓝皮书', 'https://www.caict.ac.cn/kxyj/qwfb/bps/202603/P020260306392232241580.pdf', '基础算力、智能算力、超算算力三分口径');
  H += SK.srcline('江苏省科技厅', 'https://kxjst.jiangsu.gov.cn/art/2021/7/9/art_83499_10016152.html', '神威·太湖之光：4 万颗国产芯片、TOP500 四连冠');
  H += SK.srcline('新华网', 'https://www.news.cn/20250825/de4be09cf1ca4e3ea8745c4d773fc194/c.html', '全国算力发展指数与东数西算布局');
  SK.add('超算、智算与通用算力', H);

  // P19 算力禁售时间线
  H = '';
  H += SK.k('EXPORT CONTROLS') + SK.h('算力禁售时间线');
  H += SK.sub('对华管制四轮收紧，合规可买的产品越来越少');
  H += SK.table(
    ['时间', '管制动作'],
    [
      ['2022.10', '首次限制 A100/H100 出口'],
      ['2023.10', '加码，"特供版"A800/H800 也禁'],
      ['2025', 'H20 一度被禁、后经许可恢复'],
      ['2026.1', 'H200 获准"逐案审查"出口，条件苛刻（销量限对美 50%、25% 收入上缴），实质成交极少'],
      ['2026.5', '再收紧，境外子公司绕道采购被封堵']
    ]
  );
  H += SK.bullets([
    '现状：H100/B200/B300 <b>全系禁售</b>；合规可买的只有 H20（约 9–12 万元/卡）和特供 B30。消费级显卡不管制。',
    '为什么禁：训练前沿模型的门槛就是万张高端卡，<b>卡住算力就卡住下一代模型</b>。',
    '另一面：禁售倒逼效率竞赛——DeepSeek 用相对少的算力做出一流模型，外媒称之为"效率倒逼创新"。'
  ]);
  H += '<div class="shotrow rise">' +
    '<figure><img src="images/nvidia-b300-board.jpg" alt="NVIDIA B300 机柜"/><figcaption>被禁售的 B300 机柜（官方渲染图）——管制的就是这一柜柜的算力</figcaption></figure>' +
    '</div>';
  H += SK.srcline('官方产品页', 'https://www.nvidia.com/en-us/data-center/dgx-b300/', 'NVIDIA DGX B300');
  H += SK.srcline('管制原文', 'https://www.bis.gov/press-release/commerce-strengthens-export-controls-restrict-chinas-capability-produce-advanced-semiconductors-military', '美国商务部 BIS：先进计算与半导体出口管制公告');
  H += SK.srcline('联邦公报', 'https://www.federalregister.gov/documents/2022/10/13/2022-21658/implementation-of-additional-export-controls-certain-advanced-computing-and-semiconductor', '2022-10-07 管制规则全文（此后逐年加码）');
  SK.add('算力禁售时间线', H);

  // P20 算力小型化
  H = '';
  H += SK.k('EDGE AI') + SK.h('算力小型化');
  H += SK.sub('2026 年桌面算力突然火了：模型变小变强');
  H += SK.p('阿里 Qwen3.8-27B（270 亿参数、17GB 文件）追平了去年的旗舰，一台 24GB 显存的消费级机器就能跑。');
  H += SK.table(
    ['设备', '价格与配置', '能跑什么'],
    [
      ['Mac mini', '约 899 美元起，内存上限 32GB', '跑 7B–14B 小模型；脱销是因为"几千块钱就能断网跑个还不错的本地助手"，但它不是大模型工作站'],
      ['Mac Studio', '最高 512GB 统一内存', '目前单机跑超大模型的现实路径，可装 671B 级量化模型'],
      ['NVIDIA DGX Spark', '128GB，约 4699 美元', 'CUDA 生态，适合开发者']
    ]
  );
  H += SK.bullets([
    '对机关的意义：本地设备只有一个理由——<b>数据不出域</b>。',
    '但"数据不出域"不等于"已经合规"：模型来源要可信、许可要核对、补丁权限要有人管、输出仍要人核。',
    '另外："Token 电脑"不是行业统称，"TokenStation"只是个别厂商的产品名。'
  ]);
  H += SK.srcline('苹果官网 Mac Studio 规格页', 'https://www.apple.com.cn/mac-studio/', 'Mac Studio 规格');
  H += SK.srcline('官方产品页', 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/', 'NVIDIA DGX Spark');
  H += SK.srcline('官方仓库', 'https://github.com/QwenLM', '通义千问 Qwen 开源模型');
  H += SK.img('images/nvidia-dgx-spark.jpg', 'NVIDIA DGX Spark 桌面 AI 超算（官方产品图）', 'DGX Spark：128GB 显存搬上桌面的"小型化旗舰"');
  SK.add('算力小型化', H);

  // P20A 下一句怎么来的
  H = '';
  H += SK.k('NEXT-TOKEN PREDICTION') + SK.h('模型怎么写出下一句');
  H += SK.sub('它做的事很简单也很根本');
  H += SK.bullets([
    '你输入的是一句话，模型处理的是一串小块（词元/token），<b>一个汉字约 1–2 个</b>。',
    '它做的事很简单也很根本：<b>根据前面已有的内容，猜下一个最合适的词元</b>；猜出一个，再猜下一个。',
    '所以它首先追求"读起来像那么回事"，并不先去业务系统核对每个数字。',
    '虚构集中在具体处：<b>姓名、日期、数字、文号、出处</b>。格式越标准，越要警惕内容是不是编的。',
    '<b>顺带认两种"券"</b>：各级政府正在发两类 AI 补贴，别搞混——<b>模型券</b>补的是"调模型 API 的钱"，按 token 用量计价；<b>算力券</b>补的是"租 GPU 的钱"，按卡时/合同计价。'
  ]);
  H += SK.table(['对比', '模型券（token 额度）', '算力券'], [
    ['买的是什么', '模型服务：直接调 API，按 token 用量扣费', '算力资源：租用 GPU 集群，按卡时或合同计价'],
    ['谁在发', '政府"模型券"（如上海 3 亿元模型券）＋厂商的充值额度包', '各地政府算力券（湖北按实际用算费补 10%、南京最高补 30%）'],
    ['适合谁', '用现成模型、数据可以上云的单位和团队', '要自己部署模型、要求数据不出域的单位'],
    ['关注点', '单价、上下文长度、数据去了哪里', '卡型、租用时长、服务商资质']
  ]);
  H += SK.oneline('它先求像，再求对——顺序不能反。', '像与对', 'ink');
  H += SK.srcline('上海市政府', 'https://www.shanghai.gov.cn/rgznsj/20250729/fdd4f7549f904cd7905e3a0a0629ffe1.html', '上海：6 亿元算力券＋3 亿元模型券，两类补贴并列');
  H += SK.srcline('湖北省数据局', 'https://sjj.hubei.gov.cn/bmdt/tzgg/202511/t20251113_5812513.shtml', '湖北算力券：按智算/超算实际用算费的 10% 补贴');
  H += SK.srcline('南京市宁企通', 'https://nqt.nanjing.gov.cn/nqtmh/njyst/pages/gxhxzdetail?guid=4987a4ce-6f17-4f2d-8cf9-030668d60607', '南京算力券：智能算力合同结算额最高补 30%');
  H += SK.srcline('可视化课程', 'https://www.3blue1brown.com/lessons/attention/', '3Blue1Brown：注意力机制逐步拆解（动画）');
  H += SK.srcline('图解博客', 'https://jalammar.github.io/illustrated-transformer/', 'The Illustrated Transformer：被引用最多的图解');
  H += SK.srcline('动手视频', 'https://youtu.be/kCc8FmEb1nY', 'Andrej Karpathy：从零手写一个 GPT（2 小时）');
  SK.add('模型怎么写出下一句', H);

  // P24 模型的局限
  H = '';
  H += SK.k('KNOWLEDGE LIMITS') + SK.h('模型的局限');
  H += SK.sub('默认不知道内部文件');
  H += SK.bullets([
    '<b>知识截止</b>：每个模型都有"知识截止日期"，之后的新闻、新文件、新文号，它默认不知道。',
    '<b>内容边界</b>：它只见过公开材料，单位内部文件、未发布口径、最新业务数据都不在它的"记忆"里。',
    '<b>两种补丁</b>：联网搜索让它查公开网页；知识库让它查你们准备的文件——但都不是"它自己学会了"。',
    '所以问它"我省最新专项资金管理办法是哪号文"，<b>它很可能答一个格式正确、内容过时甚至编造的结果</b>。'
  ]);
  H += SK.oneline('它不是本单位档案室，也不是核对过的业务系统。', '有边界', 'green');
  H += SK.srcline('官方文档', 'https://docs.anthropic.com/en/docs/build-with-claude/context-windows', 'Anthropic：上下文窗口与模型的知识边界');
  SK.add('模型的局限', H);
})();
