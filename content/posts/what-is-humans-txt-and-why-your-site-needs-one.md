---
title: "What Is humans.txt and Why Your Site Needs One"
description: "humans.txt is a simple text file that credits the people behind your website. Learn the format, where to put it, and how it boosts trust and E-E-A-T."
date: 2026-10-18
draft: false
tags: ["humans-txt", "web-standards", "seo", "e-e-a-t"]
categories: ["seo"]
image: /images/what-is-humans-txt-and-why-your-site-needs-one.svg
slug: what-is-humans-txt-and-why-your-site-needs-one
faq:
  - question: "What is humans.txt?"
    answer: "humans.txt is a plain text file placed at your site's root (e.g. example.com/humans.txt) that credits the people who built the website — developers, designers, writers — along with a thank-you section and site details. It was proposed in 2011 as a companion to robots.txt, but for humans instead of crawlers."
  - question: "Does humans.txt help SEO?"
    answer: "It is not a ranking factor, but it supports E-E-A-T by making the real humans behind a site discoverable. In an era of AI-generated content, a public credits file is a small, honest trust signal that differentiates human-run sites."
  - question: "Where does humans.txt go?"
    answer: "In the root of your website: https://yoursite.com/humans.txt. Optionally add a <link type=\"text/plain\" rel=\"author\" href=\"/humans.txt\"> tag in your HTML head so it is discoverable from any page."
  - question: "What should a humans.txt file contain?"
    answer: "Three standard sections: TEAM (names, roles, contact, location), THANKS (tools, frameworks, and people you want to credit), and SITE (last update, standards, software, components). Keep personal details minimal — a role and a website link are enough."
---

Every website has a `robots.txt` whispering instructions to search engine crawlers. Far fewer have its friendly counterpart: a `humans.txt` that talks to actual people. It's a tiny text file that says, "Real humans built this." In an internet increasingly flooded with faceless AI-generated pages, that small gesture carries surprising weight — for trust, for transparency, and quietly, for SEO.

## The idea behind humans.txt

The concept was proposed back in 2011 by the team at humanstxt.org as a playful mirror of `robots.txt`. The pitch: robots.txt is for machines; why shouldn't there be an equivalent for people? A `humans.txt` file lives at your domain root — `yoursite.com/humans.txt` — and credits the humans behind the site: who designed it, who wrote the code, who wrote the words, and what tools they used.

It never became an official standard, and browsers don't do anything special with it. But it stuck around as a beloved convention among developers and agencies. Google itself has shipped humans.txt files on several of its properties over the years, which tells you how seriously the web community takes this small tradition.

## What goes inside a humans.txt file

The convention uses three main sections, each marked with a banner-style header:

**TEAM** — the people who built the site. Name, role, and a way to reach them or see their work. A line like `Designer: Jane Doe — janedoe.design` is plenty.

**THANKS** — shout-outs to the tools, frameworks, libraries, and people that made the site possible. This is where you credit your CMS, your hosting, the icon set you used, the friend who reviewed your copy.

**SITE** — metadata about the site itself: last update date, language, the standards it follows (HTML5, CSS3), the software stack, and sometimes a note about the build.

Here's a minimal example:

```
/* TEAM */
  Developer: Huzaifa Suleman
  Site: https://dollarwise.xyz
  Location: Pakistan

/* THANKS */
  Hugo (static site generator)
  Cloudflare Pages (hosting)

/* SITE */
  Last update: 2026/10/18
  Standards: HTML5, CSS3
  Components: Vanilla JS, no tracking scripts
```

That's the whole thing. No build step, no dependencies, no maintenance burden — update it when the team changes.

## Why bother? Four real benefits

**1. It humanizes your brand.** Visitors who stumble on your humans.txt find names, roles, and personalities instead of a corporate wall. For freelancers and small teams, it's a portfolio piece hiding in plain sight.

**2. It's an E-E-A-T supporting signal.** Google's quality guidelines emphasize Experience, Expertise, Authoritativeness, and Trust — especially for sites giving advice. A public credits file won't outrank anyone by itself, but it's one more honest breadcrumb showing real, accountable humans stand behind the content. In the age of AI spam, verifiable humanness is becoming a differentiator.

**3. It attracts the right kind of attention.** Recruiters, potential clients, and fellow developers all read humans.txt files. A well-kept one has landed people job offers and freelance gigs.

**4. It's a culture statement.** Crediting your tools and collaborators costs nothing and says everything about how you work.

<!-- ADSENSE: in-article ad slot -->

## How to create and publish your humans.txt

Creating one takes about ten minutes:

1. **Draft the content.** List your team members (even if the team is just you), the tools you relied on, and basic site metadata. Keep personal details light — a name, role, and portfolio link beats a phone number.
2. **Use a generator to get the format right.** Our [free humans.txt generator](/tools/humans-txt-generator/) produces the standard TEAM / THANKS / SITE structure with correct banner headers — just fill in the fields and download the file. It runs entirely in your browser, so nothing is uploaded anywhere.
3. **Upload it to your site root.** The file must be served at `https://yoursite.com/humans.txt` — not in a subfolder. In Hugo, drop it in your `static/` folder; in WordPress, upload via FTP or your file manager.
4. **Link it from your pages (optional but recommended).** Add this to your HTML head so it's discoverable without guessing the URL:
   `<link type="text/plain" rel="author" href="/humans.txt" />`
5. **Verify it.** Visit the URL in a private browser window and confirm it loads as plain text. Done — you're now part of the humans.txt tradition.

<!-- AFFILIATE: a natural spot to recommend a portfolio or personal-site builder for the team members credited in the file -->

## Common mistakes to avoid

- **Publishing personal data.** Never put home addresses, personal phone numbers, or private emails in a public file. A contact form link or professional email is enough.
- **Letting it go stale.** A humans.txt crediting a team that left three years ago is worse than none. Tie updates to your site's release process.
- **Treating it as legal boilerplate.** It's not a privacy policy or terms page. Keep the tone human — it's literally a file for humans.
- **Hiding it.** The file only works if it's at the root and, ideally, linked. A humans.txt buried in `/assets/docs/` might as well not exist.

## humans.txt vs robots.txt vs security.txt

These three root-level files often get confused:

- **robots.txt** — instructions for crawlers (what they may and may not index). Machine-readable, SEO-relevant.
- **humans.txt** — credits for people. Human-readable, trust-relevant.
- **security.txt** (RFC 9116) — contact info for reporting vulnerabilities. Security-relevant.

A mature site runs all three. Together they say: we respect crawlers, we credit people, and we take security seriously. That's a quiet professionalism most sites never bother with — which is exactly why it stands out.

## Frequently asked questions

**What is humans.txt?**
humans.txt is a plain text file placed at your site's root (e.g. example.com/humans.txt) that credits the people who built the website — developers, designers, writers — along with a thank-you section and site details. It was proposed in 2011 as a companion to robots.txt, but for humans instead of crawlers.

**Does humans.txt help SEO?**
It is not a ranking factor, but it supports E-E-A-T by making the real humans behind a site discoverable. In an era of AI-generated content, a public credits file is a small, honest trust signal that differentiates human-run sites.

**Where does humans.txt go?**
In the root of your website: https://yoursite.com/humans.txt. Optionally add a `<link type="text/plain" rel="author" href="/humans.txt">` tag in your HTML head so it is discoverable from any page.

**What should a humans.txt file contain?**
Three standard sections: TEAM (names, roles, contact, location), THANKS (tools, frameworks, and people you want to credit), and SITE (last update, standards, software, components). Keep personal details minimal — a role and a website link are enough.
