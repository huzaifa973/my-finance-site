---
title: "Free HEIC to JPG Converter — Convert iPhone Photos Online"
description: "Convert iPhone HEIC photos to JPG or PNG right in your browser — batch conversion, quality presets, no sign-up. Free forever; files never leave your device."
category: image
date: 2026-10-09
draft: false
---

Your iPhone saves photos in HEIC format, and half the world's apps still can't open it. Drop in your HEIC photos, pick a quality preset, and get back universal JPG or PNG files that work everywhere — Windows, Android, web forms, print shops. Everything converts inside your browser; your photos are never uploaded anywhere.

<div class="tool-shell" id="hcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HEIC to JPG Converter</h2>
<p>Convert iPhone HEIC photos to JPG or PNG — batch supported, right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="hcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your HEIC photos</p>
<div class="dropzone" id="hcDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop HEIC photos here</strong>
<span>or click to browse — .heic / .heif · up to 10 at once</span>
<input type="file" id="hcFile" accept=".heic,.heif,image/heic,image/heif">
</div>
<ul class="file-list" id="hcList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="hcPresets">
<button type="button" class="preset-chip" data-q="60">✉️ Email — small</button>
<button type="button" class="preset-chip active" data-q="85">⚖️ Balanced — recommended</button>
<button type="button" class="preset-chip" data-q="100">🖼️ Max quality</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="hcQuality">Quality: <span class="val" id="hcQVal">85%</span></label>
<input type="range" id="hcQuality" min="10" max="100" value="85">
<div class="hint">85% is the sweet spot for sharing — visually identical to the original at a smaller size.</div>
</div>
<div class="setting">
<label for="hcFormat">Output format</label>
<select id="hcFormat">
<option value="jpeg" selected>JPEG — best compatibility</option>
<option value="png">PNG — lossless</option>
</select>
<div class="hint">JPEG opens everywhere and is much smaller; PNG keeps full quality but bigger files.</div>
</div>
<div class="setting">
<label>Filename</label>
<label><input type="checkbox" id="hcKeepName" checked> Keep original filename (change extension only)</label>
<div class="hint">Your first conversion loads the HEIC decoder — it takes a few seconds, then it's instant. Files over 50 MB may fail on phones with limited RAM.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to JPG
</button>
<button type="button" class="btn-pro-outline" id="hcClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="hcProgWrap">
<div class="progress-bar"><i id="hcProgBar"></i></div>
<div class="progress-text" id="hcProgText">Working…</div>
</div>
<div class="results" id="hcResults">
<p class="result-head">✅ Done — your converted photos</p>
<div class="result-summary" id="hcSummary"></div>
<div class="result-grid" id="hcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many photos as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('hcShell');
  ToolPro.themeToggle(shell, document.getElementById('hcTheme'));

  var files = [];           // {file, row}
  var listEl = document.getElementById('hcList');
  var btn = document.getElementById('hcBtn');
  var clearBtn = document.getElementById('hcClear');
  var qRange = document.getElementById('hcQuality');
  var qVal = document.getElementById('hcQVal');
  var fmtSel = document.getElementById('hcFormat');
  var keepName = document.getElementById('hcKeepName');
  var presets = document.getElementById('hcPresets');

  var HEIC_CDN = 'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js';
  var heicLoading = null;

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qRange.value = chip.dataset.q;
    qRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function fmtName(){
    return fmtSel.value === 'png' ? 'PNG' : 'JPG';
  }

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert to ' + fmtName() +
      (n ? ' (' + n + (n === 1 ? ' photo' : ' photos') + ')' : '');
  }
  fmtSel.addEventListener('change', refreshButtons);

  ToolPro.dropzone(document.getElementById('hcDrop'), {
    multiple: true,
    accept: '.heic,.heif,image/heic,image/heif',
    maxFiles: 10,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(!/\.(heic|heif)$/i.test(f.name)){
          ToolPro.toast((f.name || 'A file') + ' is not HEIC/HEIF — skipped', 'err');
          return;
        }
        if(files.some(function(x){ return x.file === f; })) return;
        if(f.size > 50 * 1024 * 1024){
          ToolPro.toast(f.name + ' is over 50 MB — it may fail on phones with limited RAM', 'err');
        }
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('hcResults').classList.remove('show');
      refreshButtons();
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('hcResults').classList.remove('show');
    refreshButtons();
  });

  function loadHeic2Any(){
    if(typeof window.heic2any !== 'undefined') return Promise.resolve();
    if(heicLoading) return heicLoading;
    heicLoading = new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = HEIC_CDN;
      s.onload = function(){ resolve(); };
      s.onerror = function(){ reject(new Error('decoder failed to load')); };
      document.head.appendChild(s);
    });
    return heicLoading;
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true;
    var progWrap = document.getElementById('hcProgWrap');
    var progBar = document.getElementById('hcProgBar');
    var progText = document.getElementById('hcProgText');
    var grid = document.getElementById('hcGrid');
    var resBox = document.getElementById('hcResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    progText.textContent = 'Loading the HEIC decoder (first time only)…';
    try { await loadHeic2Any(); }
    catch(err){
      heicLoading = null;
      progWrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('Could not load the HEIC decoder — check your connection and try again', 'err');
      return;
    }
    if(typeof window.heic2any === 'undefined'){
      heicLoading = null;
      progWrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('HEIC decoder failed to start — please reload the page', 'err');
      return;
    }

    var quality = parseInt(qRange.value, 10) / 100;
    var toType = fmtSel.value === 'png' ? 'image/png' : 'image/jpeg';
    var ext = fmtSel.value === 'png' ? 'png' : 'jpg';
    var keep = keepName.checked;

    var results = []; // {name, url, orig, size}
    var okCount = 0, done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Converting…', 'working');
      progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + '…';
      try {
        var out = await window.heic2any({ blob: entry.file, toType: toType, quality: quality });
        if(Array.isArray(out)) out = out[0];
        var url = URL.createObjectURL(out);
        var base = entry.file.name.replace(/\.(heic|heif)$/i, '');
        var name = keep ? base + '.' + ext : 'heic-converted-' + (i + 1) + '.' + ext;
        results.push({ name: name, url: url, orig: entry.file.size, size: out.size || entry.file.size });
        entry.row.setStatus('Done', 'done');
        okCount++;
      } catch(err){
        entry.row.setStatus('Failed', '');
        ToolPro.toast('Could not convert ' + entry.file.name + ' — the file may be damaged', 'err');
      }
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
    }

    results.forEach(function(r){
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<img class="r-preview" alt="Converted photo preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-preview').src = r.url;
      card.querySelector('.r-name').textContent = r.name;
      card.querySelector('.r-name').title = r.name;
      var pct = r.orig ? Math.round((1 - r.size / r.orig) * 100) : 0;
      var change = pct >= 0 ? pct + '% smaller' : Math.abs(pct) + '% larger';
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(r.orig) + ' → <b>' + ToolPro.fmtBytes(r.size) + '</b> (' + change + ')';
      (function(u, n){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
      })(r.url, r.name);
      grid.appendChild(card);
    });

    var summary = document.getElementById('hcSummary');
    summary.textContent = '🎉 Converted ' + okCount + ' of ' + files.length + ' photos.';
    if(okCount > 1){
      var allBtn = document.createElement('button');
      allBtn.type = 'button';
      allBtn.className = 'btn-pro-outline';
      allBtn.textContent = '⬇ Download all ' + okCount + ' photos';
      allBtn.addEventListener('click', function(){
        ToolPro.toast('Downloading ' + okCount + ' photos…');
        results.forEach(function(r, j){
          setTimeout(function(){ ToolPro.download(r.url, r.name); }, j * 400);
        });
      });
      summary.appendChild(document.createElement('br'));
      summary.appendChild(allBtn);
    }

    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('Conversion complete', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

**What is HEIC?** Since iOS 11, iPhones save photos in HEIC (High Efficiency Image Container) instead of JPEG. It stores great-looking photos at roughly half the file size — but Windows, many Android apps, and web forms still can't open it. **Why convert?** A universal JPEG works everywhere: upload forms, email, social media, print shops.

**How this tool converts:** when you press Convert, your browser loads the heic2any decoder (the few-second wait only happens once) and decodes each HEIC photo locally, then re-encodes it as JPEG or PNG at your chosen quality. Nothing is uploaded — your photos never leave your device. Browsers can't display HEIC directly, so the file list shows names and sizes until conversion, when you get a real preview of each converted photo.

## Everyday uses

- **Open iPhone photos on a Windows PC** — convert the whole camera roll export to JPG.
- **Upload to forms that only accept JPG** — government portals, job applications, and insurance sites.
- **Share with Android friends** — send photos they can actually open.
- **Back up photos as JPG** — a format every device will read in 20 years.
- **Print at a shop** — most print kiosks only accept JPEG or PNG.
