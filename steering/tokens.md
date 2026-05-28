# Design Tokens — Full Reference

The Quick Reference in `SKILL.md` lists the tokens. This file explains *why* each one exists, how to use it, and what mistakes to avoid. Read this when you need to add a new token, deviate from the system, or explain a choice.

## Table of contents

- [Color](#color)
- [Typography](#typography)
- [Spacing](#spacing)
- [Layout & sizing](#layout--sizing)
- [Radius](#radius)
- [Shadow](#shadow)
- [Border](#border)
- [Opacity](#opacity)
- [Motion tokens](#motion-tokens)
- [Z-index scale](#z-index-scale)
- [Naming conventions](#naming-conventions)

---

## Color

The palette has three jobs to do, and each color belongs clearly to one of them:

1. **Surfaces** — what things sit on (cream-leaning, near-neutral)
2. **Text** — what you read (warm-near-black, no pure black)
3. **Accents** — what stands out (cycling, never combined)

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `--surface` | `#faf9f5` | Page background. The default canvas. Always. |
| `--surface-sunken` | `#f3f1ea` | Slightly lower than surface. Code blocks, table headers, sidebar rails, "muted" sections. |
| `--surface-raised` | `#ffffff` | Cards, modals, popovers. Used sparingly — only when there's a real elevation reason. Always pair with a `--border` so it doesn't look like it's hovering on shadow alone. |

**Why off-white.** Pure white (`#ffffff`) on screens is harsh and reads as generic SaaS. The slight warmth of `#faf9f5` is what makes Anthropic surfaces feel like paper rather than a UI panel. It's the single biggest tell.

**Common mistake.** Using `--surface-raised` (white) as the page background "because the design tool defaulted to white." Don't. The page is cream. Cards are white. The contrast between them is the point.

### Text

| Token | Hex | Use |
|---|---|---|
| `--text` | `#141413` | Primary text. Headings, body. |
| `--text-muted` | `#6b6a64` | Secondary copy, captions, helper text, table cells that aren't the primary value. |
| `--text-faint` | `#b0aea5` | Disabled, placeholder, meta info (timestamps, breadcrumb separators). |
| `--text-on-accent` | `#faf9f5` | Text on terra cotta or other filled accent surfaces. Same as `--surface` for warmth. |

**Why not pure black.** `#000000` on cream creates an aggressive, almost vibrating contrast. `#141413` keeps the contrast strong (≈14:1 on `--surface`, well above WCAG AAA) while feeling printed.

### Borders

| Token | Hex | Use |
|---|---|---|
| `--border` | `#e8e6dc` | Default. Card borders, input borders, dividers. |
| `--border-strong` | `#c9c5b8` | When you need more presence — focused inputs, table outer edges, divider between hero and body. |

The system **prefers borders to shadows.** A 1px `--border` does most of the separation work that `shadow-md` would do in a typical SaaS design.

### Accents

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#d97757` | Terra cotta. The signature. Primary buttons, key links, one feature-illustration shape per page. |
| `--accent-hover` | `#c4613f` | Slightly darker for hover states on filled terra-cotta surfaces. |
| `--accent-soft` | `#f4dccf` | A wash for backgrounds when you absolutely need terra cotta as a fill (banners, callouts). Use rarely. |
| `--accent-blue` | `#6a9bcc` | Mist blue. Secondary accent. Info states, secondary illustrative shapes. |
| `--accent-blue-soft` | `#dbe6f1` | Soft fill for info banners. |
| `--accent-green` | `#788c5d` | Olive green. Tertiary. Success, "tertiary" data points. |
| `--accent-green-soft` | `#dde2d0` | Soft fill for success banners. |

**The cycling rule.** When a layout has multiple accent moments (hero + feature + testimonial + footer), assign one accent per section in order: orange → blue → green → orange. Don't combine them in a single component. Don't gradient between them.

**The size rule.** Terra cotta should occupy < 5% of the viewport. If you find yourself painting a whole hero in terra cotta, you've turned the signature into wallpaper. Pull it back to a button, a heading word, a small illustrative shape.

### Semantic

These reuse accents, with one addition.

| Token | Hex | Note |
|---|---|---|
| `--success` | `#788c5d` | = `--accent-green` |
| `--warning` | `#d97757` | = `--accent`. Use sparingly so it stays distinct from primary. |
| `--danger` | `#b54545` | Muted brick red. Only for destructive actions and error states. Not in the accent rotation. |
| `--info` | `#6a9bcc` | = `--accent-blue` |

### Color contrast notes

- `#141413` on `#faf9f5` ≈ 14.6:1 (AAA)
- `#6b6a64` on `#faf9f5` ≈ 5.4:1 (AA for body)
- `#d97757` on `#faf9f5` ≈ 3.4:1 — okay for *large* text or non-text UI but **not** AA for small body text. Don't use terra cotta for paragraph copy.
- White text on `#d97757` ≈ 3.6:1 — also borderline for small body. Use 16px+ semibold on terra-cotta buttons.

---

## Typography

### Font stacks

```css
--font-heading: "Styrene A", "Styrene B", "Poppins", "Helvetica Neue", Arial, sans-serif;
--font-body:    "Tiempos Text", "Tiempos", "Lora", Georgia, "Times New Roman", serif;
--font-mono:    "JetBrains Mono", "Fira Code", "SF Mono", "Menlo", "Consolas", monospace;
```

**The two-tier strategy.** Anthropic uses Styrene + Tiempos. Both are commercial. We list them first so users with licenses get the real thing, then fall through to Poppins + Lora (free Google Fonts that hit the same general feel — geometric sans + classical serif), then to platform stalwarts.

**Don't substitute these:**
- Inter, Roboto, system-ui — wrong feel, generic
- Source Serif, Merriweather, PT Serif — too utilitarian
- Playfair Display — too dramatic / display-y for body

**Why Lora as the open fallback.** Lora has the same warmth and proportions as Tiempos at body sizes. It's what the skill-creator project itself ships with.

**Why Poppins.** Geometric, friendly, clear at small sizes. Closer to Styrene's geometric feel than Inter or system-ui ever will be.

### Type scale

A modular scale with ratio ≈ 1.25, anchored at 16px.

| Step | Size | Line-height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `--text-display` | 3.5rem (56px) | 1.05 | -0.02em | 600 | Hero only. One per page. |
| `--text-h1` | 2.5rem (40px) | 1.1 | -0.015em | 600 | Page title |
| `--text-h2` | 2rem (32px) | 1.15 | -0.01em | 600 | Section heading |
| `--text-h3` | 1.5rem (24px) | 1.25 | -0.005em | 500 | Subsection |
| `--text-h4` | 1.25rem (20px) | 1.3 | 0 | 500 | Card titles |
| `--text-body-lg` | 1.125rem (18px) | 1.65 | 0 | 400 | Long-form prose, hero subhead |
| `--text-body` | 1rem (16px) | 1.6 | 0 | 400 | Default |
| `--text-sm` | 0.875rem (14px) | 1.5 | 0 | 400 | Helper text |
| `--text-caption` | 0.75rem (12px) | 1.4 | 0.02em | 400 | Captions, meta. Always with positive letter-spacing. |

**Why negative tracking on big sizes.** As geometric sans gets bigger, the default spacing starts to feel airy and weak. Tightening the tracking pulls it together. Caps at -0.02em — tighter than that starts to look squeezed.

**Why generous line-height on body.** Serif body at 1.6+ reads like a magazine. At 1.4 it reads like a form.

**Why 600 not 700 for bold.** Styrene/Poppins at 700 starts to feel too assertive against the calm serif body. 600 is the highest that still feels composed.

### Italic & emphasis

The serif body has a real italic — use it. For inline emphasis, prefer italic over bold; bold is for structural hierarchy.

---

## Spacing

4px base unit. Most-used steps in **bold**.

| Token | Px | Use |
|---|---|---|
| `--space-0` | 0 | |
| `--space-1` | 4 | Tight inline, icon padding |
| **`--space-2`** | **8** | Default gap between related items |
| `--space-3` | 12 | |
| **`--space-4`** | **16** | Component padding |
| `--space-5` | 20 | |
| **`--space-6`** | **24** | Card padding, group gaps |
| `--space-8` | 32 | |
| **`--space-10`** | **40** | Component-to-component vertical |
| `--space-12` | 48 | |
| **`--space-16`** | **64** | Section interior padding |
| **`--space-20`** | **80** | |
| **`--space-24`** | **96** | Section vertical rhythm — generous |
| `--space-32` | 128 | Hero / first section |

**Section vertical padding.** Default to `--space-16` (64px) interior padding for major sections. Between sections, `--space-24` (96px). Hero section's bottom: `--space-32` (128px).

**Whitespace is the look.** When in doubt, add more.

---

## Layout & sizing

```
--width-prose       720px    Long-form reading width
--width-content     960px    Default content column
--width-container   1200px   Wide content (dashboards, marketing)
--width-max         1440px   Hard maximum

--height-input      40px     Default form control height
--height-input-lg   48px     Hero input
--height-button     40px     Default button height
--height-button-lg  48px     Hero CTA
--height-button-sm  32px     Compact button
--height-nav        72px     Top nav bar
```

Form controls and buttons are **40px tall by default**, not 36px (too small) or 44px (too chunky). Hero CTAs are 48px.

---

## Radius

```
--radius-sm    4px    Inputs, small chips
--radius       6px    Buttons, default surfaces  ← most used
--radius-md    8px    Cards, panels
--radius-lg    12px   Modals, large content cards
--radius-pill  999px  Status chips, tags, navigation pills
```

**Why 6–8px.** Anthropic surfaces have a quiet, slightly softened squareness. 4px feels too sharp/utilitarian. 12px+ starts to feel like a consumer app. 6px is the sweet spot for buttons and cards.

**The pill exception.** Pills (`--radius-pill`) are for *small, content-y* shapes only — tags, status badges, the active state of a tab. Pill buttons are an anti-pattern unless they're decorative tags.

---

## Shadow

The system uses borders for separation, not shadows. These are the rare exceptions.

```
--shadow-sm    0 1px 2px rgba(20, 20, 19, 0.04)        Hover hint
--shadow       0 2px 8px rgba(20, 20, 19, 0.06)        Floating control (popovers, dropdowns)
--shadow-lg    0 8px 24px rgba(20, 20, 19, 0.08)       Modals, dialogs
```

The shadows use a slightly warmed black (`#141413` at low alpha) rather than pure `rgba(0,0,0,...)` — this keeps them feeling consistent with the warm palette.

**Never:**
- Glow shadows (`box-shadow: 0 0 20px ...`)
- Colored shadows (`shadow-blue-500/30`)
- `shadow-2xl` or anything deeper than `--shadow-lg`

---

## Border

```
--border-width       1px    Default
--border-width-strong 1.5px Focus rings, table outer edge
--border-style       solid  Always solid. No dashed borders except for drop zones.
```

Focus ring uses `--border-width-strong` of `--accent` with a 2px offset.

---

## Opacity

```
--opacity-disabled  0.5
--opacity-muted     0.7
--opacity-overlay   0.6   Modal backdrop
```

Modal backdrop is `rgba(20, 20, 19, var(--opacity-overlay))` — warm-near-black, not pure black. Same warmth as text.

---

## Motion tokens

Full motion guidance is in `motion.md`. The token values:

```
--ease-out        cubic-bezier(0.16, 1, 0.3, 1)        Default — swift in, gentle settle
--ease-in-out     cubic-bezier(0.65, 0, 0.35, 1)       Bidirectional moves (toggles)
--ease-in         cubic-bezier(0.5, 0, 0.75, 0)        Exits

--duration-fast    150ms    Hover, press
--duration         300ms    Default — fades, simple slides
--duration-slow    600ms    Page-load reveals
```

Avoid `cubic-bezier(0.68, -0.55, 0.27, 1.55)` and friends — bouncy curves don't fit the calm.

---

## Z-index scale

```
--z-base       0
--z-dropdown   10
--z-sticky     20
--z-overlay    30   Modal backdrop
--z-modal      40
--z-toast      50
--z-tooltip    60
```

Keep the layers spaced at 10 so there's room to insert without renumbering.

---

## Naming conventions

- Tokens use kebab-case prefixed by category: `--surface-sunken`, `--text-muted`, `--accent-blue-soft`.
- "Soft" suffix means a low-alpha or tinted version (for backgrounds).
- "Strong" suffix means higher contrast / weight.
- Sizing-related tokens use t-shirt-ish sizes (`-sm`, `-md`, `-lg`) only where there's a clear default; otherwise prefer numeric (`--space-4`).
- Accent-color suffixes use the color name (`--accent-blue`), not slot name (`--accent-secondary`) — avoids confusion when accents cycle.

---

## Adapting to other token formats

The tokens defined here are inlined as CSS custom properties at the top of `docs/preview.html`. To use them in other token tooling:

- **Style Dictionary / DTCG token format** — translate the names in this document directly into a JSON file using `$value` and `$type`. The category names (`color`, `font-family`, `space`, etc.) match DTCG conventions.
- **Tailwind preset** — see `steering/retrofit.md` for a worked example that extends (not replaces) the Tailwind default theme.

When extending the system, add tokens *here first* with rationale, then propagate to other formats. Keep the naming consistent.
