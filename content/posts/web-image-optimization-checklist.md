---
title: "Web Image Optimization Checklist"
description: "Free 28-point web image optimization checklist: pick the right format, compress without visible loss, size for screens, and speed up every page."
date: 2026-10-24
tags: ["image optimization", "web performance", "seo"]
categories: ["image"]
draft: false
image: /images/web-image-optimization-checklist.svg
slug: web-image-optimization-checklist
post_type: resource
faq:
  - q: "How small should a web image be?"
    a: "As a rule of thumb, keep hero and banner images under 200 KB and standard in-content images under 100 KB. With modern formats like WebP or AVIF and proper sizing, most photos can hit those targets with no visible quality loss."
  - q: "Is WebP better than JPEG for blog images?"
    a: "Usually yes. WebP delivers the same visual quality as JPEG at roughly 25-35% smaller file sizes. AVIF is even smaller. Serve WebP or AVIF with a JPEG fallback so older browsers still get an image."
  - q: "Does image optimization actually help SEO?"
    a: "Yes. Google uses Core Web Vitals as a ranking signal, and oversized images are the most common cause of slow Largest Contentful Paint scores. Faster images also improve user engagement, which compounds the SEO benefit."
---

Images are the number one reason pages load slowly. A single uncompressed photo exported straight from a camera can weigh 5 MB — more than everything else on the page combined. Every extra megabyte pushes up load times, hurts your search rankings through Core Web Vitals, and drives mobile visitors away on slow connections. The frustrating part is that fixing it is mostly a habit, not a skill: the right format, the right dimensions, and one good compression pass.

This free checklist gives you a repeatable 28-step workflow for optimizing any image for the web. It is written for bloggers, store owners, marketers, and anyone who publishes images online — no developer background required. Work through the five phases in order: plan the image, export it correctly, compress it, deliver it properly with responsive markup, and verify the results. By the end, every image you publish will be fast, sharp, and search-friendly.

## What's inside this checklist

The checklist has 28 concrete actions grouped into five phases. Phase 1 covers planning: choosing dimensions, aspect ratios, and the right format before you ever export. Phase 2 handles the export itself — color profiles, quality settings, and progressive encoding. Phase 3 is compression: lossless and lossy tools, WebP and AVIF conversion, and metadata stripping. Phase 4 covers delivery: responsive images, lazy loading, and CDN caching. Phase 5 is verification: measuring file sizes, testing load speed, and checking SEO basics. Each item is one clear action with a copy button.

## The full 28-point web image optimization checklist

Run through the phases in order for every image you publish. Each item below includes a copy button so you can paste steps into your own workflow notes.

### Phase 1 — Plan before you export

<ul class="res-list">
<li><span class="res-text">Decide the maximum display width — never upload an image wider than it will ever be shown.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Match the aspect ratio to the design slot (hero, thumbnail, card) so the browser never crops or stretches it.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Pick the right format first: photo-style images get WebP/AVIF/JPEG, graphics and logos get SVG or PNG.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use SVG for logos, icons, and illustrations — vectors stay sharp at any size with tiny file weights.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Skip transparency for photos — flat backgrounds compress far better than alpha channels.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 2 — Export settings that matter

<ul class="res-list">
<li><span class="res-text">Export photos at 70-80% JPEG quality (or WebP equivalent) — the visible difference is negligible.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Convert to sRGB color profile so colors look consistent across browsers and devices.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Export at 2x the displayed size for retina screens, but no larger — 2x is the sweet spot.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use progressive or interlaced encoding so the image appears in stages while it loads.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Name the file descriptively (red-running-shoes.jpg) — it helps SEO and keeps your library searchable.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Crop tightly in the editor instead of relying on CSS to hide unwanted edges.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 3 — Compress and convert

<ul class="res-list">
<li><span class="res-text">Run every image through a lossy compressor (TinyPNG, Squoosh, or ShortPixel) before upload.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Convert JPEGs and PNGs to WebP — expect 25-35% smaller files at the same visual quality.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Consider AVIF for large hero images — it compresses even further than WebP.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Strip EXIF and metadata (camera info, GPS, thumbnails) — it saves bytes and protects privacy.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Try lossless compression first for graphics; switch to lossy only if the savings are worth it.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Target under 200 KB for heroes and banners, under 100 KB for standard content images.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 4 — Deliver it the fast way

<ul class="res-list">
<li><span class="res-text">Add responsive markup (srcset and sizes) so phones download small files and desktops get large ones.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Lazy-load below-the-fold images with loading="lazy" so they only download when scrolled into view.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Never lazy-load the hero or LCP image — mark it fetchpriority="high" instead.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Set explicit width and height attributes to prevent layout shift (CLS) as images load.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Serve images through a CDN with long cache headers so repeat visits load instantly.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Use the picture element with a JPEG/PNG fallback so older browsers still see the image.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 5 — Verify and keep it fast

<ul class="res-list">
<li><span class="res-text">Check every image file size after upload — flag anything that drifted above your targets.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Run the page through PageSpeed Insights and confirm the LCP image is not flagged.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Write a descriptive alt attribute for every image — accessibility and image search both reward it.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Test the page on a throttled 4G connection to feel what mobile visitors experience.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Re-check image sizes monthly — content editors and auto-imports are how bloat creeps back in.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

<!-- ADSENSE: in-article ad slot -->

## How to use this checklist

1. Before exporting any image, work through Phase 1 to lock in dimensions, aspect ratio, and format.
2. Export with the Phase 2 settings — sRGB, sensible quality, 2x for retina, and a descriptive filename.
3. Compress and convert in Phase 3: one pass through a compressor, a WebP conversion, and metadata stripped.
4. Publish using the Phase 4 delivery markup — responsive srcset, lazy loading below the fold, and explicit dimensions.
5. Finish with Phase 5: verify sizes, run PageSpeed Insights, add alt text, and schedule a monthly re-check.

The single highest-impact habit is checking file size before upload. Most slow pages trace back to images someone exported at full camera resolution and never compressed. Make the 200 KB / 100 KB targets a non-negotiable rule and your site speed problems will shrink dramatically. For bulk work, tools like Squoosh (free, browser-based) or ShortPixel (automated for WordPress) handle entire folders in minutes.

## Frequently asked questions

**How small should a web image be?**
As a rule of thumb, keep hero and banner images under 200 KB and standard in-content images under 100 KB. With modern formats like WebP or AVIF and proper sizing, most photos can hit those targets with no visible quality loss.

**Is WebP better than JPEG for blog images?**
Usually yes. WebP delivers the same visual quality as JPEG at roughly 25-35% smaller file sizes. AVIF is even smaller. Serve WebP or AVIF with a JPEG fallback so older browsers still get an image.

**Does image optimization actually help SEO?**
Yes. Google uses Core Web Vitals as a ranking signal, and oversized images are the most common cause of slow Largest Contentful Paint scores. Faster images also improve user engagement, which compounds the SEO benefit.

<a class="btn-download" href="/downloads/web-image-optimization-checklist.md" download>Download the Web Image Optimization Checklist</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
