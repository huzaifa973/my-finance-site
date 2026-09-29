---
title: "Free Emergency Fund Calculator"
description: "Free emergency fund calculator: enter monthly expenses to find your target fund size and how long it will take to build."
date: 2026-09-29
draft: false
---

An emergency fund is what keeps a broken car or a medical bill from becoming credit card debt. Experts usually recommend 3–6 months of essential expenses. This free calculator finds your personal target and tells you how long it'll take to build it at your current savings rate.

<div class="calc">
  <label for="efExpenses">Total monthly essential expenses (housing, bills, food, transport)</label>
  <input type="number" id="efExpenses" placeholder="e.g. 2500" min="1">
  <label for="efMonths">Months of coverage you want</label>
  <input type="number" id="efMonths" placeholder="e.g. 6" min="1" max="24">
  <label for="efSaved">Already saved in your emergency fund</label>
  <input type="number" id="efSaved" placeholder="e.g. 1000" min="0">
  <label for="efRate">Monthly amount you can save toward it</label>
  <input type="number" id="efRate" placeholder="e.g. 300" min="0">
  <button onclick="calcEmergency()">Calculate my target</button>
  <div class="result" id="efResult"></div>
</div>

<script>
function calcEmergency() {
  var exp = parseFloat(document.getElementById('efExpenses').value);
  var months = parseFloat(document.getElementById('efMonths').value);
  var saved = parseFloat(document.getElementById('efSaved').value) || 0;
  var rate = parseFloat(document.getElementById('efRate').value) || 0;
  var out = document.getElementById('efResult');
  if (!exp || exp <= 0) { out.innerHTML = '<p>Please enter your monthly essential expenses.</p>'; return; }
  if (!months || months < 1 || months > 24) { out.innerHTML = '<p>Please enter a coverage goal between 1 and 24 months.</p>'; return; }
  if (saved < 0 || rate < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var target = exp * months;
  var remaining = target - saved;
  var pct = Math.min(saved / target * 100, 100);
  var html = '<p><strong>Your emergency fund target:</strong> ' + fmt(target) + ' (' + months + ' × ' + fmt(exp) + ')</p>' +
    '<div class="bar"><i style="width:' + pct.toFixed(1) + '%;background:#0b6e4f"></i></div>' +
    '<p><strong>' + pct.toFixed(1) + '% funded</strong> — ' + fmt(Math.max(saved, 0)) + ' saved';
  if (remaining <= 0) {
    html += ' — you\'re fully funded! 🎉';
  } else {
    html += ', <strong>' + fmt(remaining) + ' to go</strong>.</p>';
    if (rate <= 0) {
      html += '<p>Enter a monthly savings amount to see your timeline.</p>';
    } else {
      var m = Math.ceil(remaining / rate);
      var date = new Date();
      date.setMonth(date.getMonth() + m);
      html += '<p>At ' + fmt(rate) + '/month you\'ll be fully funded in <strong>' + m + ' month' + (m > 1 ? 's' : '') + '</strong> (around ' + date.toLocaleString(undefined, {month: 'long', year: 'numeric'}) + ').</p>';
    }
  }
  var starter = Math.max(Math.min(1000, target), 0);
  html += '<div class="callout"><strong>Tip:</strong> if the full target feels huge, start with a starter goal of ' + fmt(starter) + ' — enough to stop most emergencies from becoming debt. Build the rest after high-interest debt is cleared.</div>';
  out.innerHTML = html;
}
</script>

## Where to keep it

Your emergency fund belongs somewhere safe and boring — a separate savings account you can reach in a day or two, but not so close you spend it. It doesn't need to earn much; it needs to be there.
