# Field Observations

What's actually on the public Anthropic surface — sampled from anthropic.com and a handful of representative subpages, May 2026. Each observation is grounded in a specific page so future readers can re-check it. The point of this document is to keep the skill honest: anything stated as Anthropic-style elsewhere in the skill should be traceable back to an entry here, or marked as a derivation.

This is a *description*, not a copy guide. Anthropic's pages have characteristics; the skill abstracts the characteristics into a system you can apply to your own work. Treat the entries below as evidence, not as specs to imitate verbatim.

## Page structure

### The homepage uses very few elements

Sampled: [anthropic.com](https://www.anthropic.com/) (May 2026).

The whole page above the footer is roughly five blocks:

1. A masthead headline that doubles as the value proposition: *AI [research] and [products] that put safety at the frontier*. The bracketed words are inline links.
2. One sentence of mission: *AI will have a vast impact on the world. Anthropic is a public benefit corporation dedicated to securing its benefits and mitigating its risks.*
3. One feature project (currently Project Glasswing) with a short description and a single text link.
4. *Latest releases* — three announcements with date, category, title, one-line description.
5. *At Anthropic, we build AI to serve humanity's long-term well-being.* — a standalone sentence.
6. Four core-view link cards.

There is no three-column feature grid. There is no centered hero with two pill buttons. There is no testimonial bar. There is no pricing teaser. There is no chatbot widget in the corner. The amount of work the page is doing is roughly: state the mission, point at the latest thing, link to the foundational documents.

**For the skill:** if you find yourself building a page with seven or more sections, you are no longer in this register. Cut.

### CTAs are embedded in prose, not just placed as buttons

Sampled: [anthropic.com](https://www.anthropic.com/), Opus product page.

The homepage masthead — *AI [research] and [products] that put safety at the frontier* — places its primary navigation choices inside the headline, as bracket-style links. Clicking either word is the principal CTA.

Across the site, links inside running prose carry as much weight as buttons. The same word style (light underline that grows on hover) is used for both editorial links and what other sites would put in a green "Get started" button.

**For the skill:** before designing a button, check whether a link inside a real sentence does the same job better. The reader is reading anyway.

### Standalone declarative sentences act as cadence

Sampled: anthropic.com homepage; *Claude is a space to think* news post.

Single sentences, set on their own lines or as their own paragraphs, punctuate longer prose. From the news post:

> *We want Claude to act unambiguously in our users' interests. So we've made a choice: Claude will remain ad-free.*

> *Conversations with AI assistants are meaningfully different.*

These statement-paragraphs do the work that subheads and pull-quotes typically do in marketing copy — they slow the reader down at decisive points. They are usually one or two sentences, set in the same body face, with no special weight or color.

**For the skill:** if you have a key claim, give it its own paragraph and remove the words around it. Don't bold it. Don't pull-quote it. Just isolate it.

### News and research are listed as typography, not card grids

Sampled: [anthropic.com/news](https://www.anthropic.com/news), [anthropic.com/research](https://www.anthropic.com/research).

The list shape is `Date · Category · Title · One-sentence description`, repeated. A few featured pieces at the top get an image; the rest are pure text rows. There is no thumbnail-per-row, no card border, no hover shadow.

The eye scans dates and categories down the left, titles down the middle, then dives into a row that catches its attention.

**For the skill:** when you list articles, default to text-led rows. Reach for thumbnails only when an image meaningfully changes whether the reader will click.

### Section headings are declarative, not interrogative

Sampled: news post *Claude is a space to think*; Opus product page.

`The nature of AI conversations.` `Our approach.` `Supporting commerce.` `A trusted tool for thought.` `Availability and pricing.` `Use cases.` `Trust and safety.`

Note what's missing: no `How does it work?`, no `Why us?`, no `Ready to get started?`. The reader is told what's in the section, in a sentence. The section then delivers what the heading claimed.

**For the skill:** rephrase any question-heading as a statement-heading. If the statement-heading sounds banal, the section probably is, and should be cut or merged.

## Copy & voice

### Headlines are sentences, not slogans

Sampled: news posts (*Claude is a space to think* / *Our approach to advertising in Claude conversations*); Opus tagline (*Hybrid reasoning model that pushes the frontier for coding and AI agents, featuring a 1M context window*).

Headlines on Anthropic's site read like lines from an essay. They have subjects and verbs. They claim something specific. The Opus tagline is one tightly written sentence with three concrete claims (hybrid reasoning, frontier for coding & agents, 1M context window) — it is not "*Effortless. Powerful. Built for you.*"

### Customer quotes carry data and specificity

Sampled: Opus 4.7 product page (twenty-seven customer testimonials, listed in full).

The quotes don't say "*Game changer.*" or "*Loved working with Anthropic.*" They say things like:

> *On our 93-task coding benchmark, Claude Opus 4.7 lifted resolution by 13% over Opus 4.6, including four tasks neither Opus 4.6 nor Sonnet 4.6 could solve.* — Mario Rodriguez, Chief Product Officer

> *Personally, I love how it pushes back during technical discussions to help me make better decisions. It really feels like a better coworker.* — Michele Catasta, Replit

Each quote names a benchmark, a percentage, a specific behavior, or a specific feeling. Each is attributed to a person with a real role at a real company. The quotes are not edited to a uniform length.

**For the skill:** if you have testimonials, demand specificity from the source — numbers, named tasks, named features. If you can only get "great product, would recommend," don't put a testimonial section on the page.

### When testimonials are real, they are *all* shown

Sampled: Opus 4.7 product page.

The page lists twenty-seven customer quotes, paginated only by a small `01 / 27` counter at the bottom. There's no "see more" hidden behind a click; there's no carousel rotating through three.

The implicit posture: *we have this much real evidence; we're going to put all of it on the page*. Showing only three would imply either that there are only three, or that the rest were edited; both readings undermine trust.

**For the skill:** show the actual count. If it's a lot, show all of it. If it's three, show three but don't pretend there are more by rotating them.

### Pricing is a number on the page, not a CTA

Sampled: Opus 4.7 product page.

> *Pricing for Opus 4.7 starts at $5 per million input tokens and $25 per million output tokens, with up to 90% cost savings with prompt caching and 50% savings with batch processing.*

The number is in the body text, in the same face as the rest of the page. There is no "Contact sales" panel. The reader has the answer in three seconds.

**For the skill:** if you know the price, write it down where the question is. Pricing tables are fine; pricing teasers that bounce the user to a sales form are not.

## Naming

### Two registers, one for models, one for SaaS plans

Sampled: anthropic.com; claude.com pricing.

- **Models** are named after **poetic forms**: *Haiku · Sonnet · Opus*. The names communicate scope (short / structured / ambitious) without leaning on engineering version numbers.
- **SaaS plans** are named in **industry-standard form**: *Free · Pro · Max · Team · Enterprise*. No one calls the team plan "Studio" or the enterprise plan "Foundry." The names are boring on purpose; they don't compete with the model names.
- **Projects and initiatives** get **proper names** with concrete referents: *Project Glasswing*, *Project Vend*, *Project Deal*. These read like research code-names from a notebook, not from a marketing brief.

**Important correction:** an earlier draft of this skill suggested replacing *Pro / Plus / Premium* with poetic alternatives like *Sketch / Draft / Manuscript*. That is wrong. Anthropic itself does not do this for plans — only for the product family that benefits from a register shift (the models). For ordinary commercial tiers, the plain industry words are correct here too.

### Localized date formats

Sampled: Opus product page (timestamps render as `2026年4月16日` when fetched in a Chinese-locale environment); other pages render `April 16, 2026` in English locale.

Dates follow the user's locale rather than a forced ISO format. *MMXXVI*-style Roman numerals appear only as occasional decorative marks (a copyright line, a section opener), not as a default.

**For the skill:** previous drafts of this skill leaned heavily on Roman numerals. Use them sparingly — they're a flourish, not a system.

## Imagery & decoration

### No stock photography, no rendered mockups on gradients

Sampled: anthropic.com homepage; news post hero illustrations; Opus product page.

The featured images are SVG illustrations (the *Claude is a space to think* hero is a 1000×1000 SVG); product pages get one identity SVG and one benchmark chart. There are no stock photos of diverse hands holding phones; there are no laptop mockups at 15° on a purple gradient; there are no robot illustrations.

When a chart or product visualization is needed, it gets one frame, plainly composed, in the same warm palette as the page.

### Decoration is rare and earned

Sampled: across the site.

You won't find: gradient backgrounds, glow shadows, glass morphism, animated badges, pulsing icons, neon accents, emoji decorations, confetti animations, or background videos. What you will find: 1px borders, very occasional thin rules, terra-cotta accents on focal links and a few illustrations, and that's about it.

## What I expected and didn't see

These are common defaults that Anthropic's site notably *avoids*. Each is a useful negative observation.

- **Magazine-style mastheads** ("Issue 04 — On Quiet Tools, Vol. IV"). Anthropic does not present itself as a periodical. It presents itself as a research firm. Earlier drafts of this skill leaned on this *Issue / Vol* framing; it's a derivation, not an observation, and should be used sparingly if at all.
- **Three-column feature grids.** Not on the homepage, not on product pages.
- **Testimonial carousels.** Replaced by *all-or-nothing* presentation.
- **Pricing teasers behind a "Contact sales" wall.** Pricing is in the body text.
- **Drop caps, ornaments, all-Roman numerals, footnotes with `↩` glyphs.** These are essay-page conventions that *match* the calm of Anthropic's voice but are not characteristic of anthropic.com itself. Use them when the surface is *literally* an essay (a research paper, a manifesto). Not on a marketing page.
- **CTA bars at the bottom of every page.** The closest equivalent on Anthropic's pages is a single text link to a related piece, or a `Try Claude` link in the running text of a product page.

## How to use this document

When the skill makes a claim about how Anthropic does something, the claim should either:
1. Cite a corresponding entry in this document, or
2. Be marked as a *derivation* — a stylistic move that fits the system but is the skill author's choice, not Anthropic's.

Keeping these two categories separate is what prevents the skill from drifting into "I imagine Anthropic would do this" over time.
