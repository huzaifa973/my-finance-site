---
title: "Resize Image for LinkedIn Banner — Free 1584×396 Resizer"
description: "Resize any photo to LinkedIn banner's exact 1584×396 size with a profile-photo safe-zone guide. Free, private, runs in your browser."
category: image
date: 2026-10-18
draft: false
---

LinkedIn's banner is a wide, thin frame — 1584×396 — and your profile photo sits on top of its bottom-left corner. Upload the wrong size and LinkedIn crops your headline graphic into mush. This tool resizes any photo to the exact banner size and shows where the profile photo overlaps, so your tagline stays visible. All in your browser; your photos never leave your device.

<div class="tool-shell" id="rlbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Resize Image for LinkedIn Banner</h2>
<p>Exact 1584×396 banner size with a profile-photo safe-zone guide — your headline stays visible.</p>
</div>
<button type="button" class="theme-toggle" id="rlbTheme">🌙 Dark</button>
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
<div class="dropzone" id="rlbDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="rlbFile" accept="image/*">
</div>
<ul class="file-list" id="rlbList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Banner settings</p>
<div class="settings-panel">
<div class="preset-row" id="rlbPresets">
<button type="button" class="preset-chip active" data-w="1584" data-h="396" data-label="banner">💼 Banner 1584×396</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rlbFit">Fit mode</label>
<select id="rlbFit">
<option value="cover" selected>Cover — center-crop to fill</option>
<option value="contain">Contain — fit all, blur-pad the rest</option>
</select>
<div class="hint">Cover crops edges; Contain keeps the whole photo with a blurred background fill.</div>
</div>
<div class="setting">
<label for="rlbFormat">Output format</label>
<select id="rlbFormat">
<option value="jpeg" selected>JPG — small file</option>
<option value="png">PNG — lossless</option>
</select>
<div class="hint">JPG at 92% quality keeps text graphics crisp enough for LinkedIn.</div>
</div>
<div class="setting">
<label for="rlbQ">JPG quality: <span class="val" id="rlbQVal">92%</span></label>
<input type="range" id="rlbQ" min="60" max="100" value="92">
<div class="hint">Only applies to JPG output.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="rlbSafe" checked><span></span> Show profile-photo safe zone</label>
<div class="hint">Your avatar overlaps the bottom-left of the banner.</div>
</div>
</div>
<div class="tool-input" style="margin-top:12px;text-align:center">
<canvas id="rlbPreview" style="max-width:100%;border-radius:10px;background:#111"></canvas>
<p class="hint" id="rlbDims" style="margin-top:6px"></p>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rlbBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download Banner Image
</button>
<button type="button" class="btn-pro-outline" id="rlbClear" disabled>Clear</button>
</div>
<div class="results" id="rlbResults">
<p class="result-head">✅ Done — your LinkedIn banner image</p>
<div class="result-summary" id="rlbSummary"></div>
<div class="result-grid" id="rlbGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — resize as many banners as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('rlbShell');
ToolPro.themeToggle(shell, document.getElementById('rlbTheme'));
var img = null, imgUrl = null, file = null;
var curW = 1584, curH = 396;
var listEl = document.getElementById('rlbList');
var btn = document.getElementById('rlbBtn');
var clearBtn = document.getElementById('rlbClear');
var fitSel = document.getElementById('rlbFit');
var fmtSel = document.getElementById('rlbFormat');
var qR = document.getElementById('rlbQ'), qV = document.getElementById('rlbQVal');
var safeT = document.getElementById('rlbSafe');
var preview = document.getElementById('rlbPreview');
var dimsEl = document.getElementById('rlbDims');
ToolPro.bindSlider(qR, qV, function(v){ return v + '%'; });
function refreshButtons(){ btn.disabled = !img; clearBtn.disabled = !img; }
function drawSafe(ctx){
  ctx.save();
  ctx.strokeStyle = 'rgba(255,180,0,.95)';
  ctx.lineWidth = 5;
  ctx.setLineDash([16, 10]);
  ctx.fillStyle = 'rgba(255,180,0,.16)';
  // personal profile photo: 152px circle overlapping bottom-left
  ctx.beginPath();
  ctx.arc(114, curH + 40, 96, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(0,0,0,.7)';
  ctx.font = 'bold 20px sans-serif';
  ctx.textAlign = 'center';
  var t = 'profile photo covers this area';
  var w = ctx.measureText(t).width;
  ctx.fillRect(114 - w / 2 - 12, 40, w + 24, 40);
  ctx.fillStyle = '#ffcf4d';
  ctx.fillText(t, 114, 68);
  ctx.restore();
}
function paintInto(canvasEl, overlay){
  var ctx = canvasEl.getContext('2d');
  var iw = img.naturalWidth, ih = img.naturalHeight;
  if(fitSel.value === 'cover'){
    var scale = Math.max(curW / iw, curH / ih);
    var dw = iw * scale, dh = ih * scale;
    ctx.drawImage(img, (curW - dw) / 2, (curH - dh) / 2, dw, dh);
  }else{
    var bscale = Math.max(curW / iw, curH / ih);
    ctx.save();
    try{ ctx.filter = 'blur(30px)'; }catch(e){}
    ctx.drawImage(img, (curW - iw * bscale) / 2, (curH - ih * bscale) / 2, iw * bscale, ih * bscale);
    ctx.restore();
    var s2 = Math.min(curW / iw, curH / ih);
    ctx.drawImage(img, (curW - iw * s2) / 2, (curH - ih * s2) / 2, iw * s2, ih * s2);
  }
  if(overlay && safeT.checked) drawSafe(ctx);
}
function render(){
  if(!img){ preview.style.display = 'none'; dimsEl.textContent = ''; return; }
  preview.style.display = 'inline-block';
  preview.width = curW; preview.height = curH;
  var ctx = preview.getContext('2d');
  ctx.clearRect(0, 0, curW, curH);
  paintInto(preview, true);
  dimsEl.textContent = 'Output: 1584×396 px · ' + fitSel.value + ' · ' + fmtSel.value.toUpperCase();
}
ToolPro.dropzone(document.getElementById('rlbDrop'), {
  multiple: false, accept: 'image/*', maxFiles: 1,
  onFiles: function(arr){
    if(!arr.length) return;
    file = arr[0];
    if(imgUrl) URL.revokeObjectURL(imgUrl);
    imgUrl = URL.createObjectURL(file);
    img = new Image();
    img.onload = function(){
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ reset(); });
      document.getElementById('rlbResults').classList.remove('show');
      render(); refreshButtons();
      ToolPro.toast('Photo loaded — check the safe zone', 'ok');
    };
    img.onerror = function(){ ToolPro.toast('Could not read that image', 'err'); };
    img.src = imgUrl;
  }
});
function reset(){
  if(imgUrl){ URL.revokeObjectURL(imgUrl); imgUrl = null; }
  img = null; file = null;
  listEl.innerHTML = '';
  preview.style.display = 'none'; dimsEl.textContent = '';
  document.getElementById('rlbResults').classList.remove('show');
  refreshButtons();
}
clearBtn.addEventListener('click', reset);
fitSel.addEventListener('change', render);
fmtSel.addEventListener('change', render);
safeT.addEventListener('change', render);
btn.addEventListener('click', function(){
  if(!img) return;
  var fmt = fmtSel.value;
  var mime = fmt === 'png' ? 'image/png' : 'image/jpeg';
  var q = fmt === 'png' ? undefined : (+qR.value) / 100;
  var out = document.createElement('canvas');
  out.width = curW; out.height = curH;
  paintInto(out, false);
  out.toBlob(function(blob){
    if(!blob){ ToolPro.toast('Export failed', 'err'); return; }
    var url = URL.createObjectURL(blob);
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'image') + '-linkedin-banner.' + fmt;
    var grid = document.getElementById('rlbGrid');
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<img class="r-preview" alt="banner result">' +
      '<div class="r-name"></div><div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Image</button>';
    card.querySelector('.r-preview').src = url;
    card.querySelector('.r-preview').style.cssText = 'max-width:100%;border-radius:8px';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').textContent = '1584×396px · ' + fmt.toUpperCase() + ' · ' + ToolPro.fmtBytes(blob.size);
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('rlbSummary').textContent = '🎉 Resized to LinkedIn\'s banner size (1584×396px) — the guide is preview-only and not in your download.';
    document.getElementById('rlbResults').classList.add('show');
    document.getElementById('rlbResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Banner image ready', 'ok');
  }, mime, q);
});
refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your photo, logo lockup, or headline graphic.
- **Step 2** — Choose Cover (center-crop to fill the wide frame) or Contain (blur-pad). The safe-zone guide shows where your profile photo overlaps the bottom-left — keep your name, title, and tagline clear of it.
- **Step 3** — Download a 1584×396 image — LinkedIn's exact recommended banner size. The guide is preview-only; your download is clean.

## Everyday uses

- **Job seekers** — replace the default blue banner with a professional headline graphic.
- **Freelancers** — showcase your services and contact info at the top of your profile.
- **Founders** — brand your company page and personal profile consistently.
- **Recruiters** — make your profile memorable with a clean, on-brand banner.
- **Everyone** — stop the stretched, pixelated look of wrong-size uploads.

## Frequently asked questions

**Why 1584×396?**
That's LinkedIn's recommended background-photo size for personal profiles — a 4:1 wide frame. Company page covers use 1128×191, but this tool targets the personal banner everyone sees first.

**Where does my profile photo sit?**
Overlapping the bottom-left corner of the banner — the amber circle in the preview marks it. Keep important text to the right of that zone.

**Are my photos private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
