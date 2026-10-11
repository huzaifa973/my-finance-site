---
title: "Free Headline Analyzer — Score Your Titles"
description: "Score any headline 0–100 with word-balance analysis, length checks, reading-grade estimate and concrete improvement tips. Instant, free, no sign-up."
category: seo
date: 2026-10-11
draft: false
---

Your headline decides whether anyone reads the rest. Paste any blog title, YouTube title, or email subject line and get an instant 0–100 score based on word-balance analysis (common, uncommon, emotional and power words), ideal length checks, a reading-grade estimate, and concrete suggestions to make it stronger. Free, instant, and private — nothing leaves your browser.

<div class="tool-shell" id="haShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Headline Analyzer</h2>
<p>Score any title 0–100 with word balance, length &amp; readability analysis.</p>
</div>
<button type="button" class="theme-toggle" id="haTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — files never leave your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your headline</p>
<div class="settings-panel">
<div class="preset-row" id="haPresets">
<button type="button" class="preset-chip" data-t="7 Proven Ways to Save $500 a Month Without Giving Up Coffee">💰 Listicle</button>
<button type="button" class="preset-chip" data-t="The Shocking Truth About Credit Card Interest">😲 Curiosity</button>
<button type="button" class="preset-chip" data-t="How to Start a Budget">📝 Plain</button>
</div>
<div class="setting">
<label for="haInput">Headline <span class="val" id="haCount">0 words · 0 chars</span></label>
<textarea id="haInput" class="tool-input" rows="3" placeholder="Paste your blog title, YouTube title, or subject line…">7 Proven Ways to Save $500 a Month Without Giving Up Coffee</textarea>
<div class="hint">Analysis runs live as you type. Try the preset samples to see what a strong vs. weak headline looks like.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your score</p>
<div class="results show">
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;text-align:center;">
<div style="font-size:3rem;font-weight:800;line-height:1;" id="haScore">—</div>
<div style="font-size:1rem;font-weight:600;margin-top:4px;" id="haGrade">Type a headline to begin</div>
<div class="progress-bar" style="max-width:320px;margin:12px auto 0;"><i id="haBar" style="width:0%;"></i></div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Breakdown &amp; suggestions</p>
<div class="results show">
<p class="result-head">📊 Score breakdown</p>
<div class="result-summary" id="haBreakdown"></div>
<p class="result-head" style="margin-top:14px;">⚖️ Word balance</p>
<div class="result-summary" id="haBalance"></div>
<p class="result-head" style="margin-top:14px;">💡 How to improve</p>
<div class="result-summary" id="haTips"></div>
</div>
<div class="tool-actions" style="margin-top:12px;">
<button type="button" class="btn-pro-outline" id="haCopy">📋 Copy report</button>
<button type="button" class="btn-pro-outline" id="haClear">Clear</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Score unlimited headlines for every post, video, and email — right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('haShell');
ToolPro.themeToggle(shell, document.getElementById('haTheme'));
var input = document.getElementById('haInput');
var countEl = document.getElementById('haCount');
var scoreEl = document.getElementById('haScore');
var gradeEl = document.getElementById('haGrade');
var barEl = document.getElementById('haBar');
var breakdownEl = document.getElementById('haBreakdown');
var balanceEl = document.getElementById('haBalance');
var tipsEl = document.getElementById('haTips');
var presets = document.getElementById('haPresets');

var COMMON = ['a','an','the','and','or','but','for','in','on','at','to','of','with','from','by','as','is','are','was','were','be','you','your','yours','my','mine','it','its','this','that','these','those','how','what','why','when','where','which','who','can','will','should','do','does','if','not','no','so','we','they','their','all','any','just'];
var UNCOMMON = ['actually','amazing','baby','being','best','better','down','every','heart','kind','life','little','love','never','new','old','right','seen','smart','still','thing','way','ways','world','year','days','first','last','more','most','much','own','people','place','time','today','top','truth','without','money','save','ways'];
var EMOTIONAL = ['free','secret','love','best','amazing','surprising','fear','afraid','worry','worried','happy','joy','sad','angry','anger','hate','shocking','shocked','incredible','unbelievable','heartbreaking','trust','trusted','easy','simple','proven','guaranteed','ultimate','epic','crazy','insane','brilliant','beautiful','powerful','stunning','mind-blowing','devastating'];
var POWER = ['free','new','now','instant','instantly','proven','guarantee','guaranteed','secret','secrets','discover','unlock','unlocked','master','ultimate','exclusive','limited','bonus','save','boost','skyrocket','results','win','winner','sale','deal','offer','today','hurry','act','quick','fast','simple'];

function inList(w, list){ return list.indexOf(w) !== -1; }
function syllables(word){
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if(!word) return 0;
  if(word.length <= 3) return 1;
  var m = word.replace(/(?:[^laeiouy]|ed|es|[^laeiouy]e)$/, '').match(/[aeiouy]{1,2}/g);
  return Math.max(1, m ? m.length : 1);
}
function gradeText(score){
  if(score >= 90) return '🏆 Excellent — publish it!';
  if(score >= 70) return '👍 Good — a tweak or two away from great';
  if(score >= 50) return '🔧 Needs work — see suggestions below';
  return '🚨 Poor — rewrite using the tips below';
}

function analyze(){
  var text = input.value.trim();
  var words = text ? text.split(/\s+/) : [];
  var n = words.length;
  var chars = text.length;
  countEl.textContent = n + (n === 1 ? ' word' : ' words') + ' · ' + chars + ' chars';

  if(!n){
    scoreEl.textContent = '—';
    gradeEl.textContent = 'Type a headline to begin';
    barEl.style.width = '0%';
    breakdownEl.innerHTML = '<div>Type or paste a headline above to see the full analysis.</div>';
    balanceEl.innerHTML = '<div>—</div>';
    tipsEl.innerHTML = '<div>—</div>';
    return;
  }

  var clean = words.map(function(w){ return w.toLowerCase().replace(/[^a-z']/g, ''); });
  var cC = 0, cU = 0, cE = 0, cP = 0;
  clean.forEach(function(w){
    if(inList(w, COMMON)) cC++;
    else if(inList(w, UNCOMMON)) cU++;
    if(inList(w, EMOTIONAL)) cE++;
    if(inList(w, POWER)) cP++;
  });
  var pC = cC / n * 100, pU = cU / n * 100, pE = cE / n * 100;
  var hasNumber = /\d/.test(text);
  var totalSyl = clean.reduce(function(s, w){ return s + syllables(w); }, 0);
  var grade = Math.max(1, Math.round(0.39 * (n / 1) + 11.8 * (totalSyl / n) - 15.59));
  var first3 = clean.slice(0, 3);
  var strongStart = first3.some(function(w){ return inList(w, EMOTIONAL) || inList(w, POWER); }) || /^\d/.test(text);

  var score = 0, rows = [], tips = [];

  // Word count (15)
  if(n >= 6 && n <= 13){ score += 15; rows.push(['Word count (' + n + ' words)', 15, 15, 'Ideal range is 6–13 words.']); }
  else if((n >= 4 && n <= 5) || (n >= 14 && n <= 20)){ score += 8; rows.push(['Word count (' + n + ' words)', 8, 15, 'Aim for 6–13 words.']); tips.push('Adjust the length to 6–13 words — the sweet spot for clicks and SEO.'); }
  else { score += 3; rows.push(['Word count (' + n + ' words)', 3, 15, 'Aim for 6–13 words.']); tips.push('Rewrite to 6–13 words: ' + (n < 6 ? 'too short to carry a promise' : 'too long — search results will cut it off') + '.'); }

  // Character length (15)
  if(chars >= 40 && chars <= 60){ score += 15; rows.push(['Character length (' + chars + ')', 15, 15, 'Perfect — fits Google results without truncation.']); }
  else if((chars >= 20 && chars < 40) || (chars > 60 && chars <= 75)){ score += 8; rows.push(['Character length (' + chars + ')', 8, 15, 'Keep it near 40–60 characters.']); tips.push('Tune the length toward 40–60 characters so it never gets truncated in search results.'); }
  else { score += 3; rows.push(['Character length (' + chars + ')', 3, 15, 'Keep it near 40–60 characters.']); tips.push(chars < 40 ? 'Too short to be descriptive — expand it toward 40–60 characters.' : 'Too long — Google will truncate it. Cut toward 40–60 characters.'); }

  // Common words 20-30% (10)
  if(pC >= 20 && pC <= 30){ score += 10; rows.push(['Common words (' + Math.round(pC) + '%)', 10, 10, 'Healthy 20–30% glue words.']); }
  else { score += 4; rows.push(['Common words (' + Math.round(pC) + '%)', 4, 10, 'Aim for 20–30% common words.']); tips.push(pC < 20 ? 'Add a few common connector words (how, what, your, with) to make it read naturally.' : 'Too many filler words — swap some for specific, uncommon words.'); }

  // Uncommon words 10-20% (10)
  if(pU >= 10 && pU <= 20){ score += 10; rows.push(['Uncommon words (' + Math.round(pU) + '%)', 10, 10, 'Good 10–20% distinctive words.']); }
  else { score += 4; rows.push(['Uncommon words (' + Math.round(pU) + '%)', 4, 10, 'Aim for 10–20% uncommon words.']); tips.push('Work in more uncommon words (proven, little, world, truth) to stand out in a feed.'); }

  // Emotional words 10-15% (10)
  if(pE >= 10 && pE <= 15){ score += 10; rows.push(['Emotional words (' + Math.round(pE) + '%)', 10, 10, 'Great emotional pull.']); }
  else if(cE > 0){ score += 4; rows.push(['Emotional words (' + Math.round(pE) + '%)', 4, 10, 'Aim for 10–15%.']); tips.push('Add one more emotional word (shocking, easy, ultimate, free) — emotion drives clicks.'); }
  else { rows.push(['Emotional words (0%)', 0, 10, 'Aim for 10–15%.']); tips.push('Add an emotional word (shocking, easy, proven, free) — headlines with emotion get far more clicks.'); }

  // Power words (10)
  if(cP > 0){ score += 10; rows.push(['Power words (' + cP + ')', 10, 10, 'At least one power word present.']); }
  else { rows.push(['Power words (0)', 0, 10, 'Add at least one.']); tips.push('Add a power word (proven, secret, instant, exclusive, guaranteed) to trigger action.'); }

  // Reading grade (10)
  if(grade <= 8){ score += 10; rows.push(['Reading grade ~' + grade, 10, 10, 'Easy to scan — grade 8 or below.']); }
  else { score += 3; rows.push(['Reading grade ~' + grade, 3, 10, 'Aim for grade 8 or below.']); tips.push('Simplify the wording — headlines at a grade-8 reading level or below get more clicks.'); }

  // Strong start (10)
  if(strongStart){ score += 10; rows.push(['Strong opening', 10, 10, 'Opens with a number or a power/emotional word.']); }
  else { rows.push(['Strong opening', 0, 10, 'Open with a number or power word.']); tips.push('Start with a number or a power word (7 Proven…, Free…, The Secret…) — readers decide in the first 3 words.'); }

  // Number present (5)
  if(hasNumber){ score += 5; rows.push(['Contains a number', 5, 5, 'Numbers boost click-through.']); }
  else { rows.push(['Contains a number', 0, 5, 'Odd numbers work best.']); tips.push('Add a number — headlines with numbers (especially odd ones like 7 or 9) outperform plain ones.'); }

  // Sentiment word (5)
  if(cE > 0){ score += 5; rows.push(['Emotional sentiment', 5, 5, 'Carries positive or negative sentiment.']); }
  else { rows.push(['Emotional sentiment', 0, 5, 'Neutral headlines underperform.']); tips.push('Give it a positive or negative slant (avoid neutral, flat phrasing).'); }

  score = Math.min(100, score);
  scoreEl.textContent = score;
  gradeEl.textContent = gradeText(score);
  barEl.style.width = score + '%';

  breakdownEl.innerHTML = rows.map(function(r){
    var pct = Math.round(r[1] / r[2] * 100);
    var icon = r[1] === r[2] ? '✅' : (r[1] >= r[2] / 2 ? '🟡' : '❌');
    return '<div style="margin:8px 0;"><div>' + icon + ' <b>' + r[0] + '</b> — ' + r[1] + '/' + r[2] + ' pts <span style="color:var(--muted);">(' + r[3] + ')</span></div>' +
      '<div class="progress-bar" style="margin-top:4px;"><i style="width:' + pct + '%;"></i></div></div>';
  }).join('');

  function bar(label, pct, target){
    var ok = pct >= target[0] && pct <= target[1];
    return '<div style="margin:6px 0;">' + (ok ? '✅' : '⚠️') + ' <b>' + label + ':</b> ' + Math.round(pct) + '% <span style="color:var(--muted);">(target ' + target[0] + '–' + target[1] + '%)</span></div>';
  }
  balanceEl.innerHTML =
    bar('Common words', pC, [20, 30]) +
    bar('Uncommon words', pU, [10, 20]) +
    bar('Emotional words', pE, [10, 15]) +
    '<div style="margin:6px 0;">' + (cP > 0 ? '✅' : '⚠️') + ' <b>Power words:</b> ' + cP + ' found <span style="color:var(--muted);">(target: at least 1)</span></div>' +
    '<div style="margin:6px 0;">📚 <b>Reading grade:</b> ~' + grade + ' <span style="color:var(--muted);">(target: grade 8 or below)</span></div>';

  tipsEl.innerHTML = tips.length
    ? tips.map(function(t){ return '<div style="margin:6px 0;">💡 ' + t + '</div>'; }).join('')
    : '<div>✅ Nothing to fix — this headline is ready to publish.</div>';
}

presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  input.value = chip.dataset.t;
  analyze();
});

input.addEventListener('input', analyze);

function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
}
document.getElementById('haCopy').addEventListener('click', function(){
  var t = input.value.trim();
  if(!t){ ToolPro.toast('Enter a headline first'); return; }
  var report = 'Headline: ' + t + '\nScore: ' + scoreEl.textContent + '/100 — ' + gradeEl.textContent;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(report).then(function(){ ToolPro.toast('Report copied', 'ok'); }, function(){ fallbackCopy(report); ToolPro.toast('Report copied', 'ok'); });
  } else { fallbackCopy(report); ToolPro.toast('Report copied', 'ok'); }
});
document.getElementById('haClear').addEventListener('click', function(){
  input.value = ''; analyze(); input.focus();
});

analyze();
})();
</script>

## How it works

Type or paste any headline and the analysis runs live — no button needed. The tool scores it 0–100 across nine checks: word count, character length, common/uncommon/emotional word balance, power words, reading grade, opening strength, numbers, and sentiment. Each check shows the points earned and exactly how to fix what's missing, and the word-balance panel shows your percentages against proven targets.

## Everyday uses

- **Bloggers** — score every post title before publishing; small headline tweaks are the cheapest traffic win there is.
- **YouTubers** — test video titles for emotional pull and power words before you upload.
- **Email marketers** — stronger subject lines mean higher open rates; analyze each one in seconds.
- **Freelance writers** — deliver titles your clients can see are data-backed, not guessed.
- **Ad buyers** — quickly compare ad headline variants and pick the strongest before spending a dollar.

**Rule of thumb:** aim for 70+. Anything under 50 almost always needs a rewrite — usually it's missing an emotional or power word and a number.

## FAQ

**How is the 0–100 score calculated?**
Nine checks add up to 100: word count (15), character length (15), common words (10), uncommon words (10), emotional words (10), power words (10), reading grade (10), strong opening (10), plus numbers and sentiment (5 each). Each check compares your headline against proven copywriting targets.

**What is "word balance" and why does it matter?**
High-performing headlines mix word types: ~20–30% common glue words (the, your, how), 10–20% uncommon distinctive words (proven, world, truth), and 10–15% emotional words (shocking, easy, free). The balance panel shows your mix against those targets.

**Is this score a guarantee of clicks?**
No — it's a best-practice checklist, not a prophecy. Topic relevance, thumbnail, and audience still matter. But headlines scoring 70+ consistently outperform low-scoring ones.

**Is the headline analyzer really free?**
Yes — 100% free forever, unlimited headlines, no sign-up. Your text never leaves your browser.
