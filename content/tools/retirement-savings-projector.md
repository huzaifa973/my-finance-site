---
title: "Free Retirement Savings Projector"
description: "Free retirement projector: enter your age, savings, and monthly contributions to see your projected retirement balance."
date: 2026-09-29
draft: false
---

Retirement feels far away until you see the numbers — then starting early feels urgent. This free projector takes your current savings, monthly contributions, and an expected return, and shows what you could have at retirement age. No scare tactics, just your own trajectory.

<div class="tool-shell" id="rsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Retirement Savings Projector</h2>
<p>See what your savings could grow into by retirement — and what starting early is worth.</p>
</div>
<button type="button" class="theme-toggle" id="rsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your details</p>
<div class="settings-grid">
<div class="setting">
<label for="rsAge">Current age</label>
<input type="number" class="tool-input" id="rsAge" placeholder="e.g. 30" min="16" max="80">
</div>
<div class="setting">
<label for="rsRetire">Retirement age</label>
<input type="number" class="tool-input" id="rsRetire" placeholder="e.g. 65" min="40" max="90">
</div>
<div class="setting">
<label for="rsCurrent">Current retirement savings</label>
<input type="number" class="tool-input" id="rsCurrent" placeholder="e.g. 10000" min="0">
</div>
<div class="setting">
<label for="rsMonthly">Monthly contribution</label>
<input type="number" class="tool-input" id="rsMonthly" placeholder="e.g. 400" min="0">
</div>
<div class="setting">
<label for="rsReturn">Expected annual return (%)</label>
<input type="number" class="tool-input" id="rsReturn" placeholder="e.g. 7" min="0" max="15" step="0.1">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Projection settings</p>
<div class="settings-panel">
<div class="preset-row" id="rsPresets">
<button type="button" class="preset-chip" data-ret="5">🛡️ Conservative 5%</button>
<button type="button" class="preset-chip active" data-ret="7">⚖️ Balanced 7%</button>
<button type="button" class="preset-chip" data-ret="9">🚀 Aggressive 9%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rsReturnRange">Expected annual return: <span class="val" id="rsReturnVal">7%</span></label>
<input type="range" id="rsReturnRange" min="0" max="15" step="0.1" value="7">
<div class="hint">7% is the long-run stock-market average before inflation.</div>
</div>
<div class="setting">
<label for="rsMonthlyRange">Monthly contribution: <span class="val" id="rsMonthlyVal">$400</span></label>
<input type="range" id="rsMonthlyRange" min="0" max="2000" step="25" value="400">
<div class="hint">Small increases now beat big catch-ups later, thanks to compounding.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Project your savings</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rsBtn">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
Project my savings
</button>
<button type="button" class="btn-pro-outline" id="rsClear">Clear</button>
</div>
<div class="results" id="rsResults">
<p class="result-head">📈 Your retirement projection</p>
<div class="result-summary" id="rsResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — run as many projections as you like, as often as you like.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('rsShell');
  ToolPro.themeToggle(shell, document.getElementById('rsTheme'));

  function moneyFmt(n){ return '$' + Math.round(n).toLocaleString(); }

  function syncSlider(rangeId, numId, valId, fmt){
    var range = document.getElementById(rangeId),
        num = document.getElementById(numId),
        val = document.getElementById(valId);
    ToolPro.bindSlider(range, val, fmt);
    range.addEventListener('input', function(){ num.value = range.value; });
    num.addEventListener('input', function(){
      var v = parseFloat(num.value);
      if(!isNaN(v)){
        if(v < parseFloat(range.min)) v = parseFloat(range.min);
        if(v > parseFloat(range.max)) v = parseFloat(range.max);
        range.value = v; val.textContent = fmt(v);
      }
    });
  }
  syncSlider('rsReturnRange', 'rsReturn', 'rsReturnVal', function(v){ return v + '%'; });
  syncSlider('rsMonthlyRange', 'rsMonthly', 'rsMonthlyVal', moneyFmt);

  var presets = document.getElementById('rsPresets');
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var r = document.getElementById('rsReturnRange');
    r.value = chip.dataset.ret;
    r.dispatchEvent(new Event('input'));
    ToolPro.toast('Return preset: ' + chip.textContent.trim());
  });

  function calcRetire() {
    var age = parseInt(document.getElementById('rsAge').value, 10);
    var retire = parseInt(document.getElementById('rsRetire').value, 10);
    var current = parseFloat(document.getElementById('rsCurrent').value) || 0;
    var monthly = parseFloat(document.getElementById('rsMonthly').value) || 0;
    var ret = parseFloat(document.getElementById('rsReturn').value);
    var out = document.getElementById('rsResult');
    var resBox = document.getElementById('rsResults');
    function fail(msg){ out.innerHTML = '<p>' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'error'); }
    if (!age || age < 16 || age > 80) { fail('Please enter a current age between 16 and 80.'); return; }
    if (!retire || retire < 40 || retire > 90) { fail('Please enter a retirement age between 40 and 90.'); return; }
    if (retire <= age) { fail('Retirement age must be after your current age.'); return; }
    if (current < 0 || monthly < 0) { fail('Amounts cannot be negative.'); return; }
    if (isNaN(ret) || ret < 0 || ret > 15) { fail('Please enter an expected return between 0 and 15%.'); return; }
    function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
    var years = retire - age;
    var months = years * 12;
    var r = ret / 100 / 12;
    var balance = current * Math.pow(1 + r, months);
    if (r > 0) {
      balance += monthly * (Math.pow(1 + r, months) - 1) / r;
    } else {
      balance += monthly * months;
    }
    var contributed = current + monthly * months;
    var growth = balance - contributed;
    var monthlyIncome4pct = balance * 0.04 / 12;
    out.innerHTML =
      '<p><strong>Years until retirement:</strong> ' + years + '</p>' +
      '<p style="font-size:1.4rem"><strong>Projected balance at ' + retire + ': ' + fmt(balance) + '</strong></p>' +
      '<p><strong>You contributed:</strong> ' + fmt(contributed) + '</p>' +
      '<p><strong>Growth did the rest:</strong> <span style="color:#0b6e4f;font-weight:700">' + fmt(growth) + '</span></p>' +
      '<p>Rough sustainable income (4% rule): about <strong>' + fmt(monthlyIncome4pct) + '/month</strong> in retirement.</p>' +
      '<div class="callout"><strong>Tip:</strong> this is before inflation and taxes. A 7% nominal return is roughly 4–5% after inflation — try the calculator with a lower return to see a more conservative picture.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Projection ready', 'ok');
  }

  document.getElementById('rsBtn').addEventListener('click', calcRetire);
  document.getElementById('rsClear').addEventListener('click', function(){
    ['rsAge','rsRetire','rsCurrent','rsMonthly','rsReturn'].forEach(function(id){
      document.getElementById(id).value = '';
    });
    document.getElementById('rsReturnRange').value = 7;
    document.getElementById('rsReturnRange').dispatchEvent(new Event('input'));
    document.getElementById('rsMonthlyRange').value = 400;
    document.getElementById('rsMonthlyRange').dispatchEvent(new Event('input'));
    document.getElementById('rsResults').classList.remove('show');
    ToolPro.toast('Cleared');
  });
})();
</script>

## Projections are not promises

Markets go up and down; no calculator knows the future. Use projections to set a savings target and check in yearly. If you're behind, small increases now beat big catches-up later — thanks to compounding.
