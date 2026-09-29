---
title: "Free Mortgage Payment Calculator"
description: "Free mortgage calculator: enter home price, down payment, rate, and term to see your monthly payment with a principal vs interest split."
date: 2026-09-29
draft: false
---

A mortgage is usually the biggest bill of your life, so knowing the real monthly payment before you fall in love with a house matters. This free calculator breaks your payment into principal and interest — and shows how much of the first payment actually builds your equity.

<div class="calc">
  <label for="mgPrice">Home price</label>
  <input type="number" id="mgPrice" placeholder="e.g. 350000" min="1">
  <label for="mgDown">Down payment</label>
  <input type="number" id="mgDown" placeholder="e.g. 70000" min="0">
  <label for="mgRate">Annual interest rate (%)</label>
  <input type="number" id="mgRate" placeholder="e.g. 6.5" min="0" max="30" step="0.01">
  <label for="mgTerm">Loan term</label>
  <select id="mgTerm" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font)">
    <option value="15">15 years</option>
    <option value="20">20 years</option>
    <option value="30" selected>30 years</option>
  </select>
  <button onclick="calcMortgage()">Calculate payment</button>
  <div class="result" id="mgResult"></div>
</div>

<script>
function calcMortgage() {
  var price = parseFloat(document.getElementById('mgPrice').value);
  var down = parseFloat(document.getElementById('mgDown').value) || 0;
  var rate = parseFloat(document.getElementById('mgRate').value);
  var years = parseInt(document.getElementById('mgTerm').value, 10);
  var out = document.getElementById('mgResult');
  if (!price || price <= 0) { out.innerHTML = '<p>Please enter a valid home price.</p>'; return; }
  if (down < 0 || down >= price) { out.innerHTML = '<p>The down payment must be between 0 and the home price.</p>'; return; }
  if (isNaN(rate) || rate < 0 || rate > 30) { out.innerHTML = '<p>Please enter an annual rate between 0 and 30%.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var loan = price - down;
  var r = rate / 100 / 12, n = years * 12;
  var pmt = rate === 0 ? loan / n : loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  var firstInterest = loan * r;
  var firstPrincipal = pmt - firstInterest;
  var totalPaid = pmt * n;
  var totalInterest = totalPaid - loan;
  var dpPct = (down / price * 100).toFixed(1);
  var html = '<p style="font-size:1.4rem"><strong>Monthly payment (P&I): ' + fmt(pmt) + '</strong></p>' +
    '<p><strong>Loan amount:</strong> ' + fmt(loan) + ' &nbsp;|&nbsp; <strong>Down payment:</strong> ' + fmt(down) + ' (' + dpPct + '%)</p>' +
    '<p><strong>First payment split:</strong></p>' +
    '<p>Principal: ' + fmt(firstPrincipal) + '</p><div class="bar"><i style="width:' + (firstPrincipal / pmt * 100).toFixed(1) + '%;background:#0b6e4f"></i></div>' +
    '<p>Interest: ' + fmt(firstInterest) + '</p><div class="bar"><i style="width:' + (firstInterest / pmt * 100).toFixed(1) + '%;background:#c9a227"></i></div>' +
    '<p><strong>Total interest over ' + years + ' years:</strong> ' + fmt(totalInterest) + '</p>';
  if (dpPct < 20) {
    html += '<div class="callout"><strong>Note:</strong> with less than 20% down, most lenders add mortgage insurance (PMI/MI) to your bill until you build equity. Ask your lender for the exact figure.</div>';
  } else {
    html += '<div class="callout"><strong>Tip:</strong> 20% down typically avoids mortgage insurance. Paying just one extra payment a year can shave years off a 30-year loan.</div>';
  }
  out.innerHTML = html;
}
</script>

## Remember the rest of the bill

Principal and interest are only part of ownership. Budget separately for property taxes, homeowner's insurance, maintenance (about 1% of the home's value per year), and any HOA fees before deciding what you can afford.
