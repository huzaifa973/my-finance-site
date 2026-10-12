---
title: "Echo Maker — Add Echo Effect to Audio Free Online"
description: "Add an echo effect to any audio free online — control the delay and decay for canyon, slapback and dreamy repeats. In your browser, no sign-up."
category: audio
date: 2026-10-12
draft: false
---

Add a real **echo** to voices and music: set how long each repeat waits (delay) and how quickly repeats fade away (decay) — from tight slapback to a huge canyon.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 10v4h2v-4H3zm4-3v10h2V7H7zm4-4v18h2V3h-2zm4 5v8h2V8h-2zm4-2v12h2V6h-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Echo Maker</h2>
<p>Canyon echoes, slapback and dreamy repeats — dial in delay and decay.</p>
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
<label for="cvDelay">Delay (ms)</label>
<input type="range" id="cvDelay" class="tool-input" min="100" max="1000" step="10" value="350" style="max-width:240px;"> <span id="cvDelayVal">350</span>
<div class="hint">Time between repeats. 100–200 ms = slapback; 300–500 = classic echo.</div>
</div><div class="setting">
<label for="cvDecay">Decay</label>
<input type="range" id="cvDecay" class="tool-input" min="0.1" max="0.8" step="0.05" value="0.4" style="max-width:240px;"> <span id="cvDecayVal">0.4</span>
<div class="hint">How long the repeats keep going.</div>
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
AudioFX.init({ prefix: 'cv', fxName: 'echo', buildArgs: function(ctx) {
  var d = document.getElementById('cvDelay').value, dec = document.getElementById('cvDecay').value;
  return ['-i', ctx.input, '-af', 'aecho=0.9:0.85:' + d + ':' + dec, '-codec:a','libmp3lame','-b:a','192k', 'out.mp3'];
}});
document.getElementById('cvDelay').addEventListener('input', function(){ document.getElementById('cvDelayVal').textContent = this.value; }); document.getElementById('cvDecay').addEventListener('input', function(){ document.getElementById('cvDecayVal').textContent = this.value; });
</script>

## How to use it

1. **Add your audio.**
2. **Set delay and decay** — try 350 ms / 0.4 for a classic vocal echo.
3. **Process & download.**

## About this tool

An echo repeats the sound after a short delay, each repeat quieter than the last. Short delays under 100 ms thicken a voice (the slapback of 1950s rock'n'roll); longer delays create the canyon and mountain-yodel effect. Syncing the delay to a song's tempo (for example 375 ms at 160 BPM for a dotted feel) makes echoes feel musical rather than messy.

For a sense of *space* rather than distinct repeats, use the Reverb Maker instead.

## Frequently asked questions

**Echo or reverb for a voiceover?**
A short, quiet echo adds depth to narration; reverb sounds more like a room. Many creators use a touch of both.

**Why do the repeats sound quieter each time?**
That is the decay setting — each repeat is multiplied by the decay value, mimicking how real echoes lose energy.

**Are my files uploaded?**
No — processing is local to your browser.

## More tools

- [Noise Remover](/tools/noise-remover/) — clean hiss and hum from recordings
- [Audio Compressor](/tools/audio-compressor/) — even out loud and quiet parts
- [Audio Format Converter](/tools/audio-format-converter/) — convert between MP3, WAV, OGG, FLAC and more
- [Audio Trimmer](/tools/audio-trimmer/) — cut the start and end off any audio
- [Vocal Remover](/tools/vocal-remover/) — strip vocals and keep the backing track
- [All audio tools](/tools/audio/)
