---
title: "PDF Accessibility Checklist (WCAG)"
description: "A 50-point PDF accessibility checklist based on WCAG — tags, reading order, contrast, alt text, and forms, free to download."
date: 2026-10-28
tags: ["pdf-accessibility", "wcag", "checklist"]
categories: ["pdf"]
draft: false
image: /images/pdf-accessibility-checklist-wcag.svg
slug: pdf-accessibility-checklist-wcag
post_type: resource
faq:
  - q: "What does WCAG say about PDFs?"
    a: "WCAG applies to PDFs as web content: documents must be perceivable, operable, understandable, and robust. In practice that means tagged structure, real text, logical reading order, sufficient contrast, descriptive links, and accessible forms."
  - q: "Is an automated checker enough to prove a PDF is accessible?"
    a: "No. Automated checkers catch structural problems like missing tags or alt text, but they cannot judge whether alt text is meaningful or whether the reading order makes sense. A manual review, ideally with a screen reader, is always needed."
  - q: "What is the most common PDF accessibility mistake?"
    a: "Publishing untagged PDFs exported straight from a design tool. Without tags, a screen reader sees the document as one undifferentiated block of text, which makes long documents effectively unusable."
---

An inaccessible PDF shuts out millions of readers who rely on screen readers, keyboard navigation, and high-contrast display — and it can also put your organization on the wrong side of accessibility law. Yet most PDFs are exported and published without a single accessibility check. This fifty-point checklist turns the WCAG guidance for documents into a practical, tick-it-off workflow for anyone who creates, edits, or publishes PDFs: office workers, designers, publishers, teachers, and web teams. Work through it before you publish, and your documents become usable by everyone, including people using assistive technology.

## What's inside this resource

The checklist covers the full accessibility picture: document metadata and titles, real text versus scanned images, tags and reading order, heading and list structure, tables, images and alt text, links, color and contrast, embedded fonts, forms, bookmarks, and multimedia. It ends with the step most teams skip — testing with a real screen reader rather than trusting an automated checker alone. Each item is written as a single check you can verify in minutes, and the list is ordered roughly by impact, so the most consequential fixes come first. Print it, keep it beside your export settings, and run it on every document before it goes live.

## The resource

<button class="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('res-pdf-accessibility-checklist-wcag').innerText);this.innerText='Copied!'">Copy resource</button>

<div id="res-pdf-accessibility-checklist-wcag">

1. Document has a descriptive, meaningful title set in its metadata, not a filename like 'doc1.pdf'.
2. Language of the document is declared in the metadata so screen readers pronounce text correctly.
3. Text is real, selectable text — not scanned images of text without an OCR layer.
4. Reading order matches the visual order: headings, then body text, then side notes.
5. Every page is tagged, with a complete structure tree covering all content.
6. Headings use true heading tags (H1, H2, H3) in logical order, never skipped levels.
7. Exactly one H1 per document, used for the document title.
8. Lists use real list tags, not manually typed bullets or numbers.
9. Tables use table tags with header cells marked as headers.
10. Complex tables include a scope or headers association so screen readers announce row and column headers.
11. Every meaningful image has alt text describing its content or purpose.
12. Decorative images are marked as artifacts so screen readers skip them.
13. Charts and graphs include a text summary of the data they show.
14. Links have descriptive link text — never 'click here' or bare URLs alone.
15. Color is never the only way information is conveyed; labels or patterns back it up.
16. Text contrast against its background is at least 4.5:1 for normal text.
17. Large text (18pt or 14pt bold and above) meets at least 3:1 contrast.
18. Fonts are embedded so text renders and reads correctly on any device.
19. The document is not locked against text extraction or screen reader access.
20. Form fields have labels and tooltips that screen readers can announce.
21. Form fields appear in a logical tab order that matches the visual layout.
22. Required form fields are identified in text, not only by color.
23. Buttons and interactive elements have accessible names describing their action.
24. Page numbers, headers, and footers are marked as artifacts, not read as body content.
25. Bookmarks outline the document structure for documents longer than a few pages.
26. Bookmarks match the heading structure and link to the correct pages.
27. No content flashes more than three times per second.
28. Videos embedded in the PDF have captions or a text transcript nearby.
29. Audio content has a written transcript available in the document.
30. Scanned pages include OCR text that matches the visible content.
31. The file opens at a sensible zoom and page view for all readers.
32. Document security settings do not block assistive technology.
33. Annotations and comments are tagged and readable in order.
34. Footnotes and endnotes are linked so readers can jump back and forth.
35. Abbreviations are expanded on first use, or a glossary is included.
36. Document uses a standard, readable font rather than decorative display type for body text.
37. Text is not rendered as images for headings, logos aside.
38. Multi-column layouts read in the correct column order.
39. Sidebars and callout boxes are tagged in the order a reader should encounter them.
40. Watermarks are marked as artifacts and do not interfere with reading order.
41. The document passes an automated checker (such as Adobe Acrobat's checker or PAC) with zero errors.
42. Manual checks confirm the automated checker results — tools alone never prove accessibility.
43. Document title, author, and subject metadata are filled in completely.
44. The file name itself is descriptive and uses hyphens, not spaces or special characters.
45. Hyperlinks to external sites open correctly and point to live destinations.
46. Internal links (table of contents, cross-references) jump to the right pages.
47. The document works when reflowed or zoomed to 200% without losing content.
48. No essential information is conveyed by images of text alone.
49. Signatures, stamps, and handwritten notes are described in text where they carry meaning.
50. The final PDF is tested with an actual screen reader before publishing.

</div>

<!-- ADSENSE: in-article ad slot -->

## How to use this resource

1. Start with the first ten items — title, language, real text, tags, and headings — since these fix the most common barriers.
2. Run your PDF through an automated accessibility checker and note every error it reports.
3. Fix structure problems in the source document (Word, InDesign, or your editor) rather than patching the PDF, so the fixes survive future exports.
4. Add alt text, table headers, and form labels, then re-export and re-check until the checker reports zero errors.
5. Finish with a manual pass: open the file in a screen reader or a read-aloud tool and confirm the content flows sensibly from start to end.

<a class="btn-download" href="/downloads/pdf-accessibility-checklist-wcag.md" download>Download the PDF Accessibility Checklist (WCAG)</a>

## Frequently asked questions

### What does WCAG say about PDFs?

WCAG applies to PDFs as web content: documents must be perceivable, operable, understandable, and robust. In practice that means tagged structure, real text, logical reading order, sufficient contrast, descriptive links, and accessible forms.

### Is an automated checker enough to prove a PDF is accessible?

No. Automated checkers catch structural problems like missing tags or alt text, but they cannot judge whether alt text is meaningful or whether the reading order makes sense. A manual review, ideally with a screen reader, is always needed.

### What is the most common PDF accessibility mistake?

Publishing untagged PDFs exported straight from a design tool. Without tags, a screen reader sees the document as one undifferentiated block of text, which makes long documents effectively unusable.
