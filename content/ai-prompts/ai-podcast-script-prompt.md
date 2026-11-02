---
title: "Podcast Script Prompt (Monologue & Interview Format)"
description: "Copy-paste AI prompt that writes a full 30-minute podcast script — hook, four timestamped segments, guest questions, mid-roll ad read, CTA, outro, show notes, and five episode titles."
date: 2026-11-03
draft: false
tags: ["ai", "prompts", "podcast", "script"]
faq:
  - q: "Can this prompt do both solo and interview episodes?"
    a: "Yes. For a solo show, leave the guest field blank and the AI writes a monologue. Add a guest name and bio and it switches to interview mode with prepared questions."
  - q: "How accurate are the timestamps?"
    a: "They're estimates based on an average speaking pace of 130–150 words per minute. Treat them as targets — real episodes usually run 25–35 minutes, which is fine."
  - q: "Should I read the script word-for-word?"
    a: "No. Use it as a structural outline. Reading verbatim sounds stiff; bullet-point each segment and speak naturally. The script is there so you never freeze or go off on a 10-minute tangent."
  - q: "Does it write the mid-roll ad too?"
    a: "Yes — it generates a 60-second host-read ad spot with a promo code placeholder, which is the format sponsors pay the most for."
---
# Podcast Script Prompt 🎙️
A full episode blueprint in one prompt: a hook that grabs listeners in the first 30 seconds, four timestamped segments, prepared guest questions if you're interviewing, a mid-roll ad read, a clear call-to-action, an outro, show notes, and five title options. Works for solo monologues and interview shows.
## The prompt
<div class="prompt-wrap">
<button class="btn btn-sm" onclick="copyPrompt(this)">📋 Copy prompt</button>
<pre class="prompt-text"><code>Write a complete 30-minute podcast episode script for my show [SHOW NAME], about [EPISODE TOPIC, e.g. why budgets fail and what to do instead]. Format: [SOLO MONOLOGUE / INTERVIEW].
[If interview: Guest is [GUEST NAME], [ONE-LINE BIO].]

Structure with approximate timestamps:
- 0:00–0:30 Hook: open with a surprising stat, counterintuitive claim, or short story that makes listeners want to stay.
- 0:30–2:00 Intro: welcome listeners, state today's topic and what they'll learn by the end, one sentence about the show.
- 2:00–9:00 Segment 1: set up the problem or context — why this topic matters now.
- 9:00–16:00 Segment 2: the core idea or first big insight, with a concrete example. [If interview: 3–4 open-ended guest questions with follow-ups.]
- 16:00–17:00 Mid-roll ad read: 60-second host-read ad for [SPONSOR PRODUCT / PLACEHOLDER], natural tone, include promo code placeholder.
- 17:00–24:00 Segment 3: practical application — 3 actionable steps listeners can take this week. [If interview: 3 more guest questions digging into specifics.]
- 24:00–28:00 Segment 4: counterpoints, common mistakes, and what surprised you most.
- 28:00–29:00 Call-to-action: one specific ask (rate/review, join newsletter, download resource) with the link.
- 29:00–30:00 Outro: summarize the key takeaway in one sentence, tease next episode, sign off.
Tone: conversational, like talking to a friend. Short sentences. No formal essay language. Include [PAUSE] and [EMPHASIS] markers where appropriate.
Then provide: 1) show notes with timestamps and links, 2) five episode title options (under 60 characters, mix of curiosity and benefit), 3) three social-media teaser captions.</code></pre>
</div>
<script>
function copyPrompt(btn){const t=btn.parentElement.querySelector('.prompt-text').innerText;navigator.clipboard.writeText(t).then(()=>{const o=btn.textContent;btn.textContent='✅ Copied!';setTimeout(()=>btn.textContent=o,2000);});}
</script>
## Preview — what this prompt creates
You get a roughly 3,500–4,500 word script — about 30 minutes of spoken audio — with timestamps so you can record segment by segment instead of in one nerve-wracking take. The hook is written to stop the skip, the mid-roll ad reads like a real host-read spot (not a robotic read), and the show notes with timestamps are ready to paste into your podcast host. The five title options give you A/B material for episode art and social promos.
## Best AI tools for this
- **Claude (Opus)** — best long-form structure and natural conversational tone
- **ChatGPT (GPT-4o)** — strong at interview questions and follow-ups
- **Gemini Advanced** — fast, good show-notes formatting
- **Notion AI** — keeps scripts, notes, and outlines in one workspace
- **Descript** — AI writing plus built-in editing and transcription
## Make it yours
- **[SHOW NAME]** and **[EPISODE TOPIC]** — the more specific the topic, the tighter the script. "How to negotiate a raise" beats "career advice."
- **Solo vs interview** — delete the guest line for a monologue; add a real bio and the AI tailors questions to that person's expertise.
- **[SPONSOR PRODUCT]** — put a real sponsor name and one key benefit; if you don't have a sponsor yet, leave it as a placeholder and record it later.
- **Segment lengths** — shift time around to fit your style (e.g., give Segment 3 more time if your show is heavy on actionable advice).
## Pro tips
- Record the hook last, after you've finished the episode — you'll know the most interesting moment and can tease it.
- Don't read verbatim. Convert each segment to 4–5 bullet points on a card and talk through them.
- The first 60 seconds determines whether someone finishes the episode — over-invest there.
- Post-production: cut long pauses and "um"s, but keep natural breathing; over-edited podcasts sound sterile.