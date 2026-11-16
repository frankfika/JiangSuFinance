/**
 * Record real product footage from the live site (https://www.frankfika.com).
 * Headless Chromium, 1920x1080.
 *
 * Usage: node record.mjs <outDir>
 */
import { createRequire } from "node:module";
const require = createRequire(
  process.env.PW_ROOT + "/node_modules/playwright/index.js"
);
const { chromium } = require("playwright");
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ONLY = (process.env.ONLY || "").split(",").filter(Boolean);
const OUT = process.argv[2] || "./rec";
const BASE = "https://www.frankfika.com";
mkdirSync(OUT, { recursive: true });

const VIEWPORT = { width: 1920, height: 1080 };
const log = (...a) => console.log("[rec]", ...a);

async function shoot(context, name, fn) {
  if (ONLY.length && !ONLY.includes(name.split("-")[0])) { log(`skip ${name}`); return; }
  const page = await context.newPage();
  log(`recording ${name}`);
  try {
    await page.goto(`${BASE}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(3000);
    await fn(page);
  } catch (err) {
    log(`!! ${name}: ${err.message}`);
  }
  await page.close();
}

/** Click the first visible element matching a text/regex, ignoring failures. */
async function tap(page, locator, wait = 1200) {
  const el = page.locator(locator).first();
  try {
    if (await el.count()) {
      await el.click({ timeout: 4000 });
      await page.waitForTimeout(wait);
      return true;
    }
  } catch (e) {
    log(`tap miss ${locator}: ${e.message.split("\n")[0]}`);
  }
  return false;
}

const run = async () => {
  const browser = await chromium.launch({
    args: [
      "--autoplay-policy=no-user-gesture-required",
      "--force-color-profile=srgb",
      "--font-render-hinting=none",
      "--disable-lcd-text",
    ],
  });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
    colorScheme: "light",
    locale: "zh-CN",
    recordVideo: { dir: OUT, size: VIEWPORT },
  });

  // ---- Shot 1: hero — handwriting greeting, halftone portrait, subtle mouse ----
  await shoot(context, "01-hero", async (page) => {
    await page.waitForTimeout(4000);
    await page.mouse.move(700, 500, { steps: 25 });
    await page.waitForTimeout(1000);
    await page.mouse.move(1200, 350, { steps: 35 });
    await page.waitForTimeout(2500);
  });

  // ---- Shot 2: AI twin chat — type a question and read the streamed answer ----
  await shoot(context, "02-chat", async (page) => {
    const box = page.locator("textarea").first();
    await box.click();
    await page.waitForTimeout(500);
    await box.type("你做过哪些 AI 产品？", { delay: 50 });
    await page.waitForTimeout(900);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(7000);
  });

  // ---- Shot 3: scroll down the public resume ----
  await shoot(context, "03-scroll", async (page) => {
    await page.mouse.move(960, 540);
    for (let i = 0; i < 30; i++) {
      await page.mouse.wheel(0, 200);
      await page.waitForTimeout(160);
    }
    await page.waitForTimeout(2200);
    for (let i = 0; i < 26; i++) {
      await page.mouse.wheel(0, 200);
      await page.waitForTimeout(160);
    }
    await page.waitForTimeout(2500);
  });

  // ---- Shot 4: match game — intro, intent, birth ----
  await shoot(context, "04-match-intro", async (page) => {
    await tap(page, 'button:has-text("测测缘分")', 2500);
    await tap(page, 'button[role="radio"]:has-text("工作搭子")', 1800);
    const birth = page.locator('input[type="date"]').first();
    await birth.fill("1995-06-15");
    await page.waitForTimeout(900);
    await tap(page, 'button:has-text("开始第一关")', 5000);
  });

  // ---- Shot 5: fate screen — zodiac + bazi, tab switch ----
  await shoot(context, "05-match-fate", async (page) => {
    await tap(page, 'button:has-text("测测缘分")', 2500);
    await tap(page, 'button[role="radio"]:has-text("工作搭子")', 1500);
    await page.locator('input[type="date"]').first().fill("1995-06-15");
    await page.waitForTimeout(700);
    await tap(page, 'button:has-text("开始第一关")', 6000);
    await page.waitForTimeout(2500);
    await tap(page, '.fate-tabs button:nth-child(2)', 3000);
    await page.waitForTimeout(2200);
  });

  // ---- Shot 6: full run to the radar result screen ----
  // Mechanics: each pick shows a reaction (1250ms) then auto-advances to the
  // next question; when a round's last question is answered the round itself
  // advances (onDone). The fate screen has a "下一关" button; the words step
  // submits with "交卷，看结果".
  await shoot(context, "06-match-result", async (page) => {
    await tap(page, 'button:has-text("测测缘分")', 2500);
    await tap(page, 'button[role="radio"]:has-text("工作搭子")', 1500);
    await page.locator('input[type="date"]').first().fill("1995-06-15");
    await page.waitForTimeout(700);
    await tap(page, 'button:has-text("开始第一关")', 6000);
    await page.waitForTimeout(2500);

    // The fate screen has a "下一关" button that opens the personality round.
    await tap(page, '.match-sheet button:has-text("下一关")', 3000);

    // 15 questions total (8 personality + 4 brain + 3 judgment). Click the first
    // option of whichever card is on screen, waiting for the reaction to pass.
    for (let i = 0; i < 24; i++) {
      const opts = page.locator(".match-sheet .choice-options button");
      if (!(await opts.count())) {
        await page.waitForTimeout(700);
        if (!(await page.locator(".match-sheet .choice-options button").count())) break;
        continue;
      }
      await opts.first().click({ timeout: 3000 }).catch(() => {});
      await page.waitForTimeout(1700);
    }

    // Words step — type the self-introduction (fill is more reliable than type
    // for React controlled inputs; the submit button stays disabled if empty).
    await page.waitForTimeout(2000);
    // Scope to the match sheet — the page also has a homepage chat textarea.
    const ta = page.locator('.match-sheet textarea, .match textarea').first();
    if (await ta.count()) {
      await ta.click({ timeout: 4000 }).catch(() => {});
      await ta.fill("我是做企业服务的 AI 产品经理，想和陈放聊聊合作。").catch(async () => {
        await ta.pressSequentially("我是做企业服务的 AI 产品经理，想和陈放聊聊合作。", { delay: 40 }).catch(() => {});
      });
      await page.waitForTimeout(1200);
    }
    await tap(page, '.match-sheet button:has-text("交卷")', 16000);
    await page.waitForTimeout(7000);
  });

  // ---- Shot 7: quick-jump shelf chips ----
  await shoot(context, "07-chips", async (page) => {
    await page.waitForTimeout(2500);
    await tap(page, 'button:has-text("成果")', 4500);
  });

  // ---- Shot 8: English locale ----
  await shoot(context, "08-en", async (page) => {
    await page.waitForTimeout(3000);
    await tap(page, '.chat-top-link:has-text("EN")', 4000);
    await page.mouse.move(960, 540, { steps: 20 });
    await page.waitForTimeout(1800);
  });

  await context.close();
  await browser.close();
  writeFileSync(join(OUT, "DONE"), "ok");
  log("done");
};

run();
