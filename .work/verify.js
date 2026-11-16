const { chromium } = require('/opt/homebrew/lib/node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
  page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE ERROR:', m.text()); });
  page.on('pageerror', e => console.log('PAGE ERROR:', e.message));
  await page.goto('http://localhost:8371/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  const titles = ['AI 办公四助手', '深看：WorkBuddy（腾讯）', '深看：Claude Cowork（Anthropic）', '深看：豆包工作（字节）', '深看：千问办公（阿里）', '个人助手三件套', '深看：Meta Muse', '深看：Grok Bot（xAI）', '深看：Today（国产）'];
  const total = await page.evaluate(() => document.querySelectorAll('.slide').length);
  console.log('total slides:', total);
  for (const t of titles) {
    const idx = await page.evaluate((tt) => {
      const slides = Array.from(document.querySelectorAll('.slide'));
      return slides.findIndex(s => s.getAttribute('data-title') === tt);
    }, t);
    if (idx < 0) { console.log('NOT FOUND:', t); continue; }
    await page.evaluate((i) => {
      const slides = Array.from(document.querySelectorAll('.slide'));
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
      slides[i].scrollTop = 0;
      window.scrollTo(0, 0);
    }, idx);
    await page.waitForTimeout(1200);
    // 检查图片加载情况
    const imgs = await page.evaluate((i) => {
      const slides = Array.from(document.querySelectorAll('.slide'));
      return Array.from(slides[i].querySelectorAll('img')).map(im => ({ src: im.src.split('/').pop(), ok: im.complete && im.naturalWidth > 0 }));
    }, idx);
    console.log(t, '→ page', idx + 1, JSON.stringify(imgs));
    await page.screenshot({ path: '/Users/fangchen/Desktop/Jiangsu Finance/.work/verify-' + idx + '.png' });
  }
  await browser.close();
})();
