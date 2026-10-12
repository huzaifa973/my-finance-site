---
title: "Free Photo Collage Maker — Grids, Strips & Feature Layouts"
description: "Combine 2-9 photos into a polished collage with grid, strip and feature layouts, custom spacing and backgrounds. Free, no sign-up, files never leave your browser."
category: image
date: 2026-10-12
draft: false
---

## How it works

Good collages used to mean opening a heavy photo editor. Here you just drop in 2 to 9 photos, pick a layout — tidy grids, strips, or one big feature shot with two smaller ones beside it — set the spacing and background colour, and download a print-ready image. Everything is composed on a canvas in your browser; your photos never leave your device.

<div class="tool-shell" id="colShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Collage Maker</h2>
<p>Combine 2–9 photos into grids, strips &amp; feature layouts — composed privately in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="colTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your photos</p>
<div class="dropzone" id="colDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your photos here</strong>
<span>or click to browse — JPG, PNG, WebP · add 2 to 9 photos</span>
<input type="file" id="colFile" accept="image/*">
</div>
<ul class="file-list" id="colList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Layout &amp; style</p>
<div class="settings-panel">
<div class="setting">
<label for="colLayout">Layout</label>
<select id="colLayout">
<option value="grid2">Grid — 2 × 2 (up to 4 photos)</option>
<option value="grid3">Grid — 3 × 3 (up to 9 photos)</option>
<option value="hstrip">Horizontal strip (all photos side by side)</option>
<option value="vstrip">Vertical strip (all photos stacked)</option>
<option value="big2">Feature — 1 big + 2 small (3 photos)</option>
</select>
<div class="hint">Grids and strips use as many photos as you added; Feature uses your first three, in order.</div>
</div>
<div class="settings-grid">
<div class="setting">
<label for="colGap">Gap between photos: <span class="val" id="colGapVal">12px</span></label>
<input type="range" id="colGap" min="0" max="60" value="12">
<div class="hint">The background colour shows through the gaps.</div>
</div>
<div class="setting">
<label for="colBg">Background colour</label>
<input type="color" id="colBg" value="#ffffff">
<div class="hint">White is classic; black makes photos pop in a strip.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<canvas id="colCanvas" width="1600" height="1600" style="display:block;width:100%;background:#fff;border:1px solid #d5d5d5;margin-bottom:12px;"></canvas>
<div class="tool-actions">
<button type="button" class="btn-pro" id="colDlPng" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
<button type="button" class="btn-pro-outline" id="colDlJpg" disabled>Download JPG</button>
<button type="button" class="btn-pro-outline" id="colClear" disabled>Clear all</button>
</div>
<div class="results" id="colResults">
<p class="result-head">✅ Your collage</p>
<div class="result-summary" id="colNote"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — build as many collages as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('colShell');
  ToolPro.themeToggle(shell, document.getElementById('colTheme'));

  var items = [];
  var listEl = document.getElementById('colList');
  var layoutSel = document.getElementById('colLayout');
  var gapRange = document.getElementById('colGap');
  var bgInput = document.getElementById('colBg');
  var canvas = document.getElementById('colCanvas');
  var resBox = document.getElementById('colResults');
  var note = document.getElementById('colNote');
  var dlPng = document.getElementById('colDlPng');
  var dlJpg = document.getElementById('colDlJpg');
  var clearBtn = document.getElementById('colClear');

  ToolPro.bindSlider(gapRange, document.getElementById('colGapVal'), function(v){ return v + 'px'; });

  (function(){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f4f4f4';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#9a9a9a';
    ctx.font = '34px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Add at least 2 photos to build your collage', canvas.width / 2, canvas.height / 2);
  })();

  function dimsFor(layout){
    if(layout === 'grid3') return { w: 1800, h: 1800 };
    if(layout === 'hstrip') return { w: 1800, h: 900 };
    if(layout === 'vstrip') return { w: 900, h: 1800 };
    if(layout === 'big2') return { w: 1600, h: 1200 };
    return { w: 1600, h: 1600 };
  }

  function cellsFor(layout, n){
    var cells = [];
    var i;
    if(layout === 'grid2'){
      for(i = 0; i < Math.min(n, 4); i++) cells.push({ x: (i % 2) * 800, y: Math.floor(i / 2) * 800, w: 800, h: 800 });
    } else if(layout === 'grid3'){
      for(i = 0; i < Math.min(n, 9); i++) cells.push({ x: (i % 3) * 600, y: Math.floor(i / 3) * 600, w: 600, h: 600 });
    } else if(layout === 'hstrip'){
      var cw = 1800 / n;
      for(i = 0; i < n; i++) cells.push({ x: i * cw, y: 0, w: cw, h: 900 });
    } else if(layout === 'vstrip'){
      var ch = 1800 / n;
      for(i = 0; i < n; i++) cells.push({ x: 0, y: i * ch, w: 900, h: ch });
    } else if(layout === 'big2'){
      cells.push({ x: 0, y: 0, w: 800, h: 1200 });
      if(n > 1) cells.push({ x: 800, y: 0, w: 800, h: 600 });
      if(n > 2) cells.push({ x: 800, y: 600, w: 800, h: 600 });
    }
    return cells;
  }

  function drawCover(ctx, im, x, y, w, h){
    var scale = Math.max(w / im.naturalWidth, h / im.naturalHeight);
    var sw = w / scale;
    var sh = h / scale;
    var sx = (im.naturalWidth - sw) / 2;
    var sy = (im.naturalHeight - sh) / 2;
    ctx.drawImage(im, sx, sy, sw, sh, x, y, w, h);
  }

  function render(){
    var ready = items.filter(function(x){ return x.img; });
    var layout = layoutSel.value;
    var d = dimsFor(layout);
    canvas.width = d.w;
    canvas.height = d.h;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = bgInput.value;
    ctx.fillRect(0, 0, d.w, d.h);
    var gap = parseInt(gapRange.value, 10);
    if(ready.length >= 2){
      var cells = cellsFor(layout, ready.length);
      cells.forEach(function(cell, i){
        drawCover(ctx, ready[i].img, cell.x + gap / 2, cell.y + gap / 2, cell.w - gap, cell.h - gap);
      });
      note.textContent = ready.length + ' photos · canvas ' + d.w + ' × ' + d.h + ' px · every photo is centre-cropped to fill its cell.';
      resBox.classList.add('show');
      dlPng.disabled = false;
      dlJpg.disabled = false;
    } else {
      resBox.classList.remove('show');
      dlPng.disabled = true;
      dlJpg.disabled = true;
    }
    clearBtn.disabled = items.length === 0;
  }

  ToolPro.dropzone(document.getElementById('colDrop'), {
    multiple: true,
    accept: 'image/*',
    maxFiles: 9,
    onFiles: function(arr){
      var added = 0;
      arr.forEach(function(f){
        if(items.length >= 9) return;
        if(items.some(function(x){ return x.file === f; })) return;
        var item = { file: f, img: null, row: null };
        item.row = ToolPro.fileRow(listEl, f, function(dead){
          items = items.filter(function(x){ return x.file !== dead; });
          render();
        });
        items.push(item);
        added++;
        var url = URL.createObjectURL(f);
        var im = new Image();
        im.onload = function(){
          item.img = im;
          item.row.setStatus('Ready', 'done');
          render();
        };
        im.onerror = function(){ item.row.setStatus('Failed', ''); };
        im.src = url;
      });
      if(added) ToolPro.toast(added + (added === 1 ? ' photo' : ' photos') + ' added', 'ok');
      render();
    }
  });

  layoutSel.addEventListener('change', render);
  gapRange.addEventListener('input', render);
  bgInput.addEventListener('input', render);

  clearBtn.addEventListener('click', function(){
    items = [];
    listEl.innerHTML = '';
    render();
  });

  dlPng.addEventListener('click', function(){
    render();
    ToolPro.download(canvas.toDataURL('image/png'), 'collage.png');
    ToolPro.toast('Collage downloaded as PNG', 'ok');
  });

  dlJpg.addEventListener('click', function(){
    render();
    ToolPro.download(canvas.toDataURL('image/jpeg', 0.92), 'collage.jpg');
    ToolPro.toast('Collage downloaded as JPG', 'ok');
  });
})();
</script>

## Everyday uses

- **Social media posts** — one tidy grid beats uploading nine separate photos.
- **Family and travel albums** — a whole trip on a single printable page.
- **Product listings** — show multiple angles of an item in one image.
- **Before-and-after stories** — strips make comparisons instantly readable.
- **Classroom and team posters** — a 3×3 grid of faces or moments, ready to print.

## Frequently asked questions

**How many photos can I put in one collage?**

Up to 9. The 2×2 grid uses your first 4, the 3×3 grid all 9, strips use every photo you added, and the Feature layout uses your first 3. Photos are filled into cells in the order you added them.

**Are my photos uploaded anywhere?**

No. The collage is drawn on a canvas inside your browser using the files you selected — nothing is sent to a server.

**Should I download PNG or JPG?**

PNG is lossless and best for crisp graphics and printing. JPG is smaller and ideal for sharing, messaging and uploading to social platforms.
