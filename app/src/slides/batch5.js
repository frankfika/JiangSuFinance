// batch5 — P61A-D / P62 / P62B
(function () {
  var H = '';
  H += SK.k('RAG PLATFORMS') + SK.h('RAG 四平台') +
    SK.sub('四种形态，同一件事：把文档变成能问的知识') +
    SK.cards([
      { n: '1', title: 'Dify · 应用底座', body: '开源 AI 应用开发平台，可视化编排工作流与智能体，数百种模型接入，可私有化部署。适合信息化处牵头做厅内 AI 应用底座。' },
      { n: '2', title: 'FastGPT · 轻快知识库', body: '开源知识库问答系统，部署约 10 分钟上手，多格式文档自动结构化，中文 RAG 精度第一梯队。' },
      { n: '3', title: 'MaxKB · 企业化', body: '开源企业知识库平台，开箱即用，支持本地大模型对接与 MCP 工具调用，社区版免费、专业版付费。' },
      { n: '4', title: 'ima · 现成云知识库', body: '腾讯出品的个人+团队知识中枢，导入 PDF/Word/PPT/网页即建库，零部署零运维。公有云，只放已公开或批准可上云的文件。' }
    ]) +
    SK.p('Dify 适合有技术团队、要把 AI 应用接到内部系统的单位；FastGPT 求快求稳；MaxKB 走正式采购与原厂服务路径；ima 适合处室级快速建一个政策文件问答库。') +
    '<div class="shotrow rise">' +
    '<figure><img src="images/dify.png" alt="Dify 界面"/><figcaption>Dify · 可视化编排工作台</figcaption></figure>' +
    '<figure><img src="images/fastgpt.png" alt="FastGPT 界面"/><figcaption>FastGPT · 知识库问答</figcaption></figure>' +
    '<figure><img src="images/maxkb.png" alt="MaxKB 界面"/><figcaption>MaxKB · 企业知识库</figcaption></figure>' +
    '<figure><img src="images/tencent-ima.png" alt="腾讯 ima 界面"/><figcaption>ima · 导入即建库</figcaption></figure>' +
    '</div>' +
    SK.srcline('官方仓库', 'https://github.com/langgenius/dify', 'Dify') +
    SK.srcline('官方仓库', 'https://github.com/labring/FastGPT', 'FastGPT') +
    SK.srcline('官方仓库', 'https://github.com/1Panel-dev/MaxKB', 'MaxKB');
  SK.add('RAG 四平台', H);
})();

(function () {
  var H = '';
  H += SK.k('PICK THE ECOSYSTEM') + SK.h('先选生态，再选功能') +
    SK.sub('同一个"知识库问答"，四条完全不同的落地路线') +
    SK.table(
      ['平台', '定位', '适合', '短板'],
      [
        ['Dify', 'AI 应用底座，可视化编排工作流与智能体', '有技术团队、要接入内部系统的单位', '学习曲线陡；制度类长文档需按章节标题切分'],
        ['FastGPT', '轻量、快、稳的知识库问答', '小团队快速搭制度问答、口径库问答', '复杂多层级权限偏弱，深度定制有限'],
        ['MaxKB', '稳、规范、企业化的知识库平台', '传统企事业单位、合规内库、先落地再迭代', '前沿功能更新不如 Dify / FastGPT 快'],
        ['ima', '腾讯现成的云知识中枢（SaaS）', '处室级政策文件问答库，零部署零运维', '公有云，敏感材料不进']
      ]
    ) +
    SK.oneline('选平台先看生态和迁移成本，再看功能列表', '取舍', 'ink') +
    '<div class="shotrow rise">' +
    '<figure><img src="images/dify-site.png" alt="Dify 官网"/><figcaption>Dify 官网：AI Agent Management Platform</figcaption></figure>' +
    '<figure><img src="images/ima-app.png" alt="腾讯 ima 官网"/><figcaption>腾讯 ima 官网：腾讯 AI 知识管家</figcaption></figure>' +
    '</div>' +
    SK.srcline('官网', 'https://ima.qq.com/', '腾讯 ima') +
    SK.srcline('官网', 'https://dify.ai/', 'Dify') +
    SK.srcline('官网', 'https://fastgpt.in/', 'FastGPT');
  SK.add('先选生态，再选功能', H);
})();

(function () {
  var H = '';
  H += SK.k('COZE EXITS') + SK.h('扣子退场：平台会死') +
    SK.sub('2025 年中国智能体开发平台公有云份额第一，2026 年逐级收缩') +
    SK.bullets([
      '2025 年以 <b>19.3%</b> 份额居中国智能体开发平台公有云第一',
      '<b>5 月</b>　专业版下线，付费用户降为免费版',
      '<b>7 月起</b>　豆包渠道入口下线；20 余款第三方模型分批下架，绑定这些模型的智能体直接中断',
      '<b>9 月</b>　海外版核心能力批量退役',
      '<b>10.29</b>　企业版公告：11 月底停售新客户，存量最晚 2027 年底全面下线'
    ]) +
    SK.p('它没有"全面关停"——个人免费版还在。准确说法是：从"企业级 Agent 开发平台"收缩回"个人 AI 助手"。') +
    SK.oneline('平台会死，能力要可迁移；大厂的免费午餐都有保质期', '警', 'green') +
    SK.img('images/coze.png', '扣子官网：工作交给扣子，创造不必等待', '官网截图：个人版仍在，企业版已停售') +
    SK.srcline('官网', 'https://coze.cn/', '扣子 Coze') +
    SK.srcline('官方文档与公告', 'https://docs.coze.cn/', '扣子企业版下线公告') +
    SK.srcline('官网', 'https://www.doubao.com/', '豆包');
  SK.add('扣子退场：平台会死', H);
})();

(function () {
  var H = '';
  H += SK.k('CODING TOOLS') + SK.h('编程类工具') +
    SK.sub('2026 年三代同堂：代码补全 → AI 结对编程 → 智能体自主开发') +
    SK.bullets([
      '<b>Claude Code</b>：终端里的智能体标杆，接管任务、自主多步执行、跨文件重构；上线半年年化收入 <b>10 亿美元</b>。是替你做。',
      '<b>OpenAI Codex</b>：终端 + 云端沙盒两种形态，描述任务后放手让它跑；已并入 ChatGPT。',
      '<b>Trae</b>：字节出品，国内个人开发者渗透率高，SOLO 模式从需求到部署一串做完。',
      '<b>Qoder / Qwen Code</b>：阿里出品，国内云端工程托管份额第一；命令行每天 2000 次免费请求。',
      '<b>GitHub Copilot</b>：鼻祖与市占率第一（约 <b>42%</b>），多模型可选。是陪你写。'
    ]) +
    SK.srcline('官网', 'https://claude.com/product/claude-code', 'Claude Code') +
    SK.srcline('官网', 'https://github.com/features/copilot', 'GitHub Copilot') +
    SK.srcline('官网', 'https://www.trae.ai/', 'Trae（字节跳动）');
  SK.add('编程类工具', H);
})();

(function () {
  var H = '';
  H += SK.k('FROM CHATBOX TO COLLEAGUE') + SK.h('从聊天框到数字同事') +
    SK.sub('工具的演进，是"谁来完成"的一次次交接') +
    SK.cards([
      { n: '1', title: '代码补全', body: 'Copilot 时代，编辑器里补全代码，多模型可选，市占率约 42%。陪你写。' },
      { n: '2', title: 'AI 结对编程', body: 'Claude Code、Codex 接管任务，自主多步执行、跨文件重构。替你做。' },
      { n: '3', title: '智能体自主开发', body: 'Trae SOLO 从需求到部署一串做完，写软件正在变成说需求。' }
    ]) +
    SK.bullets([
      '平台会死，能力要可迁移：文档与流程沉淀在<b>能带走</b>的地方',
      '模型供应链脆弱，业务连续性要自己兜底',
      '大厂的免费午餐都有保质期，别把核心流程押在单一平台上'
    ]) +
    SK.oneline('工具会换、会死，沉淀下来的知识和流程才是自己的', '取舍', 'ink');
  SK.add('从聊天框到数字同事', H);
})();
