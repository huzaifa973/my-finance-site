---
title: "Free French PDF OCR — Extract Text from Scanned French PDFs"
description: "Run French OCR on scanned PDFs and images in your browser with Tesseract.js. Free forever, no sign-up, files never leave your device."
category: pdf
date: 2026-10-29
draft: false
---

Scanned French documents — invoices, letters, book pages — hide their text inside images. This tool reads them with French-trained OCR (Tesseract.js) entirely in your browser, page by page, and gives you copyable text. Your files are never uploaded anywhere.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<div class="tool-shell" id="froShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>French PDF OCR</h2>
<p>Extract French text from scanned PDFs &amp; images — accents included, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="froTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your French PDF or image</p>
<div class="dropzone" id="froDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF or image here</strong><span>or click to browse — PDF, PNG, JPG, WebP · one file at a time</span><input type="file" id="froFile" accept="application/pdf,.pdf,image/png,image/jpeg,image/webp"></div><ul class="file-list" id="froList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> OCR settings</p>
<div class="settings-panel">
<div class="preset-row" id="froPresets">
<button type="button" class="preset-chip active" data-p="5">📄 First 5 pages</button>
<button type="button" class="preset-chip" data-p="1">📃 First page only</button>
<button type="button" class="preset-chip" data-p="10">📚 First 10 pages</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="froScale">Render scale: <span class="val" id="froScaleVal">2×</span></label><input type="range" id="froScale" min="1" max="3" step="1" value="2"><div class="hint">Higher scale reads small print better but runs slower.</div></div>
<div class="setting"><div class="toggle-row"><span class="t-label">Clean up extra spaces &amp; blank lines</span><label class="toggle"><input type="checkbox" id="froClean" checked><span class="slider"></span></label></div><div class="hint">Tidies OCR output without changing the words.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run French OCR &amp; copy the text</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="froBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Run French OCR
</button>
<button type="button" class="btn-pro-outline" id="froClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="froProgWrap">
<div class="progress-bar"><i id="froProgBar"></i></div>
<div class="progress-text" id="froProgText">Working…</div>
</div>
<div class="results" id="froResults">
<p class="result-head">✅ Done — extracted French text</p>
<div class="result-summary" id="froSummary"></div>
<div class="result-grid" id="froGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>OCR as many French documents as you like — files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('froShell');
ToolPro.themeToggle(shell,document.getElementById('froTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var scaleR=document.getElementById('froScale'),scaleV=document.getElementById('froScaleVal'),cleanT=document.getElementById('froClean'),presets=document.getElementById('froPresets'),listEl=document.getElementById('froList'),btn=document.getElementById('froBtn'),clearBtn=document.getElementById('froClear'),progWrap=document.getElementById('froProgWrap'),progBar=document.getElementById('froProgBar'),progText=document.getElementById('froProgText'),resBox=document.getElementById('froResults'),summaryEl=document.getElementById('froSummary'),grid=document.getElementById('froGrid');
ToolPro.bindSlider(scaleR,scaleV,function(v){return v+'×';});
var MAXP=5,srcFile=null,tmod=null,worker=null,state={page:1,total:1};
var statusLabels={'loading tesseract core':'Loading OCR engine…','initializing tesseract':'Starting OCR engine…','loading language traineddata':'Loading French language data…','recognizing text':'Reading text…'};
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');MAXP=parseInt(c.dataset.p,10);ToolPro.toast('Preset applied: '+c.textContent.trim());});
function resetAll(){srcFile=null;listEl.innerHTML='';resBox.classList.remove('show');progWrap.classList.remove('show');grid.innerHTML='';btn.disabled=true;clearBtn.disabled=true;}
ToolPro.dropzone(document.getElementById('froDrop'),{multiple:false,accept:'application/pdf,.pdf,image/png,image/jpeg,image/webp',maxFiles:1,onFiles:function(arr){if(!arr.length)return;resetAll();srcFile=arr[0];ToolPro.fileRow(listEl,srcFile,resetAll);btn.disabled=false;clearBtn.disabled=false;ToolPro.toast('File added — hit Run French OCR (engine downloads once)','ok');}});
clearBtn.addEventListener('click',resetAll);
function tidy(t){return t.replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();}
function recognizeCanvas(canvas){return worker.recognize(canvas).then(function(ret){var txt=(ret&&ret.data&&ret.data.text)?ret.data.text:'';return cleanT.checked?tidy(txt):txt.trim();});}
btn.addEventListener('click',async function(){
if(!srcFile)return;btn.disabled=true;clearBtn.disabled=true;resBox.classList.remove('show');progWrap.classList.add('show');progBar.style.width='0%';
var isPdf=/pdf$/i.test(srcFile.type)||/\.pdf$/i.test(srcFile.name);
try{
progText.textContent='Loading OCR engine…';
if(!tmod)tmod=await import('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.esm.min.js');
if(!worker)worker=await tmod.createWorker('fra',undefined,{logger:function(m){if(m.status==='recognizing text'){var pct=Math.round((m.progress||0)*100);progBar.style.width=Math.round(((state.page-1+(m.progress||0))/state.total)*100)+'%';progText.textContent='Page '+state.page+' of '+state.total+' — reading text… '+pct+'%';}else if(statusLabels[m.status]){progText.textContent=statusLabels[m.status];}}});
var parts=[],totalChars=0;
if(isPdf){
progText.textContent='Opening PDF…';var buf=await srcFile.arrayBuffer();var pdf=await pdfjsLib.getDocument({data:new Uint8Array(buf)}).promise;var totalPages=pdf.numPages;var total=Math.min(totalPages,MAXP);state.total=total;
if(totalPages>MAXP)ToolPro.toast('This PDF has '+totalPages+' pages — OCR covers the first '+MAXP+' only.','err');
var scale=parseInt(scaleR.value,10);
for(var n=1;n<=total;n++){state.page=n;progText.textContent='Rendering page '+n+' of '+total+'…';progBar.style.width=Math.round((n-1)/total*100)+'%';var page=await pdf.getPage(n);var viewport=page.getViewport({scale:scale});var canvas=document.createElement('canvas');canvas.width=Math.floor(viewport.width);canvas.height=Math.floor(viewport.height);await page.render({canvasContext:canvas.getContext('2d'),viewport:viewport}).promise;var txt=await recognizeCanvas(canvas);totalChars+=txt.length;parts.push('— Page '+n+' —'+(txt?'\n'+txt:'\n(No text recognized on this page.)'));page.cleanup();}
}else{
state.page=1;state.total=1;progText.textContent='Reading image…';var url=URL.createObjectURL(srcFile);var img=new Image();await new Promise(function(res,rej){img.onload=res;img.onerror=rej;img.src=url;});var c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;c.getContext('2d').drawImage(img,0,0);URL.revokeObjectURL(url);var t=await recognizeCanvas(c);totalChars=t.length;parts.push(t||'(No text recognized.)');
}
var full=parts.join('\n\n');summaryEl.textContent='Extracted '+totalChars.toLocaleString()+' characters from '+(isPdf?state.total+' page(s)':'1 image')+'. Use the Copy button, then paste anywhere.';
var card=document.createElement('div');card.className='result-card';var ta=document.createElement('textarea');ta.className='tool-input';ta.rows=12;ta.value=full;ta.readOnly=true;var b=document.createElement('button');b.type='button';b.className='btn-pro';b.textContent='📋 Copy text';b.addEventListener('click',function(){ToolPro.copyText(full,'French text copied');});card.appendChild(ta);card.appendChild(b);grid.appendChild(card);
progWrap.classList.remove('show');resBox.classList.add('show');ToolPro.toast('French OCR complete','ok');
}catch(err){progWrap.classList.remove('show');ToolPro.toast('OCR failed: '+(err&&err.message?err.message:'unknown error'),'err');}
btn.disabled=false;clearBtn.disabled=false;
});
})();
</script>

## How it works

- **Step 1** — Drop in a scanned French PDF or image (one file at a time).
- **Step 2** — Pick how many pages to OCR and the render scale.
- **Step 3** — Tesseract.js loads once with the French (`fra`) language data, reads each page, and returns copyable text with accents (é, è, ç, ê) preserved.

Your files never leave your browser — OCR runs locally, so private letters and invoices stay private.

## Everyday uses

- **Students** — turn scanned French textbook pages into searchable notes.
- **Freelancers** — extract text from French client invoices and contracts.
- **Researchers** — digitize French archival documents for quoting and translation.
- **Expats** — read French administrative letters by copying the text into a translator.
