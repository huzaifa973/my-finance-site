---
title: "Free Retirement Savings Projector"
description: "Free retirement projector: enter your age, savings, and monthly contributions to see your projected retirement balance."
date: 2026-09-29
draft: false
---

Retirement feels far away until you see the numbers — then starting early feels urgent. This free projector takes your current savings, monthly contributions, and an expected return, and shows what you could have at retirement age. No scare tactics, just your own trajectory.

<div class="calc">
  <label for="rsAge">Current age</label>
  <input type="number" id="rsAge" placeholder="e.g. 30" min="16" max="80">
  <label for="rsRetire">Retirement age</label>
  <input type="number" id="rsRetire" placeholder="e.g. 65" min="40" max="90">
  <label for="rsCurrent">Current retirement savings</label>
  <input type="number" id="rsCurrent" placeholder="e.g. 10000" min="0">
  <label for="rsMonthly">Monthly contribution</label>
  <input type="number" id="rsMonthly" placeholder="e.g. 400" min="0">
  <label for="rsReturn">Expected annual return (%)</label>
  <input type="number" id="rsReturn" placeholder="e.g. 7" min="0" max="15" step="0.1">
  <button onclick="calcRetire()">Project my savings</button>
  <div class="result" id="rsResult"></div>
</div>

<script>
function calcRetire() {
  var age = parseInt(document.getElementById('rsAge').value, 10);
  var retire = parseInt(document.getElementById('rsRetire').value, 10);
  var current = parseFloat(document.getElementById('rsCurrent').value) || 0;
  var monthly = parseFloat(document.getElementById('rsMonthly').value) || 0;
  var ret = parseFloat(document.getElementById('rsReturn').value);
  var out = document.getElementById('rsResult');
  if (!age || age < 16 || age > 80) { out.innerHTML = '<p>Please enter a current age between 16 and 80.</p>'; return; }
  if (!retire || retire < 40 || retire > 90) { out.innerHTML = '<p>Please enter a retirement age between 40 and 90.</p>'; return; }
  if (retire <= age) { out.innerHTML = '<p>Retirement age must be after your current age.</p>'; return; }
  if (current < 0 || monthly < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; return; }
  if (isNaN(ret) || ret < 0 || ret > 15) { out.innerHTML = '<p>Please enter an expected return between 0 and 15%.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var years = retire - age;
  var months = years * 12;
  var r = ret / 100 / 12;
  var balance = current * Math.pow(1 + r, months);
  if (r > 0) {
    balance += monthly * (Math.pow(1 + r, months) - 1) / r;
  } else {
    balance += monthly * months;
  }
  var contributed = current + monthly * months;
  var growth = balance - contributed;
  var monthlyIncome4pct = balance * 0.04 / 12;
  out.innerHTML =
    '<p><strong>Years until retirement:</strong> ' + years + '</p>' +
    '<p style="font-size:1.4rem"><strong>Projected balance at ' + retire + ': ' + fmt(balance) + '</strong></p>' +
    '<p><strong>You contributed:</strong> ' + fmt(contributed) + '</p>' +
    '<p><strong>Growth did the rest:</strong> <span style="color:#0b6e4f;font-weight:700">' + fmt(growth) + '</span></p>' +
    '<p>Rough sustainable income (4% rule): about <strong>' + fmt(monthlyIncome4pct) + '/month</strong> in retirement.</p>' +
    '<div class="callout"><strong>Tip:</strong> this is before inflation and taxes. A 7% nominal return is roughly 4–5% after inflation — try the calculator with a lower return to see a more conservative picture.</div>';
}
</script>

## Projections are not promises

Markets go up and down; no calculator knows the future. Use projections to set a savings target and check in yearly. If you're behind, small increases now beat big catches-up later — thanks to compounding.
