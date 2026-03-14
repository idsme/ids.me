---
title: "2026 - The Year AI Stopped Being Optional"
pubDatetime: 2026-03-14T10:00:00Z
modDatetime: 2026-03-14T10:00:00Z
author: "Ids Achterhof"
slug: "ai-stopped-being-optional"
featured: true
draft: false
description: "March 2025 you had a chatbot. March 2026 you need an architecture decision. What changed, what worked, and your 90-day path."
tags:
  - ai
  - business
  - agentic-ai
  - workflow-design
heroImage: /assets/img/2026/ai-stopped-being-optional/02-invoice-dispute.svg
---

A finance controller kicks off month-end close the way she always has — pulling reports from three systems, reconciling manually, chasing approvals over email. Five days.

Her counterpart triggers an agentic workflow that pulls the same reports, flags mismatches, drafts reconciliation entries, and routes exceptions by materiality threshold. A day and a half. Same ERP. Same headcount. One redesigned the work. The other plugged in a copilot.

[Deloitte's 2026 State of AI report](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html):

![88% of companies use AI, but only 34% redesigned the work](/assets/img/2026/ai-stopped-being-optional/01-adoption-gap.svg)

---

## From tool to workflow

In 2025, AI was a brain in a jar. In 2026, the jar broke open. By year's end, [40% of enterprise apps will embed AI agents](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025) — up from under 5%.

![Invoice dispute resolution: 2025 (7 steps, 2-4 hours) vs 2026 (3 steps, 12 minutes)](/assets/img/2026/ai-stopped-being-optional/02-invoice-dispute.svg)

---

## Two industries, one mistake, one fix

Klarna went all-in on AI customer service in 2024. Then overcorrected. Then found the hybrid that worked.

![Klarna's arc: AI replaces, overcorrection, hybrid wins](/assets/img/2026/ai-stopped-being-optional/03-klarna-arc.svg)

> **Sources:** [2.3M chats, 11→2 min resolution](https://openai.com/index/klarna/) · [5,527→3,422 headcount, IPO filing](https://www.paymentsdive.com/news/klarna-buy-now-pay-later-bnpl-payments-workforce-ipo/742627/) · [$0.32→$0.19/tx, Q1 2025 earnings](https://www.customerexperiencedive.com/news/klarna-ai-slash-customer-service-costs/748647/) · [CEO: cost "too prominent"](https://www.cxtoday.com/contact-center/klarnas-ai-merry-go-round-enough-to-put-anyones-head-in-a-spin/) · [853 agents' work, $60M saved, Q3 2025](https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/805987/)

Now watch it on the factory floor. [PepsiCo and Siemens](https://www.prnewswire.com/news-releases/pepsico-announces-industry-first-ai-and-digital-twin-collaboration-with-siemens-and-nvidia-302653851.html) digitally twinned U.S. manufacturing facilities so AI agents could simulate changes before any physical modification.

![PepsiCo digital twin pipeline: +20% throughput, 90% issues caught, 10-15% capex saved](/assets/img/2026/ai-stopped-being-optional/04-pepsico-twin.svg)

---

## Three things the reports buried

**Worse baselines produce bigger AI numbers.** Klarna's CEO [admitted](https://www.cxtoday.com/contact-center/klarnas-ai-merry-go-round-enough-to-put-anyones-head-in-a-spin/) the company "was not necessarily the best in the world when it came to IVRs and FAQs" before deploying AI. That gap is exactly why the lift looked staggering — and why better-run companies can't replicate those gains. Audit your process maturity *before* setting AI targets.

**Your employees already crossed the AI divide. Your org hasn't.** A [2025 MIT study](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) found employees at over 90% of companies use personal AI tools for work. Only 40% of companies bought an official subscription. Learn from their choices before buying another enterprise license.

**Revenue from AI is still mostly a wish.** [74% hope to grow revenue through AI](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html). Only 20% are. First movers who crack AI-driven revenue — not just cost savings — have the market largely to themselves.

---

## Your 90-day path

![90-day action plan: map shadow AI, pick one workflow, measure impact](/assets/img/2026/ai-stopped-being-optional/05-ninety-day-path.svg)

- **Map shadow AI:** [Claude docs](https://docs.claude.com/en/docs/overview) · [OpenAI enterprise docs](https://platform.openai.com/docs/overview)
- **Pick one workflow:** [Deloitte's 80+ AI use cases by industry](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html)
- **Measure what moved:** Resolution time, throughput, cost per transaction — the number that hits the P&L

> **Note:** If your AI touches hiring, credit, or customer scoring in the EU, the [AI Act high-risk obligations hit August 2, 2026](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai). Start with the [Orrick 6-step checklist](https://www.orrick.com/en/Insights/2025/11/The-EU-AI-Act-6-Steps-to-Take-Before-2-August-2026) — in parallel, not instead.

---

Two companies. Same desk. Same budget. Same models.

One added AI to the way things already worked. The other picked one workflow, tore it apart, and rebuilt it around what agents can do. Twelve months from now, one of them won't understand how the other got so far ahead.

The tools don't pick sides. But the architecture does.
