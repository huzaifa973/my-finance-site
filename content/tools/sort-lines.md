---
title: "Free Sort Lines Tool"
description: "Sort lines of text alphabetically, by length, or at random — with duplicate and blank-line removal. Free online tool, no sign-up, private."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste a list — one item per line — and sort it alphabetically, in reverse, by length, shuffled, or flipped. Optionally remove duplicates and blank lines at the same time. Everything updates live as you type or change an option.

<div class="tool-shell" id="srtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sort Lines</h2>
<p>Alphabetize, sort by length, shuffle, or reverse any list — with duplicate removal built in.</p>
</div>
<button type="button" class="theme-toggle" id="srtTheme">🌙 Dark</button>
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
<label for="srtInput">One item per line</label>
<textarea id="srtInput" class="tool-input" rows="8" placeholder="Paste your list here — one item per line…"></textarea>
<div class="hint" id="srtCount">0 lines in · 0 lines out</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Sort options</p>
<div class="settings-panel">
<div class="setting">
<label for="srtMode">Sort order</label>
<select id="srtMode" class="tool-input" style="max-width:280px;">
<option value="az" selected>Alphabetical (A → Z)</option>
<option value="za">Reverse alphabetical (Z → A)</option>
<option value="lenAsc">By length (short → long)</option>
<option value="lenDesc">By length (long → short)</option>
<option value="shuffle">Random shuffle</option>
<option value="reverse">Reverse order</option>
</select>
</div>
<div class="settings-grid">
<div class="setting">
<label><input type="checkbox" id="srtCase" checked> Case-insensitive sorting</label>
</div>
<div class="setting">
<label><input type="checkbox" id="srtDedupe"> Remove duplicate lines</label>
</div>
<div class="setting">
<label><input type="checkbox" id="srtBlank" checked> Ignore blank lines</label>
</div>
</div>
<div class="hint">Tip: pick "Random shuffle" again, or change any option, to re-shuffle.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Copy your sorted list</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="srtCopy">📋 Copy result</button>
<button type="button" class="btn-pro-outline" id="srtClear">Clear</button>
</div>
<div class="results show" id="srtResults">
<p class="result-head">↕️ Sorted lines</p>
<div class="setting">
<textarea id="srtOutput" class="tool-input" rows="8" readonly placeholder="Your sorted list appears here…"></textarea>
</div>
<p id="srtStats">0 lines</p>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — sort as many lists as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('srtShell');
  ToolPro.themeToggle(shell, document.getElementById('srtTheme'));
  var input = document.getElementById('srtInput');
  var output = document.getElementById('srtOutput');
  var modeSel = document.getElementById('srtMode');
  var countEl = document.getElementById('srtCount');
  var stats = document.getElementById('srtStats');
  var caseOpt = document.getElementById('srtCase');
  var dedupeOpt = document.getElementById('srtDedupe');
  var blankOpt = document.getElementById('srtBlank');

  function keyOf(s){ return caseOpt.checked ? s.toLowerCase() : s; }
  function alphaCmp(a, b){
    var ka = keyOf(a), kb = keyOf(b);
    return ka < kb ? -1 : (ka > kb ? 1 : 0);
  }

  function update(allowShuffle){
    var raw = input.value;
    var lines = raw === '' ? [] : raw.split('\n');
    var work = lines.slice();
    if (blankOpt.checked) work = work.filter(function(l){ return l.trim() !== ''; });
    if (dedupeOpt.checked) {
      var seen = {};
      work = work.filter(function(l){
        var k = keyOf(l);
        if (seen[k]) return false;
        seen[k] = 1;
        return true;
      });
    }
    var m = modeSel.value;
    if (m === 'az') work.sort(alphaCmp);
    else if (m === 'za') work.sort(function(a, b){ return alphaCmp(b, a); });
    else if (m === 'lenAsc') work.sort(function(a, b){ return (a.length - b.length) || alphaCmp(a, b); });
    else if (m === 'lenDesc') work.sort(function(a, b){ return (b.length - a.length) || alphaCmp(a, b); });
    else if (m === 'reverse') work.reverse();
    else if (m === 'shuffle' && allowShuffle) {
      for (var i = work.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = work[i]; work[i] = work[j]; work[j] = tmp;
      }
    }
    output.value = work.join('\n');
    countEl.textContent = lines.length.toLocaleString() + ' lines in · ' + work.length.toLocaleString() + ' lines out';
    stats.textContent = work.length.toLocaleString() + ' lines in the sorted list';
  }

  input.addEventListener('input', function(){ update(false); });
  modeSel.addEventListener('change', function(){ update(true); });
  [caseOpt, dedupeOpt, blankOpt].forEach(function(el){
    el.addEventListener('change', function(){ update(true); });
  });
  document.getElementById('srtCopy').addEventListener('click', function(){
    if (!output.value) { ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(output.value, 'Sorted list copied');
  });
  document.getElementById('srtClear').addEventListener('click', function(){
    input.value = '';
    update(true);
    ToolPro.toast('Cleared');
  });

  update(true);
})();
</script>

## Everyday uses

- **Alphabetizing lists:** names, students, products, or inventory items in seconds.
- **Cleaning mailing lists:** remove duplicate emails and blank rows before importing.
- **Random draws:** shuffle names for giveaways, team picks, or presentation order.
- **Reordering data:** flip a list upside down or group short items before long ones.

## Frequently asked questions

**Does sorting change my original text?**
No. Your input stays untouched in the top box — the sorted result appears separately below, ready to copy.

**How are numbers sorted?**
Alphabetically, as text — so "10" comes before "2", just like in a dictionary. If you need true numeric order, zero-pad your numbers first (02, 10).

**Is my list uploaded anywhere?**
No. Sorting happens entirely in your browser — your list never leaves your device.
