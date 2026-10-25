---
title: "PDF Compression Checklist: 30 Steps to Smaller Files"
description: "Free 30-step PDF compression checklist: shrink images, subset fonts, clean structure, and verify quality so your files get smaller without looking worse."
date: 2026-10-24
tags: ["pdf", "compression", "checklist"]
categories: ["pdf"]
draft: false
image: /images/pdf-compression-checklist-smaller-files.svg
slug: pdf-compression-checklist-smaller-files
post_type: resource
faq:
  - q: "How much can I realistically shrink a PDF?"
    a: "A typical office PDF with images shrinks 50-80% with no visible quality loss; scanned or print-ready files can shrink 90% or more. Text-only PDFs barely compress because text is already efficient — if your file is mostly text, look for embedded fonts and images first."
  - q: "Will compressing a PDF make it look worse?"
    a: "Not if you do it in the right order: resize oversized images first, then recompress them at a sensible quality, and leave text and vector graphics alone. Visible quality loss almost always comes from recompressing an already-compressed image at low quality."
  - q: "Is an online compressor safe for sensitive documents?"
    a: "Uploading means a copy of your document lives on someone else's server, so avoid online tools for contracts, medical records, or financial files. Use a desktop tool or a fully client-side tool that processes the file in your browser for anything sensitive."
---

Oversized PDFs are everywhere: email attachments that bounce back, uploads that hit portal limits, and downloads that make readers wait. The fix is compression, but blindly running a file through a "make smaller" button often trades quality for bytes — blurry images, broken fonts, or text that no longer selects. Done properly, compression is a method: you shrink the parts of the file that waste space and leave everything else untouched.

This free checklist gives you 30 steps in the right order, from preparing the file to verifying the result. It is written for office workers, freelancers, students, and anyone who shares PDFs and is tired of size limits. Each step is one clear action, and every item has a copy button so you can paste the workflow into your own notes.

## What's inside this checklist

The checklist runs in five phases. Phase 1 prepares the file: back it up, measure what is actually eating the space, and remove the obvious waste. Phase 2 tackles images, which cause most PDF bloat — resizing, recompressing, and converting them correctly. Phase 3 handles fonts, the second biggest offender, by subsetting and cleaning them up. Phase 4 strips structural waste like unused layers, form data, and embedded thumbnails. Phase 5 verifies the result: visual quality, text selection, and the final size.

## The full 30-step PDF compression checklist

Work through the phases in order — the early steps make the later ones far more effective.

### Phase 1 — Prepare and measure

<ul class="res-list">
<li><span class="res-text">Save a backup copy of the original PDF before compressing anything.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check which objects eat the most space: images, fonts, or embedded files.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Delete blank pages, duplicate pages, and pages you do not need.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Remove embedded file attachments that are not part of the document.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Decide your target: screen viewing (smallest), general sharing (balanced), or print (largest).</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Note the original file size so you can measure the improvement honestly.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 2 — Optimize images

<ul class="res-list">
<li><span class="res-text">Downsample images above 200 DPI for screen use — 300 DPI is only needed for print.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Resize images that are larger than they display; a full-page photo rarely needs 4000 pixels.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Recompress color photos as JPEG at 70-80% quality for a strong size-to-quality balance.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Convert screenshots and flat graphics to a lossless format instead of JPEG to avoid artifacts.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Compress black-and-white scanned pages with JBIG2 or CCITT Group 4, not JPEG.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Remove images hidden behind other objects or outside the visible page area.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Flatten transparency where it bloats the file, keeping a backup of the original.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Avoid compressing the same image twice — start from the highest-quality source you have.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 3 — Subset and clean fonts

<ul class="res-list">
<li><span class="res-text">Subset embedded fonts so only the characters actually used are stored.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Replace multiple similar fonts with one consistent family across the document.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Remove fully embedded font files that subsetting left behind as duplicates.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Convert text-heavy decorative headings to outlines only if file size actually drops.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify text still selects and searches correctly after font optimization.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 4 — Clean the file structure

<ul class="res-list">
<li><span class="res-text">Flatten form fields into static content if the form no longer needs to be fillable.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Remove unused layers, optional content groups, and hidden page elements.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Delete document metadata, thumbnails, and private application data you do not need.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Discard unused bookmarks, destinations, and named actions.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Run an object-level cleanup or "optimize" pass to remove duplicate and orphaned objects.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Save with object streams and compressed cross-reference tables enabled.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 5 — Verify the result

<ul class="res-list">
<li><span class="res-text">Compare the new size against the original and confirm it meets your target.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Flip through every page at 100% zoom and check images for blur or artifacts.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Test text selection, search, and copy-paste across several pages.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Open the compressed file in a second PDF viewer to catch rendering problems.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm links, bookmarks, and the table of contents still work.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

<!-- ADSENSE: in-article ad slot -->

## How to use this checklist

1. Back up the original PDF and measure what is eating the space — images, fonts, or attachments — so you compress the right things first.
2. Work through phases 1 to 4 in order: remove waste, optimize images, subset fonts, then clean the structure.
3. Choose your quality target up front (screen, sharing, or print) and do not compress below it for a smaller number.
4. Run the phase 5 verification on the compressed file: zoom to 100%, test text selection, and open it in a second viewer.
5. If quality fails anywhere, go back to the relevant phase and redo it from the backup — never compress the compressed file again.

The golden rule of PDF compression is simple: shrink the waste, not the content. Most of the bytes in a bloated PDF are images stored at print resolution, fonts embedded in full, and objects nobody needs. Remove those first and you get dramatic savings with zero visible change — which is the entire point.

## Frequently asked questions

**How much can I realistically shrink a PDF?**
A typical office PDF with images usually shrinks 50 to 80 percent with no visible quality loss. Scanned documents and print-ready files can shrink 90 percent or more because they start with massive uncompressed images. Text-only PDFs barely shrink at all, since text compresses efficiently already — in that case, check for fully embedded fonts and stray images.

**Will compressing a PDF make it look worse?**
Not if you follow the right order. Resize oversized images first, then recompress them once at a sensible quality, and leave text and vector graphics alone. Almost all visible quality damage comes from recompressing an already-compressed image at low quality. The phase 5 verification step exists to catch exactly that before you share the file.

**Is an online compressor safe for sensitive documents?**
Uploading a file means a copy exists on someone else's server, even if they promise to delete it. For contracts, medical records, financial statements, or anything with personal data, use a desktop tool or a fully client-side web tool that processes the file inside your browser. Save online compressors for public or non-sensitive files.

<a class="btn-download" href="/downloads/pdf-compression-checklist-smaller-files.md" download>Download the PDF Compression Checklist: 30 Steps to Smaller Files</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
