---
title: "Free Oven Temperature Converter — °F, °C & Gas Mark"
description: "Convert oven temperatures between Fahrenheit, Celsius and Gas Mark instantly, with fan-oven adjustment and a common-settings cheat sheet. Free."
category: everyday
date: 2026-10-12
draft: false
---

A British recipe says Gas Mark 4, your American oven dial says Fahrenheit, and the European cookbook says 180°C — same oven, three languages. Type any temperature and get all three instantly, the nearest Gas Mark, an optional fan-oven adjustment, and a cheat sheet of the settings recipes actually use. No ads to scroll past while your hands are covered in flour.

<div class="tool-shell" id="ovenTemperatureShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.85 2.05A8 8 0 105.9 5.9 8 8 0 0011.85 2.05zm.15 14a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM12 5a6.4 6.4 0 00-5.5 3.1L8 9.4A4.5 4.5 0 0112 8V5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Oven Temperature Converter</h2>
<p>°F, °C, and Gas Mark in one glance — with the fan-oven adjustment US, UK, and EU recipes never explain.</p>
</div>
<button type="button" class="theme-toggle" id="ovenTemperatureTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Convert a temperature</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Temperature</span><input type="number" class="tool-input" id="ovVal" value="350" step="any"></div>
<div class="setting"><span class="t-label">From</span><select class="tool-input" id="ovFrom"><option value="f">Fahrenheit (°F)</option><option value="c">Celsius (°C)</option><option value="gas">Gas Mark</option></select></div>
<div class="setting"><span class="t-label">Fan oven adjustment</span><label class="toggle"><input type="checkbox" id="ovFan"><span></span></label></div>
</div>
<div class="hint">Fan (convection) ovens usually run 20°F / 10°C cooler than the standard setting for the same result — toggle it on to see the adjusted temperature too.</div>
</div>
<div class="results show">
<p class="result-head">🌡️ Converted</p>
<div class="result-summary" id="ovOut">350°F = 177°C = Gas Mark 4</div>
<div class="result-grid" id="ovGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Every recipe, every oven — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('ovenTemperatureShell');
ToolPro.themeToggle(shell, document.getElementById('ovenTemperatureTheme'));
var GAS=[[140,275,1],[150,300,2],[160,325,3],[175,350,4],[190,375,5],[200,400,6],[220,425,7],[230,450,8],[245,475,9]];
function nearestGas(c){ var best=GAS[0]; GAS.forEach(function(g){ if(Math.abs(g[0]-c)<Math.abs(best[0]-c)) best=g; }); return best; }
function upd(){
  var v=parseFloat(document.getElementById('ovVal').value);
  var from=document.getElementById('ovFrom').value;
  var out=document.getElementById('ovOut'), grid=document.getElementById('ovGrid');
  if(isNaN(v)){ out.textContent='Enter a temperature.'; grid.innerHTML=''; return; }
  var c;
  if(from==='f') c=(v-32)*5/9;
  else if(from==='c') c=v;
  else { var row=GAS.filter(function(g){return g[2]===Math.round(v);})[0]||nearestGas(v*1); c=row?row[0]:140; }
  var f=c*9/5+32;
  var gas=nearestGas(c);
  var fan=document.getElementById('ovFan').checked;
  var fanC=c-10, fanF=f-20;
  out.innerHTML=Math.round(f)+'°F = '+Math.round(c)+'°C = Gas Mark '+gas[2]+(fan?('<br>Fan oven: use about <strong>'+Math.round(fanF)+'°F / '+Math.round(fanC)+'°C</strong>'):'');
  grid.innerHTML='';
  [['Slow / warming', '275°F · 140°C · GM 1'],['Gentle baking', '325°F · 165°C · GM 3'],['Moderate (most recipes)', '350°F · 177°C · GM 4'],['Hot / roasting', '425°F · 220°C · GM 7'],['Pizza hot', '475°F · 245°C · GM 9']].forEach(function(r){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+r[0]+'</p><p class="r-stats">'+r[1]+'</p>';
    grid.appendChild(card);
  });
}
['ovVal','ovFrom','ovFan'].forEach(function(id){ document.getElementById(id).addEventListener('input', upd); document.getElementById(id).addEventListener('change', upd); });
upd();
})();
</script>

## How it works

Conversions use the exact formulas (°C = (°F − 32) × 5/9) and a standard Gas Mark table anchored at Gas Mark 1 = 140°C / 275°F, with each mark adding roughly 10°C. The fan toggle applies the common rule of thumb — set a convection oven about 20°F (10°C) lower than the conventional temperature for the same result.

## Everyday uses

- **Home bakers** — follow recipes from any country without mental math.
- **Meal-prep cooks** — convert air-fryer and toaster-oven instructions safely.
- **Students abroad** — decode the oven in a UK or EU kitchen.
- **Recipe writers** — publish all three formats so every reader can cook along.

## Frequently asked questions

**Is Gas Mark 4 really 350°F?**

Yes — Gas Mark 4 is 180°C in many modern tables and 350°F; you will see 175–180°C both used. For most baking the difference is negligible.

**Why do fan ovens cook cooler?**

The fan circulates hot air so heat reaches food more efficiently; the lower setting compensates so food does not over-brown.

**What temperature is "moderate oven" in old recipes?**

Moderate means about 350°F / 175°C / Gas Mark 4. "Slow" is ~300°F, "hot" is ~425°F.
