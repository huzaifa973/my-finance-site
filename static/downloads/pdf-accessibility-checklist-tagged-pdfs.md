# PDF Accessibility Checklist for Tagged, Screen-Reader-Friendly PDFs — free download from DollarWise (dollarwise.xyz)

Build accessibility in the source application where possible — repairing tags in a finished PDF is far slower than exporting correctly the first time.

## Phase 1 — Document setup

1. Set the document language so screen readers use the correct pronunciation.
2. Give the PDF a descriptive document title that appears in the title bar.
3. Export or save as a tagged PDF — confirm the tags option is enabled in your tool.
4. Run OCR on any scanned pages so there is real text behind the images.
5. Confirm the file is not a flat image-only PDF before continuing.

## Phase 2 — Tag structure

6. Verify every page has a complete tag tree with no untagged content.
7. Tag headings as H1 through H6 in a logical, unskipped hierarchy.
8. Tag body text as paragraphs (P), not as loose text runs.
9. Tag bulleted and numbered lists as proper list structures with list items.
10. Mark decorative images and design elements as artifacts so readers skip them.
11. Tag footnotes, captions, and quotes with their correct semantic tags.

## Phase 3 — Reading order

12. Check the reading order on every page with multi-column or complex layouts.
13. Fix sidebars and callout boxes so they read in a sensible position, not mid-sentence.
14. Confirm headers, footers, and page numbers are artifacted or read consistently.
15. Verify the tab order follows the visual reading order for keyboard users.
16. Test the reading order with a screen reader on at least two complex pages.

## Phase 4 — Images and alt text

17. Write concise alt text for every informative image, chart, and diagram.
18. Describe what the image communicates, not just what it shows.
19. Keep alt text under about 150 characters; put longer explanations in the body text.
20. Never start alt text with "image of" — screen readers already announce the element.
21. Provide a text alternative or data table for complex charts and infographics.

## Phase 5 — Tables

22. Tag tables with proper table, row, and cell structure — never fake tables with tabs or spaces.
23. Designate header rows and columns so screen readers announce them on every cell.
24. Add a table summary or caption describing what the table shows.
25. Avoid merged cells where possible; they confuse screen reader navigation.

## Phase 6 — Forms

26. Give every form field a clear, unique label that a screen reader can announce.
27. Set a logical tab order through the form fields.
28. Associate help text and error messages with their fields programmatically.
29. Mark required fields as required in the field properties, not just visually.

## Phase 7 — Color, contrast, and testing

30. Never use color alone to convey meaning — add labels, icons, or text.
31. Check text contrast meets at least 4.5:1 for body text and 3:1 for large text.
32. Run the built-in accessibility checker and fix every reported error.
