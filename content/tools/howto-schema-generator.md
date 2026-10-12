---
title: "HowTo Schema Generator — JSON-LD for Step-by-Step Guides"
description: "Generate HowTo schema (JSON-LD) free: steps, tools, supplies and total time for tutorial pages. Fill the form, copy the code. No sign-up."
category: seo
date: 2026-10-12
draft: false
---

Writing a tutorial or DIY guide? **HowTo schema** structures your steps so search engines understand the process — total time, supplies, tools and each numbered step.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HowTo Schema Generator</h2>
<p>Structured steps for tutorials — from supply list to finished result.</p>
</div>
<button type="button" class="theme-toggle" id="cvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in the details</p>
<div id="cvForm">
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvName">Guide name *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. How to Change a Bicycle Tyre">

</div><div class="setting">
<label for="cvDesc">Description</label>
<input type="text" id="cvDesc" class="tool-input" placeholder="What the reader will achieve">

</div><div class="setting">
<label for="cvTime">Total time (minutes)</label>
<input type="number" id="cvTime" class="tool-input" placeholder="30">

</div><div class="setting">
<label for="cvSupply">Supplies — one per line</label>
<textarea id="cvSupply" class="tool-input" rows="3" placeholder="Spare inner tube
Tyre levers"></textarea>

</div><div class="setting">
<label for="cvTools">Tools — one per line</label>
<textarea id="cvTools" class="tool-input" rows="3" placeholder="Bike pump
Wrench"></textarea>

</div><div class="setting">
<label for="cvSteps">Steps — one per line (Step title | details, or just text)</label>
<textarea id="cvSteps" class="tool-input" rows="5" placeholder="Remove the wheel | Loosen the axle nuts and slide the wheel out.
Pop the tyre bead | Work the levers around the rim."></textarea>

</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="cvOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cvCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your page's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This generator runs entirely in your browser — nothing you type is sent anywhere.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'cv', build: function(get) {
return {
    '@type': 'HowTo',
    name: get('Name'),
    description: get('Desc'),
    totalTime: get('Time') ? 'PT' + parseInt(get('Time'), 10) + 'M' : '',
    supply: get.lines('Supply').map(function(s) { return { '@type': 'HowToSupply', name: s }; }),
    tool: get.lines('Tools').map(function(s) { return { '@type': 'HowToTool', name: s }; }),
    step: get.lines('Steps').map(function(s) {
      var parts = s.split('|');
      if (parts.length > 1) return { '@type': 'HowToStep', name: parts[0].trim(), text: parts.slice(1).join('|').trim() };
      return { '@type': 'HowToStep', text: s };
    })
  };
}});
</script>


## How to use it

1. **Name the guide** and estimate the total time honestly.
2. **List supplies and tools**, one per line.
3. **Write steps as Title | details** (the title is optional) — then copy the schema.

## About this tool

HowTo markup describes a process end-to-end: what you need, how long it takes and the ordered steps. Even where Google has trimmed visual HowTo results, the structured clarity helps search engines (and AI answer engines) understand and cite your tutorial correctly.

Steps in the schema must exist in the visible guide, in the same order — schema is a description of the page, not a replacement for it.

## Frequently asked questions

**Do the steps need titles?**
No — plain text steps work. Titles (before the | character) make the schema richer and the guide easier to scan.

**What time format is used?**
Minutes convert to ISO 8601 (PT30M) automatically.

**Is my data sent anywhere?**
No — everything is generated in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
