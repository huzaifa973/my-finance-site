---
title: "Free Freelance Hourly Rate Calculator"
description: "Free freelance rate calculator: enter your target income, billable hours, and expenses to find the hourly rate you should charge."
date: 2026-09-29
draft: false
---

Most freelancers set their rate by guessing — then discover they're earning less than their old salary. This free calculator works backward from the income you actually want, adding taxes, expenses, and time off, so your rate covers the real cost of being your own boss.

<div class="calc">
  <label for="frIncome">Target annual take-home income</label>
  <input type="number" id="frIncome" placeholder="e.g. 60000" min="1">
  <label for="frHours">Billable hours per week</label>
  <input type="number" id="frHours" placeholder="e.g. 25" min="1" max="80">
  <label for="frWeeks">Weeks worked per year (vacation excluded)</label>
  <input type="number" id="frWeeks" placeholder="e.g. 48" min="1" max="52">
  <label for="frExpenses">Annual business expenses (tools, insurance, software…)</label>
  <input type="number" id="frExpenses" placeholder="e.g. 4000" min="0">
  <label for="frTax">Estimated tax rate (%) — includes self-employment/income tax</label>
  <input type="number" id="frTax" placeholder="e.g. 25" min="0" max="60" step="0.5">
  <button onclick="calcRate()">Calculate my rate</button>
  <div class="result" id="frResult"></div>
</div>

<script>
function calcRate() {
  var income = parseFloat(document.getElementById('frIncome').value);
  var hours = parseFloat(document.getElementById('frHours').value);
  var weeks = parseFloat(document.getElementById('frWeeks').value);
  var expenses = parseFloat(document.getElementById('frExpenses').value) || 0;
  var tax = parseFloat(document.getElementById('frTax').value);
  var out = document.getElementById('frResult');
  if (!income || income <= 0) { out.innerHTML = '<p>Please enter your target annual take-home income.</p>'; return; }
  if (!hours || hours <= 0 || hours > 80) { out.innerHTML = '<p>Please enter billable hours between 1 and 80 per week.</p>'; return; }
  if (!weeks || weeks < 1 || weeks > 52) { out.innerHTML = '<p>Please enter working weeks between 1 and 52.</p>'; return; }
  if (expenses < 0) { out.innerHTML = '<p>Expenses cannot be negative.</p>'; return; }
  if (isNaN(tax) || tax < 0 || tax >= 100) { out.innerHTML = '<p>Please enter a tax rate between 0 and 99%.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var grossNeeded = (income + expenses) / (1 - tax / 100);
  var billableHours = hours * weeks;
  var rate = grossNeeded / billableHours;
  var dayRate = rate * 8;
  out.innerHTML =
    '<p><strong>Gross revenue you need:</strong> ' + fmt(grossNeeded) + ' (covers income + expenses + taxes)</p>' +
    '<p><strong>Billable hours per year:</strong> ' + billableHours.toLocaleString() + '</p>' +
    '<p style="font-size:1.4rem"><strong>Your hourly rate: ' + fmt(rate) + '</strong></p>' +
    '<p>Equivalent day rate (8 hrs): <strong>' + fmt(dayRate) + '</strong></p>' +
    '<div class="callout"><strong>Tip:</strong> non-billable time (admin, marketing, proposals) isn\'t in this number — keep billable hours realistic, not optimistic. Many freelancers round their rate up to the nearest $5 and quote project rates from it.</div>';
}
</script>

## Why freelancers undercharge

A salary includes paid leave, employer taxes, and benefits — freelancing doesn't. If your old job paid $30/hour, your freelance rate needs to be far higher to match the same take-home. Run the numbers before you quote.
