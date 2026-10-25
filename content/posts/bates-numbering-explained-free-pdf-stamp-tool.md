---
title: "Bates Numbering Explained: Free PDF Stamp Tool"
description: "Bates numbering explained: what Bates stamps are, how the prefix-number-suffix format works in legal discovery, and how to stamp a PDF free in your browser."
date: 2026-10-24
tags: ["bates numbering", "bates stamp pdf", "legal document numbering", "discovery"]
categories: ["pdf"]
draft: false
image: /images/bates-numbering-explained-free-pdf-stamp-tool.svg
slug: bates-numbering-explained-free-pdf-stamp-tool
post_type: article
faq:
  - q: "What is Bates numbering?"
    a: "Bates numbering is a method of assigning a unique identifier — typically a prefix, a sequential number, and an optional suffix — to every page of documents produced in legal discovery, so each page can be cited precisely."
  - q: "What does a Bates number look like?"
    a: "A typical Bates number looks like ABC-000123 or DEF_00456_CONFIDENTIAL: a short prefix identifying the producing party, a zero-padded sequential number, and an optional suffix noting confidentiality or document type."
  - q: "Do I need special software to apply Bates numbers to a PDF?"
    a: "No. Free browser-based tools stamp Bates numbers onto every page of a PDF with control over prefix, starting number, digit padding, suffix, position, and font — no expensive litigation software required."
  - q: "Can Bates numbers be removed from a PDF?"
    a: "Only by reverting to the unstamped original. Bates stamps are flattened into the page content when applied, which is exactly why courts trust them — they cannot be quietly altered after the fact."
---

In a lawsuit, thousands of pages change hands — emails, contracts, memos, photos. When a lawyer says "see page 47," nobody can afford ambiguity about *which* page 47 of *whose* 3,000-page production. That is the problem Bates numbering solves: every single page gets a unique, sequential stamp, so any page can be cited, retrieved, and referenced with total precision. Here is what Bates numbering is, how the format works, and how to stamp a PDF yourself for free.

## What Bates numbering is (and where the name comes from)

Bates numbering is a system for assigning a **unique sequential identifier to each page** of a set of documents, most famously in legal discovery — the phase of litigation where parties exchange evidence.

The name comes from the **Bates Automatic Numbering Machine**, a mechanical stamper patented in the 1890s by Edwin Granville Bates. Before computers, law firms hand-stamped each page with this device, which advanced the number by one with every press. The digital version does the same thing: stamp, increment, next page.

Today, Bates numbers appear in depositions ("Please look at Bates number DEF-001234"), court filings, privilege logs, and settlement negotiations. But you do not need to be a law firm to use the system — it is just as useful for numbering insurance claim files, audit workpapers, medical records, or any large document set where page-level citation matters.

## The anatomy of a Bates number

A Bates number has up to three parts:

- **Prefix** — a short code identifying who produced the documents or which set they belong to. Examples: `ABC`, `DEF`, `SMITH`, `ACME`. The producing party chooses it, and it stays constant across their whole production.
- **Number** — the sequential page number, usually **zero-padded** to a fixed width so numbers sort correctly. `000123` rather than `123`, because `000123` always lines up and `123` would sort after `1000` in naive systems.
- **Suffix** (optional) — an extra tag, often marking confidentiality or document type. Examples: `CONFIDENTIAL`, `AEO` (attorneys' eyes only), `REDACTED`.

Put together, a full Bates stamp looks like:

- `ABC-000123`
- `DEF_00456_CONFIDENTIAL`
- `SMITH0007891`

There is no single mandatory format — the key requirements are **uniqueness** (no two pages share a number) and **sequential order** (the numbers run in an unbroken sequence across the production).

## Why zero-padding and sequencing actually matter

Two details that seem fussy but cause real problems when ignored:

**Zero-padding.** If you number pages 1 through 10,000 without padding, a computer sorts them as 1, 10, 100, 1000, 10000, 2, 20, 200... — alphabetical order, not numerical. Padding every number to the same width (`000001` through `010000`) keeps the sequence sorting correctly in every system, from file explorers to document review platforms. Six digits is the common choice; it covers up to 999,999 pages.

**Unbroken sequencing.** The sequence must not skip or repeat. If page 456 is missing from the production, everyone notices — and in litigation, a gap invites questions about what was withheld. Good practice: stamp the full set in one pass, verify the first and last numbers, and spot-check the middle.

## Step-by-step: stamp Bates numbers on a PDF free

1. **Gather the PDFs in order.** Bates numbering runs across pages in sequence, so arrange your files in the order the pages should be numbered before you start.
2. **Open the Bates stamping tool.** Try the free tool: /tools/pdf-bates-numbering/ — everything happens in your browser, so your files never leave your device. Sensitive legal documents never upload to a server.
3. **Set your prefix, starting number, and padding.** Enter a short prefix (your initials, client code, or matter code), a starting number (usually 1, or continuing a previous production's sequence), and the digit width — 6 digits is standard.
4. **Add a suffix if needed.** Marking pages confidential? Add `CONFIDENTIAL` as a suffix so every page carries the designation automatically.
5. **Choose position and appearance.** Bottom-right corner is the classic Bates position — out of the way of body text but easy to find. Pick a readable font size; the stamp must be legible but never cover content.
6. **Apply and verify.** The tool stamps every page and gives you the finished PDF. Check the first page, a middle page, and the last page to confirm the sequence is unbroken and correctly padded.

<!-- ADSENSE: in-article ad slot -->

## Bates numbering best practices

- **Agree on the prefix early.** If multiple parties are producing documents, each needs a distinct prefix — otherwise two productions can collide on `000123`. Coordinate before anyone stamps.
- **Never re-use a sequence.** Once `ABC-000001` through `ABC-005000` exist, those numbers are taken forever for that matter. A supplemental production continues at `ABC-005001`, it does not restart.
- **Stamp before redacting, or after — but decide once.** Some teams stamp first so the redaction log can cite Bates numbers; others redact first. Either workflow is fine, but mixing them mid-production creates confusion.
- **Keep the unstamped originals.** Like any destructive edit, stamping is one-way. Archive the clean PDFs separately in case you need to re-stamp with corrected settings.
- **Check headers and footers.** If the original pages already have page numbers or footers, place the Bates stamp where it cannot be confused with them — the bottom-right corner usually works, slightly offset from existing footers.

## Bates numbering outside the courtroom

The system is overkill for a 5-page memo, but it shines anywhere a large document set needs page-level referencing: **insurance claims** (numbering every photo and estimate so adjusters cite exact pages), **medical records requests**, **internal audits**, **real estate closing binders**, and **freelancer deliverable sets** where client feedback must reference exact pages.

Anywhere you have ever written "see the page with the chart about halfway through" — that is a Bates numbering use case waiting to happen.

<!-- AFFILIATE: document management or legal software recommendation can go here -->

## Common Bates stamping mistakes

- **Restarting the sequence mid-production.** Supplemental documents continue the numbering; they never restart at 1. A restarted sequence creates duplicate identifiers — the one thing Bates numbering exists to prevent.
- **Inconsistent padding.** Starting at 6 digits and switching to 4 halfway through breaks sorting. Pick the width once, for the whole matter.
- **Stamping over content.** A stamp that covers text defeats its own purpose. Preview several pages — including dense ones — before finalizing position and size.
- **Stamping a file you will keep editing.** Add pages *before* stamping, not after. New pages inserted after stamping either go unnumbered or force a complete re-stamp.

Bates numbering is a 130-year-old idea that still runs modern litigation: one unique number per page, sequential, unbreakable. Whether you are producing discovery or just organizing a mountain of paperwork, a free browser tool and five minutes of setup give you the same page-level precision the big firms pay thousands for.

## Frequently asked questions

**What is Bates numbering?**
Bates numbering is a method of assigning a unique identifier — typically a prefix, a sequential number, and an optional suffix — to every page of documents produced in legal discovery, so each page can be cited precisely.

**What does a Bates number look like?**
A typical Bates number looks like ABC-000123 or DEF_00456_CONFIDENTIAL: a short prefix identifying the producing party, a zero-padded sequential number, and an optional suffix noting confidentiality or document type.

**Do I need special software to apply Bates numbers to a PDF?**
No. Free browser-based tools stamp Bates numbers onto every page of a PDF with control over prefix, starting number, digit padding, suffix, position, and font — no expensive litigation software required.

**Can Bates numbers be removed from a PDF?**
Only by reverting to the unstamped original. Bates stamps are flattened into the page content when applied, which is exactly why courts trust them — they cannot be quietly altered after the fact.
