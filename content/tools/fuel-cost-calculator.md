---
title: "Free Fuel Cost Calculator — Petrol/Diesel Trip Cost (PKR)"
description: "Free fuel cost calculator: enter trip distance, your car's mileage, current petrol/diesel price in Pakistan and trips per month — see litres used, cost per trip and monthly fuel bill. Compare two vehicles."
category: finance
date: 2026-11-02
draft: false
---
## How it works
Enter how far you drive, what your vehicle averages in km per litre, the current fuel price in Pakistan and how many trips you make each month. The calculator works out the litres you burn, the cost per trip and your total monthly fuel bill — and if you enter a second vehicle's mileage, it compares them side by side so you can see which one is cheaper to run.
<div class="tool-shell" id="fuelShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15h10v-6.5h3.5v4.67c0 1.54 1.17 2.84 2.68 2.98 1.6.15 2.97-1.11 2.97-2.7V9c0-.66-.26-1.26-.68-1.77zM14 17H6V5h8v12z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Fuel Cost Calculator</h2>
<p>Litres, rupees per trip and monthly bill — petrol or diesel, Pakistan prices.</p>
</div>
<button type="button" class="theme-toggle" id="fuelTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your trip</p>
<div class="settings-grid">
<div class="setting">
<label for="fuelDist">One-way trip distance (km)</label>
<input type="number" id="fuelDist" class="tool-input" placeholder="e.g. 25" min="0" step="0.1">
<div class="hint">Distance of a single trip — the calculator multiplies it by your monthly trips.</div>
</div>
<div class="setting">
<label for="fuelTrips">Number of trips per month</label>
<input type="number" id="fuelTrips" class="tool-input" placeholder="e.g. 44" min="0">
<div class="hint">E.g. 22 workdays × 2 (to office and back) = 44 trips.</div>
</div>
<div class="setting">
<label for="fuelPrice">Fuel price per litre (PKR)</label>
<input type="number" id="fuelPrice" class="tool-input" placeholder="e.g. 290" min="0" step="0.01">
<div class="hint">Current petrol or diesel price — use the same fuel type for both vehicles.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Vehicle mileage (km/l)</p>
<div class="settings-grid">
<div class="setting">
<label for="fuelMileA">Vehicle A — mileage (km/l)</label>
<input type="number" id="fuelMileA" class="tool-input" placeholder="e.g. 14" min="0.1" step="0.1">
<div class="hint">Your current car or bike's average km per litre.</div>
</div>
<div class="setting">
<label for="fuelMileB">Vehicle B — mileage (km/l, optional)</label>
<input type="number" id="fuelMileB" class="tool-input" placeholder="e.g. 18" min="0.1" step="0.1">
<div class="hint">Enter a second vehicle to compare running costs — leave blank to skip.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your fuel costs</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fuelBtn">
<svg viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15h10v-6.5h3.5v4.67c0 1.54 1.17 2.84 2.68 2.98 1.6.15 2.97-1.11 2.97-2.7V9c0-.66-.26-1.26-.68-1.77zM14 17H6V5h8v12z"/></svg>
Calculate fuel cost
</button>
<button type="button" class="btn-pro-outline" id="fuelClear">Clear</button>
</div>
<div class="results" id="fuelResults">
<p class="result-head">⛽ Your fuel costs</p>
<div class="result-summary" id="fuelSummary"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many trip and vehicle comparisons as you like — every calculation happens in your browser.</p>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('fuelShell');
  ToolPro.themeToggle(shell, document.getElementById('fuelTheme'));
  var resBox = document.getElementById('fuelResults');
  var summary = document.getElementById('fuelSummary');
  function fmt(n){ return 'Rs. ' + Math.round(n).toLocaleString('en-PK'); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function vehicleRow(name, dist, trips, price, mileage){
    var litresPerTrip = dist / mileage;
    var costPerTrip = litresPerTrip * price;
    var monthlyLitres = litresPerTrip * trips;
    var monthlyCost = costPerTrip * trips;
    return { name: name, litresPerTrip: litresPerTrip, costPerTrip: costPerTrip, monthlyLitres: monthlyLitres, monthlyCost: monthlyCost };
  }
  document.getElementById('fuelBtn').addEventListener('click', function(){
    var dist = num('fuelDist');
    var trips = num('fuelTrips');
    var price = num('fuelPrice');
    var mileA = num('fuelMileA');
    var mileB = num('fuelMileB');
    if (isNaN(dist) || dist <= 0) { showError('Enter a one-way trip distance greater than 0.'); return; }
    if (isNaN(trips) || trips < 0) { showError('Enter number of trips per month (0 or more).'); return; }
    if (isNaN(price) || price <= 0) { showError('Enter the fuel price per litre (more than 0).'); return; }
    if (isNaN(mileA) || mileA <= 0) { showError('Enter Vehicle A mileage in km/l (more than 0).'); return; }
    if (!isNaN(mileB) && mileB <= 0) { showError('Vehicle B mileage must be greater than 0, or leave it blank.'); return; }
    var a = vehicleRow('Vehicle A', dist, trips, price, mileA);
    var html = '<p style="font-size:1.2rem;"><strong>' + a.name + '</strong> (' + mileA + ' km/l)</p>'
      + '<p>Fuel per trip: <strong>' + a.litresPerTrip.toFixed(2) + ' L</strong> &nbsp;·&nbsp; Cost per trip: <strong>' + fmt(a.costPerTrip) + '</strong></p>'
      + '<p>Monthly fuel: <strong>' + a.monthlyLitres.toFixed(1) + ' L</strong> &nbsp;·&nbsp; Monthly cost: <strong style="color:#b45309">' + fmt(a.monthlyCost) + '</strong></p>';
    if (!isNaN(mileB)) {
      var b = vehicleRow('Vehicle B', dist, trips, price, mileB);
      var diff = a.monthlyCost - b.monthlyCost;
      html += '<hr style="border:none;border-top:1px solid #ddd;margin:12px 0;">'
        + '<p style="font-size:1.2rem;"><strong>' + b.name + '</strong> (' + mileB + ' km/l)</p>'
        + '<p>Fuel per trip: <strong>' + b.litresPerTrip.toFixed(2) + ' L</strong> &nbsp;·&nbsp; Cost per trip: <strong>' + fmt(b.costPerTrip) + '</strong></p>'
        + '<p>Monthly fuel: <strong>' + b.monthlyLitres.toFixed(1) + ' L</strong> &nbsp;·&nbsp; Monthly cost: <strong style="color:#b45309">' + fmt(b.monthlyCost) + '</strong></p>'
        + '<hr style="border:none;border-top:1px solid #ddd;margin:12px 0;">';
      if (diff > 0) {
        html += '<p>Vehicle B saves <strong style="color:#0b6e4f">' + fmt(diff) + '</strong> per month (about ' + fmt(diff*12) + ' per year).</p>';
      } else if (diff < 0) {
        html += '<p>Vehicle A saves <strong style="color:#0b6e4f">' + fmt(-diff) + '</strong> per month (about ' + fmt(-diff*12) + ' per year).</p>';
      } else {
        html += '<p>Both vehicles cost the same to run for this trip pattern.</p>';
      }
    }
    summary.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Fuel cost calculated', 'ok');
  });
  document.getElementById('fuelClear').addEventListener('click', function(){
    ['fuelDist','fuelTrips','fuelPrice','fuelMileA','fuelMileB'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Fuel needed is simply distance divided by mileage, and cost is litres multiplied by the per-litre price. The monthly figures scale by the number of trips:
**Litres per trip = trip distance (km) ÷ mileage (km/l)**
**Cost per trip = litres per trip × price per litre**
**Monthly cost = cost per trip × trips per month**
For a two-vehicle comparison, the same distance and price are applied to each mileage, so the difference in monthly cost is purely from fuel efficiency.
## Everyday uses
- **Commute budgeting:** set an accurate monthly fuel line in your budget instead of guessing.
- **Car purchase decision:** compare a petrol vs hybrid vs CNG car's running cost for your actual commute.
- **Trip planning:** work out the fuel share per person before a long road trip with friends.
## Frequently asked questions
### Should I use one-way or round-trip distance?
Enter the one-way distance and let the "trips per month" count handle both directions. For example, a 25 km commute each way with 22 workdays is 25 km × 44 trips. If you prefer, you can enter the round-trip distance and halve the trip count — the total is identical.
### Why does my real fuel bill differ from the result?
Real mileage varies with traffic, AC use, speed, tyre pressure and load, so your actual consumption will fluctuate month to month. Use a realistic average (what your car's trip computer shows over a full tank) for the most reliable estimate.
### Does this work for diesel and CNG too?
Yes, as long as you enter the matching price per litre (or per kg for CNG, treating kg as the unit) and mileage in km per that unit. Just keep the price unit and mileage unit consistent — km per litre with price per litre, or km per kg with price per kg.
