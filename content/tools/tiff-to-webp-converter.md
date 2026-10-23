---
title: "Free TIFF to WebP Converter — Convert TIFF Images Online"
description: "Convert TIFF to WebP free online with a quality slider and batch support. Decodes in your browser — no sign-up, no uploads, private."
category: image
date: 2026-10-23
draft: false
---

TIFF files from scanners and design software are huge and most websites won't display them. Convert them to WebP — the modern, tiny, web-friendly format — right in your browser. Upload one TIFF or a whole batch, dial in the quality, and download crisp WebP files. Everything runs locally; your images are never uploaded anywhere.

<div class="tool-shell" id="twShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TIFF to WebP Converter</h2>
<p>Turn bulky TIFF scans into tiny WebP images — batch supported, right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="twTheme">🌙 Dark</button>
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
<div class="dropzone" id="twDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop TIFF files here</strong>
<span>or click to browse — .tif / .tiff · batch supported</span>
<input type="file" id="twFile" accept=".tif,.tiff,image/tiff">
</div>
<ul class="file-list" id="twList"></ul>
<div class="hint">Multi-page TIFFs: the first page is converted. Decoding uses the UTIF.js library loaded in your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="twPresets">
<button type="button" class="preset-chip active" data-q="80">🌐 Web — 80%</button>
<button type="button" class="preset-chip" data-q="65">✉️ Email — 65%</button>
<button type="button" class="preset-chip" data-q="92">🖼️ High quality — 92%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="twQuality">WebP quality: <span class="val" id="twQVal">80%</span></label>
<input type="range" id="twQuality" min="10" max="100" value="80">
<div class="hint">80% is the sweet spot — visually identical, much smaller than the TIFF.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="twBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to WebP
</button>
<button type="button" class="btn-pro-outline" id="twClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="twProgWrap">
<div class="progress-bar"><i id="twProgBar"></i></div>
<div class="progress-text" id="twProgText">Working…</div>
</div>
<div class="results" id="twResults">
<p class="result-head">✅ Done — your WebP images</p>
<div class="result-summary" id="twSummary"></div>
<div class="result-grid" id="twGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many TIFFs as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.js"></script>

<script>
(function(){
  var shell = document.getElementById('twShell');
  ToolPro.themeToggle(shell, document.getElementById('twTheme'));
  var files = [];
  var listEl = document.getElementById('twList');
  var btn = document.getElementById('twBtn');
  var clearBtn = document.getElementById('twClear');
  var qRange = document.getElementById('twQuality');
  var qVal = document.getElementById('twQVal');
  var presets = document.getElementById('twPresets');
  var resBox = document.getElementById('twResults');
  var summaryEl = document.getElementById('twSummary');
  var gridEl = document.getElementById('twGrid');
  var progWrap = document.getElementById('twProgWrap');
  var progBar = document.getElementById('twProgBar');
  var progText = document.getElementById('twProgText');

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qRange.value = chip.dataset.q;
    qRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function isTiff(f){
    return f.type === 'image/tiff' || /\.(tif|tiff)$/i.test(f.name);
  }

  ToolPro.dropzone(document.getElementById('twDrop'), {
    multiple: true,
    accept: '.tif,.tiff,image/tiff',
    maxFiles: 20,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(!isTiff(f)){ ToolPro.toast(f.name + ' is not a TIFF file.', 'err'); return; }
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refresh();
        });
        files.push({ file: f, row: row });
      });
      resBox.classList.remove('show');
      refresh();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' TIFF' : ' TIFFs') + ' added', 'ok');
    }
  });

  function refresh(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert ' +
      (n ? n + (n === 1 ? ' TIFF' : ' TIFFs') : 'TIFFs') + ' to WebP';
  }

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    resBox.classList.remove('show');
    refresh();
  });

  function decodeTiff(file){
    return new Promise(function(resolve, reject){
      var r = new FileReader();
      r.onload = function(){
        try {
          var ifds = UTIF.decode(r.result);
          if(!ifds || !ifds.length) throw new Error('no image data found');
          UTIF.decodeImage(r.result, ifds[0]);
          var rgba = UTIF.toRGBA8(ifds[0]);
          var w = ifds[0].width, h = ifds[0].height;
          if(!w || !h || !rgba) throw new Error('unsupported TIFF encoding');
          var c = document.createElement('canvas');
          c.width = w; c.height = h;
          var ctx = c.getContext('2d');
          var imgData = ctx.createImageData(w, h);
          imgData.data.set(rgba);
          ctx.putImageData(imgData, 0, 0);
          resolve({ canvas: c, width: w, height: h });
        } catch(err){ reject(err); }
      };
      r.onerror = function(){ reject(new Error('could not read file')); };
      r.readAsArrayBuffer(file);
    });
  }

  function canvasToBlob(canvas, q){
    return new Promise(function(resolve){
      canvas.toBlob(function(b){ resolve(b); }, 'image/webp', q);
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    if(typeof UTIF === 'undefined'){
      ToolPro.toast('The TIFF decoder (UTIF.js CDN) could not load. Check your connection and retry.', 'err');
      return;
    }
    if(document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') !== 0){
      ToolPro.toast('Your browser cannot encode WebP — try Chrome, Edge, Firefox or Safari 14+.', 'err');
      return;
    }
    var quality = parseInt(qRange.value, 10) / 100;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); gridEl.innerHTML = '';
    var totalOrig = 0, totalNew = 0, done = 0, failed = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + '…';
      try {
        var dec = await decodeTiff(entry.file);
        var blob = await canvasToBlob(dec.canvas, quality);
        if(!blob) throw new Error('WebP encoding failed');
        var url = URL.createObjectURL(blob);
        done++;
        totalOrig += entry.file.size; totalNew += blob.size;
        entry.row.setStatus('Done', 'done');
        var savedPct = entry.file.size ? Math.max(0, Math.round((1 - blob.size / entry.file.size) * 100)) : 0;
        var base = entry.file.name.replace(/\.[^.]+$/, '');
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML =
          '<img class="r-preview" alt="WebP preview">' +
          '<div class="r-name"></div>' +
          '<div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-preview').src = url;
        card.querySelector('.r-name').textContent = base + '.webp';
        card.querySelector('.r-name').title = base + '.webp';
        card.querySelector('.r-stats').innerHTML =
          ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(blob.size) +
          '</b> (' + savedPct + '% smaller) · ' + dec.width + '×' + dec.height + 'px';
        (function(u, n){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
        })(url, base + '.webp');
        gridEl.appendChild(card);
      } catch(err){
        failed++;
        entry.row.setStatus('Failed', '');
        ToolPro.toast(entry.file.name + ': ' + (err && err.message ? err.message : 'conversion failed'), 'err');
      }
      progBar.style.width = Math.round((i + 1) / files.length * 100) + '%';
    }
    var allPct = totalOrig ? Math.max(0, Math.round((1 - totalNew / totalOrig) * 100)) : 0;
    summaryEl.textContent = done
      ? '🎉 ' + done + (done === 1 ? ' TIFF' : ' TIFFs') + ' converted — ' + ToolPro.fmtBytes(totalOrig - totalNew) +
        ' saved total (' + allPct + '% smaller).' + (failed ? ' ' + failed + ' failed.' : '')
      : '❌ None of the files could be converted.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    if(done) ToolPro.toast('Conversion complete', 'ok');
  });

  refresh();
})();
</script>

## How it works

Add your TIFF files, pick a quality preset (or drag the slider), and hit **Convert to WebP**. The tool decodes each TIFF with the UTIF.js library loaded in your browser, paints the pixels to a canvas, and re-encodes as WebP — no server round-trip, so even sensitive scans stay private. Each result shows a preview, the size savings, and its own download button.

**Rule of thumb:** quality 80% is visually identical to the original for scans and photos at a fraction of the size; drop to 65% only when every kilobyte counts.

## Everyday uses

- **Web designers** — turn client-supplied TIFFs into web-ready WebP images in one batch.
- **Bloggers** — shrink scanned documents and illustrations before uploading so pages load fast.
- **Archivists** — convert scanner-output TIFFs to a format every browser actually displays.
- **Photographers** — share proofs as lightweight WebP instead of email-choking TIFFs.
- **Students** — convert scanned assignment pages to small files that fit upload limits.

**Privacy note:** decoding happens with UTIF.js loaded in your own browser — your images never leave your device.
