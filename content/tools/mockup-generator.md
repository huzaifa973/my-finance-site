---
title: "Device Mockup Generator — Laptop & Phone Mockups Free"
description: "Place your screenshots inside realistic laptop and phone mockups drawn on canvas. Free, no sign-up, fully private — export a high-res PNG."
category: image
date: 2026-10-19
draft: false
---

Make any screenshot or design look like a professional product shot. The Device Mockup Generator draws a MacBook-style laptop, an iPhone-style phone — or both side by side — around your image with pure canvas shapes, sets the scene on a gradient background, and exports a high-resolution PNG. No uploads, no watermarks, no sign-up.

<div class="tool-shell" id="mkgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 17.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM7 5v12.6h10V5H7zm4.2-1.8h1.6V4.6H11.2v-.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Device Mockup Generator</h2>
<p>Drop a design into realistic laptop and phone mockups — pure canvas-drawn devices, live preview, one-click PNG export.</p>
</div>
<button type="button" class="theme-toggle" id="mkgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your design or screenshot</p>
<div class="dropzone" id="mkgDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your image here</strong>
<span>or click to browse — PNG, JPG, WebP</span>
<input type="file" id="mkgFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="mkgList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Mockup settings</p>
<div class="settings-panel">
<div class="preset-row" id="mkgBgs">
<button type="button" class="preset-chip active" data-t="grad" data-c1="#2563eb" data-c2="#06b6d4">🌊 Blue-teal</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#7c3aed" data-c2="#ec4899">🌆 Purple-pink</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#f59e0b" data-c2="#ef4444">🌅 Sunset orange</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#1e293b" data-c2="#0f172a">🌑 Midnight</button>
<button type="button" class="preset-chip" data-t="solid" data-c1="#ffffff">⬜ White</button>
<button type="button" class="preset-chip" data-t="solid" data-c1="#111111">⬛ Black</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="mkgDevice">Device</label>
<select id="mkgDevice">
<option value="laptop" selected>💻 Laptop (MacBook-style)</option>
<option value="phone">📱 Phone (iPhone-style)</option>
<option value="both">💻📱 Laptop + phone</option>
</select>
<div class="hint">Your image is cover-fitted to each device screen.</div>
</div>
<div class="setting">
<label for="mkgPad">Padding: <span class="val" id="mkgPadVal">120px</span></label>
<input type="range" id="mkgPad" min="40" max="300" value="120">
<div class="hint">Space between the devices and the background edge.</div>
</div>
<div class="setting">
<div class="toggle-row">
<span class="t-label">Soft shadow</span>
<label class="toggle"><input type="checkbox" id="mkgShadow" checked><span class="track"></span></label>
</div>
<div class="hint">Grounds the devices with a realistic drop shadow.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mkgBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
<button type="button" class="btn-pro-outline" id="mkgClear" disabled>Remove image</button>
</div>
<div class="results" id="mkgResults">
<p class="result-head">📱 Live preview — updates as you change settings</p>
<div class="result-summary" id="mkgSummary"></div>
<div class="result-grid" id="mkgGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited device mockups — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mkgShell');
  ToolPro.themeToggle(shell, document.getElementById('mkgTheme'));

  var img = null, fname = 'design';
  var canvas = null;
  var bg = { t: 'grad', c1: '#2563eb', c2: '#06b6d4' };

  var listEl = document.getElementById('mkgList');
  var btn = document.getElementById('mkgBtn');
  var clearBtn = document.getElementById('mkgClear');
  var devSel = document.getElementById('mkgDevice');
  var padRange = document.getElementById('mkgPad');
  var padVal = document.getElementById('mkgPadVal');
  var shadowChk = document.getElementById('mkgShadow');
  var chips = document.getElementById('mkgBgs');
  var resBox = document.getElementById('mkgResults');
  var grid = document.getElementById('mkgGrid');
  var summary = document.getElementById('mkgSummary');

  ToolPro.bindSlider(padRange, padVal, function(v){ return v + 'px'; });

  function rr(c, x, y, w, h, r){
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function cover(c, im, x, y, w, h){
    var iw = im.naturalWidth, ih = im.naturalHeight;
    var s = Math.max(w / iw, h / ih);
    var dw = iw * s, dh = ih * s;
    c.drawImage(im, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }

  function laptopDims(scrW, scrH){
    var bez = Math.max(14, Math.round(scrW * 0.03));
    var topBez = bez + Math.max(12, Math.round(scrW * 0.022));
    var outW = scrW + bez * 2;
    var outH = scrH + topBez + bez;
    var baseW = outW * 1.18;
    var baseH = Math.max(12, Math.round(scrW * 0.024));
    return { kind: 'laptop', scrW: scrW, scrH: scrH, bez: bez, topBez: topBez,
             outW: outW, outH: outH, baseW: baseW, baseH: baseH,
             w: baseW, h: outH + baseH };
  }

  function phoneDims(scrW, scrH){
    var edge = Math.max(14, Math.round(scrW * 0.06));
    return { kind: 'phone', scrW: scrW, scrH: scrH, edge: edge,
             w: scrW + edge * 2, h: scrH + edge * 2 };
  }

  function paintLaptop(c, x, y, d, pad, shadow){
    var bx = x + (d.baseW - d.outW) / 2;
    var cr = Math.round(d.outW * 0.025);
    if(shadow){
      c.save();
      c.shadowColor = 'rgba(0,0,0,0.42)';
      c.shadowBlur = Math.round(pad * 0.55);
      c.shadowOffsetY = Math.round(pad * 0.16);
      rr(c, bx, y, d.outW, d.outH, cr);
      c.fillStyle = '#000'; c.fill();
      c.restore();
    }
    rr(c, bx, y, d.outW, d.outH, cr);
    c.fillStyle = '#1d1d21'; c.fill();
    rr(c, bx + 1.5, y + 1.5, d.outW - 3, d.outH - 3, cr);
    c.strokeStyle = 'rgba(255,255,255,0.12)'; c.lineWidth = 2; c.stroke();
    var sx = bx + d.bez, sy = y + d.topBez;
    rr(c, sx, sy, d.scrW, d.scrH, Math.max(2, Math.round(d.scrW * 0.008)));
    c.save(); c.clip();
    cover(c, img, sx, sy, d.scrW, d.scrH);
    c.restore();
    c.fillStyle = '#3f3f48';
    c.beginPath();
    c.arc(bx + d.outW / 2, y + d.topBez / 2, Math.max(3, d.scrW * 0.007), 0, Math.PI * 2);
    c.fill();
    var by2 = y + d.outH;
    function basePath(){
      c.beginPath();
      c.moveTo(x, by2); c.lineTo(x + d.baseW, by2);
      c.lineTo(x + d.baseW - d.baseH * 1.8, by2 + d.baseH);
      c.lineTo(x + d.baseH * 1.8, by2 + d.baseH);
      c.closePath();
    }
    if(shadow){
      c.save();
      c.shadowColor = 'rgba(0,0,0,0.35)';
      c.shadowBlur = Math.round(pad * 0.4);
      c.shadowOffsetY = Math.round(pad * 0.1);
      basePath(); c.fillStyle = '#000'; c.fill();
      c.restore();
    }
    basePath();
    var gg = c.createLinearGradient(0, by2, 0, by2 + d.baseH);
    gg.addColorStop(0, '#e2e6eb'); gg.addColorStop(1, '#a9afb8');
    c.fillStyle = gg; c.fill();
    var nw2 = Math.min(d.baseW * 0.18, 150);
    rr(c, x + (d.baseW - nw2) / 2, by2, nw2, d.baseH * 0.5, d.baseH * 0.25);
    c.fillStyle = '#8f959d'; c.fill();
  }

  function paintPhone(c, x, y, d, pad, shadow){
    var cr = Math.round(d.w * 0.15);
    if(shadow){
      c.save();
      c.shadowColor = 'rgba(0,0,0,0.42)';
      c.shadowBlur = Math.round(pad * 0.55);
      c.shadowOffsetY = Math.round(pad * 0.16);
      rr(c, x, y, d.w, d.h, cr);
      c.fillStyle = '#000'; c.fill();
      c.restore();
    }
    rr(c, x, y, d.w, d.h, cr);
    c.fillStyle = '#151517'; c.fill();
    rr(c, x + 1.5, y + 1.5, d.w - 3, d.h - 3, cr);
    c.strokeStyle = 'rgba(255,255,255,0.14)'; c.lineWidth = 3; c.stroke();
    c.fillStyle = '#2e2e34';
    rr(c, x - 3, y + d.h * 0.2, 5, d.h * 0.1, 2.5); c.fill();
    rr(c, x - 3, y + d.h * 0.33, 5, d.h * 0.06, 2.5); c.fill();
    rr(c, x + d.w - 2, y + d.h * 0.26, 5, d.h * 0.12, 2.5); c.fill();
    var sx = x + d.edge, sy = y + d.edge;
    rr(c, sx, sy, d.scrW, d.scrH, Math.round(d.w * 0.08));
    c.save(); c.clip();
    cover(c, img, sx, sy, d.scrW, d.scrH);
    c.restore();
    var nw = d.scrW * 0.4;
    var nh = Math.max(14, Math.round(d.edge * 0.6));
    rr(c, x + (d.w - nw) / 2, y + d.edge * 0.26, nw, nh, nh / 2);
    c.fillStyle = '#000'; c.fill();
    c.fillStyle = '#2a2a31';
    c.beginPath();
    c.arc(x + (d.w + nw) / 2 - nh * 0.66, y + d.edge * 0.26 + nh / 2, nh * 0.22, 0, Math.PI * 2);
    c.fill();
  }

  function render(){
    if(!img || !canvas) return;
    var pad = parseInt(padRange.value, 10);
    var mode = devSel.value;
    var shadow = shadowChk.checked;
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var sc = Math.min(1, 1400 / Math.max(iw, ih));
    var sw = Math.max(80, Math.round(iw * sc));
    var sh = Math.max(80, Math.round(ih * sc));
    var dims = [];
    if(mode === 'laptop'){
      dims.push(laptopDims(sw, sh));
    } else if(mode === 'phone'){
      var pw = Math.round(sw * 0.44);
      dims.push(phoneDims(pw, Math.round(pw * 19.5 / 9)));
    } else {
      var lw = Math.round(sw * 0.6);
      dims.push(laptopDims(lw, Math.round(lw * sh / sw)));
      var pw2 = Math.round(sw * 0.27);
      dims.push(phoneDims(pw2, Math.round(pw2 * 19.5 / 9)));
    }
    var gap = Math.round(pad * 0.9);
    var totalW = pad * 2, maxH = 0;
    dims.forEach(function(d, i){
      totalW += d.w + (i ? gap : 0);
      if(d.h > maxH) maxH = d.h;
    });
    canvas.width = Math.round(totalW);
    canvas.height = Math.round(maxH + pad * 2);
    var c = canvas.getContext('2d');
    if(bg.t === 'grad'){
      var g = c.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0, bg.c1); g.addColorStop(1, bg.c2);
      c.fillStyle = g;
    } else { c.fillStyle = bg.c1; }
    c.fillRect(0, 0, canvas.width, canvas.height);
    var x = pad;
    dims.forEach(function(d){
      var y = pad + (maxH - d.h) / 2;
      if(d.kind === 'laptop') paintLaptop(c, x, y, d, pad, shadow);
      else paintPhone(c, x, y, d, pad, shadow);
      x += d.w + gap;
    });
    summary.textContent = 'Export: ' + canvas.width + ' × ' + canvas.height + ' px PNG — your design, cover-fitted to each screen.';
  }

  function buildPreview(){
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    canvas = document.createElement('canvas');
    canvas.style.maxWidth = '100%';
    canvas.style.height = 'auto';
    canvas.style.borderRadius = '10px';
    canvas.style.display = 'block';
    card.appendChild(canvas);
    var dl = document.createElement('button');
    dl.type = 'button'; dl.className = 'btn-pro';
    dl.textContent = '⬇ Download PNG';
    dl.addEventListener('click', function(){
      if(!canvas) return;
      ToolPro.download(canvas.toDataURL('image/png'), fname + '-mockup.png');
      ToolPro.toast('PNG downloaded', 'ok');
    });
    card.appendChild(dl);
    grid.appendChild(card);
  }

  ToolPro.dropzone(document.getElementById('mkgDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    onFiles: function(arr){
      var f = arr[0]; if(!f) return;
      fname = f.name.replace(/\.[^.]+$/, '') || 'design';
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, f, function(){
        img = null; canvas = null;
        resBox.classList.remove('show');
        btn.disabled = true; clearBtn.disabled = true;
      });
      var url = URL.createObjectURL(f);
      var im = new Image();
      im.onload = function(){
        img = im;
        URL.revokeObjectURL(url);
        buildPreview();
        resBox.classList.add('show');
        btn.disabled = false; clearBtn.disabled = false;
        render();
        ToolPro.toast('Image loaded — preview is live', 'ok');
      };
      im.onerror = function(){
        URL.revokeObjectURL(url);
        ToolPro.toast('Could not read that image', 'err');
      };
      im.src = url;
    }
  });

  clearBtn.addEventListener('click', function(){
    img = null; canvas = null; listEl.innerHTML = '';
    resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
  });

  btn.addEventListener('click', function(){
    if(!img || !canvas){ ToolPro.toast('Add an image first', 'err'); return; }
    ToolPro.download(canvas.toDataURL('image/png'), fname + '-mockup.png');
    ToolPro.toast('PNG downloaded', 'ok');
  });

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    bg = { t: chip.dataset.t, c1: chip.dataset.c1, c2: chip.dataset.c2 || chip.dataset.c1 };
    render();
  });

  devSel.addEventListener('change', render);
  padRange.addEventListener('input', render);
  shadowChk.addEventListener('change', render);
})();
</script>

## How it works

Upload a screenshot or design, pick a device — laptop, phone, or both side by side — and the tool draws a crisp device mockup around it with pure canvas shapes: bezel, camera dot, notch, side buttons, and a keyboard base. Your image is cover-fitted to each screen, set on a gradient background with soft padding and shadow, and exported as a PNG you can download.

## Everyday uses

- **App &amp; web developers** — show off UI in portfolio pieces and README files.
- **Marketers** — device shots for ads, landing pages, and app-store-style graphics.
- **Freelancers** — client deliverables that look like a real product shoot.
- **Bloggers** — feature images that make how-to posts look professional.
- **Course creators** — lesson thumbnails with your software in a laptop frame.

**Private by design:** your files never leave your browser — everything is drawn on a canvas on your device and nothing is uploaded anywhere.
