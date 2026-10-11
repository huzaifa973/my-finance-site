---
title: "Free Invoice Generator — Create & Download Invoices"
description: "Create professional invoices in your browser: line items, tax & discounts, live preview, then download or print. USD default. Free forever, no sign-up."
category: finance
date: 2026-10-11
draft: false
---

Bill clients like a pro without paying for invoicing software. Fill in your business and client details, add line items with quantities and rates, set tax and discounts, and watch a polished invoice preview update live. Download it as a standalone HTML file or print it straight to PDF — all free, all in your browser, nothing uploaded anywhere.

<style>
@media print{
body *{visibility:hidden !important;}
#invPreviewWrap,#invPreviewWrap *{visibility:visible !important;}
#invPreviewWrap{position:absolute;top:0;left:0;width:100%;margin:0;}
}
.inv-doc{font-family:Georgia,'Times New Roman',serif;color:#1e293b;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;max-width:760px;margin:0 auto;}
.inv-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;}
.inv-title{font-size:2rem;font-weight:800;letter-spacing:2px;color:#0f172a;}
.inv-meta{text-align:right;font-size:.9rem;color:#475569;line-height:1.7;}
.inv-parties{display:flex;gap:24px;flex-wrap:wrap;margin:24px 0;}
.inv-party{flex:1;min-width:220px;}
.inv-party h4{margin:0 0 6px;font-size:.8rem;letter-spacing:1px;text-transform:uppercase;color:#64748b;}
.inv-party div{font-size:.95rem;line-height:1.6;}
.inv-table{width:100%;border-collapse:collapse;margin:16px 0;font-size:.95rem;}
.inv-table th{background:#0f172a;color:#fff;text-align:left;padding:10px 8px;font-size:.8rem;letter-spacing:.5px;text-transform:uppercase;}
.inv-table th.num,.inv-table td.num{text-align:right;}
.inv-table td{padding:10px 8px;border-bottom:1px solid #e2e8f0;}
.inv-totals{margin-left:auto;width:280px;max-width:100%;font-size:.95rem;}
.inv-totals .row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f1f5f9;}
.inv-totals .grand{font-size:1.25rem;font-weight:800;color:#0f172a;border-bottom:none;padding-top:10px;}
.inv-notes{margin-top:24px;font-size:.85rem;color:#475569;border-top:1px dashed #cbd5e1;padding-top:12px;white-space:pre-wrap;}
</style>

<div class="tool-shell" id="invShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Invoice Generator</h2>
<p>Professional invoices with live preview — download or print in one click.</p>
</div>
<button type="button" class="theme-toggle" id="invTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your business details</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><label for="invBiz">Business name</label><input type="text" id="invBiz" class="tool-input" placeholder="e.g. Acme Design Studio"></div>
<div class="setting"><label for="invBizEmail">Email</label><input type="email" id="invBizEmail" class="tool-input" placeholder="you@business.com"></div>
<div class="setting"><label for="invBizPhone">Phone</label><input type="text" id="invBizPhone" class="tool-input" placeholder="(555) 123-4567"></div>
<div class="setting"><label for="invBizAddr">Address</label><textarea id="invBizAddr" class="tool-input" rows="2" placeholder="Street, City, State ZIP"></textarea></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Client details</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><label for="invClient">Bill to (client name)</label><input type="text" id="invClient" class="tool-input" placeholder="e.g. Jane Smith"></div>
<div class="setting"><label for="invClientAddr">Client address</label><textarea id="invClientAddr" class="tool-input" rows="2" placeholder="Street, City, State ZIP"></textarea></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Line items</p>
<div class="settings-panel">
<div id="invItems"></div>
<button type="button" class="btn-pro-outline" id="invAddItem">＋ Add line item</button>
<div class="hint">Tip: itemize clearly — "Logo design (3 concepts)" gets paid faster than "Design work".</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">4</span> Invoice settings</p>
<div class="settings-panel">
<div class="preset-row" id="invPresets">
<button type="button" class="preset-chip" data-tax="0" data-cur="USD">🧾 No tax</button>
<button type="button" class="preset-chip active" data-tax="8.5" data-cur="USD">🇺🇸 US sales tax ~8.5%</button>
<button type="button" class="preset-chip" data-tax="20" data-cur="GBP">🇬🇧 UK VAT 20%</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="invNum">Invoice number</label><input type="text" id="invNum" class="tool-input"></div>
<div class="setting"><label for="invDate">Invoice date</label><input type="date" id="invDate" class="tool-input"></div>
<div class="setting"><label for="invDue">Due date</label><input type="date" id="invDue" class="tool-input"></div>
<div class="setting"><label for="invCur">Currency</label><select id="invCur" class="tool-input"><option value="USD" selected>USD — US Dollar ($)</option><option value="EUR">EUR — Euro (€)</option><option value="GBP">GBP — British Pound (£)</option><option value="CAD">CAD — Canadian Dollar</option><option value="AUD">AUD — Australian Dollar</option><option value="INR">INR — Indian Rupee</option><option value="PKR">PKR — Pakistani Rupee</option></select></div>
<div class="setting"><label for="invTax">Tax rate (%)</label><input type="number" id="invTax" class="tool-input" min="0" max="50" step="0.1" value="8.5"><div class="hint">US sales tax varies by state/city — check your local rate; this is an estimate, not tax advice.</div></div>
<div class="setting"><label for="invDisc">Discount (amount)</label><input type="number" id="invDisc" class="tool-input" min="0" step="0.01" value="0"></div>
<div class="setting"><label for="invNotes">Notes / payment terms</label><textarea id="invNotes" class="tool-input" rows="2" placeholder="e.g. Payment due within 14 days. Thank you for your business!">Payment due within 14 days. Thank you for your business!</textarea></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">5</span> Preview, download &amp; print</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="invDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download Invoice (HTML)
</button>
<button type="button" class="btn-pro-outline" id="invPrint">🖨 Print / Save PDF</button>
</div>
<div class="results show">
<p class="result-head">👁 Live preview</p>
<div id="invPreviewWrap"><div class="inv-doc" id="invPreview"></div></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Create unlimited invoices for unlimited clients — right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('invShell');
ToolPro.themeToggle(shell, document.getElementById('invTheme'));

function $(id){ return document.getElementById(id); }
var biz = $('invBiz'), bizEmail = $('invBizEmail'), bizPhone = $('invBizPhone'), bizAddr = $('invBizAddr');
var client = $('invClient'), clientAddr = $('invClientAddr');
var numEl = $('invNum'), dateEl = $('invDate'), dueEl = $('invDue');
var curEl = $('invCur'), taxEl = $('invTax'), discEl = $('invDisc'), notesEl = $('invNotes');
var itemsBox = $('invItems'), preview = $('invPreview');
var presets = $('invPresets');

var today = new Date();
function iso(d){ return d.toISOString().slice(0, 10); }
numEl.value = 'INV-' + today.getFullYear() + String(today.getMonth() + 1).padStart(2, '0') + String(today.getDate()).padStart(2, '0') + '-' + Math.floor(100 + Math.random() * 900);
dateEl.value = iso(today);
var due = new Date(today.getTime() + 14 * 86400000);
dueEl.value = iso(due);

function esc(s){
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function money(v){
  var cur = curEl.value || 'USD';
  try{ return new Intl.NumberFormat('en-US', {style: 'currency', currency: cur}).format(v); }
  catch(e){ return v.toFixed(2); }
}

function addItem(desc, qty, rate){
  var row = document.createElement('div');
  row.className = 'inv-item';
  row.style.cssText = 'display:grid;grid-template-columns:1fr 80px 110px 110px 40px;gap:8px;margin:8px 0;align-items:end;';
  row.innerHTML =
    '<div class="setting"><label>Description</label><input type="text" class="tool-input ii-desc" placeholder="e.g. Logo design"></div>' +
    '<div class="setting"><label>Qty</label><input type="number" class="tool-input ii-qty" min="0" step="1" value="1"></div>' +
    '<div class="setting"><label>Rate</label><input type="number" class="tool-input ii-rate" min="0" step="0.01" value="50"></div>' +
    '<div class="setting"><label>Amount</label><input type="text" class="tool-input ii-amt" readonly tabindex="-1"></div>' +
    '<button type="button" class="btn-pro-outline ii-del" title="Remove item" style="padding:8px;">✕</button>';
  var d = row.querySelector('.ii-desc'), q = row.querySelector('.ii-qty'), r = row.querySelector('.ii-rate');
  d.value = desc || ''; if(qty != null) q.value = qty; if(rate != null) r.value = rate;
  [d, q, r].forEach(function(el){ el.addEventListener('input', update); });
  row.querySelector('.ii-del').addEventListener('click', function(){ row.remove(); update(); });
  itemsBox.appendChild(row);
  update();
  return row;
}

function getItems(){
  var arr = [];
  Array.prototype.forEach.call(itemsBox.querySelectorAll('.inv-item'), function(row){
    arr.push({
      desc: row.querySelector('.ii-desc').value.trim(),
      qty: parseFloat(row.querySelector('.ii-qty').value) || 0,
      rate: parseFloat(row.querySelector('.ii-rate').value) || 0
    });
  });
  return arr;
}

function totals(){
  var items = getItems();
  var sub = items.reduce(function(s, it){ return s + it.qty * it.rate; }, 0);
  var taxPct = parseFloat(taxEl.value) || 0;
  var tax = sub * taxPct / 100;
  var disc = parseFloat(discEl.value) || 0;
  var total = Math.max(0, sub + tax - disc);
  return {items: items, sub: sub, taxPct: taxPct, tax: tax, disc: disc, total: total};
}

function update(){
  var t = totals();
  Array.prototype.forEach.call(itemsBox.querySelectorAll('.inv-item'), function(row, i){
    var it = t.items[i];
    row.querySelector('.ii-amt').value = money(it.qty * it.rate);
  });

  var bizLines = [biz.value, bizAddr.value, bizEmail.value, bizPhone.value].filter(Boolean);
  var clLines = [client.value, clientAddr.value].filter(Boolean);

  var rowsHtml = t.items.map(function(it){
    return '<tr><td>' + (esc(it.desc) || '—') + '</td>' +
      '<td class="num">' + it.qty + '</td>' +
      '<td class="num">' + money(it.rate) + '</td>' +
      '<td class="num">' + money(it.qty * it.rate) + '</td></tr>';
  }).join('');

  preview.innerHTML =
    '<div class="inv-head"><div><div class="inv-title">INVOICE</div>' +
    '<div style="font-weight:700;font-size:1.1rem;margin-top:6px;">' + esc(biz.value || 'Your Business') + '</div></div>' +
    '<div class="inv-meta"><div><b>Invoice #</b> ' + esc(numEl.value) + '</div>' +
    '<div><b>Date:</b> ' + esc(dateEl.value) + '</div>' +
    '<div><b>Due:</b> ' + esc(dueEl.value) + '</div></div></div>' +
    '<div class="inv-parties">' +
    '<div class="inv-party"><h4>From</h4><div>' + (bizLines.length ? bizLines.map(esc).join('<br>') : '—') + '</div></div>' +
    '<div class="inv-party"><h4>Bill To</h4><div>' + (clLines.length ? clLines.map(esc).join('<br>') : '—') + '</div></div>' +
    '</div>' +
    '<table class="inv-table"><thead><tr><th>Description</th><th class="num">Qty</th><th class="num">Rate</th><th class="num">Amount</th></tr></thead>' +
    '<tbody>' + (rowsHtml || '<tr><td colspan="4" style="text-align:center;color:#94a3b8;">No items yet — add a line item above.</td></tr>') + '</tbody></table>' +
    '<div class="inv-totals">' +
    '<div class="row"><span>Subtotal</span><span>' + money(t.sub) + '</span></div>' +
    '<div class="row"><span>Tax (' + t.taxPct + '%)</span><span>' + money(t.tax) + '</span></div>' +
    '<div class="row"><span>Discount</span><span>−' + money(t.disc) + '</span></div>' +
    '<div class="row grand"><span>Total due</span><span>' + money(t.total) + '</span></div>' +
    '</div>' +
    (notesEl.value.trim() ? '<div class="inv-notes">' + esc(notesEl.value.trim()) + '</div>' : '');
}

presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  taxEl.value = chip.dataset.tax;
  curEl.value = chip.dataset.cur;
  update();
  ToolPro.toast('Tax preset applied', 'ok');
});

$('invAddItem').addEventListener('click', function(){
  addItem();
  ToolPro.toast('Line item added');
});

[biz, bizEmail, bizPhone, bizAddr, client, clientAddr, numEl, dateEl, dueEl, curEl, taxEl, discEl, notesEl].forEach(function(el){
  el.addEventListener('input', update);
  el.addEventListener('change', update);
});

function standaloneHtml(){
  var css = 'body{font-family:Georgia,serif;background:#f1f5f9;padding:24px;margin:0;}' +
    '.inv-doc{color:#1e293b;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;max-width:760px;margin:0 auto;}' +
    '.inv-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;}' +
    '.inv-title{font-size:2rem;font-weight:800;letter-spacing:2px;color:#0f172a;}' +
    '.inv-meta{text-align:right;font-size:.9rem;color:#475569;line-height:1.7;}' +
    '.inv-parties{display:flex;gap:24px;flex-wrap:wrap;margin:24px 0;}' +
    '.inv-party{flex:1;min-width:220px;}.inv-party h4{margin:0 0 6px;font-size:.8rem;letter-spacing:1px;text-transform:uppercase;color:#64748b;}' +
    '.inv-party div{font-size:.95rem;line-height:1.6;}' +
    '.inv-table{width:100%;border-collapse:collapse;margin:16px 0;font-size:.95rem;}' +
    '.inv-table th{background:#0f172a;color:#fff;text-align:left;padding:10px 8px;font-size:.8rem;letter-spacing:.5px;text-transform:uppercase;}' +
    '.inv-table th.num,.inv-table td.num{text-align:right;}.inv-table td{padding:10px 8px;border-bottom:1px solid #e2e8f0;}' +
    '.inv-totals{margin-left:auto;width:280px;font-size:.95rem;}' +
    '.inv-totals .row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f1f5f9;}' +
    '.inv-totals .grand{font-size:1.25rem;font-weight:800;color:#0f172a;border-bottom:none;padding-top:10px;}' +
    '.inv-notes{margin-top:24px;font-size:.85rem;color:#475569;border-top:1px dashed #cbd5e1;padding-top:12px;white-space:pre-wrap;}' +
    '@media print{body{background:#fff;padding:0;}.inv-doc{border:none;border-radius:0;}}';
  return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Invoice ' +
    esc(numEl.value) + '</title><style>' + css + '</style></head><body>' +
    '<div class="inv-doc">' + preview.innerHTML + '</div></body></html>';
}

$('invDownload').addEventListener('click', function(){
  var t = totals();
  if(!t.items.length || t.items.every(function(it){ return !it.desc && !it.qty && !it.rate; })){
    ToolPro.toast('Add at least one line item first'); return;
  }
  ToolPro.download('data:text/html;charset=utf-8,' + encodeURIComponent(standaloneHtml()),
    (numEl.value || 'invoice').replace(/[^a-zA-Z0-9-_]/g, '-') + '.html');
  ToolPro.toast('Invoice downloaded', 'ok');
});
$('invPrint').addEventListener('click', function(){ window.print(); });

addItem('Website design services', 1, 500);
addItem('Monthly maintenance', 2, 75);
})();
</script>

## How it works

Fill in your business and client details, add line items with quantities and rates, then set the tax rate, discount, currency, and dates. The invoice preview updates live as you type. When it looks right, hit **Download Invoice (HTML)** for a self-contained file you can email, or **Print / Save PDF** to print it directly (choose "Save as PDF" in the print dialog).

## Everyday uses

- **Freelancers** — send polished invoices for design, writing, or dev work without a paid invoicing app.
- **Small businesses** — bill clients and keep a consistent, professional look on every invoice.
- **Side hustlers** — tutoring, repairs, pet-sitting: itemize the work and get paid faster.
- **Contractors** — set tax rates per job and generate PDFs for your records.
- **Agencies** — the auto-numbered invoices and due dates keep your billing organized.

**US tax note:** US sales tax rates vary by state and even by city — the 8.5% preset is a common estimate, but always confirm your local rate. This tool is not tax advice.

## FAQ

**Is this invoice generator really free?**
Yes — 100% free forever, unlimited invoices, no sign-up, no credit card. Everything runs in your browser.

**What format does the download use?**
A self-contained HTML file with all styling built in — it opens in any browser, prints cleanly, and you can "Save as PDF" from the print dialog.

**Is my business data sent anywhere?**
No. Every keystroke stays on your device — there is no server, no account, and no tracking of your invoices.

**Can I use a currency other than USD?**
Yes — USD is the default, but you can switch to EUR, GBP, CAD, AUD, INR, or PKR in the invoice settings, and all totals reformat instantly.
