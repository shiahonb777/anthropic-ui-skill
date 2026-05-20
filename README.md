# anthropic-ui-skill

<p align="center">
  <img src="docs/demo.png" alt="A specimen sheet of the design language — masthead, hero, palette, type, components, products named after poetic forms, and a conversation-canvas mockup." width="100%">
</p>

<p align="center">
  <sub><i>Specimen No. 04 — every primitive in one frame. Open <code>docs/preview.html</code> to see it live.</i></sub>
</p>

A drop-in skill, design-token pack, component library, and *posture guide* for building frontends in the visual language and product behavior Anthropic uses across [anthropic.com](https://www.anthropic.com), [Claude.ai](https://claude.ai), and Claude documentation. Warm cream backgrounds, a terra-cotta signature accent, geometric sans-serif headings paired with serif body text, generous whitespace, and quiet, editorial confidence — but also: copy that doesn't flatter, friction placed on purpose, names chosen with care, generated work given its own room, and honesty over reassurance.

The visual style is the easy half. The posture — how the product treats the people using it — is what makes the result actually *feel* like Anthropic.

> Inspiration, not imitation. This project is *inspired by* Anthropic's public design language and writing about it. It is not an official Anthropic product, does not use Anthropic logos or marks, and is not affiliated with Anthropic.

## What's in the box

```
SKILL.md                    Principles, quick-reference, and workflows
references/
  observations.md           Field notes from anthropic.com — what's actually there
  aesthetics-prompt.md      How this skill relates to Anthropic's frontend-aesthetics cookbook
  intent.md                 Posture, voice, naming, friction — the heart of the skill
  tokens.md                 Full token system with rationale (palette, type, spacing, motion)
  components.md             Button, input, card, nav, table, modal patterns
  motion.md                 Easing, page-load choreography, scroll reveal
  retrofit.md               Step-by-step restyling for existing projects
  anti-patterns.md          What to avoid — visual, layout, copy, naming, interaction
docs/
  preview.html              Single-frame design specimen (1600 × 1300, copy-paste-ready CSS)
  demo.png                  Rendered specimen, used by this README
evals/
  evals.json                Test prompts for verifying skill behavior
```

The skill is *documentation-first*. Token values, the type stack, and the Tailwind preset are all written into `references/tokens.md`. The single-frame specimen at `docs/preview.html` is the worked example — a copy-paste-ready HTML page with every token defined inline, every primitive rendered, and no external dependencies beyond Google Fonts.

## What this is, and what it isn't

This skill is **one specific theme constraint** — the *Anthropic-editorial* register. It is not Anthropic's general advice for "good frontend." Anthropic publishes a separate [cookbook on prompting for frontend aesthetics](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb) that advocates *variety* across projects with the only constant being the rejection of AI-slop defaults.

Use this skill when you want the editorial register specifically (research products, writing tools, professional knowledge work, marketing for any of those). Use the cookbook's general prompt when you want variety, or when the project genuinely calls for atmospheric backgrounds and playful personality. Both are valid. See `references/aesthetics-prompt.md` for the longer comparison.

## Quick start

### Use as a Claude Skill

Place this folder where your Claude environment loads skills (or invoke with the path), then ask Claude to design or restyle a frontend in the Anthropic look. The frontmatter on `SKILL.md` describes when the skill auto-applies.

### Use the tokens directly

The full palette, type stack, spacing scale, and motion tokens are documented in [`references/tokens.md`](./references/tokens.md), with rationale alongside each value. To use them in a project, copy the `:root` block from the bottom of [`docs/preview.html`](./docs/preview.html) — every variable is defined inline there with no build step.

For Tailwind users, [`references/retrofit.md`](./references/retrofit.md) shows a minimal preset that extends (not replaces) the default theme. For Style Dictionary or other DTCG token tooling, the names and values in `references/tokens.md` translate directly.

### See it in action

Open `docs/preview.html` in a browser at 1600 px width. It renders every primitive in the system — masthead, hero with inline-link CTAs, statement paragraph, releases list, type & palette specimens, model cards, conversation-and-canvas mockup, pricing, footer — in a single non-scrolling frame.

## The ten things that matter

If you remember nothing else — in the order that matters:

**Posture (most important)**

1. The user is a collaborator, not a metric.
2. Friction is a feature when the work is consequential.
3. Honesty over reassurance — show provenance and state, not generic disclaimers.
4. Voice is a design surface — `Saved.` is not the same product as `🎉 Awesome!`.

**Composition**

5. Whitespace does the heavy lifting — sections breathe at 96–128px vertical.
6. Editorial layout, not landing-page layout.
7. Give generated work its own room, not a chat bubble.
8. Name things after what they're for. *Haiku · Sonnet · Opus*, not *Free · Pro · Max*.

**Visuals**

9. Cream background, serif body, terra cotta used sparingly, accents that cycle, restrained corners, quiet motion.
10. None of: purple gradients, Inter, `rounded-2xl shadow-xl`, emoji icons, centered-hero / three-card-grid / two-pill-button assemblies.

Skipping any of points 1–4 produces a page that looks Anthropic-adjacent and behaves nothing like it. Skipping points 5–10 produces a page that behaves right but reads as generic. Both halves have to be there.

Full rationale lives in `SKILL.md`, `references/intent.md`, and `references/tokens.md`.

## Contributing

Issues and pull requests welcome. If you propose a new component, anti-pattern, or token, please include the rationale alongside the value — the existing references all explain the *why*, and that's what makes the skill durable.

## License

[MIT](./LICENSE).

## Acknowledgements

Inspired by the public design language of [Anthropic](https://www.anthropic.com). The first-class fonts referenced (Styrene, Tiempos) are commercial; this project ships graceful open-source fallbacks (Poppins, Lora) so it works without licenses.
