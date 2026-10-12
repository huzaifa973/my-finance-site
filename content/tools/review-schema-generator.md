---
title: "Review Schema Generator — JSON-LD for Review Rich Snippets"
description: "Generate Review schema (JSON-LD) free: star ratings for products, books, movies and businesses in Google results. Fill the form, copy the code."
category: seo
date: 2026-10-12
draft: false
---

Reviewing a product, book, movie or local business? **Review schema** tells Google your rating in a format it can display as stars in search results. Fill the form — the JSON-LD builds itself.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Review Schema Generator</h2>
<p>Star-rated review snippets for anything you review.</p>
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
<label for="cvItem">What are you reviewing? *</label>
<input type="text" id="cvItem" class="tool-input" placeholder="e.g. The Design of Everyday Things">

</div><div class="setting">
<label for="cvItemType">Type of item</label>
<select id="cvItemType">
<option value="Product" selected>Product</option>
<option value="Book">Book</option>
<option value="Movie">Movie</option>
<option value="LocalBusiness">Local Business</option>
<option value="SoftwareApplication">Software / App</option>
<option value="Course">Course</option>
</select>

</div><div class="setting">
<label for="cvRating">Your rating (1–5) *</label>
<input type="number" id="cvRating" class="tool-input" placeholder="4.5">

</div><div class="setting">
<label for="cvAuthor">Reviewer name</label>
<input type="text" id="cvAuthor" class="tool-input" placeholder="e.g. Alex Morgan">

</div><div class="setting">
<label for="cvDate">Date published</label>
<input type="date" id="cvDate" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvBody">Review summary</label>
<textarea id="cvBody" class="tool-input" rows="3" placeholder="One or two sentences summing up your verdict"></textarea>

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
    '@type': 'Review',
    itemReviewed: { '@type': get('ItemType'), name: get('Item') },
    author: get('Author') ? { '@type': 'Person', name: get('Author') } : '',
    datePublished: get('Date'),
    reviewBody: get('Body'),
    reviewRating: get('Rating') ? { '@type': 'Rating', ratingValue: get('Rating'), bestRating: '5' } : ''
  };
}});
</script>


## How to use it

1. **Name the item and your rating** — the two essentials.
2. **Add author and summary** for a complete, credible review block.
3. **Copy and paste** into the review page, then test it.

## About this tool

A standalone Review snippet shows your stars against the item you reviewed — ideal for blogs, affiliate reviews and editorial sites. The rating must reflect a genuine review published on the page; Google actively demotes self-serving or fabricated review markup.

For ratings collected from many customers (an average), use the Product Schema Generator's AggregateRating instead.

## Frequently asked questions

**Can I review my own product?**
Google discourages self-reviews for LocalBusiness and Organization types and may ignore them. Editorial reviews of third-party items are the safe use.

**What rating scale is used?**
1 to 5 stars, with 5 as the best — the generator sets bestRating to 5.

**Is my data sent anywhere?**
No — generated locally in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
