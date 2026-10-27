---
title: "FLV to MOV Converter — Free Online, In Your Browser"
description: "Convert FLV Flash videos to MOV (H.264 + AAC) free in your browser — Apple-friendly files, no uploads, no watermarks, no sign-up."
category: video
date: 2026-10-27
draft: false
---

FLV is the old Flash Video format — modern devices and editors have left it behind. Convert your FLV files to MOV (H.264 video + AAC audio), the format macOS, iOS, and video editors handle natively. The conversion runs entirely in your browser with ffmpeg.wasm — no uploads, no watermarks, no sign-up. One honest note: MOV uses H.264 + AAC rather than WebM's VP9 + Opus, because VP9 inside a MOV container is not playable in QuickTime or most editors — H.264 is the codec MOV was built for. An FLV using a codec this ffmpeg build cannot decode will fail with a clear error rather than a fake file.

<div class="tool-shell" id="fmoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>FLV to MOV Converter</h2>
<p>Turn old Flash FLV videos into Apple-friendly MOV — free, private, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="fmoTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your FLV file</p>
<div class="dropzone" id="fmoDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your FLV here</strong>
<span>or click to browse — one video at a time</span>
<input type="file" id="fmoFile" accept="video/*,.flv">
</div>
<ul class="file-list" id="fmoList"></ul>
<div class="hint">Your file never leaves your browser — conversion runs locally with ffmpeg.wasm.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quality settings</p>
<div class="settings-panel">
<div class="preset-row" id="fmoPresets">
<button type="button" class="preset-chip active" data-q="23">⚖️ Balanced — CRF 23</button>
<button type="button" class="preset-chip" data-q="18">🖼️ High quality — CRF 18</button>
<button type="button" class="preset-chip" data-q="28">🗜️ Smaller file — CRF 28</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="fmoQ">Quality (CRF): <span class="val" id="fmoQVal">CRF 23</span></label>
<input type="range" id="fmoQ" min="15" max="35" value="23">
<div class="hint">H.264 CRF runs 0–51. Lower CRF = better quality, bigger file. 23 is the sweet spot.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="fmoAudio" checked><span></span> Keep audio (AAC 128k)</label>
<div class="hint">Uncheck to produce a silent video. Encoding is slower than a copy — please be patient.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fmoBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
Convert to MOV
</button>
<button type="button" class="btn-pro-outline" id="fmoClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="fmoProgWrap">
<div class="progress-bar"><i id="fmoProgBar"></i></div>
<div class="progress-text" id="fmoProgText">Working…</div>
</div>
<div class="results" id="fmoResults">
<p class="result-head">✅ Done — your MOV video</p>
<div class="result-summary" id="fmoSummary"></div>
<div class="result-grid" id="fmoGrid"></div>
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
  var qR = document.getElementById('fmoQ'), qV = document.getElementById('fmoQVal');
  var audT = document.getElementById('fmoAudio');
  var presets = document.getElementById('fmoPresets');
  ToolPro.themeToggle(document.getElementById('fmoShell'), document.getElementById('fmoTheme'));
  ToolPro.bindSlider(qR, qV, function(v){ return 'CRF ' + v; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qR.value = chip.dataset.q;
    qR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  VideoFX.init({ prefix: 'fmo', fxName: 'flv-to-mov',
    buildArgs: function(ctx){
      var crf = String(qR.value);
      var args = ['-i', ctx.main.fsName,
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        '-pix_fmt', 'yuv420p',
        '-c:v', 'libx264', '-preset', 'veryfast', '-crf', crf];
      if(audT.checked) args = args.concat(['-c:a', 'aac', '-b:a', '128k']);
      else args.push('-an');
      args = args.concat(['-movflags', '+faststart', 'out.mov']);
      return args;
    }
  });
})();
</script>

## How it works

Drop in an FLV file, choose a quality preset, and hit **Convert to MOV**. The tool loads ffmpeg.wasm (single-thread build, the same engine the site's other video converters use), decodes the FLV, and re-encodes it as H.264 video with AAC audio in a MOV container with faststart metadata — even dimensions are enforced, since H.264 requires them. When conversion finishes, a result card offers the MOV for preview and download. If the FLV uses a codec this in-browser ffmpeg build cannot decode, the tool reports the failure honestly instead of producing a broken file. Your video never leaves your browser.

**Why MOV?** It is Apple's native container: it drops straight into QuickTime, iMovie, and Final Cut Pro, and plays on every Mac and iPhone without extra software.

## Everyday uses

- **Rescuing old Flash videos** — convert archived FLV clips so they play on Apple devices.
- **Video editing** — MOV files import cleanly into iMovie and Final Cut Pro.
- **Sharing smaller files** — H.264 squeezes good quality into a smaller upload.
- **Course and demo videos** — convert legacy recordings for today's editors.
- **Archiving** — move an obsolete format into one that will stay playable.
