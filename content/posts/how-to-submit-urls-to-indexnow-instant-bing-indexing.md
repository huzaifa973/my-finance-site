---
title: "How to Submit URLs to IndexNow for Instant Bing Indexing"
description: "IndexNow lets you notify Bing and Yandex the moment content changes — no more waiting days for a recrawl. Learn how the protocol works and how to submit URLs."
date: 2026-10-19
draft: false
tags: ["indexnow", "bing", "indexing", "seo"]
categories: ["seo"]
image: /images/how-to-submit-urls-to-indexnow-instant-bing-indexing.svg
slug: how-to-submit-urls-to-indexnow-instant-bing-indexing
faq:
  - q: "What is IndexNow and which search engines support it?"
    a: "IndexNow is an open protocol that lets websites ping search engines the instant a URL is created, updated, or deleted. Bing and Yandex support it; Google has not adopted it."
  - q: "Is IndexNow free to use?"
    a: "Yes. Submitting URLs through IndexNow costs nothing. You only need a key file hosted on your domain to prove ownership of the URLs you submit."
  - q: "How fast does Bing index URLs submitted through IndexNow?"
    a: "Usually within minutes to a few hours, compared to the days or weeks a normal crawl queue can take for low-traffic pages."
  - q: "Do I still need a sitemap if I use IndexNow?"
    a: "Yes. Sitemaps remain the discovery backbone for crawlers, while IndexNow is a real-time notification layer. Use both: sitemaps for structure, IndexNow for speed."
---

You publish a new page. Then you wait. And wait. Days pass before Bing bothers to crawl it, and every day it sits unindexed is a day it cannot rank or send you traffic. There is a better way: IndexNow, an open protocol that lets your site *notify* search engines the moment a URL is created, updated, or deleted — so indexing happens in minutes, not days.

This guide explains how IndexNow works, how to get a key, and how to start submitting URLs today.

## What IndexNow is (and isn't)

IndexNow is a simple push protocol launched in 2021 by Microsoft Bing and Yandex. Instead of search engines guessing when your content changed (by recrawling on a schedule), your site proactively pings them: "this URL is new," "this URL was updated," or "this URL was deleted."

Two important facts:

- **Bing and Yandex participate.** Google does not use IndexNow (it has its own indexing API for job postings and livestreams only), so IndexNow is a Bing/Yandex play — and Bing still drives a meaningful share of global search, plus it powers DuckDuckGo, Ecosia, and other engines.
- **It complements, not replaces, sitemaps.** Sitemaps give crawlers the full map of your site. IndexNow is the real-time alarm bell for changes. You want both.

## How the protocol works

IndexNow needs three things:

1. **A key.** A randomly generated string that proves you control the domain.
2. **A key file hosted at your domain root.** A text file named `<your-key>.txt` containing the key. Bing checks it before accepting your pings.
3. **A ping endpoint.** An HTTPS GET or POST request to `https://www.bing.com/indexnow` (or `https://yandex.com/indexnow`) with your host, key, key location, and the list of URLs.

A minimal GET request looks like this:

```
https://www.bing.com/indexnow?host=example.com&key=abc123...&keyLocation=https://example.com/abc123....txt&urlList=https://example.com/new-page/
```

You can submit up to 10,000 URLs per request, and there is no submission quota for verified sites beyond reasonable use. Response code 200 means accepted; 202 means accepted but your key will be checked; 400/403/422 mean malformed request, invalid key, or unresolvable URLs.

## Setting up your IndexNow key

Generating and hosting the key takes about two minutes:

1. **Generate a key.** Use a random string (UUID-style). Our free [IndexNow submitter tool](/tools/indexnow-submitter/) generates a key for you and formats the submission requests automatically.
2. **Create the key file.** Save a text file named `<key>.txt` at your domain root containing only the key. It must be reachable over HTTPS, e.g. `https://yoursite.com/4a9bf262d7be7ca73c1187827aed46cd.txt`.
3. **Verify it loads.** Open the URL in a browser — you should see just the key. If it 404s, the key check will fail and your pings will be rejected.
4. **Submit your URLs.** Fire pings whenever content is created, updated, or deleted.

<!-- ADSENSE: in-article ad slot -->

## Best practices for IndexNow submissions

Submitting correctly matters. Search engines reward good citizens and ignore noisy ones.

- **Submit only changed URLs.** Ping when a page is published, meaningfully updated, or deleted — not on every save or every crawl of your sitemap.
- **Submit the canonical URL.** If a page has query parameters, UTM tags, or session IDs, submit the clean canonical version.
- **One host per key.** The host in your request must match the key file's domain. Subdomains need their own keys unless you verify at the domain level.
- **Automate it.** Wire the ping into your publishing flow. Static site generators can hook into the build (for example, a post-build script that collects changed files and posts them), and CMS platforms like WordPress have IndexNow plugins. If you run Hugo like this site, a small Python script that reads a queue of new URLs and submits them after each deploy works well.
- **Deleted pages count too.** IndexNow accepts deleted URLs — use it to get 404s/gone pages out of the index faster instead of leaving stale results in search.

## What to expect after submitting

Typical timelines after a successful ping:

- **Minutes to a few hours** for Bing to fetch and index a new URL — versus days or weeks through the normal crawl queue, especially for new or low-traffic sites.
- **Faster re-indexing** of updated pages, which matters for time-sensitive content like price pages, job listings, or breaking news.
- **Cleaner removal** of deleted URLs from results.

You can monitor results in Bing Webmaster Tools under URL Inspection — submit a URL via IndexNow, then check its index status there. If it is not picked up within 24 hours, double-check your key file is reachable and your URLs return 200 (not blocked by robots.txt or login walls).

<!-- AFFILIATE: site owners on a new domain or fresh hosting often pair IndexNow setup with a domain registrar or hosting plan for the key file's root placement -->

## IndexNow vs. sitemaps vs. the Google Indexing API

A quick comparison so you use each tool where it shines:

| Method | Engines | Speed | Cost |
|---|---|---|---|
| IndexNow | Bing, Yandex | Minutes–hours | Free |
| XML sitemap | All | Days–weeks (crawl-dependent) | Free |
| Google Indexing API | Google only, jobs/livestreams | Minutes | Free (limited scope) |

For a typical blog or content site, the winning combo is: keep your XML sitemap healthy for everyone, use IndexNow for Bing/Yandex, and accept Google's normal crawl for everything outside its narrow Indexing API scope.

## Frequently asked questions

### What is IndexNow and which search engines support it?

IndexNow is an open protocol that lets websites ping search engines the instant a URL is created, updated, or deleted. Bing and Yandex support it; Google has not adopted it.

### Is IndexNow free to use?

Yes. Submitting URLs through IndexNow costs nothing. You only need a key file hosted on your domain to prove ownership of the URLs you submit.

### How fast does Bing index URLs submitted through IndexNow?

Usually within minutes to a few hours, compared to the days or weeks a normal crawl queue can take for low-traffic pages.

### Do I still need a sitemap if I use IndexNow?

Yes. Sitemaps remain the discovery backbone for crawlers, while IndexNow is a real-time notification layer. Use both: sitemaps for structure, IndexNow for speed.
