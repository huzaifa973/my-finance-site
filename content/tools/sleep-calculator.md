---
title: "Sleep Calculator — Best Bedtime & Wake-Up Times by Sleep Cycle"
description: "Find the best bedtime for your wake-up time — or the best wake-up times for your bedtime — using 90-minute sleep cycles. Free, in your browser."
category: everyday
date: 2026-10-27
draft: false
---

Waking up groggy is often about timing, not just hours: sleep runs in roughly 90-minute cycles, and waking at the end of a cycle feels much better than waking mid-cycle. Pick a wake-up time and this calculator works backward to bedtimes that give you 3–6 full cycles, or pick a bedtime and see the best wake-up times. A 15-minute fall-asleep buffer is included. One plain note: cycles vary from person to person and night to night — 90 minutes is a useful average, not a medical rule, so treat the times as guidance.

<div class="tool-shell" id="slpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3a4.5 4.5 0 0 0 0 9h3a2.5 2.5 0 0 1 0 5h-2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H18a4.5 4.5 0 0 0 0-9h-3a2.5 2.5 0 0 1 0-5h2.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5H12z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sleep Calculator</h2>
<p>Wake up at the end of a sleep cycle, not in the middle of one — 90-minute cycles, 15-min buffer.</p>
</div>
<button type="button" class="theme-toggle" id="slpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick a time</p>
<div class="settings-grid">
<div class="setting">
<label for="slpWake">I need to wake up at</label>
<input type="time" id="slpWake" class="tool-input" value="07:00">
</div>
<div class="setting">
<label for="slpBed">Or: I plan to sleep at</label>
<input type="time" id="slpBed" class="tool-input" value="23:00">
</div>
</div>
<div class="hint">Set whichever time is fixed for you — the calculator works in both directions.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings &amp; quick examples</p>
<div class="settings-panel">
<div class="preset-row" id="slpPresets">
<button type="button" class="preset-chip active" data-mode="wake">🌅 Bedtimes for my wake-up time</button>
<button type="button" class="preset-chip" data-mode="bed">🌙 Wake-up times for my bedtime</button>
<button type="button" class="preset-chip" data-mode="now">⏰ I am going to sleep now</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="slpBuffer">Fall-asleep buffer: <span class="val" id="slpBufVal">15 min</span></label>
<input type="range" id="slpBuffer" min="0" max="45" step="5" value="15">
<div class="hint">Most people take 10–20 minutes to fall asleep — the buffer keeps the cycles honest.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="slpSix" checked><span></span> Include 6 cycles (9 hours — long sleepers)</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your times</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="slpBtn">
<svg viewBox="0 0 24 24"><path d="M12 3a4.5 4.5 0 0 0 0 9h3a2.5 2.5 0 0 1 0 5h-2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H18a4.5 4.5 0 0 0 0-9h-3a2.5 2.5 0 0 1 0-5h2.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5H12z"/></svg>
Calculate Sleep Times
</button>
<button type="button" class="btn-pro-outline" id="slpClear">Reset</button>
</div>
<div class="progress-wrap" id="slpProgWrap">
<div class="progress-bar"><i id="slpProgBar"></i></div>
<div class="progress-text" id="slpProgText">Calculating…</div>
</div>
<div class="results show" id="slpResults">
<p class="result-head">😴 Your sleep cycle times</p>
<div class="result-summary" id="slpSummary">Pick a wake-up time or a bedtime and hit Calculate.</div>
<div class="result-grid" id="slpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Plan tonight's sleep — and every night's — in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('slpShell');
  ToolPro.themeToggle(shell, document.getElementById('slpTheme'));
  var wakeEl = document.getElementById('slpWake');
  var bedEl = document.getElementById('slpBed');
  var bufRange = document.getElementById('slpBuffer');
  var bufVal = document.getElementById('slpBufVal');
  var mode = 'wake';
  var presets = document.getElementById('slpPresets');
  ToolPro.bindSlider(bufRange, bufVal, function(v){ return v + ' min'; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    ToolPro.toast('Mode: ' + chip.textContent.trim());
    calc();
  });
  function parseTime(str){
    var parts = String(str).split(':');
    if(parts.length < 2) return null;
    var h = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
    if(isNaN(h) || isNaN(m)) return null;
    return h * 60 + m;
  }
  function fmt(mins){
    mins = ((mins % 1440) + 1440) % 1440;
    var h = Math.floor(mins / 60), m = mins % 60;
    var ap = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12; if(h12 === 0) h12 = 12;
    return h12 + ':' + (m < 10 ? '0' + m : m) + ' ' + ap;
  }
  function fmtDur(mins){
    var h = Math.floor(mins / 60), m = mins % 60;
    return h + 'h' + (m ? ' ' + m + 'm' : '');
  }
  function calc(){
    var buffer = parseInt(bufRange.value, 10) || 0;
    var includeSix = document.getElementById('slpSix').checked;
    var grid = document.getElementById('slpGrid');
    var summaryEl = document.getElementById('slpSummary');
    grid.innerHTML = '';
    var cycles = includeSix ? [6, 5, 4, 3] : [5, 4, 3];
    if(mode === 'wake'){
      var wake = parseTime(wakeEl.value);
      if(wake === null){ ToolPro.toast('Enter a wake-up time.', 'err'); return; }
      summaryEl.textContent = 'To wake at ' + fmt(wake) + ', go to bed at one of these times (allowing ' + buffer + ' min to fall asleep):';
      cycles.forEach(function(c){
        var total = c * 90 + buffer;
        var bed = wake - total;
        var card = document.createElement('div');
        card.className = 'result-card';
        var best = (c === 5) ? ' ⭐ Recommended' : '';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
        card.querySelector('.r-name').textContent = fmt(bed) + best;
        card.querySelector('.r-stats').textContent = c + ' cycles · ' + fmtDur(c * 90) + ' of sleep + ' + buffer + ' min to fall asleep';
        grid.appendChild(card);
      });
    } else if(mode === 'bed'){
      var bed = parseTime(bedEl.value);
      if(bed === null){ ToolPro.toast('Enter a bedtime.', 'err'); return; }
      summaryEl.textContent = 'Going to bed at ' + fmt(bed) + ', wake at one of these times (allowing ' + buffer + ' min to fall asleep):';
      cycles.forEach(function(c){
        var total = c * 90 + buffer;
        var wake = bed + total;
        var card = document.createElement('div');
        card.className = 'result-card';
        var best = (c === 5) ? ' ⭐ Recommended' : '';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
        card.querySelector('.r-name').textContent = fmt(wake) + best;
        card.querySelector('.r-stats').textContent = c + ' cycles · ' + fmtDur(c * 90) + ' of sleep + ' + buffer + ' min to fall asleep';
        grid.appendChild(card);
      });
    } else {
      var now = new Date();
      var bedNow = now.getHours() * 60 + now.getMinutes();
      summaryEl.textContent = 'Falling asleep now (' + fmt(bedNow) + '), wake at one of these times:';
      cycles.forEach(function(c){
        var total = c * 90 + buffer;
        var wake = bedNow + total;
        var card = document.createElement('div');
        card.className = 'result-card';
        var best = (c === 5) ? ' ⭐ Recommended' : '';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
        card.querySelector('.r-name').textContent = fmt(wake) + best;
        card.querySelector('.r-stats').textContent = c + ' cycles · ' + fmtDur(c * 90) + ' of sleep + ' + buffer + ' min to fall asleep';
        grid.appendChild(card);
      });
    }
    ToolPro.toast('Sleep times calculated', 'ok');
  }
  document.getElementById('slpBtn').addEventListener('click', function(){
    var wrap = document.getElementById('slpProgWrap');
    wrap.classList.add('show');
    document.getElementById('slpProgBar').style.width = '60%';
    setTimeout(function(){
      calc();
      document.getElementById('slpProgBar').style.width = '100%';
      setTimeout(function(){ wrap.classList.remove('show'); }, 300);
    }, 120);
  });
  document.getElementById('slpClear').addEventListener('click', function(){
    wakeEl.value = '07:00'; bedEl.value = '23:00'; bufRange.value = '15';
    bufRange.dispatchEvent(new Event('input'));
    document.getElementById('slpGrid').innerHTML = '';
    document.getElementById('slpSummary').textContent = 'Pick a wake-up time or a bedtime and hit Calculate.';
  });
  calc();
})();
</script>

## How it works

Sleep runs in cycles of roughly 90 minutes, moving from light sleep through deep sleep to REM. Waking at the end of a cycle — when sleep is lightest — usually feels much better than being jolted awake mid-cycle. This calculator adds a fall-asleep buffer (default 15 minutes) to each cycle count, then works backward from your wake-up time or forward from your bedtime to give you 3–6 cycle options. Five cycles (7.5 hours of sleep) is the usual recommendation for adults; six suits long sleepers, four is a short night.

**Plain note:** 90 minutes is an average — real cycles vary between roughly 80 and 110 minutes and shift through the night. These times are guidance for better mornings, not medical advice; persistent sleep problems deserve a clinician, not a calculator.

## Everyday uses

- **Work mornings** — pick the bedtime that makes a 6 am alarm feel kind.
- **Shift workers** — find the best wake-up time after a daytime sleep.
- **Students** — plan a short night before an exam without wrecking the morning.
- **Travelers** — reset faster by timing sleep around the new time zone.
- **Naps** — a 20-minute nap or one full 90-minute cycle beats a 45-minute groggy nap.

**Rule of thumb:** if you must cut sleep short, cut a whole cycle — waking after 4 full cycles beats waking after 4.5.
