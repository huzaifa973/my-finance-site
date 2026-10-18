---
title: "Free PDF Color Inverter — Dark Mode PDFs Online"
description: "Invert PDF colors for comfortable dark-mode reading in your browser — classic, sepia, or cool night tints. Free forever, no sign-up, files never leave your device."
category: pdf
date: 2026-10-18
draft: false
---

Reading bright white PDFs at night strains your eyes. This tool flips every page to a dark background with light text — pick classic black-on-white inversion or a warm sepia or cool blue night tint — so long documents become comfortable night reading. It works on text, images, and scans alike, entirely in your browser with pdf-lib; your files are never uploaded anywhere.

<div class="tool-shell" id="ivShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.34 0 .68-.02 1.01-.07-1.14-.85-1.88-2.2-1.88-3.74 0-.97.39-1.85 1.03-2.5L12 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Color Inverter</h2>
<p>Flip PDFs to dark mode for night reading — classic invert, sepia night, or cool night tints, processed privately.</p>
</div>
<button type="button" class="theme-toggle" id="ivTheme">🌙 Dark</button>
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
<div class="dropzone" id="ivDz">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — batch supported, up to 10 files</span>
<input type="file" id="ivFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="ivList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Inversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="ivPresets">
<button type="button" class="preset-chip active" data-tint="white">🌙 Classic invert</button>
<button type="button" class="preset-chip" data-tint="warm">☕ Sepia night</button>
<button type="button" class="preset-chip" data-tint="cool">💧 Cool night</button>
<button type="button" class="preset-chip" data-tint="amber">🔥 Amber night</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ivTint">Night tint</label>
<select id="ivTint">
<option value="white" selected>Classic — pure invert</option>
<option value="warm">Warm — sepia night</option>
<option value="cool">Cool — blue night</option>
<option value="amber">Amber — low-blue night</option>
</select>
<div class="hint">Tinted modes reduce blue light further — easier on the eyes before bed.</div>
</div>
<div class="setting">
<span class="t-label">First page to invert</span>
<input type="number" class="tool-input" id="ivSkip" value="1" min="1">
<div class="hint">Set to 2 to keep a colorful cover page untouched.</div>
</div>
</div>
<div class="hint">⚠️ Inversion uses a PDF blend-mode overlay — it renders correctly in Chrome, Edge, Acrobat, and most modern readers. Very old viewers may show it slightly differently.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Invert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ivGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Invert PDFs
</button>
<button type="button" class="btn-pro-outline" id="ivClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="ivProg">
<div class="progress-bar"><i id="ivBar"></i></div>
<div class="progress-text" id="ivTxt">Working…</div>
</div>
<div class="results" id="ivRes">
<p class="result-head">✅ Done — your dark-mode PDFs</p>
<div class="result-summary" id="ivSum"></div>
<div class="result-grid" id="ivGrid"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Invert as many PDFs as you like — everything runs in your browser, files never leave your device.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('ivShell');
ToolPro.themeToggle(shell, document.getElementById('ivTheme'));
var files=[];
var list=document.getElementById('ivList');
var go=document.getElementById('ivGo');
var clearBtn=document.getElementById('ivClear');
var tintSel=document.getElementById('ivTint');
var skipIn=document.getElementById('ivSkip');
var TINTS={ white:[1,1,1], warm:[1,0.94,0.82], cool:[0.82,0.92,1], amber:[1,0.85,0.6] };
document.getElementById('ivPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#ivPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  tintSel.value=chip.dataset.tint;
  ToolPro.toast('Preset applied: '+chip.textContent.trim());
});
function refresh(){
  go.disabled=!files.length; clearBtn.disabled=!files.length;
  go.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Invert '+(files.length?files.length+(files.length===1?' PDF':' PDFs'):'PDFs');
}
ToolPro.dropzone(document.getElementById('ivDz'), {multiple:true, accept:'application/pdf', maxFiles:10,
  onFiles:function(arr){
    arr.forEach(function(f){
      if(files.some(function(x){ return x.file===f; })) return;
      var row=ToolPro.fileRow(list, f, function(dead){ files=files.filter(function(x){ return x.file!==dead; }); refresh(); });
      files.push({file:f, row:row});
    });
    document.getElementById('ivRes').classList.remove('show');
    refresh();
    ToolPro.toast(arr.length+(arr.length===1?' PDF':' PDFs')+' added','ok');
  }});
clearBtn.addEventListener('click', function(){
  files=[]; list.innerHTML='';
  document.getElementById('ivRes').classList.remove('show');
  refresh();
});
go.addEventListener('click', async function(){
  if(!files.length){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second','err'); return; }
  var tint=TINTS[tintSel.value]||TINTS.white;
  var skip=Math.max(1, parseInt(skipIn.value,10)||1);
  var bar=document.getElementById('ivBar'), txt=document.getElementById('ivTxt'), wrap=document.getElementById('ivProg');
  var grid=document.getElementById('ivGrid'), res=document.getElementById('ivRes');
  go.disabled=true; wrap.classList.add('show'); res.classList.remove('show'); grid.innerHTML='';
  var totalPages=0;
  for(var i=0;i<files.length;i++){
    var entry=files[i];
    entry.row.setStatus('Working…','working');
    txt.textContent='Inverting '+(i+1)+' of '+files.length+'…';
    try{
      var doc=await PDFLib.PDFDocument.load(await entry.file.arrayBuffer());
      var pages=doc.getPages(), n=0;
      var gs=doc.context.obj({ BM: PDFLib.PDFName.of('Difference'), ca: PDFLib.PDFNumber.of(1), CA: PDFLib.PDFNumber.of(1) });
      var gsRef=doc.context.register(gs);
      pages.forEach(function(page, idx){
        if(idx+1<skip) return;
        page.node.addExtGState('DWInv', gsRef);
        var W=page.getWidth(), H=page.getHeight();
        page.pushOperators(
          PDFLib.pushGraphicsState(),
          PDFLib.setGraphicsState('DWInv'),
          PDFLib.drawRectangle({ x:0, y:0, width:W, height:H, color:PDFLib.rgb(tint[0],tint[1],tint[2]), opacity:1 }),
          PDFLib.popGraphicsState()
        );
        n++;
      });
      totalPages+=n;
      var out=await doc.save();
      var blob=new Blob([out],{type:'application/pdf'});
      var url=URL.createObjectURL(blob);
      var nm=entry.file.name.replace(/\.pdf$/i,'')+'-dark.pdf';
      entry.row.setStatus('Done','done');
      var card=document.createElement('div'); card.className='result-card';
      var pn=document.createElement('p'); pn.className='r-name'; pn.textContent=nm;
      var ps=document.createElement('p'); ps.className='r-stats'; ps.textContent=n+' pages inverted · '+ToolPro.fmtBytes(blob.size);
      var b2=document.createElement('button'); b2.type='button'; b2.className='btn-pro'; b2.textContent='⬇ Download PDF';
      (function(u,nn){ b2.addEventListener('click',function(){ ToolPro.download(u,nn); }); })(url,nm);
      card.appendChild(pn); card.appendChild(ps); card.appendChild(b2); grid.appendChild(card);
    }catch(e){ entry.row.setStatus('Failed',''); }
    bar.style.width=Math.round((i+1)/files.length*100)+'%';
  }
  document.getElementById('ivSum').textContent='🎉 Inverted '+totalPages+' pages across '+files.length+(files.length===1?' PDF':' PDFs')+'.';
  wrap.classList.remove('show'); res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
  go.disabled=false; ToolPro.toast('Colors inverted','ok');
});
refresh();
})();
</script>

## How it works

The tool loads your PDF with pdf-lib and draws a full-page overlay using the PDF "Difference" blend mode — a white overlay turns every color into its exact inverse (black text becomes white, photos become negatives), while sepia or blue tints produce warmer or cooler night themes. The overlay sits above existing text, vector graphics, images, and scans, so everything on the page inverts consistently. A new dark-mode copy is saved for download; the original stays untouched.

## Everyday uses

- **Night readers** — convert ebooks and research papers to dark mode for comfortable bedtime reading.
- **Students** — invert lecture slides and past papers to reduce eye strain during late study sessions.
- **Developers** — read white-background spec PDFs in a dark room without the glare.
- **Travelers** — dark PDFs are easier on the eyes and draw less attention on dim flights.

## Frequently asked questions

**Will text stay selectable after inverting?**

Yes. The inversion is a blend-mode overlay above the original content — text, links, and structure are fully preserved.

**Why do photos look like negatives?**

Difference blending inverts every pixel, including images. That is the correct behavior for true dark mode; use a tinted mode if pure negatives feel harsh.

**Is my document uploaded anywhere?**

Never. pdf-lib runs entirely in your browser, so your files never leave your device.
