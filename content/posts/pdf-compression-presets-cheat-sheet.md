---
title: "PDF Compression Presets Cheat Sheet: Target Sizes by Use Case"
description: "PDF compression presets with target file sizes per page for web, email, WhatsApp, print, and archiving — plus settings that hit them. Free cheat sheet download."
date: 2026-10-21
tags: ["pdf", "compression", "cheat-sheet"]
categories: ["pdf"]
draft: false
image: /images/pdf-compression-presets-cheat-sheet.svg
slug: pdf-compression-presets-cheat-sheet
post_type: resource
faq:
  - q: "What is a good file size for a PDF sent by email?"
    a: "Aim for 100-200 KB per page, which keeps a 20-page document under about 4 MB — safely inside most email attachment limits. Downsample images to 110-150 DPI at JPEG quality 70 to hit it."
  - q: "Does compressing a PDF reduce its quality?"
    a: "It reduces image resolution, not text quality. Vector text stays perfectly sharp at any compression level. Problems only appear if you rasterize text pages into images or push JPEG quality below 60."
  - q: "What DPI should I use for a print-ready PDF?"
    a: "300 DPI at JPEG quality 85-90. Anything lower looks soft in print; anything higher just inflates the file with no visible gain."
---

Nobody wants a 40 MB PDF in their inbox, and nobody wants a blurry printout either. The trick is compressing for the destination: a PDF headed to WhatsApp needs very different settings than one headed to a printer. This cheat sheet gives you ten ready-made presets — each with a target size per page, exact image settings, and the use case it serves. It's built for freelancers sending client work, students sharing notes, office workers emailing reports, and anyone who's ever watched an upload bar crawl. Pick your preset, apply the settings, and stop guessing.

## What's inside this cheat sheet

Ten presets cover every common destination: quick drafts, WhatsApp and messaging apps, fast web viewing, email attachments, mobile reading, slide decks, everyday office sharing, client delivery, high-quality print, and long-term archiving. Each preset lists a target size per page (assuming a typical mixed text-and-images page), the image DPI and JPEG quality to use, the right color mode, and a one-line note. The cheat sheet also includes a seven-step method for hitting these targets — downsampling, font subsetting, metadata stripping — plus sanity checks to run after compressing so you never send a broken file.

## The compression presets

| Use case | Target size per page | Image settings | Color mode |
|---|---|---|---|
| Draft / quick share | 30-60 KB | 72-96 DPI, JPEG 50-60 | Grayscale |
| WhatsApp / messaging | 80-150 KB | 96 DPI, JPEG 60-65 | RGB |
| Web viewing (fast load) | 50-100 KB | 96-110 DPI, JPEG 60-70 | RGB |
| Email attachment | 100-200 KB | 110-150 DPI, JPEG 70 | RGB |
| Mobile reading | 100-150 KB | 110 DPI, JPEG 70 | RGB |
| Presentation slides | 100-200 KB | 110 DPI, JPEG 70 | RGB |
| General office sharing | 200-400 KB | 150 DPI, JPEG 75 | RGB |
| Client delivery | 300-600 KB | 200 DPI, JPEG 80 | RGB |
| High-quality print | 800 KB - 1.5 MB | 300 DPI, JPEG 85-90 | RGB |
| Archival (long-term) | 200-500 KB | 150-200 DPI, JPEG 75-80 | RGB or grayscale |

Copy any row's settings into your PDF tool of choice — the free download below has the full table plus the step-by-step compression method and a quick decision guide for picking the right preset.

## How to use this cheat sheet

1. Identify the destination: email, chat app, website, client, or printer — that picks your preset.
2. In your PDF compressor, set image downsampling to the preset's DPI and JPEG quality first; that's where 90% of the savings come from.
3. Subset embedded fonts and strip metadata for an extra size cut with zero visible change.
4. Compress a copy, then run the sanity checks: zoom to 100% and read a page, confirm every page rendered, and open it on a phone.
5. Keep two versions of anything important: a small sharing copy and a full-quality master.

The most common mistake is using one aggressive setting for everything — a preset meant for WhatsApp will look terrible printed, and a print preset will choke an email server. Match the preset to the destination and both problems disappear.

<!-- ADSENSE: in-article ad slot -->

## Frequently asked questions

**What is a good file size for a PDF sent by email?**
Aim for 100-200 KB per page, which keeps a 20-page document under about 4 MB — safely inside most email attachment limits. Downsample images to 110-150 DPI at JPEG quality 70 to hit it.

**Does compressing a PDF reduce its quality?**
It reduces image resolution, not text quality. Vector text stays perfectly sharp at any compression level. Problems only appear if you rasterize text pages into images or push JPEG quality below 60.

**What DPI should I use for a print-ready PDF?**
300 DPI at JPEG quality 85-90. Anything lower looks soft in print; anything higher just inflates the file with no visible gain.

<a class="btn-pro" href="/downloads/pdf-compression-presets-cheat-sheet.md" download>Download the cheat sheet</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
