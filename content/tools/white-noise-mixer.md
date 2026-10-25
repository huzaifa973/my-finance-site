---
title: "White Noise Mixer — Mix Rain, Waves & Fan Sounds Free"
description: "Mix white, pink, and brown noise with rain, waves, and wind in your browser. Custom soundscapes for focus and sleep, with a sleep timer, free forever."
category: audio
date: 2026-10-25
draft: false
slug: white-noise-mixer
---

Build your own background soundscape for focus, sleep, or relaxation — no app, no account, no files to download. Every sound here is generated live in your browser with the Web Audio API: white, pink, and brown noise plus rain, ocean waves, and wind, each on its own volume slider. Mix them, save a preset for focus or sleep, set a timer, and let it play. Close the tab and it stops — nothing is recorded or uploaded.

<div class="tool-shell" id="wnmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>White Noise Mixer</h2>
<p>Blend noise and nature sounds live — focus, sleep, or just tune the world out.</p>
</div>
<button type="button" class="theme-toggle" id="wnmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Mix your sounds</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="wnmWhite">🤍 White noise <span id="wnmWhiteVal">0%</span></label>
<input type="range" id="wnmWhite" min="0" max="100" value="0">
<div class="hint">Bright, even hiss — masks voices and office chatter.</div>
</div>
<div class="setting">
<label for="wnmPink">🩷 Pink noise <span id="wnmPinkVal">0%</span></label>
<input type="range" id="wnmPink" min="0" max="100" value="0">
<div class="hint">Softer and deeper than white — a popular sleep sound.</div>
</div>
<div class="setting">
<label for="wnmBrown">🤎 Brown noise <span id="wnmBrownVal">0%</span></label>
<input type="range" id="wnmBrown" min="0" max="100" value="0">
<div class="hint">Deep rumble, like a waterfall far away. Great for sleep.</div>
</div>
<div class="setting">
<label for="wnmRain">🌧️ Rain <span id="wnmRainVal">0%</span></label>
<input type="range" id="wnmRain" min="0" max="100" value="0">
<div class="hint">Steady rainfall patter, filtered for a natural feel.</div>
</div>
<div class="setting">
<label for="wnmWaves">🌊 Ocean waves <span id="wnmWavesVal">0%</span></label>
<input type="range" id="wnmWaves" min="0" max="100" value="0">
<div class="hint">Slow rolling surf that swells and fades.</div>
</div>
<div class="setting">
<label for="wnmWind">💨 Wind <span id="wnmWindVal">0%</span></label>
<input type="range" id="wnmWind" min="0" max="100" value="0">
<div class="hint">Soft gusts drifting through trees.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Presets, volume &amp; timer</p>
<div class="settings-panel">
<div class="preset-row" id="wnmPresets">
<button type="button" class="preset-chip" data-preset="focus">🎯 Focus</button>
<button type="button" class="preset-chip" data-preset="sleep">😴 Sleep</button>
<button type="button" class="preset-chip" data-preset="rainy">🌧️ Rainy day</button>
<button type="button" class="preset-chip" data-preset="silence">🔇 All off</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="wnmMaster">Master volume <span id="wnmMasterVal">70%</span></label>
<input type="range" id="wnmMaster" min="0" max="100" value="70">
<div class="hint">Overall loudness. Keep it gentle for sleep.</div>
</div>
<div class="setting">
<label for="wnmTimer">Sleep timer</label>
<select id="wnmTimer">
<option value="0" selected>Off — play until stopped</option>
<option value="15">15 minutes</option>
<option value="30">30 minutes</option>
<option value="60">60 minutes</option>
<option value="90">90 minutes</option>
</select>
<div class="hint" id="wnmTimerHint">Timer applies when you press play.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Play your mix</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wnmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
<span id="wnmBtnLabel">Play mix</span>
</button>
<button type="button" class="btn-pro-outline" id="wnmStop" disabled>⏹ Stop</button>
</div>
<div class="progress-wrap" id="wnmProgWrap">
<div class="progress-bar"><i id="wnmProgBar"></i></div>
<div class="progress-text" id="wnmProgText">Playing…</div>
</div>
<div class="results" id="wnmResults">
<p class="result-head">🎧 Now playing</p>
<div class="result-summary" id="wnmSummary"></div>
<div class="result-grid" id="wnmGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Mix and play unlimited soundscapes — everything is generated in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('wnmShell');
  ToolPro.themeToggle(shell, document.getElementById('wnmTheme'));
  var IDS = ['White', 'Pink', 'Brown', 'Rain', 'Waves', 'Wind'];
  var sliders = {}, vals = {};
  IDS.forEach(function(id){
    sliders[id] = document.getElementById('wnm' + id);
    vals[id] = document.getElementById('wnm' + id + 'Val');
    ToolPro.bindSlider(sliders[id], vals[id], function(v){ return v + '%'; });
    sliders[id].addEventListener('input', function(){ liveUpdate(); refresh(); });
  });
  var master = document.getElementById('wnmMaster');
  var masterVal = document.getElementById('wnmMasterVal');
  ToolPro.bindSlider(master, masterVal, function(v){ return v + '%'; });
  master.addEventListener('input', liveUpdate);
  var btn = document.getElementById('wnmBtn');
  var btnLabel = document.getElementById('wnmBtnLabel');
  var stopBtn = document.getElementById('wnmStop');
  var timerSel = document.getElementById('wnmTimer');
  var timerHint = document.getElementById('wnmTimerHint');
  var presets = document.getElementById('wnmPresets');
  var progWrap = document.getElementById('wnmProgWrap');
  var progBar = document.getElementById('wnmProgBar');
  var progText = document.getElementById('wnmProgText');
  var results = document.getElementById('wnmResults');
  var summary = document.getElementById('wnmSummary');
  var grid = document.getElementById('wnmGrid');
  var PRESETS = {
    focus: { White: 55, Pink: 30, Brown: 0, Rain: 0, Waves: 0, Wind: 0 },
    sleep: { White: 0, Pink: 20, Brown: 65, Rain: 0, Waves: 35, Wind: 0 },
    rainy: { White: 0, Pink: 0, Brown: 15, Rain: 75, Waves: 0, Wind: 35 },
    silence: { White: 0, Pink: 0, Brown: 0, Rain: 0, Waves: 0, Wind: 0 }
  };
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var p = PRESETS[chip.dataset.preset];
    IDS.forEach(function(id){
      sliders[id].value = p[id];
      sliders[id].dispatchEvent(new Event('input'));
    });
    liveUpdate(); refresh();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  var actx = null, nodes = {}, playing = false, timerId = null, remainSec = 0;
  function noiseBuffer(kind, sr, seconds){
    var len = Math.floor(sr * seconds);
    var buf = actx.createBuffer(1, len, sr);
    var d = buf.getChannelData(0);
    if(kind === 'white'){
      for(var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } else if(kind === 'pink'){
      var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for(var j = 0; j < len; j++){
        var w = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.96900 * b2 + w * 0.1538520;
        b3 = 0.86650 * b3 + w * 0.3104856; b4 = 0.55000 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.0168980;
        d[j] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
        b6 = w * 0.115926;
      }
    } else {
      var last = 0;
      for(var k = 0; k < len; k++){
        var wn = Math.random() * 2 - 1;
        last = (last + 0.02 * wn) / 1.02;
        d[k] = last * 3.5;
      }
    }
    return buf;
  }
  function buildGraph(){
    var sr = actx.sampleRate;
    var masterGain = actx.createGain();
    masterGain.gain.value = (parseInt(master.value, 10) || 0) / 100 * 0.9;
    masterGain.connect(actx.destination);
    var specs = {
      White: { buf: 'white', filter: null },
      Pink: { buf: 'pink', filter: null },
      Brown: { buf: 'brown', filter: null },
      Rain: { buf: 'white', filter: { type: 'bandpass', freq: 2200, q: 0.4 } },
      Waves: { buf: 'brown', filter: { type: 'lowpass', freq: 500 }, lfoHz: 0.08, lfoAmt: 0.35 },
      Wind: { buf: 'white', filter: { type: 'bandpass', freq: 500, q: 0.8 }, lfoHz: 0.13, lfoAmt: 0.3, lfoFreq: true }
    };
    IDS.forEach(function(id){
      var spec = specs[id];
      var src = actx.createBufferSource();
      src.buffer = noiseBuffer(spec.buf, sr, 3);
      src.loop = true;
      var gain = actx.createGain();
      gain.gain.value = 0;
      var head = src;
      if(spec.filter){
        var f = actx.createBiquadFilter();
        f.type = spec.filter.type; f.frequency.value = spec.filter.freq; f.Q.value = spec.filter.q || 0.7;
        src.connect(f); head = f;
        if(spec.lfoHz){
          var osc = actx.createOscillator(); osc.frequency.value = spec.lfoHz;
          var og = actx.createGain(); og.gain.value = spec.lfoAmt;
          osc.connect(og);
          if(spec.lfoFreq){ og.connect(f.frequency); } else { og.connect(gain.gain); }
          osc.start();
        }
      }
      head.connect(gain); gain.connect(masterGain);
      src.start();
      nodes[id] = { gain: gain, base: 0 };
    });
    nodes.master = masterGain;
  }
  function liveUpdate(){
    if(!actx || !playing) return;
    IDS.forEach(function(id){
      if(nodes[id]) nodes[id].gain.gain.setTargetAtTime((parseInt(sliders[id].value, 10) || 0) / 100 * 0.8, actx.currentTime, 0.1);
    });
    if(nodes.master) nodes.master.gain.setTargetAtTime((parseInt(master.value, 10) || 0) / 100 * 0.9, actx.currentTime, 0.1);
    updateSummary();
  }
  function anyOn(){
    return IDS.some(function(id){ return (parseInt(sliders[id].value, 10) || 0) > 0; });
  }
  function refresh(){
    btn.disabled = !anyOn();
    stopBtn.disabled = !playing;
    btnLabel.textContent = playing ? 'Pause mix' : 'Play mix';
  }
  function updateSummary(){
    var on = IDS.filter(function(id){ return (parseInt(sliders[id].value, 10) || 0) > 0; });
    var parts = on.map(function(id){ return id + ' ' + sliders[id].value + '%'; });
    summary.textContent = '🎧 Playing: ' + (parts.length ? parts.join(' · ') : 'nothing') + ' · Master ' + master.value + '%' +
      (remainSec > 0 ? ' · Timer: ' + Math.floor(remainSec / 60) + 'm ' + (remainSec % 60) + 's left' : '');
    grid.innerHTML = '';
    on.forEach(function(id){
      var d = document.createElement('div'); d.className = 'result-card';
      d.innerHTML = '<div class="r-name">' + id + '</div><div class="r-value" style="font-size:1.4rem;font-weight:700;">' + sliders[id].value + '%</div><div class="r-meta">Generated live with the Web Audio API.</div>';
      grid.appendChild(d);
    });
  }
  function clearTimer(){
    if(timerId){ clearInterval(timerId); timerId = null; }
    remainSec = 0;
  }
  function stopAll(silent){
    playing = false;
    clearTimer();
    if(actx){ actx.close().catch(function(){}); actx = null; nodes = {}; }
    progWrap.classList.remove('show');
    results.classList.remove('show');
    if(!silent) ToolPro.toast('Stopped');
    refresh();
  }
  btn.addEventListener('click', function(){
    if(!anyOn()){ ToolPro.toast('Turn up at least one sound first.', 'err'); return; }
    if(playing){
      actx.suspend(); playing = false; btnLabel.textContent = 'Resume mix'; stopBtn.disabled = false;
      ToolPro.toast('Paused'); return;
    }
    try {
      if(!actx){ actx = new (window.AudioContext || window.webkitAudioContext)(); buildGraph(); }
      if(actx.state === 'suspended') actx.resume();
    } catch(err){ ToolPro.toast('Audio is not available in this browser.', 'err'); return; }
    playing = true;
    liveUpdate();
    var mins = parseInt(timerSel.value, 10) || 0;
    clearTimer();
    if(mins > 0){
      remainSec = mins * 60;
      progWrap.classList.add('show');
      timerId = setInterval(function(){
        remainSec--;
        var total = mins * 60;
        progBar.style.width = Math.round((total - remainSec) / total * 100) + '%';
        progText.textContent = 'Timer: ' + Math.floor(remainSec / 60) + 'm ' + (remainSec % 60) + 's left';
        updateSummary();
        if(remainSec <= 0){ stopAll(); ToolPro.toast('Timer finished — good night', 'ok'); }
      }, 1000);
      timerHint.textContent = 'Timer running: ' + mins + ' minutes.';
    } else {
      progWrap.classList.remove('show');
    }
    updateSummary();
    results.classList.add('show');
    ToolPro.toast('Playing your mix', 'ok');
    refresh();
  });
  stopBtn.addEventListener('click', function(){ stopAll(); });
  timerSel.addEventListener('change', function(){
    timerHint.textContent = timerSel.value === '0' ? 'Timer applies when you press play.' : 'Timer set: ' + timerSel.value + ' minutes (applies on next play).';
  });
  refresh();
})();
</script>

## How it works

Drag a slider for any sound and press **Play mix**. Each sound is synthesized live: white noise is raw random samples, pink noise is white noise shaped by the classic Paul Kellet filter cascade, brown noise is white noise integrated into a deep rumble, and rain, waves, and wind are those noise sources passed through bandpass or lowpass filters — with slow oscillators swelling the waves and gusting the wind. Adjust any slider while playing and the mix follows instantly. The sleep timer fades nothing abruptly: it simply stops playback when time runs out, and the progress bar counts down.

**No files, no recordings:** because every sound is generated mathematically in your browser, there is nothing to download, no audio library to load, and nothing leaves your device.

## Everyday uses

- **Deep focus** — white or pink noise masks office chatter and traffic.
- **Falling asleep** — brown noise plus slow waves is a classic sleep mix.
- **Rainy-day working** — rain and wind for a cozy, cabin-like backdrop.
- **Studying and reading** — steady noise beats silence and beats lyrics.
- **Babies and light sleepers** — continuous noise smooths over sudden household sounds.
