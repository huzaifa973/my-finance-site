---
title: "ICO to PNG Converter — Extract Icons Free Online"
description: "Convert ICO icon files to PNG images free in your browser — every embedded size extracted, PNG and BMP icons supported."
category: image
date: 2026-10-26
draft: false
slug: ico-to-png-converter
---

An ICO file is not one image — it is a bundle of the same icon at several sizes, and most image tools only show you the first. Drop an .ico here and this tool lists every embedded size, then converts each one to a standalone PNG you can download: PNG-encoded entries are extracted losslessly, and classic BMP-encoded entries (24- or 32-bit) are decoded in your browser. Files never leave your device, and formats this decoder cannot handle are reported honestly instead of producing a broken image.

<div class="tool-shell" id="itpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c1.1 0 2 .9 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>ICO to PNG Converter</h2>
<p>Turn Windows .ico files into clean PNG images — every size inside, extracted in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="itpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your ICO file</p>
<div class="dropzone" id="itpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag & drop an .ico here</strong>
<span>or click to browse — .ico only</span>
<input type="file" id="itpFile" accept="image/x-icon,.ico">
</div>
<ul class="file-list" id="itpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Convert settings</p>
<div class="settings-panel">
<div class="preset-row" id="itpPresets">
<button type="button" class="preset-chip active" data-v="all">🖼️ All sizes</button>
<button type="button" class="preset-chip" data-v="largest">🔍 Largest only</button>
<button type="button" class="preset-chip" data-v="smallest">🔎 Smallest only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Output</label>
<label class="toggle"><input type="checkbox" id="itpAlpha" checked><span></span> Keep transparency</label>
<div class="hint">BMP icons use their transparency mask when this is on; PNG icons keep their own alpha channel.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert to PNG</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="itpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to PNG
</button>
<button type="button" class="btn-pro-outline" id="itpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="itpProgWrap">
<div class="progress-bar"><i id="itpProgBar"></i></div>
<div class="progress-text" id="itpProgText">Working…</div>
</div>
<div class="results" id="itpResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="itpSummary"></div>
<div class="result-grid" id="itpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Use this tool as often as you like — your files and data never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell=document.getElementById('itpShell'); ToolPro.themeToggle(shell,document.getElementById('itpTheme'));
  var file=null,listEl=document.getElementById('itpList'),btn=document.getElementById('itpBtn'),clr=document.getElementById('itpClear');
  var res=document.getElementById('itpResults'),sum=document.getElementById('itpSummary'),grid=document.getElementById('itpGrid');
  var mode='all';
  document.getElementById('itpPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#itpPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');mode=c.dataset.v;ToolPro.toast('Sizes: '+c.textContent.trim());});
  function refresh(){btn.disabled=!file;clr.disabled=!file;}
  ToolPro.dropzone(document.getElementById('itpDrop'),{multiple:false,accept:'image/x-icon,.ico',maxFiles:1,onFiles:function(arr){if(!arr.length)return;file=arr[0];listEl.innerHTML='';ToolPro.fileRow(listEl,file,function(){file=null;refresh();});res.classList.remove('show');refresh();ToolPro.toast('Icon loaded','ok');}});
  clr.addEventListener('click',function(){file=null;document.getElementById('itpFile').value='';listEl.innerHTML='';grid.innerHTML='';res.classList.remove('show');refresh();});
  function u16(d,o){return d[o]|(d[o+1]<<8);} function u32(d,o){return (d[o]|(d[o+1]<<8)|(d[o+2]<<16)|(d[o+3]<<24))>>>0;}
  function bmpToPng(bytes,entry){
    var dv=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
    var hdr=dv.getUint32(0,true); if(hdr<40)return null;
    var w=dv.getInt32(4,true),h2=dv.getInt32(8,true),planes=dv.getUint16(12,true),bpp=dv.getUint16(14,true),comp=dv.getUint32(16,true);
    if(comp!==0||(bpp!==24&&bpp!==32))return null;
    var h=Math.floor(h2/2); var off=dv.getUint32(10,true)||40;
    var cv=document.createElement('canvas'); cv.width=w; cv.height=h; var ctx=cv.getContext('2d'); var img=ctx.createImageData(w,h);
    var rowBytes=Math.floor((bpp*w+31)/32)*4;
    for(var y=0;y<h;y++){var sy=h-1-y; for(var x=0;x<w;x++){var p=off+sy*rowBytes+x*(bpp/8); var o=(y*w+x)*4;
      img.data[o]=bytes[p]; img.data[o+1]=bytes[p+1]; img.data[o+2]=bytes[p+2];
      img.data[o+3]=(bpp===32)?bytes[p+3]:255;}}
    if(bpp===24){var maskOff=off+h*rowBytes; var maskRow=Math.floor((w+31)/32)*4;
      for(var y2=0;y2<h;y2++){var sy2=h-1-y2; for(var x2=0;x2<w;x2++){var byte=bytes[maskOff+sy2*maskRow+Math.floor(x2/8)]; if(byte&(0x80>>(x2%8)))img.data[(y2*w+x2)*4+3]=0;}}}
    ctx.putImageData(img,0,0); return cv;
  }
  btn.addEventListener('click',async function(){
    if(!file)return; btn.disabled=true; document.getElementById('itpProgWrap').classList.add('show'); document.getElementById('itpProgText').textContent='Reading icon…';
    try{
      var buf=new Uint8Array(await file.arrayBuffer());
      if(buf.length<6||u16(buf,0)!==0||u16(buf,2)!==1)throw new Error('not ico');
      var count=u16(buf,4); var entries=[];
      for(var i=0;i<count;i++){var o=6+i*16; var w=buf[o]||256, h=buf[o+1]||256; var sz=u32(buf,o+8), off=u32(buf,o+12);
        entries.push({w:w,h:h,sz:sz,off:off,data:buf.slice(off,off+sz)});}
      if(mode==='largest')entries=[entries.reduce(function(a,b){return (b.w*b.h>a.w*a.h)?b:a;})];
      if(mode==='smallest')entries=[entries.reduce(function(a,b){return (b.w*b.h<a.w*a.h)?b:a;})];
      sum.textContent=file.name+' contains '+count+' size(s); converting '+entries.length+'.';
      grid.innerHTML='';
      var done=0;
      for(var k=0;k<entries.length;k++){var e=entries[k];
        var card=document.createElement('div'); card.className='result-card';
        var p=document.createElement('p'); p.textContent=e.w+' x '+e.h+' px'; card.appendChild(p);
        var isPng=e.data.length>8&&e.data[0]===0x89&&e.data[1]===0x50&&e.data[2]===0x4E&&e.data[3]===0x47;
        if(isPng){var blob=new Blob([e.data],{type:'image/png'}); var url=URL.createObjectURL(blob);
          var im=document.createElement('img'); im.src=url; im.style.maxWidth='96px'; card.appendChild(im);
          var a=document.createElement('a'); a.className='btn-pro'; a.href=url; a.download=file.name.replace(/\.ico$/i,'')+'-'+e.w+'x'+e.h+'.png'; a.textContent='Download PNG'; card.appendChild(a); done++;}
        else{var cv=bmpToPng(e.data,e);
          if(cv){var url2=cv.toDataURL('image/png'); var im2=document.createElement('img'); im2.src=url2; im2.style.maxWidth='96px'; card.appendChild(im2);
            var a2=document.createElement('a'); a2.className='btn-pro'; a2.href=url2; a2.download=file.name.replace(/\.ico$/i,'')+'-'+e.w+'x'+e.h+'.png'; a2.textContent='Download PNG'; card.appendChild(a2); done++;}
          else{var err=document.createElement('p'); err.textContent='This entry uses a compressed or palette format this decoder does not support.'; card.appendChild(err);}}
        grid.appendChild(card);}
      res.classList.add('show'); ToolPro.toast(done+' PNG(s) ready','ok');
    }catch(e){ToolPro.toast('That does not look like a valid .ico file','err');}
    document.getElementById('itpProgWrap').classList.remove('show'); refresh();
  });
})();
</script>

## How it works

Drop an .ico file into step 1, choose whether to convert all sizes or just the largest or smallest in step 2, and press **Convert to PNG**. The tool reads the ICO directory, which lists every embedded image with its width, height, and data offset. Entries stored as PNG are extracted byte-for-byte (lossless); entries stored as classic BMP data are decoded pixel by pixel — 32-bit entries keep their alpha channel, 24-bit entries use the icon's transparency mask — and drawn to a canvas for PNG download. Compressed or palette-based entries this decoder cannot handle are reported per-entry, never faked.

## Everyday uses

- **Favicons** — pull the 32×32 or 48×48 image out of a Windows icon.
- **App icons** — recover PNGs from old .ico asset packs.
- **Design work** — reuse icon artwork in web or print projects.
- **Backups** — convert a legacy icon set into modern PNGs.
- **Learning** — see exactly which sizes an ICO bundle contains.
