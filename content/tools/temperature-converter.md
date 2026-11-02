---
title: "Free Temperature Converter — Celsius, Fahrenheit, Kelvin"
description: "Free temperature converter: instantly convert any value between Celsius (°C), Fahrenheit (°F) and Kelvin (K). Live results as you type, with the exact formulas shown."
category: utility
date: 2026-11-03
draft: false
---
## How it works
Temperature is just a number on a scale — converting between Celsius, Fahrenheit and Kelvin takes two simple linear formulas. Enter any value, pick the unit it is in, and this converter instantly shows the equivalent in all three scales. It updates live as you type, and it rejects values below absolute zero (0 K / −273.15 °C / −459.67 °F), which are physically impossible.
<div class="tool-shell" id="tmpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Temperature Converter</h2>
<p>Celsius, Fahrenheit and Kelvin — converted instantly, all three at once.</p>
</div>
<button type="button" class="theme-toggle" id="tmpTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — runs in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter a temperature</p>
<div class="settings-grid">
<div class="setting">
<label for="tmpValue">Temperature value</label>
<input type="number" id="tmpValue" class="tool-input" placeholder="e.g. 37" step="0.01">
</div>
<div class="setting">
<label for="tmpUnit">Unit of the value above</label>
<select id="tmpUnit" class="tool-input">
<option value="C" selected>Celsius (°C)</option>
<option value="F">Fahrenheit (°F)</option>
<option value="K">Kelvin (K)</option>
</select>
<div class="hint">Results update live as you type or change the unit.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quick reference</p>
<div class="settings-grid">
<div class="setting" style="grid-column:1/-1;">
<div class="hint" style="margin:0;">Water freezes at <strong>0 °C = 32 °F = 273.15 K</strong> and boils at <strong>100 °C = 212 °F = 373.15 K</strong> at standard atmospheric pressure. Normal human body temperature is about <strong>37 °C = 98.6 °F = 310.15 K</strong>. Absolute zero is <strong>0 K = −273.15 °C = −459.67 °F</strong> — nothing can be colder.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See all three conversions</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tmpBtn">
<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>
Convert
</button>
<button type="button" class="btn-pro-outline" id="tmpClear">Clear</button>
</div>
<div class="results" id="tmpResults">
<p class="result-head">🌡️ Converted temperatures</p>
<div class="result-summary" id="tmpSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as often as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('tmpShell');
  ToolPro.themeToggle(shell, document.getElementById('tmpTheme'));
  var resBox = document.getElementById('tmpResults');
  var summary = document.getElementById('tmpSummary');
  function fmtT(n){ return n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function convert(){
    var raw = document.getElementById('tmpValue').value;
    if (raw === '') { resBox.classList.remove('show'); return; }
    var val = parseFloat(raw);
    var unit = document.getElementById('tmpUnit').value;
    if (isNaN(val)) { showError('Enter a numeric temperature value.'); return; }
    var C;
    if (unit === 'C') { C = val; }
    else if (unit === 'F') { C = (val - 32) * 5 / 9; }
    else { C = val - 273.15; }
    if (C < -273.15) { showError('Temperature cannot be below absolute zero (−273.15 °C / −459.67 °F / 0 K).'); return; }
    var F = C * 9 / 5 + 32;
    var K = C + 273.15;
    var inputLabel = unit === 'C' ? '°C' : (unit === 'F' ? '°F' : ' K');
    summary.innerHTML = '<p style="font-size:1.3rem;margin:0 0 0.5rem;">' + fmtT(val) + inputLabel + ' equals:</p>'
      + '<p>Celsius: <strong>' + fmtT(C) + ' °C</strong></p>'
      + '<p>Fahrenheit: <strong>' + fmtT(F) + ' °F</strong></p>'
      + '<p>Kelvin: <strong>' + fmtT(K) + ' K</strong></p>'
      + '<p style="font-size:0.85rem;opacity:0.75;margin-top:0.75rem;">Formulas: °F = °C × 9/5 + 32 &nbsp;·&nbsp; °C = (°F − 32) × 5/9 &nbsp;·&nbsp; K = °C + 273.15 &nbsp;·&nbsp; °C = K − 273.15. Kelvin has no degree symbol — it is an absolute scale starting at 0 K.</p>';
    resBox.classList.add('show');
  }
  document.getElementById('tmpBtn').addEventListener('click', function(){
    convert();
    if (resBox.classList.contains('show')) {
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Conversion ready', 'ok');
    }
  });
  document.getElementById('tmpValue').addEventListener('input', convert);
  document.getElementById('tmpUnit').addEventListener('change', convert);
  document.getElementById('tmpClear').addEventListener('click', function(){
    document.getElementById('tmpValue').value = '';
    document.getElementById('tmpUnit').value = 'C';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
All three scales are linear offsets of one another. Celsius and Fahrenheit differ by both a scale factor (9/5) and an offset (32), while Kelvin is just Celsius shifted by 273.15 with the same size degree:
- **Celsius ↔ Fahrenheit:** °F = °C × 9/5 + 32 &nbsp;·&nbsp; °C = (°F − 32) × 5/9
- **Celsius ↔ Kelvin:** K = °C + 273.15 &nbsp;·&nbsp; °C = K − 273.15
To convert from Fahrenheit to Kelvin, first convert Fahrenheit to Celsius, then add 273.15. To go the other way, subtract 273.15 to get Celsius, then apply the Fahrenheit formula. The Kelvin scale has no negative values — 0 K is absolute zero, the theoretical lower limit of temperature.
## Everyday uses
- **Cooking and baking:** convert an oven temperature from a US recipe (°F) to your Indian oven's Celsius dial, or vice versa.
- **Weather and travel:** understand a forecast in an unfamiliar unit — 30 °C is a hot day (86 °F), −10 °C is a deep winter freeze (14 °F).
- **Science and homework:** check lab readings or physics problems across Celsius and Kelvin, where many formulas (gas laws, thermodynamics) require absolute temperature in Kelvin.
## Frequently asked questions
### Why is Kelvin written without a degree symbol?
Kelvin is an absolute thermodynamic scale, not a relative one, so its unit is the "kelvin" (symbol K, not °K). One kelvin is exactly the same size as one degree Celsius — the scales only differ by their zero point: 0 K = −273.15 °C.
### Why does water boil at 212 °F but 100 °C?
The Fahrenheit scale sets water's freezing point at 32 °F and boiling point at 212 °F — a 180-degree span. Celsius sets freezing at 0 °C and boiling at 100 °C — a 100-degree span. That 180/100 = 9/5 ratio is exactly the conversion factor between the two scales. Both numbers assume standard atmospheric pressure at sea level.
### Is there a temperature where Celsius and Fahrenheit are equal?
Yes — at −40 degrees: −40 °C = −40 °F. You can verify it by solving x = x × 9/5 + 32, which gives x = −40. Kelvin never equals either of them numerically in any physically valid range, since 0 K is already −273.15 °C.
