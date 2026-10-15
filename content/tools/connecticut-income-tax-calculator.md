---
title: "Free Connecticut Income Tax Calculator 2026 — Estimate Your CT Tax"
description: "Estimate your 2026 Connecticut income tax with the real 2%–6.99% brackets, personal exemption phase-out, per-bracket breakdown, effective rate and take-home. Free, private, no sign-up."
category: finance
date: 2026-10-15
draft: false
---

Enter your income and filing status, and this calculator applies Connecticut's real 2026 seven-bracket schedule (2% to 6.99%), the personal exemption with its phase-out (Connecticut has no standard deduction), and shows a per-bracket breakdown, your effective rate, and take-home pay. It runs entirely in your browser — your income is never typed into anyone's server. Educational estimate only; it excludes federal tax, other credits, and local taxes.

<div class="tool-shell" id="ctTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.3-.6-3.8-1.3-3.8-2.8 0-1.6 1.4-2.7 3.8-2.7 2.1 0 3.5.9 3.9 2.4h2.2c-.3-2.4-1.9-4-4.6-4.4V1h-2.4v2.4C8 3.8 5.9 5.7 5.9 8.1c0 3.2 2.6 4.5 5.9 5.3 2.5.6 4 1.4 4 3 0 1.8-1.6 2.9-4 2.9-2.4 0-3.9-1-4.2-2.8h-2.2c.3 2.7 2.1 4.4 4.9 4.8V23h2.4v-2.4c2.9-.4 5-2.3 5-4.9 0-3.4-2.7-4.7-6.3-5.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Connecticut Income Tax Calculator (2026)</h2>
<p>Estimate your 2026 Connecticut tax — real 2%–6.99% brackets, personal exemption phase-out, per-bracket breakdown, effective rate, take-home.</p>
</div>
<button type="button" class="theme-toggle" id="ctTaxTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your 2026 income</p>
<div class="preset-row">
<button type="button" class="preset-chip" data-inc="40000">$40k</button>
<button type="button" class="preset-chip active" data-inc="60000">$60k</button>
<button type="button" class="preset-chip" data-inc="75000">$75k</button>
<button type="button" class="preset-chip" data-inc="100000">$100k</button>
<button type="button" class="preset-chip" data-inc="150000">$150k</button>
</div>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Connecticut AGI — gross income ($)</span><input type="number" class="tool-input" id="ctIncome" value="60000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Pre-tax deductions — 401(k), HSA etc. ($)</span><input type="number" class="tool-input" id="ctPre" value="0" min="0" step="any"></div>
</div>
<div class="hint">Connecticut starts from your federal-style AGI, then subtracts the personal exemption — Connecticut has <strong>no standard deduction</strong>.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Filing status</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Filing status</span><select class="tool-input" id="ctStatus"><option value="single">Single</option><option value="married">Married filing jointly</option><option value="separate">Married filing separately</option><option value="head">Head of household</option></select></div>
</div>
<div class="hint">2026 personal exemption (then a simplified linear phase-out to $0): Single $15,000 (full ≤ $30k, gone at $44k) · Joint $24,000 (full ≤ $48k, gone at $71k) · Separate $12,000 (full ≤ $24k, gone at $35k) · Head of household $19,000 (full ≤ $38k, gone at $56k). Brackets: 2% / 4.5% / 5.5% / 6% / 6.5% / 6.9% / 6.99% on the Single &amp; MFS schedule; Joint brackets are doubled; Head-of-household uses its own wider schedule.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ctGo">
🧮 Calculate my Connecticut tax
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="ctRes">
<p class="result-head">🧾 2026 Connecticut estimate</p>
<div class="result-summary" id="ctResSummary"></div>
<div class="result-grid" id="ctResGrid"></div>
<div id="ctBracketWrap" style="margin-top:14px"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Estimate your 2026 Connecticut tax — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('ctTaxShell');
ToolPro.themeToggle(shell, document.getElementById('ctTaxTheme'));
  document.querySelectorAll('#ctTaxShell .preset-chip').forEach(function(chip){
    chip.addEventListener('click', function(){
      document.querySelectorAll('#ctTaxShell .preset-chip').forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      document.getElementById('ctIncome').value = chip.dataset.inc;
      document.getElementById('ctGo').click();
      ToolPro.toast('Income preset applied: ' + chip.textContent.trim(), 'ok');
    });
  });

/* 2026 Connecticut figures (Tax Foundation 2026 tables + CT DRS).
   Rates stored as [numerator, denominator] so bracket math stays exact to the cent. */
var CT_RATES=[[2,100],[45,1000],[55,1000],[6,100],[65,1000],[69,1000],[699,10000]];
var CT_CAPS={
  single:[10000,50000,100000,200000,250000,500000,Infinity],
  separate:[10000,50000,100000,200000,250000,500000,Infinity],
  married:[20000,100000,200000,400000,500000,1000000,Infinity],
  head:[16000,80000,160000,320000,400000,800000,Infinity]
};
var CT_FULL_EX={single:15000, married:24000, separate:12000, head:19000};
var CT_FULL_AT={single:30000, married:48000, separate:24000, head:38000};
var CT_ZERO_AT={single:44000, married:71000, separate:35000, head:56000};

function ctCompute(agi, status){
  var exemption;
  if(agi<=CT_FULL_AT[status]) exemption=CT_FULL_EX[status];
  else if(agi>=CT_ZERO_AT[status]) exemption=0;
  else exemption=CT_FULL_EX[status]*(CT_ZERO_AT[status]-agi)/(CT_ZERO_AT[status]-CT_FULL_AT[status]);
  exemption=Math.round(exemption*100)/100;
  var caps=CT_CAPS[status];
  var taxable=Math.max(0, agi-exemption);
  var taxCents=0, prev=0, rows=[];
  for(var i=0;i<caps.length;i++){
    if(taxable<=prev) break;
    var hi=caps[i], amt=Math.min(taxable,hi)-prev;
    var c=Math.round(amt*CT_RATES[i][0]*100/CT_RATES[i][1]);
    taxCents+=c;
    rows.push({lo:prev, hi:hi, rate:CT_RATES[i][0]/CT_RATES[i][1], amount:amt, cents:c});
    prev=hi;
  }
  var marginal=rows.length?rows[rows.length-1].rate:0;
  return {exemption:exemption, taxable:taxable, taxCents:taxCents, tax:taxCents/100,
          eff:agi>0?(taxCents/100)/agi*100:0, marginal:marginal, rows:rows};
}

function money(n){ return '$'+n.toLocaleString('en-US',{minimumFractionDigits:2, maximumFractionDigits:2}); }
function money0(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
function rangeLabel(lo,hi){
  if(hi===Infinity) return 'Over '+money0(lo);
  if(lo===0) return money0(0)+' – '+money0(hi);
  return money0(lo+1)+' – '+money0(hi);
}

document.getElementById('ctGo').addEventListener('click', function(){
  var status=document.getElementById('ctStatus').value;
  var gross=parseFloat(document.getElementById('ctIncome').value)||0;
  var pre=parseFloat(document.getElementById('ctPre').value)||0;
  if(gross<=0){ ToolPro.toast('Enter your income','err'); return; }
  var agi=Math.max(0, gross-pre);
  var r=ctCompute(agi, status);
  var statusName=document.getElementById('ctStatus').selectedOptions[0].textContent;
  var res=document.getElementById('ctRes'); res.classList.add('show');
  document.getElementById('ctResSummary').textContent='Estimate only — excludes federal tax, other credits, and local taxes. '+statusName+' · CT AGI '+money0(agi)+' · personal exemption '+money(r.exemption)+' (simplified linear phase-out).';
  var grid=document.getElementById('ctResGrid'); grid.innerHTML='';
  [['Connecticut tax owed', money(r.tax)],['Taxable income', money(r.taxable)],['Effective rate', r.eff.toFixed(2)+'%'],['Marginal rate', (r.marginal*100).toFixed(2)+'%'],['After-tax income', money(gross-r.tax)],['Monthly take-home', money((gross-r.tax)/12)]].forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
  var wrap=document.getElementById('ctBracketWrap'); wrap.innerHTML='';
  var h=document.createElement('p'); h.className='r-name'; h.style.marginBottom='8px';
  h.textContent='Per-bracket breakdown'; wrap.appendChild(h);
  var tbl=document.createElement('table');
  tbl.style.width='100%'; tbl.style.borderCollapse='collapse'; tbl.style.fontSize='.85rem';
  tbl.innerHTML='<thead><tr><th style="text-align:left;padding:6px;border-bottom:2px solid #ddd">Taxable income</th><th style="text-align:right;padding:6px;border-bottom:2px solid #ddd">Rate</th><th style="text-align:right;padding:6px;border-bottom:2px solid #ddd">Taxed at this rate</th><th style="text-align:right;padding:6px;border-bottom:2px solid #ddd">Tax</th></tr></thead>';
  var tb=document.createElement('tbody');
  r.rows.forEach(function(row){
    var tr=document.createElement('tr');
    tr.innerHTML='<td style="padding:6px;border-bottom:1px solid #eee">'+rangeLabel(row.lo,row.hi)+'</td>'+
      '<td style="text-align:right;padding:6px;border-bottom:1px solid #eee">'+(row.rate*100).toFixed(2)+'%</td>'+
      '<td style="text-align:right;padding:6px;border-bottom:1px solid #eee">'+money(row.amount)+'</td>'+
      '<td style="text-align:right;padding:6px;border-bottom:1px solid #eee"><b>'+money(row.cents/100)+'</b></td>';
    tb.appendChild(tr);
  });
  tbl.appendChild(tb); wrap.appendChild(tbl);
  ToolPro.toast('Connecticut estimate ready','ok');
});
})();
</script>

## How it works

The calculator subtracts pre-tax deductions to get your Connecticut AGI, then subtracts the personal exemption — full below the threshold, shrinking linearly to $0 through the phase-out band (Connecticut offers no standard deduction instead). The result is Connecticut taxable income, which climbs the seven brackets (2%, 4.5%, 5.5%, 6%, 6.5%, 6.9%, 6.99%); only the dollars inside each bracket are taxed at that bracket's rate. The breakdown table shows exactly how much each bracket contributed to your bill.

## Everyday uses

- **Connecticut workers** — estimate your state withholding and check for an April surprise.
- **New residents** — see what the move costs you under Connecticut's graduated rates before you relocate.
- **Freelancers** — rough out quarterly Connecticut estimated payments.
- **Job changers** — compare offers by real take-home, not headline salary.
- **High earners** — see how the 6.99% top rate and the exemption phase-out shape your marginal rate.

## Frequently asked questions

**Why does Connecticut have no standard deduction?**

Connecticut uses a personal exemption instead — $15,000 for single filers ($24,000 joint) that phases out as income rises. It works like a deduction but shrinks to $0 once your CT AGI passes the phase-out ceiling.

**Are the brackets the same for every filing status?**

No. Single and married-filing-separately share one schedule, joint filers get every bracket threshold doubled, and head-of-household filers use a wider schedule between the two.

**Does the phase-out in this calculator match the official tables exactly?**

Close but simplified: Connecticut's real phase-out drops the exemption $1,000 per $1,000 of AGI (fractional bands count fully). This tool uses a smooth linear phase-out between the full and zero thresholds, which can differ by a few dollars from the official step table.

**Is this tax advice?**

No — it is an educational estimator using 2026 figures. Itemized deductions, other credits, and special income can change your real bill; a tax professional can advise on your situation.
