---
title: "FFmpeg Compression Presets for Every Platform (Copy-Paste Commands)"
description: "Copy-paste FFmpeg presets to compress video for TikTok, YouTube, WhatsApp, Discord, and email, plus audio extraction and video-to-GIF commands."
date: 2026-10-20
tags: ["video", "ffmpeg", "compression"]
categories: ["video"]
draft: false
image: /images/ffmpeg-compression-presets-every-platform.svg
slug: ffmpeg-compression-presets-every-platform
post_type: resource
faq:
  - q: "What does -crf mean in these commands?"
    a: "CRF stands for Constant Rate Factor, FFmpeg's quality dial for H.264. Lower numbers mean better quality and bigger files: 18 is near-lossless, 23 is the sweet spot for most uploads, and 28 to 32 trades visible quality for much smaller files."
  - q: "Why is my WhatsApp video still over 16 MB?"
    a: "Long videos can exceed 16 MB even at low quality. Use the two-pass preset in the download, which targets an exact bitrate, or trim the clip shorter. As a rule of thumb, 800 kbps of video bitrate fits about three minutes into 16 MB."
---

Every platform compresses your video differently, and uploading a 200 MB file just to watch it get crushed is a waste of time. FFmpeg is the free command-line tool that professionals use to shrink videos to exactly what each platform wants, and this pack gives you copy-paste presets for all of them. You get ready-made commands for TikTok, YouTube, WhatsApp's 16 MB limit, Discord's 10 MB limit, and email-friendly sizes, plus handy extras like audio extraction and video-to-GIF. Paste a command, swap in your filename, and you are done in seconds.

## What's inside this pack

Each preset is a single FFmpeg command tuned for one destination. TikTok gets a 1080 x 1920 H.264 encode with faststart so it streams instantly. YouTube gets a high-quality slow encode that survives recompression. WhatsApp gets a 720p encode that lands under the 16 MB cap, with a two-pass option in the download for files that must hit the limit exactly. Discord gets a sub-10 MB encode, and email gets a tiny 640p version. The extras cover everyday jobs: pulling audio out as MP3, turning a clip into a GIF, trimming, and stripping audio. If you can paste into a terminal, you can use every preset here.

## 6 essential FFmpeg presets (free sample)

Here are six of the most-used presets, each with a caption explaining what it does. Every command is a one-liner: replace input.mp4 with your file's name and run it. All commands use H.264 video and AAC audio, the combination every platform accepts, with faststart enabled so videos begin playing before they finish downloading. The free download contains the full collection, including the two-pass WhatsApp preset, GIF conversion with palette optimization, trimming, thumbnails, and format conversions.

1. TikTok 1080x1920, H.264:

```bash
ffmpeg -i input.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart tiktok_ready.mp4
```

2. YouTube, high quality:

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k -movflags +faststart youtube_ready.mp4
```

3. WhatsApp, under 16 MB:

```bash
ffmpeg -i input.mp4 -vf "scale=720:-2" -c:v libx264 -crf 28 -preset veryfast -c:a aac -b:a 96k -movflags +faststart whatsapp_ready.mp4
```

4. Discord, under 10 MB:

```bash
ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 30 -preset veryfast -c:a aac -b:a 96k -movflags +faststart discord_ready.mp4
```

5. Email-friendly, tiny file:

```bash
ffmpeg -i input.mp4 -vf "scale=640:-2" -c:v libx264 -crf 32 -preset veryfast -c:a aac -b:a 64k -movflags +faststart email_ready.mp4
```

6. Extract audio as MP3:

```bash
ffmpeg -i input.mp4 -vn -c:a libmp3lame -b:a 192k audio_only.mp3
```

<!-- ADSENSE: in-article ad slot -->

## How to use this pack

1. Install FFmpeg from ffmpeg.org if you do not have it, then open a terminal.
2. Copy the preset for your target platform.
3. Replace input.mp4 with your video's filename.
4. Run the command and wait for it to finish.
5. Check the output file's size and play it once to confirm quality.
6. Upload the new file instead of the original.

One encode per platform beats one giant upload every time. A two-minute render on your own machine gives you a smaller file, faster uploads, and better-looking video than letting each app compress your footage its own way.

## Frequently asked questions

**What does -crf mean in these commands?**

CRF stands for Constant Rate Factor, FFmpeg's quality dial for H.264. Lower numbers mean better quality and bigger files: 18 is near-lossless, 23 is the sweet spot for most uploads, and 28 to 32 trades visible quality for much smaller files.

**Why is my WhatsApp video still over 16 MB?**

Long videos can exceed 16 MB even at low quality. Use the two-pass preset in the download, which targets an exact bitrate, or trim the clip shorter. As a rule of thumb, 800 kbps of video bitrate fits about three minutes into 16 MB.

<a class="btn-pro" href="/downloads/ffmpeg-compression-presets-every-platform.md" download>Download the full pack</a>

<script>
(function(){document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),el=li?li.querySelector('.res-text'):null,t=el?el.textContent.trim():'';if(!t)return;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});}});});})();
</script>
