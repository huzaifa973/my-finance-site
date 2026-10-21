---
title: "Free YouTube Title Checker — Score & Improve Your Video Titles"
description: "Paste your YouTube title and get an instant score with fixes — length, keyword placement, power words, brackets, and click hooks. Free, no sign-up."
category: seo
date: 2026-10-20
draft: false
---

Your title decides whether anyone clicks. Paste a draft title below and get an instant score out of 100 — with concrete fixes for length, keyword placement, power words, numbers, brackets, and risky formatting like all-caps and emoji. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="ytcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>YouTube Title Checker</h2>
<p>Paste a title, get a score out of 100 — and the exact fixes that lift it.</p>
</div>
<button type="button" class="theme-toggle" id="ytcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your title &amp; keyword</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="ytcTitle">Video title <span class="val" id="ytcCount">0 characters</span></label>
<input type="text" class="tool-input" id="ytcTitle" placeholder="e.g. I Tried the 5AM Routine for 30 Days (Honest Results)" maxlength="140">
<div class="hint">YouTube truncates titles around 60–70 characters in search results.</div>
</div>
<div class="setting">
<label for="ytcKeyword">Main keyword (optional)</label>
<input type="text" class="tool-input" id="ytcKeyword" placeholder="e.g. 5am routine">
<div class="hint">Your keyword should appear near the front of the title for search.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Score &amp; fixes</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ytcBtn">
<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
Check My Title
</button>
<button type="button" class="btn-pro-outline" id="ytcClear">Clear</button>
</div>
<div class="results" id="ytcResults">
<p class="result-head">📊 Title report</p>
<div class="result-summary" id="ytcSummary"></div>
<div class="result-grid" id="ytcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Score as many titles as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('ytcShell');
ToolPro.themeToggle(shell, document.getElementById('ytcTheme'));
var titleIn=document.getElementById('ytcTitle'), kwIn=document.getElementById('ytcKeyword');
var btn=document.getElementById('ytcBtn'), clearBtn=document.getElementById('ytcClear');
var resBox=document.getElementById('ytcResults');
var summary=document.getElementById('ytcSummary'), grid=document.getElementById('ytcGrid');
var POWER=['ultimate','best','secret','secrets','proven','easy','fast','free','new','top','how','why','what','guide','tutorial','tips','tricks','hacks','amazing','incredible','shocking','insane','must','beginner','complete','mistakes','avoid','never','always','quick','simple','powerful','essential','honest','real','brutal','exact','step by step'];

titleIn.addEventListener('input', function(){
  var n=titleIn.value.length;
  document.getElementById('ytcCount').textContent=n+(n===1?' character':' characters');
});

function gradeFor(s){
  if(s>=90) return 'A — Excellent';
  if(s>=80) return 'B — Good';
  if(s>=70) return 'C — Fair';
  if(s>=60) return 'D — Needs work';
  return 'F — Poor';
}

function check(){
  var t=titleIn.value.trim();
  if(!t){ ToolPro.toast('Type a title first','err'); return; }
  var kw=kwIn.value.trim().toLowerCase();
  var rows=[], score=100;
  function add(status,label,detail,fix){
    rows.push({status:status,label:label,detail:detail,fix:fix});
  }
  var icon=function(s){ return s==='pass'?'✅':(s==='warn'?'⚠️':'❌'); };

  // Length
  var len=t.length;
  if(len>=50&&len<=60) add('pass','Length','Your title is '+len+' characters — the 50–60 sweet spot.','');
  else if(len>=31&&len<=49){ score-=10; add('warn','Length','Only '+len+' characters — a little short of the 50–60 sweet spot.','Add one strong detail or number to reach ~55 characters.'); }
  else if(len>=61&&len<=70){ score-=10; add('warn','Length',len+' characters — risks truncation in search results.','Trim filler words to land in the 50–60 range.'); }
  else if(len<=30){ score-=20; add('fail','Length','Only '+len+' characters — too short to carry a keyword and a hook.','Expand toward 50–60 characters with a benefit or number.'); }
  else if(len<=100){ score-=15; add('fail','Length',len+' characters — will be cut off in search and suggested feeds.','Cut to 50–60 characters; move extras to the description.'); }
  else { score-=25; add('fail','Length',len+' characters — far too long.','Rewrite under 60 characters.'); }

  // Keyword
  if(!kw){
    add('warn','Keyword','No keyword entered — front-loading your search term matters.','Type your main keyword above; put it in the first 40 characters.');
  } else if(t.toLowerCase().indexOf(kw)===0 || t.toLowerCase().indexOf(kw)<40){
    add('pass','Keyword','"'+kwIn.value.trim()+'" appears near the front — great for search.','');
  } else if(t.toLowerCase().indexOf(kw)>-1){
    score-=10; add('warn','Keyword','Your keyword appears but is buried at character '+(t.toLowerCase().indexOf(kw)+1)+'.','Move "'+kwIn.value.trim()+'" into the first 40 characters.');
  } else {
    score-=20; add('fail','Keyword','"'+kwIn.value.trim()+'" does not appear in the title at all.','Add your exact keyword near the front of the title.');
  }

  // Numbers
  if(/\d/.test(t)) add('pass','Number','Contains a number — numbers lift click-through.','');
  else { score-=5; add('warn','Number','No number — titles with digits get more clicks.','Add a count, year, or timeframe (e.g. "7", "2026", "30 days").'); }

  // Power words
  var tl=' '+t.toLowerCase()+' ';
  var found=POWER.filter(function(w){ return tl.indexOf(w)>-1; });
  if(found.length) add('pass','Power words','Uses "'+found.slice(0,3).join('", "')+'" — emotional hooks that earn clicks.','');
  else { score-=5; add('warn','Power words','No emotional hook words detected.','Add one: best, proven, honest, mistakes, ultimate…'); }

  // Brackets
  if(/[\[\(].*[\]\)]/.test(t)) add('pass','Brackets','Brackets/parentheses add context and lift CTR.','');
  else { score-=3; add('warn','Brackets','No brackets — they frame a bonus detail nicely.','Add a bracketed tag like "(2026)" or "[Honest Review]".'); }

  // Question hook
  if(/\?\s*$/.test(t)){ score=Math.min(100,score+5); add('pass','Question hook','Ends with a question — curiosity drives clicks.',''); }

  // Emoji
  var emoji=/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/u;
  if(emoji.test(t)){ score-=8; add('warn','Emoji','Contains emoji — fine for some niches, but they can truncate in search.','Use at most one, and never as a keyword replacement.'); }
  else add('pass','Emoji','No emoji — clean for search results.','');

  // All caps words
  var caps=(t.match(/\b[A-Z]{3,}\b/g)||[]).filter(function(w){ return w.length>2; });
  if(caps.length){ score-=Math.min(10,caps.length*5); add('warn','ALL CAPS','Shouting words: '+caps.slice(0,4).join(', ')+'.','Use Title Case instead — caps look spammy in search.'); }
  else add('pass','Capitalization','No shouting — professional look.','');

  score=Math.max(0,Math.min(100,Math.round(score)));
  grid.innerHTML='';
  var head=document.createElement('div'); head.className='result-card';
  head.innerHTML='<div class="r-name">Score</div><div class="r-stats" style="font-size:2rem;font-weight:800">'+score+' / 100</div><div class="r-stats">Grade: <b>'+gradeFor(score)+'</b> · '+len+' characters</div>';
  grid.appendChild(head);
  rows.forEach(function(r){
    var c=document.createElement('div'); c.className='result-card';
    var h='<div class="r-name">'+icon(r.status)+' '+r.label+'</div><div class="r-stats">'+r.detail+'</div>';
    if(r.fix) h+='<div class="hint" style="margin-top:6px">💡 Fix: '+r.fix+'</div>';
    c.innerHTML=h; grid.appendChild(c);
  });
  summary.textContent= score>=80 ? '🎉 Strong title — minor tweaks only.' : (score>=60 ? '👍 Decent start — apply the fixes above to lift it.' : '🔧 Needs work — apply the fixes above and re-check.');
  resBox.classList.add('show');
  resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
  ToolPro.toast('Title scored: '+score+'/100','ok');
}

btn.addEventListener('click', check);
titleIn.addEventListener('keydown', function(e){ if(e.key==='Enter') check(); });
clearBtn.addEventListener('click', function(){
  titleIn.value=''; kwIn.value='';
  document.getElementById('ytcCount').textContent='0 characters';
  resBox.classList.remove('show');
});
})();
</script>

## How it works

- **Step 1** — Paste your draft title and (optionally) the main keyword you want to rank for.
- **Step 2** — Hit **Check My Title**. The tool scores length, keyword placement, numbers, power words, brackets, question hooks, emoji, and all-caps usage out of 100.
- **Step 3** — Apply the 💡 fixes shown under each failing check and re-run until you hit a B or better.

## Everyday uses

- **New uploads** — polish the title before you publish, not after the algorithm has moved on.
- **A/B testing** — score two title variants and pick the stronger one.
- **Old videos** — re-score underperforming videos and rewrite their titles.
- **Client work** — justify title choices to clients with a concrete score.
- **Shorts** — keep titles tight enough to survive truncation on mobile.

## Frequently asked questions

**Why 50–60 characters?**
YouTube truncates longer titles in search and suggested feeds — viewers on phones see even less. 50–60 characters fits a keyword plus a hook without being cut off.

**Does the keyword really need to be at the front?**
Front-loading helps YouTube's search match your video to the query faster. Viewers also scan the first words of a title before deciding to click.

**Are emoji bad for titles?**
Not always — they work in entertainment and lifestyle niches. But they can truncate in search and look spammy in educational content, which is why the checker flags them.

**Is my title data sent anywhere?**
No. The analysis runs entirely in your browser — your titles never leave your device.

[escaped: END EXTERNAL CONTENT]
