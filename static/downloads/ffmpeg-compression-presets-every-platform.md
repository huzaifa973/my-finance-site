# FFmpeg Compression Presets for Every Platform (Full Collection)

Free from DollarWise — the complete copy-paste FFmpeg preset collection. Replace input.mp4 with your file's name and run. Install FFmpeg from ffmpeg.org if you do not have it.

## Platform presets

### TikTok — 1080x1920, H.264

```bash
ffmpeg -i input.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart tiktok_ready.mp4
```

### YouTube — high quality

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k -movflags +faststart youtube_ready.mp4
```

### WhatsApp — under 16 MB (single pass)

```bash
ffmpeg -i input.mp4 -vf "scale=720:-2" -c:v libx264 -crf 28 -preset veryfast -c:a aac -b:a 96k -movflags +faststart whatsapp_ready.mp4
```

### WhatsApp — under 16 MB (two-pass, exact targeting)

```bash
ffmpeg -y -i input.mp4 -vf "scale=720:-2" -c:v libx264 -b:v 800k -pass 1 -an -f mp4 /dev/null
```

```bash
ffmpeg -i input.mp4 -vf "scale=720:-2" -c:v libx264 -b:v 800k -pass 2 -c:a aac -b:a 96k -movflags +faststart whatsapp_16mb.mp4
```

Rule of thumb: 800 kbps video bitrate fits about 3 minutes into 16 MB. For a 90-second status, 1400k works.

### Discord — under 10 MB

```bash
ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 30 -preset veryfast -c:a aac -b:a 96k -movflags +faststart discord_ready.mp4
```

### Email — tiny file

```bash
ffmpeg -i input.mp4 -vf "scale=640:-2" -c:v libx264 -crf 32 -preset veryfast -c:a aac -b:a 64k -movflags +faststart email_ready.mp4
```

## Everyday extras

### Extract audio as MP3

```bash
ffmpeg -i input.mp4 -vn -c:a libmp3lame -b:a 192k audio_only.mp3
```

### Video to GIF (first 5 seconds)

```bash
ffmpeg -i input.mp4 -vf "fps=12,scale=480:-1:flags=lanczos" -t 5 output.gif
```

### Video to high-quality GIF (palette method)

```bash
ffmpeg -i input.mp4 -vf "fps=15,scale=480:-1:flags=lanczos,palettegen" palette.png
```

```bash
ffmpeg -i input.mp4 -i palette.png -lavfi "fps=15,scale=480:-1:flags=lanczos [x]; [x][1:v] paletteuse" output_hq.gif
```

### Trim a clip without re-encoding

```bash
ffmpeg -ss 00:01:30 -to 00:02:00 -i input.mp4 -c copy clip.mp4
```

### Compress without resizing

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 26 -preset medium -c:a aac -b:a 128k -movflags +faststart compressed.mp4
```

### Extract a thumbnail frame at 5 seconds

```bash
ffmpeg -ss 00:00:05 -i input.mp4 -frames:v 1 thumbnail.jpg
```

### Remove the audio track

```bash
ffmpeg -i input.mp4 -c:v copy -an silent.mp4
```

### Add faststart to an existing file (no re-encode)

```bash
ffmpeg -i input.mp4 -c copy -movflags +faststart fixed.mp4
```

### Crop horizontal video to vertical 9:16

```bash
ffmpeg -i input.mp4 -vf "crop=ih*9/16:ih" -c:a copy vertical.mp4
```

### Convert to WebM

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

## Quick flag reference

- `-crf 18` near-lossless, `-crf 23` balanced, `-crf 28-32` small files
- `-preset slow` better compression, `-preset veryfast` quicker encodes
- `-movflags +faststart` lets web players start before the download finishes
- `-vf "scale=720:-2"` resizes to 720p keeping aspect ratio (even dimensions required)

Free resource from DollarWise (dollarwise.xyz) — one command per platform, zero guesswork.
