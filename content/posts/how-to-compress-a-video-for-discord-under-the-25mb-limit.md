---
title: "How to Compress a Video for Discord Under the 25MB Limit"
description: "Compress a video for Discord's 25MB limit free — the best resolution, bitrate, and format settings, plus what to do when a video still won't fit."
date: 2026-10-15
tags: ["video", "compression", "discord"]
draft: false
image: /images/how-to-compress-a-video-for-discord-under-the-25mb-limit.svg
slug: how-to-compress-a-video-for-discord-under-the-25mb-limit
faq:
  - q: "What is Discord's video upload limit?"
    a: "Free Discord accounts can upload files up to 25 MB. Nitro Basic raises it to 50 MB and full Nitro to 500 MB. Videos larger than your limit must be compressed, trimmed, or shared as a link."
  - q: "How do I compress a video to under 25MB for Discord?"
    a: "Use a free online video compressor: upload the video, choose 720p resolution with H.264 encoding, and export. Trimming length and lowering the bitrate are the two biggest levers for hitting 25 MB."
  - q: "What video format is best for Discord?"
    a: "MP4 with H.264 video and AAC audio. It is Discord's native-friendly format, plays inline on every device, and offers the best quality per megabyte for compressed uploads."
  - q: "Why does my video look blurry after compressing for Discord?"
    a: "Heavy compression discards detail — especially if you dropped to 480p or a very low bitrate. Stay at 720p with a moderate bitrate, keep the original resolution if the file is short, and avoid compressing an already-compressed file twice."
---

You recorded the perfect clip — a clutch gaming moment, a funny reaction, a quick tutorial — and Discord refuses it: "Your files are too powerful." Discord's free upload cap is 25 MB, and a single minute of phone video can easily be five times that. The good news: with the right compression settings, most clips fit comfortably under the limit while still looking sharp.

This guide explains Discord's upload limits, walks through compressing a video for free in your browser, gives you the exact settings that work best, and covers your options when a video simply will not squeeze down far enough.

## Discord's video upload limits explained

Discord caps uploads by file size, not by video length — and the cap depends on your plan:

| Plan | Max file size |
|---|---|
| Free | 25 MB |
| Nitro Basic | 50 MB |
| Nitro (full) | 500 MB |

A few things worth knowing. First, the limit applies per file, so splitting a long video into parts is a legitimate workaround. Second, Discord sometimes re-encodes uploads, which can soften quality slightly — starting from a clean, well-compressed file minimizes the damage. Third, videos shared in DMs, group chats, and servers all share the same limit for your account tier.

For free users, 25 MB is the number to beat. A 30-second 1080p phone clip at default settings is typically 60–90 MB — compressible to under 25 MB with room to spare. A 5-minute 4K recording is a different story, which is where trimming and realistic expectations come in.

## Compress a video for Discord online (free)

<!-- ADSENSE: in-article ad slot -->

The simplest method runs entirely in your browser — no software to install, and your video never leaves your device.

1. **Open the compressor.** Go to our free [video compressor for Discord](/tools/compress-video-for-discord/) in any modern browser.
2. **Upload your video.** Drag and drop the file. MP4, MOV, WebM, and other common formats all work.
3. **Choose Discord-friendly settings.** Select the 720p preset with H.264 encoding — this is the sweet spot for the 25 MB limit. The tool shows an estimated output size before you commit.
4. **Compress and check the size.** Run the compression, then confirm the result is under 25 MB. If it is still over, trim a few seconds or drop the quality one notch and run it again.
5. **Upload to Discord.** Drag the compressed file into any chat or channel — it will play inline for everyone.

The whole process usually takes a couple of minutes depending on the video length. Because compression happens locally in your browser, even large source files stay private.

## Best settings for Discord video uploads

If you are compressing manually or want to understand what the preset does, these are the settings that reliably land under 25 MB with good quality:

- **Resolution: 1280×720 (720p).** The single biggest size lever. Discord displays most videos at modest sizes anyway, and 720p looks crisp on phones and desktop chat.
- **Codec: H.264.** The most compatible video codec on the planet — Discord, browsers, and phones all handle it natively. H.265 compresses better but can cause playback hiccups.
- **Container: MP4.** Discord's best-supported format, with AAC audio inside.
- **Frame rate: 30 fps.** Dropping from 60 fps to 30 fps roughly halves the data with barely noticeable difference for non-gaming content. Keep 60 fps only for fast action where smoothness matters, and trim length to compensate.
- **Bitrate: 2–4 Mbps for 720p.** This is the quality dial. A 60-second clip at 3 Mbps is about 22 MB — right under the wire. Shorter clips can afford higher bitrates.
- **Audio: AAC at 128 kbps.** More than enough for chat viewing; don't waste megabytes on 320 kbps audio nobody will notice.

Quick math to sanity-check any video: **bitrate (Mbps) × seconds ÷ 8 ≈ file size in MB.** A 90-second clip at 2 Mbps ≈ 22.5 MB. Use this to pick settings before you compress.

## When it still won't fit: trim, crop, and split

Some videos resist compression — long screen recordings, 4K footage, or clips with constant motion (confetti, water, camera shake all compress poorly). When the 25 MB wall holds firm:

- **Trim the fat.** Cutting a 3-minute clip to the best 60 seconds often solves the problem alone — and makes a better share anyway. Remove intros, dead air, and loading screens first.
- **Split into parts.** Discord's limit is per file. Two 20 MB halves of a long clip upload fine and play back-to-back in chat.
- **Crop the frame.** Screen recordings with huge empty desktop areas waste megabytes. Cropping to the action region can cut size dramatically.
- **Mute or strip audio.** If the audio doesn't matter, removing the audio track saves a few MB — occasionally exactly the few MB you need.
- **Lower to 480p as a last resort.** It looks soft on large screens but perfectly watchable on phones, where most Discord viewing happens.

<!-- AFFILIATE: cloud storage services let you share a link instead of compressing — handy when you want friends to see the full-quality original -->

## Alternative: share a link instead of the file

Sometimes compression is the wrong tool. If the video must stay pristine — a portfolio piece, a high-bitrate game montage, a video you want others to download — skip Discord's uploader:

- **Upload to YouTube or a drive** and paste the link. Discord embeds YouTube, Streamable, and most drive links with an inline player, so it feels nearly native.
- **Use Discord's own clip features** for short gaming moments captured in-app.
- **Consider Nitro** only if you routinely share large files — for occasional big uploads, a free cloud link is the economical choice.

The link approach also sidesteps Discord's re-encoding entirely: viewers see exactly the quality you uploaded.

## Frequently asked questions

### What is Discord's video upload limit?
Free accounts can upload files up to 25 MB. Nitro Basic raises the cap to 50 MB and full Nitro to 500 MB. Anything larger must be compressed, trimmed, split, or shared as a link.

### How do I compress a video to under 25MB for Discord?
Use our free [video compressor for Discord](/tools/compress-video-for-discord/): upload the video, pick the 720p H.264 preset, and download the compressed file. Trimming length and lowering bitrate are the two most effective ways to hit 25 MB.

### What video format is best for Discord?
MP4 with H.264 video and AAC audio. It plays inline on every device, Discord handles it natively, and it delivers the best quality per megabyte for compressed uploads.

### Why does my video look blurry after compressing for Discord?
Heavy compression discards detail — most noticeably at 480p or very low bitrates, and worse if you compress an already-compressed file a second time. Stay at 720p with 2–4 Mbps, compress from the original source file, and trim length before dropping quality.
