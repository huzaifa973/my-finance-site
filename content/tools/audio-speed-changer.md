---
title: "Free Audio Speed Changer — Speed Up or Slow Down Audio"
description: "Change audio playback speed from 0.25x to 3x in your browser with optional basic pitch preservation, live preview, and WAV export. Free forever, no sign-up, files never leave your device."
category: audio
date: 2026-10-11
draft: false
---

Speed up podcasts and lectures to save time, or slow down a tricky guitar solo to learn it note by note. Drop in any audio file, pick a speed, preview it instantly, and export the result as a WAV. Everything runs in your browser; your files are never uploaded anywhere.

<style>
#spdShell .r-audio{width:100%;margin:.25rem 0}
</style>
<div class="tool-shell" id="spdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Audio Speed Changer</h2>
<p>Play audio faster or slower — 0.25x to 3x — with optional pitch preservation and WAV export.</p>
</div>
<button type="button" class="theme-toggle" id="spdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your audio</p>
<div class="dropzone" id="spdDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an audio file here</strong>
<span>or click to browse — MP3, WAV, OGG, M4A · one file at a time</span>
<input type="file" id="spdFile" accept="audio/*">
</div>
<ul class="file-list" id="spdList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Speed settings</p>
<div class="settings-panel">
<div class="preset-row" id="spdPresets">
<button type="button" class="preset-chip" data-r="0.5">🐢 0.5x Slow</button>
<button type="button" class="preset-chip" data-r="0.75">🚶 0.75x</button>
<button type="button" class="preset-chip active" data-r="1">⏺️ 1x Normal</button>
<button type="button" class="preset-chip" data-r="1.25">🏃 1.25x</button>
<button type="button" class="preset-chip" data-r="1.5">🚗 1.5x Fast</button>
<button type="button" class="preset-chip" data-r="2">⚡ 2x Turbo</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="spdRate">Speed: <span class="val" id="spdRateVal">1x</span></label>
<input type="range" id="spdRate" min="0.25" max="3" step="0.05" value="1">
<div class="hint">1.25x–1.5x is the sweet spot for podcasts and lectures.</div>
</div>
<div class="setting">
<label>Pitch handling</label>
<div class="toggle-row">
<span class="t-label">Preserve pitch <small>(basic time-stretch)</small></span>
<label class="toggle"><input type="checkbox" id="spdKeepPitch"><span class="track"></span></label>
</div>
<div class="hint">Off: voice gets higher/lower with speed (simple playback-rate render). On: keeps the voice natural using a basic time-stretch — best for speech; music may get a slight echo.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; export</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spdBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Render &amp; Download WAV
</button>
<button type="button" class="btn-pro-outline" id="spdPreviewBtn" disabled>▶ Preview Speed</button>
<button type="button" class="btn-pro-outline" id="spdClear" disabled>Remove</button>
</div>
<div class="progress-wrap" id="spdProgWrap">
<div class="progress-bar"><i id="spdProgBar"></i></div>
<div class="progress-text" id="spdProgText">Rendering…</div>
</div>
<div class="results" id="spdResults">
<p class="result-head">✅ Done — your speed-adjusted audio</p>
<div class="result-summary" id="spdSummary"></div>
<div class="result-grid" id="spdGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — your files never leave your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('spdShell');
  ToolPro.themeToggle(shell, document.getElementById('spdTheme'));

  var file = null, fileName = '', row = null;
  var listEl = document.getElementById('spdList');
  var btn = document.getElementById('spdBtn');
  var prevBtn = document.getElementById('spdPreviewBtn');
  var clearBtn = document.getElementById('spdClear');
  var rateRange = document.getElementById('spdRate');
  var rateVal = document.getElementById('spdRateVal');
  var keepPitch = document.getElementById('spdKeepPitch');
  var presets = document.getElementById('spdPresets');
  var audioCtx = null;
  var previewEl = null;

  function ctx(){
    if(!audioCtx){
      var AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if(audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  ToolPro.bindSlider(rateRange, rateVal, function(v){ return parseFloat(v).toFixed(2).replace(/0+$/,'').replace(/\.$/,'') + 'x'; });
  function refreshRateLabel(){
    rateVal.textContent = parseFloat(rateRange.value).toFixed(2).replace(/0+$/,'').replace(/\.$/,'') + 'x';
  }

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    rateRange.value = chip.dataset.r;
    refreshRateLabel();
    ToolPro.toast('Speed set to ' + chip.dataset.r + 'x', 'ok');
  });
  rateRange.addEventListener('input', function(){
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  });

  function refreshButtons(){
    var on = !!file;
    btn.disabled = !on; prevBtn.disabled = !on; clearBtn.disabled = !on;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Render &amp; Download WAV';
  }

  ToolPro.dropzone(document.getElementById('spdDrop'), {
    multiple: false,
    accept: 'audio/*',
    maxFiles: 1,
    onFiles: function(arr){
      if(previewEl){ previewEl.pause(); previewEl = null; }
      file = arr[0]; fileName = file.name;
      listEl.innerHTML = '';
      row = ToolPro.fileRow(listEl, file, function(){
        file = null; row = null; refreshButtons();
      });
      document.getElementById('spdResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Audio loaded', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    if(previewEl){ previewEl.pause(); previewEl = null; }
    file = null; row = null; listEl.innerHTML = '';
    document.getElementById('spdResults').classList.remove('show');
    refreshButtons();
  });

  function readBuffer(){
    return new Promise(function(resolve, reject){
      var r = new FileReader();
      r.onload = function(){
        ctx().decodeAudioData(r.result).then(resolve, function(){ reject(new Error('Could not decode this audio file.')); });
      };
      r.onerror = function(){ reject(new Error('Could not read the file.')); };
      r.readAsArrayBuffer(file);
    });
  }

  // Simple pitch-shifting-free speed render: OfflineAudioContext + playbackRate.
  function renderRate(buffer, rate){
    var off = new OfflineAudioContext(buffer.numberOfChannels, Math.max(1, Math.floor(buffer.length / rate)), buffer.sampleRate);
    var src = off.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = rate;
    src.connect(off.destination);
    src.start(0);
    return off.startRendering();
  }

  // Basic OLA time-stretch: changes duration while keeping pitch roughly the same.
  function renderPreserve(buffer, rate){
    var sr = buffer.sampleRate;
    var N = 2048, Ha = 512, Hs = Math.max(1, Math.round(Ha / rate));
    var win = new Float32Array(N);
    for(var i = 0; i < N; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / N);
    var outLen = Math.max(N, Math.floor(buffer.length / rate) + N);
    var out = ctx().createBuffer(buffer.numberOfChannels, outLen, sr);
    for(var ch = 0; ch < buffer.numberOfChannels; ch++){
      var data = buffer.getChannelData(ch);
      var oData = out.getChannelData(ch);
      var frames = Math.floor((data.length - N) / Ha);
      var pos = 0;
      for(var f = 0; f <= frames; f++){
        var srcPos = f * Ha;
        for(var s = 0; s < N && pos + s < outLen; s++) oData[pos + s] += data[srcPos + s] * win[s];
        pos += Hs;
      }
    }
    return Promise.resolve(out);
  }

  function bufferToWav(buffer){
    var numCh = buffer.numberOfChannels, sr = buffer.sampleRate, len = buffer.length;
    var chData = [];
    for(var c = 0; c < numCh; c++) chData.push(buffer.getChannelData(c));
    var blockAlign = numCh * 2;
    var dataSize = len * blockAlign;
    var ab = new ArrayBuffer(44 + dataSize);
    var v = new DataView(ab);
    function str(off, s){ for(var i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i)); }
    str(0, 'RIFF'); v.setUint32(4, 36 + dataSize, true); str(8, 'WAVE');
    str(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true);
    v.setUint16(22, numCh, true); v.setUint32(24, sr, true);
    v.setUint32(28, sr * blockAlign, true); v.setUint16(32, blockAlign, true);
    v.setUint16(34, 16, true); str(36, 'data'); v.setUint32(40, dataSize, true);
    var off = 44;
    for(var i = 0; i < len; i++){
      for(var cc = 0; cc < numCh; cc++){
        var s = Math.max(-1, Math.min(1, chData[cc][i]));
        v.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        off += 2;
      }
    }
    return new Blob([ab], { type: 'audio/wav' });
  }

  function fmtTime(sec){
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function setProg(pct, txt){
    document.getElementById('spdProgBar').style.width = pct + '%';
    document.getElementById('spdProgText').textContent = txt;
  }

  function processAudio(cb){
    if(!file) return;
    var rate = parseFloat(rateRange.value);
    var wrap = document.getElementById('spdProgWrap');
    var resBox = document.getElementById('spdResults');
    btn.disabled = true; prevBtn.disabled = true;
    wrap.classList.add('show'); resBox.classList.remove('show');
    setProg(10, 'Decoding audio…');
    readBuffer().then(function(buffer){
      setProg(45, 'Applying ' + rate + 'x speed…');
      var p = keepPitch.checked ? renderPreserve(buffer, rate) : renderRate(buffer, rate);
      return p.then(function(out){ return { out: out, orig: buffer }; });
    }).then(function(r){
      setProg(80, 'Encoding WAV…');
      var blob = bufferToWav(r.out);
      var url = URL.createObjectURL(blob);
      var rate = parseFloat(rateRange.value);
      setProg(100, 'Done');
      cb({ blob: blob, url: url, buffer: r.out, origDur: r.orig.duration, rate: rate });
    }).catch(function(err){
      wrap.classList.remove('show');
      btn.disabled = false; prevBtn.disabled = false;
      ToolPro.toast(err.message || 'Something went wrong.', 'err');
    });
  }

  prevBtn.addEventListener('click', function(){
    processAudio(function(r){
      document.getElementById('spdProgWrap').classList.remove('show');
      if(previewEl) previewEl.pause();
      previewEl = new Audio(r.url);
      previewEl.play().catch(function(){});
      ToolPro.toast('▶ Previewing at ' + r.rate + 'x — use Render to download', 'ok');
      btn.disabled = false; prevBtn.disabled = false;
    });
  });

  btn.addEventListener('click', function(){
    processAudio(function(r){
      var wrap = document.getElementById('spdProgWrap');
      var resBox = document.getElementById('spdResults');
      var grid = document.getElementById('spdGrid');
      grid.innerHTML = '';
      wrap.classList.remove('show');
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = fileName.replace(/\.[^.]+$/, '') + '-' + r.rate + 'x';
      card.innerHTML =
        '<audio class="r-audio" controls></audio>' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download WAV</button>';
      card.querySelector('.r-audio').src = r.url;
      card.querySelector('.r-name').textContent = base + '.wav';
      card.querySelector('.r-name').title = base + '.wav';
      card.querySelector('.r-stats').innerHTML =
        'Speed <b>' + r.rate + 'x</b> · ' + fmtTime(r.origDur) + ' → <b>' + fmtTime(r.buffer.duration) + '</b> · ' +
        ToolPro.fmtBytes(r.blob.size) + ' WAV · ' + (keepPitch.checked ? 'Pitch preserved (basic)' : 'Pitch shifts with speed');
      (function(url, name){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
      })(r.url, base + '.wav');
      grid.appendChild(card);
      document.getElementById('spdSummary').textContent =
        '🎉 Rendered at ' + r.rate + 'x — ' + (keepPitch.checked ? 'pitch kept natural with basic time-stretch.' : 'pitch shifts naturally with speed.');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false; prevBtn.disabled = false;
      ToolPro.toast('Audio rendered', 'ok');
    });
  });

  refreshButtons();
})();
</script>

## How it works

1. Your audio file is decoded directly in your browser with the Web Audio API — nothing is uploaded.
2. Speed up uses a playback-rate render, which naturally raises pitch like a fast-forward effect; turn on **Preserve pitch** and a basic time-stretch keeps voices sounding natural while changing only the length.
3. Hit **Preview Speed** to hear the result instantly, then **Render &amp; Download WAV** to export a standard WAV file that plays everywhere.

## Everyday uses

- **Students &amp; professionals** — listen to lectures, podcasts, and meeting recordings at 1.25x–2x to save hours every week.
- **Musicians** — slow tricky solos to 0.5x and learn them note by note.
- **Content creators** — fit a voiceover exactly into a video slot by speeding it up slightly.
- **Language learners** — slow native speech to 0.75x to catch every word.
- **Comedy &amp; memes** — chipmunk voices at 2x are a classic for a reason.

## FAQ

**Will changing the speed change the pitch?**
By default, yes — speeding up raises the pitch and slowing down lowers it, like tape. Turn on "Preserve pitch" to keep voices sounding natural while the duration changes.

**How good is the pitch preservation?**
It's a basic time-stretch that works well for speech and podcasts. Dense music can pick up a slight echo or chorus artifact at extreme speeds.

**What formats can I upload?**
Anything your browser can play: MP3, WAV, OGG, M4A/AAC, FLAC in most browsers.

**What format is the download?**
Uncompressed WAV — the most compatible audio format, playable on every device and editable in every audio program.

[END OF FILE]
