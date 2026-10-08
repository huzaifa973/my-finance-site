---
title: "Free Debt Snowball Payoff Calculator"
description: "Free debt snowball calculator: list your debts to see your payoff order, months to debt-free, and how much interest you'll save."
date: 2026-09-29
draft: false
---

The **debt snowball method** means attacking your smallest balance first while paying minimums on everything else. When one debt is gone, you roll its payment into the next. Those early wins keep you motivated — and the math still beats paying minimums forever.

<div class="tool-shell" id="snowShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Debt Snowball Calculator</h2>
<p>List your debts and see your smallest-first payoff plan, months to debt-free, and interest saved.</p>
</div>
<button type="button" class="theme-toggle" id="snowTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — files never leave your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your debts</p>
<p style="margin:0 0 .8rem;font-size:.92rem;color:var(--tp-muted)">Add up to 10 debts — order doesn't matter, we sort smallest balance first.</p>
<div id="snowDebts"></div>
<button type="button" class="btn-pro-outline" id="snowAdd">＋ Add a debt</button>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Extra payment</p>
<div class="settings-panel">
<div class="preset-row" id="snowPresets">
<button type="button" class="preset-chip active" data-x="0">$0 extra</button>
<button type="button" class="preset-chip" data-x="50">$50 extra</button>
<button type="button" class="preset-chip" data-x="100">$100 extra</button>
<button type="button" class="preset-chip" data-x="250">$250 extra</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="snowExtraRange">Extra you can pay each month: <span class="val" id="snowExtraVal">$0</span></label>
<input type="range" id="snowExtraRange" min="0" max="2000" step="10" value="0">
<input type="number" id="snowExtra" class="tool-input" placeholder="e.g. 100" min="0" value="0" style="margin-top:.4rem">
<div class="hint">Even $50/month on top of minimums dramatically shortens the plan.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build your payoff plan</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="snowBtn">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
Calculate payoff plan
</button>
<button type="button" class="btn-pro-outline" id="snowClear">Clear all</button>
</div>
<div class="results" id="snowResults">
<p class="result-head">❄️ Your snowball plan</p>
<div class="result-summary" id="snowSummary"></div>
<div id="snowDetail"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Model as many payoff scenarios as you like — everything stays in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('snowShell');
  ToolPro.themeToggle(shell, document.getElementById('snowTheme'));

  var extraRange = document.getElementById('snowExtraRange');
  var extraVal = document.getElementById('snowExtraVal');
  var extraNum = document.getElementById('snowExtra');
  var presets = document.getElementById('snowPresets');
  var resBox = document.getElementById('snowResults');

  ToolPro.bindSlider(extraRange, extraVal, function(v){ return '$' + (+v).toLocaleString(); });
  extraRange.addEventListener('input', function(){ extraNum.value = extraRange.value; });
  extraNum.addEventListener('input', function(){
    if(extraNum.value !== ''){ extraRange.value = extraNum.value; extraRange.dispatchEvent(new Event('input')); }
  });
  function setExtra(x){
    extraNum.value = x; extraRange.value = x; extraRange.dispatchEvent(new Event('input'));
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', +c.dataset.x === +x);
    });
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setExtra(chip.dataset.x);
    ToolPro.toast('Extra payment set to $' + chip.dataset.x);
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  var snowCount = 0;
  function addSnowDebt(name, bal, rate, minp) {
    if (snowCount >= 10) { ToolPro.toast('You can add up to 10 debts.', 'err'); return; }
    snowCount++;
    var d = document.createElement('div');
    d.className = 'snow-debt';
    d.style.cssText = 'border:1px solid var(--tp-border);border-radius:10px;padding:.9rem;margin-bottom:.8rem;background:var(--tp-bg)';
    d.innerHTML =
      '<div class="settings-grid" style="margin:0">' +
      '<div class="setting"><label>Debt ' + snowCount + ' name</label><input type="text" class="s-name tool-input" placeholder="e.g. Credit card" value="' + escapeHtml(name || '') + '"></div>' +
      '<div class="setting"><label>Balance owed</label><input type="number" class="s-bal tool-input" placeholder="e.g. 2500" min="0" value="' + (bal || '') + '"></div>' +
      '<div class="setting"><label>Interest rate (% APR)</label><input type="number" class="s-rate tool-input" placeholder="e.g. 19.99" min="0" step="0.01" value="' + (rate || '') + '"></div>' +
      '<div class="setting"><label>Minimum monthly payment</label><input type="number" class="s-minp tool-input" placeholder="e.g. 75" min="0" value="' + (minp || '') + '"></div>' +
      '</div>' +
      '<button type="button" class="btn-pro-outline snow-remove" style="margin-top:.6rem;font-size:.85rem;padding:.4rem .9rem">Remove</button>';
    d.querySelector('.snow-remove').addEventListener('click', function(){
      d.remove();
      ToolPro.toast('Debt removed');
    });
    document.getElementById('snowDebts').appendChild(d);
  }

  function showError(msg){
    document.getElementById('snowSummary').innerHTML = '<p style="margin:0">' + msg + '</p>';
    document.getElementById('snowDetail').innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function calcSnowball() {
    var debts = [];
    document.querySelectorAll('.snow-debt').forEach(function (d) {
      var nm = d.querySelector('.s-name').value.trim() || 'Unnamed debt';
      var bal = parseFloat(d.querySelector('.s-bal').value);
      var rate = parseFloat(d.querySelector('.s-rate').value) || 0;
      var minp = parseFloat(d.querySelector('.s-minp').value);
      if (!isNaN(bal) && bal > 0 && !isNaN(minp) && minp > 0) debts.push({name: nm, bal: bal, rate: rate, minp: minp});
    });
    var extra = parseFloat(extraNum.value) || 0;
    if (debts.length === 0) { showError('Please add at least one debt with a balance and a minimum payment.'); return; }
    if (extra < 0) { showError('The extra payment cannot be negative.'); return; }
    debts.sort(function (a, b) { return a.bal - b.bal; });
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
    document.getElementById('snowSummary').innerHTML =
      'Debt-free in <strong>' + ymOrNever(withBall.months) + (withBall.months < 600 ? ' (' + withBall.months + ' months)' : '') + '</strong>' +
      ' · Interest you save: <strong style="color:#0b6e4f">' + fmt(saved) + '</strong>';
    document.getElementById('snowDetail').innerHTML =
      '<p><strong>Payoff order (smallest first):</strong></p><ol>' + orderList + '</ol>' +
      '<p><strong>Total interest with snowball:</strong> ' + fmt(withBall.interest) + '</p>' +
      '<p><strong>Total interest paying minimums only:</strong> ' + fmt(minsOnly.interest) + '</p>' +
      '<div class="callout"><strong>Tip:</strong> even an extra $50 a month dramatically shortens the plan. Put it toward debt #1 and watch the snowball roll.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Payoff plan ready', 'ok');
  }

  document.getElementById('snowAdd').addEventListener('click', function(){ addSnowDebt('', '', '', ''); });
  document.getElementById('snowBtn').addEventListener('click', calcSnowball);
  document.getElementById('snowClear').addEventListener('click', function(){
    document.getElementById('snowDebts').innerHTML = '';
    snowCount = 0;
    addSnowDebt('Credit card', '', '', '');
    addSnowDebt('Car loan', '', '', '');
    setExtra(0);
    resBox.classList.remove('show');
  });
  addSnowDebt('Credit card', '', '', '');
  addSnowDebt('Car loan', '', '', '');
})();
</script>

## Snowball vs. avalanche

The snowball targets the **smallest balance** first for quick wins. The avalanche targets the **highest rate** first and saves slightly more interest mathematically. Research shows snowballers are more likely to stick with the plan — pick the one you'll actually finish.
