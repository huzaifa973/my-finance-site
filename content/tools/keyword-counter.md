---
title: "Keyword Counter — Word Frequency, Top Terms & Density Analyzer"
description: "Paste any text and count total and unique keywords, see the top terms with density percentages, and spot over-optimization. Free in-browser SEO text analyzer, no sign-up."
category: seo
date: 2026-10-17
draft: false
---

Writing for search means knowing which words dominate your page — too many repeats of one phrase looks like keyword stuffing, too few and Google may miss your topic. Paste your article, landing page copy, or meta text and this tool counts total and unique keywords, lists the top terms with their density, and surfaces the 2–3 word phrases you repeat most. Everything runs in your browser.

<div class="tool-shell" id="kctShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword Counter</h2>
<p>Paste text — get total/unique keyword counts, top terms, density %, and your most-used phrases.</p>
</div>
<button type="button" class="theme-toggle" id="kctTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your text</p>
<textarea class="tool-input" id="kctInput" rows="8" placeholder="Paste your article, product description, or page copy here…"></textarea>
<div class="tool-actions" style="margin-top:10px">
<button type="button" class="btn-pro-outline" id="kctSample">Load sample text</button>
<button type="button" class="btn-pro-outline" id="kctClearIn">Clear</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Analysis settings</p>
<div class="settings-panel">
<div class="preset-row" id="kctPresets">
<button type="button" class="preset-chip active" data-ng="2" data-stop="1">🎯 Standard — words + phrases</button>
<button type="button" class="preset-chip" data-ng="1" data-stop="1">🔤 Single words only</button>
<button type="button" class="preset-chip" data-ng="3" data-stop="0">🔍 Deep — up to 3-word phrases</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="kctNgram">Longest phrase to track: <span class="val" id="kctNVal">2 words</span></label>
<input type="range" id="kctNgram" min="1" max="4" step="1" value="2">
<div class="hint">2-word phrases catch repeated ideas like "running shoes"; 3–4 catch longer themes.</div>
</div>
<div class="setting">
<label for="kctMinLen">Minimum word length: <span class="val" id="kctLVal">3 letters</span></label>
<input type="range" id="kctMinLen" min="1" max="8" step="1" value="3">
<div class="hint">Filters out tiny filler words before counting.</div>
</div>
<div class="setting">
<label for="kctTop">Show top</label>
<select id="kctTop">
<option value="10">Top 10 terms</option>
<option value="20" selected>Top 20 terms</option>
<option value="30">Top 30 terms</option>
<option value="50">Top 50 terms</option>
</select>
<div class="hint">How many rows appear in the frequency table.</div>
</div>
<div class="setting">
<label>Filters</label>
<div class="toggle-row"><span class="t-label">Ignore common stopwords (the, and, of…)</span><label class="toggle"><input type="checkbox" id="kctStop" checked><span class="track"></span></label></div>
<div class="hint">Stopwords add noise — turn off only for linguistic analysis.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze keywords</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="kctBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Analyze Text
</button>
</div>
<div class="progress-wrap" id="kctProgWrap">
<div class="progress-bar"><i id="kctProgBar"></i></div>
<div class="progress-text" id="kctProgText">Working…</div>
</div>
<div class="results" id="kctResults">
<p class="result-head">✅ Done — your keyword analysis</p>
<div class="result-summary" id="kctSummary"></div>
<div class="result-grid" id="kctGrid"></div>
<div class="tool-actions" style="margin-top:10px">
<button type="button" class="btn-pro-outline" id="kctDl">⬇ Download CSV</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Analyze unlimited text — everything happens in your browser, nothing is sent anywhere.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('kctShell');
  ToolPro.themeToggle(shell, document.getElementById('kctTheme'));
  var input = document.getElementById('kctInput');
  var btn = document.getElementById('kctBtn');
  var presets = document.getElementById('kctPresets');
  var nRange = document.getElementById('kctNgram');
  var nVal = document.getElementById('kctNVal');
  var lRange = document.getElementById('kctMinLen');
  var lVal = document.getElementById('kctLVal');
  var STOP = ('a,an,the,and,or,but,if,then,else,for,of,to,in,on,at,by,with,from,as,is,are,was,were,be,been,being,have,has,had,do,does,did,will,would,can,could,should,may,might,must,shall,it,its,this,that,these,those,i,you,he,she,we,they,them,his,her,our,your,their,my,me,us,not,no,yes,so,than,too,very,just,about,into,over,after,before,between,through,during,each,other,some,such,only,own,same,also,here,there,when,where,which,who,whom,what,how,all,any,both,few,more,most,one,ones,once,up,down,out,off,again,further,once').split(',');

  ToolPro.bindSlider(nRange, nVal, function(v){ return v + (v == 1 ? ' word' : ' words'); });
  ToolPro.bindSlider(lRange, lVal, function(v){ return v + (v == 1 ? ' letter' : ' letters'); });

  function refreshButtons(){ btn.disabled = !input.value.trim(); }
  input.addEventListener('input', refreshButtons);

  document.getElementById('kctSample').addEventListener('click', function(){
    input.value = 'Running shoes matter more than most runners think. The right running shoes protect your knees, improve your stride, and make long runs enjoyable. When you buy running shoes, try them in the afternoon when your feet are slightly swollen. Good running shoes should feel snug at the heel and roomy at the toes. Replace your running shoes every 500 miles for the best support.';
    refreshButtons();
    ToolPro.toast('Sample text loaded', 'ok');
  });
  document.getElementById('kctClearIn').addEventListener('click', function(){
    input.value = '';
    document.getElementById('kctResults').classList.remove('show');
    refreshButtons();
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    nRange.value = chip.dataset.ng; nRange.dispatchEvent(new Event('input'));
    document.getElementById('kctStop').checked = chip.dataset.stop === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var lastRows = [];

  btn.addEventListener('click', function(){
    var text = input.value;
    if(!text.trim()){ ToolPro.toast('Paste some text first', 'err'); return; }
    var maxN = parseInt(nRange.value, 10);
    var minLen = parseInt(lRange.value, 10);
    var useStop = document.getElementById('kctStop').checked;
    var topN = parseInt(document.getElementById('kctTop').value, 10);

    var words = text.toLowerCase().match(/[a-z0-9]+(?:['’][a-z0-9]+)?/g) || [];
    var total = words.length;
    var kept = words.filter(function(w){
      if(w.length < minLen) return false;
      if(useStop && STOP.indexOf(w) >= 0) return false;
      return true;
    });
    var counts = {}, order = [];
    function bump(phrase){
      if(!counts[phrase]){ counts[phrase] = 0; order.push(phrase); }
      counts[phrase]++;
    }
    kept.forEach(function(w){ bump(w); });
    for(var n = 2; n <= maxN; n++){
      for(var i = 0; i + n <= kept.length; i++){
        bump(kept.slice(i, i + n).join(' '));
      }
    }
    var unique = order.length;
    var rows = order.map(function(p){
      return { term: p, count: counts[p], density: kept.length ? (counts[p] / kept.length * 100) : 0 };
    });
    rows.sort(function(a, b){ return b.count - a.count || a.term.localeCompare(b.term); });
    rows = rows.slice(0, topN);
    lastRows = rows;

    var grid = document.getElementById('kctGrid');
    grid.innerHTML = '';
    var tableCard = document.createElement('div');
    tableCard.className = 'result-card';
    tableCard.style.gridColumn = '1 / -1';
    var html = '<div class="r-name">📊 Top terms &amp; density</div><div class="r-stats">' +
      '<table style="width:100%;font-size:.85rem;border-collapse:collapse">' +
      '<tr style="text-align:left;border-bottom:2px solid var(--tp-border)"><th style="padding:4px">Term</th><th style="padding:4px">Count</th><th style="padding:4px">Density</th></tr>';
    rows.forEach(function(r){
      var bar = Math.min(100, Math.round(r.density * 4));
      html += '<tr style="border-bottom:1px solid var(--tp-border)"><td style="padding:4px">' + esc(r.term) + '</td>' +
        '<td style="padding:4px">' + r.count + '</td>' +
        '<td style="padding:4px"><div style="background:var(--tp-border);border-radius:4px;height:8px;width:90px;display:inline-block;vertical-align:middle;margin-right:6px"><div style="background:var(--tp-accent);height:8px;border-radius:4px;width:' + bar + '%"></div></div>' +
        r.density.toFixed(2) + '%</td></tr>';
    });
    html += '</table></div>';
    tableCard.innerHTML = html;
    grid.appendChild(tableCard);

    var topTerm = rows.length ? rows[0] : null;
    var warn = topTerm && topTerm.density > 5 && topTerm.term.indexOf(' ') < 0
      ? ' ⚠️ "' + topTerm.term + '" appears ' + topTerm.density.toFixed(1) + '% of the time — consider varying your wording.'
      : ' ✅ No single keyword dominates — good natural balance.';
    document.getElementById('kctSummary').textContent =
      '🎉 ' + total + ' total words · ' + unique + ' unique terms analyzed.' + warn;
    document.getElementById('kctResults').classList.add('show');
    ToolPro.toast('Analysis complete', 'ok');
  });

  document.getElementById('kctDl').addEventListener('click', function(){
    if(!lastRows.length){ ToolPro.toast('Analyze text first', 'err'); return; }
    var csv = 'term,count,density_pct\n' + lastRows.map(function(r){
      return '"' + r.term.replace(/"/g, '""') + '",' + r.count + ',' + r.density.toFixed(2);
    }).join('\n');
    var blob = new Blob([csv], { type: 'text/csv' });
    ToolPro.download(URL.createObjectURL(blob), 'keyword-analysis.csv');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Paste your article, product copy, or any text (or load the sample).
- **Step 2** — Tune the analysis: how long phrases to track, minimum word length, and whether to ignore common stopwords.
- **Step 3** — Hit "Analyze Text" for total/unique counts plus a ranked table of top terms with density bars. Download the full table as CSV. All processing happens locally in your browser.

## Everyday uses

- **Bloggers** — check whether your target keyword appears naturally before hitting publish.
- **Copywriters** — spot accidental repetition in sales pages and landing copy.
- **Students** — see which themes dominate an essay draft at a glance.
- **SEO editors** — audit client content for keyword stuffing before it goes live.

**Rule of thumb:** a single keyword above 5% density is a red flag for stuffing; 1–3% with natural synonyms around it is the healthy zone. Density alone never ranks a page — but it keeps your writing honest.
