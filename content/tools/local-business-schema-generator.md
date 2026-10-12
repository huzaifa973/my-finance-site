---
title: "Local Business Schema Generator — JSON-LD for Local SEO"
description: "Generate LocalBusiness schema (JSON-LD) free: address, phone, opening hours and price range for Google Maps and local search visibility. No sign-up."
category: seo
date: 2026-10-12
draft: false
---

**LocalBusiness schema** feeds Google the facts about your shop, clinic, restaurant or service — address, hours, phone and price range — in the exact format local search and Maps use.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Local Business Schema Generator</h2>
<p>Help Google Maps and local search understand your business.</p>
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
<label for="cvName">Business name *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. Bella's Bakery">

</div><div class="setting">
<label for="cvBizType">Business type</label>
<select id="cvBizType">
<option value="LocalBusiness" selected>General local business</option>
<option value="Restaurant">Restaurant</option>
<option value="Store">Store / shop</option>
<option value="Dentist">Dentist</option>
<option value="Plumber">Plumber</option>
<option value="Electrician">Electrician</option>
<option value="LegalService">Legal service</option>
<option value="HealthAndBeautyBusiness">Health & beauty</option>
<option value="AutoRepair">Auto repair</option>
</select>

</div><div class="setting">
<label for="cvPhone">Phone</label>
<input type="text" id="cvPhone" class="tool-input" placeholder="+1 555 123 4567">

</div><div class="setting">
<label for="cvUrl">Website</label>
<input type="text" id="cvUrl" class="tool-input" placeholder="https://…">

</div><div class="setting">
<label for="cvStreet">Street address</label>
<input type="text" id="cvStreet" class="tool-input" placeholder="123 Main St">

</div><div class="setting">
<label for="cvCity">City</label>
<input type="text" id="cvCity" class="tool-input" placeholder="Austin">

</div><div class="setting">
<label for="cvRegion">State / region</label>
<input type="text" id="cvRegion" class="tool-input" placeholder="TX">

</div><div class="setting">
<label for="cvPostal">Postal code</label>
<input type="text" id="cvPostal" class="tool-input" placeholder="78701">

</div><div class="setting">
<label for="cvCountry">Country</label>
<input type="text" id="cvCountry" class="tool-input" placeholder="US">

</div><div class="setting">
<label for="cvPrice">Price range</label>
<select id="cvPrice">
<option value="$">$ — budget</option>
<option value="$$" selected>$$ — mid-range</option>
<option value="$$$">$$$ — premium</option>
<option value="$$$$">$$$$ — luxury</option>
</select>

</div><div class="setting">
<label for="cvHours">Opening hours</label>
<input type="text" id="cvHours" class="tool-input" placeholder="Mo-Fr 09:00-17:00">
<div class="hint">Format: Mo-Fr 09:00-17:00 (add a second line pattern with a comma for weekends)</div>
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
    '@type': get('BizType'),
    name: get('Name'),
    telephone: get('Phone'),
    url: get('Url'),
    priceRange: get('Price'),
    openingHours: get('Hours'),
    address: (get('Street') || get('City')) ? { '@type': 'PostalAddress', streetAddress: get('Street'), addressLocality: get('City'), addressRegion: get('Region'), postalCode: get('Postal'), addressCountry: get('Country') } : ''
  };
}});
</script>


## How to use it

1. **Enter the business facts** — exactly as they appear on your signage and Google Business Profile.
2. **Copy the JSON-LD** to your homepage or contact page.
3. **Keep it consistent** — name, address and phone must match everywhere (NAP consistency).

## About this tool

Local search runs on structured facts. This schema gives Google a machine-readable version of your business card: the same name-address-phone (NAP) data as your Business Profile, plus opening hours and price range that can appear in Maps and the local pack.

Inconsistent details across the web are the #1 local-SEO self-own — generate once, and reuse the exact same details on every directory and profile.

## Frequently asked questions

**Does this replace a Google Business Profile?**
No — it complements it. The Profile is the primary local listing; schema on your website reinforces the same facts.

**What format do opening hours use?**
Two-letter day codes and 24h times, e.g. Mo-Fr 09:00-17:00, or Sa 10:00-14:00 as a separate entry after a comma.

**Is my data sent anywhere?**
No — everything is generated in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
