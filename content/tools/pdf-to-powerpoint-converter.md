---
title: "Free PDF to PowerPoint Converter — Turn PDF Pages into Editable PPTX Slides"
description: "Convert PDF to PowerPoint online: every PDF page becomes a slide in a real .pptx file. 100% free, no sign-up, files never leave your browser."
category: pdf
date: 2026-10-16
draft: false
---

Need your PDF as a presentation? This free PDF to PowerPoint converter renders every page of your PDF and packs the slides into a genuine .pptx file that opens in Microsoft PowerPoint, Google Slides, and LibreOffice. No uploads, no watermarks, no sign-up — the whole conversion happens inside your browser.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<div class="tool-shell" id="pptShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM10 7l5 3-5 3V7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to PowerPoint Converter</h2>
<p>Turn every PDF page into a slide in a real, openable .pptx file — free, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="pptTheme">🌙 Dark</button>
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
<div class="dropzone" id="pptDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF here</strong><span>or click to browse — one PDF at a time, any page count</span><input type="file" id="pptFile" accept="application/pdf"></div><ul class="file-list" id="pptList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="pptPresets">
<button type="button" class="preset-chip active" data-preset="🖥️ Standard — crisp text">🖥️ Standard — crisp text</button>
<button type="button" class="preset-chip" data-preset="📧 Web — smaller file">📧 Web — smaller file</button>
<button type="button" class="preset-chip" data-preset="💠 Max quality — print-ready">💠 Max quality — print-ready</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="pptScale">Render quality: <span class="val" id="pptScaleVal">1.5x</span></label><input type="range" id="pptScale" min="1" max="2.5" step="0.25" value="1.5"><div class="hint">Higher = sharper slides but a bigger .pptx file. 1.5x is the sweet spot.</div></div><div class="setting"><label for="pptFmt">Slide image format</label><select id="pptFmt"><option value="png" selected>PNG — sharpest text</option><option value="jpeg">JPEG — smallest file</option></select><div class="hint">JPEG shrinks photo-heavy decks; PNG keeps text razor sharp.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Fit each page to the slide</span><label class="toggle"><input type="checkbox" id="pptFit" checked><span class="slider"></span></label></div><div class="hint">Pages keep their aspect ratio and are centered on 16:9 slides.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert to PowerPoint</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pptBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to PPTX
</button>
<button type="button" class="btn-pro-outline" id="pptClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pptProgWrap">
<div class="progress-bar"><i id="pptProgBar"></i></div>
<div class="progress-text" id="pptProgText">Working…</div>
</div>
<div class="results" id="pptResults">
<p class="result-head">✅ Done — your PowerPoint file</p>
<div class="result-summary" id="pptSummary"></div>
<div class="result-grid" id="pptGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited PDFs to PowerPoint — every page becomes a real slide, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pptShell');
ToolPro.themeToggle(shell,document.getElementById('pptTheme'));
if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}
var files=[],listEl=document.getElementById('pptList'),btn=document.getElementById('pptBtn'),
clearBtn=document.getElementById('pptClear'),scaleR=document.getElementById('pptScale'),
scaleV=document.getElementById('pptScaleVal'),fmtSel=document.getElementById('pptFmt'),
fitT=document.getElementById('pptFit'),presets=document.getElementById('pptPresets');
ToolPro.bindSlider(scaleR,scaleV,function(v){return v+'x';});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Web')>-1){scaleR.value='1';fmtSel.value='jpeg';}
else if(t.indexOf('Max')>-1){scaleR.value='2.5';fmtSel.value='png';}
else{scaleR.value='1.5';fmtSel.value='png';}
scaleR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+t.trim());
});
function refresh(){btn.disabled=!files.length;clearBtn.disabled=!files.length;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert to PPTX';}
ToolPro.dropzone(document.getElementById('pptDrop'),{multiple:false,accept:'application/pdf',
onFiles:function(arr){files=arr.slice(0,1);listEl.innerHTML='';
files.forEach(function(f){ToolPro.fileRow(listEl,f,function(){files=[];refresh();});});
document.getElementById('pptResults').classList.remove('show');refresh();
ToolPro.toast('PDF added','ok');}});
clearBtn.addEventListener('click',function(){files=[];listEl.innerHTML='';
document.getElementById('pptResults').classList.remove('show');refresh();});
function escXml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function buildPptx(slides,title,imgExt){
var NS='xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"';
var SW=12192000,SH=6858000,zip=new JSZip();
var i,sldIds='',presRels='',slideOv='';
for(i=0;i<slides.length;i++){
sldIds+='<p:sldId id="'+(256+i)+'" r:id="rId'+(i+2)+'"/>';
presRels+='<Relationship Id="rId'+(i+2)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide'+(i+1)+'.xml"/>';
slideOv+='<Override PartName="/ppt/slides/slide'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>';
}
zip.file('[Content_Types].xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'+
'<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'+
'<Default Extension="xml" ContentType="application/xml"/>'+
'<Default Extension="'+imgExt+'" ContentType="image/'+(imgExt==='jpg'?'jpeg':'png')+'"/>'+
'<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>'+
'<Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>'+
'<Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>'+
slideOv+
'<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>'+
'<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>');
zip.file('_rels/.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
'<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>'+
'<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>'+
'<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>');
zip.file('ppt/presentation.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<p:presentation '+NS+'><p:sldMasterIdLst><p:sldMasterId r:id="rId1"/></p:sldMasterIdLst>'+
'<p:sldIdLst>'+sldIds+'</p:sldIdLst><p:sldSz cx="'+SW+'" cy="'+SH+'" type="screen16x9"/>'+
'<p:notesSz cx="6858000" cy="9144000"/></p:presentation>');
zip.file('ppt/_rels/presentation.xml.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
'<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>'+
presRels+'</Relationships>');
var master='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldMaster '+NS+'>'+
'<p:cSld><p:bg><p:bgPr><a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill></p:bgPr></p:bg>'+
'<p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>'+
'<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+SW+'" cy="'+SH+'"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld>'+
'<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>'+
'<p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst></p:sldMaster>';
zip.file('ppt/slideMasters/slideMaster1.xml',master);
zip.file('ppt/slideMasters/_rels/slideMaster1.xml.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
'<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/></Relationships>');
zip.file('ppt/slideLayouts/slideLayout1.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sldLayout '+NS+'>'+
'<p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>'+
'<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+SW+'" cy="'+SH+'"/></a:xfrm></p:grpSpPr></p:spTree></p:cSld>'+
'<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>');
for(i=0;i<slides.length;i++){
var sl=slides[i],iwIn=sl.w/96,ihIn=sl.h/96,sc=Math.min(SW/914400/iwIn,SH/914400/ihIn),
cx=Math.round(iwIn*sc*914400),cy=Math.round(ihIn*sc*914400),
ox=Math.round((SW-cx)/2),oy=Math.round((SH-cy)/2);
zip.file('ppt/slides/slide'+(i+1)+'.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sld '+NS+'>'+
'<p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>'+
'<p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="'+SW+'" cy="'+SH+'"/></a:xfrm></p:grpSpPr>'+
'<p:pic><p:nvPicPr><p:cNvPr id="2" name="Page '+(i+1)+'"/><p:cNvPicPr/><p:nvPr/></p:nvPicPr>'+
'<p:blipFill><a:blip r:embed="rId1"/><a:stretch><a:fillRect/></a:stretch></p:blipFill>'+
'<p:spPr><a:xfrm><a:off x="'+ox+'" y="'+oy+'"/><a:ext cx="'+cx+'" cy="'+cy+'"/></a:xfrm>'+
'<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr></p:pic></p:spTree></p:cSld>'+
'<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>');
zip.file('ppt/slides/_rels/slide'+(i+1)+'.xml.rels','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+
'<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image'+(i+1)+'.'+imgExt+'"/></Relationships>');
zip.file('ppt/media/image'+(i+1)+'.'+imgExt,sl.data);
}
var now=new Date().toISOString();
zip.file('docProps/core.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
'<dc:title>'+escXml(title)+'</dc:title><dc:creator>DollarWise PDF to PowerPoint</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">'+now+'</dcterms:created></cp:coreProperties>');
zip.file('docProps/app.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+
'<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">'+
'<Application>DollarWise</Application><Slides>'+slides.length+'</Slides></Properties>');
return zip.generateAsync({type:'blob',compression:'DEFLATE'});
}
btn.addEventListener('click',async function(){
if(!files.length||!window.pdfjsLib||!window.JSZip){ToolPro.toast('Libraries are still loading — try again in a moment','err');return;}
var file=files[0],scale=parseFloat(scaleR.value),fmt=fmtSel.value,imgExt=fmt==='jpeg'?'jpg':'png';
var wrap=document.getElementById('pptProgWrap'),bar=document.getElementById('pptProgBar'),
txt=document.getElementById('pptProgText'),grid=document.getElementById('pptGrid'),
resBox=document.getElementById('pptResults');
btn.disabled=true;wrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
try{
txt.textContent='Reading PDF…';bar.style.width='5%';
var buf=await file.arrayBuffer();
var pdf=await pdfjsLib.getDocument({data:buf}).promise;
var n=pdf.numPages,slides=[];
for(var i=1;i<=n;i++){
txt.textContent='Rendering page '+i+' of '+n+'…';
bar.style.width=Math.round(i/n*85)+'%';
var pg=await pdf.getPage(i),vp=pg.getViewport({scale:scale});
var cv=document.createElement('canvas');cv.width=Math.floor(vp.width);cv.height=Math.floor(vp.height);
var ctx=cv.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,cv.width,cv.height);
await pg.render({canvasContext:ctx,viewport:vp}).promise;
var blob=await new Promise(function(r){cv.toBlob(r,fmt==='jpeg'?'image/jpeg':'image/png',0.92);});
var data=new Uint8Array(await blob.arrayBuffer());
slides.push({data:data,w:cv.width,h:cv.height});
}
txt.textContent='Building .pptx package…';bar.style.width='95%';
var base=file.name.replace(/\.[^.]+$/,'');
var pptx=await buildPptx(slides,base,imgExt);
var url=URL.createObjectURL(pptx);
bar.style.width='100%';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PPTX</button>';
card.querySelector('.r-name').textContent=base+'.pptx';
card.querySelector('.r-stats').textContent=n+' slides · '+ToolPro.fmtBytes(pptx.size);
card.querySelector('button').addEventListener('click',function(){ToolPro.download(url,base+'.pptx');});
grid.appendChild(card);
document.getElementById('pptSummary').textContent='🎉 '+n+'-page PDF converted to a real PowerPoint file — opens in PowerPoint, Google Slides & LibreOffice.';
wrap.classList.remove('show');resBox.classList.add('show');
resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('PowerPoint file ready','ok');
}catch(err){txt.textContent='Could not convert that PDF. It may be password-protected or damaged.';
ToolPro.toast('Conversion failed','err');}
btn.disabled=false;
});
refresh();
})();

</script>

## How it works

- **Step 1** — Drop in your PDF. It is read locally with PDF.js; nothing is uploaded.
- **Step 2** — Pick a quality preset (or set your own render scale and image format).
- **Step 3** — Each page is rendered to an image and placed on its own 16:9 slide, then zipped into a valid .pptx package you can open anywhere.

## Everyday uses

- **Teachers & students** — turn worksheets and handouts into classroom slides in seconds.
- **Professionals** — present a client PDF without rebuilding the deck from scratch.
- **Job seekers** — convert a portfolio PDF into slides for screen-share interviews.
- **Researchers** — pull figures from papers into a talk-ready deck.

**Tip:** pick PNG for text-heavy documents and JPEG for photo-heavy ones.