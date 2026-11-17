/* 财政厅 AI 课 · 交互讲义（试看 5 页） */
(function () {
  'use strict';

  /* 静态页（index.html 内的 6 页）+ 各批次文件注册的扩展页 */
  var deck = document.getElementById('deck');
  (window.extraSlides || []).forEach(function (s) { deck.appendChild(s); });
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  /* 按讲义逻辑顺序排序（封面在前，未匹配的排最后保持原序） */
  var ORDER = [
    '封面', '开篇演示：一个能聊天的我', '官网现场：打开 frankfika.com', '分身实录：官网的真实操作', '今天八块内容',
    '分节页：人工智能发展简史',
    '规则系统：把规则写死', '机器学习：从例子里找规律', '深度学习：自己抽特征', '大模型：通用助手',
    '四阶段对照', '课堂互动', '课后就能试：报名 AI 大赛',
    '分节页：大模型基本结构',
    '三要素：数据、算法、算力', '训练像建厂，推理像开工', 'AI 产业链五层',
    '算力三兄弟：CPU、GPU、TPU', '超算、智算与通用算力',
    '算力卡里面都有什么', '算力禁售时间线', '算力小型化', '戴尔×OpenCSG：智能体超节点', '稠密算力 vs 稀疏算力', '模型怎么写出下一句', '架构：Token 生成的循环',
    'Token 和算力不是一回事', '不同模型、不同语言，消耗不一样',
    '同样一段中文，不同模型算的是不同的账', '真正的账要两道乘：分词效率 × 单价', '几亿 token 是多少钱', '算力券 vs token 券', '一个 token 的成本账', '为什么 B300 贵，国内买还划算吗', '中国 token 为什么难出海', 'AI 已是国家竞争的核心资产', '开源为什么必然胜利', 'AI 主权：开篇五问', '模型的局限',
    '多模态的模型', '世界上有多少个模型', '开源和闭源之争', '为什么开源是趋势，本地为什么更需要开源',
    '分节页：常用概念',
    '概念总表', '提示词：布置任务的便签', '上下文：一次能读完的桌面', '幻觉：流畅的假话',
    '知识库：先翻你们准备的文件再答', 'RAG 怎么做', '架构：RAG 检索流程', '财政场景里，RAG 用在哪里',
    'RAG、知识库和微调：别混', '微调与 LoRA', '智能体：按步骤做事', 'MCP：智能体的 USB-C 接口', 'A2A：智能体之间怎么协作', 'Skill：把办法沉淀成文件', '架构：MCP·A2A·Skill 协作',
    '选型五问', 'Harness 工程', 'DeepSeek Harness 深度解读', 'DeepSeek Harness 深度解读（图）', '架构：DeepSeek Harness 内核', 'DeepSeek Harness 的四种模式',
    '分节页：工具专题',
    '先分清：产品名和模型名', '模型巡礼总表',
    'OpenAI 的模型', 'Anthropic（Claude）的模型', 'Google（Gemini）的模型', '月之暗面（Kimi）的模型',
    'DeepSeek 的模型', '智谱（GLM）的模型', 'MiniMax 的模型', '阿里（通义千问）的模型', '七家对比小结',
    'RAG 四平台', '先选生态，再选功能', '通用对话类：元宝 / 文心 / ChatGPT / 国产三强',
    '扣子退场：平台会死', '编程类工具',
    'OpenClaw：能力上限', 'Manus 收购大戏', 'AI 办公四助手',
    '深看：WorkBuddy（腾讯）', '深看：Claude Cowork（Anthropic）', '深看：豆包工作（字节）', '深看：千问办公（阿里）',
    '个人助手三件套', '深看：Today（国产）', '深看：Meta Muse', '深看：Grok Bot（xAI）',
    '有趣的实践——Vibe Coding 是什么', 'Claude Code 做视频', 'REA 逆向工程',
    '分节页：安全、开源平台与本地部署',
    'Hugging Face', 'OpenCSG：私有化版', '认识 OpenCSG', '私有化层级', '本体论 Ontology', 'AI 主权', '计价自主：分词表就是隐形的货币政策',
    'Arete-27B 事件', 'DevOps 与 AgenticOps', 'AgenticOps：智能体的全生命周期运维',
    'OpenClaw：风险下限', 'OpenClaw 结构拆解：它到底是个什么东西', '架构：OpenClaw 五层与消息链路', 'OpenClaw 生态全貌',
    'Hermes Agent 拆解：另一只"会成长的"开源智能体', '架构：Hermes 成长闭环', '私有化、开源，以及对机关的结论',
    '分节页：从对话窗口到常驻协作',
    '常驻协作：为什么', '从聊天框到数字同事', '运行保障与五问', '常驻协作长什么样',
    '深读：DeepSeek 篇', '深读：Anthropic 篇', '五个部件速查表', '两篇对照与财政启示',
    '分节页：安全红线',
    '四条红线', '公开要求里怎么写的', '能做与不能做', '同桌讨论：本处室哪类材料绝不能进公有云',
    '人核与责任在使用人',
    '分节页：提示词入门',
    '协作四步骤', '五项：角色任务背景约束格式', '其他提示词框架',
    '弱提示词 vs 强提示词', '课堂演示：完整财政示例', '故意看一次幻觉', '现场演示与人核清单',
    '收束：五句话'];
  slides.sort(function (a, b) {
    var ia = ORDER.indexOf(a.getAttribute('data-title'));
    var ib = ORDER.indexOf(b.getAttribute('data-title'));
    if (ia === -1) ia = 900 + slides.indexOf(a);
    if (ib === -1) ib = 900 + slides.indexOf(b);
    return ia - ib;
  });
  slides.forEach(function (s) { deck.appendChild(s); });
  /* 每页脚标：第几页 / 共几页 */
  slides.forEach(function (s, i) {
    var f = document.createElement('div');
    f.className = 'pagefoot';
    f.innerHTML = '第 <b>' + (i + 1) + '</b> 页 · 共 ' + slides.length + ' 页　<span style="opacity:.65">输入页码可直达</span>';
    s.appendChild(f);
  });
  /* 正文包进 .slide-body 滚动区，页脚留在纸面底部固定不随内容滚动 */
  slides.forEach(function (s) {
    var f = s.querySelector(':scope > .pagefoot');
    if (!f) return;
    var body = document.createElement('div');
    body.className = 'slide-body';
    while (s.firstChild !== f) body.appendChild(s.firstChild);
    s.insertBefore(body, f);
  });
  /* 页码跳转 */
  var jumpInput = document.getElementById('jumpInput');
  function doJump() {
    var n = parseInt(jumpInput.value, 10);
    if (!isNaN(n) && n >= 1 && n <= slides.length) { go(n - 1); jumpInput.value = ''; jumpInput.blur(); }
  }
  jumpInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') doJump(); });
  jumpInput.addEventListener('change', doJump);
  var current = 0;
  var pg = document.getElementById('pg');
  var pgTitle = document.getElementById('pgTitle');
  var barFill = document.getElementById('barFill');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');

  function go(i) {
    if (i < 0 || i >= slides.length || i === current) return;
    slides[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    var sb = slides[current].querySelector(':scope > .slide-body');
    if (sb) sb.scrollTop = 0; else slides[current].scrollTop = 0;
    window.scrollTo(0, 0);
    render();
  }

  function render() {
    pg.textContent = (current + 1) + ' / ' + slides.length;
    pgTitle.textContent = slides[current].getAttribute('data-title') || '';
    barFill.style.width = ((current + 1) / slides.length * 100) + '%';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }

  prevBtn.addEventListener('click', function () { go(current - 1); });
  nextBtn.addEventListener('click', function () { go(current + 1); });

  document.addEventListener('keydown', function (e) {
    if (e.target && e.target.tagName === 'INPUT') return; /* 输入框里不打断打字 */
    var k = e.key.toLowerCase();
    if (k === 'f') { e.preventDefault(); toggleFullscreen(); }
    else if (k === 'i') { e.preventDefault(); toggleImmersive(); }
    else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(current + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); }
    else if (e.key === 'Home') { go(0); }
    else if (e.key === 'End') { go(slides.length - 1); }
    else if (/^[0-9]$/.test(e.key)) { var n = parseInt(e.key, 10); if (n >= 1 && n <= slides.length) go(n - 1); }
  });

  /* 触摸滑动 */
  var touchX = null;
  document.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) go(current + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  /* ---------- 全屏 / 沉浸模式 ---------- */
  var fsBtn = document.getElementById('fsBtn');
  var imBtn = document.getElementById('imBtn');
  var exitImmersiveBtn = document.getElementById('exitImmersive');

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen && document.exitFullscreen();
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(function () { /* 用户可按 F 重试 */ });
    }
  }
  function setImmersive(on) {
    document.body.classList.toggle('immersive', on);
    imBtn.classList.toggle('on', on);
  }
  function toggleImmersive() { setImmersive(!document.body.classList.contains('immersive')); }

  fsBtn.addEventListener('click', toggleFullscreen);
  imBtn.addEventListener('click', toggleImmersive);
  exitImmersiveBtn.addEventListener('click', function () { setImmersive(false); });
  document.addEventListener('fullscreenchange', function () {
    var fs = !!document.fullscreenElement;
    document.body.classList.toggle('is-fullscreen', fs);
    fsBtn.classList.toggle('on', fs);
  });

  /* ---------- P2 目录 ---------- */
  var tocData = [
    { n: '1', name: '人工智能发展简况', target: '分节页：人工智能发展简史', hint: '规则·机器学习·深度学习·大模型' },
    { n: '2', name: '大模型基本结构', target: '分节页：大模型基本结构', hint: '数据·算法·算力，Token 与推理' },
    { n: '3', name: '常用概念白话说明', target: '分节页：常用概念', hint: '提示词·上下文·幻觉·RAG·智能体' },
    { n: '4', name: '工具与助手', target: '分节页：工具专题', hint: '模型巡礼·平台·OpenClaw·办公助手' },
    { n: '5', name: '开源平台与本地部署', target: '分节页：安全、开源平台与本地部署', hint: 'Hugging Face·OpenCSG·私有化' },
    { n: '6', name: '从对话窗口到常驻协作', target: '分节页：从对话窗口到常驻协作', hint: '两篇原文深读·五个部件' },
    { n: '7', name: '安全红线', target: '分节页：安全红线', hint: '四条红线·能做与不能做·人核' },
    { n: '8', name: '提示词工程入门', target: '分节页：提示词入门', hint: '五项法·弱强对比·现场演示' }
  ];
  var tocEl = document.getElementById('toc');
  tocData.forEach(function (t) {
    var b = document.createElement('button');
    b.className = 'toc-card';
    b.innerHTML =
      '<span class="go">去这节</span>' +
      '<div class="toc-num">' + t.n + '</div>' +
      '<div class="toc-name">' + t.name + '</div>' +
      '<div class="toc-hint">' + t.hint + '</div>';
    b.addEventListener('click', function () {
      var idx = -1;
      slides.forEach(function (s, i) { if (s.getAttribute('data-title') === t.target) idx = i; });
      if (idx >= 0) go(idx);
      else {
        var h = b.querySelector('.toc-hint');
        h.textContent = '未找到这一节，请翻页浏览。';
        h.style.color = '#c8442f';
        setTimeout(function () { h.textContent = t.hint; h.style.color = ''; }, 2200);
      }
    });
    tocEl.appendChild(b);
  });

  /* ---------- P4 互动判断 ---------- */
  var quizData = [
    { q: '校验公务卡消费是否超出差旅费标准', a: '规则', cls: 'rule' },
    { q: '把一篇 40 页已公开的专项规划压成两页要点', a: '大模型', cls: 'llm' },
    { q: '支付前核对收款账号与合同备案账号', a: '规则', cls: 'rule' },
    { q: '根据处务会发言记录整理三条待办', a: '大模型', cls: 'llm' },
    { q: '检测投标文件是否盖了公章', a: '机器学习', cls: 'ml' },
    { q: '把英文 IMF 财政报告译成中文摘要', a: '大模型', cls: 'llm' },
    { q: '自动拦截预算余额不足的支付申请', a: '规则', cls: 'rule' },
    { q: '把政策解读初稿里"口气说满"的句子找出来改稳妥', a: '大模型', cls: 'llm' },
    { q: '年底标记"支出进度明显异常"的预算单位名单', a: '机器学习', cls: 'ml' },
    { q: '把 12 份处室总结合并成一份厅工作总结框架', a: '大模型', cls: 'llm' }
  ];
  var quizEl = document.getElementById('quiz');
  var quizCount = document.getElementById('quizCount');
  var revealedCount = 0;
  quizData.forEach(function (item, idx) {
    var b = document.createElement('button');
    b.className = 'quiz';
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML =
      '<span class="idx">' + (idx + 1) + '.</span>' +
      '<span class="q">' + item.q + '</span>' +
      '<span class="ans">点我揭底</span>';
    b.addEventListener('click', function () {
      var ans = b.querySelector('.ans');
      if (!b.classList.contains('revealed')) {
        b.classList.add('revealed');
        ans.textContent = item.a;
        ans.classList.add(item.cls);
        b.setAttribute('aria-pressed', 'true');
        revealedCount++;
        quizCount.textContent = revealedCount;
      } else {
        b.classList.remove('revealed');
        ans.textContent = '点我揭底';
        ans.classList.remove(item.cls);
        b.setAttribute('aria-pressed', 'false');
        revealedCount--;
        quizCount.textContent = revealedCount;
      }
    });
    quizEl.appendChild(b);
  });

  /* ---------- P5 模型巡礼 ---------- */
  var modelData = [
    { v: 'OpenAI', url: 'https://openai.com', f: 'GPT-6.1 系列（最高端 GPT-6 Astra）', t: '编程与专业工作主力', o: 'closed', c: '14 个月七个大版本，旧版加速退役——型号表的有效期以月计。' },
    { v: 'Anthropic', url: 'https://www.anthropic.com', f: 'Claude Opus 5.5 / Sonnet 5.5 / Haiku 5.5', t: '长程智能体与代码标杆，安全叙事最强', o: 'closed', c: '旗舰在降价：Opus 5.5 比上代便宜 20%，典型负载成本低 40%。' },
    { v: 'Google', url: 'https://deepmind.google/technologies/gemini/', f: 'Gemini 4 系列（Argon / Carbon / Hydrogen）', t: '多模态与视频理解领先', o: 'closed', c: '唯一"芯片+云+模型+入口"全栈自有的厂商，打价格战最有底气。' },
    { v: '月之暗面', url: 'https://www.moonshot.cn', f: 'Kimi K3 / K3.1 Pro', t: '全球最大开放权重模型，长文本强', o: 'open', c: '2.8 万亿参数、每次只激活约 500 亿——长上下文便宜的原因。' },
    { v: 'DeepSeek', url: 'https://www.deepseek.com', f: 'V4.1 Flash（1017 版 763B 开源）', t: '极致性价比，全球降价第一驱动力', o: 'open', c: '读材料激活约 80 亿参数、写答案约 160 亿——"读便宜、写够用"。' },
    { v: '智谱', url: 'https://www.z.ai', f: 'GLM-5.3 / GLM-5.3-Flash', t: '不换基座、纯后训练提升 50%', o: 'open', c: '已上架 AWS Bedrock 按调用量分成——中国开源模型从"被用"到"被卖"。' },
    { v: 'MiniMax', url: 'https://www.minimaxi.com', f: 'M3.1 Flash', t: 'Agent 批量任务成本降 70%', o: 'open', c: '上线 72 小时处理超 100 万亿 token；语音视频音乐线国内最全。' },
    { v: '阿里', url: 'https://qianwen.aliyun.com', f: 'Qwen3.8-Max + 开源梯队', t: '尺寸谱系最全，全球下载量破亿', o: 'open', c: 'Qwen3.8-27B 是 2026 年"小模型翻身"的标志，17GB 文件跑准旗舰。' }
  ];
  var tbody = document.querySelector('#models tbody');
  modelData.forEach(function (m) {
    var tr = document.createElement('tr');
    tr.setAttribute('data-o', m.o);
    tr.setAttribute('tabindex', '0');
    var badge = m.o === 'open'
      ? '<span class="badge o">开源</span>'
      : '<span class="badge c">闭源</span>';
    tr.innerHTML =
      '<td class="hand">' + m.v + '</td>' +
      '<td>' + m.f + '<span class="cmt">点评：' + m.c + '</span></td>' +
      '<td>' + m.t + '</td>' +
      '<td>' + badge + '<br/><a class="ext" href="' + m.url + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">官网 ↗</a></td>';
    function toggle() { tr.classList.toggle('open'); }
    tr.addEventListener('click', toggle);
    tr.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    tbody.appendChild(tr);
  });

  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      chip.classList.add('on');
      var f = chip.getAttribute('data-f');
      Array.prototype.slice.call(tbody.children).forEach(function (tr) {
        var show = f === 'all' || tr.getAttribute('data-o') === f;
        tr.classList.toggle('hide', !show);
      });
    });
  });

  /* ---------- P6 算力卡拆解 ---------- */
  var gpuTabs = Array.prototype.slice.call(document.querySelectorAll('.gpu-tab'));
  var hotspots = Array.prototype.slice.call(document.querySelectorAll('.hotspot'));
  function selectPart(i) {
    gpuTabs.forEach(function (t, j) { t.classList.toggle('on', j === i); });
    hotspots.forEach(function (h, j) { h.classList.toggle('hot', j === i); });
  }
  gpuTabs.forEach(function (t, i) { t.addEventListener('click', function () { selectPart(i); }); });
  hotspots.forEach(function (h, i) {
    h.setAttribute('tabindex', '0');
    h.addEventListener('click', function () { selectPart(i); });
    h.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPart(i); } });
  });
  selectPart(0);

  render();
})();
