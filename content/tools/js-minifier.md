---
title: "Free JavaScript Minifier — Compress JS with Terser Online"
description: "Minify JavaScript free in your browser with the real Terser engine — compress and optionally mangle, with before/after byte sizes. Private, no sign-up."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste your JavaScript and minify it with Terser — the same battle-tested engine used by professional build tools — running entirely in your browser. Compress mode removes dead weight and shortens expressions; mangle mode additionally renames local variables to shrink the output further. You get the minified code plus exact before/after byte sizes, and any syntax error in your code is shown clearly instead of failing silently.

<div class="tool-shell" id="jsmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JavaScript Minifier</h2>
<p>Real Terser minification in your browser — compress, mangle, and ship smaller scripts.</p>
</div>
<button type="button" class="theme-toggle" id="jsmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your JavaScript</p>
<textarea class="tool-input" id="jsmIn" rows="9" placeholder="Paste your JavaScript here — functions, classes, modules, any valid JS." spellcheck="false"></textarea>
<div class="hint" id="jsmCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Minification options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label class="toggle">
<input type="checkbox" id="jsmCompress" checked>
<span class="toggle-ui"></span>
Compress
</label>
<div class="hint">Removes dead code, folds constants, and shortens expressions. Safe for almost all code.</div>
</div>
<div class="setting">
<label class="toggle">
<input type="checkbox" id="jsmMangle">
<span class="toggle-ui"></span>
Mangle variable names
</label>
<div class="hint">⚠️ Renames local variables and functions to short names for extra savings. Can break code that relies on function names or dynamic property access — test after mangling.</div>
</div>
</div>
<div class="hint" id="jsmEngine">Checking minifier engine…</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Minify it</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jsmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
Minify JS
</button>
<button type="button" class="btn-pro-outline" id="jsmClear" disabled>Clear</button>
</div>
<div class="results" id="jsmResults">
<p class="result-head">✅ Your minified JavaScript</p>
<div class="result-summary" id="jsmSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="jsmStatus"></div>
<div class="r-error" id="jsmError" style="display:none"></div>
<textarea class="tool-output" id="jsmOut" rows="9" readonly spellcheck="false"></textarea>
<div class="r-stats" id="jsmStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="jsmCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>The Terser engine runs entirely in your browser — minify as much JavaScript as you like.</p>
</div>
</div>
</div>
<script src="https://unpkg.com/terser@5/dist/bundle.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('jsmShell');
  ToolPro.themeToggle(shell, document.getElementById('jsmTheme'));

  var inEl = document.getElementById('jsmIn');
  var outEl = document.getElementById('jsmOut');
  var resBox = document.getElementById('jsmResults');
  var statusEl = document.getElementById('jsmStatus');
  var errEl = document.getElementById('jsmError');
  var statsEl = document.getElementById('jsmStats');
  var summaryEl = document.getElementById('jsmSummary');
  var countEl = document.getElementById('jsmCount');
  var engineEl = document.getElementById('jsmEngine');
  var compChk = document.getElementById('jsmCompress');
  var mangChk = document.getElementById('jsmMangle');
  var btn = document.getElementById('jsmBtn');
  var clearBtn = document.getElementById('jsmClear');

  var engineReady = typeof Terser !== 'undefined';
  if(engineReady){
    engineEl.textContent = '✓ Minifier engine (Terser) loaded — everything runs locally in your browser.';
  } else {
    engineEl.textContent = '⚠️ The minifier engine (Terser) could not be loaded. Check your internet connection and reload this page.';
  }

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

  function showError(message){
    outEl.value = '';
    statusEl.innerHTML = '<span class="err-pill">✗ Minification failed</span>';
    errEl.style.display = 'block';
    errEl.textContent = message;
    statsEl.textContent = '';
    summaryEl.textContent = '⚠️ Nothing was minified — see the error above.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Minification failed — see the error', 'err');
  }

  btn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Paste some JavaScript first', 'err'); return; }
    if(typeof Terser === 'undefined'){
      showError('The minifier engine (Terser) could not be loaded, so nothing was minified. Check your internet connection and reload this page, then try again.');
      return;
    }
    var code = inEl.value;
    btn.disabled = true;
    Terser.minify(code, { compress: compChk.checked, mangle: mangChk.checked }).then(function(result){
      btn.disabled = false;
      if(result && result.error){
        showError('Terser reported an error: ' + (result.error.message || result.error));
        return;
      }
      var min = result && typeof result.code === 'string' ? result.code : '';
      outEl.value = min;
      errEl.style.display = 'none';
      statusEl.innerHTML = '<span class="ok-pill">✓ Minified</span>';
      var before = new Blob([code]).size;
      var after = new Blob([min]).size;
      var pct = before > 0 ? ((before - after) / before * 100).toFixed(1) : '0.0';
      statsEl.textContent = ToolPro.fmtBytes(before) + ' → ' + ToolPro.fmtBytes(after) + ' · saved ' + ToolPro.fmtBytes(before - after) + ' (' + pct + '%)' + (mangChk.checked ? ' · mangled' : '') + (compChk.checked ? ' · compressed' : '');
      summaryEl.textContent = '🎉 Your JavaScript is minified and ready to ship.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('JavaScript minified — ' + pct + '% smaller', 'ok');
    }).catch(function(err){
      btn.disabled = false;
      var msg = err && err.message ? err.message : String(err);
      var where = '';
      if(err && typeof err.line === 'number') where = ' (line ' + err.line + (typeof err.col === 'number' ? ', column ' + err.col : '') + ')';
      showError('Your JavaScript could not be parsed: ' + msg + where + ' — fix the syntax error and try again.');
    });
  });
  document.getElementById('jsmCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(outEl.value, 'JavaScript copied');
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

- **Faster websites:** smaller scripts mean quicker downloads and better Core Web Vitals scores.
- **Quick deploys without a build pipeline:** paste, minify, upload — no Node.js setup required.
- **Shrinking embeds and snippets:** compress analytics helpers, chat widgets, and one-off scripts before pasting them into a page.
- **Learning tool:** compare your code before and after mangling to see what a real minifier actually does.

## Frequently asked questions

### What is the difference between compress and mangle?

Compress rewrites your code into shorter equivalent forms — folding constants, dropping unreachable code, and simplifying conditions — without changing any names. Mangle goes further and renames local variables and functions to one-letter names, which saves the most bytes but can break code that depends on names (for example `eval`, string-based lookups, or Angular-style dependency injection).

### Is this the real Terser, or a simple whitespace remover?

The real thing. This tool loads the official Terser 5 library — the same engine behind most production build pipelines — and runs it locally in your browser. The only thing that travels over the network is the one-time library download; your code itself is never uploaded anywhere.

### What happens if my code has a syntax error?

Terser stops and this tool shows the error message, including the line and column when available, in the results area. Nothing is minified and nothing fails silently — fix the error in your editor and paste again.
