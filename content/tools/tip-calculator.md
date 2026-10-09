---
title: "Free Tip & Bill Split Calculator"
description: "Calculate the perfect tip and split any restaurant bill fairly — per-person totals with tip included. Free, instant, no sign-up."
category: finance
date: 2026-09-30
draft: false
---

## How it works

Enter the bill, pick a tip percentage, and split it evenly — no more awkward phone-math at the table.

<div class="tool-shell" id="tipShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Tip &amp; Bill Split Calculator</h2>
<p>Enter the bill, pick a tip percentage, and split it evenly — no more awkward phone-math.</p>
</div>
<button type="button" class="theme-toggle" id="tipTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your bill</p>
<div class="settings-grid">
<div class="setting">
<label for="tipBill">Bill amount ($)</label>
<input type="number" class="tool-input" id="tipBill" placeholder="64.50" min="0" step="0.01">
</div>
<div class="setting">
<label for="tipPeople">Split between (people)</label>
<input type="number" class="tool-input" id="tipPeople" placeholder="2" min="1" step="1">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Tip settings</p>
<div class="settings-panel">
<div class="preset-row" id="tipChips">
<button type="button" class="preset-chip" data-tip="10">10%</button>
<button type="button" class="preset-chip" data-tip="15">15%</button>
<button type="button" class="preset-chip active" data-tip="18">18%</button>
<button type="button" class="preset-chip" data-tip="20">20%</button>
<button type="button" class="preset-chip" data-tip="25">25%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="tipRange">Tip percentage: <span class="val" id="tipVal">18%</span></label>
<input type="range" id="tipRange" min="0" max="40" step="0.5" value="18">
<div class="hint">20% is standard for good table service in the US.</div>
</div>
<div class="setting">
<label for="tipCustom">Custom tip (%)</label>
<input type="number" class="tool-input" id="tipCustom" placeholder="Custom %" min="0" step="0.5">
<div class="hint">Type any percentage here to override the presets.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate the split</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tipBtn">
<svg viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
Calculate
</button>
<button type="button" class="btn-pro-outline" id="tipClear">Clear</button>
</div>
<div class="results" id="tipResults">
<p class="result-head">🧾 Your bill breakdown</p>
<div class="result-summary" id="tipResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many bills as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('tipShell');
  ToolPro.themeToggle(shell, document.getElementById('tipTheme'));

  var tipPct = 18;
  var chips = document.getElementById('tipChips');
  var tipRange = document.getElementById('tipRange');
  var tipVal = document.getElementById('tipVal');
  var tipCustom = document.getElementById('tipCustom');

  ToolPro.bindSlider(tipRange, tipVal, function(v){ return v + '%'; });

  function refreshChips(){
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', parseFloat(c.dataset.tip) === tipPct);
    });
  }

  function setTip(p){
    if (p !== null) {
      tipPct = p;
      tipCustom.value = '';
    } else {
      var c = parseFloat(tipCustom.value);
      tipPct = isNaN(c) ? 18 : Math.max(0, c);
    }
    if(tipPct < 0) tipPct = 0;
    if(tipPct > 40) tipPct = 40;
    tipRange.value = tipPct;
    tipVal.textContent = tipPct + '%';
    refreshChips();
  }

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setTip(parseFloat(chip.dataset.tip));
    ToolPro.toast('Tip: ' + chip.dataset.tip + '%');
  });
  tipRange.addEventListener('input', function(){
    setTip(parseFloat(tipRange.value));
  });
  tipCustom.addEventListener('input', function(){ setTip(null); });

  function money(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function calcTip(){
    var bill = parseFloat(document.getElementById('tipBill').value);
    var people = parseInt(document.getElementById('tipPeople').value, 10);
    var o = document.getElementById('tipResult');
    var resBox = document.getElementById('tipResults');
    if (isNaN(bill) || bill < 0) {
      o.innerHTML = '<p>Enter the bill amount.</p>';
      resBox.classList.add('show');
      ToolPro.toast('Enter the bill amount', 'error');
      return;
    }
    if (isNaN(people) || people < 1) { people = 1; }
    var tip = bill * tipPct / 100;
    var total = bill + tip;
    o.innerHTML = '<p><strong>Tip (' + tipPct + '%): ' + money(tip) + '</strong></p>'
      + '<p>Total bill: <strong>' + money(total) + '</strong></p>'
      + '<p>Each of ' + people + ' pays: <strong>' + money(total / people) + '</strong>'
      + (people > 1 ? ' (incl. ' + money(tip / people) + ' tip)' : '') + '</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Bill split ready', 'ok');
  }

  document.getElementById('tipBtn').addEventListener('click', calcTip);
  document.getElementById('tipClear').addEventListener('click', function(){
    document.getElementById('tipBill').value = '';
    document.getElementById('tipPeople').value = '';
    setTip(18);
    document.getElementById('tipResults').classList.remove('show');
    ToolPro.toast('Cleared');
  });

  setTip(18);
})();
</script>

## Everyday uses

- **Dining out:** 20% on a $64.50 bill split 2 ways = $38.70 each.
- **Takeout & delivery:** 10–15% is the usual range when there's no table service.
- **Large groups:** many restaurants auto-add 18–20% for parties of 6+ — check the bill before double-tipping.
