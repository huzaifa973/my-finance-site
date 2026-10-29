---
title: "Free PDF to Single Image — Merge All PDF Pages into One Tall Image"
description: "Combine every page of a PDF into one tall PNG or JPG image in your browser. Free forever, no sign-up, files never leave your device."
category: pdf
date: 2026-10-29
draft: false
---

Need a PDF as one long shareable image — for social media, a chat message, or a single-file archive? This tool renders every page of your PDF and stacks them vertically into one tall downloadable image, entirely in your browser.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<div class="tool-shell" id="psiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8V3.5L18.5 10H12zm-1 4h7v2H9v-2zm0 4h7v2H9v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to Single Image</h2>
<p>Merge all PDF pages into one tall PNG or JPG — perfect for sharing anywhere.</p>
</div>
<button type="button" class="theme-toggle" id="psiTheme">🌙 Dark</button>
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
<div class="dropzone" id="psiDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF here</strong><span>or click to browse — one PDF, up to 30 pages</span><input type="file" id="psiFile" accept="application/pdf,.pdf"></div><ul class="file-list" id="psiList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Image settings</p>
<div class="settings-panel">
<div class="preset-row" id="psiPresets">
<button type="button" class="preset-chip active" data-f="png" data-w="1200">🖼️ PNG · 1200px wide</button>
<button type="button" class="preset-chip" data-f="jpeg" data-w="1080">📱 JPG · 1080px wide</button>
<button type="button" class="preset-chip" data-f="png" data-w="800">✉️ PNG · 800px wide</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="psiWidth">Output width: <span class="val" id="psiWVal">1200px</span></label><input type="range" id="psiWidth" min="400" max="2000" step="100" value="1200"><div class="hint">Pages are scaled to this width, keeping their aspect ratio.</div></div>
<div class="setting"><label for="psiGap">Gap between pages: <span class="val" id="psiGapVal">16px</span></label><input type="range" id="psiGap" min="0" max="64" step="4" value="16"><div class="hint">A small gap makes page boundaries easy to see.</div></div>
<div class="setting"><label for="psiFormat">Format</label><select id="psiFormat"><option value="png" selected>PNG — crisp text</option><option value="jpeg">JPG — smaller file</option></select></div>
<div class="setting"><label for="psiBg">Background</label><select id="psiBg"><option value="#ffffff" selected>White</option><option value="#f1f5f9">Light grey</option><option value="#111827">Dark</option></select></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Merge &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="psiBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Merge into One Image
</button>
<button type="button" class="btn-pro-outline" id="psiClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="psiProgWrap">
<div class="progress-bar"><i id="psiProgBar"></i></div>
<div class="progress-text" id="psiProgText">Working…</div>
</div>
<div class="results" id="psiResults">
<p class="result-head">✅ Done — your single tall image</p>
<div class="result-summary" id="psiSummary"></div>
<div class="result-grid" id="psiGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Merge unlimited PDFs into single images — files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('psiShell');
ToolPro.themeToggle(shell,document.getElementById('psiTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var wR=document.getElementById('psiWidth'),wV=document.getElementById('psiWVal'),gR=document.getElementById('psiGap'),gV=document.getElementById('psiGapVal'),fmtSel=document.getElementById('psiFormat'),bgSel=document.getElementById('psiBg'),presets=document.getElementById('psiPresets'),listEl=document.getElementById('psiList'),btn=document.getElementById('psiBtn'),clearBtn=document.getElementById('psiClear'),progWrap=document.getElementById('psiProgWrap'),progBar=document.getElementById('psiProgBar'),progText=document.getElementById('psiProgText'),resBox=document.getElementById('psiResults'),sumEl=document.getElementById('psiSummary'),grid=document.getElementById('psiGrid');
ToolPro.bindSlider(wR,wV,function(v){return v+'px';});ToolPro.bindSlider(gR,gV,function(v){return v+'px';});
var srcFile=null;
function resetAll(){srcFile=null;listEl.innerHTML='';resBox.classList.remove('show');grid.innerHTML='';btn.disabled=true;clearBtn.disabled=true;}
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');fmtSel.value=c.dataset.f;wR.value=c.dataset.w;wR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+c.textContent.trim());});
ToolPro.dropzone(document.getElementById('psiDrop'),{multiple:false,accept:'application/pdf,.pdf',maxFiles:1,onFiles:function(arr){if(!arr.length)return;resetAll();srcFile=arr[0];ToolPro.fileRow(listEl,srcFile,resetAll);btn.disabled=false;clearBtn.disabled=false;ToolPro.toast('PDF added','ok');}});
clearBtn.addEventListener('click',resetAll);
btn.addEventListener('click',async function(){
if(!srcFile)return;btn.disabled=true;progWrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
try{
progText.textContent='Opening PDF…';var buf=await srcFile.arrayBuffer();var pdf=await pdfjsLib.getDocument({data:new Uint8Array(buf)}).promise;var total=Math.min(pdf.numPages,30);
if(pdf.numPages>30)ToolPro.toast('This PDF has '+pdf.numPages+' pages — merging the first 30 only.','err');
var width=parseInt(wR.value,10),gap=parseInt(gR.value,10),bg=bgSel.value;
var pages=[];
for(var n=1;n<=total;n++){progText.textContent='Rendering page '+n+' of '+total+'…';progBar.style.width=Math.round((n-1)/total*100)+'%';var page=await pdf.getPage(n);var vp0=page.getViewport({scale:1});var scale=width/vp0.width;var vp=page.getViewport({scale:scale});var canvas=document.createElement('canvas');canvas.width=Math.floor(vp.width);canvas.height=Math.floor(vp.height);var ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);await page.render({canvasContext:ctx,viewport:vp}).promise;pages.push(canvas);page.cleanup();}
var totalH=pages.reduce(function(a,c){return a+c.height;},0)+gap*(pages.length-1);
var out=document.createElement('canvas');out.width=width;out.height=totalH;var octx=out.getContext('2d');octx.fillStyle=bg;octx.fillRect(0,0,width,totalH);var y=0;pages.forEach(function(c){octx.drawImage(c,0,y);y+=c.height+gap;});
var fmt=fmtSel.value,mime=fmt==='png'?'image/png':'image/jpeg';var dataUrl=out.toDataURL(mime,0.92);
progBar.style.width='100%';sumEl.textContent='Merged '+total+' page(s) into one '+width+'×'+totalH+'px '+fmt.toUpperCase()+' image.';
var card=document.createElement('div');card.className='result-card';var img=document.createElement('img');img.className='r-preview';img.src=dataUrl;img.alt='Merged PDF preview';var nm=document.createElement('div');nm.className='r-name';nm.textContent=srcFile.name.replace(/\.pdf$/i,'')+'-single-image.'+fmt;var st=document.createElement('div');st.className='r-stats';st.textContent=width+'×'+totalH+'px · '+total+' pages stacked';var dl=document.createElement('button');dl.type='button';dl.className='btn-pro';dl.textContent='⬇ Download';dl.addEventListener('click',function(){ToolPro.download(dataUrl,nm.textContent);});card.appendChild(img);card.appendChild(nm);card.appendChild(st);card.appendChild(dl);grid.appendChild(card);
progWrap.classList.remove('show');resBox.classList.add('show');ToolPro.toast('Single image ready','ok');
}catch(err){progWrap.classList.remove('show');ToolPro.toast('Merge failed: '+(err&&err.message?err.message:'unknown error'),'err');}
btn.disabled=false;
});
})();
</script>

## How it works

- **Step 1** — Drop in one PDF (up to 30 pages per run).
- **Step 2** — Choose the output width, gap, background, and PNG or JPG format.
- **Step 3** — Each page is rendered with pdf.js, scaled to your width, and stacked vertically on a single canvas for download.

Because rendering happens locally, even confidential PDFs never leave your device.

## Everyday uses

- **Social media** — share a multi-page document as one scrollable image.
- **Messaging** — send a whole PDF as a single image in chats that dislike attachments.
- **Teachers** — post worksheets as one image students can view without a PDF reader.
- **Sellers** — turn a product spec sheet into one tall listing image.
