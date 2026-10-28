---
title: "3GP to MP4 Converter — Free Online, In Your Browser"
description: "Convert old 3GP phone videos to MP4 (H.264 + AAC) free in your browser — plays everywhere, no uploads, no watermarks, no sign-up."
category: video
date: 2026-10-28
draft: false
---

3GP was the video format of early camera phones, and most modern players and editors no longer handle it well. Convert your 3GP clips to MP4 (H.264 video + AAC audio), the format that plays on every phone, browser, and editor today. The conversion runs entirely in your browser with ffmpeg.wasm — no uploads, no watermarks, no sign-up. If a 3GP file uses a codec this in-browser build cannot decode, the tool reports the failure honestly instead of producing a broken file.

<div class="tool-shell" id="gmpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>3GP to MP4 Converter</h2>
<p>Turn old 3GP phone videos into universal MP4 — free, private, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="gmpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your 3GP file</p>
<div class="dropzone" id="gmpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your 3GP here</strong>
<span>or click to browse — one video at a time</span>
<input type="file" id="gmpFile" accept="video/*,.3gp,.3gpp">
</div>
<ul class="file-list" id="gmpList"></ul>
<div class="hint">Your file never leaves your browser — conversion runs locally with ffmpeg.wasm.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quality settings</p>
<div class="settings-panel">
<div class="preset-row" id="gmpPresets">
<button type="button" class="preset-chip active" data-q="23">⚖️ Balanced — CRF 23</button>
<button type="button" class="preset-chip" data-q="18">🖼️ High quality — CRF 18</button>
<button type="button" class="preset-chip" data-q="28">🗜️ Smaller file — CRF 28</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="gmpQ">Quality (CRF): <span class="val" id="gmpQVal">CRF 23</span></label>
<input type="range" id="gmpQ" min="15" max="35" value="23">
<div class="hint">H.264 CRF runs 0–51. Lower CRF = better quality, bigger file. 23 is the sweet spot.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="gmpAudio" checked><span></span> Keep audio (AAC 128k)</label>
<div class="hint">Uncheck to produce a silent video. Re-encoding is slower than a copy — please be patient.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gmpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
Convert to MP4
</button>
<button type="button" class="btn-pro-outline" id="gmpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="gmpProgWrap">
<div class="progress-bar"><i id="gmpProgBar"></i></div>
<div class="progress-text" id="gmpProgText">Working…</div>
</div>
<div class="results" id="gmpResults">
<p class="result-head">✅ Done — your MP4 video</p>
<div class="result-summary" id="gmpSummary"></div>
<div class="result-grid" id="gmpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as many videos as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="/js/video-fx.js"></script>

<script>
(function(){
  var qR = document.getElementById('gmpQ'), qV = document.getElementById('gmpQVal');
  var audT = document.getElementById('gmpAudio');
  var presets = document.getElementById('gmpPresets');
  ToolPro.themeToggle(document.getElementById('gmpShell'), document.getElementById('gmpTheme'));
  ToolPro.bindSlider(qR, qV, function(v){ return 'CRF ' + v; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qR.value = chip.dataset.q;
    qR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  VideoFX.init({ prefix: 'gmp', fxName: '3gp-to-mp4',
    buildArgs: function(ctx){
      var crf = String(qR.value);
      var args = ['-i', ctx.main.fsName,
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        '-pix_fmt', 'yuv420p',
        '-c:v', 'libx264', '-preset', 'veryfast', '-crf', crf];
      if(audT.checked) args = args.concat(['-c:a', 'aac', '-b:a', '128k']);
      else args.push('-an');
      args = args.concat(['-movflags', '+faststart', 'out.mp4']);
      return args;
    }
  });
})();
</script>

## How it works

Drop in a 3GP file, choose a quality preset, and hit **Convert to MP4**. The tool loads ffmpeg.wasm (single-thread build, the same engine the site's other video converters use), decodes the 3GP, and re-encodes it as H.264 video with AAC audio in an MP4 container with faststart metadata, so the file starts playing before it fully downloads. Even dimensions are enforced, since H.264 requires them. When conversion finishes, a result card offers the MP4 for preview and download. Your video never leaves your browser.

## Everyday uses

- **Old phone archives** — rescue 3GP clips from early camera phones so they play today.
- **Sharing** — MP4 uploads cleanly to WhatsApp, YouTube, and every social app.
- **Video editing** — MP4 imports into any editor without a codec hunt.
- **Family videos** — convert childhood clips for modern phones and TVs.
- **Backups** — move an obsolete format into one that will stay playable.
