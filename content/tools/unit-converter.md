---
title: "Free Unit Converter (Length, Weight, Temperature)"
description: "Convert length, weight, and temperature instantly: miles to km, kg to lbs, °C to °F and more. Free, no sign-up."
date: 2026-09-29
draft: false
---

## How it works

Pick a category, enter a value, choose the units — the conversion happens instantly.

<div class="tool-shell" id="ucShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Unit Converter</h2>
<p>Convert length, weight, and temperature instantly — miles to km, kg to lbs, °C to °F and more.</p>
</div>
<button type="button" class="theme-toggle" id="ucTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter a value</p>
<div class="settings-grid">
<div class="setting">
<label for="ucVal">Value</label>
<input type="number" class="tool-input" id="ucVal" placeholder="1">
</div>
<div class="setting">
<label for="ucFrom">From</label>
<select id="ucFrom" class="tool-input"></select>
</div>
<div class="setting">
<label for="ucTo">To</label>
<select id="ucTo" class="tool-input"></select>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="ucCats">
<button type="button" class="preset-chip active" data-cat="length">📏 Length</button>
<button type="button" class="preset-chip" data-cat="weight">⚖️ Weight</button>
<button type="button" class="preset-chip" data-cat="temp">🌡️ Temperature</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ucDec">Decimal places: <span class="val" id="ucDecVal">4</span></label>
<input type="range" id="ucDec" min="0" max="8" step="1" value="4">
<div class="hint">Fewer decimals for quick estimates, more for precise work.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your conversion</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="ucCopy">📋 Copy result</button>
<button type="button" class="btn-pro-outline" id="ucClear">Clear</button>
</div>
<div class="results show">
<p class="result-head">🔄 Result</p>
<div class="result-summary" id="ucResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many values as you like, as often as you like.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('ucShell');
  ToolPro.themeToggle(shell, document.getElementById('ucTheme'));

  var UNITS = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, ft: 0.3048, inch: 0.0254, yd: 0.9144 },
    weight: { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495231, tonne: 1000 },
    temp: { C: 'C', F: 'F', K: 'K' }
  };
  var NAMES = { m:'meters', km:'kilometers', cm:'centimeters', mm:'millimeters', mi:'miles', ft:'feet', inch:'inches', yd:'yards',
    kg:'kilograms', g:'grams', lb:'pounds', oz:'ounces', tonne:'tonnes', C:'°C', F:'°F', K:'kelvin' };

  var cat = 'length';
  var decimals = 4;

  var catsRow = document.getElementById('ucCats');
  catsRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    catsRow.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    cat = chip.dataset.cat;
    ucRender();
    ToolPro.toast('Category: ' + chip.textContent.trim());
  });

  var decRange = document.getElementById('ucDec');
  ToolPro.bindSlider(decRange, document.getElementById('ucDecVal'), function(v){ return v; });
  decRange.addEventListener('input', function(){
    decimals = parseInt(decRange.value, 10);
    ucConvert();
  });

  function ucRender() {
    var keys = Object.keys(UNITS[cat]);
    var f = document.getElementById('ucFrom'), t = document.getElementById('ucTo');
    f.innerHTML = ''; t.innerHTML = '';
    keys.forEach(function(k){
      f.add(new Option(NAMES[k] + ' (' + k + ')', k));
      t.add(new Option(NAMES[k] + ' (' + k + ')', k));
    });
    t.selectedIndex = 1 % keys.length;
    ucConvert();
  }
  function ucConvert() {
    var v = parseFloat(document.getElementById('ucVal').value);
    var from = document.getElementById('ucFrom').value, to = document.getElementById('ucTo').value;
    var o = document.getElementById('ucResult');
    if (isNaN(v)) { o.innerHTML = '<p>Enter a value to convert.</p>'; return; }
    var res;
    if (cat === 'temp') {
      var c = from === 'C' ? v : (from === 'F' ? (v - 32) * 5/9 : v - 273.15);
      res = to === 'C' ? c : (to === 'F' ? c * 9/5 + 32 : c + 273.15);
    } else {
      res = v * UNITS[cat][from] / UNITS[cat][to];
    }
    o.innerHTML = '<p><strong>' + v + ' ' + NAMES[from] + ' = ' +
      res.toLocaleString(undefined,{maximumFractionDigits:decimals}) + ' ' + NAMES[to] + '</strong></p>';
  }

  document.getElementById('ucVal').addEventListener('input', ucConvert);
  document.getElementById('ucFrom').addEventListener('change', ucConvert);
  document.getElementById('ucTo').addEventListener('change', ucConvert);

  document.getElementById('ucCopy').addEventListener('click', function(){
    var txt = document.getElementById('ucResult').textContent.trim();
    if(txt) ToolPro.copyText(txt, 'Result copied to clipboard');
  });
  document.getElementById('ucClear').addEventListener('click', function(){
    document.getElementById('ucVal').value = '';
    ucConvert();
    ToolPro.toast('Cleared');
  });

  ucRender();
})();
</script>

## Common conversions

- **Miles ↔ kilometers:** 1 mile = 1.609 km (handy for US/UK road trips and running).
- **Pounds ↔ kilograms:** 1 lb = 0.454 kg (recipes, luggage, gym weights).
- **°F ↔ °C:** 68°F = 20°C, 32°F = 0°C — the two anchor points worth memorizing.
