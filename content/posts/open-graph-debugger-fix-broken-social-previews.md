---
title: "Open Graph Debugger: Fix Broken Social Previews"
description: "Open Graph debugger guide — fix broken link previews on Facebook, X, LinkedIn & Discord. Diagnose missing images, wrong titles, and cache issues."
date: 2026-10-16
tags: ["seo", "open-graph", "social-media"]
draft: false
image: /images/open-graph-debugger-fix-broken-social-previews.svg
slug: open-graph-debugger-fix-broken-social-previews
faq:
  - q: "Why is my link preview showing the wrong image?"
    a: "Usually a cached old preview or a missing og:image tag. Set a proper og:image (1200×630px), then re-scrape the URL in the platform's debugger to clear the cache."
  - q: "How do I fix a link preview on Facebook?"
    a: "Use Facebook's Sharing Debugger: enter the URL, click 'Scrape Again' to refresh the cache, and fix any missing og:title, og:description, or og:image tags it reports."
  - q: "What size should Open Graph images be?"
    a: "1200×630 pixels is the universal recommendation — it displays crisply on Facebook, LinkedIn, and Discord. Keep it under 8MB (ideally under 1MB) for reliable fetching."
  - q: "Why does my preview work on one platform but not another?"
    a: "Each platform caches independently and has slightly different tag requirements. X needs twitter:card tags, LinkedIn is strict about image accessibility — debug each platform separately."
---

You share your article link. Instead of your beautiful featured image and clever headline, the preview shows... a grey box. Or last month's image. Or no image at all. Broken social previews silently kill click-through rates — people don't click links that look broken.

The fix is a combination of correct Open Graph tags and each platform's debugger tool to clear stale caches. Start by generating proper tags with our free [Open Graph tag generator](/tools/open-graph-debugger/), then use this guide to diagnose and fix whatever's wrong.

## How social previews actually work

When you paste a link into Facebook, X, LinkedIn, Discord, or Slack, the platform's crawler fetches your page and looks for Open Graph meta tags in the `<head>`:

- `og:title` — the headline shown in the preview
- `og:description` — the summary text
- `og:image` — the preview image
- `og:url` — the canonical URL
- `og:type` — usually "website" or "article"

The crawler then **caches** what it found — often for days or weeks. This cache is the source of most "broken preview" mysteries: you fixed the tags, but the platform is still showing what it scraped last Tuesday. Debuggers exist precisely to inspect this cache and force a re-scrape.

## The essential Open Graph tags (get these right first)

<!-- ADSENSE: in-article ad slot -->

Before debugging, make sure the tags themselves are correct. Every page you want shared needs at minimum:

```html
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="A compelling 1-2 sentence summary.">
<meta property="og:image" content="https://yoursite.com/images/preview.jpg">
<meta property="og:url" content="https://yoursite.com/your-page/">
<meta property="og:type" content="article">
```

For X (Twitter), add: `<meta name="twitter:card" content="summary_large_image">` — without it, X falls back to a small thumbnail.

**Image rules that prevent 90% of problems:**
- Absolute URL (https://...), never relative paths — crawlers can't resolve relative image URLs
- 1200×630px dimensions for crisp display everywhere
- Under 8MB file size (under 1MB is safer — some crawlers time out on huge images)
- Publicly accessible — no hotlink protection, no login walls, no robots.txt blocks on the image

Generate a complete, correct tag set with our free [Open Graph tag generator](/tools/open-graph-debugger/) instead of hand-writing them.

## Debugging platform by platform

**Facebook / Instagram / Threads — Sharing Debugger.** Enter your URL and click "Scrape Again." It shows exactly what Facebook's crawler sees: the fetched tags, the image, and any errors or warnings. The "Scrape Again" button busts the cache — this alone fixes most stale-preview issues. Common warnings: image too small, image inaccessible, missing og:title.

**X (Twitter) — Card Validator.** Paste the URL to preview the card and refresh X's cache. X is picky about the `twitter:card` tag — `summary_large_image` gives you the big image layout; without it you get a tiny thumbnail regardless of your og:image.

**LinkedIn — Post Inspector.** LinkedIn caches aggressively (up to 7 days) and its inspector is the only reliable way to force a refresh. LinkedIn is also strict about image accessibility — if your server is slow or the image URL redirects, LinkedIn silently drops the image.

**Discord / Slack / WhatsApp.** These have no public debugger — they cache the first scrape and offer no manual refresh. Your only lever is correct tags from the start, plus appending a cache-busting query parameter (`?v=2`) to the URL when sharing, which forces a fresh scrape of what the crawler sees as a "new" URL.

<!-- AFFILIATE: publishers sharing dozens of links daily often use a social scheduling tool with built-in preview checks — catching a broken og:image before scheduling beats discovering it after -->

## The most common preview failures (and fixes)

**Wrong or old image.** Cause: stale cache 90% of the time. Fix: re-scrape in the platform debugger. If it persists, verify og:image is an absolute HTTPS URL pointing to a publicly fetchable file.

**No image at all.** Causes: missing og:image tag, relative image URL, image blocked by robots.txt or hotlink protection, image too large (crawler timed out), or slow server response. Check each in order.

**Wrong title/description.** Stale cache again — or your CMS outputs different tags than you think (view page source to confirm what's actually in the `<head>`). Dynamic sites sometimes serve crawlers different HTML; check with the debugger's "view source" output.

**Preview works on Facebook but not LinkedIn.** Independent caches and different strictness. Debug each platform separately; LinkedIn especially dislikes redirect chains on image URLs.

**Image looks blurry.** Your og:image is smaller than 1200×630 or heavily compressed. Social platforms don't upscale gracefully — serve the full recommended size.

## Frequently asked questions

### Why is my link preview showing the wrong image?
Usually a cached old preview or a missing og:image tag. Set a proper og:image (1200×630px, absolute HTTPS URL), then re-scrape the URL in the platform's debugger to clear the cache. Facebook's Sharing Debugger "Scrape Again" button fixes this in seconds.

### How do I fix a link preview on Facebook?
Use Facebook's Sharing Debugger: enter the URL, click "Scrape Again" to refresh the cache, and fix any missing og:title, og:description, or og:image tags it reports. Generate correct tags first with our free [Open Graph tag generator](/tools/open-graph-debugger/).

### What size should Open Graph images be?
1200×630 pixels is the universal recommendation — it displays crisply on Facebook, LinkedIn, Discord, and Slack. Keep the file under 8MB (ideally under 1MB) for reliable fetching, and always use an absolute HTTPS URL.

### Why does my preview work on one platform but not another?
Each platform caches independently and has slightly different requirements. X needs twitter:card tags for large images, LinkedIn is strict about image accessibility and caches for up to 7 days, and Discord/Slack offer no manual cache refresh. Debug each platform with its own tool.
