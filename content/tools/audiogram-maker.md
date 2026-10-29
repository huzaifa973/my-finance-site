---
title: "Free Audiogram Maker — Turn Audio into a Waveform Image Online"
description: "Upload audio and generate a shareable audiogram image with a waveform, colors, and title in your browser. Free forever, no sign-up, nothing uploaded."
category: audio
date: 2026-10-29
draft: false
---

Audiograms turn audio into eye-catching social images: a waveform over a background, with your episode title on top. Upload any audio file and this tool draws its real waveform on a canvas — then export a PNG ready to post.

<div class="tool-shell" id="agmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Audiogram Maker</h2>
<p>Turn audio into a waveform image for social media — in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="agmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your audio</p>
<div class="dropzone" id="agmDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your audio here</strong><span>or click to browse — MP3, WAV, M4A, OGG</span><input type="file" id="agmFile" accept="audio/*,.mp3,.wav,.m4a,.ogg"></div><ul class="file-list" id="agmList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Waveform &amp; design settings</p>
<div class="settings-panel">
<div class="preset-row" id="agmPresets">
<button type="button" class="preset-chip active" data-w="1080" data-h="1080">⬛ Square 1080×1080</button>
<button type="button" class="preset-chip" data-w="1080" data-h="1350">📌 Portrait 1080×1350</button>
<button type="button" class="preset-chip" data-w="1200" data-h="630">🖼️ Wide 1200×630</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="agmTitle">Title text</label>
<input type="text" class="tool-input" id="agmTitle" placeholder="Episode 12 — How I Started Podcasting">
</div>
<div class="setting"><label for="agmBg">Background color</label><select id="agmBg"><option value="#111827" selected>Dark</option><option value="#ffffff">White</option><option value="#7c3aed">Purple</option><option value="#0e7490">Teal</option></select></div>
<div class="setting"><label for="agmBar">Waveform color</label><select id="agmBar"><option value="#f59e0b" selected>Amber</option><option value="#22c55e">Green</option><option value="#ef4444">Red</option><option value="#ffffff">White</option></select></div>
<div class="setting"><label for="agmStyle">Waveform style</label><select id="agmStyle"><option value="bars" selected>Bars</option><option value="line">Line</option><option value="mirror">Mirrored bars</option></select></div>
<div class="setting"><label for="agmBars">Bar count: <span class="val" id="agmBarsVal">80</span></label><input type="range" id="agmBars" min="30" max="160" step="10" value="80"></div>
</div>
<div class="setting" style="margin-top:12px">
<label>Live preview</label>
<canvas id="agmCanvas" width="1080" height="1080" style="max-width:340px;width:100%;border:1px solid #ddd;border-radius:8px"></canvas>
<div class="hint">Preview updates as you change settings. Export downloads the full-size PNG.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Export your audiogram image</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="agmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Export Audiogram PNG
</button>
<button type="button" class="btn-pro-outline" id="agmClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="agmProgWrap">
<div class="progress-bar"><i id="agmProgBar"></i></div>
<div class="progress-text" id="agmProgText">Working…</div>
</div>
<div class="results" id="agmResults">
<p class="result-head">✅ Done — your audiogram image</p>
<div class="result-summary" id="agmSummary"></div>
<div class="result-grid" id="agmGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Make unlimited audiograms — your audio never leaves your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('agmShell');
ToolPro.themeToggle(shell,document.getElementById('agmTheme'));
var canvas=document.getElementById('agmCanvas'),ctx=canvas.getContext('2d'),listEl=document.getElementById('agmList'),btn=document.getElementById('agmBtn'),clearBtn=document.getElementById('agmClear'),resBox=document.getElementById('agmResults'),sumEl=document.getElementById('agmSummary'),grid=document.getElementById('agmGrid'),presets=document.getElementById('agmPresets');
var peaks=null,audioName='audiogram',durationText='';
ToolPro.bindSlider(document.getElementById('agmBars'),document.getElementById('agmBarsVal'),function(v){return v;});
function wrapText(text,maxW){var words=text.split(/\s+/),lines=[],line='';words.forEach(function(w){var t=line?line+' '+w:w;if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;}else line=t;});if(line)lines.push(line);return lines;}
function draw(){
var W=canvas.width,H=canvas.height,bg=document.getElementById('agmBg').value,barCol=document.getElementById('agmBar').value,style=document.getElementById('agmStyle').value,nBars=parseInt(document.getElementById('agmBars').value,10);
ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
var title=document.getElementById('agmTitle').value.trim()||'Your Audiogram Title';
var darkBg=bg!=='#ffffff';ctx.fillStyle=darkBg?'#ffffff':'#111827';ctx.textAlign='center';ctx.textBaseline='top';ctx.font='800 64px Arial, sans-serif';
var lines=wrapText(title,W*0.86);lines.slice(0,3).forEach(function(l,i){ctx.fillText(l,W/2,70+i*78);});
if(durationText){ctx.font='600 34px Arial, sans-serif';ctx.fillStyle=darkBg?'#d1d5db':'#4b5563';ctx.fillText(durationText,W/2,70+lines.slice(0,3).length*78+10);}
var top=H*0.52,bot=H*0.88,mid=(top+bot)/2;
if(!peaks){ctx.fillStyle=barCol;ctx.font='600 30px Arial, sans-serif';ctx.fillText('Add audio to draw its waveform',W/2,mid-15);return;}
var gap=W*0.08,avail=W-gap*2,bw=avail/nBars*0.7,step=avail/nBars;
ctx.fillStyle=barCol;ctx.strokeStyle=barCol;ctx.lineWidth=6;
if(style==='line'){ctx.beginPath();for(var i=0;i<nBars;i++){var p=peaks[Math.floor(i/peaks.length*peaks.length)]||0;var y=mid-p*(bot-top)/2;if(i===0)ctx.moveTo(gap,y);else ctx.lineTo(gap+i*step+step/2,y);}ctx.stroke();}
else{for(var j=0;j<nBars;j++){var pk=peaks[Math.floor(j/nBars*peaks.length)]||0;var h=Math.max(8,pk*(bot-top));if(style==='mirror'){ctx.fillRect(gap+j*step,mid-h/2,bw,h);}else{ctx.fillRect(gap+j*step,bot-h,bw,h);}}}
}
['agmTitle','agmBg','agmBar','agmStyle','agmBars'].forEach(function(id){document.getElementById(id).addEventListener('input',draw);document.getElementById(id).addEventListener('change',draw);});
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');canvas.width=parseInt(c.dataset.w,10);canvas.height=parseInt(c.dataset.h,10);draw();ToolPro.toast('Size preset: '+c.textContent.trim());});
function resetAll(){peaks=null;durationText='';listEl.innerHTML='';resBox.classList.remove('show');grid.innerHTML='';btn.disabled=true;clearBtn.disabled=true;draw();}
ToolPro.dropzone(document.getElementById('agmDrop'),{multiple:false,accept:'audio/*,.mp3,.wav,.m4a,.ogg',maxFiles:1,onFiles:function(arr){if(!arr.length)return;var f=arr[0];listEl.innerHTML='';ToolPro.fileRow(listEl,f,resetAll);audioName=f.name.replace(/\.[^.]+$/,'');var AC=window.AudioContext||window.webkitAudioContext;if(!AC){ToolPro.toast('Audio decoding is not supported in this browser','err');return;}var actx=new AC();f.arrayBuffer().then(function(buf){return actx.decodeAudioData(buf);}).then(function(decoded){var ch=decoded.getChannelData(0);var nBars=160,peaksArr=[];for(var i=0;i<nBars;i++){var s=Math.floor(i/nBars*ch.length),e=Math.floor((i+1)/nBars*ch.length),mx=0;for(var k=s;k<e;k+=Math.max(1,Math.floor((e-s)/200))){var v=Math.abs(ch[k]);if(v>mx)mx=v;}peaksArr.push(mx);}peaks=peaksArr;var m=Math.floor(decoded.duration/60),sec=Math.floor(decoded.duration%60);durationText=m+':'+('0'+sec).slice(2)+' of audio';btn.disabled=false;clearBtn.disabled=false;draw();ToolPro.toast('Audio decoded — waveform ready','ok');}).catch(function(){ToolPro.toast('Could not decode this audio file','err');});}});
clearBtn.addEventListener('click',resetAll);
btn.addEventListener('click',function(){if(!peaks)return;draw();canvas.toBlob(function(blob){if(!blob){ToolPro.toast('Export failed','err');return;}var url=URL.createObjectURL(blob);sumEl.textContent='Audiogram exported at '+canvas.width+'×'+canvas.height+'px PNG.';var card=document.createElement('div');card.className='result-card';var im=document.createElement('img');im.className='r-preview';im.src=url;var nm=document.createElement('div');nm.className='r-name';nm.textContent=audioName+'-audiogram.png';var dl=document.createElement('button');dl.type='button';dl.className='btn-pro';dl.textContent='⬇ Download';dl.addEventListener('click',function(){ToolPro.download(url,nm.textContent);});card.appendChild(im);card.appendChild(nm);card.appendChild(dl);grid.innerHTML='';grid.appendChild(card);resBox.classList.add('show');ToolPro.toast('Audiogram exported','ok');},'image/png');});
draw();
})();
</script>

## How it works

- **Step 1** — Upload an audio file (MP3, WAV, M4A, OGG). It is decoded locally with the Web Audio API.
- **Step 2** — The real waveform peaks are sampled and drawn as bars, a line, or mirrored bars, with your title and colors.
- **Step 3** — Export a full-size PNG image and post it with a link to the full audio.

**Note:** this tool exports a static audiogram *image* (not an animated video). For an animated waveform video, pair the image with your audio in any video editor.

## Everyday uses

- **Podcasters** — promote new episodes on Instagram and Pinterest.
- **Musicians** — tease a track with a branded waveform image.
- **Coaches &amp; teachers** — share voice notes as visual posts.
- **Audiobook creators** — preview chapters with title + waveform art.
