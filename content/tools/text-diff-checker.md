---
title: "Free Text Diff Checker — Compare Two Texts Online"
description: "Compare two texts and see every difference highlighted, line by line and word by word. Free, no sign-up — runs entirely in your browser."
date: 2026-10-07
draft: false
---

Paste two versions of a text side by side and see exactly what changed — added, removed, and edited words are highlighted line by line. Perfect for proofreading revisions, reviewing contract changes, or checking code edits. Everything runs in your browser; nothing you paste is uploaded anywhere.

## How it works

<div class="calc">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem;">
    <div>
      <label for="diffA">Original text</label>
      <textarea id="diffA" rows="8" placeholder="Paste the original version…" style="width:100%;padding:.6rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;"></textarea>
    </div>
    <div>
      <label for="diffB">New text</label>
      <textarea id="diffB" rows="8" placeholder="Paste the revised version…" style="width:100%;padding:.6rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;"></textarea>
    </div>
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;align-items:center;">
    <button type="button" onclick="diffRun()">Compare texts</button>
    <button type="button" onclick="diffSwap()" style="background:#4f46e5;">Swap sides</button>
    <button type="button" onclick="diffClear()" style="background:#6b7280;">Clear</button>
    <label style="font-size:.9rem;margin-left:auto;"><input type="checkbox" id="diffIgnoreCase"> Ignore case</label>
    <label style="font-size:.9rem;"><input type="checkbox" id="diffIgnoreWs"> Ignore whitespace</label>
  </div>
  <p id="diffStats" style="font-size:.9rem;color:var(--muted);margin:.6rem 0 0;"></p>
  <div id="diffOut" style="margin-top:.6rem;border:1px solid var(--border);border-radius:6px;padding:.8rem;font-size:.95rem;line-height:1.7;background:#fff;min-height:3rem;"></div>
  <div style="margin-top:.4rem;font-size:.85rem;color:var(--muted);">
    <span style="background:#fee2e2;padding:.1rem .4rem;border-radius:4px;">removed</span>
    <span style="background:#dcfce7;padding:.1rem .4rem;border-radius:4px;margin-left:.5rem;">added</span>
  </div>
</div>

<script>
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
function diffRun(){
  diffRender(document.getElementById('diffA').value,document.getElementById('diffB').value,
    document.getElementById('diffIgnoreCase').checked,document.getElementById('diffIgnoreWs').checked,
    document.getElementById('diffOut'),document.getElementById('diffStats'));
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
function diffSwap(){
  var a=document.getElementById('diffA'),b=document.getElementById('diffB');
  var t=a.value;a.value=b.value;b.value=t;diffRender(a.value,b.value,
    document.getElementById('diffIgnoreCase').checked,document.getElementById('diffIgnoreWs').checked,
    document.getElementById('diffOut'),document.getElementById('diffStats'));
}
function diffClear(){
  document.getElementById('diffA').value='';document.getElementById('diffB').value='';
  document.getElementById('diffOut').innerHTML='<span style="color:var(--muted)">Paste text on both sides, then compare.</span>';
  document.getElementById('diffStats').textContent='';
}
['diffA','diffB'].forEach(function(id){
  document.getElementById(id).addEventListener('input',function(){
    diffRender(document.getElementById('diffA').value,document.getElementById('diffB').value,
      document.getElementById('diffIgnoreCase').checked,document.getElementById('diffIgnoreWs').checked,
      document.getElementById('diffOut'),document.getElementById('diffStats'));
  });
});
</script>

## Everyday uses

**Proofread revisions.** Paste the old draft and the new draft of an essay, report, or article. Every edit lights up instantly — no more squinting at two tabs.

**Review contracts and terms.** When a vendor sends "updated terms," compare the old version with the new one to catch quietly added clauses before you sign.

**Check code changes.** Paste two versions of a snippet to spot exactly which lines changed — handy when a teammate says "I only changed one thing."

**Spot plagiarism or edits.** Teachers and editors compare submissions against originals; the word-level highlighting shows paraphrasing, not just whole-line changes.

**Sync translations.** Translators compare source and revised paragraphs to confirm every edit was carried over consistently.

This is the same idea behind "track changes" in Word and the red/green diffs on GitHub — just without any software to install. Learn the technique properly in our guide: [How to Compare Two Texts and Find Differences Online](/posts/how-to-compare-two-texts-and-find-differences-online/).
