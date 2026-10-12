---
title: "Free Online Dice Roller"
description: "Roll up to 6 dice online — d4, d6, d8, d10, d12, d20 or d100. See every die, the total, and your recent roll history. Fair, fast and free."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Choose how many dice to roll and which kind — classic six-siders or tabletop dice up to a d100 — then hit roll. Every die is drawn on screen with its value, the total, and your last five rolls.

<div class="tool-shell" id="drShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Dice Roller</h2>
<p>Roll 1–6 fair dice — d4 to d100 — with totals &amp; roll history.</p>
</div>
<button type="button" class="theme-toggle" id="drTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose your dice</p>
<div class="settings-panel">
<div class="preset-row" id="drCount">
<button type="button" class="preset-chip" data-count="1">1 die</button>
<button type="button" class="preset-chip" data-count="2">2 dice</button>
<button type="button" class="preset-chip" data-count="3">3 dice</button>
<button type="button" class="preset-chip" data-count="4">4 dice</button>
<button type="button" class="preset-chip" data-count="5">5 dice</button>
<button type="button" class="preset-chip" data-count="6">6 dice</button>
</div>
</div>
<div class="setting">
<label for="drSides">Die type</label>
<select id="drSides" class="tool-input" style="max-width:200px;">
<option value="4">d4 (4 sides)</option>
<option value="6" selected>d6 (6 sides)</option>
<option value="8">d8 (8 sides)</option>
<option value="10">d10 (10 sides)</option>
<option value="12">d12 (12 sides)</option>
<option value="20">d20 (20 sides)</option>
<option value="100">d100 (100 sides)</option>
</select>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Roll them</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="drBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/></svg>
Roll the dice
</button>
<button type="button" class="btn-pro-outline" id="drClear">Clear history</button>
</div>
<div class="results" id="drResults">
<p class="result-head">🎲 Your roll</p>
<div id="drDice" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;"></div>
<div class="result-summary" id="drResult"></div>
<div id="drHistory" style="margin-top:8px;"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — roll as many dice as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('drShell');
  ToolPro.themeToggle(shell, document.getElementById('drTheme'));
  var sidesEl = document.getElementById('drSides');
  var resBox = document.getElementById('drResults');
  var diceBox = document.getElementById('drDice');
  var out = document.getElementById('drResult');
  var histBox = document.getElementById('drHistory');
  var rollBtn = document.getElementById('drBtn');
  var count = 2;
  var history = [];
  var pips = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };

  var chips = document.querySelectorAll('#drCount .preset-chip');
  function markChips(){
    chips.forEach(function(c){
      var on = parseInt(c.dataset.count, 10) === count;
      c.style.outline = on ? '2px solid currentColor' : '';
      c.style.fontWeight = on ? '700' : '';
    });
  }
  document.getElementById('drCount').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    count = parseInt(chip.dataset.count, 10);
    markChips();
    ToolPro.toast(count + (count === 1 ? ' die' : ' dice') + ' selected');
  });
  markChips();

  function dieHTML(value, sides){
    var base = 'width:58px;height:58px;border-radius:12px;border:2px solid rgba(127,127,127,.55);background:rgba(127,127,127,.10);display:flex;align-items:center;justify-content:center;';
    if (sides === 6) {
      var cells = '';
      for (var i = 1; i <= 9; i++) {
        var on = pips[value].indexOf(i) !== -1;
        cells += '<span style="width:11px;height:11px;border-radius:50%;background:' + (on ? 'currentColor' : 'transparent') + ';"></span>';
      }
      return '<div style="' + base + '"><div style="display:grid;grid-template-columns:repeat(3,11px);gap:4px;">' + cells + '</div></div>';
    }
    return '<div style="' + base + 'font-size:1.35rem;font-weight:700;">' + value + '</div>';
  }
  function renderDice(values, sides){
    diceBox.innerHTML = values.map(function(v){ return dieHTML(v, sides); }).join('');
  }
  function renderHistory(){
    if (!history.length) { histBox.innerHTML = ''; return; }
    histBox.innerHTML = '<p style="margin:0 0 4px;"><strong>Recent rolls</strong></p>' + history.map(function(h){ return '<p style="margin:2px 0;opacity:.85;">' + h + '</p>'; }).join('');
  }
  function rollOnce(sides){ return Math.floor(Math.random() * sides) + 1; }

  var rolling = false;
  rollBtn.addEventListener('click', function(){
    if (rolling) return;
    rolling = true;
    var sides = parseInt(sidesEl.value, 10);
    var ticks = 0;
    resBox.classList.add('show');
    var iv = setInterval(function(){
      ticks++;
      var preview = [];
      for (var i = 0; i < count; i++) preview.push(rollOnce(sides));
      renderDice(preview, sides);
      if (ticks >= 7) {
        clearInterval(iv);
        var total = preview.reduce(function(a, b){ return a + b; }, 0);
        out.innerHTML = '<p style="font-size:1.3rem;">Total: <strong>' + total + '</strong> <span style="font-size:.95rem;opacity:.8;">(' + count + 'd' + sides + ': ' + preview.join(' + ') + ')</span></p>';
        history.unshift(count + 'd' + sides + ' → ' + preview.join(', ') + ' = ' + total);
        history = history.slice(0, 5);
        renderHistory();
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast('Rolled ' + total, 'ok');
        rolling = false;
      }
    }, 60);
  });

  document.getElementById('drClear').addEventListener('click', function(){
    history = [];
    renderHistory();
    diceBox.innerHTML = '';
    out.innerHTML = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Board games:** lost the dice from a family game? Roll fair replacements right here.
- **Tabletop RPGs:** d20, d12, d8 and percentile d100 rolls for D&amp;D-style games, with history to prove the roll.
- **Quick decisions:** roll off between friends, pick who goes first, or settle a friendly tie.
- **Classroom and probability:** demonstrate odds and averages with real, visible rolls.

## Frequently asked questions

**Are the rolls really random?**
Yes. Each die uses your browser's random number generator, so every face has an exactly equal chance — the same fairness as a physical die.

**What does 2d6 mean?**
It is shorthand for "roll 2 six-sided dice and add them." This roller supports 1 to 6 dice of any type from d4 to d100.

**Why do the dice show numbers instead of dots on some types?**
Pip dots only exist on standard six-sided dice. Other dice (d8, d20, d100 and so on) show their value as a number inside a drawn die, just like the real thing.
