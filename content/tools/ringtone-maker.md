---
title: "Ringtone Maker — Make MP3 & iPhone (M4R) Ringtones Free"
description: "Turn any song into a ringtone free online — pick the exact seconds, add fades, export MP3 for Android or M4R for iPhone. No sign-up, in your browser."
category: audio
date: 2026-10-12
draft: false
---

Cut the best part of any song into a **ringtone**: choose the start and end, add gentle fades so it doesn't blast abruptly, and export MP3 (Android) or M4R (iPhone) format.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Ringtone Maker</h2>
<p>Your favorite 30 seconds as a ringtone — MP3 for Android, M4R for iPhone.</p>
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
<label for="cvStart">Start (seconds)</label>
<input type="number" id="cvStart" class="tool-input" value="0" min="0" step="0.5" style="max-width:160px;">

</div><div class="setting">
<label for="cvEnd">End (seconds)</label>
<input type="number" id="cvEnd" class="tool-input" value="30" min="0" step="0.5" style="max-width:160px;">
<div class="hint">Keep it under 40 seconds — phones loop longer tones awkwardly.</div>
</div><div class="setting">
<label for="cvFmt">Format</label>
<select id="cvFmt">
<option value="mp3" selected>MP3 — Android & most phones</option>
<option value="m4r">M4R — iPhone</option>
</select>

</div><div class="setting">
<label for="cvFade">Fade in + out</label>
<select id="cvFade">
<option value="1" selected>On — 1s fades</option>
<option value="0">Off</option>
</select>

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
AudioFX.init({ prefix: 'cv', fxName: 'ringtone', buildArgs: function(ctx) {
  var s = parseFloat(document.getElementById('cvStart').value) || 0;
  var e = parseFloat(document.getElementById('cvEnd').value) || 30;
  var dur = Math.max(1, e - s);
  var fades = document.getElementById('cvFade').value === '1';
  var af = fades ? 'afade=t=in:st=0:d=1,afade=t=out:st=' + Math.max(0, dur - 1) + ':d=1' : 'anull';
  var fmt = document.getElementById('cvFmt').value;
  var codec = fmt === 'm4r' ? ['-codec:a', 'aac', '-b:a', '128k', '-f', 'ipod'] : ['-codec:a','libmp3lame','-b:a','192k'];
  return ['-ss', String(s), '-i', ctx.input, '-t', String(dur), '-af', af].concat(codec).concat(['out.' + fmt]);
}});
</script>

## How to use it

1. **Add a song** and note the seconds where your favorite part starts and ends.
2. **Enter start/end** — 20–35 seconds is the sweet spot.
3. **Pick MP3 or M4R and download.** Then set it in your phone's sound settings.

## About this tool

Phone ringtones are just short audio clips, but each platform wants its own format: Android happily uses MP3, while iPhones require the M4R format (added to the phone via Finder/iTunes or the GarageBand app). A short fade at both ends stops the tone starting with a click or cutting off mid-note.

Only use music you own or that's royalty-free for anything beyond personal use.

## Frequently asked questions

**How do I put an M4R on my iPhone?**
Connect the phone to a computer and drag the M4R into the Tones section of Finder/iTunes, or open it in GarageBand on the phone and export as a ringtone.

**How long should a ringtone be?**
20–40 seconds. Most phones ring for about that long before voicemail picks up.

**Are my files uploaded?**
No — the ringtone is made entirely in your browser.

## More tools

- [Noise Remover](/tools/noise-remover/) — clean hiss and hum from recordings
- [Audio Compressor](/tools/audio-compressor/) — even out loud and quiet parts
- [Audio Format Converter](/tools/audio-format-converter/) — convert between MP3, WAV, OGG, FLAC and more
- [Audio Trimmer](/tools/audio-trimmer/) — cut the start and end off any audio
- [Vocal Remover](/tools/vocal-remover/) — strip vocals and keep the backing track
- [All audio tools](/tools/audio/)
