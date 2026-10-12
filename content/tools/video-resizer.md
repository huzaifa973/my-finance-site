---
title: "Resize Video Online Free — 1080p, 720p, 480p & 360p"
description: "Resize any video to 1080p, 720p, 480p or 360p free online — smaller files for sharing and uploading, aspect ratio preserved. In your browser, no watermark."
category: video
date: 2026-10-12
draft: false
---

Big camera files are slow to upload and share. **Resize** your video to a smaller width — the height scales automatically to keep the correct shape — for WhatsApp, email, Discord and faster uploads anywhere.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Resizer</h2>
<p>Shrink video dimensions for faster uploads and smaller files.</p>
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
<label for="cvW">Target width</label>
<select id="cvW">
<option value="1920">1920 px — Full HD 1080p</option>
<option value="1280" selected>1280 px — HD 720p</option>
<option value="854">854 px — 480p</option>
<option value="640">640 px — 360p</option>
<option value="480">480 px — small</option>
</select>
<div class="hint">Resizing down also shrinks file size a lot. Upscaling is not offered — it cannot add real detail.</div>
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
VideoFX.init({ prefix: 'cv', fxName: 'resized', buildArgs: function(ctx) {
  var w = document.getElementById('cvW').value;
  return ['-i', ctx.main.fsName, '-vf', 'scale=' + w + ':-2', '-c:v','libx264','-preset','veryfast','-crf','23', '-c:a', 'copy', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video.**
2. **Pick a width** — 720p is the sweet spot for sharing; 480p for tight limits.
3. **Process & download** — same video, smaller and lighter.

## About this tool

Resolution is the biggest lever on video file size: halving the width quarters the pixels, so files often shrink 60–80%. Most social platforms compress uploads to 720p or 1080p anyway, so resizing before upload saves your time and data without changing what viewers see.

For an exact file-size target (like Discord's limit), resizing plus the Video Compressor together get you there.

## Frequently asked questions

**Will resizing ruin quality?**
On phone screens, 720p looks sharp. On a big TV, keep 1080p for anything you care about.

**Can I make a video bigger?**
Enlarging cannot invent detail, so this tool only scales down (choosing a width above your video's simply keeps it unchanged in practice via the encoder).

**Are my videos uploaded?**
No — resizing happens in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
