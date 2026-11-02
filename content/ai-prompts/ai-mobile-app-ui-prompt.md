---
title: "Mobile App UI Design Prompt (Figma / v0 / Lovable)"
description: "Copy-paste AI prompt that generates a complete mobile app UI — five screens, full design system, dark mode, and iOS + Android variants — for Figma, v0, or Lovable."
date: 2026-11-02
draft: false
tags: ["ai", "prompts", "ui", "mobile", "design"]
faq:
  - q: "Which tool should I paste this prompt into?"
    a: "For code you can ship, use v0 or Lovable. For a design file you can hand to a developer, use Figma AI or Magic Patterns. The prompt works in all of them."
  - q: "Will the output include both iOS and Android styles?"
    a: "Yes — the prompt explicitly asks for iOS (Human Interface Guidelines) and Android (Material Design 3) variants, plus a shared design system."
  - q: "Can I get dark mode included?"
    a: "Yes, dark mode is requested by name. Always toggle it in the generated output and check contrast ratios before shipping."
  - q: "Is AI-generated UI good enough for a real app?"
    a: "For MVPs and v1, yes — it gets you 80% there. Have a designer polish the spacing, iconography, and micro-interactions before a public launch."
---
# Mobile App UI Design Prompt 📱
Describe your app idea in one line — get back a complete mobile UI: five core screens, a full design system (colors, typography, spacing, components), a dark mode variant, and separate iOS and Android adaptations. This is the prompt format that turns an app concept into a clickable, developer-ready design in one pass.
## The prompt
<div class="prompt-wrap">
<button class="btn btn-sm" onclick="copyPrompt(this)">📋 Copy prompt</button>
<pre class="prompt-text"><code>Design a complete mobile app UI for [APP NAME], a [ONE-LINE DESCRIPTION, e.g. habit-tracking app for busy professionals].
Deliver a design system first, then five core screens, then variants:
DESIGN SYSTEM:
- Color palette: primary, secondary, accent, success, warning, error, plus a full neutral scale (50–900). State hex values.
- Typography: font family, heading scale (H1–H4), body sizes, caption, and line heights.
- Spacing: base unit (e.g. 4pt) and the spacing scale used for padding and margins.
- Components: button styles (primary/secondary/ghost/text), input fields, cards, badges, tabs, navigation bar, and floating action button — with states (default, pressed, disabled, error).
- Radius, elevation/shadow, and icon style (line/filled, stroke width).
FIVE CORE SCREENS (design each in detail, with real content, no lorem ipsum):
1) Onboarding (3 slides with skip + get-started flow)
2) Home / dashboard (primary navigation, key content, FAB or main action)
3) Detail screen (drill-in view of one item, with actions)
4) Profile / account screen (avatar, stats, settings entry)
5) Settings screen (grouped list, toggles, account actions)
VARIANTS:
- Dark mode version of all five screens with adjusted contrast and elevation.
- One iOS variant (follow Apple Human Interface Guidelines: SF Pro, rounded corners, large titles, tab bar) and one Android variant (follow Material Design 3: Roboto/Inter, FAB, top app bar, Material You dynamic color hints).
Style direction: [e.g. clean, modern, soft shadows, rounded 16px cards, gradient accents].
Target user: [e.g. 25–40 year old professionals].
Annotate spacing and key measurements where it matters for handoff.</code></pre>
</div>
<script>
function copyPrompt(btn){const t=btn.parentElement.querySelector('.prompt-text').innerText;navigator.clipboard.writeText(t).then(()=>{const o=btn.textContent;btn.textContent='✅ Copied!';setTimeout(()=>btn.textContent=o,2000);});}
</script>
## Preview — what this prompt creates
You receive a design system document first — hex values for every color, a full type scale, a spacing base unit, and every core component with its interaction states defined. Then the five screens are laid out with realistic content: a three-slide onboarding with skip and get-started, a home dashboard with primary navigation and a main action, a detail drill-in screen, a profile with stats, and a grouped settings list with toggles. Each screen appears in both light and dark mode, and the whole set is delivered twice — once following iOS Human Interface Guidelines and once following Material Design 3 for Android — so you have a true cross-platform starting point.
## Best AI tools for this
- **v0 (Vercel)** — best React Native / Expo code output, deployable
- **Lovable** — full-stack mobile app with backend and auth
- **Figma AI / Magic Patterns** — produces editable Figma design files
- **Uizard** — great for quick wireframes to high-fidelity
- **Galileo AI** — high-fidelity UI generation with editable components
## Make it yours
- **[APP NAME] + description** — the more specific the app and audience, the more relevant the generated screens.
- **Style direction** — name a reference: "Linear-style dark", "Notion minimal", "Cash App playful", or a color hex to lock the palette.
- **Screens** — swap the five screens for your app's actual core flow (e.g. feed, search, upload, reels, profile for a social app).
## Pro tips
- Generate once, then iterate screen by screen: "redesign the home screen with a bottom sheet" or "make the onboarding more visual."
- Check WCAG contrast on the dark mode variant — AI often picks grays that fail AA.
- Export or hand off the design system first; developers build components from it, and it keeps later screens consistent.
