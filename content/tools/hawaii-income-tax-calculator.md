---
title: "Hawaii Income Tax Calculator 2026 — Brackets, Rates & Take-Home Pay"
description: "Calculate Hawaii state income tax for 2026 with all 12 brackets, standard deduction, and effective rate. Free forever, no sign-up."
category: finance
date: 2026-10-16
draft: false
---

Hawaii has the most income-tax brackets of any US state — twelve of them, from 1.4% to 11%. This free 2026 Hawaii income tax calculator applies every bracket to your taxable income (after the standard deduction and personal exemptions), then shows your total bill, effective rate, and monthly take-home pay.

<div class="tool-shell" id="hitaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2v20M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2 2.8 5 3.4 5 1.6 5 3.6-2.2 3-5 3-5-1.1-5-3M7 8.5H4.5M7 15.5H4.5M20 8.5h-2.5M20 15.5h-2.5"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Hawaii Income Tax Calculator (2026)</h2>
<p>2026 Hawaii tax with all 12 brackets — see your bill, effective rate, and take-home.</p>
</div>
<button type="button" class="theme-toggle" id="hitaxTheme">🌙 Dark</button>
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
<div class="setting"><label for="hiIncome">Annual gross income ($)</label><input type="number" class="tool-input" id="hiIncome" placeholder="e.g. 85000" value="85000"><div class="hint">Wages and other income before deductions.</div></div><div class="setting"><label for="hiStatus">Filing status</label><select id="hiStatus"><option value="single" selected>Single</option><option value="mfs">Married filing separately</option><option value="mfj">Married filing jointly</option><option value="hoh">Head of household</option></select><div class="hint">Joint thresholds are 2x single; head of household 1.5x.</div></div><div class="setting"><label for="hiExempt">Personal exemptions</label><input type="number" class="tool-input" id="hiExempt" placeholder="1 for yourself" value="1"><div class="hint">Hawaii allows a $1,144 exemption per person (2026).</div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="hitaxPresets">
<button type="button" class="preset-chip active" data-preset="🏝️ Single — $85k">🏝️ Single — $85k</button>
<button type="button" class="preset-chip" data-preset="👪 Family — $160k joint">👪 Family — $160k joint</button>
<button type="button" class="preset-chip" data-preset="💼 High earner — $300k">💼 High earner — $300k</button>
</div>
<div class="settings-grid">
<div class="setting"><div class="toggle-row"><span class="t-label">Apply standard deduction</span><label class="toggle"><input type="checkbox" id="hiDed" checked><span class="slider"></span></label></div><div class="hint">2026: $8,000 single / $16,000 joint / $12,000 head of household (Act 46).</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Apply $1,144 personal exemptions</span><label class="toggle"><input type="checkbox" id="hiEx" checked><span class="slider"></span></label></div><div class="hint">One per exemption claimed above.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate Hawaii tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hitaxBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Calculate My Tax
</button>
<button type="button" class="btn-pro-outline" id="hitaxClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="hitaxProgWrap">
<div class="progress-bar"><i id="hitaxProgBar"></i></div>
<div class="progress-text" id="hitaxProgText">Working…</div>
</div>
<div class="results" id="hitaxResults">
<p class="result-head">✅ Done — your 2026 Hawaii tax estimate</p>
<div class="result-summary" id="hitaxSummary"></div>
<div class="result-grid" id="hitaxGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited Hawaii tax estimates — every filing status, forever free.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('hitaxShell');
ToolPro.themeToggle(shell,document.getElementById('hitaxTheme'));
var RATES=[1.4,3.2,5.5,6.4,6.8,7.2,7.6,7.9,8.25,9,10,11];
var SINGLE=[0,9600,14400,19200,24000,36000,48000,125000,175000,225000,275000,325000];
var DED={single:8000,mfs:8000,mfj:16000,hoh:12000};
var incomeI=document.getElementById('hiIncome'),statusS=document.getElementById('hiStatus'),
exI=document.getElementById('hiExempt'),dedT=document.getElementById('hiDed'),exT=document.getElementById('hiEx'),
btn=document.getElementById('hitaxBtn'),clearBtn=document.getElementById('hitaxClear'),
presets=document.getElementById('hitaxPresets');
function fmt(n){return '$'+Math.round(n).toLocaleString('en-US');}
function mult(){return statusS.value==='mfj'?2:statusS.value==='hoh'?1.5:1;}
function refresh(){var ok=parseFloat(incomeI.value)>0;btn.disabled=!ok;clearBtn.disabled=!ok&&!incomeI.value;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Calculate My Tax';}
incomeI.addEventListener('input',refresh);
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Family')>-1){incomeI.value='160000';statusS.value='mfj';exI.value='4';}
else if(t.indexOf('High')>-1){incomeI.value='300000';statusS.value='single';exI.value='1';}
else{incomeI.value='85000';statusS.value='single';exI.value='1';}
refresh();ToolPro.toast('Preset applied: '+t.trim());
});
clearBtn.addEventListener('click',function(){incomeI.value='';document.getElementById('hitaxResults').classList.remove('show');refresh();});
btn.addEventListener('click',function(){
var income=parseFloat(incomeI.value)||0,m=mult();
var ded=dedT.checked?DED[statusS.value]:0;
var exem=exT.checked?Math.max(0,parseInt(exI.value,10)||0)*1144:0;
var taxable=Math.max(0,income-ded-exem);
var rows=[],tax=0;
for(var i=0;i<RATES.length;i++){
var lo=SINGLE[i]*m,hi=i<RATES.length-1?SINGLE[i+1]*m:Infinity;
var amt=Math.max(0,Math.min(taxable,hi)-lo);
if(amt>0){var t=amt*RATES[i]/100;tax+=t;
rows.push({rate:RATES[i],from:lo,to:hi===Infinity?null:hi,amt:amt,tax:t});}
}
var eff=income?tax/income*100:0;
var grid=document.getElementById('hitaxGrid'),resBox=document.getElementById('hitaxResults'),
wrap=document.getElementById('hitaxProgWrap'),bar=document.getElementById('hitaxProgBar'),
txt=document.getElementById('hitaxProgText');
wrap.classList.add('show');bar.style.width='60%';txt.textContent='Calculating…';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');grid.innerHTML='';
function card(name,stat,extra){
var c=document.createElement('div');c.className='result-card';
c.innerHTML='<div class="r-name"></div><div class="r-stats"></div>';
c.querySelector('.r-name').textContent=name;
c.querySelector('.r-stats').innerHTML=stat+(extra||'');
grid.appendChild(c);return c;
}
card('Hawaii state tax (2026)','<b style="font-size:1.4rem">'+fmt(tax)+'</b> / year',
'<br>Effective rate: <b>'+eff.toFixed(2)+'%</b> of gross income');
card('Monthly take-home','<b style="font-size:1.4rem">'+fmt((income-tax)/12)+'</b> / month',
'<br>After state tax only — federal tax not included');
var bc=card('Per-bracket breakdown','Taxable income: <b>'+fmt(taxable)+'</b><br>Deduction: '+fmt(ded)+' · Exemptions: '+fmt(exem));
var tbl=document.createElement('table');
tbl.style.cssText='width:100%;font-size:.85rem;border-collapse:collapse;margin-top:.5rem';
tbl.innerHTML='<tr style="text-align:left;border-bottom:2px solid rgba(0,0,0,.15)"><th>Bracket</th><th>Taxed at</th><th style="text-align:right">Tax</th></tr>'+
rows.map(function(r){
return '<tr style="border-bottom:1px solid rgba(0,0,0,.07)"><td>'+fmt(r.from)+'–'+(r.to?fmt(r.to):'∞')+'</td><td>'+r.rate+'%</td><td style="text-align:right">'+fmt(r.tax)+'</td></tr>';
}).join('');
bc.querySelector('.r-stats').appendChild(tbl);
var cp=document.createElement('div');cp.className='result-card';
cp.innerHTML='<div class="r-name">Copy estimate</div><div class="r-stats">Save these numbers for your records.</div><button type="button" class="btn-pro">📋 Copy Estimate</button>';
cp.querySelector('button').addEventListener('click',function(){
ToolPro.copyText('Hawaii 2026 income tax estimate\nIncome: '+fmt(income)+' ('+statusS.options[statusS.selectedIndex].text+')\nTaxable: '+fmt(taxable)+'\nState tax: '+fmt(tax)+'\nEffective rate: '+eff.toFixed(2)+'%','Estimate copied');
});
grid.appendChild(cp);
document.getElementById('hitaxSummary').textContent='🎉 Estimated 2026 Hawaii tax: '+fmt(tax)+' ('+eff.toFixed(2)+'% effective). Estimate only — not tax advice.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Tax calculated','ok');
},300);
});
refresh();
})();

</script>

## How it works

- **Step 1** — Enter your annual income, filing status, and number of exemptions.
- **Step 2** — Toggle the 2026 standard deduction and personal exemptions.
- **Step 3** — Get your per-bracket breakdown, total tax, effective rate, and monthly take-home.

2026 brackets (single): 1.4% to $9,600 · 3.2% to $14,400 · 5.5% to $19,200 · 6.4% to $24,000 · 6.8% to $36,000 · 7.2% to $48,000 · 7.6% to $125,000 · 7.9% to $175,000 · 8.25% to $225,000 · 9% to $275,000 · 10% to $325,000 · 11% above. Joint = 2x thresholds, head of household = 1.5x.

## Everyday uses

- **Hawaii residents** — estimate your state tax before filing.
- **Movers** — compare Hawaii’s graduated tax with your current state.
- **Freelancers** — set aside the right amount each quarter.
- **Budgeters** — turn gross pay into realistic monthly take-home.

**Note:** estimates only — credits, itemized deductions, and the 7.25% capital-gains cap are not modeled.