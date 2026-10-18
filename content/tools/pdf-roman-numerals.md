---
title: "Free Roman Numeral Page Numbers for PDF — Number Pages I, II, III"
description: "Add elegant roman numeral page numbers (I, II, III or i, ii, iii) to any PDF in your browser — position, format, start value. Free forever, no sign-up, private."
category: pdf
date: 2026-10-18
draft: false
---

Theses, books, and formal reports traditionally number their front matter in roman numerals — i, ii, iii — before the body switches to arabic digits. This tool stamps clean roman numeral page numbers on any PDF: uppercase or lowercase, "Page iv" or "iv of xii" formats, your choice of position and start value. It runs entirely in your browser with pdf-lib; your document is never uploaded anywhere.

<div class="tool-shell" id="rnShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8V6H2v1zm4 8h6v-2H7v2zm0-4h6v-2H7v2zm0-4h6V9H7v2zm0-4h6V5H7v2zm11-2v10l-2.5-1.5L13 14h1.5V5H19z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Roman Numeral Page Numbers</h2>
<p>Number PDF pages I, II, III… — the classic style for theses, books, and formal front matter, stamped privately in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="rnTheme">🌙 Dark</button>
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
<div class="dropzone" id="rnDz">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your file here</strong>
<span>or click to browse — one PDF per run</span>
<input type="file" id="rnFile" accept="application/pdf">
</div>
<ul class="file-list" id="rnList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Numeral settings</p>
<div class="settings-panel">
<div class="preset-row" id="rnPresets">
<button type="button" class="preset-chip active" data-s="upper" data-f="plain">🏛️ I, II, III</button>
<button type="button" class="preset-chip" data-s="lower" data-f="plain">📜 i, ii, iii</button>
<button type="button" class="preset-chip" data-s="upper" data-f="of">📖 Page IV of XII</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rnStyle">Numeral style</label>
<select id="rnStyle">
<option value="upper" selected>Uppercase — I, II, III, IV</option>
<option value="lower">Lowercase — i, ii, iii, iv</option>
</select>
</div>
<div class="setting">
<label for="rnFmt">Label format</label>
<select id="rnFmt">
<option value="plain" selected>iv</option>
<option value="page">Page iv</option>
<option value="of">Page iv of xii</option>
</select>
</div>
<div class="setting">
<span class="t-label">Start numbering at</span>
<input type="number" class="tool-input" id="rnStart" value="1" min="1">
<div class="hint">1 → I. Use a higher value if earlier pages were numbered elsewhere.</div>
</div>
<div class="setting">
<span class="t-label">First page to number</span>
<input type="number" class="tool-input" id="rnSkip" value="1" min="1">
<div class="hint">Set to 2 to leave the cover page unnumbered.</div>
</div>
<div class="setting">
<label for="rnPos">Position</label>
<select id="rnPos">
<option value="bottom-center" selected>Bottom center</option>
<option value="bottom-right">Bottom right</option>
<option value="bottom-left">Bottom left</option>
<option value="top-center">Top center</option>
<option value="top-right">Top right</option>
</select>
</div>
<div class="setting">
<label for="rnSize">Font size: <span class="val" id="rnSizeV">11pt</span></label>
<input type="range" id="rnSize" min="8" max="24" value="11">
</div>
</div>
<div class="hint">💡 Thesis trick: number the front matter here (i, ii, iii…), then number the body with arabic digits in a second pass.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Stamp &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rnGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Add Roman Numerals
</button>
<button type="button" class="btn-pro-outline" id="rnClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="rnProg">
<div class="progress-bar"><i id="rnBar"></i></div>
<div class="progress-text" id="rnTxt">Working…</div>
</div>
<div class="results" id="rnRes">
<p class="result-head">✅ Numbered PDF</p>
<div class="result-summary" id="rnSum"></div>
<div class="result-grid" id="rnGrid"></div>
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
var shell=document.getElementById('rnShell');
ToolPro.themeToggle(shell, document.getElementById('rnTheme'));
var pdfFile=null;
var list=document.getElementById('rnList');
var go=document.getElementById('rnGo');
var clearBtn=document.getElementById('rnClear');
var styleSel=document.getElementById('rnStyle'), fmtSel=document.getElementById('rnFmt');
var startIn=document.getElementById('rnStart'), skipIn=document.getElementById('rnSkip');
var posSel=document.getElementById('rnPos');
var sizeR=document.getElementById('rnSize'), sizeV=document.getElementById('rnSizeV');
ToolPro.bindSlider(sizeR, sizeV, function(v){ return v+'pt'; });
document.getElementById('rnPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#rnPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  styleSel.value=chip.dataset.s; fmtSel.value=chip.dataset.f;
  ToolPro.toast('Preset applied: '+chip.textContent.trim());
});
function roman(n, upper){
  var table=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  var s='';
  for(var i=0;i<table.length;i++){ while(n>=table[i][0]){ s+=table[i][1]; n-=table[i][0]; } }
  return upper?s:s.toLowerCase();
}
function refresh(){ go.disabled=!pdfFile; clearBtn.disabled=!pdfFile; }
ToolPro.dropzone(document.getElementById('rnDz'), {accept:'application/pdf',
  onFiles:function(arr){
    pdfFile=arr[0]||null; list.innerHTML='';
    if(pdfFile) ToolPro.fileRow(list, pdfFile, function(){ pdfFile=null; refresh(); });
    document.getElementById('rnRes').classList.remove('show');
    refresh();
    if(pdfFile) ToolPro.toast('PDF added','ok');
  }});
clearBtn.addEventListener('click', function(){
  pdfFile=null; list.innerHTML='';
  document.getElementById('rnRes').classList.remove('show');
  refresh();
});
go.addEventListener('click', async function(){
  if(!pdfFile){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second','err'); return; }
  var upper=styleSel.value==='upper', fmt=fmtSel.value;
  var start=Math.max(1, parseInt(startIn.value,10)||1);
  var skip=Math.max(1, parseInt(skipIn.value,10)||1);
  var pos=posSel.value, size=parseInt(sizeR.value,10);
  var wrap=document.getElementById('rnProg'), res=document.getElementById('rnRes');
  var grid=document.getElementById('rnGrid');
  go.disabled=true; go.textContent='⏳ Working…';
  wrap.classList.add('show'); res.classList.remove('show'); grid.innerHTML='';
  try{
    var doc=await PDFLib.PDFDocument.load(await pdfFile.arrayBuffer());
    var font=await doc.embedFont(PDFLib.StandardFonts.Helvetica);
    var pages=doc.getPages(), total=pages.length;
    var count=Math.max(0, total-skip+1);
    var lastRoman=roman(start+count-1, upper);
    pages.forEach(function(page, idx){
      if(idx+1<skip) return;
      var n=start+(idx+1-skip);
      var r=roman(n, upper);
      var label=fmt==='page'?'Page '+r:fmt==='of'?'Page '+r+' of '+lastRoman:r;
      var W=page.getWidth(), H=page.getHeight(), m=28;
      var tw=font.widthOfTextAtSize(label, size);
      var x=W/2-tw/2, y=m;
      if(pos==='bottom-right'){ x=W-tw-m; y=m; }
      if(pos==='bottom-left'){ x=m; y=m; }
      if(pos==='top-center'){ x=W/2-tw/2; y=H-m-size; }
      if(pos==='top-right'){ x=W-tw-m; y=H-m-size; }
      page.drawText(label, {x:x, y:y, size:size, font:font, color:PDFLib.rgb(0.25,0.25,0.25)});
    });
    var out=await doc.save();
    var blob=new Blob([out],{type:'application/pdf'});
    var url=URL.createObjectURL(blob);
    var nm=pdfFile.name.replace(/\.pdf$/i,'')+'-roman.pdf';
    document.getElementById('rnSum').textContent='Stamped '+roman(start,upper)+'–'+lastRoman+' on '+count+' of '+total+' pages.';
    var card=document.createElement('div'); card.className='result-card';
    var pn=document.createElement('p'); pn.className='r-name'; pn.textContent=nm;
    var ps=document.createElement('p'); ps.className='r-stats'; ps.textContent=total+' pages · '+ToolPro.fmtBytes(blob.size);
    var b2=document.createElement('button'); b2.type='button'; b2.className='btn-pro'; b2.textContent='⬇ Download PDF';
    b2.addEventListener('click', function(){ ToolPro.download(url, nm); });
    card.appendChild(pn); card.appendChild(ps); card.appendChild(b2); grid.appendChild(card);
    res.classList.add('show');
    res.scrollIntoView({behavior:'smooth',block:'nearest'});
    ToolPro.toast('Roman numerals added','ok');
  }catch(e){ ToolPro.toast('Could not process that PDF','err'); }
  wrap.classList.remove('show');
  go.disabled=false; go.textContent='Add Roman Numerals';
});
refresh();
})();
</script>

## How it works

The tool loads your PDF with pdf-lib in your browser, embeds a standard font, and draws a roman numeral label (I, II, III… or i, ii, iii…) on each page from your chosen start page — skipping cover pages if you like. Numerals are computed with a classic subtractive-notation converter, so 4 becomes IV and 9 becomes IX. A new numbered copy is saved for download; the original file is untouched.

## Everyday uses

- **Students** — number thesis front matter (abstract, contents, acknowledgements) in roman numerals.
- **Authors** — give ebooks and printed books a traditional front-matter feel.
- **Legal & formal reports** — match institutional formatting requirements for preliminary pages.
- **Designers** — add elegant roman numerals to portfolios and lookbooks.

## Frequently asked questions

**Can I mix roman and arabic numerals in one PDF?**

Yes — run this tool on the front matter pages first, then use an arabic page-number tool on the body. Set "First page to number" to control where each pass applies.

**What is the largest numeral supported?**

The converter handles any practical page count (I up to MMMCMXCIX / 3999 and beyond).

**Is my document uploaded anywhere?**

Never. pdf-lib runs entirely in your browser, so your files never leave your device.
