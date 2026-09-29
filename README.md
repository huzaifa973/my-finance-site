# DollarWise — Personal Finance for Beginners

A fast, self-contained Hugo static site for a Tier 1 personal finance blog. No external theme, no JavaScript frameworks — just Hugo, semantic HTML, and inlined CSS with system fonts.

## Site structure

```
hugo.toml                  # Site config (title, baseURL, permalinks, sitemap/robots)
layouts/
  _default/baseof.html     # Base shell
  _default/single.html     # Article pages
  _default/list.html       # Section/taxonomy listing pages
  index.html               # Homepage (hero + latest posts)
  partials/
    head.html              # Full SEO: meta, canonical, OG, Twitter cards,
                           #   JSON-LD Article + FAQ schema, inlined CSS
    header.html            # Site nav
    footer.html            # Footer + affiliate disclosure line
content/
  _index.md                # Homepage intro copy
  about.md                 # About page
  affiliate-disclosure.md  # Affiliate disclosure page
  tools/budget-calculator.md  # Client-side 50/30/20 budget calculator
  posts/                   # Blog posts (3 published to start)
static/
  robots.txt               # Allows all + points to sitemap.xml
```

## SEO features

- Title, meta description, and canonical URL on every page
- Open Graph + Twitter card tags
- JSON-LD `Article` schema on posts, `FAQPage` schema from post front matter (`faq:` list)
- Clean permalinks: `/posts/:slug/`
- Hugo-generated `sitemap.xml` and `robots.txt`

## Connect to Cloudflare Pages

1. Push this folder to a GitHub repo (e.g. `my-finance-site`) on the `main` branch.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select your GitHub repo.
4. In **Build settings**, configure:
   - **Production branch:** `main`
   - **Build command:** `hugo`
   - **Build output directory:** `public`
   - (Optional) **Root directory:** leave blank if the site is at the repo root
5. Click **Save and Deploy**. Cloudflare builds the site and gives you a free `*.pages.dev` URL.

### Hugo version note

If the build fails on a missing Hugo binary, set an environment variable in the Pages project settings:

- **Variable name:** `HUGO_VERSION`
- **Value:** e.g. `0.146.0` (or any recent extended release)

## Local preview (optional)

Install Hugo, then run from this folder:

```bash
hugo server
```

## Adding a new post

Create `content/posts/my-new-post.md`:

```markdown
---
title: "My Post Title"
description: "One-sentence meta description for SEO."
date: 2026-09-30
tags: ["budgeting"]
draft: false
faq:
  - q: "Question?"
    a: "Answer."
---

Post content here...
```

Mark ad/affiliate slots in the body with:

```html
<!-- ADSENSE: in-article ad slot -->
<!-- AFFILIATE: relevant offer -->
```

## Monetization checklist

- [ ] Apply for Google AdSense once the site has ~20–30 posts and some traffic
- [ ] Replace `ADSENSE` comment slots with real ad units
- [ ] Replace `AFFILIATE` comment slots with affiliate links (see affiliate disclosure page)
- [ ] Keep publishing 2–3 posts/week in one niche
