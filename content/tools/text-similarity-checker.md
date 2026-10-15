---
title: "Free Text Similarity Checker — Cosine & Jaccard Comparison"
description: "Compare two texts side by side: cosine similarity %, Jaccard similarity %, shared words, and a diff-style highlight of unique words. Free, private, no sign-up."
category: text
date: 2026-10-15
draft: false
---

Is that rewrite actually different — or just the same paragraph with new words? Paste two texts and get a similarity score two ways: cosine similarity over word frequencies and Jaccard similarity over word sets, plus a shared-word count and a diff-style highlight showing exactly which words are unique to each. Everything runs in your browser.

<div class="tool-shell" id="tsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Text Similarity Checker</h2>
<p>Compare two texts — cosine &amp; Jaccard scores plus a word-by-word diff view.</p>
</div>
<button type="button" class="theme-toggle" id="tsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your two texts</p>
<div class="setting">
<label for="tsA">Text A <span class="val" id="tsLiveA">0 words</span></label>
<textarea id="tsA" class="tool-input" rows="6" placeholder="Paste the first text here…"></textarea>
</div>
<div class="setting" style="margin-top:1rem;">
<label for="tsB">Text B <span class="val" id="tsLiveB">0 words</span></label>
<textarea id="tsB" class="tool-input" rows="6" placeholder="Paste the second text here…"></textarea>
<div class="hint">Best with a paragraph or more in each box — very short texts give noisy scores.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Comparison settings</p>
<div class="settings-panel">
<div class="preset-row" id="tsPresets">
<button type="button" class="preset-chip" data-p="near">🧬 Near-identical</button>
<button type="button" class="preset-chip" data-p="para">🔁 Paraphrased</button>
<button type="button" class="preset-chip" data-p="diff">🌍 Unrelated</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="tsMinLen">Ignore words shorter than: <span class="val" id="tsMinLenVal">3 letters</span></label>
<input type="range" id="tsMinLen" min="1" max="6" step="1" value="3">
<div class="hint">Short glue words rarely carry meaning in a similarity score.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Ignore case ("The" = "the")</span><label class="toggle"><input type="checkbox" id="tsTogCase" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Ignore common stopwords (the, and, of…)</span><label class="toggle"><input type="checkbox" id="tsTogStop" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Show diff-style word highlight</span><label class="toggle"><input type="checkbox" id="tsTogDiff" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compare &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
Compare Texts
</button>
<button type="button" class="btn-pro-outline" id="tsSwap">⇄ Swap texts</button>
<button type="button" class="btn-pro-outline" id="tsCopy" disabled>📋 Copy scores</button>
<button type="button" class="btn-pro-outline" id="tsClear">Clear</button>
</div>
<div class="progress-wrap" id="tsProgWrap">
<div class="progress-bar"><i id="tsProgBar"></i></div>
<div class="progress-text" id="tsProgText">Working…</div>
</div>
<div class="results" id="tsResults">
<p class="result-head">⚖️ Similarity report</p>
<div class="result-summary" id="tsSummary"></div>
<div class="result-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));margin-top:1rem;">
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="tsCosine">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Cosine similarity</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="tsJaccard">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Jaccard similarity</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="tsShared">0</div><div style="font-size:.82rem;color:var(--tp-muted);">Shared words</div></div>
<div class="result-card"><div style="font-size:1.6rem;font-weight:800;" id="tsUnique">—</div><div style="font-size:.82rem;color:var(--tp-muted);">Unique words (A / B)</div></div>
</div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;" id="tsDiffWrap">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">🆚 Word-by-word diff <span style="font-weight:400;">(<span style="color:#d32f2f;">■</span> only in A · <span style="color:#1565c0;">■</span> only in B)</span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;">
<div><div style="font-size:.8rem;font-weight:700;margin-bottom:.25rem;">Text A</div><div id="tsDiffA" class="tool-output" style="font-size:.85rem;line-height:1.8;max-height:220px;overflow-y:auto;white-space:pre-wrap;"></div></div>
<div><div style="font-size:.8rem;font-weight:700;margin-bottom:.25rem;">Text B</div><div id="tsDiffB" class="tool-output" style="font-size:.85rem;line-height:1.8;max-height:220px;overflow-y:auto;white-space:pre-wrap;"></div></div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compare as many text pairs as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('tsShell');
  ToolPro.themeToggle(shell, document.getElementById('tsTheme'));

  var ta = document.getElementById('tsA');
  var tb = document.getElementById('tsB');
  var btn = document.getElementById('tsBtn');
  var copyBtn = document.getElementById('tsCopy');
  var minLenRange = document.getElementById('tsMinLen');
  var minLenVal = document.getElementById('tsMinLenVal');
  var togCase = document.getElementById('tsTogCase');
  var togStop = document.getElementById('tsTogStop');
  var togDiff = document.getElementById('tsTogDiff');
  var presets = document.getElementById('tsPresets');

  ToolPro.bindSlider(minLenRange, minLenVal, function(v){ return v + ' letters'; });

  var STOP = ('a,about,above,after,again,against,all,am,an,and,any,are,as,at,be,because,been,before,being,below,' +
    'between,both,but,by,cannot,could,did,do,does,doing,down,during,each,few,for,from,further,had,has,have,' +
    'having,he,her,here,hers,herself,him,himself,his,how,i,if,in,into,is,it,its,itself,me,more,most,my,myself,no,' +
    'nor,not,now,of,off,on,once,only,or,other,ought,our,ours,ourselves,out,over,own,same,she,should,so,some,such,' +
    'than,that,the,their,theirs,them,themselves,then,there,these,they,this,those,through,to,too,under,until,up,' +
    'very,was,we,were,what,when,where,which,while,who,whom,why,with,would,you,your,yours,yourself,yourselves,' +
    'will,just,can,also,one,two,may,might,must,shall,like,get,got,make,made,many,much').split(',');

  var SAMPLES = {
    near: ['The quick brown fox jumps over the lazy dog near the river bank.',
           'The quick brown fox jumps over the lazy dog near the river bank today.'],
    para: ['Regular exercise and a balanced diet are the foundation of good health and long life.',
           'Eating well and staying active form the basis of a healthy, long-lasting lifestyle.'],
    diff: ['The stock market rallied on Tuesday as technology shares climbed to record highs.',
           'Penguins are flightless birds that live almost exclusively in the Southern Hemisphere.']
  };
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var s = SAMPLES[chip.dataset.p];
    ta.value = s[0]; tb.value = s[1];
    ta.dispatchEvent(new Event('input')); tb.dispatchEvent(new Event('input'));
    ToolPro.toast('Sample pair loaded');
  });

  function wordCount(t){
    return (t.trim().match(/\S+/g) || []).length;
  }
  function ready(){
    document.getElementById('tsLiveA').textContent = wordCount(ta.value) + ' words';
    document.getElementById('tsLiveB').textContent = wordCount(tb.value) + ' words';
    btn.disabled = !(ta.value.trim() && tb.value.trim());
  }
  ta.addEventListener('input', ready);
  tb.addEventListener('input', ready);

  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tokenize(t){
    var low = togCase.checked ? t.toLowerCase() : t;
    var minLen = parseInt(minLenRange.value, 10);
    var useStop = togStop.checked;
    return low.replace(/[^a-zA-Z0-9'\s-]/g, ' ').split(/\s+/)
      .map(function(w){ return w.replace(/^[-']+|[-']+$/g, ''); })
      .filter(function(w){ return w.length >= minLen && (!useStop || STOP.indexOf(w.toLowerCase()) === -1); });
  }

  function freqVec(words){
    var v = {};
    words.forEach(function(w){ v[w] = (v[w] || 0) + 1; });
    return v;
  }
  function cosineSim(va, vb){
    var dot = 0, na = 0, nb = 0;
    Object.keys(va).forEach(function(k){
      na += va[k] * va[k];
      if(vb[k]) dot += va[k] * vb[k];
    });
    Object.keys(vb).forEach(function(k){ nb += vb[k] * vb[k]; });
    if(!na || !nb) return 0;
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
  }
  function jaccardSim(sa, sb){
    var inter = 0;
    sa.forEach(function(k){ if(sb.has(k)) inter++; });
    var union = new Set(sa); sb.forEach(function(k){ union.add(k); });
    return union.size ? inter / union.size : 0;
  }

  var lastReport = '';

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('tsProgWrap');
    var progBar = document.getElementById('tsProgBar');
    var resBox = document.getElementById('tsResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('tsProgText').textContent = 'Comparing texts…';
    setTimeout(function(){
      var wa = tokenize(ta.value);
      var wb = tokenize(tb.value);
      var va = freqVec(wa), vb = freqVec(wb);
      var cosine = cosineSim(va, vb) * 100;
      var setA = new Set(Object.keys(va)), setB = new Set(Object.keys(vb));
      var jaccard = jaccardSim(setA, setB) * 100;
      var shared = 0;
      setA.forEach(function(k){ if(setB.has(k)) shared++; });
      var uniqA = setA.size - shared, uniqB = setB.size - shared;

      document.getElementById('tsCosine').textContent = cosine.toFixed(1) + '%';
      document.getElementById('tsJaccard').textContent = jaccard.toFixed(1) + '%';
      document.getElementById('tsShared').textContent = shared.toLocaleString();
      document.getElementById('tsUnique').textContent = uniqA + ' / ' + uniqB;

      var verdict;
      var top = Math.max(cosine, jaccard);
      if(top >= 80) verdict = 'These texts are nearly identical — likely a copy with light edits.';
      else if(top >= 50) verdict = 'These texts overlap heavily — possibly a paraphrase of the same source.';
      else if(top >= 20) verdict = 'These texts share some vocabulary but are mostly different.';
      else verdict = 'These texts are essentially unrelated.';
      document.getElementById('tsSummary').textContent = '🎉 ' + verdict;

      var diffWrap = document.getElementById('tsDiffWrap');
      if(togDiff.checked){
        diffWrap.style.display = '';
        document.getElementById('tsDiffA').innerHTML = paintDiff(ta.value, setB, '#d32f2f');
        document.getElementById('tsDiffB').innerHTML = paintDiff(tb.value, setA, '#1565c0');
      } else {
        diffWrap.style.display = 'none';
      }

      lastReport = 'Text Similarity Report\nCosine similarity: ' + cosine.toFixed(1) +
        '%\nJaccard similarity: ' + jaccard.toFixed(1) + '%\nShared words: ' + shared +
        '\nUnique words (A/B): ' + uniqA + ' / ' + uniqB + '\nVerdict: ' + verdict;

      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = false;
      ToolPro.toast('Comparison complete', 'ok');
    }, 350);
  });

  function paintDiff(raw, otherSet, color){
    var low = togCase.checked ? raw.toLowerCase() : raw;
    var tokens = raw.match(/\S+|\s+/g) || [];
    var lowTokens = low.match(/\S+|\s+/g) || [];
    var minLen = parseInt(minLenRange.value, 10);
    var useStop = togStop.checked;
    return tokens.map(function(tok, i){
      if(/^\s+$/.test(tok)) return esc(tok);
      var key = lowTokens[i].replace(/[^a-zA-Z0-9'-]/g, '').replace(/^[-']+|[-']+$/g, '');
      var counted = key.length >= minLen && (!useStop || STOP.indexOf(key.toLowerCase()) === -1);
      var unique = counted && key && !otherSet.has(togCase.checked ? key : key);
      if(unique){
        return '<span style="background:' + color + '22;border-bottom:2px solid ' + color + ';">' + esc(tok) + '</span>';
      }
      return esc(tok);
    }).join('');
  }

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(lastReport, 'Scores copied to clipboard');
  });

  document.getElementById('tsSwap').addEventListener('click', function(){
    var tmp = ta.value; ta.value = tb.value; tb.value = tmp;
    ready();
    ToolPro.toast('Texts swapped');
  });

  document.getElementById('tsClear').addEventListener('click', function(){
    ta.value = ''; tb.value = '';
    document.getElementById('tsLiveA').textContent = '0 words';
    document.getElementById('tsLiveB').textContent = '0 words';
    document.getElementById('tsResults').classList.remove('show');
    btn.disabled = true; copyBtn.disabled = true;
    ToolPro.toast('Cleared');
  });
})();
</script>

## How it works

1. **Paste two texts** — the original and the rewrite, draft A and draft B, or any pair you want to compare. Live word counts track both.
2. **Tune the comparison** — try a sample pair, set the minimum word length, and toggle case sensitivity, the stopword filter and the diff view.
3. **Compare** — the tool builds word-frequency vectors (cosine similarity) and word sets (Jaccard similarity), counts shared words, and highlights words unique to each text side by side.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Writers & editors** — check whether a rewrite is different enough from the source.
- **Teachers** — spot assignments that are suspiciously similar to each other.
- **Students** — compare your paraphrase against the original before submitting.
- **Content teams** — catch accidental near-duplicate pages that split your SEO.
- **Bloggers** — verify guest posts aren't lightly-rewritten copies of existing articles.

**Rule of thumb:** cosine above 80% usually means near-duplicate content; 40–60% is a heavy paraphrase; under 20% is effectively a different text.
