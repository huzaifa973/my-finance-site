---
title: "Free North Carolina Income Tax Calculator 2026 — Flat 3.99% Rate"
description: "Estimate your 2026 North Carolina state income tax at the flat 3.99% rate. Enter income and deductions for an instant, free estimate in your browser."
category: finance
date: 2026-10-29
draft: false
---

North Carolina taxes individual income at a single flat rate — no brackets. For tax year 2026 that rate is **3.99%**, down from 4.25% in 2025 under the scheduled reductions in Session Law 2023-134. Enter your income and deductions below for an instant estimate.

<div class="tool-shell" id="nctShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>North Carolina Income Tax Calculator</h2>
<p>2026 flat rate 3.99% — estimate your NC state tax in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="nctTheme">🌙 Dark</button>
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
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="nctIncome">Annual gross income ($)</label>
<input type="number" class="tool-input" id="nctIncome" min="0" step="100" value="75000">
</div>
<div class="setting">
<label for="nctStatus">Filing status</label>
<select id="nctStatus"><option value="12750" selected>Single — $12,750 standard deduction</option><option value="25500">Married filing jointly — $25,500</option><option value="19125">Head of household — $19,125</option><option value="0">No deduction / itemized (enter below)</option></select>
<div class="hint">Deduction figures are the most recently published amounts (2025); edit the field below if the 2026 figures differ.</div>
</div>
<div class="setting">
<label for="nctDeduct">Deduction amount ($)</label>
<input type="number" class="tool-input" id="nctDeduct" min="0" step="50" value="12750">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Rate &amp; options</p>
<div class="settings-panel">
<div class="preset-row" id="nctPresets">
<button type="button" class="preset-chip active" data-inc="75000">💼 $75,000 example</button>
<button type="button" class="preset-chip" data-inc="50000">📋 $50,000 example</button>
<button type="button" class="preset-chip" data-inc="120000">🏠 $120,000 example</button>
</div>
<div class="settings-grid">
<div class="setting"><label>2026 NC flat rate</label><div class="r-stats"><b>3.99%</b> — same rate for every filer, no brackets.</div></div>
<div class="setting"><div class="toggle-row"><span class="t-label">Show monthly equivalent</span><label class="toggle"><input type="checkbox" id="nctMonthly" checked><span class="slider"></span></label></div><div class="hint">Annual tax divided by 12, for paycheck planning.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; see your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="nctBtn">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Calculate NC Tax
</button>
<button type="button" class="btn-pro-outline" id="nctClear">Reset</button>
</div>
<div class="progress-wrap" id="nctProgWrap">
<div class="progress-bar"><i id="nctProgBar"></i></div>
<div class="progress-text" id="nctProgText">Working…</div>
</div>
<div class="results" id="nctResults">
<p class="result-head">✅ Done — your 2026 NC tax estimate</p>
<div class="result-summary" id="nctSummary"></div>
<div class="result-grid" id="nctGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited estimates — this calculator is a planning aid, not tax advice.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('nctShell');
ToolPro.themeToggle(shell,document.getElementById('nctTheme'));
var incEl=document.getElementById('nctIncome'),statusEl=document.getElementById('nctStatus'),dedEl=document.getElementById('nctDeduct'),btn=document.getElementById('nctBtn'),clearBtn=document.getElementById('nctClear'),grid=document.getElementById('nctGrid'),resBox=document.getElementById('nctResults'),sumEl=document.getElementById('nctSummary'),presets=document.getElementById('nctPresets');
var RATE=0.0399;
function money(n){return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
statusEl.addEventListener('change',function(){dedEl.value=statusEl.value;});
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');incEl.value=c.dataset.inc;ToolPro.toast('Example loaded: '+money(parseFloat(c.dataset.inc))+' gross');});
clearBtn.addEventListener('click',function(){incEl.value='75000';statusEl.value='12750';dedEl.value='12750';grid.innerHTML='';resBox.classList.remove('show');});
function addRow(label,value){var card=document.createElement('div');card.className='result-card';var n=document.createElement('div');n.className='r-name';n.textContent=label;var s=document.createElement('div');s.className='r-stats';s.innerHTML=value;card.appendChild(n);card.appendChild(s);grid.appendChild(card);}
btn.addEventListener('click',function(){
var gross=parseFloat(incEl.value)||0,ded=parseFloat(dedEl.value)||0;
if(gross<=0){ToolPro.toast('Enter an income above $0','err');return;}
var taxable=Math.max(0,gross-ded);
var tax=taxable*RATE;
var eff=gross?tax/gross*100:0;
grid.innerHTML='';
addRow('Gross income',money(gross));
addRow('Less deduction',money(ded));
addRow('NC taxable income',money(taxable));
addRow('NC tax at 3.99%', '<b>'+money(tax)+'</b>');
addRow('Effective rate on gross income',eff.toFixed(2)+'%');
if(document.getElementById('nctMonthly').checked)addRow('Monthly equivalent',money(tax/12)+' / month');
addRow('After NC tax (gross − NC tax)',money(gross-tax));
sumEl.textContent='Worked example — $75,000 single: $75,000 − $12,750 = $62,250 taxable; $62,250 × 3.99% = $2,483.78. Your figures: '+money(tax)+' on '+money(taxable)+' taxable income.';
resBox.classList.add('show');ToolPro.toast('NC tax estimated','ok');
});
})();
</script>

## How it works

- **Step 1** — Enter gross income, pick a filing status, and confirm the deduction (editable).
- **Step 2** — The 2026 flat rate of 3.99% is fixed — North Carolina has no tax brackets.
- **Step 3** — Calculate: taxable income = gross − deduction; tax = taxable income × 3.99%.

**Worked example, hand-checked:** a single filer earning $75,000 with the $12,750 standard deduction has $62,250 of NC taxable income. $62,250 × 0.0399 = $2,483.775, rounded to **$2,483.78** per year (about $206.98 per month). Rate source: Tax Foundation, "2026 North Carolina Tax Rates & Rankings" (flat 3.99% individual rate), consistent with NCDOR withholding guidance cited by Deel — the 4.25% (2025) → 3.99% (2026) cut enacted by Session Law 2023-134.

**Disclaimer:** this is an estimate for planning only, not tax advice. Real NC tax starts from federal AGI with state adjustments, credits, and local rules that this simple calculator does not model. Confirm figures with NCDOR or a tax professional before filing.

## Everyday uses

- **New NC residents** — compare state tax before a move.
- **Freelancers** — set aside the right monthly amount for state tax.
- **Paycheck planning** — check whether NC withholding looks roughly right.
- **Job offers** — compare take-home pay across states with a flat-rate estimate.
