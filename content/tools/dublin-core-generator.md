---
title: "Free Dublin Core Meta Tag Generator — SEO Metadata"
description: "Generate Dublin Core metadata for any page or document: fill in the 15 DC elements and get clean <meta name=\"DC.*\"> tags, optional DCMI schemes, plus matching JSON-LD. Free, no sign-up."
category: seo
date: 2026-10-24
draft: false
---

Dublin Core is the classic metadata standard for describing web pages, PDFs, research papers, and datasets — libraries, archives, and repositories still harvest it. Fill in the 15 DC elements below and get a ready-to-paste block of `<meta name="DC.*">` tags, with optional DCMI encoding schemes (W3CDTF dates, URI identifiers, RFC 4646 languages) and a matching schema.org JSON-LD block for modern search engines. Everything runs in your browser.

<div class="tool-shell" id="dcgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Dublin Core Generator</h2>
<p>Fill in the 15 DC elements — get clean meta tags plus JSON-LD.</p>
</div>
<button type="button" class="theme-toggle" id="dcgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Describe the resource</p>
<div class="preset-row" id="dcgPresets">
<button type="button" class="preset-chip" data-preset="blog">📝 Blog post</button>
<button type="button" class="preset-chip" data-preset="pdf">📄 PDF guide</button>
<button type="button" class="preset-chip" data-preset="paper">🎓 Research paper</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="dcgTitle">Title *</label><input type="text" id="dcgTitle" class="tool-input" placeholder="A name given to the resource" autocomplete="off"></div>
<div class="setting"><label for="dcgCreator">Creator</label><input type="text" id="dcgCreator" class="tool-input" placeholder="Author or maker" autocomplete="off"></div>
<div class="setting"><label for="dcgSubject">Subject</label><input type="text" id="dcgSubject" class="tool-input" placeholder="Keywords, comma-separated" autocomplete="off"></div>
<div class="setting"><label for="dcgDescription">Description</label><input type="text" id="dcgDescription" class="tool-input" placeholder="Abstract or summary" autocomplete="off"></div>
<div class="setting"><label for="dcgPublisher">Publisher</label><input type="text" id="dcgPublisher" class="tool-input" placeholder="Who publishes it" autocomplete="off"></div>
<div class="setting"><label for="dcgContributor">Contributor</label><input type="text" id="dcgContributor" class="tool-input" placeholder="Editor, illustrator…" autocomplete="off"></div>
<div class="setting"><label for="dcgDate">Date</label><input type="date" id="dcgDate" class="tool-input"></div>
<div class="setting"><label for="dcgType">Type</label><input type="text" id="dcgType" class="tool-input" placeholder="e.g. Text, Image, Dataset" autocomplete="off"></div>
<div class="setting"><label for="dcgFormat">Format</label><input type="text" id="dcgFormat" class="tool-input" placeholder="e.g. text/html, application/pdf" autocomplete="off"></div>
<div class="setting"><label for="dcgIdentifier">Identifier</label><input type="text" id="dcgIdentifier" class="tool-input" placeholder="URL or DOI" autocomplete="off"></div>
<div class="setting"><label for="dcgSource">Source</label><input type="text" id="dcgSource" class="tool-input" placeholder="Derived from…" autocomplete="off"></div>
<div class="setting"><label for="dcgLanguage">Language</label><input type="text" id="dcgLanguage" class="tool-input" placeholder="e.g. en" autocomplete="off"></div>
<div class="setting"><label for="dcgRelation">Relation</label><input type="text" id="dcgRelation" class="tool-input" placeholder="Related resource" autocomplete="off"></div>
<div class="setting"><label for="dcgCoverage">Coverage</label><input type="text" id="dcgCoverage" class="tool-input" placeholder="Place or time span" autocomplete="off"></div>
<div class="setting"><label for="dcgRights">Rights</label><input type="text" id="dcgRights" class="tool-input" placeholder="License or rights statement" autocomplete="off"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="dcgMode">Also output</label>
<select id="dcgMode" class="tool-input">
<option value="dc">DC meta tags only</option>
<option value="dcjson" selected>DC meta tags + JSON-LD</option>
</select>
<div class="hint">JSON-LD maps the DC elements to schema.org so modern search engines read them too.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">DCMI encoding schemes</span><label class="toggle"><input type="checkbox" id="dcgSchemes" checked><span class="track"></span></label></div>
<div class="hint">Adds scheme="DCTERMS.W3CDTF" to dates, DCTERMS.URI to identifiers, DCTERMS.RFC4646 to languages.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include DC link tag</span><label class="toggle"><input type="checkbox" id="dcgLink" checked><span class="track"></span></label></div>
<div class="hint">Adds &lt;link rel="schema.DC" href="http://purl.org/dc/elements/1.1/"&gt; so parsers know the namespace.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="dcgBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Generate Meta Tags
</button>
<button type="button" class="btn-pro-outline" id="dcgCopy" disabled>📋 Copy HTML</button>
<button type="button" class="btn-pro-outline" id="dcgDl" disabled>⬇ Download .html</button>
<button type="button" class="btn-pro-outline" id="dcgClear" disabled>Clear</button>
</div>
<div class="results" id="dcgResults">
<p class="result-head">🏷️ Your Dublin Core block</p>
<div class="result-summary" id="dcgSummary"></div>
<div class="result-grid" id="dcgGrid">
<div class="result-card" style="grid-column:1/-1;">
<div class="r-name">Generated code</div>
<div class="r-stats">Paste this inside your page's &lt;head&gt;.</div>
<textarea id="dcgOut" class="tool-output" rows="14" readonly style="width:100%;margin-top:.5rem;"></textarea>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate metadata for your whole library — nothing is stored or sent anywhere.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('dcgShell');
  ToolPro.themeToggle(shell, document.getElementById('dcgTheme'));

  var FIELDS = [
    ['Title', 'dcgTitle', true], ['Creator', 'dcgCreator'], ['Subject', 'dcgSubject'],
    ['Description', 'dcgDescription'], ['Publisher', 'dcgPublisher'], ['Contributor', 'dcgContributor'],
    ['Date', 'dcgDate'], ['Type', 'dcgType'], ['Format', 'dcgFormat'], ['Identifier', 'dcgIdentifier'],
    ['Source', 'dcgSource'], ['Language', 'dcgLanguage'], ['Relation', 'dcgRelation'],
    ['Coverage', 'dcgCoverage'], ['Rights', 'dcgRights']
  ];
  var PRESETS = {
    blog:  { Type: 'Text', Format: 'text/html', Language: 'en' },
    pdf:   { Type: 'Text', Format: 'application/pdf', Language: 'en' },
    paper: { Type: 'Text', Format: 'text/html', Language: 'en', Rights: 'All rights reserved' }
  };
  var SCHEMES = { Date: 'DCTERMS.W3CDTF', Identifier: 'DCTERMS.URI', Language: 'DCTERMS.RFC4646' };

  var presets = document.getElementById('dcgPresets');
  var btn = document.getElementById('dcgBtn');
  var copyBtn = document.getElementById('dcgCopy');
  var dlBtn = document.getElementById('dcgDl');
  var clearBtn = document.getElementById('dcgClear');
  var out = document.getElementById('dcgOut');
  var resBox = document.getElementById('dcgResults');
  var summaryEl = document.getElementById('dcgSummary');
  var titleEl = document.getElementById('dcgTitle');
  var lastCode = '';

  function vals(){
    var v = {};
    FIELDS.forEach(function(f){ v[f[0]] = document.getElementById(f[1]).value.trim(); });
    return v;
  }

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var p = PRESETS[chip.dataset.preset] || {};
    FIELDS.forEach(function(f){
      if(p[f[0]] !== undefined) document.getElementById(f[1]).value = p[f[0]];
    });
    refresh();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function esc(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escJson(s){
    return JSON.stringify(String(s)).slice(1, -1);
  }

  function build(){
    var v = vals();
    var useSchemes = document.getElementById('dcgSchemes').checked;
    var useLink = document.getElementById('dcgLink').checked;
    var mode = document.getElementById('dcgMode').value;
    var lines = [];
    if(useLink) lines.push('<link rel="schema.DC" href="http://purl.org/dc/elements/1.1/">');
    var count = 0;
    FIELDS.forEach(function(f){
      var name = f[0], val = v[name];
      if(!val) return;
      count++;
      var sch = (useSchemes && SCHEMES[name]) ? ' scheme="' + SCHEMES[name] + '"' : '';
      lines.push('<meta name="DC.' + name.toLowerCase() + '"' + sch + ' content="' + esc(val) + '">');
    });
    var code = lines.join('\n');
    if(mode === 'dcjson'){
      var j = { '@context': 'https://schema.org', '@type': 'CreativeWork' };
      if(v.Title) j.name = v.Title;
      if(v.Description) j.description = v.Description;
      if(v.Creator) j.author = { '@type': 'Person', name: v.Creator };
      if(v.Publisher) j.publisher = { '@type': 'Organization', name: v.Publisher };
      if(v.Date) j.datePublished = v.Date;
      if(v.Language) j.inLanguage = v.Language;
      if(v.Identifier) j.identifier = v.Identifier;
      if(v.Rights) j.license = v.Rights;
      if(v.Subject) j.keywords = v.Subject;
      var jl = JSON.stringify(j, null, 2).replace(/</g, '\\u003c');
      code += '\n\n<script type="application/ld+json">\n' + jl + '\n</' + 'script>';
    }
    return { code: code, count: count };
  }

  function refresh(){
    var ok = titleEl.value.trim().length > 0;
    btn.disabled = !ok;
    clearBtn.disabled = !(titleEl.value || out.value);
  }
  FIELDS.forEach(function(f){ document.getElementById(f[1]).addEventListener('input', refresh); });

  clearBtn.addEventListener('click', function(){
    FIELDS.forEach(function(f){ document.getElementById(f[1]).value = ''; });
    out.value = ''; summaryEl.textContent = ''; lastCode = '';
    resBox.classList.remove('show');
    copyBtn.disabled = true; dlBtn.disabled = true;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    refresh();
  });

  btn.addEventListener('click', function(){
    if(!titleEl.value.trim()){ ToolPro.toast('Title is required — it is the one mandatory DC element.', 'err'); return; }
    var r = build();
    if(!r.count){ ToolPro.toast('Fill in at least the Title field.', 'err'); return; }
    lastCode = r.code;
    out.value = r.code;
    out.rows = Math.min(22, Math.max(8, r.code.split('\n').length + 1));
    summaryEl.textContent = '🏷️ ' + r.count + ' Dublin Core meta tag' + (r.count > 1 ? 's' : '') +
      (document.getElementById('dcgMode').value === 'dcjson' ? ' + schema.org JSON-LD' : '') + ' generated.';
    copyBtn.disabled = false; dlBtn.disabled = false;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Meta tags generated', 'ok');
    refresh();
  });

  copyBtn.addEventListener('click', function(){
    if(!lastCode) return;
    ToolPro.copyText(lastCode, 'HTML copied — paste it inside <head>');
  });

  dlBtn.addEventListener('click', function(){
    if(!lastCode) return;
    var blob = new Blob(['<!-- Dublin Core metadata block — generated by DollarWise -->\n' + lastCode + '\n'], { type: 'text/html' });
    ToolPro.download(URL.createObjectURL(blob), 'dublin-core-meta.html');
    ToolPro.toast('Downloaded dublin-core-meta.html', 'ok');
  });

  refresh();
})();
</script>

## How it works

Fill in the fields for the 15 Dublin Core elements — only **Title** is required, the rest are optional. Pick a preset (blog post, PDF guide, research paper) to pre-fill the sensible Type/Format/Language values, choose whether to add DCMI encoding schemes and a matching JSON-LD block, then hit **Generate Meta Tags**. You get clean, HTML-escaped `<meta name="DC.*">` tags ready to paste inside your `<head>`, with a one-click copy button and a downloadable `.html` snippet file.

**Why the extras:** the `scheme` attributes tell harvesters how to interpret dates, identifiers, and languages, and the JSON-LD block means Google reads the same metadata in the modern format it prefers.

## Everyday uses

- **Bloggers & publishers** — add standards-compliant metadata to articles and guides.
- **Librarians & archivists** — describe digitized collections for OAI-PMH harvesting.
- **Researchers** — tag papers and datasets so repositories index them correctly.
- **Course creators** — give each lesson page proper Title/Creator/Date metadata.
- **SEO generalists** — the JSON-LD pairing keeps you covered for both classic and modern crawlers.

Your entries never leave your browser — the generator works fully offline once loaded.
