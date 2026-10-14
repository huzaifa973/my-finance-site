---
title: "Hreflang Tags: The Complete Guide to Multilingual SEO"
description: "Hreflang tags tell Google which language and region each page serves. Learn the syntax, common errors, and how to build correct hreflang markup."
date: 2026-10-14
tags: ["seo", "hreflang", "international seo"]
draft: false
image: /images/hreflang-tags-multilingual-seo-guide.svg
faq:
  - q: "What is an hreflang tag?"
    a: "An hreflang tag is an HTML link element that tells search engines which language and optional region a page targets, so the right audience sees the right version in search results."
  - q: "When do I need hreflang?"
    a: "Any time two or more pages on your site have the same or similar content aimed at different languages or regions — for example English pages for the US and the UK, or Spanish pages for Spain and Mexico."
  - q: "What is the x-default hreflang value?"
    a: "x-default is the fallback version shown to users whose language or region matches none of your specified versions. Point it at your global homepage or a language-selector page."
  - q: "Where do hreflang tags go?"
    a: "In the head of every page in the language group, in your XML sitemap, or in HTTP headers (for non-HTML files like PDFs). All versions must reference each other reciprocally."
---

If your site serves more than one language or region, you have a problem Google cannot solve on its own: two pages with similar content, one for Spanish speakers in Spain and one for Spanish speakers in Mexico, look like duplicates. Without help, Google may show the wrong version to the wrong audience — or treat your translations as thin copies. Hreflang tags are the help. They are small HTML annotations that tell search engines exactly which language and region each page serves, so every visitor lands on the version written for them. This guide covers what hreflang does, the exact syntax, the five errors that break it, and a step-by-step setup you can finish today.

## What hreflang actually does

Hreflang is a signal — not a ranking boost, but a routing instruction. When a page carries hreflang annotations listing all its language variants, Google can swap in the right version in search results based on the searcher's language settings and location. An English speaker in London sees the UK page; a Spanish speaker in Mexico City sees the Mexican Spanish page. Everyone gets content in their own language, and bounce rates drop because visitors stop landing on text they cannot read.

Without hreflang, Google treats your German, Austrian, and Swiss pages as near-duplicates and picks one arbitrarily. That means a shopper in Vienna might land on your Swiss page with Swiss prices in francs — a conversion killer.

## When you actually need it

<!-- ADSENSE: in-article ad slot -->

Add hreflang whenever any of these are true:

- **Translated pages.** Your site exists in English and Spanish, even if the content is identical in structure.
- **Same language, different regions.** US English and UK English, or Latin American vs European Spanish, with regional pricing, spelling, or offers.
- **Regional landing pages.** Country-specific homepages that differ only in currency or contact details.
- **Global fallback.** You have a main version plus regional alternates and need a default for everyone else.

If every page is English-only and aimed at one country, skip hreflang entirely — it adds nothing and creates new ways to break things.

## The exact syntax

Hreflang tags go in the `<head>` of every page in a language group, and every page must list **all** versions including itself. Language codes follow ISO 639-1 (`en`, `es`, `de`); regions are optional and follow ISO 3166-1 Alpha-2 (`en-us`, `es-mx`):

```html
<link rel="alternate" hreflang="en" href="https://example.com/about/" />
<link rel="alternate" hreflang="es" href="https://example.com/es/acerca/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/about/" />
```

The `x-default` entry is the fallback — the version shown to anyone whose language or region matches nothing you specified. Point it at your global homepage or a language-selector page, never at a random region.

### The golden rule: reciprocity
Every page in the group must reference every other page. If the English page lists the Spanish page, the Spanish page must list the English page. One-sided annotations are ignored by Google, so a missing return link silently breaks the whole cluster.

## Five hreflang errors that break everything

### 1. Broken reciprocity
The most common failure. You add hreflang to the English pages but forget the Spanish ones — or a template update drops the tags from half the group. Google discards non-reciprocal annotations.

### 2. Wrong or invalid codes
`en-UK` instead of `en-gb` (UK is not the ISO region code), or `esp` instead of `es`. Search Console flags these, but many sites never check.

### 3. Canonical conflict
The hreflang group says "these are all valid regional versions," while a canonical tag on one page says "actually this one is a duplicate." Conflicting signals make Google ignore both. Each regional page should self-canonicalize.

### 4. Missing x-default
Without a fallback, visitors outside your targeted regions get whatever Google guesses. Always define x-default.

### 5. Pointing at broken URLs
Hreflang `href` values must be absolute URLs that return 200. Pointing at redirects, 404s, or non-indexable pages voids the annotation for that version.

## Setting up hreflang step by step

1. **Map your language groups.** List every page set that needs hreflang — each group is one page plus all its regional/language variants.
2. **Choose your codes.** Language only (`en`) or language-region (`en-gb`)? Use language-only when the content is truly identical across regions; add the region when content differs.
3. **Generate the markup.** Our [hreflang generator](/tools/hreflang-generator/) builds the full annotation block for your group in seconds — free, no sign-up.
4. **Install reciprocally.** Add the complete block to the head of *every* page in the group, including the x-default entry.
5. **Check for conflicts.** Confirm each page's canonical is self-referencing and none of the versions are noindexed or blocked.
6. **Validate.** Paste the URLs into a free hreflang validator, then check Google Search Console's international targeting report a few days after deployment.

<!-- AFFILIATE: international SEO audits with tools like Semrush can map missing or broken hreflang clusters across large multilingual sites -->

Hreflang is pure plumbing — invisible to visitors, decisive for them. Set it up once, validate it, and every market you serve starts getting the page written for them instead of the one Google happened to pick.

## Frequently asked questions

### What is an hreflang tag?
An hreflang tag is an HTML link element that tells search engines which language and optional region a page targets, so the right audience sees the right version in search results. It is a routing signal, not a ranking factor.

### When do I need hreflang?
Any time two or more pages on your site have the same or similar content aimed at different languages or regions — for example English pages for the US and the UK, or Spanish pages for Spain and Mexico. Single-language, single-region sites do not need it.

### What is the x-default hreflang value?
x-default is the fallback version shown to users whose language or region matches none of your specified versions. Point it at your global homepage or a language-selector page — never at a random regional page.

### Where do hreflang tags go?
In the head of every page in the language group, in your XML sitemap, or in HTTP headers (for non-HTML files like PDFs). Whichever method you choose, all versions must reference each other reciprocally.
