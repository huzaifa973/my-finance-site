---
title: "Free Reading Time Calculator — Words to Minutes Instantly"
description: "Paste text to get instant reading time at 200, 225 and 250 wpm, speaking time, skim time, character counts and book-page estimates. Live updates as you type."
category: text
date: 2026-10-15
draft: false
---

"How long will this take to read?" Paste any text and find out instantly: reading time at slow, average and fast paces, speaking/presentation time, skim time, character counts and a book-page estimate — updating live as you type. Everything runs in your browser.

<div class="tool-shell" id="rtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Reading Time Calculator</h2>
<p>Paste text — reading, speaking &amp; skim times, live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="rtTheme">🌙 Dark</button>
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
<label for="rtText">Paste or type your text <span class="val" id="rtLive">0 words</span></label>
<textarea id="rtText" class="tool-input" rows="10" placeholder="Paste an article, chapter, speech script or essay here…"></textarea>
<div class="hint">Times update live as you type — or turn live updates off and use the Calculate button instead.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Reading settings</p>
<div class="settings-panel">
<div class="preset-row" id="rtPresets">
<button type="button" class="preset-chip" data-p="200">🐢 Relaxed reader (200 wpm)</button>
<button type="button" class="preset-chip active" data-p="225">🚶 Average reader (225 wpm)</button>
<button type="button" class="preset-chip" data-p="250">🏃 Fast reader (250 wpm)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rtWpm">Your reading speed: <span class="val" id="rtWpmVal">225 wpm</span></label>
<input type="range" id="rtWpm" min="100" max="400" step="5" value="225">
<div class="hint">The highlighted "your pace" row in the results uses this speed.</div>
</div>
<div class="setting">
<label for="rtSkim">Skim multiplier: <span class="val" id="rtSkimVal">3×</span></label>
<input type="range" id="rtSkim" min="2" max="5" step="1" value="3">
<div class="hint">Skimming runs faster than full reading — usually 2–5× your pace.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Live update as you type</span><label class="toggle"><input type="checkbox" id="rtTogLive" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rtBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
Calculate Times
</button>
<button type="button" class="btn-pro-outline" id="rtCopy" disabled>📋 Copy times</button>
<button type="button" class="btn-pro-outline" id="rtClear">Clear</button>
</div>
<div class="progress-wrap" id="rtProgWrap">
<div class="progress-bar"><i id="rtProgBar"></i></div>
<div class="progress-text" id="rtProgText">Working…</div>
</div>
<div class="results" id="rtResults">
<p class="result-head">⏱️ Time estimates</p>
<div class="result-summary" id="rtSummary"></div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">📖 Reading time</div>
<div id="rtReadRows" style="font-size:.9rem;line-height:2;"></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">🎤 Speaking &amp; skimming</div>
<div id="rtSpeakRows" style="font-size:.9rem;line-height:2;"></div>
</div>
<div class="result-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-top:1rem;">
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="rtWords">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="rtChars">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Characters (no spaces)</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="rtCharsSp">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Characters (with spaces)</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="rtPages">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Book pages (≈300 wpp)</div></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — time as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rtShell');
  ToolPro.themeToggle(shell, document.getElementById('rtTheme'));

  var txt = document.getElementById('rtText');
  var btn = document.getElementById('rtBtn');
  var copyBtn = document.getElementById('rtCopy');
  var wpmRange = document.getElementById('rtWpm');
  var wpmVal = document.getElementById('rtWpmVal');
  var skimRange = document.getElementById('rtSkim');
  var skimVal = document.getElementById('rtSkimVal');
  var togLive = document.getElementById('rtTogLive');
  var presets = document.getElementById('rtPresets');

  ToolPro.bindSlider(wpmRange, wpmVal, function(v){ return v + ' wpm'; });
  ToolPro.bindSlider(skimRange, skimVal, function(v){ return v + '×'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    wpmRange.value = chip.dataset.p;
    wpmRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Reading speed set to ' + chip.dataset.p + ' wpm');
    update(false);
  });

  function wordCount(t){
    return (t.trim().match(/\S+/g) || []).length;
  }

  function fmtTime(mins){
    if(mins <= 0) return '—';
    var totalSec = Math.round(mins * 60);
    if(totalSec < 60) return totalSec + ' sec';
    var h = Math.floor(totalSec / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var s = totalSec % 60;
    var out = h ? h + ' hr ' : '';
    out += m ? m + ' min ' : '';
    if(!h && s) out += s + ' sec';
    return out.trim();
  }

  function row(label, mins, highlight){
    return '<div style="display:flex;justify-content:space-between;gap:1rem;' +
      (highlight ? 'background:var(--tp-card);border:1px solid var(--tp-border);border-radius:8px;padding:.15rem .75rem;' : '') + '">' +
      '<span>' + label + '</span><b>' + fmtTime(mins) + '</b></div>';
  }

  var lastReport = '';

  function update(scroll){
    var wc = wordCount(txt.value);
    var wpm = parseInt(wpmRange.value, 10);
    var skimX = parseInt(skimRange.value, 10);
    var charsNoSp = txt.value.replace(/\s/g, '').length;
    var charsSp = txt.value.length;
    var pages = wc / 300;

    document.getElementById('rtWords').textContent = wc.toLocaleString();
    document.getElementById('rtChars').textContent = charsNoSp.toLocaleString();
    document.getElementById('rtCharsSp').textContent = charsSp.toLocaleString();
    document.getElementById('rtPages').textContent = wc ? pages.toFixed(1) : '—';

    document.getElementById('rtReadRows').innerHTML =
      row('🐢 Relaxed — 200 wpm', wc / 200, wpm === 200) +
      row('🚶 Average — 225 wpm', wc / 225, wpm === 225) +
      row('🏃 Fast — 250 wpm', wc / 250, wpm === 250) +
      row('⭐ Your pace — ' + wpm + ' wpm', wc / wpm, [200, 225, 250].indexOf(wpm) === -1);

    document.getElementById('rtSpeakRows').innerHTML =
      row('🎤 Speaking — 130 wpm (presentation)', wc / 130, false) +
      row('🎤 Speaking — 150 wpm (conversation)', wc / 150, false) +
      row('👀 Skimming — ' + (wpm * skimX) + ' wpm (' + skimX + '×)', wc / (wpm * skimX), false);

    document.getElementById('rtSummary').textContent =
      wc ? ('🎉 ' + wc.toLocaleString() + ' words — about ' + fmtTime(wc / wpm) +
        ' to read at your pace (' + wpm + ' wpm), ' + fmtTime(wc / 130) + ' to speak aloud.')
        : 'Type or paste some text to see live time estimates.';

    lastReport = 'Reading Time Report\nWords: ' + wc +
      '\nReading (200 wpm): ' + fmtTime(wc / 200) +
      '\nReading (225 wpm): ' + fmtTime(wc / 225) +
      '\nReading (250 wpm): ' + fmtTime(wc / 250) +
      '\nSpeaking (130 wpm): ' + fmtTime(wc / 130) +
      '\nSkimming (' + (wpm * skimX) + ' wpm): ' + fmtTime(wc / (wpm * skimX)) +
      '\nCharacters (no spaces): ' + charsNoSp +
      '\nBook pages (~300 wpp): ' + (wc ? pages.toFixed(1) : '—');

    if(wc){
      document.getElementById('rtResults').classList.add('show');
      copyBtn.disabled = false;
      if(scroll) document.getElementById('rtResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  var debounce = null;
  txt.addEventListener('input', function(){
    document.getElementById('rtLive').textContent = wordCount(txt.value) + ' words';
    btn.disabled = !txt.value.trim();
    if(!togLive.checked) return;
    clearTimeout(debounce);
    debounce = setTimeout(function(){ update(false); }, 200);
  });

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('rtProgWrap');
    var progBar = document.getElementById('rtProgBar');
    btn.disabled = true;
    progWrap.classList.add('show');
    progBar.style.width = '60%';
    document.getElementById('rtProgText').textContent = 'Calculating times…';
    setTimeout(function(){
      update(true);
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('Times calculated', 'ok');
    }, 250);
  });

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(lastReport, 'Times copied to clipboard');
  });

  document.getElementById('rtClear').addEventListener('click', function(){
    txt.value = '';
    document.getElementById('rtLive').textContent = '0 words';
    document.getElementById('rtResults').classList.remove('show');
    btn.disabled = true; copyBtn.disabled = true;
    ToolPro.toast('Cleared');
  });
})();
</script>

## How it works

1. **Paste your text** — an article, chapter, speech script or essay. A live word counter tracks as you type.
2. **Set your pace** — pick a reader preset (relaxed, average, fast), fine-tune with the reading-speed slider, set the skim multiplier, and keep live updates on.
3. **Review** — reading times at 200, 225 and 250 wpm (your pace highlighted), speaking times at 130 and 150 wpm, skim time, character counts and a book-page estimate at 300 words per page.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Bloggers** — add an accurate "X min read" badge to every post.
- **Speakers** — time a talk: 130 wpm is a safe presentation pace.
- **Students** — plan study sessions around real reading times.
- **Authors** — estimate book length in pages from a word count.
- **Podcasters** — convert a script to speaking time before recording.

**Rule of thumb:** most adults read 200–250 wpm silently and speak 130–150 wpm aloud — if your script runs long, cut 10% and read it out loud once.
