---
title: "Free Color Converter (HEX, RGB, HSL)"
description: "Convert colors between HEX, RGB, and HSL instantly with a live picker and swatch preview. Paste any format — get every format back."
date: 2026-10-01
draft: false
---

## How it works

Pick a color or paste a HEX, RGB, or HSL value — every format updates live with a preview swatch.

<div class="calc">
  <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;margin-bottom:.75rem;">
    <div><label for="ccPicker">Color picker</label><input type="color" id="ccPicker" value="#22d3ee" style="width:70px;height:44px;padding:2px;cursor:pointer;"></div>
    <div id="ccSwatch" style="width:70px;height:44px;border-radius:8px;border:1px solid #d1d5db;background:#22d3ee;"></div>
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="ccHex">HEX</label><input type="text" id="ccHex" placeholder="#22d3ee" style="width:120px;" oninput="ccFromHex()"></div>
    <div><label for="ccRgb">RGB</label><input type="text" id="ccRgb" placeholder="34, 211, 238" style="width:150px;" oninput="ccFromRgb()"></div>
    <div><label for="ccHsl">HSL</label><input type="text" id="ccHsl" placeholder="187, 92%, 54%" style="width:150px;" oninput="ccFromHsl()"></div>
  </div>
  <div class="result" id="ccResult"></div>
</div>

<script>
function ccHexToRgb(h){
  h = h.replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(h)) h = h.split('').map(function(c){ return c + c; }).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  var n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function ccRgbToHex(r, g, b){
  return '#' + [r, g, b].map(function(v){
    v = Math.max(0, Math.min(255, Math.round(v)));
    var s = v.toString(16);
    return s.length === 1 ? '0' + s : s;
  }).join('');
}
function ccRgbToHsl(r, g, b){
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
function ccHslToRgb(h, s, l){
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
function ccRender(r, g, b, skip){
  var hex = ccRgbToHex(r, g, b);
  var hsl = ccRgbToHsl(r, g, b);
  if (skip !== 'hex') document.getElementById('ccHex').value = hex;
  if (skip !== 'rgb') document.getElementById('ccRgb').value = r + ', ' + g + ', ' + b;
  if (skip !== 'hsl') document.getElementById('ccHsl').value = hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%';
  document.getElementById('ccPicker').value = hex;
  document.getElementById('ccSwatch').style.background = hex;
  document.getElementById('ccResult').innerHTML =
    '<p><strong>CSS:</strong> <code>' + hex + '</code> · <code>rgb(' + r + ', ' + g + ', ' + b + ')</code> · <code>hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)</code></p>';
}
function ccFromHex(){
  var rgb = ccHexToRgb(document.getElementById('ccHex').value.trim());
  if (rgb) ccRender(rgb[0], rgb[1], rgb[2], 'hex');
}
function ccFromRgb(){
  var n = document.getElementById('ccRgb').value.match(/\d+/g);
  if (n && n.length >= 3) {
    var r = parseInt(n[0], 10), g = parseInt(n[1], 10), b = parseInt(n[2], 10);
    if (r <= 255 && g <= 255 && b <= 255) ccRender(r, g, b, 'rgb');
  }
}
function ccFromHsl(){
  var n = document.getElementById('ccHsl').value.match(/-?\d+/g);
  if (n && n.length >= 3) {
    var rgb = ccHslToRgb(parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10));
    ccRender(rgb[0], rgb[1], rgb[2], 'hsl');
  }
}
document.getElementById('ccPicker').addEventListener('input', function(){
  var rgb = ccHexToRgb(this.value);
  ccRender(rgb[0], rgb[1], rgb[2]);
});
ccRender(34, 211, 238);
</script>

## Everyday uses

- **Web design:** a designer hands you `#f97316` — paste it and grab the RGB values for your CSS in one step.
- **Matching a photo:** paste the RGB you sampled in an editor and get the closest HEX for your theme.
- **Tweaking shades:** convert to HSL, nudge the lightness number up or down, and find the perfect variant.
