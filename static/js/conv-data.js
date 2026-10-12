/* DollarWise shared converter engine — DATA pairs (CSV / JSON / XML / YAML / TSV / Markdown / HTML / text).
   Usage: ConvData.init({ prefix:'cv', from:'csv', to:'json', outExt:'json', outMime:'application/json' }) */
(function(){
  /* ---------- CSV parsing / writing ---------- */
  function parseDelimited(text, delim){
    var rows = [], row = [], field = '', inQ = false, i, ch;
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    for(i = 0; i < text.length; i++){
      ch = text[i];
      if(inQ){
        if(ch === '"'){
          if(text[i + 1] === '"'){ field += '"'; i++; } else inQ = false;
        } else field += ch;
      } else if(ch === '"'){ inQ = true; }
      else if(ch === delim){ row.push(field); field = ''; }
      else if(ch === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else field += ch;
    }
    if(field.length || row.length){ row.push(field); rows.push(row); }
    return rows.filter(function(r){ return r.length > 1 || (r.length === 1 && r[0] !== ''); });
  }
  function toDelimited(rows, delim){
    return rows.map(function(r){
      return r.map(function(c){
        c = (c === null || c === undefined) ? '' : String(c);
        return (c.indexOf(delim) >= 0 || c.indexOf('"') >= 0 || c.indexOf('\n') >= 0)
          ? '"' + c.replace(/"/g, '""') + '"' : c;
      }).join(delim);
    }).join('\n');
  }
  function rowsToObjects(rows){
    if(!rows.length) return [];
    var head = rows[0];
    return rows.slice(1).map(function(r){
      var o = {};
      head.forEach(function(h, i){ o[h] = r[i] !== undefined ? r[i] : ''; });
      return o;
    });
  }
  function objectsToRows(objs){
    if(!objs.length) return [];
    var keys = [];
    objs.forEach(function(o){ Object.keys(o).forEach(function(k){ if(keys.indexOf(k) < 0) keys.push(k); }); });
    return [keys].concat(objs.map(function(o){
      return keys.map(function(k){
        var v = o[k];
        return (v !== null && typeof v === 'object') ? JSON.stringify(v) : v;
      });
    }));
  }
  /* ---------- XML ---------- */
  function xmlToObj(node){
    var obj = {};
    var hasChildren = false;
    for(var i = 0; i < node.children.length; i++){
      var child = node.children[i]; hasChildren = true;
      var val = xmlToObj(child);
      if(obj[child.tagName] === undefined) obj[child.tagName] = val;
      else {
        if(!Array.isArray(obj[child.tagName])) obj[child.tagName] = [obj[child.tagName]];
        obj[child.tagName].push(val);
      }
    }
    var text = '';
    for(var j = 0; j < node.childNodes.length; j++){
      if(node.childNodes[j].nodeType === 3) text += node.childNodes[j].nodeValue;
    }
    text = text.trim();
    if(!hasChildren) return text;
    if(text) obj['#text'] = text;
    return obj;
  }
  function parseXML(text){
    var doc = new DOMParser().parseFromString(text, 'text/xml');
    if(doc.querySelector('parsererror')) throw new Error('Invalid XML');
    var root = doc.documentElement;
    var out = {}; out[root.tagName] = xmlToObj(root);
    return out;
  }
  function escXml(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  }
  function objToXml(name, val, indent){
    indent = indent || '';
    if(Array.isArray(val)){
      return val.map(function(v){ return objToXml(name, v, indent); }).join('');
    }
    if(val !== null && typeof val === 'object'){
      var inner = '';
      Object.keys(val).forEach(function(k){
        if(k === '#text') return;
        inner += objToXml(k, val[k], indent + '  ');
      });
      if(val['#text']) inner += indent + '  ' + escXml(val['#text']) + '\n';
      return indent + '<' + name + '>\n' + inner + indent + '</' + name + '>\n';
    }
    return indent + '<' + name + '>' + escXml(val === null || val === undefined ? '' : val) + '</' + name + '>\n';
  }
  /* ---------- lazy libs ---------- */
  function loadScript(url){
    return new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = url; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function loadYaml(){
    if(window.jsyaml) return Promise.resolve();
    return loadScript('https://unpkg.com/js-yaml@4.1.0/dist/js-yaml.min.js');
  }
  function loadMarked(){
    if(window.marked) return Promise.resolve();
    return loadScript('https://unpkg.com/marked@12.0.2/marked.min.js');
  }
  /* ---------- conversion core ---------- */
  function toIntermediate(text, from){
    switch(from){
      case 'csv': return { kind:'rows', data: parseDelimited(text, ',') };
      case 'tsv': return { kind:'rows', data: parseDelimited(text, '\t') };
      case 'json': return { kind:'json', data: JSON.parse(text) };
      case 'xml': return { kind:'json', data: parseXML(text) };
      case 'markdown': return { kind:'text', data: text };
      case 'html': return { kind:'text', data: text };
      case 'text': return { kind:'text', data: text };
    }
    throw new Error('unsupported input');
  }
  function fromIntermediate(mid, from, to){
    if(to === 'json'){
      if(mid.kind === 'rows') return JSON.stringify(rowsToObjects(mid.data), null, 2);
      return JSON.stringify(mid.data, null, 2);
    }
    if(to === 'yaml'){
      var val = (mid.kind === 'rows') ? rowsToObjects(mid.data) : mid.data;
      return window.jsyaml.dump(val);
    }
    if(to === 'xml'){
      if(mid.kind === 'rows'){
        var objs = rowsToObjects(mid.data);
        var xml = '<rows>\n';
        objs.forEach(function(o){ xml += objToXml('row', o, '  '); });
        return xml + '</rows>\n';
      }
      var rootName = (from === 'xml' && mid.data && Object.keys(mid.data).length === 1)
        ? Object.keys(mid.data)[0] : 'root';
      var rootVal = (rootName !== 'root') ? mid.data[rootName] : mid.data;
      return objToXml(rootName, rootVal, '');
    }
    if(to === 'csv' || to === 'tsv'){
      var delim = to === 'csv' ? ',' : '\t';
      if(mid.kind === 'rows') return toDelimited(mid.data, delim);
      var arr = Array.isArray(mid.data) ? mid.data : [mid.data];
      if(arr.length && typeof arr[0] !== 'object'){
        return toDelimited(arr.map(function(x){ return [x]; }), delim);
      }
      return toDelimited(objectsToRows(arr), delim);
    }
    if(to === 'html'){
      return Promise.resolve(loadMarked()).then(function(){
        return window.marked.parse(mid.data || '');
      });
    }
    if(to === 'text'){
      var doc = new DOMParser().parseFromString(mid.data || '', 'text/html');
      doc.querySelectorAll('br').forEach(function(b){ b.replaceWith('\n'); });
      doc.querySelectorAll('p,div,li,h1,h2,h3,h4,h5,h6,tr').forEach(function(el){
        el.appendChild(document.createTextNode('\n'));
      });
      return doc.body.textContent.replace(/\n{3,}/g, '\n\n').trim();
    }
    throw new Error('unsupported output');
  }
  function convert(text, from, to){
    if(from === 'yaml' || to === 'yaml'){
      return loadYaml().then(function(){
        var mid;
        if(from === 'yaml') mid = { kind:'json', data: window.jsyaml.load(text) };
        else mid = toIntermediate(text, from);
        var r = fromIntermediate(mid, from, to);
        return Promise.resolve(r);
      });
    }
    var mid = toIntermediate(text, from);
    return Promise.resolve(fromIntermediate(mid, from, to));
  }
  /* ---------- UI ---------- */
  function init(cfg){
    var P = cfg.prefix;
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var inEl = document.getElementById(P + 'In');
    var outEl = document.getElementById(P + 'Out');
    var btn = document.getElementById(P + 'Btn');
    var copyBtn = document.getElementById(P + 'Copy');
    var dlBtn = document.getElementById(P + 'Download');
    var info = document.getElementById(P + 'Info');

    ToolPro.dropzone(document.getElementById(P + 'Drop'), {
      multiple: false,
      onFiles: function(arr){
        var f = arr[0]; if(!f) return;
        f.text().then(function(t){
          inEl.value = t;
          ToolPro.toast('File loaded: ' + f.name, 'ok');
        });
      }
    });

    btn.addEventListener('click', function(){
      var text = inEl.value;
      if(!text.trim()){ ToolPro.toast('Paste or upload some ' + cfg.from.toUpperCase() + ' first', 'err'); return; }
      btn.disabled = true;
      convert(text, cfg.from, cfg.to).then(function(out){
        outEl.value = out;
        info.textContent = 'Converted ' + ToolPro.fmtBytes(new Blob([text]).size) + ' of ' +
          cfg.from.toUpperCase() + ' → ' + ToolPro.fmtBytes(new Blob([out]).size) + ' of ' + cfg.to.toUpperCase() + '.';
        dlBtn.disabled = false; copyBtn.disabled = false;
        ToolPro.toast('Converted to ' + cfg.to.toUpperCase(), 'ok');
      }).catch(function(e){
        info.textContent = 'Could not convert: ' + (e.message || 'invalid input') + '. Check the format and try again.';
        ToolPro.toast('Conversion failed — check your input', 'err');
      }).then(function(){ btn.disabled = false; });
    });

    copyBtn.addEventListener('click', function(){
      outEl.select();
      navigator.clipboard.writeText(outEl.value).then(function(){ ToolPro.toast('Copied to clipboard', 'ok'); });
    });
    dlBtn.addEventListener('click', function(){
      var blob = new Blob([outEl.value], { type: cfg.outMime || 'text/plain' });
      ToolPro.download(URL.createObjectURL(blob), 'converted.' + (cfg.outExt || cfg.to));
    });
  }

  window.ConvData = { init: init };
})();
