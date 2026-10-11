---
title: "Free Video Metadata Viewer — Duration, Resolution, Codec"
description: "Instantly read any video's metadata: duration, resolution, aspect ratio, bitrate, container, and codec support. Copy the report as JSON, CSV, or text. Free, private, 100% in your browser."
category: video
date: 2026-10-11
draft: false
---

Wondering why a video won't play, or whether it's HD or 4K before you upload it? Drop in any video file and get a full technical report — duration, resolution, aspect ratio, estimated bitrate, container format, and which codecs your browser supports. Everything is read locally in your browser; your video is never uploaded anywhere.

<style>
#mdvShell .meta-table-wrap{overflow-x:auto;margin:.75rem 0}
#mdvShell .meta-table{width:100%;border-collapse:collapse;font-size:.92rem}
#mdvShell .meta-table th,#mdvShell .meta-table td{text-align:left;padding:.55rem .7rem;border-bottom:1px solid rgba(148,163,184,.35);vertical-align:top}
#mdvShell .meta-table th{width:38%;font-weight:600;white-space:nowrap}
#mdvShell .meta-table td{word-break:break-word}
</style>
<div class="tool-shell" id="mdvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM9 13v6h2v-2h2c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2H9zm2 2v1h2v-1H9v-1h2v1z" transform="translate(0,0)"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Metadata Viewer</h2>
<p>Read duration, resolution, bitrate, container &amp; codec support from any video — instantly.</p>
</div>
<button type="button" class="theme-toggle" id="mdvTheme">🌙 Dark</button>
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
<div class="dropzone" id="mdvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video file here</strong>
<span>or click to browse — MP4, WebM, MOV, MKV · one file at a time</span>
<input type="file" id="mdvFile" accept="video/*">
</div>
<ul class="file-list" id="mdvList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Report settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="mdvFmt">Copy format</label>
<select id="mdvFmt">
<option value="json" selected>JSON</option>
<option value="csv">CSV</option>
<option value="text">Plain text</option>
</select>
<div class="hint">Choose the format for the "Copy report" button in step 3.</div>
</div>
<div class="setting">
<label>Codec check</label>
<div class="toggle-row">
<span class="t-label">Show browser codec support <small>(canPlayType)</small></span>
<label class="toggle"><input type="checkbox" id="mdvCodec" checked><span class="track"></span></label>
</div>
<div class="hint">Tests whether YOUR browser can play H.264, HEVC, VP9, and AV1 — handy before embedding video on a site.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Read metadata</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mdvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
Read Metadata
</button>
<button type="button" class="btn-pro-outline" id="mdvCopy" disabled>📋 Copy Report</button>
<button type="button" class="btn-pro-outline" id="mdvClear" disabled>Remove</button>
</div>
<div class="progress-wrap" id="mdvProgWrap">
<div class="progress-bar"><i id="mdvProgBar"></i></div>
<div class="progress-text" id="mdvProgText">Reading…</div>
</div>
<div class="results" id="mdvResults">
<p class="result-head">✅ Done — video metadata</p>
<div class="result-summary" id="mdvSummary"></div>
<div class="meta-table-wrap"><table class="meta-table" id="mdvTable"></table></div>
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
  var shell = document.getElementById('mdvShell');
  ToolPro.themeToggle(shell, document.getElementById('mdvTheme'));

  var file = null, fileName = '';
  var listEl = document.getElementById('mdvList');
  var btn = document.getElementById('mdvBtn');
  var copyBtn = document.getElementById('mdvCopy');
  var clearBtn = document.getElementById('mdvClear');
  var fmtSel = document.getElementById('mdvFmt');
  var codecChk = document.getElementById('mdvCodec');
  var lastReport = null;
  var vidEl = null;

  function refreshButtons(){
    var on = !!file;
    btn.disabled = !on; clearBtn.disabled = !on;
    copyBtn.disabled = !lastReport;
  }

  ToolPro.dropzone(document.getElementById('mdvDrop'), {
    multiple: false,
    accept: 'video/*',
    maxFiles: 1,
    onFiles: function(arr){
      if(vidEl){ URL.revokeObjectURL(vidEl.src); vidEl = null; }
      file = arr[0]; fileName = file.name;
      lastReport = null;
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; lastReport = null; refreshButtons(); });
      document.getElementById('mdvResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — hit Read Metadata', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    if(vidEl){ URL.revokeObjectURL(vidEl.src); vidEl = null; }
    file = null; lastReport = null; listEl.innerHTML = '';
    document.getElementById('mdvResults').classList.remove('show');
    refreshButtons();
  });

  function gcd(a, b){ return b ? gcd(b, a % b) : a; }
  function fmtDur(sec){
    if(!isFinite(sec) || sec < 0) return 'Unknown';
    sec = Math.round(sec);
    var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    function p(n){ return (n < 10 ? '0' : '') + n; }
    return h > 0 ? h + ':' + p(m) + ':' + p(s) : m + ':' + p(s);
  }
  function esc(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function codecSupport(){
    var v = document.createElement('video');
    var tests = [
      ['H.264 (AVC)', 'video/mp4; codecs="avc1.42E01E"'],
      ['H.265 (HEVC)', 'video/mp4; codecs="hvc1.1.6.L93.B0"'],
      ['VP9', 'video/webm; codecs="vp9"'],
      ['AV1', 'video/mp4; codecs="av01.0.05M.08"'],
      ['Theora', 'video/ogg; codecs="theora"']
    ];
    return tests.map(function(t){
      var r = '';
      try{ r = v.canPlayType(t[1]); }catch(e){ r = ''; }
      return { name: t[0], support: r === 'probably' ? 'Yes (probably)' : (r === 'maybe' ? 'Maybe' : 'No') };
    });
  }

  btn.addEventListener('click', function(){
    if(!file) return;
    var wrap = document.getElementById('mdvProgWrap');
    var resBox = document.getElementById('mdvResults');
    var table = document.getElementById('mdvTable');
    btn.disabled = true;
    wrap.classList.add('show'); resBox.classList.remove('show'); table.innerHTML = '';
    document.getElementById('mdvProgBar').style.width = '40%';
    document.getElementById('mdvProgText').textContent = 'Reading video headers…';

    if(vidEl) URL.revokeObjectURL(vidEl.src);
    vidEl = document.createElement('video');
    vidEl.preload = 'metadata';
    vidEl.muted = true;
    var url = URL.createObjectURL(file);
    var done = false;

    function finish(ok){
      if(done) return; done = true;
      wrap.classList.remove('show');
      btn.disabled = false;
      if(!ok){
        ToolPro.toast('Could not read metadata — this file may not be a playable video.', 'err');
        return;
      }
      var w = vidEl.videoWidth, h = vidEl.videoHeight;
      var dur = vidEl.duration;
      var size = file.size;
      var bitrate = (isFinite(dur) && dur > 0) ? Math.round(size * 8 / dur) : null;
      var ext = (fileName.split('.').pop() || '').toLowerCase();
      var container = file.type || ('video/' + ext);
      var ar = '—';
      if(w && h){
        var g = gcd(w, h);
        ar = (w / g) + ':' + (h / g) + ' (' + (w / h).toFixed(3) + ')';
      }
      var codecs = codecChk.checked ? codecSupport() : [];

      lastReport = {
        file_name: fileName,
        container: container,
        file_size_bytes: size,
        file_size: ToolPro.fmtBytes(size),
        duration_seconds: isFinite(dur) ? Math.round(dur * 100) / 100 : null,
        duration: fmtDur(dur),
        width_px: w || null,
        height_px: h || null,
        resolution: w && h ? w + '×' + h : 'Unknown',
        aspect_ratio: ar,
        estimated_bitrate_bps: bitrate,
        estimated_bitrate: bitrate ? (bitrate >= 1000000 ? (bitrate / 1000000).toFixed(2) + ' Mbps' : Math.round(bitrate / 1000) + ' kbps') : 'Unknown'
      };
      if(codecs.length){
        lastReport.browser_codec_support = {};
        codecs.forEach(function(c){ lastReport.browser_codec_support[c.name] = c.support; });
      }

      var rows = [
        ['File name', fileName],
        ['Container / type', container],
        ['File size', ToolPro.fmtBytes(size)],
        ['Duration', fmtDur(dur) + (isFinite(dur) ? ' (' + dur.toFixed(2) + ' s)' : '')],
        ['Resolution', w && h ? w + ' × ' + h + ' px' : 'Unknown'],
        ['Aspect ratio', ar],
        ['Estimated bitrate', lastReport.estimated_bitrate]
      ];
      codecs.forEach(function(c){
        rows.push(['▶ ' + c.name, c.support]);
      });
      table.innerHTML = rows.map(function(r){
        return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>';
      }).join('');
      var q = w && h ? (h >= 2160 ? '4K Ultra HD' : h >= 1080 ? 'Full HD (1080p)' : h >= 720 ? 'HD (720p)' : h >= 480 ? 'SD (480p)' : 'Low resolution') : 'Unknown quality';
      document.getElementById('mdvSummary').textContent =
        '🎉 ' + (w && h ? w + '×' + h + ' — ' + q : 'Metadata read') + ' · ' + fmtDur(dur) + ' · ' + ToolPro.fmtBytes(size) + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      refreshButtons();
      ToolPro.toast('Metadata read', 'ok');
    }

    vidEl.onloadedmetadata = function(){ finish(true); };
    vidEl.onerror = function(){ finish(false); };
    setTimeout(function(){ if(!done) finish(!!(vidEl.videoWidth || isFinite(vidEl.duration))); }, 8000);
    vidEl.src = url;
  });

  function toCSV(r){
    var lines = ['field,value'];
    function q(v){ return '"' + String(v).replace(/"/g, '""') + '"'; }
    Object.keys(r).forEach(function(k){
      var v = r[k];
      if(v && typeof v === 'object'){
        Object.keys(v).forEach(function(k2){ lines.push(q(k + '.' + k2) + ',' + q(v[k2])); });
      } else {
        lines.push(q(k) + ',' + q(v === null ? '' : v));
      }
    });
    return lines.join('\n');
  }
  function toText(r){
    var lines = [];
    Object.keys(r).forEach(function(k){
      var v = r[k];
      if(v && typeof v === 'object'){
        lines.push(k + ':');
        Object.keys(v).forEach(function(k2){ lines.push('  ' + k2 + ': ' + v[k2]); });
      } else {
        lines.push(k + ': ' + (v === null ? '' : v));
      }
    });
    return lines.join('\n');
  }

  copyBtn.addEventListener('click', function(){
    if(!lastReport) return;
    var f = fmtSel.value;
    var out = f === 'csv' ? toCSV(lastReport) : f === 'text' ? toText(lastReport) : JSON.stringify(lastReport, null, 2);
    ToolPro.copyText(out, 'Report copied as ' + f.toUpperCase());
  });

  refreshButtons();
})();
</script>

## How it works

1. Your video file is loaded into a hidden player element in your browser — it's never uploaded.
2. The browser reads the file's headers directly: duration, pixel dimensions, container type, and file size. Bitrate is estimated from file size ÷ duration (exact bitrate needs a full file scan, which this tool skips to stay instant).
3. A codec-support panel tests which video codecs (H.264, HEVC, VP9, AV1) your browser can play, then the whole report is shown in a table you can copy as JSON, CSV, or plain text.

## Everyday uses

- **Video creators** — check a recording is actually 1080p/4K before uploading to YouTube.
- **Web developers** — verify codec support so embedded videos play for your visitors.
- **Marketers** — confirm duration and size limits before posting to social platforms.
- **Troubleshooting** — a video that won't play often has an unsupported codec; this tool shows you which ones work.
- **Archivists** — quickly catalog a folder of videos with copy-paste metadata.

## FAQ

**Is the bitrate exact?**
It's an estimate (file size ÷ duration). True bitrate requires scanning the whole file, but the estimate is accurate enough for judging quality and upload size.

**Why doesn't it show the exact codec of my file?**
Browsers expose container and dimensions from headers, but not the internal codec string, without decoding the whole file. The tool shows what your browser can decode instead, which answers the more practical question: "will it play?"

**Which formats can I check?**
Any video your browser can open: MP4, WebM, MOV, OGG, and MKV in most browsers.

**Is my video uploaded anywhere?**
Never. The file is read locally from your device — files never leave your browser.

[END OF FILE]
