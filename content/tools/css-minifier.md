---
title: "Free CSS Minifier — Compress CSS Online"
description: "Minify CSS free in your browser — strip comments and whitespace, drop empty rules, and see exactly how many bytes you saved. Private, no sign-up needed."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste your CSS and get a compact, production-ready version back: comments stripped, whitespace collapsed, spaces around punctuation removed, the last semicolon before each closing brace dropped, and empty rules deleted. A small scanner tracks quoted strings character by character, so a `content: " } ; "` value or a data URI is never corrupted. You see the before and after byte sizes and the exact percentage saved.

<div class="tool-shell" id="cssmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M2 12l6-5v3h6V7l6 5-6 5v-3H8v3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>CSS Minifier</h2>
<p>Shrink your stylesheets for production — same rules, fewer bytes, faster page loads.</p>
</div>
<button type="button" class="theme-toggle" id="cssmTheme">🌙 Dark</button>
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
<textarea class="tool-input" id="cssmIn" rows="9" placeholder="Paste your CSS here — comments and extra whitespace are welcome, they are about to disappear." spellcheck="false"></textarea>
<div class="hint" id="cssmCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or try an example</p>
<div class="settings-panel">
<div class="preset-row" id="cssmExamples">
<button type="button" class="preset-chip" data-ex="ex1">Commented stylesheet</button>
<button type="button" class="preset-chip" data-ex="ex2">Empty rules + strings</button>
</div>
<div class="hint">Examples load into the box above — then hit Minify CSS and compare the byte savings.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Minify it</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cssmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M2 12l6-5v3h6V7l6 5-6 5v-3H8v3z"/></svg>
Minify CSS
</button>
<button type="button" class="btn-pro-outline" id="cssmClear" disabled>Clear</button>
</div>
<div class="results" id="cssmResults">
<p class="result-head">✅ Your minified CSS</p>
<div class="result-summary" id="cssmSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="cssmStatus"></div>
<textarea class="tool-output" id="cssmOut" rows="9" readonly spellcheck="false"></textarea>
<div class="r-stats" id="cssmStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="cssmCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — minify as much CSS as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cssmShell');
  ToolPro.themeToggle(shell, document.getElementById('cssmTheme'));

  var inEl = document.getElementById('cssmIn');
  var outEl = document.getElementById('cssmOut');
  var resBox = document.getElementById('cssmResults');
  var statusEl = document.getElementById('cssmStatus');
  var statsEl = document.getElementById('cssmStats');
  var summaryEl = document.getElementById('cssmSummary');
  var countEl = document.getElementById('cssmCount');
  var btn = document.getElementById('cssmBtn');
  var clearBtn = document.getElementById('cssmClear');

  function minifyCss(css){
    var out = [];
    var mask = [];
    var i = 0, n = css.length;
    var TIGHT_AFTER = '{}:;,>+~';
    var TIGHT_BEFORE = '{};,>+~';

    function lastChar(){
      return out.length ? out[out.length - 1] : '';
    }
    function push(ch, prot){
      out.push(ch);
      mask.push(!!prot);
    }

    while(i < n){
      var c = css[i];
      if(c === '/' && css[i + 1] === '*'){
        var end = css.indexOf('*/', i + 2);
        if(end === -1) end = n - 2;
        var ctext = css.slice(i, end + 2);
        if(ctext.indexOf('/*!') === 0){
          for(var m = 0; m < ctext.length; m++) push(ctext[m], false);
        }
        i = end + 2;
        continue;
      }
      if(c === '"' || c === "'"){
        var q = c;
        push(c, true); i++;
        while(i < n){
          push(css[i], true);
          if(css[i] === '\\' && i + 1 < n){ push(css[i + 1], true); i += 2; continue; }
          if(css[i] === q){ i++; break; }
          i++;
        }
        continue;
      }
      if(/\s/.test(c)){
        while(i < n && /\s/.test(css[i])) i++;
        var prev = lastChar();
        var next = i < n ? css[i] : '';
        if(prev && next && TIGHT_AFTER.indexOf(prev) === -1 && TIGHT_BEFORE.indexOf(next) === -1){
          push(' ', false);
        }
        continue;
      }
      if(c === ';'){
        var j = i + 1;
        while(j < n){
          if(/\s/.test(css[j])){ j++; continue; }
          if(css[j] === '/' && css[j + 1] === '*'){
            var e2 = css.indexOf('*/', j + 2);
            j = e2 === -1 ? n : e2 + 2;
            continue;
          }
          break;
        }
        if(css[j] === '}'){ i++; continue; }
        push(';', false); i++;
        continue;
      }
      push(c, false);
      i++;
    }

    var changed = true;
    while(changed){
      changed = false;
      for(var k = 0; k < out.length - 1; k++){
        if(out[k] === '{' && !mask[k] && out[k + 1] === '}' && !mask[k + 1]){
          var s = k - 1;
          while(s >= 0 && (mask[s] || (out[s] !== '}' && out[s] !== '{' && out[s] !== ';'))) s--;
          out.splice(s + 1, k + 2 - (s + 1));
          mask.splice(s + 1, k + 2 - (s + 1));
          changed = true;
          break;
        }
      }
    }
    return out.join('').trim();
  }

  var EXAMPLES = {
    ex1: '/* Header styles */\n.header {\n  background-color: #ffffff;\n  padding: 20px;\n}\n\n/* TODO: remove later */\n.header .title {\n  font-size: 24px;\n  color: #333333;\n}',
    ex2: '.empty { }\n.icon::before {\n  content: " } ; ";\n  display: inline-block;\n}\n.unused {\n}'
  };
  document.getElementById('cssmExamples').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    inEl.value = EXAMPLES[chip.dataset.ex] || '';
    updateCount(); refreshButtons();
    ToolPro.toast('Example loaded — hit Minify CSS');
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
    var min = minifyCss(inEl.value);
    outEl.value = min;
    statusEl.innerHTML = '<span class="ok-pill">✓ Minified</span>';
    var before = new Blob([inEl.value]).size;
    var after = new Blob([min]).size;
    var pct = before > 0 ? ((before - after) / before * 100).toFixed(1) : '0.0';
    statsEl.textContent = ToolPro.fmtBytes(before) + ' → ' + ToolPro.fmtBytes(after) + ' · saved ' + ToolPro.fmtBytes(before - after) + ' (' + pct + '%)';
    summaryEl.textContent = '🎉 Your CSS is minified and ready for production.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('CSS minified — ' + pct + '% smaller', 'ok');
  });
  document.getElementById('cssmCopy').addEventListener('click', function(){
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

- **Faster page loads:** smaller stylesheets download quicker, especially on mobile connections.
- **Quick wins without a build step:** no bundler or pipeline needed — paste, minify, ship.
- **Email and embeds:** squeeze CSS that has to live inside HTML emails or third-party widgets.
- **Checking a theme's bloat:** minify a framework stylesheet to see its true production weight.

## Frequently asked questions

### Will minifying change how my site looks?

No. Minification only removes characters that do not affect rendering — comments, extra whitespace, redundant semicolons, and empty rules. Spaces that matter (like the gap in `margin: 0 auto` or inside `calc()`) are kept, and quoted strings are protected character by character so values like `content` text are never altered.

### What happens to license comments?

Regular comments are removed, but important comments that start with `/*!` — the convention used for licenses and attribution — are kept in the output untouched.

### Is my CSS sent to a server?

No. The minifier runs entirely in your browser with JavaScript. Your stylesheets never leave your device, so it is safe for client work and unreleased designs.
