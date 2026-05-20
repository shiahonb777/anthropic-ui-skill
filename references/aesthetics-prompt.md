# How This Skill Relates to Anthropic's General Aesthetics Guidance

Anthropic publishes a [cookbook on prompting Claude for frontend aesthetics](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb). It contains a short distilled prompt for general-purpose use and a method for "isolated prompting" — locking in single dimensions or whole themes. This document is the bridge: it explains what the cookbook says, where this skill aligns, and where it deliberately diverges.

The short answer: **this skill is one specific theme constraint within Anthropic's framework, not a replacement for it.** Use it when you want the Anthropic-editorial register specifically, or when you want consistency across projects. For a different aesthetic, follow the cookbook's general-purpose approach instead.

## What the cookbook says

The cookbook's core observation: Claude has strong design knowledge but, without guidance, "tends toward generic, conservative designs." Anthropic calls the failure mode *"on distribution" outputs* — what users elsewhere call AI slop.

The cookbook offers three strategies that consistently produce better results:

1. **Guide specific design dimensions** — direct attention to typography, color, motion, and backgrounds individually rather than asking for "good design"
2. **Reference design inspirations** — suggest sources (IDE themes, cultural aesthetics) without being overly prescriptive
3. **Call out common defaults** — explicitly tell Claude to avoid the patterns it tends toward

It distills these into a `DISTILLED_AESTHETICS_PROMPT` that addresses four dimensions:

- **Typography** — avoid generic (Arial, Inter); choose distinctive faces; use extremes (100/200 weight against 800/900); pair high-contrast (display + monospace, serif + geometric sans)
- **Color & Theme** — commit to a cohesive aesthetic; CSS variables; *dominant colors with sharp accents outperform timid, evenly-distributed palettes*
- **Motion** — one well-orchestrated page load with staggered reveals beats scattered micro-interactions; CSS-only for HTML
- **Backgrounds** — atmosphere and depth, not solid defaults; layered gradients, geometric patterns, contextual effects

And explicitly avoids:

- Overused fonts (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (purple gradients on white)
- Predictable layouts and component patterns
- Cookie-cutter design

The cookbook closes with this: *"Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!"*

This is the most important sentence in the document. **The cookbook's general advice is variety, not a single aesthetic.** Each project should be different.

## Where this skill agrees

Strongly, on the methodology:

- **Avoid converging to "on distribution" defaults.** Yes. The skill's whole anti-patterns document is built around this idea.
- **Address dimensions individually.** Yes — `references/tokens.md` (color, type, spacing), `references/motion.md` (motion), and `references/components.md` (layout) split the job the same way.
- **Avoid Inter, Roboto, generic fonts.** Yes.
- **Avoid purple-on-white gradients.** Yes.
- **One dominant accent + sharp punctuation outperforms timid evenly-distributed colors.** Yes — this is the *cycling-accent rule* in the skill.
- **Page load with staggered reveals is the highest-impact motion.** Yes — see `references/motion.md`.
- **Commit to a cohesive aesthetic.** Yes.

## Where this skill is more opinionated

This skill takes a side on questions the cookbook leaves open:

| Dimension | Cookbook says | This skill says |
|---|---|---|
| Theme | Vary; pick something distinctive each time | Anthropic-editorial: warm cream, terra cotta, serif body |
| Typography | Distinctive — many candidates listed | Specifically Tiempos / Styrene (commercial) with Lora / Poppins fallback |
| Backgrounds | Atmosphere and depth via gradients, patterns, effects | **Solid cream `#faf9f5`. No gradients. No background patterns.** Whitespace and 1px borders carry the page. |
| Component shape | (Cookbook's example uses `rounded-2xl`, pill buttons, glow shadows, emoji icons) | 6–8px radii, no glow shadows, line icons or no icons |
| Voice | Not addressed | A whole `intent.md` document on copy, friction, naming |

The skill diverges most sharply on **backgrounds and decoration**. The cookbook's general guidance pushes for atmospheric backgrounds because the absence of decoration tends to read as boring. The skill's answer is: in the Anthropic-editorial register specifically, *the absence of decoration is the point* — typography and whitespace do the work that gradients do elsewhere. This requires that the typography and copy actually be carrying their weight, which is why `intent.md` exists.

The cookbook itself demonstrates the trade-off. The example SaaS landing page it shows (Momentum, with the Syne + DM Sans + animated radial-gradient hero) is a beautiful instance of *atmospheric, distinctive* design. It is also unmistakably a generated SaaS landing page — pill CTAs, three-column feature grid with emoji icons, *"Build momentum. Ship faster."* hero, *"Loved by teams everywhere"* testimonial section. The cookbook chose distinction over restraint. The skill chooses the other side.

Both are valid. Pick deliberately.

## Isolated prompting — using parts of this skill

The cookbook describes an *isolated prompting* pattern: rather than apply a whole aesthetic, isolate one dimension. You can do this with this skill too. Each pairs well with a different dimension's guidance from elsewhere.

**Take only the typography from this skill** — the warm-serif-body / geometric-sans-heading pairing — and combine it with a different color palette. Useful when you want editorial-feeling copy on, say, a dark code-aesthetic background.

```html
<!-- Just the type stack -->
<style>
  body { font-family: "Tiempos Text", "Lora", Georgia, serif; line-height: 1.65; }
  h1, h2, h3 { font-family: "Styrene A", "Poppins", sans-serif; font-weight: 600; }
</style>
```

**Take only the color tokens** and use them with different fonts. The warm cream / terra cotta / cycling accents survive most font swaps; if you want Editorial-feeling color but Code-aesthetic typography (JetBrains Mono everywhere), the palette still works.

**Take only the *intent* layer** — the voice, friction, and naming guidance — without the visuals. Most usefully applied to an existing product whose visual style is fixed; the copy reset alone moves it noticeably toward Anthropic.

**Take only the layout patterns** — statement paragraphs, declarative section headings, all-or-nothing testimonials, pricing as numbers in body text — and apply them inside any other aesthetic. These are about *what's on the page* more than *how it looks*.

## When to use this skill, when not to

**Use this skill when:**

- The user explicitly asks for *Anthropic*, *Claude*, *editorial*, *warm minimalist*, or *research-paper* aesthetics
- The project benefits from a calm, considered register — research products, writing tools, professional knowledge work
- The user wants consistency across multiple projects or pages with the same character

**Use the cookbook's general prompt instead when:**

- The user wants *something distinctive* but not specifically Anthropic
- The user is a designer who wants Claude to surprise them with a specific aesthetic they'll then refine
- Variety across projects matters more than character within one project
- The product genuinely calls for atmospheric backgrounds or playful personality (consumer apps, creative tools, games)

**Combine both when:**

- You want the rigor of a theme constraint, but with permission to deviate on one dimension. Apply this skill plus a single override (e.g., *"use this skill, but pick a darker background"* or *"use this skill, but use Fraunces instead of Lora"*).

## A worked comparison

Same prompt: *Create a SaaS landing page for a project management tool*.

**Following the cookbook's general aesthetics prompt** would produce something like *Momentum* (the example in the cookbook itself):
- Animated radial-gradient hero, blue→orange→yellow
- Syne (display) + DM Sans (body)
- `rounded-2xl` cards, gradient top border on hover
- 3D perspective dashboard mockup
- Pill CTAs, three-tier pricing with featured-card scale-up
- Stats with `-webkit-background-clip: text` gradients
- Emoji icons in feature cards

**Following this skill** would produce something like the `assets/starter.html` reference:
- Solid cream background
- Tiempos (body) + Styrene (heading)
- 1px borders, no shadows, 6–8px radii
- Inline CTAs in the headline (`Quiet tools for [considered work]`)
- Statement paragraphs as cadence between sections
- Testimonials shown all-at-once with `06 / 06` counter
- Pricing as numbers in the body, no Contact-Sales wall

Both are designed pages. Both are aware of "AI slop" defaults and avoid them. They diverge on which side of the aesthetic spectrum to land.

## Source

Anthropic, *Frontend Aesthetics: A Prompting Guide*, claude-cookbooks repository, October 2025. Available at: https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb

The full text of the `DISTILLED_AESTHETICS_PROMPT` is available in the notebook. Quotations in this document are paraphrased except where set in italics.
