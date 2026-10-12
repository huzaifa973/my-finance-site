---
title: "Product Schema Generator — Free JSON-LD for Rich Results"
description: "Generate Product schema (JSON-LD) free: price, availability, ratings and reviews for Google rich results. Fill the form, copy the code. No sign-up."
category: seo
date: 2026-10-12
draft: false
---

**Product schema** is what makes Google show prices, availability and star ratings right in search results. Fill in your product details and copy the JSON-LD — only the fields you complete are included.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Product Schema Generator</h2>
<p>Product rich results with price, stock and star ratings — in one form.</p>
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
<label for="cvName">Product name *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. Aurora Desk Lamp">

</div><div class="setting">
<label for="cvDesc">Description</label>
<input type="text" id="cvDesc" class="tool-input" placeholder="Short product description">

</div><div class="setting">
<label for="cvBrand">Brand</label>
<input type="text" id="cvBrand" class="tool-input" placeholder="e.g. Aurora">

</div><div class="setting">
<label for="cvImage">Image URL</label>
<input type="text" id="cvImage" class="tool-input" placeholder="https://…">

</div><div class="setting">
<label for="cvSku">SKU</label>
<input type="text" id="cvSku" class="tool-input" placeholder="e.g. LAMP-001">

</div><div class="setting">
<label for="cvPrice">Price</label>
<input type="number" id="cvPrice" class="tool-input" placeholder="49.99">

</div><div class="setting">
<label for="cvCurr">Currency</label>
<select id="cvCurr">
<option value="USD" selected>USD — US Dollar</option>
<option value="EUR">EUR — Euro</option>
<option value="GBP">GBP — British Pound</option>
<option value="PKR">PKR — Pakistani Rupee</option>
<option value="INR">INR — Indian Rupee</option>
</select>

</div><div class="setting">
<label for="cvAvail">Availability</label>
<select id="cvAvail">
<option value="InStock" selected>In stock</option>
<option value="OutOfStock">Out of stock</option>
<option value="PreOrder">Pre-order</option>
</select>

</div><div class="setting">
<label for="cvRating">Rating value (1–5)</label>
<input type="number" id="cvRating" class="tool-input" placeholder="4.7">

</div><div class="setting">
<label for="cvReviews">Review count</label>
<input type="number" id="cvReviews" class="tool-input" placeholder="132">

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
    '@type': 'Product',
    name: get('Name'),
    description: get('Desc'),
    image: get('Image'),
    sku: get('Sku'),
    brand: get('Brand') ? { '@type': 'Brand', name: get('Brand') } : '',
    aggregateRating: get('Rating') ? { '@type': 'AggregateRating', ratingValue: get('Rating'), reviewCount: get('Reviews') || undefined } : '',
    offers: get('Price') ? { '@type': 'Offer', price: get('Price'), priceCurrency: get('Curr'), availability: 'https://schema.org/' + get('Avail') } : ''
  };
}});
</script>


## How to use it

1. **Fill the form** — name and price are the essentials; ratings need real reviews to be legitimate.
2. **Copy the JSON-LD** — it updates live as you type.
3. **Paste it into your product page** and test with Google's Rich Results Test (button above).

## About this tool

Product schema powers the price, stock status and review stars shown under your listing in Google — rich results consistently earn more clicks than plain blue links. Google requires that the marked-up data matches what shoppers see on the page, and review stars must come from genuine reviews collected on your site.

This generator builds valid JSON-LD with Offer and AggregateRating blocks, including only the fields you provide.

## Frequently asked questions

**Do I need reviews to use this?**
No — the rating block is optional. But never invent ratings: fake review markup violates Google's policies and can get the rich result removed.

**Where exactly do I paste it?**
Inside the <head> of the product page, or just before </body> — Google reads both. Most CMSs have a 'custom HTML/schema' field per page.

**Is my data sent anywhere?**
No — the schema is generated in your browser as you type.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
