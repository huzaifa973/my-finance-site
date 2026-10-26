---
title: "Duplicate PDF Pages — Repeat Pages Free Online"
description: "Duplicate selected PDF pages as many times as you need — repeat a form, worksheet or flyer inside one PDF, in your browser."
category: pdf
date: 2026-10-26
draft: false
slug: pdf-duplicate-pages
---

Need twenty copies of the same form inside one PDF, or a worksheet repeated for a whole class? Instead of printing, scanning, and merging, drop the PDF here, pick the pages to repeat and how many copies you want, and this tool builds a new PDF with the original followed by your duplicates — in your browser, with the pdf-lib engine, and without uploading anything anywhere.

<div class="tool-shell" id="pdpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Duplicate PDF Pages</h2>
<p>Repeat any pages inside your PDF — forms, worksheets, flyers — as many copies as you need.</p>
</div>
<button type="button" class="theme-toggle" id="pdpTheme">🌙 Dark</button>
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
<div class="dropzone" id="pdpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag & drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pdpFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pdpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Duplicate settings</p>
<div class="settings-panel">
<div class="preset-row" id="pdpPresets">
<button type="button" class="preset-chip active" data-v="all">📄 All pages</button>
<button type="button" class="preset-chip" data-v="first">1️⃣ First page only</button>
<button type="button" class="preset-chip" data-v="custom">✏️ Custom pages</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Pages to duplicate</label>
<input type="text" id="pdpPages" class="tool-input" value="">
<div class="hint">For Custom: comma list like 1,3,5 or a range like 2-4. Leave blank with All pages.</div>
</div>
<div class="setting">
<label>Extra copies of each page</label>
<input type="range" id="pdpCopies" min="1" max="50" value="1"> <span class="val" id="pdpCopiesVal">1 extra copy</span>
<div class="hint">1 extra copy doubles the page; 9 gives ten in total.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build duplicated PDF</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pdpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Duplicate Pages
</button>
<button type="button" class="btn-pro-outline" id="pdpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pdpProgWrap">
<div class="progress-bar"><i id="pdpProgBar"></i></div>
<div class="progress-text" id="pdpProgText">Working…</div>
</div>
<div class="results" id="pdpResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="pdpSummary"></div>
<div class="result-grid" id="pdpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Use this tool as often as you like — your files and data never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell=document.getElementById('pdpShell'); ToolPro.themeToggle(shell,document.getElementById('pdpTheme'));
  var file=null,listEl=document.getElementById('pdpList'),btn=document.getElementById('pdpBtn'),clr=document.getElementById('pdpClear');
  var res=document.getElementById('pdpResults'),sum=document.getElementById('pdpSummary'),grid=document.getElementById('pdpGrid');
  var copiesEl=document.getElementById('pdpCopies'),copiesVal=document.getElementById('pdpCopiesVal');
  ToolPro.bindSlider(copiesEl,copiesVal,function(v){return v+(v==='1'?' extra copy':' extra copies');});
  var mode='all';
  document.getElementById('pdpPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#pdpPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');mode=c.dataset.v;ToolPro.toast('Pages: '+c.textContent.trim());});
  function refresh(){btn.disabled=!file;clr.disabled=!file;}
  ToolPro.dropzone(document.getElementById('pdpDrop'),{multiple:false,accept:'application/pdf,.pdf',maxFiles:1,onFiles:function(arr){if(!arr.length)return;file=arr[0];listEl.innerHTML='';ToolPro.fileRow(listEl,file,function(){file=null;refresh();});res.classList.remove('show');refresh();ToolPro.toast('PDF loaded','ok');}});
  clr.addEventListener('click',function(){file=null;document.getElementById('pdpFile').value='';listEl.innerHTML='';grid.innerHTML='';res.classList.remove('show');refresh();});
  function parsePages(spec,n){var out=[];if(mode==='all')for(var i=0;i<n;i++)out.push(i);else if(mode==='first')out=[0];else{spec.split(',').forEach(function(t){t=t.trim();if(!t)return;var r=t.split('-');if(r.length===2){var a=parseInt(r[0],10),b=parseInt(r[1],10);for(var k=Math.min(a,b);k<=Math.max(a,b);k++)if(k>=1&&k<=n)out.push(k-1);}else{var p=parseInt(t,10);if(p>=1&&p<=n)out.push(p-1);}});}return out;}
  btn.addEventListener('click',async function(){
    if(!file)return; btn.disabled=true; document.getElementById('pdpProgWrap').classList.add('show'); document.getElementById('pdpProgText').textContent='Building your PDF…';
    try{
      var bytes=await file.arrayBuffer(); var src=await PDFLib.PDFDocument.load(bytes); var n=src.getPageCount();
      var pages=parsePages(document.getElementById('pdpPages').value,n); if(!pages.length)throw new Error('no pages');
      var copies=parseInt(copiesEl.value,10);
      var out2=await PDFLib.PDFDocument.create(); var a2=await out2.copyPages(src,src.getIndices()); a2.forEach(function(pg){out2.addPage(pg);});
      for(var j=0;j<pages.length;j++){for(var c2=0;c2<copies;c2++){var cp=await out2.copyPages(src,[pages[j]]); out2.addPage(cp[0]);}}
      var data=await out2.save(); var blob=new Blob([data],{type:'application/pdf'}); var url=URL.createObjectURL(blob);
      var name=file.name.replace(/\.pdf$/i,'')+'-duplicated.pdf';
      sum.textContent='Original '+n+' page(s) + '+pages.length+' page(s) x '+copies+' extra copies = '+out2.getPageCount()+' pages.';
      grid.innerHTML=''; var card=document.createElement('div'); card.className='result-card';
      var p=document.createElement('p'); p.textContent=name+' — '+ToolPro.fmtBytes(blob.size); card.appendChild(p);
      var a=document.createElement('a'); a.className='btn-pro'; a.href=url; a.download=name; a.textContent='Download PDF'; card.appendChild(a); grid.appendChild(card);
      res.classList.add('show'); ToolPro.toast('Duplicated PDF ready','ok');
    }catch(e){ToolPro.toast('Could not build that PDF — check the page numbers','err');}
    document.getElementById('pdpProgWrap').classList.remove('show'); refresh();
  });
})();
</script>

## How it works

Drop a PDF into step 1, choose which pages to repeat in step 2 (all pages, the first page, or a custom list like `1,3,5` or `2-4`), set how many extra copies each selected page gets, and press **Duplicate Pages**. The tool loads your file with pdf-lib, copies the original pages in order, then appends the requested extra copies, and offers the finished PDF for download. Your file never leaves your browser, and the original is never modified.

## Everyday uses

- **Classroom worksheets** — one worksheet, thirty copies, one file.
- **Forms** — repeat a sign-up sheet for a whole event.
- **Flyers** — print several copies per sheet layout from one source.
- **Practice pages** — handwriting or music practice, repeated.
- **Test prints** — check one page repeatedly without re-exporting.
