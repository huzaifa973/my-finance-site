---
title: "What Is an ads.txt File? How to Create and Validate Yours"
description: "An ads.txt file proves which ad networks may sell your inventory and stops domain spoofing. Learn the format, how to create one, and how to validate it."
date: 2026-10-19
draft: false
tags: ["ads.txt", "adsense", "monetization", "seo"]
categories: ["seo"]
image: /images/what-is-ads-txt-file-create-validate.svg
slug: what-is-ads-txt-file-create-validate
faq:
  - q: "What is an ads.txt file?"
    a: "ads.txt (Authorized Digital Sellers) is a plain-text file at your domain root listing the ad networks authorized to sell your ad inventory. It fights ad fraud and domain spoofing."
  - q: "Where do I put the ads.txt file?"
    a: "At the root of your domain, served over HTTPS — for example https://yoursite.com/ads.txt. Crawlers look there and only there."
  - q: "Is ads.txt required for Google AdSense?"
    a: "Not strictly required, but Google strongly recommends it, and AdSense shows a warning in your account when it is missing or wrong. It takes minutes to fix."
  - q: "How do I check that my ads.txt is valid?"
    a: "Open the URL directly and inspect each line, or use a free validator. Our free ads.txt validator checks formatting, relationship types, and common mistakes automatically."
---

If you run ads on your site — Google AdSense, for example — there is a tiny text file sitting (or missing) at your domain root that quietly protects your ad revenue: `ads.txt`. It takes five minutes to set up, costs nothing, and Google's AdSense dashboard will nag you until you do it. This guide explains what ads.txt is, the exact format, how to create yours, and how to validate it.

## What ads.txt is

**ads.txt** stands for **Authorized Digital Sellers**. It is a plain-text file, published at the root of your domain, that lists every company authorized to sell your digital ad inventory.

The problem it solves is **domain spoofing**: fraudsters trick ad buyers into thinking their impressions come from premium sites like yours, siphoning off advertiser money and damaging your domain's reputation. With ads.txt in place, buyers can check the seller list and refuse inventory from anyone not on it. It was created by the IAB Tech Lab and is now a standard expectation for any site running programmatic ads.

## The exact format

Each line of ads.txt declares one authorized seller with up to four comma-separated fields:

```
<ad system domain>, <publisher account ID>, <relationship>, <certification authority ID>
```

- **Field 1 — ad system domain:** the canonical domain of the ad network, e.g. `google.com`.
- **Field 2 — publisher account ID:** your account ID with that network, e.g. `pub-8574339224228858`.
- **Field 3 — relationship:** `DIRECT` if you have a direct contract with the network, `RESELLER` if an intermediary sells your inventory.
- **Field 4 — certification authority ID (optional but recommended):** the TAG-ID of the network, e.g. `f08c47fec0942fa0` for Google.

A real-world AdSense entry looks like this:

```
google.com, pub-8574339224228858, DIRECT, f08c47fec0942fa0
```

Comment lines start with `#`. A common header is:

```
# ads.txt for https://yoursite.com
google.com, pub-8574339224228858, DIRECT, f08c47fec0942fa0
```

You can add lines for every network you work with — Mediavine, Raptive, Ezoic, Amazon — each gets its own line with the account ID they give you. Only list networks you actually use: stray lines from old partners can cause "unauthorized seller" warnings.

<!-- ADSENSE: in-article ad slot -->

## How to create your ads.txt (step by step)

1. **Gather your seller lines.** Copy the exact line each ad network provides in its onboarding docs or dashboard. Do not guess the account ID — it must match your account exactly.
2. **Create a file named `ads.txt`.** Plain text, UTF-8, one seller per line. A leading `#` comment with your domain is good practice.
3. **Upload it to your domain root.** For static sites, drop it in the publish/static folder so it deploys to `https://yoursite.com/ads.txt`. For WordPress, upload via FTP/SFTP to the web root, or use an ads.txt plugin (but check it serves the file at the root URL, not a redirect).
4. **Confirm it loads.** Visit `https://yoursite.com/ads.txt` in a browser — you should see your lines as plain text with a 200 status.
5. **Check AdSense.** Google's AdSense dashboard checks your ads.txt within about 24 hours. The "Earnings at risk" warning clears once it verifies your entry.

**Important placement notes:** the file must be served at the root domain (subdomains need their own), over HTTPS, with `Content-Type: text/plain`, and must not be behind a login, a bot block, or a redirect chain. Ad crawlers are strict about this — a file that only loads for browsers in the US but blocks bots will still trigger warnings.

## Common mistakes (and fixes)

- **Wrong publisher ID.** One mistyped digit invalidates the whole line. Copy-paste from your ad network dashboard.
- **DIRECT vs RESELLER mixed up.** If you signed up with AdSense yourself, you are DIRECT. If a partner like Mediavine manages your inventory, their line is usually DIRECT and your own entries may be RESELLER — follow each network's instructions.
- **File in the wrong place.** `yoursite.com/blog/ads.txt` does nothing. It must be `yoursite.com/ads.txt`.
- **Redirects.** Crawlers follow one redirect, but chains or redirect-to-homepage setups break verification. Keep the URL clean.
- **Stale entries.** Remove lines for networks you no longer use, and add lines immediately when you join a new one — a missing line can pause that network's bidding on your site.

Our free [ads.txt validator](/tools/ads-txt-validator/) checks all of this automatically: paste your ads.txt content or URL and it flags malformed lines, wrong relationship values, and common placement errors.

## app-ads.txt: the mobile sibling

If you publish mobile apps with ads, there is a parallel standard called **app-ads.txt**, served from your developer website's root and referenced in your app store listings. Same format, same purpose, one file per developer domain. Set both if you run a site and an app.

<!-- AFFILIATE: publishers scaling past AdSense often compare managed ad partners and hosting setups that support clean ads.txt deployment -->

## Frequently asked questions

### What is an ads.txt file?

ads.txt (Authorized Digital Sellers) is a plain-text file at your domain root listing the ad networks authorized to sell your ad inventory. It fights ad fraud and domain spoofing.

### Where do I put the ads.txt file?

At the root of your domain, served over HTTPS — for example https://yoursite.com/ads.txt. Crawlers look there and only there.

### Is ads.txt required for Google AdSense?

Not strictly required, but Google strongly recommends it, and AdSense shows a warning in your account when it is missing or wrong. It takes minutes to fix.

### How do I check that my ads.txt is valid?

Open the URL directly and inspect each line, or use a free validator. Our free ads.txt validator checks formatting, relationship types, and common mistakes automatically.
