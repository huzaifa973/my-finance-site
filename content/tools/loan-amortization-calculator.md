---
title: "Free Loan Amortization Calculator"
description: "Free loan amortization calculator: enter any loan amount, rate, and term to see your monthly payment and a full schedule."
date: 2026-09-29
draft: false
---

Ever wonder why your loan balance barely moves in the first year? That's amortization: early payments are mostly interest, later ones mostly principal. This free calculator shows your monthly payment and a month-by-month schedule so you can see exactly where your money goes.

<style>
.am-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.88rem}
.am-table th,.am-table td{padding:.4rem .35rem;border-bottom:1px solid var(--border);text-align:right}
.am-table th{background:var(--accent-soft);color:var(--accent-dark);font-weight:700}
.am-table-wrap{overflow-x:auto}
</style>

<div class="calc">
  <label for="laAmount">Loan amount</label>
  <input type="number" id="laAmount" placeholder="e.g. 20000" min="1">
  <label for="laRate">Annual interest rate (%)</label>
  <input type="number" id="laRate" placeholder="e.g. 6.5" min="0" max="40" step="0.01">
  <label for="laTerm">Term (years)</label>
  <input type="number" id="laTerm" placeholder="e.g. 5" min="1" max="40">
  <button onclick="calcAmort()">Build my schedule</button>
  <div class="result" id="laResult"></div>
</div>

<script>
function calcAmort() {
  var amount = parseFloat(document.getElementById('laAmount').value);
  var rate = parseFloat(document.getElementById('laRate').value);
  var years = parseFloat(document.getElementById('laTerm').value);
  var out = document.getElementById('laResult');
  if (!amount || amount <= 0) { out.innerHTML = '<p>Please enter a valid loan amount.</p>'; return; }
  if (isNaN(rate) || rate < 0 || rate > 40) { out.innerHTML = '<p>Please enter an annual rate between 0 and 40%.</p>'; return; }
  if (!years || years < 1 || years > 40) { out.innerHTML = '<p>Please enter a term between 1 and 40 years.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var r = rate / 100 / 12, n = Math.round(years * 12);
  var pmt = rate === 0 ? amount / n : amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  var bal = amount, totalInterest = 0;
  var rows = '';
  var show = Math.min(n, 12);
  for (var m = 1; m <= show; m++) {
    var interest = bal * r;
    var principal = pmt - interest;
    bal -= principal;
    if (bal < 0.005) bal = 0;
    totalInterest += interest;
    rows += '<tr><td>' + m + '</td><td>' + fmt(pmt) + '</td><td>' + fmt(principal) + '</td><td>' + fmt(interest) + '</td><td>' + fmt(bal) + '</td></tr>';
  }
  // finish off totals without rendering every row
  var bal2 = bal;
  for (var m2 = show + 1; m2 <= n; m2++) {
    var interest2 = bal2 * r;
    var principal2 = pmt - interest2;
    bal2 -= principal2;
    totalInterest += interest2;
  }
  var totalPaid = amount + totalInterest;
  var table = '<div class="am-table-wrap"><table class="am-table"><thead><tr><th>Mo</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    (n > 12 ? '<p>…showing the first 12 of ' + n + ' months. The pattern continues: principal rises, interest falls.</p>' : '');
  out.innerHTML =
    '<p style="font-size:1.4rem"><strong>Monthly payment: ' + fmt(pmt) + '</strong></p>' +
    '<p><strong>Total interest:</strong> ' + fmt(totalInterest) + ' &nbsp;|&nbsp; <strong>Total repaid:</strong> ' + fmt(totalPaid) + '</p>' +
    table +
    '<div class="callout"><strong>Tip:</strong> extra payments attack the principal directly. Even $50 extra a month can cut months off a multi-year loan — check that your lender applies extra payments to principal, not just future interest.</div>';
}
</script>

## Fixed-rate, simplified

This schedule assumes a fixed interest rate, equal monthly payments, and no fees or early-payment penalties. Variable-rate or interest-only loans follow different patterns — but the core idea holds: more principal, sooner, always wins.
