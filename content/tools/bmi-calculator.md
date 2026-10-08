---
title: "Free BMI Calculator"
description: "Calculate your Body Mass Index instantly — metric and imperial units, plus the official BMI category table. Free, private, no sign-up."
date: 2026-10-01
draft: false
---

## How it works

Pick your units, enter your height and weight, and get your BMI with its health category.

<div class="tool-shell" id="bmiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>BMI Calculator</h2>
<p>Your Body Mass Index in seconds — metric or imperial, with the official category table.</p>
</div>
<button type="button" class="theme-toggle" id="bmiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick your units</p>
<div class="preset-row" id="bmiUnits">
<button type="button" class="preset-chip active" data-unit="metric">Metric (cm / kg)</button>
<button type="button" class="preset-chip" data-unit="imperial">Imperial (in / lb)</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Enter your height &amp; weight</p>
<div class="settings-panel">
<div class="preset-row" id="bmiPresets">
<button type="button" class="preset-chip" data-h="175" data-w="70">📏 175 cm / 70 kg</button>
<button type="button" class="preset-chip" data-h="180" data-w="85">🏋️ 180 cm / 85 kg</button>
<button type="button" class="preset-chip" data-h="160" data-w="55">🧍 160 cm / 55 kg</button>
</div>
<div class="settings-grid">
<div class="setting" id="bmiMetric">
<label for="bmiHeight">Height (cm)</label>
<input type="number" id="bmiHeight" class="tool-input" placeholder="175" min="1" step="0.1">
<label for="bmiWeight" style="margin-top:.6rem;">Weight (kg)</label>
<input type="number" id="bmiWeight" class="tool-input" placeholder="70" min="1" step="0.1">
</div>
<div class="setting" id="bmiImperial" style="display:none;">
<label for="bmiHeightIn">Height (inches)</label>
<input type="number" id="bmiHeightIn" class="tool-input" placeholder="69" min="1" step="0.1">
<label for="bmiWeightLb" style="margin-top:.6rem;">Weight (pounds)</label>
<input type="number" id="bmiWeightLb" class="tool-input" placeholder="154" min="1" step="0.1">
</div>
</div>
<div class="hint">Use the quick-fill chips to try a sample build, or type your own numbers.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; see your category</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="bmiBtn">
<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
Calculate BMI
</button>
<button type="button" class="btn-pro-outline" id="bmiClear">Clear</button>
</div>
<div class="results" id="bmiResults">
<p class="result-head">⚖️ Your BMI</p>
<div class="result-summary" id="bmiResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — calculate as many BMIs as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('bmiShell');
  ToolPro.themeToggle(shell, document.getElementById('bmiTheme'));

  var bmiUnit = 'metric';
  var resBox = document.getElementById('bmiResults');
  var out = document.getElementById('bmiResult');

  function setBmiUnit(u){
    bmiUnit = u;
    document.getElementById('bmiMetric').style.display = (u === 'metric') ? 'block' : 'none';
    document.getElementById('bmiImperial').style.display = (u === 'imperial') ? 'block' : 'none';
    document.querySelectorAll('#bmiUnits .preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.unit === u);
    });
  }

  document.getElementById('bmiUnits').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setBmiUnit(chip.dataset.unit);
  });

  document.getElementById('bmiPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    if (bmiUnit === 'metric') {
      document.getElementById('bmiHeight').value = chip.dataset.h;
      document.getElementById('bmiWeight').value = chip.dataset.w;
    } else {
      document.getElementById('bmiHeightIn').value = Math.round(chip.dataset.h / 2.54);
      document.getElementById('bmiWeightLb').value = Math.round(chip.dataset.w * 2.20462);
    }
    ToolPro.toast('Sample build filled in');
  });

  function bmiCategory(b){
    if (b < 18.5) return { name: 'Underweight', color: '#3b82f6' };
    if (b < 25)   return { name: 'Healthy weight', color: '#22c55e' };
    if (b < 30)   return { name: 'Overweight', color: '#f59e0b' };
    return { name: 'Obese', color: '#ef4444' };
  }

  document.getElementById('bmiBtn').addEventListener('click', function(){
    var h, w, bmi;
    if (bmiUnit === 'metric') {
      h = parseFloat(document.getElementById('bmiHeight').value) / 100;
      w = parseFloat(document.getElementById('bmiWeight').value);
      if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        out.innerHTML = '<p>Enter a valid height and weight.</p>';
        resBox.classList.add('show');
        ToolPro.toast('Enter a valid height and weight', 'err');
        return;
      }
      bmi = w / (h * h);
    } else {
      h = parseFloat(document.getElementById('bmiHeightIn').value);
      w = parseFloat(document.getElementById('bmiWeightLb').value);
      if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        out.innerHTML = '<p>Enter a valid height and weight.</p>';
        resBox.classList.add('show');
        ToolPro.toast('Enter a valid height and weight', 'err');
        return;
      }
      bmi = 703 * w / (h * h);
    }
    bmi = Math.round(bmi * 10) / 10;
    var cat = bmiCategory(bmi);
    out.innerHTML =
      '<p style="font-size:1.5rem;"><strong>' + bmi + '</strong> — <span style="color:' + cat.color + ';"><strong>' + cat.name + '</strong></span></p>'
      + '<table style="margin-top:.5rem;border-collapse:collapse;font-size:.9rem;"><tr><th style="text-align:left;padding:.25rem .75rem .25rem 0;">BMI</th><th style="text-align:left;padding:.25rem 0;">Category</th></tr>'
      + '<tr><td style="padding:.25rem .75rem .25rem 0;">Below 18.5</td><td>Underweight</td></tr>'
      + '<tr><td style="padding:.25rem .75rem .25rem 0;">18.5 – 24.9</td><td>Healthy weight</td></tr>'
      + '<tr><td style="padding:.25rem .75rem .25rem 0;">25 – 29.9</td><td>Overweight</td></tr>'
      + '<tr><td style="padding:.25rem .75rem .25rem 0;">30 and above</td><td>Obese</td></tr></table>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('BMI calculated', 'ok');
  });

  document.getElementById('bmiClear').addEventListener('click', function(){
    ['bmiHeight', 'bmiWeight', 'bmiHeightIn', 'bmiWeightLb'].forEach(function(id){
      document.getElementById(id).value = '';
    });
    resBox.classList.remove('show');
  });

  setBmiUnit('metric');
})();
</script>

## Everyday uses

- **Annual checkup prep:** 175 cm and 70 kg = BMI 22.9, healthy weight — know where you stand before the doctor visit.
- **Fitness goals:** track your BMI monthly as you train to see the trend move toward your target range.
- **Unit switching:** traveling or reading a US health article? Flip to imperial and punch in inches and pounds directly.
