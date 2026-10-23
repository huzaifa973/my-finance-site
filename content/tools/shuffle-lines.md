---
title: "Free Shuffle Lines Tool — Randomize Line Order Online"
description: "Shuffle the lines of any text with a true Fisher-Yates shuffle. Skip blanks, dedupe lines, then copy the result. Free forever, private, in-browser."
category: text
date: 2026-10-23
draft: false
---

Need a randomized list — quiz questions, raffle entries, a shuffled playlist, study flashcards? Paste your text below and get the lines back in a genuinely random order using the Fisher-Yates shuffle (the correct algorithm, so every ordering is equally likely). Options strip blanks and duplicates first. Nothing is uploaded; everything runs in your browser.

<div class="tool-shell" id="shShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L15.13 19H11v1.5h4.5V16h-1.5v2.59l-2.17-2.18z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Shuffle Lines</h2>
<p>Randomize any list of lines with a true Fisher-Yates shuffle — instantly, privately.</p>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your lines</p>
<div class="setting">
<label for="shInput">One item per line</label>
<textarea id="shInput" class="tool-input" rows="8" placeholder="Alice&#10;Bob&#10;Carol&#10;Dave&#10;Eve"></textarea>
</div>
<div class="hint">Works with lists, names, words, URLs — anything with one item per line.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Shuffle settings</p>
<div class="settings-panel">
<div class="preset-row" id="shPresets">
<button type="button" class="preset-chip active" data-blanks="1" data-dupe="0">🎲 Pure shuffle</button>
<button type="button" class="preset-chip" data-blanks="1" data-dupe="1">✨ Shuffle + remove duplicates</button>
<button type="button" class="preset-chip" data-blanks="0" data-dupe="0">📄 Keep blank lines too</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Remove empty lines</span><label class="toggle"><input type="checkbox" id="shBlanks" checked><span class="track"></span></label></div>
<div class="hint">Blank lines are usually accidental — drop them before shuffling.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Remove duplicate lines</span><label class="toggle"><input type="checkbox" id="shDupe"><span class="track"></span></label></div>
<div class="hint">Keeps the first occurrence of each line, drops later repeats.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Trim whitespace</span><label class="toggle"><input type="checkbox" id="shTrim" checked><span class="track"></span></label></div>
<div class="hint">Removes leading/trailing spaces from each line.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Shuffle &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="shBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L15.13 19H11v1.5h4.5V16h-1.5v2.59l-2.17-2.18z"/></svg>
Shuffle Lines
</button>
<button type="button" class="btn-pro-outline" id="shCopy" disabled>📋 Copy result</button>
<button type="button" class="btn-pro-outline" id="shClear" disabled>Clear</button>
</div>
<div class="results" id="shResults">
<p class="result-head">🎲 Shuffled result</p>
<div class="result-summary" id="shSummary"></div>
<div class="result-grid" id="shGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — shuffle as many lists as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('shShell');
  ToolPro.themeToggle(shell, document.getElementById('shTheme'));
  var input = document.getElementById('shInput');
  var btn = document.getElementById('shBtn');
  var copyBtn = document.getElementById('shCopy');
  var clearBtn = document.getElementById('shClear');
  var presets = document.getElementById('shPresets');
  var blanksEl = document.getElementById('shBlanks');
  var dupeEl = document.getElementById('shDupe');
  var trimEl = document.getElementById('shTrim');
  var resBox = document.getElementById('shResults');
  var summaryEl = document.getElementById('shSummary');
  var gridEl = document.getElementById('shGrid');

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    blanksEl.checked = chip.dataset.blanks === '1';
    dupeEl.checked = chip.dataset.dupe === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var has = input.value.trim().length > 0;
    btn.disabled = !has;
    clearBtn.disabled = !has && !gridEl.children.length;
  }
  input.addEventListener('input', refresh);

  clearBtn.addEventListener('click', function(){
    input.value = ''; gridEl.innerHTML = ''; summaryEl.textContent = '';
    copyBtn.disabled = true; resBox.classList.remove('show'); refresh();
  });

  function fisherYates(arr){
    for(var i = arr.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  btn.addEventListener('click', function(){
    var lines = input.value.split(/\r?\n/);
    if(trimEl.checked) lines = lines.map(function(l){ return l.trim(); });
    if(blanksEl.checked) lines = lines.filter(function(l){ return l.length > 0; });
    if(dupeEl.checked){
      var seen = {}, out = [];
      lines.forEach(function(l){ if(!seen[l]){ seen[l] = true; out.push(l); } });
      lines = out;
    }
    if(!lines.length){ ToolPro.toast('Nothing to shuffle — paste some lines first.', 'err'); return; }
    var shuffled = fisherYates(lines.slice());
    var text = shuffled.join('\n');

    gridEl.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name">Shuffled list</div>' +
      '<div class="r-stats"></div>' +
      '<div class="setting"><textarea class="tool-input" rows="8" readonly></textarea></div>';
    card.querySelector('.r-stats').textContent =
      lines.length + (lines.length === 1 ? ' line' : ' lines') + ' shuffled — every ordering equally likely.';
    card.querySelector('textarea').value = text;
    gridEl.appendChild(card);
    summaryEl.textContent = '🎉 Done — ' + lines.length + ' lines in random order. Hit Shuffle again for a new order.';
    resBox.classList.add('show');
    copyBtn.disabled = false;
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Lines shuffled', 'ok');
  });

  copyBtn.addEventListener('click', function(){
    var ta = gridEl.querySelector('textarea');
    if(!ta){ return; }
    navigator.clipboard.writeText(ta.value).then(
      function(){ ToolPro.toast('Shuffled list copied', 'ok'); },
      function(){ ToolPro.toast('Copy failed — select the text manually', 'err'); }
    );
  });

  refresh();
})();
</script>

## How it works

Paste one item per line, choose your cleanup options (drop blanks, drop duplicates, trim spaces), and hit **Shuffle Lines**. The tool runs a Fisher-Yates shuffle — the textbook-correct randomization algorithm — so every possible ordering of your list is equally likely. Copy the result or shuffle again for a fresh order.

**Rule of thumb:** shuffle once and commit to the result — reshuffling until you "like" the order defeats the randomness.

## Everyday uses

- **Teachers** — randomize quiz question order or pick a fair student order for presentations.
- **Giveaways** — shuffle raffle entries for a fair draw (screenshot the result as your record).
- **Study** — shuffle flashcards or vocab lists so you stop memorizing the sequence.
- **Teams** — randomize standup order, Secret Santa draws, or bracket seeding.
- **Creators** — shuffle video ideas or content pillars to break out of a rut.
