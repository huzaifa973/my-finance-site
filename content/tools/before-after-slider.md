---
title: "Before After Slider — Free Image Comparison Slider Tool"
description: "Compare two images with a draggable before/after slider in your browser — great for edits, renovations, and retouching reveals. Free, private, no sign-up."
category: image
date: 2026-10-28
draft: false
---

A before/after slider is the clearest way to show an edit: one image, one handle, drag to reveal the change. Upload a before image and an after image, drag the slider to compare them, switch between horizontal and vertical splits, and download a side-by-side PNG for sharing. Everything runs in your browser — your images never leave your device.

<div class="tool-shell" id="basShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7zM8 5v14l11-7z" opacity="0"/><path d="M6 5H4v14h2V5zm12 0h-2v14h2V5zM9 12l3-3v6l-3-3zm6 0l-3 3V9l3 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Before / After Slider</h2>
<p>Drag one handle to reveal the change — edits, renovations, retouches.</p>
</div>
<button type="button" class="theme-toggle" id="basTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add before &amp; after images</p>
<div class="dropzone" id="basDropBefore">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop the BEFORE image here</strong>
<span>or click to browse</span>
<input type="file" id="basFileBefore" accept="image/*">
</div>
<ul class="file-list" id="basListBefore"></ul>
<div class="dropzone" id="basDropAfter">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop the AFTER image here</strong>
<span>or click to browse</span>
<input type="file" id="basFileAfter" accept="image/*">
</div>
<ul class="file-list" id="basListAfter"></ul>
<div class="hint">Your images never leave your browser — the comparison runs locally.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Comparison settings</p>
<div class="settings-panel">
<div class="preset-row" id="basPresets">
<button type="button" class="preset-chip active" data-orient="h">↔ Horizontal split</button>
<button type="button" class="preset-chip" data-orient="v">↕ Vertical split</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="basLabels" checked><span></span> Show Before / After labels</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Drag, compare &amp; download</p>
<div id="basStage" style="position:relative;overflow:hidden;background:#111;border-radius:12px;max-width:100%;margin:0 auto;">
<img id="basAfterImg" alt="After image" style="display:block;width:100%;height:auto;">
<div id="basBeforeWrap" style="position:absolute;inset:0;overflow:hidden;width:50%;">
<img id="basBeforeImg" alt="Before image" style="display:block;width:100%;height:100%;object-fit:cover;">
</div>
<div id="basHandle" style="position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;box-shadow:0 0 8px rgba(0,0,0,.6);cursor:ew-resize;"></div>
<span id="basLabelBefore" style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,.65);color:#fff;padding:3px 10px;border-radius:20px;font-size:13px;">Before</span>
<span id="basLabelAfter" style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.65);color:#fff;padding:3px 10px;border-radius:20px;font-size:13px;">After</span>
</div>
<div style="margin-top:1rem;">
<label for="basSlider">Reveal: <span id="basSliderVal">50%</span> before</label>
<input type="range" id="basSlider" min="0" max="100" value="50" style="width:100%;">
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="basBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download Side-by-Side PNG
</button>
<button type="button" class="btn-pro-outline" id="basClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="basProgWrap">
<div class="progress-bar"><i id="basProgBar"></i></div>
<div class="progress-text" id="basProgText">Working…</div>
</div>
<div class="results" id="basResults">
<p class="result-head">✅ Side-by-side image</p>
<div class="result-summary" id="basSummary"></div>
<div class="result-grid" id="basGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Compare unlimited image pairs — everything happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('basShell');
  ToolPro.themeToggle(shell, document.getElementById('basTheme'));
  var beforeFile = null, afterFile = null;
  var beforeUrl = null, afterUrl = null;
  var beforeImgEl = document.getElementById('basBeforeImg');
  var afterImgEl = document.getElementById('basAfterImg');
  var wrap = document.getElementById('basBeforeWrap');
  var handle = document.getElementById('basHandle');
  var slider = document.getElementById('basSlider');
  var sliderVal = document.getElementById('basSliderVal');
  var stage = document.getElementById('basStage');
  var orient = 'h';
  var btn = document.getElementById('basBtn');
  var clearBtn = document.getElementById('basClear');
  var resBox = document.getElementById('basResults');
  var summaryEl = document.getElementById('basSummary');
  var gridEl = document.getElementById('basGrid');
  var outUrls = [];
  function isImg(f){ return f.type.indexOf('image/') === 0 || /\.(png|jpe?g|webp|gif|bmp|avif)$/i.test(f.name); }
  function setImage(which, f){
    if(!isImg(f)){ ToolPro.toast(f.name + ' is not an image — skipped.', 'err'); return; }
    var url = URL.createObjectURL(f);
    if(which === 'before'){
      if(beforeUrl) URL.revokeObjectURL(beforeUrl);
      beforeFile = f; beforeUrl = url; beforeImgEl.src = url;
      document.getElementById('basListBefore').innerHTML = '';
      ToolPro.fileRow(document.getElementById('basListBefore'), f, function(){ clearImage('before'); });
    } else {
      if(afterUrl) URL.revokeObjectURL(afterUrl);
      afterFile = f; afterUrl = url; afterImgEl.src = url;
      document.getElementById('basListAfter').innerHTML = '';
      ToolPro.fileRow(document.getElementById('basListAfter'), f, function(){ clearImage('after'); });
    }
    refresh();
  }
  function clearImage(which){
    if(which === 'before'){ beforeFile = null; beforeImgEl.removeAttribute('src'); document.getElementById('basListBefore').innerHTML = ''; }
    else { afterFile = null; afterImgEl.removeAttribute('src'); document.getElementById('basListAfter').innerHTML = ''; }
    refresh();
  }
  ToolPro.dropzone(document.getElementById('basDropBefore'), { accept: 'image/*', onFiles: function(arr){ if(arr[0]) setImage('before', arr[0]); } });
  ToolPro.dropzone(document.getElementById('basDropAfter'), { accept: 'image/*', onFiles: function(arr){ if(arr[0]) setImage('after', arr[0]); } });
  function refresh(){
    btn.disabled = !(beforeFile && afterFile);
    clearBtn.disabled = !(beforeFile || afterFile);
  }
  clearBtn.addEventListener('click', function(){
    clearImage('before'); clearImage('after');
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    outUrls.forEach(function(u){ URL.revokeObjectURL(u); }); outUrls = [];
    resBox.classList.remove('show');
    refresh();
  });
  function applySplit(){
    var p = parseInt(slider.value, 10);
    sliderVal.textContent = p + '%';
    if(orient === 'h'){
      wrap.style.width = p + '%'; wrap.style.height = '100%';
      handle.style.left = p + '%'; handle.style.top = '0'; handle.style.bottom = '0';
      handle.style.width = '3px'; handle.style.height = 'auto';
      handle.style.cursor = 'ew-resize';
      beforeImgEl.style.width = (stage.clientWidth || 1) + 'px';
      beforeImgEl.style.height = '100%';
    } else {
      wrap.style.height = p + '%'; wrap.style.width = '100%';
      handle.style.top = p + '%'; handle.style.left = '0'; handle.style.right = '0';
      handle.style.height = '3px'; handle.style.width = 'auto';
      handle.style.cursor = 'ns-resize';
      beforeImgEl.style.height = (stage.clientHeight || 1) + 'px';
      beforeImgEl.style.width = '100%';
    }
  }
  slider.addEventListener('input', applySplit);
  document.getElementById('basPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('basPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    orient = chip.dataset.orient;
    applySplit();
  });
  document.getElementById('basLabels').addEventListener('change', function(e){
    var show = e.target.checked ? '' : 'none';
    document.getElementById('basLabelBefore').style.display = show;
    document.getElementById('basLabelAfter').style.display = show;
  });
  stage.addEventListener('pointerdown', function(e){
    function move(ev){
      var r = stage.getBoundingClientRect();
      var p = orient === 'h' ? (ev.clientX - r.left) / r.width * 100 : (ev.clientY - r.top) / r.height * 100;
      slider.value = Math.max(0, Math.min(100, Math.round(p)));
      applySplit();
    }
    move(e);
    function up(){ window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); }
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  });
  btn.addEventListener('click', function(){
    if(!beforeFile || !afterFile){ ToolPro.toast('Add both images first.', 'err'); return; }
    var bi = new Image(), ai = new Image();
    var loaded = 0;
    function go(){
      if(++loaded < 2) return;
      var h = Math.max(bi.naturalHeight, ai.naturalHeight);
      var bw = Math.round(bi.naturalWidth * h / bi.naturalHeight);
      var aw = Math.round(ai.naturalWidth * h / ai.naturalHeight);
      var canvas = document.createElement('canvas');
      canvas.width = bw + aw; canvas.height = h;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bi, 0, 0, bw, h);
      ctx.drawImage(ai, bw, 0, aw, h);
      canvas.toBlob(function(blob){
        if(!blob){ ToolPro.toast('Export failed.', 'err'); return; }
        var url = URL.createObjectURL(blob);
        outUrls.push(url);
        var name = 'before-after-comparison.png';
        gridEl.innerHTML = '';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PNG</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-stats').textContent = canvas.width + ' × ' + canvas.height + ' px · before on the left, after on the right · ' + ToolPro.fmtBytes(blob.size);
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
        gridEl.appendChild(card);
        summaryEl.textContent = '🎉 Side-by-side PNG ready — before on the left, after on the right.';
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast('Side-by-side PNG ready', 'ok');
      }, 'image/png');
    }
    bi.onload = go; ai.onload = go;
    bi.onerror = function(){ ToolPro.toast('Could not load the before image.', 'err'); };
    ai.onerror = function(){ ToolPro.toast('Could not load the after image.', 'err'); };
    bi.src = beforeUrl; ai.src = afterUrl;
  });
  refresh();
})();
</script>

## How it works

Upload a before image and an after image, then drag the handle (or the slider below) to wipe between them. Horizontal splits reveal left-to-right; vertical splits reveal top-to-bottom. Labels mark each side, and the **Download Side-by-Side PNG** button exports both images next to each other at full resolution for posts, listings, and portfolios. Your images never leave your browser.

## Everyday uses

- **Photo retouching** — show clients exactly what changed.
- **Renovations** — before/after reveals for kitchens, rooms, and exteriors.
- **Design revisions** — compare mockup versions without flipping tabs.
- **Restoration** — old photo vs restored photo, side by side.
- **Fitness and grooming** — progress photos compared honestly in one frame.
