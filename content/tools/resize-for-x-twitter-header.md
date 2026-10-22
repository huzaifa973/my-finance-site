---
title: "X (Twitter) Header Resizer — Free 1500×500 Banner Maker"
description: "Resize and crop any image to the perfect X (Twitter) header size 1500×500 with a live safe-area preview. Free forever, no sign-up, files never leave your browser."
category: image
date: 2026-10-22
draft: false
---

A blurry or awkwardly cropped X header makes a profile look unfinished. Drop in any image, crop it to the exact 1500×500 header size, preview the safe areas (profile-photo overlap and text-safe zones), and download a crisp PNG or JPEG. Everything runs in your browser — your image is never uploaded.

<div class="tool-shell" id="xthShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.9-6.4L6.47 22H3.35l7.24-8.28L1.2 2h6.4l4.42 5.85L18.9 2zm-1.1 18.13h1.73L7.7 3.77H5.85l11.95 16.36z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>X Header Resizer</h2>
<p>Crop any image to the perfect 1500×500 X (Twitter) header — with a live safe-area preview.</p>
</div>
<button type="button" class="theme-toggle" id="xthTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your image</p>
<div class="dropzone" id="xthDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP · batch supported</span>
<input type="file" id="xthFile" accept="image/png,image/jpeg,image/webp" multiple>
</div>
<ul class="file-list" id="xthList"></ul>
<div class="xth-preview-wrap" id="xthPreviewWrap" style="display:none;">
<p class="hint"><strong>Safe-area preview</strong> — the circle shows where your profile photo overlaps; keep key content inside the dashed zone.</p>
<div class="xth-preview" id="xthPreview">
<img id="xthImg" alt="1500x500 header preview">
<div class="xth-safe"></div>
<div class="xth-avatar"></div>
<div class="xth-mobile-band xth-band-top">may crop on mobile</div>
<div class="xth-mobile-band xth-band-bottom">may crop on mobile</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Crop &amp; format settings</p>
<div class="settings-panel">
<div class="preset-row" id="xthPresets">
<button type="button" class="preset-chip active" data-anchor="center">🎯 Crop: Center (default)</button>
<button type="button" class="preset-chip" data-anchor="top">⬆️ Crop: keep the top</button>
<button type="button" class="preset-chip" data-anchor="bottom">⬇️ Crop: keep the bottom</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="xthFormat">Download format</label>
<select id="xthFormat">
<option value="png" selected>PNG — sharpest (best for graphics)</option>
<option value="jpeg">JPEG — smaller file (best for photos)</option>
</select>
<div class="hint">PNG keeps logos and text crisp; JPEG keeps photo file sizes small.</div>
</div>
<div class="setting">
<label for="xthQuality">JPEG quality: <span class="val" id="xthQVal">90%</span></label>
<input type="range" id="xthQuality" min="50" max="100" value="90">
<div class="hint">Only applies to JPEG downloads.</div>
</div>
<div class="setting">
<label>Upscale small images</label>
<div class="toggle" id="xthUpscale"><span class="knob"></span></div>
<div class="hint">Stretch images smaller than 1500×500 instead of leaving gaps. Off by default — upscaling softens detail.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Resize &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="xthBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Resize to 1500×500
</button>
<button type="button" class="btn-pro-outline" id="xthClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="xthProgWrap">
<div class="progress-bar"><i id="xthProgBar"></i></div>
<div class="progress-text" id="xthProgText">Working…</div>
</div>
<div class="results" id="xthResults">
<p class="result-head">✅ Done — X-ready headers (1500×500)</p>
<div class="result-summary" id="xthSummary"></div>
<div class="result-grid" id="xthGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — resize as many headers as you like, as often as you like.</p>
</div>
</div>
</div>
<style>
.xth-preview-wrap{margin-top:14px;}
.xth-preview{position:relative;width:100%;aspect-ratio:3/1;border-radius:10px;overflow:hidden;background:#0f172a;}
.xth-preview img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
.xth-safe{position:absolute;inset:14% 8%;border:2px dashed rgba(255,255,255,.85);border-radius:8px;pointer-events:none;}
.xth-avatar{position:absolute;left:3%;bottom:-8%;width:22%;aspect-ratio:1/1;border-radius:50%;background:rgba(255,255,255,.28);border:2px dashed rgba(255,255,255,.9);pointer-events:none;}
.xth-mobile-band{position:absolute;left:0;right:0;height:10%;background:repeating-linear-gradient(45deg,rgba(255,80,80,.25),rgba(255,80,80,.25) 8px,transparent 8px,transparent 16px);color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;letter-spacing:.3px;pointer-events:none;}
.xth-band-top{top:0;} .xth-band-bottom{bottom:0;}
</style>

<script>
(function(){
  var shell = document.getElementById('xthShell');
  ToolPro.themeToggle(shell, document.getElementById('xthTheme'));

  var W = 1500, H = 500;
  var files = [];
  var listEl = document.getElementById('xthList');
  var btn = document.getElementById('xthBtn');
  var clearBtn = document.getElementById('xthClear');
  var presets = document.getElementById('xthPresets');
  var anchor = 'center';
  var fmtSel = document.getElementById('xthFormat');
  var qRange = document.getElementById('xthQuality');
  var qVal = document.getElementById('xthQVal');
  var upscaleT = document.getElementById('xthUpscale');
  var upscaleOn = false;
  var previewWrap = document.getElementById('xthPreviewWrap');
  var previewImg = document.getElementById('xthImg');

  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });
  upscaleT.addEventListener('click', function(){
    upscaleOn = !upscaleOn;
    upscaleT.classList.toggle('on', upscaleOn);
    ToolPro.toast('Upscale ' + (upscaleOn ? 'on' : 'off'));
    renderPreview();
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    anchor = chip.dataset.anchor;
    renderPreview();
    ToolPro.toast('Crop anchor: ' + anchor);
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n; clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Resize ' +
      (n ? n + (n === 1 ? ' Image' : ' Images') : 'Images') + ' to 1500×500';
  }

  ToolPro.dropzone(document.getElementById('xthDrop'), {
    multiple: true,
    accept: 'image/png,image/jpeg,image/webp',
    maxFiles: 20,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons(); renderPreview();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('xthResults').classList.remove('show');
      refreshButtons(); renderPreview();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' image' : ' images') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = ''; previewWrap.style.display = 'none';
    document.getElementById('xthResults').classList.remove('show');
    refreshButtons();
  });

  // Crop-to-fill math: cover the 1500x500 frame, anchored per the preset.
  function cropRect(iw, ih){
    var scale = Math.max(W / iw, H / ih);
    if(!upscaleOn && scale > 1) scale = 1; // letterbox-safe: only downscale
    var cw = Math.min(iw, Math.round(W / scale));
    var ch = Math.min(ih, Math.round(H / scale));
    var cx = Math.round((iw - cw) / 2);
    var cy = anchor === 'top' ? 0 : anchor === 'bottom' ? (ih - ch) : Math.round((ih - ch) / 2);
    return { sx: cx, sy: cy, sw: cw, sh: ch, scale: scale };
  }

  function drawToCanvas(file){
    return new Promise(function(resolve){
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function(){
        var r = cropRect(img.naturalWidth, img.naturalHeight);
        var c = document.createElement('canvas'); c.width = W; c.height = H;
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, W, H);
        var dw = r.sw * r.scale, dh = r.sh * r.scale;
        var dx = (W - dw) / 2, dy = (H - dh) / 2;
        ctx.drawImage(img, r.sx, r.sy, r.sw, r.sh, dx, dy, dw, dh);
        URL.revokeObjectURL(url);
        resolve(c);
      };
      img.onerror = function(){ URL.revokeObjectURL(url); resolve(null); };
      img.src = url;
    });
  }

  function renderPreview(){
    if(!files.length){ previewWrap.style.display = 'none'; return; }
    drawToCanvas(files[0].file).then(function(c){
      if(!c) return;
      previewImg.src = c.toDataURL('image/png');
      previewWrap.style.display = '';
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var progWrap = document.getElementById('xthProgWrap');
    var progBar = document.getElementById('xthProgBar');
    var progText = document.getElementById('xthProgText');
    var grid = document.getElementById('xthGrid');
    var resBox = document.getElementById('xthResults');
    var fmt = fmtSel.value, q = parseInt(qRange.value, 10) / 100;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    var done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Resizing ' + (i + 1) + ' of ' + files.length + '…';
      var c = await drawToCanvas(entry.file);
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!c){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      var mime = fmt === 'png' ? 'image/png' : 'image/jpeg';
      var dataUrl = c.toDataURL(mime, q);
      var base = entry.file.name.replace(/\.[^.]+$/, '');
      var outName = base + '-x-header.' + fmt;
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<img class="r-preview" alt="1500x500 header preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-preview').src = dataUrl;
      card.querySelector('.r-name').textContent = outName;
      card.querySelector('.r-name').title = outName;
      card.querySelector('.r-stats').innerHTML =
        '1500×500 px · ' + ToolPro.fmtBytes(Math.round(dataUrl.length * 0.75)) +
        ' · crop anchor: ' + anchor;
      (function(url, name){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
      })(dataUrl, outName);
      grid.appendChild(card);
    }
    document.getElementById('xthSummary').textContent =
      '🎉 ' + done + (done === 1 ? ' header' : ' headers') +
      ' ready at exactly 1500×500 — upload straight to X → Edit profile.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('All headers resized', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

1. **Add your image** — any size, any common format. It stays in your browser.
2. **Check the safe-area preview** — the dashed zone is text-safe, the circle marks where your profile photo overlaps, and the striped bands are areas phones may crop.
3. **Pick a crop anchor** — center, keep the top, or keep the bottom — and a PNG/JPEG format.
4. **Download** — a pixel-exact 1500×500 header, ready to upload to X.

## Everyday uses

- **Job seekers** — a sharp header makes your profile look professional to recruiters.
- **Creators & brands** — crop your artwork or logo banner to the exact header frame.
- **Freelancers** — showcase your portfolio banner without X's blurry auto-crop.
- **Businesses** — keep taglines and offers inside the safe zone so nothing hides behind your avatar.
- **Rebrands** — batch-resize new banners for every team member's profile in one go.

**Design tip:** keep logos, faces, and text in the dashed safe zone — the bottom-left circle is covered by your profile photo and the striped bands can crop on mobile.
