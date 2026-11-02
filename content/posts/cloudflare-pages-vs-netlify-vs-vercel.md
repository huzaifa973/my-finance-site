---
title: "Cloudflare Pages vs Netlify vs Vercel: Which Free Hosting Is Best in 2026?"
description: "Cloudflare Pages vs Netlify vs Vercel compared in 2026: free bandwidth, build minutes, functions, custom domains, SSL, analytics, edge locations. Which wins?"
date: 2026-11-02
tags: ["web-hosting", "cloudflare", "netlify", "vercel", "static-sites"]
categories: ["web-hosting"]
draft: false
slug: cloudflare-pages-vs-netlify-vs-vercel
post_type: resource
faq:
  - q: "Which free hosting is best for a Hugo static site?"
    a: "Cloudflare Pages. It offers unlimited bandwidth, 500 free builds per month, automatic HTTPS, unlimited custom domains, and a global edge network of 300+ locations — all completely free. Hugo builds in seconds and Cloudflare's network makes the site load fast everywhere with zero configuration."
  - q: "Is Netlify still free and good in 2026?"
    a: "Yes. Netlify's free tier includes 100GB bandwidth per month, 300 build minutes, serverless functions, form handling, and instant rollbacks. It is the best choice if you need built-in forms, identity, or split testing without external services."
  - q: "Why do Next.js developers prefer Vercel?"
    a: "Vercel created Next.js and deploys it with zero configuration, including server-side rendering, incremental static regeneration, edge middleware, and image optimization. Features that require workarounds on other hosts just work on Vercel, and the free tier is generous for hobby projects."
  - q: "Can I switch hosts later without downtime?"
    a: "Yes. All three connect to the same Git repository, so you can deploy to a new host, test on a preview URL, then point your DNS to the new provider. Switching takes minutes and causes no downtime if you plan the DNS cutover carefully."
---
Free static site hosting has become so good that paying for basic hosting is almost unnecessary for blogs, portfolios, documentation, and even small SaaS landing pages. Cloudflare Pages, Netlify, and Vercel are the three dominant players, and each gives you HTTPS, continuous deployment from Git, and a global CDN at no cost. But their free tiers differ sharply in bandwidth limits, serverless functions, build minutes, and which frameworks they support best. This comparison breaks down exactly what you get for free on each, so you can pick the right one for your project instead of migrating six months later.

## The three platforms at a glance
<ol class="res-list">
<li><span class="res-text">Cloudflare Pages — best for static sites, unlimited bandwidth</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Netlify — best for forms, functions, and developer workflow</span><button class="copy-btn" type="button">Copy</button></li>
<li><span class="res-text">Vercel — best for Next.js and modern React frameworks</span><button class="copy-btn" type="button">Copy</button></li>
</ol>

## Free tier comparison table

| Feature | Cloudflare Pages (Free) | Netlify (Free) | Vercel (Hobby) |
| --- | --- | --- | --- |
| Bandwidth | Unlimited | 100 GB / month | 100 GB / month |
| Build minutes | 500 / month | 300 / month | 6,000 / month |
| Serverless functions | Pages Functions (100k requests/day free) | 125k requests / month, 100 hours | Edge & Serverless (100GB-hours / month) |
| Custom domains | Unlimited, free SSL | 1 custom domain, free SSL | Unlimited, free SSL |
| SSL certificate | Automatic, free, always-on | Automatic, free Let's Encrypt | Automatic, free Let's Encrypt |
| Analytics | Cloudflare Web Analytics (free, privacy-first) | Netlify Analytics (paid add-on) | Vercel Analytics (limited free) |
| Edge locations | 300+ cities worldwide | 12+ PoPs (global CDN) | 18 regions (edge network) |
| Form handling | No built-in (use third party) | 100 form submissions / month built-in | No built-in (use third party) |
| Best for | Hugo, Eleventy, pure static, high traffic | Sites needing forms, identity, split tests | Next.js, React, SSR, modern frameworks |
| Paid plan starts at | $20 / month (Pro) | $19 / month (Pro) | $20 / month (Pro) |

<!-- ADSENSE: in-article ad slot -->

## Overview of each platform

### Cloudflare Pages
Cloudflare Pages is part of Cloudflare's broader network, which means your site sits behind the same CDN that protects and accelerates millions of websites. The free tier is the most generous on bandwidth — truly unlimited — and includes 500 builds per month, unlimited custom domains, and Cloudflare's free privacy-first analytics. Pages Functions let you run serverless code at the edge using Cloudflare Workers, with 100,000 free requests per day. The tradeoff is fewer built-in conveniences: no native form handling, and the developer experience is slightly less polished than Netlify or Vercel. For content sites that just need to be fast and cheap forever, it is unbeatable.

### Netlify
Netlify pioneered the Git-based static hosting workflow and still has the best developer experience for teams. Its free tier includes 100GB bandwidth, 300 build minutes, 125,000 serverless function requests, and — uniquely — built-in form handling that captures submissions without any backend code, plus identity management and split testing. Netlify's instant rollbacks, deploy previews, and plugin ecosystem make it a favorite for agencies and teams. The bandwidth cap of 100GB per month is the main limitation; a viral post on a media-heavy site can exceed it, at which point Netlify will ask you to upgrade.

### Vercel
Vercel is the company behind Next.js, and it shows. Deploying a Next.js app on Vercel takes zero configuration — server-side rendering, incremental static regeneration, edge middleware, API routes, and image optimization all work out of the box. The Hobby plan gives 100GB bandwidth and a generous 6,000 build minutes per month, plus both edge and serverless functions. Vercel's analytics and speed insights are excellent. The catch: it is optimized for JavaScript frameworks. If you are running a plain static site or Hugo, you are paying (in complexity, not money) for features you will never use. Vercel also enforces fair-use limits on the Hobby plan and prohibits commercial use beyond a certain threshold.

## Pricing: what happens when you outgrow free
All three paid Pro plans start around $19 to $20 per month, but what you get differs. Cloudflare Pages Pro raises build minutes to 5,000 and adds more function invocations. Netlify Pro raises bandwidth to 1TB and build minutes to 25,000. Vercel Pro raises bandwidth to 1TB and removes the commercial-use restriction. If your site grows large, the bandwidth overage fees are where costs can spike — Vercel and Netlify both charge around $40 per additional 100GB, while Cloudflare includes unlimited bandwidth even on free. For high-traffic content sites, that difference alone can save hundreds of dollars per year.

## Performance and speed
All three serve your site from a global edge network, so actual load times are similar for static assets — under 200ms in most regions. Cloudflare has the most edge locations (300+), which helps in less-connected regions like South Asia, Africa, and South America. Vercel's edge network is smaller but tightly integrated with its framework features, so dynamic content renders faster there. Netlify sits in the middle. For a static blog, the performance gap is negligible; pick based on features, not speed.

## Ease of use and developer experience
Netlify and Vercel edge out Cloudflare Pages on polish. Both offer one-click deploys from GitHub, GitLab, and Bitbucket, instant preview URLs for every pull request, and simple environment variable management. Cloudflare Pages has caught up significantly and now offers the same core workflow, but its dashboard is spread across the broader Cloudflare control panel, which can feel overwhelming for beginners. If you are new to static hosting, Netlify has the gentlest learning curve.

## Frameworks supported
All three support every major static site generator: Hugo, Eleventy, Jekyll, Gatsby, Astro, SvelteKit, Nuxt, and more. The difference is in first-class support. Vercel treats Next.js as a first-class citizen — new Next.js features land on Vercel first and require zero config. Netlify has excellent framework adapters and a plugin ecosystem. Cloudflare Pages supports all frameworks but sometimes requires minor build configuration tweaks for newer ones. If you use Next.js, the choice is essentially made for you: Vercel. If you use Hugo or another pure static generator, all three work equally well.

<!-- AFFILIATE: affiliate product link slot -->

## Recommendation by use case
- **Hugo, Eleventy, or any pure static site / blog:** Choose Cloudflare Pages. Unlimited bandwidth, free analytics, unlimited custom domains, and blazing speed on the world's largest edge network — at zero cost forever.
- **Next.js, React, or SSR-heavy apps:** Choose Vercel. It is built by the Next.js team, and every framework feature works without configuration. The Hobby plan is generous enough for most side projects.
- **Sites needing forms, serverless functions, or team workflow:** Choose Netlify. Built-in form handling, identity, split testing, and the best deploy-preview workflow make it the most productive choice for marketing sites and small teams.
- **High-traffic content sites on a budget:** Choose Cloudflare Pages. Its unlimited bandwidth means you will never get an overage bill when a post goes viral.
- **Beginner wanting the simplest setup:** Choose Netlify. The signup-to-deploy flow is the shortest and most intuitive of the three.

## Frequently asked questions

**Are these free hosts really free forever?**
Yes, for sites within the free tier limits. None of the three requires a credit card to start, and none will charge you automatically. If you exceed limits, they will notify you and ask you to upgrade rather than silently billing. Your site stays live unless you ignore repeated notices or violate terms of service.

**Can I use my own domain name on the free tier?**
Yes. All three let you connect a custom domain and issue a free SSL certificate automatically. Cloudflare Pages and Vercel allow unlimited custom domains on free; Netlify's free tier limits you to one custom domain (plus their free subdomain).

**Do I need to know git to use these hosts?**
Not strictly. All three support drag-and-drop upload of a static site folder, which works without git. But the recommended workflow — connecting a GitHub repository so every push auto-deploys — requires basic git knowledge, which is worth learning and takes about an hour.

**Which one should I use for a client project?**
For client work, Netlify or Vercel Pro plans are usually worth paying for because they include team collaboration, password-protected preview deploys, and better support. Cloudflare Pages is excellent but its dashboard and access controls are less tailored for agency client handoffs.

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
