---
title: "Free URL Encoder & Decoder Online"
description: "Encode and decode URLs free in your browser — component or full-URL mode, one-click swap, friendly errors for bad input. Private, no sign-up, no limits."
category: text
date: 2026-10-12
draft: false
---

## How it works

URLs can only contain a safe set of characters — everything else has to be percent-encoded. Paste text or a link, pick a mode, and encode or decode instantly. Component mode is for encoding a single value (like a search query or a parameter); full-URL mode keeps a complete link's structure (`: / ? & =`) readable while fixing spaces and other unsafe characters. Tap an example chip to see it in action, and use Swap to flip the result back into the input.

<div class="tool-shell" id="urlcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>URL Encoder / Decoder</h2>
<p>Percent-encode text for safe URLs, or decode encoded links back to readable text.</p>
</div>
<button type="button" class="theme-toggle" id="urlcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter text or a URL</p>
<textarea class="tool-input" id="urlcIn" rows="6" placeholder="Type or paste text / a URL here…" spellcheck="false"></textarea>
<div class="hint" id="urlcCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick a mode, or try an example</p>
<div class="settings-panel">
<div class="preset-row" id="urlcModes">
<button type="button" class="preset-chip active" data-mode="component">Component — for values &amp; query params</button>
<button type="button" class="preset-chip" data-mode="full">Full URL — keep : / ? &amp; = readable</button>
</div>
<div class="preset-row" id="urlcExamples">
<button type="button" class="preset-chip" data-ex="ex1">hello world &amp; friends</button>
<button type="button" class="preset-chip" data-ex="ex2">café ☕ 100%</button>
<button type="button" class="preset-chip" data-ex="ex3">price: $5 + tax?</button>
<button type="button" class="preset-chip" data-ex="ex4">a full link</button>
</div>
<div class="hint">Component mode encodes everything except letters, digits, and - _ . ! ~ * ' ( ). Full-URL mode also leaves the structural characters of a link alone.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Encode or decode</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="urlcEncode" disabled>
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
Encode
</button>
<button type="button" class="btn-pro-outline" id="urlcDecode" disabled>Decode</button>
<button type="button" class="btn-pro-outline" id="urlcSwap" disabled>Swap ⇄</button>
<button type="button" class="btn-pro-outline" id="urlcClear" disabled>Clear</button>
</div>
<div class="results" id="urlcResults">
<p class="result-head">✅ Your result</p>
<div class="result-summary" id="urlcSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="urlcStatus"></div>
<div class="r-error" id="urlcError" style="display:none"></div>
<textarea class="tool-output" id="urlcOut" rows="6" readonly spellcheck="false"></textarea>
<div class="r-stats" id="urlcStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="urlcCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — encode and decode as much as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('urlcShell');
  ToolPro.themeToggle(shell, document.getElementById('urlcTheme'));

  var inEl = document.getElementById('urlcIn');
  var outEl = document.getElementById('urlcOut');
  var resBox = document.getElementById('urlcResults');
  var statusEl = document.getElementById('urlcStatus');
  var errEl = document.getElementById('urlcError');
  var statsEl = document.getElementById('urlcStats');
  var summaryEl = document.getElementById('urlcSummary');
  var countEl = document.getElementById('urlcCount');
  var encodeBtn = document.getElementById('urlcEncode');
  var decodeBtn = document.getElementById('urlcDecode');
  var swapBtn = document.getElementById('urlcSwap');
  var clearBtn = document.getElementById('urlcClear');
  var mode = 'component';

  document.getElementById('urlcModes').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#urlcModes .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    ToolPro.toast(mode === 'full' ? 'Full URL mode' : 'Component mode');
  });

  var EXAMPLES = {
    ex1: 'hello world & friends',
    ex2: 'café ☕ 100%',
    ex3: 'price: $5 + tax?',
    ex4: 'https://example.com/search?q=dollar wise&lang=en'
  };
  document.getElementById('urlcExamples').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    inEl.value = EXAMPLES[chip.dataset.ex] || '';
    updateCount(); refreshButtons();
    ToolPro.toast('Example loaded — hit Encode or Decode');
  });

  function updateCount(){
    var t = inEl.value;
    var words = t.trim() ? t.trim().split(/\s+/).length : 0;
    countEl.textContent = t.length.toLocaleString() + ' characters · ' + words.toLocaleString() + ' words';
  }
  function refreshButtons(){
    var has = inEl.value.trim().length > 0;
    encodeBtn.disabled = !has; decodeBtn.disabled = !has; clearBtn.disabled = !has;
    swapBtn.disabled = !(inEl.value.length > 0 || outEl.value.length > 0);
  }
  inEl.addEventListener('input', function(){ updateCount(); refreshButtons(); });

  function showResult(out, label){
    outEl.value = out;
    errEl.style.display = 'none';
    statusEl.innerHTML = '<span class="ok-pill">✓ ' + label + '</span>';
    statsEl.textContent = inEl.value.length.toLocaleString() + ' characters → ' + out.length.toLocaleString() + ' characters · mode: ' + (mode === 'full' ? 'Full URL' : 'Component');
    summaryEl.textContent = '🎉 Done — copy the result or hit Swap to work on it further.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    refreshButtons();
  }

  function showError(message){
    outEl.value = '';
    statusEl.innerHTML = '<span class="err-pill">✗ Could not decode</span>';
    errEl.style.display = 'block';
    errEl.textContent = message;
    statsEl.textContent = '';
    summaryEl.textContent = '⚠️ Nothing was produced — see the explanation above.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Invalid input for decoding', 'err');
    refreshButtons();
  }

  encodeBtn.addEventListener('click', function(){
    if(!inEl.value){ ToolPro.toast('Enter some text first', 'err'); return; }
    try{
      var out = mode === 'full' ? encodeURI(inEl.value) : encodeURIComponent(inEl.value);
      showResult(out, 'Encoded');
      ToolPro.toast('Encoded', 'ok');
    }catch(err){
      showError('Encoding failed — the input contains an unpaired special character. Remove it and try again.');
    }
  });
  decodeBtn.addEventListener('click', function(){
    if(!inEl.value){ ToolPro.toast('Enter some text first', 'err'); return; }
    try{
      var out = mode === 'full' ? decodeURI(inEl.value) : decodeURIComponent(inEl.value);
      showResult(out, 'Decoded');
      ToolPro.toast('Decoded', 'ok');
    }catch(err){
      showError('That is not valid percent-encoding — somewhere a % sign is not followed by two hex digits (0–9, A–F). Check for a stray % in the input; a literal percent sign in real text should appear as %25.');
    }
  });
  swapBtn.addEventListener('click', function(){
    var t = inEl.value;
    inEl.value = outEl.value;
    outEl.value = t;
    updateCount(); refreshButtons();
    ToolPro.toast('Swapped input and result');
  });
  document.getElementById('urlcCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(outEl.value, 'Result copied');
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

- **Building links with queries:** encode a search term or product name before dropping it into a URL parameter.
- **Reading ugly links:** decode a shared URL full of `%20` and `%26` to see what it actually says before clicking.
- **Debugging APIs:** check exactly how a value will be encoded before it reaches your endpoint.
- **Sharing file names:** encode names with spaces, accents, or emoji so links to them do not break.

## Frequently asked questions

### What is the difference between Component and Full URL mode?

Component mode (the browser's `encodeURIComponent`) encodes everything that could break a single value — including `/ ? & =` — so it is the right choice for one query parameter, form value, or path segment. Full URL mode (`encodeURI`) assumes the input is a whole link and leaves its structure intact, only fixing spaces, quotes, non-ASCII characters, and similar unsafe characters.

### Why did decoding fail with an error?

Decoding requires every `%` to be followed by exactly two hex digits, like `%20` for a space. If the text contains a bare `%` — common when someone pastes text that was never encoded — the decoder cannot guess what was meant, so this tool explains the problem instead of guessing. Encode the text first, or replace the stray `%` with `%25`.

### Is anything sent to a server?

No. Encoding and decoding use your browser's built-in functions and run entirely on your device. Links, tokens, and text you paste never leave your browser.
