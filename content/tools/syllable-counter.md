---
title: "Free Syllable Counter — Word Syllables & Readability Score"
description: "Count syllables in any text: per-word syllable breakdown, totals, averages, and a Flesch Reading Ease score with grade level. Free, private, no sign-up."
category: text
date: 2026-10-15
draft: false
---

Poets, songwriters and speechwriters all watch their syllable counts — and teachers watch readability. Paste any text to count syllables for every word, see totals and averages, and get a Flesch Reading Ease score with a plain-English grade level. Everything runs in your browser.

<div class="tool-shell" id="scShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Syllable Counter</h2>
<p>Paste text — per-word syllable counts, totals, averages &amp; Flesch readability.</p>
</div>
<button type="button" class="theme-toggle" id="scTheme">🌙 Dark</button>
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
<label for="scText">Paste or type your text <span class="val" id="scLive">0 words</span></label>
<textarea id="scText" class="tool-input" rows="10" placeholder="Paste a poem, paragraph, speech draft or essay here…"></textarea>
<div class="hint">Counts syllables word by word using a vowel-group heuristic (silent-e, -ed/-es endings and -ble endings handled).</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Counting settings</p>
<div class="settings-panel">
<div class="preset-row" id="scPresets">
<button type="button" class="preset-chip" data-p="nursery">🍼 Nursery rhyme</button>
<button type="button" class="preset-chip" data-p="business">💼 Business paragraph</button>
<button type="button" class="preset-chip" data-p="academic">🎓 Academic paragraph</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="scMaxN">Breakdown words to show: <span class="val" id="scMaxNVal">15</span></label>
<input type="range" id="scMaxN" min="5" max="50" step="5" value="15">
<div class="hint">The per-word breakdown lists the first N words with their syllable counts.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Show per-word syllable breakdown</span><label class="toggle"><input type="checkbox" id="scTogBreak" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Count "y" as a vowel (gym, happy, syllable)</span><label class="toggle"><input type="checkbox" id="scTogY" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Count &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="scBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
Count Syllables
</button>
<button type="button" class="btn-pro-outline" id="scCopy" disabled>📋 Copy results</button>
<button type="button" class="btn-pro-outline" id="scClear">Clear</button>
</div>
<div class="progress-wrap" id="scProgWrap">
<div class="progress-bar"><i id="scProgBar"></i></div>
<div class="progress-text" id="scProgText">Working…</div>
</div>
<div class="results" id="scResults">
<p class="result-head">🔤 Syllable report</p>
<div class="result-summary" id="scSummary"></div>
<div class="result-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-top:1rem;">
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="scWords">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="scSyll">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Total syllables</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="scAvg">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Avg syllables / word</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="scFlesch">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Flesch Reading Ease</div></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;" id="scBreakWrap">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">📝 Per-word breakdown</div>
<div id="scBreakdown" style="font-size:.85rem;line-height:1.8;"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — count syllables in as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('scShell');
  ToolPro.themeToggle(shell, document.getElementById('scTheme'));

  var txt = document.getElementById('scText');
  var btn = document.getElementById('scBtn');
  var copyBtn = document.getElementById('scCopy');
  var maxNRange = document.getElementById('scMaxN');
  var maxNVal = document.getElementById('scMaxNVal');
  var togBreak = document.getElementById('scTogBreak');
  var togY = document.getElementById('scTogY');
  var presets = document.getElementById('scPresets');

  ToolPro.bindSlider(maxNRange, maxNVal, function(v){ return v; });

  var SAMPLES = {
    nursery: 'Mary had a little lamb, its fleece was white as snow; and everywhere that Mary went, the lamb was sure to go.',
    business: 'Our team delivered strong results this quarter. Revenue grew by twelve percent while operating costs remained stable. We plan to expand into two new markets next year and hire fifteen additional staff members to support continued growth.',
    academic: 'The proliferation of digital communication platforms has fundamentally transformed interpersonal discourse, particularly among adolescent populations. Researchers have documented significant correlations between excessive screen time and diminished attentional capacity.'
  };
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    txt.value = SAMPLES[chip.dataset.p];
    txt.dispatchEvent(new Event('input'));
    ToolPro.toast('Sample loaded');
  });

  function wordCount(t){
    return (t.trim().match(/\S+/g) || []).length;
  }
  txt.addEventListener('input', function(){
    document.getElementById('scLive').textContent = wordCount(txt.value) + ' words';
    btn.disabled = !txt.value.trim();
  });

  function countSyllables(word, yIsVowel){
    var orig = String(word).toLowerCase().replace(/[^a-z]/g, '');
    if(!orig) return 0;
    if(orig.length <= 3) return 1;
    var V = yIsVowel ? 'aeiouy' : 'aeiou';
    var w = orig;
    // silent e (keep -ble, -ee, -ye, -oe endings)
    if(/e$/.test(w) && !/(ble|ee|ye|oe)$/.test(w)) w = w.slice(0, -1);
    var extra = 0;
    // -ed / -es that add a syllable
    if(/(d|t)ed$/.test(w)) extra = 1;
    else if(/(s|z|x|ch|sh)es$/.test(w)) extra = 1;
    var strippedEd = /(ed)$/.test(w);
    if(/(ed|es)$/.test(w)) w = w.replace(/(ed|es)$/, '');
    var groups = w.match(new RegExp('[' + V + ']+', 'g')) || [];
    var n = groups.length + extra;
    // consonant + ble ending adds a syllable ("table", "syllable")
    if(/[^aeiou]ble$/.test(orig)) n += 1;
    // "eo" almost always spans two syllables ("people", "geography")
    var eo = orig.match(/eo/g);
    if(eo) n += eo.length;
    // syllabic -l after -ed ("disabled", "troubled", "bottled")
    if(strippedEd && /[^aeioul]l$/.test(w)) n += 1;
    return Math.max(1, n);
  }

  function fleschLabel(score){
    if(score >= 90) return 'Very easy to read — 5th grade level';
    if(score >= 80) return 'Easy to read — 6th grade level';
    if(score >= 70) return 'Fairly easy to read — 7th grade level';
    if(score >= 60) return 'Standard — 8th–9th grade level';
    if(score >= 50) return 'Fairly difficult — 10th–12th grade level';
    if(score >= 30) return 'Difficult — college level';
    return 'Very difficult — graduate level';
  }

  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var lastReport = '';

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('scProgWrap');
    var progBar = document.getElementById('scProgBar');
    var resBox = document.getElementById('scResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('scProgText').textContent = 'Counting syllables…';
    setTimeout(function(){
      var words = (txt.value.match(/[A-Za-z']+(?:-[A-Za-z']+)*/g) || []);
      var yV = togY.checked;
      var total = 0;
      var per = words.map(function(wd){
        var n = countSyllables(wd, yV);
        total += n;
        return { w: wd, n: n };
      });
      var wc = words.length;
      var avg = wc ? total / wc : 0;
      var sentences = txt.value.split(/[.!?…]+/).filter(function(s){ return s.trim().length > 0; }).length || 1;
      var flesch = 206.835 - 1.015 * (wc / sentences) - 84.6 * (total / Math.max(1, wc));
      flesch = Math.max(0, Math.min(100, flesch));

      document.getElementById('scWords').textContent = wc.toLocaleString();
      document.getElementById('scSyll').textContent = total.toLocaleString();
      document.getElementById('scAvg').textContent = wc ? avg.toFixed(2) : '—';
      document.getElementById('scFlesch').textContent = wc ? Math.round(flesch) : '—';

      document.getElementById('scSummary').textContent =
        wc ? ('🎉 ' + wc.toLocaleString() + ' words, ' + total.toLocaleString() + ' syllables (' + avg.toFixed(2) +
          ' per word). Readability: ' + fleschLabel(flesch) + ' (score ' + Math.round(flesch) + '/100).')
          : 'No words found.';

      var breakWrap = document.getElementById('scBreakWrap');
      if(togBreak.checked && per.length){
        breakWrap.style.display = '';
        var limit = parseInt(maxNRange.value, 10);
        document.getElementById('scBreakdown').innerHTML = per.slice(0, limit).map(function(p, i){
          return '<span style="display:inline-block;background:var(--tp-card);border:1px solid var(--tp-border);border-radius:8px;padding:.15rem .6rem;margin:.15rem;">' +
            esc(p.w) + ' <b>' + p.n + '</b></span>';
        }).join('') + (per.length > limit ? '<div style="margin-top:.5rem;">…and ' + (per.length - limit) + ' more words.</div>' : '');
      } else {
        breakWrap.style.display = 'none';
      }

      lastReport = 'Syllable Report\nWords: ' + wc + '\nTotal syllables: ' + total +
        '\nAvg syllables/word: ' + (wc ? avg.toFixed(2) : '—') +
        '\nFlesch Reading Ease: ' + (wc ? Math.round(flesch) : '—') + ' (' + fleschLabel(flesch) + ')';

      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = false;
      ToolPro.toast('Syllables counted', 'ok');
    }, 350);
  });

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(lastReport, 'Results copied to clipboard');
  });

  document.getElementById('scClear').addEventListener('click', function(){
    txt.value = '';
    document.getElementById('scLive').textContent = '0 words';
    document.getElementById('scResults').classList.remove('show');
    btn.disabled = true; copyBtn.disabled = true;
    ToolPro.toast('Cleared');
  });
})();
</script>

## How it works

1. **Paste your text** — a poem, paragraph, speech draft or essay. The live counter tracks your word count as you type.
2. **Tune the settings** — try a sample preset, set how many words the breakdown lists, and choose whether "y" counts as a vowel.
3. **Count** — every word gets a syllable count from a vowel-group heuristic (silent-e, -ed/-es endings and -ble endings handled), plus totals, averages and a Flesch Reading Ease score with a grade-level label.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Poets & songwriters** — check meter and line-by-line syllable counts for lyrics and verse.
- **Teachers** — score reading passages for the right grade level before handing them out.
- **Speechwriters** — keep sentences punchy; lower syllable-per-word ratios read better aloud.
- **Students** — verify essays land at the readability your assignment expects.
- **Copywriters** — simpler sentences convert better; watch your Flesch score climb as you edit.

**Rule of thumb:** a Flesch score of 60–70 hits the sweet spot for general audiences — plain enough for everyone, smart enough for anyone.
