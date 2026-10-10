---
title: "Free Online Voice Recorder — Record Audio in Your Browser"
description: "Record voice memos, interviews, and ideas in your browser with live level meter and pause. Free, no sign-up, recordings never leave your device."
category: audio
date: 2026-10-10
draft: false
---

Record voice memos, interviews, song ideas, and lectures straight in your browser — no app to install, no account needed. You get a live input level meter so you can see your mic is working, a running timer, pause and resume, and instant playback when you stop. The recording never leaves your device: it's captured locally and downloads straight to you.

<div class="tool-shell" id="vrecShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Voice Recorder</h2>
<p>Record voice memos with a live level meter, timer, pause &amp; resume — in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="vrecTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enable your microphone</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label class="toggle-row"><input type="checkbox" class="toggle" id="vrecEC" checked> Echo cancellation</label>
<div class="hint">Removes speaker feedback — keep on for calls and laptop mics.</div>
</div>
<div class="setting">
<label class="toggle-row"><input type="checkbox" class="toggle" id="vrecNS" checked> Noise suppression</label>
<div class="hint">Reduces background hum and fan noise automatically.</div>
</div>
</div>
<div class="tool-actions" style="margin-top:12px;">
<button type="button" class="btn-pro" id="vrecEnable">🎙 Enable microphone</button>
</div>
<div class="result-summary" id="vrecMicInfo">Click above and allow microphone access when your browser asks. Nothing is recorded until you press Record.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Record</p>
<div class="settings-panel">
<div class="preset-row" id="vrecPresets">
<button type="button" class="preset-chip" data-l="voicenote">📝 Voice note</button>
<button type="button" class="preset-chip" data-l="interview">🎙 Interview</button>
<button type="button" class="preset-chip" data-l="idea">💡 Song idea</button>
</div>
<div style="text-align:center;margin:8px 0;">
<div id="vrecTimer" style="font-size:2rem;font-weight:700;font-variant-numeric:tabular-nums;">00:00</div>
<div class="hint" id="vrecStatus">Microphone not enabled yet.</div>
</div>
<canvas id="vrecMeter" style="width:100%;height:64px;border-radius:8px;background:#f8fafc;"></canvas>
<div class="hint">The green bar shows your live input level — speak and watch it move. If it's flat, your mic isn't picking anything up.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Stop, listen &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vrecRecBtn" disabled>🔴 Record</button>
<button type="button" class="btn-pro-outline" id="vrecPauseBtn" disabled>⏸ Pause</button>
<button type="button" class="btn-pro-outline" id="vrecResumeBtn" disabled>▶ Resume</button>
<button type="button" class="btn-pro-outline" id="vrecStopBtn" disabled>⏹ Stop</button>
</div>
<div class="progress-wrap" id="vrecProgWrap">
<div class="progress-bar"><i id="vrecProgBar"></i></div>
<div class="progress-text" id="vrecProgText">Working…</div>
</div>
<div class="results" id="vrecResults">
<p class="result-head">🎙 Your recording</p>
<div class="result-summary" id="vrecInfo">Your finished recording will appear here with playback and download.</div>
<div class="result-grid" id="vrecGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — record as many voice memos as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('vrecShell');
  ToolPro.themeToggle(shell, document.getElementById('vrecTheme'));

  var stream = null, rec = null, chunks = [], actx = null, analyser = null, micSrc = null;
  var recording = false, paused = false, rafId = null, timerId = null, startTs = 0, elapsed = 0;
  var timerEl = document.getElementById('vrecTimer');
  var statusEl = document.getElementById('vrecStatus');
  var infoEl = document.getElementById('vrecInfo');
  var gridEl = document.getElementById('vrecGrid');
  var enableBtn = document.getElementById('vrecEnable');
  var recBtn = document.getElementById('vrecRecBtn');
  var pauseBtn = document.getElementById('vrecPauseBtn');
  var resumeBtn = document.getElementById('vrecResumeBtn');
  var stopBtn = document.getElementById('vrecStopBtn');
  var micInfo = document.getElementById('vrecMicInfo');

  var supported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && !!window.MediaRecorder;
  if(!supported){
    micInfo.textContent = 'Sorry — your browser does not support microphone recording. Try a recent version of Chrome, Edge, Firefox, or Safari.';
    enableBtn.disabled = true;
    ToolPro.toast('Recording not supported in this browser', 'err');
  }

  function fmtTime(ms){
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60); s = s % 60;
    var h = Math.floor(m / 60); m = m % 60;
    return (h ? (h < 10 ? '0' + h : h) + ':' : '') + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  }

  function drawMeter(){
    var cv = document.getElementById('vrecMeter');
    var ctx = cv.getContext('2d');
    var W = cv.width = cv.offsetWidth * 2, H = cv.height = 128;
    var level = 0;
    if(analyser){
      var data = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(data);
      var sum = 0;
      for(var i = 0; i < data.length; i++){ var x = (data[i] - 128) / 128; sum += x * x; }
      level = Math.min(1, Math.sqrt(sum / data.length) * 4);
    }
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, H / 2 - 8, W, 16);
    var grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, '#22c55e'); grad.addColorStop(0.7, '#22c55e'); grad.addColorStop(0.9, '#eab308'); grad.addColorStop(1, '#ef4444');
    ctx.fillStyle = grad;
    ctx.fillRect(0, H / 2 - 8, W * level, 16);
    rafId = requestAnimationFrame(drawMeter);
  }

  function startTimer(){
    stopTimer();
    startTs = Date.now() - elapsed;
    timerId = setInterval(function(){
      timerEl.textContent = fmtTime(Date.now() - startTs);
    }, 250);
  }
  function stopTimer(){
    if(timerId){ clearInterval(timerId); timerId = null; }
  }

  function setState(st){
    statusEl.textContent = st;
  }

  enableBtn.addEventListener('click', function(){
    if(!supported) return;
    var ec = document.getElementById('vrecEC').checked;
    var ns = document.getElementById('vrecNS').checked;
    micInfo.textContent = 'Requesting microphone access…';
    navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: ec, noiseSuppression: ns } }).then(function(s){
      stream = s;
      actx = new (window.AudioContext || window.webkitAudioContext)();
      micSrc = actx.createMediaStreamSource(stream);
      analyser = actx.createAnalyser();
      analyser.fftSize = 2048;
      micSrc.connect(analyser);
      if(!rafId) drawMeter();
      enableBtn.disabled = true;
      recBtn.disabled = false;
      micInfo.textContent = 'Microphone ready — the level meter above reacts to your voice. Press Record when ready.';
      setState('Ready to record.');
      document.getElementById('vrecResults').classList.add('show');
      ToolPro.toast('Microphone enabled', 'ok');
    }).catch(function(err){
      micInfo.textContent = 'Microphone access was blocked. Click the camera/mic icon in your browser address bar to allow it, then try again.';
      ToolPro.toast('Microphone access denied', 'err');
    });
  });

  document.getElementById('vrecPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#vrecPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    ToolPro.toast('Label set: ' + chip.textContent.trim());
  });

  function pickMime(){
    var cands = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    for(var i = 0; i < cands.length; i++){
      try { if(MediaRecorder.isTypeSupported(cands[i])) return cands[i]; } catch(e){}
    }
    return '';
  }

  recBtn.addEventListener('click', function(){
    if(!stream || recording) return;
    chunks = [];
    var mime = pickMime();
    try {
      rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    } catch(e){
      ToolPro.toast('Could not start the recorder', 'err');
      return;
    }
    rec.ondataavailable = function(e){ if(e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = onStopped;
    rec.start(250);
    recording = true; paused = false; elapsed = 0;
    timerEl.textContent = '00:00';
    startTimer();
    recBtn.disabled = true; pauseBtn.disabled = false; stopBtn.disabled = false; resumeBtn.disabled = true;
    setState('🔴 Recording…');
    ToolPro.toast('Recording started');
  });

  pauseBtn.addEventListener('click', function(){
    if(rec && recording && !paused && rec.state === 'recording'){
      rec.pause();
      paused = true;
      elapsed = Date.now() - startTs;
      stopTimer();
      pauseBtn.disabled = true; resumeBtn.disabled = false;
      setState('⏸ Paused.');
      ToolPro.toast('Paused');
    }
  });

  resumeBtn.addEventListener('click', function(){
    if(rec && recording && paused && rec.state === 'paused'){
      rec.resume();
      paused = false;
      startTimer();
      pauseBtn.disabled = false; resumeBtn.disabled = true;
      setState('🔴 Recording…');
      ToolPro.toast('Resumed');
    }
  });

  stopBtn.addEventListener('click', function(){
    if(rec && recording){
      elapsed = Date.now() - startTs;
      stopTimer();
      try { rec.stop(); } catch(e){}
    }
  });

  function onStopped(){
    recording = false; paused = false;
    timerEl.textContent = fmtTime(elapsed);
    recBtn.disabled = false; pauseBtn.disabled = true; resumeBtn.disabled = true; stopBtn.disabled = true;
    setState('Ready to record.');
    var type = (rec && rec.mimeType) || 'audio/webm';
    var blob = new Blob(chunks, { type: type });
    var ext = type.indexOf('mp4') >= 0 ? 'm4a' : (type.indexOf('ogg') >= 0 ? 'ogg' : 'webm');
    var labelEl = document.querySelector('#vrecPresets .preset-chip.active');
    var label = labelEl ? labelEl.dataset.l : 'voice-note';
    var fname = label + '-' + new Date().toISOString().slice(0, 10) + '.' + ext;
    var url = URL.createObjectURL(blob);
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<audio controls style="width:100%;"></audio>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download</button>';
    card.querySelector('audio').src = url;
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-stats').textContent = fmtTime(elapsed) + ' · ' + ToolPro.fmtBytes(blob.size);
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    gridEl.appendChild(card);
    infoEl.textContent = 'Recording saved below — play it back, then download. Your audio never left this device.';
    document.getElementById('vrecResults').classList.add('show');
    ToolPro.toast('Recording finished', 'ok');
  }
})();
</script>

## How it works

1. **Enable your microphone** — your browser asks for permission once. Pick echo cancellation and noise suppression to taste (both on is best for most people).
2. **Check the level meter** — speak and watch the green bar move. No movement means your mic isn't being picked up — check your system input settings.
3. **Record, pause, resume** — start recording, pause for interruptions, and resume without creating a second file. The timer keeps exact track.
4. **Stop and review** — your recording appears below with a built-in player. Listen, then download it to your device.

Your recordings never leave your browser — nothing is uploaded, streamed, or stored on any server.

## Everyday uses

- **Voice memos** — capture ideas, reminders, and to-do lists hands-free.
- **Interviews & meetings** — record with pause/resume for clean, interruption-free audio (get consent first where required).
- **Students** — record lectures and study notes, then replay while reviewing.
- **Musicians & songwriters** — hum that melody before you forget it.
- **Language practice** — record yourself speaking and play it back to check pronunciation.

**Tip:** for the clearest recordings, get close to the mic, record in a quiet room, and keep noise suppression on. The downloaded file is WebM/Opus (or M4A on Safari) — both play in all modern browsers and convert easily if you need another format.
