---
title: "Daily Water Intake Calculator — How Much Water Per Day?"
description: "Calculate your recommended daily water intake from weight, activity and climate — plus a simple drinking schedule, free."
category: everyday
date: 2026-10-26
draft: false
slug: daily-water-intake-calculator
---

“Eight glasses a day” ignores your size, your activity, and your climate — a 55 kg office worker and a 95 kg roofer in summer do not need the same water. Enter your weight, activity level, and climate below and this calculator gives you a personal daily target in millilitres, glasses, and bottles, plus a spread-out drinking schedule so you are not chugging a litre at 9 pm. It is general guidance, not medical advice: illness, pregnancy, and medication can change what you need, so check with a clinician if any of those apply.

<div class="tool-shell" id="dwiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Daily Water Intake Calculator</h2>
<p>How much water should you actually drink? Get a personal target and a simple daily plan.</p>
</div>
<button type="button" class="theme-toggle" id="dwiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your details</p>
<label for="dwiWeight">Body weight</label>
<input type="number" id="dwiWeight" class="tool-input" value="70" min="20" max="300">
<div class="hint">Enter kilograms, or switch the unit below to pounds.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings & quick examples</p>
<div class="settings-panel">
<div class="preset-row" id="dwiPresets">
<button type="button" class="preset-chip active" data-v="sedentary">🪑 Sedentary — desk day</button>
<button type="button" class="preset-chip" data-v="moderate">🚶 Moderate — light exercise</button>
<button type="button" class="preset-chip" data-v="active">🏃 Active — hard training</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Weight unit</label>
<label class="toggle"><input type="checkbox" id="dwiLbs"><span></span> Weight is in pounds (lb)</label>
</div>
<div class="setting">
<label>Climate</label>
<label class="toggle"><input type="checkbox" id="dwiHot"><span></span> Hot or humid climate (+500 ml)</label>
<div class="hint">Heat and humidity raise sweat losses noticeably.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate my water target</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="dwiBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Calculate Water Intake
</button>
<button type="button" class="btn-pro-outline" id="dwiClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="dwiProgWrap">
<div class="progress-bar"><i id="dwiProgBar"></i></div>
<div class="progress-text" id="dwiProgText">Working…</div>
</div>
<div class="results" id="dwiResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="dwiSummary"></div>
<div class="result-grid" id="dwiGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Use this tool as often as you like — your files and data never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell=document.getElementById('dwiShell'); ToolPro.themeToggle(shell,document.getElementById('dwiTheme'));
  var w=document.getElementById('dwiWeight'),lbs=document.getElementById('dwiLbs'),hot=document.getElementById('dwiHot');
  var btn=document.getElementById('dwiBtn'),clr=document.getElementById('dwiClear');
  var res=document.getElementById('dwiResults'),sum=document.getElementById('dwiSummary'),grid=document.getElementById('dwiGrid');
  var act='sedentary';
  document.getElementById('dwiPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#dwiPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');act=c.dataset.v;ToolPro.toast('Activity: '+c.textContent.trim());});
  function refresh(){btn.disabled=!w.value;clr.disabled=!w.value;}
  w.addEventListener('input',refresh); refresh();
  clr.addEventListener('click',function(){w.value='';grid.innerHTML='';res.classList.remove('show');refresh();});
  btn.addEventListener('click',function(){
    var kg=parseFloat(w.value)||0; if(lbs.checked)kg=kg*0.453592;
    var factor=(act==='active'?1.30:(act==='moderate'?1.15:1.0));
    var ml=Math.round(kg*35*factor+(hot.checked?500:0));
    var glasses=Math.round(ml/250), bottles=Math.round(ml/500);
    var perHour=Math.round(ml/12);
    sum.textContent='Your target: about '+ml.toLocaleString('en-US')+' ml per day — roughly '+glasses+' glasses (250 ml) or '+bottles+' bottles (500 ml).';
    grid.innerHTML='<div class="result-card"><strong>Daily target</strong><p>'+ml.toLocaleString('en-US')+' ml</p><p>'+glasses+' x 250 ml glasses · '+bottles+' x 500 ml bottles</p></div>'
      +'<div class="result-card"><strong>Simple schedule</strong><p>About '+perHour+' ml per waking hour — one glass at each meal plus one between meals covers most of it. Front-load the day; ease off in the last hour before bed.</p></div>'
      +'<div class="result-card"><strong>How this was calculated</strong><p>Base 35 ml per kg of body weight, x'+factor+' for '+act+' activity'+(hot.checked?', +500 ml for heat/humidity':'')+'. Food provides roughly 20% of daily water, so this drinking target is a guide, not a prescription.</p></div>';
    res.classList.add('show'); ToolPro.toast('Target ready','ok');
  });
})();
</script>

## How it works

Enter your weight, pick your activity level, and tick the hot-climate box if it applies, then press **Calculate Water Intake**. The calculator starts from the common 35 ml-per-kilogram baseline, scales it by activity (×1.0 sedentary, ×1.15 moderate, ×1.30 active), and adds 500 ml for hot or humid conditions. It then converts the total into 250 ml glasses and 500 ml bottles and spreads it into a per-waking-hour pace, so the target feels like a routine instead of a chore.

## Everyday uses

- **Desk workers** — stop guessing and set a real daily target.
- **Athletes** — scale intake up on training days.
- **Summer** — adjust for heat instead of running dry.
- **New routines** — pair the schedule with meals to build the habit.
- **Families** — calculate a sensible target for each person.
