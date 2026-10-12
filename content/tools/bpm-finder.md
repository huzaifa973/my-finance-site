---
title: "BPM Finder — Find a Song's Tempo Free (Tap or Upload)"
description: "Find the BPM of any song free: tap along to the beat or upload an audio file for an instant tempo estimate — private, in your browser, no sign-up."
category: audio
date: 2026-10-12
draft: false
---

## How it works

Two ways to find a tempo. Tap along with the beat and this tool averages your taps into an exact BPM — or upload a song and let it analyze the audio: it decodes the file in your browser, tracks the energy pulses where the beats hit, and measures how often that pattern repeats. Either way, nothing is uploaded to a server.

<div class="tool-shell" id="bpmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>BPM Finder</h2>
<p>Find any song's tempo — tap along, or drop in the file and get an instant estimate.</p>
</div>
<button type="button" class="theme-toggle" id="bpmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Tap the tempo</p>
<div class="setting">
<button type="button" class="btn-pro" id="bpmTap" style="width:100%;padding:22px;font-size:1.25rem;">TAP</button>
<div class="hint" id="bpmTapStatus">Tap the button in time with the beat — at least twice. The more taps, the steadier the average.</div>
<div class="tool-actions" style="margin-top:10px;">
<button type="button" class="btn-pro-outline" id="bpmTapReset">Reset taps</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or analyze a song file</p>
<div class="setting">
<label for="bpmFile">Audio file (MP3, WAV, OGG… up to 7 minutes)</label>
<input type="file" id="bpmFile" accept="audio/*" class="tool-input">
<div class="hint">The file is decoded and analyzed locally in your browser — it is never uploaded anywhere.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your tempo</p>
<div class="results" id="bpmResults">
<p class="result-head">Tempo result</p>
<div class="result-summary" id="bpmOut"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Tap or analyze as many songs as you like — everything runs in your browser, nothing leaves your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('bpmShell');
  ToolPro.themeToggle(shell, document.getElementById('bpmTheme'));
  var tapBtn = document.getElementById('bpmTap');
  var tapReset = document.getElementById('bpmTapReset');
  var tapStatus = document.getElementById('bpmTapStatus');
  var fileInput = document.getElementById('bpmFile');
  var resBox = document.getElementById('bpmResults');
  var out = document.getElementById('bpmOut');
  var actx = null;

  // ---- Mode 1: tap tempo ----
  var taps = [], idleTimer = null;
  function armIdleReset(){
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(function(){
      taps = [];
      tapStatus.textContent = 'Counter reset after 2.5 seconds idle — tap again to start a new measurement.';
    }, 2500);
  }
  tapBtn.addEventListener('click', function(){
    var now = performance.now();
    if (taps.length && now - taps[taps.length - 1] > 2500) taps = [];
    taps.push(now);
    if (taps.length > 8) taps.shift();
    armIdleReset();
    if (taps.length >= 2){
      var sum = 0;
      for (var i = 1; i < taps.length; i++) sum += taps[i] - taps[i - 1];
      var bpm = Math.round(60000 / (sum / (taps.length - 1)));
      tapStatus.textContent = taps.length + ' taps — average tempo: ' + bpm + ' BPM. Keep tapping to refine it.';
      out.innerHTML = '<p style="font-size:1.6rem;"><strong>' + bpm + '</strong> BPM</p>'
        + '<p>From tap tempo (' + taps.length + ' taps). For a steadier reading, tap along for a full verse.</p>';
      resBox.classList.add('show');
    } else {
      tapStatus.textContent = 'One tap down — keep tapping in time with the beat.';
    }
  });
  tapReset.addEventListener('click', function(){
    taps = [];
    if (idleTimer) clearTimeout(idleTimer);
    tapStatus.textContent = 'Taps cleared. Tap the button in time with the beat — at least twice.';
    ToolPro.toast('Tap counter reset');
  });

  // ---- Mode 2: song analysis ----
  function fail(msg){
    out.innerHTML = '<p>' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  function estimateBpm(buf){
    var sr = buf.sampleRate, hop = 256, frame = 1024;
    var ch0 = buf.getChannelData(0);
    var ch1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : null;
    var frames = Math.floor((ch0.length - frame) / hop);
    var env = new Float32Array(frames);
    var prev = 0, i, j;
    for (i = 0; i < frames; i++){
      var off = i * hop, sum = 0;
      for (j = 0; j < frame; j += 8){
        var v = ch0[off + j];
        sum += v * v;
        if (ch1){ var w = ch1[off + j]; sum += w * w; }
      }
      var e = Math.sqrt(sum);
      env[i] = e > prev ? e - prev : 0;
      prev = e;
    }
    var mean = 0;
    for (i = 0; i < frames; i++) mean += env[i];
    mean /= frames;
    for (i = 0; i < frames; i++) env[i] -= mean;
    var fps = sr / hop;
    var minLag = Math.floor(fps * 60 / 200), maxLag = Math.ceil(fps * 60 / 40);
    var bestLag = minLag, bestVal = -1, lag, k;
    for (lag = minLag; lag <= maxLag; lag++){
      var s = 0;
      for (k = 0; k + lag < frames; k++) s += env[k] * env[k + lag];
      if (s > bestVal){ bestVal = s; bestLag = lag; }
    }
    var bpm = 60 * fps / bestLag;
    while (bpm < 70) bpm *= 2;
    while (bpm > 180) bpm /= 2;
    return Math.round(bpm);
  }
  function analyze(file){
    out.innerHTML = '<p>Analyzing "' + file.name + '" — decoding the audio and listening for the beat…</p>';
    resBox.classList.add('show');
    if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
    file.arrayBuffer().then(function(ab){
      return actx.decodeAudioData(ab);
    }).then(function(audio){
      if (audio.duration > 420){
        fail('That file is over 7 minutes long — please pick a shorter clip so the analysis stays fast.');
        return;
      }
      var bpm = estimateBpm(audio);
      var alt = bpm * 2 <= 240 ? bpm * 2 : Math.round(bpm / 2);
      out.innerHTML = '<p style="font-size:1.6rem;"><strong>' + bpm + '</strong> BPM <span style="font-size:.95rem;">(estimate)</span></p>'
        + '<p>Estimated from the beat pattern in "' + file.name + '" (' + Math.round(audio.duration) + ' seconds). '
        + 'On some tracks the strongest pulse lands on every other beat — if this feels half or double the real tempo, try <strong>' + alt + ' BPM</strong>, or confirm it with the tap tool above.</p>';
      ToolPro.toast('Analysis complete: about ' + bpm + ' BPM', 'ok');
    }).catch(function(){
      fail('Could not decode that file — try an MP3, WAV or OGG.');
    });
  }
  fileInput.addEventListener('change', function(){
    var f = fileInput.files && fileInput.files[0];
    if (!f) return;
    var url = URL.createObjectURL(f);
    var probe = new Audio();
    probe.preload = 'metadata';
    probe.onloadedmetadata = function(){
      var dur = probe.duration;
      URL.revokeObjectURL(url);
      if (isFinite(dur) && dur > 420){
        fail('That file is over 7 minutes long — please pick a shorter clip so the analysis stays fast.');
        return;
      }
      analyze(f);
    };
    probe.onerror = function(){
      URL.revokeObjectURL(url);
      analyze(f);
    };
    probe.src = url;
  });
})();
</script>

## Everyday uses

- **DJ sets and mixes:** sort tracks by tempo so transitions blend smoothly.
- **Workout playlists:** build running or cycling playlists in the 120–140 BPM sweet spot.
- **Learning an instrument:** find a song's tempo, then set a metronome to match it.
- **Video editing:** cut clips on the beat by knowing the track's exact tempo first.

## Frequently asked questions

**How does the upload analysis find the tempo?**
It decodes the audio in your browser, builds an "onset envelope" — a curve of where the energy suddenly jumps, which is where beats land — then autocorrelates that curve to find the repeating interval that best fits the 40–200 BPM range. The result is a good estimate, not a laboratory measurement.

**Why might the estimate be half or double the real tempo?**
Some songs pulse hardest on every other beat (or on eighth notes), so the clearest pattern can be the half-time or double-time one. The result suggests the alternative — and the tap tool takes ten seconds to confirm which is right.

**Is my song uploaded to a server?**
No. Decoding and analysis happen entirely in your browser with the Web Audio API. You can even go offline after the page loads and the analysis still works.
