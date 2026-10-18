---
title: "Geo Meta Tags: A Practical Local SEO Location Guide"
description: "Geo meta tags (ICBM, geo.region, geo.placename) explained: what they do, how to add them to your site, and how to validate them for local SEO."
date: 2026-10-14
tags: ["seo", "local seo", "meta tags"]
categories: ["seo"]
draft: false
image: /images/geo-meta-tags-local-seo-guide.svg
faq:
  - q: "What are geo meta tags?"
    a: "Geo meta tags are HTML meta tags that declare your business's geographic location to search engines. The classic set is geo.region, geo.placename, and ICBM, placed in the <head> of your pages."
  - q: "Do geo meta tags still help local SEO?"
    a: "They are a small signal, not a ranking silver bullet. Used alongside a Google Business Profile, local citations, and location-relevant content, they reinforce your geographic relevance to search engines."
  - q: "Where do I put geo meta tags on my website?"
    a: "In the <head> section of each location-specific page, most importantly your homepage and contact/location pages. Each page should carry the coordinates of the location it describes."
  - q: "How do I check if my geo meta tags are working?"
    a: "View your page source and confirm the tags are in the <head>, then use our free geo tags generator to validate the format, coordinates, and region codes before publishing."
---

If you run a business with a physical address — a bakery, a clinic, a repair shop — you want search engines to know exactly where you are. Geo meta tags are small lines of HTML that state your location outright: your region, your city or neighborhood name, and your latitude and longitude. They take five minutes to add, cost nothing, and reinforce every other local SEO effort you make. This guide explains what each geo tag does, shows you the exact code to paste, and walks through validating them so they actually work.

## What geo meta tags are (and what they are not)

Geo meta tags live in the `<head>` of your HTML and declare a page's geographic location in a machine-readable way. The classic set comes from a draft standard that search engines supported for years:

- **geo.region** — the region code, typically the two-letter country code plus subdivision, like `US-TX` for Texas or `GB-LND` for London.
- **geo.placename** — the human-readable place name, such as "Austin" or "Shoreditch, London".
- **ICBM** — the latitude and longitude of the location, written as `lat, long`, e.g. `30.2672, -97.7431`.
- **geo.position** — a newer variant of ICBM using the same `lat;long` format.

Be honest about their power: geo meta tags are a *supporting* signal, not a ranking cheat code. Google has said for years that local rankings lean far more on your Google Business Profile, reviews, citations, and genuinely local content. Think of geo tags as removing ambiguity — they make sure a crawler never has to guess which "Springfield" you mean.

<!-- ADSENSE: in-article ad slot -->

## The three geo tags that matter

You only need three tags to cover the job. Here is exactly what to put in your page `<head>`, using a fictional coffee shop in Austin, Texas:

```html
<meta name="geo.region" content="US-TX" />
<meta name="geo.placename" content="Austin, Texas" />
<meta name="ICBM" content="30.2672, -97.7431" />
```

A few formatting rules that trip people up:

1. **Coordinates use decimal degrees.** `30.2672, -97.7431` is correct; `30°16'02"N` is not. Get decimals from any map by right-clicking a location.
2. **Latitude comes first, then longitude.** Mixing up the order places your business in the wrong hemisphere.
3. **Use negative longitude for the Americas** and negative latitude for the Southern Hemisphere. Double-check the signs.
4. **Match the placename to the page.** Your Austin location page gets Austin coordinates; your Dallas page gets Dallas coordinates. Never copy-paste one set across a whole site.

## How to add geo meta tags to your website: step by step

**Step 1: Find your coordinates.** Open a maps service, right-click your exact storefront entrance, and copy the decimal latitude and longitude. Pin the entrance customers walk into, not the center of your building.

**Step 2: Build your region code.** Use the two-letter country code, a hyphen, and the standard subdivision code: `US-TX`, `US-CA`, `GB-ENG`, `CA-ON`, `AU-NSW`. These follow the ISO 3166 standard that most systems recognize.

**Step 3: Paste the tags into your page head.** On a static site, add the three lines directly to the `<head>` of your location pages. On WordPress, use your SEO plugin's custom head fields or a header/footer code plugin. On a page builder, look for a "custom code in head" setting per page.

**Step 4: Do it per location page, not site-wide.** Multi-location businesses should give every location page its own set of tags pointing at that branch's address. Your homepage gets your headquarters or primary location.

**Step 5: Validate before you publish.** View the live page source, search for `geo.`, and confirm the tags appear inside `<head>` with correct formatting. Or skip the manual check — our [geo tags generator](/tools/geo-tags-generator/) builds the exact tags from your address or coordinates and validates the format for you, free in your browser.

## Common geo meta tag mistakes to avoid

**Using one location for every page.** This is the most common error, and it actively confuses search engines about multi-location businesses. Each page, its own coordinates.

**Coordinates of the wrong spot.** Right-clicking the middle of a shopping center instead of your door can shift the pin by hundreds of meters. For "near me" searches, that gap matters.

**Mixing up lat and long.** Latitude always comes first in ICBM format. A swapped pair can land your Austin bakery somewhere in the ocean off Yemen.

**Forgetting the negative sign.** Dropping the minus from a western-hemisphere longitude moves you to the Eastern Hemisphere. Always sanity-check by pasting your numbers back into a map.

**Expecting instant ranking changes.** Geo tags support your local SEO foundation; they do not replace reviews, citations, or a verified Business Profile. Give the whole package a few weeks.

## What to do alongside geo tags for real local impact

Tags alone will not win local search. Pair them with the moves that actually move the needle:

1. **Claim and complete your Google Business Profile** with the same address, hours, and categories everywhere.
2. **Keep your NAP consistent** — name, address, phone number identical on your site, directories, and social profiles.
3. **Collect reviews steadily** and reply to them; review velocity and responses are strong local signals.
4. **Publish location-relevant content** — neighborhood guides, local case studies, event pages — so your site earns its local relevance, not just declares it.

<!-- AFFILIATE: a rank-tracking tool like Semrush or Ahrefs can monitor your local keyword positions once your geo tags and Business Profile are live -->

## Frequently asked questions

### What are geo meta tags?
Geo meta tags are HTML meta tags placed in a page's `<head>` that declare the page's geographic location to search engines. The classic set — geo.region, geo.placename, and ICBM — covers your region code, place name, and exact coordinates.

### Do geo meta tags still help local SEO?
They are a small supporting signal rather than a major ranking factor. Combined with a complete Google Business Profile, consistent citations, reviews, and local content, they reinforce your geographic relevance and remove ambiguity for crawlers.

### Where do I put geo meta tags on my website?
In the `<head>` section of each location-specific page — most importantly your homepage and contact/location pages. Each page should carry the coordinates of the specific location it describes, never a single site-wide set.

### How do I check if my geo meta tags are working?
View your page source and confirm the tags sit inside the `<head>` with correctly formatted decimal coordinates. For a faster check, run your details through our free geo tags generator, which builds and validates the tags for you.
