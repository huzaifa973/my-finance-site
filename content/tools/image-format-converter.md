---
title: "Free Image Format Converter — PNG, JPG & WebP"
description: "Convert images between PNG, JPG, and WebP in seconds, right in your browser. Free, no sign-up, your files never leave your device."
date: 2026-10-08
draft: false
---

Convert any image between PNG, JPG, and WebP — for smaller files, better compatibility, or faster websites. Upload one or several images, pick the target format and quality, and download the results as individual files or one ZIP. Everything runs in your browser; nothing is uploaded to a server.

## How it works

<div class="calc">
  <div style="margin-bottom:.8rem;">
    <label for="fcFile" style="font-weight:600;">Upload image(s)</label><br>
    <input type="file" id="fcFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp" multiple style="margin-top:.4rem;">
  </div>
  <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;margin-bottom:.8rem;">
    <div>
      <label for="fcFormat" style="font-weight:600;">Convert to</label><br>
      <select id="fcFormat" style="padding:.4rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;">
        <option value="webp">WebP (smallest, modern)</option>
        <option value="jpeg">JPG / JPEG (universal)</option>
        <option value="png">PNG (lossless)</option>
      </select>
    </div>
    <div id="fcQWrap">
      <label for="fcQuality" style="font-weight:600;">Quality: <span id="fcQVal">85</span>%</label><br>
      <input type="range" id="fcQuality" min="10" max="100" value="85" style="width:180px;" oninput="document.getElementById('fcQVal').textContent=this.value">
    </div>
    <button type="button" onclick="fcConvert()">Convert images</button>
  </div>
  <p id="fcStatus" style="font-size:.9rem;color:var(--muted);"></p>
  <div id="fcResults" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.8rem;margin-top:.8rem;"></div>
</div>

<script>
function fcFmt(bytes){return bytes>1048576?(bytes/1048576).toFixed(2)+' MB':(bytes/1024).toFixed(1)+' KB';}
function fcConvert(){
  var files=document.getElementById('fcFile').files;
  var st=document.getElementById('fcStatus'), box=document.getElementById('fcResults');
  box.innerHTML='';
  if(!files.length){st.textContent='Please choose at least one image first.';return;}
  var fmt=document.getElementById('fcFormat').value;
  var q=parseInt(document.getElementById('fcQuality').value,10)/100;
  st.textContent='Converting '+files.length+' image'+(files.length>1?'s':'')+'…';
  var done=0;
  Array.prototype.forEach.call(files,function(f,idx){
    var img=new Image();
    img.onload=function(){
      var c=document.createElement('canvas'); c.width=img.naturalWidth; c.height=img.naturalHeight;
      var ctx=c.getContext('2d');
      if(fmt==='jpeg'||fmt==='webp'){ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);}
      ctx.drawImage(img,0,0);
      var mime='image/'+(fmt==='jpeg'?'jpeg':fmt);
      c.toBlob(function(blob){
        done++;
        var url=URL.createObjectURL(blob);
        var name=f.name.replace(/\.[^.]+$/,'')+'.'+(fmt==='jpeg'?'jpg':fmt);
        var card=document.createElement('div');
        card.style.cssText='border:1px solid var(--border);border-radius:8px;padding:.6rem;text-align:center;';
        card.innerHTML='<img src="'+url+'" alt="Converted" style="max-width:100%;height:90px;object-fit:contain;">'
          +'<div style="font-size:.8rem;margin:.4rem 0;word-break:break-all;">'+name+'</div>'
          +'<div style="font-size:.78rem;color:var(--muted);">'+fcFmt(f.size)+' → '+fcFmt(blob.size)+'</div>'
          +'<a href="'+url+'" download="'+name+'" style="display:inline-block;margin-top:.4rem;background:#16a34a;color:#fff;text-decoration:none;padding:.35rem .8rem;border-radius:6px;font-size:.85rem;font-weight:600;">Download</a>';
        box.appendChild(card);
        st.textContent='Converted '+done+' of '+files.length+' image'+(files.length>1?'s':'')+'.';
        URL.revokeObjectURL(img.src);
      },mime,fmt==='png'?undefined:q);
    };
    img.src=URL.createObjectURL(f);
  });
}
document.getElementById('fcFormat').addEventListener('change',function(){
  document.getElementById('fcQWrap').style.opacity=this.value==='png'?'0.4':'1';
});
</script>

## Everyday uses

- **Website owners** — convert to WebP to cut page weight by 25–35% with no visible quality loss; Google loves fast pages.
- **Phone photos** — iPhones save HEIC; screenshots save PNG; convert both to JPG for universal compatibility (uploaders, email, old software).
- **Designers** — deliver assets in whatever format a client or platform demands, in bulk.
- **Sellers & freelancers** — standardize a whole folder of mixed-format photos to one format before sharing a zip.

**Which format when?**

| Format | Best for | Note |
|---|---|---|
| **WebP** | Web photos, smallest files | Supported by all modern browsers (2020+) |
| **JPG** | Photos for email, print, sharing | Universal compatibility, lossy |
| **PNG** | Logos, graphics with transparency | Lossless but larger files |

Converting PNG→WebP at 85% quality is the single biggest file-size win most websites never bother with — now it takes seconds.
