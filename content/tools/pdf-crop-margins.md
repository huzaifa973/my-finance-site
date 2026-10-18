---
title: "Free PDF Margin Cropper — Trim PDF Page Margins Online"
description: "Trim white margins off every PDF page in your browser — uniform or custom per-side margins, handy inch presets, multi-file batch. Free forever, no sign-up, files never leave your device."
category: pdf
date: 2026-10-18
draft: false
---

Scanned documents and exported slides often ship with fat white borders that waste ink, look unprofessional, and bloat print layouts. Drop in one PDF or a whole batch, dial in the margin to trim — the same on all sides or custom per side — and download tight, clean copies. Cropping runs locally with pdf-lib; your files never leave your browser.

<div class="tool-shell" id="cmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V9H5v8c0 1.1.9 2 2 2h8v-2H7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Margin Cropper</h2>
<p>Trim white margins off every PDF page — uniform or per-side, with batch support, all in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="cmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDFs</p>
<div class="dropzone" id="cmDz">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — batch supported, up to 10 files</span>
<input type="file" id="cmFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="cmList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Margin settings</p>
<div class="settings-panel">
<div class="preset-row" id="cmPresets">
<button type="button" class="preset-chip active" data-m="0.25">✂️ Light trim · 0.25 in</button>
<button type="button" class="preset-chip" data-m="0.5">📄 Standard · 0.5 in</button>
<button type="button" class="preset-chip" data-m="1">🎯 Aggressive · 1 in</button>
</div>
<div class="settings-grid">
<div class="setting" id="cmAllWrap">
<label for="cmAll">Margin (all sides): <span class="val" id="cmAllV">0.25 in</span></label>
<input type="range" id="cmAll" min="0" max="2" step="0.05" value="0.25">
<div class="hint">0.25 in is safe for most documents — trims the border without touching content.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="cmCustom"><span></span> Custom margin per side</label>
<div class="hint">Need a bigger top margin for letterheads? Set each side separately.</div>
</div>
</div>
<div class="settings-grid" id="cmSides" style="display:none">
<div class="setting">
<label for="cmL">Left: <span class="val" id="cmLV">0.25 in</span></label>
<input type="range" id="cmL" min="0" max="2" step="0.05" value="0.25">
</div>
<div class="setting">
<label for="cmR">Right: <span class="val" id="cmRV">0.25 in</span></label>
<input type="range" id="cmR" min="0" max="2" step="0.05" value="0.25">
</div>
<div class="setting">
<label for="cmT">Top: <span class="val" id="cmTV">0.25 in</span></label>
<input type="range" id="cmT" min="0" max="2" step="0.05" value="0.25">
</div>
<div class="setting">
<label for="cmB">Bottom: <span class="val" id="cmBV">0.25 in</span></label>
<input type="range" id="cmB" min="0" max="2" step="0.05" value="0.25">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Crop &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cmGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Crop PDFs
</button>
<button type="button" class="btn-pro-outline" id="cmClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="cmProg">
<div class="progress-bar"><i id="cmBar"></i></div>
<div class="progress-text" id="cmTxt">Working…</div>
</div>
<div class="results" id="cmRes">
<p class="result-head">✅ Done — your cropped PDFs</p>
<div class="result-summary" id="cmSum"></div>
<div class="result-grid" id="cmGrid"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Crop as many PDFs as you like — everything runs in your browser, files never leave your device.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('cmShell');
ToolPro.themeToggle(shell, document.getElementById('cmTheme'));
var files=[];
var list=document.getElementById('cmList');
var go=document.getElementById('cmGo');
var clearBtn=document.getElementById('cmClear');
var custom=document.getElementById('cmCustom');
var allR=document.getElementById('cmAll'), allV=document.getElementById('cmAllV');
var sideBox=document.getElementById('cmSides');
var allWrap=document.getElementById('cmAllWrap');
var defs=[['cmL','cmLV'],['cmR','cmRV'],['cmT','cmTV'],['cmB','cmBV']];
var side={};
function fmtIn(v){ return (Math.round(parseFloat(v)*100)/100)+' in'; }
ToolPro.bindSlider(allR, allV, fmtIn);
defs.forEach(function(d){ var r=document.getElementById(d[0]); side[d[0]]=r; ToolPro.bindSlider(r, document.getElementById(d[1]), fmtIn); });
custom.addEventListener('change', function(){
  sideBox.style.display=custom.checked?'':'none';
  allWrap.style.display=custom.checked?'none':'';
});
document.getElementById('cmPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#cmPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  custom.checked=false; custom.dispatchEvent(new Event('change'));
  allR.value=chip.dataset.m; allR.dispatchEvent(new Event('input'));
  ToolPro.toast('Preset applied: '+chip.textContent.trim());
});
function refresh(){
  go.disabled=!files.length; clearBtn.disabled=!files.length;
  go.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Crop '+(files.length?files.length+(files.length===1?' PDF':' PDFs'):'PDFs');
}
ToolPro.dropzone(document.getElementById('cmDz'), {multiple:true, accept:'application/pdf', maxFiles:10,
  onFiles:function(arr){
    arr.forEach(function(f){
      if(files.some(function(x){ return x.file===f; })) return;
      var row=ToolPro.fileRow(list, f, function(dead){ files=files.filter(function(x){ return x.file!==dead; }); refresh(); });
      files.push({file:f, row:row});
    });
    document.getElementById('cmRes').classList.remove('show');
    refresh();
    ToolPro.toast(arr.length+(arr.length===1?' PDF':' PDFs')+' added','ok');
  }});
clearBtn.addEventListener('click', function(){
  files=[]; list.innerHTML='';
  document.getElementById('cmRes').classList.remove('show');
  refresh();
});
go.addEventListener('click', async function(){
  if(!files.length){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second','err'); return; }
  var mAll=parseFloat(allR.value)*72;
  var mL=custom.checked?parseFloat(side.cmL.value)*72:mAll;
  var mR=custom.checked?parseFloat(side.cmR.value)*72:mAll;
  var mT=custom.checked?parseFloat(side.cmT.value)*72:mAll;
  var mB=custom.checked?parseFloat(side.cmB.value)*72:mAll;
  var bar=document.getElementById('cmBar'), txt=document.getElementById('cmTxt'), wrap=document.getElementById('cmProg');
  var grid=document.getElementById('cmGrid'), res=document.getElementById('cmRes');
  go.disabled=true; wrap.classList.add('show'); res.classList.remove('show'); grid.innerHTML='';
  var totalPages=0;
  for(var i=0;i<files.length;i++){
    var entry=files[i];
    entry.row.setStatus('Working…','working');
    txt.textContent='Cropping '+(i+1)+' of '+files.length+'…';
    try{
      var doc=await PDFLib.PDFDocument.load(await entry.file.arrayBuffer());
      var pages=doc.getPages(), n=0;
      pages.forEach(function(page){
        var W=page.getWidth(), H=page.getHeight();
        var l=Math.min(mL,W*0.45), r=Math.min(mR,W*0.45), t=Math.min(mT,H*0.45), b=Math.min(mB,H*0.45);
        if(l+r<W && t+b<H){ page.setCropBox(l,b,W-l-r,H-t-b); n++; }
      });
      totalPages+=n;
      var out=await doc.save();
      var blob=new Blob([out],{type:'application/pdf'});
      var url=URL.createObjectURL(blob);
      var nm=entry.file.name.replace(/\.pdf$/i,'')+'-cropped.pdf';
      entry.row.setStatus('Done','done');
      var card=document.createElement('div'); card.className='result-card';
      var pn=document.createElement('p'); pn.className='r-name'; pn.textContent=nm;
      var ps=document.createElement('p'); ps.className='r-stats'; ps.textContent=n+' pages cropped · '+ToolPro.fmtBytes(blob.size);
      var b2=document.createElement('button'); b2.type='button'; b2.className='btn-pro'; b2.textContent='⬇ Download PDF';
      (function(u,nn){ b2.addEventListener('click',function(){ ToolPro.download(u,nn); }); })(url,nm);
      card.appendChild(pn); card.appendChild(ps); card.appendChild(b2); grid.appendChild(card);
    }catch(e){ entry.row.setStatus('Failed',''); }
    bar.style.width=Math.round((i+1)/files.length*100)+'%';
  }
  document.getElementById('cmSum').textContent='🎉 Cropped margins on '+totalPages+' pages across '+files.length+(files.length===1?' PDF':' PDFs')+'.';
  wrap.classList.remove('show'); res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
  go.disabled=false; ToolPro.toast('Margins cropped','ok');
});
refresh();
})();
</script>

## How it works

The tool loads your PDF with pdf-lib in your browser and rewrites each page's crop box — the visible rectangle PDF viewers render — shaving the chosen margin off every side. Uniform mode applies one value everywhere; per-side mode lets each edge differ (handy for letterheads and bound documents). Margins are clamped to 45% of the page so content can never be fully clipped. The original file is untouched; you download a new cropped copy.

## Everyday uses

- **Printing** — trim scanner-added borders so documents print edge-to-edge cleanly.
- **Presentations** — crop exported slide decks before sharing or embedding.
- **Students** — tighten scanned assignment PDFs before uploading to portals with size limits.
- **Offices** — batch-crop multi-file reports for a consistent, professional look.

## Frequently asked questions

**Does cropping delete the hidden content?**

Cropping sets the visible crop box — the content outside it is hidden, not deleted. To permanently remove it, print the cropped PDF to a new PDF.

**Will this work on scanned PDFs?**

Yes. Scans are just images on a page, and the crop box applies to the whole page regardless of content type.

**Is my document uploaded anywhere?**

Never. pdf-lib runs entirely in your browser, so your files never leave your device.
