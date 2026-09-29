---
title: "How to Track Your Net Worth With a Free Notion Template"
description: "Learn how to track your net worth with a free Notion template. Simple setup for beginners — list assets and liabilities, update monthly, and watch your wealth grow."
date: 2026-09-29
tags: ["net worth", "notion", "tracking", "beginners"]
draft: false
faq:
  - q: "What is net worth and how do I calculate it?"
    a: "Net worth is everything you own (assets) minus everything you owe (liabilities). Add up your bank balances, investments, and property values, then subtract credit card balances, loans, and any other debt. The result — positive or negative — is your net worth."
  - q: "How often should I update my net worth tracker?"
    a: "Once a month is the sweet spot. Weekly updates create noise because markets and balances fluctuate; quarterly updates are too slow to catch problems. Pick the 1st of the month, spend 15 minutes, and log a snapshot."
  - q: "My net worth is negative. Is tracking it still worth it?"
    a: "Absolutely — it's worth it most when it's negative. Tracking a negative net worth turns an abstract scary number into a concrete target that shrinks every month. Many people find watching -$12,000 become -$8,000 more motivating than any budget."
  - q: "Do I need the paid version of Notion for a net worth tracker?"
    a: "No. The free Notion plan handles everything this tracker needs: databases, formulas, and views. You only need a paid plan if you want unlimited file uploads or advanced collaboration, neither of which matters for personal finance tracking."
---

Your budget tells you where your money goes each month. Your net worth tells you whether you're actually getting richer. Most beginners obsess over the first and never look at the second — which is a shame, because net worth is the single number that captures your entire financial life in one glance.

The good news: tracking it takes about 15 minutes a month, and you can build the whole system in Notion for free. Here's exactly how.

## Why net worth is the only money number that matters

Income can be high while wealth stays at zero. Someone earning $90,000 with $85,000 in debt and no savings is, financially speaking, poorer than someone earning $45,000 with no debt and $20,000 saved. Net worth cuts through all of that because it answers one question: **if you sold everything and paid everyone, what would be left?**

Tracking it monthly also changes your behavior. When you see the number move — up $400 here, down $150 there — saving and debt payoff stop being abstract chores and become a score you're trying to beat. That's the psychological engine that makes this worth doing.

## What actually goes into your net worth

Net worth has two sides. Get these right and the math is trivial.

<!-- ADSENSE: in-article slot -->

**Assets (what you own):**
- Checking and savings account balances
- Investment accounts (401(k), IRA, brokerage, ISA in the UK)
- Cash value of anything significant you could sell (car, valuables)
- Home equity (current value minus mortgage) — only if you own

**Liabilities (what you owe):**
- Credit card balances
- Student loans, car loans, personal loans
- Buy-now-pay-later balances (yes, these count)
- Any money owed to friends, family, or the tax authority

Don't overthink precision. Use round numbers and current balances — this is a trend tracker, not an audit. A $200 error in your car's value doesn't matter; what matters is whether the total is climbing month after month.

## Building the free Notion template (step by step)

You don't need to download anything sketchy. Build this yourself in about 20 minutes — you'll understand it better, which means you'll actually keep using it.

**Step 1: Create a "Net Worth" page.** In Notion, make a new page called Net Worth. This is your dashboard.

**Step 2: Create an "Accounts" database.** Add a table database with these columns:
- Name (e.g., "Chase checking", "Visa card", "Student loan")
- Type (select: Asset or Liability)
- Category (select: Cash, Investments, Property, Credit Card, Loan, Other)
- Current balance (number)
- Notes (text, optional — for account numbers' last four digits, never full numbers)

**Step 3: Add your accounts.** Enter every account with its current balance. For liabilities, enter the balance as a positive number — the formula handles the sign.

**Step 4: Create a "Monthly Snapshots" database.** This is the heart of the tracker. Columns:
- Month (date — use the 1st of each month)
- Total assets (number)
- Total liabilities (number)
- Net worth (formula: Total assets minus Total liabilities)

**Step 5: Add a formula for net worth.** In the Snapshots database, the Net Worth column should be a formula: `prop("Total assets") - prop("Total liabilities")`. Notion calculates it automatically every month.

**Step 6: Add a gallery or chart view.** Create a gallery view of Monthly Snapshots sorted by month, or embed a simple chart. Seeing the line climb is the whole point.

<!-- AFFILIATE: relevant offer -->

{{< cta-box title="Want the template ready-made?" text="We've packaged this exact tracker — Accounts database, Monthly Snapshots with formulas, and a dashboard view — as a free duplicate-and-go Notion template." button="Get the Free Template" link="#" >}}

## The 15-minute monthly ritual

Templates die when updating them feels like a chore. Make it painless:

1. **Pick a fixed date** — the 1st of the month, or the day after payday. Put a recurring reminder in your phone.
2. **Open each account and copy the balance** — bank app, credit card app, loan servicer. Don't log in anywhere you don't already use.
3. **Add one row to Monthly Snapshots** with the totals. Let the formula do the math.
4. **Glance at the trend**, not the number. Up is good. Flat is fine. Down two months in a row means something needs attention.

That's it. Fifteen minutes, once a month. If it takes longer, you're overcomplicating it — drop the accounts you never look at and keep the big ones.

## How to read your trend (and what to do about it)

The number itself matters less than its direction and speed:

- **Climbing steadily:** whatever you're doing is working. Don't fix what isn't broken — just keep the habits.
- **Flat for 3+ months:** you're treading water. Look for one lever: a subscription to kill, an extra debt payment, or moving idle cash into a high-yield savings account.
- **Falling:** diagnose before you panic. Did assets drop (market dip, big purchase) or did liabilities rise (new debt)? Market dips recover; new debt needs a plan — our guide on [paying off credit card debt fast](/posts/pay-off-credit-card-debt-fast/) covers exactly that.
- **Negative but shrinking:** this is winning. A net worth going from -$14,000 to -$9,000 in six months is massive progress, even though the number is still red.

One more rule: never compare your number to anyone else's. A 22-year-old with -$30,000 in student loans and a 40-year-old homeowner with $200,000 are playing different games. Compare yourself to last month's you.

## Common net worth tracking mistakes

- **Updating daily or weekly** — you'll obsess over noise instead of trends.
- **Counting your salary as an asset** — future income isn't wealth until it's saved.
- **Ignoring small debts** — that $300 BNPL balance is a liability; include it.
- **Forgetting to celebrate milestones** — hitting $0 from negative, then $1,000, then $10,000 are all worth noticing. Mark them in your Notion page.

## Your next step

Build the template today — it takes 20 minutes — and log your first snapshot with today's balances. Then set the monthly reminder. Six months from now, you'll have something most people never get: proof, in numbers, that your money is moving in the right direction. Pair it with a working budget using our [budget calculator](/tools/budget-calculator/) and the system runs itself.

### FAQ

**Q:** What is net worth and how do I calculate it?

A: Net worth is everything you own (assets) minus everything you owe (liabilities). Add up your bank balances, investments, and property values, then subtract credit card balances, loans, and any other debt. The result — positive or negative — is your net worth.

**Q:** How often should I update my net worth tracker?

A: Once a month is the sweet spot. Weekly updates create noise because markets and balances fluctuate; quarterly updates are too slow to catch problems. Pick the 1st of the month, spend 15 minutes, and log a snapshot.

**Q:** My net worth is negative. Is tracking it still worth it?

A: Absolutely — it's worth it most when it's negative. Tracking a negative net worth turns an abstract scary number into a concrete target that shrinks every month. Many people find watching -$12,000 become -$8,000 more motivating than any budget.

**Q:** Do I need the paid version of Notion for a net worth tracker?

A: No. The free Notion plan handles everything this tracker needs: databases, formulas, and views. You only need a paid plan if you want unlimited file uploads or advanced collaboration, neither of which matters for personal finance tracking.
