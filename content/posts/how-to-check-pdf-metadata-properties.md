---
title: "How to Check PDF Metadata and Properties (Free Methods)"
description: "Learn how to check PDF metadata and properties free: author, title, creation date, fonts, and how to inspect or clean hidden data before sharing."
date: 2026-10-14
tags: ["pdf", "metadata", "privacy"]
categories: ["pdf"]
draft: false
image: /images/how-to-check-pdf-metadata-properties.svg
faq:
  - q: "What is PDF metadata?"
    a: "PDF metadata is hidden information embedded in the file: author, title, subject, keywords, creation and modification dates, and the software that made it. Some PDFs also store GPS location data from scanned photos."
  - q: "Can I see PDF properties without Adobe Acrobat?"
    a: "Yes. Free options include browser-based PDF viewers, built-in OS file properties dialogs, and our free PDF info viewer, which shows everything right in your browser with no install."
  - q: "Why should I check PDF metadata before sharing?"
    a: "Metadata can leak your name, employer, editing history, or even location. Checking first lets you spot and remove sensitive details before a file goes public."
  - q: "How do I remove metadata from a PDF?"
    a: "The simplest reliable method is to re-export or print the PDF to a fresh file, which drops most metadata. Dedicated metadata-cleaner tools can strip fields individually while keeping the content intact."
---

Every PDF carries a hidden layer of information most people never look at: who created it, when, with what software, and sometimes even where. That hidden layer is called metadata, and it can be surprisingly revealing — a resume that quietly names your current employer, a contract draft that shows its full editing history, a scanned photo that leaks GPS coordinates. Checking PDF metadata takes less than a minute, costs nothing, and saves you from accidental oversharing. Here are the free ways to inspect it.

## What PDF metadata actually contains

A PDF's document properties typically include:

- **Title, author, subject, and keywords** — descriptive fields set by the creating software.
- **Creator and producer** — the application that made the PDF (for example, Microsoft Word, Google Docs, or a scanner's software).
- **Creation and modification dates** — timestamps that reveal the file's history.
- **Page count, page size, and PDF version** — technical details about the document structure.
- **Fonts used** — a list of every font embedded in the file, which can hint at the tools used.
- **XMP metadata** — a deeper, XML-based layer that can include editing history and, in scanned images, camera or location data.

None of this is visible when you simply read the PDF. You have to know where to look — which is exactly why so many files go out the door carrying data their senders never intended to share.

## Method 1: Use a free online PDF info viewer (fastest)

The quickest route is a browser-based tool. Our [PDF info viewer](/tools/pdf-info-viewer/) opens your file and displays all of its metadata and properties instantly — no install, no account, and your file never leaves your browser, so nothing you inspect gets uploaded anywhere.

This is the method to reach for when you need a fast answer: *what is actually inside this file before I send it?* It shows the author, title, dates, software, fonts, and page details in one view, which makes it easy to spot something you would rather not publish.

## Method 2: Check properties in your operating system

Both major desktop systems expose basic file properties without opening any app:

**On Windows:** Right-click the PDF, choose *Properties*, and open the *Details* tab. You will see title, author, creation date, and page count. Click *Remove Properties and Personal Information* at the bottom for a built-in cleanup option.

**On Mac:** Open the file in Preview, then choose *Tools → Show Inspector* (or press Command+I). The inspector lists the document metadata, and the *Fonts* tab shows embedded fonts.

OS dialogs are convenient but limited — they show the standard fields and can miss deeper XMP metadata or per-page details that a dedicated viewer catches.

<!-- ADSENSE: in-article ad slot -->

## Method 3: Use a free PDF reader's document properties

Desktop PDF readers expose more than the OS dialogs do:

- **Adobe Acrobat Reader (free):** *File → Properties* opens the full document properties dialog with description, security, fonts, and advanced tabs.
- **Foxit Reader / other free readers:** a similar *File → Properties* dialog shows metadata, page sizes, and font lists.

This method works offline and shows fonts and security settings, which matters when you are checking whether a file is password-protected or restricted from printing and copying.

## Method 4: Inspect metadata from the command line

For developers or anyone comfortable with a terminal, command-line tools give the most complete picture:

- **ExifTool** (free): `exiftool file.pdf` dumps every metadata field, including XMP layers and embedded image data. The gold standard for thoroughness.
- **pdfinfo** (part of Poppler): `pdfinfo file.pdf` prints a clean summary of properties, page sizes, and encryption status.
- **Python with pypdf**: a few lines of code can extract `doc.metadata` from any PDF programmatically — handy for auditing a whole folder of files at once.

Command-line methods shine for batch checks: one loop can scan hundreds of files for author names or GPS tags before a bulk publish.

## What to look for (and remove) before sharing

When you inspect a PDF you plan to send publicly, run through this checklist:

1. **Author name** — does it name you, a colleague, or your company? Change it to something neutral.
2. **Creation and modification dates** — do they reveal a draft history you would rather keep private?
3. **Creator/producer software** — harmless in most cases, but occasionally reveals internal tooling.
4. **GPS or camera data** — common in PDFs built from phone scans; remove it before publishing anything location-sensitive.
5. **Editing history in XMP** — repeated save cycles can expose how many revisions a document went through.
6. **Hidden text or annotations** — flattened poorly, these can sometimes be recovered; verify with a viewer.

<!-- AFFILIATE: if you handle sensitive documents regularly, a document-management service with built-in metadata scrubbing can automate this check on every file you share -->

## How to remove PDF metadata safely

Found something you do not want in the file? Your options, from simplest to most thorough:

- **Re-export the PDF.** Printing or exporting to a fresh PDF usually drops most metadata and flattens the editing history. Quick, but verify the result afterward.
- **Use your OS cleanup.** Windows' *Remove Properties and Personal Information* strips standard fields in one click.
- **Use a metadata cleaner.** Dedicated tools let you delete individual fields while preserving the content, bookmarks, and layout.
- **Re-create from source.** For maximum certainty on sensitive documents, export a fresh PDF from the original file with metadata fields left blank or set to neutral values.

After any cleanup, inspect the file again with the viewer to confirm the fields are actually gone — trust, but verify.

## Frequently asked questions

### What is PDF metadata?
PDF metadata is hidden information embedded in the file: author, title, subject, keywords, creation and modification dates, and the software that produced it. Some PDFs also carry deeper XMP data, including editing history and GPS coordinates from scanned images.

### Can I see PDF properties without Adobe Acrobat?
Yes. Browser-based viewers like our free PDF info viewer show everything instantly with no install, and your operating system's built-in properties dialog (Windows Properties or Mac Preview Inspector) covers the basics. Command-line tools like ExifTool give the most complete picture.

### Why should I check PDF metadata before sharing?
Because metadata can quietly leak your name, employer, editing history, or even location. A one-minute inspection lets you spot and remove sensitive details before a file goes public — especially important for resumes, contracts, and published reports.

### How do I remove metadata from a PDF?
The simplest reliable method is re-exporting or printing the PDF to a fresh file, which drops most metadata. For finer control, use Windows' built-in property removal or a dedicated metadata-cleaner tool, then re-inspect the file to confirm the fields are gone.
