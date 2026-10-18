---
title: "What Is a PWA Manifest? How to Generate One Free"
description: "Learn what a PWA web app manifest is, which fields matter for SEO and installs, and how to generate a valid manifest.json free in under 5 minutes."
date: 2026-10-18
draft: false
tags: ["pwa", "web-app-manifest", "seo", "json"]
categories: ["seo"]
image: /images/what-is-a-pwa-manifest-how-to-generate-one-free.svg
slug: what-is-a-pwa-manifest-how-to-generate-one-free
faq:
  - question: "What is a PWA manifest?"
    answer: "A PWA manifest is a JSON file (usually manifest.json or manifest.webmanifest) that tells the browser your website's name, icons, theme colors, and how it should behave when installed as an app. It is one of the three core requirements of a Progressive Web App, alongside HTTPS and a service worker."
  - question: "Is a web app manifest required for SEO?"
    answer: "Not directly — Google does not rank you higher for having one. But it improves engagement signals: installed PWAs load faster, send push notifications, and bring users back. Those repeat visits and lower bounce behavior indirectly support SEO."
  - question: "Where do I put the manifest file?"
    answer: "Save it as manifest.webmanifest in your site root and link it in the <head> of every page with <link rel=\"manifest\" href=\"/manifest.webmanifest\">. Browsers and Google's installability checks will find it from there."
  - question: "What icon sizes does a PWA manifest need?"
    answer: "At minimum, a 192x192 and a 512x512 PNG icon. For full installability across modern browsers, also include a maskable icon (usually 512x512 with purpose: \"maskable\" or \"any maskable\"). Chrome requires the 512px icon for the install prompt."
---

A Progressive Web App feels like magic the first time you try it: you tap "Install" on a website and it lands on your home screen like a native app — offline support, push notifications, full-screen launch, no app store involved. The quiet little file that makes all of that possible is the **web app manifest**. Let's demystify it, walk through every field that matters, and generate a valid one for your site in under five minutes — free.

## What exactly is a PWA manifest?

The manifest is a simple JSON file — typically named `manifest.json` or `manifest.webmanifest` — sitting in your website's root directory. When a browser loads your site, it reads this file to learn the "app identity" of your pages: the name to show under the home-screen icon, the icon itself, the color of the splash screen, and how the app should open (full-screen, standalone window, or plain browser tab).

Think of it as your website's ID card for the operating system. Without it, the browser has no idea what to call your app, what icon to display, or whether your site is even installable. With it, your site crosses the line from "page" to "app."

A manifest alone doesn't make a PWA, though. Google's installability checklist requires three things:

1. **A valid web app manifest** with at least a `name`, `short_name`, `start_url`, `display`, and icons (192px + 512px).
2. **HTTPS** (or localhost for development).
3. **A registered service worker** with a fetch handler.

Get all three and Chrome, Edge, and most Chromium browsers will offer the install prompt. Safari on iOS reads the manifest too these days, though it still leans on `apple-touch-icon` meta tags for icons.

## The fields that actually matter

The spec lists over twenty fields, but most are optional. Here are the ones you'll actually use:

- **`name`** — the full app name shown on the splash screen and in app listings. Keep it descriptive: "DollarWise — Free Financial Tools."
- **`short_name`** — the name under the home-screen icon. Space is tight; 12 characters or fewer is safest.
- **`start_url`** — where the app opens, typically `"/"`. Add a query parameter like `"/?utm_source=pwa"` if you want to track installs in analytics.
- **`display`** — how the app renders. Use `"standalone"` for the true app feel (no browser chrome). `"fullscreen"` works for games and media; `"minimal-ui"` keeps a small address bar; `"browser"` is just a normal tab.
- **`background_color`** — the splash screen color while the app loads.
- **`theme_color`** — colors the browser toolbar on Android. Match it to your brand.
- **`icons`** — an array of PNG icons at 192x192 and 512x512 minimum. Add `"purpose": "maskable"` on a 512px version so Android can crop it into circles and squircles without cutting off your logo.
- **`scope`** — which URLs belong to the app (usually `"/"`).
- **`description`** — a short summary; some app stores use it when listing your PWA.

A common mistake: pointing `icons` at `.ico` or `.svg` files. Browsers require **PNG** for installability — SVG icons are fine as an extra, but the required entries must be PNG with correct `sizes` strings.

<!-- ADSENSE: in-article ad slot -->

## How to generate a PWA manifest free in 5 minutes

You can hand-write the JSON, but getting every icon size, purpose flag, and color exactly right is fiddly. The faster route is a generator that walks you through it.

<!-- AFFILIATE: a natural spot to recommend an icon-export or design tool for generating the 192px/512px PNG icon set -->

1. **Prepare your icons.** Export your logo as PNG at 192x192 and 512x512. If you only have one large logo, most generators can resize it — just make sure the logo sits comfortably inside the safe zone (about 80% of the canvas) so maskable cropping doesn't clip it.
2. **Open a free PWA manifest generator** — ours runs entirely in your browser, so nothing uploads to any server: [PWA Manifest Generator](/tools/pwa-manifest-generator/). Fill in the app name, short name, theme and background colors, and start URL.
3. **Upload your icons** and set the `display` mode to `standalone`. The tool previews how your splash screen and home-screen icon will look, then emits the complete `manifest.webmanifest` file.
4. **Place the file in your site root** and add this line inside the `<head>` of every page:
   `<link rel="manifest" href="/manifest.webmanifest">`
   Also add `<meta name="theme-color" content="#YOURCOLOR">` so the address bar matches.
5. **Validate it.** In Chrome, open DevTools → Application → Manifest. It flags missing icons, bad sizes, or syntax errors instantly. Then run Lighthouse's PWA audit for a final green check.

That's it. Most sites can go from zero to installable in one sitting.

## Does a manifest help SEO?

Strictly speaking, a manifest is not a ranking factor — Google has never listed it among the signals it scores. But it earns its keep through second-order effects that SEOs care about deeply:

- **Repeat engagement.** Installed apps get opened far more often than bookmarks. Push notifications (enabled by the service worker side of the PWA equation) bring users back without paid acquisition.
- **Speed.** The service worker caches your shell, so repeat visits feel instant. Faster perceived performance correlates with lower bounce rates and longer sessions.
- **Trust signals in search.** Google increasingly highlights installable experiences; an installable PWA can earn a richer presence in some discovery surfaces.
- **One codebase, two surfaces.** A PWA gives you app-like distribution without maintaining a separate native app — every improvement ships to both web search visitors and installed users at once.

In short: the manifest won't push you from position 8 to position 3 by itself. But a fast, installable, re-engaging site is exactly the kind of site that earns the links, shares, and returning visitors that *do* move rankings.

## Troubleshooting: why your install prompt isn't showing

If Chrome won't offer installation, run through this checklist in order — one of these is almost always the culprit:

- **Manifest 404.** The `<link rel="manifest">` href must resolve. Check the Network tab.
- **Invalid JSON.** One trailing comma kills the whole file. Paste it into any JSON validator.
- **Missing 512px icon.** Chrome requires at least one icon at 512x512 or larger.
- **No service worker.** The manifest is half the equation; register a service worker with a fetch event handler, even a trivial one.
- **HTTP instead of HTTPS.** Installability requires a secure context (localhost excepted).
- **start_url outside scope.** If `start_url` is `/app/` but `scope` is `/`, adjust one of them.

Fix these, re-run the Lighthouse PWA audit, and the install prompt should appear.

## Frequently asked questions

**What is a PWA manifest?**
A PWA manifest is a JSON file (usually manifest.json or manifest.webmanifest) that tells the browser your website's name, icons, theme colors, and how it should behave when installed as an app. It is one of the three core requirements of a Progressive Web App, alongside HTTPS and a service worker.

**Is a web app manifest required for SEO?**
Not directly — Google does not rank you higher for having one. But it improves engagement signals: installed PWAs load faster, send push notifications, and bring users back. Those repeat visits and lower bounce behavior indirectly support SEO.

**Where do I put the manifest file?**
Save it as manifest.webmanifest in your site root and link it in the `<head>` of every page with `<link rel="manifest" href="/manifest.webmanifest">`. Browsers and Google's installability checks will find it from there.

**What icon sizes does a PWA manifest need?**
At minimum, a 192x192 and a 512x512 PNG icon. For full installability across modern browsers, also include a maskable icon (usually 512x512 with purpose: "maskable" or "any maskable"). Chrome requires the 512px icon for the install prompt.
