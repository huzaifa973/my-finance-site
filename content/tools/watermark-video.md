---
title: "Watermark Video — Add Logo or Image Watermark Free Online"
description: "Add an image watermark or logo to any video free online — four corner positions, adjustable size. In your browser, no sign-up, files never uploaded."
category: video
date: 2026-10-12
draft: false
---

Protect and brand your videos with an **image watermark**: overlay your logo (a transparent PNG works best) in any corner, at your chosen size, permanently rendered into the video.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Watermark Video</h2>
<p>Brand your clips — your logo in the corner, baked into the video.</p>
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
<p class="tool-step-title"><span class="tool-step-num">+</span> Add your watermark image (PNG with transparency works best)</p>
<input type="file" id="cvFile2" accept="image/*" class="tool-input">
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvPos">Position</label>
<select id="cvPos">
<option value="W-w-16:H-h-16" selected>Bottom right</option>
<option value="16:H-h-16">Bottom left</option>
<option value="W-w-16:16">Top right</option>
<option value="16:16">Top left</option>
</select>

</div><div class="setting">
<label for="cvWmW">Watermark width</label>
<select id="cvWmW">
<option value="80">Small — 80 px</option>
<option value="120" selected>Medium — 120 px</option>
<option value="200">Large — 200 px</option>
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
VideoFX.init({ prefix: 'cv', fxName: 'watermarked', needsSecond: true, buildArgs: function(ctx) {
  var pos = document.getElementById('cvPos').value;
  var w = document.getElementById('cvWmW').value;
  return ['-i', ctx.main.fsName, '-i', ctx.second.fsName, '-filter_complex', '[1:v]scale=' + w + ':-1[wm];[0:v][wm]overlay=' + pos, '-c:v','libx264','-preset','veryfast','-crf','23', '-c:a', 'copy', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video**, then **add your logo image** (PNG with transparency looks professional).
2. **Pick a corner and size.**
3. **Process & download** — the watermark is part of the video now.

## About this tool

A baked-in watermark travels with the video wherever it is reposted — your brand on every share, and a deterrent to anyone passing the work off as theirs. Corner placement at a modest size is the professional standard: visible, but not blocking the content.

For a subtle effect, use a logo version exported at low opacity from your image editor — transparency in the PNG is preserved by the overlay.

## Frequently asked questions

**What image format should the watermark be?**
PNG with a transparent background looks best. JPGs work too, but their solid background will show as a box.

**Can the watermark be removed later?**
Not from the exported file — it is rendered into the pixels. Always keep your clean original.

**Are my files uploaded?**
No — everything happens in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
