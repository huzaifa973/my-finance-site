---
title: "Free 50/30/20 Budget Splitter"
description: "Free 50/30/20 budget splitter: enter your take-home pay to instantly split it into needs, wants, and savings with visual bars."
date: 2026-09-29
draft: false
---

The 50/30/20 rule is the simplest budget in personal finance: half your take-home pay for needs, 30% for wants, 20% for savings. This free splitter does the math for you instantly — enter your pay and see your three buckets, with bars to compare them at a glance.

<div class="calc">
  <label for="sbsPay">Monthly take-home pay</label>
  <input type="number" id="sbsPay" placeholder="e.g. 3500" min="1">
  <button onclick="calcSplit()">Split my budget</button>
  <div class="result" id="sbsResult"></div>
</div>

<script>
function calcSplit() {
  var pay = parseFloat(document.getElementById('sbsPay').value);
  var out = document.getElementById('sbsResult');
  if (!pay || pay <= 0) { out.innerHTML = '<p>Please enter a valid take-home pay amount.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var needs = pay * 0.5, wants = pay * 0.3, save = pay * 0.2;
  out.innerHTML =
    '<p><strong>Needs (50%):</strong> ' + fmt(needs) + '</p><div class="bar"><i style="width:50%;background:#0b6e4f"></i></div>' +
    '<p style="margin-bottom:.2rem">Rent, bills, groceries, transport, insurance, minimum debt payments.</p>' +
    '<p><strong>Wants (30%):</strong> ' + fmt(wants) + '</p><div class="bar"><i style="width:30%;background:#2f9e6e"></i></div>' +
    '<p style="margin-bottom:.2rem">Dining out, hobbies, subscriptions, travel, shopping.</p>' +
    '<p><strong>Savings (20%):</strong> ' + fmt(save) + '</p><div class="bar"><i style="width:20%;background:#c9a227"></i></div>' +
    '<p style="margin-bottom:.2rem">Emergency fund, debt payoff, investing.</p>' +
    '<div class="callout"><strong>Tip:</strong> if your needs exceed 50% (very common with city rents), shrink the wants bucket first — protect the savings portion at all costs. Even 10% saved beats 0%.</div>';
}
</script>

## Rules, not laws

Think of 50/30/20 as a starting point, not a pass/fail test. A high earner might save 40%; someone on a tight income might save 5% while paying down debt. The habit matters more than the exact percentages.
