---
title: "Screenshot Beautifier — Frame & Style Your Screenshots Free"
description: "Frame screenshots in browser windows or phone mockups on beautiful gradient backgrounds. Free forever, private, in-browser — download a crisp PNG."
category: image
date: 2026-10-19
draft: false
---

Plain screenshots look boring in blog posts, docs, and social feeds. The Screenshot Beautifier wraps any image in a sleek browser window or phone frame, sets it on a gorgeous gradient background with soft padding and shadow — and hands you a crisp PNG. Everything renders in your browser; nothing is uploaded.

<div class="tool-shell" id="sbtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM6.6 6.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zm2.6 0a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Screenshot Beautifier</h2>
<p>Frame your screenshots in browser windows or phone mockups on gorgeous gradient backgrounds — perfect for docs, social posts, and landing pages.</p>
</div>
<button type="button" class="theme-toggle" id="sbtTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your screenshot</p>
<div class="dropzone" id="sbtDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your image here</strong>
<span>or click to browse — PNG, JPG, WebP</span>
<input type="file" id="sbtFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="sbtList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Style settings</p>
<div class="settings-panel">
<div class="preset-row" id="sbtBgs">
<button type="button" class="preset-chip active" data-t="grad" data-c1="#7c3aed" data-c2="#ec4899">🌆 Purple-pink</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#2563eb" data-c2="#06b6d4">🌊 Blue-teal</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#f59e0b" data-c2="#ef4444">🌅 Sunset orange</button>
<button type="button" class="preset-chip" data-t="grad" data-c1="#1e293b" data-c2="#0f172a">🌑 Midnight</button>
<button type="button" class="preset-chip" data-t="solid" data-c1="#ffffff">⬜ White</button>
<button type="button" class="preset-chip" data-t="solid" data-c1="#111111">⬛ Black</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="sbtFrame">Frame style</label>
<select id="sbtFrame">
<option value="browser" selected>🖥️ Browser window</option>
<option value="phone">📱 Phone frame</option>
<option value="none">⬜ No frame</option>
</select>
<div class="hint">The browser frame adds traffic-light dots and a fake address bar.</div>
</div>
<div class="setting">
<label for="sbtPad">Padding: <span class="val" id="sbtPadVal">80px</span></label>
<input type="range" id="sbtPad" min="20" max="240" value="80">
<div class="hint">Space between the frame and the background edge.</div>
</div>
<div class="setting">
<label for="sbtRad">Corner radius: <span class="val" id="sbtRadVal">16px</span></label>
<input type="range" id="sbtRad" min="0" max="40" value="16">
<div class="hint">Rounds the corners of your screenshot.</div>
</div>
<div class="setting">
<div class="toggle-row">
<span class="t-label">Soft shadow</span>
<label class="toggle"><input type="checkbox" id="sbtShadow" checked><span class="track"></span></label>
</div>
<div class="hint">Adds depth under the framed screenshot.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sbtBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
<button type="button" class="btn-pro-outline" id="sbtClear" disabled>Remove image</button>
</div>
<div class="results" id="sbtResults">
<p class="result-head">🎨 Live preview — updates as you change settings</p>
<div class="result-summary" id="sbtSummary"></div>
<div class="result-grid" id="sbtGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Beautify unlimited screenshots — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('sbtShell');
  ToolPro.themeToggle(shell, document.getElementById('sbtTheme'));

  var img = null, fname = 'screenshot';
  var canvas = null;
  var bg = { t: 'grad', c1: '#7c3aed', c2: '#ec4899' };

  var listEl = document.getElementById('sbtList');
  var btn = document.getElementById('sbtBtn');
  var clearBtn = document.getElementById('sbtClear');
  var frameSel = document.getElementById('sbtFrame');
  var padRange = document.getElementById('sbtPad');
  var padVal = document.getElementById('sbtPadVal');
  var radRange = document.getElementById('sbtRad');
  var radVal = document.getElementById('sbtRadVal');
  var shadowChk = document.getElementById('sbtShadow');
  var chips = document.getElementById('sbtBgs');
  var resBox = document.getElementById('sbtResults');
  var grid = document.getElementById('sbtGrid');
  var summary = document.getElementById('sbtSummary');

  ToolPro.bindSlider(padRange, padVal, function(v){ return v + 'px'; });
  ToolPro.bindSlider(radRange, radVal, function(v){ return v + 'px'; });

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

  function render(){
    if(!img || !canvas) return;
    var pad = parseInt(padRange.value, 10);
    var rad = parseInt(radRange.value, 10);
    var frame = frameSel.value;
    var shadow = shadowChk.checked;
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var sc = Math.min(1, 2200 / Math.max(iw, ih));
    var sw = Math.max(1, Math.round(iw * sc));
    var sh = Math.max(1, Math.round(ih * sc));
    var barH = 0, edge = 0;
    if(frame === 'browser'){ barH = Math.max(30, Math.round(sw * 0.06)); }
    else if(frame === 'phone'){ edge = Math.max(20, Math.round(Math.min(sw, sh) * 0.055)); }
    var boxW = sw + edge * 2;
    var boxH = sh + edge * 2 + barH;
    var corner = (frame === 'phone') ? Math.round(boxW * 0.085) : rad;

    canvas.width = boxW + pad * 2;
    canvas.height = boxH + pad * 2;
    var ctx = canvas.getContext('2d');

    if(bg.t === 'grad'){
      var g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0, bg.c1); g.addColorStop(1, bg.c2);
      ctx.fillStyle = g;
    } else { ctx.fillStyle = bg.c1; }
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var bx = pad, by = pad;
    if(shadow){
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.40)';
      ctx.shadowBlur = Math.round(pad * 0.5);
      ctx.shadowOffsetY = Math.round(pad * 0.15);
      rr(ctx, bx, by, boxW, boxH, corner);
      ctx.fillStyle = '#000'; ctx.fill();
      ctx.restore();
    }

    if(frame === 'browser'){
      rr(ctx, bx, by, boxW, boxH, corner);
      ctx.save(); ctx.clip();
      ctx.fillStyle = '#ececf1';
      ctx.fillRect(bx, by, boxW, barH);
      var d = Math.max(8, Math.round(barH * 0.26));
      var cy = by + barH / 2;
      var cols = ['#ff5f57', '#febc2e', '#28c840'];
      for(var i = 0; i < 3; i++){
        ctx.fillStyle = cols[i];
        ctx.beginPath();
        ctx.arc(bx + d * 1.1 + i * d * 1.7, cy, d / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      var ah = Math.round(barH * 0.52);
      var ax = bx + d * 5.6;
      var aw = Math.max(40, boxW - (ax - bx) - d * 1.2);
      rr(ctx, ax, by + (barH - ah) / 2, aw, ah, ah / 2);
      ctx.fillStyle = '#ffffff'; ctx.fill();
      if(aw > 110){
        ctx.fillStyle = '#9aa0ab';
        ctx.font = Math.max(9, Math.round(ah * 0.44)) + 'px Arial, sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillText('https://yoursite.com', ax + ah * 0.55, cy + 1);
      }
      ctx.drawImage(img, bx, by + barH, sw, sh);
      ctx.restore();
      rr(ctx, bx + 0.5, by + 0.5, boxW - 1, boxH - 1, corner);
      ctx.strokeStyle = 'rgba(0,0,0,0.14)'; ctx.lineWidth = 1; ctx.stroke();
    } else if(frame === 'phone'){
      rr(ctx, bx, by, boxW, boxH, corner);
      ctx.fillStyle = '#161618'; ctx.fill();
      rr(ctx, bx + 1, by + 1, boxW - 2, boxH - 2, corner);
      ctx.strokeStyle = 'rgba(255,255,255,0.16)'; ctx.lineWidth = 2; ctx.stroke();
      var sx = bx + edge, sy = by + edge;
      rr(ctx, sx, sy, sw, sh, rad);
      ctx.save(); ctx.clip();
      ctx.drawImage(img, sx, sy, sw, sh);
      ctx.restore();
      var nw = sw * 0.36;
      var nh = Math.max(12, Math.round(edge * 0.55));
      rr(ctx, bx + (boxW - nw) / 2, by + edge * 0.24, nw, nh, nh / 2);
      ctx.fillStyle = '#000'; ctx.fill();
      ctx.fillStyle = '#26262c';
      ctx.beginPath();
      ctx.arc(bx + (boxW + nw) / 2 - nh * 0.62, by + edge * 0.24 + nh / 2, nh * 0.22, 0, Math.PI * 2);
      ctx.fill();
    } else {
      rr(ctx, bx, by, boxW, boxH, corner);
      ctx.save(); ctx.clip();
      ctx.drawImage(img, bx, by, sw, sh);
      ctx.restore();
    }
    summary.textContent = 'Export: ' + canvas.width + ' × ' + canvas.height + ' px PNG — the preview updates live as you tweak the settings.';
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
      ToolPro.download(canvas.toDataURL('image/png'), fname + '-beautified.png');
      ToolPro.toast('PNG downloaded', 'ok');
    });
    card.appendChild(dl);
    grid.appendChild(card);
  }

  ToolPro.dropzone(document.getElementById('sbtDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    onFiles: function(arr){
      var f = arr[0]; if(!f) return;
      fname = f.name.replace(/\.[^.]+$/, '') || 'screenshot';
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
    ToolPro.download(canvas.toDataURL('image/png'), fname + '-beautified.png');
    ToolPro.toast('PNG downloaded', 'ok');
  });

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    bg = { t: chip.dataset.t, c1: chip.dataset.c1, c2: chip.dataset.c2 || chip.dataset.c1 };
    render();
  });

  frameSel.addEventListener('change', render);
  padRange.addEventListener('input', render);
  radRange.addEventListener('input', render);
  shadowChk.addEventListener('change', render);
})();
</script>

## How it works

Drop in any image — a screenshot, a chart, a design mock. The tool draws it onto a high-resolution canvas at full quality, wraps it in a browser window (with traffic-light dots and a fake address bar), a phone frame with a notch, or leaves it clean and unframed, then paints your chosen gradient or solid background behind it with soft padding and an optional drop shadow. Hit Download PNG to save the finished graphic.

## Everyday uses

- **Bloggers &amp; docs writers** — screenshots that look polished in tutorials and help articles.
- **Social creators** — announcements and tips that pop in the feed instead of blending in.
- **Founders &amp; freelancers** — product shots for landing pages and pitch decks.
- **Support teams** — friendly, on-brand visuals for knowledge bases.
- **Students** — classy screenshots for presentations and reports.

**Private by design:** your files never leave your browser — the image is drawn on a canvas on your device and nothing is uploaded anywhere.
