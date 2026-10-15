---
title: "How to Compress a Video for Email (Under 25MB Attachments)"
description: "Compress a video for email so it fits under the 25MB attachment limit. Exact provider limits, quality-safe settings, and a free in-browser tool."
date: 2026-10-15
tags: ["video", "compression", "email"]
draft: false
image: /images/how-to-compress-a-video-for-email-under-25mb-attachments.svg
slug: how-to-compress-a-video-for-email-under-25mb-attachments
faq:
  - q: "What is the maximum video size for email attachments?"
    a: "Most providers cap the entire message at 20–25 MB: Gmail and Yahoo allow 25 MB, Outlook.com and iCloud Mail allow around 20 MB. Because attachments are encoded, aim for video files of 18–20 MB or less to stay safely under a 25 MB cap."
  - q: "How do I compress a video to under 25MB for email?"
    a: "Check the file size, open a browser-based compressor, pick an email preset (720p at a few Mbps), preview the result, and download it. Our free tool at /tools/compress-video-for-email/ does this entirely on your device with no upload or sign-up."
  - q: "Will compressing a video for email ruin the quality?"
    a: "Not if you use sensible settings. At 720p and 2–4 Mbps, a clip looks crisp on the phones and laptops where email attachments are watched. Quality only visibly suffers when you push the bitrate far below what the resolution needs."
  - q: "Can I email a video larger than 25MB?"
    a: "Not as a direct attachment. Upload the original to cloud storage and paste the share link into your email instead — most providers even offer this automatically when a file is too large."
---

Sending a video by email should be simple: attach, send, done. Instead you get the dreaded "attachment too large" error. The problem is rarely your video — it is the math. Almost every email provider limits a whole message to 20–25 MB, while a single minute of phone footage can weigh 100 MB or more.

The good news: a short compression pass can shrink most clips to a tenth of their size while keeping them perfectly watchable on the small screens where email attachments get watched. This guide covers the exact attachment limits per provider, why videos balloon past them, a five-step workflow to get any clip under 25 MB, and the quality-safe settings to use.

## Email attachment size limits by provider

These limits apply to the entire message — body text, images, and all attachments combined — not just one file:

| Provider | Max message size |
|---|---|
| Gmail / Google Workspace | 25 MB |
| Yahoo Mail | 25 MB |
| Outlook.com | 20 MB |
| Microsoft 365 | 25 MB |
| iCloud Mail | 20 MB |
| AOL Mail | 25 MB |
| ProtonMail | 25 MB |

One catch: attachments are Base64-encoded for transport, which inflates them by roughly a third. A 19 MB video file becomes about a 25 MB message. So on a 25 MB cap, target video files of **18–20 MB or less**, and on a 20 MB cap, stay under about 15 MB. Sending a file that is exactly 24.9 MB will still bounce.

## Why videos blow past 25 MB so fast

Video file size comes down to one formula: **bitrate × duration**. Your phone records far more data per second than email can carry:

| Recording setting | Typical bitrate | Size per minute |
|---|---|---|
| 4K at 30fps | 40–60 Mbps | 300–450 MB |
| 1080p at 30fps | 10–17 Mbps | 75–130 MB |
| 720p at 30fps | 5–8 Mbps | 38–60 MB |
| Slow motion 1080p | 20+ Mbps | 150+ MB |

A three-minute 1080p clip can reach 300 MB — twelve times the Gmail limit. The fix is re-encoding at a lower bitrate, which discards detail your eyes will not miss on a small screen.

<!-- ADSENSE: in-article ad slot -->

## How to compress a video for email in 5 steps

1. **Check the original size and length.** On Windows, right-click the file and choose Properties; on Mac, select it and press Command+I. Note the size in MB and the duration — both decide how aggressive the compression needs to be.
2. **Open a browser-based compressor.** Uploading a personal video to a random server just to shrink it is unnecessary. Our free [compress video for email tool](/tools/compress-video-for-email/) runs entirely in your browser — no upload, no sign-up, no watermark.
3. **Pick an email-safe target.** Choose a preset aimed at 720p with a total file size under 20 MB. The tool balances resolution against bitrate automatically, so you do not have to guess numbers.
4. **Preview before you download.** Watch ten seconds of the compressed result, especially any part with motion or small text. If faces look blocky or text is unreadable, nudge the quality one step up and re-run — it takes seconds.
5. **Attach and send.** If your provider still rejects it, check the total message size: earlier attachments in the same thread, plus the encoding overhead, may be pushing you over. When in doubt, start a fresh email with only the video.

## The best settings for email video

If your tool exposes manual settings, these values keep almost any short clip under the limit:

| Video length | Suggested setting to stay under 25 MB |
|---|---|
| Up to 30 seconds | 720p at ~6 Mbps |
| Up to 1 minute | 720p at ~3 Mbps |
| Up to 2 minutes | 720p at ~1.5 Mbps |
| 3 minutes or more | 480p at ~1 Mbps, or trim first |

A few rules behind the numbers:

- **720p is the sweet spot.** On phones and laptop screens — where email attachments are watched — 720p is visually indistinguishable from 1080p, at roughly half the file size.
- **Use H.264.** It plays on every device made in the last fifteen years. H.265 makes smaller files but can refuse to play on older laptops and some email preview players.
- **Keep the frame rate.** Do not downsample 30fps to 24fps to save space; it makes motion look choppy while saving almost nothing.
- **Compress the audio too.** Voice and background sound are fine at 96–128 kbps AAC. Uncompressed or high-bitrate audio quietly adds megabytes.

## When compression alone is not enough

Sometimes the math refuses — a ten-minute 4K recording will not become a 20 MB file. Then:

- **Trim first, compress second.** Cutting dead air, long intros, and the "okay, is it recording?" opening shrinks a file more gracefully than any codec. Trimming beats compressing every time.
- **Send a cloud link instead.** Upload the full-quality original to Google Drive, Dropbox, or iCloud and paste the share link into your email. Most providers suggest this automatically when a file is too large.
- **Split long videos into parts.** Two 15 MB attachments in two emails beat one rejected 30 MB message.
- **Do not bother zipping it.** ZIP is excellent for documents, but H.264 video is already compressed — zipping typically saves 1–2%, which never bridges the gap.

## 5 mistakes that keep videos over the limit

1. **Exporting at 4K "just in case."** Nobody watches an email attachment on a cinema screen. Export at the resolution people will actually view — 720p.
2. **Using H.265 for compatibility.** Smaller files mean nothing if the recipient's five-year-old laptop shows a black rectangle. H.264 for email, always.
3. **Forgetting the audio track.** A video with uncompressed WAV audio can carry 10 MB of sound alone. AAC at 128 kbps is plenty for voice.
4. **Attaching the original and the compressed copy.** It doubles the message size and confuses the recipient about which to open. Send one file.
5. **Ignoring the encoding overhead.** A file that is exactly 24.9 MB still fails a 25 MB cap after Base64 encoding. Leave a few megabytes of headroom.

<!-- AFFILIATE: if you edit and email videos often, consumer editors such as Adobe Premiere Elements or CyberLink PowerDirector include one-click export presets tuned for email and messaging apps -->

## Frequently asked questions

### What is the maximum video size for email attachments?
Most providers cap the entire message at 20–25 MB: Gmail and Yahoo allow 25 MB, Outlook.com and iCloud Mail allow around 20 MB. Because attachments are encoded, aim for video files of 18–20 MB or less to stay safely under a 25 MB cap.

### How do I compress a video to under 25MB for email?
Check the file size, open a browser-based compressor, pick an email preset (720p at a few Mbps), preview the result, and download it. Our free [compress video for email tool](/tools/compress-video-for-email/) does this entirely on your device with no upload or sign-up.

### Will compressing a video for email ruin the quality?
Not if you use sensible settings. At 720p and 2–4 Mbps, a clip looks crisp on the phones and laptops where email attachments are watched. Quality only visibly suffers when you push the bitrate far below what the resolution needs.

### Can I email a video larger than 25MB?
Not as a direct attachment. Upload the original to cloud storage and paste the share link into your email instead — most providers even offer this automatically when a file is too large.
