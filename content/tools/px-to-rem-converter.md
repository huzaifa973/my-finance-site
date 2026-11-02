---
title: "Free PX to REM Converter — CSS Pixel to Root EM"
description: "Free PX to REM converter for CSS developers: convert pixels to root em and back with any base font size, plus a quick-reference table of common sizes at 16px root."
category: utility
date: 2026-11-03
draft: false
---
## How it works
Type a pixel or rem value, set your root font-size (16px by default), and this converter gives you the exact equivalent in the other unit — with the formula shown and a reference table of the most common CSS sizes, recalculated for whatever base you choose.

<div class="tool-shell" id="pxrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PX ↔ REM Converter</h2>
<p>CSS pixel to root em, and back — for any base font size.</p>
</div>
<button type="button" class="theme-toggle" id="pxrTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — runs in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Value and direction</p>
<div class="settings-grid">
<div class="setting">
<label for="pxrMode">Convert</label>
<select id="pxrMode" class="tool-input">
<option value="px">Pixels (px) → REM</option>
<option value="rem">REM → Pixels (px)</option>
</select>
</div>
<div class="setting">
<label for="pxrValue" id="pxrValueLabel">Value in pixels (px)</label>
<input type="number" id="pxrValue" class="tool-input" placeholder="e.g. 24" min="0" step="0.01">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Root font size</p>
<div class="settings-grid">
<div class="setting">
<label for="pxrBase">Base font size (px)</label>
<input type="number" id="pxrBase" class="tool-input" value="16" min="1" step="0.5">
<div class="hint">Browsers default to 16px. If your CSS sets html { font-size: 62.5% } (10px), enter 10 here.</div>
</div>
<div class="setting" style="grid-column:1/-1">
<div class="hint">Formula: rem = px ÷ base. One rem equals the root (html) font size, so 1rem = 16px by default.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get the conversion</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pxrBtn">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
Convert
</button>
<button type="button" class="btn-pro-outline" id="pxrClear">Clear</button>
</div>
<div class="results" id="pxrResults">
<p class="result-head">🎨 Conversion result</p>
<div class="result-summary" id="pxrSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as many values as you like — everything runs locally in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('pxrShell');
  ToolPro.themeToggle(shell, document.getElementById('pxrTheme'));
  var resBox = document.getElementById('pxrResults');
  var summary = document.getElementById('pxrSummary');
  var modeSel = document.getElementById('pxrMode');
  var valueLabel = document.getElementById('pxrValueLabel');
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  modeSel.addEventListener('change', function(){
    valueLabel.textContent = modeSel.value === 'px' ? 'Value in pixels (px)' : 'Value in rem';
  });
  document.getElementById('pxrBtn').addEventListener('click', function(){
    var val = num('pxrValue');
    var base = num('pxrBase');
    var mode = modeSel.value;
    if (isNaN(val) || val < 0) { showError('Enter a value of 0 or more.'); return; }
    if (isNaN(base) || base <= 0) { showError('Base font size must be greater than 0px.'); return; }
    var result, fromLabel, toLabel;
    if (mode === 'px') {
      result = val / base;
      fromLabel = val + 'px';
      toLabel = result + 'rem';
    } else {
      result = val * base;
      fromLabel = val + 'rem';
      toLabel = result + 'px';
    }
    var common = [4,8,12,16,24,32,48,64,96];
    var rows = '';
    common.forEach(function(px){
      var rem = (px / base).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
      rows += '<tr><td style="padding:6px;border-bottom:1px solid #eee;">' + px + 'px</td><td style="padding:6px;border-bottom:1px solid #eee;">' + rem + 'rem</td></tr>';
    });
    summary.innerHTML = '<p style="font-size:1.5rem;">' + fromLabel + ' = <strong style="color:#0b6e4f">' + toLabel + '</strong></p>'
      + '<p>Base font size: <strong>' + base + 'px</strong> · formula: ' + (mode === 'px' ? 'rem = px ÷ base' : 'px = rem × base') + '</p>'
      + '<p style="margin-top:1rem;font-weight:600;">Common sizes at ' + base + 'px root</p>'
      + '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;"><thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Pixels</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">REM</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Conversion ready', 'ok');
  });
  document.getElementById('pxrClear').addEventListener('click', function(){
    document.getElementById('pxrValue').value = '';
    document.getElementById('pxrBase').value = '16';
    modeSel.value = 'px';
    valueLabel.textContent = 'Value in pixels (px)';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
A rem ("root em") is equal to the font size of the root `<html>` element. With the browser default of 16px, **1rem = 16px**, so:
**rem = px ÷ base font size** (and px = rem × base font size).
If you change the root font size — for example `html { font-size: 62.5% }` makes 1rem = 10px — every rem value scales automatically, which is why rems are preferred over pixels for accessible, responsive typography and spacing.
## Everyday uses
- **Design handoff:** convert a designer's pixel specs into rem values for your stylesheet.
- **Base-font changes:** switch a project to a 10px or 62.5% root and instantly recalculate every spacing token.
- **Accessibility audits:** verify that font sizes and spacing scale when a user overrides the default browser font size.
## Frequently asked questions
### Why use rem instead of px?
REM values scale with the user's chosen root font size, so text and spacing respect browser accessibility settings. Pixels are fixed and ignore user preferences. Most modern style guides recommend rem for typography and spacing.
### What if my project uses 62.5% root font size?
`html { font-size: 62.5% }` sets the root to 10px (62.5% of 16px), making 1rem = 10px so mental math is easy. Enter 10 as the base in this calculator to get correct conversions for that setup.
### What is the difference between rem and em?
`em` is relative to the current element's font size (so it compounds), while `rem` is always relative to the root `<html>` element and never compounds. For consistent spacing and sizing across a layout, rem is usually the safer choice.
