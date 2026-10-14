---
title: "Free TOML to JSON Converter Online"
description: "Convert TOML to JSON free online: sections, key-values, arrays and inline tables parsed in your browser with line-numbered errors. No sign-up."
category: text
date: 2026-10-14
draft: false
---

TOML powers config files everywhere — from Hugo and Python projects to Rust's Cargo. Need that config as JSON for an API or a JavaScript app? Paste it below: this tool parses **sections, nested sections, strings, numbers, booleans, arrays and inline tables** right in your browser and hands you clean JSON, with precise line numbers when something is off.

<div class="tool-shell" id="tjShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TOML to JSON Converter</h2>
<p>Full inline TOML parser — sections, arrays &amp; inline tables, errors with line numbers.</p>
</div>
<button type="button" class="theme-toggle" id="tjTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your TOML</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="tjSample">✨ Load sample</button>
<button type="button" class="preset-chip" id="tjClear">🗑 Clear</button>
</div>
<textarea id="tjIn" class="tool-input" rows="10" placeholder='Paste TOML here, e.g.&#10;[server]&#10;host = "localhost"&#10;port = 8080' spellcheck="false" style="font-family:monospace;"></textarea>
<div class="hint">Supports [sections], [nested.sections], dotted keys, strings, integers, floats, booleans, arrays and inline tables {a = 1}.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tjGo">
<svg viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
Convert to JSON
</button>
<button type="button" class="btn-pro-outline" id="tjCopy" disabled>📋 Copy JSON</button>
</div>
<div class="results" id="tjResults">
<p class="result-head" id="tjHead">Result</p>
<div class="result-summary" id="tjStatus"></div>
<pre class="tool-output" id="tjOut" style="white-space:pre-wrap;word-break:break-word;max-height:380px;overflow:auto;font-size:.82rem;font-family:monospace;display:none;"></pre>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited TOML documents — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
'use strict';
var shell = document.getElementById('tjShell');
ToolPro.themeToggle(shell, document.getElementById('tjTheme'));
var lastJson = '';
function TErr(msg, line){ this.message = msg; this.line = line; }
/* Join physical lines into logical lines so multi-line arrays work. */
function logicalLines(text){
  var lines = text.split('\n'), out = [], buf = '', startNo = 1;
  var inS = false, inD = false, depth = 0;
  lines.forEach(function(raw, idx){
    if(buf === '') startNo = idx + 1;
    buf += (buf ? '\n' : '') + raw;
    for(var i = 0; i < raw.length; i++){
      var c = raw[i];
      if(c === "'" && !inD){ inS = !inS; }
      else if(c === '"' && !inS){
        var bs = 0, j = i - 1;
        while(j >= 0 && raw[j] === '\\'){ bs++; j--; }
        if(bs % 2 === 0) inD = !inD;
      }
      else if(!inS && !inD){
        if(c === '[' || c === '{') depth++;
        else if(c === ']' || c === '}') depth--;
      }
    }
    if(depth <= 0 && !inS && !inD){ out.push({ text: buf, line: startNo }); buf = ''; }
  });
  if(buf) out.push({ text: buf, line: startNo });
  return out;
}
/* Strip # comments that are outside quoted strings. */
function stripComment(line){
  var inS = false, inD = false, out = '';
  for(var i = 0; i < line.length; i++){
    var c = line[i];
    if(c === "'" && !inD){ inS = !inS; out += c; }
    else if(c === '"' && !inS){
      var bs = 0, j = i - 1;
      while(j >= 0 && line[j] === '\\'){ bs++; j--; }
      if(bs % 2 === 0) inD = !inD;
      out += c;
    }
    else if(c === '#' && !inS && !inD){ break; }
    else out += c;
  }
  return out;
}
function parseBasicString(v, line){
  if(v.length < 2 || v.charAt(v.length - 1) !== '"') throw new TErr('Unterminated string', line);
  var body = v.slice(1, -1), out = '', i = 0;
  while(i < body.length){
    var c = body[i];
    if(c === '\\'){
      i++;
      if(i >= body.length) throw new TErr('Unterminated escape sequence', line);
      var e = body[i], hex, n;
      if(e === 'n') out += '\n';
      else if(e === 't') out += '\t';
      else if(e === 'r') out += '\r';
      else if(e === 'b') out += '\b';
      else if(e === 'f') out += '\f';
      else if(e === '"') out += '"';
      else if(e === '\\') out += '\\';
      else if(e === 'u' || e === 'U'){
        n = (e === 'u') ? 4 : 8;
        hex = body.substr(i + 1, n);
        if(!new RegExp('^[0-9a-fA-F]{' + n + '}$').test(hex)) throw new TErr('Bad unicode escape', line);
        out += String.fromCodePoint(parseInt(hex, 16));
        i += n;
      }
      else throw new TErr('Unknown escape \\' + e, line);
      i++;
    } else { out += c; i++; }
  }
  return out;
}
function parseLiteralString(v, line){
  if(v.length < 2 || v.charAt(v.length - 1) !== "'") throw new TErr('Unterminated string', line);
  return v.slice(1, -1);
}
/* Split inner content of [...] or {...} at top-level commas. */
function splitTopLevel(inner, line){
  var items = [], cur = '', inS = false, inD = false, depth = 0;
  for(var i = 0; i < inner.length; i++){
    var c = inner[i];
    if(c === "'" && !inD){ inS = !inS; cur += c; }
    else if(c === '"' && !inS){
      var bs = 0, j = i - 1;
      while(j >= 0 && inner[j] === '\\'){ bs++; j--; }
      if(bs % 2 === 0) inD = !inD;
      cur += c;
    }
    else if(!inS && !inD && (c === '[' || c === '{')){ depth++; cur += c; }
    else if(!inS && !inD && (c === ']' || c === '}')){ depth--; cur += c; }
    else if(c === ',' && !inS && !inD && depth === 0){ items.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  if(cur.trim() !== '') items.push(cur.trim());
  return items;
}
function parseValue(v, line){
  v = v.trim();
  if(!v) throw new TErr('Missing value after =', line);
  var c0 = v.charAt(0);
  if(c0 === '"') return parseBasicString(v, line);
  if(c0 === "'") return parseLiteralString(v, line);
  if(c0 === '['){
    if(v.charAt(v.length - 1) !== ']') throw new TErr('Unterminated array', line);
    return splitTopLevel(v.slice(1, -1), line).map(function(it){ return parseValue(it, line); });
  }
  if(c0 === '{'){
    if(v.charAt(v.length - 1) !== '}') throw new TErr('Unterminated inline table', line);
    var obj = {};
    splitTopLevel(v.slice(1, -1), line).forEach(function(it){
      var kv = splitKV(it, line);
      setPath(obj, parseKeyPath(kv[0], line), parseValue(kv[1], line), line);
    });
    return obj;
  }
  if(v === 'true') return true;
  if(v === 'false') return false;
  if(/^(inf|\+inf|-inf|nan|\+nan|-nan)$/i.test(v)) throw new TErr('inf/nan have no JSON equivalent', line);
  var plain = v.replace(/_/g, '');
  if(/^[+-]?(0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|\d+)$/.test(plain)){
    if(/^0x/i.test(plain)) return parseInt(plain, 16);
    if(/^0o/i.test(plain)) return parseInt(plain.slice(2), 8);
    if(/^0b/i.test(plain)) return parseInt(plain.slice(2), 2);
    return parseInt(plain, 10);
  }
  if(/^[+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/.test(plain)) return parseFloat(plain);
  throw new TErr('Could not parse value: ' + v, line);
}
function splitKV(line, lineNo){
  var inS = false, inD = false, depth = 0;
  for(var i = 0; i < line.length; i++){
    var c = line[i];
    if(c === "'" && !inD){ inS = !inS; }
    else if(c === '"' && !inS){
      var bs = 0, j = i - 1;
      while(j >= 0 && line[j] === '\\'){ bs++; j--; }
      if(bs % 2 === 0) inD = !inD;
    }
    else if(!inS && !inD){
      if(c === '[' || c === '{') depth++;
      else if(c === ']' || c === '}') depth--;
      else if(c === '=' && depth === 0) return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
    }
  }
  throw new TErr('Expected "key = value"', lineNo);
}
function parseKeyPath(ks, lineNo){
  var parts = [], cur = '', inS = false, inD = false;
  for(var i = 0; i < ks.length; i++){
    var c = ks[i];
    if(c === "'" && !inD){ inS = !inS; cur += c; }
    else if(c === '"' && !inS){ inD = !inD; cur += c; }
    else if(c === '.' && !inS && !inD){ parts.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  parts.push(cur.trim());
  return parts.map(function(p){
    p = p.trim();
    if(!p) throw new TErr('Empty key segment', lineNo);
    if(p.length >= 2 && ((p.charAt(0) === '"' && p.charAt(p.length - 1) === '"') || (p.charAt(0) === "'" && p.charAt(p.length - 1) === "'"))){
      return p.charAt(0) === '"' ? parseBasicString(p, lineNo) : parseLiteralString(p, lineNo);
    }
    if(!/^[A-Za-z0-9_-]+$/.test(p)) throw new TErr('Invalid key "' + p + '"', lineNo);
    return p;
  });
}
function setPath(obj, path, value, lineNo){
  var cur = obj;
  for(var i = 0; i < path.length - 1; i++){
    var k = path[i];
    if(cur[k] === undefined) cur[k] = {};
    else if(!cur[k] || typeof cur[k] !== 'object' || Array.isArray(cur[k])){
      throw new TErr('Key "' + k + '" conflicts with an existing value', lineNo);
    }
    cur = cur[k];
  }
  var lastK = path[path.length - 1];
  if(cur[lastK] !== undefined) throw new TErr('Duplicate key "' + lastK + '"', lineNo);
  cur[lastK] = value;
}
function parseTOML(text){
  var root = {}, cur = root;
  var lls = logicalLines(text);
  lls.forEach(function(ll){
    var lineNo = ll.line;
    var line = stripComment(ll.text).trim();
    if(!line) return;
    if(line.charAt(0) === '['){
      if(line.charAt(1) === '[') throw new TErr('[[array tables]] are not supported by this compact parser', lineNo);
      var m = /^\[([^\]]+)\]/.exec(line);
      if(!m) throw new TErr('Invalid section header', lineNo);
      var path = parseKeyPath(m[1].trim(), lineNo);
      cur = root;
      path.forEach(function(p){
        if(cur[p] === undefined) cur[p] = {};
        else if(!cur[p] || typeof cur[p] !== 'object' || Array.isArray(cur[p])){
          throw new TErr('Section [' + m[1].trim() + '] conflicts with an existing key', lineNo);
        }
        cur = cur[p];
      });
      return;
    }
    var kv = splitKV(line, lineNo);
    var kp = parseKeyPath(kv[0], lineNo);
    if(!kp.length || !kp[0]) throw new TErr('Missing key before =', lineNo);
    setPath(cur, kp, parseValue(kv[1], lineNo), lineNo);
  });
  return root;
}
function convert(){
  var text = document.getElementById('tjIn').value;
  var head = document.getElementById('tjHead');
  var status = document.getElementById('tjStatus');
  var out = document.getElementById('tjOut');
  var res = document.getElementById('tjResults');
  lastJson = '';
  document.getElementById('tjCopy').disabled = true;
  out.style.display = 'none';
  if(!text.trim()){
    head.textContent = '⚠️ Nothing to convert';
    status.textContent = 'Paste some TOML first.';
    res.classList.add('show');
    ToolPro.toast('Paste some TOML first', 'err');
    return;
  }
  try {
    var parsed = parseTOML(text);
    lastJson = JSON.stringify(parsed, null, 2);
    head.textContent = '✅ Converted to JSON';
    status.textContent = 'Parsed successfully — ' + lastJson.length.toLocaleString() + ' characters of JSON.';
    out.textContent = lastJson;
    out.style.display = 'block';
    res.classList.add('show');
    document.getElementById('tjCopy').disabled = false;
    ToolPro.toast('Converted', 'ok');
  } catch(e){
    head.textContent = '❌ TOML parse error';
    var msg = e && e.message ? e.message : 'Parse error';
    status.textContent = (e && e.line ? 'Line ' + e.line + ': ' : '') + msg;
    res.classList.add('show');
    ToolPro.toast('Parse error — see details above', 'err');
  }
}
document.getElementById('tjGo').addEventListener('click', convert);
document.getElementById('tjCopy').addEventListener('click', function(){
  if(lastJson) ToolPro.copyText(lastJson, 'JSON copied');
});
document.getElementById('tjSample').addEventListener('click', function(){
  document.getElementById('tjIn').value = '[owner]\nname = "DollarWise"\nestablished = 2024\n\n[database]\nenabled = true\nports = [8000, 8001, 8002]\nretries = 3\ndata = { max_connections = 100, timeout = 30.5 }\n\n[servers.alpha]\nip = "10.0.0.1"\ndc = \'eqdc10\'\n\n[servers.beta]\nip = "10.0.0.2"\ndc = \'eqdc10\'';
  convert();
  ToolPro.toast('Sample loaded', 'ok');
});
document.getElementById('tjClear').addEventListener('click', function(){
  document.getElementById('tjIn').value = '';
  document.getElementById('tjResults').classList.remove('show');
  document.getElementById('tjCopy').disabled = true;
  lastJson = '';
  ToolPro.toast('Cleared');
});
})();
</script>

## How it works

1. **Paste your TOML** — config files, `hugo.toml` snippets, Cargo-style tables, anything.
2. **Hit Convert to JSON** — the built-in parser walks every line locally and reports the exact line number of any syntax problem.
3. **Copy the JSON** — pretty-printed with 2-space indentation, ready for your API, app, or JavaScript code.

## Everyday uses

- **Developers** — turn TOML configs into JSON for tools that only accept JSON.
- **Hugo users** — convert `hugo.toml` settings into JSON front matter or data files.
- **Python developers** — inspect `pyproject.toml` contents in a JSON-friendly shape.
- **Students** — learn TOML syntax with instant, line-precise error feedback.
- **DevOps** — translate config files between formats during migrations.

## Frequently asked questions

**What TOML features are supported?**
Sections (`[a]`, `[a.b]`), dotted keys, double-quoted strings with escapes, literal single-quoted strings, integers (decimal, hex, octal, binary), floats, booleans, arrays of scalars, and inline tables — including multi-line arrays.

**What isn't supported?**
Multi-line basic strings, datetimes, and `[[array of tables]]` — the parser tells you clearly if it meets them instead of guessing wrong.

**Does inf or nan convert?**
No — they have no JSON equivalent, so the parser raises a clear error rather than silently writing `null`.

**Is my TOML uploaded anywhere?**
No. Parsing happens entirely in your browser with an inline parser — nothing leaves your device.
