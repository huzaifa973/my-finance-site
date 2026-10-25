# Web Image Optimization Checklist — free download from DollarWise (dollarwise.xyz)

A 28-point repeatable workflow for fast, sharp, search-friendly web images. Work through the phases in order for every image you publish.

## Phase 1 — Plan before you export

1. Decide the maximum display width — never upload an image wider than it will ever be shown.
2. Match the aspect ratio to the design slot (hero, thumbnail, card) so the browser never crops or stretches it.
3. Pick the right format first: photo-style images get WebP/AVIF/JPEG, graphics and logos get SVG or PNG.
4. Use SVG for logos, icons, and illustrations — vectors stay sharp at any size with tiny file weights.
5. Skip transparency for photos — flat backgrounds compress far better than alpha channels.

## Phase 2 — Export settings that matter

6. Export photos at 70-80% JPEG quality (or WebP equivalent) — the visible difference is negligible.
7. Convert to sRGB color profile so colors look consistent across browsers and devices.
8. Export at 2x the displayed size for retina screens, but no larger — 2x is the sweet spot.
9. Use progressive or interlaced encoding so the image appears in stages while it loads.
10. Name the file descriptively (red-running-shoes.jpg) — it helps SEO and keeps your library searchable.
11. Crop tightly in the editor instead of relying on CSS to hide unwanted edges.

## Phase 3 — Compress and convert

12. Run every image through a lossy compressor (TinyPNG, Squoosh, or ShortPixel) before upload.
13. Convert JPEGs and PNGs to WebP — expect 25-35% smaller files at the same visual quality.
14. Consider AVIF for large hero images — it compresses even further than WebP.
15. Strip EXIF and metadata (camera info, GPS, thumbnails) — it saves bytes and protects privacy.
16. Try lossless compression first for graphics; switch to lossy only if the savings are worth it.
17. Target under 200 KB for heroes and banners, under 100 KB for standard content images.

## Phase 4 — Deliver it the fast way

18. Add responsive markup (srcset and sizes) so phones download small files and desktops get large ones.
19. Lazy-load below-the-fold images with loading="lazy" so they only download when scrolled into view.
20. Never lazy-load the hero or LCP image — mark it fetchpriority="high" instead.
21. Set explicit width and height attributes to prevent layout shift (CLS) as images load.
22. Serve images through a CDN with long cache headers so repeat visits load instantly.
23. Use the picture element with a JPEG/PNG fallback so older browsers still see the image.

## Phase 5 — Verify and keep it fast

24. Check every image file size after upload — flag anything that drifted above your targets.
25. Run the page through PageSpeed Insights and confirm the LCP image is not flagged.
26. Write a descriptive alt attribute for every image — accessibility and image search both reward it.
27. Test the page on a throttled 4G connection to feel what mobile visitors experience.
28. Re-check image sizes monthly — content editors and auto-imports are how bloat creeps back in.
