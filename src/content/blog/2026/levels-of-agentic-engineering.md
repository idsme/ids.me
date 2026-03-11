---
title: "The Levels of Agentic Engineering: From Prompt to Specification -Concept V2"
description: "Exploring four levels of engineering discipline — Prompt, Context, Intent, and Specification Engineering — and how each level dramatically increases first-time-right outcomes in agentic development workflows."
pubDatetime: 2026-03-11T10:00:00Z
modDatetime: 2026-03-11T10:00:00Z
author: "Ids Achterhof"
slug: "levels-of-agentic-engineering"
featured: true
draft: false
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop"
tags:
  - ai
  - agentic-engineering
  - prompt-engineering
  - enterprise-architecture
---

We're in a new era of software development. AI agents don't just autocomplete your code — they architect solutions, generate entire modules, and orchestrate multi-step workflows. But here's the uncomfortable truth: **most teams are still stuck at level one**.

The difference between teams that get agentic development right and teams that spend more time fixing AI output than writing code themselves comes down to engineering discipline. Not the AI model. Not the tooling. The discipline of how you communicate with the agent.

I've identified four distinct levels. Each one compounds on the last, and each dramatically increases your **first-time-right** rate.

## Level 1: Prompt Engineering

This is where everyone starts.

> "Write me a function that validates email addresses."

Prompt engineering is about crafting the right input to get a useful output. It's the skill of being specific, using examples, setting constraints, and understanding how the model interprets language.

**What it adds to first-time-right:**

- Clear instructions reduce ambiguity
- Few-shot examples guide output format
- Constraints prevent obvious mistakes

**Where it falls short:**

Prompt engineering treats every interaction as isolated. The agent has no memory of your codebase conventions, no understanding of your architecture, and no awareness of what "good" looks like in your project. You'll get technically correct code that doesn't fit your system.

```
First-time-right rate: ~30-40%
```

Most output needs editing, refactoring, or doesn't integrate with existing patterns. You become a reviewer and editor, not a builder.

## Level 2: Context Engineering

This is where the leap happens.

Context engineering is the discipline of **curating what the agent knows** before it acts. It's not about the prompt — it's about everything that surrounds the prompt.

This means:

- **CLAUDE.md / CURSOR.md files** that encode project conventions
- **Relevant code snippets** loaded into context at the right moment
- **Architecture Decision Records** the agent can reference
- **Type definitions and interfaces** that constrain the solution space
- **Examples of existing patterns** from your own codebase

**What it adds to first-time-right:**

- The agent generates code that follows your conventions (naming, structure, patterns)
- Solutions integrate with existing abstractions instead of reinventing them
- Error handling matches your project's approach
- Dependencies and imports are correct

```
First-time-right rate: ~55-65%
```

The output starts to look like a team member wrote it. But context engineering still relies on the developer knowing exactly what to ask for. The *what* is still on you.

## Level 3: Intent Engineering

This is where agentic development gets interesting.

Intent engineering shifts from "do this specific thing" to "here's what I'm trying to achieve." You communicate the **why** and let the agent determine the **how**.

Instead of:

> "Add a retry mechanism with exponential backoff to the API client"

You say:

> "Our API client fails silently when the upstream service has transient errors. Users see blank screens. We need resilience without adding complexity to the calling code."

Intent engineering requires:

- **Describing problems, not solutions**
- **Defining success criteria** (what does "working" look like?)
- **Specifying constraints** (performance budgets, complexity limits, backward compatibility)
- **Articulating trade-offs** you're willing to make

**What it adds to first-time-right:**

- The agent considers approaches you might not have thought of
- Solutions address the root problem, not just the symptom
- Trade-offs are made explicitly, not accidentally
- The agent can push back or ask clarifying questions

```
First-time-right rate: ~70-80%
```

This is the inflection point. You're no longer micromanaging the agent — you're collaborating with it. The agent becomes a problem-solver, not a code typist.

## Level 4: Specification Engineering

This is the end game.

Specification engineering is the discipline of creating **machine-readable contracts** that define what the agent must produce, how to verify it, and what boundaries it must respect.

This goes beyond intent. A specification includes:

- **Acceptance criteria** as testable assertions
- **Interface contracts** (inputs, outputs, error cases)
- **Non-functional requirements** (latency < 200ms, memory < 50MB)
- **Integration points** with existing systems
- **Edge cases and failure modes** explicitly enumerated
- **Validation rules** the agent can self-check against

A specification might look like:

```markdown
## Feature: Order Validation Pipeline

### Must:
- Validate order items against current inventory (real-time check)
- Calculate tax per jurisdiction using the existing TaxService
- Return structured errors with field-level detail
- Complete validation within 500ms for orders up to 100 items

### Must Not:
- Modify inventory state (read-only operation)
- Call external payment APIs
- Introduce new dependencies

### Interface:
- Input: OrderRequest (see types/order.ts)
- Output: ValidationResult | ValidationError[]
- Throws: never (all errors in return type)

### Verify:
- Unit tests cover all error paths
- Integration test against TaxService stub
- Load test: 100 items validates in < 500ms
```

**What it adds to first-time-right:**

- The agent generates implementation **and** tests simultaneously
- Self-verification: the agent checks its own output against the spec
- Completeness: edge cases are handled because they're enumerated
- Integration: interface contracts ensure the code plugs in correctly
- Review becomes spec-diffing, not code-reading

```
First-time-right rate: ~85-95%
```

At this level, the agent is operating like a contractor with a detailed blueprint. The specifications become reusable, composable, and version-controlled. Your engineering effort shifts from writing code to writing specifications — and the specs are the documentation.

## The Compound Effect

These levels aren't just additive — they're multiplicative:

| Level | Discipline | First-Time-Right | Your Role |
|-------|-----------|------------------|-----------|
| 1 | Prompt Engineering | ~30-40% | Editor |
| 2 | Context Engineering | ~55-65% | Guide |
| 3 | Intent Engineering | ~70-80% | Collaborator |
| 4 | Specification Engineering | ~85-95% | Architect |

Notice the pattern: as your engineering discipline increases, your role shifts from **fixing output** to **defining outcomes**. That's exactly what an architect should be doing.

## The Enterprise Perspective

For enterprise teams, this framework has profound implications:

1. **Level 1-2 is table stakes.** If your team isn't doing context engineering, you're leaving 20-30% efficiency on the table.

2. **Level 3 requires a culture shift.** Developers need to articulate intent, not just write tickets. "Implement JIRA-1234" is not intent engineering.

3. **Level 4 is where architecture meets AI.** Specifications are architecture decisions made executable. ADRs become agent instructions. Your architecture practice directly improves AI output quality.

4. **The ROI is in the rework.** A jump from 40% to 85% first-time-right doesn't mean 2x productivity — it means 5-10x, because you eliminate review cycles, debugging sessions, and integration failures.

## Getting Started

You don't need to jump to level 4 tomorrow. Start by:

1. **Audit your current level.** How much rework do you do on AI-generated code?
2. **Invest in context.** Create project-level instruction files. Document your conventions.
3. **Practice intent.** Next time you prompt an agent, describe the problem first, then the constraints. Don't dictate the solution.
4. **Pilot specifications.** Pick one feature and write a full specification before touching the agent. Measure the difference.

The teams that master specification engineering won't just be faster — they'll be building systems that are more consistent, better tested, and easier to maintain. Not because of AI, but because the discipline of writing good specifications makes you a better engineer.

---

*The best agents don't need better prompts. They need better engineers.*
