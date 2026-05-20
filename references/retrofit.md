# Restyling Existing Code

When the user already has a project and wants it to "look like Anthropic," the goal is *retune*, not redesign. The semantic structure, component breakdown, and behavior stay. Colors, fonts, density, and motion change.

This is faster than it sounds — usually one PR-sized pass gets you 80% of the way. The remaining 20% is taste, and you should let the user weigh in there.

## Read first

Before changing anything, get a sense of what you're working with:

1. **What's the framework?** Tailwind, CSS-in-JS, vanilla CSS, MUI, shadcn/ui, Chakra, Bootstrap, etc. The retrofit strategy differs a lot.
2. **Is there a single source of truth for theme/colors?** A `tailwind.config.js`, a `theme.ts`, a `:root` block, a Sass `_variables.scss`. Editing one file beats sprinkling overrides.
3. **What does it look like *now*?** Open a few screens. Note what feels generic. Take a mental snapshot to compare against.
4. **What's the user attached to?** Sometimes the user is fine changing everything; sometimes they want their logo color preserved or their font kept. Ask if it's not obvious.

Tell the user the plan in two or three sentences before you start changing things. They should know what's about to happen.

## The seven moves

Apply these in order. Each one moves the project visibly toward the destination.

### 1. Swap the page background

Replace pure white with `#faf9f5` everywhere it appears. This is the highest-impact single change. In Tailwind:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Override the implicit "white" used for body backgrounds
        'surface': '#faf9f5',
        'surface-sunken': '#f3f1ea',
      },
    },
  },
};
```

```css
body { background: var(--surface, #faf9f5); }
```

In MUI, set `palette.background.default = '#faf9f5'` and `palette.background.paper = '#ffffff'`.
In a vanilla project, search for `background: #fff`, `bg-white`, `background-color: white` and replace with the appropriate token.

After this single change alone, the project will already feel different.

### 2. Fonts

Add Poppins (heading) and Lora (body) — or Styrene/Tiempos if the user has them. Two `<link>` tags from Google Fonts get the open-source versions in immediately:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

Then update the theme:

```js
// Tailwind
theme: { extend: { fontFamily: {
  heading: ['"Styrene A"', 'Poppins', 'system-ui', 'sans-serif'],
  body:    ['"Tiempos Text"', 'Lora', 'Georgia', 'serif'],
  mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
}}}
```

Then make sure body uses the body font by default — this is the single biggest aesthetic change after the background:

```css
body { font-family: var(--font-body, 'Lora', Georgia, serif); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading, 'Poppins', sans-serif); font-weight: 600; }
```

Run the project. The vibe should already be 60% there.

### 3. Map the existing palette

For each color the project uses, decide what it maps to in our system. A typical mapping:

| Existing | Anthropic-style |
|---|---|
| `bg-white` / `#ffffff` | `bg-surface` / `#faf9f5` |
| `bg-gray-50` / `bg-gray-100` | `bg-surface-sunken` / `#f3f1ea` |
| `text-black` / `text-gray-900` | `text` / `#141413` |
| `text-gray-600` / `text-gray-500` | `text-muted` / `#6b6a64` |
| `text-gray-400` | `text-faint` / `#b0aea5` |
| `border-gray-200` / `border` | `border` / `#e8e6dc` |
| primary blue/purple/indigo | `accent` / `#d97757` |
| info blue | `accent-blue` / `#6a9bcc` |
| success green | `accent-green` / `#788c5d` |
| destructive red | `danger` / `#b54545` |

If the project leans on a primary color heavily (e.g., a SaaS dashboard plastered with purple), this is where the biggest decision is: **dial back the surface area** of the new accent. Terra cotta paints buttons and key links — not whole heroes, navbars, or banners.

### 4. De-shadow, re-border

Find heavy shadows and replace with borders. In Tailwind, this usually means:

| Existing | Replace with |
|---|---|
| `shadow-md`, `shadow-lg`, `shadow-xl` on cards | `border border-border` (or remove and let surface contrast do the job) |
| `shadow-sm` on inputs | `border border-border` |
| `shadow-2xl` anywhere | Remove. Use `border` and consider whether the elevation was meaningful. |

```css
/* before */
.card { background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

/* after */
.card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; }
```

### 5. Tame radii

Round corners default to too round in modern frameworks. Calibrate:

| Existing | Replace with |
|---|---|
| `rounded-2xl`, `rounded-xl` on cards | `rounded-md` (8px) |
| `rounded-lg` on buttons | `rounded` (6px) |
| `rounded-full` everywhere | Keep only on tags/chips/avatars; on buttons → `rounded` |
| `rounded-md` on inputs | `rounded-sm` (4px) |

### 6. Reduce accent surface area

Audit every place the brand color appears. For each:

- **Primary button**: keep terra cotta filled.
- **Secondary button**: switch to outline (no fill).
- **Hero background**: remove the fill. The hero should sit on cream with terra cotta only on key text/buttons.
- **Nav bar background**: remove the fill if any. Nav stays cream.
- **Link colors**: keep terra cotta. This is fine.
- **Icons in marketing sections**: cycle accents (one section orange, next blue, next green) rather than painting all icons in one color.

Rule of thumb: if you can see the accent color from across the room with the page squinted, there's too much.

### 7. Tighten typography

Body line-height jumps to 1.6 (1.65 for long-form prose). Heading weights cap at 600. Check the type scale roughly matches:

```css
:root {
  --text-display: 3.5rem;
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.5rem;
  --text-h4: 1.25rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-sm: 0.875rem;
  --text-caption: 0.75rem;
}
h1 { font-size: var(--text-h1); line-height: 1.1; letter-spacing: -0.015em; font-weight: 600; }
h2 { font-size: var(--text-h2); line-height: 1.15; letter-spacing: -0.01em; font-weight: 600; }
/* ... */
p  { font-size: var(--text-body); line-height: 1.6; }
```

If headings have heavy weights (700+), drop to 600. If they have wide letter-spacing, tighten to slightly negative on big sizes.

## Framework-specific notes

### Tailwind

The cleanest approach: install `assets/tailwind.preset.js` as a preset.

```js
// tailwind.config.js
module.exports = {
  presets: [require('./assets/tailwind.preset.js')],
  // your own content paths and any extensions
};
```

This adds Anthropic tokens to Tailwind's theme without removing the defaults — use `bg-surface` alongside `bg-white` if you need both. After adding the preset, do a sweep replacing `bg-white` → `bg-surface`, etc.

### shadcn/ui

shadcn ships its own `:root` CSS variable theme in `globals.css`. Replace the default theme variables with Anthropic equivalents:

```css
:root {
  --background: 48 33% 97%;        /* #faf9f5 in HSL */
  --foreground: 60 3% 8%;          /* #141413 */
  --primary: 17 60% 60%;           /* #d97757 */
  --primary-foreground: 48 33% 97%;
  --muted: 48 22% 92%;             /* #f3f1ea */
  --muted-foreground: 50 4% 41%;   /* #6b6a64 */
  --border: 48 22% 89%;            /* #e8e6dc */
  --radius: 0.5rem;                /* 8px instead of default 10–12px */
  /* ... */
}
```

Then update the font stack in `tailwind.config.js`. Most shadcn components will pick up the tokens automatically.

### MUI

```ts
const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#faf9f5', paper: '#ffffff' },
    primary: { main: '#d97757', dark: '#c4613f', contrastText: '#faf9f5' },
    text: { primary: '#141413', secondary: '#6b6a64', disabled: '#b0aea5' },
    divider: '#e8e6dc',
  },
  typography: {
    fontFamily: '"Tiempos Text", "Lora", Georgia, serif',
    h1: { fontFamily: '"Styrene A", "Poppins", sans-serif', fontWeight: 600, letterSpacing: '-0.015em' },
    // ... etc
  },
  shape: { borderRadius: 6 },
  shadows: [...] // mostly flatten
});
```

### Chakra / Mantine / Bootstrap

Same idea: edit theme overrides at the source. Backgrounds first, then fonts, then accents.

## Don't change

These are usually fine to leave alone in a retrofit:

- The user's logo, even if it has a different color
- Information architecture (page structure, nav order, copy)
- Component-level interactivity and accessibility (keyboard handlers, ARIA, focus management)
- Custom illustrations or photography — unless the user explicitly asks
- Existing animation libraries (Framer Motion, GSAP) — just adjust durations and easing tokens

## What "done" looks like

After a retrofit pass:

- The page background is cream
- Body text is in a serif
- Terra cotta appears on the most important interactive elements only
- Cards have borders, not heavy shadows
- Corners are mid-radius, not maximally rounded
- The page feels calm and considered rather than busy and shipping-fast

If you've done all seven moves and it still doesn't feel right, open `assets/starter.html` side-by-side and find the gap. Usually it's whitespace (sections too tight) or accent saturation (still too much terra cotta).
