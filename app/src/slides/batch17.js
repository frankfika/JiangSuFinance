/* batch17 — 架构解析图（手绘 SVG，插在对应深度页之后） */
(function () {
  var INK = '#1b1a18', RED = '#c8442f', MUT = '#77726a', FILL = '#efece4', RFILL = '#f6e8e4', FF = "Georgia,'Songti SC','SimSun',serif";
  var DEFS = '<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + INK + '"/></marker>'
    + '<marker id="ahr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + RED + '"/></marker></defs>';
  function box(x, y, w, h, t1, t2, fill, stroke, t1size, t2size) {
    fill = fill || '#fdfcf8'; stroke = stroke || INK;
    var s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.6"/>';
    if (t2) {
      s += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 - 5) + '" font-size="' + (t1size || 16) + '" fill="' + INK + '" text-anchor="middle" font-weight="bold" font-family="' + FF + '">' + t1 + '</text>';
      s += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 16) + '" font-size="' + (t2size || 11.5) + '" fill="' + MUT + '" text-anchor="middle" font-family="' + FF + '">' + t2 + '</text>';
    } else {
      s += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) + '" font-size="' + (t1size || 16) + '" fill="' + INK + '" text-anchor="middle" font-weight="bold" font-family="' + FF + '">' + t1 + '</text>';
    }
    return s;
  }
  function txt(x, y, s, size, fill, anchor, bold) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + (size || 12) + '" fill="' + (fill || MUT) + '" text-anchor="' + (anchor || 'middle') + '"' + (bold ? ' font-weight="bold"' : '') + ' font-family="' + FF + '">' + s + '</text>';
  }

  /* ---- 1. DeepSeek Harness 内核 ---- */
  var H = '';
  H += SK.k('Architecture · DeepSeek Harness') + SK.h('架构：DeepSeek Harness 内核');
  H += SK.sub('「一切皆插件」不是口号——把官方设计画出来，内核薄得只剩三件事');
  var s = '<svg viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  var left = [['模型适配器', 'OpenAI · Anthropic · Kimi 等近 40 家'], ['工具', '文件 · 终端 · 浏览器'], ['沙箱', '隔离执行，出事不扩散'], ['审批策略', '命令级白名单 / 黑名单 / 询问']];
  var right = [['会话管理', '多会话 · 车道 · 记忆'], ['智能体循环', '思考循环本身也是插件'], ['调度', '定时任务 · 队列'], ['UI', 'Web 界面 · 桌面端']];
  var i, y;
  for (i = 0; i < 4; i++) {
    y = 36 + i * 72;
    s += box(24, y, 216, 56, left[i][0], left[i][1], '#fdfcf8', INK, 15, 10.5);
    s += '<line x1="240" y1="' + (y + 28) + '" x2="294" y2="' + (y + 28) + '" stroke="' + MUT + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
    s += box(520, y, 216, 56, right[i][0], right[i][1], '#fdfcf8', INK, 15, 10.5);
    s += '<line x1="520" y1="' + (y + 28) + '" x2="466" y2="' + (y + 28) + '" stroke="' + MUT + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
  }
  s += '<rect x="294" y="150" width="172" height="112" rx="12" fill="' + RFILL + '" stroke="' + RED + '" stroke-width="2.2"/>';
  s += txt(380, 188, 'Cordis 内核', 18, RED, 'middle', true);
  s += txt(380, 212, '挂载 · 卸载 · 检查依赖', 12, INK);
  s += txt(380, 232, '热插拔，不打断长任务', 11, MUT);
  s += '<line x1="380" y1="350" x2="380" y2="266" stroke="' + RED + '" stroke-width="1.6" marker-end="url(#ahr)"/>';
  s += '<rect x="24" y="350" width="712" height="84" rx="10" fill="' + INK + '"/>';
  s += txt(380, 384, '追记式日志 · 唯一真相源', 17, '#f7f5f0', 'middle', true);
  s += txt(380, 410, '模型看到的一切必须写进日志 —— 每次上下文注入、每次工具调用都可回放、可审计', 12.5, '#cfc9bd');
  s += txt(380, 30 + 4 * 72 + 10, '', 1);
  s += txt(112, 24, '插件（随便换）', 13, MUT, 'middle', true);
  s += txt(628, 24, '插件（随便换）', 13, MUT, 'middle', true);
  s += txt(380, 146, '内核（只有三行职责）', 13, MUT, 'middle', true);
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.p('看这张图的读法：<b>内核越薄，越没有特权</b>。传统框架里"换一环要改源码"，在这里换模型、换审批、换界面都只是换一个插件。审计的人盯下面那条黑带子就够了。');
  H += SK.oneline('没有特权内核，就没有改不动的黑箱。', '薄内核', 'ink');
  H += SK.srcline('源码', 'https://github.com/deepseek-ai/deepseek-harness', 'deepseek-ai/deepseek-harness');
  SK.add('架构：DeepSeek Harness 内核', H);

  /* ---- 2. OpenClaw 五层与消息链路 ---- */
  H = '';
  H += SK.k('Architecture · OpenClaw') + SK.h('架构：OpenClaw 五层与消息链路');
  H += SK.sub('静态看是五层，动态看是一条消息的一生——机关里的"收文、分件、经办、发文"');
  s = '<svg viewBox="0 0 760 500" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  var layers = [
    ['① 用户接口层', 'CLI · 网页 · 手机 App · 聊天软件'],
    ['② Gateway 网关层', '连接管理 · 路由 · 热加载 · 健康监控（常驻中枢）'],
    ['③ 消息处理层', '会话车道 · 智能体执行器 · 出站投递'],
    ['④ 扩展与插件层', '通道插件（钉钉/飞书/Telegram…）· 技能系统 · 子 Agent'],
    ['⑤ 基础设施层', '密钥管理 · 日志 · 定时任务 · 记忆检索 · 沙箱']
  ];
  for (i = 0; i < 5; i++) {
    y = 30 + i * 82;
    var hot = (i === 3);
    s += box(24, y, 352, 68, layers[i][0], layers[i][1], hot ? RFILL : '#fdfcf8', hot ? RED : INK, 15.5, i === 1 ? 10.5 : 11);
  }
  s += txt(200, 20, '五层结构（静态）', 13, MUT, 'middle', true);
  var steps = ['消息进来', '翻译成统一格式', '路由 + 车道排队（同会话串行）', '组装上下文 → 模型推理', '调工具 / 派子 Agent', '投递回原软件 · 记忆持久化'];
  for (i = 0; i < 6; i++) {
    y = 30 + i * 70;
    s += box(452, y, 284, 50, (i + 1) + '. ' + steps[i], '', i === 4 ? RFILL : '#fdfcf8', i === 4 ? RED : INK, 13);
    if (i < 5) s += '<line x1="594" y1="' + (y + 50) + '" x2="594" y2="' + (y + 70) + '" stroke="' + INK + '" stroke-width="1.4" marker-end="url(#ah)"/>';
  }
  s += txt(594, 20, '一条消息的路径（动态）', 13, MUT, 'middle', true);
  s += '<path d="M 376 234 C 410 234 416 234 448 234" fill="none" stroke="' + RED + '" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#ahr)"/>';
  s += txt(412, 222, '进来', 11, RED);
  s += '<path d="M 448 424 C 416 424 410 300 380 268" fill="none" stroke="' + MUT + '" stroke-width="1.3" stroke-dasharray="5 4" marker-end="url(#ah)"/>';
  s += txt(404, 352, '回写', 11, MUT);
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.p('给财政的类比：<b>网关层是总值班室，消息处理层是收发文处室，插件层是外挂科室，基础设施层是机要档案室</b>。红色那层（④）就是它"什么都能干"的来源，也是后面安全风险页要钉住的位置。');
  H += SK.oneline('能力来自第④层，风险也来自第④层。', '同一层', 'ink');
  H += SK.srcline('架构参考', 'https://www.huxiu.com/article/4842324.html', '虎嗅《万字拆解 OpenClaw》五层架构');
  H += SK.srcline('源码', 'https://github.com/openclaw/openclaw', 'openclaw/openclaw');
  SK.add('架构：OpenClaw 五层与消息链路', H);

  /* ---- 3. Hermes 成长闭环 ---- */
  H = '';
  H += SK.k('Architecture · Hermes Agent') + SK.h('架构：Hermes 成长闭环');
  H += SK.sub('「会成长」不是模型变聪明了，是 Harness 层在循环：观察 → 提取 → 进化 → 评估 → 固化');
  s = '<svg viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  var cx = 215, cy = 235, R = 130;
  var nodes = [[0, -90, '观察任务'], [1, -18, '提取技能'], [2, 54, '进化'], [3, 126, '评估回放'], [4, 198, '固化记忆']];
  var pts = [];
  for (i = 0; i < 5; i++) {
    var a = nodes[i][1] * Math.PI / 180;
    pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  for (i = 0; i < 5; i++) {
    var p1 = pts[i], p2 = pts[(i + 1) % 5];
    var mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2;
    var dx = mx - cx, dy = my - cy, L = Math.sqrt(dx * dx + dy * dy);
    var sx = cx + (dx / L) * (R + 6), sy = cy + (dy / L) * (R + 6);
    var ex = cx + (dx / L) * (R - 40), ey = cy + (dy / L) * (R - 40);
    s += '<line x1="' + sx.toFixed(0) + '" y1="' + sy.toFixed(0) + '" x2="' + ex.toFixed(0) + '" y2="' + ey.toFixed(0) + '" stroke="' + INK + '" stroke-width="1.4" marker-end="url(#ah)"/>';
  }
  for (i = 0; i < 5; i++) {
    var fillc = (i === 2) ? RFILL : '#fdfcf8', stc = (i === 2) ? RED : INK;
    s += '<rect x="' + (pts[i][0] - 62) + '" y="' + (pts[i][1] - 24) + '" width="124" height="48" rx="9" fill="' + fillc + '" stroke="' + stc + '" stroke-width="1.6"/>';
    s += txt(pts[i][0], pts[i][1] + 5, nodes[i][2], 15, INK, 'middle', true);
  }
  s += txt(pts[2][0], pts[2][1] + 34, 'Gene → SKILL.md', 10.5, RED);
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="52" fill="' + FILL + '" stroke="' + INK + '" stroke-width="1.6"/>';
  s += txt(cx, cy - 4, '越用越强', 16, INK, 'middle', true);
  s += txt(cx, cy + 16, '成长在 Harness 层', 10.5, MUT);
  var mem = [['持久记忆', '环境事实与项目经验，约 800 token'], ['用户画像', '偏好与沟通风格'], ['会话全文检索', 'SQLite 全文搜索，翻回任何历史对话']];
  for (i = 0; i < 3; i++) {
    y = 80 + i * 88;
    s += box(430, y, 300, 70, mem[i][0], mem[i][1], '#fdfcf8', INK, 15.5, 11);
  }
  s += txt(580, 60, '记忆三层（它记得什么）', 13, MUT, 'middle', true);
  s += '<line x1="430" y1="345" x2="380" y2="300" stroke="' + MUT + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
  s += box(430, 348, 300, 66, '模型权重不动', '成长的是外挂的技能与记忆，不是大模型本身', RFILL, RED, 15.5, 10.5);
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.p('读图要点：进化环节把经验写成 <b>SKILL.md</b>（技能包），评估通过才固化——所以它"越用越顺手"是可解释的，不是玄学。也因为成长发生在 Harness 层，<b>换一个大模型，技能还在</b>。');
  H += SK.oneline('所谓成长，是把做过的题变成下一次的草稿纸。', '成长', 'green');
  H += SK.srcline('源码', 'https://github.com/NousResearch/hermes-agent', 'NousResearch/hermes-agent');
  SK.add('架构：Hermes 成长闭环', H);

  /* ---- 4. RAG 检索流程 ---- */
  H = '';
  H += SK.k('Architecture · RAG') + SK.h('架构：RAG 检索流程');
  H += SK.sub('一句话：先翻你们准备的文件，再回答——把"它读过什么"控制在你们手里');
  s = '<svg viewBox="0 0 760 350" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  var pipe = [['提问', '处室同事的问题'], ['检索', '知识库 · 向量索引'], ['拼接', '检索结果＋提示词＋问题'], ['生成', '大模型据此作答'], ['人核', '数字·文号·专名核对']];
  for (i = 0; i < 5; i++) {
    var x = 20 + i * 150;
    var hot = (i === 1);
    s += box(x, 50, 124, 72, pipe[i][0], pipe[i][1], hot ? RFILL : '#fdfcf8', hot ? RED : INK, 16, 10);
    if (i < 4) s += '<line x1="' + (x + 124) + '" y1="86" x2="' + (x + 150) + '" y2="86" stroke="' + INK + '" stroke-width="1.5" marker-end="url(#ah)"/>';
  }
  s += txt(380, 30, '一条问题的完整链路（知识库环节是可以替换、可以审计的）', 12.5, MUT);
  s += box(20, 190, 350, 110, 'RAG · 改它「读什么」', '模型不动；知识常更新，适合制度文件；来源可回查', '#fdfcf8', INK, 16, 11.5);
  s += box(390, 190, 350, 110, '微调 · 改模型权重', '慢、贵、要标注数据；适合固定口径与文风', '#fdfcf8', MUT, 16, 11.5);
  s += '<line x1="370" y1="245" x2="390" y2="245" stroke="' + RED + '" stroke-width="1.6" marker-end="url(#ahr)" marker-start="url(#ahr)"/>';
  s += txt(380, 232, '常搭配', 11, RED);
  s += txt(380, 322, 'RAG 管"知识的时效"，微调管"说话的风格"——别指望一个解决另一个', 12, MUT);
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.oneline('先翻文件再开口，答错也能找到是哪份文件教错的。', '可回查', 'ink');
  H += SK.srcline('论文原文', 'https://arxiv.org/abs/2005.11401', 'RAG 原始论文（Meta，2020）');
  SK.add('架构：RAG 检索流程', H);

  /* ---- 5. Token 生成的循环 ---- */
  H = '';
  H += SK.k('Architecture · Next Token') + SK.h('架构：Token 生成的循环');
  H += SK.sub('大模型全部的本事，就是这个圈转了几万亿次之后的样子');
  s = '<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  cx = 380; cy = 205; R = 135;
  var tn = [[0, -90, '输入文字'], [1, -18, '切成 Token'], [2, 54, '进上下文窗口'], [3, 126, '算出概率分布'], [4, 198, '采样·吐出下一个']];
  var tp = [];
  for (i = 0; i < 5; i++) {
    a = tn[i][1] * Math.PI / 180;
    tp.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  for (i = 0; i < 5; i++) {
    p1 = tp[i]; p2 = tp[(i + 1) % 5];
    mx = (p1[0] + p2[0]) / 2; my = (p1[1] + p2[1]) / 2;
    dx = mx - cx; dy = my - cy; L = Math.sqrt(dx * dx + dy * dy);
    sx = cx + (dx / L) * (R + 8); sy = cy + (dy / L) * (R + 8);
    ex = cx + (dx / L) * (R - 44); ey = cy + (dy / L) * (R - 44);
    s += '<line x1="' + sx.toFixed(0) + '" y1="' + sy.toFixed(0) + '" x2="' + ex.toFixed(0) + '" y2="' + ey.toFixed(0) + '" stroke="' + INK + '" stroke-width="1.4" marker-end="url(#ah)"/>';
  }
  for (i = 0; i < 5; i++) {
    var hot2 = (i === 3);
    s += '<rect x="' + (tp[i][0] - 66) + '" y="' + (tp[i][1] - 24) + '" width="132" height="48" rx="9" fill="' + (hot2 ? RFILL : '#fdfcf8') + '" stroke="' + (hot2 ? RED : INK) + '" stroke-width="1.6"/>';
    s += txt(tp[i][0], tp[i][1] + 5, tn[i][2], 14.5, INK, 'middle', true);
  }
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="56" fill="' + FILL + '" stroke="' + INK + '" stroke-width="1.6"/>';
  s += txt(cx, cy - 8, '新 Token 追加进', 11.5, INK);
  s += txt(cx, cy + 8, '上下文，继续转圈', 11.5, INK);
  s += txt(cx, cy + 26, '直到吐出停止符', 10, MUT);
  s += box(610, 330, 130, 60, '温度', '越低越稳，越高越发散', RFILL, RED, 15, 10);
  s += '<line x1="610" y1="360" x2="545" y2="330" stroke="' + RED + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.p('两个上课要强调的点：<b>①它只对"下一个词"负责</b>，所以长文里前后口径要靠提示词和人工兜住；<b>②"算概率"和"采样"是两步</b>——同一个问题答两遍不一样，不是它善变，是采样在起作用。');
  H += SK.oneline('它是世界上最勤快的接龙选手，不是资料库。', '接龙', 'green');
  H += SK.srcline('可视化课程', 'https://www.3blue1brown.com/lessons/attention/', '3Blue1Brown：注意力机制逐步拆解');
  SK.add('架构：Token 生成的循环', H);

  /* ---- 6. MCP · A2A · Skill 协作 ---- */
  H = '';
  H += SK.k('Architecture · Three Protocols') + SK.h('架构：MCP·A2A·Skill 协作');
  H += SK.sub('三个新词其实各管一件事：接工具、找同事、留经验');
  s = '<svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg">' + DEFS;
  s += box(300, 150, 160, 84, '智能体', '计划—执行循环', RFILL, RED, 17, 11);
  s += box(30, 60, 210, 96, 'MCP · 接上工具', '数据库 · 文件 · API · 浏览器（用谁接谁）', '#fdfcf8', INK, 15.5, 11);
  s += box(30, 250, 210, 96, 'Skill · 沉淀流程', '把"怎么干"写成可复用的办法，越用越厚', '#fdfcf8', INK, 15.5, 11);
  s += box(520, 140, 210, 104, 'A2A · 找别的智能体', '跨厂商、跨平台委派任务（它干不完可以转包）', '#fdfcf8', INK, 15.5, 11);
  s += '<line x1="240" y1="108" x2="300" y2="158" stroke="' + INK + '" stroke-width="1.5" marker-end="url(#ah)"/>';
  s += '<line x1="300" y1="172" x2="240" y2="130" stroke="' + MUT + '" stroke-width="1.1" stroke-dasharray="4 3"/>';
  s += '<line x1="240" y1="298" x2="300" y2="232" stroke="' + INK + '" stroke-width="1.5" marker-end="url(#ah)"/>';
  s += '<line x1="300" y1="246" x2="240" y2="312" stroke="' + MUT + '" stroke-width="1.1" stroke-dasharray="4 3"/>';
  s += '<line x1="460" y1="192" x2="520" y2="192" stroke="' + INK + '" stroke-width="1.5" marker-end="url(#ah)"/>';
  s += '<line x1="520" y1="206" x2="460" y2="206" stroke="' + MUT + '" stroke-width="1.1" stroke-dasharray="4 3"/>';
  s += box(300, 300, 430, 66, '一条真实任务的走法', '查制度（MCP 接知识库）→ 写初稿（Skill 里的写作流程）→ 超纲了转给审批助手（A2A 委派）', '#fdfcf8', INK, 14.5, 11.5);
  s += '<line x1="380" y1="300" x2="380" y2="238" stroke="' + MUT + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
  s += txt(135, 40, '「手」', 13, MUT, 'middle', true);
  s += txt(135, 240, '「经验」', 13, MUT, 'middle', true);
  s += txt(625, 126, '「同事」', 13, MUT, 'middle', true);
  s += '</svg>';
  H += '<div class="arch rise">' + s + '</div>';
  H += SK.p('一句话区分：<b>MCP 让它有手，A2A 让它有同事，Skill 让它有经验</b>。三个都是"协议/约定"而不是某个具体软件——所以它们比任何单一产品都活得久，也是评估智能体产品时要问的"开放度"三件套。');
  H += SK.oneline('开放的不是某个软件，是三份约定。', '三件套', 'ink');
  H += SK.srcline('协议官网', 'https://modelcontextprotocol.io/', 'Model Context Protocol 官方网站');
  SK.add('架构：MCP·A2A·Skill 协作', H);
})();
