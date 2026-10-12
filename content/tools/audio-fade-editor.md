---
title: "Audio Fade Editor — Add Fade In & Fade Out to Audio Free"
description: "Add smooth fade in and fade out to any audio file free online — set each fade in seconds. Perfect for songs, podcasts and ringtones. In your browser."
category: audio
date: 2026-10-12
draft: false
---

Abrupt beginnings and endings sound amateur. Add a polished **fade in** and **fade out** of any length to songs, podcast intros, voice notes and ringtones.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 10v4h2v-4H3zm4-3v10h2V7H7zm4-4v18h2V3h-2zm4 5v8h2V8h-2zm4-2v12h2V6h-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Audio Fade In / Out Editor</h2>
<p>Smooth starts and endings — no more abrupt cuts.</p>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your audio file</p>
<div class="dropzone" id="cvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your file here</strong>
<span>or click to browse</span>
<input type="file" id="cvFile" accept="audio/*">
</div>
<ul class="file-list" id="cvList"></ul>
<audio id="cvProbe" preload="metadata" style="display:none;"></audio>
</div>

<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvFi">Fade in (seconds)</label>
<input type="number" id="cvFi" class="tool-input" value="2" min="0" max="30" step="0.5" style="max-width:160px;">

</div><div class="setting">
<label for="cvFo">Fade out (seconds)</label>
<input type="number" id="cvFo" class="tool-input" value="3" min="0" max="30" step="0.5" style="max-width:160px;">
<div class="hint">The fade out is placed at the very end of the file.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Process &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cvBtn" disabled>Process Audio</button>
<button type="button" class="btn-pro-outline" id="cvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="cvProgWrap">
<div class="progress-bar"><i id="cvProgBar"></i></div>
<div class="progress-text" id="cvProgText">Working…</div>
</div>
<div class="results" id="cvResults">
<p class="result-head">✅ Done — your audio is ready</p>
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

<script src="/js/audio-fx.js"></script>
<script>
AudioFX.init({ prefix: 'cv', fxName: 'faded', buildArgs: function(ctx) {
  var fi = parseFloat(document.getElementById('cvFi').value) || 0;
  var fo = parseFloat(document.getElementById('cvFo').value) || 0;
  var parts = [];
  if (fi > 0) parts.push('afade=t=in:st=0:d=' + fi);
  if (fo > 0 && ctx.duration > fo) parts.push('afade=t=out:st=' + (ctx.duration - fo).toFixed(2) + ':d=' + fo);
  var f = parts.length ? parts.join(',') : 'anull';
  return ['-i', ctx.input, '-af', f, '-codec:a','libmp3lame','-b:a','192k', 'out.mp3'];
}});
</script>

## How to use it

1. **Add your audio.**
2. **Set the fades** — 1–3 seconds is typical for songs; intros often use 3–5.
3. **Process & download** — smooth, professional edges.

## About this tool

A fade ramps the volume from silence up to full level (fade in) or down to silence (fade out). Fades hide edit points, soften harsh attacks and make loops and excerpts feel intentional. Podcasters fade music under speech; DJs and video editors fade every clip edge by habit.

Combine this with the Audio Trimmer: trim first, then fade the cut edges for a seamless result.

## Frequently asked questions

**How long should a fade be?**
Songs: 2–5 seconds out. Voice clips and ringtones: 0.5–2 seconds. There is no wrong answer — preview and adjust.

**Can I fade only the end?**
Yes — set fade in to 0 and only the fade out is applied.

**Are my files uploaded?**
No — everything runs in your browser.

## More tools

- [Noise Remover](/tools/noise-remover/) — clean hiss and hum from recordings
- [Audio Compressor](/tools/audio-compressor/) — even out loud and quiet parts
- [Audio Format Converter](/tools/audio-format-converter/) — convert between MP3, WAV, OGG, FLAC and more
- [Audio Trimmer](/tools/audio-trimmer/) — cut the start and end off any audio
- [Vocal Remover](/tools/vocal-remover/) — strip vocals and keep the backing track
- [All audio tools](/tools/audio/)
