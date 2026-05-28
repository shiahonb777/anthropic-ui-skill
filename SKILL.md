---
name: anthropic-ui-skill
description: Apply Anthropic-inspired product design — not just visuals, but posture. Warm cream backgrounds, terra-cotta accents, geometric sans-serif headings paired with serif body text, generous whitespace, and editorial calm are the surface. The harder, more durable difference is intent: the product treats the user as a collaborator, not a metric; uses friction on purpose; refuses sycophantic copy and engagement-maximizing patterns; names things with care; gives generated work its own room; and chooses honesty over reassurance. Use this skill whenever the user wants an Anthropic, Claude, or "looks-like-Claude" experience; asks for a warm minimalist, editorial, or research-paper aesthetic; mentions terra cotta, cream, Styrene, Tiempos, Poppins, or Lora; needs reusable design tokens, components, motion, or copy in this style; or asks for frontend design work (landing pages, dashboards, app UIs, marketing sites, login flows, AI products) without specifying a different aesthetic. Use it to retrofit existing projects too. Skip only when the user explicitly asks for a different look (Material, iOS, brutalist, Linear-style, etc.) or when the work is purely backend or non-visual.
---

# Anthropic-Inspired Product Design

This skill is about the difference between a page that *looks like* Anthropic and a product that *behaves like* Anthropic. The first is a palette and a font stack. The second is a posture toward the people using the software — and that's where the real signature lives.

Most of what follows is therefore not about color. It's about what the product believes is worth doing.

This is *inspired by* Anthropic's public design language and writing about it. It is not an official Anthropic product, does not use Anthropic logos or marks, and does not claim affiliation.

## What this skill is, and what it isn't

This skill is **one specific theme constraint** within Anthropic's broader frontend-aesthetics methodology — the *Anthropic-editorial* register: warm cream, terra-cotta accents, serif body, generous whitespace, calm motion, voice that doesn't flatter.

It is **not** Anthropic's general advice for "good frontend." That's a separate document, [Anthropic's frontend-aesthetics cookbook](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb), which deliberately advocates *variety* — different fonts, themes, and aesthetics across different projects, with the only constant being the rejection of "AI slop" defaults.

This skill agrees with the cookbook's methodology (avoid converging defaults; address each design dimension explicitly; commit to an aesthetic) but takes a strong opinion on *which* aesthetic. The cookbook's example SaaS page chooses atmospheric gradients, pill CTAs, and a Syne/DM Sans display pairing; this skill chooses solid cream, inline-link CTAs, and Styrene/Tiempos. Both are legitimate. **Pick this skill when you want the editorial register specifically, the cookbook's general prompt when you want variety.**

For a longer treatment of this distinction — including how to use parts of the skill in isolation — see `steering/aesthetics-prompt.md`.

## What "looking like Claude" actually means

Three layers, in priority order. If the lower layer isn't right, the upper layer can't save the result.

### Layer 1 — Posture (the part that matters most)

> "It should be a sparring partner with you. It shouldn't take your thoughts verbatim. It should push back."
> — Joel Lewenstein, Head of Product Design, Anthropic

1. **The user is a collaborator, not a metric.** No engagement layer. No infinite scroll. No red badges. No "you're on a 7-day streak!" The job is to leave the user further along than when they arrived, then get out of the way.
2. **Friction is a feature when the work is consequential.** A pause that surfaces the cost of an action is better UX than a frictionless mistake. A `Plan Mode`-style step ("here's what I'm about to do, continue?") is design taking the user seriously.
3. **Honesty over reassurance.** The product should tell the user what it is, what it isn't, what it's doing, and where it's wrong. Generic disclaimers ("AI can make mistakes — verify responses") are a substitute for actual transparency. Replace them with provenance, state, and timestamps.
4. **Voice is a design surface.** Microcopy is not decoration. `Saved.` is not the same product as `🎉 Awesome! Your changes are saved!`. Pick one and live with the rest of what it implies.

### Layer 2 — Composition (the part that makes pages feel like Anthropic)

5. **Whitespace does the heavy lifting.** Sections breathe. Density only increases for utilitarian surfaces — tables, code, dense settings. The page is paper, not a panel.
6. **Editorial layout, not landing-page layout.** Vary alignment. Use a measure (~640px) for prose. Use rules, columns, and old-style numerals. Skip the centered-hero / three-feature-grid / quote / CTA assembly when you can. It's the visual signature of every AI-generated landing page.
7. **Give generated work its own room.** Output the user will work with — a document, a chart, a code block longer than ten lines, an image — does not belong as a chat bubble. Side panel, focused view, pinned region. Conversation and canvas are different things.
8. **Naming follows the register of the thing.** Use poetic forms (*Haiku · Sonnet · Opus*) only where a register shift is earned — typically a model family or creative product. SaaS tiers stay plain (*Pro · Max · Team · Enterprise*); projects get proper code-names (*Project Glasswing*). Don't rename tiers to artistic nouns; let the boring industry words be background so more important names can carry weight.
8a. **Statement paragraphs do the work that subheads pretend to do.** A key claim — *Claude will remain ad-free.* / *Conversations with AI assistants are meaningfully different.* — gets its own paragraph in the body face, with no styling, sandwiched in the prose. No bold. No pull-quote. No color. Isolation is enough.
8b. **Embed CTAs in real sentences.** *AI [research] and [products] that put safety at the frontier* — the bracketed words are the primary CTAs. Before designing a button, check whether a link inside a real sentence does the job. The reader is reading anyway.
8c. **Section headings are declarative, not interrogative.** *Our approach.* not *How does it work?* If the statement-heading sounds banal, the section probably is, and should be cut or merged.
8d. **Lists of writing are typography, not card grids.** News, research, and articles default to text rows: `Date · Category · Title · One-sentence description`. Reach for a thumbnail only when an image meaningfully changes whether a reader will click.
8e. **Show the actual count.** When you have testimonials, articles, or releases, show all of them, paginated only by an honest counter (`01 / 27`). A carousel rotating through three implies either there are only three or the rest were edited; both readings undermine trust.
8f. **Pricing is a number on the page, not a CTA.** Write the actual price into the body text where the question lives. Pricing teasers that bounce the user to a sales form fail the *honesty over reassurance* test from Layer 1.

### Layer 3 — Visuals (the part most people stop at)

9. **Backgrounds are never pure white** (`#faf9f5`). **Body text is a serif.** **Terra cotta `#d97757` is the signature, used sparingly.** **Accent colors cycle, they don't blend.** **Corners are restrained** (6–8px). **Motion is quiet** (staggered fades, soft easing, no overshoot).
10. **No purple gradients, no Inter, no `rounded-2xl shadow-xl`, no emoji as icons, no centered hero with badge + headline + two pill buttons.** These are the visual signatures of generic AI-generated frontends. Avoiding them is not optional.

The ten points are listed in the order that matters. If you start with point 9 and skip points 1–4, you'll produce a page that looks Anthropic-adjacent and behaves nothing like it. That's the failure mode this skill exists to prevent.

## When you're invoked

Figure out which of these the user is asking for, then jump to the right workflow.

- **From zero** — they want a new page, component, or app styled this way. Read `steering/intent.md` first, then go to "Workflow: building from scratch."
- **Retrofit** — they have existing code and want it restyled. Skim `steering/intent.md` for the copy/posture reframe, then read `steering/retrofit.md`.
- **Tokens only** — they want the palette, type scale, or design tokens. Point them at `steering/tokens.md` (full reference) and `docs/preview.html` (copy-paste-ready `:root` block).
- **One component** — read `steering/components.md`, lift the relevant pattern, adapt to their framework. Check the corresponding posture note in `steering/intent.md` before shipping (e.g., for buttons: what does this button *say* it does?).

If it's ambiguous, ask once: "Are we restyling visuals, or do you want me to also rework the copy and the interaction posture to match?" Then proceed.

## Quick token reference

The full reference with rationale, do/don'ts, and edge cases lives in `steering/tokens.md`. This is the at-a-glance version.

### Colors

```
Surfaces
  --surface         #faf9f5   Warm cream — base canvas (NEVER pure white)
  --surface-sunken  #f3f1ea   Slightly darker cream — subtle panels
  --surface-raised  #ffffff   Cards/modals only — used sparingly, with a soft border

Text
  --text            #141413   Near-black (NOT pure black — pure black on cream is harsh)
  --text-muted      #6b6a64   Secondary text, captions
  --text-faint      #b0aea5   Disabled, placeholder, meta info

Borders / dividers
  --border          #e8e6dc   Default border
  --border-strong   #c9c5b8   Higher-contrast divider when needed

Accents (use one per element, cycle across a layout)
  --accent          #d97757   Terra cotta — primary signature
  --accent-blue     #6a9bcc   Mist blue — secondary
  --accent-green    #788c5d   Olive green — tertiary

Semantic
  --success         #788c5d   (reuses accent-green)
  --warning         #d97757   (reuses accent terra cotta — sparingly)
  --danger          #b54545   Muted brick red — only for destructive
  --info            #6a9bcc   (reuses accent-blue)
```

### Typography

The first-class fonts are **Styrene** (headings) and **Tiempos** (body) — what Anthropic actually uses on anthropic.com. They're commercial, so we ship a graceful open-source fallback chain.

```css
/* Headings — Styrene first, Poppins as licensed-free fallback */
font-family: "Styrene A", "Styrene B", "Poppins", "Helvetica Neue", Arial, sans-serif;

/* Body — Tiempos first, Lora as licensed-free fallback */
font-family: "Tiempos Text", "Tiempos", "Lora", Georgia, "Times New Roman", serif;
```

Type scale (modular, ratio ~1.25 — see `steering/tokens.md` for full rationale):

```
Display   3.5rem  / 1.05 / -0.02em   weight 600   (hero only)
H1        2.5rem  / 1.1  / -0.015em  weight 600
H2        2rem    / 1.15 / -0.01em   weight 600
H3        1.5rem  / 1.25 / -0.005em  weight 500
H4        1.25rem / 1.3            weight 500
Body L    1.125rem / 1.65          weight 400  (long-form prose)
Body      1rem    / 1.6            weight 400
Small     0.875rem / 1.5           weight 400
Caption   0.75rem  / 1.4           weight 400  letter-spacing 0.02em
```

Body weight is `400`. Bold is `600`, never `700`. Use old-style numerals (`font-feature-settings: "onum"`) in prose; lining + tabular numerals in chrome.

### Spacing & layout

4px base unit. Most-used steps: 8 / 16 / 24 / 40 / 64 / 96. Sections breathe at 96–128px vertical. Long-form measure ~640px. App shells ~1200px.

### Radius

```
--radius-sm   4px   Inputs, small controls
--radius      6px   Buttons, default surfaces
--radius-md   8px   Cards, panels
--radius-lg   12px  Modal, large surface
--radius-pill 999px Tags, status chips only
```

### Shadow

Almost none. The look prefers *borders* over shadows.

```
--shadow-sm   0 1px 2px rgba(20, 20, 19, 0.04)
--shadow      0 2px 8px rgba(20, 20, 19, 0.06)
--shadow-lg   0 8px 24px rgba(20, 20, 19, 0.08)   /* modals only */
```

Never neon glow shadows. Never `shadow-2xl`.

## Workflow: building from scratch

When the user asks for a new page, component, or app:

1. **Decide what the page is.** Not "a landing page." A *what* — an essay, a workspace, a settings panel, a single-purpose tool. The format determines the layout, not the other way around. A page that's actually one paragraph long should be one paragraph long.

2. **Write the most important sentence first, in plain language.** The hero headline. The empty-state copy. The CTA. Get them honest before designing around them. If the sentence reads like a marketing brief, the layout will too. See `steering/intent.md` for the voice register.

3. **Drop in tokens.** Copy the `:root` block from `docs/preview.html` — every variable is defined inline there. For a Tailwind project, see the preset shown in `steering/retrofit.md`.

4. **Set up the font stack.** Add `<link>` tags for Poppins and Lora from Google Fonts as the no-license fallback. If the user has Styrene/Tiempos licenses, add `@font-face` blocks pointing at their licensed files; the font-family stacks in `steering/tokens.md` already prefer Styrene/Tiempos first.

5. **Lay out with whitespace, not boxes.** Resist wrapping everything in cards. Most sections on anthropic.com are text on cream with generous padding. Cards appear when there's a real reason to group.

6. **Pick one accent per area, cycle across layout.** Hero uses terra cotta. Next section uses olive. Next uses blue. Don't mix within a single component.

7. **Add motion last.** First paint: stagger fade-and-rise on top-level groups. Hover: subtle background shift or 1–2px translate. Never use motion as ambient texture. See `steering/motion.md`.

8. **Write the microcopy with the same care as the layout.** Buttons. Empty states. Toasts. Errors. Loading messages. Disclaimers. Walk through every label once and check it against the table in `steering/intent.md`.

9. **Reference the specimen.** `docs/preview.html` is a single-frame poster that renders every primitive in the system at once — every token defined inline, every component shown. It is the *shape of correct* you're matching.

10. **Run the posture checklist** at the bottom of `steering/intent.md` before declaring done.

## Workflow: restyling existing code

The user has a project (often default Tailwind, default shadcn, default MUI) and wants it to look Anthropic. Don't redesign — *retune*.

The full procedure with examples is in `steering/retrofit.md`. The short version:

1. **Audit the copy first, not the colors.** Headlines, CTAs, empty states, error messages, loading text. List every emoji, every exclamation point, every "Awesome!" and "Oops!". Most of them should leave. The retrofit is mostly invisible if you stop at colors.
2. **Audit the palette.** Map current colors to ours: `bg-white` → cream surface, primary blue/purple → terra cotta, gray text → our text/text-muted scale.
3. **Swap the fonts.** Body to serif. Headings to Poppins/Styrene.
4. **De-shadow, re-border.** Replace heavy shadows with `1px` borders.
5. **Tame the radii.** `rounded-2xl` everywhere → 6–8px. Pills only on tags.
6. **Reduce accent surface area.** If their primary color paints whole hero sections, dial it back to button-and-link sized usage.
7. **Add the off-white** (`#faf9f5`). One swap does most of the visual work.
8. **Audit the interactions.** Confirmation dialogs that say "Are you sure?" — replace with the actual consequence. Engagement nudges, streaks, "🔥 New!" ribbons — remove.
9. **Verify against `docs/preview.html`** side-by-side. The vibe should match.

## Avoid these defaults

These are the failure modes that make a result feel "generated" instead of designed. Full list with replacements in `steering/anti-patterns.md`.

**Visual:**
- **Pure white backgrounds.** Use `#faf9f5`.
- **Inter / Roboto / Arial / system-ui body text.** Use a serif for body.
- **Purple-to-blue gradients.** No gradients between accent colors.
- **`rounded-2xl` and `shadow-xl` on every card.** Restrain both.
- **Emoji as icons.** Use line icons (Lucide, Phosphor) at 1.5px stroke or skip icons entirely.
- **Filling every accent slot at full saturation.** Pick one. Let the cream and serif do the work.

**Layout:**
- **Centered hero with badge + headline + two pill buttons.** Recognizably AI-slop. Vary the layout — left-aligned, asymmetric, or editorial split.
- **Three-card feature grid with circular icons in the brand color.** Replace with editorial column layout, or skip entirely.
- **Pricing tables with `Pro · Plus · Premium`.** Name tiers after what they're for.
- **Components showcase rooms in marketing pages.** Component spec sheets do not belong on a `/` route. They belong in a separate styleguide.

**Posture:**
- **Engagement layers.** Streaks, badges, red dots, "you've earned 3 days in a row!" — remove.
- **Sycophantic copy.** "Awesome!", "Great job!", "🎉 You're all set!" — write `Saved.` instead.
- **Friction-free destructive actions.** Confirmation that says "Are you sure?" — replace with the actual consequence.
- **Generic disclaimers as a substitute for transparency.** Show provenance, model, state, timestamps. Don't paste an AI safety footer.
- **Auto-rotating hero carousels, marketing modals interrupting work, infinite scroll on workspaces.** None of these.

## File map

```
SKILL.md                    you are here — principles, quick reference, workflows
steering/
  observations.md           field notes from anthropic.com — what's actually there
  aesthetics-prompt.md      how this skill relates to Anthropic's general frontend-aesthetics cookbook
  intent.md                 posture, voice, naming, friction (read this first for non-trivial work)
  tokens.md                 full token system + rationale (palette, type, spacing, motion)
  components.md             button/input/card/nav/table/etc. patterns
  motion.md                 easing, page-load choreography, scroll reveal
  retrofit.md               step-by-step restyling of existing code
  anti-patterns.md          what to avoid and what to do instead
docs/
  preview.html              single-frame design specimen — every primitive in one HTML page
  demo.png                  rendered specimen, used by README
evals/
  evals.json                test prompts
```

## Quality checklist

Run before declaring "done." Top section is non-negotiable; bottom is the visual baseline.

**Posture:**

- [ ] The most important sentence on the page is plain, specific, and unembarrassing to read aloud
- [ ] Every CTA, button, and label says what the action *does*, not how exciting it is
- [ ] No emoji in microcopy, no exclamation points outside genuine errors
- [ ] Irreversible actions surface their consequences in plain language, not just "Are you sure?"
- [ ] No engagement nudges (streaks, badges, "🔥 New!", red dot notifications)
- [ ] Generated content the user will work with has its own room, not a chat bubble
- [ ] Names of tiers, modes, features describe what they're for, not what number they are

**Visual:**

- [ ] Background is `#faf9f5`, not `#ffffff`
- [ ] Body text uses a serif
- [ ] Terra cotta appears, but doesn't dominate (< 5% of the viewport)
- [ ] At most one accent color per component
- [ ] Borders, not shadows, do most of the separation work
- [ ] Radii are 4–8px (pills only for tags)
- [ ] Sections have real breathing room (≥ 64px vertical)
- [ ] Page-load motion is staggered, easing is soft, durations 300–600ms
- [ ] No purple gradients, no Inter, no rounded-2xl shadow-xl

If all check, you've nailed it. If something feels off, the gap is almost always in the posture section. Open `docs/preview.html`, read its copy, then read your copy. Adjust until they sound like they were written by the same person.
