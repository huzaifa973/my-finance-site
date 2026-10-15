---
title: "TIFF to JPG Converter — Free Online, Batch Supported"
description: "Convert TIFF/TIF files to JPG right in your browser with batch processing, quality presets and preview thumbnails. Free forever, no sign-up, files never leave your device."
category: image
date: 2026-10-15
draft: false
---

Scanners and cameras love TIFF, but the web runs on JPG. Drop in one TIFF or a whole batch, pick a quality preset, and get web-ready JPGs with before/after sizes — no software to install, no uploads. Everything runs in your browser; your files never leave your device.

<div class="tool-shell" id="t2jShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TIFF to JPG Converter</h2>
<p>Turn TIFF/TIF scans into web-ready JPGs — batch supported, quality presets, preview thumbnails.</p>
</div>
<button type="button" class="theme-toggle" id="t2jTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your TIFF files</p>
<div class="dropzone" id="t2jDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop TIFF files here</strong>
<span>or click to browse — .tif / .tiff · batch supported</span>
<input type="file" id="t2jFile" accept=".tif,.tiff,image/tiff">
</div>
<ul class="file-list" id="t2jList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="t2jPresets">
<button type="button" class="preset-chip active" data-q="85">🌐 Web — 85%</button>
<button type="button" class="preset-chip" data-q="70">✉️ Email — 70%</button>
<button type="button" class="preset-chip" data-q="95">🖼️ Max quality — 95%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="t2jQuality">JPG quality: <span class="val" id="t2jQVal">85%</span></label>
<input type="range" id="t2jQuality" min="10" max="100" value="85">
<div class="hint">85% is the sweet spot — visually identical, much smaller than TIFF.</div>
</div>
<div class="setting">
<label for="t2jMaxW">Max width</label>
<select id="t2jMaxW">
<option value="99999" selected>Original size</option>
<option value="4096">4096 px</option>
<option value="2048">2048 px</option>
<option value="1024">1024 px</option>
<option value="800">800 px — web</option>
</select>
<div class="hint">Downscale huge scans to shrink files further.</div>
</div>
</div>
<div class="hint" style="margin-top:8px">ℹ️ TIFFs with multiple pages convert the first page only. CMYK scans are converted through sRGB, so colors may shift slightly.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="t2jBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to JPG
</button>
<button type="button" class="btn-pro-outline" id="t2jClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="t2jProgWrap">
<div class="progress-bar"><i id="t2jProgBar"></i></div>
<div class="progress-text" id="t2jProgText">Working…</div>
</div>
<div class="results" id="t2jResults">
<p class="result-head">✅ Done — your JPGs</p>
<div class="result-summary" id="t2jSummary"></div>
<div class="result-grid" id="t2jGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many TIFFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('t2jShell');
  ToolPro.themeToggle(shell, document.getElementById('t2jTheme'));

  var files = [];
  var listEl = document.getElementById('t2jList');
  var btn = document.getElementById('t2jBtn');
  var clearBtn = document.getElementById('t2jClear');
  var qRange = document.getElementById('t2jQuality');
  var qVal = document.getElementById('t2jQVal');
  var maxWSel = document.getElementById('t2jMaxW');
  var utifLoading = null;

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

  document.getElementById('t2jPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#t2jPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qRange.value = chip.dataset.q;
    qRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert ' +
      (n ? n + (n === 1 ? ' File' : ' Files') : 'Files') + ' to JPG';
  }

  ToolPro.dropzone(document.getElementById('t2jDrop'), {
    multiple: true,
    accept: '.tif,.tiff,image/tiff',
    maxFiles: 20,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('t2jResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' TIFF' : ' TIFFs') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('t2jResults').classList.remove('show');
    refreshButtons();
  });

  // Lazy-load the UTIF.js TIFF decoder only when the user actually converts.
  function loadUTIF(){
    if(window.UTIF) return Promise.resolve();
    if(utifLoading) return utifLoading;
    utifLoading = new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.min.js';
      s.onload = function(){ res(); };
      s.onerror = function(){ utifLoading = null; rej(new Error('decoder failed to load')); };
      document.head.appendChild(s);
    });
    return utifLoading;
  }

  function tiffToJpg(file, quality, maxW){
    return file.arrayBuffer().then(function(buf){
      var ifds = UTIF.decode(buf);
      if(!ifds || !ifds.length) throw new Error('not a TIFF');
      UTIF.decodeImage(buf, ifds[0]);
      var rgba = UTIF.toRGBA8(ifds[0]);
      var w0 = ifds[0].width, h0 = ifds[0].height;
      var w = w0, h = h0;
      if(w > maxW){ h = Math.round(h * maxW / w); w = maxW; }
      var full = document.createElement('canvas');
      full.width = w0; full.height = h0;
      var img = full.getContext('2d').createImageData(w0, h0);
      img.data.set(rgba);
      full.getContext('2d').putImageData(img, 0, 0);
      var c = document.createElement('canvas');
      c.width = w; c.height = h;
      var ctx = c.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); // JPG has no alpha
      ctx.drawImage(full, 0, 0, w, h);
      var dataUrl = c.toDataURL('image/jpeg', quality / 100);
      return { dataUrl: dataUrl, width: w, height: h,
               size: Math.round(dataUrl.length * 0.75) };
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var quality = parseInt(qRange.value, 10);
    var maxW = parseInt(maxWSel.value, 10);
    var progWrap = document.getElementById('t2jProgWrap');
    var progBar = document.getElementById('t2jProgBar');
    var progText = document.getElementById('t2jProgText');
    var grid = document.getElementById('t2jGrid');
    var resBox = document.getElementById('t2jResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    progText.textContent = 'Loading the TIFF decoder (first run only)…';
    try{
      await loadUTIF();
    }catch(e){
      progWrap.classList.remove('show'); btn.disabled = false;
      ToolPro.toast('Could not load the TIFF decoder — check your connection', 'err');
      return;
    }
    var totalSaved = 0, totalOrig = 0, done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + '…';
      var out = null;
      try{ out = await tiffToJpg(entry.file, quality, maxW); }
      catch(e){ out = null; }
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!out){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      totalOrig += entry.file.size; totalSaved += Math.max(0, entry.file.size - out.size);
      var savedPct = entry.file.size ? Math.max(0, Math.round((1 - out.size / entry.file.size) * 100)) : 0;
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = (entry.file.name.replace(/\.[^.]+$/, '') || 'image') + '.jpg';
      card.innerHTML =
        '<img class="r-preview" alt="Converted preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download JPG</button>';
      card.querySelector('.r-preview').src = out.dataUrl;
      card.querySelector('.r-name').textContent = base;
      card.querySelector('.r-name').title = base;
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(out.size) +
        '</b> (' + savedPct + '% smaller) · ' + out.width + '×' + out.height + 'px';
      (function(url, name){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
      })(out.dataUrl, base);
      grid.appendChild(card);
    }
    var allPct = totalOrig ? Math.round(totalSaved / totalOrig * 100) : 0;
    document.getElementById('t2jSummary').textContent =
      '🎉 ' + done + (done === 1 ? ' TIFF' : ' TIFFs') + ' converted — saved ' +
      ToolPro.fmtBytes(totalSaved) + ' total (' + allPct + '% smaller).';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('All TIFFs converted', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your .tif / .tiff files, one or a batch.
- **Step 2** — Pick a quality preset (or fine-tune the slider) and an optional max width for huge scans.
- **Step 3** — Hit **Convert to JPG**. Each TIFF is decoded in your browser (UTIF.js loads on first use), drawn to a canvas, and exported as a JPG with a preview thumbnail, size stats, and its own download button.
- **Private by design** — everything runs locally in your browser; your files never leave your browser.

## Everyday uses

- **Scanned documents** — turn bulky scanner TIFFs into emailable JPGs.
- **Photographers** — export camera TIFFs to web-ready JPGs without opening an editor.
- **Archives** — batch-convert a folder of old scans in one go.
- **Real estate** — convert listing scans to JPGs that upload to portals instantly.
- **Designers** — get quick JPG previews of TIFF assets for client review.
