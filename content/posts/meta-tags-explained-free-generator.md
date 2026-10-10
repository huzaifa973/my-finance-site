---
title: "Meta Tags Explained: Title, Description & Open Graph (Free Generator)"
description: "Learn what meta tags do for SEO — title, description, Open Graph, Twitter cards — and generate them free with our copy-paste meta tag tool."
date: 2026-10-10
draft: false
tags: ["seo", "blogging", "how-to"]
image: /images/meta-tags-explained-free-generator.svg
faq:
  - q: "What are meta tags in simple terms?"
    a: "Meta tags are snippets of code in a page's <head> that describe the page to search engines and social platforms — things like the title, description, and preview image. Visitors don't see them on the page, but they control how the page appears in Google results and social shares."
  - q: "Do meta keywords still matter for SEO?"
    a: "No. Google has ignored the meta keywords tag since 2009, and Bing treats it as a spam signal. Focus on the title tag and meta description instead — those still matter."
  - q: "How long should a meta description be?"
    a: "Aim for 150–160 characters. Google typically truncates descriptions around 155–160 characters on desktop, so put the important information and your keyword near the front."
  - q: "What's the difference between Open Graph and Twitter cards?"
    a: "Both control social share previews. Open Graph (og:) tags are the universal standard used by Facebook, LinkedIn, and most platforms; Twitter card tags fine-tune how the preview looks specifically on X/Twitter. Most sites set both."
---

You've seen meta tags at work a thousand times without knowing it. That blue clickable title in Google results? That's a title tag. The two-line summary underneath it? The meta description. The nice preview card with an image when someone shares a link on Facebook? Open Graph tags.

Meta tags are invisible on the page itself, but they control how your page looks everywhere else on the internet — search results, social shares, messaging apps. Get them right and more people click. Get them wrong and even great content underperforms. Here's what each one does, and how to generate them all in about two minutes.

## What are meta tags, exactly?

Meta tags live in the `<head>` section of your HTML — the part of the page browsers read but visitors never see. They're short labeled snippets like this:

```html
<title>Best Budget Laptops 2026 — DollarWise</title>
<meta name="description" content="We tested 14 budget laptops under $500...">
```

Each tag hands a specific piece of information to a specific consumer: search engines, social platforms, or browsers. Writing them by hand is error-prone (one typo in an `og:image` tag and your Facebook preview breaks), which is why generators exist — more on that below.

## The 6 meta tags that actually matter

There are dozens of possible meta tags, but six do ~95% of the work:

### 1. Title tag — your Google headline

The `<title>` is the single most important on-page SEO element. It's the blue link text in search results and the text in the browser tab. Keep it under 60 characters, put your main keyword near the front, and make it sound like something a human would click — because it is.

### 2. Meta description — your search-result pitch

The description doesn't directly boost rankings, but it controls the snippet under your title in Google — and a compelling snippet gets more clicks. Treat it like ad copy: 150–160 characters, include the keyword naturally, and end with a reason to click.

### 3–4. Open Graph title, description & image — your social preview

`og:title`, `og:description`, and `og:image` decide what people see when your link is shared on Facebook, LinkedIn, iMessage, Slack, and Discord. Without them, platforms guess — and they guess badly, often pulling a random sidebar image. Set these on every page you care about.

### 5. Twitter card tags — your X preview

`twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` fine-tune the preview on X (Twitter). A `summary_large_image` card with a proper 1200×628 image dramatically outperforms the default small preview.

### 6. Canonical tag — your duplicate-content guard

`rel="canonical"` tells Google which URL is the "real" one when similar content exists at multiple addresses (HTTP vs HTTPS, www vs non-www, tracking parameters). Skip it and Google may split your ranking power across duplicates.

**Ignore:** the `keywords` meta tag. Google has ignored it since 2009, and Bing has said it can count as a spam signal. Anyone still selling "meta keyword optimization" is selling 2009.

## Generate all your meta tags in 3 steps (free)

DollarWise's [free meta tag generator](/tools/meta-tag-generator/) builds the complete, correctly-formatted tag set for any page — no hand-coding, no syntax errors:

1. Open the [meta tag generator](/tools/meta-tag-generator/) and fill in your page title, description, URL, and image.
2. Toggle on the tag sets you need: standard SEO, Open Graph, and Twitter cards (all three is the usual choice).
3. Copy the generated code block and paste it into your page's `<head>` section — in WordPress that's via an SEO plugin or your theme's header settings; in static sites it's directly in the HTML.

After publishing, verify your tags: Google's Rich Results Test checks the SEO basics, and Facebook's Sharing Debugger (plus X's Card Validator) show you exactly what your social preview will look like. Fix issues there before you share the link widely.

<!-- ADSENSE: in-article ad slot -->

## Meta tag best practices that actually move the needle

### Write titles for humans first, keywords second

"Best Budget Laptops 2026: 14 Tested Under $500" beats "Budget Laptops | Cheap Laptops | Laptops 2026". Google rewrites keyword-stuffed titles anyway — and has said it rewrites over half of them. A natural, specific title survives rewriting far more often.

### Make every page's tags unique

Duplicate titles and descriptions across pages confuse Google about which page should rank for what. This is the most common meta tag mistake on small sites, and it's an easy fix: every page gets its own title and description reflecting its actual content.

### Front-load the important words

Google truncates titles around 60 characters and descriptions around 155–160. On mobile the limits are even tighter. Put your keyword and your hook in the first half so truncation never eats the point.

### Use images built for sharing

Your `og:image` should be 1200×628 pixels — the size every major platform expects. A branded, readable share image can double click-through from social versus a random auto-pulled photo. No text-heavy tiny screenshots; they turn to mush at card size.

### Revisit tags on your top pages yearly

Titles with years ("Best X 2026") earn clicks but go stale. A yearly 10-minute pass updating titles, descriptions, and share images on your highest-traffic pages is one of the cheapest SEO wins available.

Once your meta tags are set, the next on-page check is your content itself — run it through a [keyword density checker](/tools/keyword-density-checker/) to make sure your target phrase appears naturally, not stuffed.

<!-- AFFILIATE: for full SEO audits beyond meta tags — rankings, backlinks, and competitor gaps — tools like Ahrefs or SEMrush pick up where free generators leave off -->

## Frequently asked questions

**What are meta tags in simple terms?**
Meta tags are snippets of code in a page's head section that describe the page to search engines and social platforms — things like the title, description, and preview image. Visitors don't see them on the page, but they control how the page appears in Google results and social shares.

**Do meta keywords still matter for SEO?**
No. Google has ignored the meta keywords tag since 2009, and Bing treats it as a spam signal. Focus on the title tag and meta description instead — those still matter.

**How long should a meta description be?**
Aim for 150–160 characters. Google typically truncates descriptions around 155–160 characters on desktop, so put the important information and your keyword near the front.

**What's the difference between Open Graph and Twitter cards?**
Both control social share previews. Open Graph (og:) tags are the universal standard used by Facebook, LinkedIn, and most platforms; Twitter card tags fine-tune how the preview looks specifically on X/Twitter. Most sites set both.
