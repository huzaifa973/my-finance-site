---
title: "Bass Booster & 3-Band Equalizer — Free Online Audio EQ"
description: "Boost bass and shape any song with a free 3-band online equalizer: bass, mids and treble sliders plus presets. In your browser, no sign-up, no uploads."
category: audio
date: 2026-10-12
draft: false
---

Shape the sound of any track with a **3-band equalizer**: add deep bass for EDM and hip-hop, warm up thin vocals with the mids, or soften harsh top-end with the treble. Presets included for the most common fixes.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 5h8v2H3V5zm10-2h8v2h-8V3zM3 11h4v2H3v-2zm6-2h12v2H9V9zM3 17h10v2H3v-2zm12-2h6v2h-6v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Bass Booster & Equalizer</h2>
<p>Thump the bass, tame the harshness — a 3-band EQ with one-click presets.</p>
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
<label for="cvBass">Bass (dB)</label>
<input type="range" id="cvBass" class="tool-input" min="-15" max="15" step="1" value="8" style="max-width:240px;"> <span id="cvBassVal">8</span>

</div><div class="setting">
<label for="cvMid">Mids (dB)</label>
<input type="range" id="cvMid" class="tool-input" min="-15" max="15" step="1" value="0" style="max-width:240px;"> <span id="cvMidVal">0</span>

</div><div class="setting">
<label for="cvTre">Treble (dB)</label>
<input type="range" id="cvTre" class="tool-input" min="-15" max="15" step="1" value="0" style="max-width:240px;"> <span id="cvTreVal">0</span>

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
AudioFX.init({ prefix: 'cv', fxName: 'eq', buildArgs: function(ctx) {
  var b = document.getElementById('cvBass').value, m = document.getElementById('cvMid').value, t = document.getElementById('cvTre').value;
  var f = 'bass=g=' + b + ':f=110,equalizer=f=1000:width_type=o:width=1.2:g=' + m + ',treble=g=' + t + ':f=3000';
  return ['-i', ctx.input, '-af', f, '-codec:a','libmp3lame','-b:a','192k', 'out.mp3'];
}});
['cvBass','cvMid','cvTre'].forEach(function(id){ document.getElementById(id).addEventListener('input', function(){ document.getElementById(id + 'Val').textContent = this.value; }); });
</script>

## How to use it

1. **Add your audio** — song, beat or recording.
2. **Move the sliders** — bass up for punch; treble down if it sounds harsh; mids up for vocal clarity.
3. **Process & download** — audition, then re-run with different settings until it slaps.

## About this tool

An equalizer boosts or cuts specific frequency ranges. Bass lives below ~250 Hz (kick drums, bass lines), mids carry vocals and most instruments, and treble is the sparkle and air above ~3 kHz. Small moves of 3–6 dB are usually enough; extreme boosts can distort, so lower the overall volume if the result crackles.

Popular recipes: Bass Booster (bass +8, mids 0, treble +2), Vocal Clarity (bass −3, mids +4, treble +3), Warm/Radio (bass +4, mids +2, treble −4).

## Frequently asked questions

**How much bass boost is too much?**
Above +10 dB most speakers and earbuds start to distort. If it crackles, back off a few dB.

**Can EQ fix a bad recording?**
It can improve balance, but it cannot remove noise or clipping that is already recorded. For noise, try the Noise Remover.

**Are my files uploaded?**
No — everything happens in your browser.

## More tools

- [Noise Remover](/tools/noise-remover/) — clean hiss and hum from recordings
- [Audio Compressor](/tools/audio-compressor/) — even out loud and quiet parts
- [Audio Format Converter](/tools/audio-format-converter/) — convert between MP3, WAV, OGG, FLAC and more
- [Audio Trimmer](/tools/audio-trimmer/) — cut the start and end off any audio
- [Vocal Remover](/tools/vocal-remover/) — strip vocals and keep the backing track
- [All audio tools](/tools/audio/)
