---
title: "Free Silence Trimmer — Auto-Remove Silence from Audio"
description: "Automatically detect and remove dead silence from the start and end of audio files. Waveform view with highlighted silent regions, adjustable threshold, WAV export. Free, private, in your browser."
category: audio
date: 2026-10-11
draft: false
---

Dead air at the start and end of a recording makes it sound sloppy — and manually cutting it is tedious. Upload your audio, let the tool find the silent regions, see them highlighted on a waveform, and trim them off in one click. Your files are processed entirely in your browser and never uploaded anywhere.

<style>
#slcShell .r-audio{width:100%;margin:.25rem 0}
#slcShell .wave-canvas{width:100%;height:auto;border-radius:12px;margin:.75rem 0;display:block}
</style>
<div class="tool-shell" id="slcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Silence Trimmer</h2>
<p>Auto-detect and cut dead silence from the start and end of audio — with a visual waveform.</p>
</div>
<button type="button" class="theme-toggle" id="slcTheme">🌙 Dark</button>
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
<div class="dropzone" id="slcDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an audio file here</strong>
<span>or click to browse — MP3, WAV, OGG, M4A · one file at a time</span>
<input type="file" id="slcFile" accept="audio/*">
</div>
<ul class="file-list" id="slcList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Silence detection settings</p>
<div class="settings-panel">
<div class="preset-row" id="slcPresets">
<button type="button" class="preset-chip active" data-db="-40" data-ms="400">🎙️ Podcast / voice</button>
<button type="button" class="preset-chip" data-db="-50" data-ms="800">🎵 Music recording</button>
<button type="button" class="preset-chip" data-db="-30" data-ms="250">📱 Noisy room</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="slcDb">Silence threshold: <span class="val" id="slcDbVal">-40 dB</span></label>
<input type="range" id="slcDb" min="-60" max="-15" step="1" value="-40">
<div class="hint">Anything quieter than this counts as silence. Lower = stricter.</div>
</div>
<div class="setting">
<label for="slcMs">Min. silence length: <span class="val" id="slcMsVal">0.4s</span></label>
<input type="range" id="slcMs" min="150" max="2000" step="50" value="400">
<div class="hint">Only silences at least this long get trimmed — natural pauses stay.</div>
</div>
<div class="setting">
<label for="slcMode">Trim mode</label>
<select id="slcMode">
<option value="both" selected>Start &amp; end</option>
<option value="start">Start only</option>
<option value="end">End only</option>
</select>
<div class="hint">Middle silences are never removed — only dead air at the edges.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze, review &amp; trim</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="slcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
Analyze &amp; Trim Silence
</button>
<button type="button" class="btn-pro-outline" id="slcClear" disabled>Remove</button>
</div>
<div class="progress-wrap" id="slcProgWrap">
<div class="progress-bar"><i id="slcProgBar"></i></div>
<div class="progress-text" id="slcProgText">Analyzing…</div>
</div>
<div class="results" id="slcResults">
<p class="result-head">✅ Done — silence trimmed</p>
<div class="result-summary" id="slcSummary"></div>
<canvas id="slcWave" class="wave-canvas" width="800" height="180"></canvas>
<div class="result-grid" id="slcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('slcShell');
  ToolPro.themeToggle(shell, document.getElementById('slcTheme'));

  var file = null, fileName = '';
  var listEl = document.getElementById('slcList');
  var btn = document.getElementById('slcBtn');
  var clearBtn = document.getElementById('slcClear');
  var dbRange = document.getElementById('slcDb');
  var dbVal = document.getElementById('slcDbVal');
  var msRange = document.getElementById('slcMs');
  var msVal = document.getElementById('slcMsVal');
  var modeSel = document.getElementById('slcMode');
  var presets = document.getElementById('slcPresets');
  var audioCtx = null;

  function ctx(){
    if(!audioCtx){
      var AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if(audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  ToolPro.bindSlider(dbRange, dbVal, function(v){ return v + ' dB'; });
  ToolPro.bindSlider(msRange, msVal, function(v){ return (v / 1000).toFixed(2).replace(/0+$/,'').replace(/\.$/,'') + 's'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    dbRange.value = chip.dataset.db; dbRange.dispatchEvent(new Event('input'));
    msRange.value = chip.dataset.ms; msRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var on = !!file;
    btn.disabled = !on; clearBtn.disabled = !on;
  }

  ToolPro.dropzone(document.getElementById('slcDrop'), {
    multiple: false,
    accept: 'audio/*',
    maxFiles: 1,
    onFiles: function(arr){
      file = arr[0]; fileName = file.name;
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('slcResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Audio loaded — adjust settings and analyze', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('slcResults').classList.remove('show');
    refreshButtons();
  });

  function fmtTime(sec){
    sec = Math.max(0, sec);
    return sec.toFixed(1) + 's';
  }

  function drawWaveform(data, sr, silentRanges){
    var cv = document.getElementById('slcWave');
    var g = cv.getContext('2d');
    var W = cv.width, H = cv.height;
    g.clearRect(0, 0, W, H);
    var dark = shell.dataset.theme === 'dark';
    g.fillStyle = dark ? '#141a26' : '#f5f7fb';
    g.fillRect(0, 0, W, H);
    // silent regions shaded red first
    g.fillStyle = dark ? 'rgba(255,90,90,.28)' : 'rgba(220,60,60,.18)';
    silentRanges.forEach(function(r){
      var x0 = (r[0] / data.length) * W;
      var x1 = (r[1] / data.length) * W;
      g.fillRect(x0, 0, Math.max(2, x1 - x0), H);
    });
    // waveform peaks
    var step = Math.max(1, Math.floor(data.length / W));
    g.fillStyle = dark ? '#7fb3ff' : '#2b6cb0';
    var mid = H / 2;
    for(var x = 0; x < W; x++){
      var start = x * step, peak = 0;
      for(var i = start; i < start + step && i < data.length; i += 4){
        var a = Math.abs(data[i]);
        if(a > peak) peak = a;
      }
      var h = Math.max(1, peak * (H - 8));
      g.fillRect(x, mid - h / 2, 1, h);
    }
    g.fillStyle = dark ? '#cbd5e1' : '#475569';
    g.font = '11px sans-serif';
    g.fillText('🔴 red = detected silence', 10, 16);
    g.fillText(fmtTime(data.length / sr) + ' total', W - 70, 16);
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

  btn.addEventListener('click', function(){
    if(!file) return;
    var wrap = document.getElementById('slcProgWrap');
    var resBox = document.getElementById('slcResults');
    var grid = document.getElementById('slcGrid');
    btn.disabled = true;
    wrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    document.getElementById('slcProgBar').style.width = '20%';
    document.getElementById('slcProgText').textContent = 'Decoding audio…';

    var r = new FileReader();
    r.onload = function(){
      ctx().decodeAudioData(r.result).then(function(buffer){
        document.getElementById('slcProgBar').style.width = '55%';
        document.getElementById('slcProgText').textContent = 'Detecting silence…';
        var sr = buffer.sampleRate;
        var data = buffer.getChannelData(0);
        var threshold = parseFloat(dbRange.value);
        var minSil = parseInt(msRange.value, 10) / 1000;
        var frame = Math.floor(sr * 0.02); // 20ms windows
        var minFrames = Math.ceil(minSil / 0.02);
        var silent = new Array(Math.ceil(data.length / frame)).fill(true);
        var frames = silent.length;
        for(var f = 0; f < frames; f++){
          var peak = 0;
          var start = f * frame;
          for(var i = start; i < start + frame && i < data.length; i += 8){
            var a = Math.abs(data[i]);
            if(a > peak) peak = a;
          }
          var db = 20 * Math.log10(Math.max(1e-6, peak));
          silent[f] = db < threshold;
        }
        // merge into ranges of consecutive silent frames (only those >= minFrames)
        var ranges = [], rs = -1;
        for(var f2 = 0; f2 <= frames; f2++){
          var s = f2 < frames && silent[f2];
          if(s && rs < 0) rs = f2;
          if(!s && rs >= 0){
            if(f2 - rs >= minFrames) ranges.push([rs * frame, Math.min(data.length, f2 * frame)]);
            rs = -1;
          }
        }
        // find leading & trailing silence
        var mode = modeSel.value;
        var leadEnd = 0, trailStart = data.length;
        if(ranges.length){
          if(ranges[0][0] === 0) leadEnd = ranges[0][1];
          var last = ranges[ranges.length - 1];
          if(last[1] >= data.length - frame) trailStart = last[0];
        }
        var cutStart = (mode === 'both' || mode === 'start') ? leadEnd : 0;
        var cutEnd = (mode === 'both' || mode === 'end') ? trailStart : data.length;
        if(cutEnd <= cutStart){ cutStart = 0; cutEnd = data.length; }

        document.getElementById('slcProgBar').style.width = '80%';
        document.getElementById('slcProgText').textContent = 'Rendering trimmed audio…';

        var trimLen = cutEnd - cutStart;
        var out = ctx().createBuffer(buffer.numberOfChannels, trimLen, sr);
        for(var ch = 0; ch < buffer.numberOfChannels; ch++){
          out.getChannelData(ch).set(buffer.getChannelData(ch).subarray(cutStart, cutEnd));
        }
        var blob = bufferToWav(out);
        var url = URL.createObjectURL(blob);
        var removed = (cutStart + (data.length - cutEnd)) / sr;

        drawWaveform(data, sr, ranges);
        var card = document.createElement('div');
        card.className = 'result-card';
        var base = fileName.replace(/\.[^.]+$/, '') + '-trimmed';
        card.innerHTML =
          '<audio class="r-audio" controls></audio>' +
          '<div class="r-name"></div>' +
          '<div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download WAV</button>';
        card.querySelector('.r-audio').src = url;
        card.querySelector('.r-name').textContent = base + '.wav';
        card.querySelector('.r-name').title = base + '.wav';
        card.querySelector('.r-stats').innerHTML =
          fmtTime(buffer.duration) + ' → <b>' + fmtTime(trimLen / sr) + '</b> · ' +
          ToolPro.fmtBytes(blob.size) + ' WAV';
        (function(u, n){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
        })(url, base + '.wav');
        grid.appendChild(card);
        document.getElementById('slcSummary').textContent =
          removed > 0.05
            ? '🎉 Removed ' + fmtTime(removed) + ' of dead silence (' + fmtTime(cutStart / sr) + ' start · ' + fmtTime((data.length - cutEnd) / sr) + ' end).'
            : '🎉 No silence long enough to trim — your audio already starts and ends cleanly.';
        document.getElementById('slcProgBar').style.width = '100%';
        wrap.classList.remove('show');
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        btn.disabled = false;
        ToolPro.toast('Analysis complete', 'ok');
      }).catch(function(){
        wrap.classList.remove('show'); btn.disabled = false;
        ToolPro.toast('Could not decode this audio file.', 'err');
      });
    };
    r.onerror = function(){
      wrap.classList.remove('show'); btn.disabled = false;
      ToolPro.toast('Could not read the file.', 'err');
    };
    r.readAsArrayBuffer(file);
  });

  refreshButtons();
})();
</script>

## How it works

1. Your audio is decoded in your browser and split into tiny 20-millisecond windows.
2. Every window quieter than your threshold (default −40 dB) is marked as silence; only stretches longer than your minimum length are flagged, so natural pauses stay untouched.
3. The waveform shows flagged regions in red. One click trims the dead air from the start and end and exports a clean WAV — nothing is ever uploaded.

## Everyday uses

- **Podcasters** — remove the awkward pause before you start talking and the dead air after the outro.
- **Voice-over artists** — clean up the head and tail of every take before editing.
- **Musicians** — trim silence from the ends of recorded stems so they line up in a DAW.
- **Students** — tighten up recorded lectures before sharing notes.
- **Voice messages &amp; ringtones** — cut the dead air so clips start instantly.

## FAQ

**Does it remove silence from the middle too?**
No — only the start and end. Mid-clip pauses are part of natural speech, so they're left alone.

**What threshold should I use?**
Start with the Podcast preset (−40 dB). If quiet room tone is being kept, lower the threshold; if soft speech is being cut, raise it.

**What audio formats are supported?**
MP3, WAV, OGG, M4A/AAC, and FLAC in most browsers — anything your browser can decode.

**Is my audio uploaded anywhere?**
Never. Everything — decoding, detection, waveform, export — runs locally in your browser. Files never leave your browser.

[END OF FILE]
