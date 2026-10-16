---
title: "FLV to MP4 Converter — Free Online, In Your Browser"
description: "Convert FLV to MP4 free online in your browser — modern H.264 video with AAC audio, quality presets, no uploads, no watermarks."
category: video
date: 2026-10-16
draft: false
---

FLV is the old Flash Video format — most modern phones and players won't touch it. Convert your FLV files to MP4 (H.264 + AAC), the format that plays everywhere: phones, browsers, TVs, and social apps. The conversion runs entirely in your browser — no uploads, no watermarks, no sign-up.

<div class="tool-shell" id="fmpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>FLV to MP4 Converter</h2>
<p>Turn old Flash FLV videos into universal MP4 — free, private, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="fmpTheme">🌙 Dark</button>
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
<div class="dropzone" id="fmpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your FLV here</strong>
<span>or click to browse — one video at a time</span>
<input type="file" id="fmpFile" accept="video/*,.flv">
</div>
<ul class="file-list" id="fmpList"></ul>
<video id="fmpProbe" preload="metadata" style="display:none;"></video>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quality settings</p>
<div class="settings-panel">
<div class="preset-row" id="fmpPresets">
<button type="button" class="preset-chip active" data-q="23">⚖️ Balanced — CRF 23</button>
<button type="button" class="preset-chip" data-q="18">🖼️ High quality — CRF 18</button>
<button type="button" class="preset-chip" data-q="28">🗜️ Smaller file — CRF 28</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="fmpQ">Quality (CRF): <span class="val" id="fmpQVal">CRF 23</span></label>
<input type="range" id="fmpQ" min="16" max="32" value="23">
<div class="hint">Lower CRF = better quality, bigger file. 23 is the sweet spot.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="fmpAudio" checked><span></span> Keep audio (AAC 128k)</label>
<div class="hint">Uncheck to produce a silent video.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fmpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
Convert to MP4
</button>
<button type="button" class="btn-pro-outline" id="fmpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="fmpProgWrap">
<div class="progress-bar"><i id="fmpProgBar"></i></div>
<div class="progress-text" id="fmpProgText">Working…</div>
</div>
<div class="results" id="fmpResults">
<p class="result-head">✅ Done — your MP4 video</p>
<div class="result-summary" id="fmpSummary"></div>
<div class="result-grid" id="fmpGrid"></div>
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
  var qR = document.getElementById('fmpQ'), qV = document.getElementById('fmpQVal');
  var audT = document.getElementById('fmpAudio');
  var presets = document.getElementById('fmpPresets');
  ToolPro.bindSlider(qR, qV, function(v){ return 'CRF ' + v; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    qR.value = chip.dataset.q;
    qR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  VideoFX.init({ prefix: 'fmp', fxName: 'flv-to-mp4',
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

- **Step 1** — Drop in your FLV file. A video engine loads once in the background (~9 MB, then cached).
- **Step 2** — Pick a quality preset or set CRF yourself; choose whether to keep the audio track.
- **Step 3** — The video is re-encoded to H.264 + AAC MP4 locally with faststart (for web streaming) and downloads to your device.

## Everyday uses

- **Archivists** — rescue old Flash-era downloads into a playable format.
- **Creators** — make legacy clips editable in modern video editors.
- **Anyone** — FLV won't play on phones; MP4 plays everywhere.

**Rule of thumb:** CRF 23 gives transparent quality for most FLV sources — go to 18 only if the original is unusually sharp.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/flv-to-mp4-converter.md tool_name=read]
