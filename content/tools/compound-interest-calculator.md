---
title: "Free Compound Interest Calculator"
description: "Free compound interest calculator: enter your principal, monthly contribution, rate, and years to see your money grow, year by year."
date: 2026-09-29
draft: false
---

Compound interest is the engine behind almost every long-term savings plan — interest earning interest on itself. This free calculator shows you exactly how your money could grow over time, with a year-by-year breakdown. No sign-up, no fees, just math.

<style>
.cic-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.92rem}
.cic-table th,.cic-table td{padding:.45rem .4rem;border-bottom:1px solid var(--border);text-align:right}
.cic-table th:first-child,.cic-table td:first-child{text-align:left}
.cic-table th{background:var(--accent-soft);color:var(--accent-dark);font-weight:700}
.cic-table td:first-child{font-weight:600}
</style>

<div class="calc">
  <label for="ciPrincipal">Starting amount</label>
  <input type="number" id="ciPrincipal" placeholder="e.g. 1000" min="0">
  <label for="ciMonthly">Monthly contribution</label>
  <input type="number" id="ciMonthly" placeholder="e.g. 200" min="0">
  <label for="ciRate">Annual interest rate (%)</label>
  <input type="number" id="ciRate" placeholder="e.g. 7" min="0" step="0.1">
  <label for="ciYears">Number of years</label>
  <input type="number" id="ciYears" placeholder="e.g. 20" min="1" max="80">
  <button onclick="calcCompound()">Calculate growth</button>
  <div class="result" id="ciResult"></div>
</div>

<script>
function calcCompound() {
  var p = parseFloat(document.getElementById('ciPrincipal').value) || 0;
  var m = parseFloat(document.getElementById('ciMonthly').value) || 0;
  var rate = parseFloat(document.getElementById('ciRate').value);
  var years = parseInt(document.getElementById('ciYears').value, 10);
  var out = document.getElementById('ciResult');
  if (isNaN(rate) || rate < 0 || rate > 50) { out.innerHTML = '<p>Please enter an annual rate between 0 and 50%.</p>'; return; }
  if (!years || years < 1 || years > 80) { out.innerHTML = '<p>Please enter a number of years between 1 and 80.</p>'; return; }
  if (p < 0 || m < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var r = rate / 100;
  var balance = p, invested = p, finalBalance = p;
  var rows = '', maxBal = p;
  var yearly = [];
  for (var y = 1; y <= years; y++) {
    balance = balance * (1 + r) + m * 12;
    invested += m * 12;
    yearly.push({y: y, bal: balance, inv: invested});
    if (balance > maxBal) maxBal = balance;
  }
  finalBalance = balance;
  var interest = finalBalance - invested;
  yearly.forEach(function (row) {
    var pct = maxBal > 0 ? (row.bal / maxBal * 100) : 0;
    rows += '<tr><td>' + row.y + '</td><td>' + fmt(row.inv) + '</td><td>' + fmt(row.bal - row.inv) + '</td><td>' + fmt(row.bal) + '</td></tr>' +
      '<tr><td colspan="4" style="padding-top:0"><div class="bar" style="margin:0"><i style="width:' + pct.toFixed(1) + '%;background:#0b6e4f"></i></div></td></tr>';
  });
  out.innerHTML =
    '<p><strong>Future value:</strong> ' + fmt(finalBalance) + '</p>' +
    '<p><strong>Total you invested:</strong> ' + fmt(invested) + '</p>' +
    '<p><strong>Interest earned:</strong> <span style="color:#0b6e4f;font-weight:700">' + fmt(interest) + '</span></p>' +
    '<table class="cic-table"><thead><tr><th>Year</th><th>Invested</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table>' +
    '<div class="callout"><strong>Tip:</strong> time matters more than timing. Starting ten years earlier often beats a higher contribution later — small monthly amounts add up faster than you think.</div>';
}
</script>

## Why compounding beats saving alone

If you invest $200 a month for 20 years at a 7% average annual return, you'll have put in $48,000 — but your balance can be close to double that. The extra comes from growth compounding on growth, which accelerates the longer you stay invested.
