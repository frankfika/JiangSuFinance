import { createRequire } from "node:module";
const require = createRequire(process.env.PW_ROOT + "/node_modules/playwright/index.js");
const { chromium } = require("playwright");

const run = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on("response", (r) => { if (r.url().includes("/api/")) console.log("[api]", r.status(), r.url().replace("https://www.frankfika.com","")); });
  page.on("pageerror", (e) => console.log("[pageerror]", e.message.slice(0, 200)));

  await page.goto("https://www.frankfika.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator('button:has-text("测测缘分")').first().click();
  await page.waitForTimeout(2500);
  await page.locator('button[role="radio"]:has-text("工作搭子")').first().click();
  await page.waitForTimeout(1000);
  await page.locator('input[type="date"]').first().fill("1995-06-15");
  await page.waitForTimeout(500);
  await page.locator('button:has-text("开始第一关")').first().click();
  await page.waitForTimeout(7000);
  await page.locator('button:has-text("下一关")').first().click();
  await page.waitForTimeout(3000);

  // answer all rounds
  for (let i = 0; i < 24; i++) {
    const opts = page.locator(".choice-options button");
    if (!(await opts.count())) { await page.waitForTimeout(600); if (!(await opts.count())) break; continue; }
    await opts.first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(1650);
  }

  console.log("--- at words step ---");
  console.log(await page.evaluate(() => {
    const ta = document.querySelector("textarea");
    const btn = document.querySelector(".match-go");
    return {
      taExists: !!ta,
      taVal: ta?.value ?? null,
      taMax: ta?.getAttribute("maxlength"),
      btnText: btn?.textContent?.trim(),
      btnDisabled: btn?.disabled,
      btnClass: btn?.className,
      allBtns: [...document.querySelectorAll(".match-sheet button")].map(b => b.textContent?.trim().slice(0,14)),
    };
  }));

  const ta = page.locator("textarea").first();
  await ta.click();
  await ta.fill("我是做企业服务的 AI 产品经理，想和陈放聊聊合作。");
  await page.waitForTimeout(1500);
  console.log("--- after fill ---");
  console.log(await page.evaluate(() => {
    const ta = document.querySelector("textarea");
    const btn = document.querySelector(".match-go");
    return { taVal: ta?.value, btnText: btn?.textContent?.trim(), btnDisabled: btn?.disabled };
  }));

  await page.locator(".match-go").first().click();
  await page.waitForTimeout(14000);
  console.log("--- after submit ---");
  console.log(await page.evaluate(() => ({
    hasReport: !!document.querySelector(".report"),
    radar: !!document.querySelector(".radar"),
    score: document.querySelector(".report-score, .score-ring b, .fate-score")?.textContent?.trim(),
    snippet: document.body.innerText.slice(0, 300).replace(/\n+/g, " | "),
  })));
  await browser.close();
};
run();
