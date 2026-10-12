---
title: "Reverse Video Online Free — Play Videos Backwards"
description: "Play any video backwards free online — reverse video and audio in your browser for magic tricks, sports analysis and fun edits. No sign-up, no watermark."
category: video
date: 2026-10-12
draft: false
---

**Reverse** any clip so it plays backwards — the classic effect behind impossible magic tricks, rewound sports plays and satisfying undo videos. Audio reverses too.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Reverser</h2>
<p>Everything backwards — pouring water up, jumps rewound, magic restored.</p>
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
<label for="cvAud">Also reverse audio</label>
<select id="cvAud">
<option value="1" selected>Yes — full backwards effect</option>
<option value="0">No — video only, audio removed</option>
</select>
<div class="hint">Reversing loads the whole clip into memory — short clips (under ~30 seconds) work best.</div>
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
VideoFX.init({ prefix: 'cv', fxName: 'reversed', buildArgs: function(ctx) {
  var withAudio = document.getElementById('cvAud').value === '1';
  var args = ['-i', ctx.main.fsName, '-vf', 'reverse'];
  if (withAudio) args.push('-af', 'areverse'); else args.push('-an');
  args.push('-c:v','libx264','-preset','veryfast','-crf','23');
  if (withAudio) args.push('-c:a','aac','-b:a','160k');
  args.push('out.mp4');
  return args;
}});
</script>

## How to use it

1. **Add a short clip** — under 30 seconds is ideal.
2. **Choose whether audio reverses too.**
3. **Process & download** — watch it defy physics.

## About this tool

To play a video backwards, every frame must be held in memory and played in reverse order — which is why this effect loves short clips. The results are pure visual magic: spilled drinks leap back into glasses, jumps rewind, handwriting un-writes itself.

Film the action forwards while imagining it reversed: drop, throw, pour and jump tricks all become 'impossible' when played back.

## Frequently asked questions

**Why did my long video fail?**
Reversing is the most memory-hungry effect there is — the whole clip is buffered. Trim to the best 10–30 seconds first with the Video Trimmer.

**Can I reverse just part of a video?**
Trim the part you want with the Trimmer, reverse that clip, then join the pieces with the Video Joiner.

**Are my videos uploaded?**
No — reversing happens entirely in your browser.

## More tools

- [Video Trimmer](/tools/video-trimmer/) — cut a section out of any video
- [Video Compressor](/tools/video-compressor/) — shrink video file size
- [Video to GIF Converter](/tools/video-to-gif-converter/) — turn clips into GIFs
- [All video tools](/tools/video/)
