/* slidekit.js — 纸墨风幻灯片布局引擎（供各批次页面文件调用） */
window.extraSlides = window.extraSlides || [];
window.SK = (function () {
  function k(t) { return '<div class="kicker rise">' + t + '</div>'; }
  function h(t) { return '<h2 class="rise">' + t + '</h2>'; }
  function sub(t) { return '<p class="sub rise">' + t + '</p>'; }
  function p(t) { return '<p class="rise" style="margin-bottom:14px">' + t + '</p>'; }
  function bullets(items) {
    return '<ul class="blist rise">' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
  }
  function table(head, rows) {
    var html = '<table class="rise"><thead><tr>' + head.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    rows.forEach(function (r) { html += '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; });
    return html + '</tbody></table>';
  }
  function cards(items) {
    // items: {n, title, body} 竖排小卡片
    return '<div class="cardrow rise">' + items.map(function (c) {
      return '<div class="minicard"><div class="mc-n">' + c.n + '</div><div class="mc-t">' + c.title + '</div><div class="mc-b">' + c.body + '</div></div>';
    }).join('') + '</div>';
  }
  function oneline(text, seal, sealCls) {
    return '<div class="oneline rise"><span>' + text + '</span>' + (seal ? '<span class="seal stamp ' + (sealCls || '') + '">' + seal + '</span>' : '') + '</div>';
  }
  function img(src, alt, caption) {
    return '<figure class="shot rise"><img src="' + src + '" alt="' + (alt || '') + '"/>' + (caption ? '<figcaption>' + caption + '</figcaption>' : '') + '</figure>';
  }
  function srcline(label, url, text) {
    return '<div class="src-line rise">' + label + '：<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + (text || url) + ' ↗</a></div>';
  }
  /* 注册一页：html 为正文（用上面的部件拼），title 为导航栏显示名 */
  function add(title, html) {
    var s = document.createElement('section');
    s.className = 'slide';
    s.setAttribute('data-title', title);
    s.innerHTML = '<div class="meta-corner rise">讲义 · 第一次课</div>' + html;
    window.extraSlides.push(s);
  }
  return { k: k, h: h, sub: sub, p: p, bullets: bullets, table: table, cards: cards, oneline: oneline, img: img, srcline: srcline, add: add };
})();

/* 长截图自动分栏：过高的截图（长宽比 > 2.2）纵向切成 N 栏横排，
   每栏用 object-fit:cover 显示原图的一段，整页宽度利用起来，保证每一段都可读。
   N 的取值保证 N 栏恰好完整覆盖原图高度。 */
(function () {
  var GAP = 6, MAX_N = 8, MIN_RATIO = 2.2;
  function stripHeight(img) {
    var v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--longshot-h'));
    if (v > 0) return v;
    var mh = parseFloat(getComputedStyle(img).maxHeight);
    return mh > 0 ? mh + 80 : 480;
  }
  function convert(img) {
    if (img.dataset.longshot) return;
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if (!iw || !ih) return;
    var ratio = ih / iw;
    if (ratio < MIN_RATIO) { img.dataset.longshot = '1'; return; }
    img.dataset.longshot = '1';
    var fig = img.parentElement;
    var W = fig.clientWidth || img.clientWidth || 1184;
    var H = stripHeight(img);
    var N = 2;
    for (; N <= MAX_N; N++) {
      var ws = (W - GAP * (N - 1)) / N;
      var band = H * iw / ws;            /* 每栏在原始图片里覆盖的高度 */
      if ((N - 1) * band >= ih || N === MAX_N) break;
    }
    var box = document.createElement('div');
    box.className = 'longshot';
    fig.insertBefore(box, img);
    var ws = (W - GAP * (N - 1)) / N;
    var band = H * iw / ws;                 /* 每栏在原始图片里覆盖的高度 */
    var DPR = 2;
    var tiles = [];
    for (var i = 0; i < N; i++) {           /* 先全部画完，再统一替换 src */
      var top = (ih - band) * (N === 1 ? 0 : i / (N - 1));
      var c = document.createElement('canvas');
      c.width = Math.round(ws * DPR);
      c.height = Math.round(H * DPR);
      var ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, top, iw, band, 0, 0, c.width, c.height);
      tiles.push(c.toDataURL('image/png'));
    }
    for (var i = 0; i < N; i++) {
      var slice = i === 0 ? img : document.createElement('img');
      slice.dataset.longshot = '1';
      slice.src = tiles[i];
      slice.alt = (img.alt || '') + '（第 ' + (i + 1) + '/' + N + ' 段）';
      slice.style.width = ws + 'px';
      slice.style.maxWidth = 'none';
      slice.style.height = H + 'px';
      slice.style.maxHeight = 'none';
      slice.style.flex = '0 0 auto';
      box.appendChild(slice);
    }
  }
  window.fixLongShots = function () {
    var imgs = document.querySelectorAll('.shot img, .shotrow img');
    for (var i = 0; i < imgs.length; i++) convert(imgs[i]);
  };
  window.addEventListener('load', function () {
    window.fixLongShots();
    setTimeout(window.fixLongShots, 500);
    setTimeout(window.fixLongShots, 1500);
  });
})();
