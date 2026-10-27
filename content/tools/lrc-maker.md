---
title: "LRC Maker — Free Lyrics Timestamp Tool for .lrc Files"
description: "Write lyrics line by line, set a timestamp per line, and download a standard .lrc file — with title and artist tags, live preview, and auto-fill. Free, in browser."
category: audio
date: 2026-10-27
draft: false
---

An .lrc file pairs each lyric line with a timestamp so players can show lyrics in sync with the music. This maker keeps it simple: paste your lyrics line by line, set a timestamp for each line, and download a standard .lrc file with title and artist tags. The timestamps are manual — you type them, or auto-fill them at an even spacing — so there are no audio-sync claims here: this tool does not listen to your song or detect beats, it just formats the file correctly.

<div class="tool-shell" id="lrcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>LRC Maker</h2>
<p>Lyrics + manual timestamps = a standard .lrc file, ready for any player.</p>
</div>
<button type="button" class="theme-toggle" id="lrcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add song info &amp; lyrics</p>
<div class="settings-grid">
<div class="setting">
<label for="lrcTitle">Song title [ti:]</label>
<input type="text" id="lrcTitle" class="tool-input" placeholder="e.g. Midnight Drive" autocomplete="off">
</div>
<div class="setting">
<label for="lrcArtist">Artist [ar:]</label>
<input type="text" id="lrcArtist" class="tool-input" placeholder="e.g. The Wanderers" autocomplete="off">
</div>
<div class="setting">
<label for="lrcAlbum">Album [al:] (optional)</label>
<input type="text" id="lrcAlbum" class="tool-input" placeholder="e.g. Night Roads" autocomplete="off">
</div>
</div>
<div class="setting" style="margin-top:.8rem;">
<label for="lrcLyrics">Lyrics — one line per row</label>
<textarea id="lrcLyrics" class="tool-input" rows="8" placeholder="First line of the song&#10;Second line of the song&#10;Third line…" style="resize:vertical;"></textarea>
<div class="hint">Blank lines are skipped. Edit the lyrics here and the timestamp table below rebuilds.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Set timestamps</p>
<div class="settings-panel">
<div class="preset-row" id="lrcPresets">
<button type="button" class="preset-chip" data-start="0" data-step="4">🎵 Auto-fill — every 4 sec</button>
<button type="button" class="preset-chip" data-start="0" data-step="3">🎵 Auto-fill — every 3 sec</button>
<button type="button" class="preset-chip" data-start="5" data-step="5">🎵 Auto-fill — start 5s, every 5 sec</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="lrcStart">Auto-fill start time (seconds)</label>
<input type="number" id="lrcStart" class="tool-input" value="0" min="0" step="0.5">
</div>
<div class="setting">
<label for="lrcStep">Seconds between lines</label>
<input type="number" id="lrcStep" class="tool-input" value="4" min="0.5" step="0.5">
</div>
<div class="setting">
<button type="button" class="btn-pro-outline" id="lrcAutoBtn" style="margin-top:1.4rem;">Auto-fill timestamps</button>
</div>
</div>
<div class="hint">Timestamps are manual — this tool does not listen to audio or detect beats. Auto-fill just spaces them evenly; fine-tune each line by hand.</div>
</div>
<div class="setting" style="margin-top:.8rem;">
<label>Line timestamps (mm:ss.cc)</label>
<div id="lrcRows"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="lrcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download .lrc File
</button>
<button type="button" class="btn-pro-outline" id="lrcCopy">Copy .lrc text</button>
<button type="button" class="btn-pro-outline" id="lrcClear">Clear</button>
</div>
<div class="progress-wrap" id="lrcProgWrap">
<div class="progress-bar"><i id="lrcProgBar"></i></div>
<div class="progress-text" id="lrcProgText">Building…</div>
</div>
<div class="results show" id="lrcResults">
<p class="result-head">🎵 Live .lrc preview</p>
<div class="result-card">
<textarea id="lrcOut" class="tool-output" rows="10" readonly placeholder="Your .lrc file preview appears here…" style="resize:vertical;font-family:monospace;"></textarea>
<div class="r-stats" id="lrcStats" style="margin-top:.4rem;"></div>
</div>
<div class="result-summary" id="lrcSummary">Paste lyrics above, set a timestamp per line, and the preview updates live.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Make .lrc files for your whole library — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('lrcShell');
  ToolPro.themeToggle(shell, document.getElementById('lrcTheme'));
  var lyricsEl = document.getElementById('lrcLyrics');
  var rowsEl = document.getElementById('lrcRows');
  var outEl = document.getElementById('lrcOut');
  var btn = document.getElementById('lrcBtn');
  var timeInputs = [];
  function lines(){
    return lyricsEl.value.split('\n').map(function(s){ return s.trim(); }).filter(function(s){ return s.length > 0; });
  }
  function pad(n, w){
    var s = String(n);
    while(s.length < w) s = '0' + s;
    return s;
  }
  function fmtTime(totalSec){
    var m = Math.floor(totalSec / 60);
    var s = Math.floor(totalSec % 60);
    var cs = Math.round((totalSec - Math.floor(totalSec)) * 100);
    if(cs === 100){ cs = 0; s += 1; if(s === 60){ s = 0; m += 1; } }
    return pad(m, 2) + ':' + pad(s, 2) + '.' + pad(cs, 2);
  }
  function parseTime(str){
    var m = String(str).trim().match(/^(\d+):(\d{1,2})(?:\.(\d{1,2}))?$/);
    if(!m) return null;
    var mm = parseInt(m[1], 10), ss = parseInt(m[2], 10);
    if(ss >= 60) return null;
    var cs = m[3] ? parseInt((m[3] + '0').slice(0, 2), 10) : 0;
    return mm * 60 + ss + cs / 100;
  }
  function rebuild(){
    var ls = lines();
    var old = timeInputs.map(function(el){ return el.value; });
    rowsEl.innerHTML = '';
    timeInputs = [];
    ls.forEach(function(line, i){
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:.5rem;align-items:center;margin:.3rem 0;';
      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'tool-input';
      input.style.cssText = 'max-width:110px;';
      input.placeholder = 'mm:ss.cc';
      input.value = old[i] || fmtTime(i * 4);
      input.addEventListener('input', updatePreview);
      var span = document.createElement('span');
      span.textContent = line;
      span.style.cssText = 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      span.title = line;
      row.appendChild(input);
      row.appendChild(span);
      rowsEl.appendChild(row);
      timeInputs.push(input);
    });
    updatePreview();
  }
  function buildLrc(){
    var ls = lines();
    var out = [];
    var ti = document.getElementById('lrcTitle').value.trim();
    var ar = document.getElementById('lrcArtist').value.trim();
    var al = document.getElementById('lrcAlbum').value.trim();
    if(ti) out.push('[ti:' + ti + ']');
    if(ar) out.push('[ar:' + ar + ']');
    if(al) out.push('[al:' + al + ']');
    ls.forEach(function(line, i){
      var raw = timeInputs[i] ? timeInputs[i].value : '';
      var t = parseTime(raw);
      var stamp = t === null ? raw : fmtTime(t);
      out.push('[' + stamp + ']' + line);
    });
    return out.join('\n');
  }
  function updatePreview(){
    var text = buildLrc();
    outEl.value = text;
    var ls = lines();
    var bad = timeInputs.filter(function(el){ return parseTime(el.value) === null; }).length;
    document.getElementById('lrcStats').textContent = ls.length + ' line' + (ls.length === 1 ? '' : 's') +
      (bad ? ' · ' + bad + ' timestamp' + (bad === 1 ? '' : 's') + ' look invalid (use mm:ss.cc)' : ' · all timestamps valid');
    btn.disabled = !ls.length;
  }
  lyricsEl.addEventListener('input', rebuild);
  ['lrcTitle', 'lrcArtist', 'lrcAlbum'].forEach(function(id){
    document.getElementById(id).addEventListener('input', updatePreview);
  });
  document.getElementById('lrcPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('lrcStart').value = chip.dataset.start;
    document.getElementById('lrcStep').value = chip.dataset.step;
    autofill();
  });
  function autofill(){
    var start = parseFloat(document.getElementById('lrcStart').value) || 0;
    var step = parseFloat(document.getElementById('lrcStep').value) || 4;
    timeInputs.forEach(function(el, i){ el.value = fmtTime(start + i * step); });
    updatePreview();
    ToolPro.toast('Timestamps auto-filled', 'ok');
  }
  document.getElementById('lrcAutoBtn').addEventListener('click', autofill);
  document.getElementById('lrcCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Add lyrics first.', 'err'); return; }
    ToolPro.copyText(outEl.value, '.lrc text copied to clipboard');
  });
  btn.addEventListener('click', function(){
    var text = buildLrc();
    if(!lines().length){ ToolPro.toast('Add lyrics first.', 'err'); return; }
    var name = (document.getElementById('lrcTitle').value.trim() || 'lyrics').replace(/[^\w\- ]+/g, '').replace(/\s+/g, '-').toLowerCase() || 'lyrics';
    var wrap = document.getElementById('lrcProgWrap');
    wrap.classList.add('show');
    document.getElementById('lrcProgBar').style.width = '100%';
    ToolPro.download('data:text/plain;charset=utf-8,' + encodeURIComponent(text), name + '.lrc');
    setTimeout(function(){ wrap.classList.remove('show'); }, 300);
    document.getElementById('lrcSummary').textContent = 'Downloaded ' + name + '.lrc — most music players pick it up automatically when it sits next to the audio file with the same name.';
    ToolPro.toast('.lrc file downloaded', 'ok');
  });
  document.getElementById('lrcClear').addEventListener('click', function(){
    lyricsEl.value = '';
    ['lrcTitle', 'lrcArtist', 'lrcAlbum'].forEach(function(id){ document.getElementById(id).value = ''; });
    rebuild();
  });
  rebuild();
})();
</script>

## How it works

Paste your lyrics — one line per row — and add the song title, artist, and album if you want them as [ti:], [ar:], and [al:] tags. Each line gets a timestamp input in mm:ss.cc format; auto-fill spaces them evenly from a start time, then you fine-tune each one by hand. The live preview shows exactly what the .lrc file will contain, and the download button saves it as a .lrc text file. Name it the same as your audio file and most players (and many karaoke apps) will load it automatically.

**No audio-sync claims:** this tool never listens to your music. Timestamps are typed by you, so accuracy depends on your own timing — play the song, note when each line starts, and type those times in.

## Everyday uses

- **Karaoke nights** — prepare synced lyrics for songs your player does not cover.
- **Language learners** — follow along line by line while listening.
- **Cover artists** — bundle .lrc files with your releases for lyric-display players.
- **Choirs and bands** — share timed lyric sheets for rehearsal tracks.
- **Music libraries** — add lyrics to local collections that streaming apps ignore.

**Format note:** the standard .lrc timestamp is [mm:ss.cc] — minutes, seconds, hundredths. This tool normalizes what you type into that format, so [0:5.2] becomes [00:05.20].
