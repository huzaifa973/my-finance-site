---
title: "Instagram Video Size Guide 2026: Reels, Stories, Feed Specs"
description: "Instagram video size guide for 2026: exact Reels, Stories, and Feed dimensions, aspect ratios, file sizes, and how to compress videos that are too big."
date: 2026-10-21
draft: false
tags: [instagram, video, reels, specs]
categories: [video]
post_type: article
image: /images/instagram-video-size-guide-2026-reels-stories-feed-specs.svg
slug: instagram-video-size-guide-2026-reels-stories-feed-specs
faq:
  - q: "What is the best video size for Instagram Reels in 2026?"
    a: "1080×1920 pixels (9:16 vertical), MP4 with H.264 video and AAC audio, 30fps. Reels can run up to 3 minutes. Keep the file under 4GB, though under 250MB uploads faster and more reliably."
  - q: "Why does Instagram crop my video?"
    a: "Instagram fits uploads into its fixed slots (9:16 for Reels/Stories, 4:5 or 1:1 for feed). If your video's aspect ratio doesn't match, Instagram crops or letterboxes it. Export at the exact dimensions in this guide to avoid surprises."
  - q: "What is the maximum video file size on Instagram?"
    a: "4GB is the hard cap for uploads, but practical reliability drops well before that. Aim for under 250MB for Reels and Stories; use a compressor when your file exceeds that."
  - q: "How long can an Instagram Story video be?"
    a: "Each Story segment plays up to 60 seconds; longer videos are automatically split into sequential 60-second segments. Stories display at 1080×1920 (9:16)."
---

Posting a video to Instagram shouldn't require a degree in video engineering — but get the dimensions wrong and Instagram will crop your masterpiece into a headless torso. Here are the exact specs for every Instagram video slot in 2026, plus how to fix files that are too big or the wrong shape.

## The Quick Reference

| Slot | Dimensions | Aspect ratio | Max length | File limit |
|---|---|---|---|---|
| Reels | 1080×1920 | 9:16 | 3 minutes | 4GB |
| Stories | 1080×1920 | 9:16 | 60 sec per segment | 4GB |
| Feed (portrait) | 1080×1350 | 4:5 | 60 minutes | 4GB |
| Feed (square) | 1080×1080 | 1:1 | 60 minutes | 4GB |
| Feed (landscape) | 1080×608 | 16:9 | 60 minutes | 4GB |

**Format for everything:** MP4 container, H.264 video codec, AAC audio. Frame rate: 30fps (60fps works but doubles the file size for little visible gain on phones).

<!-- ADSENSE: in-article ad slot -->

## Reels: The 9:16 Vertical Standard

Reels live in a full-screen vertical slot, and **1080×1920** is the resolution Instagram renders at. Uploading 4K doesn't help — Instagram recompresses everything to its own pipeline, so 1080p source files give you the same on-screen quality with far smaller uploads.

Two things beginners miss:

1. **Safe zones.** The bottom ~250 pixels are covered by the caption and like/comment buttons; the top ~150 pixels sit under the Reel UI. Keep faces, subtitles, and key action in the middle 60% of the frame.
2. **Length.** Reels support up to **3 minutes** now. The algorithm still favors completion rate, so a tight 30–60 seconds usually outperforms a rambling 3-minute upload.

## Stories: 1080×1920, 60 Seconds at a Time

Stories use the same 9:16 canvas as Reels. Each story segment caps at **60 seconds** — longer clips are auto-split into back-to-back segments, which usually works fine but can land a cut mid-sentence. For talking-head clips, trim to 55 seconds and the split never triggers.

Design around the UI chrome: profile info and the close button occupy the top edge; the reply/message bar sits at the bottom. Add ~150px of padding top and bottom to anything important.

## Feed Videos: 4:5 Gets the Most Screen

In the feed, **portrait 4:5 (1080×1350)** occupies the most vertical screen space — roughly 30% more than square. More screen space means more attention. Square (1:1) is the safe universal choice if the same video also goes to other platforms; landscape (16:9) is fine for repurposed YouTube content but looks small in a scrolling feed.

Feed videos can run up to **60 minutes**, but that slot is really for long-form creators. The specs that matter most are the format ones: H.264, AAC, 30fps.

## When Your Video Is Too Big

Phone cameras shoot gorgeous, enormous files — a minute of 4K60 can top 400MB, and Instagram chokes or recompresses aggressively. Before uploading:

1. **Resize to 1080 wide** (or 1080×1920 for vertical) — you can't see 4K on a phone anyway.
2. **Use H.264 at a sane bitrate** — 8–12 Mbps for 1080p is plenty for Instagram.
3. **Compress** if the file is still over ~250MB.

The easiest path: [our free Instagram video compressor](/tools/compress-video-for-instagram/) squeezes your file to Instagram-friendly specs right in your browser — no uploads, no watermarks, no accounts. Drop the file in, pick a target size, and download a version that uploads in seconds instead of stalling at 87%.

## Bitrate: The Hidden Quality Lever

Resolution gets all the attention, but **bitrate** decides how your video actually looks after Instagram's recompression. Bitrate is how much data each second of video gets:

| Resolution | Minimum bitrate | Sweet spot |
|---|---|---|
| 1080×1920 (Reels/Stories) | 8 Mbps | 10–12 Mbps |
| 1080×1350 (feed portrait) | 8 Mbps | 10 Mbps |
| 1080×1080 (square) | 6 Mbps | 8 Mbps |

Below the minimum, gradients band and motion smears. Above the sweet spot, you're just making uploads slower — Instagram recompresses to its own targets anyway, and it can't restore quality you didn't give it, but it also won't preserve bitrate you over-supplied. **10 Mbps VBR** (variable bitrate) is the set-and-forget choice for 1080p.

One more codec note: **H.264 High profile** is the compatibility king. H.265/HEVC makes smaller files but Instagram's pipeline handles H.264 most predictably — and every editor on earth exports it.

## The 5 Most Common Instagram Upload Mistakes

1. **Wrong aspect ratio.** A 16:9 landscape video posted as a Reel gets pillarboxed into a tiny strip. Shoot vertical or reframe in your editor.
2. **Text in the danger zones.** Captions and CTAs placed at the very bottom get buried under Instagram's UI. Keep text in the middle 60%.
3. **Uploading 4K "for quality."** Instagram downscales to 1080p regardless — you paid the upload time for zero visible gain.
4. **Forgetting captions.** A huge share of Reels are watched muted. Burned-in or auto-generated captions measurably lift watch time.
5. **Ignoring the cover frame.** The 1:1 thumbnail in your profile grid is cropped from the vertical video — pick a cover frame deliberately or your grid looks chaotic.

## One Video, Three Platforms: Repurposing Smart

The 1080×1920 master you export for Reels also works for **TikTok** and **YouTube Shorts** with zero changes — same 9:16 canvas, same specs. Export once at 10 Mbps H.264, upload everywhere. For the feed, keep a separate 1080×1350 render if you want maximum feed presence; otherwise the square center-crop of your vertical video works in a pinch.

<!-- AFFILIATE: no affiliate links in this post -->

## Export Presets That Just Work

If you're exporting from an editor, these settings nail it first try:

- **Resolution:** 1080×1920 (vertical) or 1080×1350 (feed portrait)
- **Codec:** H.264, High profile
- **Bitrate:** 10 Mbps VBR (video), 128 kbps AAC (audio)
- **Frame rate:** 30fps
- **Format:** MP4

That combination uploads fast, looks crisp on phones, and survives Instagram's recompression with minimal quality loss.

## Frequently Asked Questions

### What is the best video size for Instagram Reels in 2026?

1080×1920 pixels (9:16 vertical), MP4 with H.264 video and AAC audio, 30fps. Reels can run up to 3 minutes. Keep the file under 4GB, though under 250MB uploads faster and more reliably.

### Why does Instagram crop my video?

Instagram fits uploads into its fixed slots (9:16 for Reels/Stories, 4:5 or 1:1 for feed). If your video's aspect ratio doesn't match, Instagram crops or letterboxes it. Export at the exact dimensions in this guide to avoid surprises.

### What is the maximum video file size on Instagram?

4GB is the hard cap for uploads, but practical reliability drops well before that. Aim for under 250MB for Reels and Stories; use a compressor when your file exceeds that.

### How long can an Instagram Story video be?

Each Story segment plays up to 60 seconds; longer videos are automatically split into sequential 60-second segments. Stories display at 1080×1920 (9:16).
