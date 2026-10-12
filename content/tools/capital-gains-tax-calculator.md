---
title: "Free Capital Gains Tax Calculator"
description: "Free capital gains tax calculator: enter buy and sell prices to see your gain or loss, estimated tax owed, and net proceeds after tax."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter what you paid per share, what you sold (or plan to sell) at, and how many shares. Pick whether the holding is short-term or long-term, set your tax rate, and see your gain or loss, the estimated tax owed, and what you actually keep after tax.

<div class="tool-shell" id="cgtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 2.01-3.5 3.99 0 2.31 1.5 3.34 3.19 3.78 2.11.56 3.31 1.15 3.31 2.28 0 1.13-1.14 2.01-2.83 2.01-1.74 0-2.65-.94-2.69-2.19h-2.25c.05 1.76 1.05 3.61 3.46 4.12V21h3v-2.15c1.92-.35 3.5-1.93 3.5-3.94 0-2.55-1.56-3.55-3.7-4.01z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Capital Gains Tax Calculator</h2>
<p>Estimate the tax on a stock or asset sale before you sell — gain, tax, and what you keep.</p>
</div>
<button type="button" class="theme-toggle" id="cgtTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your trade</p>
<div class="settings-grid">
<div class="setting">
<label for="cgtBuy">Buy price per share</label>
<input type="number" id="cgtBuy" class="tool-input" placeholder="e.g. 50" min="0" step="0.01">
</div>
<div class="setting">
<label for="cgtSell">Sell price per share</label>
<input type="number" id="cgtSell" class="tool-input" placeholder="e.g. 80" min="0" step="0.01">
</div>
<div class="setting">
<label for="cgtShares">Number of shares</label>
<input type="number" id="cgtShares" class="tool-input" placeholder="e.g. 100" min="0" step="any">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Holding period and tax rate</p>
<div class="settings-panel">
<div class="setting">
<label for="cgtHold">Holding period</label>
<select id="cgtHold" class="tool-input" style="max-width:320px;">
<option value="long" selected>Long-term (held over 1 year)</option>
<option value="short">Short-term (held 1 year or less)</option>
</select>
</div>
<div class="preset-row" id="cgtPresets" style="margin-top:.6rem;"></div>
<div class="setting" style="margin-top:.6rem;">
<label for="cgtRate">Tax rate (%)</label>
<input type="number" id="cgtRate" class="tool-input" placeholder="e.g. 15" min="0" max="100" step="0.1" value="15" style="max-width:220px;">
<div class="hint">Federal long-term rates are usually 0%, 15%, or 20%; short-term gains are taxed at ordinary income rates such as 22%, 32%, or 37%. Edit the rate freely — raise it if you want to include state tax.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your tax estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cgtBtn">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 2.01-3.5 3.99 0 2.31 1.5 3.34 3.19 3.78 2.11.56 3.31 1.15 3.31 2.28 0 1.13-1.14 2.01-2.83 2.01-1.74 0-2.65-.94-2.69-2.19h-2.25c.05 1.76 1.05 3.61 3.46 4.12V21h3v-2.15c1.92-.35 3.5-1.93 3.5-3.94 0-2.55-1.56-3.55-3.7-4.01z"/></svg>
Estimate my tax
</button>
<button type="button" class="btn-pro-outline" id="cgtClear">Clear</button>
</div>
<div class="results" id="cgtResults">
<p class="result-head">📊 Your estimated capital gains tax</p>
<div class="result-summary" id="cgtResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — estimate taxes on as many trades as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cgtShell');
  ToolPro.themeToggle(shell, document.getElementById('cgtTheme'));
  var buyEl = document.getElementById('cgtBuy');
  var sellEl = document.getElementById('cgtSell');
  var sharesEl = document.getElementById('cgtShares');
  var holdEl = document.getElementById('cgtHold');
  var rateEl = document.getElementById('cgtRate');
  var chipsEl = document.getElementById('cgtPresets');
  var resBox = document.getElementById('cgtResults');
  var out = document.getElementById('cgtResult');
  var RATES = { long: [0, 15, 20], short: [22, 32, 37] };

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  function renderChips(){
    chipsEl.innerHTML = RATES[holdEl.value].map(function(r){
      return '<button type="button" class="preset-chip" data-rate="' + r + '">' + r + '%</button>';
    }).join('');
  }
  holdEl.addEventListener('change', renderChips);
  renderChips();
  chipsEl.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    rateEl.value = chip.dataset.rate;
    chipsEl.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.toggle('active', c === chip); });
    ToolPro.toast('Tax rate set to ' + chip.dataset.rate + '%');
  });

  document.getElementById('cgtBtn').addEventListener('click', function(){
    var buy = parseFloat(buyEl.value);
    var sell = parseFloat(sellEl.value);
    var shares = parseFloat(sharesEl.value);
    var rate = parseFloat(rateEl.value);
    if (isNaN(buy) || buy < 0) { showError('Please enter a buy price of $0 or more.'); return; }
    if (isNaN(sell) || sell < 0) { showError('Please enter a sell price of $0 or more.'); return; }
    if (isNaN(shares) || shares <= 0) { showError('Please enter a number of shares above 0.'); return; }
    if (isNaN(rate) || rate < 0 || rate > 100) { showError('Please enter a tax rate between 0 and 100%.'); return; }
    var basis = buy * shares;
    var proceeds = sell * shares;
    var gain = (sell - buy) * shares;
    var tax = Math.max(gain, 0) * rate / 100;
    var net = proceeds - tax;
    var html = '';
    if (gain > 0) {
      html = '<p style="font-size:1.4rem;">Gain: <strong>' + fmt(gain) + '</strong></p>'
        + '<p>Estimated tax owed (' + rate + '%): <strong>' + fmt(tax) + '</strong></p>'
        + '<p>Net proceeds after tax: <strong>' + fmt(net) + '</strong></p>';
    } else if (gain < 0) {
      html = '<p style="font-size:1.4rem;">Loss: <strong>' + fmt(gain) + '</strong></p>'
        + '<p>Estimated tax owed: <strong>$0.00</strong> — losses are never taxed.</p>'
        + '<p>Net proceeds: <strong>' + fmt(net) + '</strong></p>'
        + '<p>This loss may still be valuable: it can offset other gains at tax time (see tax-loss harvesting below).</p>';
    } else {
      html = '<p style="font-size:1.4rem;">Gain: <strong>$0.00</strong> — you broke even.</p>'
        + '<p>Estimated tax owed: <strong>$0.00</strong></p>'
        + '<p>Net proceeds: <strong>' + fmt(net) + '</strong></p>';
    }
    html += '<p>Cost basis: ' + fmt(basis) + ' · Sale proceeds before tax: ' + fmt(proceeds) + '</p>';
    out.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Capital gains estimated', 'ok');
  });

  document.getElementById('cgtClear').addEventListener('click', function(){
    buyEl.value = ''; sellEl.value = ''; sharesEl.value = ''; rateEl.value = '15';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

The taxable gain is **(sell price − buy price) × shares**, and the tax is simply that gain multiplied by your rate — but only when the gain is positive: **tax = max(gain, 0) × rate**. Net proceeds are your sale proceeds (sell price × shares) minus the tax. A loss is never taxed; in the US it can instead offset other capital gains, plus up to $3,000 per year of ordinary income, with the rest carried forward — a strategy known as tax-loss harvesting. Just mind the wash-sale rule: buying back a substantially identical asset within 30 days can disallow the loss.

## Everyday uses

- **Before you sell:** check the tax hit on a winning stock so the April bill never surprises you.
- **Timing a sale:** compare selling now at a short-term rate versus waiting until the holding turns long-term.
- **Freelancers and active investors:** size up quarterly estimated tax payments from your year-to-date trades.

## Frequently asked questions

**What counts as long-term?**
In the US, an asset held for more than one year before selling. Long-term gains get the lower preferential rates (0%, 15%, or 20% for most people); a year or less is short-term and taxed like regular income.

**Do I owe tax if I sell at a loss?**
No. Losses owe no capital gains tax, and they can be used to offset gains elsewhere in your portfolio — and up to $3,000 a year of ordinary income — which is why investors harvest losses deliberately near year-end.

**Does this include state tax or the 3.8% net investment income tax?**
Not automatically. High earners may also owe the 3.8% NIIT, and most states tax capital gains too. To approximate the full picture, add those percentages into the rate field before calculating.
