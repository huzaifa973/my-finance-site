---
title: "Free Image Resizer — Resize Images to Any Size Online"
description: "Resize any image to exact pixels, a percentage, or a max file size — without losing quality. Free, no sign-up, runs 100% in your browser."
date: 2026-10-08
draft: false
---

Resize images for profile pictures, blog thumbnails, or social media — without cropping and without distortion. Upload a JPG, PNG, or WebP, type the width and height you need (aspect ratio locks automatically), or shrink by percentage. Everything happens in your browser; your photos never leave your device.

## How it works

<div class="calc">
  <div style="margin-bottom:.8rem;">
    <label for="rsFile" style="font-weight:600;">Upload an image</label><br>
    <input type="file" id="rsFile" accept="image/png,image/jpeg,image/webp" style="margin-top:.4rem;">
  </div>
  <div id="rsPanel" style="display:none;">
    <p id="rsOrigInfo" style="font-size:.9rem;color:var(--muted);"></p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;margin-bottom:.8rem;">
      <div>
        <label for="rsMode" style="font-weight:600;">Resize by</label><br>
        <select id="rsMode" onchange="rsModeChange()" style="padding:.4rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;">
          <option value="px">Exact pixels</option>
          <option value="pct">Percentage</option>
          <option value="kbsize">Target file size (KB)</option>
        </select>
      </div>
      <div id="rsPx">
        <label for="rsW" style="font-weight:600;">Width (px)</label><br>
        <input type="number" id="rsW" min="1" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;">
        <span style="margin:0 .3rem;">×</span>
        <input type="number" id="rsH" min="1" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;" placeholder="height">
      </div>
      <div id="rsPct" style="display:none;">
        <label for="rsP" style="font-weight:600;">Percentage</label><br>
        <input type="number" id="rsP" min="1" max="400" value="50" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;"> %
      </div>
      <div id="rsKb" style="display:none;">
        <label for="rsK" style="font-weight:600;">Target size</label><br>
        <input type="number" id="rsK" min="5" value="200" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;"> KB
      </div>
    </div>
    <label style="font-size:.9rem;"><input type="checkbox" id="rsLock" checked> Keep original proportions (no distortion)</label>
    <div style="margin-top:.8rem;display:flex;gap:.5rem;flex-wrap:wrap;">
      <button type="button" onclick="rsResize()">Resize image</button>
      <a id="rsDownload" href="#" download="resized-image" style="display:none;text-decoration:none;background:#16a34a;color:#fff;padding:.55rem 1rem;border-radius:6px;font-weight:600;">Download resized image</a>
    </div>
    <p id="rsStats" style="font-size:.9rem;color:var(--muted);margin:.6rem 0;"></p>
    <img id="rsPreview" alt="Resized preview" style="display:none;max-width:100%;border:1px solid var(--border);border-radius:8px;">
  </div>
</div>

<script>
var rsImg=null, rsRatio=1, rsOrigSize=0;
function rsFmt(bytes){return bytes>1048576?(bytes/1048576).toFixed(2)+' MB':(bytes/1024).toFixed(1)+' KB';}
document.getElementById('rsFile').addEventListener('change',function(e){
  var f=e.target.files[0]; if(!f)return;
  rsOrigSize=f.size;
  var img=new Image();
  img.onload=function(){
    rsImg=img; rsRatio=img.naturalWidth/img.naturalHeight;
    document.getElementById('rsW').value=img.naturalWidth;
    document.getElementById('rsH').value=img.naturalHeight;
    document.getElementById('rsOrigInfo').textContent='Original: '+img.naturalWidth+'×'+img.naturalHeight+'px · '+rsFmt(f.size);
    document.getElementById('rsPanel').style.display='block';
  };
  img.src=URL.createObjectURL(f);
});
document.getElementById('rsW').addEventListener('input',function(){
  if(document.getElementById('rsLock').checked&&rsImg&&this.value>0)
    document.getElementById('rsH').value=Math.round(this.value/rsRatio);
});
document.getElementById('rsH').addEventListener('input',function(){
  if(document.getElementById('rsLock').checked&&rsImg&&this.value>0)
    document.getElementById('rsW').value=Math.round(this.value*rsRatio);
});
function rsModeChange(){
  var m=document.getElementById('rsMode').value;
  document.getElementById('rsPx').style.display=m==='px'?'block':'none';
  document.getElementById('rsPct').style.display=m==='pct'?'block':'none';
  document.getElementById('rsKb').style.display=m==='kbsize'?'block':'none';
}
function rsRender(w,h,q,mime){
  var c=document.createElement('canvas'); c.width=w; c.height=h;
  var ctx=c.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  ctx.drawImage(rsImg,0,0,w,h);
  return c.toDataURL(mime,q);
}
function rsResize(){
  if(!rsImg)return;
  var m=document.getElementById('rsMode').value, w,h,q=0.9,mime='image/jpeg';
  if(m==='px'){
    w=Math.max(1,parseInt(document.getElementById('rsW').value,10)||rsImg.naturalWidth);
    h=Math.max(1,parseInt(document.getElementById('rsH').value,10)||rsImg.naturalHeight);
    finish(w,h,q,mime); return;
  }
  if(m==='pct'){
    var p=Math.max(1,Math.min(400,parseInt(document.getElementById('rsP').value,10)||50));
    w=Math.max(1,Math.round(rsImg.naturalWidth*p/100));
    h=Math.max(1,Math.round(rsImg.naturalHeight*p/100));
    finish(w,h,q,mime); return;
  }
  var targetKB=Math.max(5,parseInt(document.getElementById('rsK').value,10)||200);
  w=rsImg.naturalWidth; h=rsImg.naturalHeight; q=0.95; var data='';
  while(q>=0.3){
    data=rsRender(w,h,q,mime);
    if(data.length*0.75/1024<=targetKB)break;
    q-=0.15;
    if(q<0.3){w=Math.round(w*0.85);h=Math.round(h*0.85);q=0.95;}
  }
  finish(w,h,q,mime,data);
  function finish(w,h,q,mime,data){
    data=data||rsRender(w,h,q,mime);
    var size=data.length*0.75;
    var pv=document.getElementById('rsPreview'); pv.src=data; pv.style.display='block';
    document.getElementById('rsStats').textContent='Resized to '+w+'×'+h+'px · '+rsFmt(size)+' (was '+rsFmt(rsOrigSize)+') · quality '+Math.round(q*100)+'%';
    var dl=document.getElementById('rsDownload');
    dl.href=data; dl.download='resized-'+w+'x'+h+'.jpg'; dl.style.display='inline-block';
  }
}
</script>

## Everyday uses

- **Job applications** — portals that demand "photo under 200KB" are exactly what the target-size mode is for.
- **Bloggers** — standardize every featured image to the same width so layouts stay clean.
- **Social profiles** — resize headshots to platform specs without awkward auto-crops.
- **Print** — shrink huge phone photos to sensible sizes before uploading to photo printing services.
- **Email** — batch-shrink images before attaching so they actually send.

**Upscale warning:** enlarging an image beyond its original size cannot add real detail — you'll get a bigger, softer image. This tool shines at *downscaling*, which preserves quality beautifully.
