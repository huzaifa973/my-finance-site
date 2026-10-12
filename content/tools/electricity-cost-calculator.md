---
title: "Free Electricity Cost Calculator"
description: "Work out what any appliance costs to run — enter watts, hours per day and your price per kWh to see daily, monthly and yearly costs."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Enter an appliance's wattage, how many hours it runs each day, and your electricity price per kWh. The calculator shows the energy it uses each month and exactly what it costs per day, per month, and per year.

<div class="tool-shell" id="ecShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="6"/><path d="M9 17h6v2H9zM9.6 20h4.8l-.8 2H10.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Electricity Cost Calculator</h2>
<p>See what any appliance really costs to run — per day, per month and per year.</p>
</div>
<button type="button" class="theme-toggle" id="ecTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick an appliance or enter watts</p>
<div class="settings-panel">
<div class="preset-row" id="ecPresets">
<button type="button" class="preset-chip" data-watts="10" data-hours="5">LED bulb · 10W</button>
<button type="button" class="preset-chip" data-watts="65" data-hours="8">Laptop · 65W</button>
<button type="button" class="preset-chip" data-watts="150" data-hours="24">Fridge · 150W</button>
<button type="button" class="preset-chip" data-watts="1500" data-hours="8">AC · 1500W</button>
<button type="button" class="preset-chip" data-watts="500" data-hours="1">Washing machine · 500W</button>
</div>
</div>
<div class="setting">
<label for="ecWatts">Appliance power (watts)</label>
<input type="number" id="ecWatts" class="tool-input" style="max-width:180px;" min="0" step="any" placeholder="e.g. 1500">
<div class="hint">Wattage is printed on the label or plug of almost every appliance.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Usage and price</p>
<div class="setting">
<label for="ecHours">Hours used per day</label>
<input type="number" id="ecHours" class="tool-input" style="max-width:180px;" min="0" max="24" step="any" placeholder="e.g. 8">
</div>
<div class="setting">
<label for="ecDays">Days per month</label>
<input type="number" id="ecDays" class="tool-input" style="max-width:180px;" min="1" max="31" step="1" value="30">
</div>
<div class="setting">
<label for="ecPrice">Price per kWh (USD)</label>
<input type="number" id="ecPrice" class="tool-input" style="max-width:180px;" min="0" step="0.01" value="0.17">
<div class="hint">Find your rate on your electricity bill — the US average is about $0.17 per kWh.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See the running cost</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ecBtn">
<svg viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z"/></svg>
Calculate cost
</button>
<button type="button" class="btn-pro-outline" id="ecClear">Clear</button>
</div>
<div class="results" id="ecResults">
<p class="result-head">💡 Running cost</p>
<div class="result-summary" id="ecResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This calculator runs entirely in your browser — check every appliance in your home and find the energy hogs.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ecShell');
  ToolPro.themeToggle(shell, document.getElementById('ecTheme'));
  var wattsEl = document.getElementById('ecWatts');
  var hoursEl = document.getElementById('ecHours');
  var daysEl = document.getElementById('ecDays');
  var priceEl = document.getElementById('ecPrice');
  var resBox = document.getElementById('ecResults');
  var out = document.getElementById('ecResult');
  function money(n){ return '$' + n.toFixed(2); }
  function calc(showToast){
    var w = parseFloat(wattsEl.value);
    var h = parseFloat(hoursEl.value);
    var d = parseFloat(daysEl.value);
    var p = parseFloat(priceEl.value);
    if (!w || w <= 0 || !h || h <= 0) {
      if (showToast) ToolPro.toast('Enter watts and hours per day first', 'err');
      return;
    }
    if (!d || d <= 0) d = 30;
    if (!p || p < 0) p = 0;
    var kwhDay = w / 1000 * h;
    var kwhMonth = kwhDay * d;
    var costDay = kwhDay * p;
    var costMonth = kwhMonth * p;
    var costYear = costMonth * 12;
    out.innerHTML = '<p style="font-size:1.3rem;">Cost per month: <strong>' + money(costMonth) + '</strong></p>'
      + '<p>Energy used: <strong>' + kwhMonth.toFixed(2) + ' kWh</strong> per month (' + kwhDay.toFixed(2) + ' kWh per day)</p>'
      + '<p>Cost per day: <strong>' + money(costDay) + '</strong> · Cost per year: <strong>' + money(costYear) + '</strong></p>';
    resBox.classList.add('show');
    if (showToast) ToolPro.toast('Cost calculated', 'ok');
  }
  document.getElementById('ecPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    wattsEl.value = chip.dataset.watts;
    hoursEl.value = chip.dataset.hours;
    calc(false);
    ToolPro.toast('Preset set: ' + chip.textContent);
  });
  document.getElementById('ecBtn').addEventListener('click', function(){
    calc(true);
    if (resBox.classList.contains('show')) resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  var inputs = [wattsEl, hoursEl, daysEl, priceEl];
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(){ calc(false); });
    inputs[i].addEventListener('change', function(){ calc(false); });
  }
  document.getElementById('ecClear').addEventListener('click', function(){
    wattsEl.value = '';
    hoursEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Bill surprises:** find out whether the space heater, AC, or old fridge is behind a high electricity bill.
- **Buying decisions:** compare the yearly running cost of two appliances before choosing the efficient model.
- **Home office:** work out what your laptop, monitors, and lights cost per month when you work from home.
- **Renting and roommates:** estimate a fair share of the power bill for a heater, AC unit, or gaming PC.

## Frequently asked questions

**How do I find an appliance's wattage?**
Check the label on the back, bottom, or plug — it is usually printed as "W" (for example 1500W). If only amps and volts are shown, multiply them together to get watts.

**What exactly is a kWh?**
A kilowatt-hour is 1,000 watts running for one hour. Your bill charges per kWh, so a 1500W heater running 2 hours uses 3 kWh.

**Why is my real bill a bit different?**
Some appliances cycle on and off — a fridge's compressor does not run constantly — and many bills add fees or tiered rates. Treat the result as a close estimate, and adjust the hours to match real usage.
