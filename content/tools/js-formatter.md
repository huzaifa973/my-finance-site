---
title: "Free JS Formatter & Beautifier — Format JavaScript Online"
description: "Format and beautify JavaScript online free — fix indentation, minify JS, remove comments. 100% private: your code never leaves your browser."
category: text
date: 2026-10-17
draft: false
---

Paste minified, messy, or hard-to-read JavaScript and get clean, consistently indented code in one click — or flip the Minify switch to shrink it for production. The formatter runs entirely in your browser with a real tokenizer that understands strings, template literals, comments, and regular expressions, so your code’s logic is never altered. Free forever, no sign-up, nothing uploaded.

<div class="tool-shell" id="jsfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JS Formatter &amp; Beautifier</h2>
<p>Paste minified or messy JavaScript and get clean, readable code — or minify it back down.</p>
</div>
<button type="button" class="theme-toggle" id="jsfTheme">🌙 Dark</button>
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
<div class="setting">
<label for="jsfInput">JavaScript code</label>
<textarea id="jsfInput" class="tool-input" rows="6" placeholder="Paste minified or unformatted JavaScript here…" style="resize:vertical;"></textarea>
<div class="hint">Formatting happens live as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Format settings</p>
<div class="settings-panel">
<div class="preset-row" id="jsfPresets">
<button type="button" class="preset-chip active" data-i="2">2 spaces</button>
<button type="button" class="preset-chip" data-i="4">4 spaces</button>
<button type="button" class="preset-chip" data-i="8">8 spaces</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="jsfIndent">Indent size: <span class="val" id="jsfIndentVal">2 spaces</span></label>
<input type="range" id="jsfIndent" min="2" max="8" value="2">
<div class="hint">Spaces per indent level.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="jsfMinify"><span></span> Minify instead</label>
<div class="hint">Strip whitespace and shrink the code for production.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="jsfNoComments"><span></span> Remove comments</label>
<div class="hint">Drop // and /* */ comments from the output.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your formatted code</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jsfGo" disabled>Format JS</button>
<button type="button" class="btn-pro-outline" id="jsfCopy">Copy output</button>
<button type="button" class="btn-pro-outline" id="jsfDl">Download .js</button>
<button type="button" class="btn-pro-outline" id="jsfClear">Clear</button>
</div>
<div class="results show" id="jsfResults">
<p class="result-head">✨ Formatted result</p>
<textarea id="jsfOutput" class="tool-output" rows="6" readonly placeholder="Your formatted JavaScript will appear here…" style="resize:vertical;"></textarea>
<div class="result-summary" style="margin-top:.6rem;">
<span id="jsfStats" style="font-size:.9rem;">0 chars in → 0 chars out</span>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Beautify or minify as much JavaScript as you like — your code never leaves your browser.</p>
</div>
</div>
</div>

<script>
function formatJS(code, opts) {
  opts = opts || {};
  var indentSize = opts.indentSize || 2;
  if (indentSize < 1) indentSize = 1;
  if (indentSize > 8) indentSize = 8;
  var minify = !!opts.minify;
  var removeComments = !!opts.removeComments;

  var REGEX_AFTER = { '(':1, ',':1, '=':1, ':':1, '[':1, '!':1, '&':1, '|':1, '?':1,
    '{':1, '}':1, ';':1, '+':1, '-':1, '*':1, '%':1, '<':1, '>':1, '~':1, '^':1,
    'return':1, 'typeof':1, 'in':1, 'of':1, 'new':1, 'delete':1, 'void':1,
    'throw':1, 'case':1, 'do':1, 'else':1, 'instanceof':1 };
  var PAREN_SPACE = { 'if':1, 'for':1, 'while':1, 'switch':1, 'catch':1, 'function':1,
    'with':1, 'return':1, 'typeof':1, 'throw':1, 'delete':1, 'void':1 };
  var RBRACE_WORD = { 'else':1, 'catch':1, 'finally':1, 'while':1 };
  var BINARY = { '=':1, '==':1, '===':1, '!=':1, '!==':1, '<':1, '>':1, '<=':1, '>=':1,
    '+':1, '-':1, '*':1, '/':1, '%':1, '&&':1, '||':1, '&':1, '|':1, '^':1,
    '<<':1, '>>':1, '>>>':1, '**':1, '+=':1, '-=':1, '*=':1, '/=':1, '%=':1,
    '&=':1, '|=':1, '^=':1, '<<=':1, '>>=':1, '**=':1, '=>':1, '??':1 };

  function isDigit(c) { return c >= '0' && c <= '9'; }
  function isWordStart(c) { return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === '_' || c === '$'; }
  function isWordChar(c) { return isWordStart(c) || isDigit(c); }
  function repeat(s, n) { var r = ''; for (var k = 0; k < n; k++) r += s; return r; }
  function has(map, k) { return Object.prototype.hasOwnProperty.call(map, k); }

  // ---------- tokenizer ----------
  var tokens = [];
  var i = 0, n = code.length, lastWasNl = false;
  var prevSig = null; // previous significant token (drives regex detection)

  function readTemplate() {
    var out = '`'; i++;
    var depth = 0; // open ${ braces
    while (i < n) {
      var c = code[i];
      out += c;
      if (c === '\\') { if (i + 1 < n) out += code[i + 1]; i += 2; continue; }
      if (c === '$' && code[i + 1] === '{') { out += '{'; i += 2; depth++; continue; }
      if (depth > 0) {
        if (c === '{') { depth++; i++; continue; }
        if (c === '}') { depth--; i++; continue; }
        if (c === '`') { // nested template inside ${}
          var kk = i + 1, dd = 0;
          while (kk < n) {
            var c2 = code[kk]; out += c2;
            if (c2 === '\\') { if (kk + 1 < n) out += code[kk + 1]; kk += 2; continue; }
            if (c2 === '$' && code[kk + 1] === '{') { out += '{'; kk += 2; dd++; continue; }
            if (c2 === '}' && dd > 0) { dd--; kk++; continue; }
            if (c2 === '`' && dd === 0) { kk++; break; }
            kk++;
          }
          i = kk; continue;
        }
        if (c === '"' || c === "'") { // nested plain string inside ${}
          var q = c, k2 = i + 1, s2 = q;
          while (k2 < n) {
            var cc = code[k2]; s2 += cc;
            if (cc === '\\') { if (k2 + 1 < n) s2 += code[k2 + 1]; k2 += 2; continue; }
            if (cc === q) { k2++; break; }
            k2++;
          }
          out += s2.slice(1); i = k2; continue;
        }
      } else if (c === '`') { i++; break; }
      i++;
    }
    return out;
  }

  while (i < n) {
    var c = code[i];
    if (c === ' ' || c === '\t' || c === '\r' || c === '\v' || c === '\f') { i++; continue; }
    if (c === '\n') {
      tokens.push({ t: lastWasNl ? 'blank' : 'nl' });
      lastWasNl = true; i++; continue;
    }
    lastWasNl = false;
    if (c === '/' && code[i + 1] === '/') {
      var j = i + 2;
      while (j < n && code[j] !== '\n') j++;
      if (!removeComments) tokens.push({ t: 'comment', v: code.slice(i, j) });
      i = j; continue;
    }
    if (c === '/' && code[i + 1] === '*') {
      var j2 = i + 2;
      while (j2 < n && !(code[j2] === '*' && code[j2 + 1] === '/')) j2++;
      j2 = Math.min(n, j2 + 2);
      if (!removeComments) tokens.push({ t: 'comment', v: code.slice(i, j2) });
      i = j2; continue;
    }
    if (c === '/') {
      var canRegex = (prevSig === null) || has(REGEX_AFTER, prevSig);
      if (canRegex && code[i + 1] !== '/' && code[i + 1] !== '*') {
        var r = '/', k = i + 1, inClass = false;
        while (k < n) {
          var rc = code[k]; r += rc;
          if (rc === '\\') { if (k + 1 < n) r += code[k + 1]; k += 2; continue; }
          if (rc === '[') inClass = true;
          else if (rc === ']') inClass = false;
          else if (rc === '/' && !inClass) { k++; break; }
          else if (rc === '\n') { break; }
          k++;
        }
        while (k < n && isWordChar(code[k])) { r += code[k]; k++; }
        tokens.push({ t: 'regex', v: r });
        i = k; prevSig = '/re/'; continue;
      }
      if (code[i + 1] === '=') { tokens.push({ t: 'p', v: '/=' }); i += 2; }
      else { tokens.push({ t: 'p', v: '/' }); i++; }
      prevSig = '/'; continue;
    }
    if (c === '"' || c === "'") {
      var q3 = c, s3 = q3, k3 = i + 1;
      while (k3 < n) {
        var sc = code[k3]; s3 += sc;
        if (sc === '\\') { if (k3 + 1 < n) s3 += code[k3 + 1]; k3 += 2; continue; }
        if (sc === q3) { k3++; break; }
        k3++;
      }
      tokens.push({ t: 'str', v: s3 });
      i = k3; prevSig = 'STR'; continue;
    }
    if (c === '`') { tokens.push({ t: 'str', v: readTemplate() }); prevSig = 'STR'; continue; }
    if (isDigit(c) || (c === '.' && isDigit(code[i + 1]))) {
      var k4 = i, s4 = '';
      while (k4 < n && (isDigit(code[k4]) || code[k4] === '.')) { s4 += code[k4]; k4++; }
      if (code[k4] === 'e' || code[k4] === 'E') {
        s4 += code[k4]; k4++;
        if (code[k4] === '+' || code[k4] === '-') { s4 += code[k4]; k4++; }
        while (k4 < n && isDigit(code[k4])) { s4 += code[k4]; k4++; }
      }
      if (isWordStart(code[k4])) {
        while (k4 < n && isWordChar(code[k4])) { s4 += code[k4]; k4++; }
      }
      tokens.push({ t: 'num', v: s4 });
      i = k4; prevSig = 'NUM'; continue;
    }
    if (isWordStart(c)) {
      var k5 = i, s5 = '';
      while (k5 < n && isWordChar(code[k5])) { s5 += code[k5]; k5++; }
      tokens.push({ t: 'w', v: s5 });
      i = k5; prevSig = s5; continue;
    }
    var three = code.substr(i, 3), two = code.substr(i, 2), op = c;
    if (three === '===' || three === '!==' || three === '>>>' || three === '<<=' ||
        three === '>>=' || three === '**=' || three === '...') op = three;
    else if (two === '==' || two === '!=' || two === '<=' || two === '>=' || two === '&&' ||
        two === '||' || two === '++' || two === '--' || two === '+=' || two === '-=' ||
        two === '*=' || two === '%=' || two === '&=' || two === '|=' || two === '^=' ||
        two === '=>' || two === '<<' || two === '>>' || two === '**' || two === '?.' ||
        two === '??') op = two;
    tokens.push({ t: 'p', v: op });
    i += op.length; prevSig = op; continue;
  }

  // ---------- minify ----------
  if (minify) {
    var mout = '', mprev = null;
    tokens.forEach(function (tk) {
      if (tk.t === 'nl' || tk.t === 'blank') return;
      if (tk.t === 'comment') {
        var cv = tk.v, isLine = cv.charAt(1) === '/';
        if (mprev !== null && isWordChar(mprev.charAt(mprev.length - 1)) && !isLine) mout += ' ';
        mout += cv;
        if (isLine) { mout += '\n'; mprev = null; } else mprev = cv;
        return;
      }
      var v = tk.v;
      if (mprev !== null) {
        var need = false, pc = mprev.charAt(mprev.length - 1), nc = v.charAt(0);
        if (isWordChar(pc) && isWordChar(nc)) need = true;
        if ((pc === '+' || pc === '-') && (nc === '+' || nc === '-')) need = true;
        if (pc === '/' && nc === '/') need = true;
        mout += need ? ' ' : '';
      }
      mout += v; mprev = v;
    });
    return mout;
  }

  // ---------- beautify ----------
  var lines = [], line = '', atStart = true, indent = 0, parenDepth = 0;
  var ctx = [{ br: 'root', tern: 0, brace: false }];
  var nlPending = false, blankPending = false, spBefore = false;
  var lastSig = null;

  function ind() { return repeat(' ', indent * indentSize); }
  function ensure() { if (atStart) { line = ind(); atStart = false; } }
  function hardNl() { if (line !== '') lines.push(line.replace(/[ \t]+$/, '')); line = ''; atStart = true; }
  function trailSpace() { if (!atStart && line.charAt(line.length - 1) !== ' ') line += ' '; }
  function nextSig(from) {
    var nj = from, nx = null;
    while (nj < tokens.length) {
      if (tokens[nj].t !== 'nl' && tokens[nj].t !== 'blank') { nx = tokens[nj]; break; }
      nj++;
    }
    return nx;
  }
  function doPending() {
    if (!nlPending && !blankPending) return;
    nlPending = false;
    var inP = false, hasB = false, q;
    for (q = 0; q < ctx.length; q++) {
      if (ctx[q].br === '(') { inP = true; if (ctx[q].brace) hasB = true; }
    }
    if (inP && !hasB) { blankPending = false; return; } // collapse inside braceless parens
    if (!atStart) hardNl();
    if (blankPending) {
      blankPending = false;
      if (lines.length && lines[lines.length - 1] !== '') lines.push('');
    }
  }

  for (var ti = 0; ti < tokens.length; ti++) {
    var tk = tokens[ti];
    if (tk.t === 'nl') { nlPending = true; continue; }
    if (tk.t === 'blank') { nlPending = true; blankPending = true; continue; }
    var nxt = nextSig(ti + 1);
    var wasStart, need, pv;

    if (tk.t === 'comment') {
      doPending();
      if (tk.v.charAt(1) === '/') { // line comment: newline comes from source
        if (!atStart) hardNl();
        ensure(); line += tk.v;
        lastSig = null; // next line starts fresh, no leading space
      } else {
        wasStart = atStart;
        ensure();
        if (!wasStart) trailSpace();
        line += tk.v; line += ' ';
        lastSig = tk;
      }
      continue;
    }

    if (tk.t === 'w' || tk.t === 'num' || tk.t === 'str' || tk.t === 'regex') {
      doPending();
      wasStart = atStart;
      ensure();
      need = false;
      if (spBefore) { if (!wasStart) line += ' '; spBefore = false; }
      else if (!wasStart && lastSig) {
        pv = lastSig.v;
        if (lastSig.t === 'p') {
          if (pv === ')' || pv === ']' || pv === '}') need = true;
          else if (',;{[(.'.indexOf(pv) !== -1 || pv === '?.') need = false;
          else if (pv === '!' || pv === '~' || pv === '++' || pv === '--' || pv === '...' || lastSig.unary) need = false;
          else need = true; // after operators and ':'
        } else if (lastSig.t !== 'comment') need = true;
      }
      if (need && line.charAt(line.length - 1) === ' ') need = false;
      if (need) line += ' ';
      line += tk.v;
      lastSig = tk; continue;
    }

    var v = tk.v;
    if (v === '(') {
      doPending();
      wasStart = atStart;
      ensure();
      if (spBefore) { if (!wasStart) line += ' '; spBefore = false; }
      else if (!wasStart && lastSig && lastSig.t === 'w' && has(PAREN_SPACE, lastSig.v)) line += ' ';
      else if (!wasStart && lastSig && lastSig.t === 'p' && lastSig.v === ':') line += ' ';
      line += '(';
      parenDepth++; ctx.push({ br: '(', tern: 0, brace: false });
      lastSig = tk; continue;
    }
    if (v === ')') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += ')';
      parenDepth--; if (ctx.length > 1) ctx.pop();
      lastSig = tk; continue;
    }
    if (v === '[') {
      doPending();
      wasStart = atStart;
      ensure();
      if (spBefore) { if (!wasStart) line += ' '; spBefore = false; }
      else if (!wasStart && lastSig && lastSig.t === 'p' && lastSig.v === ':') line += ' ';
      else if (!wasStart && lastSig && lastSig.t === 'w' && has(PAREN_SPACE, lastSig.v)) line += ' ';
      line += '[';
      ctx.push({ br: '[', tern: 0, brace: false });
      lastSig = tk; continue;
    }
    if (v === ']') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += ']';
      if (ctx.length > 1) ctx.pop();
      lastSig = tk; continue;
    }
    if (v === '{') {
      doPending();
      wasStart = atStart;
      ensure();
      if (!wasStart && lastSig && !(lastSig.t === 'p' && '([{,;'.indexOf(lastSig.v) !== -1)) line += ' ';
      line += '{';
      spBefore = false;
      for (var q2 = 0; q2 < ctx.length; q2++) if (ctx[q2].br === '(') ctx[q2].brace = true;
      hardNl(); indent++; ctx.push({ br: '{', tern: 0, brace: false });
      lastSig = tk; continue;
    }
    if (v === '}') {
      nlPending = false; blankPending = false; spBefore = false;
      indent--; if (indent < 0) indent = 0;
      if (ctx.length > 1 && ctx[ctx.length - 1].br === '{') ctx.pop();
      if (!atStart) hardNl();
      ensure(); line += '}';
      if (nxt && nxt.t === 'w' && has(RBRACE_WORD, nxt.v)) line += ' ';
      else if (nxt && nxt.t === 'p' && (nxt.v === ',' || nxt.v === ';' || nxt.v === '.' || nxt.v === ')' || nxt.v === ']')) { /* attach */ }
      else hardNl();
      lastSig = tk; continue;
    }
    if (v === ';') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += ';';
      if (parenDepth > 0) line += ' '; else hardNl();
      lastSig = tk; continue;
    }
    if (v === ',') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += ', ';
      lastSig = tk; continue;
    }
    if (v === ':') {
      var top = ctx[ctx.length - 1];
      nlPending = false; blankPending = false;
      ensure();
      if (top.tern > 0) { top.tern--; trailSpace(); line += ':'; spBefore = true; }
      else {
        spBefore = false;
        line += ':';
        if (lastSig && lastSig.t === 'w' && (lastSig.v === 'case' || lastSig.v === 'default')) hardNl();
      }
      lastSig = tk; continue;
    }
    if (v === '?') {
      doPending();
      wasStart = atStart;
      ensure();
      ctx[ctx.length - 1].tern++;
      if (!wasStart) trailSpace();
      line += '?'; spBefore = true;
      lastSig = tk; continue;
    }
    if (v === '?.') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += '?.';
      lastSig = tk; continue;
    }
    if (v === '.') {
      nlPending = false; blankPending = false; spBefore = false;
      ensure(); line += '.';
      lastSig = tk; continue;
    }
    if (v === '...') {
      doPending(); ensure(); line += '...'; spBefore = false;
      lastSig = tk; continue;
    }
    if (v === '!' || v === '~' || v === '++' || v === '--') {
      doPending();
      wasStart = atStart;
      ensure();
      if (spBefore) { if (!wasStart) line += ' '; spBefore = false; }
      line += v;
      lastSig = tk; continue;
    }
    if (v === '+' || v === '-') {
      doPending();
      wasStart = atStart;
      ensure();
      var unary = !lastSig || has(REGEX_AFTER, lastSig.v);
      if (unary) {
        if (spBefore) { if (!wasStart) line += ' '; spBefore = false; }
        else if (!wasStart && lastSig && lastSig.t === 'w') line += ' ';
        line += v;
        lastSig = { t: 'p', v: v, unary: true }; continue;
      }
      else { if (!wasStart) trailSpace(); line += v; spBefore = true; }
      lastSig = tk; continue;
    }
    if (has(BINARY, v)) {
      doPending();
      wasStart = atStart;
      ensure();
      if (!wasStart) trailSpace();
      line += v; spBefore = true;
      lastSig = tk; continue;
    }
    // unknown punct: emit attached
    doPending(); ensure(); line += v; spBefore = false;
    lastSig = tk;
  }
  hardNl();
  return lines.join('\n');
}
(function(){
var shell = document.getElementById('jsfShell');
ToolPro.themeToggle(shell, document.getElementById('jsfTheme'));
var input = document.getElementById('jsfInput');
var output = document.getElementById('jsfOutput');
var goBtn = document.getElementById('jsfGo');
var indentR = document.getElementById('jsfIndent');
var minT = document.getElementById('jsfMinify');
var noCT = document.getElementById('jsfNoComments');
var presets = document.getElementById('jsfPresets');
ToolPro.bindSlider(indentR, document.getElementById('jsfIndentVal'), function(v){ return v + ' spaces'; });
function jsfMarkChips(){
var cur = indentR.value;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.toggle('active', c.getAttribute('data-i') === cur); });
}
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
indentR.value = chip.getAttribute('data-i');
indentR.dispatchEvent(new Event('input'));
jsfMarkChips();
});
indentR.addEventListener('input', jsfMarkChips);
function jsfOpts(){ return { indentSize: parseInt(indentR.value, 10), minify: minT.checked, removeComments: noCT.checked }; }
function jsfUpdateGo(){ goBtn.textContent = minT.checked ? 'Minify JS' : 'Format JS'; goBtn.disabled = !input.value.trim(); }
function jsfStats(a, b){ document.getElementById('jsfStats').textContent = a.length + ' chars in \u2192 ' + b.length + ' chars out'; }
function jsfRun(silent){
var src = input.value;
jsfUpdateGo();
if (!src.trim()) { output.value = ''; jsfStats('', ''); return; }
var res;
try { res = formatJS(src, jsfOpts()); }
catch (err) {
output.value = src;
jsfStats(src, src);
ToolPro.toast('Could not fully parse \u2014 showing original', 'err');
return;
}
output.value = res;
jsfStats(src, res);
if (!silent) ToolPro.toast(minT.checked ? 'JavaScript minified' : 'JavaScript formatted', 'ok');
}
input.addEventListener('input', function(){ jsfRun(true); });
indentR.addEventListener('change', function(){ jsfRun(true); });
minT.addEventListener('change', function(){ jsfRun(true); jsfUpdateGo(); });
noCT.addEventListener('change', function(){ jsfRun(true); });
goBtn.addEventListener('click', function(){ jsfRun(false); });
document.getElementById('jsfCopy').addEventListener('click', function(){
if (!output.value) return;
ToolPro.copyText(output.value, 'Formatted code copied');
});
document.getElementById('jsfDl').addEventListener('click', function(){
if (!output.value) return;
var blob = new Blob([output.value], { type: 'text/javascript' });
var url = URL.createObjectURL(blob);
ToolPro.download(url, minT.checked ? 'minified.js' : 'formatted.js');
setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
});
document.getElementById('jsfClear').addEventListener('click', function(){
input.value = ''; output.value = '';
jsfStats('', ''); jsfUpdateGo(); input.focus();
});
jsfUpdateGo();
})();
</script>

## How it works

- Paste or type JavaScript into the input box — formatting runs live in your browser as you type.
- Pick an indent size (2, 4, or 8 spaces), or flip on **Minify instead** to shrink code for production.
- Tick **Remove comments** to strip `//` and `/* */` comments from the output.
- The tokenizer understands strings, template literals with `${}`, comments, and regex literals — so division vs. regex is never confused and your code’s meaning stays intact.
- Copy the result, or download it straight to a `.js` file.

## Everyday uses

- **Read minified code:** paste a minified bundle and actually understand what it does.
- **Prep code for review:** consistent indentation before sharing, committing, or pasting into docs.
- **Shrink for production:** minify and strip comments before deploying to save bytes.
- **Decode snippets:** reformat dense Stack Overflow answers into readable, learnable code.
- **Spot structural bugs:** proper indentation makes unbalanced braces obvious at a glance.
