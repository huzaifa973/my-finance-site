---
title: "Event Schema Generator — JSON-LD for Event Rich Results"
description: "Generate Event schema (JSON-LD) free: date, venue and tickets so your event can appear in Google's event listings. Fill the form, copy the code."
category: seo
date: 2026-10-12
draft: false
---

Concerts, workshops, webinars, meetups — **Event schema** makes them eligible for Google's event discovery surfaces, showing the date, venue and ticket link right in search.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Event Schema Generator</h2>
<p>Get your event into Google's event listings with date, place and tickets.</p>
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
<label for="cvName">Event name *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. Karachi Web Summit 2026">

</div><div class="setting">
<label for="cvStart">Start date & time *</label>
<input type="datetime-local" id="cvStart" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvEnd">End date & time</label>
<input type="datetime-local" id="cvEnd" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvVenue">Venue name</label>
<input type="text" id="cvVenue" class="tool-input" placeholder="e.g. Expo Centre / Online">

</div><div class="setting">
<label for="cvCity">City</label>
<input type="text" id="cvCity" class="tool-input" placeholder="Karachi">

</div><div class="setting">
<label for="cvDesc">Description</label>
<input type="text" id="cvDesc" class="tool-input" placeholder="What the event is about">

</div><div class="setting">
<label for="cvPrice">Ticket price</label>
<input type="number" id="cvPrice" class="tool-input" placeholder="25">

</div><div class="setting">
<label for="cvCurr">Currency</label>
<select id="cvCurr">
<option value="USD" selected>USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
<option value="PKR">PKR</option>
<option value="INR">INR</option>
</select>

</div><div class="setting">
<label for="cvUrl">Ticket / event URL</label>
<input type="text" id="cvUrl" class="tool-input" placeholder="https://…">

</div><div class="setting">
<label for="cvStatus">Status</label>
<select id="cvStatus">
<option value="EventScheduled" selected>Scheduled</option>
<option value="EventPostponed">Postponed</option>
<option value="EventCancelled">Cancelled</option>
</select>

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
    '@type': 'Event',
    name: get('Name'),
    startDate: get('Start'),
    endDate: get('End'),
    eventStatus: 'https://schema.org/' + get('Status'),
    description: get('Desc'),
    location: get('Venue') ? { '@type': 'Place', name: get('Venue'), address: get('City') ? { '@type': 'PostalAddress', addressLocality: get('City') } : '' } : '',
    offers: get('Price') ? { '@type': 'Offer', price: get('Price'), priceCurrency: get('Curr'), url: get('Url'), availability: 'https://schema.org/InStock' } : ''
  };
}});
</script>


## How to use it

1. **Fill in name, start date and venue** — the three Google needs most.
2. **Add tickets** if you sell them — price and URL make the listing actionable.
3. **Copy, paste, test.** Update the status field if plans change.

## About this tool

Google's event listings pull structured data from pages exactly like yours. Complete Event schema — with a real location (or VirtualLocation for online events), start time and offers — is the admission ticket. Keeping the status accurate (postponed/cancelled) matters: stale event listings erode trust and rankings.

For online events, put 'Online' as the venue; a fuller VirtualLocation block can be added by hand following the same pattern.

## Frequently asked questions

**Does the event need to be in person?**
No — online events qualify too. Use the venue field for the platform name and keep the same city field blank if it is fully virtual.

**What if the event is free?**
Set the ticket price to 0 — free events get a nice 'Free' treatment in listings.

**Is my data sent anywhere?**
No — generated locally in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
