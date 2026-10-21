# PDF Compression Presets Cheat Sheet: Target Sizes by Use Case

Pick the preset that matches where the PDF is going. "Target size per page" assumes a typical text-and-images page — photo-heavy pages run larger, text-only pages run smaller. All presets assume you keep vector text as text (never rasterize pages into images).

## The presets

| Use case | Target size per page | Image settings | Color mode | Notes |
|---|---|---|---|---|
| Draft / quick share | 30-60 KB | 72-96 DPI, JPEG quality 50-60 | Grayscale | Smallest possible; fine for internal drafts |
| WhatsApp / messaging | 80-150 KB | 96 DPI, JPEG quality 60-65 | RGB | Stays under chat app size limits |
| Web viewing (fast load) | 50-100 KB | 96-110 DPI, JPEG quality 60-70 | RGB | Best for PDFs embedded on websites |
| Email attachment | 100-200 KB | 110-150 DPI, JPEG quality 70 | RGB | Keeps a 20-page doc under ~4 MB |
| Mobile reading | 100-150 KB | 110 DPI, JPEG quality 70 | RGB | Crisp on phone screens, light on data |
| Presentation slides | 100-200 KB | 110 DPI, JPEG quality 70 | RGB | Slide decks shared after meetings |
| General office sharing | 200-400 KB | 150 DPI, JPEG quality 75 | RGB | The everyday default for work documents |
| Client delivery | 300-600 KB | 200 DPI, JPEG quality 80 | RGB | Professional look without bloat |
| High-quality print | 800 KB - 1.5 MB | 300 DPI, JPEG quality 85-90 | RGB (convert to CMYK at the printer) | For brochures, portfolios, anything printed |
| Archival (long-term) | 200-500 KB | 150-200 DPI, JPEG quality 75-80 | RGB or grayscale | Balance of size and future readability |

## How to hit these targets

1. **Downsample images first.** A 300 DPI photo shrunk to 96 DPI loses two-thirds of its pixels — that's where most savings come from.
2. **Use JPEG quality 60-80.** Below 60, artifacts show on text edges; above 85, file size balloons for no visible gain on screen.
3. **Subset your fonts.** Embed only the characters used instead of full font files — saves 100 KB to several MB per font.
4. **Strip metadata.** Remove thumbnails, private application data, and editing history before sharing.
5. **Flatten transparency** for print presets; keep it live for screen presets.
6. **Never rasterize text pages.** Converting a text page to a flat image makes it 10-50x larger and kills searchability.
7. **Grayscale for B&W scans.** A grayscale scan is roughly one-third the size of the same scan in color.

## Quick decision guide

- Sending by email or chat? Use **Email attachment** or **WhatsApp** presets.
- Publishing on a website? Use **Web viewing** — visitors bounce from slow PDFs.
- Sending to a client or printer? Use **Client delivery** or **High-quality print** — never compress these aggressively.
- Unsure? **General office sharing** is the safe middle ground.

## Sanity checks after compressing

- Zoom to 100% and read a full page — text edges should look clean, not fuzzy.
- Check that all pages rendered (aggressive tools sometimes drop pages).
- Confirm the file still opens on a phone — that's where most recipients read PDFs.
- If the PDF has forms or signatures, test that they still work after compression.
