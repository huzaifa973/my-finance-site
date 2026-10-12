---
title: "Free Image Watermark Adder — Add Text Watermarks Online"
description: "Add a text watermark to JPG, PNG or WebP images in your browser. Control position, opacity, size and tiling. Free, private, no sign-up, no uploads."
category: image
date: 2026-10-12
draft: false
---

Protect your photos before they travel. Add a text watermark — your name, brand, or © line — with full control over position, opacity, size, and color, including a tiled repeat pattern that is hard to crop out. The image is processed on a canvas in your browser; the original file never leaves your device and is never modified.

<div class="tool-shell" id="imageWatermarkShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3L2 8.5V11h20V8.5L12 3zm-5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4 13v7a1 1 0 001 1h14a1 1 0 001-1v-7H4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Watermark Adder</h2>
<p>Stamp your name or brand on photos before you share them — positioned, tiled, and opacity-tuned, all in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="imageWatermarkTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your image</p>
<div class="dropzone" id="wmDz">
<input type="file" hidden>
<p>📂 Drag &amp; drop your file here, or <strong>click to browse</strong></p>
<p class="hint">JPG, PNG or WebP — processed locally, never uploaded.</p>
</div>
<ul class="file-list" id="wmList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Watermark settings</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" data-wm-pos="bottom-right">↘ Bottom right</button>
<button type="button" class="preset-chip" data-wm-pos="center">⊙ Center</button>
<button type="button" class="preset-chip" data-wm-pos="tile">▦ Tiled</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Watermark text</span><input type="text" class="tool-input" id="wmText" value="© My Brand"></div>
<div class="setting"><span class="t-label">Position</span><select class="tool-input" id="wmPos"><option value="bottom-right">Bottom right</option><option value="bottom-left">Bottom left</option><option value="top-right">Top right</option><option value="top-left">Top left</option><option value="center">Center</option><option value="tile">Tiled repeat</option></select></div>
<div class="setting"><span class="t-label">Opacity</span><input type="range" id="wmOpacity" min="5" max="100" value="45"><span class="val" id="wmOpacityVal">45</span></div>
<div class="setting"><span class="t-label">Text size</span><input type="range" id="wmSize" min="12" max="120" value="36"><span class="val" id="wmSizeVal">36</span></div>
<div class="setting"><span class="t-label">Text color</span><input type="color" class="tool-input" id="wmColor" value="#ffffff"></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Stamp &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wmGo">
🖋️ Apply watermark
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="wmRes">
<p class="result-head">✅ Watermarked image</p>
<div class="result-summary" id="wmResSummary"></div>
<div class="result-grid" id="wmResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Watermark unlimited photos — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('imageWatermarkShell');
ToolPro.themeToggle(shell, document.getElementById('imageWatermarkTheme'));
var img=null, fname='image';
ToolPro.dropzone(document.getElementById('wmDz'), {accept:'image/*', onFiles:function(files){
  var f=files[0]; if(!f) return; fname=f.name.replace(/\.[^.]+$/,'');
  var list=document.getElementById('wmList'); list.innerHTML='';
  ToolPro.fileRow(list, f, function(){ img=null; });
  var url=URL.createObjectURL(f); var im=new Image();
  im.onload=function(){ img=im; ToolPro.toast('Image loaded','ok'); }; im.src=url;
}});
ToolPro.bindSlider(document.getElementById('wmOpacity'), document.getElementById('wmOpacityVal'), function(v){ return v+'%'; });
ToolPro.bindSlider(document.getElementById('wmSize'), document.getElementById('wmSizeVal'), function(v){ return v+'px'; });
document.querySelectorAll('[data-wm-pos]').forEach(function(b){ b.addEventListener('click', function(){ document.getElementById('wmPos').value=b.getAttribute('data-wm-pos'); }); });
document.getElementById('wmGo').addEventListener('click', function(){
  if(!img){ ToolPro.toast('Add an image first','err'); return; }
  var text=document.getElementById('wmText').value.trim(); if(!text){ ToolPro.toast('Enter watermark text','err'); return; }
  var pos=document.getElementById('wmPos').value;
  var op=parseInt(document.getElementById('wmOpacity').value,10)/100;
  var size=parseInt(document.getElementById('wmSize').value,10);
  var color=document.getElementById('wmColor').value;
  var cv=document.createElement('canvas'); cv.width=img.naturalWidth; cv.height=img.naturalHeight;
  var cx=cv.getContext('2d'); cx.drawImage(img,0,0);
  cx.font='bold '+size+'px Arial, sans-serif'; cx.fillStyle=color; cx.globalAlpha=op;
  cx.shadowColor='rgba(0,0,0,0.45)'; cx.shadowBlur=Math.max(2,size/12);
  var tw=cx.measureText(text).width, pad=Math.round(size*0.6);
  function stamp(x,y){ cx.fillText(text,x,y); }
  if(pos==='bottom-right') stamp(cv.width-tw-pad, cv.height-pad);
  else if(pos==='bottom-left') stamp(pad, cv.height-pad);
  else if(pos==='top-right') stamp(cv.width-tw-pad, pad+size);
  else if(pos==='top-left') stamp(pad, pad+size);
  else if(pos==='center') stamp((cv.width-tw)/2, cv.height/2);
  else if(pos==='tile'){ cx.save(); cx.translate(cv.width/2, cv.height/2); cx.rotate(-Math.PI/7); var stepX=tw+size*2, stepY=size*3.2;
    for(var y=-cv.height; y<cv.height; y+=stepY){ for(var x=-cv.width; x<cv.width; x+=stepX){ cx.fillText(text,x,y); } } cx.restore(); }
  cv.toBlob(function(blob){
    var url=URL.createObjectURL(blob);
    var res=document.getElementById('wmRes'); res.classList.add('show');
    document.getElementById('wmResSummary').textContent='Watermark applied at '+Math.round(op*100)+'% opacity. Your original file was not modified.';
    var grid=document.getElementById('wmResGrid'); grid.innerHTML='';
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<div class="r-preview"><img src="'+url+'" alt="Watermarked preview" style="max-width:100%;border-radius:8px"></div><p class="r-name">'+fname+'-watermarked.png</p><p class="r-stats">'+cv.width+' × '+cv.height+' px · '+ToolPro.fmtBytes(blob.size)+'</p>';
    var btn=document.createElement('button'); btn.type='button'; btn.className='btn-pro'; btn.textContent='⬇ Download PNG';
    btn.addEventListener('click', function(){ ToolPro.download(url, fname+'-watermarked.png'); });
    card.appendChild(btn); grid.appendChild(card);
    ToolPro.toast('Watermark applied','ok');
  }, 'image/png');
});
})();
</script>

## How it works

When you drop in an image, the tool loads it into an off-screen canvas at full resolution, draws your watermark text with the opacity, size, color, and position you chose (tiled mode rotates the canvas and repeats the text diagonally), then exports a brand-new PNG you can download. Nothing is uploaded — close the tab and the image is gone.

## Everyday uses

- **Photographers** — stamp proofs before sending them to clients.
- **Etsy &amp; marketplace sellers** — watermark product photos so listings cannot be copied cleanly.
- **Social creators** — brand Reels covers, pins, and thumbnails with your handle.
- **Real-estate agents** — mark listing photos with your agency name.

## Frequently asked questions

**Does watermarking reduce image quality?**

The tool exports a PNG at the image’s original dimensions, so there is no compression loss. The file may be larger than a JPG original.

**Can a watermark be removed?**

A visible watermark — especially a tiled one — makes casual reuse much harder, but no watermark is 100% removal-proof. Use it as a deterrent and proof of ownership, not as encryption.

**Is my photo uploaded to a server?**

Never. All drawing happens on a canvas in your browser and your file stays on your device.
