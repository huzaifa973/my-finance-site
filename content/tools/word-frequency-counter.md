---
title: "Free Word Frequency Counter"
description: "Count word frequency in any text — see the top 50 words with counts and percentages, filter stopwords, copy results. Free and fully private."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste any text and see exactly how often each word appears — ranked in a table with counts and percentage bars. Filter out short words and common stopwords like "the" and "and" to surface the words that actually matter.

<div class="tool-shell" id="wfcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Word Frequency Counter</h2>
<p>See which words you use most — ranked counts, percentages, and stopword filtering.</p>
</div>
<button type="button" class="theme-toggle" id="wfcTheme">🌙 Dark</button>
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
<div class="setting">
<label for="wfcInput">Article, essay, speech — any text</label>
<textarea id="wfcInput" class="tool-input" rows="8" placeholder="Paste your text here…"></textarea>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Counting options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="wfcMin">Minimum word length</label>
<select id="wfcMin" class="tool-input" style="max-width:200px;">
<option value="1" selected>1 letter</option>
<option value="2">2 letters</option>
<option value="3">3 letters</option>
<option value="4">4 letters</option>
</select>
</div>
<div class="setting">
<label><input type="checkbox" id="wfcStop"> Ignore common words (the, of, and, to…)</label>
<div class="hint">Stopwords are the glue words of English — filtering them out highlights your real vocabulary.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze &amp; copy results</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wfcBtn">
<svg viewBox="0 0 24 24"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>
Analyze text
</button>
<button type="button" class="btn-pro-outline" id="wfcCopy">📋 Copy results</button>
<button type="button" class="btn-pro-outline" id="wfcClear">Clear</button>
</div>
<div class="results" id="wfcResults">
<p class="result-head">📊 Word frequency</p>
<p id="wfcStats"></p>
<div id="wfcTable"></div>
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
  var shell = document.getElementById('wfcShell');
  ToolPro.themeToggle(shell, document.getElementById('wfcTheme'));
  var input = document.getElementById('wfcInput');
  var minSel = document.getElementById('wfcMin');
  var stopOpt = document.getElementById('wfcStop');
  var resBox = document.getElementById('wfcResults');
  var stats = document.getElementById('wfcStats');
  var tableDiv = document.getElementById('wfcTable');
  var lastTop = [];
  var lastTotal = 0;

  var STOP = {};
  'the,of,and,a,to,in,is,you,that,it,he,was,for,on,are,as,with,his,they,i,at,be,this,have,from,or,one,had,by,but,not,what,all,were,we,when,your,can,said,there,an,each,which,she,do,how,their,will'.split(',').forEach(function(w){ STOP[w] = 1; });

  function analyze(announce){
    var t = input.value;
    if (!t.trim()) {
      if (announce) ToolPro.toast('Paste some text first', 'err');
      return;
    }
    var minLen = parseInt(minSel.value, 10);
    var useStop = stopOpt.checked;
    var tokens = t.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) || [];
    var counts = {};
    var totalCounted = 0;
    tokens.forEach(function(w){
      if (w.length < minLen) return;
      if (useStop && STOP[w]) return;
      counts[w] = (counts[w] || 0) + 1;
      totalCounted++;
    });
    var entries = Object.keys(counts).map(function(w){ return { word: w, count: counts[w] }; });
    entries.sort(function(a, b){
      if (b.count !== a.count) return b.count - a.count;
      return a.word < b.word ? -1 : 1;
    });
    var unique = entries.length;
    var top = entries.slice(0, 50);
    lastTop = top;
    lastTotal = totalCounted;
    stats.textContent = totalCounted.toLocaleString() + ' words counted · ' + unique.toLocaleString() + ' unique' + (unique > 50 ? ' · showing top 50' : '');
    if (!top.length) {
      tableDiv.innerHTML = '<p>No words match those options — try a lower minimum length or untick the stopword filter.</p>';
    } else {
      var max = top[0].count;
      var html = '<table style="width:100%;border-collapse:collapse;">';
      html += '<tr><th style="text-align:left;padding:6px 8px;">#</th><th style="text-align:left;padding:6px 8px;">Word</th><th style="text-align:left;padding:6px 8px;">Count</th><th style="text-align:left;padding:6px 8px;">Share</th></tr>';
      top.forEach(function(e, i){
        var pct = totalCounted ? (e.count / totalCounted * 100) : 0;
        var barW = Math.max(2, Math.round(e.count / max * 100));
        html += '<tr><td style="padding:6px 8px;border-top:1px solid #ccc;">' + (i + 1) + '</td><td style="padding:6px 8px;border-top:1px solid #ccc;"><strong>' + e.word + '</strong></td><td style="padding:6px 8px;border-top:1px solid #ccc;">' + e.count.toLocaleString() + '</td><td style="padding:6px 8px;border-top:1px solid #ccc;"><div style="background:#2563eb;height:8px;border-radius:4px;width:' + barW + '%;"></div><span style="font-size:.8rem;">' + pct.toFixed(1) + '%</span></td></tr>';
      });
      html += '</table>';
      tableDiv.innerHTML = html;
    }
    resBox.classList.add('show');
    if (announce) {
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Analyzed ' + totalCounted.toLocaleString() + ' words', 'ok');
    }
  }

  document.getElementById('wfcBtn').addEventListener('click', function(){ analyze(true); });
  minSel.addEventListener('change', function(){ if (input.value.trim()) analyze(false); });
  stopOpt.addEventListener('change', function(){ if (input.value.trim()) analyze(false); });
  document.getElementById('wfcCopy').addEventListener('click', function(){
    if (!lastTop.length) { ToolPro.toast('Analyze some text first', 'err'); return; }
    var lines = lastTop.map(function(e, i){
      var pct = lastTotal ? (e.count / lastTotal * 100).toFixed(1) : '0.0';
      return (i + 1) + '. ' + e.word + ' — ' + e.count + ' (' + pct + '%)';
    });
    ToolPro.copyText(lines.join('\n'), 'Results copied to clipboard');
  });
  document.getElementById('wfcClear').addEventListener('click', function(){
    input.value = '';
    lastTop = [];
    lastTotal = 0;
    resBox.classList.remove('show');
    ToolPro.toast('Cleared');
  });
})();
</script>

## Everyday uses

- **Writers and editors:** spot overused words and crutch phrases before publishing.
- **SEO checks:** see if your target keyword appears naturally — and whether a different term dominates.
- **Speech and essay prep:** find repetitive wording and vary it for a stronger delivery.
- **Analyzing feedback:** paste reviews or comments to discover the themes people mention most.

## Frequently asked questions

**How are words counted?**
Everything is lowercased and punctuation is stripped, so "Word," "word" and "WORD" all count as the same word. Numbers and words with apostrophes (like "don't") count too.

**What are stopwords?**
Stopwords are the small glue words of English — "the", "of", "and", "to" — that appear constantly in almost any text. Ticking the filter removes them so your content words stand out.

**Is my text uploaded or stored?**
No. The analysis runs entirely in your browser — your text never leaves your device.
