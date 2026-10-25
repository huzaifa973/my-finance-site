---
title: "PDF Accessibility Checklist for Tagged, Screen-Reader-Friendly PDFs"
description: "Free 32-step PDF accessibility checklist: tag structure, reading order, alt text, tables, forms, and color contrast for screen-reader-friendly PDFs."
date: 2026-10-24
tags: ["pdf", "accessibility", "checklist"]
categories: ["pdf"]
draft: false
image: /images/pdf-accessibility-checklist-tagged-pdfs.svg
slug: pdf-accessibility-checklist-tagged-pdfs
post_type: resource
faq:
  - q: "What is a tagged PDF, and why does it matter?"
    a: "A tagged PDF contains a hidden structure tree that labels headings, paragraphs, lists, tables, and images. Screen readers use these tags to navigate the document; without them, the reader gets a flat wall of text in a random order."
  - q: "Can a scanned PDF be made accessible?"
    a: "Yes, but it takes two extra steps: run OCR to create a real text layer, then tag the result. Without OCR there is no text for the screen reader to read at all, so tagging alone is not enough."
  - q: "How do I test whether my PDF is actually accessible?"
    a: "Run your tool's built-in accessibility checker first, then test with a real screen reader (NVDA is free on Windows, VoiceOver is built into Mac and iPhone). Automated checks catch structure errors; only a screen reader shows you what the experience feels like."
---

An untagged PDF is a locked door for anyone using a screen reader: the text exists, but there is no map of what is a heading, what is a list, or which image matters. Governments, universities, and large companies increasingly require accessible documents, and beyond compliance it is simply good practice — accessible PDFs work better for everyone, including search engines and mobile readers.

This free checklist gives you 32 concrete steps to build or repair a tagged, screen-reader-friendly PDF. It is written for document creators, office staff, freelancers, and students who need their PDFs to work for every reader. Follow the phases in order, from document setup through tables and forms to final testing. Each item is one clear action with a copy button for your own notes.

## What's inside this checklist

The checklist covers seven phases. Phase 1 sets up the document correctly: language, title, and tagged-PDF output. Phases 2 and 3 build the tag structure and fix the reading order, which is where most accessibility failures live. Phases 4 through 6 handle the details that trip people up: alt text for images, proper table structure, and form fields that screen readers can announce. Phase 7 finishes with color contrast and real-world testing, because an accessibility checker alone never tells the whole story.

## The full 32-step PDF accessibility checklist

Fix the document in the source application where possible — repairing tags in a finished PDF is far slower than exporting correctly the first time.

### Phase 1 — Document setup

<ul class="res-list">
<li><span class="res-text">Set the document language so screen readers use the correct pronunciation.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Give the PDF a descriptive document title that appears in the title bar.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Export or save as a tagged PDF — confirm the tags option is enabled in your tool.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Run OCR on any scanned pages so there is real text behind the images.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm the file is not a flat image-only PDF before continuing.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 2 — Tag structure

<ul class="res-list">
<li><span class="res-text">Verify every page has a complete tag tree with no untagged content.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tag headings as H1 through H6 in a logical, unskipped hierarchy.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tag body text as paragraphs (P), not as loose text runs.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tag bulleted and numbered lists as proper list structures with list items.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Mark decorative images and design elements as artifacts so readers skip them.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tag footnotes, captions, and quotes with their correct semantic tags.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 3 — Reading order

<ul class="res-list">
<li><span class="res-text">Check the reading order on every page with multi-column or complex layouts.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Fix sidebars and callout boxes so they read in a sensible position, not mid-sentence.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Confirm headers, footers, and page numbers are artifacted or read consistently.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Verify the tab order follows the visual reading order for keyboard users.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Test the reading order with a screen reader on at least two complex pages.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 4 — Images and alt text

<ul class="res-list">
<li><span class="res-text">Write concise alt text for every informative image, chart, and diagram.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Describe what the image communicates, not just what it shows.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Keep alt text under about 150 characters; put longer explanations in the body text.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Never start alt text with "image of" — screen readers already announce the element.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Provide a text alternative or data table for complex charts and infographics.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 5 — Tables

<ul class="res-list">
<li><span class="res-text">Tag tables with proper table, row, and cell structure — never fake tables with tabs or spaces.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Designate header rows and columns so screen readers announce them on every cell.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Add a table summary or caption describing what the table shows.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Avoid merged cells where possible; they confuse screen reader navigation.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 6 — Forms

<ul class="res-list">
<li><span class="res-text">Give every form field a clear, unique label that a screen reader can announce.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Set a logical tab order through the form fields.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Associate help text and error messages with their fields programmatically.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Mark required fields as required in the field properties, not just visually.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

### Phase 7 — Color, contrast, and testing

<ul class="res-list">
<li><span class="res-text">Never use color alone to convey meaning — add labels, icons, or text.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Check text contrast meets at least 4.5:1 for body text and 3:1 for large text.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Run the built-in accessibility checker and fix every reported error.</span><button class="copy-btn" type="button">Copy</button></li>
</ul>

<!-- ADSENSE: in-article ad slot -->

## How to use this checklist

1. Start in your source application (Word, InDesign, Google Docs): use real heading styles, real lists, and real tables before exporting.
2. Export as a tagged PDF with the document language and title set, running OCR on any scanned pages first.
3. Work through phases 2 to 6, fixing the tag tree, reading order, alt text, tables, and form fields in that order.
4. Run the automated accessibility checker, fix every error, then test with an actual screen reader — NVDA is free on Windows and VoiceOver is built into Apple devices.
5. Save the accessible version as your master copy and re-check it after any future edits, since small changes can break tags silently.

The single biggest time-saver is step 1. A document built with proper styles in Word or InDesign exports as a nearly perfect tagged PDF in seconds; a document built with bold text pretending to be headings takes hours to repair. Accessibility starts in the source file, not in the PDF editor.

## Frequently asked questions

**What is a tagged PDF, and why does it matter?**
A tagged PDF includes a hidden structure tree that labels each element — headings, paragraphs, lists, tables, figures — the way HTML tags structure a web page. Screen readers navigate using these tags. Without them, the reader receives text in an unpredictable order with no way to jump between sections, skim headings, or understand tables.

**Can a scanned PDF be made accessible?**
Yes, with two extra steps. First run OCR so the scanned image gains a real text layer — without it, there is nothing for a screen reader to read. Then export or repair the file as a tagged PDF and work through the checklist. OCR quality matters: proofread the recognized text, especially numbers and names, before tagging.

**How do I test whether my PDF is actually accessible?**
Do both layers of testing. Run your PDF tool's built-in accessibility checker to catch structural errors like missing alt text or untagged content. Then test with a real screen reader — NVDA is free on Windows, VoiceOver is built into macOS and iOS — and listen to how the document actually reads. Automated checks find the errors; only a screen reader shows you the experience.

<a class="btn-download" href="/downloads/pdf-accessibility-checklist-tagged-pdfs.md" download>Download the PDF Accessibility Checklist for Tagged, Screen-Reader-Friendly PDFs</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
