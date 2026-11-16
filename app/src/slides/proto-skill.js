/* proto-skill — Agent Skills（技能）独立深度页 */
(function () {
  var H = '';

  H += SK.k('Skill') + SK.h('Skill：把办法沉淀成文件')
    + SK.sub('提示词是这一次的便签，Skill 是留下来、下次还能用的办法——一个文件夹，就是一套工作方法。')

    + SK.p('<b>它到底是什么：</b>2025 年 10 月 Anthropic 提出的 Agent Skills，把一个文件夹（核心是 SKILL.md 说明书，可附带脚本、模板、参考资料）交给智能体。智能体平时只读每份技能的"名称＋适用场景"（几十个字），任务匹配时才展开正文、调用脚本——官方叫<b>渐进式加载</b>，装一百个技能也不挤占上下文。')

    + SK.table(
      ['对照', '提示词 Prompt', '技能 Skill'],
      [
        ['形态', '聊天框里的一段话，用完即弃', '磁盘上的文件夹：SKILL.md ＋ scripts/ ＋ references/ ＋ assets/'],
        ['生命周期', '这一次对话有效', '沉淀下来，跨对话、跨人、跨平台复用'],
        ['谁能改', '谁都会写，口径五花八门', '单位统一维护，版本可管、可审、可回退'],
        ['给智能体什么', '一次性的嘱咐', '一套可执行的办法：说明书＋可运行的脚本＋模板']
      ])

    + SK.p('<b>和 MCP 的分工</b>：MCP 给智能体"手"——接数据库、文件、API；Skill 给智能体"经验"——告诉它这件事按什么办法做。两者互补不替代：<b>有工具没技能，每回都要重新教；有技能没工具，办法落空。</b>')

    + SK.p('<b>一年走完的脉络</b>（这个速度本身就是信号——格式比产品活得久）：')
    + SK.table(
      ['时间', '事件'],
      [
        ['2025.10.16', 'Anthropic 推出 Agent Skills：Claude 应用、Claude Code、API 同步上线，内置 PPT/Excel/Word/PDF 文档技能，Box、Canva、Notion 等成为首发合作方'],
        ['2025.10–11', '几周内开发者上传数千个技能，社区自发为 Codex、Cursor、OpenCode 写出加载器'],
        ['2025.12.18', 'Anthropic 把 Agent Skills 公开为开放标准（agentskills.io），新增合作伙伴技能目录'],
        ['2026.10.22', '标准捐赠给 Linux 基金会下的 Agentic AI 基金会（Anthropic、Block、OpenAI 共同发起）；官方口径：70 多个平台已集成（含 ChatGPT、Cursor、GitHub Copilot、VS Code），累计发布约 100 万个技能、安装近 2.8 亿次']
      ])

    + SK.p('<b>真实案例</b>：')
    + SK.bullets([
      '<b>Box</b>（首发合作方）：用技能把非结构化文件自动转成带品牌规范的演示文稿——过去要专门工程团队做几周的活，变成一个可复制的文件夹。',
      '<b>Anthropic 内置文档技能</b>：PPTX、XLSX、DOCX、PDF 四个官方技能，让模型按脚本精确操作办公文件，而不是"用嘴描述表格"。这是"技能里可以装代码"的最好注脚。',
      '<b>反面案例（详见下节）</b>：2026 年 2 月起，Snyk、Koi Security、Bitdefender、Unit 42 相继发布技能市场恶意软件研究报告——技能沉淀效率，也沉淀风险。'
    ])

    + SK.p('<b>风险与治理：技能市场是新的软件供应链。</b>此前合并页提过"约 12% 第三方技能是恶意软件"，核实后的准确数字是——')
    + SK.bullets([
      '<b>Snyk「ToxicSkills」研究（2026.2.5）</b>：扫描 ClawHub 与 skills.sh 的 3,984 个技能，<b>13.4%（534 个）含严重级安全问题</b>（恶意软件、凭据窃取、提示词注入），36.8% 至少有一个安全缺陷；人工确认 76 个技能带恶意载荷，发布时仍有 8 个活着。',
      '<b>Koi Security「ClawHavoc」（2026.2）</b>：一次真实攻击活动，<b>341 个恶意技能</b>；Bitdefender 同期报告约 17% 的被分析技能带恶意载荷。',
      '学术侧同步敲响警钟：2025 年 10 月的论文已证明，藏在技能长文件和脚本里的恶意指令能绕过主流编码智能体的系统护栏。',
      '单位内部建技能的审核建议：<b>①技能当代码管</b>——进版本库、有人负责、变更留痕；<b>②装技能要审批</b>——和装软件一样走信息化流程，先审脚本再启用；<b>③脚本最小权限</b>——能只读就不给写，能不联网就不联网；<b>④定期复审</b>——技能会更新，更新可能夹带私货。'
    ])

    + SK.p('<b>财政厅能沉淀什么：</b>一个技能文件里装的，就是处室里"老师傅的办法"。两个例子——')
    + SK.bullets([
      '<b>「会议纪要」技能</b>：SKILL.md 里写清纪要结构（议定事项／分歧意见／责任处室／时限）、只记结论不记过程、敏感表述的口径；references/ 放三份历史优秀纪要当范例；scripts/ 放一个校对脚本，自动核对参会人姓名和文号格式。',
      '<b>「核稿·只出问题清单」技能</b>：明确角色边界——<b>只列问题，不直接改稿</b>；正文按"政治表述／政策口径／数字勾稽／文种格式"四类出清单，每条注明出处条款；references/ 放核稿规范和新近纠错案例。办法沉淀成文件后，换哪个模型、哪个人来用，口径都不跑。'
    ])

    + SK.oneline('把办法写成文件，智能体才从"会用"变成"按你们的方法用"。', '沉淀', 'ink')

    + SK.srcline('官方发布', 'https://www.anthropic.com/news/skills', 'Anthropic：Introducing Agent Skills（2025.10.16）')
    + SK.srcline('安全研究', 'https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/', 'Snyk Labs：ToxicSkills——3,984 个技能审计，13.4% 含严重问题（2026.2）')
    + SK.srcline('综述报道', 'https://unit42.paloaltonetworks.com/openclaw-ai-supply-chain-risk/', 'Unit 42：OpenClaw 技能市场与 AI 供应链风险（汇总 Bitdefender 17%、Koi 341 个恶意技能等）');

  SK.add('Skill：把办法沉淀成文件', H);
})();
