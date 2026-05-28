# Anti-Patterns

Specific failure modes that make a result feel "AI-generated" instead of designed in this style. Each entry pairs the bad pattern with what to do instead.

## Color & background

### Pure white background
**Wrong:** `background: #ffffff;` or `bg-white` on the page body.
**Right:** `background: var(--surface);` (`#faf9f5`).
**Why:** Cream is the single biggest tell. Pure white reads as generic SaaS regardless of what else you do.

### Purple-to-blue gradients
**Wrong:** `background: linear-gradient(135deg, #6366f1, #8b5cf6);` on hero sections.
**Right:** Solid cream, with one terra-cotta element (a button, a heading word, a small graphic). If you must gradient, fade between two close shades of cream/gray.
**Why:** This specific gradient is the most recognizable AI-design cliché.

### Painting whole sections in the brand color
**Wrong:** Hero with terra cotta background. Footer with terra cotta background. CTA bar with terra cotta background.
**Right:** Terra cotta on primary buttons, key links, occasional accent shapes. Sections sit on cream.
**Why:** The accent works because it's rare. Wallpapering it kills the effect.

### Mixing accents in one component
**Wrong:** A card with a blue border, orange title, and green icon.
**Right:** Pick one accent per component. Cycle accents *across* layout sections.
**Why:** The system relies on accents punctuating, not blending.

### Pure black text
**Wrong:** `color: #000;` or `color: black;`.
**Right:** `color: var(--text);` (`#141413`).
**Why:** Pure black on cream creates harsh, almost-vibrating contrast. The slight warmth of `#141413` reads as printed.

## Typography

### Sans-serif body
**Wrong:** Inter, Roboto, Arial, or `system-ui` for paragraph copy.
**Right:** A serif (Tiempos, Lora, or Georgia as last resort) for body text.
**Why:** Serif body is the most distinctive choice in this system. Lose it, lose the editorial feel.

### Inter
**Wrong:** Using Inter for anything.
**Right:** Poppins for headings (or Styrene if licensed). Lora for body (or Tiempos if licensed).
**Why:** Inter is the visual signature of generic tech-startup design. Anthropic explicitly avoids it.

### Body weight 300 / "thin and elegant"
**Wrong:** `font-weight: 300;` for body text.
**Right:** `400` for regular, `500` for medium emphasis, `600` for bold.
**Why:** Thin weights look elegant in mockups and unreadable in production, especially in serifs.

### Bold weight 700+
**Wrong:** `font-weight: 700;` or `800` for headings.
**Right:** `600` is the heaviest weight. Use `500` for sub-headings.
**Why:** Heavy bold competes with the calm serif body. The whole system is composed; heavy weights feel shouty.

### All-caps for body or button labels
**Wrong:** `text-transform: uppercase` on buttons, paragraphs, hero subheads.
**Right:** All-caps is reserved for editorial meta lines (article date/category) and small overlines. Use the caption size with `letter-spacing: 0.04em`.
**Why:** All-caps everywhere screams "branding" in a way that breaks the editorial calm.

### Cramped line-height
**Wrong:** Default browser line-height (~1.2) on body text.
**Right:** `line-height: 1.6` on body, `1.65` for long-form.
**Why:** Serif body needs room to breathe. Tight leading makes it feel like a form, not prose.

## Layout & spacing

### Centered hero with badge → headline → subhead → two buttons
**Wrong:** The default AI-generated landing-page hero, where everything is centered, the buttons are pill-shaped, and there's a small "✨ New" badge above the headline.
**Right:** Vary the layout. Try left-aligned. Try an editorial split (text left, image right). Skip the badge unless there's actual news.
**Why:** This exact composition is the most cloned pattern in AI-generated design.

### Three-column feature grid with icon, title, body
**Wrong:** Three identical cards with circular icons in the brand color, a headline, and two lines of body text.
**Right:** If you need a feature row, vary the cards: one with image, one with quote, one with stats. Or skip cards and use editorial column layout.
**Why:** The default grid screams "AI landing page" and tells the reader nothing.

### Cramped sections
**Wrong:** Sections with 32px or 48px vertical padding.
**Right:** 64px interior, 96px between, 128px after hero.
**Why:** Whitespace is the look. If sections feel cramped, the whole page feels generic.

### `max-width: 100%` on long-form prose
**Wrong:** Body paragraphs running edge-to-edge of a 1440px viewport.
**Right:** Cap reading width at ~720px for prose, ~960px for general content.
**Why:** Long lines kill readability. The system is editorial — treat reading like a magazine does.

## Surfaces & elevation

### `rounded-2xl` everywhere
**Wrong:** Every card, button, and input with very-rounded corners.
**Right:** Buttons and surfaces at 6–8px. Inputs at 4px. Pills only on tags.
**Why:** Heavy rounding is the visual language of modern consumer SaaS, not editorial calm.

### `shadow-xl` on cards
**Wrong:** Cards floating with heavy drop shadows.
**Right:** Cards with a 1px border on cream, no shadow. Use shadow only for modals.
**Why:** The system prefers borders to shadows. Heavy shadows compete with the cream's quietness.

### Glass / glassmorphism
**Wrong:** `backdrop-filter: blur(...)` with translucent backgrounds.
**Right:** Solid backgrounds (cream or white card). The system is paper, not glass.
**Why:** Glassmorphism is a phase that doesn't fit the editorial register.

### Neon glow shadows
**Wrong:** `box-shadow: 0 0 40px rgba(99, 102, 241, 0.5);`
**Right:** No glow shadows ever.
**Why:** Glow is futuristic / gaming / consumer — the wrong register.

## Buttons & interaction

### Pill buttons
**Wrong:** `border-radius: 999px` on buttons.
**Right:** `border-radius: var(--radius)` (6px). Pills only for tags and status chips.
**Why:** Pill buttons read as decorative. The system favors restrained shapes.

### Two primary buttons side by side
**Wrong:** Hero with both `Get started` and `Learn more` as filled terra-cotta buttons.
**Right:** One primary (filled), one secondary (outline) or tertiary (text). Hierarchy.
**Why:** Two primaries = no primary.

### Icons inside every button
**Wrong:** Every button has a leading icon.
**Right:** Icons on actions where they aid recognition (download, share, external link). Plain text otherwise.
**Why:** Icons are utilitarian punctuation, not decoration.

### Excessive hover effects
**Wrong:** Cards that scale 1.05, change colors entirely, and add glow on hover.
**Right:** A 1px lift, a slightly stronger border, maybe a tint shift.
**Why:** Loud hovers feel like a portfolio site, not editorial.

### Bouncy springs
**Wrong:** `transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55)` (with overshoot).
**Right:** `var(--ease-out)` — gentle deceleration, no overshoot.
**Why:** Bounce is toy-like; the whole system is composed.

## Iconography

### Emoji as icons
**Wrong:** Using 🚀 ⭐ ✨ 🎨 in headers and feature lists.
**Right:** Line icons (Lucide, Phosphor) at 1.5–2px stroke, in `--text-muted`. Or no icons at all.
**Why:** Emoji read as casual/social-media; the system is editorial. Line icons read as considered.

### Filled icon sets
**Wrong:** Heavy filled icons in the brand color.
**Right:** Outline icons, thin stroke, in `--text-muted` or `--text`.
**Why:** Filled icons compete with type for attention.

### Mixed icon styles
**Wrong:** Lucide outlines next to Material Icons filled next to emoji.
**Right:** One icon library, one weight, throughout the project.
**Why:** Mixed styles read as "I assembled this from templates."

## Imagery

### Stock photography of diverse hands holding phones
**Wrong:** The standard B2B SaaS photo bank.
**Right:** Custom illustration, abstract photography (like Anthropic's actual photography of objects/light), or no imagery — let typography carry it.
**Why:** Generic photos broadcast "template."

### Product screenshots floating on gradients
**Wrong:** A laptop mockup at 15° angle with a screenshot, on a purple gradient.
**Right:** Inline product screenshots with a 1px border on cream, no perspective, no decoration.
**Why:** The mockup-on-gradient is another major cliché.

## Content & copy basics

These are the simplest content-level tells. The deeper voice/copy reset lives in the *Copy & voice* section further down.

### "Effortless. Powerful. Built for you."
**Wrong:** Generic three-word marketing slogans.
**Right:** Specific, concrete copy. Anthropic's own headlines tend to be plain ("Claude is a space to think," "AI research and products that put safety at the frontier").
**Why:** Vague slogans read as Mad Libs.

### Lots of bold inside paragraphs
**Wrong:** Every other phrase bolded for "emphasis."
**Right:** Bold structurally (subheads, key terms). Use italic for inline emphasis.
**Why:** Over-bolded copy looks like a sales pitch, not editorial.

## Forms

### Floating labels
**Wrong:** Labels that animate up into the input border on focus.
**Right:** Labels above inputs in heading font, small size, weight 500.
**Why:** Floating labels are a Material Design pattern; they don't fit here. They're also worse for accessibility.

### Inputs with no border, all background tint
**Wrong:** `background: #f3f4f6; border: none;`
**Right:** White input with a 1px border on cream.
**Why:** Borderless tinted inputs are a different aesthetic (consumer mobile). Here, inputs are interactive surfaces with clear edges.

## Layout

### Magazine-issue framing on a marketing page

**Wrong:** *Issue 04 — On Quiet Tools · Vol. IV · MMXXVI* as a masthead on a product or company homepage. *§ I — Hero · § II — Plate · § III — Essay* style sectioning. Roman numerals everywhere. *Plate I.* captions on hero illustrations.
**Right:** A short statement of what the page is for, and the page itself. Section headings as plain declarative phrases (*Our approach.* / *Use cases.* / *Trust and safety.*), not as numbered chapters from a journal.
**Why:** Anthropic does not present itself as a periodical. It presents itself as a research firm. *Issue · Vol. · §* framing is an editorial-essay convention; it is appropriate when the page literally is an essay (a research note, a manifesto), and conspicuous when applied to a product or marketing page. Use the framing when the surface earns it; don't use it as a vibe.

### Three-column feature grids

**Wrong:** Three identical card slots with a circular brand-color icon, a one-word title (*Fast.* *Secure.* *Powerful.*), and two lines of copy.
**Right:** Pick the most important claim and give it space. If you genuinely have three distinct claims, write them out as paragraphs or short sections, not as visually-equivalent tiles.
**Why:** The three-card grid is the most cloned pattern in AI-generated design. It tells the reader nothing the page couldn't say better in a sentence. Anthropic's own surfaces do not use it.

### Question-form section headings

**Wrong:** *How does it work?* / *Why us?* / *Ready to get started?*
**Right:** Statement headings: *Our approach.* / *What's new in 4.7.* / *Availability and pricing.*
**Why:** A question heading is a substitute for thinking. A statement heading commits to what the section delivers; if you can't write the statement, the section needs to be rethought.

### Testimonial carousels

**Wrong:** Three customer logos rotating on a 5-second auto-advance.
**Right:** All-or-nothing. Show every quote you have, with a discreet `01 / N` counter; or show three plainly stacked; or show none.
**Why:** A carousel rotating through three implies either there are only three or the rest were edited. Anthropic's product pages list every testimonial they have — the page becomes long, and the implicit posture is "this much real evidence, all in one place."

### Pricing teasers that bounce to a sales form

**Wrong:** A pricing section that says *Custom pricing built for your business* and links to a contact form.
**Right:** The actual price, written into the body of the page where the question naturally arises. *Pricing for Opus 4.7 starts at $5 per million input tokens and $25 per million output tokens.*
**Why:** Hiding pricing fails the *honesty over reassurance* test. If you know the number, write the number.

## Copy & voice

The fastest way to make an Anthropic-styled page feel un-Anthropic is to leave default marketing copy in it. The visual tokens lose their effect immediately.

### Marketing-deck headlines

**Wrong:** *Effortless. Powerful. Built for you.* — three abstract adjectives in a row.
**Right:** *Claude is a space to think.* — one sentence, specific, true.
**Why:** Generic three-word slogans are the verbal equivalent of a purple gradient. They could belong to any product.

### Cheerful microcopy

**Wrong:** *🎉 Awesome! Your changes are saved!*
**Right:** *Saved.*
**Why:** The user already knows they pressed save. Confetti is condescending. The terse confirmation respects their attention.

### Sycophantic AI replies and labels

**Wrong:** *Great question! I'd love to help with that! ✨*
**Right:** Answer the question, in plain prose, with the same register a thoughtful colleague would use.
**Why:** Sycophancy degrades trust. A model — or an interface — that flatters everything is communicating that it isn't reading carefully.

### Apologetic error states

**Wrong:** *Oh no! Something went wrong 😢 Don't worry, we're on it!*
**Right:** *That request didn't go through. Try again, or [contact support].*
**Why:** Three lies in a row. The product doesn't know if it's "on it." Don't promise.

### Generic AI disclaimers

**Wrong:** A footer or banner that says *AI can make mistakes. Verify responses.*
**Right:** Surface what's actually true at the moment of use. *Drafted from your March outline · [Open source]*. *Estimate. Updated 3 minutes ago*. *Using Sonnet · [change]*.
**Why:** The disclaimer is corporate self-protection, not user protection. Provenance and state are user protection.

### Engagement nudges

**Wrong:** Streaks, daily badges, *🔥 You're on a 7-day streak!*, red-dot notification badges that count unread anything.
**Right:** Remove. If something needs the user's attention, name it once, where it belongs.
**Why:** These are casino patterns, dressed in product clothing. They optimize for the org's metrics, not the user's life.

### Marketing modals interrupting the work

**Wrong:** A surprise lightbox that asks the user to upgrade, rate, share, or join the newsletter while they're in the middle of a task.
**Right:** A quiet line at the edge of the workspace, dismissible, that doesn't require interaction. Or no nudge at all.
**Why:** Hijacking attention you didn't earn is the opposite of "the work is the page."

## Naming

### Number-suffix tier names

**Wrong:** *Free · Pro · Plus · Premium · Ultra*. Tiers named with non-descriptive ladder words (*Plus*, *Premium*, *Ultra*) where every tier overlaps with every other and the buyer has to read three pages to figure out what's actually different.
**Right:** Use the boring industry words *exactly* — *Free · Pro · Max · Team · Enterprise* — but make sure the *contents* of each tier are unambiguously described in one line. Don't rename tiers to artistic nouns (*Sketch · Draft · Manuscript*) just to look distinctive: that steals the register that should go to the more important product names. The tier label should be background; the description should do the work.
**Why:** *Haiku / Sonnet / Opus* is a worked example of when a register shift is appropriate — the model family benefits from suggesting scope, and the names are a real description of what each model is for. SaaS plans don't have that benefit. They are commercial instruments, and the calm path is to name them plainly and trust the rest of the page to communicate the differences.

### Generic feature names

**Wrong:** *Smart Mode*, *Auto-Magic*, *AI Assistant Pro*.
**Right:** Names that describe what the feature does in one breath. If you can't, the feature might not be coherent enough to ship.

## Interaction

### Friction-free destructive actions

**Wrong:** A Delete button that pops a `Are you sure?` modal with `Cancel` and `Delete` and nothing else.
**Right:** A confirmation that summarizes the consequence in plain language. *This will remove the December 14 draft. There's no undo. [Cancel] [Delete draft].*
**Why:** "Are you sure?" is noise. The user always says yes. The consequence is what makes them pause when pausing matters.

### Generic loading spinners

**Wrong:** A spinner that just spins, with `Loading…` underneath.
**Right:** Either no message (if the wait is brief) or a sentence that says what's happening. *Reading your draft… · Pulling latest from Stripe… · Generating outline (45 seconds).*
**Why:** A specific message is more useful than a generic one and suggests the system knows what it's doing.

### Empty states that lecture

**Wrong:** *Welcome! Get started in 3 easy steps! ✨ 1. Connect your account 2. Upload a file 3. Generate magic!*
**Right:** A real question, or a quiet prompt to begin. *What are you working on?* — and a single input.
**Why:** A tutorial in an empty state is a moat between the user and the work. The user came to do something; let them.

### Conversational chrome around output the user wants to focus on

**Wrong:** A 200-line generated document, wrapped as a chat bubble, with the assistant's avatar pinned to its left and a timestamp underneath.
**Right:** Output of any size or weight gets its own panel. Conversation is conversation; canvas is canvas.
**Why:** A document is not a message. The chrome that helps you read a chat actively impedes reading a document.

### Auto-rotating hero carousels

**Wrong:** Three rotating hero slides on the marketing page.
**Right:** Pick one hero. The one you would put up if you could only put up one.
**Why:** A carousel is a way to avoid a decision. The user pays for the indecision in attention.

## Quick recovery

If you've made something and it still feels off, run the gut check.

**Visual (the cheap fixes):**

1. Is the background cream, not white?
2. Is the body text in a serif?
3. Does terra cotta appear, but not dominate?
4. Are corners 6–8px (not 16–24px)?
5. Are shadows replaced by borders?
6. Are sections breathing (≥64px vertical)?
7. Are there any purple gradients, Inter text, or pill buttons?

**Posture (the real fixes):**

8. Read the headline aloud — would you stand by it in a meeting?
9. Are any emojis or exclamation points doing work that prose could do?
10. Does any irreversible action explain itself, or just ask "Are you sure?"
11. Are streaks, badges, red dots, and engagement nudges gone?
12. Does generated content have its own room, not a chat bubble?
13. Do tier and feature names describe what they're for?
14. Does the page push back where pushing back would be more honest?

Fix any "no" before declaring done. The bottom seven matter more than the top seven.
