---
title: "Resize Image for Instagram Post — Free"
description: "Resize any photo to Instagram's exact post sizes: square 1080×1080, portrait 1080×1350, landscape 1080×566, story 1080×1920. Live preview, free, private — runs in your browser."
category: image
date: 2026-10-14
draft: false
---

Posting a photo that Instagram crops badly? Resize it to the platform's exact dimensions first. Pick a preset — Square, Portrait, Landscape, or Story/Reel — choose Cover (center-crop) or Contain (pad with a blurred background), preview it live with the exact pixel dimensions, and download. All in your browser; your photos never leave your device.

<div class="tool-shell" id="ripShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Resize Image for Instagram Post</h2>
<p>Exact Instagram dimensions — square, portrait, landscape, story — with live preview.</p>
</div>
<button type="button" class="theme-toggle" id="ripTheme">🌙 Dark</button>
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
<div class="dropzone" id="ripDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="ripFile" accept="image/*">
</div>
<ul class="file-list" id="ripList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Resize settings</p>
<div class="settings-panel">
<div class="preset-row" id="ripPresets">
<button type="button" class="preset-chip active" data-w="1080" data-h="1080" data-label="square">⬛ Square 1080×1080</button>
<button type="button" class="preset-chip" data-w="1080" data-h="1350" data-label="portrait">📱 Portrait 1080×1350</button>
<button type="button" class="preset-chip" data-w="1080" data-h="566" data-label="landscape">🖼️ Landscape 1080×566</button>
<button type="button" class="preset-chip" data-w="1080" data-h="1920" data-label="story">📲 Story / Reel 1080×1920</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ripFit">Fit mode</label>
<select id="ripFit">
<option value="cover" selected>Cover — center-crop to fill</option>
<option value="contain">Contain — fit all, blur-pad the rest</option>
</select>
<div class="hint">Cover crops edges; Contain keeps the whole photo with a blurred background fill.</div>
</div>
<div class="setting">
<label for="ripFormat">Output format</label>
<select id="ripFormat">
<option value="jpeg" selected>JPG — small file</option>
<option value="png">PNG — lossless</option>
</select>
<div class="hint">JPG at 92% quality is Instagram's own sweet spot.</div>
</div>
<div class="setting">
<label for="ripQ">JPG quality: <span class="val" id="ripQVal">92%</span></label>
<input type="range" id="ripQ" min="60" max="100" value="92">
<div class="hint">Only applies to JPG output.</div>
</div>
</div>
<div class="tool-input" style="margin-top:12px;text-align:center">
<canvas id="ripPreview" style="max-width:100%;max-height:340px;border-radius:10px;background:#111"></canvas>
<p class="hint" id="ripDims" style="margin-top:6px"></p>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ripBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download Resized Image
</button>
<button type="button" class="btn-pro-outline" id="ripClear" disabled>Clear</button>
</div>
<div class="results" id="ripResults">
<p class="result-head">✅ Done — your Instagram-ready image</p>
<div class="result-summary" id="ripSummary"></div>
<div class="result-grid" id="ripGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — resize as many photos as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ripShell');
  ToolPro.themeToggle(shell, document.getElementById('ripTheme'));

  var img = null, imgUrl = null, file = null;
  var curW = 1080, curH = 1080, curLabel = 'square';
  var listEl = document.getElementById('ripList');
  var btn = document.getElementById('ripBtn');
  var clearBtn = document.getElementById('ripClear');
  var fitSel = document.getElementById('ripFit');
  var fmtSel = document.getElementById('ripFormat');
  var qR = document.getElementById('ripQ'), qV = document.getElementById('ripQVal');
  var preview = document.getElementById('ripPreview');
  var dimsEl = document.getElementById('ripDims');

  ToolPro.bindSlider(qR, qV, function(v){ return v + '%'; });

  function refreshButtons(){
    btn.disabled = !img;
    clearBtn.disabled = !img;
  }

  function render(){
    if(!img){ preview.style.display = 'none'; dimsEl.textContent = ''; return; }
    preview.style.display = 'inline-block';
    preview.width = curW; preview.height = curH;
    var ctx = preview.getContext('2d');
    ctx.clearRect(0, 0, curW, curH);
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if(fitSel.value === 'cover'){
      var scale = Math.max(curW / iw, curH / ih);
      var dw = iw * scale, dh = ih * scale;
      ctx.drawImage(img, (curW - dw) / 2, (curH - dh) / 2, dw, dh);
    }else{
      // blurred background fill
      var bscale = Math.max(curW / iw, curH / ih);
      ctx.save();
      try{ ctx.filter = 'blur(30px)'; }catch(e){}
      ctx.drawImage(img, (curW - iw * bscale) / 2, (curH - ih * bscale) / 2, iw * bscale, ih * bscale);
      ctx.restore();
      var s2 = Math.min(curW / iw, curH / ih);
      ctx.drawImage(img, (curW - iw * s2) / 2, (curH - ih * s2) / 2, iw * s2, ih * s2);
    }
    // dimension overlay
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    var label = curW + '×' + curH + ' · ' + curLabel;
    ctx.font = 'bold 34px sans-serif';
    var tw = ctx.measureText(label).width;
    ctx.fillRect(curW / 2 - tw / 2 - 14, curH - 70, tw + 28, 52);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(label, curW / 2, curH - 34);
    ctx.restore();
    dimsEl.textContent = 'Output: ' + curW + '×' + curH + ' px · ' + fitSel.value + ' · ' + fmtSel.value.toUpperCase();
  }

  ToolPro.dropzone(document.getElementById('ripDrop'), {
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
        document.getElementById('ripResults').classList.remove('show');
        render(); refreshButtons();
        ToolPro.toast('Photo loaded — live preview below', 'ok');
      };
      img.onerror = function(){
        ToolPro.toast('Could not read that image', 'err');
      };
      img.src = imgUrl;
    }
  });

  function reset(){
    if(imgUrl){ URL.revokeObjectURL(imgUrl); imgUrl = null; }
    img = null; file = null;
    listEl.innerHTML = '';
    preview.style.display = 'none'; dimsEl.textContent = '';
    document.getElementById('ripResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', reset);

  document.getElementById('ripPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#ripPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    curW = +chip.dataset.w; curH = +chip.dataset.h; curLabel = chip.dataset.label;
    render();
    ToolPro.toast('Size: ' + chip.textContent.trim());
  });
  fitSel.addEventListener('change', render);
  fmtSel.addEventListener('change', render);

  btn.addEventListener('click', function(){
    if(!img) return;
    var fmt = fmtSel.value;
    var mime = fmt === 'png' ? 'image/png' : 'image/jpeg';
    var q = fmt === 'png' ? undefined : (+qR.value) / 100;
    // render final without the overlay label
    var out = document.createElement('canvas');
    out.width = curW; out.height = curH;
    var octx = out.getContext('2d');
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if(fitSel.value === 'cover'){
      var scale = Math.max(curW / iw, curH / ih);
      var dw = iw * scale, dh = ih * scale;
      octx.drawImage(img, (curW - dw) / 2, (curH - dh) / 2, dw, dh);
    }else{
      var bscale = Math.max(curW / iw, curH / ih);
      octx.save();
      try{ octx.filter = 'blur(30px)'; }catch(e){}
      octx.drawImage(img, (curW - iw * bscale) / 2, (curH - ih * bscale) / 2, iw * bscale, ih * bscale);
      octx.restore();
      var s2 = Math.min(curW / iw, curH / ih);
      octx.drawImage(img, (curW - iw * s2) / 2, (curH - ih * s2) / 2, iw * s2, ih * s2);
    }
    out.toBlob(function(blob){
      if(!blob){ ToolPro.toast('Export failed', 'err'); return; }
      var url = URL.createObjectURL(blob);
      var fname = (file.name.replace(/\.[^.]+$/, '') || 'image') + '-instagram-' + curLabel + '.' + fmt;
      var grid = document.getElementById('ripGrid');
      var resBox = document.getElementById('ripResults');
      grid.innerHTML = '';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<img class="r-preview" alt="resized result">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download Image</button>';
      card.querySelector('.r-preview').src = url;
      card.querySelector('.r-preview').style.cssText = 'max-width:100%;border-radius:8px';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').textContent = curW + '×' + curH + 'px · ' + fmt.toUpperCase() + ' · ' + ToolPro.fmtBytes(blob.size);
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('ripSummary').textContent =
        '🎉 Resized to Instagram\'s ' + curLabel + ' size (' + curW + '×' + curH + 'px) — ready to post.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Image resized', 'ok');
    }, mime, q);
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your photo. It loads instantly into a live preview.
- **Step 2** — Pick a size preset (Square, Portrait, Landscape, or Story/Reel), a fit mode (Cover crops, Contain blur-pads), and JPG or PNG output. The preview updates live with the exact pixel dimensions overlaid.
- **Step 3** — Hit **Download Resized Image** — the file you get matches Instagram's recommended size exactly.

## Everyday uses

- **Creators** — stop Instagram from auto-cropping your best shots.
- **Small businesses** — make product photos consistent across your feed.
- **Photographers** — export portrait 1080×1350 for maximum feed real estate.
- **Stories &amp; Reels** — format vertical content at exactly 1080×1920.
- **Memes &amp; quotes** — keep square graphics crisp at 1080×1080.

## Frequently asked questions

**Why 1080px wide?**
That's Instagram's recommended width — anything larger gets compressed by them anyway, anything smaller looks soft. These are the platform's official sweet spots.

**Cover vs. Contain — which should I pick?**
Cover fills the frame and crops edges (best for most photos). Contain keeps the whole photo visible and fills the leftover space with a blurred version of itself (best for screenshots and graphics).

**Will quality suffer?**
The output is rendered at Instagram's full recommended resolution in high-quality JPG (92%) or lossless PNG — as sharp as Instagram will display.

**Are my photos private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
