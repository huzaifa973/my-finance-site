---
title: "Free MD5 & SHA-256 Hash Generator — Hash Text and Files Online"
description: "Generate MD5 and SHA-256 hashes from text or files instantly in your browser. Free, no sign-up — verify file integrity with checksum comparison."
date: 2026-10-07
draft: false
---

Generate MD5 and SHA-256 hashes from any text — or hash a file right on your device to verify its integrity. Everything runs locally in your browser: your files never leave your browser, nothing is uploaded, nothing is stored.

<div class="tool-shell" id="hashShell" data-theme="light">

  <div class="tool-hero">
    <div class="tool-icon">
      <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
    </div>
    <div class="tool-hero-top">
      <div>
        <h2>Hash Generator</h2>
        <p>Generate MD5 &amp; SHA-256 hashes from text or files — and verify checksums instantly.</p>
      </div>
      <button type="button" class="theme-toggle" id="hashTheme">🌙 Dark</button>
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
      <p class="tool-step-title"><span class="tool-step-num">1</span> Text or file to hash</p>
      <div class="setting">
        <label for="hashText">Text to hash</label>
        <textarea id="hashText" class="tool-output" rows="4" placeholder="Type or paste text here…" style="min-height:110px"></textarea>
      </div>
      <div class="setting" style="margin-top:.8rem">
        <label>…or hash a file instead (stays on your device)</label>
        <div class="dropzone" id="hashDrop" style="margin-top:.4rem">
          <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
          <strong>Drag &amp; drop a file here</strong>
          <span>or click to browse — any file type, hashed locally</span>
          <input type="file" id="hashFile">
        </div>
        <ul class="file-list" id="hashList"></ul>
        <div class="hint">If a file is chosen, the file is hashed (text is ignored).</div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">2</span> Options</p>
      <div class="settings-panel">
        <div class="preset-row" id="hashPresets">
          <button type="button" class="preset-chip" data-s="The quick brown fox jumps over the lazy dog">📝 Sample text</button>
          <button type="button" class="preset-chip" data-s="hello world">👋 hello world</button>
        </div>
        <div class="settings-grid">
          <div class="setting">
            <label for="hashExpected"><strong>Verify integrity:</strong> paste the expected hash to compare</label>
            <input type="text" id="hashExpected" class="tool-input" placeholder="Paste the checksum you were given…" style="font-family:ui-monospace,monospace">
            <div class="hint">If it matches either the MD5 or SHA-256 output, your data is intact.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">3</span> Generate</p>
      <div class="tool-actions">
        <button type="button" class="btn-pro" id="hashBtn">
          <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
          Generate hashes
        </button>
        <button type="button" class="btn-pro-outline" id="hashClearBtn">Clear</button>
      </div>
      <div class="results" id="hashResults">
        <p class="result-head">🔐 Your hashes</p>
        <div class="result-grid">
          <div class="result-card">
            <div class="r-name">MD5 (128-bit)</div>
            <div class="r-stats"><code id="hashMd5" style="word-break:break-all;font-size:.8rem">—</code></div>
            <button type="button" class="btn-pro-outline" id="hashCopyMd5" style="font-size:.85rem;padding:.4rem .9rem">Copy MD5</button>
          </div>
          <div class="result-card">
            <div class="r-name">SHA-256 (256-bit)</div>
            <div class="r-stats"><code id="hashSha" style="word-break:break-all;font-size:.8rem">—</code></div>
            <button type="button" class="btn-pro-outline" id="hashCopySha" style="font-size:.85rem;padding:.4rem .9rem">Copy SHA-256</button>
          </div>
        </div>
        <div class="result-summary" id="hashMatch" style="display:none;margin-top:1rem"></div>
      </div>
    </div>

    <div class="free-banner">
      <strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
      <p>Hash as much text and as many files as you like — nothing ever leaves your device.</p>
    </div>

  </div>
</div>

<script>
(function(){
  var shell = document.getElementById('hashShell');
  ToolPro.themeToggle(shell, document.getElementById('hashTheme'));

  /* MD5 (RFC 1321) and SHA-256 (FIPS 180-4), pure JS — no network, no crypto API needed. */
  function md5Hash(data){
    var s=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
           5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
           4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
           6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
    var K=[];for(var i=0;i<64;i++)K[i]=Math.floor(Math.abs(Math.sin(i+1))*4294967296)>>>0;
    var ml=data.length,bitLen=ml*8;
    var total=ml+1+((64-((ml+1+8)%64))%64)+8;
    var msg=new Uint8Array(total);msg.set(data);msg[ml]=0x80;
    var lo=bitLen>>>0,hi=Math.floor(bitLen/4294967296);
    msg[total-8]=lo&0xff;msg[total-7]=(lo>>>8)&0xff;msg[total-6]=(lo>>>16)&0xff;msg[total-5]=(lo>>>24)&0xff;
    msg[total-4]=hi&0xff;msg[total-3]=(hi>>>8)&0xff;msg[total-2]=(hi>>>16)&0xff;msg[total-1]=(hi>>>24)&0xff;
    function add(x,y){var l=(x&0xffff)+(y&0xffff);return(((x>>>16)+(y>>>16)+(l>>>16))<<16)|(l&0xffff);}
    function rotl(x,c){return(x<<c)|(x>>>(32-c));}
    var a0=0x67452301,b0=0xefcdab89,c0=0x98badcfe,d0=0x10325476;
    for(var off=0;off<total;off+=64){
      var M=[];for(var j=0;j<16;j++)M[j]=msg[off+j*4]|(msg[off+j*4+1]<<8)|(msg[off+j*4+2]<<16)|(msg[off+j*4+3]<<24);
      var A=a0,B=b0,C=c0,D=d0;
      for(var k=0;k<64;k++){
        var F,g;
        if(k<16){F=(B&C)|((~B)&D);g=k;}
        else if(k<32){F=(D&B)|((~D)&C);g=(5*k+1)%16;}
        else if(k<48){F=B^C^D;g=(3*k+5)%16;}
        else{F=C^(B|(~D));g=(7*k)%16;}
        F=add(add(add(F,A),K[k]),M[g]);
        A=D;D=C;C=B;B=add(B,rotl(F,s[k]));
      }
      a0=add(a0,A);b0=add(b0,B);c0=add(c0,C);d0=add(d0,D);
    }
    function hex(n){var h="";for(var i=0;i<4;i++)h+=("0"+((n>>>(i*8))&0xff).toString(16)).slice(-2);return h;}
    return hex(a0)+hex(b0)+hex(c0)+hex(d0);
  }
  function sha256Hash(data){
    var K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    var H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    var ml=data.length,bitLen=ml*8;
    var total=Math.ceil((ml+1+8)/64)*64;
    var msg=new Uint8Array(total);msg.set(data);msg[ml]=0x80;
    var hi=Math.floor(bitLen/4294967296),lo=bitLen>>>0;
    msg[total-8]=(hi>>>24)&0xff;msg[total-7]=(hi>>>16)&0xff;msg[total-6]=(hi>>>8)&0xff;msg[total-5]=hi&0xff;
    msg[total-4]=(lo>>>24)&0xff;msg[total-3]=(lo>>>16)&0xff;msg[total-2]=(lo>>>8)&0xff;msg[total-1]=lo&0xff;
    function rotr(x,n){return(x>>>n)|(x<<(32-n));}
    for(var off=0;off<total;off+=64){
      var w=new Array(64),i;
      for(i=0;i<16;i++)w[i]=((msg[off+i*4]<<24)|(msg[off+i*4+1]<<16)|(msg[off+i*4+2]<<8)|msg[off+i*4+3])|0;
      for(i=16;i<64;i++){
        var s0=rotr(w[i-15],7)^rotr(w[i-15],18)^(w[i-15]>>>3);
        var s1=rotr(w[i-2],17)^rotr(w[i-2],19)^(w[i-2]>>>10);
        w[i]=(w[i-16]+s0+w[i-7]+s1)|0;
      }
      var a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7];
      for(i=0;i<64;i++){
        var S1=rotr(e,6)^rotr(e,11)^rotr(e,25);
        var ch=(e&f)^((~e)&g);
        var t1=(h+S1+ch+K[i]+w[i])|0;
        var S0=rotr(a,2)^rotr(a,13)^rotr(a,22);
        var maj=(a&b)^(a&c)^(b&c);
        var t2=(S0+maj)|0;
        h=g;g=f;f=e;e=(d+t1)|0;d=c;c=b;b=a;a=(t1+t2)|0;
      }
      H[0]=(H[0]+a)|0;H[1]=(H[1]+b)|0;H[2]=(H[2]+c)|0;H[3]=(H[3]+d)|0;
      H[4]=(H[4]+e)|0;H[5]=(H[5]+f)|0;H[6]=(H[6]+g)|0;H[7]=(H[7]+h)|0;
    }
    var out="";for(var q=0;q<8;q++)out+=("00000000"+(H[q]>>>0).toString(16)).slice(-8);
    return out;
  }

  var resBox = document.getElementById('hashResults');
  var matchBox = document.getElementById('hashMatch');
  var listEl = document.getElementById('hashList');
  var currentFile = null;

  function hashShow(md5, sha){
    document.getElementById('hashMd5').textContent = md5;
    document.getElementById('hashSha').textContent = sha;
    resBox.classList.add('show');
    hashCheck();
  }
  function hashRun(){
    var f = currentFile;
    if(f){
      document.getElementById('hashMd5').textContent = 'hashing…';
      document.getElementById('hashSha').textContent = 'hashing…';
      resBox.classList.add('show');
      var r = new FileReader();
      r.onload = function(){ var d = new Uint8Array(r.result); hashShow(md5Hash(d), sha256Hash(d)); };
      r.readAsArrayBuffer(f);
    } else {
      var t = document.getElementById('hashText').value;
      if(!t){
        document.getElementById('hashMd5').textContent = '—';
        document.getElementById('hashSha').textContent = '—';
        hashCheck();
        return;
      }
      var d2 = new TextEncoder().encode(t);
      hashShow(md5Hash(d2), sha256Hash(d2));
    }
  }
  function hashClear(){
    document.getElementById('hashText').value = '';
    currentFile = null;
    listEl.innerHTML = '';
    document.getElementById('hashExpected').value = '';
    document.getElementById('hashMd5').textContent = '—';
    document.getElementById('hashSha').textContent = '—';
    matchBox.style.display = 'none';
    matchBox.textContent = '';
    resBox.classList.remove('show');
  }
  function hashCopy(id, label){
    var v = document.getElementById(id).textContent;
    if(!v || v === '—' || v === 'hashing…') return;
    ToolPro.copyText(v, label + ' copied');
  }
  function hashCheck(){
    var exp = document.getElementById('hashExpected').value.trim().toLowerCase();
    if(!exp){ matchBox.style.display = 'none'; matchBox.textContent = ''; return; }
    var md5 = document.getElementById('hashMd5').textContent.toLowerCase();
    var sha = document.getElementById('hashSha').textContent.toLowerCase();
    if(md5 === '—' || sha === '—' || md5 === 'hashing…'){ matchBox.style.display = 'none'; return; }
    matchBox.style.display = 'block';
    if(exp === md5 || exp === sha){
      matchBox.innerHTML = '✅ <strong>Match</strong> — the data is intact.';
    } else {
      matchBox.innerHTML = '❌ <strong>No match</strong> — the data differs from the expected hash.';
    }
    resBox.classList.add('show');
  }

  ToolPro.dropzone(document.getElementById('hashDrop'), {
    multiple: false,
    onFiles: function(arr){
      currentFile = arr[0];
      listEl.innerHTML = '';
      document.getElementById('hashText').value = '';
      ToolPro.fileRow(listEl, currentFile, function(){
        currentFile = null;
        document.getElementById('hashMd5').textContent = '—';
        document.getElementById('hashSha').textContent = '—';
        hashCheck();
      });
      ToolPro.toast('File added — hashing…');
      hashRun();
    }
  });

  document.getElementById('hashPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('hashText').value = chip.dataset.s;
    hashRun();
  });
  document.getElementById('hashBtn').addEventListener('click', hashRun);
  document.getElementById('hashClearBtn').addEventListener('click', hashClear);
  document.getElementById('hashCopyMd5').addEventListener('click', function(){ hashCopy('hashMd5', 'MD5'); });
  document.getElementById('hashCopySha').addEventListener('click', function(){ hashCopy('hashSha', 'SHA-256'); });
  document.getElementById('hashExpected').addEventListener('input', hashCheck);
  document.getElementById('hashText').addEventListener('input', function(){
    if(currentFile){ currentFile = null; listEl.innerHTML = ''; }
  });
})();
</script>

## Everyday uses

**Verify downloads.** Software sites publish a checksum (often SHA-256) next to the download button. Hash the file you downloaded and compare — if the hashes match, your copy is byte-for-byte identical to the publisher's, with no corruption or tampering.

**Check file copies and backups.** Hash a file before and after moving it, or hash two copies of an archive — matching hashes prove the transfer was lossless.

**Deduplicate files.** Two files with the same SHA-256 hash have identical contents (for all practical purposes). Hash your downloads folder to find exact duplicates and reclaim disk space.

**Gravatar and identifiers.** MD5 hashes of lowercased email addresses are how services like Gravatar identify users without storing the email itself. Developers use the MD5 tab to generate those quickly.

**A word of caution:** MD5 is broken for security purposes — researchers can craft two different files with the same MD5 hash (a *collision*). It's fine for checksums and casual integrity checks, but never use it to protect passwords or prove authenticity. Use SHA-256 (or SHA-512) wherever security matters.

Your files never leave your browser — hashing happens entirely on your device, which is exactly why it's safe to verify sensitive documents here.

Want to know what a hash actually is? Read our guide: [What Is an MD5 Hash? How to Generate and Verify File Hashes](/posts/what-is-an-md5-hash-how-to-generate-and-verify-file-hashes/).
