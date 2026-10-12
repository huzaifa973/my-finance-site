---
title: "Change Video Speed Online — Slow Motion & Fast Forward Free"
description: "Speed up or slow down any video free online: 0.25× slow motion to 3× fast forward, audio tempo matched. In your browser, no sign-up, no watermark."
category: video
date: 2026-10-12
draft: false
---

Make **slow motion** out of an action shot or **fast-forward** a long process video: this tool changes playback speed from 0.25× to 3× and adjusts the audio tempo to match.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Speed Changer</h2>
<p>Slow-mo drama or fast-forward energy — 0.25× to 3×, audio included.</p>
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
<label for="cvSpd">Speed</label>
<select id="cvSpd">
<option value="0.25">0.25× — extreme slow motion</option>
<option value="0.5" selected>0.5× — slow motion</option>
<option value="0.75">0.75× — slightly slow</option>
<option value="1.5">1.5× — brisk</option>
<option value="2">2× — fast forward</option>
<option value="3">3× — timelapse feel</option>
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
VideoFX.init({ prefix: 'cv', fxName: 'speed', buildArgs: function(ctx) {
  var s = parseFloat(document.getElementById('cvSpd').value);
  function chain(v) { var p = []; while (v > 2) { p.push(2); v /= 2; } while (v < 0.5) { p.push(0.5); v /= 0.5; } p.push(v); return p.map(function(x) { return 'atempo=' + x.toFixed(3); }).join(','); }
  return ['-i', ctx.main.fsName, '-vf', 'setpts=PTS/' + s, '-af', chain(s), '-c:v','libx264','-preset','veryfast','-crf','23', '-c:a','aac','-b:a','160k', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video.**
2. **Pick a speed** — 0.5× for smooth slow-mo, 2–3× for process videos and timelapses.
3. **Process & download.**

## About this tool

Speed changes stretch or compress time itself: at 0.5× every second of action lasts two seconds, revealing detail your eye misses at full speed; at 3× an hour of work becomes a watchable twenty minutes. The audio tempo is adjusted with the same factor so voices and music stay in sync (pitch is preserved by the tempo algorithm, within reason).

True high-frame-rate slow motion (shot at 120/240 fps) looks smoother, but speed-ramping normal footage is how most viral slow-mo edits are made.

## Frequently asked questions

**Does the audio stay in sync?**
Yes — audio tempo is changed by the same factor. At extreme slowdowns voices will sound deep and strange, which is half the fun.

**How long can the video be?**
Browser processing loves short clips — keep source videos under a couple of minutes for speed changes.

**Are my videos uploaded?**
No — 100% in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
