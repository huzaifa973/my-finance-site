---
title: "Free PDF to SVG Converter — Save Every PDF Page as a Vector SVG"
description: "Convert PDF to SVG online: every page becomes a scalable SVG file, zipped for download. Free forever, no sign-up, files never leave your browser."
category: pdf
date: 2026-10-16
draft: false
---

Need PDF pages as graphics you can scale forever? This free PDF to SVG converter renders each page and wraps it in a proper SVG file (with the page embedded as a high-resolution image inside vector markup), then zips all pages for one download. Ideal for designers, printers, and developers.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<div class="tool-shell" id="psvgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to SVG Converter</h2>
<p>Save every PDF page as a scalable SVG file — crisp at any size, free.</p>
</div>
<button type="button" class="theme-toggle" id="psvgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDF</p>
<div class="dropzone" id="psvgDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF here</strong><span>or click to browse — one PDF at a time</span><input type="file" id="psvgFile" accept="application/pdf"></div><ul class="file-list" id="psvgList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="psvgPresets">
<button type="button" class="preset-chip active" data-preset="🖼️ Print — high resolution">🖼️ Print — high resolution</button>
<button type="button" class="preset-chip" data-preset="🌐 Web — balanced">🌐 Web — balanced</button>
<button type="button" class="preset-chip" data-preset="⚡ Draft — tiny files">⚡ Draft — tiny files</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="psvgScale">Render resolution: <span class="val" id="psvgScaleVal">2x</span></label><input type="range" id="psvgScale" min="1" max="3" step="0.5" value="2"><div class="hint">Higher resolution = sharper SVGs but larger files.</div></div><div class="setting"><label for="psvgFmt">Embedded image format</label><select id="psvgFmt"><option value="png" selected>PNG — sharpest</option><option value="jpeg">JPEG — smaller</option></select><div class="hint">The page image sits inside the SVG; PNG keeps text crisp.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">White page background</span><label class="toggle"><input type="checkbox" id="psvgBg" checked><span class="slider"></span></label></div><div class="hint">Keeps transparent PDFs looking right in viewers.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert to SVG</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="psvgBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to SVG
</button>
<button type="button" class="btn-pro-outline" id="psvgClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="psvgProgWrap">
<div class="progress-bar"><i id="psvgProgBar"></i></div>
<div class="progress-text" id="psvgProgText">Working…</div>
</div>
<div class="results" id="psvgResults">
<p class="result-head">✅ Done — your SVG pages</p>
<div class="result-summary" id="psvgSummary"></div>
<div class="result-grid" id="psvgGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited PDFs to SVG — every page as its own scalable file.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('psvgShell');
ToolPro.themeToggle(shell,document.getElementById('psvgTheme'));
if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}
var files=[],listEl=document.getElementById('psvgList'),btn=document.getElementById('psvgBtn'),
clearBtn=document.getElementById('psvgClear'),scaleR=document.getElementById('psvgScale'),
scaleV=document.getElementById('psvgScaleVal'),fmtSel=document.getElementById('psvgFmt'),
bgT=document.getElementById('psvgBg'),presets=document.getElementById('psvgPresets');
ToolPro.bindSlider(scaleR,scaleV,function(v){return v+'x';});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Web')>-1){scaleR.value='1.5';fmtSel.value='jpeg';}
else if(t.indexOf('Draft')>-1){scaleR.value='1';fmtSel.value='jpeg';}
else{scaleR.value='2';fmtSel.value='png';}
scaleR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+t.trim());
});
function refresh(){btn.disabled=!files.length;clearBtn.disabled=!files.length;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert to SVG';}
ToolPro.dropzone(document.getElementById('psvgDrop'),{multiple:false,accept:'application/pdf',
onFiles:function(arr){files=arr.slice(0,1);listEl.innerHTML='';
files.forEach(function(f){ToolPro.fileRow(listEl,f,function(){files=[];refresh();});});
document.getElementById('psvgResults').classList.remove('show');refresh();ToolPro.toast('PDF added','ok');}});
clearBtn.addEventListener('click',function(){files=[];listEl.innerHTML='';
document.getElementById('psvgResults').classList.remove('show');refresh();});
btn.addEventListener('click',async function(){
if(!files.length||!window.pdfjsLib||!window.JSZip){ToolPro.toast('Libraries are still loading — try again in a moment','err');return;}
var wrap=document.getElementById('psvgProgWrap'),bar=document.getElementById('psvgProgBar'),
txt=document.getElementById('psvgProgText'),grid=document.getElementById('psvgGrid'),
resBox=document.getElementById('psvgResults');
btn.disabled=true;wrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
try{
txt.textContent='Reading PDF…';bar.style.width='5%';
var scale=parseFloat(scaleR.value),fmt=fmtSel.value,
mime=fmt==='jpeg'?'image/jpeg':'image/png';
var pdf=await pdfjsLib.getDocument({data:await files[0].arrayBuffer()}).promise;
var n=pdf.numPages,zip=new JSZip(),totalBytes=0;
for(var i=1;i<=n;i++){
txt.textContent='Rendering page '+i+' of '+n+'…';
bar.style.width=Math.round(i/n*90)+'%';
var pg=await pdf.getPage(i),vp=pg.getViewport({scale:scale});
var cv=document.createElement('canvas');cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
var ctx=cv.getContext('2d');
if(bgT.checked){ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);}
await pg.render({canvasContext:ctx,viewport:vp}).promise;
var durl=cv.toDataURL(mime,0.92);
var svg='<?xml version="1.0" encoding="UTF-8"?>\n'+
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+cv.width+'" height="'+cv.height+'" viewBox="0 0 '+cv.width+' '+cv.height+'">\n'+
'<image x="0" y="0" width="'+cv.width+'" height="'+cv.height+'" xlink:href="'+durl+'" href="'+durl+'"/>\n</svg>';
totalBytes+=svg.length;
zip.file('page-'+i+'.svg',svg);
}
txt.textContent='Zipping SVGs…';bar.style.width='96%';
var base=files[0].name.replace(/\.[^.]+$/,'');
var zb=await zip.generateAsync({type:'blob',compression:'DEFLATE'});
var url=URL.createObjectURL(zb);bar.style.width='100%';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download ZIP</button>';
card.querySelector('.r-name').textContent=base+'-svg-pages.zip';
card.querySelector('.r-stats').textContent=n+' SVG pages · '+ToolPro.fmtBytes(zb.size);
card.querySelector('button').addEventListener('click',function(){ToolPro.download(url,base+'-svg-pages.zip');});
grid.appendChild(card);
document.getElementById('psvgSummary').textContent='🎉 '+n+' PDF pages converted to individual SVG files, zipped.';
wrap.classList.remove('show');resBox.classList.add('show');
resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('SVGs ready','ok');
}catch(err){txt.textContent='Could not convert that PDF. It may be password-protected or damaged.';
ToolPro.toast('Conversion failed','err');}
btn.disabled=false;
});
refresh();
})();

</script>

## How it works

- **Step 1** — Drop in your PDF. Pages are rendered locally with PDF.js; nothing is uploaded.
- **Step 2** — Choose the render resolution and the image format embedded in each SVG.
- **Step 3** — Each page is wrapped in standards-compliant SVG markup (&lt;image&gt; with a data URI) and all pages download as one ZIP.

## Everyday uses

- **Designers** — pull PDF pages into Illustrator, Figma, or Inkscape as placeable graphics.
- **Printers** — get scalable page art that stays sharp at any output size.
- **Developers** — embed PDF pages as inline SVG in web projects.
- **Marketers** — reuse report pages as crisp social-media graphics.

**Tip:** 2x resolution gives print-sharp results without huge file sizes.