---
title: "Free Salary to Hourly Converter"
description: "Free salary to hourly converter: turn an annual salary into an hourly rate — and convert hourly pay back to a salary."
category: finance
date: 2026-09-29
draft: false
---

Is $75,000 a year actually good pay per hour? This free converter turns any annual salary into an hourly rate — and works in reverse too, so hourly workers can see their yearly equivalent. Handy for job offers, negotiations, and side-hustle math.

<div class="tool-shell" id="shShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Salary to Hourly Converter</h2>
<p>Turn any annual salary into an hourly rate — or flip it and see what an hourly wage earns per year.</p>
</div>
<button type="button" class="theme-toggle" id="shTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your pay</p>
<div class="settings-grid">
<div class="setting">
<label for="shValue" id="shValueLabel">Annual salary ($)</label>
<input type="number" class="tool-input" id="shValue" placeholder="e.g. 75000" min="0">
</div>
<div class="setting">
<label for="shHours">Hours worked per week</label>
<input type="number" class="tool-input" id="shHours" placeholder="e.g. 40" min="1" max="100">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="shDir">
<button type="button" class="preset-chip active" data-dir="s2h">💼 Salary → Hourly</button>
<button type="button" class="preset-chip" data-dir="h2s">⏱️ Hourly → Salary</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="shHoursRange">Hours per week: <span class="val" id="shHoursVal">40</span></label>
<input type="range" id="shHoursRange" min="1" max="100" step="0.5" value="40">
<div class="hint">A standard full-time week is 40 hours.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; see the result</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="shBtn">
<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>
<span id="shBtnLabel">Convert to hourly</span>
</button>
<button type="button" class="btn-pro-outline" id="shClear">Clear</button>
</div>
<div class="results" id="shResults">
<p class="result-head">💵 Your conversion</p>
<div class="result-summary" id="shResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many salaries as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('shShell');
  ToolPro.themeToggle(shell, document.getElementById('shTheme'));

  var dir = 's2h';
  var dirRow = document.getElementById('shDir');
  var valueLabel = document.getElementById('shValueLabel');
  var btnLabel = document.getElementById('shBtnLabel');
  var hoursRange = document.getElementById('shHoursRange');
  var hoursNum = document.getElementById('shHours');
  var hoursVal = document.getElementById('shHoursVal');

  ToolPro.bindSlider(hoursRange, hoursVal, function(v){ return v; });
  hoursRange.addEventListener('input', function(){ hoursNum.value = hoursRange.value; });
  hoursNum.addEventListener('input', function(){
    var v = parseFloat(hoursNum.value);
    if(!isNaN(v)){
      if(v < 1) v = 1;
      if(v > 100) v = 100;
      hoursRange.value = v; hoursVal.textContent = v;
    }
  });

  dirRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    dirRow.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    dir = chip.dataset.dir;
    if(dir === 's2h'){
      valueLabel.textContent = 'Annual salary ($)';
      document.getElementById('shValue').placeholder = 'e.g. 75000';
      btnLabel.textContent = 'Convert to hourly';
    } else {
      valueLabel.textContent = 'Hourly rate ($)';
      document.getElementById('shValue').placeholder = 'e.g. 25';
      btnLabel.textContent = 'Convert to salary';
    }
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function calcConvert(){
    var v = parseFloat(document.getElementById('shValue').value);
    var hrs = parseFloat(document.getElementById('shHours').value);
    var out = document.getElementById('shResult');
    var resBox = document.getElementById('shResults');
    function fail(msg){ out.innerHTML = '<p>' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'error'); }
    if(dir === 's2h'){
      if (!v || v <= 0) { fail('Please enter a valid annual salary.'); return; }
      if (!hrs || hrs <= 0 || hrs > 100) { fail('Please enter weekly hours between 1 and 100.'); return; }
      var hourly = v / 52 / hrs;
      out.innerHTML = '<p style="font-size:1.3rem"><strong>' + fmt(v) + '/year = ' + fmt(hourly) + '/hour</strong></p>' +
        '<p>Based on 52 weeks at ' + hrs + ' hours/week (' + (hrs * 52).toLocaleString() + ' hours a year). Weekly equivalent: ' + fmt(v / 52) + '.</p>';
    } else {
      if (!v || v <= 0) { fail('Please enter a valid hourly rate.'); return; }
      if (!hrs || hrs <= 0 || hrs > 100) { fail('Please enter weekly hours between 1 and 100.'); return; }
      var annual = v * hrs * 52;
      out.innerHTML = '<p style="font-size:1.3rem"><strong>' + fmt(v) + '/hour = ' + fmt(annual) + '/year</strong></p>' +
        '<p>Based on 52 weeks at ' + hrs + ' hours/week. Weekly: ' + fmt(v * hrs) + ' · Monthly: ' + fmt(v * hrs * 52 / 12) + '.</p>';
    }
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Conversion ready', 'ok');
  }

  document.getElementById('shBtn').addEventListener('click', calcConvert);
  document.getElementById('shClear').addEventListener('click', function(){
    document.getElementById('shValue').value = '';
    hoursNum.value = '';
    hoursRange.value = 40;
    hoursRange.dispatchEvent(new Event('input'));
    document.getElementById('shResults').classList.remove('show');
    ToolPro.toast('Cleared');
  });
})();
</script>

## The numbers are before tax

Both directions use gross pay, before taxes and deductions. Your take-home will be lower — run the hourly figure through a tax estimate for your area to see what actually lands in your account.
