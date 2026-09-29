---
title: "Free Debt-to-Income (DTI) Calculator"
description: "Free DTI calculator: enter your gross monthly income and debt payments to get your debt-to-income ratio and what it means."
date: 2026-09-29
draft: false
---

Your **debt-to-income ratio (DTI)** is the number lenders check first — it's your monthly debt payments divided by your gross monthly income. A lower DTI means more borrowing power and less stress. This free calculator gives you your ratio and a plain-English rating.

<div class="calc">
  <label for="dtiIncome">Gross monthly income (before taxes)</label>
  <input type="number" id="dtiIncome" placeholder="e.g. 6000" min="1">
  <label for="dtiDebts">Total monthly debt payments (mortgage/rent, loans, credit cards, car…)</label>
  <input type="number" id="dtiDebts" placeholder="e.g. 1800" min="0">
  <button onclick="calcDti()">Calculate my DTI</button>
  <div class="result" id="dtiResult"></div>
</div>

<script>
function calcDti() {
  var income = parseFloat(document.getElementById('dtiIncome').value);
  var debts = parseFloat(document.getElementById('dtiDebts').value);
  var out = document.getElementById('dtiResult');
  if (!income || income <= 0) { out.innerHTML = '<p>Please enter your gross monthly income.</p>'; return; }
  if (isNaN(debts) || debts < 0) { out.innerHTML = '<p>Please enter your monthly debt payments (0 is fine).</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var dti = debts / income * 100;
  var rating, color, advice;
  if (dti < 20) {
    rating = 'Excellent'; color = '#0b6e4f';
    advice = 'Lenders love this. You have plenty of room for a mortgage or loan if you want one — keep it this way.';
  } else if (dti < 36) {
    rating = 'Good'; color = '#0b6e4f';
    advice = 'Healthy range. Most lenders are comfortable here. Keep saving and avoid new debt before big applications.';
  } else if (dti < 43) {
    rating = 'Fair — caution zone'; color = '#c9a227';
    advice = 'Many mortgage lenders cap here. Avoid taking on new debt and work on paying balances down before applying for credit.';
  } else if (dti < 50) {
    rating = 'High'; color = '#a31621';
    advice = 'Borrowing will be difficult and expensive. Prioritize paying down the highest-rate debt first.';
  } else {
    rating = 'Critical'; color = '#a31621';
    advice = 'Over half your income goes to debt. Consider a debt payoff plan or professional advice before borrowing anything new.';
  }
  out.innerHTML =
    '<p style="font-size:1.4rem"><strong>Your DTI: <span style="color:' + color + '">' + dti.toFixed(1) + '%</span></strong> — ' + rating + '</p>' +
    '<div class="bar"><i style="width:' + Math.min(dti, 100).toFixed(1) + '%;background:' + color + '"></i></div>' +
    '<p>' + fmt(debts) + ' in debt payments ÷ ' + fmt(income) + ' gross income</p>' +
    '<div class="callout"><strong>What this means:</strong> ' + advice + '</div>';
}
</script>

## Front-end vs. back-end DTI

Lenders sometimes use two versions: **front-end** (housing costs only) and **back-end** (all debts, which is what this calculator does). Back-end is the stricter and more common test — aim to keep it under 36%.
