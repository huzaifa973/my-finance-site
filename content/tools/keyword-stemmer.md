---
title: "Free Keyword Stemmer & Variant Generator — Expand Seed Keywords"
description: "Expand seed keywords into plurals, verb forms, comparatives and more with transparent suffix rules. Grouped output, copy + CSV download. Free, no sign-up, in-browser."
category: seo
date: 2026-10-19
draft: false
---

One seed keyword can hide dozens of search variations. Enter your seeds and this tool generates plurals, verb forms, comparatives, agent nouns, and adverbs using clear, documented suffix rules — then groups everything per seed with copy and CSV download. All in your browser.

<div class="tool-shell" id="stmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword Stemmer &amp; Variant Generator</h2>
<p>Expand seed keywords into plurals, verb forms, comparatives &amp; more — rules fully documented.</p>
</div>
<button type="button" class="theme-toggle" id="stmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter seed keywords</p>
<textarea id="stmSeeds" class="tool-input" rows="8" placeholder="One keyword per line:&#10;compress pdf&#10;budget planner&#10;resume template"></textarea>
<div class="hint">Single words work best (the tool stems the last word of a phrase). Lowercase is fine.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Variant groups</p>
<div class="settings-panel">
<div class="preset-row" id="stmPresets">
<button type="button" class="preset-chip active" data-g="all">🌟 All variants</button>
<button type="button" class="preset-chip" data-g="plural">🔢 Plurals only</button>
<button type="button" class="preset-chip" data-g="verb">🏃 Verb forms only</button>
<button type="button" class="preset-chip" data-g="seo">🎯 SEO cluster mix</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Plurals (tools → tools, boxes, cities)</span><label class="toggle"><input type="checkbox" id="stmPlural" checked><span class="track"></span></label></div>
<div class="hint">+s, +es after s/x/z/ch/sh, y→ies.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Verb forms (-ing, -ed, -s)</span><label class="toggle"><input type="checkbox" id="stmVerb" checked><span class="track"></span></label></div>
<div class="hint">Drop silent e before -ing (make → making); +ed, +s.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Comparatives (-er, -est)</span><label class="toggle"><input type="checkbox" id="stmComp" checked><span class="track"></span></label></div>
<div class="hint">fast → faster/fastest; happy → happier/happiest.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Agent nouns (-er, -or)</span><label class="toggle"><input type="checkbox" id="stmAgent" checked><span class="track"></span></label></div>
<div class="hint">teach → teacher; act → actor.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Adverbs (-ly)</span><label class="toggle"><input type="checkbox" id="stmAdv" checked><span class="track"></span></label></div>
<div class="hint">quick → quickly; happy → happily.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Show applied rules per variant</span><label class="toggle"><input type="checkbox" id="stmRules"><span class="track"></span></label></div>
<div class="hint">Adds a "rule" column so you can audit every transformation.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate variants</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="stmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Generate Variants
</button>
<button type="button" class="btn-pro-outline" id="stmCopy" disabled>📋 Copy All</button>
<button type="button" class="btn-pro-outline" id="stmCsv" disabled>⬇ Download CSV</button>
</div>
<div class="progress-wrap" id="stmProgWrap">
<div class="progress-bar"><i id="stmProgBar"></i></div>
<div class="progress-text" id="stmProgText">Working…</div>
</div>
<div class="results" id="stmResults">
<p class="result-head">🌱 Variants generated</p>
<div class="result-summary" id="stmSummary"></div>
<div class="result-grid" id="stmGrid"></div>
<div class="result-card" style="margin-top:1rem">
<div class="r-name">⚠️ Honest note: rule-based, not a dictionary</div>
<div class="r-stats">This tool applies transparent English suffix rules — it does <b>not</b> know irregular forms. It will not produce child→children, run→ran, or good→better. Review the output and add irregulars manually; the rules are documented in "How it works" below so you know exactly what was applied.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Expand as many keyword lists as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('stmShell');
  ToolPro.themeToggle(shell, document.getElementById('stmTheme'));

  var seedsEl = document.getElementById('stmSeeds');
  var btn = document.getElementById('stmBtn');
  var copyBtn = document.getElementById('stmCopy');
  var csvBtn = document.getElementById('stmCsv');
  var lastRows = [];

  var groups = {
    plural: document.getElementById('stmPlural'),
    verb: document.getElementById('stmVerb'),
    comp: document.getElementById('stmComp'),
    agent: document.getElementById('stmAgent'),
    adv: document.getElementById('stmAdv')
  };

  document.getElementById('stmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('stmPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var g = chip.dataset.g;
    var on = { plural: false, verb: false, comp: false, agent: false, adv: false };
    if(g === 'all') Object.keys(on).forEach(function(k){ on[k] = true; });
    else if(g === 'plural') on.plural = true;
    else if(g === 'verb') on.verb = true;
    else if(g === 'seo'){ on.plural = true; on.verb = true; on.adv = true; }
    Object.keys(on).forEach(function(k){ groups[k].checked = on[k]; });
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){ btn.disabled = !seedsEl.value.trim(); }
  seedsEl.addEventListener('input', refresh);

  function stemLastWord(seed){
    var words = seed.trim().split(/\s+/);
    return { head: words.slice(0, -1).join(' '), tail: words[words.length - 1].toLowerCase() };
  }
  function join(head, tail){ return head ? head + ' ' + tail : tail; }
  function dropE(w){ return w.replace(/e$/, ''); }
  function yToI(w){ return w.replace(/y$/, 'i'); }
  var ES_END = /(s|x|z|ch|sh)$/;

  function variantsFor(tail){
    var v = [];
    if(groups.plural.checked){
      if(ES_END.test(tail)) v.push({ w: tail + 'es', r: '+es after s/x/z/ch/sh' });
      else if(/[^aeiou]y$/.test(tail)) v.push({ w: yToI(tail) + 'ies', r: 'consonant+y → ies' });
      else v.push({ w: tail + 's', r: '+s' });
    }
    if(groups.verb.checked){
      v.push({ w: dropE(tail) + 'ing', r: tail !== dropE(tail) ? 'drop silent e +ing' : '+ing' });
      v.push({ w: tail + 'ed', r: '+ed' });
      v.push({ w: ES_END.test(tail) || /[^aeiou]y$/.test(tail) ? (/[^aeiou]y$/.test(tail) ? yToI(tail) + 'ies' : tail + 'es') : tail + 's', r: '3rd-person +s/+es' });
    }
    if(groups.comp.checked){
      if(/[^aeiou]y$/.test(tail)){ v.push({ w: yToI(tail) + 'ier', r: 'y→ier' }); v.push({ w: yToI(tail) + 'iest', r: 'y→iest' }); }
      else { v.push({ w: dropE(tail) + 'er', r: '+er' }); v.push({ w: dropE(tail) + 'est', r: '+est' }); }
    }
    if(groups.agent.checked){
      v.push({ w: dropE(tail) + 'er', r: 'agent +er' });
      v.push({ w: tail + 'or', r: 'agent +or' });
    }
    if(groups.adv.checked){
      if(/[^aeiou]y$/.test(tail)) v.push({ w: yToI(tail) + 'ily', r: 'y→ily' });
      else v.push({ w: tail + 'ly', r: '+ly' });
    }
    return v;
  }

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  btn.addEventListener('click', function(){
    var showRules = document.getElementById('stmRules').checked;
    var seeds = seedsEl.value.split(/\r?\n/).map(function(s){ return s.trim(); }).filter(Boolean);
    if(!seeds.length){ ToolPro.toast('Enter at least one seed keyword', 'err'); return; }
    lastRows = [];
    var grid = document.getElementById('stmGrid');
    grid.innerHTML = '';
    var total = 0;
    seeds.forEach(function(seed){
      var parts = stemLastWord(seed);
      var vars = variantsFor(parts.tail);
      var seen = {}, rows = [];
      vars.forEach(function(vv){
        var full = join(parts.head, vv.w);
        if(seen[full] || full === seed.trim().toLowerCase()) return;
        seen[full] = 1;
        rows.push({ seed: seed, variant: full, rule: vv.r });
        lastRows.push([seed, full, vv.w === parts.tail ? 'seed' : vv.r]);
      });
      total += rows.length;
      var card = document.createElement('div');
      card.className = 'result-card';
      var html = '<div class="r-name">🌱 ' + esc(seed) + ' <span class="r-stats">(' + rows.length + ' variants)</span></div>';
      html += '<table style="width:100%;font-size:.88rem;border-collapse:collapse;margin-top:.4rem"><thead><tr style="text-align:left;border-bottom:1px solid var(--tp-border)"><th style="padding:.3rem">Variant</th>' + (showRules ? '<th style="padding:.3rem">Rule applied</th>' : '') + '</tr></thead><tbody>';
      rows.forEach(function(r){
        html += '<tr style="border-bottom:1px solid var(--tp-border)"><td style="padding:.3rem">' + esc(r.variant) + '</td>' + (showRules ? '<td style="padding:.3rem;color:var(--tp-muted)">' + esc(r.rule) + '</td>' : '') + '</tr>';
      });
      html += '</tbody></table>';
      card.innerHTML = html;
      grid.appendChild(card);
    });
    document.getElementById('stmSummary').textContent = '✅ ' + seeds.length + ' seeds → ' + total + ' unique variants.';
    document.getElementById('stmResults').classList.add('show');
    copyBtn.disabled = false; csvBtn.disabled = false;
    ToolPro.toast('Variants generated', 'ok');
  });

  copyBtn.addEventListener('click', function(){
    var text = lastRows.map(function(r){ return r[1]; }).join('\n');
    var done = function(){ ToolPro.toast('All variants copied', 'ok'); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(done, function(){ ToolPro.toast('Copy failed', 'err'); }); }
  });

  csvBtn.addEventListener('click', function(){
    var csv = 'seed,variant,rule\n' + lastRows.map(function(r){
      return r.map(function(c){ return '"' + String(c).replace(/"/g, '""') + '"'; }).join(',');
    }).join('\n');
    ToolPro.download('data:text/csv;charset=utf-8,' + encodeURIComponent(csv), 'keyword-variants.csv');
    ToolPro.toast('CSV downloaded', 'ok');
  });

  refresh();
})();
</script>

## How it works

The tool stems the **last word** of each seed (so "compress pdf" stems "pdf", "budget planner" stems "planner") and applies these documented rules:

- **Plurals:** +s normally · +es after s, x, z, ch, sh ("box"→"boxes") · consonant+y becomes -ies ("city"→"cities")
- **Verb forms:** drop silent e then +ing ("make"→"making") · +ed · third-person +s/+es
- **Comparatives:** +er/+est ("fast"→"faster/fastest") · consonant+y becomes -ier/-iest ("happy"→"happier")
- **Agent nouns:** +er ("teach"→"teacher") and +or ("act"→"actor") — one will be wrong for any given word; delete it
- **Adverbs:** +ly ("quick"→"quickly") · consonant+y becomes -ily ("happy"→"happily")

Duplicates and unchanged seeds are removed automatically. **Honest limitation:** English is full of irregulars (child→children, run→ran, good→better) that no suffix rule can produce — this tool is rule-based, not a dictionary. Review each group and prune the misses.

## Everyday uses

- **Keyword research** — turn 20 seeds into 200 long-tail variants to check in your keyword tool.
- **Content clusters** — plural and question variants reveal subtopics for supporting posts.
- **PPC campaigns** — expand match lists with morphological variants cheaply.
- **E-commerce SEO** — plural forms ("running shoes" vs "running shoe") often have different search volumes.
- **Learning English morphology** — the rule column shows exactly how each form was built.
