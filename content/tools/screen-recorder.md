---
title: "Free Online Screen Recorder — Record Screen & Audio"
description: "Record your screen, a window, or a browser tab with optional microphone audio — right in your browser. Timer, preview, and WebM/MP4 download. Free forever, no sign-up, recordings stay on your device."
category: video
date: 2026-10-11
draft: false
---

Need to record a tutorial, a demo, or a bug to show a developer? Capture your screen, a window, or a browser tab with optional microphone narration — no downloads, no accounts, no watermarks. Your recording is processed entirely in your browser and never leaves your device.

<style>
#scrShell .r-video{width:100%;border-radius:12px;margin:.25rem 0;background:#000}
#scrShell .rec-status{display:flex;align-items:center;gap:.6rem;margin-top:.9rem;padding:.6rem .9rem;border-radius:10px;background:var(--tp-muted,#f1f5f9);font-weight:600}
#scrShell .rec-dot{width:12px;height:12px;border-radius:50%;background:#94a3b8;flex:0 0 auto}
#scrShell .rec-dot.on{background:#ef4444;animation:scrblink 1s infinite}
#scrShell .rec-timer{margin-left:auto;font-variant-numeric:tabular-nums}
@keyframes scrblink{50%{opacity:.35}}
</style>
<div class="tool-shell" id="scrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Screen Recorder</h2>
<p>Record your screen, window, or tab with mic audio — free, no watermark, no time limit.</p>
</div>
<button type="button" class="theme-toggle" id="scrTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — recordings stay on your device</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose what to capture</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label>Audio sources</label>
<div class="toggle-row">
<span class="t-label">🎤 Microphone narration</span>
<label class="toggle"><input type="checkbox" id="scrMic" checked><span class="track"></span></label>
</div>
<div class="toggle-row">
<span class="t-label">🔊 System / tab audio <small>(pick in the share dialog)</small></span>
<label class="toggle"><input type="checkbox" id="scrSys" checked><span class="track"></span></label>
</div>
<div class="hint">In the browser's share dialog you can pick your whole screen, a window, or a tab — and tick "share audio" there for system sound.</div>
</div>
<div class="setting">
<label for="scrMime">Recording format</label>
<select id="scrMime"></select>
<div class="hint">WebM (VP9/VP8) works everywhere; MP4 appears when your browser supports it.</div>
</div>
</div>
</div>
<div class="rec-status" id="scrStatus">
<span class="rec-dot" id="scrDot"></span>
<span id="scrStatusText">Ready — nothing recording yet</span>
<span class="rec-timer" id="scrTimer">00:00</span>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Recording quality</p>
<div class="settings-panel">
<div class="preset-row" id="scrPresets">
<button type="button" class="preset-chip" data-mbps="2">📱 Small file — 2 Mbps</button>
<button type="button" class="preset-chip active" data-mbps="5">💻 Balanced — 5 Mbps</button>
<button type="button" class="preset-chip" data-mbps="12">✨ High quality — 12 Mbps</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="scrMbps">Video bitrate: <span class="val" id="scrMbpsVal">5 Mbps</span></label>
<input type="range" id="scrMbps" min="1" max="20" step="1" value="5">
<div class="hint">Higher bitrate = sharper text, bigger file. 5 Mbps is great for tutorials.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Record &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="scrBtn">
<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>
<span id="scrBtnLabel">Start Recording</span>
</button>
<button type="button" class="btn-pro-outline" id="scrStopExt" disabled>Download Again</button>
</div>
<div class="progress-wrap" id="scrProgWrap">
<div class="progress-bar"><i id="scrProgBar"></i></div>
<div class="progress-text" id="scrProgText">Recording…</div>
</div>
<div class="results" id="scrResults">
<p class="result-head">✅ Done — your recording</p>
<div class="result-summary" id="scrSummary"></div>
<div class="result-grid" id="scrGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No watermark, no time limit.</strong>
<p>Your recording is captured and saved entirely in your browser — nothing is ever uploaded.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('scrShell');
  ToolPro.themeToggle(shell, document.getElementById('scrTheme'));

  var supported = !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && window.MediaRecorder);
  var stream = null, recorder = null, chunks = [];
  var recStart = 0, timerId = null;
  var lastUrl = null, lastName = '';

  var btn = document.getElementById('scrBtn');
  var btnLabel = document.getElementById('scrBtnLabel');
  var againBtn = document.getElementById('scrStopExt');
  var micChk = document.getElementById('scrMic');
  var sysChk = document.getElementById('scrSys');
  var mimeSel = document.getElementById('scrMime');
  var mbpsRange = document.getElementById('scrMbps');
  var mbpsVal = document.getElementById('scrMbpsVal');
  var presets = document.getElementById('scrPresets');
  var statusText = document.getElementById('scrStatusText');
  var dot = document.getElementById('scrDot');
  var timerEl = document.getElementById('scrTimer');

  ToolPro.bindSlider(mbpsRange, mbpsVal, function(v){ return v + ' Mbps'; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mbpsRange.value = chip.dataset.mbps;
    mbpsRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Quality set to ' + chip.dataset.mbps + ' Mbps', 'ok');
  });

  var mimeOptions = [
    ['video/webm;codecs=vp9', 'WebM — VP9 (best quality)'],
    ['video/webm;codecs=vp8', 'WebM — VP8 (wide support)'],
    ['video/webm', 'WebM — default'],
    ['video/mp4', 'MP4 (if supported)']
  ];
  var foundMime = false;
  mimeOptions.forEach(function(o){
    if(window.MediaRecorder && MediaRecorder.isTypeSupported(o[0])){
      var opt = document.createElement('option');
      opt.value = o[0]; opt.textContent = o[1];
      mimeSel.appendChild(opt);
      foundMime = true;
    }
  });
  if(!foundMime){
    var opt = document.createElement('option');
    opt.value = ''; opt.textContent = 'Browser default';
    mimeSel.appendChild(opt);
  }

  if(!supported){
    btn.disabled = true;
    statusText.textContent = '⚠️ Your browser does not support screen recording. Please use Chrome, Edge, or Firefox on desktop.';
    ToolPro.toast('Screen recording is not supported in this browser.', 'err');
  }

  function fmtClock(ms){
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    function p(n){ return (n < 10 ? '0' : '') + n; }
    return h > 0 ? p(h) + ':' + p(m % 60) + ':' + p(s % 60) : p(m) + ':' + p(s % 60);
  }

  function setRecording(on){
    document.getElementById('scrStatus').classList.toggle('recording', on);
    dot.classList.toggle('on', on);
    btnLabel.textContent = on ? 'Stop Recording' : 'Start Recording';
    if(on){
      statusText.textContent = '🔴 Recording — click Stop when you are done';
      recStart = Date.now();
      timerEl.textContent = '00:00';
      timerId = setInterval(function(){ timerEl.textContent = fmtClock(Date.now() - recStart); }, 500);
    } else {
      statusText.textContent = 'Ready — nothing recording yet';
      clearInterval(timerId);
    }
  }

  function stopTracks(){
    if(stream){ stream.getTracks().forEach(function(t){ t.stop(); }); stream = null; }
  }

  function buildResult(blob, durMs){
    var grid = document.getElementById('scrGrid');
    var resBox = document.getElementById('scrResults');
    grid.innerHTML = '';
    if(lastUrl) URL.revokeObjectURL(lastUrl);
    lastUrl = URL.createObjectURL(blob);
    var ext = (mimeSel.value || '').indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    lastName = 'screen-recording-' + new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-') + '.' + ext;
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<video class="r-video" controls playsinline></video>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download ' + ext.toUpperCase() + '</button>';
    card.querySelector('.r-video').src = lastUrl;
    card.querySelector('.r-name').textContent = lastName;
    card.querySelector('.r-name').title = lastName;
    card.querySelector('.r-stats').innerHTML =
      'Duration <b>' + fmtClock(durMs) + '</b> · ' + ToolPro.fmtBytes(blob.size) + ' ' + ext.toUpperCase();
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(lastUrl, lastName); });
    grid.appendChild(card);
    document.getElementById('scrSummary').textContent =
      '🎉 Recording saved — preview it above, then download. Nothing was uploaded anywhere.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    againBtn.disabled = false;
  }

  againBtn.addEventListener('click', function(){
    if(lastUrl) ToolPro.download(lastUrl, lastName);
  });

  btn.addEventListener('click', function(){
    if(recorder && recorder.state !== 'inactive'){
      recorder.stop();
      return;
    }
    if(!supported) return;
    btn.disabled = true;
    statusText.textContent = 'Choose a screen, window, or tab in the dialog…';
    var constraints = {
      video: true,
      audio: sysChk.checked
    };
    navigator.mediaDevices.getDisplayMedia(constraints).then(function(dispStream){
      var tracks = dispStream.getVideoTracks().slice();
      var audioCtx = null, dest = null;
      var dispAudio = sysChk.checked ? dispStream.getAudioTracks() : [];
      var micStream = null;

      function finalize(){
        // merge all audio into one mixed track
        var allAudio = dispAudio.slice();
        if(micStream) micStream.getAudioTracks().forEach(function(t){ allAudio.push(t); });
        if(allAudio.length){
          try{
            var AC = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AC();
            dest = audioCtx.createMediaStreamDestination();
            allAudio.forEach(function(t){
              var ms = new MediaStream([t]);
              audioCtx.createMediaStreamSource(ms).connect(dest);
            });
            dest.stream.getAudioTracks().forEach(function(t){ tracks.push(t); });
          }catch(e){
            // fall back: use first audio track as-is
            if(allAudio.length && !dest) tracks.push(allAudio[0]);
          }
        }
        stream = new MediaStream(tracks);
        chunks = [];
        var opts = {};
        if(mimeSel.value) opts.mimeType = mimeSel.value;
        opts.videoBitsPerSecond = parseInt(mbpsRange.value, 10) * 1000000;
        try{
          recorder = new MediaRecorder(stream, opts);
        }catch(e){
          try{ recorder = new MediaRecorder(stream); }
          catch(e2){
            stopTracks(); btn.disabled = false;
            setRecording(false);
            ToolPro.toast('Could not start the recorder: ' + (e2.message || e2), 'err');
            return;
          }
        }
        recorder.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
        recorder.onstop = function(){
          var dur = Date.now() - recStart;
          setRecording(false);
          btn.disabled = false;
          document.getElementById('scrResults').classList.remove('show');
          var blob = new Blob(chunks, { type: recorder.mimeType || 'video/webm' });
          stopTracks();
          if(audioCtx) audioCtx.close().catch(function(){});
          if(!blob.size){
            ToolPro.toast('Recording came out empty — please try again.', 'err');
            return;
          }
          buildResult(blob, dur);
          ToolPro.toast('Recording finished', 'ok');
        };
        // if user stops sharing from the browser UI, stop the recorder too
        stream.getVideoTracks().forEach(function(t){
          t.addEventListener('ended', function(){
            if(recorder && recorder.state !== 'inactive') recorder.stop();
          });
        });
        recorder.start(1000);
        setRecording(true);
        document.getElementById('scrResults').classList.remove('show');
        btn.disabled = false;
        ToolPro.toast('🔴 Recording started', 'ok');
      }

      if(micChk.checked && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function(ms){
          micStream = ms;
          finalize();
        }).catch(function(err){
          ToolPro.toast('Microphone blocked — recording screen without mic audio.', 'err');
          finalize();
        });
      } else {
        finalize();
      }
    }).catch(function(err){
      btn.disabled = false;
      setRecording(false);
      var msg = 'Something went wrong while starting the recording.';
      if(err && (err.name === 'NotAllowedError' || err.name === 'SecurityError')){
        msg = 'Permission denied — you closed the picker or blocked sharing. Click Start Recording and choose a screen, window, or tab to allow it.';
      } else if(err && err.name === 'NotFoundError'){
        msg = 'No screen source found — make sure a display or window is available to share.';
      }
      statusText.textContent = '⚠️ ' + msg;
      ToolPro.toast(msg, 'err');
    });
  });
})();
</script>

## How it works

1. Click **Start Recording** and pick your entire screen, an app window, or a browser tab in your browser's share dialog — tick "share audio" there if you want system sound.
2. Your microphone can be mixed in for narration. A live timer shows how long you've been recording, and stopping the browser share also stops the recording automatically.
3. When you stop, the recording is assembled and previewed right on the page — download it as WebM (or MP4 where supported). Nothing is ever uploaded.

## Everyday uses

- **Teachers &amp; trainers** — record lessons, walkthroughs, and how-to videos without installing anything.
- **Developers** — capture a bug in action to share with your team.
- **Support teams** — show, don't tell: record the exact steps to fix a problem.
- **Creators** — record gameplay, demos, and reaction videos with voiceover.
- **Job seekers** — record a quick video pitch or portfolio walkthrough.

## FAQ

**Do I need to install anything?**
No. It uses your browser's built-in screen capture (getDisplayMedia) and recording (MediaRecorder) — nothing to download.

**Is there a watermark or time limit?**
None. Recordings are free, unlimited, and watermark-free.

**Which browsers work?**
Chrome, Edge, and Firefox on desktop. Mobile browsers generally don't support screen capture.

**What if I deny permission?**
The tool shows a clear message and you can simply click Start Recording again and allow sharing in the dialog. Nothing is stored or sent anywhere when you deny.

**Where does my recording go?**
It stays on your device — captured and saved entirely in your browser. Recordings are never uploaded to any server.

[END OF FILE]
