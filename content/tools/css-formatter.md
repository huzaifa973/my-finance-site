---
title: "Free CSS Formatter — Beautify & Pretty-Print CSS Online"
description: "Beautify messy CSS free in your browser — every selector on its own line, declarations neatly indented, @media blocks handled. Private, no sign-up needed."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste cramped, minified, or just plain messy CSS and get it back beautifully structured: each selector on its own line, one declaration per line indented by two spaces, and a blank line between rules. Nested blocks like `@media` are indented one level deeper so the structure stays obvious. Comments and quoted strings are preserved exactly — the parser skips over them instead of splitting on their contents.

<div class="tool-shell" id="cssfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 4h18v2H3zM9 9h12v2H9zM9 14h12v2H9zM3 19h18v2H3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>CSS Formatter</h2>
<p>Pretty-print messy or minified CSS — selectors lined up, declarations indented, rules easy to scan.</p>
</div>
<button type="button" class="theme-toggle" id="cssfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your CSS</p>
<textarea class="tool-input" id="cssfIn" rows="9" placeholder="Paste your CSS here, e.g. body{margin:0;color:#333}h1,h2{font-weight:700}" spellcheck="false"></textarea>
<div class="hint" id="cssfCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or try an example</p>
<div class="settings-panel">
<div class="preset-row" id="cssfExamples">
<button type="button" class="preset-chip" data-ex="ex1">Cramped rules</button>
<button type="button" class="preset-chip" data-ex="ex2">@media block</button>
<button type="button" class="preset-chip" data-ex="ex3">Button + hover</button>
</div>
<div class="hint">Examples load into the box above — then hit Format CSS to see the cleanup.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Beautify it</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cssfBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3 4h18v2H3zM9 9h12v2H9zM9 14h12v2H9zM3 19h18v2H3z"/></svg>
Format CSS
</button>
<button type="button" class="btn-pro-outline" id="cssfClear" disabled>Clear</button>
</div>
<div class="results" id="cssfResults">
<p class="result-head">✅ Your beautified CSS</p>
<div class="result-summary" id="cssfSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="cssfStatus"></div>
<div class="r-error" id="cssfError" style="display:none"></div>
<textarea class="tool-output" id="cssfOut" rows="11" readonly spellcheck="false"></textarea>
<div class="r-stats" id="cssfStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="cssfCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — beautify as much CSS as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cssfShell');
  ToolPro.themeToggle(shell, document.getElementById('cssfTheme'));

  var inEl = document.getElementById('cssfIn');
  var outEl = document.getElementById('cssfOut');
  var resBox = document.getElementById('cssfResults');
  var statusEl = document.getElementById('cssfStatus');
  var errEl = document.getElementById('cssfError');
  var statsEl = document.getElementById('cssfStats');
  var summaryEl = document.getElementById('cssfSummary');
  var countEl = document.getElementById('cssfCount');
  var btn = document.getElementById('cssfBtn');
  var clearBtn = document.getElementById('cssfClear');

  function parseCss(css){
    var i = 0, n = css.length;
    function parseItems(){
      var items = [];
      var buf = '';
      var depth = 0;
      function flushDecl(){
        var t = buf.trim();
        if(t) items.push({ type: 'decl', text: t });
        buf = '';
      }
      while(i < n){
        var c = css[i];
        if(c === '"' || c === "'"){
          var q = c;
          buf += c; i++;
          while(i < n){
            if(css[i] === '\\' && i + 1 < n){ buf += css[i] + css[i + 1]; i += 2; continue; }
            buf += css[i];
            if(css[i] === q){ i++; break; }
            i++;
          }
          continue;
        }
        if(c === '/' && css[i + 1] === '*'){
          var end = css.indexOf('*/', i + 2);
          if(end === -1) end = n - 2;
          var ctext = css.slice(i, end + 2);
          if(buf.trim() === '') items.push({ type: 'comment', text: ctext });
          else buf += ctext;
          i = end + 2;
          continue;
        }
        if(c === '('){ depth++; buf += c; i++; continue; }
        if(c === ')'){ depth--; buf += c; i++; continue; }
        if(depth === 0 && c === ';'){ flushDecl(); i++; continue; }
        if(depth === 0 && c === '{'){
          var prelude = buf.trim();
          buf = '';
          i++;
          var children = parseItems();
          items.push({ type: 'rule', prelude: prelude, children: children });
          continue;
        }
        if(depth === 0 && c === '}'){
          flushDecl();
          i++;
          return items;
        }
        buf += c; i++;
      }
      flushDecl();
      return items;
    }
    return parseItems();
  }

  function splitSelectors(prelude){
    var parts = [];
    var buf = '', depth = 0, i = 0;
    while(i < prelude.length){
      var c = prelude[i];
      if(c === '"' || c === "'"){
        var q = c;
        buf += c; i++;
        while(i < prelude.length){
          if(prelude[i] === '\\' && i + 1 < prelude.length){ buf += prelude[i] + prelude[i + 1]; i += 2; continue; }
          buf += prelude[i];
          if(prelude[i] === q){ i++; break; }
          i++;
        }
        continue;
      }
      if(c === '(') depth++;
      if(c === ')') depth--;
      if(c === ',' && depth === 0){
        parts.push(buf.trim());
        buf = ''; i++;
        continue;
      }
      buf += c; i++;
    }
    if(buf.trim()) parts.push(buf.trim());
    return parts;
  }

  function formatDecl(text){
    var idx = text.indexOf(':');
    if(idx === -1) return text.replace(/\s+/g, ' ') + ';';
    var prop = text.slice(0, idx).trim();
    var val = text.slice(idx + 1).trim().replace(/\s+/g, ' ');
    return prop + ': ' + val + ';';
  }

  function renderItems(items, indent){
    var pad = '';
    for(var s = 0; s < indent; s++) pad += ' ';
    var out = '';
    items.forEach(function(it, idx){
      var text;
      if(it.type === 'comment'){
        text = pad + it.text;
      } else if(it.type === 'decl'){
        text = pad + formatDecl(it.text);
      } else {
        var sels = splitSelectors(it.prelude.replace(/\s+/g, ' '));
        var head = sels.map(function(sel){ return pad + sel; }).join(',\n');
        if(!it.children.length) text = head + ' {}';
        else text = head + ' {\n' + renderItems(it.children, indent + 2) + '\n' + pad + '}';
      }
      if(idx > 0) out += (it.type === 'rule' ? '\n\n' : '\n');
      out += text;
    });
    return out;
  }

  function countRules(items){
    var total = 0;
    items.forEach(function(it){
      if(it.type === 'rule') total += 1 + countRules(it.children);
    });
    return total;
  }

  function formatCss(css){
    var items = parseCss(css);
    return { css: renderItems(items, 0), rules: countRules(items) };
  }

  var EXAMPLES = {
    ex1: 'body{margin:0;padding:0;font-family:Arial,sans-serif}h1,h2{color:#333;line-height:1.2}',
    ex2: '@media (max-width:600px){.card{padding:10px;margin:0 auto}.card h2{font-size:18px}}',
    ex3: '.btn{display:inline-block;background:#2563eb;color:#fff;border-radius:8px}.btn:hover{background:#1d4ed8}'
  };
  document.getElementById('cssfExamples').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    inEl.value = EXAMPLES[chip.dataset.ex] || '';
    updateCount(); refreshButtons();
    ToolPro.toast('Example loaded — hit Format CSS');
  });

  function updateCount(){
    var t = inEl.value;
    var words = t.trim() ? t.trim().split(/\s+/).length : 0;
    countEl.textContent = t.length.toLocaleString() + ' characters · ' + words.toLocaleString() + ' words';
  }
  function refreshButtons(){
    var has = inEl.value.trim().length > 0;
    btn.disabled = !has; clearBtn.disabled = !has;
  }
  inEl.addEventListener('input', function(){ updateCount(); refreshButtons(); });

  btn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Paste some CSS first', 'err'); return; }
    errEl.style.display = 'none';
    try{
      var result = formatCss(inEl.value);
      outEl.value = result.css;
      statusEl.innerHTML = '<span class="ok-pill">✓ Beautified</span>';
      var before = new Blob([inEl.value]).size;
      var after = new Blob([result.css]).size;
      var lineCount = result.css === '' ? 0 : result.css.split('\n').length;
      statsEl.textContent = result.rules + (result.rules === 1 ? ' rule' : ' rules') + ' · ' + lineCount + ' lines · ' + ToolPro.fmtBytes(before) + ' → ' + ToolPro.fmtBytes(after);
      summaryEl.textContent = '🎉 Your CSS is beautified and ready to paste back into your project.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('CSS beautified', 'ok');
    }catch(err){
      statusEl.innerHTML = '<span class="err-pill">✗ Something went wrong</span>';
      errEl.style.display = 'block';
      errEl.textContent = 'The CSS could not be parsed — check for unbalanced braces or an unfinished comment, then try again.';
      summaryEl.textContent = '⚠️ Fix the issue above, then try again.';
      resBox.classList.add('show');
      ToolPro.toast('Could not parse that CSS', 'err');
    }
  });
  document.getElementById('cssfCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(outEl.value, 'CSS copied');
  });
  clearBtn.addEventListener('click', function(){
    inEl.value = ''; outEl.value = '';
    resBox.classList.remove('show');
    updateCount(); refreshButtons();
  });

  updateCount(); refreshButtons();
})();
</script>

## Everyday uses

- **Untangling minified CSS:** downloaded a theme or library and need to tweak it? Beautify first, edit second.
- **Code reviews:** consistent indentation makes stylesheet diffs readable instead of a wall of text.
- **Learning CSS:** seeing one declaration per line shows exactly which properties each selector sets.
- **Debugging overrides:** a clean layout makes it far easier to spot duplicate or conflicting rules.

## Frequently asked questions

### Does it handle @media and other nested blocks?

Yes. Blocks nested inside `@media`, `@supports`, or `@keyframes` are indented one extra level, so the nesting structure stays visible. Grouped selectors (like `h1, h2`) are split so each selector gets its own line.

### Will it change what my CSS does?

No. Formatting only changes whitespace and line breaks — selectors, properties, and values keep their meaning, and quoted strings and comments are preserved word for word. The one cosmetic touch is normalizing each declaration to `property: value;` with a single space after the colon.

### Is my CSS sent to a server?

No. The parser and formatter run entirely in your browser with JavaScript. Your stylesheets — including work for clients — never leave your device.
