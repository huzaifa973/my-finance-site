---
title: "Word Scrambler — Scramble Words for Games & Puzzles"
description: "Scramble words for puzzles and word games with three difficulty levels, reveal answers, and copy the set. Free, runs in your browser."
category: text
date: 2026-10-16
draft: false
---

Making a word puzzle, a classroom game, or a party activity? Paste your word list and get every word scrambled at your chosen difficulty — Easy keeps the first and last letters (like real reading), Medium fully shuffles, and Hard hides the answers behind reveal buttons so players can't peek.

<div class="tool-shell" id="wscShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm3 4l2 3 2-3h2l-3 4 3 4h-2l-2-3-2 3H5l3-4-3-4h2zm9 0h5v2h-5V8zm0 3h5v2h-5v-2zm0 3h3v2h-3v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Word Scrambler</h2>
<p>Scramble any word list for puzzles and games — three difficulties, answers on demand.</p>
</div>
<button type="button" class="theme-toggle" id="wscTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your words</p>
<textarea class="tool-input" id="wscInput" rows="6" placeholder="One word per line:&#10;elephant&#10;guitar&#10;mountain&#10;chocolate"></textarea>
<div class="hint">One word per line — up to 100 words per set.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Difficulty settings</p>
<div class="settings-panel">
<div class="preset-row" id="wscPresets">
<button type="button" class="preset-chip active" data-d="easy">🟢 Easy — first &amp; last letters stay</button>
<button type="button" class="preset-chip" data-d="medium">🟡 Medium — fully shuffled</button>
<button type="button" class="preset-chip" data-d="hard">🔴 Hard — shuffled + answers hidden</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="wscHide" checked><span></span> Hide answers behind reveal buttons</label>
<div class="hint">Players tap to reveal — great for classroom games.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="wscShuffle"><span></span> Shuffle word order too</label>
<div class="hint">Mixes up the list so #1 isn't always the first word.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Scramble &amp; play</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wscBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
Scramble Words
</button>
<button type="button" class="btn-pro-outline" id="wscClear" disabled>Clear</button>
</div>
<div class="results" id="wscResults">
<p class="result-head">🎲 Scrambled set</p>
<div class="result-summary" id="wscSummary"></div>
<div class="result-grid" id="wscGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Make as many puzzle sets as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('wscShell');
  ToolPro.themeToggle(shell, document.getElementById('wscTheme'));
  var input = document.getElementById('wscInput');
  var btn = document.getElementById('wscBtn');
  var clearBtn = document.getElementById('wscClear');
  var resBox = document.getElementById('wscResults');
  var summary = document.getElementById('wscSummary');
  var grid = document.getElementById('wscGrid');
  var presets = document.getElementById('wscPresets');
  var hideBox = document.getElementById('wscHide');
  var shuffleBox = document.getElementById('wscShuffle');
  var difficulty = 'easy';

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    difficulty = chip.dataset.d;
    hideBox.checked = difficulty === 'hard' ? true : hideBox.checked;
    ToolPro.toast('Difficulty: ' + difficulty);
  });

  function shuffleArr(a){
    for(var i = a.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function scrambleWord(w, diff){
    if(w.length <= 3) return w;
    var guard = 0;
    if(diff === 'easy'){
      var mid = w.slice(1, -1).split('');
      var out = w;
      do { out = w.charAt(0) + shuffleArr(mid.slice()).join('') + w.charAt(w.length - 1); guard++; }
      while(out === w && guard < 20);
      return out;
    }
    var letters = w.split('');
    var out2 = w;
    do { out2 = shuffleArr(letters.slice()).join(''); guard++; }
    while(out2 === w && guard < 20);
    return out2;
  }

  function scramble(){
    var lines = input.value.split(/\r?\n/).map(function(s){ return s.trim(); }).filter(Boolean).slice(0, 100);
    if(!lines.length){ ToolPro.toast('Enter at least one word', 'err'); return; }
    if(shuffleBox.checked) lines = shuffleArr(lines.slice());
    var hide = hideBox.checked;
    grid.innerHTML = '';
    lines.forEach(function(w, i){
      var s = scrambleWord(w, difficulty);
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name" style="font-size:20px;letter-spacing:3px;"></div>' +
        '<div class="r-stats"></div>' +
        (hide ? '<button type="button" class="btn-pro-outline">👁 Reveal answer</button>' : '');
      card.querySelector('.r-name').textContent = (i + 1) + '. ' + s;
      card.querySelector('.r-stats').textContent = w.length + ' letters';
      if(hide){
        (function(word, btnEl, statsEl){
          btnEl.addEventListener('click', function(){
            statsEl.textContent = '✅ Answer: ' + word;
            btnEl.disabled = true;
          });
        })(w, card.querySelector('button'), card.querySelector('.r-stats'));
      } else {
        card.querySelector('.r-stats').textContent = w.length + ' letters · answer: ' + w;
      }
      grid.appendChild(card);
    });
    var copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn-pro-outline';
    copyBtn.textContent = '📋 Copy scrambled list';
    copyBtn.style.marginTop = '8px';
    copyBtn.addEventListener('click', function(){
      var txt = lines.map(function(w, i){ return (i + 1) + '. ' + scrambleWord(w, difficulty); }).join('\n');
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(function(){ ToolPro.toast('Copied', 'ok'); });
      }
    });
    grid.appendChild(copyBtn);
    summary.textContent = '🎲 ' + lines.length + ' words scrambled (' + difficulty + ' mode).';
    resBox.classList.add('show');
  }

  input.addEventListener('input', function(){
    var t = input.value.trim();
    btn.disabled = !t;
    clearBtn.disabled = !input.value;
  });
  btn.addEventListener('click', function(){
    scramble();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Words scrambled', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    input.value = ''; resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
  });
})();
</script>

## How it works

- **Step 1** — Paste or type your words, one per line (up to 100).
- **Step 2** — Pick a difficulty: Easy keeps first/last letters fixed, Medium fully shuffles, Hard shuffles and hides answers behind reveal buttons. Optionally shuffle the word order too.
- **Step 3** — Get a numbered puzzle set with per-word reveal buttons and a copy button for printing or sharing.

## Everyday uses

- **Teachers** — vocabulary review games and spelling practice.
- **Parents** — rainy-day word puzzles for kids.
- **Party hosts** — baby-shower and game-night word scrambles.
- **Puzzle makers** — prototype word-game levels fast.

**Rule of thumb:** Easy mode (first/last letters fixed) is solvable by kids; Medium stumps most adults on 8+ letter words.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/word-scrambler.md tool_name=read]
