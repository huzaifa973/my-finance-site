---
title: "Free JSON to TypeScript Converter — Generate Interfaces Instantly"
description: "Paste JSON and generate clean TypeScript interfaces or type aliases in seconds. Nested inference, smart optionals, null-safe. Free, private, no sign-up."
category: text
date: 2026-10-13
draft: false
---

Turn any JSON into clean TypeScript interfaces or type aliases — nested objects, arrays, nulls and mixed types all handled automatically. Everything runs locally in your browser, so your API responses and data samples never touch a server.

<div class="tool-shell" id="jtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JSON to TypeScript Converter</h2>
<p>Paste JSON, get ready-to-use TypeScript interfaces — nested inference, smart optionals, null-safe. All in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="jtTheme">🌙 Dark</button>
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
<label for="jtIn">JSON input</label>
<textarea id="jtIn" class="tool-input" rows="7" placeholder='Paste JSON here, e.g. {"name":"Ada","age":36,"tags":["dev","ts"]}' style="resize:vertical;font-family:monospace;"></textarea>
<div class="hint">Works with objects, arrays of objects, nested structures — anything valid JSON.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output settings</p>
<div class="settings-panel">
<div class="preset-row" id="jtPresets">
<button type="button" class="preset-chip active" data-style="interface">🧩 Interface</button>
<button type="button" class="preset-chip" data-style="type">📝 Type alias</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="jtRoot">Root type name</label>
<input id="jtRoot" type="text" class="tool-input" value="Root">
<div class="hint">Nested objects become Root + their key name (e.g. Address).</div>
</div>
<div class="setting">
<label for="jtOptional">Property optionality</label>
<select id="jtOptional">
<option value="smart" selected>Smart — ? when a key is missing in some items</option>
<option value="required">All required</option>
<option value="optional">All optional (?)</option>
</select>
<div class="hint">Smart mode is best for arrays of objects with uneven shapes.</div>
</div>
<div class="setting">
<label for="jtIndent">Indentation</label>
<select id="jtIndent">
<option value="2" selected>2 spaces</option>
<option value="4">4 spaces</option>
<option value="tab">Tab</option>
</select>
<div class="hint">Matches your project's formatting style.</div>
</div>
<div class="setting"><span class="t-label">Export keyword</span><label class="toggle"><input type="checkbox" id="jtExport" checked><span class="track"></span><span class="lbl">Add <code>export</code> to every type</span></label><div class="hint">Uncheck for quick playground pastes.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jtGoBtn">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
Generate TypeScript
</button>
<button type="button" class="btn-pro-outline" id="jtCopyBtn">Copy output</button>
<button type="button" class="btn-pro-outline" id="jtClearBtn">Clear</button>
</div>
<div class="progress-wrap" id="jtProgWrap">
<div class="progress-bar"><i id="jtProgBar"></i></div>
<div class="progress-text" id="jtProgText">Generating…</div>
</div>
<p id="jtErr" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
<div class="results show" id="jtResults">
<p class="result-head">⚙️ Generated TypeScript</p>
<div class="result-card">
<textarea id="jtOut" class="tool-output" rows="9" readonly placeholder="Your TypeScript interfaces appear here…" style="resize:vertical;font-family:monospace;"></textarea>
<div class="r-stats" id="jtStats" style="margin-top:.4rem;"></div>
</div>
<div class="result-summary" id="jtSummary">Paste JSON above and hit Generate — nested objects become their own named interfaces.</div>
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
var shell=document.getElementById('jtShell');
ToolPro.themeToggle(shell,document.getElementById('jtTheme'));
var style='interface';
var presets=document.getElementById('jtPresets');
var errEl=document.getElementById('jtErr');
presets.addEventListener('click',function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
  chip.classList.add('active'); style=chip.dataset.style;
});
function pascal(s){
  var clean=String(s).replace(/[^A-Za-z0-9_$]/g,' ').trim().split(/\s+/).filter(Boolean);
  var out=clean.map(function(w){return w.charAt(0).toUpperCase()+w.slice(1);}).join('')||'Type';
  if(/^[0-9]/.test(out)) out='N'+out;
  return out;
}
function safeKey(k){
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
}
function uniq(a){ var o={},r=[]; a.forEach(function(x){ if(!o[x]){o[x]=1;r.push(x);} }); return r; }
function arrType(t){
  return (/[|<>(),\s]/.test(t)) ? '('+t+')[]' : t+'[]';
}
function isPlainObj(v){ return v!==null && typeof v==='object' && !Array.isArray(v); }
function mergeArrayObjects(arr,key,ctx){
  var raw=String(key);
  var base=pascal((raw.length>3 && /s$/.test(raw) && !/ss$/.test(raw)) ? raw.slice(0,-1) : raw)||'Item';
  var name=ctx.nameFor(base);
  var keySet={}, samples={}, missing={};
  arr.forEach(function(o){ Object.keys(o).forEach(function(k){ keySet[k]=1; (samples[k]=samples[k]||[]).push(o[k]); }); });
  Object.keys(keySet).forEach(function(k){ missing[k]=arr.some(function(o){ return !(k in o); }); });
  var prevMerge=ctx.isArrayMerge, prevS=ctx.samplesFor, prevM=ctx.missingFor;
  ctx.isArrayMerge=true;
  ctx.samplesFor=function(n,k){ return samples[k]||[]; };
  ctx.missingFor=function(n,k){ return !!missing[k]; };
  var merged={}; Object.keys(keySet).forEach(function(k){ merged[k]=samples[k][0]; });
  ctx.emit(name,merged);
  ctx.isArrayMerge=prevMerge; ctx.samplesFor=prevS; ctx.missingFor=prevM;
  return name+'[]';
}
function infer(val,key,ctx){
  if(val===null) return 'null';
  if(Array.isArray(val)){
    if(!val.length) return 'any[]';
    if(val.every(isPlainObj)) return mergeArrayObjects(val,key,ctx);
    var elemTypes=uniq(val.map(function(v){ return infer(v,key,ctx); }));
    var inner=elemTypes.length===1 ? elemTypes[0] : elemTypes.join(' | ');
    return arrType(inner);
  }
  var t=typeof val;
  if(t==='string') return 'string';
  if(t==='number') return 'number';
  if(t==='boolean') return 'boolean';
  if(t==='object'){
    var name=ctx.nameFor(key);
    ctx.emit(name,val);
    return name;
  }
  return 'any';
}
function emitInterface(name,obj,ctx){
  if(ctx.done[name]) return;
  ctx.done[name]=1;
  var fields=[];
  Object.keys(obj).forEach(function(k){
    var haveSamples = ctx.isArrayMerge && ctx.samplesFor(name,k) && ctx.samplesFor(name,k).length;
    var samples = haveSamples ? ctx.samplesFor(name,k) : [obj[k]];
    var types;
    if(haveSamples && samples.length>1 && samples.every(isPlainObj)){
      types=[mergeArrayObjects(samples,k,ctx).replace(/\[\]$/,'')];
    } else {
      types=uniq(samples.map(function(v){ return infer(v,k,ctx); }));
    }
    var ty=types.length===1? types[0] : types.join(' | ');
    var missing = haveSamples && ctx.missingFor(name,k);
    var hasNull=types.indexOf('null')!==-1;
    var opt=ctx.optMode==='optional' || (ctx.optMode==='smart' && (missing || hasNull));
    if(hasNull && ctx.optMode==='smart'){
      ty=uniq(types.filter(function(x){ return x!=='null'; })).join(' | ') || 'any';
      opt=true;
    }
    if(ctx.optMode==='required') opt=false;
    fields.push({k:k,ty:ty,opt:opt});
  });
  ctx.blocks[name]=fields;
}
function buildJSON(){
  errEl.textContent='';
  var raw=document.getElementById('jtIn').value.trim();
  if(!raw){ ToolPro.toast('Paste some JSON first','err'); return; }
  var data;
  try{ data=JSON.parse(raw); }
  catch(e){ errEl.textContent='Invalid JSON — '+e.message; ToolPro.toast('Invalid JSON','err'); return; }
  var wrap=document.getElementById('jtProgWrap');
  wrap.classList.add('show');
  document.getElementById('jtProgBar').style.width='40%';
  setTimeout(function(){
    try{
      var rootName=pascal((document.getElementById('jtRoot').value||'Root').trim()||'Root');
      var optMode=document.getElementById('jtOptional').value;
      var indSel=document.getElementById('jtIndent').value;
      var ind=indSel==='tab'? '\t' : new Array((parseInt(indSel,10)||2)+1).join(' ');
      var exp=document.getElementById('jtExport').checked ? 'export ' : '';
      var ctx={ blocks:{}, done:{}, used:{}, optMode:optMode, isArrayMerge:false, samplesFor:null, missingFor:null, nameFor:null, emit:null };
      ctx.nameFor=function(key){
        var base=pascal(key);
        var n=base,i=2;
        while(ctx.used[n]){ n=base+(i++); }
        ctx.used[n]=1; return n;
      };
      ctx.emit=function(name,val){ emitInterface(name,val,ctx); };
      var topType;
      if(Array.isArray(data)){
        topType = data.length ? infer(data, rootName, ctx) : 'any[]';
      } else if(data!==null && typeof data==='object'){
        var rn=ctx.nameFor(rootName);
        ctx.emit(rn,data);
        topType=rn;
      } else {
        topType=infer(data,rootName,ctx);
      }
      var kw = style==='interface' ? 'interface' : 'type';
      var order=Object.keys(ctx.blocks);
      var out=[];
      order.forEach(function(n){
        var f=ctx.blocks[n];
        if(style==='interface'){
          out.push(exp+'interface '+n+' {');
          f.forEach(function(x){ out.push(ind+safeKey(x.k)+(x.opt?'?':'')+': '+x.ty+';'); });
          out.push('}');
        } else {
          out.push(exp+'type '+n+' = {');
          f.forEach(function(x){ out.push(ind+safeKey(x.k)+(x.opt?'?':'')+': '+x.ty+';'); });
          out.push('};');
        }
        out.push('');
      });
      var code=out.join('\n').trim();
      if(!code) code=exp+'type '+rootName+' = '+topType+';';
      document.getElementById('jtOut').value=code;
      document.getElementById('jtProgBar').style.width='100%';
      var nTypes=order.length;
      document.getElementById('jtStats').textContent=nTypes+' type'+(nTypes===1?'':'s')+' · '+code.split('\n').length+' lines';
      document.getElementById('jtSummary').textContent='Done — '+nTypes+' type definition'+(nTypes===1?'':'s')+' generated from your JSON.';
      ToolPro.toast('TypeScript generated','ok');
    }catch(ex){
      errEl.textContent='Could not convert: '+ex.message;
    }
    setTimeout(function(){ wrap.classList.remove('show'); document.getElementById('jtProgBar').style.width='0%'; },400);
  },60);
}
document.getElementById('jtGoBtn').addEventListener('click',buildJSON);
document.getElementById('jtCopyBtn').addEventListener('click',function(){
  var v=document.getElementById('jtOut').value; if(!v) return;
  ToolPro.copyText(v,'TypeScript copied to clipboard');
});
document.getElementById('jtClearBtn').addEventListener('click',function(){
  document.getElementById('jtIn').value=''; document.getElementById('jtOut').value='';
  document.getElementById('jtStats').textContent=''; errEl.textContent='';
});
})();
</script>

## How it works

Paste valid JSON and the converter walks every value recursively: strings become `string`, numbers become `number`, booleans become `boolean`, and nested objects become their own named interfaces (e.g. an `address` object becomes `interface Address`). Arrays of objects are merged into one interface — keys missing from some items get a `?`, so uneven API shapes stay accurate. Empty arrays fall back to `any[]`, and keys that aren't valid identifiers are safely quoted.

## Everyday uses

- **Typing API responses:** paste a real API payload and get production-ready interfaces instead of hand-writing them.
- **Mocking data:** generate the shape first, then build typed mocks and fixtures around it.
- **Migrating to TypeScript:** convert sample JSON configs and fixtures during a JS → TS migration.
- **Documenting data shapes:** share a generated interface in a PR review so the contract is visible.
- **Learning TypeScript:** paste familiar JSON and see exactly how its types map to interface syntax.

[END EXTERNAL CONTENT]
