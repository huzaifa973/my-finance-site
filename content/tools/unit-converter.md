---
title: "Free Unit Converter (Length, Weight, Temperature)"
description: "Convert length, weight, and temperature instantly: miles to km, kg to lbs, °C to °F and more. Free, no sign-up."
date: 2026-09-29
draft: false
---

## How it works

Pick a category, enter a value, choose the units — the conversion happens instantly.

<div class="calc">
  <label for="ucCat">Category</label>
  <select id="ucCat" onchange="ucRender()" style="width:100%;padding:.6rem;border:2px solid #dfe7e2;border-radius:8px;">
    <option value="length">Length</option>
    <option value="weight">Weight</option>
    <option value="temp">Temperature</option>
  </select>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;margin-top:.75rem;">
    <div><label for="ucVal">Value</label><input type="number" id="ucVal" placeholder="1" style="width:120px;" oninput="ucConvert()"></div>
    <div><label for="ucFrom">From</label><select id="ucFrom" onchange="ucConvert()" style="padding:.6rem;"></select></div>
    <div><label for="ucTo">To</label><select id="ucTo" onchange="ucConvert()" style="padding:.6rem;"></select></div>
  </div>
  <div class="result" id="ucResult"></div>
</div>

<script>
var UNITS = {
  length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, ft: 0.3048, inch: 0.0254, yd: 0.9144 },
  weight: { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495231, tonne: 1000 },
  temp: { C: 'C', F: 'F', K: 'K' }
};
var NAMES = { m:'meters', km:'kilometers', cm:'centimeters', mm:'millimeters', mi:'miles', ft:'feet', inch:'inches', yd:'yards',
  kg:'kilograms', g:'grams', lb:'pounds', oz:'ounces', tonne:'tonnes', C:'°C', F:'°F', K:'kelvin' };
function ucRender() {
  var cat = document.getElementById('ucCat').value;
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
  var cat = document.getElementById('ucCat').value;
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
    res.toLocaleString(undefined,{maximumFractionDigits:4}) + ' ' + NAMES[to] + '</strong></p>';
}
ucRender();
</script>

## Common conversions

- **Miles ↔ kilometers:** 1 mile = 1.609 km (handy for US/UK road trips and running).
- **Pounds ↔ kilograms:** 1 lb = 0.454 kg (recipes, luggage, gym weights).
- **°F ↔ °C:** 68°F = 20°C, 32°F = 0°C — the two anchor points worth memorizing.
