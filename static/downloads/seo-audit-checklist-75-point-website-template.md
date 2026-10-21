# 75-Point Website SEO Audit Checklist — free checkable template from DollarWise (dollarwise.xyz)

Work through each section in order. Mark every item as pass, fail, or N/A, and record the affected URLs for failures.

## Technical SEO (20)

- [ ] Every important page returns a 200 status code; no key page is accidentally blocked by robots.txt or a noindex tag — verify in Search Console's page indexing report.
- [ ] The XML sitemap lists only canonical, indexable URLs, stays under 50,000 entries, is submitted in Search Console, and returns no errors.
- [ ] Robots.txt is valid, does not block CSS or JavaScript resources, and the sitemap URL is declared in it.
- [ ] HTTPS is enforced site-wide with no mixed-content warnings and a valid certificate.
- [ ] Canonical tags are present, self-referencing on canonical pages, and point to the correct preferred URL everywhere.
- [ ] There are no redirect chains longer than 2 hops and no redirect loops; all old URLs 301 to their closest current match.
- [ ] Core Web Vitals pass on top traffic pages: LCP under 2.5s, INP under 200ms, CLS under 0.1.
- [ ] Pages load in under 3 seconds on a 4G connection; images use modern formats and lazy loading below the fold.
- [ ] The site has a logical crawl depth: every important page is reachable within 3 clicks of the homepage.
- [ ] Pagination, faceted navigation, and parameter URLs are handled with canonicals or noindex so they do not create duplicate content.
- [ ] Structured data (Article, FAQ, Breadcrumb, Product where relevant) validates with zero errors in the Rich Results Test.
- [ ] Hreflang tags are correct and reciprocal on every language or regional version of the site.
- [ ] The 404 page returns a true 404 status, is helpful, and broken internal links are fixed or redirected.
- [ ] Server response time (TTFB) is under 600ms for key pages.
- [ ] JavaScript-rendered content is visible to crawlers: test with URL Inspection's rendered HTML view.
- [ ] The mobile and desktop versions show content parity — no content hidden from crawlers on mobile.
- [ ] Log files or crawl stats show Googlebot is crawling important pages regularly and not wasting budget on junk URLs.
- [ ] There are no soft 404s reported in Search Console.
- [ ] The site is not hacked or flagged: check the Security Issues report and scan for injected spam pages via site: queries.
- [ ] DNS, hosting, and CDN are stable with no recurring downtime during peak crawl hours.

## On-page SEO (20)

- [ ] Every page has exactly one H1 that includes the primary keyword naturally.
- [ ] H2s and H3s form a logical hierarchy with no skipped levels and no keyword stuffing.
- [ ] Title tags are unique on every page, 50 to 60 characters, with the primary keyword near the front.
- [ ] Meta descriptions are unique, under 155 characters, include the keyword, and contain a clear value proposition or call to action.
- [ ] URL slugs are short, lowercase, hyphenated, and include the primary keyword without dates or stop words.
- [ ] The primary keyword appears in the first 100 words of the content.
- [ ] Keyword density reads naturally with semantic variations covered; no stuffing.
- [ ] Every image has descriptive alt text; decorative images use empty alt attributes.
- [ ] Images are compressed, served in modern formats, and include width and height attributes.
- [ ] Internal links use descriptive anchor text; every important page receives contextual internal links.
- [ ] Orphan pages (zero internal links) are linked into the site structure or removed.
- [ ] Outbound links point to authoritative, relevant sources and open appropriately.
- [ ] Content is formatted for readability: short paragraphs, bullet lists, and jump links on long pages.
- [ ] A clear call to action exists on every commercial page.
- [ ] FAQ or Q and A sections target long-tail question queries with concise 40 to 60 word answers.
- [ ] Table of contents with anchor links is present on posts over 1,500 words.
- [ ] Dates (published and updated) are visible and accurate, with correct schema markup.
- [ ] Author bylines with credentials appear on YMYL and expertise-driven content.
- [ ] Social sharing meta tags (Open Graph, Twitter Cards) render correct titles, descriptions, and images.
- [ ] No page has duplicate title tags, meta descriptions, or H1s when crawled site-wide.

## Content (15)

- [ ] Flag every indexed page under 300 words and decide to expand, merge, noindex, or delete each one.
- [ ] Search intent matches for the primary keyword: the page format matches what ranks on page one.
- [ ] No keyword cannibalization: pages competing for the same primary keyword are consolidated.
- [ ] Duplicate content is eliminated or canonicalized; check with site: queries and a similarity tool.
- [ ] Content is original and adds value beyond the top-ranking pages, not rewritten from them.
- [ ] Statistics and facts are current, cited, and linked to primary sources.
- [ ] Content is refreshed on a schedule; decaying pages are updated before rankings slip.
- [ ] E-E-A-T signals are present: real author expertise, first-hand experience, and trustworthy citations.
- [ ] Thin category, tag, and archive pages are noindexed or enriched with unique content.
- [ ] Every post targets one primary keyword with documented secondary keywords.
- [ ] Content depth matches SERP expectations: word count and subtopic coverage comparable to page-one winners.
- [ ] User engagement signals are healthy: low bounce on key pages, real time on page, no pogo-sticking patterns.
- [ ] Comments and user-generated content are moderated for spam and add genuine value.
- [ ] PDFs and downloads are optimized, indexed intentionally or blocked deliberately.
- [ ] A content pruning decision (keep, refresh, merge, delete) exists for every underperforming URL.

## Off-page SEO (10)

- [ ] Backlink profile is reviewed for spammy or irrelevant links; clearly toxic ones are disavowed.
- [ ] The most-linked pages are the pages you most want ranking.
- [ ] Anchor text distribution is natural: branded and naked URLs dominate, exact-match is a small minority.
- [ ] Referring domains are topically relevant; links come from real sites, not link farms or PBNs.
- [ ] Lost backlinks from the last 90 days are identified and reclaimed where possible.
- [ ] Competitor backlink gaps are documented with outreach targets for the next quarter.
- [ ] Brand mentions without links are found and converted into links with a polite request.
- [ ] No participation in link schemes, paid links without nofollow or sponsored attributes, or excessive reciprocal linking.
- [ ] Social profiles are claimed, complete, and link to the site with consistent branding.
- [ ] Digital PR or linkable assets (data studies, tools, original research) are planned or live.

## Local and mobile SEO (10)

- [ ] Google Business Profile is claimed, verified, and fully completed with categories, hours, photos, and services.
- [ ] NAP (name, address, phone) is consistent across the site, Google Business Profile, and all citations.
- [ ] Local citations exist on major directories with no duplicates or conflicting data.
- [ ] Location pages have unique content, embedded maps, and local schema markup.
- [ ] Reviews are actively requested and professionally responded to, including negative ones.
- [ ] The full mobile experience is tested on a real phone: tap targets at least 48 pixels, no horizontal scrolling, readable fonts.
- [ ] No intrusive interstitials or popups block content on mobile.
- [ ] Mobile page speed passes Core Web Vitals on a 4G connection.
- [ ] Click-to-call and click-for-directions work correctly on mobile contact elements.
- [ ] Local keyword rankings are tracked separately from national rankings for target service areas.
