---
title: "Free Image Format Converter — PNG, JPG & WebP"
description: "Convert images between PNG, JPG, and WebP in seconds, right in your browser. Free, no sign-up, your files never leave your device."
category: image
date: 2026-10-08
draft: false
---

Convert any image between PNG, JPG, and WebP — for smaller files, better compatibility, or faster websites. Upload one or several images, pick the target format and quality, and download the results as individual files or one ZIP. Everything runs in your browser; nothing is uploaded to a server.

## How it works

<div class="tool-shell" id="fcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Format Converter</h2>
<p>Convert PNG, JPG, GIF &amp; BMP to WebP, JPG, or PNG — in bulk, right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="fcTheme">🌙 Dark</button>
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
<div class="dropzone" id="fcDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop images here</strong>
<span>or click to browse — PNG, JPG, WebP, GIF, BMP · batch supported</span>
<input type="file" id="fcFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp" multiple>
</div>
<ul class="file-list" id="fcList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="fcPresets">
<button type="button" class="preset-chip active" data-f="webp" data-q="85">🌐 Web — WebP 85%</button>
<button type="button" class="preset-chip" data-f="jpeg" data-q="70">✉️ Email — JPG 70%</button>
<button type="button" class="preset-chip" data-f="png" data-q="100">💎 Print — PNG lossless</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="fcFormat">Convert to</label>
<select id="fcFormat">
<option value="webp" selected>WebP (smallest, modern)</option>
<option value="jpeg">JPG / JPEG (universal)</option>
<option value="png">PNG (lossless)</option>
</select>
<div class="hint">WebP cuts file size by 25–35% with no visible quality loss.</div>
</div>
<div class="setting" id="fcQSetting">
<label for="fcQuality">Quality: <span class="val" id="fcQVal">85%</span></label>
<input type="range" id="fcQuality" min="10" max="100" value="85">
<div class="hint">85% is the sweet spot for photos.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
Convert Images
</button>
<button type="button" class="btn-pro-outline" id="fcClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="fcProgWrap">
<div class="progress-bar"><i id="fcProgBar"></i></div>
<div class="progress-text" id="fcProgText">Working…</div>
</div>
<div class="results" id="fcResults">
<p class="result-head">✅ Done — your converted images</p>
<div class="result-summary" id="fcSummary"></div>
<div class="result-grid" id="fcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as many images as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('fcShell');
  ToolPro.themeToggle(shell, document.getElementById('fcTheme'));

  var files = [];           // {file, row}
  var listEl = document.getElementById('fcList');
  var btn = document.getElementById('fcBtn');
  var clearBtn = document.getElementById('fcClear');
  var fmtSel = document.getElementById('fcFormat');
  var qRange = document.getElementById('fcQuality');
  var qVal = document.getElementById('fcQVal');
  var qSetting = document.getElementById('fcQSetting');
  var presets = document.getElementById('fcPresets');
  var resBox = document.getElementById('fcResults');

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

  function refreshQualityState(){
    var isPng = fmtSel.value === 'png';
    qSetting.style.opacity = isPng ? '0.4' : '1';
    qRange.disabled = isPng;
  }
  fmtSel.addEventListener('change', refreshQualityState);
  refreshQualityState();

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    fmtSel.value = chip.dataset.f;
    refreshQualityState();
    qRange.value = chip.dataset.q;
    qRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Convert ' +
      (n ? n + (n === 1 ? ' Image' : ' Images') : 'Images');
  }

  ToolPro.dropzone(document.getElementById('fcDrop'), {
    multiple: true,
    accept: 'image/png,image/jpeg,image/webp,image/gif,image/bmp',
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      resBox.classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' image' : ' images') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    resBox.classList.remove('show');
    refreshButtons();
  });

  function fcFmt(bytes){ return bytes > 1048576 ? (bytes / 1048576).toFixed(2) + ' MB' : (bytes / 1024).toFixed(1) + ' KB'; }

  btn.addEventListener('click', function(){
    if(!files.length){ ToolPro.toast('Please choose at least one image first.', 'err'); return; }
    var fmt = fmtSel.value;
    var q = parseInt(qRange.value, 10) / 100;
    var mime = 'image/' + (fmt === 'jpeg' ? 'jpeg' : fmt);
    var progWrap = document.getElementById('fcProgWrap');
    var progBar = document.getElementById('fcProgBar');
    var progText = document.getElementById('fcProgText');
    var grid = document.getElementById('fcGrid');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    var done = 0, totalSaved = 0, totalOrig = 0;
    progText.textContent = 'Converting ' + files.length + (files.length === 1 ? ' image' : ' images') + '…';
    files.forEach(function(entry, idx){
      entry.row.setStatus('Working…', 'working');
      var img = new Image();
      img.onload = function(){
        var c = document.createElement('canvas');
        c.width = img.naturalWidth; c.height = img.naturalHeight;
        var ctx = c.getContext('2d');
        if(fmt === 'jpeg' || fmt === 'webp'){ ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); }
        ctx.drawImage(img, 0, 0);
        c.toBlob(function(blob){
          done++;
          entry.row.setStatus('Done', 'done');
          progBar.style.width = Math.round(done / files.length * 100) + '%';
          var url = URL.createObjectURL(blob);
          var name = entry.file.name.replace(/\.[^.]+$/, '') + '.' + (fmt === 'jpeg' ? 'jpg' : fmt);
          totalOrig += entry.file.size;
          totalSaved += Math.max(0, entry.file.size - blob.size);
          var savedPct = entry.file.size ? Math.max(0, Math.round((1 - blob.size / entry.file.size) * 100)) : 0;
          var card = document.createElement('div');
          card.className = 'result-card';
          card.innerHTML =
            '<img class="r-preview" alt="Converted preview">' +
            '<div class="r-name"></div>' +
            '<div class="r-stats"></div>' +
            '<button type="button" class="btn-pro">⬇ Download</button>';
          card.querySelector('.r-preview').src = url;
          card.querySelector('.r-name').textContent = name;
          card.querySelector('.r-name').title = name;
          card.querySelector('.r-stats').innerHTML =
            ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(blob.size) + '</b> (' + savedPct + '% smaller)';
          (function(u, n){
            card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
          })(url, name);
          grid.appendChild(card);
          if(done === files.length){
            var allPct = totalOrig ? Math.round(totalSaved / totalOrig * 100) : 0;
            document.getElementById('fcSummary').textContent =
              '🎉 ' + done + (done === 1 ? ' image' : ' images') + ' converted — saved ' +
              ToolPro.fmtBytes(totalSaved) + ' total (' + allPct + '% smaller).';
            progWrap.classList.remove('show');
            resBox.classList.add('show');
            resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            btn.disabled = false;
            ToolPro.toast('All images converted', 'ok');
          }
          URL.revokeObjectURL(img.src);
        }, mime, fmt === 'png' ? undefined : q);
      };
      img.src = URL.createObjectURL(entry.file);
    });
  });

  refreshButtons();
})();
</script>

## Everyday uses

- **Website owners** — convert to WebP to cut page weight by 25–35% with no visible quality loss; Google loves fast pages.
- **Phone photos** — iPhones save HEIC; screenshots save PNG; convert both to JPG for universal compatibility (uploaders, email, old software).
- **Designers** — deliver assets in whatever format a client or platform demands, in bulk.
- **Sellers & freelancers** — standardize a whole folder of mixed-format photos to one format before sharing a zip.

**Which format when?**

| Format | Best for | Note |
|---|---|---|
| **WebP** | Web photos, smallest files | Supported by all modern browsers (2020+) |
| **JPG** | Photos for email, print, sharing | Universal compatibility, lossy |
| **PNG** | Logos, graphics with transparency | Lossless but larger files |

Converting PNG→WebP at 85% quality is the single biggest file-size win most websites never bother with — now it takes seconds.
