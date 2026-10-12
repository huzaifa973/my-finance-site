---
title: "Free Overtime Pay Calculator"
description: "Free overtime calculator: enter your hourly rate, regular hours, and overtime hours to see weekly, monthly, and annual pay at 1.5x or 2x."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your hourly rate, how many regular hours you work each week, and how many overtime hours you put in — then pick your overtime multiplier. This calculator breaks down your weekly pay and scales it up to monthly and annual estimates.

<div class="tool-shell" id="otShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Overtime Pay Calculator</h2>
<p>What those extra hours are really worth — per week, per month, and per year.</p>
</div>
<button type="button" class="theme-toggle" id="otTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Rate &amp; hours</p>
<div class="settings-grid">
<div class="setting">
<label for="otRate">Hourly rate ($)</label>
<input type="number" id="otRate" class="tool-input" placeholder="e.g. 20" min="0" step="any">
</div>
<div class="setting">
<label for="otRegular">Regular hours per week</label>
<input type="number" id="otRegular" class="tool-input" placeholder="e.g. 40" min="0" step="any">
</div>
<div class="setting">
<label for="otHours">Overtime hours per week</label>
<input type="number" id="otHours" class="tool-input" placeholder="e.g. 10" min="0" step="any">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Overtime multiplier</p>
<div class="setting">
<label for="otMult">Overtime paid at</label>
<select id="otMult" class="tool-input" style="max-width:280px;">
<option value="1.5">1.5&times; — time and a half</option>
<option value="2">2&times; — double time</option>
</select>
<div class="hint">In the US, federal law requires at least 1.5&times; for hours over 40 in a week for most hourly workers.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your pay</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="otBtn">
<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
Calculate pay
</button>
<button type="button" class="btn-pro-outline" id="otClear">Clear</button>
</div>
<div class="results" id="otResults">
<p class="result-head">⏰ Your pay breakdown</p>
<div class="result-summary" id="otResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — check as many schedules as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('otShell');
  ToolPro.themeToggle(shell, document.getElementById('otTheme'));
  var resBox = document.getElementById('otResults');
  var out = document.getElementById('otResult');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('otBtn').addEventListener('click', function(){
    var rateRaw = document.getElementById('otRate').value;
    var regRaw = document.getElementById('otRegular').value;
    var otRaw = document.getElementById('otHours').value;
    var rate = parseFloat(rateRaw);
    var regular = parseFloat(regRaw);
    var otHours = parseFloat(otRaw);
    var mult = parseFloat(document.getElementById('otMult').value);
    if (rateRaw === '' || isNaN(rate) || rate <= 0) { showError('Enter an hourly rate greater than $0.'); return; }
    if (regRaw === '' || isNaN(regular) || regular < 0) { showError('Enter your regular hours per week (0 or more).'); return; }
    if (otRaw === '' || isNaN(otHours) || otHours < 0) { showError('Enter your overtime hours per week (0 or more).'); return; }
    if (regular + otHours === 0) { showError('Enter at least some hours — regular, overtime, or both.'); return; }
    var regPay = rate * regular;
    var otPay = rate * mult * otHours;
    var weekly = regPay + otPay;
    var monthly = weekly * 52 / 12;
    var annual = weekly * 52;
    out.innerHTML = '<p style="font-size:1.35rem;">Weekly pay: <strong>' + fmt(weekly) + '</strong></p>'
      + '<p>Regular pay: ' + fmt(regPay) + ' (' + regular + ' hrs &times; ' + fmt(rate) + ') &middot; Overtime pay: <strong>' + fmt(otPay) + '</strong> (' + otHours + ' hrs &times; ' + mult + '&times;)</p>'
      + '<p>Monthly estimate: <strong>' + fmt(monthly) + '</strong> &middot; Annual estimate: <strong>' + fmt(annual) + '</strong></p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Pay calculated', 'ok');
  });

  document.getElementById('otClear').addEventListener('click', function(){
    document.getElementById('otRate').value = '';
    document.getElementById('otRegular').value = '';
    document.getElementById('otHours').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Weekly pay has two parts: **regular pay = hourly rate × regular hours**, and **overtime pay = hourly rate × multiplier × overtime hours**. At time and a half (1.5×), a $20/hour worker earns $30 for each overtime hour. The monthly estimate spreads a year of weekly paychecks evenly — **weekly × 52 ÷ 12** — and the annual estimate is simply **weekly × 52**.

## Everyday uses

- **Paycheck checks:** verify a payslip that includes overtime matches what you actually worked.
- **Shift decisions:** see exactly what picking up an extra weekend shift adds per month before you commit.
- **Job comparisons:** compare a lower-rate job with guaranteed overtime against a higher-rate job without it.
- **Budgeting busy seasons:** estimate income during peak periods when overtime is heavy, and plan savings around it.

## Frequently asked questions

**Q: When does overtime legally kick in?**
A: Under US federal law (the FLSA), most hourly, non-exempt employees must be paid at least 1.5× their regular rate for hours worked beyond 40 in a single workweek. Some states add daily rules — California, for example, requires overtime after 8 hours in a day. Salaried exempt employees are generally not entitled to overtime.

**Q: Why is the monthly figure not just weekly × 4?**
A: A month is longer than four weeks — there are 52 weeks in a year but only 48 in twelve 4-week blocks. Multiplying by 52 and dividing by 12 spreads the extra four weeks across the year, giving a monthly average you can budget against.

**Q: Is this my take-home pay?**
A: No — these are gross figures before income tax, Social Security, Medicare, and any deductions. Overtime can also push part of your income into a higher withholding bracket on a given check, though it settles out when you file your annual return.
