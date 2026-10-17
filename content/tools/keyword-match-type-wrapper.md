---
title: "Keyword Match Type Wrapper — Broad, Phrase & Exact Match Formatter for Google Ads"
description: "Wrap your keyword list in Google Ads match type symbols — broad, modified broad, phrase and exact — in one click. Paste keywords, pick formats, copy or download. Free, no sign-up."
category: seo
date: 2026-10-17
draft: false
---

Building a Google Ads keyword list by hand is tedious — and one missing quote or bracket can change what your ads match. Paste your keywords and this tool wraps them instantly in broad, modified broad (+modifier), phrase ("quotes"), and exact ([brackets]) match syntax, ready to paste into Google Ads or your editor. Everything runs in your browser.

<div class="tool-shell" id="kmwShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14.59 2.59L4 13.2V20h6.8L21.4 9.41a1 1 0 0 0 0-1.41l-5.4-5.41a1 1 0 0 0-1.41 0zM17 5.83l4.17 4.17L18 13.17 13.83 9 17 5.83zM5 17l3.59-3.59L6.83 11.6 5 13.41V17zm7-4.76l-2.24 2.24 1.41 1.42L14.41 13 12 10.24z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword Match Type Wrapper</h2>
<p>Wrap keyword lists in Google Ads match-type syntax — broad, +modified, "phrase" and [exact] — in one click.</p>
</div>
<button type="button" class="theme-toggle" id="kmwTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your keywords</p>
<textarea class="tool-input" id="kmwInput" rows="8" placeholder="One keyword per line, e.g.&#10;running shoes&#10;buy running shoes online&#10;best marathon shoes"></textarea>
<div class="tool-actions" style="margin-top:10px">
<button type="button" class="btn-pro-outline" id="kmwSample">Load sample keywords</button>
<button type="button" class="btn-pro-outline" id="kmwClearIn">Clear</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Choose match types</p>
<div class="settings-panel">
<div class="preset-row" id="kmwPresets">
<button type="button" class="preset-chip active" data-m="all">🎯 All four types</button>
<button type="button" class="preset-chip" data-m="phrase,exact">📦 Phrase + Exact only</button>
<button type="button" class="preset-chip" data-m="broad">🌐 Broad only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Match types to generate</label>
<div class="toggle-row"><span class="t-label">Broad — <code>running shoes</code></span><label class="toggle"><input type="checkbox" id="kmwBroad" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Modified broad — <code>+running +shoes</code></span><label class="toggle"><input type="checkbox" id="kmwMod" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Phrase — <code>"running shoes"</code></span><label class="toggle"><input type="checkbox" id="kmwPhrase" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Exact — <code>[running shoes]</code></span><label class="toggle"><input type="checkbox" id="kmwExact" checked><span class="track"></span></label></div>
<div class="hint">Modified broad (+) locks each word to the query — the closest control to the retired "broad match modifier".</div>
</div>
<div class="setting">
<label>Output options</label>
<div class="toggle-row"><span class="t-label">Remove duplicate keywords</span><label class="toggle"><input type="checkbox" id="kmwDedupe" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Convert to lowercase</span><label class="toggle"><input type="checkbox" id="kmwLower"><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Group output by match type</span><label class="toggle"><input type="checkbox" id="kmwGroup" checked><span class="track"></span></label></div>
<div class="hint">Ungrouped output lists all formats of one keyword together — handy for ad-group building.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; export</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="kmwBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Wrap Keywords
</button>
</div>
<div class="progress-wrap" id="kmwProgWrap">
<div class="progress-bar"><i id="kmwProgBar"></i></div>
<div class="progress-text" id="kmwProgText">Working…</div>
</div>
<div class="results" id="kmwResults">
<p class="result-head">✅ Done — your wrapped keyword list</p>
<div class="result-summary" id="kmwSummary"></div>
<textarea class="tool-output" id="kmwOutput" rows="10" readonly></textarea>
<div class="tool-actions" style="margin-top:10px">
<button type="button" class="btn-pro-outline" id="kmwCopy">📋 Copy to clipboard</button>
<button type="button" class="btn-pro-outline" id="kmwDl">⬇ Download .txt</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Wrap unlimited keyword lists — everything happens in your browser, nothing is sent anywhere.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('kmwShell');
  ToolPro.themeToggle(shell, document.getElementById('kmwTheme'));
  var input = document.getElementById('kmwInput');
  var btn = document.getElementById('kmwBtn');
  var presets = document.getElementById('kmwPresets');

  function refreshButtons(){ btn.disabled = !input.value.trim(); }
  input.addEventListener('input', refreshButtons);

  document.getElementById('kmwSample').addEventListener('click', function(){
    input.value = 'running shoes\nbuy running shoes online\nbest marathon shoes\ntrail running shoes women';
    refreshButtons();
    ToolPro.toast('Sample keywords loaded', 'ok');
  });
  document.getElementById('kmwClearIn').addEventListener('click', function(){
    input.value = '';
    document.getElementById('kmwResults').classList.remove('show');
    refreshButtons();
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var m = chip.dataset.m;
    document.getElementById('kmwBroad').checked = (m === 'all' || m === 'broad');
    document.getElementById('kmwMod').checked = (m === 'all');
    document.getElementById('kmwPhrase').checked = (m === 'all' || m === 'phrase,exact');
    document.getElementById('kmwExact').checked = (m === 'all' || m === 'phrase,exact');
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function wrap(kw, type){
    if(type === 'broad') return kw;
    if(type === 'mod') return kw.split(/\s+/).map(function(w){ return '+' + w; }).join(' ');
    if(type === 'phrase') return '"' + kw + '"';
    if(type === 'exact') return '[' + kw + ']';
    return kw;
  }

  btn.addEventListener('click', function(){
    var lines = input.value.split(/\r?\n/).map(function(s){ return s.trim(); }).filter(Boolean);
    if(document.getElementById('kmwLower').checked) lines = lines.map(function(s){ return s.toLowerCase(); });
    if(document.getElementById('kmwDedupe').checked){
      var seen = {};
      lines = lines.filter(function(s){ var k = s.toLowerCase(); if(seen[k]) return false; seen[k] = 1; return true; });
    }
    var types = [];
    if(document.getElementById('kmwBroad').checked) types.push(['broad', 'Broad']);
    if(document.getElementById('kmwMod').checked) types.push(['mod', 'Modified broad']);
    if(document.getElementById('kmwPhrase').checked) types.push(['phrase', 'Phrase']);
    if(document.getElementById('kmwExact').checked) types.push(['exact', 'Exact']);
    if(!types.length){ ToolPro.toast('Pick at least one match type', 'err'); return; }
    var grouped = document.getElementById('kmwGroup').checked;
    var out = [];
    if(grouped){
      types.forEach(function(t){
        out.push('// ' + t[1] + ' match');
        lines.forEach(function(kw){ out.push(wrap(kw, t[0])); });
        out.push('');
      });
    } else {
      lines.forEach(function(kw){
        types.forEach(function(t){ out.push(wrap(kw, t[0])); });
      });
    }
    var text = out.join('\n').replace(/\n+$/, '');
    document.getElementById('kmwOutput').value = text;
    document.getElementById('kmwSummary').textContent =
      '🎉 ' + lines.length + (lines.length === 1 ? ' keyword' : ' keywords') + ' × ' + types.length +
      (types.length === 1 ? ' match type' : ' match types') + ' = ' + (lines.length * types.length) + ' wrapped lines.';
    document.getElementById('kmwResults').classList.add('show');
    ToolPro.toast('Keywords wrapped', 'ok');
  });

  document.getElementById('kmwCopy').addEventListener('click', function(){
    var t = document.getElementById('kmwOutput');
    t.select();
    try{ document.execCommand('copy'); }catch(e){}
    if(navigator.clipboard) navigator.clipboard.writeText(t.value);
    ToolPro.toast('Copied to clipboard', 'ok');
  });
  document.getElementById('kmwDl').addEventListener('click', function(){
    var blob = new Blob([document.getElementById('kmwOutput').value], { type: 'text/plain' });
    ToolPro.download(URL.createObjectURL(blob), 'match-type-keywords.txt');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Paste your keyword list, one keyword per line (or load the sample list).
- **Step 2** — Pick which Google Ads match types to generate: broad, modified broad (+word +word), phrase ("keyword"), and exact ([keyword]), plus output options like grouping and deduplication.
- **Step 3** — Hit "Wrap Keywords" to get a ready-to-import list, then copy it or download it as a .txt file. All processing happens locally in your browser.

## Everyday uses

- **PPC freelancers** — build match-type keyword lists for client campaigns in seconds instead of editing each line.
- **Small business owners** — prepare Google Ads keyword uploads without spreadsheet formulas.
- **SEO learners** — see exactly how broad, phrase, and exact match syntax differ, side by side.
- **Agencies** — standardize keyword list formatting across accounts and team members.

**Rule of thumb:** phrase and exact match give you control over spend; use modified broad (+keyword) when you want reach with guardrails. Never wrap the same keyword in every type inside one ad group — split by intent instead.
