---
title: "Free Debt Snowball Payoff Calculator"
description: "Free debt snowball calculator: list your debts to see your payoff order, months to debt-free, and how much interest you'll save."
date: 2026-09-29
draft: false
---

The **debt snowball method** means attacking your smallest balance first while paying minimums on everything else. When one debt is gone, you roll its payment into the next. Those early wins keep you motivated — and the math still beats paying minimums forever.

<div class="calc">
  <p style="margin-top:0">Add your debts below (up to 10). Order doesn't matter — we'll sort smallest balance first.</p>
  <div id="snowDebts"></div>
  <button type="button" onclick="addSnowDebt()" style="background:#2f9e6e">+ Add a debt</button>
  <label for="snowExtra">Extra amount you can pay each month</label>
  <input type="number" id="snowExtra" placeholder="e.g. 100" min="0">
  <button onclick="calcSnowball()">Calculate payoff plan</button>
  <div class="result" id="snowResult"></div>
</div>

<script>
var snowCount = 0;
function addSnowDebt(name, bal, rate, minp) {
  if (snowCount >= 10) { alert('You can add up to 10 debts.'); return; }
  snowCount++;
  var d = document.createElement('div');
  d.className = 'snow-debt';
  d.style.cssText = 'border:1px solid var(--border);border-radius:8px;padding:.8rem;margin-bottom:.8rem';
  d.innerHTML =
    '<label>Debt ' + snowCount + ' name</label><input type="text" class="s-name" placeholder="e.g. Credit card" value="' + (name || '') + '">' +
    '<label>Balance owed</label><input type="number" class="s-bal" placeholder="e.g. 2500" min="0" value="' + (bal || '') + '">' +
    '<label>Interest rate (% APR)</label><input type="number" class="s-rate" placeholder="e.g. 19.99" min="0" step="0.01" value="' + (rate || '') + '">' +
    '<label>Minimum monthly payment</label><input type="number" class="s-minp" placeholder="e.g. 75" min="0" value="' + (minp || '') + '">';
  document.getElementById('snowDebts').appendChild(d);
}
function calcSnowball() {
  var out = document.getElementById('snowResult');
  var debts = [];
  document.querySelectorAll('.snow-debt').forEach(function (d) {
    var nm = d.querySelector('.s-name').value.trim() || 'Unnamed debt';
    var bal = parseFloat(d.querySelector('.s-bal').value);
    var rate = parseFloat(d.querySelector('.s-rate').value) || 0;
    var minp = parseFloat(d.querySelector('.s-minp').value);
    if (!isNaN(bal) && bal > 0 && !isNaN(minp) && minp > 0) debts.push({name: nm, bal: bal, rate: rate, minp: minp});
  });
  var extra = parseFloat(document.getElementById('snowExtra').value) || 0;
  if (debts.length === 0) { out.innerHTML = '<p>Please add at least one debt with a balance and a minimum payment.</p>'; return; }
  if (extra < 0) { out.innerHTML = '<p>The extra payment cannot be negative.</p>'; return; }
  debts.sort(function (a, b) { return a.bal - b.bal; });
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  // Minimums-only baseline
  function simulate(withSnowball) {
    var ds = debts.map(function (d) { return {bal: d.bal, mr: d.rate / 100 / 12, minp: d.minp}; });
    var months = 0, interest = 0, freedPayment = 0;
    while (ds.length && months < 600) {
      months++;
      ds.forEach(function (d) { var i = d.bal * d.mr; d.bal += i; interest += i; });
      ds.sort(function (a, b) { return a.bal - b.bal; });
      // pay minimums on every debt
      ds.forEach(function (d) { var pay = Math.min(d.minp, d.bal); d.bal -= pay; });
      // snowball any extra + freed payments toward the smallest balance
      if (withSnowball) {
        var left = extra + freedPayment;
        for (var i = 0; i < ds.length && left > 0; i++) {
          var p = Math.min(left, ds[i].bal);
          ds[i].bal -= p; left -= p;
        }
      }
      var remaining = [];
      ds.forEach(function (d) {
        if (d.bal <= 0.01) { if (withSnowball) freedPayment += d.minp; }
        else remaining.push(d);
      });
      ds = remaining;
    }
    return {months: months, interest: interest};
  }
  var withBall = simulate(true);
  var minsOnly = simulate(false);
  var saved = minsOnly.interest - withBall.interest;
  var orderList = debts.map(function (d, i) {
    return '<li><strong>' + (i + 1) + '. ' + escapeHtml(d.name) + '</strong> — ' + fmt(d.bal) + ' at ' + d.rate.toFixed(2) + '% APR</li>';
  }).join('');
  function ym(m) { var y = Math.floor(m / 12), mo = m % 12; return y > 0 ? y + ' yr' + (y > 1 ? 's' : '') + (mo ? ' ' + mo + ' mo' : '') : mo + ' months'; }
  function ymOrNever(m) { return m >= 600 ? 'over 50 years — your minimums barely cover the interest' : ym(m); }
  out.innerHTML =
    '<p><strong>Payoff order (smallest first):</strong></p><ol>' + orderList + '</ol>' +
    '<p><strong>Debt-free in:</strong> ' + ymOrNever(withBall.months) + (withBall.months < 600 ? ' (' + withBall.months + ' months)' : '') + '</p>' +
    '<p><strong>Total interest with snowball:</strong> ' + fmt(withBall.interest) + '</p>' +
    '<p><strong>Total interest paying minimums only:</strong> ' + fmt(minsOnly.interest) + '</p>' +
    '<p><strong>Interest you save:</strong> <span style="color:#0b6e4f;font-weight:700">' + fmt(saved) + '</span></p>' +
    '<div class="callout"><strong>Tip:</strong> even an extra $50 a month dramatically shortens the plan. Put it toward debt #1 and watch the snowball roll.</div>';
}
function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
addSnowDebt('Credit card', '', '', '');
addSnowDebt('Car loan', '', '', '');
</script>

## Snowball vs. avalanche

The snowball targets the **smallest balance** first for quick wins. The avalanche targets the **highest rate** first and saves slightly more interest mathematically. Research shows snowballers are more likely to stick with the plan — pick the one you'll actually finish.
