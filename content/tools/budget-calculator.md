---
title: "Free Monthly Budget Calculator (50/30/20 Rule)"
description: "Free budget calculator: enter your monthly income and see your 50/30/20 budget split for needs, wants, and savings instantly."
date: 2026-09-29
draft: false
---

## How it works

Enter your monthly take-home pay below. The calculator splits it using the popular **50/30/20 rule**:

- **50% — Needs:** rent, bills, groceries, transport
- **30% — Wants:** dining out, hobbies, subscriptions
- **20% — Savings:** emergency fund, debt payoff, investing

<div class="calc">
  <label for="income">Monthly take-home income ($ or £)</label>
  <input type="number" id="income" placeholder="e.g. 3000" min="0">
  <button onclick="calcBudget()">Calculate my budget</button>
  <div class="result" id="budgetResult"></div>
</div>

<script>
function calcBudget() {
  var income = parseFloat(document.getElementById('income').value);
  var out = document.getElementById('budgetResult');
  if (!income || income <= 0) {
    out.innerHTML = '<p>Please enter a valid income amount.</p>';
    return;
  }
  var needs = income * 0.50, wants = income * 0.30, save = income * 0.20;
  function fmt(n){ return n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  out.innerHTML =
    '<p><strong>Needs (50%):</strong> ' + fmt(needs) + '</p><div class="bar"><i style="width:50%;background:#0b6e4f"></i></div>' +
    '<p><strong>Wants (30%):</strong> ' + fmt(wants) + '</p><div class="bar"><i style="width:30%;background:#2f9e6e"></i></div>' +
    '<p><strong>Savings (20%):</strong> ' + fmt(save) + '</p><div class="bar"><i style="width:20%;background:#7cc9a4"></i></div>' +
    '<div class="callout"><strong>Tip:</strong> on a low or irregular income, aim for the savings portion first — even 5–10% builds the habit. Read our <a href="/posts/how-to-create-a-budget-on-a-low-income/">low-income budgeting guide</a> next.</div>';
}
</script>

## Why the 50/30/20 rule works for beginners

It's simple enough to remember and flexible enough to adjust. If your rent alone eats 50% of your income (common in big US and UK cities), treat the percentages as targets, not laws — the real win is spending less than you earn and automating the savings part.
