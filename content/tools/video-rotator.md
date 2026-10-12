---
title: "Rotate Video Online Free — 90°, 180°, Flip Horizontal/Vertical"
description: "Rotate or flip any video free online: 90° clockwise, counter-clockwise, 180°, mirror horizontal or vertical. In your browser, no sign-up, no watermark."
category: video
date: 2026-10-12
draft: false
---

Shot your video sideways? **Rotate** it back to upright, flip a mirrored recording, or turn a clip upside down for effect — permanently baked into a new file.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Rotator & Flipper</h2>
<p>Fix sideways phone videos — rotate 90° or 180°, or mirror them.</p>
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
<label for="cvRot">Rotation</label>
<select id="cvRot">
<option value="transpose=1" selected>90° clockwise</option>
<option value="transpose=2">90° counter-clockwise</option>
<option value="transpose=1,transpose=1">180° (upside down)</option>
<option value="hflip">Flip horizontal (mirror)</option>
<option value="vflip">Flip vertical</option>
</select>

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
VideoFX.init({ prefix: 'cv', fxName: 'rotated', buildArgs: function(ctx) {
  var v = document.getElementById('cvRot').value;
  return ['-i', ctx.main.fsName, '-vf', v, '-c:v','libx264','-preset','veryfast','-crf','23', '-c:a', 'copy', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video.**
2. **Pick the rotation** — clockwise fixes most sideways phone clips.
3. **Process & download** — the new orientation is permanent in the file.

## About this tool

Phones store orientation as metadata, and some players ignore it — so a clip that looks fine on your phone plays sideways elsewhere. Rotating with this tool rewrites the actual pixels, so the video is upright in every player, editor and platform, forever.

Mirroring (horizontal flip) is what makes front-camera videos look the way you saw yourself while recording — handy when text on a shirt reads backwards.

## Frequently asked questions

**Does rotating reduce quality?**
The video is re-encoded at high quality (CRF 23); for normal clips the difference is invisible. Audio is copied untouched.

**Which way is my video rotated?**
If heads point left, choose 90° clockwise; if heads point right, counter-clockwise. Preview and re-run if needed.

**Are my videos uploaded?**
No — everything runs in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
