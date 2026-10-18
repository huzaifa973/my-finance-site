---
title: "AVI to MP4 Converter — Free Online, In Your Browser"
description: "Convert AVI video to MP4 free online — H.264 video with AAC audio, quality presets, no uploads, no watermarks."
category: video
date: 2026-10-18
draft: false
---

AVI is an old Windows format that modern phones and browsers often refuse to play. Convert your AVI files to MP4 (H.264 + AAC), the format that plays on every phone, browser, TV, and social app. The conversion runs entirely in your browser — no uploads, no watermarks, no sign-up.

<div class="tool-shell" id="a2mShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>AVI to MP4 Converter</h2>
<p>Turn old AVI files into universal MP4 — free, private, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="a2mTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your AVI file</p>
<div class="dropzone" id="a2mDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your AVI here</strong>
<span>or click to browse — one video at a time</span>
<input type="file" id="a2mFile" accept="video/*,.avi">
</div>
<ul class="file-list" id="a2mList"></ul>
<video id="a2mProbe" preload="metadata" style="display:none;"></video>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quality settings</p>
<div class="settings-panel">
<div class="preset-row" id="a2mPresets">
<button type="button" class="preset-chip active" data-q="23">⚖️ Balanced — CRF 23</button>
<button type="button" class="preset-chip" data-q="18">🖼️ High quality — CRF 18</button>
<button type="button" class="preset-chip" data-q="28">🗜️ Smaller file — CRF 28</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="a2mQ">Quality (CRF): <span class="val" id="a2mQVal">CRF 23</span></label>
<input type="range" id="a2mQ" min="16" max="32" value="23">
<div class="hint">Lower CRF = better quality, bigger file. 23 is the sweet spot.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="a2mAudio" checked><span></span> Keep audio (AAC 128k)</label>
<div class="hint">Uncheck to produce a silent video.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="a2mBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
Convert to MP4
</button>
<button type="button" class="btn-pro-outline" id="a2mClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="a2mProgWrap">
<div class="progress-bar"><i id="a2mProgBar"></i></div>
<div class="progress-text" id="a2mProgText">Working…</div>
</div>
<div class="results" id="a2mResults">
<p class="result-head">✅ Done — your MP4 video</p>
<div class="result-summary" id="a2mSummary"></div>
<div class="result-grid" id="a2mGrid"></div>
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
  var qR = document.getElementById('a2mQ'), qV = document.getElementById('a2mQVal');
  var audT = document.getElementById('a2mAudio');
  var presets = document.getElementById('a2mPresets');
  ToolPro.bindSlider(qR, qV, function(v){ return 'CRF ' + v; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qR.value = chip.dataset.q;
    qR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  VideoFX.init({ prefix: 'a2m', fxName: 'avi-to-mp4',
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

- **Step 1** — Drop in your AVI file. A video engine loads once in the background (~9 MB, then cached).
- **Step 2** — Pick a quality preset or set CRF yourself; choose whether to keep the audio track.
- **Step 3** — The video is re-encoded to H.264 + AAC MP4 locally with faststart (for web streaming) and downloads to your device.

## Everyday uses

- **Archive diggers** — rescue old AVI files from hard drives and DVDs so modern devices can play them.
- **Windows users** — turn AVI screen captures and camera dumps into shareable MP4.
- **Creators** — convert legacy footage for YouTube, Instagram, and WhatsApp.
- **Families** — make old home videos playable on phones and smart TVs.

**Rule of thumb:** CRF 23 gives transparent quality for most AVI sources — many old AVIs are already low quality, so 28 saves space without visible loss.
