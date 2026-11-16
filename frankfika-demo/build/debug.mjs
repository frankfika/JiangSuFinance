import { createRequire } from "node:module";
const require = createRequire(process.env.PW_ROOT + "/node_modules/playwright/index.js");
const { chromium } = require("playwright");

const run = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on("console", (m) => console.log("[console]", m.type(), m.text().slice(0, 200)));
  page.on("pageerror", (e) => console.log("[pageerror]", e.message.slice(0, 300)));
  page.on("response", (r) => {
    if (r.url().includes("/api/")) console.log("[api]", r.status(), r.url());
  });

  await page.goto("https://www.frankfika.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);

  await page.locator('button:has-text("测测缘分")').first().click();
  await page.waitForTimeout(2500);
  console.log("--- sheet open, visible classes ---");
  console.log(await page.evaluate(() => {
    const s = document.querySelector(".match-sheet, .match-panel, .sheet, [class*='match']");
    return s ? s.className : "no match container";
  }));

  await page.locator('button[role="radio"]:has-text("工作搭子")').first().click();
  await page.waitForTimeout(1200);
  await page.locator('input[type="date"]').first().fill("1995-06-15");
  await page.waitForTimeout(700);

  const startBtn = page.locator('button:has-text("开始第一关")').first();
  console.log("start button count:", await startBtn.count(), "disabled:", await startBtn.isDisabled().catch(() => "n/a"));
  console.log("start button html:", await startBtn.evaluate((e) => e.outerHTML).catch(() => "n/a"));

  await startBtn.click();
  console.log("clicked start");
  await page.waitForTimeout(6000);

  console.log("--- after start ---");
  console.log("step hints:", await page.evaluate(() => {
    const t = document.querySelector(".choices-top span");
    const f = document.querySelector(".fate-tabs");
    return {
      choicesTop: t?.textContent?.slice(0, 60) ?? null,
      fateTabs: !!f,
      options: document.querySelectorAll(".choice-options button").length,
      bodySnippet: document.body.innerText.slice(0, 400).replace(/\n+/g, " | "),
    };
  }));

  await browser.close();
};
run();
