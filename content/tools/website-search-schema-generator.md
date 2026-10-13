---
title: "Free Website Search Schema Generator — WebSite JSON-LD"
description: "Generate WebSite JSON-LD with SearchAction potentialAction free: site name, URL and search URL template. Fill the form, copy the code — no sign-up."
category: seo
date: 2026-10-13
draft: false
---

Want search engines to understand your site's internal search? **WebSite schema with a SearchAction potentialAction** declares your site name and the URL pattern of your search box in one structured block. Fill in the form and the JSON-LD builds itself live.

<div class="tool-shell" id="wsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Website Search Schema Generator</h2>
<p>WebSite + SearchAction JSON-LD with your search URL template — built live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="wsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in your site details</p>
<div id="wsForm">
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="wsSample">✨ Load sample site</button>
<button type="button" class="preset-chip" id="wsClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="wsName">Site name *</label>
<input type="text" id="wsName" class="tool-input" placeholder="e.g. DollarWise">
</div><div class="setting">
<label for="wsAlt">Alternate name (optional)</label>
<input type="text" id="wsAlt" class="tool-input" placeholder="e.g. DW">
</div><div class="setting">
<label for="wsUrl">Site URL *</label>
<input type="text" id="wsUrl" class="tool-input" placeholder="https://example.com">
</div><div class="setting">
<label for="wsTemplate">Search URL template *</label>
<input type="text" id="wsTemplate" class="tool-input" placeholder="https://example.com/search?q={search_term_string}">
<div class="hint">Use the literal placeholder <b>{search_term_string}</b> where the query goes. Test it: replace it with a word and open the URL in a new tab — it should show search results.</div>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="wsOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wsCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your homepage's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Add machine-readable site identity to your homepage in under a minute — right in your browser.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'ws', build: function(get) {
return {
    '@type': 'WebSite',
    name: get('Name'),
    alternateName: get('Alt'),
    url: get('Url'),
    potentialAction: get('Template') ? {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: get('Template') },
      'query-input': 'required name=search_term_string'
    } : ''
  };
}});
document.getElementById('wsSample').addEventListener('click', function(){
  var v = { Name:'DollarWise', Alt:'DW', Url:'https://dollarwise.xyz', Template:'https://dollarwise.xyz/search/?q={search_term_string}' };
  Object.keys(v).forEach(function(k){
    var el = document.getElementById('ws' + k);
    if(el){ el.value = v[k]; el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); }
  });
  ToolPro.toast('Sample site loaded', 'ok');
});
document.getElementById('wsClear').addEventListener('click', function(){
  document.querySelectorAll('#wsForm input, #wsForm textarea').forEach(function(el){ el.value = ''; el.dispatchEvent(new Event('input', {bubbles:true})); });
  document.querySelectorAll('#wsForm select').forEach(function(el){ el.selectedIndex = 0; el.dispatchEvent(new Event('change', {bubbles:true})); });
  ToolPro.toast('Form cleared');
});
</script>

## How it works

Enter your site name and homepage URL, then paste your search URL template with the literal `{search_term_string}` placeholder where the query belongs. The generator builds a `WebSite` JSON-LD block with a `SearchAction` potentialAction that declares exactly how a visitor can search your site. Hit **Copy schema** and paste it on your homepage — it belongs there rather than on inner pages. One honest note: Google has retired the visual "sitelinks search box" in its own results, but the markup remains valid structured data that other engines and crawlers can still read.

## Everyday uses

- **Site owners** — give your homepage clean, machine-readable identity markup in one minute.
- **Bloggers & publishers** — declare your internal search so crawlers understand how content is discoverable.
- **E-commerce sites** — document your product search endpoint in structured form.
- **Developers** — generate the canonical WebSite block for client sites without hand-writing JSON-LD.
- **SEO freelancers** — a quick win to add to every technical audit checklist.
