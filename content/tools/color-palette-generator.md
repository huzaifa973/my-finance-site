---
title: "Free Color Palette Generator — From Image or Harmony"
description: "Extract a color palette from any image or build harmony palettes from a base color. Copy HEX codes with one click. Free, private, no sign-up."
category: image
date: 2026-10-12
draft: false
---

Great design starts with the right colors. Upload a photo and this tool pulls out its dominant colors, or pick any base color and generate a complementary, analogous, triadic, split-complementary, or monochromatic palette. Click any swatch to copy its HEX code straight into your CSS, design app, or brand guide. Everything runs in your browser — your images never leave your device.

<div class="tool-shell" id="colorPaletteShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Color Palette Generator</h2>
<p>Extract colors from a photo or generate harmonious palettes from any base color — HEX codes, one-click copy.</p>
</div>
<button type="button" class="theme-toggle" id="colorPaletteTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload an image or pick a base color</p>
<div class="dropzone" id="palDz">
<input type="file" hidden>
<p>📂 Drag &amp; drop your file here, or <strong>click to browse</strong></p>
<p class="hint">Images only — processed locally on your device, never uploaded.</p>
</div>
<ul class="file-list" id="palList"></ul>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" data-pal-preset="harmony">🎨 Harmony mode</button>
<button type="button" class="preset-chip" data-pal-preset="image">🖼️ From image</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Base color</span><input type="color" class="tool-input" id="palBase" value="#2563eb"></div>
<div class="setting"><span class="t-label">Harmony type</span><select class="tool-input" id="palHarmony"><option value="complementary">Complementary</option><option value="analogous">Analogous</option><option value="triadic">Triadic</option><option value="split">Split complementary</option><option value="mono">Monochromatic</option></select></div>
<div class="setting"><span class="t-label">Colors to extract</span><input type="range" id="palCount" min="3" max="10" value="6"><span class="val" id="palCountVal">6</span></div>
</div>
<div class="hint">Upload a photo to extract its dominant colors, or skip the upload and build a harmony palette from any base color.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your palette</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="palGo">
🎨 Generate palette
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="palRes">
<p class="result-head">🎨 Palette — click any swatch to copy its HEX</p>
<div class="result-summary" id="palResSummary"></div>
<div class="result-grid" id="palResGrid"></div>
</div>
<div class="hint">Building a site or brand? Read our guide on <a href="/posts/how-to-choose-a-color-palette-for-your-website-or-brand/">how to choose a color palette</a> for pairing tips.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Extract unlimited palettes from your own images — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('colorPaletteShell');
ToolPro.themeToggle(shell, document.getElementById('colorPaletteTheme'));
var img=null, mode='harmony';
ToolPro.dropzone(document.getElementById('palDz'), {accept:'image/*', onFiles:function(files){
  var f=files[0]; if(!f) return;
  var list=document.getElementById('palList'); list.innerHTML='';
  ToolPro.fileRow(list, f, function(){ img=null; });
  var url=URL.createObjectURL(f); var im=new Image();
  im.onload=function(){ img=im; mode='image'; ToolPro.toast('Image loaded — hit Generate','ok'); };
  im.src=url;
}});
ToolPro.bindSlider(document.getElementById('palCount'), document.getElementById('palCountVal'));
document.querySelectorAll('[data-pal-preset]').forEach(function(b){ b.addEventListener('click', function(){ mode=b.getAttribute('data-pal-preset'); ToolPro.toast('Mode: '+mode); }); });
function hex(r,g,b){ return '#'+[r,g,b].map(function(v){ return Math.round(v).toString(16).padStart(2,'0'); }).join('').toUpperCase(); }
function hslHex(h,s,l){ h=((h%360)+360)%360; var c=(1-Math.abs(2*l-1))*s, x=c*(1-Math.abs((h/60)%2-1)), m=l-c/2, r=0,g=0,b=0;
  if(h<60){r=c;g=x;}else if(h<120){r=x;g=c;}else if(h<180){g=c;b=x;}else if(h<240){g=x;b=c;}else if(h<300){r=x;b=c;}else{r=c;b=x;}
  return hex((r+m)*255,(g+m)*255,(b+m)*255); }
function hexToHsl(hx){ var r=parseInt(hx.slice(1,3),16)/255,g=parseInt(hx.slice(3,5),16)/255,b=parseInt(hx.slice(5,7),16)/255;
  var mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,d=mx-mn,h=0;
  if(d){ var s=l>0.5?d/(2-mx-mn):d/(mx+mn); if(mx===r)h=((g-b)/d+(g<b?6:0))*60; else if(mx===g)h=((b-r)/d+2)*60; else h=((r-g)/d+4)*60; return [h,s,l]; }
  return [0,0,l]; }
function extract(n){
  var cv=document.createElement('canvas'); var w=100, h=Math.max(1,Math.round(100*img.height/img.width));
  cv.width=w; cv.height=h; var cx=cv.getContext('2d'); cx.drawImage(img,0,0,w,h);
  var d=cx.getImageData(0,0,w,h).data, buckets={};
  for(var i=0;i<d.length;i+=16){ var r=d[i]&0xE0, g=d[i+1]&0xE0, b=d[i+2]&0xE0, k=r+','+g+','+b;
    if(!buckets[k]) buckets[k]=[0,0,0,0]; buckets[k][0]+=d[i]; buckets[k][1]+=d[i+1]; buckets[k][2]+=d[i+2]; buckets[k][3]++; }
  return Object.values(buckets).sort(function(a,b){return b[3]-a[3];}).slice(0,n).map(function(v){ return hex(v[0]/v[3], v[1]/v[3], v[2]/v[3]); });
}
function harmony(){
  var base=document.getElementById('palBase').value, type=document.getElementById('palHarmony').value, hsl=hexToHsl(base), h=hsl[0], s=Math.max(hsl[1],0.45), l=hsl[2];
  var sets={complementary:[0,180,0,-180,30], analogous:[-40,-20,0,20,40], triadic:[0,120,240,0,120], split:[0,150,210,0,180], mono:[0,0,0,0,0]};
  var offs=sets[type]||sets.complementary, out=[];
  offs.forEach(function(o,i){ var ll = type==='mono' ? Math.min(0.85, Math.max(0.15, l + (i-2)*0.16)) : Math.min(0.8, Math.max(0.2, l + (i%2? 0.12 : -0.08))); out.push(hslHex(h+o, s, ll)); });
  return out;
}
document.getElementById('palGo').addEventListener('click', function(){
  var colors;
  if(mode==='image' && img){ colors=extract(parseInt(document.getElementById('palCount').value,10)); }
  else if(mode==='image' && !img){ ToolPro.toast('Upload an image first, or use Harmony mode','err'); return; }
  else { colors=harmony(); }
  var res=document.getElementById('palRes'); res.classList.add('show');
  document.getElementById('palResSummary').textContent = colors.length + ' colors — click a swatch to copy.';
  var grid=document.getElementById('palResGrid'); grid.innerHTML='';
  colors.forEach(function(c){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<div class="r-preview" style="height:64px;border-radius:8px;background:'+c+'"></div><p class="r-name">'+c+'</p><p class="r-stats">Click to copy HEX</p>';
    card.addEventListener('click', function(){ ToolPro.copyText(c, 'Copied '+c); });
    grid.appendChild(card);
  });
  ToolPro.toast('Palette ready','ok');
});
})();
</script>

## How it works

Upload an image and the tool draws it to a small off-screen canvas, samples the pixels, groups similar colors into buckets, and averages the most common buckets into your palette. In harmony mode it converts your base color to HSL and rotates the hue by the classic color-theory angles for the harmony you picked. Either way the math happens locally — no image is ever uploaded to a server.

## Everyday uses

- **Web designers** — pull a palette from a hero photo so headings, buttons, and backgrounds match the imagery.
- **Brand builders** — start from one brand color and generate a full, balanced palette in seconds.
- **Social creators** — match post graphics to a product photo for a consistent feed.
- **Developers** — grab HEX codes and drop them straight into CSS variables.

## Frequently asked questions

**Is my image uploaded anywhere?**

No. The image is read and sampled entirely in your browser using the canvas API. Nothing is sent to a server, which is why the tool works instantly.

**How many colors can I extract?**

Between 3 and 10 dominant colors. Six is a good default for most designs — enough range without losing the photo’s character.

**What is the difference between harmony types?**

Complementary pairs opposite hues for contrast, analogous uses neighbors for a calm feel, triadic spaces three hues evenly, split-complementary softens the complementary contrast, and monochromatic varies one hue’s lightness.
