---
title: "Extract Audio from Video — Free MP4 to Audio Tool"
description: "Pull the audio track out of any video in your browser — download as WAV or WebM audio. Free forever, no sign-up, files never leave your device."
category: video
date: 2026-10-10
draft: false
---

Need just the sound from a video — a lecture's narration, a song from a clip, interview audio for editing? This tool decodes the audio track locally and hands you an audio file. No upload, no waiting on a server, no sketchy converter sites.

<div class="tool-shell" id="audShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Extract Audio from Video</h2>
<p>Pull the soundtrack out of any video — save it as WAV or WebM audio, instantly.</p>
</div>
<button type="button" class="theme-toggle" id="audTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your video</p>
<div class="dropzone" id="audDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV · we only keep the sound</span>
<input type="file" id="audFile" accept="video/*">
</div>
<ul class="file-list" id="audList"></ul>
<p class="hint" id="audMeta" style="margin-top:8px"></p>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audio settings</p>
<div class="settings-panel">
<div class="preset-row" id="audPresets">
<button type="button" class="preset-chip active" data-f="wav">🎧 WAV — best quality</button>
<button type="button" class="preset-chip" data-f="webm">📦 WebM audio — small file</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="audFormat">Output format</label>
<select id="audFormat">
<option value="wav" selected>WAV — uncompressed, plays everywhere</option>
<option value="webm">WebM audio — much smaller file</option>
</select>
<div class="hint">WAV keeps full quality (bigger file). WebM audio is great for sharing.</div>
</div>
<div class="setting">
<label for="audChan">Channels</label>
<select id="audChan">
<option value="keep" selected>Keep original (stereo if present)</option>
<option value="mono">Mono — smaller file</option>
</select>
<div class="hint">Mono halves the size — fine for speech and voice notes.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Extract &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="audBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Extract Audio
</button>
<button type="button" class="btn-pro-outline" id="audClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="audProgWrap">
<div class="progress-bar"><i id="audProgBar"></i></div>
<div class="progress-text" id="audProgText">Working…</div>
</div>
<div class="results" id="audResults">
<p class="result-head">✅ Done — your audio file</p>
<div class="result-summary" id="audSummary"></div>
<div class="result-grid" id="audGrid"></div>
</div>
<video id="audHidden" playsinline muted style="position:absolute;width:2px;height:2px;opacity:0;pointer-events:none" aria-hidden="true"></video>
<p class="hint" style="margin-top:10px">ℹ️ Honest note: browsers can decode most common audio, but a few exotic codecs won't decode — if that happens you'll get a clear message, not a broken file.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Extract audio from as many videos as you like — it all happens on your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('audShell');
  ToolPro.themeToggle(shell, document.getElementById('audTheme'));

  var file = null, videoUrl = null, busy = false, meta = { dur: 0, size: 0 };
  var listEl = document.getElementById('audList');
  var btn = document.getElementById('audBtn');
  var clearBtn = document.getElementById('audClear');
  var metaEl = document.getElementById('audMeta');
  var fmtSel = document.getElementById('audFormat');
  var chanSel = document.getElementById('audChan');
  var hidden = document.getElementById('audHidden');

  document.getElementById('audPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#audPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    fmtSel.value = chip.dataset.f;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file || busy;
    clearBtn.disabled = !file || busy;
  }

  ToolPro.dropzone(document.getElementById('audDrop'), {
    multiple: false, accept: 'video/*', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      reset(false);
      file = arr[0]; meta.size = file.size;
      ToolPro.fileRow(listEl, file, function(){ reset(true); });
      videoUrl = URL.createObjectURL(file);
      hidden.src = videoUrl;
      hidden.onloadedmetadata = function(){
        meta.dur = hidden.duration || 0;
        metaEl.textContent = 'Source: ' + ToolPro.fmtBytes(meta.size) +
          (meta.dur ? ' · ' + meta.dur.toFixed(1) + 's of audio' : '');
      };
      document.getElementById('audResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — choose a format and extract', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; meta = { dur: 0, size: 0 }; metaEl.textContent = '';
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    hidden.removeAttribute('src'); hidden.load();
    document.getElementById('audResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  function bufferToWav(buffer, mono){
    var chans = mono ? 1 : Math.min(2, buffer.numberOfChannels);
    var rate = buffer.sampleRate;
    var len = buffer.length;
    var bytes = 44 + len * chans * 2;
    var ab = new ArrayBuffer(bytes);
    var v = new DataView(ab);
    function wstr(o, s){ for(var i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }
    wstr(0, 'RIFF'); v.setUint32(4, bytes - 8, true); wstr(8, 'WAVE');
    wstr(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true);
    v.setUint16(22, chans, true); v.setUint32(24, rate, true);
    v.setUint32(28, rate * chans * 2, true); v.setUint16(32, chans * 2, true);
    v.setUint16(34, 16, true); wstr(36, 'data'); v.setUint32(40, len * chans * 2, true);
    var off = 44;
    var chData = [];
    for(var c = 0; c < buffer.numberOfChannels; c++) chData.push(buffer.getChannelData(c));
    for(var i = 0; i < len; i++){
      for(var ch = 0; ch < chans; ch++){
        var s;
        if(mono && chData.length > 1){ s = (chData[0][i] + chData[1][i]) / 2; }
        else{ s = chData[Math.min(ch, chData.length - 1)][i]; }
        s = Math.max(-1, Math.min(1, s));
        v.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        off += 2;
      }
    }
    return new Blob([ab], { type: 'audio/wav' });
  }

  function captureWebmAudio(){
    return new Promise(function(res, rej){
      if(!window.MediaRecorder){ rej(new Error('norec')); return; }
      var stream;
      try{
        stream = hidden.captureStream ? hidden.captureStream()
               : (hidden.mozCaptureStream ? hidden.mozCaptureStream() : null);
      }catch(e){ stream = null; }
      if(!stream){ rej(new Error('nostream')); return; }
      var audioOnly = new MediaStream(stream.getAudioTracks());
      if(!audioOnly.getAudioTracks().length){ rej(new Error('noaudio')); return; }
      var mime = 'audio/webm';
      if(MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) mime = 'audio/webm;codecs=opus';
      var rec;
      try{ rec = new MediaRecorder(audioOnly, { mimeType: mime }); }
      catch(e){ rec = new MediaRecorder(audioOnly); }
      var chunks = [];
      rec.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
      rec.onstop = function(){
        stream.getTracks().forEach(function(t){ t.stop(); });
        res(new Blob(chunks, { type: 'audio/webm' }));
      };
      hidden.muted = true;
      hidden.currentTime = 0;
      hidden.play().then(function(){
        rec.start(250);
        hidden.onended = function(){ rec.stop(); };
        setTimeout(function(){ if(rec.state !== 'inactive'){ try{ hidden.pause(); }catch(e){} rec.stop(); } }, (hidden.duration || 60) * 1000 + 3000);
      }).catch(function(){ rej(new Error('play')); });
    });
  }

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    busy = true; refreshButtons();
    var progWrap = document.getElementById('audProgWrap');
    var progBar = document.getElementById('audProgBar');
    var progText = document.getElementById('audProgText');
    var grid = document.getElementById('audGrid');
    var resBox = document.getElementById('audResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var wantWav = fmtSel.value === 'wav';
    var mono = chanSel.value === 'mono';
    var blob = null, ext = 'wav', note = '';
    prog(5, 'Reading video file…');
    try{
      var AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) throw new Error('noctx');
      var ab = await file.arrayBuffer();
      prog(20, 'Decoding audio track…');
      var ctx = new AC();
      var audioBuf;
      try{
        audioBuf = await ctx.decodeAudioData(ab);
      }catch(e){
        try{
          audioBuf = await new Promise(function(res, rej){
            ctx.decodeAudioData(ab.slice(0), res, rej);
          });
        }catch(e2){ throw e2; }
      }
      prog(70, 'Rendering audio file…');
      if(wantWav){
        blob = bufferToWav(audioBuf, mono);
        ext = 'wav';
      }else{
        blob = await captureWebmAudio();
        ext = 'webm';
      }
      note = audioBuf.numberOfChannels + 'ch · ' + audioBuf.sampleRate + 'Hz';
      try{ ctx.close(); }catch(e){}
    }catch(e){
      if(!wantWav){ /* already failed inside */ }
      prog(40, 'Direct decode failed — trying browser capture…');
      try{
        blob = await captureWebmAudio();
        ext = 'webm';
        note = 'captured via browser playback';
        if(wantWav) ToolPro.toast('This audio codec could not be decoded directly — saved as WebM audio instead', 'ok');
      }catch(e2){
        progWrap.classList.remove('show'); busy = false; refreshButtons();
        ToolPro.toast('Could not read the audio track — this video may use an unsupported codec', 'err');
        return;
      }
    }

    var url = URL.createObjectURL(blob);
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<audio class="r-preview" controls style="width:100%"></audio>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Audio</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'audio') + '-audio.' + ext;
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      ext.toUpperCase() + (note ? ' · ' + note : '') + ' · <b>' + ToolPro.fmtBytes(blob.size) + '</b>';
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('audSummary').textContent =
      '🎉 Audio extracted — ' + ToolPro.fmtBytes(blob.size) + '. Play it above or download.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Audio extracted', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in a video — only the audio track is read, nothing is uploaded.
2. Choose **WAV** for full uncompressed quality or **WebM audio** for a much smaller file, plus stereo or mono.
3. Hit **Extract Audio**: the tool decodes the soundtrack locally and gives you a downloadable audio file in seconds.

*Your files never leave your browser — extraction happens entirely on your device.*

## Everyday uses

- **Students** — pull lecture audio to listen to on the go without the video.
- **Editors** — grab interview or podcast audio from a video file for editing.
- **Musicians** — isolate a song or riff from a video clip for practice.
- **Creators** — reuse a video's narration as a voiceover track elsewhere.
- **Note-takers** — extract meeting audio to transcribe or archive.

**Rule of thumb:** WAV is the safe choice for editing (every editor opens it); WebM audio is the smart choice for sharing and archiving. Use mono for speech — you won't hear the difference, but the file will be half the size.
