---
title: "Free Audio Trimmer — Cut MP3 & WAV Online"
description: "Trim any audio file in your browser: pick start/end points on the waveform and download the clip. Free, no sign-up, files stay on your device."
date: 2026-10-08
draft: false
---

Cut the perfect clip out of any audio file — ringtones, podcast highlights, voice notes, or music snippets. Upload an MP3, WAV, or OGG file, see its waveform, drag the start and end handles (or type exact seconds), preview the selection, and download it. Everything runs in your browser; your audio never leaves your device.

## How it works

<div class="calc">
  <div style="margin-bottom:.8rem;">
    <label for="atFile" style="font-weight:600;">Upload an audio file</label><br>
    <input type="file" id="atFile" accept="audio/*" style="margin-top:.4rem;">
  </div>
  <div id="atPanel" style="display:none;">
    <canvas id="atWave" style="width:100%;height:140px;border:1px solid var(--border);border-radius:8px;background:#f8fafc;cursor:crosshair;"></canvas>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end;margin:.8rem 0;">
      <div>
        <label for="atStart" style="font-weight:600;">Start (sec)</label><br>
        <input type="number" id="atStart" min="0" step="0.1" value="0" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;">
      </div>
      <div>
        <label for="atEnd" style="font-weight:600;">End (sec)</label><br>
        <input type="number" id="atEnd" min="0" step="0.1" value="0" style="width:110px;padding:.4rem;border:1px solid var(--border);border-radius:6px;">
      </div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        <button type="button" onclick="atPlaySelection()">Preview selection</button>
        <button type="button" onclick="atStop()">Stop</button>
        <button type="button" onclick="atTrim()" style="background:#4f46e5;">Trim & download</button>
      </div>
    </div>
    <p id="atInfo" style="font-size:.9rem;color:var(--muted);"></p>
    <p style="font-size:.85rem;color:var(--muted);">Click on the waveform to jump: left-click sets the start point, right-click sets the end point. Blue = your selected clip.</p>
  </div>
</div>

<script>
var atCtx=null, atBuf=null, atSrc=null;
function atEnsureCtx(){ if(!atCtx) atCtx=new (window.AudioContext||window.webkitAudioContext)(); }
document.getElementById('atFile').addEventListener('change',function(e){
  var f=e.target.files[0]; if(!f)return;
  atEnsureCtx();
  f.arrayBuffer().then(function(ab){return atCtx.decodeAudioData(ab);}).then(function(buf){
    atBuf=buf;
    document.getElementById('atEnd').value=buf.duration.toFixed(1);
    document.getElementById('atEnd').max=buf.duration.toFixed(1);
    document.getElementById('atStart').max=buf.duration.toFixed(1);
    document.getElementById('atPanel').style.display='block';
    atInfoUpdate(); atDraw();
  }).catch(function(){document.getElementById('atInfo').textContent='Could not decode this audio file. Try an MP3 or WAV.';});
});
function atSelection(){
  var s=Math.max(0,parseFloat(document.getElementById('atStart').value)||0);
  var e=Math.max(0,parseFloat(document.getElementById('atEnd').value)||0);
  if(atBuf){e=Math.min(e,atBuf.duration); s=Math.min(s,e);}
  return [s,e];
}
function atInfoUpdate(){
  var sel=atSelection(), dur=(sel[1]-sel[0]).toFixed(1);
  document.getElementById('atInfo').textContent='Total audio: '+atBuf.duration.toFixed(1)+'s · Selected clip: '+dur+'s ('+sel[0].toFixed(1)+'s → '+sel[1].toFixed(1)+'s)';
}
function atDraw(){
  if(!atBuf)return;
  var cv=document.getElementById('atWave'), ctx=cv.getContext('2d');
  var W=cv.width=cv.offsetWidth*2, H=cv.height=280;
  var data=atBuf.getChannelData(0), sel=atSelection();
  ctx.clearRect(0,0,W,H);
  var step=Math.max(1,Math.floor(data.length/W));
  for(var x=0;x<W;x++){
    var max=0;
    for(var i=x*step;i<(x+1)*step&&i<data.length;i+=Math.max(1,Math.floor(step/50))){
      var v=Math.abs(data[i]); if(v>max)max=v;
    }
    var h=max*H*0.9, t=x/W*atBuf.duration;
    ctx.fillStyle=(t>=sel[0]&&t<=sel[1])?'#4f46e5':'#cbd5e1';
    ctx.fillRect(x,(H-h)/2,1,h);
  }
}
['atStart','atEnd'].forEach(function(id){
  document.getElementById(id).addEventListener('input',function(){atInfoUpdate();atDraw();});
});
document.getElementById('atWave').addEventListener('click',function(e){
  if(!atBuf)return;
  var r=this.getBoundingClientRect(), t=(e.clientX-r.left)/r.width*atBuf.duration;
  document.getElementById('atStart').value=t.toFixed(1); atInfoUpdate(); atDraw();
});
document.getElementById('atWave').addEventListener('contextmenu',function(e){
  e.preventDefault(); if(!atBuf)return;
  var r=this.getBoundingClientRect(), t=(e.clientX-r.left)/r.width*atBuf.duration;
  document.getElementById('atEnd').value=t.toFixed(1); atInfoUpdate(); atDraw();
});
function atPlaySelection(){
  if(!atBuf)return;
  atEnsureCtx(); atStop();
  var sel=atSelection();
  if(sel[1]<=sel[0])return;
  atSrc=atCtx.createBufferSource(); atSrc.buffer=atBuf; atSrc.connect(atCtx.destination);
  atSrc.start(0,sel[0],sel[1]-sel[0]);
}
function atStop(){ if(atSrc){try{atSrc.stop();}catch(e){} atSrc=null;} }
function atWavBlob(buf,s,e){
  var sr=buf.sampleRate, start=Math.floor(s*sr), end=Math.min(buf.length,Math.floor(e*sr));
  var len=end-start, ch=Math.min(2,buf.numberOfChannels);
  var bytes=44+len*ch*2, ab=new ArrayBuffer(bytes), v=new DataView(ab);
  function wstr(o,s){for(var i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));}
  wstr(0,'RIFF'); v.setUint32(4,bytes-8,true); wstr(8,'WAVE'); wstr(12,'fmt ');
  v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,ch,true);
  v.setUint32(24,sr,true); v.setUint32(28,sr*ch*2,true); v.setUint16(32,ch*2,true);
  v.setUint16(34,16,true); wstr(36,'data'); v.setUint32(40,len*ch*2,true);
  var off=44;
  for(var i=0;i<len;i++)for(var c=0;c<ch;c++){
    var s16=Math.max(-1,Math.min(1,buf.getChannelData(c)[start+i]))*32767;
    v.setInt16(off,s16<0?Math.ceil(s16):Math.floor(s16),true); off+=2;
  }
  return new Blob([ab],{type:'audio/wav'});
}
function atTrim(){
  if(!atBuf)return;
  var sel=atSelection();
  if(sel[1]<=sel[0]){document.getElementById('atInfo').textContent='End must be after start.';return;}
  var blob=atWavBlob(atBuf,sel[0],sel[1]);
  var url=URL.createObjectURL(blob), a=document.createElement('a');
  a.href=url; a.download='trimmed-audio.wav';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  document.getElementById('atInfo').textContent='Trimmed '+(sel[1]-sel[0]).toFixed(1)+'s clip downloaded as WAV.';
}
</script>

## Everyday uses

- **Ringtones** — cut your favorite 30 seconds of any song for a custom phone ringtone.
- **Podcasters & creators** — pull highlight clips from long recordings for promos and shorts.
- **Students** — trim lecture recordings down to just the parts you need to review.
- **Voice notes** — remove the silence at the start and the "bye!" at the end before sharing.
- **Music practice** — loop-style trimming helps isolate a tricky passage to repeat.

The trimmed file downloads as WAV — a universally compatible, uncompressed format. Convert it to MP3 afterwards with any converter if you need a smaller file.
