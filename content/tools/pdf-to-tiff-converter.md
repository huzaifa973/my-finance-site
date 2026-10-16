---
title: "Free PDF to TIFF Converter — Multi-Page TIFFs for Print & Fax"
description: "Convert PDF to multi-page TIFF online with a real baseline TIFF writer in pure JavaScript. Free forever, no sign-up, files never leave your browser."
category: pdf
date: 2026-10-16
draft: false
---

TIFF is the workhorse format of printing, archiving, and faxing — and multi-page TIFFs keep whole documents in one file. This free PDF to TIFF converter renders each page and writes a genuine baseline multi-page TIFF in pure JavaScript. No uploads, no watermarks.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<div class="tool-shell" id="tiffShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to TIFF Converter</h2>
<p>Turn PDF pages into a real multi-page TIFF — the print &amp; fax standard, free.</p>
</div>
<button type="button" class="theme-toggle" id="tiffTheme">🌙 Dark</button>
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
<div class="dropzone" id="tiffDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF here</strong><span>or click to browse — one PDF at a time</span><input type="file" id="tiffFile" accept="application/pdf"></div><ul class="file-list" id="tiffList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="tiffPresets">
<button type="button" class="preset-chip active" data-preset="🖨️ Standard — 150 DPI look">🖨️ Standard — 150 DPI look</button>
<button type="button" class="preset-chip" data-preset="📠 Fax — small &amp; light">📠 Fax — small &amp; light</button>
<button type="button" class="preset-chip" data-preset="🖨️‍💻 Archive — high detail">🖨️‍💻 Archive — high detail</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="tiffScale">Resolution: <span class="val" id="tiffScaleVal">1.25x</span></label><input type="range" id="tiffScale" min="0.75" max="2" step="0.25" value="1.25"><div class="hint">TIFFs are uncompressed — higher resolution means much bigger files. 1.25x suits most print jobs.</div></div><div class="setting"><label for="tiffDpi">DPI tag written to file</label><select id="tiffDpi"><option value="150" selected>150 DPI — standard</option><option value="96">96 DPI — screen</option><option value="300">300 DPI — high-end print</option></select><div class="hint">The DPI tag tells printers and viewers the intended output size.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">White page background</span><label class="toggle"><input type="checkbox" id="tiffBg" checked><span class="slider"></span></label></div><div class="hint">Recommended — TIFF viewers show transparency as black.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert to TIFF</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tiffBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to TIFF
</button>
<button type="button" class="btn-pro-outline" id="tiffClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="tiffProgWrap">
<div class="progress-bar"><i id="tiffProgBar"></i></div>
<div class="progress-text" id="tiffProgText">Working…</div>
</div>
<div class="results" id="tiffResults">
<p class="result-head">✅ Done — your multi-page TIFF</p>
<div class="result-summary" id="tiffSummary"></div>
<div class="result-grid" id="tiffGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited PDFs to multi-page TIFF — pure client-side writing, no limits.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('tiffShell');
ToolPro.themeToggle(shell,document.getElementById('tiffTheme'));
if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}
var files=[],listEl=document.getElementById('tiffList'),btn=document.getElementById('tiffBtn'),
clearBtn=document.getElementById('tiffClear'),scaleR=document.getElementById('tiffScale'),
scaleV=document.getElementById('tiffScaleVal'),dpiS=document.getElementById('tiffDpi'),
bgT=document.getElementById('tiffBg'),presets=document.getElementById('tiffPresets');
ToolPro.bindSlider(scaleR,scaleV,function(v){return v+'x';});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Fax')>-1){scaleR.value='0.75';dpiS.value='96';}
else if(t.indexOf('Archive')>-1){scaleR.value='2';dpiS.value='300';}
else{scaleR.value='1.25';dpiS.value='150';}
scaleR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+t.trim());
});
function refresh(){btn.disabled=!files.length;clearBtn.disabled=!files.length;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert to TIFF';}
ToolPro.dropzone(document.getElementById('tiffDrop'),{multiple:false,accept:'application/pdf',
onFiles:function(arr){files=arr.slice(0,1);listEl.innerHTML='';
files.forEach(function(f){ToolPro.fileRow(listEl,f,function(){files=[];refresh();});});
document.getElementById('tiffResults').classList.remove('show');refresh();ToolPro.toast('PDF added','ok');}});
clearBtn.addEventListener('click',function(){files=[];listEl.innerHTML='';
document.getElementById('tiffResults').classList.remove('show');refresh();});
function encodeTIFF(pages,dpi){
var n=pages.length,i,j,stripSizes=[],totalIFD=0,IFD=150,VAL=22;
for(i=0;i<n;i++){stripSizes.push(pages[i].w*pages[i].h*3);}
var stripStart=8+n*(IFD+VAL),offs=[],acc=stripStart;
for(i=0;i<n;i++){offs.push(acc);acc+=stripSizes[i];}
var buf=new ArrayBuffer(acc),dv=new DataView(buf),pos=0;
function u16(v){dv.setUint16(pos,v,true);pos+=2;}
function u32(v){dv.setUint32(pos,v,true);pos+=4;}
dv.setUint8(0,73);dv.setUint8(1,73);u16(42);u32(8);pos=8;
function entry(tag,type,count,val){u16(tag);u16(type);u32(count);u32(val);}
for(i=0;i<n;i++){
var pg=pages[i],ifdPos=8+i*(IFD+VAL),valPos=ifdPos+IFD,next=i<n-1?ifdPos+IFD+VAL:0;
pos=ifdPos;u16(12);
entry(254,4,1,0);entry(256,3,1,pg.w);entry(257,3,1,pg.h);
entry(258,3,3,valPos);entry(259,3,1,1);entry(262,3,1,2);
entry(273,4,1,offs[i]);entry(277,3,1,3);entry(278,4,1,pg.h);
entry(279,4,1,stripSizes[i]);entry(282,5,1,valPos+6);entry(283,5,1,valPos+14);
u32(next);
pos=valPos;u16(8);u16(8);u16(8);u32(dpi);u32(1);u32(dpi);u32(1);
}
for(i=0;i<n;i++){var d=pages[i].data,tgt=new Uint8Array(buf,offs[i],stripSizes[i]),k=0;
for(j=0;j<d.length;j+=4){tgt[k++]=d[j];tgt[k++]=d[j+1];tgt[k++]=d[j+2];}}
return new Blob([buf],{type:'image/tiff'});
}
btn.addEventListener('click',async function(){
if(!files.length||!window.pdfjsLib){ToolPro.toast('PDF library is still loading — try again in a moment','err');return;}
var wrap=document.getElementById('tiffProgWrap'),bar=document.getElementById('tiffProgBar'),
txt=document.getElementById('tiffProgText'),grid=document.getElementById('tiffGrid'),
resBox=document.getElementById('tiffResults');
btn.disabled=true;wrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
try{
txt.textContent='Reading PDF…';bar.style.width='5%';
var scale=parseFloat(scaleR.value),dpi=parseInt(dpiS.value,10);
var pdf=await pdfjsLib.getDocument({data:await files[0].arrayBuffer()}).promise;
var n=pdf.numPages,pages=[];
for(var i=1;i<=n;i++){
txt.textContent='Rendering page '+i+' of '+n+'…';
bar.style.width=Math.round(i/n*80)+'%';
var pg=await pdf.getPage(i),vp=pg.getViewport({scale:scale});
var k=Math.min(1,4000/vp.width),w=Math.floor(vp.width*k),h=Math.floor(vp.height*k);
var cv=document.createElement('canvas');cv.width=w;cv.height=h;
var ctx=cv.getContext('2d');
if(bgT.checked){ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);}
await pg.render({canvasContext:ctx,viewport:pg.getViewport({scale:scale*k})}).promise;
pages.push({w:w,h:h,data:ctx.getImageData(0,0,w,h).data});
}
txt.textContent='Writing TIFF…';bar.style.width='92%';
var base=files[0].name.replace(/\.[^.]+$/,'');
var tiff=encodeTIFF(pages,dpi),url=URL.createObjectURL(tiff);
bar.style.width='100%';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download TIFF</button>';
card.querySelector('.r-name').textContent=base+'.tiff';
card.querySelector('.r-stats').textContent=n+' pages · '+dpi+' DPI · '+ToolPro.fmtBytes(tiff.size);
card.querySelector('button').addEventListener('click',function(){ToolPro.download(url,base+'.tiff');});
grid.appendChild(card);
document.getElementById('tiffSummary').textContent='🎉 '+n+'-page PDF written as one baseline multi-page TIFF.';
wrap.classList.remove('show');resBox.classList.add('show');
resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('TIFF ready','ok');
}catch(err){txt.textContent='Could not convert that PDF. It may be password-protected or damaged.';
ToolPro.toast('Conversion failed','err');}
btn.disabled=false;
});
refresh();
})();

</script>

## How it works

- **Step 1** — Drop in your PDF. Pages render locally with PDF.js; nothing leaves your browser.
- **Step 2** — Pick a resolution preset and the DPI tag for your workflow.
- **Step 3** — Every page is encoded into one baseline, uncompressed multi-page TIFF (RGB, 8-bit) that opens in Photoshop, IrfanView, and fax software.

## Everyday uses

- **Print shops** — deliver multi-page documents in the format prepress expects.
- **Offices** — convert PDFs for fax systems that only accept TIFF.
- **Archivists** — store documents in the lossless, decades-old TIFF standard.
- **Lawyers & admins** — send single-file multi-page scans that never reorder.

**Tip:** TIFF is uncompressed, so a 20-page file can be large — use the Fax preset for small files.