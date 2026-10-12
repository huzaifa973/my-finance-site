---
title: "Free PDF Page Number Adder — Number PDF Pages Online"
description: "Add page numbers to any PDF in your browser: position, format, start number and cover-page skip. Free, private, no sign-up, files never leave your device."
category: pdf
date: 2026-10-12
draft: false
---

Reports, ebooks, and contracts read better with page numbers — and reviewers expect them. Drop in a PDF, choose the position and format ("Page 3 of 12" is the professional favorite), optionally skip the cover page, and download a numbered copy. The PDF is edited with pdf-lib entirely in your browser; your document is never uploaded anywhere.

<div class="tool-shell" id="pdfAddShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Page Number Adder</h2>
<p>Stamp clean page numbers on reports, ebooks, and contracts — position and format your way, processed privately in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="pdfAddTheme">🌙 Dark</button>
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
<div class="dropzone" id="pnDz">
<input type="file" hidden>
<p>📂 Drag &amp; drop your file here, or <strong>click to browse</strong></p>
<p class="hint">PDF only — processed locally with pdf-lib, never uploaded.</p>
</div>
<ul class="file-list" id="pnList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Numbering settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Position</span><select class="tool-input" id="pnPos"><option value="bottom-center">Bottom center</option><option value="bottom-right">Bottom right</option><option value="bottom-left">Bottom left</option><option value="top-center">Top center</option><option value="top-right">Top right</option></select></div>
<div class="setting"><span class="t-label">Format</span><select class="tool-input" id="pnFmt"><option value="plain">1, 2, 3…</option><option value="page">Page 1, Page 2…</option><option value="of">Page 1 of 12</option><option value="dash">- 1 -</option></select></div>
<div class="setting"><span class="t-label">Start numbering at</span><input type="number" class="tool-input" id="pnStart" value="1" min="0"></div>
<div class="setting"><span class="t-label">First page to number</span><input type="number" class="tool-input" id="pnSkip" value="1" min="1"></div>
<div class="setting"><span class="t-label">Font size</span><input type="range" id="pnSize" min="8" max="24" value="11"><span class="val" id="pnSizeVal">11</span></div>
</div>
<div class="hint">Skipping the first page (set "First page to number" to 2) keeps cover pages clean — a common trick for reports and ebooks.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Stamp &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pnGo">
🔢 Add page numbers
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="pnRes">
<p class="result-head">✅ Numbered PDF</p>
<div class="result-summary" id="pnResSummary"></div>
<div class="result-grid" id="pnResGrid"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Number unlimited PDFs — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pdfAddShell');
ToolPro.themeToggle(shell, document.getElementById('pdfAddTheme'));
var pdfFile=null;
ToolPro.dropzone(document.getElementById('pnDz'), {accept:'application/pdf', onFiles:function(files){
  pdfFile=files[0]||null; var list=document.getElementById('pnList'); list.innerHTML='';
  if(pdfFile) ToolPro.fileRow(list, pdfFile, function(){ pdfFile=null; });
}});
ToolPro.bindSlider(document.getElementById('pnSize'), document.getElementById('pnSizeVal'), function(v){ return v+'pt'; });
document.getElementById('pnGo').addEventListener('click', async function(){
  if(!pdfFile){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second','err'); return; }
  var btn=this; btn.disabled=true; btn.textContent='⏳ Working…';
  try{
    var buf=await pdfFile.arrayBuffer();
    var doc=await PDFLib.PDFDocument.load(buf);
    var font=await doc.embedFont(PDFLib.StandardFonts.Helvetica);
    var pages=doc.getPages(), total=pages.length;
    var pos=document.getElementById('pnPos').value, fmt=document.getElementById('pnFmt').value;
    var start=parseInt(document.getElementById('pnStart').value,10)||1;
    var skip=Math.max(1, parseInt(document.getElementById('pnSkip').value,10)||1);
    var size=parseInt(document.getElementById('pnSize').value,10);
    var labelCount=total-skip+1;
    pages.forEach(function(page, idx){
      if(idx+1<skip) return;
      var n=start+(idx+1-skip);
      var label = fmt==='page' ? 'Page '+n : fmt==='of' ? 'Page '+n+' of '+(start+labelCount-1) : fmt==='dash' ? '- '+n+' -' : ''+n;
      var dims=page.getSize(), tw=font.widthOfTextAtSize(label, size), m=28;
      var x=dims.width/2-tw/2, y=m;
      if(pos==='bottom-right'){ x=dims.width-tw-m; y=m; }
      if(pos==='bottom-left'){ x=m; y=m; }
      if(pos==='top-center'){ x=dims.width/2-tw/2; y=dims.height-m-size; }
      if(pos==='top-right'){ x=dims.width-tw-m; y=dims.height-m-size; }
      page.drawText(label, {x:x, y:y, size:size, font:font, color:PDFLib.rgb(0.25,0.25,0.25)});
    });
    var out=await doc.save();
    var blob=new Blob([out], {type:'application/pdf'}); var url=URL.createObjectURL(blob);
    var res=document.getElementById('pnRes'); res.classList.add('show');
    document.getElementById('pnResSummary').textContent='Added numbers to '+(total-skip+1)+' of '+total+' pages.';
    var grid=document.getElementById('pnResGrid'); grid.innerHTML='';
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+pdfFile.name.replace(/\.pdf$/i,'')+'-numbered.pdf</p><p class="r-stats">'+total+' pages · '+ToolPro.fmtBytes(blob.size)+'</p>';
    var b=document.createElement('button'); b.type='button'; b.className='btn-pro'; b.textContent='⬇ Download PDF';
    b.addEventListener('click', function(){ ToolPro.download(url, pdfFile.name.replace(/\.pdf$/i,'')+'-numbered.pdf'); });
    card.appendChild(b); grid.appendChild(card);
    ToolPro.toast('Page numbers added','ok');
  }catch(e){ ToolPro.toast('Could not process that PDF','err'); }
  btn.disabled=false; btn.textContent='🔢 Add page numbers';
});
})();
</script>

## How it works

The tool loads your PDF with the pdf-lib library in your browser, embeds a standard font, and draws the number label you configured onto each page (skipping any leading pages you excluded). It then saves a new PDF copy for download. Because everything happens locally, even sensitive contracts and financial documents stay on your device.

## Everyday uses

- **Students** — number thesis chapters and assignments before submission.
- **Freelancers** — add "Page X of Y" to proposals and deliverables.
- **Authors** — number ebook and lead-magnet PDFs before publishing.
- **Offices** — stamp multi-page reports and meeting packs.

## Frequently asked questions

**Will the original PDF change?**

No — you download a new numbered copy; the file on your device is untouched.

**Can I skip numbering on a cover page?**

Yes. Set "First page to number" to 2 and page 1 stays clean while numbering starts on the next page.

**Is my document uploaded?**

Never. pdf-lib runs in your browser, so your PDF never leaves your device.
