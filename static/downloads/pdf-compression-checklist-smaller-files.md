# PDF Compression Checklist: 30 Steps to Smaller Files — free download from DollarWise (dollarwise.xyz)

Work through the phases in order. Back up the original first, and never compress a compressed file again — redo from the backup.

## Phase 1 — Prepare and measure

1. Save a backup copy of the original PDF before compressing anything.
2. Check which objects eat the most space: images, fonts, or embedded files.
3. Delete blank pages, duplicate pages, and pages you do not need.
4. Remove embedded file attachments that are not part of the document.
5. Decide your target: screen viewing (smallest), general sharing (balanced), or print (largest).
6. Note the original file size so you can measure the improvement honestly.

## Phase 2 — Optimize images

7. Downsample images above 200 DPI for screen use — 300 DPI is only needed for print.
8. Resize images that are larger than they display; a full-page photo rarely needs 4000 pixels.
9. Recompress color photos as JPEG at 70-80% quality for a strong size-to-quality balance.
10. Convert screenshots and flat graphics to a lossless format instead of JPEG to avoid artifacts.
11. Compress black-and-white scanned pages with JBIG2 or CCITT Group 4, not JPEG.
12. Remove images hidden behind other objects or outside the visible page area.
13. Flatten transparency where it bloats the file, keeping a backup of the original.
14. Avoid compressing the same image twice — start from the highest-quality source you have.

## Phase 3 — Subset and clean fonts

15. Subset embedded fonts so only the characters actually used are stored.
16. Replace multiple similar fonts with one consistent family across the document.
17. Remove fully embedded font files that subsetting left behind as duplicates.
18. Convert text-heavy decorative headings to outlines only if file size actually drops.
19. Verify text still selects and searches correctly after font optimization.

## Phase 4 — Clean the file structure

20. Flatten form fields into static content if the form no longer needs to be fillable.
21. Remove unused layers, optional content groups, and hidden page elements.
22. Delete document metadata, thumbnails, and private application data you do not need.
23. Discard unused bookmarks, destinations, and named actions.
24. Run an object-level cleanup or "optimize" pass to remove duplicate and orphaned objects.
25. Save with object streams and compressed cross-reference tables enabled.

## Phase 5 — Verify the result

26. Compare the new size against the original and confirm it meets your target.
27. Flip through every page at 100% zoom and check images for blur or artifacts.
28. Test text selection, search, and copy-paste across several pages.
29. Open the compressed file in a second PDF viewer to catch rendering problems.
30. Confirm links, bookmarks, and the table of contents still work.
