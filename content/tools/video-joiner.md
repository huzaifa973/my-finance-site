---
title: "Video Joiner — Merge Videos Into One Free Online"
description: "Join multiple videos into one file free online — clips are matched to the same size and merged in your browser. No sign-up, no uploads, no watermark."
category: video
date: 2026-10-12
draft: false
---

Stitch clips together into a single video with this **video joiner**. Every clip is resized to a clean 1280×720 frame (with padding where needed) so mixed phone and camera footage joins smoothly — all in your browser.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Joiner</h2>
<p>Merge several clips into one video — matched, joined, no watermark.</p>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your video clips</p>
<div class="dropzone" id="cvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your file here</strong>
<span>or click to browse</span>
<input type="file" id="cvFiles" accept="video/*" multiple>
</div>
<ul class="file-list" id="cvList"></ul>
<video id="cvProbe" preload="metadata" style="display:none;"></video>
</div>

<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvQ">Output quality</label>
<select id="cvQ">
<option value="23" selected>High — CRF 23</option>
<option value="28">Smaller file — CRF 28</option>
</select>
<div class="hint">All clips are normalized to 720p/30fps so they join cleanly. Clips should have audio; silent clips may fail — mute them first with the Mute tool only if every clip is silent.</div>
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
VideoFX.init({ prefix: 'cv', fxName: 'joined', multi: true, minFiles: 2, buildArgs: function(ctx) {
  var crf = document.getElementById('cvQ').value;
  var args = [], fc = '', i;
  for (i = 0; i < ctx.list.length; i++) args.push('-i', ctx.list[i].fsName);
  for (i = 0; i < ctx.list.length; i++) fc += '[' + i + ':v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=30,setsar=1[v' + i + '];[' + i + ':a]aresample=48000[a' + i + '];';
  var labels = '';
  for (i = 0; i < ctx.list.length; i++) labels += '[v' + i + '][a' + i + ']';
  fc += labels + 'concat=n=' + ctx.list.length + ':v=1:a=1[v][a]';
  args.push('-filter_complex', fc, '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', crf, '-c:a','aac','-b:a','160k', 'out.mp4');
  return args;
}});
</script>

## How to use it

1. **Add 2 or more clips** — MP4, MOV, WebM and more, in the order you drop them.
2. **Choose quality** — High for sharing, Smaller for messaging apps.
3. **Process & download** — one joined MP4.

## About this tool

Joining video is harder than it looks: clips from different phones have different sizes, frame rates and audio rates, and simply gluing them together produces broken files. This joiner normalizes every clip to the same 720p frame, frame rate and audio rate first, then concatenates them into a single clean MP4 — the same approach desktop editors use.

For best results, all clips should contain an audio track (even a quiet one). A completely silent clip can be given a track by screen-recording it, or join silent clips only with other silent clips using a desktop editor.

## Frequently asked questions

**Is there a watermark?**
Never — DollarWise tools are watermark-free, always.

**How many clips can I join?**
As many as your browser memory allows; 2–6 short clips is the comfortable range on most devices.

**Are my videos uploaded?**
No — joining happens 100% in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
