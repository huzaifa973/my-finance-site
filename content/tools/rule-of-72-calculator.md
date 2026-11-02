---
title: "Free Rule of 72 Calculator — Doubling Time for Investments"
description: "Free Rule of 72 calculator: find how many years an investment needs to double at a given return, or the return needed to double in a target number of years, with a precise formula and a rate comparison table."
category: finance
date: 2026-11-03
draft: false
---
## How it works
Enter either an annual rate of return to see how long your money takes to double, or a target number of years to see what return you would need. The calculator shows the quick Rule of 72 estimate and the mathematically exact doubling time, plus a comparison table of common returns and their doubling periods.

<div class="tool-shell" id="r72Shell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Rule of 72 Calculator</h2>
<p>How fast does your money double? Find out in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="r72Theme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick a direction</p>
<div class="settings-grid">
<div class="setting">
<label for="r72Mode">Calculate</label>
<select id="r72Mode" class="tool-input">
<option value="rate">Years to double from a return rate</option>
<option value="years">Required return from target years</option>
</select>
</div>
<div class="setting">
<label for="r72Value" id="r72ValueLabel">Annual rate of return (%)</label>
<input type="number" id="r72Value" class="tool-input" placeholder="e.g. 8" min="0.01" step="0.1">
<div class="hint" id="r72Hint">At 8%, money roughly doubles every 9 years (72 ÷ 8).</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> How the rule works</p>
<div class="settings-grid">
<div class="setting" style="grid-column:1/-1">
<div class="hint">Rule of 72: divide 72 by the annual % return to get the approximate years to double. It is a mental shortcut; the exact formula uses logarithms and is shown alongside it.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See the doubling time</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="r72Btn">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
Calculate
</button>
<button type="button" class="btn-pro-outline" id="r72Clear">Clear</button>
</div>
<div class="results" id="r72Results">
<p class="result-head">📈 Doubling time</p>
<div class="result-summary" id="r72Summary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Test as many rates and time horizons as you like — everything runs in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('r72Shell');
  ToolPro.themeToggle(shell, document.getElementById('r72Theme'));
  var resBox = document.getElementById('r72Results');
  var summary = document.getElementById('r72Summary');
  var modeSel = document.getElementById('r72Mode');
  var valueLabel = document.getElementById('r72ValueLabel');
  var hintEl = document.getElementById('r72Hint');
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  modeSel.addEventListener('change', function(){
    if (modeSel.value === 'rate') {
      valueLabel.textContent = 'Annual rate of return (%)';
      hintEl.textContent = 'At 8%, money roughly doubles every 9 years (72 ÷ 8).';
    } else {
      valueLabel.textContent = 'Target years to double';
      hintEl.textContent = 'To double in 10 years you need roughly 7.2% per year (72 ÷ 10).';
    }
  });
  document.getElementById('r72Btn').addEventListener('click', function(){
    var val = num('r72Value');
    var mode = modeSel.value;
    if (isNaN(val) || val <= 0) { showError(mode === 'rate' ? 'Enter an annual return greater than 0%.' : 'Enter a target number of years greater than 0.'); return; }
    if (mode === 'rate' && val > 1000) { showError('Annual return above 1000% is not realistic for this estimate.'); return; }
    if (mode === 'years' && val > 120) { showError('Target horizon above 120 years is not realistic.'); return; }
    var html;
    if (mode === 'rate') {
      var ruleYears = 72 / val;
      var exactYears = Math.log(2) / Math.log(1 + val / 100);
      html = '<p style="font-size:1.3rem;">At <strong>' + val + '%</strong> per year, money doubles in about <strong>' + ruleYears.toFixed(1) + ' years</strong> (Rule of 72).</p>'
        + '<p>Mathematically exact doubling time: <strong style="color:#0b6e4f">' + exactYears.toFixed(2) + ' years</strong></p>'
        + '<p>That means $10,000 becomes ~$20,000, then ~$40,000, then ~$80,000 — each doubling period multiplies by 2.</p>';
    } else {
      var ruleRate = 72 / val;
      var exactRate = (Math.pow(2, 1 / val) - 1) * 100;
      html = '<p style="font-size:1.3rem;">To double in <strong>' + val + ' years</strong>, you need roughly <strong>' + ruleRate.toFixed(2) + '%</strong> per year (Rule of 72).</p>'
        + '<p>Mathematically exact required return: <strong style="color:#0b6e4f">' + exactRate.toFixed(2) + '%</strong> per year</p>'
        + '<p>At that rate, $10,000 grows to ~$20,000 in exactly ' + val + ' years with annual compounding.</p>';
    }
    var rates = [1,2,3,4,5,6,7,8,10,12];
    var rows = '';
    rates.forEach(function(r){
      var ry = (72 / r).toFixed(1);
      var ey = (Math.log(2) / Math.log(1 + r / 100)).toFixed(2);
      rows += '<tr><td style="padding:6px;border-bottom:1px solid #eee;">' + r + '%</td><td style="padding:6px;border-bottom:1px solid #eee;">' + ry + ' yrs</td><td style="padding:6px;border-bottom:1px solid #eee;">' + ey + ' yrs</td></tr>';
    });
    html += '<p style="margin-top:1rem;font-weight:600;">Comparison: annual return vs years to double</p>'
      + '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;"><thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Annual return</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Rule of 72</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Exact (ln2)</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    summary.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Doubling time ready', 'ok');
  });
  document.getElementById('r72Clear').addEventListener('click', function(){
    document.getElementById('r72Value').value = '';
    modeSel.value = 'rate';
    valueLabel.textContent = 'Annual rate of return (%)';
    hintEl.textContent = 'At 8%, money roughly doubles every 9 years (72 ÷ 8).';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
The Rule of 72 is a shortcut: **years to double ≈ 72 ÷ annual % return**. It works because the exact doubling time for annually compounded money is **ln(2) ÷ ln(1 + r)**, and 72 is close to 100 × ln(2) ≈ 69.3 while staying easily divisible by common rates (6, 8, 9, 12). In reverse, the required rate to double in y years is approximately **72 ÷ y**, with the exact value **(2^(1/y) − 1) × 100%**. The calculator shows both the quick estimate and the exact figure.
## Everyday uses
- **Goal setting:** decide what return you actually need to hit a target, instead of guessing.
- **Inflation reality check:** divide 72 by the inflation rate to see how fast purchasing power halves (at 4% inflation, money halves in ~18 years).
- **Fee impact:** compare a 1% fee difference — over decades it can cost you a full doubling of your balance.
## Frequently asked questions
### Why 72 and not 69.3 (the mathematically exact number)?
Because 72 divides cleanly by the most common returns (2, 3, 4, 6, 8, 9, 12), making mental math easy. The error versus the exact formula is small at typical rates (under ~10%), which is why the rule has survived for centuries.
### Does the Rule of 72 work for fees and inflation too?
Yes. Anything growing or shrinking at a steady annual percentage rate obeys the same math: divide 72 by the rate to get the halving or doubling period. For inflation it tells you how fast your cash loses half its purchasing power.
### Is the result before or after inflation and taxes?
The calculator uses the nominal annual return you enter. To find the inflation-adjusted (real) doubling time, subtract the inflation rate from your return first. Taxes will also reduce your effective return in taxable accounts.
