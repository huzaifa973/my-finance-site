---
title: "Redirect Chains Explained: How to Find and Fix Them"
description: "Redirect chains (A→B→C→D) waste crawl budget and slow pages. Learn what causes them, how to find them, and how to collapse them into single hops."
date: 2026-10-19
draft: false
tags: ["redirects", "technical-seo", "site-speed", "crawling"]
categories: ["seo"]
image: /images/redirect-chains-explained-find-fix.svg
slug: redirect-chains-explained-find-fix
faq:
  - q: "What is a redirect chain?"
    a: "A redirect chain is a series of redirects where one URL redirects to another, which redirects to another, and so on (A→B→C→D), before reaching the final page."
  - q: "How many redirects in a chain is too many?"
    a: "Google follows up to 10 hops but recommends keeping chains to 2 or fewer. One hop is ideal; anything beyond 3 is worth fixing."
  - q: "Do redirect chains hurt SEO?"
    a: "Yes. They waste crawl budget, slow page loads, dilute link equity slightly, and risk breaking entirely if any link in the chain fails."
  - q: "What is the difference between a redirect chain and a redirect loop?"
    a: "A chain eventually reaches a destination page; a loop circles back on itself forever (A→B→A) and the page never loads. Loops are critical emergencies."
---

A single redirect is harmless. Two is a smell. Three or more — A → B → C → D — is a redirect chain, and it quietly taxes every visitor and every search crawler that touches your site. Chains accumulate over years of site migrations, HTTPS upgrades, and trailing-slash "fixes," and most site owners never notice them until rankings slip or pages crawl slower than they should.

This guide explains what redirect chains are, why they hurt, how to find them, and how to fix them properly.

## What a redirect chain looks like

A redirect chain happens when one URL redirects to a second URL, which itself redirects to a third, before finally landing on the destination. Example:

```
http://example.com/page        (301) →
https://example.com/page       (301) →
https://www.example.com/page   (301) →
https://www.example.com/page/  (200 OK)
```

Each hop is a full extra HTTP round trip. Browsers and bots must wait for each response before requesting the next URL. A user on a slow mobile connection feels three extra round trips as noticeably sluggish loading; a crawler burns three fetches of its crawl budget on one page.

**Redirect loops** are the evil twin: the chain circles back (A → B → A → B…), the page never loads, and browsers show an error like `ERR_TOO_MANY_REDIRECTS`. Loops are emergencies — fix them first.

## Why redirect chains hurt SEO

1. **Crawl budget waste.** Search engines allocate a limited crawl budget per site. Chains multiply the fetches needed per page, so fewer of your pages get crawled per visit. Big sites feel this most.
2. **Slower page loads.** Every hop adds latency. Google uses page speed (Core Web Vitals) as a ranking signal, and real users bounce from slow pages.
3. **Link equity dilution.** Google says 301s pass nearly all ranking signals, but each hop adds a small loss and a chance of misinterpretation — a direct link to the final URL is always stronger.
4. **Fragility.** If any intermediate URL in the chain is deleted, misconfigured, or blocked by robots.txt, the whole chain breaks and the destination becomes unreachable.
5. **Crawler limits.** Google follows up to about 10 hops, but it may simply give up on long chains, leaving the final page uncrawled and unindexed.

## Common causes

- **Layered migrations.** You moved from HTTP to HTTPS in 2019, changed www to non-www in 2021, then reorganized URLs in 2024. Each migration added a hop, and nobody collapsed the old ones.
- **CMS and plugin redirects.** WordPress redirect plugins, Cloudflare page rules, and server-level rules can stack on top of each other invisibly.
- **Trailing-slash and case normalization.** Redirecting `/page` → `/page/` while another rule redirects non-www → www creates chains on every URL.
- **Redirect-to-redirect edits.** Someone updates an old redirect's target to a URL that is itself a redirect, instead of pointing straight at the final destination.

## How to find redirect chains

**Method 1: check single URLs.** Paste a URL into a redirect checker and follow the hop-by-hop trail — status codes, each intermediate URL, and the final destination. Our free [redirect checker](/tools/redirect-checker/) shows the full chain for any URL in seconds.

**Method 2: crawl your whole site.** Tools like Screaming Frog (free up to 500 URLs), Sitebulb, or Ahrefs' Site Audit crawl your site and report every chain and loop in one list, which is the practical way to audit hundreds of URLs.

**Method 3: Search Console.** Google's "Page indexing" report flags "Redirect error" pages — these are often loops or excessively long chains that Google gave up on.

**Method 4: your server logs.** A URL that appears repeatedly in logs with 301/302 statuses and near-identical timestamps is a chain being traversed. Log analysis catches chains on pages crawlers hit that your crawl missed.

## How to fix them

<!-- ADSENSE: in-article ad slot -->

The fix is simple in principle: **every redirect should point directly at the final destination URL in a single hop.**

1. **Map the chain.** For each chained URL, trace it to the final 200-OK destination.
2. **Rewrite the first redirect.** Change the rule so the original URL points straight to the final destination. In our example: `http://example.com/page` → `https://www.example.com/page/` directly.
3. **Remove orphaned middle hops.** Once nothing points at the intermediate URLs, their redirect rules are dead weight — clean them up.
4. **Consolidate at one layer.** Decide whether redirects live at the server (`.htaccess`/nginx), the CDN (Cloudflare page rules), or the CMS — and disable the others. Stacked layers are the #1 chain factory.
5. **Fix the source links.** Update internal links to point at final URLs so users and crawlers never take the redirect at all. Redirects should catch external/backlink traffic, not your own navigation.
6. **Use 301 (permanent) for permanent moves.** Reserve 302/307 for genuinely temporary changes. A 302 that has sat there for two years should probably be a 301.
7. **Re-verify.** Run the checker again on every fixed URL: one hop, 301, final destination. Then watch Search Console's crawl stats for improvement.

<!-- AFFILIATE: large migrations that spawn chains often start with a hosting move or CDN change, where clean redirect rules at the edge prevent chains before they form -->

## Preventing future chains

- Add a "check for chains" step to your publishing and migration checklists.
- When updating a redirect target, verify the target itself returns 200 — never point a redirect at another redirect.
- Run a full crawl quarterly (monthly for large sites) and fix new chains as they appear.
- Keep one canonical form of every URL (one protocol, one www preference, one trailing-slash rule) and enforce it everywhere.

## Frequently asked questions

### What is a redirect chain?

A redirect chain is a series of redirects where one URL redirects to another, which redirects to another, and so on (A→B→C→D), before reaching the final page.

### How many redirects in a chain is too many?

Google follows up to 10 hops but recommends keeping chains to 2 or fewer. One hop is ideal; anything beyond 3 is worth fixing.

### Do redirect chains hurt SEO?

Yes. They waste crawl budget, slow page loads, dilute link equity slightly, and risk breaking entirely if any link in the chain fails.

### What is the difference between a redirect chain and a redirect loop?

A chain eventually reaches a destination page; a loop circles back on itself forever (A→B→A) and the page never loads. Loops are critical emergencies.
