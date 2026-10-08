---
title: "Free Text Diff Checker — Compare Two Texts Online"
description: "Compare two texts and see every difference highlighted, line by line and word by word. Free, no sign-up — runs entirely in your browser."
date: 2026-10-07
draft: false
---

Paste two versions of a text side by side and see exactly what changed — added, removed, and edited words are highlighted line by line. Perfect for proofreading revisions, reviewing contract changes, or checking code edits. Everything runs in your browser; nothing you paste is uploaded anywhere.

## How it works

<div class="tool-shell" id="diffShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22v-2h-7.01V5L11 9l3.99 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Text Diff Checker</h2>
<p>Compare two texts side by side and see every change highlighted, line by line and word by word.</p>
</div>
<button type="button" class="theme-toggle" id="diffTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste both versions</p>
<div class="settings-grid">
<div class="setting">
<label for="diffA">Original text</label>
<textarea id="diffA" class="tool-input" rows="8" placeholder="Paste the original version…"></textarea>
</div>
<div class="setting">
<label for="diffB">New text</label>
<textarea id="diffB" class="tool-input" rows="8" placeholder="Paste the revised version…"></textarea>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compare options</p>
<div class="settings-panel">
<div class="preset-row" id="diffOpts">
<button type="button" class="preset-chip" id="diffChipCase">🔠 Ignore case</button>
<button type="button" class="preset-chip" id="diffChipWs">␣ Ignore whitespace</button>
<button type="button" class="preset-chip active" id="diffChipLive">⚡ Live compare</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="diffFontRange">Output text size: <span class="val" id="diffFontVal">15px</span></label>
<input type="range" id="diffFontRange" min="12" max="20" step="1" value="15">
<div class="hint">Bump the size up when reviewing long documents.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compare &amp; review changes</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="diffBtn">
<svg viewBox="0 0 24 24"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22v-2h-7.01V5L11 9l3.99 4z"/></svg>
Compare texts
</button>
<button type="button" class="btn-pro-outline" id="diffSwapBtn">Swap sides</button>
<button type="button" class="btn-pro-outline" id="diffClearBtn">Clear</button>
</div>
<p id="diffStats" style="font-size:.9rem;color:var(--muted);margin:.6rem 0 0;"></p>
<div class="results show">
<p class="result-head">🔍 Differences</p>
<div class="result-summary" id="diffOut" style="font-size:15px;line-height:1.7;min-height:3rem;"><span style="color:var(--muted)">Paste text on both sides, then compare.</span></div>
</div>
<div style="margin-top:.4rem;font-size:.85rem;color:var(--muted);">
<span style="background:#fee2e2;padding:.1rem .4rem;border-radius:4px;">removed</span>
<span style="background:#dcfce7;padding:.1rem .4rem;border-radius:4px;margin-left:.5rem;">added</span>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compare as many texts as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('diffShell');
  ToolPro.themeToggle(shell, document.getElementById('diffTheme'));

  var chipCase = document.getElementById('diffChipCase');
  var chipWs = document.getElementById('diffChipWs');
  var chipLive = document.getElementById('diffChipLive');
  var out = document.getElementById('diffOut');
  var stats = document.getElementById('diffStats');

  function opts(){
    return {
      ic: chipCase.classList.contains('active'),
      iw: chipWs.classList.contains('active'),
      live: chipLive.classList.contains('active')
    };
  }

  document.getElementById('diffOpts').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chip.classList.toggle('active');
    diffRender(document.getElementById('diffA').value, document.getElementById('diffB').value,
      chipCase.classList.contains('active'), chipWs.classList.contains('active'), out, stats);
  });

  var fontRange = document.getElementById('diffFontRange');
  var fontVal = document.getElementById('diffFontVal');
  ToolPro.bindSlider(fontRange, fontVal, function(v){ return v + 'px'; });
  fontRange.addEventListener('input', function(){ out.style.fontSize = fontRange.value + 'px'; });

  function diffEsc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function diffLcs(A,B){
    var n=A.length,m=B.length,dp=[],i,j;
    for(i=0;i<=n;i++){dp.push(new Array(m+1).fill(0));}
    for(i=n-1;i>=0;i--)for(j=m-1;j>=0;j--)dp[i][j]=(A[i]===B[j])?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
    var ops=[];i=0;j=0;
    while(i<n&&j<m){
      if(A[i]===B[j]){ops.push(['=',A[i]]);i++;j++;}
      else if(dp[i+1][j]>=dp[i][j+1]){ops.push(['-',A[i]]);i++;}
      else{ops.push(['+',B[j]]);j++;}
    }
    while(i<n){ops.push(['-',A[i]]);i++;}
    while(j<m){ops.push(['+',B[j]]);j++;}
    return ops;
  }
  function diffNorm(s,ic,iw){
    if(ic)s=s.toLowerCase();
    if(iw)s=s.replace(/[ \t]+/g,' ');
    return s;
  }
  function diffWordsHTML(a,b,ic,iw){
    var ta=a.split(/(\s+)/),tb=b.split(/(\s+)/),ops=diffLcs(ta,tb),del=[],add=[],out=[],i;
    function flush(){
      if(!del.length&&!add.length)return;
      out.push('<span style="background:#fee2e2;text-decoration:line-through;">'+diffEsc(del.join(''))+'</span>');
      out.push('<span style="background:#dcfce7;">'+diffEsc(add.join(''))+'</span>');
      del=[];add=[];
    }
    for(i=0;i<ops.length;i++){
      if(ops[i][0]==='='){flush();out.push(diffEsc(ops[i][1]));}
      else if(ops[i][0]==='-')del.push(ops[i][1]);
      else add.push(ops[i][1]);
    }
    flush();
    return out.join('');
  }
  /* Render directly from line ops with index pointers. */
  function diffRender(a,b,ic,iw,out,stats){
    var la=a.split('\n'),lb=b.split('\n');
    var ka=la.map(function(s){return diffNorm(s,ic,iw);});
    var kb=lb.map(function(s){return diffNorm(s,ic,iw);});
    var ops=diffLcs(ka,kb),i=0,ia=0,ib=0,html=[],nDel=0,nAdd=0,nSame=0;
    while(i<ops.length){
      if(ops[i][0]==='='){nSame++;html.push('<div>'+diffEsc(la[ia])+'</div>');ia++;ib++;i++;continue;}
      var d0=ia,a0=ib;
      while(i<ops.length&&ops[i][0]==='-'){nDel++;ia++;i++;}
      while(i<ops.length&&ops[i][0]==='+'){nAdd++;ib++;i++;}
      var del=la.slice(d0,ia),add=lb.slice(a0,ib),k=Math.min(del.length,add.length),p;
      for(p=0;p<k;p++)
        html.push('<div style="background:#fff7ed;border-left:3px solid #f59e0b;padding:.15rem .5rem;margin:.1rem 0;">'+diffWordsHTML(del[p],add[p],ic,iw)+'</div>');
      for(p=k;p<del.length;p++)
        html.push('<div style="background:#fef2f2;padding:.15rem .5rem;margin:.1rem 0;"><span style="background:#fee2e2;">'+diffEsc(del[p])+'</span></div>');
      for(p=k;p<add.length;p++)
        html.push('<div style="background:#f0fdf4;padding:.15rem .5rem;margin:.1rem 0;"><span style="background:#dcfce7;">'+diffEsc(add[p])+'</span></div>');
    }
    out.innerHTML=html.join('')||'<span style="color:var(--muted)">No differences found.</span>';
    stats.textContent=nSame+' unchanged line'+(nSame===1?'':'s')+' · '+nDel+' removed · '+nAdd+' added';
  }
  function diffRun(){
    var o = opts();
    diffRender(document.getElementById('diffA').value, document.getElementById('diffB').value,
      o.ic, o.iw, out, stats);
    ToolPro.toast('Comparison updated', 'ok');
  }
  function diffSwap(){
    var a=document.getElementById('diffA'),b=document.getElementById('diffB');
    var t=a.value;a.value=b.value;b.value=t;
    var o = opts();
    diffRender(a.value,b.value,o.ic,o.iw,out,stats);
    ToolPro.toast('Sides swapped');
  }
  function diffClear(){
    document.getElementById('diffA').value='';document.getElementById('diffB').value='';
    out.innerHTML='<span style="color:var(--muted)">Paste text on both sides, then compare.</span>';
    stats.textContent='';
    ToolPro.toast('Cleared');
  }

  document.getElementById('diffBtn').addEventListener('click', diffRun);
  document.getElementById('diffSwapBtn').addEventListener('click', diffSwap);
  document.getElementById('diffClearBtn').addEventListener('click', diffClear);
  ['diffA','diffB'].forEach(function(id){
    document.getElementById(id).addEventListener('input',function(){
      if(!opts().live) return;
      var o = opts();
      diffRender(document.getElementById('diffA').value,document.getElementById('diffB').value,
        o.ic,o.iw,out,stats);
    });
  });
})();
</script>

## Everyday uses

**Proofread revisions.** Paste the old draft and the new draft of an essay, report, or article. Every edit lights up instantly — no more squinting at two tabs.

**Review contracts and terms.** When a vendor sends "updated terms," compare the old version with the new one to catch quietly added clauses before you sign.

**Check code changes.** Paste two versions of a snippet to spot exactly which lines changed — handy when a teammate says "I only changed one thing."

**Spot plagiarism or edits.** Teachers and editors compare submissions against originals; the word-level highlighting shows paraphrasing, not just whole-line changes.

**Sync translations.** Translators compare source and revised paragraphs to confirm every edit was carried over consistently.

This is the same idea behind "track changes" in Word and the red/green diffs on GitHub — just without any software to install. Learn the technique properly in our guide: [How to Compare Two Texts and Find Differences Online](/posts/how-to-compare-two-texts-and-find-differences-online/).
