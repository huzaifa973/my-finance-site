---
title: "Free Video Splitter — Split Video into Parts Online, No Sign-Up"
description: "Split video online: cut into equal parts or split at your own timestamps. Fast, no re-encoding. Free forever, no sign-up, private."
category: video
date: 2026-10-16
draft: false
---

Need one long video as several clips? This free video splitter cuts your video into equal parts — or exactly at the timestamps you list — without re-encoding, so splits are fast and quality stays identical to the original. Every segment downloads separately.

<div class="tool-shell" id="vspShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9 7h6v10H9V7zm-4 0H3v10h2V7zm14 0h-2v10h2V7zM7 5H5v14h2V5zm12 0h-2v14h2V5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Splitter</h2>
<p>Split any video into equal parts or at your timestamps — fast, free, in-browser.</p>
</div>
<button type="button" class="theme-toggle" id="vspTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your video</p>
<div class="dropzone" id="vspDrop"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg><strong>Drag &amp; drop your video here</strong><span>or click to browse — MP4, WebM, MOV · engine downloads once (~9 MB), then cached</span><input type="file" id="vspFile" accept="video/*"></div><ul class="file-list" id="vspList"></ul><video id="vspProbe" style="display:none" muted playsinline></video><div class="setting"><label>Detected duration</label><div class="hint" id="vspDur">Add a video to detect its length.</div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="vspPresets">
<button type="button" class="preset-chip active" data-preset="✂️ 2 equal parts">✂️ 2 equal parts</button>
<button type="button" class="preset-chip" data-preset="✂️ 4 equal parts">✂️ 4 equal parts</button>
<button type="button" class="preset-chip" data-preset="⏱️ Split at timestamps">⏱️ Split at timestamps</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="vspMode">Split mode</label><select id="vspMode"><option value="equal" selected>Equal parts — N identical-length clips</option><option value="times">Timestamps — cut where you say</option></select><div class="hint">Equal parts divide the video evenly; timestamps cut at your exact marks.</div></div><div class="setting"><label for="vspParts">Number of parts: <span class="val" id="vspPartsVal">2 parts</span></label><input type="range" id="vspParts" min="2" max="10" step="1" value="2"><div class="hint">Only used in Equal-parts mode.</div></div><div class="setting"><label for="vspTimes">Timestamps (one per line)</label><textarea class="tool-input" id="vspTimes" rows="4" placeholder="0:30&#10;1:15&#10;2:00"></textarea><div class="hint">Formats: seconds (90), m:ss (1:30), or h:mm:ss (0:01:30). Cuts happen at keyframes — within a second or two of your mark.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split the video</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vspBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Split Video
</button>
<button type="button" class="btn-pro-outline" id="vspClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="vspProgWrap">
<div class="progress-bar"><i id="vspProgBar"></i></div>
<div class="progress-text" id="vspProgText">Working…</div>
</div>
<div class="results" id="vspResults">
<p class="result-head">✅ Done — your video segments</p>
<div class="result-summary" id="vspSummary"></div>
<div class="result-grid" id="vspGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Split unlimited videos — every segment downloads separately, forever free.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('vspShell');
ToolPro.themeToggle(shell,document.getElementById('vspTheme'));
var CDN_BASES=['https://cdn.jsdelivr.net/npm/@ffmpeg','https://unpkg.com/@ffmpeg'];
var file=null,duration=0,listEl=document.getElementById('vspList'),
btn=document.getElementById('vspBtn'),clearBtn=document.getElementById('vspClear'),
modeS=document.getElementById('vspMode'),partsR=document.getElementById('vspParts'),
partsV=document.getElementById('vspPartsVal'),timesT=document.getElementById('vspTimes'),
durH=document.getElementById('vspDur'),probe=document.getElementById('vspProbe'),
presets=document.getElementById('vspPresets');
ToolPro.bindSlider(partsR,partsV,function(v){return v+' parts';});
function fmtT(s){s=Math.max(0,Math.round(s));var h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;
return (h?h+':':'')+(m<10?'0':'')+m+':'+(ss<10?'0':'')+ss;}
function refresh(){
btn.disabled=!file;clearBtn.disabled=!file;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Split Video';
}
ToolPro.dropzone(document.getElementById('vspDrop'),{multiple:false,accept:'video/*',
onFiles:function(arr){
file=arr[0];listEl.innerHTML='';
ToolPro.fileRow(listEl,file,function(){file=null;duration=0;durH.textContent='Add a video to detect its length.';refresh();});
probe.src=URL.createObjectURL(file);
probe.onloadedmetadata=function(){duration=probe.duration||0;
durH.textContent=duration?('Detected: '+fmtT(duration)+' ('+Math.round(duration)+' seconds)'):'Could not read duration.';};
document.getElementById('vspResults').classList.remove('show');refresh();
ToolPro.toast('Video added','ok');
}});
clearBtn.addEventListener('click',function(){file=null;duration=0;listEl.innerHTML='';timesT.value='';
durH.textContent='Add a video to detect its length.';
document.getElementById('vspResults').classList.remove('show');refresh();});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('4 equal')>-1){modeS.value='equal';partsR.value='4';}
else if(t.indexOf('timestamps')>-1){modeS.value='times';}
else{modeS.value='equal';partsR.value='2';}
partsR.dispatchEvent(new Event('input'));ToolPro.toast('Preset applied: '+t.trim());
});
function loadScript(url){return new Promise(function(res,rej){
var s=document.createElement('script');s.src=url;s.onload=function(){res();};s.onerror=function(){rej(new Error('script'));};
document.head.appendChild(s);});}
var ff=null,loading=null,progCb=null;
function tryLoad(base){
return loadScript(base+'/ffmpeg@0.11.0/dist/ffmpeg.min.js').then(function(){
var f=FFmpeg.createFFmpeg({log:false,corePath:base+'/core-st@0.11.1/dist/ffmpeg-core.js',mainName:'main'});
f.setProgress(function(p){if(progCb&&p.ratio)progCb(p.ratio);});
return f.load().then(function(){return f;});
});
}
function ensureFF(){
if(ff&&ff.isLoaded())return Promise.resolve(ff);
ff=null;loading=null;
loading=tryLoad(CDN_BASES[0]).catch(function(){return tryLoad(CDN_BASES[1]);})
.then(function(f){ff=f;return f;});
loading=loading.catch(function(e){loading=null;throw e;});
return loading;
}
function parseTs(line){
line=line.trim();if(!line)return null;
if(/^[0-9]+(\.[0-9]+)?$/.test(line))return parseFloat(line);
var p=line.split(':').map(Number);
if(p.some(isNaN))return null;
var s=0;for(var i=0;i<p.length;i++)s=s*60+p[i];
return s;
}
function ext(name){var m=/\.([a-z0-9]+)$/i.exec(name||'');return m?m[1].toLowerCase():'mp4';}
btn.addEventListener('click',async function(){
if(!file||!duration){ToolPro.toast('Add a video first','err');return;}
var segs=[],i;
if(modeS.value==='equal'){
var n=parseInt(partsR.value,10),len=duration/n;
for(i=0;i<n;i++)segs.push([i*len,(i+1)*len]);
}else{
var ts=timesT.value.split('\n').map(parseTs).filter(function(x){return x!==null&&x>0&&x<duration;});
ts.sort(function(a,b){return a-b;});
var marks=[0];ts.forEach(function(t){if(t-marks[marks.length-1]>0.5)marks.push(t);});
marks.push(duration);
for(i=0;i<marks.length-1;i++)if(marks[i+1]-marks[i]>0.5)segs.push([marks[i],marks[i+1]]);
}
if(!segs.length){ToolPro.toast('No valid segments — check your timestamps','err');return;}
var wrap=document.getElementById('vspProgWrap'),bar=document.getElementById('vspProgBar'),
txt=document.getElementById('vspProgText'),grid=document.getElementById('vspGrid'),
resBox=document.getElementById('vspResults');
btn.disabled=true;wrap.classList.add('show');resBox.classList.remove('show');grid.innerHTML='';
var inExt=ext(file.name),inName='in.'+inExt,ok=0;
try{
for(i=0;i<segs.length;i++){
txt.textContent='Loading engine for part '+(i+1)+' of '+segs.length+'…';
bar.style.width=Math.round(i/segs.length*100)+'%';
var f=await ensureFF();
var start=segs[i][0],len2=segs[i][1]-segs[i][0];
f.FS('writeFile',inName,await FFmpeg.fetchFile(file));
txt.textContent='Cutting part '+(i+1)+' of '+segs.length+' ('+fmtT(start)+' → '+fmtT(segs[i][1])+')…';
progCb=function(r){bar.style.width=Math.round((i+r)/segs.length*100)+'%';};
var outN='part'+(i+1)+'.'+inExt;
await f.run('-ss',String(start.toFixed(2)),'-i',inName,'-t',String(len2.toFixed(2)),'-c','copy',outN);
var data=f.FS('readFile',outN);
var blob=new Blob([data.buffer],{type:'video/'+inExt});
var url=URL.createObjectURL(blob);
try{f.FS('unlink',inName);}catch(e){}
try{f.FS('unlink',outN);}catch(e){}
// The single-thread engine runs only once per instance — tear it down
// so the next segment rebuilds fresh from the cached core files.
try{f.exit();}catch(e2){}
ok++;
var card=document.createElement('div');card.className='result-card';
var vd=document.createElement('video');vd.controls=true;vd.src=url;vd.style.width='100%';vd.preload='metadata';
var nm=file.name.replace(/\.[^.]+$/,'')+'-part'+(i+1)+'.'+inExt;
var nmEl=document.createElement('div');nmEl.className='r-name';nmEl.textContent=nm;
var st=document.createElement('div');st.className='r-stats';
st.textContent=fmtT(start)+' → '+fmtT(segs[i][1])+' · '+ToolPro.fmtBytes(blob.size);
var dl=document.createElement('button');dl.type='button';dl.className='btn-pro';dl.textContent='⬇ Download Part '+(i+1);
(function(u,n2){dl.addEventListener('click',function(){ToolPro.download(u,n2);});})(url,nm);
card.appendChild(vd);card.appendChild(nmEl);card.appendChild(st);card.appendChild(dl);
grid.appendChild(card);
}
bar.style.width='100%';
document.getElementById('vspSummary').textContent='🎉 '+ok+' segments cut — lossless, original quality kept.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Video split into '+ok+' parts','ok');
}catch(err){
txt.textContent='Splitting failed. Try a shorter video or fewer parts.';
ToolPro.toast('Split failed','err');
try{if(ff)ff.exit();}catch(e){}
}
wrap.classList.remove('show');btn.disabled=false;refresh();
});
refresh();
})();

</script>

## How it works

- **Step 1** — Drop in your video. Its duration is detected automatically.
- **Step 2** — Choose equal parts (2–10) or list your own timestamps.
- **Step 3** — Each segment is cut with ffmpeg.wasm (no re-encoding = fast, lossless) and downloads individually.

## Everyday uses

- **Creators** — chop a long recording into upload-ready episodes.
- **Teachers** — split lectures into topic-sized clips for students.
- **Social media** — cut highlights for Reels, Shorts, and TikTok.
- **Archivists** — break huge files into manageable pieces.

**Note:** cuts land on keyframes, so a timestamp may shift by a second or two — normal for lossless splitting.