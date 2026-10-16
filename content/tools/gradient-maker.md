---
title: "Gradient Maker — CSS Gradient Designer with PNG Export"
description: "Design CSS gradients visually — linear and radial, custom color stops, presets, one-click CSS copy and PNG export. Free, no sign-up."
category: image
date: 2026-10-16
draft: false
---

Beautiful gradients shouldn't require guesswork. Design linear and radial gradients visually — drag color stops, pick colors, set the angle — then copy production-ready CSS or export a 1920×1080 PNG for wallpapers and backgrounds.

<div class="tool-shell" id="gdmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3L2 21h20L12 3zm0 4.5L18.5 19h-13L12 7.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Gradient Maker</h2>
<p>Design CSS gradients visually — then copy the code or download a PNG.</p>
</div>
<button type="button" class="theme-toggle" id="gdmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Design your gradient</p>
<div id="gdmPreview" style="height:180px;border-radius:12px;border:1px solid #e0e0e0;margin-bottom:12px;"></div>
<div class="settings-panel">
<div class="preset-row" id="gdmPresets">
<button type="button" class="preset-chip" data-colors="#ff9a56,#ff5e78,#a855f7">🌅 Sunset</button>
<button type="button" class="preset-chip" data-colors="#43cea2,#185a9d">🌊 Ocean</button>
<button type="button" class="preset-chip" data-colors="#11998e,#38ef7d">🌲 Forest</button>
<button type="button" class="preset-chip" data-colors="#ff6a88,#ff99ac">🍬 Candy</button>
<button type="button" class="preset-chip" data-colors="#0f2027,#2c5364">🌃 Midnight</button>
<button type="button" class="preset-chip" data-colors="#f7971e,#ffd200">🍋 Citrus</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="gdmType">Gradient type</label>
<select id="gdmType">
<option value="linear" selected>Linear</option>
<option value="radial">Radial</option>
</select>
</div>
<div class="setting" id="gdmAngleWrap">
<label for="gdmAngle">Angle: <span class="val" id="gdmAngleVal">135°</span></label>
<input type="range" id="gdmAngle" min="0" max="360" value="135">
</div>
</div>
<div id="gdmStops" style="margin-top:12px;"></div>
<button type="button" class="btn-pro-outline" id="gdmAdd" style="margin-top:8px;">+ Add color stop</button>
<div class="hint">Up to 6 stops. Click a color box to pick a color, drag the slider to position it.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Copy CSS or export PNG</p>
<div class="tool-output" id="gdmCss" style="white-space:pre-wrap;word-break:break-all;font-family:monospace;font-size:13px;min-height:60px;"></div>
<div class="tool-actions" style="margin-top:12px;">
<button type="button" class="btn-pro" id="gdmCopy">
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Copy CSS
</button>
<button type="button" class="btn-pro-outline" id="gdmPng">⬇ Download 1920×1080 PNG</button>
</div>
<div class="results" id="gdmResults">
<p class="result-head">✅ Exported</p>
<div class="result-summary" id="gdmSummary"></div>
<div class="result-grid" id="gdmGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Design unlimited gradients — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('gdmShell');
  ToolPro.themeToggle(shell, document.getElementById('gdmTheme'));
  var preview = document.getElementById('gdmPreview');
  var stopsEl = document.getElementById('gdmStops');
  var typeSel = document.getElementById('gdmType');
  var angleR = document.getElementById('gdmAngle');
  var angleV = document.getElementById('gdmAngleVal');
  var angleWrap = document.getElementById('gdmAngleWrap');
  var cssOut = document.getElementById('gdmCss');
  var presets = document.getElementById('gdmPresets');
  var stops = [
    { color: '#4f8ef7', pos: 0 },
    { color: '#a855f7', pos: 100 }
  ];

  ToolPro.bindSlider(angleR, angleV, function(v){ return v + '°'; });

  function cssString(){
    var sorted = stops.slice().sort(function(a, b){ return a.pos - b.pos; });
    var parts = sorted.map(function(s){ return s.color + ' ' + Math.round(s.pos) + '%'; }).join(', ');
    if(typeSel.value === 'linear') return 'linear-gradient(' + angleR.value + 'deg, ' + parts + ')';
    return 'radial-gradient(circle, ' + parts + ')';
  }

  function render(){
    var css = cssString();
    preview.style.background = css;
    cssOut.textContent = 'background: ' + css + ';';
    renderStops();
  }

  function renderStops(){
    stopsEl.innerHTML = '';
    stops.forEach(function(s, i){
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:10px;align-items:center;margin-bottom:8px;';
      row.innerHTML =
        '<input type="color" value="' + s.color + '" style="width:44px;height:36px;border:1px solid #ccc;border-radius:6px;padding:2px;" aria-label="Stop color">' +
        '<input type="range" min="0" max="100" value="' + s.pos + '" style="flex:1;" aria-label="Stop position">' +
        '<span class="val" style="min-width:44px;text-align:right;">' + Math.round(s.pos) + '%</span>' +
        (stops.length > 2 ? '<button type="button" class="btn-pro-outline" style="padding:4px 10px;">✕</button>' : '');
      var colorIn = row.querySelector('input[type=color]');
      var posIn = row.querySelector('input[type=range]');
      var posVal = row.querySelector('.val');
      colorIn.addEventListener('input', function(){ s.color = colorIn.value; render(); });
      posIn.addEventListener('input', function(){
        s.pos = parseInt(posIn.value, 10);
        posVal.textContent = s.pos + '%';
        render();
      });
      var rm = row.querySelector('button');
      if(rm) rm.addEventListener('click', function(){
        stops.splice(i, 1);
        render();
        ToolPro.toast('Stop removed');
      });
      stopsEl.appendChild(row);
    });
  }

  document.getElementById('gdmAdd').addEventListener('click', function(){
    if(stops.length >= 6){ ToolPro.toast('Maximum 6 stops', 'err'); return; }
    stops.push({ color: '#22c55e', pos: 50 });
    render();
    ToolPro.toast('Stop added', 'ok');
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var cols = chip.dataset.colors.split(',');
    stops = cols.map(function(c, i){
      return { color: c.trim(), pos: Math.round(i / (cols.length - 1) * 100) };
    });
    render();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  typeSel.addEventListener('change', function(){
    angleWrap.style.display = typeSel.value === 'linear' ? '' : 'none';
    render();
  });
  angleR.addEventListener('input', render);

  document.getElementById('gdmCopy').addEventListener('click', function(){
    var css = cssOut.textContent;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(css).then(function(){ ToolPro.toast('CSS copied', 'ok'); });
    }
  });

  document.getElementById('gdmPng').addEventListener('click', function(){
    var W = 1920, H = 1080;
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var x = c.getContext('2d');
    var sorted = stops.slice().sort(function(a, b){ return a.pos - b.pos; });
    var g;
    if(typeSel.value === 'linear'){
      var rad = (parseFloat(angleR.value) - 90) * Math.PI / 180;
      var dx = Math.cos(rad), dy = Math.sin(rad);
      var len = Math.abs(W * dx) + Math.abs(H * dy);
      var cx = W / 2, cy = H / 2;
      g = x.createLinearGradient(cx - dx * len / 2, cy - dy * len / 2, cx + dx * len / 2, cy + dy * len / 2);
    } else {
      var r = Math.sqrt(W * W + H * H) / 2;
      g = x.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, r);
    }
    sorted.forEach(function(s){ g.addColorStop(s.pos / 100, s.color); });
    x.fillStyle = g;
    x.fillRect(0, 0, W, H);
    var url = c.toDataURL('image/png');
    ToolPro.download(url, 'gradient-1920x1080.png');
    document.getElementById('gdmSummary').textContent = '🎉 1920×1080 PNG downloaded — perfect for wallpapers and hero backgrounds.';
    document.getElementById('gdmResults').classList.add('show');
    ToolPro.toast('PNG downloaded', 'ok');
  });

  render();
})();
</script>

## How it works

- **Step 1** — Design: pick linear or radial, set the angle, add up to 6 color stops (color + position), or start from a preset.
- **Step 2** — Copy the production-ready CSS one-liner, or export a crisp 1920×1080 PNG for wallpapers, slides, and hero backgrounds.

## Everyday uses

- **Web developers** — hero backgrounds and buttons without image files.
- **Designers** — quick gradient exploration with exact CSS output.
- **Bloggers** — featured-image backgrounds and social graphics.
- **Presenters** — clean slide backgrounds exported as PNG.

**Rule of thumb:** two to three stops look modern and clean; more than four needs careful color harmony — start from a preset.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/gradient-maker.md tool_name=read]
