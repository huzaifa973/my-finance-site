---
title: "How to Hit an Exact Video File Size (Target-Size Compression Guide)"
description: "Need a video under 25MB or exactly 100MB? Learn target-size compression: how bitrate math works and how to hit any size free."
date: 2026-10-14
tags: ["video", "compression", "how to"]
draft: false
image: /images/video-file-size-target-guide.svg
faq:
  - q: "How do I compress a video to an exact file size?"
    a: "Use a target-size compressor: enter your desired size, and the tool calculates the video bitrate from your duration, then re-encodes to land within a few percent of the target. Our free tool does this in your browser."
  - q: "What is the formula for video file size?"
    a: "File size ≈ (video bitrate + audio bitrate) × duration ÷ 8. Rearranged: bitrate (kbps) = target size (MB) × 8192 ÷ duration (seconds). That is the math every target-size tool uses."
  - q: "Does hitting a target size reduce quality?"
    a: "It depends on the target. Shrinking a 500MB video to 480MB is invisible; squeezing it to 25MB will visibly soften detail. The tighter the target relative to the original, the more quality you trade."
  - q: "Why is my compressed video slightly over the target size?"
    a: "Container overhead, variable-bitrate encoding, and audio tracks add a small margin. Good tools undershoot slightly or run a second pass; expect results within 2–5% of the target."
---

Email attachments cap at 25MB. A upload form rejects anything over 100MB. Your messaging app downscales anything chunky. And your video sits at 237MB, mocking you. Generic "compress my video" tools pick a quality level and hope — but when you need to land *under a specific number*, you need target-size compression: you name the size, the tool does the math, and the output lands on target. Here is how it works and how to do it free.

## The bitrate math behind every target size

Video file size is not mysterious. It is almost entirely determined by two numbers: the bitrate (how much data per second) and the duration. The formula:

**File size (bits) = (video bitrate + audio bitrate) × duration in seconds**

Flip it around to find the bitrate for any target size:

**Video bitrate (kbps) = (target MB × 8,192 ÷ duration seconds) − audio bitrate**

A worked example: you have a 5-minute (300-second) video and need it under 100MB, with audio at 128kbps.

1. Total budget: 100 × 8,192 ÷ 300 = **2,730 kbps**
2. Subtract audio: 2,730 − 128 = **2,602 kbps** for video
3. Encode at ~2,600 kbps video + 128 kbps audio → file lands just under 100MB

That is the entire trick. Every target-size compressor is just doing this arithmetic and then running an encoder at the computed bitrate. Understanding it means you can sanity-check any tool's output — and do it manually with ffmpeg if you ever need to.

<!-- ADSENSE: in-article ad slot -->

## Step by step: compress to your target size

**Step 1: Know your exact limit.** "Under 25MB" and "under 25.0MB" are the same; "about 50MB" is not a target. Check the actual cap of the email provider, form, or platform — common ones are 25MB (email attachments), 100MB, 256MB, and 2GB.

**Step 2: Check your video's duration.** Right-click the file → Properties (Windows) or Get Info (Mac), or open it in any player. You need duration in seconds for the math.

**Step 3: Use a target-size compressor.** Our free [video target-size compressor](/tools/video-target-size-compressor/) takes your file and your desired size, computes the bitrate automatically, and re-encodes right in your browser — nothing uploads anywhere, so private footage stays private.

**Step 4: Pick sensible audio settings.** For speech-heavy video, 96–128kbps AAC is plenty; for music, 128–192kbps. Audio is a small slice of the budget, but trimming it from 320kbps to 128kbps frees meaningful room for the video stream.

**Step 5: Verify the result.** Check the output file size before sending. Good tools land within 2–5% of the target. If you are cutting it close to a hard limit, aim 5% under to leave margin.

## The quality trade-off (and how to minimize it)

Target-size compression always trades quality for size when the target is much smaller than the original. The relationship is not linear:

- **Shrinking by 10–30%**: virtually invisible. Do this without worry.
- **Shrinking by 50%**: slight softening in fast motion and fine detail; acceptable for casual sharing.
- **Shrinking by 70–90%**: visibly blocky, especially in dark scenes and gradients. Watchable on a phone, rough on a big screen.

Ways to get more quality per megabyte:

1. **Use H.265 (HEVC) instead of H.264** when the recipient's device supports it — roughly 30–50% smaller at the same quality. For maximum compatibility, stick with H.264.
2. **Lower the resolution before crushing the bitrate.** A 720p video at a healthy bitrate looks better than a starved 4K encode at the same file size.
3. **Use two-pass encoding** if the tool offers it: the first pass analyzes the video, the second spends bits where they matter most.
4. **Trim dead air first.** Cutting 30 seconds off a video shrinks every target-size calculation proportionally — free quality.

## Common target sizes and when you need them

- **Under 25MB** — email attachments (Gmail, Outlook) and many contact forms. The most common target by far.
- **Under 16–100MB** — messaging apps and social DMs, which vary wildly; 25MB is a safe default.
- **Under 100–256MB** — portfolio submissions, job applications, and upload forms.
- **Under 2GB** — platform upload caps (YouTube and similar); rarely needs aggressive compression.
- **Exact sizes** — some archival or disc-authoring workflows want a file to *fill* a size rather than just fit under it; set the target a hair below the medium's capacity.

<!-- AFFILIATE: for frequent large-file sending, a cloud storage plan with share links sidesteps attachment limits entirely — no compression needed -->

## When target-size compression is the wrong tool

Sometimes the smarter move is not compressing at all. If the recipient can accept a link, uploading the original to cloud storage and sharing a link preserves full quality with zero effort. If only a short clip matters, trimming to the essential 30 seconds beats compressing 10 minutes. And if the video is destined for a platform that re-encodes everything anyway (YouTube, social feeds), upload the highest quality you reasonably can and let their encoder do its job — pre-compressing just adds a generation of quality loss.

## Frequently asked questions

### How do I compress a video to an exact file size?
Use a target-size compressor: enter your desired size, and the tool derives the video bitrate from your video's duration, then re-encodes to land within a few percent. Our free tool performs the whole process in your browser with no upload.

### What is the formula for video file size?
File size ≈ (video bitrate + audio bitrate) × duration ÷ 8. Rearranged for targeting: bitrate (kbps) = target size (MB) × 8192 ÷ duration (seconds), minus your audio bitrate. That is the math every target-size tool applies.

### Does hitting a target size reduce quality?
Only relative to how aggressive the target is. Cutting 20% off is invisible; cutting 90% will visibly soften the video. Use H.265 when compatible, consider dropping resolution before bitrate, and trim dead footage first to protect quality.

### Why is my compressed video slightly over the target size?
Container overhead, variable-bitrate encoding decisions, and the audio track add a small margin. Quality tools compensate by undershooting slightly or running a second pass — expect results within about 2–5% of the target, and aim 5% under hard limits.
