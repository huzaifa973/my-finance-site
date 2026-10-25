# Robots.txt Template Pack: Copy-Paste Rules for Every Site — free download from DollarWise (dollarwise.xyz)

Copy a template into a plain text file named robots.txt in your site root, replacing yourdomain.com with your real domain. Test at https://yourdomain.com/robots.txt after uploading.

## Standard and CMS templates

1. Standard site — allow everything, declare sitemap
```
User-agent: *
Disallow:

Sitemap: https://yourdomain.com/sitemap.xml
```
2. WordPress starter — keep admin and search results out
```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/
Disallow: /?s=
Disallow: /search/
Allow: /wp-content/uploads/

Sitemap: https://yourdomain.com/sitemap.xml
```
3. Staging / development site — block everything (never use on a live site)
```
User-agent: *
Disallow: /
```
4. Blog — plus a clean crawl for news content
```
User-agent: *
Disallow: /wp-admin/
Disallow: /?s=
Disallow: /author/admin/
Disallow: /feed/
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
Sitemap: https://yourdomain.com/news-sitemap.xml
```

## Crawler and bot control

5. Block specific AI crawlers and scrapers
```
User-agent: *
Disallow:

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: anthropic-ai
Disallow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## Ecommerce and special-purpose templates

6. Ecommerce store — hide cart, checkout, and account pages
```
User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /my-account/
Disallow: /order/
Disallow: /wishlist/
Disallow: /*?add-to-cart=
Disallow: /*?filter_

Sitemap: https://yourdomain.com/sitemap.xml
```
7. JavaScript-heavy site — let crawlers see your assets
```
User-agent: *
Disallow: /api/
Disallow: /internal/
Disallow: /_next/data/
Allow: /_next/static/
Allow: /*.css$
Allow: /*.js$

Sitemap: https://yourdomain.com/sitemap.xml
```
8. Sections and subdomains — different rules per area
```
User-agent: *
Disallow: /support/tickets/
Disallow: /community/private/
Disallow: /forum/search/

Sitemap: https://yourdomain.com/sitemap.xml
```
9. Multi-sitemap setup — split sitemaps by content type
```
User-agent: *
Disallow: /internal/
Disallow: /staging/

Sitemap: https://yourdomain.com/sitemap-index.xml
Sitemap: https://yourdomain.com/sitemap-pages.xml
Sitemap: https://yourdomain.com/sitemap-posts.xml
Sitemap: https://yourdomain.com/sitemap-products.xml
```
10. Wildcard example — block parameters, keep pages
```
User-agent: *
Disallow: /*?
Disallow: /*?sort=
Disallow: /*?page=
Allow: /products/
Allow: /blog/

Sitemap: https://yourdomain.com/sitemap.xml
```
