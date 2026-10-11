---
title: "Free Color Picker — Pick Colors from Any Image"
description: "Upload any image and click to pick colors. Get HEX, RGB & HSL codes with copy buttons and a palette history. EyeDropper supported. Free, private."
category: everyday
date: 2026-10-11
draft: false
---

Love a color in a photo, a logo, or a screenshot and need its exact code? Upload any image, hover to preview colors live, and click to lock one in — you get the HEX, RGB, and HSL codes instantly with one-tap copy buttons, plus a palette history of everything you've picked. Works with the system EyeDropper on supported browsers. Your image never leaves your device.

<div class="tool-shell" id="cpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Color Picker from Image</h2>
<p>Click any pixel — get HEX, RGB &amp; HSL codes instantly, with palette history.</p>
</div>
<button type="button" class="theme-toggle" id="cpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload an image</p>
<div class="dropzone" id="cpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP, GIF</span>
<input type="file" id="cpFile" accept="image/*">
</div>
<div class="hint">Or use your system color picker: <button type="button" class="btn-pro-outline" id="cpEye" style="display:none;margin:4px 0;">🎯 Pick from screen (EyeDropper)</button><span id="cpEyeNote">EyeDropper isn't supported in this browser — upload an image instead.</span></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Hover &amp; click to pick</p>
<div class="results show" id="cpStageWrap" style="display:none;">
<div style="position:relative;display:inline-block;max-width:100%;" id="cpStage">
<canvas id="cpCanvas" style="max-width:100%;border-radius:12px;cursor:crosshair;display:block;"></canvas>
<div id="cpMag" style="position:absolute;pointer-events:none;display:none;align-items:center;gap:8px;background:rgba(15,23,42,.9);color:#fff;border-radius:10px;padding:6px 10px;font-size:.8rem;font-family:monospace;white-space:nowrap;z-index:5;">
<span id="cpMagSw" style="width:22px;height:22px;border-radius:6px;border:2px solid #fff;display:inline-block;"></span>
<span id="cpMagHex">#000000</span>
</div>
</div>
<div class="hint">Move over the image to preview — click (or tap) to lock the color into your palette.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your color</p>
<div class="results show">
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;">
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
<div id="cpSwatch" style="width:84px;height:84px;border-radius:16px;border:1px solid var(--border,#e2e8f0);background:#888888;flex:none;"></div>
<div style="flex:1;min-width:200px;">
<div class="setting" style="margin:4px 0;"><label>HEX</label><div style="display:flex;gap:8px;"><input type="text" id="cpHex" class="tool-input tool-output" readonly value="#888888"><button type="button" class="btn-pro-outline" data-copy="cpHex">Copy</button></div></div>
<div class="setting" style="margin:4px 0;"><label>RGB</label><div style="display:flex;gap:8px;"><input type="text" id="cpRgb" class="tool-input tool-output" readonly value="rgb(136, 136, 136)"><button type="button" class="btn-pro-outline" data-copy="cpRgb">Copy</button></div></div>
<div class="setting" style="margin:4px 0;"><label>HSL</label><div style="display:flex;gap:8px;"><input type="text" id="cpHsl" class="tool-input tool-output" readonly value="hsl(0, 0%, 53%)"><button type="button" class="btn-pro-outline" data-copy="cpHsl">Copy</button></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">4</span> Palette history</p>
<div class="results show">
<p class="result-head">🎨 Picked colors <span class="val" id="cpPalCount">0</span> <span style="color:var(--muted);font-weight:400;">— click any swatch to copy its HEX</span></p>
<div class="result-summary" id="cpPalEmpty">Nothing picked yet — click on the image above to start building your palette.</div>
<div id="cpPalette" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;"></div>
</div>
<div class="tool-actions" style="margin-top:12px;">
<button type="button" class="btn-pro-outline" id="cpCopyPal" disabled>📋 Copy palette</button>
<button type="button" class="btn-pro-outline" id="cpClearPal" disabled>Clear palette</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Pick colors from unlimited images — everything runs privately in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('cpShell');
ToolPro.themeToggle(shell, document.getElementById('cpTheme'));
var canvas = document.getElementById('cpCanvas');
var ctx = canvas.getContext('2d', {willReadFrequently: true});
var stage = document.getElementById('cpStage');
var stageWrap = document.getElementById('cpStageWrap');
var mag = document.getElementById('cpMag');
var magSw = document.getElementById('cpMagSw');
var magHex = document.getElementById('cpMagHex');
var swatch = document.getElementById('cpSwatch');
var hexEl = document.getElementById('cpHex');
var rgbEl = document.getElementById('cpRgb');
var hslEl = document.getElementById('cpHsl');
var palBox = document.getElementById('cpPalette');
var palEmpty = document.getElementById('cpPalEmpty');
var palCount = document.getElementById('cpPalCount');
var copyPalBtn = document.getElementById('cpCopyPal');
var clearPalBtn = document.getElementById('cpClearPal');
var eyeBtn = document.getElementById('cpEye');
var eyeNote = document.getElementById('cpEyeNote');

var palette = [];
var imgLoaded = false;

function toHex(r, g, b){
  function h(v){ v = Math.max(0, Math.min(255, Math.round(v))); return ('0' + v.toString(16)).slice(-2); }
  return ('#' + h(r) + h(g) + h(b)).toUpperCase();
}
function toHsl(r, g, b){
  r /= 255; g /= 255; b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h = 0, s = 0, l = (max + min) / 2;
  if(max !== min){
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if(max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if(max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return 'hsl(' + Math.round(h) + ', ' + Math.round(s * 100) + '%, ' + Math.round(l * 100) + '%)';
}

function setColor(r, g, b){
  var hex = toHex(r, g, b);
  var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  var hsl = toHsl(r, g, b);
  swatch.style.background = hex;
  hexEl.value = hex; rgbEl.value = rgb; hslEl.value = hsl;
}

function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
}
function copyText(t, label){
  function done(){ ToolPro.toast((label ? label + ' ' : '') + 'copied to clipboard', 'ok'); }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(done, function(){ fallbackCopy(t); done(); });
  } else { fallbackCopy(t); done(); }
}

document.querySelectorAll('[data-copy]').forEach(function(btn){
  btn.addEventListener('click', function(){
    copyText(document.getElementById(btn.getAttribute('data-copy')).value, 'Color code');
  });
});

function refreshPalette(){
  palCount.textContent = palette.length;
  copyPalBtn.disabled = !palette.length;
  clearPalBtn.disabled = !palette.length;
  palEmpty.style.display = palette.length ? 'none' : '';
  palBox.innerHTML = '';
  palette.forEach(function(hex){
    var b = document.createElement('button');
    b.type = 'button';
    b.title = hex + ' — click to copy';
    b.style.cssText = 'width:52px;height:52px;border-radius:12px;border:2px solid rgba(0,0,0,.15);cursor:pointer;background:' + hex + ';';
    b.addEventListener('click', function(){ copyText(hex, hex); });
    palBox.appendChild(b);
  });
}
function addToPalette(hex){
  if(palette[palette.length - 1] === hex) return;
  palette.push(hex);
  if(palette.length > 24) palette.shift();
  refreshPalette();
}

copyPalBtn.addEventListener('click', function(){
  copyText(palette.join(', '), 'Palette');
});
clearPalBtn.addEventListener('click', function(){
  palette = []; refreshPalette();
  ToolPro.toast('Palette cleared');
});

function pickAt(clientX, clientY){
  var rect = canvas.getBoundingClientRect();
  var x = Math.floor((clientX - rect.left) * (canvas.width / rect.width));
  var y = Math.floor((clientY - rect.top) * (canvas.height / rect.height));
  if(x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return null;
  var d = ctx.getImageData(x, y, 1, 1).data;
  return {r: d[0], g: d[1], b: d[2], x: x, y: y};
}

canvas.addEventListener('pointermove', function(e){
  if(!imgLoaded) return;
  var p = pickAt(e.clientX, e.clientY);
  if(!p){ mag.style.display = 'none'; return; }
  setColor(p.r, p.g, p.b);
  var hex = toHex(p.r, p.g, p.b);
  magSw.style.background = hex;
  magHex.textContent = hex;
  mag.style.display = 'flex';
  var sRect = stage.getBoundingClientRect();
  var lx = e.clientX - sRect.left + 16;
  var ly = e.clientY - sRect.top - 44;
  if(lx + 150 > sRect.width) lx = e.clientX - sRect.left - 150;
  if(ly < 0) ly = e.clientY - sRect.top + 20;
  mag.style.left = lx + 'px';
  mag.style.top = ly + 'px';
});
canvas.addEventListener('pointerleave', function(){ mag.style.display = 'none'; });
canvas.addEventListener('click', function(e){
  if(!imgLoaded) return;
  var p = pickAt(e.clientX, e.clientY);
  if(!p) return;
  setColor(p.r, p.g, p.b);
  addToPalette(toHex(p.r, p.g, p.b));
  ToolPro.toast('Color added to palette', 'ok');
});

function loadImageFile(file){
  if(!file || file.type.indexOf('image/') !== 0){ ToolPro.toast('Please choose an image file'); return; }
  var url = URL.createObjectURL(file);
  var img = new Image();
  img.onload = function(){
    var maxW = 860;
    var scale = Math.min(1, maxW / img.naturalWidth);
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    imgLoaded = true;
    stageWrap.style.display = '';
    stageWrap.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    ToolPro.toast('Image loaded — hover and click to pick colors', 'ok');
  };
  img.onerror = function(){ URL.revokeObjectURL(url); ToolPro.toast('Could not read that image'); };
  img.src = url;
}

ToolPro.dropzone(document.getElementById('cpDrop'), {
  multiple: false,
  accept: 'image/*',
  maxFiles: 1,
  onFiles: function(arr){ if(arr.length) loadImageFile(arr[0]); }
});
document.getElementById('cpFile').addEventListener('change', function(e){
  if(e.target.files.length) loadImageFile(e.target.files[0]);
  e.target.value = '';
});

if('EyeDropper' in window){
  eyeBtn.style.display = '';
  eyeNote.style.display = 'none';
  eyeBtn.addEventListener('click', function(){
    var ed = new EyeDropper();
    ed.open().then(function(res){
      var m = res.sRGBHex.match(/^#?([0-9a-f]{6})$/i);
      if(!m) return;
      var hex = ('#' + m[1]).toUpperCase();
      var r = parseInt(m[1].slice(0, 2), 16), g = parseInt(m[1].slice(2, 4), 16), b = parseInt(m[1].slice(4, 6), 16);
      setColor(r, g, b);
      addToPalette(hex);
      ToolPro.toast('Screen color picked: ' + hex, 'ok');
    }).catch(function(){ /* user cancelled */ });
  });
}

refreshPalette();
})();
</script>

## How it works

**Step 1** — drop any image (JPG, PNG, WebP, GIF) onto the upload zone. **Step 2** — move your cursor over the image: a magnifier follows showing the live HEX under the pointer. **Click** (or tap) to lock that color in — its HEX, RGB, and HSL codes appear with copy buttons, and the swatch joins your palette history. On Chrome and Edge you can also use the **EyeDropper** button to sample colors from anywhere on your screen.

## Everyday uses

- **Designers** — grab exact brand colors from a client's logo or screenshot in seconds.
- **Bloggers & developers** — match your site's palette to a hero image or featured graphic.
- **DIY & home decor** — sample paint, fabric, or furniture colors from photos for matching accents.
- **Students** — pull precise colors from reference images for art and design projects.
- **Marketers** — build a consistent palette from campaign imagery for thumbnails and ads.

**Pro tip:** click several related areas of an image (light, mid, shadow) to build a natural 3–5 color palette instantly.

## FAQ

**Is this color picker really free?**
Yes — 100% free forever, unlimited images and picks, no sign-up, no credit card.

**Is my image uploaded anywhere?**
No. Your image is drawn to a canvas in your own browser and never sent to any server — completely private.

**What is the EyeDropper button?**
It's a built-in browser feature (Chrome/Edge) that lets you sample a color from anywhere on your screen, even outside the page. If your browser doesn't support it, the button hides itself and image upload works instead.

**Why do the codes sometimes differ from what I see?**
Images are compressed (especially JPEGs), so neighboring pixels vary slightly. Zoom into the area you care about in the magnifier and click the exact pixel you want for the most accurate read.
