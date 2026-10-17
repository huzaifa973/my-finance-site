---
title: "Free Seamless Pattern Generator — Tiles That Repeat Perfectly"
description: "Design seamless repeating patterns free: polka dots, checkerboard, hexagons and more. Tune tile size, colors and scale, preview the repeat, download the tile PNG."
category: image
date: 2026-10-17
draft: false
---

Need a background that tiles perfectly — for a website, a slide deck, wrapping paper or a phone wallpaper? Design one seamless tile here and watch it repeat flawlessly. Everything is generated right in your browser — your files never leave your browser — so it's free forever with no sign-up.

<div class="tool-shell" id="pgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" fill="currentColor" fill-opacity=".9"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Free Seamless Pattern Generator</h2>
<p>Draw one perfect tile — dots, checks, hexagons — and download a PNG that repeats seamlessly.</p>
</div>
<button type="button" class="theme-toggle" id="pgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Design your tile</p>
<div class="settings-panel">
<div class="preset-row" id="pgPresets">
<button type="button" class="preset-chip active" data-shape="dots" data-fg="#ffffff" data-bg="#14245e" data-scale="50">⚪ Polka Dots</button>
<button type="button" class="preset-chip" data-shape="checker" data-fg="#111111" data-bg="#ffffff" data-scale="50">🏁 Checkerboard</button>
<button type="button" class="preset-chip" data-shape="hex" data-fg="#b45309" data-bg="#fef3c7" data-scale="90">🍯 Honeycomb</button>
<button type="button" class="preset-chip" data-shape="tri" data-fg="#ff2e88" data-bg="#fef9c3" data-scale="60">🎨 Memphis</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pgShape">Shape</label>
<select id="pgShape">
<option value="dots" selected>Polka Dots</option>
<option value="squares">Squares</option>
<option value="tri">Triangles</option>
<option value="dia">Diamonds</option>
<option value="hex">Hexagons</option>
<option value="checker">Checkerboard</option>
</select>
<div class="hint">Checkerboard draws a 2×2 alternating grid — the rotation toggle does not apply to it.</div>
</div>
<div class="setting">
<label for="pgFg">Shape color</label>
<input type="color" id="pgFg" value="#ffffff">
<div class="hint">The foreground shape color.</div>
</div>
<div class="setting">
<label for="pgBg">Background color</label>
<input type="color" id="pgBg" value="#14245e">
<div class="hint">The tile background color.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Fine-tune</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="pgTileSize">Tile size: <span class="val" id="pgTileSizeVal">256px</span></label>
<input type="range" id="pgTileSize" min="64" max="512" step="32" value="256">
<div class="hint">Size of the single tile you download.</div>
</div>
<div class="setting">
<label for="pgScale">Shape scale: <span class="val" id="pgScaleVal">50%</span></label>
<input type="range" id="pgScale" min="10" max="90" step="5" value="50">
<div class="hint">How big the shape is inside its tile.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="pgRotate"><span></span> Rotate shapes 45°</label>
<div class="hint">Tilts every shape for a diamond-style layout. Not applied to Checkerboard.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;align-items:flex-start;text-align:center;">
<div>
<canvas id="pgTile" style="max-width:100%;height:auto;border-radius:10px;"></canvas>
<div class="hint">Single tile — this is what downloads</div>
</div>
<div>
<canvas id="pgPreview" style="max-width:100%;height:auto;border-radius:10px;"></canvas>
<div class="hint">3×3 repeat preview</div>
</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pgDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG Tile
</button>
</div>
<div class="results" id="pgResults">
<p class="result-head">🧩 Tile status</p>
<div class="result-summary" id="pgSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate as many seamless tiles as you like — everything happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pgShell');
  ToolPro.themeToggle(shell, document.getElementById('pgTheme'));

  var shapeSel = document.getElementById('pgShape');
  var fgIn = document.getElementById('pgFg');
  var bgIn = document.getElementById('pgBg');
  var presets = document.getElementById('pgPresets');
  var tileR = document.getElementById('pgTileSize');
  var tileV = document.getElementById('pgTileSizeVal');
  var scaleR = document.getElementById('pgScale');
  var scaleV = document.getElementById('pgScaleVal');
  var rotT = document.getElementById('pgRotate');
  var tileC = document.getElementById('pgTile');
  var tctx = tileC.getContext('2d');
  var prevC = document.getElementById('pgPreview');
  var pctx = prevC.getContext('2d');
  var dlBtn = document.getElementById('pgDownload');
  var resBox = document.getElementById('pgResults');
  var sumEl = document.getElementById('pgSummary');

  function shapeName(){
    var o = shapeSel.options[shapeSel.selectedIndex];
    return o ? o.text : shapeSel.value;
  }

  function poly(n, r, start){
    tctx.beginPath();
    for(var i = 0; i < n; i++){
      var a = start + i * Math.PI * 2 / n;
      var x = Math.cos(a) * r, y = Math.sin(a) * r;
      if(i === 0) tctx.moveTo(x, y); else tctx.lineTo(x, y);
    }
    tctx.closePath();
    tctx.fill();
  }

  function drawTile(){
    var size = parseInt(tileR.value, 10) || 256;
    var fg = fgIn.value, bg = bgIn.value;
    var shape = shapeSel.value;
    tileC.width = size;
    tileC.height = size;
    tctx.fillStyle = bg;
    tctx.fillRect(0, 0, size, size);
    var sc = (parseInt(scaleR.value, 10) || 50) / 100;
    if(shape === 'checker'){
      var half = size / 2;
      tctx.fillStyle = fg;
      tctx.fillRect(0, 0, half, half);
      tctx.fillRect(half, half, half, half);
    } else {
      tctx.save();
      tctx.translate(size / 2, size / 2);
      if(rotT.checked) tctx.rotate(Math.PI / 4);
      tctx.fillStyle = fg;
      var r = (size / 2) * sc;
      if(shape === 'dots'){
        tctx.beginPath(); tctx.arc(0, 0, r, 0, Math.PI * 2); tctx.fill();
      } else if(shape === 'squares'){
        tctx.fillRect(-r, -r, r * 2, r * 2);
      } else if(shape === 'tri'){
        tctx.beginPath(); tctx.moveTo(0, -r); tctx.lineTo(r, r); tctx.lineTo(-r, r); tctx.closePath(); tctx.fill();
      } else if(shape === 'dia'){
        tctx.beginPath(); tctx.moveTo(0, -r); tctx.lineTo(r, 0); tctx.lineTo(0, r); tctx.lineTo(-r, 0); tctx.closePath(); tctx.fill();
      } else if(shape === 'hex'){
        poly(6, r, -Math.PI / 2);
      }
      tctx.restore();
    }
    prevC.width = size * 3;
    prevC.height = size * 3;
    for(var x = 0; x < 3; x++){
      for(var y = 0; y < 3; y++){
        pctx.drawImage(tileC, x * size, y * size);
      }
    }
    sumEl.innerHTML = 'Tile: <strong>' + size + '×' + size + 'px</strong> · Shape: <strong>' +
      shapeName() + '</strong> · Scale: <strong>' + scaleR.value + '%</strong>' +
      ' · Repeats seamlessly on all edges';
    resBox.classList.add('show');
  }

  ToolPro.bindSlider(tileR, tileV, function(v){ return v + 'px'; });
  ToolPro.bindSlider(scaleR, scaleV, function(v){ return v + '%'; });
  tileR.addEventListener('input', drawTile);
  scaleR.addEventListener('input', drawTile);
  shapeSel.addEventListener('change', drawTile);
  fgIn.addEventListener('input', drawTile);
  bgIn.addEventListener('input', drawTile);
  rotT.addEventListener('change', drawTile);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip');
    if(!chip) return;
    var chips = presets.querySelectorAll('.preset-chip');
    for(var i = 0; i < chips.length; i++) chips[i].classList.remove('active');
    chip.classList.add('active');
    shapeSel.value = chip.getAttribute('data-shape');
    fgIn.value = chip.getAttribute('data-fg');
    bgIn.value = chip.getAttribute('data-bg');
    scaleR.value = chip.getAttribute('data-scale');
    scaleR.dispatchEvent(new Event('input'));
    rotT.checked = false;
    drawTile();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  dlBtn.addEventListener('click', function(){
    var size = parseInt(tileR.value, 10) || 256;
    ToolPro.download(tileC.toDataURL('image/png'), 'pattern-tile-' + size + 'px.png');
    ToolPro.toast('Tile downloaded', 'ok');
  });

  drawTile();
})();
</script>

## How it works

- **Step 1** — Pick a shape and colors, or start from a preset like Polka Dots or Honeycomb. The tile is drawn instantly on a canvas.
- **Step 2** — Fine-tune the tile size (64–512px), the shape scale and an optional 45° rotation. Every change redraws the tile live.
- **Step 3** — The left canvas is the single downloadable tile; the right canvas shows a 3×3 repeat so you can prove the edges line up. Shapes are drawn centered and deterministically — no randomness — so the tile repeats seamlessly every time.

## Everyday uses

- **Website backgrounds** — a tiny repeating tile loads fast and looks crisp at any screen size.
- **Slide decks** — branded dotted or diamond backgrounds for every slide.
- **Phone wallpapers** — generate a tile, then set any photo editor to fill with it.
- **Social posts** — playful Memphis-style or checkerboard backdrops for announcements.
- **Packaging mockups** — honeycomb and polka patterns for boxes, bags and wrapping paper.
