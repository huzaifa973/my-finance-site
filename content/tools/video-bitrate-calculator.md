---
title: "Free Video Bitrate Calculator — File Size & Bitrate"
description: "Work out video bitrate from a target file size, or file size from a bitrate. Includes audio bitrate and per-minute size. Free, instant, no sign-up."
category: video
date: 2026-10-12
draft: false
---

Every upload limit is really a bitrate question. This calculator converts both ways: tell it your video length and a target file size (a 25 MB email limit, a 16 MB WhatsApp cap) and get the exact video bitrate to type into your editor — or enter the bitrate you plan to export at and see the final file size before you wait for a render. Pure math, done instantly in your browser.

<div class="tool-shell" id="videoBitrateShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Bitrate Calculator</h2>
<p>Convert between file size and bitrate before you export — hit your upload limit the first time, every time.</p>
</div>
<button type="button" class="theme-toggle" id="videoBitrateTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your video</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" data-vb-preset="youtube">▶ YouTube 1080p (~8 Mbps)</button>
<button type="button" class="preset-chip" data-vb-preset="whatsapp">💬 WhatsApp-friendly (small)</button>
<button type="button" class="preset-chip" data-vb-preset="email">✉️ Email limit 25 MB</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Duration (minutes)</span><input type="number" class="tool-input" id="vbDur" value="10" min="0" step="any"></div>
<div class="setting"><span class="t-label">Duration (extra seconds)</span><input type="number" class="tool-input" id="vbSec" value="0" min="0" max="59"></div>
<div class="setting"><span class="t-label">Mode</span><select class="tool-input" id="vbMode"><option value="size">I know the target file size</option><option value="bitrate">I know the bitrate</option></select></div>
<div class="setting"><span class="t-label">Target file size (MB)</span><input type="number" class="tool-input" id="vbSize" value="100" min="0" step="any"></div>
<div class="setting"><span class="t-label">Total bitrate (Mbps)</span><input type="number" class="tool-input" id="vbRate" value="8" min="0" step="any"></div>
<div class="setting"><span class="t-label">Audio bitrate (kbps)</span><select class="tool-input" id="vbAudio"><option value="128">128 kbps (standard)</option><option value="192">192 kbps (good)</option><option value="256">256 kbps (high)</option><option value="320">320 kbps (max)</option></select></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Bitrate &amp; size results</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vbGo">
🎬 Calculate
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="vbRes">
<p class="result-head">🎬 Your numbers</p>
<div class="result-summary" id="vbResSummary"></div>
<div class="result-grid" id="vbResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Calculate unlimited exports — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('videoBitrateShell');
ToolPro.themeToggle(shell, document.getElementById('videoBitrateTheme'));
document.querySelectorAll('[data-vb-preset]').forEach(function(b){ b.addEventListener('click', function(){
  var p=b.getAttribute('data-vb-preset');
  if(p==='youtube'){ document.getElementById('vbMode').value='bitrate'; document.getElementById('vbRate').value=8; }
  if(p==='whatsapp'){ document.getElementById('vbMode').value='size'; document.getElementById('vbSize').value=16; }
  if(p==='email'){ document.getElementById('vbMode').value='size'; document.getElementById('vbSize').value=25; }
  ToolPro.toast('Preset applied — hit Calculate');
}); });
document.getElementById('vbGo').addEventListener('click', function(){
  var dur=(parseFloat(document.getElementById('vbDur').value)||0)*60+(parseFloat(document.getElementById('vbSec').value)||0);
  if(dur<=0){ ToolPro.toast('Enter a duration','err'); return; }
  var audioKbps=parseFloat(document.getElementById('vbAudio').value);
  var mode=document.getElementById('vbMode').value, totalMbps, sizeMB, videoMbps;
  if(mode==='size'){ sizeMB=parseFloat(document.getElementById('vbSize').value)||0; totalMbps=(sizeMB*8)/dur; }
  else { totalMbps=parseFloat(document.getElementById('vbRate').value)||0; sizeMB=(totalMbps*dur)/8; }
  videoMbps=totalMbps-(audioKbps/1000);
  if(videoMbps<=0){ ToolPro.toast('Audio bitrate alone exceeds the total — raise the size or bitrate','err'); return; }
  var res=document.getElementById('vbRes'); res.classList.add('show');
  document.getElementById('vbResSummary').textContent='For a '+Math.round(dur)+'s video. Use the video bitrate below in your editor\u2019s export settings (HandBrake, Premiere, CapCut, ffmpeg).';
  var grid=document.getElementById('vbResGrid'); grid.innerHTML='';
  [['Video bitrate', videoMbps.toFixed(2)+' Mbps'],['Audio bitrate', audioKbps+' kbps'],['File size', sizeMB>=1024?(sizeMB/1024).toFixed(2)+' GB':sizeMB.toFixed(1)+' MB'],['Per minute', (sizeMB/(dur/60)).toFixed(1)+' MB/min']].forEach(function(r){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+r[0]+'</p><p class="r-stats" style="font-size:1.3rem;font-weight:700">'+r[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

File size is simply bitrate multiplied by time. The tool takes your duration, subtracts the audio bitrate you choose from the total, and solves for the video bitrate (or works backwards from bitrate to megabytes). Sizes use the decimal megabytes that upload limits and editors use, so the number you see matches the number your platform enforces.

## Everyday uses

- **YouTubers** — check an export’s expected size before a long render.
- **Email &amp; messaging** — fit clips under 25 MB email or 16 MB WhatsApp limits without trial and error.
- **Course creators** — keep lesson files under your LMS upload cap.
- **Discord &amp; social posters** — hit free-tier file limits on the first try.

## Frequently asked questions

**Should I use constant or variable bitrate?**

Two-pass variable bitrate (VBR) gives better quality at the same average size; use the calculator’s number as the average/target bitrate.

**Why is my real file slightly bigger than the estimate?**

Containers add a little overhead (usually under 2%) and VBR can drift. Aim 5% under a hard limit to be safe.

**What bitrate is good for 1080p?**

Around 8–12 Mbps for YouTube uploads, 5–8 Mbps for general sharing. 4K needs roughly 35–45 Mbps.
