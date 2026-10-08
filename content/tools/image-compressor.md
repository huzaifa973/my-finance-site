---
title: "Free Image Compressor — Reduce Image File Size Online"
description: "Compress JPG, PNG, and WebP images in your browser with batch processing, quality presets and before/after comparison. Free forever, no sign-up, files never leave your device."
date: 2026-10-08
draft: false
---

Shrink oversized images before you upload them — faster websites, smaller email attachments, and less storage used. Drop in one image or a whole batch, pick a preset or fine-tune the quality yourself, and compare results side by side. Everything runs in your browser; your files are never uploaded anywhere.

<div class="tool-shell" id="cmpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Compressor</h2>
<p>Reduce JPG, PNG &amp; WebP file sizes by up to 90% — right in your browser. Batch supported.</p>
</div>
<button type="button" class="theme-toggle" id="cmpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your images</p>
<div class="dropzone" id="cmpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop images here</strong>
<span>or click to browse — JPG, PNG, WebP · batch supported</span>
<input type="file" id="cmpFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="cmpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression settings</p>
<div class="settings-panel">
<div class="preset-row" id="cmpPresets">
<button type="button" class="preset-chip active" data-q="80" data-f="webp">🌐 Web — small &amp; sharp</button>
<button type="button" class="preset-chip" data-q="65" data-f="jpeg">✉️ Email — tiny files</button>
<button type="button" class="preset-chip" data-q="92" data-f="jpeg">🖼️ Max quality</button>
<button type="button" class="preset-chip" data-q="100" data-f="png">💎 Lossless PNG</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="cmpQuality">Quality: <span class="val" id="cmpQVal">80%</span></label>
<input type="range" id="cmpQuality" min="10" max="100" value="80">
<div class="hint">80% is the sweet spot — visually identical, much smaller.</div>
</div>
<div class="setting">
<label for="cmpFormat">Output format</label>
<select id="cmpFormat">
<option value="webp" selected>WebP — smallest files</option>
<option value="jpeg">JPEG — best compatibility</option>
<option value="png">PNG — lossless</option>
</select>
<div class="hint">WebP gives the smallest files at equal quality.</div>
</div>
<div class="setting">
<label for="cmpMaxW">Max width <span class="val" id="cmpWVal">Original</span></label>
<input type="range" id="cmpMaxW" min="320" max="4000" step="10" value="4000">
<div class="hint">Downscale huge photos to shrink files further.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cmpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress Images
</button>
<button type="button" class="btn-pro-outline" id="cmpClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="cmpProgWrap">
<div class="progress-bar"><i id="cmpProgBar"></i></div>
<div class="progress-text" id="cmpProgText">Working…</div>
</div>
<div class="results" id="cmpResults">
<p class="result-head">✅ Done — your compressed images</p>
<div class="result-summary" id="cmpSummary"></div>
<div class="result-grid" id="cmpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many images as you like, as often as you like.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('cmpShell');
  ToolPro.themeToggle(shell, document.getElementById('cmpTheme'));

  var files = [];           // {file, row}
  var listEl = document.getElementById('cmpList');
  var btn = document.getElementById('cmpBtn');
  var clearBtn = document.getElementById('cmpClear');
  var qRange = document.getElementById('cmpQuality');
  var qVal = document.getElementById('cmpQVal');
  var fmtSel = document.getElementById('cmpFormat');
  var wRange = document.getElementById('cmpMaxW');
  var wVal = document.getElementById('cmpWVal');
  var presets = document.getElementById('cmpPresets');

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });
  wRange.addEventListener('input', function(){
    wVal.textContent = (+wRange.value >= 4000) ? 'Original' : wRange.value + 'px';
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qRange.value = chip.dataset.q;
    qRange.dispatchEvent(new Event('input'));
    fmtSel.value = chip.dataset.f;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Compress ' +
      (n ? n + (n === 1 ? ' Image' : ' Images') : 'Images');
  }

  ToolPro.dropzone(document.getElementById('cmpDrop'), {
    multiple: true,
    accept: 'image/png,image/jpeg,image/webp',
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
      document.getElementById('cmpResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' image' : ' images') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('cmpResults').classList.remove('show');
    refreshButtons();
  });

  function compressOne(file, quality, format, maxW){
    return new Promise(function(resolve){
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function(){
        var w = img.naturalWidth, h = img.naturalHeight;
        if(w > maxW){ h = Math.round(h * maxW / w); w = maxW; }
        var c = document.createElement('canvas'); c.width = w; c.height = h;
        var ctx = c.getContext('2d');
        if(format === 'jpeg'){ ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
        ctx.drawImage(img, 0, 0, w, h);
        var mime = format === 'png' ? 'image/png' : 'image/' + format;
        var q = format === 'png' ? 1 : quality / 100;
        var dataUrl = c.toDataURL(mime, q);
        URL.revokeObjectURL(url);
        resolve({ dataUrl: dataUrl, width: w, height: h,
                  size: Math.round(dataUrl.length * 0.75) });
      };
      img.onerror = function(){ URL.revokeObjectURL(url); resolve(null); };
      img.src = url;
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var quality = parseInt(qRange.value, 10);
    var format = fmtSel.value;
    var maxW = parseInt(wRange.value, 10);
    var progWrap = document.getElementById('cmpProgWrap');
    var progBar = document.getElementById('cmpProgBar');
    var progText = document.getElementById('cmpProgText');
    var grid = document.getElementById('cmpGrid');
    var resBox = document.getElementById('cmpResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    var totalSaved = 0, totalOrig = 0, done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Compressing ' + (i + 1) + ' of ' + files.length + '…';
      var out = await compressOne(entry.file, quality, format, maxW);
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!out){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      totalOrig += entry.file.size; totalSaved += Math.max(0, entry.file.size - out.size);
      var savedPct = entry.file.size ? Math.max(0, Math.round((1 - out.size / entry.file.size) * 100)) : 0;
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = entry.file.name.replace(/\.[^.]+$/, '');
      card.innerHTML =
        '<img class="r-preview" alt="Compressed preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-preview').src = out.dataUrl;
      card.querySelector('.r-name').textContent = base + '.' + format;
      card.querySelector('.r-name').title = base + '.' + format;
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(out.size) +
        '</b> (' + savedPct + '% smaller) · ' + out.width + '×' + out.height + 'px';
      (function(url, name){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
      })(out.dataUrl, base + '.' + format);
      grid.appendChild(card);
    }
    var allPct = totalOrig ? Math.round(totalSaved / totalOrig * 100) : 0;
    document.getElementById('cmpSummary').textContent =
      '🎉 ' + done + (done === 1 ? ' image' : ' images') + ' compressed — saved ' +
      ToolPro.fmtBytes(totalSaved) + ' total (' + allPct + '% smaller).';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('All images compressed', 'ok');
  });

  refreshButtons();
})();
</script>

## Everyday uses

- **Blog and website owners** — smaller images mean faster pages and better SEO; Google ranks fast sites higher.
- **Freelancers** — email portfolios and invoices as attachments without hitting size limits.
- **Sellers** — compress product photos before listing on marketplaces for quicker uploads.
- **Students** — shrink screenshots for assignments and reports that must stay under a file-size cap.
- **Social media** — compress before posting to control quality instead of letting apps do it badly.

**Rule of thumb:** quality 80% is the sweet spot for photos — visually identical to the original at a fraction of the size. Drop to 60–70% only when every kilobyte counts.
