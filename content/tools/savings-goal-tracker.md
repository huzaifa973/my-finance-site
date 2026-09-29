---
title: "Free Savings Goal Tracker"
description: "Free savings goal tracker: set a target, enter what you've saved, and see your progress bar plus how many months are left."
date: 2026-09-29
draft: false
---

Saving without a clear target is like running without a finish line. Whether it's a holiday, a deposit on a home, or a new laptop — set the goal, see your progress, and find out exactly when you'll get there. This tracker is free to use as often as you like.

<div class="calc">
  <label for="sgGoal">Goal name (optional)</label>
  <input type="text" id="sgGoal" placeholder="e.g. Holiday fund">
  <label for="sgAmount">Goal amount</label>
  <input type="number" id="sgAmount" placeholder="e.g. 5000" min="1">
  <label for="sgSaved">Already saved</label>
  <input type="number" id="sgSaved" placeholder="e.g. 1200" min="0">
  <label for="sgMonthly">Monthly savings amount</label>
  <input type="number" id="sgMonthly" placeholder="e.g. 200" min="0">
  <button onclick="calcSavingsGoal()">Track my goal</button>
  <div class="result" id="sgResult"></div>
</div>

<script>
function calcSavingsGoal() {
  var name = document.getElementById('sgGoal').value.trim() || 'Your goal';
  var amount = parseFloat(document.getElementById('sgAmount').value);
  var saved = parseFloat(document.getElementById('sgSaved').value) || 0;
  var monthly = parseFloat(document.getElementById('sgMonthly').value) || 0;
  var out = document.getElementById('sgResult');
  if (!amount || amount <= 0) { out.innerHTML = '<p>Please enter a goal amount greater than zero.</p>'; return; }
  if (saved < 0 || monthly < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; return; }
  if (saved > amount) { out.innerHTML = '<p>The saved amount is already more than the goal — you\'ve done it! 🎉</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var remaining = amount - saved;
  var pct = (saved / amount * 100);
  var html = '<p><strong>' + escapeHtml(name) + '</strong></p>' +
    '<div class="bar"><i style="width:' + Math.min(pct, 100).toFixed(1) + '%;background:#0b6e4f"></i></div>' +
    '<p><strong>' + pct.toFixed(1) + '% saved</strong> — ' + fmt(saved) + ' of ' + fmt(amount) + '</p>';
  if (remaining === 0) {
    html += '<p style="color:#0b6e4f;font-weight:700">Goal reached! Well done.</p>';
  } else if (monthly <= 0) {
    html += '<p>You still need <strong>' + fmt(remaining) + '</strong>. Enter a monthly savings amount to see your finish date.</p>';
  } else {
    var months = Math.ceil(remaining / monthly);
    var date = new Date();
    date.setMonth(date.getMonth() + months);
    var monthName = date.toLocaleString(undefined, {month: 'long', year: 'numeric'});
    html += '<p><strong>' + fmt(remaining) + ' to go</strong> — at ' + fmt(monthly) + '/month you\'ll reach it in <strong>' + months + ' month' + (months > 1 ? 's' : '') + '</strong> (around ' + monthName + ').</p>';
    html += '<div class="callout"><strong>Tip:</strong> automate the transfer on payday. Money you never see is money you never miss.</div>';
  }
  out.innerHTML = html;
}
function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
</script>

## Why tracking works

Seeing the bar move is its own reward. Break big goals into monthly milestones, celebrate each one, and don't raid the fund for non-emergencies — that's what the monthly budget is for.
