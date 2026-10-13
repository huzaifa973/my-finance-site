---
title: "Book Schema Markup: Get Your Book into Google's Rich Results"
description: "Book schema markup helps your book appear in Google's rich results with cover, author, ratings, and price. Includes a JSON-LD example, key properties, and a free generator."
date: 2026-10-13
tags: ["seo", "book schema", "structured data"]
draft: false
image: /images/book-schema-markup-google-rich-results-guide.svg
faq:
  - q: "What is Book schema markup?"
    a: "Book schema is structured data using the Schema.org Book type that describes a book to search engines — its title, author, ISBN, publisher, and reviews. Valid markup makes your book eligible for rich results showing the cover, ratings, and price directly in Google."
  - q: "Do I need an ISBN to use Book schema?"
    a: "No — ISBN is recommended but not required. Many self-published ebooks don't have one. Google can still show rich results using your book's name, author, and description, though an ISBN helps Google match your book to the correct edition across retailers."
  - q: "Can Book schema help my book sell more copies?"
    a: "It can improve visibility: rich results with covers, star ratings, and prices get clicked more often than plain links. More clicks to your book page mean more chances to convert browsers into buyers, especially for niche nonfiction and self-published titles."
  - q: "Where do I put Book schema on my page?"
    a: "Paste the JSON-LD script in the head of your book's page, or in a custom code field if you use WordPress or a page builder. It also works near the closing body tag. One Book object per book page — put it on the page that describes that specific book."
---

If you've written a book — or sell them — your book deserves to look good in Google. Search for any popular title and you'll see what the winners get: a cover image, the author's name, star ratings, and sometimes the price, all displayed right in the search results. That enhanced display isn't luck. It's **Book schema markup**, and this guide shows you how to add it.

Use the [book schema generator](/tools/book-schema-generator/) to build the code in seconds, then follow the steps below to place and validate it.

## What Book Schema Markup Does

Book schema is structured data based on the [Schema.org Book type](https://schema.org/Book). It translates your book's details — title, author, ISBN, publisher, publish date, reviews — into a machine-readable format that Google can display as a rich result.

Without it, Google sees your page as plain text and guesses. With it, you're handing Google the exact facts it needs to render that attractive book card. The difference in click-through rate between a plain link and a rich result with a cover and star ratings can be dramatic, especially for authors competing against big retailers and review sites.

## How Books Appear in Google

Google shows book information in several places:

- **Rich results on web search** — a book listing with cover image, author, ratings, and price when someone searches your title.
- **The Google Books panel** — Google sometimes matches your book to its book database using the ISBN, showing "About the author" and retailer links.
- **Review snippets** — star ratings from genuine reviews on your page, displayed under your listing.

Schema markup makes you *eligible* for these displays. Google still decides whether to show them, based on relevance and the quality of your page. But eligibility is the prerequisite, and markup is how you get it.

## The Properties That Matter

Google documents required and recommended properties for books. Here's what to include, in priority order:

- **name** — the book's full title, exactly as published. Required.
- **author** — the author as a `Person` (or `Organization` for corporate authors), with at least a `name`. Required.
- **isbn** — the ISBN-13 if your book has one. Recommended. It helps Google match editions across the web.
- **publisher** — the publisher as an `Organization` with a `name`. Recommended.
- **datePublished** — the publication date in `YYYY-MM-DD` format. Recommended.
- **bookFormat** — the edition format, e.g. `EBook`, `Paperback`, `Hardcover`, or `Audiobook`. Recommended.
- **aggregateRating** — a summary of real reader ratings with `ratingValue`, `reviewCount`, and `bestRating`. Recommended — but only for reviews actually displayed on the page.
- **offers** — price and availability as an `Offer`. Recommended if you sell the book from the page.
- **image** — the cover image URL. Strongly helps the rich result look right.

<!-- ADSENSE: in-article ad slot -->

## A Complete JSON-LD Example

Google prefers JSON-LD. Here's a ready-to-adapt example for a self-published ebook:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "The Smart Saver's Playbook",
  "author": {
    "@type": "Person",
    "name": "Huzaifa Suleman"
  },
  "isbn": "978-1-23456-789-0",
  "publisher": {
    "@type": "Organization",
    "name": "DollarWise Press"
  },
  "datePublished": "2026-03-15",
  "bookFormat": "EBook",
  "inLanguage": "en",
  "image": "https://example.com/covers/smart-savers-playbook.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "312",
    "bestRating": "5"
  },
  "offers": {
    "@type": "Offer",
    "price": "9.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

If your book has multiple editions (paperback, ebook, audiobook), you can list each edition as a separate `Book` with its own `bookFormat` and `isbn`, or use a `workExample` on the main work. Keep one edition per page where possible — it's cleaner for validation.

Rather than writing this by hand, use the [book schema generator](/tools/book-schema-generator/): enter your title, author, ISBN, and ratings, and it produces this exact JSON-LD for you.

## Where to Place It

Placement is flexible with JSON-LD, but these rules keep things clean:

1. **On the book's own page.** The schema belongs on the page that describes that specific book — your book's landing page, not your homepage and not a blog post that merely mentions it.
2. **In the `<head>` or before `</body>`.** Either works. Page builders and WordPress plugins often have a "custom code" or "header scripts" field — that's the natural home.
3. **One book per page.** If a page lists five books, mark up an `ItemList` with links to each book's page, and put the full `Book` schema on the individual pages.
4. **Match visible content.** The title, price, and rating in your schema must match what's shown on the page. If your page says the ebook costs $9.99, your schema must say $9.99.

<!-- AFFILIATE: If you're publishing your own book, dedicated ebook publishing and distribution services can handle formatting, ISBN assignment, and getting your title onto major retailers — worth comparing before you go it alone. -->

## Validating Your Markup

Never publish schema without testing it. Here's the validation routine:

1. **Rich Results Test.** Go to Google's Rich Results Test, paste your URL or code snippet, and check which rich results you're eligible for. Fix every error it reports — warnings are optional, errors are blockers.
2. **Schema Markup Validator.** The validator at validator.schema.org checks your markup against the full Schema.org vocabulary, catching issues Google's tool doesn't cover.
3. **Search Console.** After publishing, the "Enhancements" section in Google Search Console reports on structured data across your site and alerts you to errors that appear over time.
4. **Re-test after edits.** Any time you change the price, add reviews, or redesign the page, re-run the test. Schema breaks silently — the page looks fine while the markup quietly fails.

## Common Mistakes

- **Invented ratings.** The most damaging mistake. Google treats fake review markup as spam. Only include ratings that appear on the page, from real readers.
- **Wrong book format values.** Use the exact Schema.org values like `EBook` or `Paperback` — lowercase or invented values won't validate.
- **ISBN formatting issues.** Use the 13-digit ISBN without dashes or with standard hyphenation; avoid mixing editions (the paperback ISBN on the ebook page).
- **Schema on the wrong page.** Book schema on your homepage or a category archive confuses Google. One book, one page.
- **Stale data.** If the book goes out of print or the price changes, update the schema the same day. Outdated `offers` data erodes trust.

For online courses, the same rich-result strategy applies with a different vocabulary — see our guide to [course schema markup](/posts/how-to-add-course-schema-markup-free-generator/) for that.

## Frequently asked questions

### What is Book schema markup?
Book schema is structured data using the Schema.org Book type that describes a book to search engines — its title, author, ISBN, publisher, and reviews. Valid markup makes your book eligible for rich results showing the cover, ratings, and price directly in Google.

### Do I need an ISBN to use Book schema?
No — ISBN is recommended but not required. Many self-published ebooks don't have one. Google can still show rich results using your book's name, author, and description, though an ISBN helps Google match your book to the correct edition across retailers.

### Can Book schema help my book sell more copies?
It can improve visibility: rich results with covers, star ratings, and prices get clicked more often than plain links. More clicks to your book page mean more chances to convert browsers into buyers, especially for niche nonfiction and self-published titles.

### Where do I put Book schema on my page?
Paste the JSON-LD script in the head of your book's page, or in a custom code field if you use WordPress or a page builder. It also works near the closing body tag. One Book object per book page — put it on the page that describes that specific book.
