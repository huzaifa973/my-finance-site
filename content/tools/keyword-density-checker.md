---
title: "Free Keyword Density Checker — SEO Content Analyzer"
description: "Analyze any text for keyword density: word frequency table, 2- and 3-word phrase density, word count and reading time. Detect keyword stuffing fast. Free, no sign-up."
category: seo
date: 2026-10-10
draft: false
---

Keyword stuffing is an easy way to get a page demoted — but guessing at your density is worse. Paste any text and get an instant breakdown: top single words, 2-word and 3-word phrase density, total words and reading time, with a stopword filter to keep the analysis meaningful. Everything runs in your browser.

<div class="tool-shell" id="kdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v7zm4 0h-2v-4h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword Density Checker</h2>
<p>Paste any text — get word frequency, phrase density &amp; stuffing warnings instantly.</p>
</div>
<button type="button" class="theme-toggle" id="kdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your content</p>
<div class="setting">
<label for="kdText">Paste the text to analyze <span class="val" id="kdLive">0 words</span></label>
<textarea id="kdText" class="tool-input" rows="10" placeholder="Paste your article, product description or web page text here…"></textarea>
<div class="hint">Works best with at least 300 words — very short texts give noisy density numbers.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Analysis settings</p>
<div class="settings-panel">
<div class="preset-row" id="kdPresets">
<button type="button" class="preset-chip active" data-p="standard">📊 Standard analysis</button>
<button type="button" class="preset-chip" data-p="strict">🔍 Strict (no stopwords)</button>
<button type="button" class="preset-chip" data-p="fast">⚡ Quick scan</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="kdWpm">Reading speed: <span class="val" id="kdWpmVal">200 wpm</span></label>
<input type="range" id="kdWpm" min="100" max="300" step="5" value="200">
<div class="hint">Used for the reading-time estimate in the results.</div>
</div>
<div class="setting">
<label for="kdMinLen">Ignore words shorter than: <span class="val" id="kdMinLenVal">3 letters</span></label>
<input type="range" id="kdMinLen" min="1" max="6" step="1" value="3">
<div class="hint">Short words like "it" and "of" are rarely meaningful keywords.</div>
</div>
<div class="setting">
<label for="kdTopN">Top phrases to show: <span class="val" id="kdTopNVal">20</span></label>
<input type="range" id="kdTopN" min="5" max="40" step="5" value="20">
<div class="hint">How many rows the frequency tables show.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Ignore common stopwords (the, and, of…)</span><label class="toggle"><input type="checkbox" id="kdTogStop" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Case-insensitive counting</span><label class="toggle"><input type="checkbox" id="kdTogCase" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="kdBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v7zm4 0h-2v-4h2v4z"/></svg>
Analyze Keyword Density
</button>
<button type="button" class="btn-pro-outline" id="kdCopy" disabled>📋 Copy report</button>
<button type="button" class="btn-pro-outline" id="kdClear">Clear</button>
</div>
<div class="progress-wrap" id="kdProgWrap">
<div class="progress-bar"><i id="kdProgBar"></i></div>
<div class="progress-text" id="kdProgText">Working…</div>
</div>
<div class="results" id="kdResults">
<p class="result-head">📈 Density analysis</p>
<div class="result-summary" id="kdSummary"></div>
<div class="result-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-top:1rem;">
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kdWords">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Total words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kdUnique">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Unique words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kdRead">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Reading time</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="kdTop">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Top keyword density</div></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">🔑 Top words (1-word phrases)</div>
<div id="kdTable1" style="font-size:.85rem;line-height:1.7;"></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">🔗 Top 2-word phrases</div>
<div id="kdTable2" style="font-size:.85rem;line-height:1.7;"></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">🔗 Top 3-word phrases</div>
<div id="kdTable3" style="font-size:.85rem;line-height:1.7;"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — analyze as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('kdShell');
  ToolPro.themeToggle(shell, document.getElementById('kdTheme'));

  var STOP = ('a,about,above,after,again,against,all,am,an,and,any,are,as,at,be,because,been,before,being,below,' +
    'between,both,but,by,cam,cannot,could,did,do,does,doing,down,during,each,few,for,from,further,had,has,have,' +
    'having,he,her,here,hers,herself,him,himself,his,how,i,if,in,into,is,it,its,itself,me,more,most,my,myself,no,' +
    'nor,not,now,of,off,on,once,only,or,other,ought,our,ours,ourselves,out,over,own,same,she,should,so,some,such,' +
    'than,that,the,their,theirs,them,themselves,then,there,these,they,this,those,through,to,too,under,until,up,' +
    'very,was,we,were,what,when,where,which,while,who,whom,why,with,would,you,your,yours,yourself,yourselves,' +
    'will,just,can,also,one,two,may,might,must,shall,like,get,got,make,made,many,much').split(',');

  var txt = document.getElementById('kdText');
  var btn = document.getElementById('kdBtn');
  var copyBtn = document.getElementById('kdCopy');
  var wpmRange = document.getElementById('kdWpm');
  var wpmVal = document.getElementById('kdWpmVal');
  var minLenRange = document.getElementById('kdMinLen');
  var minLenVal = document.getElementById('kdMinLenVal');
  var topNRange = document.getElementById('kdTopN');
  var topNVal = document.getElementById('kdTopNVal');
  var togStop = document.getElementById('kdTogStop');
  var togCase = document.getElementById('kdTogCase');
  var presets = document.getElementById('kdPresets');

  ToolPro.bindSlider(wpmRange, wpmVal, function(v){ return v + ' wpm'; });
  ToolPro.bindSlider(minLenRange, minLenVal, function(v){ return v + ' letters'; });
  ToolPro.bindSlider(topNRange, topNVal, function(v){ return v; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var p = chip.dataset.p;
    if(p === 'standard'){ togStop.checked = true; minLenRange.value = 3; topNRange.value = 20; }
    if(p === 'strict'){ togStop.checked = true; minLenRange.value = 4; topNRange.value = 20; }
    if(p === 'fast'){ togStop.checked = false; minLenRange.value = 2; topNRange.value = 10; }
    [minLenRange, topNRange].forEach(function(r){ r.dispatchEvent(new Event('input')); });
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function wordCount(t){
    return (t.trim().match(/\S+/g) || []).length;
  }
  txt.addEventListener('input', function(){
    document.getElementById('kdLive').textContent = wordCount(txt.value) + ' words';
    btn.disabled = !txt.value.trim();
  });

  function tokenize(t){
    var low = togCase.checked ? t.toLowerCase() : t;
    var words = low.replace(/[^a-zA-Z0-9'\s-]/g, ' ').split(/\s+/)
      .map(function(w){ return w.replace(/^[-']+|[-']+$/g, ''); })
      .filter(function(w){ return w.length > 0; });
    return words;
  }

  function freqMap(phrases){
    var map = {};
    phrases.forEach(function(p){ map[p] = (map[p] || 0) + 1; });
    return map;
  }
  function topN(map, n){
    return Object.keys(map).map(function(k){ return { k: k, c: map[k] }; })
      .sort(function(a, b){ return b.c - a.c || (a.k < b.k ? -1 : 1); }).slice(0, n);
  }
  function phrases(words, n){
    var out = [];
    for(var i = 0; i + n <= words.length; i++){ out.push(words.slice(i, i + n).join(' ')); }
    return out;
  }

  var lastReport = '';

  function renderTable(elId, rows, total){
    var el = document.getElementById(elId);
    if(!rows.length){ el.textContent = 'Not enough data.'; return; }
    el.innerHTML = rows.map(function(r){
      var d = total ? (r.c / total * 100) : 0;
      var flag = d >= 3 ? ' ⚠️' : '';
      return '<div><b>' + r.k.replace(/</g, '&lt;') + '</b> — ' + r.c + '× · ' + d.toFixed(2) + '%' + flag + '</div>';
    }).join('');
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('kdProgWrap');
    var progBar = document.getElementById('kdProgBar');
    var resBox = document.getElementById('kdResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('kdProgText').textContent = 'Counting words…';
    setTimeout(function(){
      var words = tokenize(txt.value);
      var total = words.length;
      var minLen = parseInt(minLenRange.value, 10);
      var useStop = togStop.checked;
      var meaningful = words.filter(function(w){
        return w.length >= minLen && (!useStop || STOP.indexOf(w.toLowerCase()) === -1);
      });
      var n = parseInt(topNRange.value, 10);
      var w1 = topN(freqMap(meaningful), n);
      var w2 = topN(freqMap(phrases(meaningful, 2)), n);
      var w3 = topN(freqMap(phrases(meaningful, 3)), n);

      document.getElementById('kdWords').textContent = total.toLocaleString();
      document.getElementById('kdUnique').textContent = Object.keys(freqMap(meaningful)).length.toLocaleString();
      var wpm = parseInt(wpmRange.value, 10);
      var mins = total / wpm;
      document.getElementById('kdRead').textContent = total === 0 ? '—'
        : (mins < 1 ? '< 1 min' : '≈ ' + Math.max(1, Math.round(mins)) + ' min');
      var topD = w1.length ? (w1[0].c / Math.max(1, meaningful.length) * 100) : 0;
      document.getElementById('kdTop').textContent = w1.length ? topD.toFixed(1) + '%' : '—';

      renderTable('kdTable1', w1, meaningful.length);
      renderTable('kdTable2', w2, Math.max(1, meaningful.length - 1));
      renderTable('kdTable3', w3, Math.max(1, meaningful.length - 2));

      var warn;
      if(topD >= 3) warn = '⚠️ Your top keyword hits ' + topD.toFixed(1) + '% — that looks like keyword stuffing. Rewrite with natural variations.';
      else if(topD >= 2) warn = '🟡 Your top keyword is at ' + topD.toFixed(1) + '% — on the high side of natural (aim for 1–2%).';
      else warn = '✅ Keyword usage looks natural — no stuffing detected in the top phrases.';
      document.getElementById('kdSummary').textContent =
        '🎉 Analyzed ' + total.toLocaleString() + ' words. ' + warn;

      lastReport = 'Keyword Density Report\nWords: ' + total + '\nUnique: ' + Object.keys(freqMap(meaningful)).length +
        '\n\nTop 1-word phrases:\n' + w1.map(function(r){ return r.k + ' — ' + r.c + 'x (' + (r.c / Math.max(1, meaningful.length) * 100).toFixed(2) + '%)'; }).join('\n') +
        '\n\nTop 2-word phrases:\n' + w2.slice(0, 10).map(function(r){ return r.k + ' — ' + r.c + 'x'; }).join('\n');

      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = false;
      ToolPro.toast('Analysis complete', 'ok');
    }, 350);
  });

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(lastReport, 'Report copied to clipboard');
  });

  document.getElementById('kdClear').addEventListener('click', function(){
    txt.value = '';
    document.getElementById('kdLive').textContent = '0 words';
    document.getElementById('kdResults').classList.remove('show');
    btn.disabled = true; copyBtn.disabled = true;
    ToolPro.toast('Cleared');
  });
})();
</script>

## How it works

1. **Paste your content** — any article, product description or page text. A live word counter keeps track as you type.
2. **Tune the analysis** — pick a preset, set reading speed and minimum word length, and toggle the stopword filter and case sensitivity.
3. **Analyze** — the tool counts every 1-, 2- and 3-word phrase, shows density percentages, and flags anything at 3% or higher as possible keyword stuffing.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Bloggers** — check each post stays in the natural 1–2% range before publishing.
- **Copywriters** — prove to clients the copy is optimized without being stuffed.
- **Students** — spot overused words and phrases in essays before submitting.
- **SEO freelancers** — audit client content and back your recommendations with numbers.
- **Content teams** — set a house standard (e.g. "nothing above 2.5%") and enforce it in seconds.

**Rule of thumb:** 1–2% density for your main keyword reads naturally to both people and search engines. If one phrase hits 3%+, rewrite — Google rewards natural language, not repetition.
