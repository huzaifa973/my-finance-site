---
title: "100-Point Technical SEO Audit Checklist"
description: "Free 100-point technical SEO audit checklist: crawlability, indexing, Core Web Vitals, structured data, internal linking, images, and security checks."
date: 2026-10-24
tags: ["seo", "audit", "checklist"]
categories: ["seo"]
draft: false
image: /images/100-point-technical-seo-audit-checklist.svg
slug: 100-point-technical-seo-audit-checklist
post_type: resource
faq:
  - q: "How often should I run a technical SEO audit?"
    a: "Run a full audit quarterly and a quick spot-check monthly. Also audit after any major change: a migration, redesign, platform switch, or large content rollout. New sites should be audited before launch and again 30 days after."
  - q: "Which section matters most if I'm short on time?"
    a: "Start with crawlability and indexing (sections 1 and 2). If search engines can't reach or index your pages, everything else — speed, schema, content — has no audience. Fix access first, then optimize."
  - q: "Do I need paid tools to complete this checklist?"
    a: "No. Roughly 80 of the 100 checks can be done with free tools: Google Search Console, PageSpeed Insights, a free crawler, and your browser's developer tools. Paid tools mainly speed up the work at scale."
---

A technical SEO audit is a health check for everything behind the scenes of your website: how crawlers reach your pages, whether those pages get indexed, how fast they load, and how cleanly they are structured. Content gets the glory, but technical problems quietly cap your rankings — a site with broken indexing or crawl waste will never reach the traffic its content deserves, no matter how good the writing is.

This free checklist packs 100 concrete checks into ten sections, ordered the way an auditor works: access first, then indexing, then speed, then structure, then content support. It is built for site owners, bloggers, freelancers, and in-house marketers who want a thorough, methodical pass without missing anything. Each item is a single clear action you can check off, and every item has a copy button so you can paste tasks into your own tracker.

## What's inside this checklist

The checklist covers ten technical areas with ten checks each. Sections 1 and 2 verify that crawlers can reach and index your pages — the foundation everything else rests on. Sections 3, 4, and 5 tackle speed, mobile rendering, and HTTPS security. Sections 6 and 7 cover structured data and on-page HTML correctness. Sections 8 and 9 handle internal linking and media, and section 10 wraps up with international targeting, logging, and maintenance habits. The items are written as one-sentence actions, so the audit moves fast even on large sites.

## The full 100-point technical SEO audit checklist

Start at section 1 and work down — earlier sections block everything after them. Mark each item pass, fail, or not applicable.

### Section 1 — Crawlability

<ul class="res-list">
<li><span class="res-text">Confirm robots.txt exists at the domain root and returns a 200 status.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify robots.txt does not accidentally block key sections, CSS, or JavaScript.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that important pages are not blocked by a rogue noindex tag.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm the XML sitemap exists, is valid, and lists only indexable URLs.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Submit the sitemap in Search Console and check for reported errors.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Review the crawl stats report for unexpected spikes or drops in crawl activity.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Identify and fix crawl traps: infinite calendars, faceted filters, and session IDs.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm paginated series use clean URLs and do not create duplicate crawl paths.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that internal search result pages are blocked or noindexed.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify the crawl budget is spent on important pages, not thin or duplicate ones.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 2 — Indexing

<ul class="res-list">
<li><span class="res-text">Compare pages indexed in Search Console against pages you expect to be indexed.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Investigate every important page reported as "Discovered — currently not indexed."</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Investigate every important page reported as "Crawled — currently not indexed."</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm canonical tags point to the correct preferred URL on every page type.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that canonicals are absolute URLs, not relative paths.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Look for duplicate content across www/non-www and HTTP/HTTPS versions.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify trailing-slash and case variants redirect to one canonical version.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm thin or outdated pages are improved, merged, or noindexed — not left to dilute the site.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that tag, archive, and author pages are indexed only if they add value.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Review the sitemap for stale URLs, redirects, and 404s that should be removed.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 3 — Site speed and Core Web Vitals

<ul class="res-list">
<li><span class="res-text">Test key templates in PageSpeed Insights and record LCP, INP, and CLS.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Bring Largest Contentful Paint under 2.5 seconds on mobile for key pages.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Bring Interaction to Next Paint under 200 milliseconds by trimming heavy JavaScript.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Keep Cumulative Layout Shift under 0.1 by reserving space for images and ads.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Compress and serve images in modern formats (WebP or AVIF) at correct dimensions.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Enable text compression (Brotli or Gzip) on the server or CDN.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Defer or async-load non-critical JavaScript so it does not block rendering.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Remove unused CSS and JavaScript from themes, plugins, and page builders.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify browser caching headers are set with sensible lifetimes for static assets.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use a CDN if your audience is geographically spread out.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 4 — Mobile rendering

<ul class="res-list">
<li><span class="res-text">Confirm the viewport meta tag is present and correctly configured.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Test key pages on a real mobile device, not just a resized desktop browser.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that tap targets (buttons, links) are at least 48px and not crowded.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify text is readable without horizontal scrolling at 360px width.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm popups and interstitials do not cover main content on mobile.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that mobile and desktop versions show equivalent content and links.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify structured data and metadata match between mobile and desktop renders.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Test forms and checkout flows end-to-end on mobile.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm images scale correctly and never overflow their containers.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that the mobile menu exposes the full navigation hierarchy.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 5 — HTTPS and security

<ul class="res-list">
<li><span class="res-text">Confirm every page loads over HTTPS with a valid certificate.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Redirect all HTTP URLs to HTTPS with a 301 redirect.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Fix mixed-content warnings: no HTTP images, scripts, or stylesheets on HTTPS pages.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Enable HSTS so browsers always use the secure connection.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check the certificate expiry date and set up auto-renewal or alerts.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm the certificate chain is complete with no trust errors.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify old TLS versions are disabled and only TLS 1.2+ is served.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Add a Content Security Policy header if your stack supports it.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that login and checkout forms never submit over plain HTTP.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Scan for exposed admin panels, backups, or .env files reachable by URL.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 6 — Structured data

<ul class="res-list">
<li><span class="res-text">Add the right schema type to each page template (Article, Product, FAQPage, etc.).</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Validate all structured data with Google's Rich Results Test.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm schema properties are accurate and match the visible page content.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Include required properties for each schema type (price and availability for Product, etc.).</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Add Organization or WebSite schema with logo and sameAs links site-wide.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Add BreadcrumbList schema so breadcrumbs can appear in search results.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Keep JSON-LD in one clean script block per page rather than scattered fragments.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check Search Console's enhancements reports for schema errors and warnings.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Never mark up content that is hidden from users or does not exist on the page.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Re-validate schema after every template or CMS update.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 7 — On-page HTML correctness

<ul class="res-list">
<li><span class="res-text">Confirm every page has exactly one H1 that describes the page topic.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that title tags are unique, under 60 characters, and front-load the keyword.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Write unique meta descriptions under 160 characters for key pages.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify heading hierarchy: H2s under the H1, H3s under H2s, no skipped levels.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm URLs are short, lowercase, hyphenated, and free of parameters where possible.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that Open Graph and Twitter Card tags render correct titles, images, and descriptions.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify the HTML lang attribute matches the page's actual language.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm there is only one canonical URL declared per page.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that pagination uses rel prev/next or self-referencing canonicals consistently.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Validate HTML for unclosed tags and duplicate IDs that can break rendering or scripts.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 8 — Internal linking and redirects

<ul class="res-list">
<li><span class="res-text">Crawl for broken internal links (404s) and fix or remove every one.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Crawl for redirect chains and flatten them to single-hop redirects.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm all permanent URL changes use 301 redirects, not 302s.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that no important page is more than 3 clicks from the homepage.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Find orphan pages (no internal links) and link them into the site structure.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use descriptive anchor text — avoid "click here" and bare URLs.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Link related content contextually within the body text, not only in sidebars.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm the site navigation reflects the real information architecture.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check breadcrumbs are present, accurate, and match the URL structure.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Review external links for broken targets and add rel attributes where appropriate.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 9 — Images and media

<ul class="res-list">
<li><span class="res-text">Add descriptive, keyword-aware alt text to every meaningful image.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Leave alt empty (alt="") for purely decorative images.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use descriptive file names instead of IMG_0042.jpg.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Compress every image and serve responsive sizes with srcset.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Lazy-load below-the-fold images but never the LCP image.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Set explicit width and height attributes to prevent layout shift.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Add important images to the XML sitemap or an image sitemap.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Provide transcripts or captions for videos and audio embeds.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check that hotlinked or third-party media does not slow the page or break.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify Open Graph images meet the 1200x630 recommendation for social sharing.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Section 10 — International, logs, and maintenance

<ul class="res-list">
<li><span class="res-text">Implement hreflang correctly on every language/region variant, with self-referencing tags.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm each hreflang cluster links bidirectionally between all variants.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use one consistent URL structure for international targeting (subfolder, subdomain, or ccTLD).</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Set the correct language and region targeting in Search Console where applicable.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Review server logs monthly to see which pages Googlebot actually crawls.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Watch for crawl errors (5xx, DNS, timeouts) and fix them the same day.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm the site returns a proper 404 page for missing URLs, not a soft 404.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Keep CMS, themes, and plugins updated to avoid security-driven SEO damage.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Back up the site and database before any major technical change.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Schedule the next audit: quarterly full audits plus monthly spot-checks.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

<!-- ADSENSE: in-article ad slot -->

## How to use this checklist

1. Start with sections 1 and 2 — crawlability and indexing. If crawlers cannot reach or index your pages, nothing else in the audit matters yet.
2. Work through the remaining sections in order, marking each item pass, fail, or not applicable, and paste failures into your task tracker with the copy buttons.
3. Fix failures by impact: indexing blockers first, then speed and mobile issues, then structured data and linking improvements.
4. Re-crawl the site after fixes and re-check Search Console over the following two weeks to confirm errors clear and coverage improves.
5. File the completed audit with its date, and schedule the next one — quarterly for a full pass, monthly for a quick spot-check of sections 1 through 3.

An audit only works if its findings get fixed. The most common failure is not a technical one: it is a checklist that gets completed, filed, and never acted on. Treat the fail list as a sprint backlog, assign owners and dates, and your next audit will be dramatically shorter.

## Frequently asked questions

**How often should I run a technical SEO audit?**
Run a full 100-point audit every quarter, plus a light spot-check of crawlability, indexing, and speed every month. Always audit after big changes too — site migrations, redesigns, platform switches, or major content rollouts. Audit a new site before launch, then again about 30 days after go-live to catch what slipped through.

**Which section matters most if I'm short on time?**
Sections 1 and 2: crawlability and indexing. They are the foundation — if search engines cannot reach your pages or will not index them, speed tweaks, schema, and content upgrades reach no audience. Once access is clean, move to section 3 (speed) and section 8 (internal linking), which usually deliver the next biggest wins.

**Do I need paid tools to complete this checklist?**
No. Around 80 of the 100 checks can be done with free tools: Google Search Console, PageSpeed Insights, Google's Rich Results Test, a free-tier crawler, and your browser's developer tools. Paid crawlers and log analyzers mainly save time on large sites; they are a convenience, not a requirement.

<a class="btn-download" href="/downloads/100-point-technical-seo-audit-checklist.md" download>Download the 100-Point Technical SEO Audit Checklist</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
