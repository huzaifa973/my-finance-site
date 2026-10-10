---
title: "Slowed + Reverb Maker — Free Aesthetic Audio Effect"
description: "Slow down any song and add dreamy reverb in your browser — the viral slowed + reverb effect. Free, no sign-up, files stay on your device."
category: audio
date: 2026-10-10
draft: false
---

Give any song the viral "slowed + reverb" treatment without installing anything. Upload an MP3 or WAV, pick a speed, dial in the reverb, and render the dreamy, late-night-drive version in your browser. A generated impulse response feeds a real convolution reverb, so the space sounds natural — not a cheap echo. Everything is processed locally; your files never leave your browser.

<div class="tool-shell" id="sbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Slowed + Reverb Maker</h2>
<p>Turn any track into a dreamy slowed-down version with lush convolution reverb.</p>
</div>
<button type="button" class="theme-toggle" id="sbTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your song</p>
<div class="dropzone" id="sbDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your audio here</strong>
<span>or click to browse — MP3, WAV, OGG</span>
<input type="file" id="sbFile" accept="audio/*">
</div>
<ul class="file-list" id="sbList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Dial in the vibe</p>
<div class="settings-panel">
<div class="preset-row" id="sbPresets">
<button type="button" class="preset-chip" data-s="0.5">🐌 0.5x — super slowed</button>
<button type="button" class="preset-chip active" data-s="0.75">🌙 0.75x — classic slowed</button>
<button type="button" class="preset-chip" data-s="0.9">✨ 0.9x — slightly slowed</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="sbDecay">Reverb decay: <span class="val" id="sbDecayVal">2.5s</span></label>
<input type="range" id="sbDecay" min="0.5" max="5" step="0.1" value="2.5">
<div class="hint">How long the reverb tail rings out. Longer = dreamier.</div>
</div>
<div class="setting">
<label for="sbMix">Reverb amount: <span class="val" id="sbMixVal">40%</span></label>
<input type="range" id="sbMix" min="0" max="100" value="40">
<div class="hint">Balance between the dry slowed track and the wet reverb wash.</div>
</div>
</div>
<div class="hint">The reverb uses a real convolution impulse response generated in your browser — the same technique pro plugins use.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Render, preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sbBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Create slowed + reverb
</button>
<button type="button" class="btn-pro-outline" id="sbPlayBtn" disabled>▶ Play preview</button>
<button type="button" class="btn-pro-outline" id="sbStopBtn">⏹ Stop</button>
<button type="button" class="btn-pro-outline" id="sbRecBtn" disabled>⬇ Record &amp; download</button>
</div>
<div class="progress-wrap" id="sbProgWrap">
<div class="progress-bar"><i id="sbProgBar"></i></div>
<div class="progress-text" id="sbProgText">Working…</div>
</div>
<div class="results" id="sbResults">
<p class="result-head">🌙 Your slowed + reverb track</p>
<div class="result-summary" id="sbInfo">Add a song above to get started.</div>
<audio id="sbAudio" controls style="width:100%;display:none;"></audio>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — make as many slowed edits as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('sbShell');
  ToolPro.themeToggle(shell, document.getElementById('sbTheme'));

  var actx = null, inBuf = null, outBuf = null, outUrl = null, src = null;
  var speed = 0.75;
  var listEl = document.getElementById('sbList');
  var btn = document.getElementById('sbBtn');
  var playBtn = document.getElementById('sbPlayBtn');
  var recBtn = document.getElementById('sbRecBtn');
  var info = document.getElementById('sbInfo');
  var audioEl = document.getElementById('sbAudio');
  var decayRange = document.getElementById('sbDecay');
  var mixRange = document.getElementById('sbMix');
  var presets = document.getElementById('sbPresets');

  function ensureCtx(){ if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); if(actx.state === 'suspended') actx.resume(); }

  ToolPro.bindSlider(decayRange, document.getElementById('sbDecayVal'), function(v){ return v + 's'; });
  ToolPro.bindSlider(mixRange, document.getElementById('sbMixVal'), function(v){ return v + '%'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    speed = parseFloat(chip.dataset.s);
    ToolPro.toast('Speed set to ' + chip.dataset.s + 'x');
  });

  function makeImpulse(ctx, seconds, sr){
    var len = Math.max(1, Math.floor(seconds * sr));
    var ir = ctx.createBuffer(2, len, sr);
    for(var c = 0; c < 2; c++){
      var d = ir.getChannelData(c);
      for(var i = 0; i < len; i++){
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
      }
    }
    return ir;
  }

  function bufToWav(buf){
    var ch = buf.numberOfChannels, sr = buf.sampleRate, len = buf.length;
    var bytes = 44 + len * ch * 2, ab = new ArrayBuffer(bytes), v = new DataView(ab);
    function ws(o, s){ for(var i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }
    ws(0, 'RIFF'); v.setUint32(4, bytes - 8, true); ws(8, 'WAVE'); ws(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, ch, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * ch * 2, true); v.setUint16(32, ch * 2, true);
    v.setUint16(34, 16, true); ws(36, 'data'); v.setUint32(40, len * ch * 2, true);
    var off = 44;
    for(var i = 0; i < len; i++) for(var c = 0; c < ch; c++){
      var x = Math.max(-1, Math.min(1, buf.getChannelData(c)[i])) * 32767;
      v.setInt16(off, x < 0 ? Math.ceil(x) : Math.floor(x), true); off += 2;
    }
    return new Blob([ab], { type: 'audio/wav' });
  }

  function loadFile(f){
    if(!f) return;
    ensureCtx();
    stopPlay();
    inBuf = null; outBuf = null;
    btn.disabled = true; playBtn.disabled = true; recBtn.disabled = true;
    audioEl.style.display = 'none';
    listEl.innerHTML = '';
    ToolPro.fileRow(listEl, f, function(){
      inBuf = null; outBuf = null;
      btn.disabled = true; playBtn.disabled = true; recBtn.disabled = true;
      info.textContent = 'Add a song above to get started.';
    });
    info.textContent = 'Decoding audio…';
    f.arrayBuffer().then(function(ab){ return actx.decodeAudioData(ab); }).then(function(buf){
      inBuf = buf;
      btn.disabled = false;
      document.getElementById('sbResults').classList.add('show');
      info.textContent = 'Loaded ' + buf.duration.toFixed(1) + 's of audio. Pick your vibe, then hit "Create slowed + reverb".';
      ToolPro.toast('Audio loaded', 'ok');
    }).catch(function(){
      info.textContent = 'Could not decode this audio file. Try an MP3 or WAV.';
      ToolPro.toast('Could not decode this audio file', 'err');
    });
  }

  ToolPro.dropzone(document.getElementById('sbDrop'), {
    multiple: false, accept: 'audio/*', maxFiles: 1,
    onFiles: function(arr){ loadFile(arr[0]); }
  });

  function stopPlay(){ if(src){ try{ src.stop(); }catch(e){} src = null; } }

  btn.addEventListener('click', function(){
    if(!inBuf) return;
    ensureCtx();
    stopPlay();
    var decay = parseFloat(decayRange.value);
    var mix = parseInt(mixRange.value, 10) / 100;
    var sr = inBuf.sampleRate;
    var outDur = inBuf.duration / speed + decay + 0.5;
    var wrap = document.getElementById('sbProgWrap');
    var bar = document.getElementById('sbProgBar');
    var txt = document.getElementById('sbProgText');
    btn.disabled = true;
    wrap.classList.add('show'); bar.style.width = '30%';
    txt.textContent = 'Rendering slowed + reverb (' + outDur.toFixed(0) + 's of audio)…';
    info.textContent = 'Rendering… this takes a few seconds.';

    var off = new OfflineAudioContext(2, Math.ceil(outDur * sr), sr);
    var srcNode = off.createBufferSource();
    srcNode.buffer = inBuf;
    srcNode.playbackRate.value = speed;
    var dry = off.createGain(); dry.gain.value = 1 - mix * 0.7;
    srcNode.connect(dry); dry.connect(off.destination);
    var conv = off.createConvolver(); conv.buffer = makeImpulse(off, decay, sr);
    var wet = off.createGain(); wet.gain.value = mix;
    srcNode.connect(conv); conv.connect(wet); wet.connect(off.destination);
    srcNode.start(0);

    off.startRendering().then(function(rendered){
      outBuf = rendered;
      bar.style.width = '100%'; txt.textContent = 'Done';
      var blob = bufToWav(rendered);
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(blob);
      audioEl.src = outUrl;
      audioEl.style.display = 'block';
      playBtn.disabled = false; recBtn.disabled = false;
      info.textContent = 'Done — ' + rendered.duration.toFixed(1) + 's at ' + speed + 'x speed with ' + decay.toFixed(1) + 's reverb (' + ToolPro.fmtBytes(blob.size) + ' WAV). Listen above, then record & download.';
      wrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('Slowed + reverb ready', 'ok');
    }).catch(function(){
      wrap.classList.remove('show');
      btn.disabled = false;
      info.textContent = 'Rendering failed — try a shorter file.';
      ToolPro.toast('Rendering failed', 'err');
    });
  });

  playBtn.addEventListener('click', function(){
    if(!outBuf) return;
    ensureCtx(); stopPlay();
    src = actx.createBufferSource();
    src.buffer = outBuf; src.connect(actx.destination); src.start(0);
    ToolPro.toast('Playing preview');
  });
  document.getElementById('sbStopBtn').addEventListener('click', stopPlay);

  recBtn.addEventListener('click', function(){
    if(!outBuf) return;
    if(!window.MediaRecorder){
      var blob = bufToWav(outBuf);
      ToolPro.download(URL.createObjectURL(blob), 'slowed-reverb.wav');
      ToolPro.toast('Recording not supported — WAV downloaded instead', 'ok');
      return;
    }
    ensureCtx();
    stopPlay();
    var live = actx;
    var dest = live.createMediaStreamDestination();
    var pSrc = live.createBufferSource();
    pSrc.buffer = outBuf;
    pSrc.connect(dest);
    pSrc.connect(live.destination);
    var chunks = [];
    var rec;
    try {
      rec = new MediaRecorder(dest.stream, { mimeType: 'audio/webm' });
    } catch(e){ rec = new MediaRecorder(dest.stream); }
    var wrap = document.getElementById('sbProgWrap');
    var bar = document.getElementById('sbProgBar');
    var txt = document.getElementById('sbProgText');
    rec.ondataavailable = function(e){ if(e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = function(){
      var blob = new Blob(chunks, { type: rec.mimeType || 'audio/webm' });
      ToolPro.download(URL.createObjectURL(blob), 'slowed-reverb.webm');
      wrap.classList.remove('show');
      recBtn.disabled = false;
      info.textContent = 'Downloaded slowed-reverb.webm (' + ToolPro.fmtBytes(blob.size) + ').';
      ToolPro.toast('Recording downloaded', 'ok');
    };
    var t0 = Date.now();
    var tick = setInterval(function(){
      var el = (Date.now() - t0) / 1000;
      var pct = Math.min(99, Math.round(el / outBuf.duration * 100));
      bar.style.width = pct + '%';
      txt.textContent = 'Recording… ' + el.toFixed(0) + 's / ' + outBuf.duration.toFixed(0) + 's';
    }, 250);
    pSrc.onended = function(){ clearInterval(tick); try{ rec.stop(); }catch(e){} };
    wrap.classList.add('show');
    recBtn.disabled = true;
    rec.start();
    pSrc.start(0);
    ToolPro.toast('Recording the slowed track…');
  });
})();
</script>

## How it works

1. **Upload a song** — MP3, WAV, or OGG, decoded entirely in your browser.
2. **Pick a speed** — 0.5x, 0.75x, or 0.9x. Slowing the playback rate drops both tempo and pitch, which is what gives slowed edits their heavy, dreamy feel.
3. **Add convolution reverb** — your browser generates a natural-sounding impulse response (decaying noise shaped like a real room) and runs your slowed track through a ConvolverNode, the same technique professional reverb plugins use.
4. **Render offline** — the whole mix is processed faster than real time with an OfflineAudioContext, so there's no waiting through the full song.
5. **Preview and download** — listen in the built-in player, then record the output straight to a file.

Your files never leave your browser — no uploads, no accounts, no server queues.

## Everyday uses

- **Aesthetic edits** — make the slowed + reverb versions trending across TikTok, Reels, and YouTube.
- **Study & focus playlists** — slowed tracks with long reverb tails make great background listening.
- **Content creators** — craft moody intros, outros, and background beds for videos and streams.
- **Music practice** — slow a fast passage down to 0.5x to learn it note by note (pitch drops too, so it's best for feel, not pitch matching).
- **Sleep & relaxation** — a 0.5x version with a 5-second reverb tail is an instant ambient track.

**Tip:** songs under 5 minutes render fastest. Very long files at 0.5x can use a lot of memory — if rendering fails, try a shorter section first with our Audio Trimmer.
