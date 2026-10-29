---
title: "Free Pinterest Pin Maker — Design Pins with Text Overlay Online"
description: "Design Pinterest pins in your browser: upload a photo, add title text, pick a size preset, and export a PNG. Free forever, no sign-up, nothing uploaded."
category: image
date: 2026-10-29
draft: false
---

A good Pinterest pin is a vertical image with a bold, readable title. Upload a photo, type your title, pick a size preset, and export a polished PNG pin — all in your browser, no design account needed.

<div class="tool-shell" id="pinShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pinterest Pin Maker</h2>
<p>Upload a photo, add a bold title, export a ready-to-post pin PNG.</p>
</div>
<button type="button" class="theme-toggle" id="pinTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your photo</p>
<div class="dropzone" id="pinDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your photo here</strong><span>or click to browse — JPG, PNG, WebP</span><input type="file" id="pinFile" accept="image/png,image/jpeg,image/webp"></div><ul class="file-list" id="pinList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Title &amp; design settings</p>
<div class="settings-panel">
<div class="preset-row" id="pinPresets">
<button type="button" class="preset-chip active" data-w="1000" data-h="1500">📌 Standard 1000×1500</button>
<button type="button" class="preset-chip" data-w="1080" data-h="1920">📱 Story 1080×1920</button>
<button type="button" class="preset-chip" data-w="735" data-h="1102">🖼️ Classic 735×1102</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pinTitle">Pin title</label>
<input type="text" class="tool-input" id="pinTitle" placeholder="10 Easy Dinner Ideas for Busy Weeknights">
</div>
<div class="setting">
<label for="pinBrand">Small brand / site text (optional)</label>
<input type="text" class="tool-input" id="pinBrand" placeholder="yourblog.com">
</div>
<div class="setting"><label for="pinSize">Title size: <span class="val" id="pinSizeVal">72px</span></label><input type="range" id="pinSize" min="36" max="120" step="2" value="72"></div>
<div class="setting"><label for="pinPos">Title position</label><select id="pinPos"><option value="top" selected>Top overlay</option><option value="middle">Middle overlay</option><option value="bottom">Bottom overlay</option></select></div>
<div class="setting"><label for="pinTextCol">Text color</label><select id="pinTextCol"><option value="#ffffff" selected>White</option><option value="#111827">Black</option><option value="#fde68a">Warm yellow</option></select></div>
<div class="setting"><label for="pinBand">Overlay band</label><select id="pinBand"><option value="dark" selected>Dark translucent band</option><option value="none">No band (text only)</option><option value="light">Light translucent band</option></select></div>
</div>
<div class="setting" style="margin-top:12px">
<label>Live preview</label>
<canvas id="pinCanvas" width="1000" height="1500" style="max-width:320px;width:100%;border:1px solid #ddd;border-radius:8px"></canvas>
<div class="hint">Preview updates as you type. Export downloads the full-size PNG.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Export your pin</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pinBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Export Pin PNG
</button>
<button type="button" class="btn-pro-outline" id="pinClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pinProgWrap">
<div class="progress-bar"><i id="pinProgBar"></i></div>
<div class="progress-text" id="pinProgText">Working…</div>
</div>
<div class="results" id="pinResults">
<p class="result-head">✅ Done — your pin</p>
<div class="result-summary" id="pinSummary"></div>
<div class="result-grid" id="pinGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Design unlimited pins — your photos never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pinShell');
ToolPro.themeToggle(shell,document.getElementById('pinTheme'));
var canvas=document.getElementById('pinCanvas'),ctx=canvas.getContext('2d'),listEl=document.getElementById('pinList'),btn=document.getElementById('pinBtn'),clearBtn=document.getElementById('pinClear'),resBox=document.getElementById('pinResults'),sumEl=document.getElementById('pinSummary'),grid=document.getElementById('pinGrid'),presets=document.getElementById('pinPresets');
var img=null,imgName='pin';
ToolPro.bindSlider(document.getElementById('pinSize'),document.getElementById('pinSizeVal'),function(v){return v+'px';});
function wrapText(text,maxW){var words=text.split(/\s+/),lines=[],line='';words.forEach(function(w){var t=line?line+' '+w:w;if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;}else line=t;});if(line)lines.push(line);return lines;}
function draw(){
var W=canvas.width,H=canvas.height;
ctx.fillStyle='#e5e7eb';ctx.fillRect(0,0,W,H);
if(img){var s=Math.max(W/img.naturalWidth,H/img.naturalHeight);var dw=img.naturalWidth*s,dh=img.naturalHeight*s;ctx.drawImage(img,(W-dw)/2,(H-dh)/2,dw,dh);}
var title=document.getElementById('pinTitle').value.trim()||'Your Pin Title Here';
var brand=document.getElementById('pinBrand').value.trim();
var size=parseInt(document.getElementById('pinSize').value,10);
var pos=document.getElementById('pinPos').value,band=document.getElementById('pinBand').value,col=document.getElementById('pinTextCol').value;
ctx.font='800 '+size+'px Arial, sans-serif';
var lines=wrapText(title,W*0.84);
var lineH=size*1.15,blockH=lines.length*lineH+40;
var y0=pos==='top'?40:pos==='middle'?(H-blockH)/2:H-blockH-40;
if(band!=='none'){ctx.fillStyle=band==='dark'?'rgba(0,0,0,0.55)':'rgba(255,255,255,0.75)';ctx.fillRect(0,y0,W,blockH);}
ctx.fillStyle=col;ctx.textAlign='center';ctx.textBaseline='top';
lines.forEach(function(l,i){ctx.fillText(l,W/2,y0+20+i*lineH);});
if(brand){ctx.font='600 28px Arial, sans-serif';ctx.fillStyle=col;ctx.fillText(brand,W/2,H-60);}
}
['pinTitle','pinBrand','pinSize','pinPos','pinTextCol','pinBand'].forEach(function(id){document.getElementById(id).addEventListener('input',draw);document.getElementById(id).addEventListener('change',draw);});
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');canvas.width=parseInt(c.dataset.w,10);canvas.height=parseInt(c.dataset.h,10);draw();ToolPro.toast('Size preset: '+c.textContent.trim());});
function resetAll(){img=null;listEl.innerHTML='';resBox.classList.remove('show');grid.innerHTML='';btn.disabled=true;clearBtn.disabled=true;draw();}
ToolPro.dropzone(document.getElementById('pinDrop'),{multiple:false,accept:'image/png,image/jpeg,image/webp',maxFiles:1,onFiles:function(arr){if(!arr.length)return;var f=arr[0];listEl.innerHTML='';ToolPro.fileRow(listEl,f,resetAll);imgName=f.name.replace(/\.[^.]+$/,'');var url=URL.createObjectURL(f);var im=new Image();im.onload=function(){img=im;URL.revokeObjectURL(url);btn.disabled=false;clearBtn.disabled=false;draw();ToolPro.toast('Photo added','ok');};im.src=url;}});
clearBtn.addEventListener('click',resetAll);
btn.addEventListener('click',function(){if(!img)return;draw();canvas.toBlob(function(blob){if(!blob){ToolPro.toast('Export failed','err');return;}var url=URL.createObjectURL(blob);sumEl.textContent='Pin exported at '+canvas.width+'×'+canvas.height+'px PNG.';var card=document.createElement('div');card.className='result-card';var im2=document.createElement('img');im2.className='r-preview';im2.src=url;var nm=document.createElement('div');nm.className='r-name';nm.textContent=imgName+'-pin.png';var dl=document.createElement('button');dl.type='button';dl.className='btn-pro';dl.textContent='⬇ Download';dl.addEventListener('click',function(){ToolPro.download(url,nm.textContent);});card.appendChild(im2);card.appendChild(nm);card.appendChild(dl);grid.innerHTML='';grid.appendChild(card);resBox.classList.add('show');ToolPro.toast('Pin exported','ok');},'image/png');});
draw();
})();
</script>

## How it works

- **Step 1** — Upload a photo; it is cover-cropped to fill the pin canvas.
- **Step 2** — Type your title, pick a size preset, position, text color, and overlay band. The preview updates live.
- **Step 3** — Export a full-size PNG and upload it to Pinterest with your link.

Pinterest favors vertical pins — the 1000×1500 (2:3) preset is the safest default.

## Everyday uses

- **Bloggers** — turn every post into a pinnable image in a minute.
- **Sellers** — make product pins with prices or offers in the title.
- **Recipe creators** — bold dish titles over food photos get the clicks.
- **Small businesses** — consistent branded pins without a design subscription.
