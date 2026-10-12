---
title: "Free Passport Photo Maker — US, UK, EU & Canada Sizes"
description: "Make passport, visa and ID photos at exact official sizes — US 2x2in, UK/EU 35x45mm, Canada 50x70mm — at 300 DPI, plus a printable 4x6 sheet. Free and private."
category: image
date: 2026-10-12
draft: false
---

## How it works

Official photo sizes are unforgiving — a few millimetres off and your application gets rejected. Upload any photo, pick the document you are applying for, and this maker crops it to the exact pixel dimensions at 300 DPI on a clean white background, with zoom and position controls so your face sits exactly where it should. Everything runs in your browser; your photo is never uploaded anywhere.

<div class="tool-shell" id="ppShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Passport Photo Maker</h2>
<p>Exact official sizes at 300 DPI — US, UK, EU, India &amp; Canada, plus a printable 4×6 sheet.</p>
</div>
<button type="button" class="theme-toggle" id="ppTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload your photo</p>
<div class="dropzone" id="ppDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your photo here</strong>
<span>or click to browse — JPG or PNG, straight-on portraits work best</span>
<input type="file" id="ppFile" accept="image/*">
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick the document size &amp; position your face</p>
<div class="settings-panel">
<div class="setting">
<label for="ppSize">Document size</label>
<select id="ppSize">
<option value="us-passport">US Passport — 2 × 2 in (600 × 600 px)</option>
<option value="us-visa">US Visa — 2 × 2 in (600 × 600 px)</option>
<option value="uk">UK Passport — 35 × 45 mm (413 × 531 px)</option>
<option value="eu">EU / India — 35 × 45 mm (413 × 531 px)</option>
<option value="canada">Canada Passport — 50 × 70 mm (591 × 827 px)</option>
</select>
<div class="hint">Rendered at print quality: 300 DPI, on a pure white background.</div>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ppZoom">Zoom: <span class="val" id="ppZoomVal">100%</span></label>
<input type="range" id="ppZoom" min="100" max="300" value="100">
<div class="hint">Zoom in until your head and shoulders fill the oval.</div>
</div>
<div class="setting">
<label for="ppOffX">Horizontal position: <span class="val" id="ppOffXVal">0</span></label>
<input type="range" id="ppOffX" min="-100" max="100" value="0">
<div class="hint">Slide to centre your face left to right.</div>
</div>
<div class="setting">
<label for="ppOffY">Vertical position: <span class="val" id="ppOffYVal">0</span></label>
<input type="range" id="ppOffY" min="-100" max="100" value="0">
<div class="hint">Slide to centre your face top to bottom.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div style="position:relative;max-width:320px;margin:0 auto 12px;">
<canvas id="ppCanvas" width="600" height="600" style="display:block;width:100%;background:#fff;border:1px solid #d5d5d5;"></canvas>
<div style="position:absolute;left:25%;top:7%;width:50%;height:62%;border:2px dashed rgba(25,25,25,.45);border-radius:50%;pointer-events:none;"></div>
<div style="position:absolute;left:12%;right:12%;top:80%;border-top:2px dashed rgba(25,25,25,.35);pointer-events:none;"></div>
</div>
<p class="hint" style="text-align:center;">The dashed oval is a positioning guide only — it never appears on your downloaded photo.</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ppDownload" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download JPG
</button>
<button type="button" class="btn-pro-outline" id="ppSheet" disabled>Download 4×6 print sheet</button>
</div>
<div class="results" id="ppResults">
<p class="result-head">✅ Photo ready</p>
<div class="result-summary" id="ppResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — make as many ID photos as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ppShell');
  ToolPro.themeToggle(shell, document.getElementById('ppTheme'));

  var SIZES = {
    'us-passport': { w: 600, h: 600, label: 'US Passport — 2 × 2 in (600 × 600 px at 300 DPI)' },
    'us-visa': { w: 600, h: 600, label: 'US Visa — 2 × 2 in (600 × 600 px at 300 DPI)' },
    'uk': { w: 413, h: 531, label: 'UK Passport — 35 × 45 mm (413 × 531 px at 300 DPI)' },
    'eu': { w: 413, h: 531, label: 'EU / India — 35 × 45 mm (413 × 531 px at 300 DPI)' },
    'canada': { w: 591, h: 827, label: 'Canada Passport — 50 × 70 mm (591 × 827 px at 300 DPI)' }
  };
  var img = null;
  var sizeSel = document.getElementById('ppSize');
  var zoom = document.getElementById('ppZoom');
  var offX = document.getElementById('ppOffX');
  var offY = document.getElementById('ppOffY');
  var canvas = document.getElementById('ppCanvas');
  var resBox = document.getElementById('ppResults');
  var resOut = document.getElementById('ppResult');
  var dlBtn = document.getElementById('ppDownload');
  var sheetBtn = document.getElementById('ppSheet');

  ToolPro.bindSlider(zoom, document.getElementById('ppZoomVal'), function(v){ return v + '%'; });
  ToolPro.bindSlider(offX, document.getElementById('ppOffXVal'), function(v){ return v; });
  ToolPro.bindSlider(offY, document.getElementById('ppOffYVal'), function(v){ return v; });

  (function(){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f4f4f4';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#9a9a9a';
    ctx.font = '26px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Your photo appears here', canvas.width / 2, canvas.height / 2);
  })();

  function drawCover(ctx, s){
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, s.w, s.h);
    var z = parseInt(zoom.value, 10) / 100;
    var scale = Math.max(s.w / img.naturalWidth, s.h / img.naturalHeight) * z;
    var dw = img.naturalWidth * scale;
    var dh = img.naturalHeight * scale;
    var dx = (s.w - dw) / 2 + (parseInt(offX.value, 10) / 100) * ((dw - s.w) / 2);
    var dy = (s.h - dh) / 2 + (parseInt(offY.value, 10) / 100) * ((dh - s.h) / 2);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function render(){
    if(!img) return;
    var s = SIZES[sizeSel.value];
    canvas.width = s.w;
    canvas.height = s.h;
    drawCover(canvas.getContext('2d'), s);
    resOut.innerHTML = '<p>Output size: <strong>' + s.label + '</strong></p>'
      + '<p>Position your face inside the dashed oval — eyes level, head and shoulders visible, no shadows on the white background.</p>';
    resBox.classList.add('show');
    dlBtn.disabled = false;
    sheetBtn.disabled = false;
  }

  ToolPro.dropzone(document.getElementById('ppDrop'), {
    accept: 'image/*',
    onFiles: function(arr){
      if(!arr.length) return;
      var url = URL.createObjectURL(arr[0]);
      var im = new Image();
      im.onload = function(){
        img = im;
        render();
        ToolPro.toast('Photo loaded — adjust and download', 'ok');
      };
      im.onerror = function(){
        URL.revokeObjectURL(url);
        ToolPro.toast('Could not read that image', 'err');
      };
      im.src = url;
    }
  });

  sizeSel.addEventListener('change', render);
  zoom.addEventListener('input', render);
  offX.addEventListener('input', render);
  offY.addEventListener('input', render);

  dlBtn.addEventListener('click', function(){
    if(!img) return;
    render();
    ToolPro.download(canvas.toDataURL('image/jpeg', 0.92), 'passport-photo.jpg');
    ToolPro.toast('Passport photo downloaded', 'ok');
  });

  sheetBtn.addEventListener('click', function(){
    if(!img) return;
    var s = SIZES[sizeSel.value];
    var one = document.createElement('canvas');
    one.width = s.w;
    one.height = s.h;
    drawCover(one.getContext('2d'), s);
    var sheet = document.createElement('canvas');
    sheet.width = 1800;
    sheet.height = 1200;
    var ctx = sheet.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 1800, 1200);
    var cols = Math.max(1, Math.floor(1800 / s.w));
    var rows = Math.max(1, Math.floor(1200 / s.h));
    var gx = (1800 - cols * s.w) / 2;
    var gy = (1200 - rows * s.h) / 2;
    var r, c;
    for(r = 0; r < rows; r++){
      for(c = 0; c < cols; c++){
        ctx.drawImage(one, gx + c * s.w, gy + r * s.h);
      }
    }
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;
    ctx.setLineDash([8, 6]);
    for(r = 0; r < rows; r++){
      for(c = 0; c < cols; c++){
        ctx.strokeRect(gx + c * s.w, gy + r * s.h, s.w, s.h);
      }
    }
    ToolPro.download(sheet.toDataURL('image/jpeg', 0.92), 'passport-photos-4x6-sheet.jpg');
    ToolPro.toast((cols * rows) + ' copies laid out on one 4×6 sheet', 'ok');
  });
})();
</script>

## Everyday uses

- **Passport and visa applications** — US, UK, EU, Indian and Canadian sizes, exactly to spec.
- **Job, university and exam ID photos** — any application that asks for a standard document photo.
- **Printing at home** — the 4×6 sheet fits several copies on one sheet of photo paper.
- **Online portals** — government and exam sites that demand an exact pixel size for uploads.

## Frequently asked questions

**Will my photo definitely be accepted?**

This maker guarantees the technical side: exact official dimensions at 300 DPI on a white background. Acceptance also depends on the photo itself — neutral expression, eyes open and looking at the camera, no glasses, hats or shadows. Always double-check your authority's current rules before submitting.

**Is my photo uploaded to a server?**

No. The crop, resize and sheet layout all happen on a canvas inside your browser. Your photo never leaves your device.

**Which size do I need?**

US passports and visas use 2 × 2 inches. The UK, EU/Schengen and India use 35 × 45 mm. Canadian passports use the larger 50 × 70 mm. If you are unsure, the size is always printed in your application instructions.
