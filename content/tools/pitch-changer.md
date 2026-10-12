---
title: "Pitch Changer — Change Audio Pitch Online Free (Semitones)"
description: "Change the pitch of any audio by semitones, free online — chipmunk to deep voice, with an option to keep the original tempo. No sign-up, in your browser."
category: audio
date: 2026-10-12
draft: false
---

Raise or lower the **pitch** of any audio by up to a full octave (±12 semitones). Make chipmunk voices, deep movie-trailer tones, or shift a backing track into your singing key.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 5h8v2H3V5zm10-2h8v2h-8V3zM3 11h4v2H3v-2zm6-2h12v2H9V9zM3 17h10v2H3v-2zm12-2h6v2h-6v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pitch Changer</h2>
<p>Shift pitch up or down by semitones — chipmunk, deep voice, or a key change.</p>
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
<label for="cvSemi">Semitones</label>
<input type="range" id="cvSemi" class="tool-input" min="-12" max="12" step="1" value="4" style="max-width:240px;"> <span id="cvSemiVal">4</span>
<div class="hint">+4 is a fun lift, +12 an octave up, −12 an octave down.</div>
</div><div class="setting">
<label for="cvTempo">Keep original tempo</label>
<select id="cvTempo">
<option value="1" selected>Yes — same length</option>
<option value="0">No — classic chipmunk/deep speed change</option>
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
AudioFX.init({ prefix: 'cv', fxName: 'pitched', buildArgs: function(ctx) {
  var st = parseInt(document.getElementById('cvSemi').value, 10);
  var factor = Math.pow(2, st / 12);
  var f = 'asetrate=44100*' + factor.toFixed(5) + ',aresample=44100';
  if (document.getElementById('cvTempo').value === '1') f += ',atempo=' + (1 / factor).toFixed(5);
  return ['-i', ctx.input, '-af', f, '-codec:a','libmp3lame','-b:a','192k', 'out.mp3'];
}});
document.getElementById('cvSemi').addEventListener('input', function(){ document.getElementById('cvSemiVal').textContent = this.value; });
</script>

## How to use it

1. **Add your audio** — voice, song or instrument track.
2. **Slide the semitones** — try +5 for a chipmunk voice or −6 for a deep one.
3. **Process & download.** Keep-tempo on = same length; off = classic speed-up/slow-down feel.

## About this tool

Pitch is measured in semitones — 12 semitones make an octave. This tool resamples the audio at a shifted rate, which moves every note up or down together. With 'keep tempo' on, a time-stretch then restores the original length, so you get a pure key change; with it off you get the classic chipmunk (faster + higher) or slow-motion (slower + deeper) effect.

Singers use small shifts (±1–3 semitones) to fit a backing track to their vocal range.

## Frequently asked questions

**What is a semitone?**
The smallest step in Western music — one piano key. Twelve semitones double (or halve) the frequency, which is an octave.

**Why does keep-tempo sound slightly different?**
Time-stretching is a digital trick; extreme shifts can add a warbly texture. Small shifts sound clean.

**Are my files uploaded?**
No — 100% in your browser.

## More tools

- [Noise Remover](/tools/noise-remover/) — clean hiss and hum from recordings
- [Audio Compressor](/tools/audio-compressor/) — even out loud and quiet parts
- [Audio Format Converter](/tools/audio-format-converter/) — convert between MP3, WAV, OGG, FLAC and more
- [Audio Trimmer](/tools/audio-trimmer/) — cut the start and end off any audio
- [Vocal Remover](/tools/vocal-remover/) — strip vocals and keep the backing track
- [All audio tools](/tools/audio/)
