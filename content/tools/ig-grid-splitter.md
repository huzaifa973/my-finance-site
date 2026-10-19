---
title: "Instagram Grid Splitter — Split Images into 3×3 Grid Tiles Free"
description: "Split any image into a 3×3, 3×2, or 3×4 Instagram grid tile set. Preview numbered tiles and download each as PNG — free, private, 100% in-browser."
category: image
date: 2026-10-19
draft: false
---

Turn one photo into a stunning Instagram grid — upload an image, pick 3×3, 3×2, or 3×4, preview every numbered tile, then download each tile as a PNG ready to post in order. Everything happens in your browser; your photo is never uploaded anywhere.

<div class="tool-shell" id="igsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Instagram Grid Splitter</h2>
<p>Split one image into perfectly sliced Instagram grid tiles — numbered, previewed, ready to post.</p>
</div>
<button type="button" class="theme-toggle" id="igsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload your image</p>
<div class="dropzone" id="igsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your image here</strong>
<span>or click to browse — JPG, PNG, WebP · square images work best for 3×3</span>
<input type="file" id="igsFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="igsList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Choose your grid</p>
<div class="settings-panel">
<div class="preset-row" id="igsPresets">
<button type="button" class="preset-chip active" data-c="3" data-r="3">🔲 3×3 classic</button>
<button type="button" class="preset-chip" data-c="3" data-r="2">🟫 3×2 banner</button>
<button type="button" class="preset-chip" data-c="3" data-r="4">🟦 3×4 tall grid</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="igsGridSel">Grid layout</label>
<select id="igsGridSel">
<option value="3x3" selected>3 × 3 — classic puzzle grid (9 tiles)</option>
<option value="3x2">3 × 2 — banner grid (6 tiles)</option>
<option value="3x4">3 × 4 — tall grid (12 tiles)</option>
</select>
<div class="hint">Post tiles in order 1 → 9 (left to right, top to bottom) so the grid reassembles perfectly.</div>
</div>
<div class="setting">
<label>Output</label>
<div class="hint" style="margin-top:.4rem;">PNG tiles at full image resolution — no watermarks, ever.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download your tiles</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="igsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download All Tiles
</button>
<button type="button" class="btn-pro-outline" id="igsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="igsProgWrap">
<div class="progress-bar"><i id="igsProgBar"></i></div>
<div class="progress-text" id="igsProgText">Slicing…</div>
</div>
<div class="results" id="igsResults">
<p class="result-head">🖼️ Your grid tiles — numbered in posting order</p>
<div class="result-summary" id="igsSummary"></div>
<div class="result-grid" id="igsTiles"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — slice as many images as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('igsShell');
  ToolPro.themeToggle(shell, document.getElementById('igsTheme'));

  var cols = 3, rows = 3;
  var img = null, srcURL = null, srcName = 'image';
  var tiles = [];
  var listEl = document.getElementById('igsList');
  var btn = document.getElementById('igsBtn');
  var clearBtn = document.getElementById('igsClear');
  var presets = document.getElementById('igsPresets');
  var gridSel = document.getElementById('igsGridSel');
  var resBox = document.getElementById('igsResults');
  var tileGrid = document.getElementById('igsTiles');

  function setGrid(c, r){
    cols = c; rows = r;
    presets.querySelectorAll('.preset-chip').forEach(function(ch){
      ch.classList.toggle('active', +ch.dataset.c === c && +ch.dataset.r === r);
    });
    gridSel.value = c + 'x' + r;
    if(img) renderTiles();
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setGrid(+chip.dataset.c, +chip.dataset.r);
    ToolPro.toast('Grid: ' + chip.dataset.c + '×' + chip.dataset.r);
  });
  gridSel.addEventListener('change', function(){
    var parts = gridSel.value.split('x');
    setGrid(+parts[0], +parts[1]);
    ToolPro.toast('Grid: ' + parts[0] + '×' + parts[1]);
  });

  function resetTool(){
    img = null; tiles = []; tileGrid.innerHTML = '';
    if(srcURL){ URL.revokeObjectURL(srcURL); srcURL = null; }
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Download All Tiles';
  }

  ToolPro.dropzone(document.getElementById('igsDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    maxFiles: 1,
    onFiles: function(arr){
      resetTool();
      var f = arr[0];
      srcName = f.name.replace(/\.[^.]+$/, '') || 'image';
      var row = ToolPro.fileRow(listEl, f, function(){ resetTool(); });
      row.setStatus('Loading…', 'working');
      srcURL = URL.createObjectURL(f);
      img = new Image();
      img.onload = function(){
        row.setStatus('Ready — ' + img.naturalWidth + '×' + img.naturalHeight + 'px', 'done');
        renderTiles();
        btn.disabled = false; clearBtn.disabled = false;
      };
      img.onerror = function(){
        row.setStatus('Could not read image', '');
        ToolPro.toast('That file could not be read as an image', 'err');
      };
      img.src = srcURL;
    }
  });

  clearBtn.addEventListener('click', function(){ resetTool(); ToolPro.toast('Cleared'); });

  function renderTiles(){
    tiles = []; tileGrid.innerHTML = '';
    var progWrap = document.getElementById('igsProgWrap');
    var progBar = document.getElementById('igsProgBar');
    progWrap.classList.add('show'); resBox.classList.remove('show');
    var tw = img.naturalWidth / cols, th = img.naturalHeight / rows;
    var n = 0;
    for(var r = 0; r < rows; r++){
      for(var c = 0; c < cols; c++){
        n++;
        (function(r, c, num){
          var sx = c * tw, sy = r * th;
          var card = document.createElement('div');
          card.className = 'result-card';
          var preview = document.createElement('canvas');
          var pw = 160, ph = Math.max(1, Math.round(pw * th / tw));
          preview.width = pw; preview.height = ph;
          preview.getContext('2d').drawImage(img, sx, sy, tw, th, 0, 0, pw, ph);
          var numTag = document.createElement('div');
          numTag.style.cssText = 'font-size:1.5rem;font-weight:800;';
          numTag.textContent = num;
          var label = document.createElement('div');
          label.style.cssText = 'font-size:.85rem;color:var(--muted);';
          label.textContent = 'Tile ' + num + ' · ' + Math.round(tw) + '×' + Math.round(th) + 'px';
          var dl = document.createElement('button');
          dl.type = 'button'; dl.className = 'btn-pro'; dl.textContent = '⬇ Download';
          dl.addEventListener('click', function(){ downloadTile({ sx: sx, sy: sy, tw: tw, th: th, num: num }); });
          card.appendChild(preview); card.appendChild(numTag);
          card.appendChild(label); card.appendChild(dl);
          tileGrid.appendChild(card);
          tiles.push({ sx: sx, sy: sy, tw: tw, th: th, num: num });
        })(r, c, n);
      }
    }
    progBar.style.width = '100%';
    document.getElementById('igsSummary').textContent =
      '✅ ' + n + ' tiles ready (' + cols + '×' + rows + '). Post them in order 1 → ' + n +
      ' so your grid reassembles perfectly.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Download All ' + n + ' Tiles';
  }

  function downloadTile(t){
    var c = document.createElement('canvas');
    c.width = Math.round(t.tw); c.height = Math.round(t.th);
    c.getContext('2d').drawImage(img, t.sx, t.sy, t.tw, t.th, 0, 0, c.width, c.height);
    ToolPro.download(c.toDataURL('image/png'), srcName + '-tile-' + t.num + '.png');
  }

  btn.addEventListener('click', function(){
    if(!tiles.length) return;
    btn.disabled = true;
    ToolPro.toast('Downloading ' + tiles.length + ' tiles…', 'ok');
    tiles.forEach(function(t, i){
      setTimeout(function(){ downloadTile(t); }, i * 600);
    });
    setTimeout(function(){ btn.disabled = false; }, tiles.length * 600 + 500);
  });
})();
</script>

## How it works

Upload an image and the tool slices it into an even 3×3, 3×2, or 3×4 grid using canvas — tiles are numbered in reading order (left to right, top to bottom). Each tile downloads as a full-resolution PNG, so your grid reassembles seamlessly when posted.

**Privacy:** your files never leave your browser — splitting happens entirely on your device, with no uploads and no tracking.

## Everyday uses

- **Creators &amp; influencers** — turn one photo or quote graphic into an eye-catching profile puzzle grid.
- **Brands** — launch announcements as tiled reveals across your profile for a bold first impression.
- **Photographers** — showcase panoramas or detail shots as multi-tile grids without cropping anything away.
- **Small businesses** — build a cohesive, professional-looking Instagram profile from a single brand image.
- **Event promos** — split a flyer into tiles so followers tap through the whole announcement.
