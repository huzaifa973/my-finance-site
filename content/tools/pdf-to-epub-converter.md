---
title: "Free PDF to EPUB Converter — Read PDFs as Ebooks on Any Device"
description: "Convert PDF to EPUB online: extract clean text and package a valid ebook for Kindle, Apple Books and Kobo. Free forever, no sign-up, private."
category: pdf
date: 2026-10-16
draft: false
---

PDFs are painful to read on phones and e-readers. This free PDF to EPUB converter extracts the text from every page and packages it as a valid, reflowable EPUB ebook that opens in Kindle, Apple Books, Kobo, and every major reading app. Text-only conversion — perfect for novels, reports, and study material.

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<div class="tool-shell" id="epubShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to EPUB Converter</h2>
<p>Turn a PDF into a real, reflowable EPUB ebook — free, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="epubTheme">🌙 Dark</button>
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
<div class="dropzone" id="epubDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your PDF here</strong><span>or click to browse — text-based PDFs work best</span><input type="file" id="epubFile" accept="application/pdf"></div><ul class="file-list" id="epubList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="epubPresets">
<button type="button" class="preset-chip active" data-preset="📚 Novel — long chapters">📚 Novel — long chapters</button>
<button type="button" class="preset-chip" data-preset="📖 Study material — short chapters">📖 Study material — short chapters</button>
<button type="button" class="preset-chip" data-preset="📝 Article — one chapter">📝 Article — one chapter</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="epubTitle">Book title</label><input type="text" class="tool-input" id="epubTitle" placeholder="e.g. My Great Book" value="Untitled Book"><div class="hint">Used in the ebook metadata and reader library.</div></div><div class="setting"><label for="epubAuthor">Author</label><input type="text" class="tool-input" id="epubAuthor" placeholder="e.g. Jane Doe" value=""><div class="hint">Optional — stored in the ebook metadata.</div></div><div class="setting"><label for="epubPages">Pages per chapter: <span class="val" id="epubPagesVal">8</span></label><input type="range" id="epubPages" min="1" max="30" step="1" value="8"><div class="hint">Longer chapters suit novels; shorter ones suit textbooks and manuals.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Join hyphenated line breaks</span><label class="toggle"><input type="checkbox" id="epubHyphens" checked><span class="slider"></span></label></div><div class="hint">Fixes words split across lines like "conver- sion".</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert to EPUB</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="epubBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to EPUB
</button>
<button type="button" class="btn-pro-outline" id="epubClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="epubProgWrap">
<div class="progress-bar"><i id="epubProgBar"></i></div>
<div class="progress-text" id="epubProgText">Working…</div>
</div>
<div class="results" id="epubResults">
<p class="result-head">✅ Done — your EPUB ebook</p>
<div class="result-summary" id="epubSummary"></div>
<div class="result-grid" id="epubGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited PDFs to EPUB ebooks — reflowable text for every reading app.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('epubShell');
ToolPro.themeToggle(shell,document.getElementById('epubTheme'));
if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}
var files=[],listEl=document.getElementById('epubList'),btn=document.getElementById('epubBtn'),
clearBtn=document.getElementById('epubClear'),titleI=document.getElementById('epubTitle'),
authorI=document.getElementById('epubAuthor'),pagesR=document.getElementById('epubPages'),
pagesV=document.getElementById('epubPagesVal'),hyphT=document.getElementById('epubHyphens'),
presets=document.getElementById('epubPresets');
ToolPro.bindSlider(pagesR,pagesV,function(v){return v+' pages';});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Study')>-1)pagesR.value='3';
else if(t.indexOf('Article')>-1)pagesR.value='30';
else pagesR.value='8';
pagesR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+t.trim());
});
function refresh(){btn.disabled=!files.length;clearBtn.disabled=!files.length;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert to EPUB';}
ToolPro.dropzone(document.getElementById('epubDrop'),{multiple:false,accept:'application/pdf',
onFiles:function(arr){files=arr.slice(0,1);listEl.innerHTML='';
files.forEach(function(f){ToolPro.fileRow(listEl,f,function(){files=[];refresh();});});
document.getElementById('epubResults').classList.remove('show');refresh();ToolPro.toast('PDF added','ok');}});
clearBtn.addEventListener('click',function(){files=[];listEl.innerHTML='';
document.getElementById('epubResults').classList.remove('show');refresh();});
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function uuid(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
var r=Math.random()*16|0;return (c==='x'?r:(r&0x3|0x8)).toString(16);});}
btn.addEventListener('click',async function(){
if(!files.length||!window.pdfjsLib||!window.JSZip){ToolPro.toast('Libraries are still loading — try again in a moment','err');return;}
var wrap=document.getElementById('epubProgWrap'),bar=document.getElementById('epubProgBar'),
txt=document.getElementById('epubProgText'),grid=document.getElementById('epubGrid'),
resBox=document.getElementById('epubResults');
btn.disabled=true;wrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
try{
txt.textContent='Extracting text…';bar.style.width='5%';
var pdf=await pdfjsLib.getDocument({data:await files[0].arrayBuffer()}).promise;
var n=pdf.numPages,pagesText=[];
for(var i=1;i<=n;i++){
var pg=await pdf.getPage(i),tc=await pg.getTextContent(),lines={},k;
tc.items.forEach(function(it){var y=Math.round(it.transform[5]);(lines[y]=lines[y]||[]).push(it);});
var yks=Object.keys(lines).sort(function(a,b){return b-a;}),paras=[];
yks.forEach(function(yy){var parts=lines[yy].sort(function(a,b){return a.transform[4]-b.transform[4];});
paras.push(parts.map(function(p2){return p2.str;}).join(' '));});
var text=paras.join('\n');
if(hyphT.checked)text=text.replace(/([a-zA-Z])\-\n([a-zA-Z])/g,'$1$2');
pagesText.push(text);
bar.style.width=Math.round(i/n*70)+'%';
txt.textContent='Extracting text — page '+i+' of '+n;
}
if(pagesText.join('').trim().length<50){throw new Error('no-text');}
txt.textContent='Packaging EPUB…';bar.style.width='85%';
var perCh=parseInt(pagesR.value,10),chapters=[],ci;
for(ci=0;ci<pagesText.length;ci+=perCh)chapters.push(pagesText.slice(ci,ci+perCh).join('\n\n'));
var title=titleI.value.trim()||'Untitled Book',author=authorI.value.trim()||'Unknown',id=uuid();
var zip=new JSZip();
zip.file('mimetype','application/epub+zip',{compression:'STORE'});
zip.file('META-INF/container.xml','<?xml version="1.0" encoding="UTF-8"?>'+
'<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">'+
'<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
var mf='<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>',sp='',ncxnav='';
for(ci=0;ci<chapters.length;ci++){
mf+='<item id="ch'+(ci+1)+'" href="Text/ch'+(ci+1)+'.xhtml" media-type="application/xhtml+xml"/>';
sp+='<itemref idref="ch'+(ci+1)+'"/>';
ncxnav+='<navPoint id="np'+(ci+1)+'" playOrder="'+(ci+1)+'"><navLabel><text>Chapter '+(ci+1)+'</text></navLabel><content src="Text/ch'+(ci+1)+'.xhtml"/></navPoint>';
var paras=chapters[ci].split('\n').filter(function(x){return x.trim();});
var body=paras.map(function(p2){return '<p>'+esc(p2)+'</p>';}).join('');
zip.file('OEBPS/Text/ch'+(ci+1)+'.xhtml','<?xml version="1.0" encoding="UTF-8"?>'+
'<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><title>'+esc(title)+' — Chapter '+(ci+1)+'</title></head>'+
'<body><h2>Chapter '+(ci+1)+'</h2>'+body+'</body></html>');
}
zip.file('OEBPS/content.opf','<?xml version="1.0" encoding="UTF-8"?>'+
'<package version="2.0" unique-identifier="uid" xmlns="http://www.idpf.org/2007/opf">'+
'<metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>'+esc(title)+'</dc:title>'+
'<dc:creator>'+esc(author)+'</dc:creator><dc:language>en</dc:language>'+
'<dc:identifier id="uid">'+id+'</dc:identifier><dc:format>EPUB</dc:format></metadata>'+
'<manifest>'+mf+'</manifest><spine toc="ncx">'+sp+'</spine></package>');
zip.file('OEBPS/toc.ncx','<?xml version="1.0" encoding="UTF-8"?>'+
'<ncx version="2005-1" xmlns="http://www.daisy.org/z3986/2005/ncx/"><head>'+
'<meta name="dtb:uid" content="'+id+'"/></head><docTitle><text>'+esc(title)+'</text></docTitle>'+
'<navMap>'+ncxnav+'</navMap></ncx>');
bar.style.width='95%';
var base=files[0].name.replace(/\.[^.]+$/,'');
var epub=await zip.generateAsync({type:'blob',compression:'DEFLATE',mimeType:'application/epub+zip'});
var url=URL.createObjectURL(epub);
bar.style.width='100%';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download EPUB</button>';
card.querySelector('.r-name').textContent=base+'.epub';
card.querySelector('.r-stats').textContent=chapters.length+' chapters · '+ToolPro.fmtBytes(epub.size);
card.querySelector('button').addEventListener('click',function(){ToolPro.download(url,base+'.epub');});
grid.appendChild(card);
document.getElementById('epubSummary').textContent='🎉 '+n+' PDF pages converted into a '+chapters.length+'-chapter EPUB ebook.';
wrap.classList.remove('show');resBox.classList.add('show');
resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('EPUB ready','ok');
}catch(err){
txt.textContent=(err&&err.message==='no-text')?
'That PDF has no extractable text (it may be scanned images). Try a text-based PDF.':
'Could not convert that PDF. It may be password-protected or damaged.';
ToolPro.toast('Conversion failed','err');}
btn.disabled=false;
});
refresh();
})();

</script>

## How it works

- **Step 1** — Drop in your PDF. Text is extracted page by page with PDF.js, right in your browser.
- **Step 2** — Name the book, set the chapter length, and the tool joins hyphenated line breaks automatically.
- **Step 3** — A standards-valid EPUB package (mimetype, OPF manifest, NCX table of contents, XHTML chapters) is zipped and downloaded.

## Everyday uses

- **Readers** — read long PDFs comfortably on a phone or e-reader with adjustable fonts.
- **Students** — convert lecture PDFs into ebooks for on-the-go revision.
- **Commuters** — turn reports and whitepapers into phone-friendly reading.
- **Accessibility** — reflowable EPUB text works with screen readers and large fonts.

**Note:** scanned/image-only PDFs contain no extractable text — use a text-based PDF for best results.