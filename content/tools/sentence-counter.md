---
title: "Free Sentence Counter — Count Sentences & Flag Long Ones"
description: "Count sentences, words, and average sentence length instantly — with a long-sentence highlighter for tighter writing. Free, private, runs in your browser."
category: text
date: 2026-10-18
draft: false
---

Long, tangled sentences bury your point — and you can't fix what you can't see. Paste any text to count sentences and words, get your average sentence length, and watch every sentence over your chosen limit light up in yellow so you can trim it. Perfect for essays, emails, and blog posts. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="scShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 2v8h12v-8H6zm2 2h8v1.5H8V12zm0 3h6v1.5H8V15z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sentence Counter</h2>
<p>Count sentences, measure average length, and highlight long sentences — free and private.</p>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your text</p>
<textarea class="tool-input" id="scInput" rows="8" placeholder="Paste your essay, email, or article here…" style="width:100%"></textarea>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Analysis settings</p>
<div class="settings-panel">
<div class="preset-row" id="scPresets">
<button type="button" class="preset-chip" data-thr="15">📚 Academic — flag over 15</button>
<button type="button" class="preset-chip active" data-thr="20">📰 Standard — flag over 20</button>
<button type="button" class="preset-chip" data-thr="30">💬 Casual — flag over 30</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="scThr">Long-sentence threshold: <span class="val" id="scThrVal">20 words</span></label>
<input type="range" id="scThr" min="8" max="50" value="20">
<div class="hint">Sentences longer than this light up in the text below.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Count &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="scBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 2v8h12v-8H6zm2 2h8v1.5H8V12zm0 3h6v1.5H8V15z"/></svg>
Count Sentences
</button>
<button type="button" class="btn-pro-outline" id="scClear" disabled>Clear</button>
</div>
<div class="results" id="scResults">
<p class="result-head">✅ Done — your sentence stats</p>
<div class="result-summary" id="scSummary"></div>
<div class="result-grid" id="scGrid"></div>
<div class="tool-output" id="scHighlight" style="margin-top:12px;line-height:1.9"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — analyze as much text as you like. Your words never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('scShell');
ToolPro.themeToggle(shell, document.getElementById('scTheme'));
var ta = document.getElementById('scInput');
var thrR = document.getElementById('scThr'), thrV = document.getElementById('scThrVal');
var btn = document.getElementById('scBtn'), clearBtn = document.getElementById('scClear');
var presets = document.getElementById('scPresets');
var resBox = document.getElementById('scResults');
ToolPro.bindSlider(thrR, thrV, function(v){ return v + ' words'; });
ta.addEventListener('input', function(){
  var has = ta.value.trim().length > 0;
  btn.disabled = !has; clearBtn.disabled = !has;
});
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  thrR.value = chip.dataset.thr;
  thrR.dispatchEvent(new Event('input'));
  ToolPro.toast('Threshold: ' + chip.dataset.thr + ' words');
});
clearBtn.addEventListener('click', function(){
  ta.value = ''; resBox.classList.remove('show');
  btn.disabled = true; clearBtn.disabled = true;
});
function splitSentences(text){
  var t = (' ' + text).replace(/\s+/g, ' ').trim();
  if(!t) return [];
  var prot = ['Mr.','Mrs.','Ms.','Dr.','Sr.','Jr.','St.','Ave.','etc.','vs.','Prof.','Inc.','Ltd.','i.e.','e.g.','a.m.','p.m.','U.S.','U.K.','No.'];
  var map = [];
  prot.forEach(function(p, i){
    var k = '\uE000' + i + '\uE001';
    map.push([k, p]);
    t = t.split(p).join(k);
  });
  function restore(s){
    map.forEach(function(pair){ s = s.split(pair[0]).join(pair[1]); });
    return s;
  }
  var out = [], re = /[^.!?…]*[.!?…]+[""')\]]*/g, m, last = 0;
  while((m = re.exec(t)) !== null){
    var s = restore(m[0].trim());
    if(/[A-Za-z0-9]/.test(s)) out.push(s);
    last = re.lastIndex;
  }
  var rest = restore(t.slice(last).trim());
  if(/[A-Za-z0-9]/.test(rest)) out.push(rest);
  return out;
}
function wordsOf(s){ return s.split(/\s+/).filter(function(w){ return w.length; }).length; }
btn.addEventListener('click', function(){
  var text = ta.value.trim();
  if(!text){ ToolPro.toast('Paste some text first', 'err'); return; }
  var thr = parseInt(thrR.value, 10);
  var sents = splitSentences(text);
  var counts = sents.map(wordsOf);
  var totalWords = counts.reduce(function(a, b){ return a + b; }, 0);
  var n = sents.length;
  var avg = n ? totalWords / n : 0;
  var longIdx = [];
  counts.forEach(function(c, i){ if(c > thr) longIdx.push(i); });
  var longest = n ? Math.max.apply(null, counts) : 0;
  var shortest = n ? Math.min.apply(null, counts) : 0;
  document.getElementById('scSummary').textContent =
    '🎉 ' + n + (n === 1 ? ' sentence' : ' sentences') + ' analyzed · ' +
    longIdx.length + (longIdx.length === 1 ? ' sentence' : ' sentences') +
    ' longer than ' + thr + ' words ' + (longIdx.length ? 'highlighted below 👇' : '— nice and tight!');
  var grid = document.getElementById('scGrid');
  grid.innerHTML = '';
  [['Sentences', n], ['Words', totalWords], ['Avg sentence length', avg.toFixed(1) + ' words'],
   ['Long sentences', longIdx.length], ['Longest', longest + ' words'], ['Shortest', shortest + ' words']]
  .forEach(function(x){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<p class="r-name">' + x[0] + '</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">' + x[1] + '</p>';
    grid.appendChild(card);
  });
  var hl = document.getElementById('scHighlight');
  hl.innerHTML = '';
  var p = document.createElement('p');
  p.style.margin = '0';
  sents.forEach(function(s, i){
    var span = document.createElement('span');
    span.textContent = s + ' ';
    if(counts[i] > thr){
      span.style.background = 'rgba(255,190,40,.4)';
      span.style.borderRadius = '4px';
      span.style.padding = '1px 3px';
      span.title = counts[i] + ' words — consider splitting';
    }
    p.appendChild(span);
  });
  hl.appendChild(p);
  resBox.classList.add('show');
  resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  ToolPro.toast('Analysis complete', 'ok');
});
})();
</script>

## How it works

- **Step 1** — Paste any text: an essay, email, report, or article draft.
- **Step 2** — Choose a writing-style preset (Academic, Standard, or Casual) or set your own long-sentence threshold with the slider. The splitter is smart about abbreviations like "Dr.", "e.g.", and "U.S." so they don't count as sentence breaks.
- **Step 3** — Hit **Count Sentences** for six stats — sentence count, word count, average length, long-sentence count, longest, and shortest — plus your full text with every over-long sentence highlighted in yellow.

## Everyday uses

- **Students** — catch run-on sentences in essays before your professor does.
- **Bloggers** — keep sentences short for skimmable, SEO-friendly articles.
- **Job seekers** — tighten cover letters and resumes to punchy, readable lines.
- **Business writers** — make emails and reports clear by splitting monsters over 20 words.
- **Editors** — spot sentence-length variety at a glance (all long = monotonous).

## Frequently asked questions

**What counts as a long sentence?**
It depends on your audience. The Standard preset flags anything over 20 words — a common journalism guideline. Academic writing tolerates more (15 can be too strict for papers), while casual writing can go to 30. Adjust the slider to your style.

**Does it handle abbreviations correctly?**
Yes. Common abbreviations — Dr., Mr., e.g., i.e., etc., U.S., a.m./p.m. — are protected so their periods don't split sentences.

**Is my text private?**
Completely. The analysis runs in your browser's JavaScript engine; your words never leave your browser and are never uploaded or stored.
