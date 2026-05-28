---
name: "anthropic-ui-skill"
displayName: "Anthropic-Inspired Product Design"
description: "Apply Anthropic-inspired product design — not just visuals, but posture. Warm cream backgrounds, terra-cotta accents, geometric sans-serif headings paired with serif body text, generous whitespace, editorial calm. The harder, more durable difference is intent: treat the user as a collaborator (not a metric); use friction on purpose for consequential actions; refuse sycophantic copy and engagement-maximizing patterns; name things with care; give generated work its own room; choose honesty over reassurance. Use when the user wants an Anthropic, Claude, or 'looks-like-Claude' experience; asks for a warm minimalist, editorial, or research-paper aesthetic; mentions terra cotta, cream, Styrene, Tiempos, Poppins, or Lora; needs reusable design tokens, components, motion, or copy in this style; or asks for frontend design work without specifying a different aesthetic. Use it to retrofit existing projects too. Skip when the user explicitly asks for a different look (Material, iOS, brutalist, Linear-style) or when the work is purely backend or non-visual."
keywords:
  - "anthropic"
  - "claude"
  - "design"
  - "ui"
  - "aesthetic"
  - "frontend"
  - "minimalist"
  - "editorial"
  - "warm"
  - "cream"
  - "terra cotta"
  - "serif"
  - "tokens"
  - "design system"
  - "landing page"
  - "dashboard"
  - "marketing"
  - "retrofit"
  - "styrene"
  - "tiempos"
  - "poppins"
  - "lora"
author: "shiahonb777"
license: "MIT"
repositoryUrl: "https://github.com/shiahonb777/anthropic-ui-skill"
---

# Anthropic-Inspired Product Design

This skill is the difference between a page that *looks like* Anthropic and a product that *behaves like* Anthropic. The first is a palette and a font stack. The second is a posture toward the people using the software — and that's where the real signature lives.

This is *inspired by* Anthropic's public design language and writing about it. It is not an official Anthropic product, does not use Anthropic logos or marks, and does not claim affiliation.

## When to use

- The user asks for a new page, landing site, dashboard, or app UI without specifying a different aesthetic.
- They mention "Anthropic", "Claude", "looks like Claude", "warm minimalist", "editorial", "research-paper feel".
- They mention any of the design tokens by name: terra cotta, cream, Styrene, Tiempos, Poppins, Lora.
- They have an existing default-Tailwind / default-shadcn / default-MUI project and want it restyled.
- They need design tokens, components, copy, or motion in this register.

Skip when the user explicitly wants Material, iOS, brutalist, Linear-style, or another defined aesthetic, or when the work is purely backend or non-visual.

## Three layers, in priority order

If a lower layer isn't right, the upper layer can't save the result.

### Layer 1 — Posture

What the product believes is worth doing. This matters more than the palette.

- The user is a collaborator, not a metric. No engagement layers, streaks, red badges, or "🔥 New!" ribbons.
- Friction is a feature when the work is consequential. A pause that surfaces the cost of an action ("here's what I'm about to do, continue?") is design taking the user seriously.
- Honesty over reassurance. Replace generic AI disclaimers with provenance, state, timestamps, and the actual consequence of an action.
- Voice is a design surface. `Saved.` is not the same product as `🎉 Awesome! Your changes are saved!`.

See [`steering/intent.md`](steering/intent.md) for the full posture/voice/naming rules with examples.

### Layer 2 — Composition

What makes pages *feel* like Anthropic.

- Whitespace does the heavy lifting. Sections breathe. Density only increases for utilitarian surfaces — tables, code, dense settings.
- Editorial layout, not landing-page layout. Vary alignment. Use a measure (~640px) for prose. Use rules and columns. Skip the centered-hero / three-feature-grid / quote / CTA assembly.
- Give generated work its own room. A document, chart, image, or a code block longer than ten lines does not belong as a chat bubble. Side panel, focused view, pinned region.
- Naming follows the register. Use poetic forms (*Haiku · Sonnet · Opus*) only where a register shift is earned. SaaS tiers stay plain (*Pro · Max · Team · Enterprise*); projects get proper code-names.
- Statement paragraphs do the work that subheads pretend to do. Key claims get their own paragraph in the body face, no styling, sandwiched in the prose.
- Embed CTAs in real sentences. Section headings are declarative, not interrogative. Lists of writing are typography, not card grids. Show the actual count (`01 / 27`), not a rotating carousel of three. Pricing is a number on the page, not a CTA.

### Layer 3 — Visuals

The part most people stop at.

- Backgrounds are never pure white. Use `#faf9f5` (warm cream).
- Body text is a serif. Tiempos first; Lora as the licensed-free fallback.
- Headings are geometric sans. Styrene first; Poppins as the licensed-free fallback.
- Terra cotta `#d97757` is the signature, used sparingly (< 5% of the viewport).
- Accent colors cycle, they don't blend. Pick one per element.
- Corners are restrained (4–8px). Pills only on tags.
- Borders, not shadows, do most of the separation work.
- Motion is quiet — staggered fades, soft easing, no overshoot, durations 300–600ms.

**Avoid these defaults:** purple-to-blue gradients, Inter / Roboto for body, `rounded-2xl shadow-xl` on every card, emoji as icons, centered hero with badge + headline + two pill buttons, three-card feature grid with circular brand-coloured icons, "Pro · Plus · Premium" pricing tables.

Full token reference, with rationale, in [`steering/tokens.md`](steering/tokens.md).

## Workflows

### Building from scratch

1. Decide what the page *is*. An essay, a workspace, a settings panel, a single-purpose tool. Format determines layout.
2. Write the most important sentence first, in plain language. Hero headline. Empty-state copy. CTA. If it reads like a marketing brief, the layout will too.
3. Drop in tokens. Copy the `:root` block from [`docs/preview.html`](docs/preview.html).
4. Set up the font stack. Add Google Fonts links for Poppins + Lora as the no-license fallback. If the user has Styrene/Tiempos licenses, add `@font-face` blocks.
5. Lay out with whitespace, not boxes. Resist wrapping everything in cards.
6. Pick one accent per area, cycle across layout.
7. Add motion last. See [`steering/motion.md`](steering/motion.md).
8. Write microcopy with the same care as layout. Walk every label past the table in [`steering/intent.md`](steering/intent.md).
9. Verify against [`docs/preview.html`](docs/preview.html) — the single-frame specimen of the system.
10. Run the posture checklist at the bottom of [`steering/intent.md`](steering/intent.md).

### Retrofitting existing code

The user has a default-Tailwind / default-shadcn / default-MUI project and wants it Anthropic-styled. Don't redesign — *retune*. Full procedure in [`steering/retrofit.md`](steering/retrofit.md). Short version:

1. Audit the copy first, not the colors. Headlines, CTAs, empty states, error messages, loading text. List every emoji, every exclamation point, every "Awesome!". Most should leave.
2. Audit the palette. Map current colors to ours: `bg-white` → cream, primary blue/purple → terra cotta, gray scale → ours.
3. Swap fonts. Body to serif. Headings to Poppins/Styrene.
4. De-shadow, re-border. Replace heavy shadows with `1px` borders.
5. Tame the radii. `rounded-2xl` everywhere → 6–8px. Pills only on tags.
6. Reduce accent surface area. Dial the primary color back to button-and-link sized usage.
7. Add the off-white. One swap (`#faf9f5`) does most of the visual work.
8. Audit interactions. Replace "Are you sure?" with the actual consequence. Remove streaks and engagement nudges.
9. Verify against [`docs/preview.html`](docs/preview.html) side-by-side.

### Tokens-only

The user just wants the palette / type scale / design tokens. Point them at [`steering/tokens.md`](steering/tokens.md) (full reference) and [`docs/preview.html`](docs/preview.html) (copy-paste-ready `:root` block).

### One component

Read [`steering/components.md`](steering/components.md), lift the relevant pattern, adapt to their framework. Check the corresponding posture note in [`steering/intent.md`](steering/intent.md) before shipping (e.g., for buttons: what does this button *say* it does?).

## Reference files

Detailed guidance lives in [`steering/`](steering/). Load on demand based on the user's task.

- [`steering/intent.md`](steering/intent.md) — posture, voice, naming, friction. Read first for non-trivial work.
- [`steering/tokens.md`](steering/tokens.md) — full token system: palette, type scale, spacing, motion, with rationale.
- [`steering/components.md`](steering/components.md) — button / input / card / nav / table patterns.
- [`steering/motion.md`](steering/motion.md) — easing, page-load choreography, scroll reveal.
- [`steering/retrofit.md`](steering/retrofit.md) — step-by-step restyling of existing code.
- [`steering/anti-patterns.md`](steering/anti-patterns.md) — what to avoid, with replacements.
- [`steering/observations.md`](steering/observations.md) — field notes from anthropic.com.
- [`steering/aesthetics-prompt.md`](steering/aesthetics-prompt.md) — how this skill relates to Anthropic's general frontend-aesthetics cookbook.
- [`docs/preview.html`](docs/preview.html) — single-frame design specimen with every primitive in one HTML page.

## Quality checklist

Run before declaring done. Top section is non-negotiable; bottom is the visual baseline.

**Posture**

- [ ] The most important sentence on the page is plain, specific, and unembarrassing to read aloud.
- [ ] Every CTA, button, and label says what the action *does*, not how exciting it is.
- [ ] No emoji in microcopy. No exclamation points outside genuine errors.
- [ ] Irreversible actions surface their consequences in plain language, not "Are you sure?".
- [ ] No engagement nudges (streaks, badges, "🔥 New!", red dots).
- [ ] Generated content has its own room, not a chat bubble.
- [ ] Names of tiers, modes, features describe what they're for.

**Visual**

- [ ] Background is `#faf9f5`, not `#ffffff`.
- [ ] Body text uses a serif.
- [ ] Terra cotta appears, but doesn't dominate (< 5% of the viewport).
- [ ] At most one accent color per component.
- [ ] Borders, not shadows, do most of the separation work.
- [ ] Radii are 4–8px (pills only for tags).
- [ ] Sections have real breathing room (≥ 64px vertical).
- [ ] Page-load motion is staggered, easing soft, durations 300–600ms.
- [ ] No purple gradients, no Inter, no `rounded-2xl shadow-xl`.

If something feels off, the gap is almost always in the posture section. Open [`docs/preview.html`](docs/preview.html), read its copy, then read your copy. Adjust until they sound like they were written by the same person.
