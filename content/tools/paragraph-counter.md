---
title: "Paragraph Counter — Count Paragraphs, Sentences & Words Online"
description: "Count paragraphs, sentences, words, characters and characters without spaces as you type. Click any paragraph to highlight it — free, private, no sign-up."
category: text
date: 2026-10-19
draft: false
---

Know your structure at a glance — paste your text and get live counts of paragraphs, sentences, words, and characters, plus a clickable paragraph breakdown. Click any paragraph to jump straight to it in the text. Everything runs in your browser; your text is never uploaded anywhere.

<div class="tool-shell" id="pcrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><text x="12" y="18" text-anchor="middle" font-size="17" font-weight="bold" fill="currentColor">¶</text></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Paragraph Counter</h2>
<p>Live paragraph, sentence, word &amp; character counts — with a clickable paragraph breakdown.</p>
</div>
<button type="button" class="theme-toggle" id="pcrTheme">🌙 Dark</button>
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
<label for="pcrText">Paste or type below — counts update live</label>
<textarea id="pcrText" class="tool-input" rows="9" placeholder="Paste your essay, article, or report here…"></textarea>
<div class="hint">Paragraphs are separated by blank lines — just like in Word and Google Docs.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Live counts</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pcrCopy">📋 Copy stats</button>
<button type="button" class="btn-pro-outline" id="pcrClear">Clear</button>
</div>
<div class="results show">
<p class="result-head">📊 Text statistics</p>
<div class="result-summary" id="pcrSummary">Type or paste text above to see live counts.</div>
<div class="result-grid">
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="pcrParas">0</div>
<div style="font-size:.85rem;color:var(--muted);">Paragraphs</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="pcrSents">0</div>
<div style="font-size:.85rem;color:var(--muted);">Sentences</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="pcrWords">0</div>
<div style="font-size:.85rem;color:var(--muted);">Words</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="pcrChars">0</div>
<div style="font-size:.85rem;color:var(--muted);">Characters</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="pcrCharsNS">0</div>
<div style="font-size:.85rem;color:var(--muted);">Characters (no spaces)</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Paragraph breakdown — click to jump to it</p>
<ol class="file-list" id="pcrList" style="list-style:none;"></ol>
<div class="hint">Click a paragraph to highlight it and select it in the text box above.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — count as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pcrShell');
  ToolPro.themeToggle(shell, document.getElementById('pcrTheme'));

  var ta = document.getElementById('pcrText');
  var listEl = document.getElementById('pcrList');
  var paras = [];
  var lastStats = '';

  function parseParagraphs(text){
    var out = [];
    var re = /\n[ \t]*\n/g, start = 0, m;
    function push(s, e){
      var raw = text.slice(s, e);
      var ls = raw.search(/\S/);
      if(ls === -1) return;
      var ps = s + ls;
      var pe = s + raw.replace(/\s+$/, '').length;
      out.push({ text: text.slice(ps, pe), start: ps, end: pe });
    }
    while((m = re.exec(text))){ push(start, m.index); start = m.index + m[0].length; }
    push(start, text.length);
    return out;
  }

  function wordCount(s){
    var t = s.trim();
    return t ? t.split(/\s+/).length : 0;
  }

  function countAll(){
    var text = ta.value;
    paras = parseParagraphs(text);
    var words = wordCount(text);
    var sents = 0;
    if(text.trim()){
      sents = text.split(/(?<=[.!?])\s+/).filter(function(s){ return s.trim(); }).length;
    }
    var chars = text.length;
    var charsNS = text.replace(/\s/g, '').length;

    document.getElementById('pcrParas').textContent = paras.length;
    document.getElementById('pcrSents').textContent = sents;
    document.getElementById('pcrWords').textContent = words;
    document.getElementById('pcrChars').textContent = chars;
    document.getElementById('pcrCharsNS').textContent = charsNS;
    document.getElementById('pcrSummary').textContent =
      paras.length + (paras.length === 1 ? ' paragraph' : ' paragraphs') + ' · ' +
      sents + (sents === 1 ? ' sentence' : ' sentences') + ' · ' +
      words + (words === 1 ? ' word' : ' words') + ' · ' +
      chars + ' characters (' + charsNS + ' without spaces).';
    lastStats = document.getElementById('pcrSummary').textContent;

    listEl.innerHTML = '';
    paras.forEach(function(p, i){
      var li = document.createElement('li');
      li.className = 'file-row';
      li.style.cursor = 'pointer';
      var label = document.createElement('span');
      label.className = 'file-ic';
      label.textContent = (i + 1);
      var body = document.createElement('span');
      body.className = 'file-name';
      var preview = p.text.length > 90 ? p.text.slice(0, 90) + '…' : p.text;
      body.textContent = preview;
      body.title = 'Click to jump to paragraph ' + (i + 1);
      var wc = document.createElement('span');
      wc.className = 'file-size';
      var w = wordCount(p.text);
      wc.textContent = w + (w === 1 ? ' word' : ' words');
      li.appendChild(label); li.appendChild(body); li.appendChild(wc);
      (function(idx, item){
        item.addEventListener('click', function(){
          listEl.querySelectorAll('.file-row').forEach(function(x){
            x.classList.remove('active');
            x.style.outline = ''; x.style.background = '';
          });
          item.classList.add('active');
          item.style.outline = '2px solid var(--tp-accent)';
          item.style.background = 'var(--tp-accent-soft)';
          var pg = paras[idx];
          ta.focus();
          ta.setSelectionRange(pg.start, pg.end);
          try{
            var ratio = pg.start / Math.max(1, ta.value.length);
            ta.scrollTop = ratio * ta.scrollHeight;
          }catch(e){}
          ToolPro.toast('Paragraph ' + (idx + 1) + ' selected');
        });
      })(i, li);
      listEl.appendChild(li);
    });
  }

  ta.addEventListener('input', countAll);
  document.getElementById('pcrClear').addEventListener('click', function(){
    ta.value = ''; countAll(); ta.focus();
    ToolPro.toast('Cleared');
  });
  document.getElementById('pcrCopy').addEventListener('click', function(){
    ToolPro.copyText(lastStats || 'No text yet.', 'Stats copied');
  });

  countAll();
})();
</script>

## How it works

Type or paste your text and every stat updates live: paragraphs are detected on blank lines (two or more newlines), sentences on `.` `!` `?` followed by whitespace. Each paragraph gets its own word count, and clicking it selects the exact character range in the text box so you can edit it instantly.

## Everyday uses

- **Students** — check essay and assignment paragraph structure against word and paragraph requirements.
- **Writers &amp; bloggers** — spot walls of text and break long posts into readable paragraphs.
- **Job seekers** — balance cover-letter paragraphs so none runs too long.
- **Teachers** — quickly verify student submissions meet paragraph-count guidelines.
- **SEO writers** — keep paragraphs short and scannable, the way Google and readers prefer.
