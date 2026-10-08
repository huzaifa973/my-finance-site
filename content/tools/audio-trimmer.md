---
title: "Free Audio Trimmer — Cut MP3 & WAV Online"
description: "Trim any audio file in your browser: pick start/end points on the waveform and download the clip. Free, no sign-up, files stay on your device."
date: 2026-10-08
draft: false
---

Cut the perfect clip out of any audio file — ringtones, podcast highlights, voice notes, or music snippets. Upload an MP3, WAV, or OGG file, see its waveform, drag the start and end handles (or type exact seconds), preview the selection, and download it. Everything runs in your browser; your audio never leaves your device.

## How it works

<div class="tool-shell" id="atShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Audio Trimmer</h2>
<p>Cut MP3, WAV &amp; OGG on the waveform — preview and download your clip in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="atTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your audio file</p>
<div class="dropzone" id="atDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your audio here</strong>
<span>or click to browse — MP3, WAV, OGG</span>
<input type="file" id="atFile" accept="audio/*">
</div>
<ul class="file-list" id="atList"></ul>
</div>
<div class="tool-step" id="atPanel" style="display:none;">
<p class="tool-step-title"><span class="tool-step-num">2</span> Set your trim points</p>
<div class="settings-panel">
<div class="preset-row" id="atPresets">
<button type="button" class="preset-chip" data-p="first30">⏱ First 30 seconds</button>
<button type="button" class="preset-chip" data-p="last30">⏱ Last 30 seconds</button>
<button type="button" class="preset-chip" data-p="full">⏪ Whole file</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="atStart">Start (seconds)</label>
<input type="number" id="atStart" class="tool-input" min="0" step="0.1" value="0">
</div>
<div class="setting">
<label for="atEnd">End (seconds)</label>
<input type="number" id="atEnd" class="tool-input" min="0" step="0.1" value="0">
</div>
</div>
<div class="hint">Click on the waveform to jump: left-click sets the start point, right-click sets the end point. Blue = your selected clip.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview, trim &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="atTrimBtn">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Trim &amp; download
</button>
<button type="button" class="btn-pro-outline" id="atPlayBtn">▶ Preview selection</button>
<button type="button" class="btn-pro-outline" id="atStopBtn">⏹ Stop</button>
</div>
<div class="results" id="atResults">
<p class="result-head">🎵 Waveform — click to set trim points</p>
<div class="result-summary" id="atInfo">Add an audio file above to see its waveform.</div>
<canvas id="atWave" style="width:100%;height:140px;border-radius:8px;background:#f8fafc;cursor:crosshair;display:none;"></canvas>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — trim as many audio files as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('atShell');
  ToolPro.themeToggle(shell, document.getElementById('atTheme'));

  var atCtx = null, atBuf = null, atSrc = null;
  var listEl = document.getElementById('atList');
  var panel = document.getElementById('atPanel');
  var resBox = document.getElementById('atResults');

  function atEnsureCtx(){ if(!atCtx) atCtx = new (window.AudioContext || window.webkitAudioContext)(); }

  function atLoadFile(f){
    if(!f) return;
    atEnsureCtx();
    atStop();
    listEl.innerHTML = '';
    ToolPro.fileRow(listEl, f, function(){ atBuf = null; panel.style.display = 'none'; });
    f.arrayBuffer().then(function(ab){ return atCtx.decodeAudioData(ab); }).then(function(buf){
      atBuf = buf;
      document.getElementById('atEnd').value = buf.duration.toFixed(1);
      document.getElementById('atEnd').max = buf.duration.toFixed(1);
      document.getElementById('atStart').max = buf.duration.toFixed(1);
      panel.style.display = 'block';
      resBox.classList.add('show');
      atInfoUpdate(); atDraw();
      ToolPro.toast('Audio loaded — ' + buf.duration.toFixed(1) + 's', 'ok');
    }).catch(function(){
      document.getElementById('atInfo').textContent = 'Could not decode this audio file. Try an MP3 or WAV.';
      ToolPro.toast('Could not decode this audio file', 'err');
    });
  }

  ToolPro.dropzone(document.getElementById('atDrop'), {
    multiple: false,
    accept: 'audio/*',
    maxFiles: 1,
    onFiles: function(arr){ atLoadFile(arr[0]); }
  });

  function atSelection(){
    var s = Math.max(0, parseFloat(document.getElementById('atStart').value) || 0);
    var e = Math.max(0, parseFloat(document.getElementById('atEnd').value) || 0);
    if(atBuf){ e = Math.min(e, atBuf.duration); s = Math.min(s, e); }
    return [s, e];
  }
  function atInfoUpdate(){
    var sel = atSelection(), dur = (sel[1] - sel[0]).toFixed(1);
    document.getElementById('atInfo').textContent = 'Total audio: ' + atBuf.duration.toFixed(1) + 's · Selected clip: ' + dur + 's (' + sel[0].toFixed(1) + 's → ' + sel[1].toFixed(1) + 's)';
  }
  function atDraw(){
    if(!atBuf) return;
    var cv = document.getElementById('atWave');
    cv.style.display = 'block';
    var ctx = cv.getContext('2d');
    var W = cv.width = cv.offsetWidth * 2, H = cv.height = 280;
    var data = atBuf.getChannelData(0), sel = atSelection();
    ctx.clearRect(0, 0, W, H);
    var step = Math.max(1, Math.floor(data.length / W));
    for(var x = 0; x < W; x++){
      var max = 0;
      for(var i = x * step; i < (x + 1) * step && i < data.length; i += Math.max(1, Math.floor(step / 50))){
        var v = Math.abs(data[i]); if(v > max) max = v;
      }
      var h = max * H * 0.9, t = x / W * atBuf.duration;
      ctx.fillStyle = (t >= sel[0] && t <= sel[1]) ? '#4f46e5' : '#cbd5e1';
      ctx.fillRect(x, (H - h) / 2, 1, h);
    }
  }

  ['atStart', 'atEnd'].forEach(function(id){
    document.getElementById(id).addEventListener('input', function(){ atInfoUpdate(); atDraw(); });
  });
  document.getElementById('atWave').addEventListener('click', function(e){
    if(!atBuf) return;
    var r = this.getBoundingClientRect(), t = (e.clientX - r.left) / r.width * atBuf.duration;
    document.getElementById('atStart').value = t.toFixed(1); atInfoUpdate(); atDraw();
  });
  document.getElementById('atWave').addEventListener('contextmenu', function(e){
    e.preventDefault(); if(!atBuf) return;
    var r = this.getBoundingClientRect(), t = (e.clientX - r.left) / r.width * atBuf.duration;
    document.getElementById('atEnd').value = t.toFixed(1); atInfoUpdate(); atDraw();
  });

  document.getElementById('atPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    if(!atBuf){ ToolPro.toast('Add an audio file first', 'err'); return; }
    var dur = atBuf.duration, p = chip.dataset.p;
    if(p === 'first30'){ document.getElementById('atStart').value = '0'; document.getElementById('atEnd').value = Math.min(30, dur).toFixed(1); }
    else if(p === 'last30'){ document.getElementById('atEnd').value = dur.toFixed(1); document.getElementById('atStart').value = Math.max(0, dur - 30).toFixed(1); }
    else { document.getElementById('atStart').value = '0'; document.getElementById('atEnd').value = dur.toFixed(1); }
    atInfoUpdate(); atDraw();
    ToolPro.toast('Trim points set: ' + chip.textContent.trim());
  });

  function atPlaySelection(){
    if(!atBuf) return;
    atEnsureCtx(); atStop();
    var sel = atSelection();
    if(sel[1] <= sel[0]) return;
    atSrc = atCtx.createBufferSource(); atSrc.buffer = atBuf; atSrc.connect(atCtx.destination);
    atSrc.start(0, sel[0], sel[1] - sel[0]);
  }
  function atStop(){ if(atSrc){ try{ atSrc.stop(); }catch(e){} atSrc = null; } }
  function atWavBlob(buf, s, e){
    var sr = buf.sampleRate, start = Math.floor(s * sr), end = Math.min(buf.length, Math.floor(e * sr));
    var len = end - start, ch = Math.min(2, buf.numberOfChannels);
    var bytes = 44 + len * ch * 2, ab = new ArrayBuffer(bytes), v = new DataView(ab);
    function wstr(o, s){ for(var i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }
    wstr(0, 'RIFF'); v.setUint32(4, bytes - 8, true); wstr(8, 'WAVE'); wstr(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, ch, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * ch * 2, true); v.setUint16(32, ch * 2, true);
    v.setUint16(34, 16, true); wstr(36, 'data'); v.setUint32(40, len * ch * 2, true);
    var off = 44;
    for(var i = 0; i < len; i++) for(var c = 0; c < ch; c++){
      var s16 = Math.max(-1, Math.min(1, buf.getChannelData(c)[start + i])) * 32767;
      v.setInt16(off, s16 < 0 ? Math.ceil(s16) : Math.floor(s16), true); off += 2;
    }
    return new Blob([ab], {type: 'audio/wav'});
  }
  function atTrim(){
    if(!atBuf) return;
    var sel = atSelection();
    if(sel[1] <= sel[0]){ document.getElementById('atInfo').textContent = 'End must be after start.'; return; }
    var blob = atWavBlob(atBuf, sel[0], sel[1]);
    var url = URL.createObjectURL(blob);
    ToolPro.download(url, 'trimmed-audio.wav');
    document.getElementById('atInfo').textContent = 'Trimmed ' + (sel[1] - sel[0]).toFixed(1) + 's clip downloaded as WAV.';
    ToolPro.toast('Trimmed clip downloaded', 'ok');
  }

  document.getElementById('atTrimBtn').addEventListener('click', atTrim);
  document.getElementById('atPlayBtn').addEventListener('click', atPlaySelection);
  document.getElementById('atStopBtn').addEventListener('click', atStop);
})();
</script>

## Everyday uses

- **Ringtones** — cut your favorite 30 seconds of any song for a custom phone ringtone.
- **Podcasters & creators** — pull highlight clips from long recordings for promos and shorts.
- **Students** — trim lecture recordings down to just the parts you need to review.
- **Voice notes** — remove the silence at the start and the "bye!" at the end before sharing.
- **Music practice** — loop-style trimming helps isolate a tricky passage to repeat.

The trimmed file downloads as WAV — a universally compatible, uncompressed format. Convert it to MP3 afterwards with any converter if you need a smaller file.
