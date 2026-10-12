---
title: "Add Audio to Video — Put Music on a Video Free Online"
description: "Add an audio track to any video free online — replace the original sound or mix music under it. In your browser, no sign-up, no uploads, no watermark."
category: video
date: 2026-10-12
draft: false
---

Silent clip? Add the soundtrack: this tool **adds an audio file to your video** — either replacing the original sound completely or mixing music underneath the existing audio.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Add Audio to Video</h2>
<p>Put a song on your video — replace the sound or mix it underneath.</p>
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
<p class="tool-step-title"><span class="tool-step-num">+</span> Add the audio file</p>
<input type="file" id="cvFile2" accept="audio/*" class="tool-input">
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvMode">Mode</label>
<select id="cvMode">
<option value="replace" selected>Replace — only the new audio plays</option>
<option value="mix">Mix — new audio blended with the original</option>
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
VideoFX.init({ prefix: 'cv', fxName: 'with-audio', needsSecond: true, buildArgs: function(ctx) {
  var mode = document.getElementById('cvMode').value;
  if (mode === 'mix') return ['-i', ctx.main.fsName, '-i', ctx.second.fsName, '-filter_complex', '[0:a][1:a]amix=inputs=2:duration=first[aout]', '-map', '0:v:0', '-map', '[aout]', '-c:v', 'copy', '-c:a','aac','-b:a','160k', 'out.mp4'];
  return ['-i', ctx.main.fsName, '-i', ctx.second.fsName, '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'copy', '-c:a','aac','-b:a','160k', '-shortest', 'out.mp4'];
}});
</script>

## How to use it

1. **Add your video**, then **add an audio file** (MP3, WAV, M4A…).
2. **Choose replace or mix** — mix keeps the original sound under your music.
3. **Process & download.**

## About this tool

Music transforms footage: a travel clip becomes a montage, a product demo becomes an ad. Replace mode is the clean choice when the original audio is noise or silence; mix mode is for narration over background music. The video stream is copied without re-encoding, so processing is fast and quality is untouched.

Only use music you own or that is licensed for your use — platforms detect copyrighted tracks and may mute or block the video.

## Frequently asked questions

**What if the audio is longer than the video?**
In replace mode the output stops at the shorter of the two. In mix mode it follows the video's length.

**My video has no audio track — does mix work?**
Mix needs an original track to blend with. If your video is silent, use replace mode.

**Are my files uploaded?**
No — video and audio are combined in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
