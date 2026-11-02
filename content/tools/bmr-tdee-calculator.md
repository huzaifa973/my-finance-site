---
title: "Free BMR & TDEE Calculator — Daily Calorie Needs (Mifflin-St Jeor)"
description: "Free BMR and TDEE calculator using the Mifflin-St Jeor formula: enter gender, age, height, weight and activity level to find your daily calorie needs for maintenance, weight loss and weight gain."
category: health
date: 2026-11-02
draft: false
---
## How it works
Enter your gender, age, height, weight and activity level. This calculator estimates your Basal Metabolic Rate (BMR) with the widely used Mifflin-St Jeor equation, multiplies it by your activity factor to get your Total Daily Energy Expenditure (TDEE), and then shows the daily calorie targets for steady weight loss, maintenance and healthy weight gain.
<div class="tool-shell" id="calShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>BMR &amp; TDEE Calculator</h2>
<p>Your daily calorie needs — maintenance, cut and bulk, all in one place.</p>
</div>
<button type="button" class="theme-toggle" id="calTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> About you</p>
<div class="settings-grid">
<div class="setting">
<label for="calGender">Biological gender</label>
<select id="calGender" class="tool-input">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
<div class="hint">The Mifflin-St Jeor formula uses different constants for men and women.</div>
</div>
<div class="setting">
<label for="calAge">Age (years)</label>
<input type="number" id="calAge" class="tool-input" placeholder="e.g. 28" min="10" max="120">
</div>
<div class="setting">
<label for="calHeight">Height (cm)</label>
<input type="number" id="calHeight" class="tool-input" placeholder="e.g. 175" min="50" max="250" step="0.1">
</div>
<div class="setting">
<label for="calWeight">Weight (kg)</label>
<input type="number" id="calWeight" class="tool-input" placeholder="e.g. 70" min="20" max="300" step="0.1">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your activity level</p>
<div class="settings-grid">
<div class="setting">
<label for="calActivity">Activity level (1–5)</label>
<select id="calActivity" class="tool-input">
<option value="1.2">1 — Sedentary (desk job, little exercise)</option>
<option value="1.375">2 — Lightly active (exercise 1–3 days/week)</option>
<option value="1.55" selected>3 — Moderately active (exercise 3–5 days/week)</option>
<option value="1.725">4 — Very active (hard exercise 6–7 days/week)</option>
<option value="1.9">5 — Extra active (physical job + training)</option>
</select>
<div class="hint">Pick the level that matches your typical week, not your best week.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your calorie targets</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="calBtn">
<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
Calculate my calories
</button>
<button type="button" class="btn-pro-outline" id="calClear">Clear</button>
</div>
<div class="results" id="calResults">
<p class="result-head">🔥 Your daily calorie targets</p>
<div class="result-summary" id="calSummary"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('calShell');
  ToolPro.themeToggle(shell, document.getElementById('calTheme'));
  var resBox = document.getElementById('calResults');
  var summary = document.getElementById('calSummary');
  function fmt(n){ return Math.round(n).toLocaleString(); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('calBtn').addEventListener('click', function(){
    var gender = document.getElementById('calGender').value;
    var age = num('calAge');
    var height = num('calHeight');
    var weight = num('calWeight');
    var factor = parseFloat(document.getElementById('calActivity').value);
    if (isNaN(age) || age < 10 || age > 120) { showError('Enter your age (10–120).'); return; }
    if (isNaN(height) || height < 50 || height > 250) { showError('Enter your height in cm (50–250).'); return; }
    if (isNaN(weight) || weight < 20 || weight > 300) { showError('Enter your weight in kg (20–300).'); return; }
    /* Mifflin-St Jeor equation */
    var bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
    var tdee = bmr * factor;
    var loss = tdee - 500;
    var gain = tdee + 500;
    var lossPerWeek = 500 * 7 / 7700;
    var gainPerWeek = 500 * 7 / 7700;
    summary.innerHTML =
      '<p style="font-size:1.35rem;">Maintenance (TDEE): <strong>' + fmt(tdee) + ' kcal/day</strong></p>'
      + '<p>Basal Metabolic Rate (BMR): <strong>' + fmt(bmr) + ' kcal/day</strong></p>'
      + '<hr style="border:none;border-top:1px solid #ddd;margin:10px 0;">'
      + '<p><strong>Weight loss:</strong> <span style="color:#0b6e4f">' + fmt(loss) + ' kcal/day</span> &nbsp;—&nbsp; about ' + lossPerWeek.toFixed(2) + ' kg/week loss at a 500 kcal deficit</p>'
      + '<p><strong>Maintenance:</strong> <strong>' + fmt(tdee) + ' kcal/day</strong> &nbsp;—&nbsp; hold your current weight</p>'
      + '<p><strong>Weight gain:</strong> <span style="color:#b45309">' + fmt(gain) + ' kcal/day</span> &nbsp;—&nbsp; about ' + gainPerWeek.toFixed(2) + ' kg/week gain at a 500 kcal surplus</p>'
      + '<p style="font-size:0.85rem;color:#666;margin-top:10px;">Estimates based on the Mifflin-St Jeor equation. Real calorie needs vary — adjust by 100–200 kcal based on how your weight actually changes over 2–3 weeks.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Calorie targets ready', 'ok');
  });
  document.getElementById('calClear').addEventListener('click', function(){
    document.getElementById('calGender').value = 'male';
    document.getElementById('calActivity').value = '1.55';
    ['calAge','calHeight','calWeight'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Your BMR is the calories you burn at complete rest, estimated by the Mifflin-St Jeor equation — the most accurate widely-used formula for healthy adults:
**Men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5**
**Women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161**
Your TDEE multiplies BMR by an activity factor (1.2 sedentary up to 1.9 extra active) to include exercise and daily movement. A sustained 500 kcal/day deficit or surplus changes body mass by roughly 0.45 kg per week, which is how the loss and gain targets are derived.
## Everyday uses
- **Weight loss set-up:** pick the loss target as your daily calorie ceiling and track intake for 2–3 weeks to confirm.
- **Bulk planning:** use the gain target to add muscle without excessive fat gain, paired with strength training.
- **Dietary check:** if your weight is not changing, compare your actual intake to the maintenance number — the gap is usually smaller than you think.
## Frequently asked questions
### Which is more accurate, BMR or TDEE?
BMR is a resting estimate; TDEE is what you actually burn in a normal day and is the number to use for eating targets. TDEE is less precise because activity level is self-rated, so treat it as a starting point and adjust based on your real weight trend.
### Is a 500 kcal deficit safe for everyone?
A 500 kcal/day deficit is a common moderate target for most adults, but very short, light or older individuals may need a smaller deficit to avoid nutrient gaps. If you have medical conditions, are pregnant, or are under 18, consult a doctor or dietitian before restricting calories.
### Why does my weight change faster or slower than predicted?
The 0.45 kg/week rule assumes ~7,700 kcal per kg of body mass, but real changes include water weight, muscle gain/loss and metabolic adaptation. Weigh yourself under consistent conditions and look at the 2–3 week trend, not day-to-day fluctuations.
