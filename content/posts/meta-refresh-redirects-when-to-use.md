---
title: "Meta Refresh Redirects: When to Use Them (and When Not To)"
description: "Meta refresh redirects reload or move a page via HTML. Learn when they are acceptable, why they hurt SEO, and what to use instead."
date: 2026-10-14
tags: ["seo", "redirects", "meta refresh"]
draft: false
image: /images/meta-refresh-redirects-when-to-use.svg
faq:
  - q: "What is a meta refresh redirect?"
    a: "A meta refresh redirect is an HTML meta tag in the page head that reloads the current page or sends the visitor to a new URL after a set number of seconds."
  - q: "Do meta refresh redirects hurt SEO?"
    a: "Yes, usually. They are slower and weaker than server redirects, can look like sneaky redirects to search engines, and often fail to pass full ranking credit."
  - q: "When is a meta refresh acceptable?"
    a: "When you have no server access — static hosting without redirect support, a page hosted on someone else's platform, or a timed interstitial like a 'you will be redirected in 5 seconds' notice."
  - q: "What should I use instead of meta refresh?"
    a: "A 301 permanent redirect at the server level for moved pages, an HTTP refresh header if you must redirect client-side, or JavaScript location.replace() for instant client-side moves."
---

The meta refresh is one of the oldest tricks on the web: a single line of HTML that tells the browser to reload the page — or jump to a different URL — after a few seconds. You have seen it on pages that say "If you are not redirected in 5 seconds, click here." It is simple, it needs no server access, and it works everywhere. It is also, in most cases, the wrong tool. Search engines treat meta refresh redirects with suspicion, they pass less ranking value than proper redirects, and they create a worse experience for visitors. This guide shows exactly what a meta refresh does, the narrow cases where it is acceptable, and what to use instead for everything else.

## What a meta refresh actually is

A meta refresh is a `<meta>` tag placed in the page's `<head>`. It takes a delay in seconds and an optional destination URL:

```html
<meta http-equiv="refresh" content="5; url=https://example.com/new-page/" />
```

With `content="5; url=..."`, the browser waits five seconds, then navigates to the new address. Without the URL part — `content="30"` — the browser simply reloads the current page every 30 seconds, a pattern once common on live scoreboards and dashboards.

It runs entirely in the browser. No server configuration, no access logs entry beyond a normal page view, no status code. That independence is both its appeal and its problem: because it happens client-side, search engine crawlers handle it inconsistently.

## Why SEO professionals dislike meta refresh

<!-- ADSENSE: in-article ad slot -->

Four concrete drawbacks make it a poor default:

- **Weaker ranking transfer.** Google may treat an instant (0-second) meta refresh like a 301 redirect, but it has said so with caveats — and delayed refreshes are treated more like a normal link. You get less certainty than a real server redirect.
- **Sneaky-redirect suspicion.** Spammers historically used delayed refreshes to show search engines one page and users another. Even legitimate use can trigger closer scrutiny.
- **Slow user experience.** A 5-second pause before moving is an eternity online. Visitors on slow connections may stare at a blank or half-loaded page, then get yanked elsewhere.
- **Accessibility damage.** Screen readers and users with cognitive disabilities handle sudden timed redirects poorly — WCAG guidelines explicitly warn against them.

None of this means the tag is evil. It means you should reserve it for situations where nothing better is available.

## When a meta refresh is acceptable

There are real scenarios where a meta refresh is the only tool in the box:

1. **No server access.** Static hosting with no redirect support, a page inside someone else's platform (a forum post, a marketplace listing), or a site where you only control the HTML.
2. **Timed interstitials.** A "thank you, redirecting you in 5 seconds" confirmation page after a purchase or form submission, where the delay is part of the experience.
3. **Auto-reloading dashboards.** Live data displays that refresh every minute to show new information — no redirect involved, just reload.
4. **Temporary holds during migrations.** A short-lived bridge page while DNS or hosting changes propagate, replaced by proper redirects as soon as possible.

The pattern is clear: use meta refresh when it is the only option, or when the delay itself is the feature. For everything else, use a real redirect.

## What to use instead

Match the tool to the job:

- **Moved permanently?** Use a 301 redirect at the server level (`.htaccess`, Nginx config, or your hosting dashboard). It is instant, accessible, and passes full ranking credit.
- **Moved temporarily?** Use a 302 or 307 server redirect.
- **Must redirect client-side?** Use JavaScript `window.location.replace()`, which is instant and does not add a history entry — still inferior to a server redirect, but better than a delayed meta refresh.
- **Need the markup?** Our [meta refresh generator](/tools/meta-refresh-generator/) builds the exact tag with the right delay and URL encoding — free, no sign-up.

<!-- AFFILIATE: managed hosting platforms like Cloudways or SiteGround give you server-level redirect controls so you rarely need client-side fallbacks -->

The meta refresh belongs in your toolkit as a fallback, not a strategy. Reach for the 301 first, the JavaScript redirect second, and the meta refresh only when the other two are out of reach — your visitors and your rankings will both be better for it.

## Frequently asked questions

### What is a meta refresh redirect?
A meta refresh redirect is an HTML meta tag in the page head that reloads the current page or sends the visitor to a new URL after a set number of seconds. It runs entirely in the browser with no server involvement.

### Do meta refresh redirects hurt SEO?
Yes, usually. They are slower and weaker than server redirects, can look like sneaky redirects to search engines, and often fail to pass full ranking credit. Google treats instant (0-second) refreshes most like real redirects, but with less certainty.

### When is a meta refresh acceptable?
When you have no server access — static hosting without redirect support, a page hosted on someone else's platform, or a timed interstitial like a "you will be redirected in 5 seconds" notice. Also fine for auto-reloading live dashboards.

### What should I use instead of meta refresh?
A 301 permanent redirect at the server level for moved pages, an HTTP refresh header or JavaScript location.replace() when you must redirect client-side, and our free generator when the markup is genuinely the only option.
