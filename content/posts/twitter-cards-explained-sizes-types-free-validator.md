---
title: "Twitter Cards Explained: Sizes, Types, and a Free Validator"
description: "Twitter Cards explained: the four card types, exact image sizes, the full meta tag reference, and a free validator to preview and fix your cards."
date: 2026-10-13
tags: ["seo", "twitter cards", "social media"]
draft: false
image: /images/twitter-cards-explained-sizes-types-free-validator.svg
faq:
  - q: "What is a Twitter Card?"
    a: "A Twitter Card is a rich preview attached to a link shared on X (Twitter) — it can show a title, description, and image instead of a bare URL. You control it with twitter: meta tags in your page's HTML, and you can preview the result with a free validator tool."
  - q: "Why is my Twitter Card not showing?"
    a: "The most common causes are missing or mistyped meta tags, a blocked or unreachable image URL, a robots.txt blocking Twitter's crawler, or a cached old version of the page. Use the validator to clear the cache and re-scrape the page."
  - q: "What size should Twitter Card images be?"
    a: "For summary cards with large images, use 1200x628 pixels (1.91:1 aspect ratio) under 5 MB. For standard summary cards, a square image of at least 144x144 pixels works, though 400x400 is recommended for quality."
  - q: "Do Twitter Cards work on X?"
    a: "Yes. Twitter Cards still work on X (the platform formerly known as Twitter) and are powered by the same twitter: meta tags. The validator and crawler behave the same as before the rebrand."
---

When you paste a link into X (Twitter) and it unfolds into a nice preview with a title, description, and image — that's a Twitter Card. When it doesn't, and you just get a naked URL, your link looks broken and gets fewer clicks. The difference comes down to a handful of meta tags in your page's HTML, and getting them right takes about five minutes.

This guide covers every card type, the exact image sizes, the full meta tag reference, and how to fix cards that refuse to show — with a [free validator](/tools/twitter-card-generator/) to preview and test your setup.

## The Four Card Types

Twitter Cards come in four flavors. Most sites only ever need the first two.

### 1. Summary Card

The default. Shows a title, a short description, and a small square thumbnail. Good for blog posts and articles where the image isn't the star.

### 2. Summary Card with Large Image

The most popular choice. Shows the title and description with a large, wide image above them. This is the one that gets clicks — use it for articles, landing pages, and anything visual.

### 3. App Card

Designed for mobile apps, showing the app's name, icon, price, and a download link. Relevant mainly for app developers.

### 4. Player Card

Allows video or audio playback directly in the feed. Requires approval from X for your domain — most publishers never need it.

Choose your card type with the `twitter:card` meta tag: `summary`, `summary_large_image`, `app`, or `player`. If you don't specify one, X falls back to a plain summary.

## The Meta Tag Reference

Here are the tags that matter. Place them in your page's `<head>` alongside your Open Graph tags (X reads `og:` tags as a fallback, but explicit `twitter:` tags win):

- `twitter:card` — the card type, e.g. `summary_large_image`.
- `twitter:title` — the card's headline. Keep it under 70 characters so it isn't truncated.
- `twitter:description` — a one-to-two-sentence summary, ideally under 200 characters.
- `twitter:image` — the absolute URL of the preview image. Must be a full URL including `https://` — relative paths won't work.
- `twitter:image:alt` — alt text for the image, improving accessibility.
- `twitter:site` — your site's @username, shown as the card's attribution.
- `twitter:creator` — the content author's @username.

A minimal working example looks like this:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="How to Add Course Schema Markup">
<meta name="twitter:description" content="Add Course schema to your site in minutes with JSON-LD examples and a free generator.">
<meta name="twitter:image" content="https://example.com/images/course-schema.png">
<meta name="twitter:image:alt" content="Course schema markup example">
<meta name="twitter:site" content="@DollarWise">
```

<!-- ADSENSE: in-article ad slot -->

## Image Sizes and Aspect Ratios

Getting the image size wrong is the number one reason cards look bad. Follow these specs:

- **Summary card with large image:** 1200 x 628 pixels (1.91:1 aspect ratio). Minimum 300 x 157; keep the file under 5 MB. JPG, PNG, WEBP, and GIF (first frame only) are supported.
- **Standard summary card:** square image, minimum 144 x 144 pixels; 400 x 400 or larger recommended for crisp display.
- **App card:** 800 x 320 pixel image recommended.
- **General rules:** use absolute `https://` URLs, avoid images smaller than the minimums (X won't render the card), and keep text out of the extreme edges — X crops slightly on some clients.

One more detail that trips people up: X caches your card the first time a URL is shared. If you update the image later, old shares keep showing the old image until the cache is cleared (see troubleshooting below).

## Troubleshooting: Card Not Showing?

Work through this checklist in order — it fixes the vast majority of cases:

1. **Validate the tags.** Open your page source and confirm every `twitter:` tag is present, spelled correctly, and inside the `<head>`. A typo like `twitter:tittle` silently kills the card.
2. **Check the image URL.** Open the `twitter:image` URL in a browser. If it 404s, redirects, or requires a login, the card fails. It must be publicly reachable over HTTPS.
3. **Check robots.txt.** X's crawler (Twitterbot) must be allowed to fetch your page and image. A blanket `Disallow: /` blocks card rendering entirely.
4. **Clear the card cache.** Use the [validator tool](/tools/twitter-card-generator/) to re-scrape your URL — this refreshes X's cached version with your latest tags and image.
5. **Check image dimensions.** Below-minimum images are rejected silently. Measure your file; upscale if needed.
6. **Wait and re-test.** Freshly published pages sometimes need a few minutes before the crawler picks up changes.

<!-- AFFILIATE: If you manage social accounts for clients or a growing brand, social media management tools can schedule posts, preview link cards, and track click-through across platforms in one dashboard. -->

## Previewing Before You Publish

Don't find out your card is broken after you've shared the link. The workflow that works:

1. Build your page with the meta tags and image in place.
2. Run the URL through the [free validator](/tools/twitter-card-generator/) to preview exactly how the card will look.
3. Fix any issues it reports — missing tags, bad image URLs, wrong dimensions.
4. Share the link with confidence.

Pro tip: test with a staging URL or a URL parameter (like `?preview=1`) first, so X caches the final version rather than a half-finished draft.

## Twitter Cards vs. Open Graph

You'll often see `og:` tags doing similar work. Here's the relationship: Open Graph is the general standard (used by Facebook, LinkedIn, Discord, and others), while Twitter Cards are X's extension. X reads your Open Graph tags as a fallback — `og:title`, `og:description`, and `og:image` will render a card even without `twitter:` tags.

Best practice: include both. Set your Open Graph tags for every platform, then add the `twitter:card` type and any Twitter-specific tags (like `twitter:site`) on top. This gives you full control everywhere your links travel.

## Frequently asked questions

### What is a Twitter Card?
A Twitter Card is a rich preview attached to a link shared on X (Twitter) — it can show a title, description, and image instead of a bare URL. You control it with twitter: meta tags in your page's HTML, and you can preview the result with a free validator tool.

### Why is my Twitter Card not showing?
The most common causes are missing or mistyped meta tags, a blocked or unreachable image URL, a robots.txt blocking Twitter's crawler, or a cached old version of the page. Use the validator to clear the cache and re-scrape the page.

### What size should Twitter Card images be?
For summary cards with large images, use 1200x628 pixels (1.91:1 aspect ratio) under 5 MB. For standard summary cards, a square image of at least 144x144 pixels works, though 400x400 is recommended for quality.

### Do Twitter Cards work on X?
Yes. Twitter Cards still work on X (the platform formerly known as Twitter) and are powered by the same twitter: meta tags. The validator and crawler behave the same as before the rebrand.
