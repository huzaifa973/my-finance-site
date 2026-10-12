---
title: "Breadcrumb Schema Generator — JSON-LD BreadcrumbList"
description: "Generate BreadcrumbList schema (JSON-LD) free: turn your page trail into the breadcrumb path Google shows in results. One line per level. No sign-up."
category: seo
date: 2026-10-12
draft: false
---

**Breadcrumb schema** tells Google your page's place in the site hierarchy, so results show a clean trail (Home › Tools › PDF Tools) instead of a raw URL. One line per level: Name | URL.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Breadcrumb Schema Generator</h2>
<p>The neat Home › Category › Page trail, as structured data.</p>
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
<label for="cvTrail">Breadcrumb trail — one level per line: Name | Full URL</label>
<textarea id="cvTrail" class="tool-input" rows="4" placeholder="Home | https://example.com/
Tools | https://example.com/tools/
PDF Tools | https://example.com/tools/pdf/"></textarea>

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
    '@type': 'BreadcrumbList',
    itemListElement: get.lines('Trail').map(function(s, i) {
      var parts = s.split('|');
      return { '@type': 'ListItem', position: i + 1, name: (parts[0] || '').trim(), item: (parts[1] || '').trim() };
    })
  };
}});
</script>


## How to use it

1. **Write the trail**, top level first — Name | full URL per line.
2. **Copy the JSON-LD** into the page (positions are numbered automatically).
3. **Match your visible breadcrumbs** — the schema should mirror the trail shown on the page.

## About this tool

BreadcrumbList is among the easiest schema wins: Google swaps the raw URL in your result for the readable trail, which lifts click-through especially on mobile. The trail must reflect the page's real position in the site — and ideally a single canonical path, even if users can arrive several ways.

Most good CMSs and static themes can output the visible breadcrumb automatically; this generator handles the structured-data half.

## Frequently asked questions

**How many levels should I include?**
As many as your hierarchy has — typically 2–4. Start from Home and end at the current page.

**Must the last item have a URL?**
It can point to the page itself; Google accepts the final item with or without a link.

**Is my data sent anywhere?**
No — generated locally in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
