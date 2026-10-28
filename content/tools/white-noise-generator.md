---
title: "White Noise Generator — Free Focus, Sleep & Relaxation Sounds"
description: "Generate white, pink, and brown noise free in your browser — volume control, sleep timer, and pure Web Audio sound. No sign-up, no downloads, no app."
category: audio
date: 2026-10-28
draft: false
---

Steady noise masks distracting sounds — it helps people focus, fall asleep, and calm a noisy room. This generator creates real white, pink, and brown noise with the Web Audio API, right in your browser: no audio files, no downloads, no app install. Pick a sound, set the volume, add a sleep timer, and let it play. The sound is synthesized live on your device — nothing is streamed or uploaded.

<div class="tool-shell" id="wngShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>White Noise Generator</h2>
<p>Real white, pink &amp; brown noise, synthesized live — focus, sleep, relax.</p>
</div>
<button type="button" class="theme-toggle" id="wngTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick a sound</p>
<div class="settings-panel">
<div class="preset-row" id="wngPresets">
<button type="button" class="preset-chip active" data-noise="white">🤍 White noise — crisp, even</button>
<button type="button" class="preset-chip" data-noise="pink">🌸 Pink noise — softer, deeper</button>
<button type="button" class="preset-chip" data-noise="brown">🟤 Brown noise — deep rumble</button>
</div>
<div class="hint" id="wngDesc">White noise has equal energy at every frequency — bright and crisp, like TV static. Best for masking sharp sounds.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Volume &amp; timer</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="wngVol">Volume <span id="wngVolVal">50%</span></label>
<input type="range" id="wngVol" min="0" max="100" value="50">
</div>
<div class="setting">
<label for="wngTimer">Sleep timer</label>
<select id="wngTimer" class="tool-input">
<option value="0" selected>Off — play until stopped</option>
<option value="15">15 minutes</option>
<option value="30">30 minutes</option>
<option value="60">60 minutes</option>
<option value="90">90 minutes</option>
</select>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Play &amp; listen</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wngBtn">
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
<span id="wngBtnLabel">Play Noise</span>
</button>
<button type="button" class="btn-pro-outline" id="wngStop" disabled>Stop</button>
</div>
<div class="progress-wrap" id="wngProgWrap">
<div class="progress-bar"><i id="wngProgBar"></i></div>
<div class="progress-text" id="wngProgText">Playing…</div>
</div>
<div class="results" id="wngResults">
<p class="result-head">✅ Now playing</p>
<div class="result-summary" id="wngSummary"></div>
<div class="result-grid" id="wngGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Play as long as you like — the sound is generated on your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('wngShell');
  ToolPro.themeToggle(shell, document.getElementById('wngTheme'));
  var noiseType = 'white';
  var ctx = null, source = null, gainNode = null;
  var playing = false;
  var timerId = null, elapsedId = null, startedAt = 0, timerMs = 0;
  var btn = document.getElementById('wngBtn');
  var btnLabel = document.getElementById('wngBtnLabel');
  var stopBtn = document.getElementById('wngStop');
  var volEl = document.getElementById('wngVol');
  var resBox = document.getElementById('wngResults');
  var summaryEl = document.getElementById('wngSummary');
  var gridEl = document.getElementById('wngGrid');
  var progWrap = document.getElementById('wngProgWrap');
  var progBar = document.getElementById('wngProgBar');
  var progText = document.getElementById('wngProgText');
  var DESCS = {
    white: 'White noise has equal energy at every frequency — bright and crisp, like TV static. Best for masking sharp sounds.',
    pink: 'Pink noise falls off as frequency rises — softer and deeper than white noise, like steady rainfall. A common pick for sleep.',
    brown: 'Brown noise falls off faster still — a deep, low rumble like a waterfall heard from far away. Best for deep focus and blocking low hums.'
  };
  ToolPro.bindSlider(volEl, document.getElementById('wngVolVal'), function(v){ return v + '%'; });
  document.getElementById('wngPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('wngPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var wasPlaying = playing;
    noiseType = chip.dataset.noise;
    document.getElementById('wngDesc').textContent = DESCS[noiseType];
    if(wasPlaying){ stopAudio(); startAudio(); }
    ToolPro.toast('Sound: ' + noiseType + ' noise');
  });
  volEl.addEventListener('input', function(){
    if(gainNode && ctx) gainNode.gain.setTargetAtTime(volEl.value / 100 * 0.5, ctx.currentTime, 0.05);
  });
  function buildBuffer(audioCtx, type){
    var len = audioCtx.sampleRate * 2;
    var buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
    var data = buf.getChannelData(0);
    if(type === 'white'){
      for(var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    } else if(type === 'pink'){
      var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for(var j = 0; j < len; j++){
        var white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        var pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        b6 = white * 0.115926;
        data[j] = pink * 0.11;
      }
    } else {
      var lastOut = 0;
      for(var k = 0; k < len; k++){
        var w = Math.random() * 2 - 1;
        lastOut = (lastOut + 0.02 * w) / 1.02;
        data[k] = lastOut * 3.5;
      }
    }
    return buf;
  }
  function fmtTime(ms){
    var s = Math.floor(ms / 1000);
    var m = Math.floor(s / 60), sec = s % 60;
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }
  function startAudio(){
    try {
      if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if(ctx.state === 'suspended') ctx.resume();
      source = ctx.createBufferSource();
      source.buffer = buildBuffer(ctx, noiseType);
      source.loop = true;
      gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.setTargetAtTime(volEl.value / 100 * 0.5, ctx.currentTime, 0.1);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start();
    } catch(err){
      ToolPro.toast('Audio could not start in this browser: ' + err.message, 'err');
      return false;
    }
    return true;
  }
  function stopAudio(){
    try { if(source) source.stop(); } catch(e){}
    source = null;
    if(timerId){ clearTimeout(timerId); timerId = null; }
    if(elapsedId){ clearInterval(elapsedId); elapsedId = null; }
  }
  function updateElapsed(){
    var elapsed = Date.now() - startedAt;
    var label = 'Playing ' + noiseType + ' noise — ' + fmtTime(elapsed) + ' elapsed';
    if(timerMs) label += ' · ' + fmtTime(Math.max(0, timerMs - elapsed)) + ' left';
    progText.textContent = label;
    summaryEl.textContent = '🔊 ' + label + '. Volume ' + volEl.value + '%.';
    if(timerMs) progBar.style.width = Math.min(100, Math.round(elapsed / timerMs * 100)) + '%';
  }
  btn.addEventListener('click', function(){
    if(playing){ stopAudio(); playing = false; }
    else {
      if(!startAudio()) return;
      playing = true;
      startedAt = Date.now();
      var mins = parseInt(document.getElementById('wngTimer').value, 10) || 0;
      timerMs = mins * 60 * 1000;
      if(timerMs){
        timerId = setTimeout(function(){
          stopAudio(); playing = false;
          btnLabel.textContent = 'Play Noise'; stopBtn.disabled = true;
          progWrap.classList.remove('show');
          ToolPro.toast('Sleep timer finished — noise stopped', 'ok');
        }, timerMs);
      }
      elapsedId = setInterval(updateElapsed, 1000);
    }
    btnLabel.textContent = playing ? '⏸ Pause Noise' : 'Play Noise';
    stopBtn.disabled = !playing;
    progWrap.classList.toggle('show', playing);
    progBar.style.width = timerMs ? '0%' : '100%';
    if(playing){
      updateElapsed();
      gridEl.innerHTML = '';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
      card.querySelector('.r-name').textContent = noiseType.charAt(0).toUpperCase() + noiseType.slice(1) + ' noise';
      card.querySelector('.r-stats').textContent = DESCS[noiseType] + ' Generated live with the Web Audio API — no audio file is streamed or downloaded.';
      gridEl.appendChild(card);
      resBox.classList.add('show');
      ToolPro.toast('Playing ' + noiseType + ' noise', 'ok');
    } else {
      progWrap.classList.remove('show');
      ToolPro.toast('Paused', 'ok');
    }
  });
  stopBtn.addEventListener('click', function(){
    stopAudio(); playing = false;
    btnLabel.textContent = 'Play Noise'; stopBtn.disabled = true;
    progWrap.classList.remove('show');
    resBox.classList.remove('show');
    ToolPro.toast('Stopped', 'ok');
  });
})();
</script>

## How it works

Press **Play Noise** and your browser synthesizes sound live with the Web Audio API: white noise is pure random samples; pink noise runs those samples through the Paul Kellet filter bank so energy falls as frequency rises; brown noise integrates the samples for a deep rumble. The two-second buffer loops seamlessly, volume fades in gently, and the optional sleep timer stops playback automatically. No audio is streamed, downloaded, or uploaded.

## Everyday uses

- **Focus** — mask office chatter and street noise while you work.
- **Sleep** — steady sound covers the creaks and traffic that wake you.
- **Babies** — continuous noise soothes infants and covers household sounds.
- **Reading and study** — a neutral backdrop without lyrics to distract you.
- **Tinnitus relief** — background noise makes ringing less noticeable for many listeners.
