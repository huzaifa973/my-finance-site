---
title: "Free Audio Joiner — Merge MP3 & WAV Files Online"
description: "Merge multiple MP3 and WAV files into one track in your browser with smooth crossfades. Free forever, no sign-up, files never leave your device."
category: audio
date: 2026-10-10
draft: false
---

Stitch podcast segments, voice memos, or song chapters into one seamless track. Drop in up to 10 audio files, drag them into order (or use the arrow buttons), add a crossfade so the joins melt together, and download a single WAV. Everything is decoded and merged right in your browser — your files never leave your device.

<div class="tool-shell" id="ajShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Audio Joiner</h2>
<p>Merge MP3, WAV &amp; OGG files into one track with smooth crossfades — in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="ajTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your audio files</p>
<div class="dropzone" id="ajDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop audio files here</strong>
<span>or click to browse — MP3, WAV, OGG · up to 10 files</span>
<input type="file" id="ajFile" accept="audio/*" multiple>
</div>
<ul class="file-list" id="ajList"></ul>
<div class="hint">Use the ↑ ↓ buttons to reorder — files merge top to bottom.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Crossfade settings</p>
<div class="settings-panel">
<div class="preset-row" id="ajPresets">
<button type="button" class="preset-chip active" data-f="0">🔇 No crossfade — hard joins</button>
<button type="button" class="preset-chip" data-f="0.5">🌊 0.5s — smooth</button>
<button type="button" class="preset-chip" data-f="2">🎧 2s — DJ blend</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ajFade">Crossfade: <span class="val" id="ajFadeVal">0s</span></label>
<input type="range" id="ajFade" min="0" max="5" step="0.5" value="0">
<div class="hint">Overlapping fade between tracks so one melts into the next.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Merge &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ajBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Merge audio files
</button>
<button type="button" class="btn-pro-outline" id="ajPlayBtn" disabled>▶ Preview mix</button>
<button type="button" class="btn-pro-outline" id="ajStopBtn">⏹ Stop</button>
</div>
<div class="progress-wrap" id="ajProgWrap">
<div class="progress-bar"><i id="ajProgBar"></i></div>
<div class="progress-text" id="ajProgText">Working…</div>
</div>
<div class="results" id="ajResults">
<p class="result-head">🎧 Merged audio</p>
<div class="result-summary" id="ajInfo">Add at least 2 audio files to merge them.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — merge as many tracks as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ajShell');
  ToolPro.themeToggle(shell, document.getElementById('ajTheme'));

  var actx = null, tracks = [], mergedBuf = null, src = null, mergeCount = 0;
  var listEl = document.getElementById('ajList');
  var btn = document.getElementById('ajBtn');
  var playBtn = document.getElementById('ajPlayBtn');
  var info = document.getElementById('ajInfo');
  var fadeRange = document.getElementById('ajFade');
  var presets = document.getElementById('ajPresets');

  function ensureCtx(){ if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); if(actx.state === 'suspended') actx.resume(); }

  ToolPro.bindSlider(fadeRange, document.getElementById('ajFadeVal'), function(v){ return v + 's'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    fadeRange.value = chip.dataset.f;
    fadeRange.dispatchEvent(new Event('input'));
  });

  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function renderList(){
    listEl.innerHTML = '';
    tracks.forEach(function(t, i){
      var li = document.createElement('li');
      li.className = 'file-row';
      li.innerHTML =
        '<span class="file-num">' + (i + 1) + '</span>' +
        '<span class="file-name">' + esc(t.file.name) + '</span>' +
        '<span class="file-size">' + (t.buf ? t.buf.duration.toFixed(1) + 's' : 'decoding…') + '</span>' +
        '<span class="file-order">' +
        '<button type="button" data-mv="-1" title="Move up">↑</button>' +
        '<button type="button" data-mv="1" title="Move down">↓</button>' +
        '<button type="button" data-rm="1" title="Remove">✕</button>' +
        '</span>';
      li.querySelectorAll('button').forEach(function(b){
        b.addEventListener('click', function(){
          if(b.dataset.rm){ tracks.splice(i, 1); }
          else {
            var j = i + parseInt(b.dataset.mv, 10);
            if(j < 0 || j >= tracks.length) return;
            var tmp = tracks[i]; tracks[i] = tracks[j]; tracks[j] = tmp;
          }
          mergedBuf = null; playBtn.disabled = true;
          renderList(); refresh();
        });
      });
      listEl.appendChild(li);
    });
  }

  function refresh(){
    var ready = tracks.filter(function(t){ return t.buf; }).length;
    btn.disabled = ready < 2;
    info.textContent = ready < 2
      ? 'Add at least 2 audio files to merge them.'
      : ready + ' tracks ready — total ' + totalDur().toFixed(1) + 's. Reorder above, set a crossfade, then merge.';
    document.getElementById('ajResults').classList.toggle('show', tracks.length > 0);
  }

  function totalDur(){
    var fade = parseFloat(fadeRange.value);
    var d = 0;
    tracks.forEach(function(t){ if(t.buf) d += t.buf.duration; });
    var joins = Math.max(0, tracks.filter(function(t){ return t.buf; }).length - 1);
    return Math.max(0, d - fade * joins);
  }

  function addFiles(arr){
    ensureCtx();
    arr.forEach(function(f){
      if(tracks.length >= 10){ ToolPro.toast('Maximum 10 files', 'err'); return; }
      if(tracks.some(function(t){ return t.file === f; })) return;
      var t = { file: f, buf: null };
      tracks.push(t);
      renderList(); refresh();
      f.arrayBuffer().then(function(ab){ return actx.decodeAudioData(ab); }).then(function(buf){
        t.buf = buf;
        renderList(); refresh();
      }).catch(function(){
        tracks = tracks.filter(function(x){ return x !== t; });
        renderList(); refresh();
        ToolPro.toast('Could not decode ' + f.name, 'err');
      });
    });
    ToolPro.toast(arr.length + (arr.length === 1 ? ' file' : ' files') + ' added', 'ok');
  }

  ToolPro.dropzone(document.getElementById('ajDrop'), {
    multiple: true, accept: 'audio/*', maxFiles: 10,
    onFiles: addFiles
  });

  function stopPlay(){ if(src){ try{ src.stop(); }catch(e){} src = null; } }

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

  function buildMerged(){
    return new Promise(function(resolve, reject){
      var ready = tracks.filter(function(t){ return t.buf; });
      if(ready.length < 2){ reject(new Error('need2')); return; }
      var sr = Math.max.apply(null, ready.map(function(t){ return t.buf.sampleRate; }));
      var fade = parseFloat(fadeRange.value);
      var bufs = ready.map(function(t){
        if(t.buf.sampleRate === sr && t.buf.numberOfChannels === 2) return t.buf;
        return null;
      });
      var total = 0;
      ready.forEach(function(t, i){
        var d = t.buf.duration;
        total += d - (i > 0 ? Math.min(fade, d / 2, ready[i - 1].buf.duration / 2) : 0);
      });
      var off = new OfflineAudioContext(2, Math.max(1, Math.ceil(total * sr)), sr);
      var pos = 0;
      ready.forEach(function(t, i){
        var srcNode = off.createBufferSource();
        srcNode.buffer = t.buf;
        var g = off.createGain();
        srcNode.connect(g); g.connect(off.destination);
        var d = t.buf.duration;
        var fin = i > 0 ? Math.min(fade, d / 2, ready[i - 1].buf.duration / 2) : 0;
        var fout = i < ready.length - 1 ? Math.min(fade, d / 2, ready[i + 1].buf.duration / 2) : 0;
        g.gain.setValueAtTime(fin > 0 ? 0 : 1, pos);
        if(fin > 0) g.gain.linearRampToValueAtTime(1, pos + fin);
        if(fout > 0){
          g.gain.setValueAtTime(1, pos + d - fout);
          g.gain.linearRampToValueAtTime(0, pos + d);
        }
        srcNode.start(0, pos);
        pos += d - fin;
      });
      off.startRendering().then(resolve).catch(reject);
    });
  }

  btn.addEventListener('click', function(){
    ensureCtx();
    stopPlay();
    var wrap = document.getElementById('ajProgWrap');
    var bar = document.getElementById('ajProgBar');
    var txt = document.getElementById('ajProgText');
    btn.disabled = true;
    wrap.classList.add('show'); bar.style.width = '30%';
    txt.textContent = 'Merging tracks…';
    mergeCount++;
    buildMerged().then(function(rendered){
      mergedBuf = rendered;
      bar.style.width = '100%'; txt.textContent = 'Done';
      var blob = bufToWav(rendered);
      ToolPro.download(URL.createObjectURL(blob), 'merged-audio.wav');
      info.textContent = 'Merged ' + tracks.filter(function(t){ return t.buf; }).length + ' tracks into ' +
        rendered.duration.toFixed(1) + 's — downloaded merged-audio.wav (' + ToolPro.fmtBytes(blob.size) + ').';
      playBtn.disabled = false;
      wrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('Tracks merged and downloaded', 'ok');
    }).catch(function(){
      wrap.classList.remove('show');
      btn.disabled = false;
      info.textContent = 'Merging failed — try fewer or shorter files.';
      ToolPro.toast('Merging failed', 'err');
    });
  });

  playBtn.addEventListener('click', function(){
    if(!mergedBuf) return;
    ensureCtx(); stopPlay();
    src = actx.createBufferSource();
    src.buffer = mergedBuf; src.connect(actx.destination); src.start(0);
    ToolPro.toast('Playing merged preview');
  });
  document.getElementById('ajStopBtn').addEventListener('click', stopPlay);

  fadeRange.addEventListener('input', refresh);
  refresh();
})();
</script>

## How it works

1. **Drop in your files** — up to 10 MP3, WAV, or OGG files. Each one is decoded in your browser (a "decoding…" label shows while it loads).
2. **Order them** — files merge top to bottom. Use the ↑ ↓ buttons to rearrange until the sequence is right.
3. **Add a crossfade** — 0s gives clean hard cuts; 0.5s smooths podcast edits; 2s blends songs like a DJ. The overlap is capped at half of each clip so short files never break.
4. **Merge offline** — everything renders faster than real time with an OfflineAudioContext, with volume envelopes drawn around each join.
5. **Preview and download** — check the mix, then grab the single merged WAV file.

Your files never leave your browser — no uploads, no accounts, no server involved.

## Everyday uses

- **Podcasters** — join intro, segments, ads, and outro into one episode file.
- **Audiobooks & courses** — stitch chapter recordings into a single listening file.
- **Voice memos** — combine scattered phone recordings into one note.
- **DJs & playlists** — blend songs with 2-second crossfades for seamless mixes.
- **Event planners** — merge ceremony music cues into one track so nothing gets missed.

**Tip:** the merged file downloads as WAV (uncompressed, plays everywhere). If you need a smaller file afterwards, run it through our Audio Converter for WebM, or convert WAV to MP3 in any desktop app.
