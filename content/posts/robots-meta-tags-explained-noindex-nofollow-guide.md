---
title: "Robots Meta Tags Explained: noindex, nofollow & More"
description: "Robots meta tags explained — what noindex, nofollow, noarchive and nosnippet do, when to use each, and how to add them correctly in 2026."
date: 2026-10-16
tags: ["seo", "meta-tags", "guide"]
categories: ["seo"]
draft: false
image: /images/robots-meta-tags-explained-noindex-nofollow-guide.svg
slug: robots-meta-tags-explained-noindex-nofollow-guide
faq:
  - q: "What does noindex do?"
    a: "The noindex directive tells search engines not to include the page in their index — it won't appear in search results. The page can still be crawled and visited directly."
  - q: "What is the difference between nofollow and noindex?"
    a: "noindex controls whether the page itself appears in search results; nofollow controls whether the page's outgoing links pass ranking credit. They solve different problems and are often combined."
  - q: "How do I add a robots meta tag to my page?"
    a: "Add <meta name=\"robots\" content=\"noindex, nofollow\"> inside the <head> section of your HTML. Our free meta tag generator builds the exact tag for you."
  - q: "Does noindex stop Google from crawling a page?"
    a: "No — noindex only prevents indexing, not crawling. Google must crawl the page to see the noindex tag. To save crawl budget, combine noindex with robots.txt disallow or remove internal links to the page."
---

The robots meta tag is one of the most powerful — and most misunderstood — tools in SEO. A single line of HTML decides whether a page appears in Google, whether its links pass authority, and whether search engines can show cached copies or snippets. Get it right and you control exactly what search engines do with every page. Get it wrong and you can accidentally deindex your entire site.

This guide explains every major robots directive, when to use each, and how to implement them correctly. When you're ready to generate tags, our free [meta tag generator](/tools/robots-meta-tag-generator/) builds them for you in seconds.

## What robots meta tags do

Search engine crawlers (Googlebot, Bingbot) read your pages looking for instructions. The robots meta tag is a per-page instruction placed in the HTML `<head>`, telling crawlers what they're allowed to do with that specific page. It looks like this:

`<meta name="robots" content="noindex, nofollow">`

The `content` attribute holds one or more directives separated by commas. Different directives can target different crawlers — `name="googlebot"` instead of `name="robots"` addresses Google specifically — but `robots` (all crawlers) is the standard default.

Crucially, robots meta tags are **hints, not commands** — except for noindex, which Google treats as a strong directive. And they only work if the crawler can actually fetch the page: a page blocked by robots.txt never gets its meta tags read.

## The core directives, explained

<!-- ADSENSE: in-article ad slot -->

**index / noindex.** The big one. `index` (the default) allows the page in search results; `noindex` keeps it out. Use noindex for: thank-you pages, internal search results, staging/dev pages, thin utility pages, login pages, and anything you don't want strangers finding via Google. Warning: noindex is how sites accidentally vanish — one misplaced tag in a site-wide template deindexes everything.

**follow / nofollow.** Controls link equity. `follow` (default) lets the page's outgoing links pass ranking credit; `nofollow` tells crawlers not to pass credit through the page's links. Common uses: user-generated content (comments, forums), paid/sponsored links (Google requires these to be nofollow or sponsored), and untrusted links you don't want to vouch for. Note: nofollow on a page does NOT stop the page itself from ranking.

**noarchive.** Prevents search engines from showing a "cached" copy of the page. Useful when content changes frequently or you don't want old versions accessible — though Google has largely retired the cached-page feature, making this less relevant than it once was.

**nosnippet.** Stops search engines from showing a text snippet (or video preview) under your page in results — the listing shows just the URL. Use it for pages where the snippet would give away content you want clicks for, or for sensitive pages where any excerpt is too much.

**max-snippet, max-image-preview, max-video-preview.** Fine-grained controls: limit snippet length (in characters), image preview size, or video preview duration. `max-image-preview:large` is notable — it explicitly allows large image previews, which Google needs for Discover and visual features.

**notranslate.** Tells Google not to offer translation of the page in search results. Relevant for pages where machine translation would mangle meaning (legal text, brand slogans).

## noindex vs robots.txt: the critical difference

<!-- AFFILIATE: sites managing thousands of indexable pages often pair tag audits with an affordable SEO crawler subscription — but small sites can audit everything with free tools -->

This confuses everyone, so let's settle it:

- **robots.txt `Disallow`** tells crawlers not to *fetch* the page at all. They won't see any meta tags on it. The page can still appear in search results as a URL-only listing if other sites link to it.
- **meta `noindex`** tells crawlers the page may be fetched but must not be *indexed*. The crawler must be allowed to fetch it for the tag to work.

The practical rule: **use noindex (not robots.txt) when you want a page out of the index.** Use robots.txt when you want to save crawl budget on pages crawlers shouldn't waste time fetching (faceted navigation, infinite calendars). Never do both on the same page — the robots.txt block prevents the crawler from ever seeing your noindex.

## Common robots meta tag recipes

Copy-paste patterns for everyday situations:

- **Normal public page:** `<meta name="robots" content="index, follow">` (or omit the tag entirely — this is the default)
- **Private/utility page:** `<meta name="robots" content="noindex, nofollow">`
- **Page you want indexed but with untrusted links:** `<meta name="robots" content="index, nofollow">`
- **Paid link / sponsored content page:** use `rel="sponsored"` on the links themselves rather than page-level nofollow
- **Allow indexing, limit previews:** `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`

Generate any combination without memorizing syntax using our free [meta tag generator](/tools/robots-meta-tag-generator/) — select your directives and copy the finished tag.

## Mistakes that tank sites

**The template-wide noindex.** A developer adds noindex to a staging template, the template ships to production, and the whole site drops from Google. Always verify indexation in Search Console after launches and template changes.

**noindex + robots.txt disallow together.** As explained above, the disallow hides the noindex from crawlers. Pick one mechanism per page.

**noindexing pages with valuable backlinks.** If a noindexed page has inbound links, that link equity goes nowhere. Either let it index or 301-redirect it to a page that can.

**Forgetting that nofollow is per-page.** Adding nofollow to your homepage's meta tag stops ALL its outgoing links from passing credit — including links to your own important pages. Page-level nofollow is a blunt instrument; link-level `rel="nofollow"` is the scalpel.

## Frequently asked questions

### What does noindex do?
The noindex directive tells search engines not to include the page in their index — it won't appear in search results. The page can still be crawled and visited directly. Use it for thank-you pages, staging sites, internal search results, and utility pages.

### What is the difference between nofollow and noindex?
noindex controls whether the page itself appears in search results; nofollow controls whether the page's outgoing links pass ranking credit. They solve different problems and are often combined as `noindex, nofollow` for pages you want fully out of the search ecosystem.

### How do I add a robots meta tag to my page?
Add `<meta name="robots" content="noindex, nofollow">` inside the `<head>` section of your HTML, adjusting the directives to your needs. Our free [meta tag generator](/tools/robots-meta-tag-generator/) builds the exact tag for you — no syntax memorization required.

### Does noindex stop Google from crawling a page?
No — noindex only prevents indexing, not crawling. Google must crawl the page to see the noindex tag. To save crawl budget on top of deindexing, combine noindex with a robots.txt disallow (carefully — the disallow hides the tag) or simply remove internal links pointing to the page.
