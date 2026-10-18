---
title: "How to Record System Audio on Windows & Mac (Free)"
description: "Record system audio on Windows and Mac for free: built-in settings, free drivers, and browser recorders — capture any sound your computer plays."
date: 2026-10-18
tags: ["screen recording", "audio recording", "how-to"]
categories: ["audio"]
draft: false
slug: "how-to-record-system-audio-windows-mac-free"
image: /images/how-to-record-system-audio-windows-mac-free.svg
faq:
  - q: "Can I record system audio on Windows for free?"
    a: "Yes. Windows has a built-in 'Stereo Mix' input on many PCs that records whatever plays through your speakers. If Stereo Mix is missing, free virtual audio drivers like VB-Audio Virtual Cable or OBS's built-in capture record system audio with no cost."
  - q: "Can I record system audio on a Mac for free?"
    a: "Yes, with one extra step: macOS doesn't include a system-audio input by default. Install the free BlackHole virtual audio driver, route your Mac's output to BlackHole, and record from it in QuickTime, Audacity, or OBS — all free."
  - q: "Is it legal to record system audio?"
    a: "Recording audio playing on your own device is fine for personal use, fair use, and capturing your own calls or streams. Redistributing copyrighted music or video you captured is not. Laws vary by place, so use captured audio responsibly."
  - q: "How do I record system audio in my browser?"
    a: "Our free screen recorder captures the active tab's audio plus your microphone right in the browser — no install needed. Open the tool, choose the tab or screen to share, enable audio, and hit record."
---

You want to capture the audio playing through your own speakers — a webinar, a video call, a livestream, a game's sound — and your recording app only hears your microphone. This is the classic system-audio problem: by default, computers record *input* (mic), not *output* (speakers). Fixing it is free on both Windows and Mac. Here is every method, from built-in settings to free drivers to browser-based recorders.

## What "system audio" actually means

When sound plays on your computer, it travels from the app to your speakers or headphones. System audio recording means **tapping that output stream** and saving it as a file, instead of (or alongside) your microphone. Operating systems hide this capability because it is rarely needed — but it is always there underneath.

## Windows: three free methods

### Method 1: Stereo Mix (built in, zero install)

Many Windows PCs — especially desktops and older laptops — have a hidden recording device called **Stereo Mix** (sometimes "What U Hear") that captures everything playing through your speakers.

1. Right-click the speaker icon in the taskbar → **Sound settings** → **More sound settings** (or open the classic Sound control panel).
2. Go to the **Recording** tab, right-click in the empty area, and check **Show Disabled Devices**.
3. If **Stereo Mix** appears, right-click it → **Enable** → **Set as Default Device**.
4. Open any recorder (Voice Recorder, Audacity) and record — it now captures system audio.

Caveat: Stereo Mix depends on your audio driver. Many modern laptops (especially with Realtek drivers updated recently) hide it entirely. If it is missing, move to method 2.

### Method 2: VB-Audio Virtual Cable (free driver)

A **virtual audio cable** is a free driver that creates a fake speaker and a fake microphone wired together. You set your system output to the virtual speaker and record from the virtual microphone.

1. Install **VB-Audio Virtual Cable** (donationware — free to use) or **VB-CABLE**.
2. In Windows sound settings, set the virtual cable as your **output** device.
3. In your recorder (Audacity, OBS), select the virtual cable as the **input**.
4. Everything your PC plays is now recorded. (You will not hear it yourself while the cable is the output — switch output back to your speakers to monitor.)

### Method 3: OBS Studio (free, records video + audio together)

**OBS Studio** is free, open source, and captures system audio natively — no virtual cable needed. Add an "Audio Output Capture" source, hit record, and you get your system sound (plus optional screen video). Perfect for capturing streams, calls, and gameplay with visuals.

<!-- ADSENSE: in-article ad slot -->

## Mac: the free method

macOS has no Stereo Mix equivalent, so you need one free driver:

1. Install **BlackHole** (free, open source virtual audio driver — 2ch version is enough for most uses).
2. Open **Audio MIDI Setup** (in Applications → Utilities), create a **Multi-Output Device** combining BlackHole and your speakers/headphones — this lets you *hear* the audio while recording it.
3. Set your Mac's sound output to the Multi-Output Device.
4. In QuickTime Player (File → New Audio Recording), Audacity, or OBS, select **BlackHole** as the input and record.

Alternative: **OBS for Mac** with its built-in macOS audio capture works without BlackHole on recent macOS versions — another free option.

## The no-install option: record in your browser

If you just need to capture a tab's audio — a meeting, a webinar, a YouTube video's sound — skip the drivers entirely. Our free [screen recorder](/tools/screen-recorder/) runs in your browser: choose the tab or window, enable audio capture, and hit record. It captures the tab's audio plus your microphone, and the file downloads straight to your device. No install, no signup, and nothing leaves your computer.

For voice-only recording from your mic, the free [voice recorder](/tools/voice-recorder/) does the same thing in one click.

<!-- AFFILIATE: A link to a decent USB microphone fits here for readers whose recordings also need clean voice audio. -->

## Recording tips for clean system audio

- **Mute notifications first.** System audio capture records *everything* — including that incoming message ping.
- **Close noisy tabs.** Only the apps you want should be producing sound.
- **Record at a healthy level.** Aim for peaks around −6 dB; you can boost quiet recordings later, but clipped (distorted) audio cannot be fixed.
- **Save as WAV, convert later.** Record lossless, then convert to MP3 with our [audio format converter](/tools/audio-format-converter/) for sharing.
- **Test 10 seconds first.** Play something, record, listen back. It takes 10 seconds and saves you from discovering a silent 2-hour recording.

## Frequently asked questions

### Can I record system audio on Windows for free?

Yes. Windows has a built-in "Stereo Mix" input on many PCs that records whatever plays through your speakers. If Stereo Mix is missing, free virtual audio drivers like VB-Audio Virtual Cable or OBS's built-in capture record system audio with no cost.

### Can I record system audio on a Mac for free?

Yes, with one extra step: macOS doesn't include a system-audio input by default. Install the free BlackHole virtual audio driver, route your Mac's output to BlackHole, and record from it in QuickTime, Audacity, or OBS — all free.

### Is it legal to record system audio?

Recording audio playing on your own device is fine for personal use, fair use, and capturing your own calls or streams. Redistributing copyrighted music or video you captured is not. Laws vary by place, so use captured audio responsibly.

### How do I record system audio in my browser?

Our free screen recorder captures the active tab's audio plus your microphone right in the browser — no install needed. Open the tool, choose the tab or screen to share, enable audio, and hit record.
