---
title: "Robots.txt Template Pack: Copy-Paste Rules for Every Site"
description: "Free robots.txt template pack: 10 copy-paste rule sets for WordPress, staging, ecommerce, blogs, and JS-heavy sites, with sitemap and crawl tips."
date: 2026-10-24
tags: ["seo", "robots.txt", "templates"]
categories: ["seo"]
draft: false
image: /images/robots-txt-template-pack.svg
slug: robots-txt-template-pack
post_type: resource
faq:
  - q: "Will robots.txt stop Google from indexing a page?"
    a: "No. Robots.txt tells crawlers not to visit a URL, but it does not remove it from the index. A page that other sites link to can still appear in search results. To keep a page out of the index, use a noindex meta tag or HTTP header instead."
  - q: "Do I need to list my sitemap in robots.txt?"
    a: "It is not required, but it is good practice. Declaring Sitemap: in robots.txt gives every crawler an immediate path to your sitemap without needing Search Console, and it costs nothing to add."
  - q: "Can robots.txt block AI crawlers and scrapers?"
    a: "Well-behaved bots will respect Disallow rules aimed at their user-agent, so a targeted block is worth adding. However, robots.txt is a request, not enforcement — aggressive scrapers often ignore it, so pair it with server-side or firewall-level blocking for real protection."
---

A robots.txt file is the doorman of your website: it tells search engine crawlers and bots which corners of your site they may visit and which to skip. It is a single text file, but getting it wrong costs real traffic — one stray `Disallow: /` on a live site can wipe your pages from search results overnight, while a missing file lets crawlers burn their budget on admin pages, cart URLs, and staging leftovers instead of your content.

This free template pack gives you 10 ready-to-use robots.txt rule sets for the most common site types. Each template is complete and copy-paste ready: pick the one that matches your site, adjust the sitemap URL and domain-specific paths, and upload it to your site root as `robots.txt`. No plugins, no rewrites, and no guesswork about syntax.

## What's inside this template pack

The pack covers ten real-world scenarios: a standard open site, a WordPress install, a staging or development site that must stay hidden, blocking specific AI crawlers and scrapers, an ecommerce store with cart and checkout pages, a blog that feeds Google News, a JavaScript-heavy site whose assets crawlers need to see, rules for subdomains and site sections, a multi-sitemap setup, and a careful wildcard example. Each template includes the exact directives, comments explaining what each rule does, and the correct sitemap line to include.

## The full robots.txt template pack

Copy a template into a plain text file named `robots.txt` in your site root (so it is served at `https://yourdomain.com/robots.txt`). After uploading, test it with your crawler or Search Console's robots.txt tester.

**1. Standard site — allow everything, declare sitemap**

```
# Standard robots.txt — allows all crawlers everywhere
User-agent: *
Disallow:

# Point every crawler at your sitemap
Sitemap: https://yourdomain.com/sitemap.xml
```

**2. WordPress starter — keep admin and search results out**

```
# WordPress starter
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/
Disallow: /?s=
Disallow: /search/
Allow: /wp-content/uploads/

Sitemap: https://yourdomain.com/sitemap.xml
```

**3. Staging / development site — block everything**

```
# Staging/dev only — blocks ALL crawlers from the whole site
# NEVER use this on a live production site
User-agent: *
Disallow: /
```

**4. Block specific AI crawlers and scrapers**

```
# Block AI training crawlers while keeping search engines welcome
User-agent: *
Disallow:

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: anthropic-ai
Disallow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

**5. Ecommerce store — hide cart, checkout, and account pages**

```
# Ecommerce — keep transactional pages out of search results
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /my-account/
Disallow: /order/
Disallow: /wishlist/
Disallow: /*?add-to-cart=
Disallow: /*?filter_

Sitemap: https://yourdomain.com/sitemap.xml
```

**6. Blog — plus a clean crawl for news content**

```
# Blog starter
User-agent: *
Disallow: /wp-admin/
Disallow: /?s=
Disallow: /author/admin/
Disallow: /feed/
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
Sitemap: https://yourdomain.com/news-sitemap.xml
```

**7. JavaScript-heavy site — let crawlers see your assets**

```
# JS-heavy site — blocking CSS/JS breaks rendering, so keep assets open
User-agent: *
Disallow: /api/
Disallow: /internal/
Disallow: /_next/data/
Allow: /_next/static/
Allow: /*.css$
Allow: /*.js$

Sitemap: https://yourdomain.com/sitemap.xml
```

**8. Sections and subdomains — different rules per area**

```
# Different rules per site section
User-agent: *
Disallow: /support/tickets/
Disallow: /community/private/

# A slower crawl rate for the forum section only
User-agent: *
Disallow: /forum/search/

Sitemap: https://yourdomain.com/sitemap.xml
```

**9. Multi-sitemap setup — split sitemaps by content type**

```
# Multi-sitemap setup for large sites
User-agent: *
Disallow: /internal/
Disallow: /staging/

Sitemap: https://yourdomain.com/sitemap-index.xml
Sitemap: https://yourdomain.com/sitemap-pages.xml
Sitemap: https://yourdomain.com/sitemap-posts.xml
Sitemap: https://yourdomain.com/sitemap-products.xml
```

**10. Wildcard example — block parameters, keep pages**

```
# Block faceted and parameterized URLs, keep the clean pages
User-agent: *
Disallow: /*?
Disallow: /*?sort=
Disallow: /*?page=
Allow: /products/
Allow: /blog/

Sitemap: https://yourdomain.com/sitemap.xml
```

<!-- ADSENSE: in-article ad slot -->

## How to use this template pack

1. Pick the template that matches your site type — or start from template 1 and add the block lines you need from the others.
2. Replace every `yourdomain.com` with your real domain, and adjust any platform-specific paths (WordPress, Shopify, and Next.js paths differ).
3. Save the file as exactly `robots.txt` in plain text (no Word formatting, no BOM) and upload it to your site root.
4. Verify it loads at `https://yourdomain.com/robots.txt`, then run a quick crawl test or use Search Console's robots.txt tester to confirm the rules parse.
5. Revisit the file whenever you launch new site sections, move to staging, or add pages that should never be crawled — a stale robots.txt silently blocks good traffic.

The single most expensive mistake is leaving a staging `Disallow: /` rule on a production site after launch. Make step 5 a habit: check the live robots.txt after every deployment, migration, or platform change, and you will never pay that price.

## Frequently asked questions

**Will robots.txt stop Google from indexing a page?**
No. Robots.txt only asks crawlers not to visit a URL — it does not remove the URL from the index. A blocked page that other sites link to can still show up in search results. If a page must stay out of the index entirely, add a `noindex` meta tag or `X-Robots-Tag: noindex` HTTP header instead of (or alongside) the robots.txt block.

**Do I need to list my sitemap in robots.txt?**
It is not strictly required, but it is best practice and costs nothing. The `Sitemap:` line hands every crawler — not just Google — the exact location of your sitemap without anyone needing to register the site in a webmaster tool. Keep it updated if your sitemap URL changes.

**Can robots.txt block AI crawlers and scrapers?**
Compliant bots such as GPTBot, CCBot, and Google-Extended honor user-agent-specific `Disallow` rules, so template 4 genuinely reduces AI training crawls. But robots.txt is a voluntary protocol: aggressive scrapers ignore it. For real enforcement, combine the robots.txt block with server rules, a bot-management service, or your CDN's firewall.

<a class="btn-download" href="/downloads/robots-txt-template-pack.md" download>Download the Robots.txt Template Pack: Copy-Paste Rules for Every Site</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
