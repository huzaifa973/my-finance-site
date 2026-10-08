---
title: "Free Word Counter"
description: "Count words, characters, sentences, and reading time instantly. Free online word counter — no sign-up, text never leaves your browser."
date: 2026-09-29
draft: false
---

## How it works

Paste or type your text below — counts update live as you type. Nothing is uploaded; everything happens in your browser.

<div class="tool-shell" id="wcShell" data-theme="light">

  <div class="tool-hero">
    <div class="tool-icon">
      <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm3-6H7c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1z"/></svg>
    </div>
    <div class="tool-hero-top">
      <div>
        <h2>Word Counter</h2>
        <p>Words, characters, sentences, and reading time — updated live as you type.</p>
      </div>
      <button type="button" class="theme-toggle" id="wcTheme">🌙 Dark</button>
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
      <p class="tool-step-title"><span class="tool-step-num">1</span> Your text</p>
      <div class="setting">
        <label for="wcText">Paste or type below</label>
        <textarea id="wcText" class="tool-input" rows="8" placeholder="Paste your text here…"></textarea>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">2</span> Reading-speed settings</p>
      <div class="settings-panel">
        <div class="preset-row" id="wcWpmChips">
          <button type="button" class="preset-chip" data-wpm="150">🐢 Slow · 150 wpm</button>
          <button type="button" class="preset-chip active" data-wpm="200">🚶 Average · 200 wpm</button>
          <button type="button" class="preset-chip" data-wpm="250">🏃 Fast · 250 wpm</button>
        </div>
        <div class="settings-grid">
          <div class="setting">
            <label for="wcWpmRange">Reading speed: <span class="val" id="wcWpmVal">200 wpm</span></label>
            <input type="range" id="wcWpmRange" min="100" max="300" step="5" value="200">
            <div class="hint">Average adult reading speed is around 200 words per minute.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">3</span> Live counts</p>
      <div class="tool-actions">
        <button type="button" class="btn-pro-outline" id="wcCopy">📋 Copy stats</button>
        <button type="button" class="btn-pro-outline" id="wcClear">Clear</button>
      </div>
      <div class="results show">
        <p class="result-head">📊 Text statistics</p>
        <div class="result-grid">
          <div class="result-card">
            <div style="font-size:1.8rem;font-weight:800;" id="wcWords">0</div>
            <div style="font-size:.85rem;color:var(--muted);">Words</div>
          </div>
          <div class="result-card">
            <div style="font-size:1.8rem;font-weight:800;" id="wcChars">0</div>
            <div style="font-size:.85rem;color:var(--muted);" id="wcCharsSub">Characters</div>
          </div>
          <div class="result-card">
            <div style="font-size:1.8rem;font-weight:800;" id="wcSentences">0</div>
            <div style="font-size:.85rem;color:var(--muted);">Sentences</div>
          </div>
          <div class="result-card">
            <div style="font-size:1.8rem;font-weight:800;" id="wcRead">—</div>
            <div style="font-size:.85rem;color:var(--muted);">Reading time</div>
          </div>
        </div>
      </div>
    </div>

    <div class="free-banner">
      <strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
      <p>This tool runs entirely in your browser — count as much text as you like, as often as you like.</p>
    </div>

  </div>
</div>

<script>
(function(){
  var shell = document.getElementById('wcShell');
  ToolPro.themeToggle(shell, document.getElementById('wcTheme'));

  var wpm = 200;
  var wpmRange = document.getElementById('wcWpmRange');
  var wpmVal = document.getElementById('wcWpmVal');
  var wpmChips = document.getElementById('wcWpmChips');

  ToolPro.bindSlider(wpmRange, wpmVal, function(v){ return v + ' wpm'; });
  function setWpm(v){
    wpm = v;
    wpmRange.value = v;
    wpmVal.textContent = v + ' wpm';
    wpmChips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', parseInt(c.dataset.wpm, 10) === v);
    });
    countWords();
  }
  wpmRange.addEventListener('input', function(){ setWpm(parseInt(wpmRange.value, 10)); });
  wpmChips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setWpm(parseInt(chip.dataset.wpm, 10));
    ToolPro.toast('Reading speed: ' + chip.dataset.wpm + ' wpm');
  });

  var last = { words: 0, chars: 0, charsNoSpaces: 0, sentences: 0, readTime: '—' };

  function countWords() {
    var t = document.getElementById('wcText').value;
    var words = (t.trim().match(/\S+/g) || []).length;
    var chars = t.length;
    var charsNoSpaces = t.replace(/\s/g, '').length;
    var sentences = (t.match(/[^.!?]+[.!?]+/g) || []).length;
    var minutes = words / wpm;
    var readTime = minutes < 1 ? 'under a minute' : ('about ' + Math.max(1, Math.round(minutes)) + ' min');
    document.getElementById('wcWords').textContent = words.toLocaleString();
    document.getElementById('wcChars').textContent = chars.toLocaleString();
    document.getElementById('wcCharsSub').textContent = 'Characters (' + charsNoSpaces.toLocaleString() + ' without spaces)';
    document.getElementById('wcSentences').textContent = sentences.toLocaleString();
    document.getElementById('wcRead').textContent = readTime;
    last = { words: words, chars: chars, charsNoSpaces: charsNoSpaces, sentences: sentences, readTime: readTime };
  }

  document.getElementById('wcText').addEventListener('input', countWords);
  document.getElementById('wcCopy').addEventListener('click', function(){
    var txt = 'Words: ' + last.words + '\nCharacters: ' + last.chars +
      ' (' + last.charsNoSpaces + ' without spaces)\nSentences: ' + last.sentences +
      '\nReading time: ' + last.readTime;
    ToolPro.copyText(txt, 'Stats copied to clipboard');
  });
  document.getElementById('wcClear').addEventListener('click', function(){
    document.getElementById('wcText').value = '';
    countWords();
    ToolPro.toast('Cleared');
  });

  countWords();
})();
</script>

## Why count words?

- **Students:** check essays against word limits before submitting.
- **Bloggers:** aim for 1,000+ words for in-depth articles that rank.
- **Freelancers:** many clients pay per word — know your count before you quote.
