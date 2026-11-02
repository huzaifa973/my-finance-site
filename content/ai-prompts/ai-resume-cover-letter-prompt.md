---
title: "Resume & Cover Letter Prompt (ATS-Friendly, Gets Interviews)"
description: "Copy-paste AI prompt that builds an ATS-optimized resume with STAR achievement bullets, a matching cover letter, and a LinkedIn About section — tuned to one specific job description."
date: 2026-11-03
draft: false
tags: ["ai", "prompts", "resume", "career", "jobs"]
faq:
  - q: "Do I paste the whole job description into the prompt?"
    a: "Yes — the full job description is the single most important input. The AI extracts keywords and mirrors them in your resume, which is how you beat Applicant Tracking Systems."
  - q: "Will the AI invent experience I don't have?"
    a: "It might stretch wording, so always review every bullet. Never claim a skill or result you can't defend in an interview — the prompt asks it to use only the background you provide."
  - q: "Is one resume enough for all applications?"
    a: "No. Run this prompt once per job application. Tailoring the resume and cover letter to each posting is what moves you from the 75% rejected by ATS to the interview pile."
  - q: "Should I use a fancy template with columns and graphics?"
    a: "No. ATS software struggles with two-column layouts, tables, and graphics. A clean single-column Word or PDF with standard section headings parses best. The prompt produces exactly that."
---
# Resume & Cover Letter Prompt 💼
One job description plus your background in, three tailored documents out: an ATS-optimized resume with STAR achievement bullets, a matching cover letter that doesn't repeat the resume, and a LinkedIn About section. Built for the specific posting, not a generic one-size-fits-all document.
## The prompt
<div class="prompt-wrap">
<button class="btn btn-sm" onclick="copyPrompt(this)">📋 Copy prompt</button>
<pre class="prompt-text"><code>I am applying for this job. First, extract the top 10–15 keywords, hard skills, soft skills, and required qualifications from the job description and list them.

JOB DESCRIPTION:
[paste full job description here]

MY BACKGROUND:
[paste your current resume, LinkedIn, or a few paragraphs about your experience, education, and achievements here]

Using ONLY information from my background (do not invent skills or results), produce three documents:

1. ATS-OPTIMIZED RESUME (single column, standard headings, plain text, one page if under 10 years experience):
   - Professional summary (2–3 lines) mirroring the job's core requirements.
   - Experience section: for each role, company, dates, and 3–4 achievement bullets in STAR format (Situation, Task, Action, Result) with quantified metrics where my background provides numbers. Weave in the extracted keywords naturally.
   - Skills section: hard skills and tools, grouped, prioritizing keywords from the job description.
   - Education and any certifications.

2. COVER LETTER (3–4 paragraphs, ~300 words):
   - Opening: why this specific role and company excites me (reference something real from the job description).
   - Middle: 2–3 specific stories from my background that prove I can do the job — do NOT repeat resume bullets verbatim.
   - Close: confident call to action, thank them, offer to discuss further.

3. LINKEDIN ABOUT SECTION (3–5 short paragraphs, first-person, ~200 words): hook in the first line, what I do, who I help, one key achievement, what I'm looking for, contact CTA.

Format the resume in plain text with clear section headings so it pastes cleanly into any ATS.</code></pre>
</div>
<script>
function copyPrompt(btn){const t=btn.parentElement.querySelector('.prompt-text').innerText;navigator.clipboard.writeText(t).then(()=>{const o=btn.textContent;btn.textContent='✅ Copied!';setTimeout(()=>btn.textContent=o,2000);});}
</script>
## Preview — what this prompt creates
You get three documents tuned to one posting. The resume uses single-column layout and standard headings ("Experience," "Skills," "Education") so ATS software parses it correctly, and every bullet is written in STAR format with numbers wherever your background supports them — quantified bullets get interviews. The cover letter tells two or three stories the resume can't, so it adds value instead of repeating. The LinkedIn About section is ready to paste, and because it mirrors the same keywords, recruiters searching LinkedIn find you too.
## Best AI tools for this
- **Claude (Opus / Sonnet)** — best at extracting keywords and writing STAR bullets
- **ChatGPT (GPT-4o)** — strong cover-letter storytelling
- **Gemini Advanced** — fast, good at matching job-description language
- **Jobscan** — not a writer, but scan your final resume against the JD to check match rate
- **Teal** — resume builder with built-in AI and ATS-score tracking
## Make it yours
- **[paste full job description]** — include everything: responsibilities, requirements, "nice to haves," even the company boilerplate. More context = better keyword matching.
- **[paste your background]** — your current resume is ideal; if you don't have one, bullet out every job, project, and metric you can remember.
- **Page length** — override with "two pages" if you have 10+ years of experience.
- **Tone** — add "conservative, formal" for law/finance or "conversational, modern" for startups and creative roles.
## Pro tips
- Always run the final resume through a free ATS checker (Jobscan or Resumeworded) and fix any parsing issues before applying.
- Quantify everything: "improved performance" → "cut page load time by 40%, lifting conversion 12%." If you don't have exact numbers, use ranges ("managed budgets of $50K–$100K").
- Customize the first line of the cover letter per company — generic openings scream "mass apply."
- Update your LinkedIn headline and About at the same time; recruiters check both before calling.