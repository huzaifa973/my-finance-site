---
title: "Free 50/30/20 Budget Splitter"
description: "Free 50/30/20 budget splitter: enter your take-home pay to instantly split it into needs, wants, and savings with visual bars."
date: 2026-09-29
draft: false
---

The 50/30/20 rule is the simplest budget in personal finance: half your take-home pay for needs, 30% for wants, 20% for savings. This free splitter does the math for you instantly — enter your pay and see your three buckets, with bars to compare them at a glance.

<div class="tool-shell" id="sbsShell" data-theme="light">

  <div class="tool-hero">
    <div class="tool-icon">
      <svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.76-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.98-8.99H13.03z"/></svg>
    </div>
    <div class="tool-hero-top">
      <div>
        <h2>50/30/20 Budget Splitter</h2>
        <p>Split your take-home pay into needs, wants &amp; savings in one click — free, private, unlimited.</p>
      </div>
      <button type="button" class="theme-toggle" id="sbsTheme">🌙 Dark</button>
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
      <p class="tool-step-title"><span class="tool-step-num">1</span> Enter your take-home pay</p>
      <div class="setting">
        <label for="sbsPay">Monthly take-home pay</label>
        <input type="number" id="sbsPay" class="tool-input" placeholder="e.g. 3500" min="1">
        <div class="hint">Your pay after taxes and deductions — the amount that actually hits your account.</div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">2</span> Quick-fill a common income</p>
      <div class="settings-panel">
        <div class="preset-row" id="sbsPresets">
          <button type="button" class="preset-chip" data-pay="2500">$2,500 / month</button>
          <button type="button" class="preset-chip" data-pay="3500">$3,500 / month</button>
          <button type="button" class="preset-chip" data-pay="5000">$5,000 / month</button>
          <button type="button" class="preset-chip" data-pay="7500">$7,500 / month</button>
        </div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; see your buckets</p>
      <div class="tool-actions">
        <button type="button" class="btn-pro" id="sbsBtn">
          <svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.76-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.98-8.99H13.03z"/></svg>
          Split my budget
        </button>
        <button type="button" class="btn-pro-outline" id="sbsClear">Clear</button>
      </div>
      <div class="results" id="sbsResults">
        <p class="result-head">💰 Your 50/30/20 split</p>
        <div class="result-summary" id="sbsResult"></div>
      </div>
    </div>

    <div class="free-banner">
      <strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
      <p>This tool runs entirely in your browser — split as many budgets as you like, as often as you like.</p>
    </div>

  </div>
</div>

<script>
(function(){
  var shell = document.getElementById('sbsShell');
  ToolPro.themeToggle(shell, document.getElementById('sbsTheme'));
  var payEl = document.getElementById('sbsPay');
  var resBox = document.getElementById('sbsResults');
  var res = document.getElementById('sbsResult');

  document.getElementById('sbsPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    payEl.value = chip.dataset.pay;
    ToolPro.toast('Income set to $' + chip.dataset.pay);
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  document.getElementById('sbsBtn').addEventListener('click', function(){
    var pay = parseFloat(payEl.value);
    if (!pay || pay <= 0) {
      res.innerHTML = '<p>Please enter a valid take-home pay amount.</p>';
      resBox.classList.add('show');
      ToolPro.toast('Enter a valid pay amount first', 'err');
      return;
    }
    var needs = pay * 0.5, wants = pay * 0.3, save = pay * 0.2;
    res.innerHTML =
      '<p><strong>Needs (50%):</strong> ' + fmt(needs) + '</p><div class="bar"><i style="width:50%;background:#0b6e4f"></i></div>' +
      '<p style="margin-bottom:.2rem">Rent, bills, groceries, transport, insurance, minimum debt payments.</p>' +
      '<p><strong>Wants (30%):</strong> ' + fmt(wants) + '</p><div class="bar"><i style="width:30%;background:#2f9e6e"></i></div>' +
      '<p style="margin-bottom:.2rem">Dining out, hobbies, subscriptions, travel, shopping.</p>' +
      '<p><strong>Savings (20%):</strong> ' + fmt(save) + '</p><div class="bar"><i style="width:20%;background:#c9a227"></i></div>' +
      '<p style="margin-bottom:.2rem">Emergency fund, debt payoff, investing.</p>' +
      '<div class="callout"><strong>Tip:</strong> if your needs exceed 50% (very common with city rents), shrink the wants bucket first — protect the savings portion at all costs. Even 10% saved beats 0%.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Budget split — ' + fmt(save) + ' to savings', 'ok');
  });

  document.getElementById('sbsClear').addEventListener('click', function(){
    payEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Rules, not laws

Think of 50/30/20 as a starting point, not a pass/fail test. A high earner might save 40%; someone on a tight income might save 5% while paying down debt. The habit matters more than the exact percentages.
