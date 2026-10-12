---
title: "Free Aspect Ratio Calculator — Resize Without Distortion"
description: "Simplify any width and height to its aspect ratio and scale dimensions proportionally. Presets for 16:9, 9:16 Shorts, 1:1, 4:5 and 21:9. Free and instant."
category: video
date: 2026-10-12
draft: false
---

Stretching is what happens when a size changes without its ratio. Enter any width and height and this calculator simplifies it to the clean ratio (1920×1080 becomes 16:9), names the common format if it matches one, and scales to any new width or height while keeping the other dimension proportional. Built for video exports, social crops, thumbnails, and screen sizes.

<div class="tool-shell" id="aspectRatioShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zM7 12l3-4 2.5 3L15 8l2 4H7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Aspect Ratio Calculator</h2>
<p>Simplify ratios and scale widths and heights proportionally — no more stretched or squished videos and images.</p>
</div>
<button type="button" class="theme-toggle" id="aspectRatioTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Dimensions</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" data-ar="16:9">16:9 Widescreen</button>
<button type="button" class="preset-chip" data-ar="9:16">9:16 Shorts/Reels</button>
<button type="button" class="preset-chip" data-ar="1:1">1:1 Square</button>
<button type="button" class="preset-chip" data-ar="4:5">4:5 Portrait post</button>
<button type="button" class="preset-chip" data-ar="21:9">21:9 Ultrawide</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Width (px)</span><input type="number" class="tool-input" id="arW" value="1920" min="1"></div>
<div class="setting"><span class="t-label">Height (px)</span><input type="number" class="tool-input" id="arH" value="1080" min="1"></div>
<div class="setting"><span class="t-label">New width (px, optional)</span><input type="number" class="tool-input" id="arNW" value="" min="1" placeholder="e.g. 1280"></div>
<div class="setting"><span class="t-label">New height (px, optional)</span><input type="number" class="tool-input" id="arNH" value="" min="1" placeholder="e.g. 720"></div>
</div>
<div class="hint">Enter your current size to simplify its ratio. Add a new width OR height to scale the other dimension proportionally.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Ratio results</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="arGo">
📐 Calculate ratio
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="arRes">
<p class="result-head">📐 Results</p>
<div class="result-summary" id="arResSummary"></div>
<div class="result-grid" id="arResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Scaled, simplified, distortion-free — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('aspectRatioShell');
ToolPro.themeToggle(shell, document.getElementById('aspectRatioTheme'));
document.querySelectorAll('[data-ar]').forEach(function(b){ b.addEventListener('click', function(){
  var p=b.getAttribute('data-ar').split(':'); var r=parseInt(p[0],10)/parseInt(p[1],10);
  document.getElementById('arW').value=1920; document.getElementById('arH').value=Math.round(1920/r);
  ToolPro.toast('Preset '+b.getAttribute('data-ar')+' loaded');
}); });
function gcd(a,b){ return b?gcd(b,a%b):a; }
document.getElementById('arGo').addEventListener('click', function(){
  var w=parseFloat(document.getElementById('arW').value), h=parseFloat(document.getElementById('arH').value);
  if(!w||!h){ ToolPro.toast('Enter width and height','err'); return; }
  var g=gcd(Math.round(w), Math.round(h)), rw=Math.round(w)/g, rh=Math.round(h)/g;
  var dec=(w/h).toFixed(4).replace(/0+$/,'').replace(/\.$/,'');
  var nw=document.getElementById('arNW').value, nh=document.getElementById('arNH').value, scaleLine='—';
  if(nw){ scaleLine=nw+' × '+Math.round(nw*h/w)+' px'; }
  else if(nh){ scaleLine=Math.round(nh*w/h)+' × '+nh+' px'; }
  var common='Custom ratio';
  var known={'1.78':'16:9 (widescreen)','0.56':'9:16 (vertical video)','1.00':'1:1 (square)','0.80':'4:5 (portrait post)','1.33':'4:3 (classic TV)','2.33':'21:9 (ultrawide)','1.50':'3:2 (photo)'};
  var key=(w/h).toFixed(2); if(known[key]) common=known[key];
  var res=document.getElementById('arRes'); res.classList.add('show');
  document.getElementById('arResSummary').textContent=w+' × '+h+' simplifies to '+rw+':'+rh+' — '+common+'.';
  var grid=document.getElementById('arResGrid'); grid.innerHTML='';
  [['Simplified ratio', rw+':'+rh],['Decimal ratio', dec],['Scaled size', scaleLine],['Megapixels', ((w*h)/1000000).toFixed(2)+' MP']].forEach(function(r){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+r[0]+'</p><p class="r-stats" style="font-size:1.3rem;font-weight:700">'+r[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The tool divides both dimensions by their greatest common divisor to simplify the ratio, converts it to a decimal for quick comparisons, and — when you give it one new dimension — multiplies by the original ratio to compute the matching other dimension, rounded to whole pixels. All math happens instantly in your browser.

## Everyday uses

- **Video editors** — confirm export sizes for YouTube (16:9), Shorts/Reels/TikTok (9:16), and cinema (21:9).
- **Designers** — scale images and artboards without distortion.
- **Social managers** — get exact pixel sizes for 1:1 and 4:5 posts from any source image.
- **Developers** — preserve ratio for responsive embeds and video players.

## Frequently asked questions

**What aspect ratio are YouTube Shorts and TikTok?**

9:16 vertical — 1080×1920 is the standard export size.

**Why does my scaled height have rounding?**

Pixels are whole numbers, so proportional heights round to the nearest pixel. A 1-pixel difference is invisible in practice.

**Is 16:9 the same as 1.78:1?**

Yes — 16 divided by 9 is 1.78. Film often writes ratios as x:1; video and web usually use the simplified fraction form.
