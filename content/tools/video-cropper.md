---
title: "Crop Video Online Free — Square 1:1, 16:9, 9:16 & 4:5"
description: "Crop any video to square (1:1), widescreen (16:9), vertical (9:16) or portrait (4:5) free online — ready for Instagram, TikTok, Reels and Shorts. No watermark."
category: video
date: 2026-10-12
draft: false
---

One video, many shapes: **crop** landscape footage into a vertical 9:16 for TikTok and Reels, a square 1:1 for feeds, or clean 16:9 for YouTube — centered automatically.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Cropper</h2>
<p>Crop to the shape each platform wants — square, vertical, widescreen.</p>
</div>
<button type="button" class="theme-toggle" id="cvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your video file</p>
<div class="dropzone" id="cvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your file here</strong>
<span>or click to browse</span>
<input type="file" id="cvFile" accept="video/*">
</div>
<ul class="file-list" id="cvList"></ul>
<video id="cvProbe" preload="metadata" style="display:none;"></video>
</div>

<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvShape">Crop shape</label>
<select id="cvShape">
<option value="crop=min(iw,ih):min(iw,ih)">Square — 1:1 (Instagram feed)</option>
<option value="crop=min(iw,ih*9/16):min(ih,iw*16/9)" selected>Vertical — 9:16 (TikTok, Reels, Shorts)</option>
<option value="crop=min(iw,ih*16/9):min(ih,iw*9/16)">Widescreen — 16:9 (YouTube)</option>
<option value="crop=min(iw,ih*4/5):min(ih,iw*5/4)">Portrait — 4:5 (Instagram portrait)</option>
</select>
<div class="hint">The crop is taken from the center of the frame.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Process &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cvBtn" disabled>Process Video</button>
<button type="button" class="btn-pro-outline" id="cvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="cvProgWrap">
<div class="progress-bar"><i id="cvProgBar"></i></div>
<div class="progress-text" id="cvProgText">Working…</div>
</div>
<div class="results" id="cvResults">
<p class="result-head">✅ Done — your video is ready</p>
<div class="result-summary" id="cvSummary"></div>
<div class="result-grid" id="cvGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — your files are never uploaded anywhere.</p>
</div>
</div>
</div>

<script src="/js/video-fx.js"></script>
<script>
VideoFX.init({ prefix: 'cv', fxName: 'cropped', buildArgs: function(ctx) {
  var v = document.getElementById('cvShape').value;
  return ['-i', ctx.main.fsName, '-vf', v, '-c:v','libx264','-preset','veryfast','-crf','23', '-c:a', 'copy', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video.**
2. **Pick a shape** — 9:16 for TikTok/Reels/Shorts, 1:1 or 4:5 for Instagram feed, 16:9 for YouTube.
3. **Process & download.**

## About this tool

Every platform rewards videos that fill its frame: vertical video takes the whole phone screen on TikTok and Reels, while letterboxed landscape clips shrink into a strip. Cropping reframes your footage for the destination. The crop is centered, which suits most footage where the subject is in the middle.

Cropping a small area out of a low-resolution video can look soft — start from the highest-resolution original you have.

## Frequently asked questions

**Can I choose which part to keep?**
This tool crops the center, which fits most videos. For off-center subjects, a desktop editor gives manual control.

**Does cropping change the file size?**
Usually smaller — fewer pixels to encode. Quality per pixel stays the same (CRF 23 re-encode, audio untouched).

**Are my videos uploaded?**
No — cropping runs 100% in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
