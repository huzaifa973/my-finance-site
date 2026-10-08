---
title: "Free Merge PDF — Combine PDFs Online Without Uploading"
description: "Merge multiple PDF files into one, right in your browser. Reorder pages with drag and drop. Free, private — your files never leave your device."
date: 2026-10-08
draft: false
---

Combine invoices, resumes, applications, or scanned documents into a single PDF — without uploading sensitive files to a stranger's server. Drop your PDFs here, reorder them by dragging, and download the merged file. The merging happens 100% in your browser; your documents never leave your device.

## How it works

<div class="calc">
  <div style="margin-bottom:.8rem;">
    <label for="mpFile" style="font-weight:600;">Add PDF files</label><br>
    <input type="file" id="mpFile" accept="application/pdf" multiple style="margin-top:.4rem;">
    <p style="font-size:.85rem;color:var(--muted);margin:.3rem 0 0;">Tip: drag cards up/down to change the merge order.</p>
  </div>
  <div id="mpList" style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:.8rem;"></div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
    <button type="button" id="mpBtn" onclick="mpMerge()">Merge PDFs</button>
    <a id="mpDownload" href="#" download="merged.pdf" style="display:none;text-decoration:none;background:#16a34a;color:#fff;padding:.55rem 1rem;border-radius:6px;font-weight:600;">Download merged PDF</a>
  </div>
  <p id="mpStatus" style="font-size:.9rem;color:var(--muted);margin:.6rem 0 0;"></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script>
var mpFiles=[];
document.getElementById('mpFile').addEventListener('change',function(e){
  Array.prototype.forEach.call(e.target.files,function(f){mpFiles.push(f);});
  e.target.value=''; mpRender();
});
function mpRender(){
  var box=document.getElementById('mpList'); box.innerHTML='';
  mpFiles.forEach(function(f,i){
    var d=document.createElement('div');
    d.draggable=true; d.dataset.idx=i;
    d.style.cssText='display:flex;align-items:center;gap:.6rem;padding:.5rem .7rem;border:1px solid var(--border);border-radius:6px;background:#fff;cursor:grab;';
    d.innerHTML='<span style="font-weight:700;color:var(--muted);">'+(i+1)+'</span>'
      +'<span style="flex:1;font-size:.9rem;word-break:break-all;">'+f.name+'</span>'
      +'<span style="font-size:.8rem;color:var(--muted);">'+(f.size>1048576?(f.size/1048576).toFixed(1)+' MB':Math.round(f.size/1024)+' KB')+'</span>'
      +'<button type="button" onclick="mpRemove('+i+')" style="background:#6b7280;padding:.3rem .6rem;font-size:.8rem;">Remove</button>';
    d.addEventListener('dragstart',function(ev){ev.dataTransfer.setData('text/plain',i);});
    d.addEventListener('dragover',function(ev){ev.preventDefault();});
    d.addEventListener('drop',function(ev){
      ev.preventDefault();
      var from=parseInt(ev.dataTransfer.getData('text/plain'),10), to=i;
      var item=mpFiles.splice(from,1)[0]; mpFiles.splice(to,0,item); mpRender();
    });
    box.appendChild(d);
  });
}
function mpRemove(i){mpFiles.splice(i,1);mpRender();}
function mpMerge(){
  var st=document.getElementById('mpStatus');
  if(mpFiles.length<2){st.textContent='Please add at least 2 PDF files to merge.';return;}
  st.textContent='Merging '+mpFiles.length+' PDFs… this happens in your browser.';
  var reads=mpFiles.map(function(f){
    return new Promise(function(res,rej){
      var r=new FileReader();
      r.onload=function(){res(r.result);};
      r.onerror=function(){rej('Could not read '+f.name);};
      r.readAsArrayBuffer(f);
    });
  });
  Promise.all(reads).then(function(buffers){
    return PDFLib.PDFDocument.create().then(function(out){
      var chain=Promise.resolve();
      buffers.forEach(function(buf){
        chain=chain.then(function(){
          return PDFLib.PDFDocument.load(buf,{ignoreEncryption:true}).then(function(src){
            return out.copyPages(src,src.getPageIndices()).then(function(pages){
              pages.forEach(function(p){out.addPage(p);});
            });
          });
        });
      });
      return chain.then(function(){return out.save();});
    });
  }).then(function(bytes){
    var blob=new Blob([bytes],{type:'application/pdf'});
    var url=URL.createObjectURL(blob);
    var dl=document.getElementById('mpDownload');
    dl.href=url; dl.style.display='inline-block';
    st.textContent='Done! Merged into one PDF ('+(bytes.length>1048576?(bytes.length/1048576).toFixed(2)+' MB':Math.round(bytes.length/1024)+' KB')+').';
  }).catch(function(err){
    st.textContent='Merge failed: '+err+'. Password-protected or damaged PDFs may not merge.';
  });
}
</script>

## Everyday uses

- **Job applications** — merge resume, cover letter, and certificates into one file that recruiters can download once.
- **Expenses & taxes** — combine monthly receipts and invoices into a single document for your accountant.
- **Scans** — a phone scanner app produces one PDF per page; merge them into the complete document.
- **University applications** — admissions portals often accept one file; merge transcripts, statements, and references.
- **Contracts** — join the signed agreement and its addenda so nothing gets lost.

**Privacy note:** most "free" PDF mergers upload your files to their servers — where sensitive contracts and IDs sit on someone else's disk. This tool uses the pdf-lib library loaded in your own browser, so your documents never leave your device. That privacy-first design is exactly why DollarWise tools exist.
