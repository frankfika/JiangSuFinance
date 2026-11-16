/**
 * Render motion-graphics title cards as PNG sequences using Chromium.
 * Each card is a CSS-animated HTML page; we screenshot it frame by frame
 * while advancing a CSS animation-play-state / negative delay, giving us
 * real motion graphics rather than static slides.
 *
 * Usage: node render_cards.mjs <cardsDir> <outDir>
 */
import { createRequire } from "node:module";
const require = createRequire(process.env.PW_ROOT + "/node_modules/playwright/index.js");
const { chromium } = require("playwright");
import { mkdirSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const CARDS_DIR = resolve(process.argv[2]);
const OUT_DIR = resolve(process.argv[3]);
const W = 1920;
const H = 1080;
const FPS = 30;

mkdirSync(OUT_DIR, { recursive: true });

// Serve the build dir over http so @font-face / url() resolve.
const ROOT = resolve(CARDS_DIR, "..");
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".woff2": "font/woff2", ".ttf": "font/ttf", ".png": "image/png", ".jpg": "image/jpeg" };
const server = createServer(async (req, res) => {
  const p = decodeURIComponent(req.url.split("?")[0]);
  const file = join(ROOT, p === "/" ? "cards/index.html" : p.replace(/^\/cards\//, "cards/"));
  try {
    const buf = await readFile(file);
    const ext = file.slice(file.lastIndexOf("."));
    res.writeHead(200, { "content-type": MIME[ext] || "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404); res.end("nope");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const PORT = server.address().port;
const BASE = `http://127.0.0.1:${PORT}`;

const run = async () => {
  const browser = await chromium.launch({ args: ["--force-color-profile=srgb", "--font-render-hinting=none"] });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });

  const files = readdirSync(CARDS_DIR).filter((f) => f.endsWith(".html"));
  for (const f of files) {
    const dur = Number((await readFile(join(CARDS_DIR, f), "utf8")).match(/data-duration="([\d.]+)"/)?.[1] || 4);
    const name = f.replace(/\.html$/, "");
    const outDir = join(OUT_DIR, name);
    mkdirSync(outDir, { recursive: true });

    await page.goto(`${BASE}/cards/${f}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({
      content: `*,*::before,*::after{animation-play-state:paused !important;}`,
    });

    const total = Math.round(dur * FPS);
    for (let i = 0; i < total; i++) {
      const t = i / FPS;
      await page.evaluate((time) => {
        document.querySelectorAll("*").forEach((el) => {
          const anims = el.getAnimations ? el.getAnimations() : [];
          for (const a of anims) a.currentTime = time * 1000;
        });
      }, t);
      await page.screenshot({ path: join(outDir, `f${String(i).padStart(5, "0")}.png`) });
      if (i % 45 === 0) process.stdout.write(`\r${name}: ${i}/${total}`);
    }
    console.log(`\n${name}: ${total} frames (${dur}s)`);
  }

  await browser.close();
  server.close();
};

run();


run();
