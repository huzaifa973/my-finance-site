---
title: "Free Screen Size Calculator"
description: "Calculate screen width and height from diagonal size and aspect ratio — for monitors, TVs and phones — in inches and cm, plus PPI."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Enter a screen's diagonal size and aspect ratio and this calculator works out the real width and height of the display in inches and centimeters. Add the resolution to see pixel density (PPI) as well.

<div class="tool-shell" id="ssShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="12" rx="2"/><rect x="11" y="16" width="2" height="3"/><rect x="7" y="19" width="10" height="1.8" rx="0.9"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Screen Size Calculator</h2>
<p>Real width and height from any diagonal and aspect ratio — in inches and cm, with PPI.</p>
</div>
<button type="button" class="theme-toggle" id="ssTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter the diagonal and aspect ratio</p>
<div class="setting">
<label for="ssDiag">Diagonal size</label>
<input type="number" id="ssDiag" class="tool-input" style="max-width:160px;" min="0" step="0.1" placeholder="e.g. 27">
<div class="hint">The number screens are sold by — measured corner to corner of the display.</div>
</div>
<div class="setting">
<label for="ssUnit">Unit</label>
<select id="ssUnit" class="tool-input" style="max-width:160px;">
<option value="in" selected>Inches</option>
<option value="cm">Centimeters</option>
</select>
</div>
<div class="setting">
<label for="ssRatio">Aspect ratio</label>
<select id="ssRatio" class="tool-input" style="max-width:160px;">
<option value="16:9" selected>16:9 (most monitors &amp; TVs)</option>
<option value="16:10">16:10</option>
<option value="4:3">4:3</option>
<option value="21:9">21:9 (ultrawide)</option>
<option value="3:2">3:2</option>
</select>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quick-fill a common screen</p>
<div class="settings-panel">
<div class="preset-row" id="ssPresets">
<button type="button" class="preset-chip" data-diag="24">24" monitor</button>
<button type="button" class="preset-chip" data-diag="27">27" monitor</button>
<button type="button" class="preset-chip" data-diag="55">55" TV</button>
<button type="button" class="preset-chip" data-diag="65">65" TV</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Resolution (optional, for PPI)</p>
<div class="setting">
<label for="ssResW">Horizontal pixels</label>
<input type="number" id="ssResW" class="tool-input" style="max-width:160px;" min="0" step="1" placeholder="e.g. 1920">
</div>
<div class="setting">
<label for="ssResH">Vertical pixels</label>
<input type="number" id="ssResH" class="tool-input" style="max-width:160px;" min="0" step="1" placeholder="e.g. 1080">
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ssBtn">
<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="12" rx="2"/><rect x="11" y="16" width="2" height="3"/><rect x="7" y="19" width="10" height="1.8" rx="0.9"/></svg>
Calculate dimensions
</button>
<button type="button" class="btn-pro-outline" id="ssClear">Clear</button>
</div>
<div class="results" id="ssResults">
<p class="result-head">🖥️ Screen dimensions</p>
<div class="result-summary" id="ssResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This calculator runs entirely in your browser — check as many screens as you like while you shop or measure.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ssShell');
  ToolPro.themeToggle(shell, document.getElementById('ssTheme'));
  var diagEl = document.getElementById('ssDiag');
  var unitEl = document.getElementById('ssUnit');
  var ratioEl = document.getElementById('ssRatio');
  var resWEl = document.getElementById('ssResW');
  var resHEl = document.getElementById('ssResH');
  var resBox = document.getElementById('ssResults');
  var out = document.getElementById('ssResult');
  function r2(n){ return Math.round(n * 100) / 100; }
  function calc(showToast){
    var d = parseFloat(diagEl.value);
    if (!d || d <= 0) {
      if (showToast) ToolPro.toast('Enter a diagonal size first', 'err');
      return;
    }
    var diagIn = unitEl.value === 'cm' ? d / 2.54 : d;
    var parts = ratioEl.value.split(':');
    var a = parseFloat(parts[0]);
    var b = parseFloat(parts[1]);
    var hyp = Math.sqrt(a * a + b * b);
    var wIn = diagIn * a / hyp;
    var hIn = diagIn * b / hyp;
    var html = '<p style="font-size:1.3rem;">Width: <strong>' + r2(wIn) + ' in</strong> (' + r2(wIn * 2.54) + ' cm) · Height: <strong>' + r2(hIn) + ' in</strong> (' + r2(hIn * 2.54) + ' cm)</p>'
      + '<p>Viewing area: <strong>' + r2(wIn * hIn) + ' sq in</strong> (' + r2(wIn * hIn * 6.4516) + ' sq cm) · Diagonal: <strong>' + r2(diagIn) + ' in</strong> (' + r2(diagIn * 2.54) + ' cm)</p>';
    var rw = parseFloat(resWEl.value);
    var rh = parseFloat(resHEl.value);
    if (rw > 0 && rh > 0) {
      var ppi = Math.sqrt(rw * rw + rh * rh) / diagIn;
      html += '<p>Resolution ' + rw + ' × ' + rh + ' → pixel density: <strong>' + Math.round(ppi) + ' PPI</strong></p>';
    }
    out.innerHTML = html;
    resBox.classList.add('show');
    if (showToast) ToolPro.toast('Dimensions calculated', 'ok');
  }
  document.getElementById('ssPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    diagEl.value = chip.dataset.diag;
    unitEl.value = 'in';
    ratioEl.value = '16:9';
    calc(false);
    ToolPro.toast('Preset set: ' + chip.textContent);
  });
  document.getElementById('ssBtn').addEventListener('click', function(){
    calc(true);
    if (resBox.classList.contains('show')) resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  var inputs = [diagEl, unitEl, ratioEl, resWEl, resHEl];
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(){ calc(false); });
    inputs[i].addEventListener('change', function(){ calc(false); });
  }
  document.getElementById('ssClear').addEventListener('click', function(){
    diagEl.value = '';
    resWEl.value = '';
    resHEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Desk planning:** check whether a 27" or 32" monitor actually fits your desk or monitor arm before ordering.
- **TV shopping:** compare real width and height of 55" vs 65" TVs against your wall or TV stand.
- **Comparing phones and tablets:** two devices with the same diagonal but different ratios have different widths — this shows the true size.
- **Sharpness checks:** add the resolution to see PPI and judge whether a bigger screen will look less sharp at your viewing distance.

## Frequently asked questions

**Why do two screens with the same diagonal have different widths?**
Because the aspect ratio differs. A 27" 16:9 monitor and a 27" 21:9 ultrawide share a diagonal, but the ultrawide is wider and shorter.

**Is the diagonal the whole device or just the display?**
Just the visible display area, corner to corner. Bezels and the outer frame are not included, which is how manufacturers measure too.

**What PPI is considered sharp?**
Around 90–110 PPI is typical for desktop monitors viewed at arm's length. Above 150 PPI text looks very crisp, and phones often exceed 400 PPI.
