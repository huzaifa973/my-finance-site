---
title: "Idaho Income Tax Calculator 2026 — Flat 5.3% Rate, Take-Home Pay"
description: "Calculate Idaho state income tax for 2026: flat 5.3% on taxable income with the standard deduction. Free forever, no sign-up."
category: finance
date: 2026-10-16
draft: false
---

Idaho keeps it simple: a flat 5.3% income tax for 2026 on taxable income above the standard deduction. This free calculator applies the 2026 federal standard deduction Idaho uses ($16,100 single / $32,200 joint / $24,150 head of household) and shows your bill, effective rate, and monthly take-home.

<div class="tool-shell" id="idtaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2v20M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2 2.8 5 3.4 5 1.6 5 3.6-2.2 3-5 3-5-1.1-5-3M7 8.5H4.5M7 15.5H4.5M20 8.5h-2.5M20 15.5h-2.5"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Idaho Income Tax Calculator (2026)</h2>
<p>2026 Idaho flat tax, done right — 5.3% on taxable income, take-home in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="idtaxTheme">🌙 Dark</button>
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
<div class="setting"><label for="idIncome">Annual gross income ($)</label><input type="number" class="tool-input" id="idIncome" placeholder="e.g. 80000" value="80000"><div class="hint">Wages and other income before deductions.</div></div><div class="setting"><label for="idStatus">Filing status</label><select id="idStatus"><option value="single" selected>Single</option><option value="mfs">Married filing separately</option><option value="mfj">Married filing jointly</option><option value="hoh">Head of household</option></select><div class="hint">Idaho uses the federal standard deduction for your status.</div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="idtaxPresets">
<button type="button" class="preset-chip active" data-preset="👤 Single — $80k">👤 Single — $80k</button>
<button type="button" class="preset-chip" data-preset="👪 Joint — $160k">👪 Joint — $160k</button>
<button type="button" class="preset-chip" data-preset="💼 High earner — $250k">💼 High earner — $250k</button>
</div>
<div class="settings-grid">
<div class="setting"><div class="toggle-row"><span class="t-label">Apply standard deduction</span><label class="toggle"><input type="checkbox" id="idDed" checked><span class="slider"></span></label></div><div class="hint">2026 federal amounts Idaho follows: $16,100 single / $32,200 joint / $24,150 head of household.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Include $10 Permanent Building Fund tax</span><label class="toggle"><input type="checkbox" id="idPbf" checked><span class="slider"></span></label></div><div class="hint">Idaho adds this flat $10 to most individual returns.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate Idaho tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="idtaxBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Calculate My Tax
</button>
<button type="button" class="btn-pro-outline" id="idtaxClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="idtaxProgWrap">
<div class="progress-bar"><i id="idtaxProgBar"></i></div>
<div class="progress-text" id="idtaxProgText">Working…</div>
</div>
<div class="results" id="idtaxResults">
<p class="result-head">✅ Done — your 2026 Idaho tax estimate</p>
<div class="result-summary" id="idtaxSummary"></div>
<div class="result-grid" id="idtaxGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited Idaho tax estimates — flat-rate math, forever free.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('idtaxShell');
ToolPro.themeToggle(shell,document.getElementById('idtaxTheme'));
var RATE=5.3,DED={single:16100,mfs:16100,mfj:32200,hoh:24150};
var incomeI=document.getElementById('idIncome'),statusS=document.getElementById('idStatus'),
dedT=document.getElementById('idDed'),pbfT=document.getElementById('idPbf'),
btn=document.getElementById('idtaxBtn'),clearBtn=document.getElementById('idtaxClear'),
presets=document.getElementById('idtaxPresets');
function fmt(n){return '$'+Math.round(n).toLocaleString('en-US');}
function refresh(){var ok=parseFloat(incomeI.value)>0;btn.disabled=!ok;clearBtn.disabled=!ok&&!incomeI.value;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Calculate My Tax';}
incomeI.addEventListener('input',refresh);
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Joint')>-1){incomeI.value='160000';statusS.value='mfj';}
else if(t.indexOf('High')>-1){incomeI.value='250000';statusS.value='single';}
else{incomeI.value='80000';statusS.value='single';}
refresh();ToolPro.toast('Preset applied: '+t.trim());
});
clearBtn.addEventListener('click',function(){incomeI.value='';document.getElementById('idtaxResults').classList.remove('show');refresh();});
btn.addEventListener('click',function(){
var income=parseFloat(incomeI.value)||0;
var ded=dedT.checked?DED[statusS.value]:0;
var taxable=Math.max(0,income-ded);
var tax=taxable*RATE/100;
var pbf=pbfT.checked?10:0,total=tax+pbf;
var eff=income?total/income*100:0;
var grid=document.getElementById('idtaxGrid'),resBox=document.getElementById('idtaxResults'),
wrap=document.getElementById('idtaxProgWrap'),bar=document.getElementById('idtaxProgBar'),
txt=document.getElementById('idtaxProgText');
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
card('Idaho state tax (2026)','<b style="font-size:1.4rem">'+fmt(total)+'</b> / year',
'<br>Effective rate: <b>'+eff.toFixed(2)+'%</b> of gross income');
card('Monthly take-home','<b style="font-size:1.4rem">'+fmt((income-total)/12)+'</b> / month',
'<br>After state tax only — federal tax not included');
card('How it was calculated',
'Income: <b>'+fmt(income)+'</b><br>'+
'Minus standard deduction: '+fmt(ded)+'<br>'+
'= Taxable income: <b>'+fmt(taxable)+'</b><br>'+
'× Flat rate 5.3% = '+fmt(tax)+(pbf?'<br>+ $10 Permanent Building Fund tax':''));
var cp=document.createElement('div');cp.className='result-card';
cp.innerHTML='<div class="r-name">Copy estimate</div><div class="r-stats">Save these numbers for your records.</div><button type="button" class="btn-pro">📋 Copy Estimate</button>';
cp.querySelector('button').addEventListener('click',function(){
ToolPro.copyText('Idaho 2026 income tax estimate\nIncome: '+fmt(income)+' ('+statusS.options[statusS.selectedIndex].text+')\nTaxable: '+fmt(taxable)+'\nState tax: '+fmt(total)+'\nEffective rate: '+eff.toFixed(2)+'%','Estimate copied');
});
grid.appendChild(cp);
document.getElementById('idtaxSummary').textContent='🎉 Estimated 2026 Idaho tax: '+fmt(total)+' ('+eff.toFixed(2)+'% effective). Estimate only — not tax advice.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Tax calculated','ok');
},300);
});
refresh();
})();

</script>

## How it works

- **Step 1** — Enter your annual income and filing status.
- **Step 2** — Toggle the standard deduction and the $10 Building Fund tax.
- **Step 3** — Get your taxable income, flat 5.3% tax, effective rate, and monthly take-home.

Math: tax = 5.3% × max(0, income − standard deduction). Idaho has taxed income at a flat rate since 2023 (5.3% since 2025).

## Everyday uses

- **Idaho residents** — estimate your state tax before filing Form 40.
- **Movers** — compare Idaho’s flat 5.3% with graduated states you’re leaving.
- **Freelancers** — set aside the right amount each quarter.
- **Budgeters** — turn gross pay into realistic monthly take-home.

**Note:** estimates only — credits (like the grocery/food tax credit) are not modeled.