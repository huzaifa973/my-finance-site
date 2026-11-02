---
title: "Free Zakat Calculator (2.5% Nisab, Gold & Silver)"
description: "Free zakat calculator: work out your 2.5% zakat on cash, gold, silver, investments and receivables minus debts, with nisab thresholds shown in USD and PKR."
category: finance
date: 2026-11-02
draft: false
---
## How it works
Zakat is due at 2.5% on wealth that has been in your possession for one full lunar year and exceeds the nisab threshold. Enter what you own — cash, gold, silver, investments and money owed to you — subtract your debts, and this calculator shows your net zakatable wealth, compares it to the gold and silver nisab, and computes the zakat due.
<div class="tool-shell" id="zkcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.69.71-3.2 1.84-4.26A9 9 0 0 0 12 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Zakat Calculator</h2>
<p>Cash, gold, silver and investments — minus debts — at the 2.5% rate.</p>
</div>
<button type="button" class="theme-toggle" id="zkcTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — runs in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Your wealth (enter values in USD)</p>
<div class="settings-grid">
<div class="setting">
<label for="zkcCash">Cash savings ($)</label>
<input type="number" id="zkcCash" class="tool-input" placeholder="e.g. 5000" min="0">
</div>
<div class="setting">
<label for="zkcGold">Gold value ($)</label>
<input type="number" id="zkcGold" class="tool-input" placeholder="e.g. 3000" min="0">
<div class="hint">Market value of gold jewellery and coins you own.</div>
</div>
<div class="setting">
<label for="zkcSilver">Silver value ($)</label>
<input type="number" id="zkcSilver" class="tool-input" placeholder="e.g. 200" min="0">
</div>
<div class="setting">
<label for="zkcInvest">Investments &amp; stocks ($)</label>
<input type="number" id="zkcInvest" class="tool-input" placeholder="e.g. 8000" min="0">
<div class="hint">Shares, mutual funds, crypto and other tradable assets.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Receivables and debts</p>
<div class="settings-grid">
<div class="setting">
<label for="zkcReceivable">Money owed to you ($)</label>
<input type="number" id="zkcReceivable" class="tool-input" placeholder="e.g. 1000" min="0">
<div class="hint">Loans you expect to be repaid, rent receivable, unpaid salary.</div>
</div>
<div class="setting">
<label for="zkcDebt">Debts &amp; liabilities ($)</label>
<input type="number" id="zkcDebt" class="tool-input" placeholder="e.g. 2000" min="0">
<div class="hint">Subtract what you owe: loans, credit cards, bills due this month.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your zakat</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="zkcBtn">
<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.69.71-3.2 1.84-4.26A9 9 0 0 0 12 3z"/></svg>
Calculate zakat
</button>
<button type="button" class="btn-pro-outline" id="zkcClear">Clear</button>
</div>
<div class="results" id="zkcResults">
<p class="result-head">🕌 Your zakat breakdown</p>
<div class="result-summary" id="zkcSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('zkcShell');
  ToolPro.themeToggle(shell, document.getElementById('zkcTheme'));
  var resBox = document.getElementById('zkcResults');
  var summary = document.getElementById('zkcSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function fmtPKR(n){ return 'Rs. ' + Math.round(Math.abs(n)).toLocaleString(); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function n0(id){ var v = num(id); return isNaN(v) ? 0 : v; }
  /* Approx market rates — fluctuate daily. Nisab: 87.48g gold or 612.36g silver. */
  var GOLD_USD_G = 74, SILVER_USD_G = 0.95, PKR_PER_USD = 280;
  var NISAB_GOLD_G = 87.48, NISAB_SILVER_G = 612.36;
  var nisabGoldUSD = NISAB_GOLD_G * GOLD_USD_G;
  var nisabSilverUSD = NISAB_SILVER_G * SILVER_USD_G;
  document.getElementById('zkcBtn').addEventListener('click', function(){
    var cash = n0('zkcCash'), gold = n0('zkcGold'), silver = n0('zkcSilver');
    var invest = n0('zkcInvest'), receivable = n0('zkcReceivable'), debt = n0('zkcDebt');
    if (cash < 0 || gold < 0 || silver < 0 || invest < 0 || receivable < 0 || debt < 0) { showError('Values cannot be negative.'); return; }
    var assets = cash + gold + silver + invest + receivable;
    if (assets <= 0) { showError('Enter at least one asset value greater than $0.'); return; }
    var net = assets - debt;
    if (net < 0) net = 0;
    var dueSilver = net >= nisabSilverUSD;
    var dueGold = net >= nisabGoldUSD;
    var zakat = dueSilver ? net * 0.025 : 0;
    var status = dueSilver
      ? (dueGold ? 'Above both thresholds — zakat is due.' : 'Above the silver nisab but below the gold nisab — zakat is due under the silver standard (scholars differ; if unsure, consult a scholar).')
      : 'Below the nisab threshold — no zakat is due on this wealth.';
    var html = '<p>Total assets: <strong>' + fmt(assets) + '</strong></p>'
      + '<p>Less debts &amp; liabilities: <strong>−' + fmt(debt) + '</strong></p>'
      + '<p style="font-size:1.15rem;">Net zakatable wealth: <strong>' + fmt(net) + '</strong> (' + fmtPKR(net * PKR_PER_USD) + ')</p>'
      + '<p>Nisab (silver, ' + NISAB_SILVER_G + 'g): <strong>' + fmt(nisabSilverUSD) + '</strong> ≈ ' + fmtPKR(nisabSilverUSD * PKR_PER_USD) + ' — ' + (dueSilver ? 'exceeded' : 'not exceeded') + '</p>'
      + '<p>Nisab (gold, ' + NISAB_GOLD_G + 'g): <strong>' + fmt(nisabGoldUSD) + '</strong> ≈ ' + fmtPKR(nisabGoldUSD * PKR_PER_USD) + ' — ' + (dueGold ? 'exceeded' : 'not exceeded') + '</p>'
      + '<p style="margin-top:0.6rem;">' + status + '</p>';
    if (dueSilver) {
      html += '<p style="font-size:1.3rem;">Zakat due (2.5%): <strong style="color:#0b6e4f">' + fmt(zakat) + '</strong> ≈ ' + fmtPKR(zakat * PKR_PER_USD) + '</p>';
    }
    html += '<p style="font-size:0.85rem;opacity:0.75;margin-top:0.6rem;">Gold/silver prices and the PKR rate used here are approximate and change daily — verify current rates before paying. This is an estimate, not religious advice.</p>';
    summary.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Zakat calculation ready', 'ok');
  });
  document.getElementById('zkcClear').addEventListener('click', function(){
    var ids = ['zkcCash','zkcGold','zkcSilver','zkcInvest','zkcReceivable','zkcDebt'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Zakat is a flat 2.5% (1/40th) on zakatable wealth that has been held for a full lunar year and exceeds the nisab. First your assets are summed and debts subtracted:
**Net zakatable wealth = (cash + gold + silver + investments + receivables) − debts**
The nisab is the minimum amount that triggers zakat — it equals the value of either 87.48 grams of gold or 612.36 grams of silver. Because silver is far cheaper, the silver nisab is the lower and more commonly used threshold for cash wealth. If your net wealth reaches the nisab, zakat = net wealth × 0.025. The gold and silver prices and PKR exchange rate used here are approximate; check live rates on the day you pay.
## Everyday uses
- **Ramadan planning:** work out exactly what to set aside before the holy month so your zakat is ready to distribute.
- **Mixed-portfolio check:** see whether cash, stocks and gold together push you over the nisab when any one category alone would not.
- **Debt review:** confirm how much outstanding debt legitimately reduces your zakatable base before you pay.
## Frequently asked questions
### Which nisab should I use — gold or silver?
Scholars differ. Many use the silver nisab (about 612.36g) because it is lower and therefore includes more people in the obligation; others use the gold nisab (87.48g). This calculator shows both so you can apply the standard your scholar recommends. If your wealth falls between the two, the difference of opinion matters — consult a qualified scholar.
### Do I pay zakat on the gold jewellery I wear?
Most scholars count all gold and silver you own — including jewellery — toward zakatable wealth, regardless of whether it is worn. Personal items like clothing, furniture and the home you live in are generally excluded. Rules vary by school of thought, so confirm with your scholar.
### What if my wealth dips below the nisab during the year?
Zakat is assessed at one point in time — your zakat anniversary (one lunar year after wealth first reached the nisab). Fluctuations below the nisab during the year do not cancel the obligation if you are above it on that date, though detailed rules apply; a scholar can advise on your specific situation.
