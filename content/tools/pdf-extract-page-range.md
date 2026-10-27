---
title: "Extract PDF Pages — Save a Page Range Free"
description: "Extract a page range from any PDF into a new file — save chapters, sections or single pages free, in your browser."
category: pdf
date: 2026-10-26
draft: false
slug: pdf-extract-page-range
---

A 400-page manual, and you only need pages 42 to 58. Instead of screenshotting or re-typing, drop the PDF here, type the first and last page, and download a clean new PDF containing exactly that range — nothing else, in the original order, at full quality. The extraction runs with pdf-lib entirely in your browser, so the document never uploads anywhere.

<div class="tool-shell" id="perShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Extract PDF Pages</h2>
<p>Save just the pages you need — a chapter, a section, or a single page — as a new PDF.</p>
</div>
<button type="button" class="theme-toggle" id="perTheme">🌙 Dark</button>
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
<div class="dropzone" id="perDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag & drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="perFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="perList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Range settings</p>
<div class="settings-panel">
<div class="preset-row" id="perPresets">
<button type="button" class="preset-chip active" data-v="range">📖 Page range</button>
<button type="button" class="preset-chip" data-v="single">📄 Single page</button>
<button type="button" class="preset-chip" data-v="first10">🔟 First 10 pages</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>First page</label>
<input type="number" id="perStart" class="tool-input" value="1" min="1">
</div>
<div class="setting">
<label>Last page</label>
<input type="number" id="perEnd" class="tool-input" value="10" min="1">
<div class="hint">Page numbers start at 1. Leave Last blank to go to the end.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Extract pages</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="perBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Extract Pages
</button>
<button type="button" class="btn-pro-outline" id="perClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="perProgWrap">
<div class="progress-bar"><i id="perProgBar"></i></div>
<div class="progress-text" id="perProgText">Working…</div>
</div>
<div class="results" id="perResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="perSummary"></div>
<div class="result-grid" id="perGrid"></div>
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
  var shell=document.getElementById('perShell'); ToolPro.themeToggle(shell,document.getElementById('perTheme'));
  var file=null,listEl=document.getElementById('perList'),btn=document.getElementById('perBtn'),clr=document.getElementById('perClear');
  var res=document.getElementById('perResults'),sum=document.getElementById('perSummary'),grid=document.getElementById('perGrid');
  var mode='range';
  document.getElementById('perPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#perPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');mode=c.dataset.v;if(mode==='single'){document.getElementById('perEnd').value=document.getElementById('perStart').value;}if(mode==='first10'){document.getElementById('perStart').value=1;document.getElementById('perEnd').value=10;}ToolPro.toast('Range: '+c.textContent.trim());});
  function refresh(){btn.disabled=!file;clr.disabled=!file;}
  ToolPro.dropzone(document.getElementById('perDrop'),{multiple:false,accept:'application/pdf,.pdf',maxFiles:1,onFiles:function(arr){if(!arr.length)return;file=arr[0];listEl.innerHTML='';ToolPro.fileRow(listEl,file,function(){file=null;refresh();});res.classList.remove('show');refresh();ToolPro.toast('PDF loaded','ok');}});
  clr.addEventListener('click',function(){file=null;document.getElementById('perFile').value='';listEl.innerHTML='';grid.innerHTML='';res.classList.remove('show');refresh();});
  btn.addEventListener('click',async function(){
    if(!file)return; btn.disabled=true; document.getElementById('perProgWrap').classList.add('show'); document.getElementById('perProgText').textContent='Extracting…';
    try{
      var bytes=await file.arrayBuffer(); var src=await PDFLib.PDFDocument.load(bytes); var n=src.getPageCount();
      var start=Math.max(1,parseInt(document.getElementById('perStart').value,10)||1);
      var endRaw=document.getElementById('perEnd').value; var end=endRaw?parseInt(endRaw,10):n; end=Math.min(n,Math.max(start,end));
      var idx=[]; for(var i=start-1;i<end;i++)idx.push(i);
      var out=await PDFLib.PDFDocument.create(); var pages=await out.copyPages(src,idx); pages.forEach(function(pg){out.addPage(pg);});
      var data=await out.save(); var blob=new Blob([data],{type:'application/pdf'}); var url=URL.createObjectURL(blob);
      var name=file.name.replace(/\.pdf$/i,'')+'-pages-'+start+'-'+end+'.pdf';
      sum.textContent='Extracted pages '+start+'–'+end+' of '+n+' into a new '+idx.length+'-page PDF.';
      grid.innerHTML=''; var card=document.createElement('div'); card.className='result-card';
      var p=document.createElement('p'); p.textContent=name+' — '+ToolPro.fmtBytes(blob.size); card.appendChild(p);
      var a=document.createElement('a'); a.className='btn-pro'; a.href=url; a.download=name; a.textContent='Download PDF'; card.appendChild(a); grid.appendChild(card);
      res.classList.add('show'); ToolPro.toast('Pages extracted','ok');
    }catch(e){ToolPro.toast('Could not extract — check the page numbers','err');}
    document.getElementById('perProgWrap').classList.remove('show'); refresh();
  });
})();
</script>

## How it works

Drop a PDF into step 1, set the first and last page in step 2 (presets cover a single page or the first ten), and press **Extract Pages**. The tool loads the document with pdf-lib, copies only the pages inside your range in their original order, and builds a brand-new PDF from them. Quality is unchanged because pages are copied, not re-rendered, and your file never leaves your browser.

## Everyday uses

- **Chapters** — pull one chapter from a textbook or manual.
- **Applications** — extract just the pages a form asks for.
- **Sharing** — send a section instead of a whole report.
- **Study notes** — keep only the pages you still need.
- **Archiving** — split a big scan into per-topic files.
