---
title: "PDF Accessibility Checklist: Tagged PDF Basics (Free Checklist)"
description: "A 28-point PDF accessibility checklist covering tags, reading order, alt text, tables, forms, and final screen-reader testing. Free download."
date: 2026-10-21
tags: ["pdf", "accessibility", "checklist"]
categories: ["pdf"]
draft: false
image: /images/pdf-accessibility-checklist.svg
slug: pdf-accessibility-checklist
post_type: resource
faq:
  - q: "What is a tagged PDF?"
    a: "A tagged PDF contains a hidden structure tree that tells assistive technology what each element is — headings, paragraphs, lists, tables, figures — and the order to read them in. Without tags, a screen reader sees only an unstructured jumble of text."
  - q: "Is an accessible PDF required by law?"
    a: "In many contexts, yes. Public-sector bodies in the US (Section 508), EU (European Accessibility Act), and UK face legal requirements, and lawsuits over inaccessible documents keep rising. Even where not legally required, accessible PDFs reach more readers."
  - q: "Can I make a scanned PDF accessible?"
    a: "Yes, but OCR comes first. Run optical character recognition to create a real text layer, then tag the document and fix the reading order. A scanned image of text is invisible to screen readers until OCR is applied."
---

Most PDFs are invisible to the people who need assistive technology most. A PDF without tags is just a picture of words to a screen reader — headings, tables, and reading order all lost. Fixing that isn't mysterious: it's a repeatable checklist of tags, reading order, alt text, and final testing. This 28-point checklist walks you through tagged-PDF basics in the order professionals actually work: document structure first, then reading order, images, tables, links and forms, and finally color, contrast, and screen-reader verification. It's built for designers, office workers, educators, and anyone publishing PDFs that the public will read.

## What's inside this checklist

The checklist is organized into six sections that mirror a real remediation workflow. Section one covers document structure and tags — the hierarchy screen readers navigate by. Section two fixes reading order, the most common failure in auto-tagged PDFs. Section three handles images, alt text, and charts. Section four covers data tables, where most accessibility errors hide. Section five tackles links, form fields, and language settings. Section six finishes with color contrast and the final validation pass. Every item is a concrete yes-or-no check, each with a one-click copy button so you can paste the list into your own QA docs.

## The 28-point accessibility checklist

<ol class="res-list">
<li><span class="res-text">The PDF is tagged — the tags panel shows a logical tag tree, not an empty document.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tags follow one logical hierarchy: Document, headings, paragraphs, lists, tables, figures.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Every page's content appears in the tag tree — nothing untagged or wrongly marked as artifact.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Heading levels are sequential (H1, H2, H3) with no skipped levels.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Exactly one H1 exists, matching the document title.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Lists use proper list tags (L, LI, Lbl, LBody) — not typed dashes or numbers.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">No empty tags or empty paragraphs used for spacing.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Reading order matches visual order — verified with a screen reader or Read Out Loud.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Multi-column layouts read column by column, not across columns line by line.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Headers, footers, and page numbers are marked as artifacts so screen readers skip them.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Sidebars and callout boxes sit correctly in the reading order.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Every informative image has concise alt text describing what it shows.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Decorative images are marked as artifacts — skipped by screen readers.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Charts have alt text summarizing the key data point; full data lives in text or a table.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">No image-of-text is used where real text would work (logos excepted).</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Data tables use proper table tags (Table, TR, TH, TD) with header cells marked TH.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Complex tables define header scope (row/column) for correct screen reader announcements.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tables have a caption or summary describing their purpose.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Layout tables used for positioning are NOT tagged as tables.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Every link uses meaningful link text — never "click here" or bare URLs.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Form fields are tagged, labeled, and follow a logical tab order.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">The document's primary language is set in document properties.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Passages in another language have that language set on the enclosing tag.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">The document title is set in properties and displays in the title bar.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Information is never conveyed by color alone — labels or patterns back it up.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Text meets WCAG contrast ratios: 4.5:1 for body text, 3:1 for large text.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">The full accessibility checker reports zero errors; warnings reviewed individually.</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Tested with an actual screen reader (NVDA, JAWS, or VoiceOver) on the first, a middle, and the last page.</span><button class="copy-btn" type="button">Copy</button></li>
</ol>

## How to use this checklist

1. Start from a tagged PDF: export with tags from Word or InDesign, or OCR plus autotag a scan — then fix by hand, because autotagging alone is never enough.
2. Work the checklist top to bottom: structure, reading order, images, tables, links and forms, then the final checks.
3. Verify reading order with the Order panel and a real screen reader pass — the checker can't catch a wrong-but-valid order.
4. Fix the common failures fast: use Table Cell Properties for TH and scope issues, and the Tags panel to re-nest skipped heading levels.
5. Re-run the full accessibility checker after every fix round until it reports zero errors, then do the final screen-reader test.

The single highest-value habit is testing with a screen reader yourself. Five minutes of listening reveals problems no automated checker can find — and it permanently changes how you build documents.

<!-- ADSENSE: in-article ad slot -->

## Frequently asked questions

**What is a tagged PDF?**
A tagged PDF contains a hidden structure tree that tells assistive technology what each element is — headings, paragraphs, lists, tables, figures — and the order to read them in. Without tags, a screen reader sees only an unstructured jumble of text.

**Is an accessible PDF required by law?**
In many contexts, yes. Public-sector bodies in the US (Section 508), the EU (European Accessibility Act), and the UK face legal requirements, and lawsuits over inaccessible documents keep rising. Even where not legally required, accessible PDFs reach more readers.

**Can I make a scanned PDF accessible?**
Yes, but OCR comes first. Run optical character recognition to create a real text layer, then tag the document and fix the reading order. A scanned image of text is invisible to screen readers until OCR is applied.

<a class="btn-pro" href="/downloads/pdf-accessibility-checklist.md" download>Download the checklist</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
