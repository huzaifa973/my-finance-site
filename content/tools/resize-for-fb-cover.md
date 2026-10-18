---
title: "Resize Image for Facebook Cover — Free 820×312 Resizer"
description: "Resize any photo to Facebook cover's exact 820×312 size with safe-zone guides for the profile picture and mobile crop. Free, private, runs in your browser."
category: image
date: 2026-10-18
draft: false
---

A Facebook cover looks great on your screen and broken on everyone else's — because desktop and mobile crop it differently, and your profile picture covers the bottom-left corner. This tool resizes any photo to the exact desktop cover size of 820×312 and shows safe-zone guides for the profile-picture overlap and the mobile side-crop, so your cover looks right everywhere. All in your browser; your photos never leave your device.

<div class="tool-shell" id="rfcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Resize Image for Facebook Cover</h2>
<p>Exact 820×312 cover size with safe-zone guides — looks right on desktop and mobile.</p>
</div>
<button type="button" class="theme-toggle" id="rfcTheme">🌙 Dark</button>
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
<div class="dropzone" id="rfcDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="rfcFile" accept="image/*">
</div>
<ul class="file-list" id="rfcList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Cover settings</p>
<div class="settings-panel">
<div class="preset-row" id="rfcPresets">
<button type="button" class="preset-chip active" data-w="820" data-h="312" data-label="cover">🖼️ Page cover 820×312</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rfcFit">Fit mode</label>
<select id="rfcFit">
<option value="cover" selected>Cover — center-crop to fill</option>
<option value="contain">Contain — fit all, blur-pad the rest</option>
</select>
<div class="hint">Cover crops edges; Contain keeps the whole photo with a blurred background fill.</div>
</div>
<div class="setting">
<label for="rfcFormat">Output format</label>
<select id="rfcFormat">
<option value="jpeg" selected>JPG — small file</option>
<option value="png">PNG — lossless</option>
</select>
<div class="hint">JPG at 92% quality is Facebook's own sweet spot.</div>
</div>
<div class="setting">
<label for="rfcQ">JPG quality: <span class="val" id="rfcQVal">92%</span></label>
<input type="range" id="rfcQ" min="60" max="100" value="92">
<div class="hint">Only applies to JPG output.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="rfcSafe" checked><span></span> Show safe-zone guides</label>
<div class="hint">Profile-picture overlap and the mobile side-crop zones.</div>
</div>
</div>
<div class="tool-input" style="margin-top:12px;text-align:center">
<canvas id="rfcPreview" style="max-width:100%;border-radius:10px;background:#111"></canvas>
<p class="hint" id="rfcDims" style="margin-top:6px"></p>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rfcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download Cover Image
</button>
<button type="button" class="btn-pro-outline" id="rfcClear" disabled>Clear</button>
</div>
<div class="results" id="rfcResults">
<p class="result-head">✅ Done — your Facebook cover image</p>
<div class="result-summary" id="rfcSummary"></div>
<div class="result-grid" id="rfcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — resize as many covers as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('rfcShell');
ToolPro.themeToggle(shell, document.getElementById('rfcTheme'));
var img = null, imgUrl = null, file = null;
var curW = 820, curH = 312;
var listEl = document.getElementById('rfcList');
var btn = document.getElementById('rfcBtn');
var clearBtn = document.getElementById('rfcClear');
var fitSel = document.getElementById('rfcFit');
var fmtSel = document.getElementById('rfcFormat');
var qR = document.getElementById('rfcQ'), qV = document.getElementById('rfcQVal');
var safeT = document.getElementById('rfcSafe');
var preview = document.getElementById('rfcPreview');
var dimsEl = document.getElementById('rfcDims');
ToolPro.bindSlider(qR, qV, function(v){ return v + '%'; });
function refreshButtons(){ btn.disabled = !img; clearBtn.disabled = !img; }
function drawSafe(ctx){
  ctx.save();
  ctx.strokeStyle = 'rgba(255,180,0,.95)';
  ctx.lineWidth = 5;
  ctx.setLineDash([16, 10]);
  ctx.fillStyle = 'rgba(255,180,0,.16)';
  // mobile crops ~90px each side
  ctx.fillRect(0, 0, 90, curH);
  ctx.fillRect(curW - 90, 0, 90, curH);
  ctx.strokeRect(3, 3, 84, curH - 6);
  ctx.strokeRect(curW - 87, 3, 84, curH - 6);
  // profile picture overlap, bottom-left
  ctx.beginPath();
  ctx.arc(100, curH + 10, 105, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(0,0,0,.7)';
  ctx.font = 'bold 17px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('mobile crop', 45, curH / 2 + 6);
  ctx.fillText('mobile crop', curW - 45, curH / 2 + 6);
  var t = 'profile pic covers this area';
  var w = ctx.measureText(t).width;
  ctx.fillRect(100 - w / 2 - 10, curH - 62, w + 20, 34);
  ctx.fillStyle = '#ffcf4d';
  ctx.fillText(t, 100, curH - 38);
  ctx.restore();
}
function paintInto(ctx){
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
}
function render(){
  if(!img){ preview.style.display = 'none'; dimsEl.textContent = ''; return; }
  preview.style.display = 'inline-block';
  preview.width = curW; preview.height = curH;
  var ctx = preview.getContext('2d');
  ctx.clearRect(0, 0, curW, curH);
  paintInto(ctx);
  if(safeT.checked) drawSafe(ctx);
  dimsEl.textContent = 'Output: 820×312 px · ' + fitSel.value + ' · ' + fmtSel.value.toUpperCase();
}
ToolPro.dropzone(document.getElementById('rfcDrop'), {
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
      document.getElementById('rfcResults').classList.remove('show');
      render(); refreshButtons();
      ToolPro.toast('Photo loaded — check the safe zones', 'ok');
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
  document.getElementById('rfcResults').classList.remove('show');
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
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'image') + '-fb-cover.' + fmt;
    var grid = document.getElementById('rfcGrid');
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<img class="r-preview" alt="cover result">' +
      '<div class="r-name"></div><div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Image</button>';
    card.querySelector('.r-preview').src = url;
    card.querySelector('.r-preview').style.cssText = 'max-width:100%;border-radius:8px';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').textContent = '820×312px · ' + fmt.toUpperCase() + ' · ' + ToolPro.fmtBytes(blob.size);
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('rfcSummary').textContent = '🎉 Resized to Facebook\'s cover size (820×312px) — guides are preview-only and not in your download.';
    document.getElementById('rfcResults').classList.add('show');
    document.getElementById('rfcResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Cover image ready', 'ok');
  }, mime, q);
});
refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your photo or branded graphic.
- **Step 2** — Choose Cover (center-crop to fill) or Contain (blur-pad). The safe-zone guides show where your profile picture overlaps the bottom-left and where mobile crops ~90px off each side — keep logos and text clear of both.
- **Step 3** — Download an 820×312 image — Facebook's exact desktop cover size. Guides are preview-only; your download is clean.

## Everyday uses

- **Page owners** — brand your business or community page with a crisp cover.
- **Personal profiles** — replace the default gray cover with a photo that fits.
- **Event pages** — promote launches with a cover that reads on desktop and mobile.
- **Creators** — showcase art or a tagline without Facebook's UI eating it.
- **Marketers** — export at the exact spec Facebook recommends, no re-compression surprises.

## Frequently asked questions

**Why 820×312?**
That's the size Facebook renders page covers at on desktop. Mobile shows a cropped 640×360 window — which is why the side-crop guides matter: anything in the outer 90px on each side vanishes on phones.

**Where does my profile picture sit?**
Overlapping the bottom-left of the cover — the amber circle in the preview marks the overlap zone. Keep text and faces out of it.

**Are my photos private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
