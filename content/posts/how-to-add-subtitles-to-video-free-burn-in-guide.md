---
title: "How to Burn Subtitles Into a Video Free (SRT to Hardcoded)"
description: "Burn subtitles into video permanently free. SRT to hardcoded captions: why burn-in beats soft subs, free tools, styling tips, and common fixes."
date: 2026-10-22
tags: ["video", "subtitles", "editing"]
categories: ["video"]
draft: false
image: /images/how-to-add-subtitles-to-video-free-burn-in-guide.svg
slug: how-to-add-subtitles-to-video-free-burn-in-guide
faq:
  - q: "How do I burn SRT subtitles into a video for free?"
    a: "Use a free burn-in tool: upload your video and SRT file, style the captions, and export — the subtitles become part of the video frames. Our free tool at /tools/burn-subtitles-to-video/ does this in your browser with no sign-up."
  - q: "What is the difference between soft and hardcoded subtitles?"
    a: "Soft subtitles are a separate track the viewer can toggle on or off (like YouTube captions). Hardcoded (burned-in) subtitles are baked into the video image itself — always visible, on every platform, with no player support needed."
  - q: "Does burning in subtitles reduce video quality?"
    a: "Re-encoding can slightly reduce quality, but with high bitrate settings the difference is invisible. Keep the original file as your master and export the subtitled version for sharing."
  - q: "Can I remove burned-in subtitles later?"
    a: "No — that is the tradeoff. Burned-in subtitles are part of the picture. Always keep the original video and the SRT file so you can re-export with different subtitles later."
---

Soft subtitles are great — until they are not. You upload a video with a separate SRT file and the platform ignores it. You send a clip to a friend and the captions do not show. You post to social media and the auto-captions mangle every other word. **Burning subtitles in** (hardcoding them) solves all of this: the text becomes part of the video image itself, visible everywhere, on every player, forever.

This guide explains when burn-in is the right call, how to do it free in your browser, how to style captions so they look professional, and the mistakes that ruin otherwise good subtitle work.

## Burned-in vs. soft subtitles: which do you need?

**Soft subtitles** (SRT/VTT sidecar files, YouTube caption tracks) are separate data the player overlays. Viewers can toggle them, change size, and pick languages. They are the right choice for YouTube uploads, streaming, and accessibility where the platform handles captions natively.

**Burned-in (hardcoded) subtitles** are rendered into the pixels. They cannot be turned off, restyled, or removed — but they work *everywhere*: Instagram, TikTok, WhatsApp forwards, embedded players, downloaded files. They are the right choice for social clips, memes, tutorials shared as files, and any video where you cannot control the player.

Rule of thumb: **if the platform has a caption system, use soft subs; if the video travels as a file, burn them in.** Most creators end up needing both at different times.

## How to burn in subtitles free (browser method)

The fastest free route needs no installed software. Our free [burn subtitles into video tool](/tools/burn-subtitles-to-video/) processes everything on your device:

1. **Prepare your files.** You need the video (MP4 works best) and an SRT subtitle file. No SRT yet? Generate one with YouTube's auto-captions or a free transcription tool, then download the .srt.
2. **Upload both.** Drop the video and the SRT into the tool. It parses the timing automatically.
3. **Style the captions.** Pick font, size, position, and background. White text with a semi-transparent black box is the most readable universal choice.
4. **Preview and export.** Scrub through a few sections to check timing and line breaks, then export. The tool re-encodes the video with subtitles baked into each frame.

Because it runs client-side, your footage never uploads anywhere — useful for unreleased or client work.

## Styling captions like a pro

Burned-in subtitles are permanent, so styling deserves thirty seconds of thought:

- **Keep lines short.** Max two lines, ~42 characters per line. Long lines force tiny text.
- **Bottom-center, with safe margins.** Keep text clear of platform UI overlays (TikTok's right-side buttons, YouTube's progress bar).
- **High contrast always.** White text + black outline or box survives bright and dark scenes alike.
- **Match reading speed.** Aim for captions readable in the time shown — roughly 15–20 characters per second. If viewers cannot finish a line, split it.
- **Mind the timing.** Subtitles should appear exactly when speech starts and clear promptly after. Shift the whole SRT ±200ms if everything feels early or late.

<!-- ADSENSE: in-article ad slot -->

## Fixing the 5 most common subtitle problems

**1. Encoding garbage (Ã© instead of é).** Your SRT is not UTF-8. Re-save it as UTF-8 in any text editor and re-import — one fix, instant cure.

**2. Subtitles out of sync.** Constant offset? Shift all timestamps by a fixed amount. Drift that grows over the video? The SRT was made for a different frame rate — re-time it against your actual file.

**3. Overlapping lines.** Two speakers' lines stacked on each other usually means duplicate entries. Open the SRT in a text editor and delete the overlap.

**4. Text cut off at edges.** Your font size is too big for the export resolution, or platform cropping ate the margins. Shrink the font and add padding.

**5. Huge export file.** Re-encoding at unnecessarily high bitrates bloats files. Match the source's resolution and use a sensible bitrate — the subtitles themselves add almost no size.

## Keep your masters

Burn-in is one-way: once subtitles are pixels, they cannot be cleanly removed. So treat every burn-in export as a **delivery copy**, not the original:

- Keep the **original video** untouched.
- Keep the **SRT file** — it is tiny, editable, and lets you re-export with different styling, timing fixes, or translations later.
- Name exports clearly: `video-final-subs-en.mp4` beats `video-final-FINAL2.mp4`.

With those three files safe, you can re-burn any variant in minutes whenever a platform or audience needs it. <!-- AFFILIATE: in-house DollarWise tool link placed in the how-to section above -->

## Frequently asked questions

**How do I burn SRT subtitles into a video for free?**
Use a free burn-in tool: upload your video and SRT file, style the captions, and export — the subtitles become part of the video frames. Our free tool at /tools/burn-subtitles-to-video/ does this in your browser with no sign-up.

**What is the difference between soft and hardcoded subtitles?**
Soft subtitles are a separate track the viewer can toggle on or off (like YouTube captions). Hardcoded (burned-in) subtitles are baked into the video image itself — always visible, on every platform, with no player support needed.

**Does burning in subtitles reduce video quality?**
Re-encoding can slightly reduce quality, but with high bitrate settings the difference is invisible. Keep the original file as your master and export the subtitled version for sharing.

**Can I remove burned-in subtitles later?**
No — that is the tradeoff. Burned-in subtitles are part of the picture. Always keep the original video and the SRT file so you can re-export with different subtitles later.
