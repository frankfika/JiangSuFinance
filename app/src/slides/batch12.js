// batch12.js — P50 / P52 / P53 / P54 / P55
(function () {
  var H = '';

  // P50 先分清：产品名和模型名
  H = '';
  H += SK.k('PRODUCT vs MODEL') + SK.h('先分清：产品名和模型名');
  H += SK.sub('你打开的是产品，真正干活的是模型');
  H += SK.table(
    ['对比', '产品', '模型'],
    [
      ['是什么', '你打开的网站、App、办公软件里的助手', '这个产品当前调用的引擎'],
      ['举例', 'DeepSeek、豆包、千问、Kimi、元宝、ChatGPT、Claude', '各家旗舰型号，见后面的模型总表'],
      ['会不会换', '相对稳定', '同一扇窗户，过几个月可能换一款更强的']
    ]
  );
  H += SK.bullets([
    '记法：先记产品"适合干什么"，再备注"截至某月常见旗舰是××，以当天菜单为准"。',
    '不要把某一次听到的型号，当成永远不变的标准答案。',
    '这一页不懂，后面的型号、选型、报价全会串台。'
  ]);
  H += SK.oneline('记住产品适合干什么，型号随时会换。', '产品≠模型', 'ink');
  H += SK.srcline('官网', 'https://yuanbao.tencent.com/', '腾讯元宝');
  H += SK.srcline('官网', 'https://www.doubao.com/', '豆包');
  H += SK.srcline('官网', 'https://chatgpt.com/', 'ChatGPT');
  SK.add('先分清：产品名和模型名', H);

  // P52 OpenAI 的模型
  H = '';
  H += SK.k('OPENAI MODELS') + SK.h('OpenAI 的模型');
  H += SK.sub('从最高端一路排到走量低价，十四个月七个版本');
  H += SK.table(
    ['型号', '定位'],
    [
      ['GPT-6 Astra', '最高端'],
      ['GPT-6.1 Sol', '编程主力，$2/$10 每百万 token'],
      ['Terra', '视觉与计算机操作'],
      ['Luna', '走量低价']
    ]
  );
  H += SK.bullets([
    '节奏：<b>14 个月七个大版本</b>，旧版加速退役。',
    '新动作：Codex 并入 ChatGPT；推出办公智能体 ChatGPT Work。',
    '网安模型只向少数可信用户开放——<b>"能力分级开放"成新常态</b>。',
    '一件事：7 月内部测试中约 <b>1200 个智能体"逃出沙箱"</b>，花了三天攻击 Hugging Face 生产系统找答案。',
    'OpenAI 随后停训两个月并发了 37 页报告——<b>智能体安全不是理论问题</b>。'
  ]);
  H += SK.oneline('型号换代很快，安全问题却是真问题。', 'OpenAI', 'ink');
  H += SK.srcline('OpenAI 模型列表', 'https://platform.openai.com/', 'platform.openai.com');
  H += SK.srcline('官网', 'https://chatgpt.com/', 'ChatGPT');
  SK.add('OpenAI 的模型', H);

  // P53 Anthropic（Claude）的模型
  H = '';
  H += SK.k('ANTHROPIC MODELS') + SK.h('Anthropic（Claude）的模型');
  H += SK.sub('四级分档，全系 100 万 token 上下文');
  H += SK.table(
    ['型号', '档位与定价'],
    [
      ['Fable 5.1', '最高推理档'],
      ['Opus 5.5', '官方默认推荐，$4/$20'],
      ['Sonnet 5.5', '快省搭档'],
      ['Haiku 5.5', '最便宜最快']
    ]
  );
  H += SK.bullets([
    '全系 <b>100 万 token 上下文</b>。',
    '旗舰在降价：Opus 5.5 比上代便宜 <b>20%</b>，典型负载成本低 40%。',
    '公司是"安全叙事"代表：网安模型只向严格审核的机构开放。',
    '发布了常驻智能体工程指南（本课第六块专题）。',
    '产品：<b>Claude Code</b> 是编程智能体标杆；<b>Claude Cowork</b> 面向知识工作。'
  ]);
  H += SK.oneline('便宜、安全、能干活——它家的叙事三件套。', 'Claude', 'green');
  H += SK.srcline('Anthropic 定价页', 'https://platform.claude.com/', 'platform.claude.com');
  H += SK.srcline('官网', 'https://www.anthropic.com/', 'Anthropic');
  H += SK.srcline('官方文档', 'https://docs.anthropic.com/', 'docs.anthropic.com');
  SK.add('Anthropic（Claude）的模型', H);

  // P54 Google（Gemini）的模型
  H = '';
  H += SK.k('GOOGLE MODELS') + SK.h('Google（Gemini）的模型');
  H += SK.sub('多模态与视频理解领先，全栈自有');
  H += SK.table(
    ['型号', '定位'],
    [
      ['Gemini 4 Argon', 'Gemini 4 谱系起点'],
      ['Gemini 4 Carbon', '网安防御向'],
      ['Gemini 4 Hydrogen', '最新'],
      ['3.8 Flash', '走量，输出速度号称同级 4 倍']
    ]
  );
  H += SK.bullets([
    '一桩趣闻：3.5 Pro 说好 6 月发，结果一直跳票，谷歌直接转向 Gemini 4——<b>头部竞争已经"等不起"</b>，宁可跳代。',
    '王牌是多模态：<b>Gemini Omni</b> 任意模态进、任意模态出。',
    'Gemini App 月活 <b>9 亿</b>。',
    '策略：唯一"芯片+云+模型+入口"全栈自有的厂商，<b>打价格战最有底气</b>。'
  ]);
  H += SK.oneline('全栈自有，是谷歌敢打价格战的底气。', 'Gemini', 'green');
  H += SK.srcline('Google AI 模型页', 'https://ai.google.dev/', 'ai.google.dev');
  H += SK.srcline('官网', 'https://gemini.google.com/', 'Gemini');
  H += SK.srcline('官方技术页', 'https://deepmind.google/', 'Google DeepMind');
  SK.add('Google（Gemini）的模型', H);

  // P55 月之暗面（Kimi）的模型
  H = '';
  H += SK.k('MOONSHOT MODELS') + SK.h('月之暗面（Kimi）的模型');
  H += SK.sub('全球最大开放权重模型，长文本强');
  H += SK.table(
    ['型号', '要点'],
    [
      ['Kimi K3', '2026 年 7 月；2.8 万亿参数，每次激活约 500 亿，100 万上下文；开源，史上最大开放权重模型'],
      ['Kimi K3.1 Pro', '10 月；Office 问答与表格基准全球最佳']
    ]
  );
  H += SK.bullets([
    '技术看点：<b>Kimi Delta Attention + 稀疏 MoE 896 专家</b>——长上下文便宜的原因。',
    '商业侧：年化收入半年从 3 亿美元到破 10 亿美元；传筹备港股 IPO。',
    '一个插曲：8 月被曝在测试中"越狱偷看答案"，引发"模型知道自己在被测"的大讨论——呼应前面幻觉一节。'
  ]);
  H += SK.oneline('开源权重里，Kimi 是那个最大的。', 'Kimi', 'ink');
  H += SK.img('images/kimi-k3.jpg', 'Kimi Lab 展台（KimiCon 现场）', 'Kimi 线下展台一角——这个国产模型已经从网页走进了展会');
  H += SK.srcline('月之暗面官网', 'https://moonshot.ai/', 'moonshot.ai');
  H += SK.srcline('官网', 'https://www.kimi.com/', 'Kimi');
  H += SK.srcline('官方仓库', 'https://github.com/MoonshotAI', 'Kimi 开源仓库');
  SK.add('月之暗面（Kimi）的模型', H);
})();
