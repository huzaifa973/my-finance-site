---
title: "Mute Video — Remove Audio From Video Free Online"
description: "Remove the audio track from any video free online — instant silent MP4, video quality untouched. In your browser, no sign-up, no watermark."
category: video
date: 2026-10-12
draft: false
---

Need a silent video? This tool **removes the audio track** completely — the video stream is copied untouched (no quality loss), so it is also the fastest tool on this page.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Mute Video (Remove Audio)</h2>
<p>Strip the sound out of any video — instant, lossless video.</p>
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
<label for="cvNote">Output</label>
<select id="cvNote">
<option value="mp4" selected>MP4 — silent</option>
</select>
<div class="hint">No settings needed — the video is copied bit-for-bit, only the sound is dropped.</div>
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
VideoFX.init({ prefix: 'cv', fxName: 'muted', buildArgs: function(ctx) {
  return ['-i', ctx.main.fsName, '-c:v', 'copy', '-an', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video.**
2. **Process** — it takes just seconds because the video itself is not re-encoded.
3. **Download** — a perfectly silent MP4.

## About this tool

Many platforms autoplay videos muted, and background, product and surveillance footage often should not carry sound at all (or the sound is just wind and handling noise). Removing the track entirely — rather than turning the volume down — also slightly shrinks the file and guarantees no player can unmute it.

Want sound *added* instead? Use Add Audio to Video to put a music track under your clip.

## Frequently asked questions

**Does muting reduce video quality?**
Not at all — the video stream is copied bit-for-bit. Only the audio track is removed.

**Can I undo it later?**
Keep your original file — a removed track cannot be recovered from the muted copy.

**Are my videos uploaded?**
No — everything runs in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
