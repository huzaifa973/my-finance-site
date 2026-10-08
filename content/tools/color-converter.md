---
title: "Free Color Converter (HEX, RGB, HSL)"
description: "Convert colors between HEX, RGB, and HSL instantly with a live picker and swatch preview. Paste any format — get every format back."
date: 2026-10-01
draft: false
---

## How it works

Pick a color or paste a HEX, RGB, or HSL value — every format updates live with a preview swatch.

<div class="tool-shell" id="clrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Color Converter</h2>
<p>HEX ⇄ RGB ⇄ HSL with a live picker and swatch preview — paste any format.</p>
</div>
<button type="button" class="theme-toggle" id="clrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick or paste a color</p>
<div class="settings-grid">
<div class="setting">
<label for="clrPicker">Color picker</label>
<div style="display:flex;gap:.75rem;align-items:center;">
<input type="color" id="clrPicker" value="#22d3ee" style="width:70px;height:44px;padding:2px;cursor:pointer;border:1px solid var(--tp-border,#d1d5db);border-radius:8px;">
<div id="clrSwatch" style="width:70px;height:44px;border-radius:8px;border:1px solid #d1d5db;background:#22d3ee;"></div>
</div>
</div>
<div class="setting">
<label for="clrHex">HEX</label>
<input type="text" id="clrHex" class="tool-input" placeholder="#22d3ee">
</div>
<div class="setting">
<label for="clrRgb">RGB</label>
<input type="text" id="clrRgb" class="tool-input" placeholder="34, 211, 238">
</div>
<div class="setting">
<label for="clrHsl">HSL</label>
<input type="text" id="clrHsl" class="tool-input" placeholder="187, 92%, 54%">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Try a popular color</p>
<div class="settings-panel">
<div class="preset-row" id="clrPresets">
<button type="button" class="preset-chip" data-hex="#ef4444">🔴 Red</button>
<button type="button" class="preset-chip" data-hex="#f59e0b">🟠 Amber</button>
<button type="button" class="preset-chip" data-hex="#22c55e">🟢 Green</button>
<button type="button" class="preset-chip" data-hex="#22d3ee">🔵 Cyan</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Copy your CSS values</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="clrCopyBtn">Copy CSS</button>
</div>
<div class="results show" id="clrResults">
<p class="result-head">🎨 Every format</p>
<div class="result-summary" id="clrResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many colors as you like, as often as you like.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('clrShell');
  ToolPro.themeToggle(shell, document.getElementById('clrTheme'));

  var lastCss = '';

  function clrHexToRgb(h){
    h = h.replace(/^#/, '');
    if (/^[0-9a-fA-F]{3}$/.test(h)) h = h.split('').map(function(c){ return c + c; }).join('');
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function clrRgbToHex(r, g, b){
    return '#' + [r, g, b].map(function(v){
      v = Math.max(0, Math.min(255, Math.round(v)));
      var s = v.toString(16);
      return s.length === 1 ? '0' + s : s;
    }).join('');
  }
  function clrRgbToHsl(r, g, b){
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
    }
    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
  }
  function clrHslToRgb(h, s, l){
    h = ((h % 360) + 360) % 360; s /= 100; l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    var m = l - c / 2, r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
  }
  function clrRender(r, g, b, skip){
    var hex = clrRgbToHex(r, g, b);
    var hsl = clrRgbToHsl(r, g, b);
    if (skip !== 'hex') document.getElementById('clrHex').value = hex;
    if (skip !== 'rgb') document.getElementById('clrRgb').value = r + ', ' + g + ', ' + b;
    if (skip !== 'hsl') document.getElementById('clrHsl').value = hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%';
    document.getElementById('clrPicker').value = hex;
    document.getElementById('clrSwatch').style.background = hex;
    lastCss = hex + ' · rgb(' + r + ', ' + g + ', ' + b + ') · hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';
    document.getElementById('clrResult').innerHTML =
      '<p><strong>CSS:</strong> <code>' + hex + '</code> · <code>rgb(' + r + ', ' + g + ', ' + b + ')</code> · <code>hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)</code></p>';
  }
  function clrFromHex(){
    var rgb = clrHexToRgb(document.getElementById('clrHex').value.trim());
    if (rgb) clrRender(rgb[0], rgb[1], rgb[2], 'hex');
  }
  function clrFromRgb(){
    var n = document.getElementById('clrRgb').value.match(/\d+/g);
    if (n && n.length >= 3) {
      var r = parseInt(n[0], 10), g = parseInt(n[1], 10), b = parseInt(n[2], 10);
      if (r <= 255 && g <= 255 && b <= 255) clrRender(r, g, b, 'rgb');
    }
  }
  function clrFromHsl(){
    var n = document.getElementById('clrHsl').value.match(/-?\d+/g);
    if (n && n.length >= 3) {
      var rgb = clrHslToRgb(parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10));
      clrRender(rgb[0], rgb[1], rgb[2], 'hsl');
    }
  }

  document.getElementById('clrHex').addEventListener('input', clrFromHex);
  document.getElementById('clrRgb').addEventListener('input', clrFromRgb);
  document.getElementById('clrHsl').addEventListener('input', clrFromHsl);
  document.getElementById('clrPicker').addEventListener('input', function(){
    var rgb = clrHexToRgb(this.value);
    clrRender(rgb[0], rgb[1], rgb[2]);
  });

  document.getElementById('clrPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var rgb = clrHexToRgb(chip.dataset.hex);
    if (rgb) {
      clrRender(rgb[0], rgb[1], rgb[2]);
      ToolPro.toast('Color set: ' + chip.textContent.trim());
    }
  });

  document.getElementById('clrCopyBtn').addEventListener('click', function(){
    if (!lastCss) return;
    ToolPro.copyText(lastCss, 'CSS values copied');
  });

  clrRender(34, 211, 238);
})();
</script>

## Everyday uses

- **Web design:** a designer hands you `#f97316` — paste it and grab the RGB values for your CSS in one step.
- **Matching a photo:** paste the RGB you sampled in an editor and get the closest HEX for your theme.
- **Tweaking shades:** convert to HSL, nudge the lightness number up or down, and find the perfect variant.
