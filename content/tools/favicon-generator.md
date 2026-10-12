---
title: "Free Favicon Generator — ICO & PNG From Image or Text"
description: "Turn any image or letter into a full favicon set: PNG icons in 7 sizes, a real favicon.ico and ready-to-paste HTML. Free, no sign-up, runs in your browser."
category: image
date: 2026-10-12
draft: false
---

## How it works

A proper favicon is not one file — browsers, iPhones and Android launchers each ask for different sizes, plus the classic favicon.ico. Upload an image (or build one from a letter), and this generator produces every PNG size, a real multi-resolution .ico file, and the exact HTML snippet to paste into your site. All of it is generated locally in your browser.

<div class="tool-shell" id="favShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Favicon Generator</h2>
<p>Every PNG size, a real favicon.ico, and the HTML to install it — from any image or a simple letter.</p>
</div>
<button type="button" class="theme-toggle" id="favTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — files never leave your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose your source</p>
<div class="setting">
<label for="favMode">Start from</label>
<select id="favMode">
<option value="image">Upload an image (logo, photo, icon)</option>
<option value="text">Create from text (a letter or initials)</option>
</select>
<div class="hint">Square images work best — anything else is centre-cropped to a square.</div>
</div>
<div id="favImagePanel">
<div class="dropzone" id="favDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your image here</strong>
<span>or click to browse — PNG, JPG, WebP or SVG</span>
<input type="file" id="favFile" accept="image/*">
</div>
</div>
<div id="favTextPanel" style="display:none;">
<div class="settings-grid">
<div class="setting">
<label for="favText">Text (1–2 characters)</label>
<input type="text" id="favText" class="tool-input" maxlength="2" value="D">
<div class="hint">Your initial or brand monogram — short reads best at 16 px.</div>
</div>
<div class="setting">
<label for="favBg">Background colour</label>
<input type="color" id="favBg" value="#2563eb">
<div class="hint">Pick a strong brand colour.</div>
</div>
<div class="setting">
<label for="favFg">Text colour</label>
<input type="color" id="favFg" value="#ffffff">
<div class="hint">White on a bold colour is the classic favicon look.</div>
</div>
<div class="setting">
<label for="favFont">Font size: <span class="val" id="favFontVal">72%</span></label>
<input type="range" id="favFont" min="30" max="100" value="72">
<div class="hint">How much of the icon the letter fills.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Preview &amp; generate</p>
<div class="setting">
<label>Master icon (512 × 512)</label>
<div>
<img id="favPreview" alt="Favicon preview" style="width:112px;height:112px;border:1px solid #d5d5d5;border-radius:18px;background:#fff;">
</div>
<div class="hint">Every size below is rendered from this master — bold and simple reads best at tiny sizes.</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="favGen">
<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
Generate all sizes
</button>
<button type="button" class="btn-pro-outline" id="favIco" disabled>Download favicon.ico</button>
</div>
<div class="results" id="favResults">
<p class="result-head">✅ Your favicon set</p>
<div class="result-summary" id="favSummary"></div>
<div class="result-grid" id="favGrid"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Add it to your site</p>
<div class="setting">
<label for="favSnippet">Paste this into your page &lt;head&gt;</label>
<textarea id="favSnippet" class="tool-input" rows="5" readonly style="width:100%;font-family:monospace;font-size:.75rem;"></textarea>
<div class="hint">Upload the downloaded files to your site's root folder, then paste this code. The favicon.ico is also picked up automatically by browsers even without the snippet.</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="favCopy">
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Copy HTML
</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — generate favicons for as many sites as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('favShell');
  ToolPro.themeToggle(shell, document.getElementById('favTheme'));

  var NAMES = { '16': 'favicon-16x16.png', '32': 'favicon-32x32.png', '48': 'favicon-48x48.png', '64': 'favicon-64x64.png', '180': 'apple-touch-icon.png', '192': 'android-chrome-192x192.png', '512': 'android-chrome-512x512.png' };
  var SIZES = [16, 32, 48, 64, 180, 192, 512];
  var src = document.createElement('canvas');
  src.width = 512;
  src.height = 512;
  var hasSrc = false;
  var pngData = {};

  var modeSel = document.getElementById('favMode');
  var imgPanel = document.getElementById('favImagePanel');
  var txtPanel = document.getElementById('favTextPanel');
  var preview = document.getElementById('favPreview');
  var genBtn = document.getElementById('favGen');
  var icoBtn = document.getElementById('favIco');
  var grid = document.getElementById('favGrid');
  var resBox = document.getElementById('favResults');
  var snippet = document.getElementById('favSnippet');

  snippet.value = [
    '<link rel="icon" href="/favicon.ico" sizes="any">',
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    '<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">'
  ].join('\n');

  ToolPro.bindSlider(document.getElementById('favFont'), document.getElementById('favFontVal'), function(v){ return v + '%'; });

  function updatePreview(){
    if(hasSrc) preview.src = src.toDataURL('image/png');
  }

  function renderText(){
    var ctx = src.getContext('2d');
    ctx.fillStyle = document.getElementById('favBg').value;
    ctx.fillRect(0, 0, 512, 512);
    var txt = (document.getElementById('favText').value || 'D').slice(0, 2);
    var px = Math.round(512 * parseInt(document.getElementById('favFont').value, 10) / 100);
    if(txt.length === 2) px = Math.round(px * 0.72);
    ctx.fillStyle = document.getElementById('favFg').value;
    ctx.font = '700 ' + px + 'px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, 256, 266);
    hasSrc = true;
    updatePreview();
  }

  modeSel.addEventListener('change', function(){
    var text = modeSel.value === 'text';
    imgPanel.style.display = text ? 'none' : '';
    txtPanel.style.display = text ? '' : 'none';
    if(text) renderText();
  });

  ['favText', 'favBg', 'favFg', 'favFont'].forEach(function(id){
    document.getElementById(id).addEventListener('input', function(){
      if(modeSel.value === 'text') renderText();
    });
  });

  ToolPro.dropzone(document.getElementById('favDrop'), {
    accept: 'image/*',
    onFiles: function(arr){
      if(!arr.length) return;
      var url = URL.createObjectURL(arr[0]);
      var im = new Image();
      im.onload = function(){
        var ctx = src.getContext('2d');
        ctx.clearRect(0, 0, 512, 512);
        var scale = Math.max(512 / im.naturalWidth, 512 / im.naturalHeight);
        var sw = 512 / scale;
        var sh = 512 / scale;
        ctx.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, 0, 0, 512, 512);
        hasSrc = true;
        updatePreview();
        ToolPro.toast('Image loaded — hit Generate', 'ok');
      };
      im.onerror = function(){
        URL.revokeObjectURL(url);
        ToolPro.toast('Could not read that image', 'err');
      };
      im.src = url;
    }
  });

  genBtn.addEventListener('click', function(){
    if(modeSel.value === 'text') renderText();
    if(!hasSrc){
      ToolPro.toast('Upload an image or switch to text mode first', 'err');
      return;
    }
    grid.innerHTML = '';
    pngData = {};
    SIZES.forEach(function(s){
      var c = document.createElement('canvas');
      c.width = s;
      c.height = s;
      c.getContext('2d').drawImage(src, 0, 0, s, s);
      var url = c.toDataURL('image/png');
      pngData[s] = url;
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<img class="r-preview" alt="Favicon preview" style="width:56px;height:56px;">'
        + '<div class="r-name"></div>'
        + '<div class="r-stats">' + s + ' × ' + s + ' px PNG</div>'
        + '<button type="button" class="btn-pro">Download</button>';
      card.querySelector('.r-preview').src = url;
      card.querySelector('.r-name').textContent = NAMES[s];
      (function(u, n){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
      })(url, NAMES[s]);
      grid.appendChild(card);
    });
    document.getElementById('favSummary').textContent = '7 PNG sizes generated — from the 16 px browser tab icon to the 512 px Android launcher icon.';
    icoBtn.disabled = false;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Favicon set generated', 'ok');
  });

  function pngBytes(dataUrl){
    var bin = atob(dataUrl.split(',')[1]);
    var bytes = new Uint8Array(bin.length);
    for(var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  icoBtn.addEventListener('click', function(){
    var sizes = [16, 32, 48];
    var datas = sizes.map(function(s){ return pngBytes(pngData[s]); });
    var head = 6 + 16 * sizes.length;
    var total = head;
    datas.forEach(function(d){ total += d.length; });
    var buf = new ArrayBuffer(total);
    var dv = new DataView(buf);
    var u8 = new Uint8Array(buf);
    dv.setUint16(0, 0, true);
    dv.setUint16(2, 1, true);
    dv.setUint16(4, sizes.length, true);
    var offset = head;
    sizes.forEach(function(s, i){
      var e = 6 + i * 16;
      u8[e] = s;
      u8[e + 1] = s;
      u8[e + 2] = 0;
      u8[e + 3] = 0;
      dv.setUint16(e + 4, 1, true);
      dv.setUint16(e + 6, 32, true);
      dv.setUint32(e + 8, datas[i].length, true);
      dv.setUint32(e + 12, offset, true);
      u8.set(datas[i], offset);
      offset += datas[i].length;
    });
    ToolPro.download(URL.createObjectURL(new Blob([buf], { type: 'image/x-icon' })), 'favicon.ico');
    ToolPro.toast('favicon.ico downloaded (16 + 32 + 48 px inside)', 'ok');
  });

  document.getElementById('favCopy').addEventListener('click', function(){
    snippet.select();
    function done(){ ToolPro.toast('HTML snippet copied', 'ok'); }
    function fallback(){
      try { document.execCommand('copy'); done(); }
      catch(e){ ToolPro.toast('Copy failed — select the code manually', 'err'); }
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(snippet.value).then(done, fallback);
    } else {
      fallback();
    }
  });
})();
</script>

## Everyday uses

- **New websites and blogs** — a complete, correct icon set in one click.
- **Freelance web work** — deliver client sites with every icon size handled.
- **Web apps and dashboards** — proper home-screen icons for iOS and Android.
- **Quick brand marks** — turn initials into a clean monogram favicon without design software.

## Frequently asked questions

**Which sizes do I actually need?**

The favicon.ico plus the 16 and 32 px PNGs cover desktop browsers. The 180 px apple-touch-icon is what iPhones use for home-screen bookmarks, and the 192/512 px icons serve Android and progressive web apps. This generator gives you all of them, so you never have to think about it again.

**Is the .ico a real ICO file?**

Yes. It is assembled in your browser as a genuine ICO container with PNG-compressed 16, 32 and 48 px entries — the same format browsers have requested for decades.

**Why does my detailed logo look muddy at 16 px?**

Tiny icons have almost no pixels to work with. Bold shapes, thick lines and one or two colours read best. If your logo has fine detail, the text mode with your initials often looks sharper.
