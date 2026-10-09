---
title: "Free Monthly Budget Calculator (50/30/20 Rule)"
description: "Free budget calculator: enter your monthly income and see your 50/30/20 budget split for needs, wants, and savings instantly."
category: finance
date: 2026-09-29
draft: false
---

## How it works

Enter your monthly take-home pay below. The calculator splits it using the popular **50/30/20 rule**:

- **50% — Needs:** rent, bills, groceries, transport
- **30% — Wants:** dining out, hobbies, subscriptions
- **20% — Savings:** emergency fund, debt payoff, investing

<div class="tool-shell" id="budShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Monthly Budget Calculator</h2>
<p>Split your income with the 50/30/20 rule — needs, wants &amp; savings at a glance.</p>
</div>
<button type="button" class="theme-toggle" id="budTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your income</p>
<div class="setting">
<label for="income">Monthly take-home income ($ or £)</label>
<input type="number" id="income" class="tool-input" placeholder="e.g. 3000" min="0">
<div class="hint">Your pay after taxes — the amount that actually lands in your account.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quick-fill a common income</p>
<div class="settings-panel">
<div class="preset-row" id="budPresets">
<button type="button" class="preset-chip" data-inc="2000">$2,000 / month</button>
<button type="button" class="preset-chip" data-inc="3000">$3,000 / month</button>
<button type="button" class="preset-chip" data-inc="5000">$5,000 / month</button>
<button type="button" class="preset-chip" data-inc="8000">$8,000 / month</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; see your budget</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="budBtn">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
Calculate my budget
</button>
<button type="button" class="btn-pro-outline" id="budClear">Clear</button>
</div>
<div class="results" id="budResults">
<p class="result-head">💵 Your 50/30/20 budget</p>
<div class="result-summary" id="budgetResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — budget as many incomes as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('budShell');
  ToolPro.themeToggle(shell, document.getElementById('budTheme'));
  var incEl = document.getElementById('income');
  var resBox = document.getElementById('budResults');
  var out = document.getElementById('budgetResult');

  document.getElementById('budPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    incEl.value = chip.dataset.inc;
    ToolPro.toast('Income set to $' + chip.dataset.inc);
  });

  document.getElementById('budBtn').addEventListener('click', function(){
    var income = parseFloat(incEl.value);
    if (!income || income <= 0) {
      out.innerHTML = '<p>Please enter a valid income amount.</p>';
      resBox.classList.add('show');
      ToolPro.toast('Enter a valid income amount first', 'err');
      return;
    }
    var needs = income * 0.50, wants = income * 0.30, save = income * 0.20;
    function fmt(n){ return n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
    out.innerHTML =
      '<p><strong>Needs (50%):</strong> ' + fmt(needs) + '</p><div class="bar"><i style="width:50%;background:#0b6e4f"></i></div>' +
      '<p><strong>Wants (30%):</strong> ' + fmt(wants) + '</p><div class="bar"><i style="width:30%;background:#2f9e6e"></i></div>' +
      '<p><strong>Savings (20%):</strong> ' + fmt(save) + '</p><div class="bar"><i style="width:20%;background:#7cc9a4"></i></div>' +
      '<div class="callout"><strong>Tip:</strong> on a low or irregular income, aim for the savings portion first — even 5–10% builds the habit. Read our <a href="/posts/how-to-create-a-budget-on-a-low-income/">low-income budgeting guide</a> next.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Budget calculated', 'ok');
  });

  document.getElementById('budClear').addEventListener('click', function(){
    incEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Why the 50/30/20 rule works for beginners

It's simple enough to remember and flexible enough to adjust. If your rent alone eats 50% of your income (common in big US and UK cities), treat the percentages as targets, not laws — the real win is spending less than you earn and automating the savings part.
