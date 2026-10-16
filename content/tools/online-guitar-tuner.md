---
title: "Online Guitar Tuner — E A D G B E with Live Needle Gauge"
description: "Tune your guitar in the browser — live mic pitch detection with a needle gauge for E A D G B E. Audio is analyzed live, never recorded or uploaded."
category: audio
date: 2026-10-16
draft: false
---

No tuner app, no problem. Allow microphone access and play a string — this tuner listens through your mic, detects the pitch with autocorrelation, and shows exactly how many cents sharp or flat you are on a live needle gauge. Your audio is analyzed in real time and never recorded, stored, or uploaded.

<div class="tool-shell" id="ogtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 16H8v-2h3v2zm7 0h-5v-2h5v2zm0-4H8v-2h10v2zm0-4H8V8h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Online Guitar Tuner</h2>
<p>Play a string — the needle shows sharp or flat in real time. E A D G B E.</p>
</div>
<button type="button" class="theme-toggle" id="ogtTheme">🌙 Dark</button>
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
<div class="tool-actions">
<button type="button" class="btn-pro" id="ogtStart">
<svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
Enable Microphone
</button>
<button type="button" class="btn-pro-outline" id="ogtStop" disabled>Stop</button>
</div>
<div class="hint">Your browser will ask for microphone permission. Audio is analyzed live and never recorded, stored, or uploaded.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick a string (or auto-detect)</p>
<div class="settings-panel">
<div class="preset-row" id="ogtStrings">
<button type="button" class="preset-chip active" data-s="auto">🎯 Auto-detect</button>
<button type="button" class="preset-chip" data-s="0">E <span class="hint">82.4 Hz</span></button>
<button type="button" class="preset-chip" data-s="1">A <span class="hint">110 Hz</span></button>
<button type="button" class="preset-chip" data-s="2">D <span class="hint">146.8 Hz</span></button>
<button type="button" class="preset-chip" data-s="3">G <span class="hint">196 Hz</span></button>
<button type="button" class="preset-chip" data-s="4">B <span class="hint">246.9 Hz</span></button>
<button type="button" class="preset-chip" data-s="5">E <span class="hint">329.6 Hz</span></button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Tune to the needle</p>
<div style="position:relative;height:130px;max-width:340px;margin:0 auto;">
<div id="ogtNeedle" style="position:absolute;left:50%;bottom:14px;width:4px;height:100px;background:#d23c3c;transform-origin:bottom center;transform:translateX(-50%) rotate(0deg);border-radius:2px;transition:transform 0.08s linear;"></div>
<div style="position:absolute;left:50%;bottom:6px;transform:translateX(-50%);width:16px;height:16px;border-radius:50%;background:#333;"></div>
<div style="position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:2px;height:110px;background:#4caf50;opacity:0.5;"></div>
</div>
<div style="display:flex;justify-content:space-between;max-width:340px;margin:0 auto;font-size:12px;color:#888;">
<span>-50¢</span><span>-25¢</span><span>0</span><span>+25¢</span><span>+50¢</span>
</div>
<div class="results" id="ogtResults" style="margin-top:12px;">
<p class="result-head">🎸 Live pitch</p>
<div class="result-summary" id="ogtSummary">Press "Enable Microphone", then play a string.</div>
<div class="result-grid" id="ogtGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Tune as often as you like — nothing is ever recorded or uploaded.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ogtShell');
  ToolPro.themeToggle(shell, document.getElementById('ogtTheme'));
  var startBtn = document.getElementById('ogtStart');
  var stopBtn = document.getElementById('ogtStop');
  var needle = document.getElementById('ogtNeedle');
  var summary = document.getElementById('ogtSummary');
  var grid = document.getElementById('ogtGrid');
  var resBox = document.getElementById('ogtResults');
  var stringsEl = document.getElementById('ogtStrings');
  var STRINGS = [
    { n: 'E2 (low E)', f: 82.41 }, { n: 'A2', f: 110.00 }, { n: 'D3', f: 146.83 },
    { n: 'G3', f: 196.00 }, { n: 'B3', f: 246.94 }, { n: 'E4 (high E)', f: 329.63 }
  ];
  var selString = 'auto';
  var audioCtx = null, analyser = null, stream = null, rafId = null, running = false;

  stringsEl.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    stringsEl.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    selString = chip.dataset.s;
  });

  function autoCorrelate(buf, sampleRate){
    var SIZE = buf.length;
    var rms = 0;
    for(var i = 0; i < SIZE; i++){ rms += buf[i] * buf[i]; }
    rms = Math.sqrt(rms / SIZE);
    if(rms < 0.01) return -1;
    var th = 0.2, r1 = 0, r2 = SIZE - 1;
    for(i = 0; i < SIZE / 2; i++) if(Math.abs(buf[i]) < th){ r1 = i; break; }
    for(i = 1; i < SIZE / 2; i++) if(Math.abs(buf[SIZE - i]) < th){ r2 = SIZE - i; break; }
    buf = buf.slice(r1, r2);
    SIZE = buf.length;
    if(SIZE < 32) return -1;
    var c = new Array(SIZE).fill(0);
    for(i = 0; i < SIZE; i++) for(var j = 0; j < SIZE - i; j++) c[i] += buf[j] * buf[j + i];
    var d = 0;
    while(d < SIZE - 1 && c[d] > c[d + 1]) d++;
    var maxv = -1, maxp = -1;
    for(i = d; i < SIZE; i++) if(c[i] > maxv){ maxv = c[i]; maxp = i; }
    var T0 = maxp;
    if(T0 > 0 && T0 < SIZE - 1){
      var x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
      var a = (x1 + x3 - 2 * x2) / 2, b = (x3 - x1) / 2;
      if(a) T0 = T0 - b / (2 * a);
    }
    return sampleRate / T0;
  }

  function nearestString(freq){
    var best = STRINGS[0], bestD = Infinity;
    STRINGS.forEach(function(s){
      var d = Math.abs(1200 * Math.log2(freq / s.f));
      if(d < bestD){ bestD = d; best = s; }
    });
    return best;
  }

  var buf, card;
  function loop(){
    if(!running) return;
    analyser.getFloatTimeDomainData(buf);
    var freq = autoCorrelate(buf, audioCtx.sampleRate);
    if(freq > 0 && freq < 1000){
      var target = selString === 'auto' ? nearestString(freq) : STRINGS[parseInt(selString, 10)];
      var cents = Math.round(1200 * Math.log2(freq / target.f));
      var clamped = Math.max(-50, Math.min(50, cents));
      var deg = clamped / 50 * 45;
      needle.style.transform = 'translateX(-50%) rotate(' + deg + 'deg)';
      needle.style.background = Math.abs(cents) <= 5 ? '#2e9e4f' : (Math.abs(cents) <= 15 ? '#e0a020' : '#d23c3c');
      var dir = cents === 0 ? 'perfect' : (cents > 0 ? 'sharp — loosen the string' : 'flat — tighten the string');
      if(!card){
        card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name" style="font-size:26px;"></div><div class="r-stats"></div>';
        grid.innerHTML = '';
        grid.appendChild(card);
        resBox.classList.add('show');
      }
      card.querySelector('.r-name').textContent =
        (Math.abs(cents) <= 5 ? '✅ ' : '') + target.n + ' — ' + freq.toFixed(1) + ' Hz';
      card.querySelector('.r-stats').innerHTML =
        (cents > 0 ? '+' : '') + cents + '¢ ' + dir +
        ' <span class="hint">(target ' + target.f.toFixed(2) + ' Hz)</span>';
      summary.textContent = Math.abs(cents) <= 5
        ? '🎉 In tune! Move to the next string.'
        : '🎸 ' + target.n + ': ' + dir + '.';
    } else {
      summary.textContent = '🔇 Listening… play a string clearly.';
    }
    rafId = requestAnimationFrame(loop);
  }

  startBtn.addEventListener('click', async function(){
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      ToolPro.toast('Microphone not supported in this browser', 'err');
      return;
    }
    try{
      startBtn.disabled = true;
      summary.textContent = '🎤 Requesting microphone access…';
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
      });
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var src = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 4096;
      src.connect(analyser);
      buf = new Float32Array(analyser.fftSize);
      running = true;
      stopBtn.disabled = false;
      summary.textContent = '🔇 Listening… play a string clearly.';
      ToolPro.toast('Microphone live — play a string', 'ok');
      loop();
    }catch(err){
      startBtn.disabled = false;
      summary.textContent = '⚠️ Microphone access was denied or unavailable.';
      ToolPro.toast('Microphone access denied', 'err');
    }
  });

  function stop(){
    running = false;
    if(rafId) cancelAnimationFrame(rafId);
    if(stream) stream.getTracks().forEach(function(t){ t.stop(); });
    if(audioCtx) audioCtx.close().catch(function(){});
    stream = null; audioCtx = null; analyser = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    needle.style.transform = 'translateX(-50%) rotate(0deg)';
    summary.textContent = 'Press "Enable Microphone", then play a string.';
    ToolPro.toast('Tuner stopped');
  }
  stopBtn.addEventListener('click', stop);
})();
</script>

## How it works

- **Step 1** — Tap "Enable Microphone" and allow access when your browser asks.
- **Step 2** — Leave auto-detect on, or lock to a specific string (E A D G B E).
- **Step 3** — Play a string clearly. The needle swings sharp (right) or flat (left); turn green at ±5 cents and the readout confirms you're in tune.

## Everyday uses

- **Beginners** — tune up before every practice session.
- **Gigging players** — quick tune check with no app install.
- **Teachers** — a tuner that works on any classroom computer.
- **Travelers** — tune on any device with a browser and a mic.

**Rule of thumb:** pluck the string with your thumb near the 12th fret for the cleanest reading, and tune up to the note (tightening) rather than down — it holds tuning better.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/online-guitar-tuner.md tool_name=read]
