---
title: "Free Image Compressor — Reduce Image File Size Online"
description: "Compress JPG, PNG, and WebP images in your browser and see before/after quality side by side. Free, no sign-up, files never leave your device."
date: 2026-10-08
draft: false
---

Shrink oversized images before you upload them — faster websites, smaller email attachments, and less storage used. Upload a JPG, PNG, or WebP, choose a quality level, and compare the result with the interactive before/after slider. Everything runs in your browser; your files are never uploaded anywhere.

## How it works

<div class="calc">
  <div style="margin-bottom:.8rem;">
    <label for="cmpFile" style="font-weight:600;">Upload an image</label><br>
    <input type="file" id="cmpFile" accept="image/png,image/jpeg,image/webp" style="margin-top:.4rem;">
  </div>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;margin-bottom:.8rem;">
    <div>
      <label for="cmpQuality" style="font-weight:600;">Quality: <span id="cmpQVal">80</span>%</label><br>
      <input type="range" id="cmpQuality" min="10" max="95" value="80" style="width:200px;" oninput="document.getElementById('cmpQVal').textContent=this.value;cmpCompress()">
    </div>
    <div>
      <label for="cmpFormat" style="font-weight:600;">Output format</label><br>
      <select id="cmpFormat" onchange="cmpCompress()" style="padding:.4rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;">
        <option value="jpeg">JPEG (best for photos)</option>
        <option value="webp">WebP (smallest files)</option>
        <option value="png">PNG (lossless)</option>
      </select>
    </div>
    <button type="button" id="cmpBtn" onclick="cmpCompress()" disabled style="opacity:.5;">Compress</button>
    <a id="cmpDownload" href="#" download="compressed-image" style="display:none;text-decoration:none;background:#16a34a;color:#fff;padding:.55rem 1rem;border-radius:6px;font-weight:600;">Download compressed image</a>
  </div>
  <p id="cmpStats" style="font-size:.9rem;color:var(--muted);margin:.4rem 0;"></p>
  <div id="cmpCompare" style="display:none;position:relative;max-width:640px;border:1px solid var(--border);border-radius:8px;overflow:hidden;user-select:none;">
    <img id="cmpBefore" alt="Original image" style="display:block;width:100%;">
    <div id="cmpAfterWrap" style="position:absolute;top:0;left:0;height:100%;width:50%;overflow:hidden;border-right:3px solid #4f46e5;">
      <img id="cmpAfter" alt="Compressed image" style="display:block;height:100%;width:auto;max-width:none;">
    </div>
    <input type="range" id="cmpSlider" min="0" max="100" value="50" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:ew-resize;margin:0;">
    <div style="position:absolute;top:.5rem;left:.5rem;background:rgba(0,0,0,.6);color:#fff;font-size:.75rem;padding:.2rem .5rem;border-radius:4px;">Compressed</div>
    <div style="position:absolute;top:.5rem;right:.5rem;background:rgba(0,0,0,.6);color:#fff;font-size:.75rem;padding:.2rem .5rem;border-radius:4px;">Original</div>
  </div>
  <p style="font-size:.85rem;color:var(--muted);margin-top:.5rem;">Drag the slider above to compare the original (right) with the compressed version (left).</p>
</div>

<script>
var cmpOrigUrl=null, cmpOrigSize=0, cmpAfterData=null;
function cmpFmt(bytes){return bytes>1048576?(bytes/1048576).toFixed(2)+' MB':(bytes/1024).toFixed(1)+' KB';}
document.getElementById('cmpFile').addEventListener('change',function(e){
  var f=e.target.files[0]; if(!f)return;
  cmpOrigSize=f.size;
  if(cmpOrigUrl)URL.revokeObjectURL(cmpOrigUrl);
  cmpOrigUrl=URL.createObjectURL(f);
  document.getElementById('cmpBefore').src=cmpOrigUrl;
  var btn=document.getElementById('cmpBtn'); btn.disabled=false; btn.style.opacity='1';
  document.getElementById('cmpCompare').style.display='block';
  document.getElementById('cmpDownload').style.display='none';
  cmpCompress();
});
function cmpCompress(){
  var input=document.getElementById('cmpFile'); if(!input.files[0])return;
  var q=parseInt(document.getElementById('cmpQuality').value,10);
  var fmt=document.getElementById('cmpFormat').value;
  var img=new Image();
  img.onload=function(){
    var c=document.createElement('canvas'); c.width=img.naturalWidth; c.height=img.naturalHeight;
    var ctx=c.getContext('2d');
    if(fmt==='jpeg'){ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);}
    ctx.drawImage(img,0,0);
    var mime=fmt==='png'?'image/png':('image/'+fmt);
    var quality=fmt==='png'?1:q/100;
    cmpAfterData=c.toDataURL(mime,quality);
    var afterImg=document.getElementById('cmpAfter');
    afterImg.onload=function(){
      afterImg.style.width=document.getElementById('cmpBefore').offsetWidth+'px';
      afterImg.style.height=document.getElementById('cmpBefore').offsetHeight+'px';
    };
    afterImg.src=cmpAfterData;
    var newSize=Math.round(cmpAfterData.length*0.75);
    var saved=Math.max(0,Math.round((1-newSize/cmpOrigSize)*100));
    document.getElementById('cmpStats').textContent='Original: '+cmpFmt(cmpOrigSize)+' → Compressed: '+cmpFmt(newSize)+' ('+saved+'% smaller) · '+img.naturalWidth+'×'+img.naturalHeight+'px · quality '+q+'%';
    var dl=document.getElementById('cmpDownload');
    dl.href=cmpAfterData; dl.download='compressed.'+fmt;
    dl.style.display='inline-block';
  };
  img.src=URL.createObjectURL(input.files[0]);
}
document.getElementById('cmpSlider').addEventListener('input',function(){
  document.getElementById('cmpAfterWrap').style.width=this.value+'%';
});
</script>

## Everyday uses

- **Blog and website owners** — smaller images mean faster pages and better SEO; Google ranks fast sites higher.
- **Freelancers** — email portfolios and invoices as attachments without hitting size limits.
- **Sellers** — compress product photos before listing on marketplaces for quicker uploads.
- **Students** — shrink screenshots for assignments and reports that must stay under a file-size cap.
- **Social media** — compress before posting to control quality instead of letting apps do it badly.

**Rule of thumb:** quality 80% is the sweet spot for photos — visually identical to the original at a fraction of the size. Drop to 60–70% only when every kilobyte counts.
