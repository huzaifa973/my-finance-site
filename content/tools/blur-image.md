---
title: "Free Image Blur Tool — Blur Parts of a Photo Online"
description: "Blur faces, license plates, or whole images online. Paint-to-blur brush with adjustable size and strength — free forever, no sign-up, files stay private."
category: image
date: 2026-10-24
draft: false
---

Need to hide a face, a license plate, or a messy background? Paint a blur exactly where you want it — or blur the whole photo in one click. This free image blur tool works entirely in your browser with an adjustable brush, real blur-strength control, and instant PNG/JPEG download. Nothing is uploaded; everything runs on your device.

<div class="tool-shell" id="biShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Blur Tool</h2>
<p>Paint blur over faces, plates &amp; secrets — or blur the whole photo in one click.</p>
</div>
<button type="button" class="theme-toggle" id="biTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your photo</p>
<div class="dropzone" id="biDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your photo here</strong><span>or click to browse — JPG, PNG, WebP up to 10 MB</span><input type="file" id="biFile" accept="image/*"></div><ul class="file-list" id="biList"></ul>
<div class="canvas-stage" style="position:relative;max-width:100%;display:none;" id="biStage">
<canvas id="biCanvas" style="max-width:100%;height:auto;border-radius:12px;cursor:crosshair;touch-action:none;"></canvas>
</div>
<div class="hint" style="text-align:center;">🖌️ Once your photo loads, paint over anything you want to blur. Use Undo to step back, or a preset below.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Brush &amp; blur settings</p>
<div class="settings-panel">
<div class="preset-row" id="biPresets">
<button type="button" class="preset-chip" data-preset="manual">🖌️ Manual brush</button>
<button type="button" class="preset-chip" data-preset="whole">🖼️ Blur whole image</button>
<button type="button" class="preset-chip" data-preset="edges">🎯 Blur edges (focus center)</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="biBrush">Brush size: <span class="val" id="biBrushVal">60 px</span></label><input type="range" id="biBrush" min="10" max="300" step="5" value="60"><div class="hint">Bigger brush covers faces and plates in fewer strokes.</div></div>
<div class="setting"><label for="biStrength">Blur strength: <span class="val" id="biStrengthVal">12 px</span></label><input type="range" id="biStrength" min="2" max="40" step="1" value="12"><div class="hint">Higher values make the blurred area unrecognizable. 10–15 px is the privacy sweet spot.</div></div>
<div class="setting"><label for="biFormat">Output format</label><select id="biFormat" class="tool-input"><option value="image/jpeg">JPEG — smallest</option><option value="image/png">PNG — lossless</option></select><div class="hint">Faces note: this tool has no auto face-detection — use the brush around each face.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="biUndo" disabled>↩ Undo stroke</button>
<button type="button" class="btn-pro" id="biDownload" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download image
</button>
<button type="button" class="btn-pro-outline" id="biReset" disabled>Reset edits</button>
</div>
<div class="progress-wrap" id="biProgWrap">
<div class="progress-bar"><i id="biProgBar"></i></div>
<div class="progress-text" id="biProgText">Applying blur…</div>
</div>
<div class="results" id="biResults">
<p class="result-head">🖼️ Your blurred photo</p>
<div class="result-summary" id="biSummary">Add a photo and paint — or hit a preset — to get started.</div>
<div class="result-grid" id="biGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Blur unlimited photos — your images never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('biShell');
ToolPro.themeToggle(shell,document.getElementById('biTheme'));
var drop=document.getElementById('biDrop'),listEl=document.getElementById('biList'),
stage=document.getElementById('biStage'),canvas=document.getElementById('biCanvas'),
ctx=canvas.getContext('2d'),brushR=document.getElementById('biBrush'),brushV=document.getElementById('biBrushVal'),
strR=document.getElementById('biStrength'),strV=document.getElementById('biStrengthVal'),
fmtSel=document.getElementById('biFormat'),presets=document.getElementById('biPresets'),
undoBtn=document.getElementById('biUndo'),dlBtn=document.getElementById('biDownload'),resetBtn=document.getElementById('biReset'),
resBox=document.getElementById('biResults'),summaryEl=document.getElementById('biSummary'),
gridEl=document.getElementById('biGrid'),progWrap=document.getElementById('biProgWrap'),
progBar=document.getElementById('biProgBar'),progText=document.getElementById('biProgText');
ToolPro.bindSlider(brushR,brushV,function(v){return v+' px';});
ToolPro.bindSlider(strR,strV,function(v){return v+' px';});

var img=null,imgName='',strokes=[],painting=false,origData=null;

/* Build a fully-blurred copy of the image at current strength */
function blurredCanvas(){
var str=parseInt(strR.value,10);
var bc=document.createElement('canvas');
bc.width=canvas.width;bc.height=canvas.height;
var bctx=bc.getContext('2d');
bctx.filter='blur('+str+'px)';
bctx.drawImage(img,0,0,canvas.width,canvas.height);
return bc;
}

/* Composite: blurred base + original with painted strokes erased */
function render(){
if(!img)return;
if(strokes.some(function(s){return s.whole;})){
var str=parseInt(strR.value,10);
ctx.save();ctx.filter='none';
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.filter='blur('+str+'px)';
ctx.drawImage(img,0,0,canvas.width,canvas.height);
ctx.restore();
return;
}
var bc=blurredCanvas();
ctx.save();
ctx.filter='none';
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(bc,0,0);
/* Draw original image through a mask: start from saved original pixels,
   knock out painted strokes via destination-out mask */
var base=document.createElement('canvas');
base.width=canvas.width;base.height=canvas.height;
var bx=base.getContext('2d');
bx.drawImage(img,0,0,canvas.width,canvas.height);
bx.globalCompositeOperation='destination-out';
var r=parseInt(brushR.value,10)/2;
strokes.forEach(function(s){
bx.lineWidth=r*2;bx.lineCap='round';bx.lineJoin='round';
bx.strokeStyle='rgba(0,0,0,1)';
bx.beginPath();
if(s.pts.length===1){bx.arc(s.pts[0].x,s.pts[0].y,r,0,7);bx.fill();}
else{bx.moveTo(s.pts[0].x,s.pts[0].y);for(var i=1;i<s.pts.length;i++)bx.lineTo(s.pts[i].x,s.pts[i].y);bx.stroke();}
});
ctx.drawImage(base,0,0);
ctx.restore();
}

function posOf(e){
var rct=canvas.getBoundingClientRect();
var cx=(e.touches&&e.touches[0])?e.touches[0].clientX:e.clientX;
var cy=(e.touches&&e.touches[0])?e.touches[0].clientY:e.clientY;
return {x:(cx-rct.left)*canvas.width/rct.width,y:(cy-rct.top)*canvas.height/rct.height};
}

canvas.addEventListener('pointerdown',function(e){
if(!img)return;
painting=true;strokes.push({pts:[posOf(e)]});
canvas.setPointerCapture&&canvas.setPointerCapture(e.pointerId);
e.preventDefault();
});
canvas.addEventListener('pointermove',function(e){
if(!painting)return;
strokes[strokes.length-1].pts.push(posOf(e));
render();
});
window.addEventListener('pointerup',function(){
if(painting){painting=false;undoBtn.disabled=false;resetBtn.disabled=false;dlBtn.disabled=false;}
});

function loadFile(file){
if(!file.type||file.type.indexOf('image/')!==0){ToolPro.toast('Please choose an image file.','err');return;}
if(file.size>10*1048576){ToolPro.toast('Image is over 10 MB — pick a smaller one.','err');return;}
var url=URL.createObjectURL(file);
var im=new Image();
im.onload=function(){
var scale=Math.min(1,1400/Math.max(im.naturalWidth,im.naturalHeight));
canvas.width=Math.round(im.naturalWidth*scale);
canvas.height=Math.round(im.naturalHeight*scale);
img=im;imgName=file.name.replace(/\.[^.]+$/,'');strokes=[];
stage.style.display='block';
render();
origData=true;
listEl.innerHTML='';
ToolPro.fileRow(listEl,file,function(){img=null;stage.style.display='none';dlBtn.disabled=true;resetBtn.disabled=true;undoBtn.disabled=true;});
dlBtn.disabled=false;resetBtn.disabled=false;
summaryEl.textContent='✅ Photo loaded ('+canvas.width+'×'+canvas.height+'). Paint to blur, or apply a preset.';
resBox.classList.add('show');
ToolPro.toast('Photo loaded — paint to blur','ok');
};
im.onerror=function(){ToolPro.toast('Could not read that image.','err');};
im.src=url;
}

ToolPro.dropzone(drop,{multiple:false,accept:'image/*',onFiles:function(files){if(files[0])loadFile(files[0]);}});

brushR.addEventListener('input',render);
strR.addEventListener('input',render);

presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');
if(!img){ToolPro.toast('Add a photo first.','err');return;}
progWrap.classList.add('show');progBar.style.width='10%';progText.textContent='Applying blur…';
setTimeout(function(){
var w=canvas.width,h=canvas.height,r=parseInt(brushR.value,10)/2;
if(chip.dataset.preset==='whole'){
strokes=[{whole:true}];
renderWhole();
}else if(chip.dataset.preset==='edges'){
strokes=[];
var rad=Math.max(w,h)*0.28;
for(var cx=0;cx<w;cx+=r*2){strokes.push({pts:[{x:cx,y:0},{x:cx,y:h/2-rad}]});strokes.push({pts:[{x:cx,y:h/2+rad},{x:cx,y:h}]});}
for(var cy=0;cy<h;cy+=r*2){strokes.push({pts:[{x:0,y:cy},{x:w/2-rad,y:cy}]});strokes.push({pts:[{x:w/2+rad,y:cy},{x:w,y:cy}]});}
render();
}else{
strokes=[];render();
}
progBar.style.width='100%';progText.textContent='Done';
setTimeout(function(){progWrap.classList.remove('show');},600);
undoBtn.disabled=resetBtn.disabled=dlBtn.disabled=false;
summaryEl.textContent='✅ Preset applied: '+chip.textContent.trim()+'.';
ToolPro.toast('Preset applied: '+chip.textContent.trim());
},30);
});

function renderWhole(){
/* whole-image: redraw canvas fully blurred */
var str=parseInt(strR.value,10);
ctx.save();
ctx.filter='none';
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.filter='blur('+str+'px)';
ctx.drawImage(img,0,0,canvas.width,canvas.height);
ctx.restore();
}

undoBtn.addEventListener('click',function(){
if(!strokes.length)return;
strokes.pop();
render();
if(!strokes.length){undoBtn.disabled=true;}
ToolPro.toast('Stroke undone');
});

resetBtn.addEventListener('click',function(){
if(!img)return;
strokes=[];
render();
undoBtn.disabled=true;
ToolPro.toast('Edits cleared');
});

dlBtn.addEventListener('click',function(){
if(!img)return;
var type=fmtSel.value,ext=type==='image/png'?'png':'jpg';
canvas.toBlob(function(blob){
if(!blob){ToolPro.toast('Export failed — try again.','err');return;}
var url=URL.createObjectURL(blob);
var name=(imgName||'blurred')+'-blurred.'+ext;
ToolPro.download(url,name);
setTimeout(function(){URL.revokeObjectURL(url);},60000);
var kb=(blob.size/1024).toFixed(1);
gridEl.innerHTML='';
var card=document.createElement('div');
card.className='result-card';
card.innerHTML='<div class="r-name">Downloaded</div><div class="r-stats"></div>';
card.querySelector('.r-stats').textContent=name+' · '+kb+' KB · blur strength '+strR.value+' px';
gridEl.appendChild(card);
summaryEl.textContent='✅ Downloaded '+name+' ('+kb+' KB).';
resBox.classList.add('show');
ToolPro.toast('Image downloaded ✓','ok');
},type,0.92);
});
})();
</script>

## How it works

Add a photo, then paint over anything private — faces, license plates, house numbers, card details — with the brush. The tool layers a fully blurred copy of your image underneath and erases the sharp top layer along each stroke, so the blurred area appears exactly where you paint. Brush size and blur strength are adjustable; presets cover the whole image or blur the edges for a focus-centered look. Download the result as JPEG or PNG.

## Everyday uses

- **Social media** — blur other people's faces before posting group photos.
- **Marketplace listings** — hide license plates, serial numbers and house numbers in listing photos.
- **Screenshots** — redact names, balances and addresses before sharing.
- **Portraits** — blur messy backgrounds for a focus-centered look.

**Privacy:** the blur is baked into the downloaded pixels — but remember, extreme de-blurring research exists, so use a high blur strength (15+ px) for anything truly sensitive. Your photo never leaves your browser.
