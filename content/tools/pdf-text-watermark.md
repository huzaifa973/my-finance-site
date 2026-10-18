---
title: "Free PDF Watermark Tool — Add Text Watermark to PDF Online"
description: "Add a diagonal text watermark to every PDF page in your browser — DRAFT, CONFIDENTIAL, custom text, angle, opacity, tiled or single. Free forever, no sign-up, private."
category: pdf
date: 2026-10-18
draft: false
---

Mark drafts, protect previews, and brand shared documents with a diagonal text watermark stamped across every page. Type any text — DRAFT, CONFIDENTIAL, SAMPLE, your company name — then tune the angle, size, opacity, and color, or tile it across the page like professional review copies. Everything runs locally with pdf-lib; your files never leave your browser.

<div class="tool-shell" id="wmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 4v3h5v13h3V7h5V4H5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Text Watermark</h2>
<p>Stamp diagonal text watermarks across PDF pages — angle, opacity, color, and tiled or single layout, all private.</p>
</div>
<button type="button" class="theme-toggle" id="wmTheme">🌙 Dark</button>
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
<div class="dropzone" id="wmDz">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — batch supported, up to 10 files</span>
<input type="file" id="wmFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="wmList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Watermark settings</p>
<div class="settings-panel">
<div class="preset-row" id="wmPresets">
<button type="button" class="preset-chip active" data-t="DRAFT">📝 DRAFT</button>
<button type="button" class="preset-chip" data-t="CONFIDENTIAL">🔒 CONFIDENTIAL</button>
<button type="button" class="preset-chip" data-t="SAMPLE">🏷️ SAMPLE</button>
<button type="button" class="preset-chip" data-t="DO NOT COPY">⛔ DO NOT COPY</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="wmText">Watermark text</label>
<input type="text" class="tool-input" id="wmText" value="DRAFT" maxlength="60" placeholder="e.g. DRAFT">
</div>
<div class="setting">
<label for="wmAngle">Angle: <span class="val" id="wmAngleV">45°</span></label>
<input type="range" id="wmAngle" min="-60" max="60" value="45">
</div>
<div class="setting">
<label for="wmSize">Font size: <span class="val" id="wmSizeV">48pt</span></label>
<input type="range" id="wmSize" min="12" max="120" value="48">
<div class="hint">48pt at 45° is the classic review-copy look.</div>
</div>
<div class="setting">
<label for="wmOp">Opacity: <span class="val" id="wmOpV">18%</span></label>
<input type="range" id="wmOp" min="5" max="60" value="18">
<div class="hint">15–20% stays readable over the text beneath.</div>
</div>
<div class="setting">
<label for="wmColor">Color</label>
<select id="wmColor">
<option value="gray" selected>Gray — subtle</option>
<option value="red">Red — urgent</option>
<option value="blue">Blue — corporate</option>
<option value="green">Green — approved</option>
</select>
</div>
<div class="setting">
<label for="wmLayout">Layout</label>
<select id="wmLayout">
<option value="single" selected>Single — page center</option>
<option value="repeat">Tiled — repeated grid</option>
</select>
<div class="hint">Tiled watermarks are harder to crop out of screenshots.</div>
</div>
<div class="setting">
<span class="t-label">First page to stamp</span>
<input type="number" class="tool-input" id="wmSkip" value="1" min="1">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Stamp &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wmGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Add Watermark
</button>
<button type="button" class="btn-pro-outline" id="wmClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="wmProg">
<div class="progress-bar"><i id="wmBar"></i></div>
<div class="progress-text" id="wmTxt">Working…</div>
</div>
<div class="results" id="wmRes">
<p class="result-head">✅ Done — your watermarked PDFs</p>
<div class="result-summary" id="wmSum"></div>
<div class="result-grid" id="wmGrid"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Watermark as many PDFs as you like — everything runs in your browser, files never leave your device.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('wmShell');
ToolPro.themeToggle(shell, document.getElementById('wmTheme'));
var files=[];
var list=document.getElementById('wmList');
var go=document.getElementById('wmGo');
var clearBtn=document.getElementById('wmClear');
var textIn=document.getElementById('wmText');
var angleR=document.getElementById('wmAngle'), angleV=document.getElementById('wmAngleV');
var sizeR=document.getElementById('wmSize'), sizeV=document.getElementById('wmSizeV');
var opR=document.getElementById('wmOp'), opV=document.getElementById('wmOpV');
var colorSel=document.getElementById('wmColor'), layoutSel=document.getElementById('wmLayout');
var skipIn=document.getElementById('wmSkip');
var COLORS={ gray:[0.45,0.45,0.45], red:[0.75,0.15,0.15], blue:[0.15,0.35,0.75], green:[0.15,0.55,0.3] };
ToolPro.bindSlider(angleR, angleV, function(v){ return v+'°'; });
ToolPro.bindSlider(sizeR, sizeV, function(v){ return v+'pt'; });
ToolPro.bindSlider(opR, opV, function(v){ return v+'%'; });
document.getElementById('wmPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#wmPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  textIn.value=chip.dataset.t;
  refresh();
  ToolPro.toast('Watermark text: '+chip.dataset.t);
});
function refresh(){
  var ok=files.length && textIn.value.trim().length>0;
  go.disabled=!ok; clearBtn.disabled=!files.length;
  go.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Stamp '+(files.length?files.length+(files.length===1?' PDF':' PDFs'):'PDFs');
}
textIn.addEventListener('input', refresh);
ToolPro.dropzone(document.getElementById('wmDz'), {multiple:true, accept:'application/pdf', maxFiles:10,
  onFiles:function(arr){
    arr.forEach(function(f){
      if(files.some(function(x){ return x.file===f; })) return;
      var row=ToolPro.fileRow(list, f, function(dead){ files=files.filter(function(x){ return x.file!==dead; }); refresh(); });
      files.push({file:f, row:row});
    });
    document.getElementById('wmRes').classList.remove('show');
    refresh();
    ToolPro.toast(arr.length+(arr.length===1?' PDF':' PDFs')+' added','ok');
  }});
clearBtn.addEventListener('click', function(){
  files=[]; list.innerHTML='';
  document.getElementById('wmRes').classList.remove('show');
  refresh();
});
go.addEventListener('click', async function(){
  var text=textIn.value.trim();
  if(!files.length){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!text){ ToolPro.toast('Type your watermark text first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second','err'); return; }
  var angle=parseInt(angleR.value,10), size=parseInt(sizeR.value,10), op=parseInt(opR.value,10)/100;
  var col=COLORS[colorSel.value]||COLORS.gray, tiled=layoutSel.value==='repeat';
  var skip=Math.max(1, parseInt(skipIn.value,10)||1);
  var rad=angle*Math.PI/180, cos=Math.cos(rad), sin=Math.sin(rad);
  var bar=document.getElementById('wmBar'), txt=document.getElementById('wmTxt'), wrap=document.getElementById('wmProg');
  var grid=document.getElementById('wmGrid'), res=document.getElementById('wmRes');
  go.disabled=true; wrap.classList.add('show'); res.classList.remove('show'); grid.innerHTML='';
  var totalPages=0;
  for(var i=0;i<files.length;i++){
    var entry=files[i];
    entry.row.setStatus('Working…','working');
    txt.textContent='Stamping '+(i+1)+' of '+files.length+'…';
    try{
      var doc=await PDFLib.PDFDocument.load(await entry.file.arrayBuffer());
      var font=await doc.embedFont(PDFLib.StandardFonts.HelveticaBold);
      var pages=doc.getPages(), n=0;
      var tw=font.widthOfTextAtSize(text, size);
      pages.forEach(function(page, idx){
        if(idx+1<skip) return;
        var W=page.getWidth(), H=page.getHeight();
        function stamp(cx, cy){
          page.drawText(text, { x:cx-(tw/2)*cos, y:cy-(tw/2)*sin, size:size, font:font,
            color:PDFLib.rgb(col[0],col[1],col[2]), opacity:op, rotate:PDFLib.degrees(angle) });
        }
        if(tiled){ for(var gx=W/6; gx<W; gx+=W/3){ for(var gy=H/8; gy<H; gy+=H/4){ stamp(gx,gy); } } }
        else stamp(W/2, H/2);
        n++;
      });
      totalPages+=n;
      var out=await doc.save();
      var blob=new Blob([out],{type:'application/pdf'});
      var url=URL.createObjectURL(blob);
      var nm=entry.file.name.replace(/\.pdf$/i,'')+'-watermarked.pdf';
      entry.row.setStatus('Done','done');
      var card=document.createElement('div'); card.className='result-card';
      var pn=document.createElement('p'); pn.className='r-name'; pn.textContent=nm;
      var ps=document.createElement('p'); ps.className='r-stats'; ps.textContent=n+' pages stamped · '+ToolPro.fmtBytes(blob.size);
      var b2=document.createElement('button'); b2.type='button'; b2.className='btn-pro'; b2.textContent='⬇ Download PDF';
      (function(u,nn){ b2.addEventListener('click',function(){ ToolPro.download(u,nn); }); })(url,nm);
      card.appendChild(pn); card.appendChild(ps); card.appendChild(b2); grid.appendChild(card);
    }catch(e){ entry.row.setStatus('Failed',''); }
    bar.style.width=Math.round((i+1)/files.length*100)+'%';
  }
  document.getElementById('wmSum').textContent='🎉 Watermarked '+totalPages+' pages across '+files.length+(files.length===1?' PDF':' PDFs')+'.';
  wrap.classList.remove('show'); res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
  go.disabled=false; ToolPro.toast('Watermark added','ok');
});
refresh();
})();
</script>

## How it works

The tool loads your PDF with pdf-lib in your browser, embeds a bold font, and draws your watermark text on each page at the angle you chose — centered for the classic review-copy look, or tiled in a grid that is much harder to crop out of screenshots. Opacity keeps the mark visible without hiding the content beneath. A new watermarked copy is saved for download; the original file is untouched.

## Everyday uses

- **Freelancers** — stamp DRAFT on proposals and mockups before sending to clients.
- **Authors** — mark review copies of ebooks as SAMPLE to discourage piracy.
- **HR & legal** — stamp CONFIDENTIAL on sensitive documents before sharing.
- **Photographers** — watermark PDF portfolios and contact sheets with your studio name.

## Frequently asked questions

**Can the watermark be removed from the PDF?**

A determined user with PDF editing software can remove any text watermark. For stronger protection, combine a tiled watermark with sharing only low-resolution copies.

**Will the watermark cover the text?**

No — at the default 18% opacity the watermark sits visibly above the page but the content beneath stays fully readable.

**Is my document uploaded anywhere?**

Never. pdf-lib runs entirely in your browser, so your files never leave your device.
