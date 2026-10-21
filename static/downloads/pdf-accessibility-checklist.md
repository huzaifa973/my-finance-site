# PDF Accessibility Checklist: Tagged PDF Basics

Work through this checklist before publishing any PDF. A tagged, accessible PDF works with screen readers, reflows on small screens, and meets WCAG 2.1 AA and PDF/UA requirements.

## 1. Document structure and tags

1. The PDF is tagged (tags panel shows a logical tag tree, not an empty document).
2. Tags follow a single logical hierarchy: Document > headings > paragraphs > lists > tables > figures.
3. Every page's content appears in the tag tree — nothing is untagged or marked as artifact by mistake.
4. Heading levels are sequential (H1, then H2, then H3) with no skipped levels.
5. Exactly one H1 exists, and it matches the document title.
6. Lists use proper list tags (L, LI, Lbl, LBody) — not fake lists made of typed dashes or numbers.
7. No empty tags or empty paragraphs used for spacing.

## 2. Reading order

8. The reading order matches the visual order — verified with a screen reader or the Read Out Loud tool.
9. Multi-column layouts read column by column, not line-by-line across columns.
10. Headers, footers, and page numbers are marked as artifacts so screen readers skip them.
11. Sidebars and callout boxes are placed correctly in the reading order, not stranded at the end.

## 3. Images and non-text content

12. Every informative image has concise alt text (what it shows, not "image of...").
13. Decorative images are marked as artifacts (no alt text, skipped by screen readers).
14. Charts and graphs have alt text summarizing the key data point, with full data in surrounding text or a table.
15. No image of text is used where real text would work — logos excepted.

## 4. Tables

16. Data tables use proper table tags (Table, TR, TH, TD) with header cells marked as TH.
17. Complex tables define header scope (row/column) so screen readers announce headers correctly.
18. Tables have a caption or summary describing their purpose.
19. Layout tables (used for positioning) are NOT tagged as tables.

## 5. Links, forms, and language

20. Every link has meaningful link text — never "click here" or bare URLs.
21. Form fields are tagged, have tooltips/labels, and follow a logical tab order.
22. The document's primary language is set in document properties.
23. Passages in another language have that language set on the enclosing tag.
24. The document title is set in properties and set to display in the title bar (not the filename).

## 6. Color, contrast, and final checks

25. Information is never conveyed by color alone — labels, icons, or patterns back it up.
26. Text meets WCAG contrast ratios: 4.5:1 for body text, 3:1 for large text.
27. The full accessibility checker (Acrobat Pro or PAC) reports zero errors — warnings reviewed individually.
28. Tested with an actual screen reader (NVDA, JAWS, or VoiceOver) on at least the first, a middle, and the last page.

## Common fixes

- **Untagged PDF?** Run "Autotag Document," then manually fix the reading order — autotagging alone is never enough.
- **Scanned PDF?** OCR it first, then tag. A scanned image of text is invisible to screen readers.
- **Reading order wrong?** Use the Order panel (not just the Tags panel) to drag content into the correct sequence.
- **Checker errors on tables?** The Table Editor's "Table Cell Properties" fixes most TH/scope issues in seconds.
