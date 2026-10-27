---
title: "Free JSON to TOML Converter — Convert JSON to TOML Online"
description: "Paste JSON and get clean TOML config output in your browser — tables, arrays of tables, inline arrays, and honest errors for unsupported types. Free, private."
category: text
date: 2026-10-27
draft: false
---

TOML is the config format behind Cargo, Hugo, and countless app settings files — but most data starts life as JSON. Paste JSON here and get clean TOML: nested objects become [tables], arrays of objects become [[arrays of tables]], and plain arrays stay inline. The serializer is hand-written in your browser, and it is honest about its limits: TOML has no null, no nested arrays, and no mixed-type arrays, so those inputs produce a clear error instead of silently wrong output. Exotic JSON values like dates-as-strings stay strings — TOML datetimes are not inferred.

<div class="tool-shell" id="jtmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JSON to TOML Converter</h2>
<p>Paste JSON, get clean TOML config — tables, arrays of tables, honest errors for unsupported types.</p>
</div>
<button type="button" class="theme-toggle" id="jtmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your JSON</p>
<div class="setting">
<label for="jtmIn">JSON input</label>
<textarea id="jtmIn" class="tool-input" rows="7" placeholder='Paste JSON here, e.g. {"title":"My App","port":8080,"debug":true,"database":{"host":"localhost"}}' style="resize:vertical;font-family:monospace;"></textarea>
<div class="hint">Works with objects, nested objects, arrays of objects, and plain arrays. The top level must be a JSON object.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output settings</p>
<div class="settings-panel">
<div class="preset-row" id="jtmPresets">
<button type="button" class="preset-chip active" data-style="standard">📄 Standard TOML</button>
<button type="button" class="preset-chip" data-style="compact">🗜️ Compact — inline tables</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="jtmIndent">Indentation for inline tables</label>
<select id="jtmIndent">
<option value="2" selected>2 spaces</option>
<option value="4">4 spaces</option>
</select>
<div class="hint">Only affects compact mode; standard mode uses table headers.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="jtmComments" checked><span></span> Add section comments for tables</label>
</div>
</div>
<div class="hint">Plain note: null values, nested arrays, and mixed-type arrays are unsupported in TOML and produce a clear error instead of wrong output.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jtmGoBtn">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
Generate TOML
</button>
<button type="button" class="btn-pro-outline" id="jtmCopyBtn">Copy output</button>
<button type="button" class="btn-pro-outline" id="jtmDownBtn">Download .toml</button>
<button type="button" class="btn-pro-outline" id="jtmClearBtn">Clear</button>
</div>
<div class="progress-wrap" id="jtmProgWrap">
<div class="progress-bar"><i id="jtmProgBar"></i></div>
<div class="progress-text" id="jtmProgText">Generating…</div>
</div>
<p id="jtmErr" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
<div class="results show" id="jtmResults">
<p class="result-head">⚙️ Generated TOML</p>
<div class="result-card">
<textarea id="jtmOut" class="tool-output" rows="9" readonly placeholder="Your TOML appears here…" style="resize:vertical;font-family:monospace;"></textarea>
<div class="r-stats" id="jtmStats" style="margin-top:.4rem;"></div>
</div>
<div class="result-summary" id="jtmSummary">Paste JSON above and hit Generate — nested objects become [tables], arrays of objects become [[arrays of tables]].</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This converter runs entirely in your browser — convert as much JSON as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('jtmShell');
ToolPro.themeToggle(shell,document.getElementById('jtmTheme'));
var style='standard';
var presets=document.getElementById('jtmPresets');
var errEl=document.getElementById('jtmErr');
presets.addEventListener('click',function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
  chip.classList.add('active'); style=chip.dataset.style;
});
function isObj(v){ return v!==null && typeof v==='object' && !Array.isArray(v); }
function bareKey(k){
  return /^[A-Za-z0-9_-]+$/.test(k) ? k : JSON.stringify(k);
}
function escStr(s){
  return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t') + '"';
}
function scalar(v, path){
  if(v===null) throw new Error('null is not supported in TOML (at ' + path + ') — remove it or give it a value.');
  var t=typeof v;
  if(t==='string') return escStr(v);
  if(t==='boolean') return v ? 'true' : 'false';
  if(t==='number'){
    if(!isFinite(v)) throw new Error('non-finite number at ' + path + ' is not supported in TOML.');
    return String(v);
  }
  throw new Error('unsupported value at ' + path + '.');
}
function typeOf(v){
  if(v===null) return 'null';
  if(Array.isArray(v)) return 'array';
  return typeof v;
}
function inlineValue(v, path){
  if(Array.isArray(v)){
    if(!v.length) return '[]';
    if(v.some(function(x){ return Array.isArray(x); })) throw new Error('nested arrays are not supported in TOML (at ' + path + ').');
    if(v.some(isObj)){
      if(style==='compact'){
        var parts=v.map(function(x, i){ return inlineTable(x, path + '[' + i + ']'); });
        return '[ ' + parts.join(', ') + ' ]';
      }
      throw new Error('array of objects at ' + path + ' must be a [[table]] — it cannot be inlined in standard mode.');
    }
    var first=typeOf(v[0]);
    if(v.some(function(x){ return typeOf(x)!==first; })) throw new Error('mixed-type arrays are not supported in TOML (at ' + path + ').');
    return '[ ' + v.map(function(x){ return scalar(x, path); }).join(', ') + ' ]';
  }
  if(isObj(v)) return inlineTable(v, path);
  return scalar(v, path);
}
function inlineTable(obj, path){
  var keys=Object.keys(obj);
  if(!keys.length) return '{}';
  return '{ ' + keys.map(function(k){ return bareKey(k) + ' = ' + inlineValue(obj[k], path + '.' + k); }).join(', ') + ' }';
}
function emitTable(obj, path, lines, comments){
  var scalars={}, tables={}, arrTables={};
  Object.keys(obj).forEach(function(k){
    var v=obj[k];
    if(Array.isArray(v) && v.length && v.every(isObj)) arrTables[k]=v;
    else if(isObj(v)) tables[k]=v;
    else scalars[k]=v;
  });
  Object.keys(scalars).forEach(function(k){
    lines.push(bareKey(k) + ' = ' + inlineValue(scalars[k], path ? path + '.' + k : k));
  });
  Object.keys(tables).forEach(function(k){
    var full=path ? path + '.' + k : k;
    lines.push('');
    if(comments) lines.push('# ' + full);
    lines.push('[' + full + ']');
    emitTable(tables[k], full, lines, comments);
  });
  Object.keys(arrTables).forEach(function(k){
    var full=path ? path + '.' + k : k;
    arrTables[k].forEach(function(item){
      lines.push('');
      if(comments) lines.push('# ' + full);
      lines.push('[[' + full + ']]');
      emitTable(item, full, lines, comments);
    });
  });
}
function buildTOML(){
  errEl.textContent='';
  var raw=document.getElementById('jtmIn').value.trim();
  if(!raw){ ToolPro.toast('Paste some JSON first','err'); return; }
  var data;
  try{ data=JSON.parse(raw); }
  catch(e){ errEl.textContent='Invalid JSON — '+e.message; ToolPro.toast('Invalid JSON','err'); return; }
  if(!isObj(data)){ errEl.textContent='Top level must be a JSON object for TOML output.'; ToolPro.toast('Top level must be an object','err'); return; }
  var wrap=document.getElementById('jtmProgWrap');
  wrap.classList.add('show');
  document.getElementById('jtmProgBar').style.width='40%';
  setTimeout(function(){
    try{
      var comments=document.getElementById('jtmComments').checked;
      var lines=[];
      if(style==='compact'){
        Object.keys(data).forEach(function(k){
          lines.push(bareKey(k) + ' = ' + inlineValue(data[k], k));
        });
      } else {
        emitTable(data, '', lines, comments);
      }
      var code=lines.join('\n').trim();
      document.getElementById('jtmOut').value=code;
      document.getElementById('jtmProgBar').style.width='100%';
      document.getElementById('jtmStats').textContent=code.split('\n').length+' lines · standard TOML';
      document.getElementById('jtmSummary').textContent='Done — TOML generated. Check the output: exotic JSON types (null, nested arrays, mixed arrays) are rejected, never silently converted.';
      ToolPro.toast('TOML generated','ok');
    }catch(ex){
      errEl.textContent='Could not convert: '+ex.message;
      ToolPro.toast('Conversion blocked — see error','err');
    }
    setTimeout(function(){ wrap.classList.remove('show'); document.getElementById('jtmProgBar').style.width='0%'; },400);
  },60);
}
document.getElementById('jtmGoBtn').addEventListener('click',buildTOML);
document.getElementById('jtmCopyBtn').addEventListener('click',function(){
  var v=document.getElementById('jtmOut').value; if(!v) return;
  ToolPro.copyText(v,'TOML copied to clipboard');
});
document.getElementById('jtmDownBtn').addEventListener('click',function(){
  var v=document.getElementById('jtmOut').value; if(!v) return;
  ToolPro.download('data:text/plain;charset=utf-8,' + encodeURIComponent(v), 'config.toml');
});
document.getElementById('jtmClearBtn').addEventListener('click',function(){
  document.getElementById('jtmIn').value=''; document.getElementById('jtmOut').value='';
  document.getElementById('jtmStats').textContent=''; errEl.textContent='';
});
})();
</script>

## How it works

Paste valid JSON and the converter walks it with a hand-written TOML serializer: scalar keys stay at the top, nested objects become [table] sections, and arrays of objects become [[arrays of tables]]. Plain arrays of strings, numbers, or booleans stay inline. In compact mode, nested objects become inline tables instead. Types TOML cannot express — null, nested arrays, mixed-type arrays, non-finite numbers — stop the conversion with a plain error naming the path, so you never get silently wrong config.

## Everyday uses

- **Hugo and Cargo configs** — turn a JSON sketch into a real .toml file.
- **App settings** — convert API-style JSON into the config format your tool expects.
- **Migrating configs** — move a project from JSON config to TOML without hand-rewriting.
- **Learning TOML** — paste familiar JSON and see exactly how tables and arrays map.
- **Sharing configs** — produce clean, commented TOML to paste into docs or PRs.

**Plain note:** JSON strings that look like dates stay strings — this converter never guesses that a string is a TOML datetime.
