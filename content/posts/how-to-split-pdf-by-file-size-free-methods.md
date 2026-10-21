---
title: "How to Split a PDF by File Size: Free Methods That Actually Work"
description: "Need a PDF under 10MB or 25MB? Learn free methods to split a PDF by file size — online tools, target-size splitting, and email attachment limits."
date: 2026-10-20
draft: false
tags: [pdf, split-pdf, file-size, pdf-tools]
categories: [pdf]
post_type: article
image: /images/how-to-split-pdf-by-file-size-free-methods.svg
slug: how-to-split-pdf-by-file-size-free-methods
faq:
  - q: "How do I split a PDF into files under a certain size?"
    a: "Use a free PDF split-by-size tool: upload the PDF, set your target size (e.g. 10MB), and the tool divides it into parts that each stay under that limit. It estimates each part's size from the total and splits the page range accordingly."
  - q: "Why would I split a PDF by file size instead of by pages?"
    a: "Because upload and email limits are measured in megabytes, not pages. A 50-page scanned PDF might be 80MB while a 200-page text PDF is 5MB. Splitting by target file size guarantees every part fits the limit — splitting by page count is just guessing."
  - q: "What is the email attachment size limit for PDFs?"
    a: "Gmail allows up to 25MB per email (including encoding overhead, so aim for ~20MB of attachments). Outlook's default limit is 20MB. Many corporate and government portals cap uploads at 10MB. Splitting by size lets you hit any of these exactly."
  - q: "Does splitting a PDF reduce its quality?"
    a: "No. Splitting only divides pages between files — it doesn't recompress anything. Each part keeps the original quality. If parts are still too large, compress the PDF first, then split."
---

Email says "attachment too large." The upload portal caps files at 10MB. Your 85MB scanned PDF needs to get through — and manually guessing how many pages fit in 10MB is a miserable trial-and-error loop.

Splitting a PDF **by file size** instead of by page count solves this directly: you set the target size, and the tool figures out the page ranges. Here's how.

## Why Split by Size, Not by Pages?

Most splitting tools ask "which pages go in each file?" — but limits are measured in megabytes:

- **Gmail:** 25MB per message (with encoding overhead, keep attachments under ~20MB).
- **Outlook:** 20MB default limit.
- **Corporate/government portals:** often 10MB or even 5MB.
- **WhatsApp documents:** 100MB, but many recipients prefer smaller files.

A page-count split is guesswork: 20 pages of scanned images might be 40MB, while 20 pages of text might be 400KB. Size-based splitting measures the actual bytes and divides pages so **every part lands under your target**.

## Method 1: Free Split-by-Size Tool (Fastest)

1. Open the [free PDF split-by-size tool](/tools/pdf-split-by-size/).
2. Upload your PDF.
3. Enter your target size — e.g. **10MB** for a portal upload, **20MB** to stay safely under Gmail's limit.
4. The tool estimates per-page size from the total file and splits the page range so each part stays under the target.
5. Download the parts (e.g. `document-part1.pdf`, `document-part2.pdf`).

Everything runs in your browser — the file never uploads to a server, which matters for contracts, medical records, or anything confidential.

<!-- ADSENSE: in-article ad slot -->

## Method 2: Compress First, Then Split

If splitting alone still leaves parts over the limit — common with scanned PDFs — compress before splitting:

1. Run the PDF through a PDF compressor to shrink images and remove bloat.
2. Then split the compressed file by size.

This two-step combo handles the worst cases: a 200MB scan becomes a 30MB compressed file, which splits neatly into three 10MB parts. Quality loss from compression is usually invisible for documents meant to be read on screen.

## Method 3: Manual Page-Range Splitting

If you prefer full control (or your tool only splits by page):

1. Note the total file size and page count. Divide: `file size / pages = average MB per page`.
2. Compute pages per part: `target size / average per page`, rounded down.
3. Split at those page boundaries with any PDF splitter.

Example: an 80MB, 100-page PDF averages 0.8MB/page. For 10MB parts: 10 / 0.8 = 12.5 → 12 pages per part → 9 parts (the last one smaller). This works, but it's arithmetic you'd rather skip — which is exactly what the size-based tool automates.

## Choosing the Right Target Size

Don't aim exactly at the limit — leave headroom:

| Limit you're hitting | Safe target |
|----------------------|-------------|
| Gmail 25MB | 20MB per part |
| Outlook 20MB | 15MB per part |
| Portal 10MB | 8–9MB per part |
| Portal 5MB | 4MB per part |

Email encoding (base64) inflates attachments by ~33%, which is why the Gmail headroom matters: a 24MB attachment can still bounce.

## Naming and Organizing the Parts

Split files are useless if the recipient can't reassemble them mentally:

- **Number them clearly:** `contract-part1-of-4.pdf`, `contract-part2-of-4.pdf` — the total count prevents "did I get them all?" confusion.
- **Keep page order:** parts should follow the original sequence.
- **Note it in the email:** "Attached in 4 parts due to size limits — please download all before opening."
- **Consider a ZIP:** if the recipient is technical, zipping the parts into one archive keeps things tidy (though the ZIP itself must fit the limit).

<!-- AFFILIATE -->

## When Splitting Isn't Enough

A few edge cases worth knowing:

- **One giant page:** if a single page (say, a huge engineering drawing) exceeds the target alone, splitting can't help — compress that page or export it separately at lower resolution.
- **Password-protected PDFs:** unlock the PDF first; most browser tools can't process encrypted files until the password is removed.
- **Portals that want ONE file:** some upload forms accept a single file only. In that case, compression (not splitting) is your only option — shrink the PDF until it fits.
- **Scanned PDFs with OCR text:** splitting preserves the OCR text layer on every part, so each file stays searchable. If you need to search across all parts at once, keep a copy of the original combined file for reference.

## Frequently Asked Questions

**How do I split a PDF into files under a certain size?**
Use a free PDF split-by-size tool: upload the PDF, set your target size (e.g. 10MB), and the tool divides it into parts that each stay under that limit. It estimates each part's size from the total and splits the page range accordingly.

**Why would I split a PDF by file size instead of by pages?**
Because upload and email limits are measured in megabytes, not pages. A 50-page scanned PDF might be 80MB while a 200-page text PDF is 5MB. Splitting by target file size guarantees every part fits the limit — splitting by page count is just guessing.

**What is the email attachment size limit for PDFs?**
Gmail allows up to 25MB per email (including encoding overhead, so aim for ~20MB of attachments). Outlook's default limit is 20MB. Many corporate and government portals cap uploads at 10MB. Splitting by size lets you hit any of these exactly.

**Does splitting a PDF reduce its quality?**
No. Splitting only divides pages between files — it doesn't recompress anything. Each part keeps the original quality. If parts are still too large, compress the PDF first, then split.
