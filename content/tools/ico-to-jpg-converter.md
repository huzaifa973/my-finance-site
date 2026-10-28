---
title: "ICO to JPG Converter — Free Online Icon to JPEG Converter"
description: "Convert ICO icon files to JPG images in your browser — pick a background color and quality, batch convert included. Free, private, no sign-up."
category: image
date: 2026-10-28
draft: false
---

ICO files are Windows icons, and most photo tools, websites, and social apps cannot use them. Convert your .ico files to JPG — the universal image format — right in your browser. Because JPEG has no transparency, you choose the background color that fills the icon's transparent areas. Conversion runs locally on a canvas, so your files never leave your browser.

<div class="tool-shell" id="ijpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c1.1 0 2 .9 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>ICO to JPG Converter</h2>
<p>Turn Windows icons into universal JPGs — background color, quality, batch.</p>
</div>
<button type="button" class="theme-toggle" id="ijpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add ICO files</p>
<div class="dropzone" id="ijpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop ICO files here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="ijpFile" accept=".ico,image/x-icon,image/vnd.microsoft.icon" multiple>
</div>
<ul class="file-list" id="ijpList"></ul>
<div class="hint">Your files never leave your browser — conversion runs locally on a canvas.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> JPG settings</p>
<div class="settings-panel">
<div class="preset-row" id="ijpPresets">
<button type="button" class="preset-chip active" data-bg="#ffffff">⬜ White background</button>
<button type="button" class="preset-chip" data-bg="#000000">⬛ Black background</button>
<button type="button" class="preset-chip" data-bg="#f1f5f9">🩶 Light gray background</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ijpBg">Custom background color</label>
<input type="color" id="ijpBg" class="tool-input" value="#ffffff">
<div class="hint">JPEG has no transparency — this color fills transparent icon areas.</div>
</div>
<div class="setting">
<label for="ijpQ">JPEG quality <span id="ijpQVal">92%</span></label>
<input type="range" id="ijpQ" min="50" max="100" value="92">
</div>
<div class="setting">
<label for="ijpSize">Output size</label>
<select id="ijpSize" class="tool-input">
<option value="orig" selected>Original icon size</option>
<option value="512">512 × 512</option>
<option value="256">256 × 256</option>
<option value="128">128 × 128</option>
</select>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ijpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to JPG
</button>
<button type="button" class="btn-pro-outline" id="ijpClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="ijpProgWrap">
<div class="progress-bar"><i id="ijpProgBar"></i></div>
<div class="progress-text" id="ijpProgText">Working…</div>
</div>
<div class="results" id="ijpResults">
<p class="result-head">✅ Converted JPGs</p>
<div class="result-summary" id="ijpSummary"></div>
<div class="result-grid" id="ijpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited icons — everything happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ijpShell');
  ToolPro.themeToggle(shell, document.getElementById('ijpTheme'));
  var files = [];
  var listEl = document.getElementById('ijpList');
  var btn = document.getElementById('ijpBtn');
  var clearBtn = document.getElementById('ijpClear');
  var resBox = document.getElementById('ijpResults');
  var summaryEl = document.getElementById('ijpSummary');
  var gridEl = document.getElementById('ijpGrid');
  var progWrap = document.getElementById('ijpProgWrap');
  var progBar = document.getElementById('ijpProgBar');
  var progText = document.getElementById('ijpProgText');
  var bg = '#ffffff';
  var outUrls = [];
  ToolPro.bindSlider(document.getElementById('ijpQ'), document.getElementById('ijpQVal'), function(v){ return v + '%'; });
  document.getElementById('ijpPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('ijpPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    bg = chip.dataset.bg;
    document.getElementById('ijpBg').value = bg;
    ToolPro.toast('Background: ' + bg);
  });
  document.getElementById('ijpBg').addEventListener('input', function(e){
    bg = e.target.value;
    document.getElementById('ijpPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  });
  function isIco(f){ return /\.ico$/i.test(f.name) || f.type === 'image/x-icon' || f.type === 'image/vnd.microsoft.icon'; }
  ToolPro.dropzone(document.getElementById('ijpDrop'), {
    multiple: true,
    accept: '.ico,image/x-icon',
    onFiles: function(arr){
      var added = 0;
      arr.forEach(function(f){
        if(!isIco(f)){ ToolPro.toast(f.name + ' is not an .ico file — skipped.', 'err'); return; }
        if(files.some(function(p){ return p.name === f.name && p.size === f.size; })) return;
        files.push(f);
        ToolPro.fileRow(listEl, f, function(){
          files = files.filter(function(p){ return p !== f; });
          refresh();
        });
        added++;
      });
      if(added) ToolPro.toast(added + ' icon' + (added > 1 ? 's' : '') + ' added', 'ok');
      resBox.classList.remove('show');
      refresh();
    }
  });
  function refresh(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    outUrls.forEach(function(u){ URL.revokeObjectURL(u); }); outUrls = [];
    resBox.classList.remove('show');
    refresh();
  });
  function decodeIco(f){
    return new Promise(function(res, rej){
      var url = URL.createObjectURL(f);
      var img = new Image();
      img.onload = function(){
        if(!img.naturalWidth){ URL.revokeObjectURL(url); rej(new Error('Browser could not decode this ICO')); return; }
        res({ img: img, url: url });
      };
      img.onerror = function(){ URL.revokeObjectURL(url); rej(new Error('Browser could not decode this ICO')); };
      img.src = url;
    });
  }
  btn.addEventListener('click', function(){
    if(!files.length){ ToolPro.toast('Add at least one ICO file first.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var quality = (parseInt(document.getElementById('ijpQ').value, 10) || 92) / 100;
    var sizeMode = document.getElementById('ijpSize').value;
    var done = 0, failed = 0;
    var queue = files.slice();
    function next(){
      if(!queue.length){
        progWrap.classList.remove('show');
        summaryEl.textContent = '🎉 ' + done + ' icon' + (done !== 1 ? 's' : '') + ' converted to JPG' + (failed ? ' · ' + failed + ' could not be decoded by this browser (try a different ICO)' : '') + '.';
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast(done ? 'Conversion complete' : 'No icons converted', done ? 'ok' : 'err');
        btn.disabled = false;
        refresh();
        return;
      }
      var f = queue.shift();
      progText.textContent = 'Converting ' + f.name + '…';
      progBar.style.width = Math.round((done + failed) / files.length * 100) + '%';
      decodeIco(f).then(function(d){
        var w = d.img.naturalWidth, h = d.img.naturalHeight;
        if(sizeMode !== 'orig'){
          var s = parseInt(sizeMode, 10);
          var scale = Math.min(s / w, s / h, 1);
          w = Math.max(1, Math.round(w * scale));
          h = Math.max(1, Math.round(h * scale));
        }
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(d.img, 0, 0, w, h);
        URL.revokeObjectURL(d.url);
        canvas.toBlob(function(blob){
          if(!blob){ failed++; next(); return; }
          var url = URL.createObjectURL(blob);
          outUrls.push(url);
          var name = f.name.replace(/\.ico$/i, '') + '.jpg';
          var card = document.createElement('div');
          card.className = 'result-card';
          card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download JPG</button>';
          card.querySelector('.r-name').textContent = name;
          card.querySelector('.r-name').title = name;
          card.querySelector('.r-stats').textContent = w + ' × ' + h + ' px · quality ' + Math.round(quality * 100) + '% · ' + ToolPro.fmtBytes(blob.size);
          (function(u, nm){
            card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
          })(url, name);
          gridEl.appendChild(card);
          done++;
          progBar.style.width = Math.round((done + failed) / files.length * 100) + '%';
          next();
        }, 'image/jpeg', quality);
      }).catch(function(){
        failed++;
        ToolPro.toast(f.name + ' could not be decoded by this browser.', 'err');
        next();
      });
    }
    next();
  });
  refresh();
})();
</script>

## How it works

Drop in your .ico files, pick a background color (JPEG cannot be transparent, so the color fills the icon's see-through areas), set quality and output size, and hit **Convert to JPG**. Your browser decodes each icon, draws it onto a canvas over your chosen background, and exports a real JPEG you can download. Icons your browser cannot decode are reported honestly instead of producing a broken file. Your files never leave your browser.

## Everyday uses

- **Favicons for the web** — turn a site icon into a JPG for social sharing images.
- **Presentations** — JPG icons drop cleanly into slides and documents.
- **App store assets** — convert icon sets for listings that require JPG.
- **Design mockups** — use app icons in layouts that don't accept ICO.
- **Archives** — move old Windows icon collections into a universal format.
