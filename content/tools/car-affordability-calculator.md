---
title: "How Much Car Can I Afford? Free Calculator"
description: "Free car affordability calculator: enter your income and debts to find your affordable car price range using the 15% rule."
date: 2026-09-29
draft: false
---

Car dealers are happy to sell you a car you can't afford — this free calculator keeps them honest. Using the widely recommended **15% rule** (total car costs under 15% of take-home pay), it works backward from your income to a price range that won't wreck your budget.

<div class="calc">
  <label for="caIncome">Monthly take-home income</label>
  <input type="number" id="caIncome" placeholder="e.g. 4000" min="1">
  <label for="caDebts">Monthly debt payments (excluding any car payment)</label>
  <input type="number" id="caDebts" placeholder="e.g. 350" min="0">
  <label for="caDown">Down payment / trade-in value</label>
  <input type="number" id="caDown" placeholder="e.g. 5000" min="0">
  <label for="caTerm">Loan term</label>
  <select id="caTerm" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font)">
    <option value="36">3 years</option>
    <option value="48">4 years</option>
    <option value="60" selected>5 years</option>
    <option value="72">6 years</option>
  </select>
  <label for="caRate">Expected APR (%)</label>
  <input type="number" id="caRate" placeholder="e.g. 7" min="0" max="30" step="0.1">
  <button onclick="calcCar()">How much car can I afford?</button>
  <div class="result" id="caResult"></div>
</div>

<script>
function calcCar() {
  var income = parseFloat(document.getElementById('caIncome').value);
  var debts = parseFloat(document.getElementById('caDebts').value) || 0;
  var down = parseFloat(document.getElementById('caDown').value) || 0;
  var term = parseInt(document.getElementById('caTerm').value, 10);
  var rate = parseFloat(document.getElementById('caRate').value);
  var out = document.getElementById('caResult');
  if (!income || income <= 0) { out.innerHTML = '<p>Please enter your monthly take-home income.</p>'; return; }
  if (debts < 0 || down < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; return; }
  if (isNaN(rate) || rate < 0 || rate > 30) { out.innerHTML = '<p>Please enter an APR between 0 and 30%.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  // 15% of take-home is the max total car budget; reserve ~25% of that for insurance/fuel/maintenance
  var totalCarBudget = income * 0.15;
  var runningCosts = totalCarBudget * 0.25;
  var maxPayment = totalCarBudget - runningCosts;
  if (maxPayment <= 0) { out.innerHTML = '<p>Your current debts leave no room under the 15% rule. Reduce debts or increase the down payment first.</p>'; return; }
  var r = rate / 100 / 12, n = term;
  var maxLoan = rate === 0 ? maxPayment * n : maxPayment * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
  var maxPrice = maxLoan + down;
  var comfyPrice = maxPrice * 0.8; // comfortable zone
  out.innerHTML =
    '<p><strong>Max monthly car budget (15% of take-home):</strong> ' + fmt(totalCarBudget) + '</p>' +
    '<p>Of that, ~' + fmt(runningCosts) + ' goes to insurance, fuel &amp; maintenance, leaving <strong>' + fmt(maxPayment) + '/month</strong> for the loan itself.</p>' +
    '<p style="font-size:1.3rem"><strong>Affordable price range: ' + fmt(comfyPrice) + ' – ' + fmt(maxPrice) + '</strong></p>' +
    '<p>The top of the range assumes a ' + term + '-month loan at ' + rate.toFixed(1) + '% APR with ' + fmt(down) + ' down. The bottom is the comfortable zone.</p>' +
    '<div class="callout"><strong>Tip:</strong> follow the 20/4/10 rule as a cross-check: at least 20% down, no more than a 4-year term, and total car costs under 10–15% of gross income. Shorter terms save thousands in interest.</div>';
}
</script>

## The 15% rule in plain English

Add up your loan payment, insurance, fuel, and maintenance. If the total is more than 15% of your take-home pay, the car is too much — no matter what the dealer says your monthly payment can be. A longer loan term lowers the payment but raises the total cost.
