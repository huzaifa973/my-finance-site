---
title: "Free Keyword in Text Finder — Highlight & Count Matches"
description: "Find every occurrence of a keyword in your text: match count, density %, highlighted results with next/prev navigation, and match positions. Free, private."
category: text
date: 2026-10-15
draft: false
---

Need to find every time a word or phrase appears in a long document? Paste the text, type the keyword, and get an instant occurrence count, density percentage, and every match highlighted — with next/previous buttons to jump between them. Everything runs in your browser.

<div class="tool-shell" id="kfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword in Text Finder</h2>
<p>Paste text &amp; a keyword — count, density % and highlighted matches instantly.</p>
</div>
<button type="button" class="theme-toggle" id="kfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your text &amp; keyword</p>
<div class="setting">
<label for="kfText">Paste the text to search <span class="val" id="kfLive">0 words</span></label>
<textarea id="kfText" class="tool-input" rows="8" placeholder="Paste your article, report, transcript or document here…"></textarea>
</div>
<div class="setting" style="margin-top:1rem;">
<label for="kfKeyword">Keyword or phrase to find</label>
<input type="text" id="kfKeyword" class="tool-input" placeholder="e.g. climate change">
<div class="hint">Case, whole-word matching and search context are set in step 2.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Search settings</p>
<div class="settings-panel">
<div class="preset-row" id="kfPresets">
<button type="button" class="preset-chip" data-p="sample">📄 Load sample text + keyword</button>
<button type="button" class="preset-chip" data-p="clear">✖ Clear sample</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="kfContext">Context characters per match: <span class="val" id="kfContextVal">40</span></label>
<input type="range" id="kfContext" min="10" max="120" step="10" value="40">
<div class="hint">How much surrounding text each match-position row shows.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Case-sensitive search</span><label class="toggle"><input type="checkbox" id="kfTogCase"><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Whole words only (skip "the" inside "them")</span><label class="toggle"><input type="checkbox" id="kfTogWord" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Find &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="kfBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
Find Keyword
</button>
<button type="button" class="btn-pro-outline" id="kfPrev" disabled>⬆ Previous</button>
<button type="button" class="btn-pro-outline" id="kfNext" disabled>⬇ Next</button>
<button type="button" class="btn-pro-outline" id="kfClear">Clear</button>
</div>
<div class="progress-wrap" id="kfProgWrap">
<div class="progress-bar"><i id="kfProgBar"></i></div>
<div class="progress-text" id="kfProgText">Working…</div>
</div>
<div class="results" id="kfResults">
<p class="result-head">🔎 Match report</p>
<div class="result-summary" id="kfSummary"></div>
<div class="result-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-top:1rem;">
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kfCount">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Occurrences</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kfDensity">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Density % of words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kfWords">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Total words</div></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">✨ Highlighted text <span style="font-weight:400;" id="kfNavLabel"></span></div>
<div id="kfOut" class="tool-output" style="max-height:260px;overflow-y:auto;white-space:pre-wrap;font-size:.9rem;line-height:1.8;"></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">📍 Match positions</div>
<div id="kfPositions" style="font-size:.85rem;line-height:1.8;"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — search documents of any length, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('kfShell');
  ToolPro.themeToggle(shell, document.getElementById('kfTheme'));

  var txt = document.getElementById('kfText');
  var kw = document.getElementById('kfKeyword');
  var btn = document.getElementById('kfBtn');
  var prevBtn = document.getElementById('kfPrev');
  var nextBtn = document.getElementById('kfNext');
  var ctxRange = document.getElementById('kfContext');
  var ctxVal = document.getElementById('kfContextVal');
  var togCase = document.getElementById('kfTogCase');
  var togWord = document.getElementById('kfTogWord');
  var presets = document.getElementById('kfPresets');

  ToolPro.bindSlider(ctxRange, ctxVal, function(v){ return v; });

  var SAMPLE_TEXT = 'The quick brown fox jumps over the lazy dog. The fox is quick, and the dog is lazy, but the fox never catches the dog. Every morning the fox practices jumping while the dog naps in the sun.';
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    if(chip.dataset.p === 'sample'){
      txt.value = SAMPLE_TEXT;
      kw.value = 'the';
      txt.dispatchEvent(new Event('input'));
      ToolPro.toast('Sample loaded — keyword: "the"');
    } else {
      txt.value = ''; kw.value = '';
      txt.dispatchEvent(new Event('input'));
      ToolPro.toast('Cleared');
    }
  });

  function wordCount(t){
    return (t.trim().match(/\S+/g) || []).length;
  }
  function ready(){
    document.getElementById('kfLive').textContent = wordCount(txt.value) + ' words';
    btn.disabled = !(txt.value.trim() && kw.value.trim());
  }
  txt.addEventListener('input', ready);
  kw.addEventListener('input', ready);

  function escapeRegExp(s){
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function findMatches(text, keyword, caseSensitive, wholeWord){
    if(!keyword) return [];
    var flags = caseSensitive ? 'g' : 'gi';
    var pat = wholeWord ? '\\b' + escapeRegExp(keyword) + '\\b' : escapeRegExp(keyword);
    var re = new RegExp(pat, flags);
    var out = [], m;
    while((m = re.exec(text)) !== null){
      out.push({ index: m.index, len: m[0].length, text: m[0] });
      if(m.index === re.lastIndex) re.lastIndex++;
    }
    return out;
  }

  var matches = [];
  var curIdx = -1;

  function paintCurrent(){
    var hits = document.querySelectorAll('#kfOut .kf-hit');
    for(var i = 0; i < hits.length; i++){
      hits[i].classList.toggle('kf-current', i === curIdx);
    }
    document.getElementById('kfNavLabel').textContent =
      matches.length ? ('— match ' + (curIdx + 1) + ' of ' + matches.length) : '';
    if(curIdx >= 0 && hits[curIdx]){
      hits[curIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('kfProgWrap');
    var progBar = document.getElementById('kfProgBar');
    var resBox = document.getElementById('kfResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('kfProgText').textContent = 'Scanning text…';
    setTimeout(function(){
      var text = txt.value;
      var keyword = kw.value.trim();
      matches = findMatches(text, keyword, togCase.checked, togWord.checked);
      var totalWords = wordCount(text);
      var density = totalWords ? (matches.length / totalWords * 100) : 0;

      document.getElementById('kfCount').textContent = matches.length.toLocaleString();
      document.getElementById('kfDensity').textContent = matches.length ? density.toFixed(2) + '%' : '—';
      document.getElementById('kfWords').textContent = totalWords.toLocaleString();

      document.getElementById('kfSummary').textContent =
        '🎉 Found ' + matches.length + ' occurrence' + (matches.length === 1 ? '' : 's') +
        ' of "' + keyword + '" in ' + totalWords.toLocaleString() + ' words' +
        (matches.length ? ' (density ' + density.toFixed(2) + '%).' : '. Try a different keyword or toggle whole-word matching.');

      // highlighted output
      var html = '';
      var last = 0;
      matches.forEach(function(m, i){
        html += esc(text.slice(last, m.index));
        html += '<mark class="kf-hit" data-i="' + i + '">' + esc(m.text) + '</mark>';
        last = m.index + m.len;
      });
      html += esc(text.slice(last));
      var out = document.getElementById('kfOut');
      out.innerHTML = html || esc(text);
      out.scrollTop = 0;

      // positions
      var ctxN = parseInt(ctxRange.value, 10);
      var posEl = document.getElementById('kfPositions');
      if(matches.length){
        posEl.innerHTML = matches.slice(0, 100).map(function(m, i){
          var start = Math.max(0, m.index - ctxN);
          var end = Math.min(text.length, m.index + m.len + ctxN);
          var ctx = esc((start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : ''));
          return '<div><b>#' + (i + 1) + '</b> at character ' + m.index.toLocaleString() + ' — ' + ctx + '</div>';
        }).join('') + (matches.length > 100 ? '<div>…showing the first 100 of ' + matches.length + ' matches.</div>' : '');
      } else {
        posEl.textContent = 'No matches found with the current settings.';
      }

      curIdx = matches.length ? 0 : -1;
      prevBtn.disabled = matches.length < 2;
      nextBtn.disabled = matches.length < 2;
      paintCurrent();

      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ready();
      ToolPro.toast(matches.length ? 'Search complete' : 'No matches found', matches.length ? 'ok' : undefined);
    }, 300);
  });

  prevBtn.addEventListener('click', function(){
    if(!matches.length) return;
    curIdx = (curIdx - 1 + matches.length) % matches.length;
    paintCurrent();
  });
  nextBtn.addEventListener('click', function(){
    if(!matches.length) return;
    curIdx = (curIdx + 1) % matches.length;
    paintCurrent();
  });

  document.getElementById('kfClear').addEventListener('click', function(){
    txt.value = ''; kw.value = '';
    document.getElementById('kfLive').textContent = '0 words';
    document.getElementById('kfResults').classList.remove('show');
    matches = []; curIdx = -1;
    prevBtn.disabled = true; nextBtn.disabled = true;
    ready();
    ToolPro.toast('Cleared');
  });
})();
</script>

<style>
#kfOut .kf-hit{background:#ffe58a;border-radius:3px;padding:0 2px;}
#kfOut .kf-hit.kf-current{background:#ff9f2e;color:#fff;outline:2px solid #ff9f2e;}
#kfShell[data-theme="dark"] #kfOut .kf-hit{background:#8a6d1a;color:#fff;}
</style>

## How it works

1. **Paste your text and keyword** — any document plus the word or phrase you're hunting for. The button enables when both are filled in.
2. **Tune the search** — load a sample, set case sensitivity, toggle whole-word-only matching, and choose how much context each match row shows.
3. **Find** — the tool counts every occurrence, computes density as a percentage of total words, highlights all matches in the text, and lists each match position with surrounding context. Use Previous / Next to jump between matches.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Writers & editors** — find every use of a crutch word ("just", "very", "really") before publishing.
- **Students** — check how often a key term appears in an essay or thesis draft.
- **SEO writers** — verify a target keyword appears naturally throughout a post.
- **Researchers** — scan transcripts and reports for specific terms in seconds.
- **Legal & admin work** — locate every mention of a name, date or clause in long documents.

**Rule of thumb:** a keyword density around 1–2% reads naturally; if one phrase shows up far more often, it's a sign to vary your wording.
