---
title: "Expense Tracker in JavaScript (Free Source Code)"
description: "Free expense tracker source code in a single HTML file: add expenses, categories, monthly totals, a spending chart, and localStorage saving. Copy-paste ready."
date: 2026-10-01
draft: false
tags: ["javascript", "source code", "expense tracker", "beginner project"]
image: /images/preview-expense-tracker.svg
---

A to-do app teaches you lists; an expense tracker teaches you real-world data. This project is the natural next step after your first JavaScript app: instead of storing simple text, you store structured records — a description, an amount, a category, and a date — and then do math on them. Monthly totals, category breakdowns, and a spending chart all fall out of that one data model.

Like the [to-do app](/code/javascript-todo-app-source-code/), everything here lives in a single HTML file with embedded CSS and JavaScript. No frameworks, no build tools, no database. Your expenses are saved to `localStorage`, so the data stays in your browser and survives between visits — a nice privacy bonus, since nothing ever leaves your computer.

## Features

- **Add and delete expenses.** A small form captures the description, amount, category, and date; every entry gets a Delete button.
- **Category dropdown.** Food, transport, shopping, bills, entertainment, or other — picked from a `<select>` when you add the expense.
- **Monthly total.** The app automatically totals everything dated in the current month, plus a grand total of all time.
- **7-day spending chart.** A simple bar visualization built from plain `<div>` elements — no chart library needed — showing your last seven days of spending.
- **localStorage persistence.** Every change is saved instantly, and your data is back when you reopen the page.

<!-- ADSENSE: in-article ad slot -->

## The complete source code

Copy everything below into a file named `expense-tracker.html` and open it in any browser. It works immediately — no setup.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expense Tracker</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    background: #0f172a; color: #e2e8f0;
    display: flex; justify-content: center;
    padding: 2rem 1rem;
  }
  .app {
    background: #1e293b; width: 100%; max-width: 560px;
    border-radius: 14px; padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }
  h1 { text-align: center; color: #22d3ee; margin-bottom: 1rem; }
  .form { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
  .form input, .form select {
    padding: 0.6rem; border: 1px solid #334155; border-radius: 8px;
    background: #0f172a; color: #e2e8f0; font-size: 1rem;
  }
  #desc { flex: 2 1 160px; }
  #amount { flex: 1 1 100px; }
  #cat { flex: 1 1 120px; }
  #date { flex: 1 1 140px; }
  .form button {
    flex: 1 1 100%; padding: 0.6rem; background: #22d3ee; color: #0f172a;
    border: none; border-radius: 8px; font-weight: bold; cursor: pointer;
  }
  .form button:hover { background: #06b6d4; }
  .totals {
    display: flex; gap: 0.5rem; margin-bottom: 1rem;
  }
  .total-card {
    flex: 1; background: #0f172a; border: 1px solid #334155;
    border-radius: 10px; padding: 0.75rem; text-align: center;
  }
  .total-card small { color: #94a3b8; }
  .total-card .value { font-size: 1.4rem; color: #22d3ee; font-weight: bold; }
  #chart {
    display: flex; align-items: flex-end; justify-content: space-between;
    height: 170px; background: #0f172a; border: 1px solid #334155;
    border-radius: 10px; padding: 1rem 0.75rem 0.5rem; margin-bottom: 1rem;
  }
  .bar-wrap {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end; height: 100%;
  }
  .bar {
    width: 70%; max-width: 42px; background: linear-gradient(#22d3ee, #0ea5e9);
    border-radius: 4px 4px 0 0; min-height: 2px;
  }
  .bar-label { font-size: 0.7rem; color: #94a3b8; margin-top: 0.25rem; }
  ul { list-style: none; }
  li {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.6rem; border-bottom: 1px solid #334155;
  }
  li .info { flex: 1; }
  li .info small { color: #94a3b8; }
  li .amt { color: #22d3ee; font-weight: bold; white-space: nowrap; }
  .delete-btn {
    background: #ef4444; color: #fff; border: none;
    border-radius: 6px; padding: 0.3rem 0.6rem; cursor: pointer;
  }
  .empty { text-align: center; color: #94a3b8; padding: 1rem; }
</style>
</head>
<body>
<div class="app">
  <h1>Expense Tracker</h1>

  <form class="form" id="expForm">
    <input type="text" id="desc" placeholder="Description (e.g. Groceries)" required>
    <input type="number" id="amount" placeholder="Amount" min="0.01" step="0.01" required>
    <select id="cat">
      <option>Food</option>
      <option>Transport</option>
      <option>Shopping</option>
      <option>Bills</option>
      <option>Entertainment</option>
      <option>Other</option>
    </select>
    <input type="date" id="date">
    <button type="submit">Add expense</button>
  </form>

  <div class="totals">
    <div class="total-card">
      <small>This month</small>
      <div class="value" id="monthTotal">$0.00</div>
    </div>
    <div class="total-card">
      <small>All time</small>
      <div class="value" id="grandTotal">$0.00</div>
    </div>
  </div>

  <div id="chart"></div>

  <ul id="list"></ul>
</div>
<script>
  var descInput = document.getElementById('desc');
  var amountInput = document.getElementById('amount');
  var catInput = document.getElementById('cat');
  var dateInput = document.getElementById('date');

  // Load saved expenses, or start with an empty list
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  function save() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  function money(n) {
    return '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // Escape text so user input can't inject HTML
  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function todayKey() {
    var t = new Date();
    return t.getFullYear() + '-' +
      String(t.getMonth() + 1).padStart(2, '0') + '-' +
      String(t.getDate()).padStart(2, '0');
  }

  function render() {
    var list = document.getElementById('list');
    list.innerHTML = '';

    if (expenses.length === 0) {
      list.innerHTML = '<li class="empty">No expenses yet — add your first one above.</li>';
    }

    expenses.forEach(function (e, i) {
      var li = document.createElement('li');

      var info = document.createElement('div');
      info.className = 'info';
      info.innerHTML = '<strong>' + escapeHtml(e.desc) + '</strong><br>' +
        '<small>' + escapeHtml(e.cat) + ' · ' + e.date + '</small>';

      var amt = document.createElement('span');
      amt.className = 'amt';
      amt.textContent = money(e.amount);

      var del = document.createElement('button');
      del.textContent = 'Delete';
      del.className = 'delete-btn';
      del.addEventListener('click', function () {
        expenses.splice(i, 1);
        save(); render();
      });

      li.appendChild(info);
      li.appendChild(amt);
      li.appendChild(del);
      list.appendChild(li);
    });

    // Totals: this month vs all time
    var monthKey = todayKey().slice(0, 7);
    var monthTotal = 0, total = 0;
    expenses.forEach(function (e) {
      total += e.amount;
      if (e.date.slice(0, 7) === monthKey) monthTotal += e.amount;
    });
    document.getElementById('monthTotal').textContent = money(monthTotal);
    document.getElementById('grandTotal').textContent = money(total);

    renderChart();
  }

  function renderChart() {
    var chart = document.getElementById('chart');
    chart.innerHTML = '';

    // Build the last 7 calendar days
    var days = [];
    for (var d = 6; d >= 0; d--) {
      var dt = new Date();
      dt.setDate(dt.getDate() - d);
      var key = dt.getFullYear() + '-' +
        String(dt.getMonth() + 1).padStart(2, '0') + '-' +
        String(dt.getDate()).padStart(2, '0');
      days.push({
        key: key,
        label: dt.toLocaleDateString(undefined, { weekday: 'short' }),
        total: 0
      });
    }

    expenses.forEach(function (e) {
      for (var i = 0; i < days.length; i++) {
        if (days[i].key === e.date) { days[i].total += e.amount; break; }
      }
    });

    var max = 1;
    days.forEach(function (d) { if (d.total > max) max = d.total; });

    days.forEach(function (d) {
      var wrap = document.createElement('div');
      wrap.className = 'bar-wrap';
      var h = Math.round((d.total / max) * 120);
      wrap.innerHTML = '<div class="bar" title="' + money(d.total) + '" style="height:' + h + 'px"></div>' +
        '<div class="bar-label">' + d.label + '</div>';
      chart.appendChild(wrap);
    });
  }

  document.getElementById('expForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var amount = parseFloat(amountInput.value);
    if (!descInput.value.trim() || isNaN(amount) || amount <= 0) return;

    expenses.unshift({
      desc: descInput.value.trim(),
      amount: Math.round(amount * 100) / 100,
      cat: catInput.value,
      date: dateInput.value || todayKey()
    });

    descInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
    descInput.focus();
    save(); render();
  });

  render();
</script>
</body>
</html>
```

## How it works

- **Structured records.** Each expense is an object like `{ desc: "Groceries", amount: 42.5, cat: "Food", date: "2026-10-01" }`. Newest entries are `unshift`ed to the front so the list reads newest-first.
- **The monthly total is a string match.** Every date is stored as `YYYY-MM-DD`, so slicing the first seven characters gives the month (`2026-10`). Expenses whose month matches today's month go into the "This month" card; everything counts toward the grand total.
- **Divs as a chart.** The chart needs no library: `renderChart()` builds the last seven calendar days, sums expenses into each day, then renders each day as a `<div class="bar">` whose pixel height is proportional to the biggest day. Hovering a bar shows the exact amount via the `title` attribute.
- **Amounts are rounded to cents.** `Math.round(amount * 100) / 100` kills the classic floating-point surprises like `0.1 + 0.2 = 0.30000000000000004` before they reach your totals.
- **Escaped output.** `escapeHtml()` writes user text through `textContent` first, so a description like `<script>` can never run as code — a small habit that matters in every app you build.
- **localStorage persistence.** `save()` runs after every add and delete, so closing the browser loses nothing.

## How to use it

1. Save the code above as `expense-tracker.html` anywhere on your computer.
2. Double-click the file — it opens in your default browser, no server needed.
3. Type a description (e.g. "Lunch") and an amount, pick a category, and either leave the date blank for today or choose another day.
4. Click **Add expense**. The totals update instantly and the expense appears in the list.
5. Watch the 7-day chart grow as you log spending through the week; hover any bar to see the exact day's total.
6. Delete an entry with its **Delete** button — totals and the chart adjust automatically.

<!-- AFFILIATE: web hosting or domain recommendation for publishing your project -->

## Ways to extend this project

This tracker is deliberately simple so beginners can follow every line — but it is also a solid foundation. Here are natural next features, roughly in order of difficulty:

- **Category filter.** Add a dropdown above the list that shows only one category at a time, so you can see exactly what food or transport costs you each month.
- **Edit button.** Next to each Delete button, add an Edit button that loads the expense back into the form. The trick is remembering which index you're editing and writing the updated object back to the same position in the array.
- **Category totals.** Group spending by category with a small summary — a bar chart just like the 7-day chart, but one bar per category. You already have the building blocks: the grouping logic from `renderChart()` and the div-bar rendering.
- **CSV export.** A button that converts the expenses array to comma-separated text and triggers a download with a `Blob`. That makes your data portable to a spreadsheet.
- **Budget alerts.** Store a monthly budget number and turn the "This month" card red when spending passes 90% of it.

Each of these teaches a transferable skill — filtering arrays, editing in place, aggregation, file downloads, conditional styling — and each one makes the app more genuinely useful.

## Frequently asked questions

### Is this expense tracker really free?

Yes. The full source code is on this page and free to use for personal or commercial projects. There are no licenses to buy, no accounts to create, and no trackers in the code — it doesn't even make network requests.

### Where is my data stored?

In your browser's `localStorage`, on your own device. Your expenses never leave your computer, which is great for privacy. The trade-off: clearing your browser's site data will erase the expenses, so export anything important before doing that.

### Can I use this on my phone?

Yes. The layout is mobile-friendly — the form wraps into a single column on small screens, and the chart and totals stack neatly. Save the file to your phone or host it somewhere and bookmark it.

### How do I change the currency?

Search the code for the `money()` function and replace the `'$'` prefix with your symbol (e.g. `'€'`, `'£'`, or `'Rs. '`). That one change updates every amount shown in the app.

## Recap

This single-file expense tracker packages real data skills — structured records, date math, derived totals, and a div-based chart — into one app you can actually use daily. Copy the code, log your spending for a week, then try extending it: a category filter, an edit button, or a CSV export are all natural next features.
