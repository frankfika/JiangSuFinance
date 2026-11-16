import { createRequire } from "node:module";
const require = createRequire(process.env.PW_ROOT + "/node_modules/playwright/index.js");
const { chromium } = require("playwright");

const run = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on("pageerror", (e) => console.log("[pageerror]", e.message.slice(0, 300)));
  page.on("response", (r) => { if (r.url().includes("/api/")) console.log("[api]", r.status(), r.url().replace("https://www.frankfika.com","")); });

  await page.goto("https://www.frankfika.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);
  await page.locator('button:has-text("测测缘分")').first().click();
  await page.waitForTimeout(2500);
  await page.locator('button[role="radio"]:has-text("工作搭子")').first().click();
  await page.waitForTimeout(1200);
  await page.locator('input[type="date"]').first().fill("1995-06-15");
  await page.waitForTimeout(600);
  await page.locator('button:has-text("开始第一关")').first().click();
  await page.waitForTimeout(7000);

  const snap = async (label) => {
    const s = await page.evaluate(() => ({
      fateTabs: !!document.querySelector(".fate-tabs"),
      choiceOpts: document.querySelectorAll(".choice-options button").length,
      choicesTop: document.querySelector(".choices-top span")?.textContent?.slice(0,40) ?? null,
      matchGo: document.querySelector(".match-go")?.textContent?.trim().slice(0,20) ?? null,
      err: document.querySelector(".gate-error")?.textContent?.trim().slice(0,80) ?? null,
      orbit: document.querySelector(".match-orbit")?.textContent?.trim().slice(0,30) ?? null,
      sheetHtml: (document.querySelector(".sheet")||document.querySelector("[class*=sheet]"))?.className ?? null,
    }));
    console.log(label, JSON.stringify(s));
  };
  await snap("after-start:");

  // Click the fate "下一关" button
  const next = page.locator('button:has-text("下一关")').first();
  console.log("next btn count:", await next.count());
  if (await next.count()) { await next.click(); await page.waitForTimeout(4000); }
  await snap("after-next:");

  // Now try clicking a choice option
  const opts = page.locator(".choice-options button");
  console.log("opts count:", await opts.count());
  if (await opts.count()) {
    await opts.first().click();
    await page.waitForTimeout(2500);
    await snap("after-pick:");
  }
  await browser.close();
};
run();
