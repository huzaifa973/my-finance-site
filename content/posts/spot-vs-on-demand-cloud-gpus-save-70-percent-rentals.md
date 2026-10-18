---
title: "Spot vs On-Demand Cloud GPUs: Save 70% on Rentals"
description: "Spot GPUs can cut cloud rental costs by up to 70% — but they can be interrupted. Learn when spot wins, when on-demand wins, and how to use both."
date: 2026-10-18
draft: false
tags: ["cloud-gpu", "spot-instances", "gpu-rental", "ai-costs"]
categories: ["seo"]
image: /images/spot-vs-on-demand-cloud-gpus-save-70-percent-rentals.svg
slug: spot-vs-on-demand-cloud-gpus-save-70-percent-rentals
faq:
  - question: "What is the difference between spot and on-demand cloud GPUs?"
    answer: "On-demand GPUs are guaranteed for as long as you pay — you keep the machine until you stop it. Spot GPUs use spare datacenter capacity at a deep discount (often 50–70% off), but the provider can reclaim the machine with short notice when paying customers need it."
  - question: "How much can spot GPUs really save?"
    answer: "Typical discounts run 50–70% versus on-demand pricing on the same hardware. On a workload like a 10-hour fine-tuning run, that is the difference between roughly $20 and $6–$10 on a mid-range card."
  - question: "Are spot GPUs safe for training AI models?"
    answer: "Yes, if you checkpoint. Save model checkpoints to persistent storage every N steps, and an interruption just means resuming from the last checkpoint on a new machine. For inference and batch jobs, spot is nearly always the right call."
  - question: "When should I avoid spot GPUs?"
    answer: "Avoid spot for anything that cannot tolerate interruption: live inference endpoints serving users, demos, time-critical deadlines, and workloads without checkpointing. Use on-demand (or reserved) capacity for those."
---

Cloud GPU bills have a way of shocking first-timers. You spin up an A100 "just to test something," forget about it over the weekend, and wake up to a four-figure invoice. One of the biggest levers for cutting that bill — often **50–70%** — is also one of the least understood: **spot GPUs**. Here's how spot pricing works, when it's a brilliant deal, when it's a trap, and how to combine spot and on-demand like a pro.

## Spot vs on-demand: the core tradeoff

**On-demand** is the default: you request a GPU, you get it, it stays yours until you terminate it. You're paying a premium for the guarantee.

**Spot** (also called preemptible or interruptible on some platforms) rents out *spare* capacity — GPUs sitting idle in the datacenter right now. Because the provider can take the machine back at any time to serve a full-price customer, they sell it cheap: commonly 50–70% below on-demand for identical hardware.

The catch is exactly that: **interruption**. Your machine can be reclaimed with little or no warning. Everything in RAM and on the instance's local disk vanishes. If your workload can't survive that, spot will cost you more in lost work than it saves.

## The math: what 70% actually looks like

Take a realistic example — fine-tuning a 7B model with QLoRA for 10 hours on a 24GB-class GPU:

- **On-demand:** ~$0.70/hr → **~$7.00** for the run
- **Spot:** ~$0.20–0.35/hr → **~$2.00–$3.50** for the run

Scale that to a week of experimentation (say 60 GPU-hours) and the gap becomes $42 vs $12–$21. On bigger cards the absolute savings are dramatic: an 80GB-class GPU at ~$2/hr on-demand vs ~$0.60–$1/hr spot turns a $200 training run into $60–$100.

But the honest math includes interruption risk. If a run gets killed at hour 9 of 10 with no checkpoint, you pay for 9 wasted hours *and* redo the work. Spot only saves money if your workflow is interruption-proof. Which brings us to...

## Making spot safe: the checkpointing habit

The entire spot strategy rests on one discipline: **checkpoint everything to persistent storage, frequently.**

1. **Training:** save checkpoints every 500–1,000 steps (or every 15–30 minutes) to network storage or an S3-compatible bucket — never only to the instance's local disk. Most trainers (Hugging Face `Trainer`, PyTorch Lightning) do this with a single config flag.
2. **Keep a resume script.** Your startup script should detect the latest checkpoint in persistent storage and resume automatically. That way a new spot instance picks up exactly where the old one died.
3. **Inference/batch jobs:** make jobs idempotent and chunked. Processing 10,000 images? Write results per batch to persistent storage and track progress in a small file, so a restart skips completed chunks.
4. **Code and data on volumes, not the instance.** Treat the GPU machine as disposable. Everything valuable lives on a persistent volume or object storage.

With this setup, an interruption costs you 15–30 minutes of compute, not a day's work.

<!-- ADSENSE: in-article ad slot -->

<!-- AFFILIATE: a natural spot to recommend a cloud cost-monitoring or FinOps tool for tracking GPU spend across providers -->

## When to use each: a decision framework

**Use spot for:**
- Model training with checkpointing (the classic spot workload)
- Hyperparameter sweeps — each trial is independent, so a killed trial just restarts
- Batch inference (embedding a dataset, generating synthetic data, video rendering)
- Experimentation and learning — cheap GPUs mean more experiments per dollar
- Overnight jobs where a few extra hours of wall-clock time don't matter

**Use on-demand for:**
- Live inference endpoints serving real users (interruption = downtime)
- Demos, deadlines, and anything time-critical
- Workloads you haven't set up checkpointing for yet
- Short runs where the savings are pennies but the setup cost is real

**The pro move: mix them.** Develop and iterate on cheap spot instances; when the final production training run or the demo goes live, switch to on-demand for the guarantee. Many teams run 80% of GPU-hours on spot and 20% on-demand — capturing most of the savings with none of the risk where it counts.

## Getting started cheaply

If you're new to cloud GPUs, the cheapest way to learn the ropes is a platform with per-second billing and both spot and on-demand options, so you can compare directly. so you can compare directly. <a href="https://runpod.io/?ref=sqewz1ms" rel="sponsored nofollow">RunPod</a> is a solid starting point — spot-style "Spot Pods" sit alongside guaranteed pods on the same dashboard. *Affiliate disclosure: that's our referral link. If you sign up and spend your first $10, we both receive a randomized $5–$500 in RunPod credits (credits, not cash — they expire after 90 days), and we earn 3% of your Pod spend and 5% of Serverless spend for your first 6 months.* Those credits alone can cover your first several spot experiments for free.

A good first exercise: launch the same small job on a spot pod and an on-demand pod, note both hourly rates, and practice the checkpoint-and-resume loop. Once you've survived one interruption gracefully, you'll trust spot for everything it suits.

## Spot pitfalls beginners hit

- **No checkpointing.** The #1 spot mistake. Set it up *before* your first spot run, not after your first interruption.
- **Spot for interactive dev.** Getting your notebook server killed mid-debugging is miserable. Develop on a cheap on-demand instance; train on spot.
- **Ignoring availability.** Popular GPU types can have thin spot supply at peak hours. If your job won't start, try a different region or a slightly different card — flexibility is part of the discount.
- **Forgetting to terminate.** Spot or not, an idle GPU burns money. Set up auto-shutdown or billing alerts from day one.

## Frequently asked questions

**What is the difference between spot and on-demand cloud GPUs?**
On-demand GPUs are guaranteed for as long as you pay — you keep the machine until you stop it. Spot GPUs use spare datacenter capacity at a deep discount (often 50–70% off), but the provider can reclaim the machine with short notice when paying customers need it.

**How much can spot GPUs really save?**
Typical discounts run 50–70% versus on-demand pricing on the same hardware. On a workload like a 10-hour fine-tuning run, that is the difference between roughly $20 and $6–$10 on a mid-range card.

**Are spot GPUs safe for training AI models?**
Yes, if you checkpoint. Save model checkpoints to persistent storage every N steps, and an interruption just means resuming from the last checkpoint on a new machine. For inference and batch jobs, spot is nearly always the right call.

**When should I avoid spot GPUs?**
Avoid spot for anything that cannot tolerate interruption: live inference endpoints serving users, demos, time-critical deadlines, and workloads without checkpointing. Use on-demand (or reserved) capacity for those.
