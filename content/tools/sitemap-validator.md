---
title: "Free Sitemap XML Validator — Check Your Sitemap for Errors"
description: "Validate sitemap.xml in your browser: XML well-formedness, urlset structure, absolute URLs, 50K/50MB limits, duplicates. Free forever, no sign-up, nothing uploaded."
category: seo
date: 2026-10-19
draft: false
---

A broken sitemap silently wastes your crawl budget. Paste your sitemap XML or upload the file, and this tool checks XML well-formedness, the urlset/url/loc structure, non-absolute URLs, duplicates, and the 50,000-URL / 50MB limits — all in your browser, nothing uploaded.

<div class="tool-shell" id="smvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sitemap XML Validator</h2>
<p>Paste or upload your sitemap.xml — get structure, URL, and limit checks in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="smvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your sitemap</p>
<textarea id="smvXml" class="tool-input" rows="10" placeholder="Paste your sitemap.xml here…&#10;&#10;&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&#10;&lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;&#10;  &lt;url&gt;&lt;loc&gt;https://example.com/&lt;/loc&gt;&lt;/url&gt;&#10;&lt;/urlset&gt;"></textarea>
<div class="hint" style="margin-top:.4rem">…or upload the file instead:</div>
<input type="file" id="smvFile" accept=".xml,text/xml" class="tool-input" style="margin-top:.3rem">
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Check options</p>
<div class="settings-panel">
<div class="preset-row" id="smvPresets">
<button type="button" class="preset-chip active" data-strict="0">✅ Standard check</button>
<button type="button" class="preset-chip" data-strict="1">🔍 Strict (all warnings as errors)</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Flag non-absolute URLs</span><label class="toggle"><input type="checkbox" id="smvAbs" checked><span class="track"></span></label></div>
<div class="hint">Every &lt;loc&gt; must be a full https:// URL — relative paths are invalid.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Flag duplicate URLs</span><label class="toggle"><input type="checkbox" id="smvDup" checked><span class="track"></span></label></div>
<div class="hint">Duplicates waste crawl budget and can confuse canonicalization.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Check 50,000 URL / 50MB limits</span><label class="toggle"><input type="checkbox" id="smvLimits" checked><span class="track"></span></label></div>
<div class="hint">Sitemaps.org caps: 50,000 URLs and 50MB uncompressed per file.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="smvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Validate Sitemap
</button>
<button type="button" class="btn-pro-outline" id="smvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="smvProgWrap">
<div class="progress-bar"><i id="smvProgBar"></i></div>
<div class="progress-text" id="smvProgText">Working…</div>
</div>
<div class="results" id="smvResults">
<p class="result-head" id="smvHead">Validation report</p>
<div class="result-summary" id="smvSummary"></div>
<div class="result-grid" id="smvGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate as many sitemaps as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('smvShell');
  ToolPro.themeToggle(shell, document.getElementById('smvTheme'));

  var xmlEl = document.getElementById('smvXml');
  var fileEl = document.getElementById('smvFile');
  var btn = document.getElementById('smvBtn');
  var clearBtn = document.getElementById('smvClear');

  document.getElementById('smvPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('smvPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var n = xmlEl.value.trim().length > 0;
    btn.disabled = !n; clearBtn.disabled = !n;
  }
  xmlEl.addEventListener('input', refresh);

  fileEl.addEventListener('change', function(){
    var f = fileEl.files[0]; if(!f) return;
    var rd = new FileReader();
    rd.onload = function(){ xmlEl.value = rd.result; refresh(); ToolPro.toast('File loaded: ' + f.name, 'ok'); };
    rd.readAsText(f);
    fileEl.value = '';
  });

  clearBtn.addEventListener('click', function(){
    xmlEl.value = '';
    document.getElementById('smvResults').classList.remove('show');
    refresh();
  });

  function lineOf(xml, snippet, fromIdx){
    if(!snippet) return 0;
    var idx = xml.indexOf(snippet, fromIdx || 0);
    if(idx < 0) idx = xml.indexOf(snippet);
    if(idx < 0) return 0;
    return xml.slice(0, idx).split('\n').length;
  }

  btn.addEventListener('click', function(){
    var xml = xmlEl.value;
    var grid = document.getElementById('smvGrid');
    var resBox = document.getElementById('smvResults');
    grid.innerHTML = '';
    var errors = [], warnings = [];
    var strict = document.querySelector('#smvPresets .preset-chip.active').dataset.strict === '1';
    var chkAbs = document.getElementById('smvAbs').checked;
    var chkDup = document.getElementById('smvDup').checked;
    var chkLim = document.getElementById('smvLimits').checked;

    var doc;
    try {
      var parser = new DOMParser();
      doc = parser.parseFromString(xml, 'text/xml');
    } catch(e){ doc = null; }
    var perr = doc && doc.getElementsByTagName('parsererror')[0];
    if(!doc || perr){
      var msg = perr ? perr.textContent.replace(/\s+/g, ' ').trim().slice(0, 300) : 'Could not parse XML.';
      var lm = msg.match(/line\s+(\d+)/i);
      errors.push({ line: lm ? +lm[1] : 0, msg: 'XML is not well-formed: ' + msg });
      render(0, errors, warnings, strict);
      return;
    }

    var root = doc.documentElement;
    var rootName = root.localName || root.nodeName;
    var isUrlset = rootName === 'urlset';
    var isIndex = rootName === 'sitemapindex';
    if(!isUrlset && !isIndex){
      errors.push({ line: 1, msg: 'Root element must be <urlset> or <sitemapindex> — found <' + rootName + '>.' });
    }
    var ns = root.getAttribute('xmlns') || '';
    if(ns && ns !== 'http://www.sitemaps.org/schemas/sitemap/0.9'){
      warnings.push({ line: 1, msg: 'Unexpected xmlns "' + ns + '" — expected http://www.sitemaps.org/schemas/sitemap/0.9.' });
    }

    var urlCount = 0;
    if(isUrlset){
      var urls = root.getElementsByTagNameNS('*', 'url');
      if(!urls.length) urls = root.getElementsByTagName('url');
      urlCount = urls.length;
      if(!urlCount){ warnings.push({ line: lineOf(xml, '<urlset'), msg: '<urlset> contains no <url> entries.' }); }
      var seen = {}, searchFrom = 0;
      for(var i = 0; i < urls.length; i++){
        var u = urls[i];
        var locs = u.getElementsByTagNameNS('*', 'loc');
        if(!locs.length) locs = u.getElementsByTagName('loc');
        var locText = locs.length ? locs[0].textContent.trim() : '';
        var outer = new XMLSerializer().serializeToString(u).slice(0, 120);
        var ln = lineOf(xml, outer, searchFrom);
        searchFrom = ln ? xml.split('\n').slice(0, ln).join('\n').length : searchFrom;
        if(!locs.length || !locText){
          errors.push({ line: ln, msg: '<url> #' + (i+1) + ' is missing a <loc> value.' });
          continue;
        }
        if(chkAbs && !/^https?:\/\//i.test(locText)){
          errors.push({ line: ln, msg: 'Non-absolute <loc>: "' + locText.slice(0, 80) + '" — must start with http(s)://.' });
        }
        if(chkAbs && /[<>"\s]/.test(locText)){
          warnings.push({ line: ln, msg: '<loc> contains spaces or unescaped characters: "' + locText.slice(0, 80) + '".' });
        }
        if(chkDup){
          var key = locText.toLowerCase();
          if(seen[key]){ (strict ? errors : warnings).push({ line: ln, msg: 'Duplicate URL: "' + locText.slice(0, 80) + '" (first seen earlier in file).' }); }
          else seen[key] = 1;
        }
      }
      if(chkLim){
        if(urlCount > 50000) errors.push({ line: 0, msg: urlCount.toLocaleString() + ' URLs exceeds the 50,000 limit — split into multiple sitemaps + a sitemap index.' });
        var bytes = new Blob([xml]).size;
        if(bytes > 50 * 1024 * 1024) errors.push({ line: 0, msg: 'Uncompressed size ' + ToolPro.fmtBytes(bytes) + ' exceeds the 50MB limit.' });
      }
    } else if(isIndex){
      var sm = root.getElementsByTagNameNS('*', 'sitemap');
      if(!sm.length) sm = root.getElementsByTagName('sitemap');
      urlCount = sm.length;
      if(!urlCount) warnings.push({ line: 1, msg: '<sitemapindex> contains no <sitemap> entries.' });
    }

    render(urlCount, errors, warnings, strict);
    function render(count, errs, warns, isStrict){
      var effErrs = errs.concat(isStrict ? warns : []);
      var effWarns = isStrict ? [] : warns;
      var ok = !effErrs.length;
      document.getElementById('smvHead').textContent = ok ? '✅ Sitemap looks valid' : '❌ ' + effErrs.length + ' error' + (effErrs.length === 1 ? '' : 's') + ' found';
      var s = (isUrlset ? count.toLocaleString() + ' URL' + (count === 1 ? '' : 's') : count + ' sitemap file' + (count === 1 ? '' : 's')) +
        ' · ' + effErrs.length + ' errors · ' + effWarns.length + ' warnings';
      document.getElementById('smvSummary').textContent = s;
      var list = document.createElement('div');
      list.className = 'result-card';
      if(!effErrs.length && !effWarns.length){
        list.innerHTML = '<div class="r-name">🎉 All checks passed</div><div class="r-stats">Well-formed XML, correct root element, and every &lt;url&gt; has an absolute &lt;loc&gt;.</div>';
      } else {
        var html = '<div class="r-name">Issues found</div><ol style="margin:.5rem 0 0 1.2rem;font-size:.9rem">';
        effErrs.forEach(function(e){ html += '<li>❌ ' + (e.line ? 'Line ' + e.line + ': ' : '') + escapeHtml(e.msg) + '</li>'; });
        effWarns.forEach(function(e){ html += '<li>⚠️ ' + (e.line ? 'Line ' + e.line + ': ' : '') + escapeHtml(e.msg) + '</li>'; });
        html += '</ol>';
        list.innerHTML = html;
      }
      grid.appendChild(list);
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast(ok ? 'Sitemap is valid' : effErrs.length + ' error(s) found', ok ? 'ok' : 'err');
    }
  });

  function escapeHtml(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  refresh();
})();
</script>

## How it works

The tool parses your XML with the browser's built-in DOMParser (the same engine that powers XML parsing in every browser). If parsing fails, it surfaces the parser's error message plus the reported line number. Then it walks the document: the root must be `<urlset>` (or `<sitemapindex>`), every `<url>` needs a `<loc>`, every `<loc>` must be an absolute `http(s)://` URL, and duplicates are flagged. Finally it checks the sitemaps.org limits — max 50,000 URLs and 50MB uncompressed per file.

**Honest limitation:** line numbers are best-effort — browsers don't always report them for every issue, so some structural checks are reported without a line number. This tool also doesn't fetch your sitemap from the web, so it can't check whether the URLs actually return HTTP 200.

## Everyday uses

- **After a redesign** — make sure your regenerated sitemap has no broken structure before submitting to Search Console.
- **Plugin audits** — SEO plugins sometimes emit relative URLs or duplicates; catch them here in seconds.
- **Large sites** — verify you're under the 50K/50MB caps before splitting into a sitemap index.
- **Client reports** — paste a client's sitemap and get a clean pass/fail with specifics.
- **Learning SEO** — see exactly which rules a sitemap must follow, explained per issue.
