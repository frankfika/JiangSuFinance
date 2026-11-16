// batch13.js — P56 / P57 / P58 / P59 / P60
(function () {
  var H = '';

  // P56 DeepSeek 的模型
  H = '';
  H += SK.k('DEEPSEEK') + SK.h('DeepSeek 的模型');
  H += SK.sub('极致性价比：全球大模型降价的第一驱动力');
  H += SK.bullets([
    '谱系：<b>V4 Pro</b>（4 月）→ <b>V4.1 Flash</b>（9 月）→ <b>V4.1-Flash-1017</b>（10 月开源，763B）。',
    '结构创新讲两点：读材料只激活约 <b>80 亿</b>参数、写答案激活约 <b>160 亿</b>，做到"读便宜、写够用"；缓存需求降到上代的几分之一。',
    '价格打法：输入闲时 <b>1 元/百万 token</b>、高峰翻倍；缓存命中最低 <b>0.02 元</b>；网页和 App 免费。',
    '5 月曾<b>永久降价 75%</b>，引发行业震动——省出来的都是价格。',
    '治理看点：第三方评估指出它"任务目标与规则冲突时倾向绕过规则"，引发对齐讨论；已完成生成式 AI 出海登记。',
    '别忘了：<b>Harness 框架</b>（P43/P70）也是它家开源的。'
  ]);
  H += SK.oneline('省下来的都是价格。', '性价比', 'green');
  H += SK.srcline('DeepSeek 官网定价页', 'https://www.deepseek.com/', 'deepseek.com 定价页');
  H += SK.srcline('官方仓库', 'https://github.com/deepseek-ai', 'DeepSeek 开源模型');
  H += SK.srcline('官方仓库', 'https://github.com/deepseek-ai/deepseek-harness', 'Harness 框架');
  SK.add('DeepSeek 的模型', H);

  // P57 智谱（GLM）的模型
  H = '';
  H += SK.k('ZHIPU / GLM') + SK.h('智谱（GLM）的模型');
  H += SK.sub('只做后训练扩展：堆参数的时代在收尾，炼方法的时代在开启');
  H += SK.bullets([
    '谱系：<b>GLM-5.3</b>（7430 亿参数，1M 上下文）与 <b>GLM-5.3-Flash</b>（MIT 开源，价格为大杯的十分之一）。',
    '技术路线一句话："<b>我们只做后训练扩展</b>"——和上一代同一个基座，全部提升来自后训练。',
    '成绩单：编程自称开源第一；网安能力涌现，曾定位到潜伏 <b>40 余年</b>的 DNS 协议级风险。',
    '已上架 <b>AWS Bedrock</b>、按调用量分成——中国开源模型从"被用"到"被卖"。',
    '公司面：港股上市，上半年营收 <b>9.54 亿元（+400%）</b>，仍亏损。'
  ]);
  H += SK.oneline('同一个基座，全靠后训练拉开差距。', '炼方法', 'ink');
  H += SK.img('images/aws-bedrock-glm53.png', 'GLM-5.3 上架 AWS Bedrock 的公告截图', '国产开源模型走进海外云市场');
  H += SK.img('images/glm.png', '智谱 BigModel 官网：不止模型，构建可信智能', '官网截图：GLM-5.3 / FlashX / Coding Plan');
  H += SK.srcline('官网', 'https://www.zhipuai.cn/', '智谱');
  H += SK.srcline('云平台', 'https://aws.amazon.com/bedrock/', 'AWS Bedrock 模型市场');
  SK.add('智谱（GLM）的模型', H);

  // P58 MiniMax 的模型
  H = '';
  H += SK.k('MINIMAX') + SK.h('MiniMax 的模型');
  H += SK.sub('Agent 批量任务的成本打手');
  H += SK.bullets([
    '谱系：<b>M3</b>（6 月）→ <b>M3.1 Flash</b>（10 月开源，428B 总参 / 激活 23B）。',
    '官方称 <b>Agent 任务综合成本降 70%</b>，上线 72 小时处理超 100 万亿 token。',
    '公司面：2026 年港股 IPO，曾暴涨 7 倍后跌破发行价——<b>股价和模型口碑可以是两回事</b>。',
    '行业进入"拼成本、拼留存"的下半场。',
    '语音、视频、音乐模型线（Speech、Hailuo 视频、Music）在国内厂商里最全。'
  ]);
  H += SK.oneline('股价会骗人，成本不会。', '成本', 'green');
  H += SK.img('images/minimax.png', 'MiniMax 官网：MiniMax H3 image', '官网截图：从文本到视频的开源玩家');
  H += SK.srcline('MiniMax 官网', 'https://www.minimaxi.com/', 'minimaxi.com 官网');
  H += SK.srcline('官方仓库', 'https://github.com/MiniMax-AI', 'MiniMax 开源模型');
  H += SK.srcline('官网', 'https://hailuoai.video/', '海螺 AI（Hailuo 视频）');
  SK.add('MiniMax 的模型', H);

  // P59 阿里（通义千问）的模型
  H = '';
  H += SK.k('QWEN / TONGYI') + SK.h('阿里（通义千问）的模型');
  H += SK.sub('尺寸谱系最全，开源下载量破亿');
  H += SK.bullets([
    '谱系：<b>Qwen3.8-Max</b>（2.4 万亿参数，电脑操作基准全球第一）+ 开源梯队全尺寸覆盖。',
    '明星小模型 <b>Qwen3.8-27B</b>：架构和上一代完全一样，全靠后训练把智能指数从 <b>21 提到 33.7</b>。',
    '17GB 文件在消费级显卡上跑出准旗舰水平，是 2026 年"<b>小模型翻身</b>"的标志。',
    '生态：全球开源下载量破亿，Hugging Face 衍生模型数量第一；许可多为 <b>Apache 2.0</b>，法务友好。',
    '对课堂：Qwen 是<b>国产化部署最常见的基座选择之一</b>。'
  ]);
  H += SK.oneline('开源不只是标签，是生态。', '生态', 'ink');
  H += SK.srcline('通义千问官网', 'https://www.qianwen.com/', 'qianwen.com 官网');
  H += SK.srcline('官方仓库', 'https://github.com/QwenLM', '通义千问开源模型');
  H += SK.srcline('云平台', 'https://bailian.console.aliyun.com/', '阿里云百炼模型广场');
  SK.add('阿里（通义千问）的模型', H);

  // P60 七家对比小结
  H = '';
  H += SK.k('MODEL COMPARISON') + SK.h('七家对比小结');
  H += SK.sub('没有最强模型，只有最适合任务的模型');
  H += SK.table(
    ['厂商', '当前旗舰', '开闭源', '财政视角一句话'],
    [
      ['OpenAI', 'GPT-6.1 系列（最高端 GPT-6 Astra）', '闭源', '编程与专业工作主力，网安模型只向少数可信用户开放'],
      ['Anthropic', 'Claude Opus 5.5 / Sonnet 5.5 / Haiku 5.5', '闭源', '长程智能体与代码标杆，安全叙事最强'],
      ['Google', 'Gemini 4 系列（Argon / Carbon / Hydrogen）', '闭源', '多模态与视频理解领先，芯片+云+模型全栈自有'],
      ['月之暗面 Kimi', 'Kimi K3 / K3.1 Pro', '开源权重', '长文本找它，全球最大开放权重模型'],
      ['DeepSeek', 'V4.1 Flash（1017 版 763B 开源）', '开源', '极致成本找它，全球降价第一驱动力'],
      ['智谱 GLM', 'GLM-5.3 / GLM-5.3-Flash', '开源', '同基座纯后训练，私有化部署可选'],
      ['MiniMax', 'M3.1 Flash', '开源', 'Agent 批量任务成本降 70%'],
      ['阿里 Qwen', 'Qwen3.8-Max + 开源梯队', '开源为主', '国产化部署最常见基座，许可 Apache 2.0']
    ]
  );
  H += SK.bullets([
    '闭源三家仍占能力上限；开源梯队（全部中国厂商）<b>差距 3–6 个月，价格便宜 10–40 倍</b>。',
    '选型口诀：长文本找 Kimi，极致成本找 DeepSeek，编程智能体看 Claude，多模态视频看 Gemini，私有化部署看 Qwen/GLM/DeepSeek 开源权重。',
    '这一页的"最新"有效期只有几个月，<b>记方法比记型号重要</b>。'
  ]);
  H += SK.oneline('没有最强模型，只有最适合任务的模型。', '选型', 'green');
  H += SK.srcline('定价页', 'https://platform.openai.com/', 'platform.openai.com');
  H += SK.srcline('定价页', 'https://platform.claude.com/', 'platform.claude.com');
  H += SK.srcline('模型页', 'https://ai.google.dev/', 'ai.google.dev');
  SK.add('七家对比小结', H);
})();
