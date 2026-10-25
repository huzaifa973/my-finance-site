# 100-Point Technical SEO Audit Checklist — free download from DollarWise (dollarwise.xyz)

Work through the sections in order. Mark each item pass, fail, or not applicable, and fix failures by impact: indexing blockers first.

## Section 1 — Crawlability

1. Confirm robots.txt exists at the domain root and returns a 200 status.
2. Verify robots.txt does not accidentally block key sections, CSS, or JavaScript.
3. Check that important pages are not blocked by a rogue noindex tag.
4. Confirm the XML sitemap exists, is valid, and lists only indexable URLs.
5. Submit the sitemap in Search Console and check for reported errors.
6. Review the crawl stats report for unexpected spikes or drops in crawl activity.
7. Identify and fix crawl traps: infinite calendars, faceted filters, and session IDs.
8. Confirm paginated series use clean URLs and do not create duplicate crawl paths.
9. Check that internal search result pages are blocked or noindexed.
10. Verify the crawl budget is spent on important pages, not thin or duplicate ones.

## Section 2 — Indexing

11. Compare pages indexed in Search Console against pages you expect to be indexed.
12. Investigate every important page reported as "Discovered — currently not indexed."
13. Investigate every important page reported as "Crawled — currently not indexed."
14. Confirm canonical tags point to the correct preferred URL on every page type.
15. Check that canonicals are absolute URLs, not relative paths.
16. Look for duplicate content across www/non-www and HTTP/HTTPS versions.
17. Verify trailing-slash and case variants redirect to one canonical version.
18. Confirm thin or outdated pages are improved, merged, or noindexed — not left to dilute the site.
19. Check that tag, archive, and author pages are indexed only if they add value.
20. Review the sitemap for stale URLs, redirects, and 404s that should be removed.

## Section 3 — Site speed and Core Web Vitals

21. Test key templates in PageSpeed Insights and record LCP, INP, and CLS.
22. Bring Largest Contentful Paint under 2.5 seconds on mobile for key pages.
23. Bring Interaction to Next Paint under 200 milliseconds by trimming heavy JavaScript.
24. Keep Cumulative Layout Shift under 0.1 by reserving space for images and ads.
25. Compress and serve images in modern formats (WebP or AVIF) at correct dimensions.
26. Enable text compression (Brotli or Gzip) on the server or CDN.
27. Defer or async-load non-critical JavaScript so it does not block rendering.
28. Remove unused CSS and JavaScript from themes, plugins, and page builders.
29. Verify browser caching headers are set with sensible lifetimes for static assets.
30. Use a CDN if your audience is geographically spread out.

## Section 4 — Mobile rendering

31. Confirm the viewport meta tag is present and correctly configured.
32. Test key pages on a real mobile device, not just a resized desktop browser.
33. Check that tap targets (buttons, links) are at least 48px and not crowded.
34. Verify text is readable without horizontal scrolling at 360px width.
35. Confirm popups and interstitials do not cover main content on mobile.
36. Check that mobile and desktop versions show equivalent content and links.
37. Verify structured data and metadata match between mobile and desktop renders.
38. Test forms and checkout flows end-to-end on mobile.
39. Confirm images scale correctly and never overflow their containers.
40. Check that the mobile menu exposes the full navigation hierarchy.

## Section 5 — HTTPS and security

41. Confirm every page loads over HTTPS with a valid certificate.
42. Redirect all HTTP URLs to HTTPS with a 301 redirect.
43. Fix mixed-content warnings: no HTTP images, scripts, or stylesheets on HTTPS pages.
44. Enable HSTS so browsers always use the secure connection.
45. Check the certificate expiry date and set up auto-renewal or alerts.
46. Confirm the certificate chain is complete with no trust errors.
47. Verify old TLS versions are disabled and only TLS 1.2+ is served.
48. Add a Content Security Policy header if your stack supports it.
49. Check that login and checkout forms never submit over plain HTTP.
50. Scan for exposed admin panels, backups, or .env files reachable by URL.

## Section 6 — Structured data

51. Add the right schema type to each page template (Article, Product, FAQPage, etc.).
52. Validate all structured data with Google's Rich Results Test.
53. Confirm schema properties are accurate and match the visible page content.
54. Include required properties for each schema type (price and availability for Product, etc.).
55. Add Organization or WebSite schema with logo and sameAs links site-wide.
56. Add BreadcrumbList schema so breadcrumbs can appear in search results.
57. Keep JSON-LD in one clean script block per page rather than scattered fragments.
58. Check Search Console's enhancements reports for schema errors and warnings.
59. Never mark up content that is hidden from users or does not exist on the page.
60. Re-validate schema after every template or CMS update.

## Section 7 — On-page HTML correctness

61. Confirm every page has exactly one H1 that describes the page topic.
62. Check that title tags are unique, under 60 characters, and front-load the keyword.
63. Write unique meta descriptions under 160 characters for key pages.
64. Verify heading hierarchy: H2s under the H1, H3s under H2s, no skipped levels.
65. Confirm URLs are short, lowercase, hyphenated, and free of parameters where possible.
66. Check that Open Graph and Twitter Card tags render correct titles, images, and descriptions.
67. Verify the HTML lang attribute matches the page's actual language.
68. Confirm there is only one canonical URL declared per page.
69. Check that pagination uses rel prev/next or self-referencing canonicals consistently.
70. Validate HTML for unclosed tags and duplicate IDs that can break rendering or scripts.

## Section 8 — Internal linking and redirects

71. Crawl for broken internal links (404s) and fix or remove every one.
72. Crawl for redirect chains and flatten them to single-hop redirects.
73. Confirm all permanent URL changes use 301 redirects, not 302s.
74. Check that no important page is more than 3 clicks from the homepage.
75. Find orphan pages (no internal links) and link them into the site structure.
76. Use descriptive anchor text — avoid "click here" and bare URLs.
77. Link related content contextually within the body text, not only in sidebars.
78. Confirm the site navigation reflects the real information architecture.
79. Check breadcrumbs are present, accurate, and match the URL structure.
80. Review external links for broken targets and add rel attributes where appropriate.

## Section 9 — Images and media

81. Add descriptive, keyword-aware alt text to every meaningful image.
82. Leave alt empty (alt="") for purely decorative images.
83. Use descriptive file names instead of IMG_0042.jpg.
84. Compress every image and serve responsive sizes with srcset.
85. Lazy-load below-the-fold images but never the LCP image.
86. Set explicit width and height attributes to prevent layout shift.
87. Add important images to the XML sitemap or an image sitemap.
88. Provide transcripts or captions for videos and audio embeds.
89. Check that hotlinked or third-party media does not slow the page or break.
90. Verify Open Graph images meet the 1200x630 recommendation for social sharing.

## Section 10 — International, logs, and maintenance

91. Implement hreflang correctly on every language/region variant, with self-referencing tags.
92. Confirm each hreflang cluster links bidirectionally between all variants.
93. Use one consistent URL structure for international targeting (subfolder, subdomain, or ccTLD).
94. Set the correct language and region targeting in Search Console where applicable.
95. Review server logs monthly to see which pages Googlebot actually crawls.
96. Watch for crawl errors (5xx, DNS, timeouts) and fix them the same day.
97. Confirm the site returns a proper 404 page for missing URLs, not a soft 404.
98. Keep CMS, themes, and plugins updated to avoid security-driven SEO damage.
99. Back up the site and database before any major technical change.
100. Schedule the next audit: quarterly full audits plus monthly spot-checks.
