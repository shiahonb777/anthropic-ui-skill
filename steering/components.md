# Components

Reference patterns for the most common UI elements. All examples assume the token variables from `steering/tokens.md` are loaded as CSS custom properties on `:root` (the simplest way: copy the `:root` block from `docs/preview.html`). Markup is plain HTML/CSS — adapt to your framework as needed.

## Table of contents

- [Button](#button)
- [Link](#link)
- [Input & form controls](#input--form-controls)
- [Card](#card)
- [Navigation](#navigation)
- [Tag / status chip](#tag--status-chip)
- [Banner / callout](#banner--callout)
- [Table](#table)
- [Code block](#code-block)
- [Dialog / modal](#dialog--modal)
- [Tooltip](#tooltip)

---

## Button

Three variants. That's it. Resist adding a fourth.

### Primary (terra cotta filled)

The signature. Use for the single most important action per view.

```html
<button class="btn btn-primary">Get started</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  height: var(--height-button);
  padding: 0 var(--space-5);
  border-radius: var(--radius);
  border: 1px solid transparent;
  font-family: var(--font-heading);
  font-size: var(--text-body);
  font-weight: 500;
  letter-spacing: -0.005em;
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out),
              color var(--duration-fast) var(--ease-out);
}

.btn-primary {
  background: var(--accent);
  color: var(--text-on-accent);
}
.btn-primary:hover { background: var(--accent-hover); }
.btn-primary:active { background: var(--accent-hover); transform: translateY(1px); }
.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent);
}
```

### Secondary (outline on cream)

For everything else that's still a primary-ish action.

```html
<button class="btn btn-secondary">Learn more</button>
```

```css
.btn-secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border-strong);
}
.btn-secondary:hover {
  background: var(--surface-sunken);
  border-color: var(--text);
}
```

### Tertiary (text-only)

For inline actions and toolbar items.

```html
<button class="btn btn-tertiary">Cancel</button>
```

```css
.btn-tertiary {
  background: transparent;
  color: var(--text-muted);
  padding: 0 var(--space-3);
}
.btn-tertiary:hover {
  background: var(--surface-sunken);
  color: var(--text);
}
```

**Sizes.** Default 40px. Add `.btn-sm` (32px, `--text-sm`) for toolbars. Add `.btn-lg` (48px, `--text-body-lg`, `padding: 0 var(--space-6)`) for hero CTAs.

**Anti-patterns.** Don't make every button terra cotta. Don't make pill buttons (`border-radius: 999px`) — that's an anti-pattern here. Don't put icons on the right of CTAs without reason.

---

## Link

Inline links inherit the body serif but pick up terra cotta and a 1px underline that sits one pixel below the baseline (cleaner than the default).

```css
a {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color var(--duration-fast) var(--ease-out);
}
a:hover {
  color: var(--accent-hover);
  text-decoration-thickness: 1.5px;
}
```

For nav links and links in dense lists, drop the underline and rely on color alone:

```css
.link-quiet {
  color: var(--text);
  text-decoration: none;
}
.link-quiet:hover { color: var(--accent); }
```

---

## Input & form controls

### Text input

```html
<label class="field">
  <span class="field-label">Email</span>
  <input class="input" type="email" placeholder="you@company.com">
</label>
```

```css
.field { display: flex; flex-direction: column; gap: var(--space-2); }
.field-label {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text);
}

.input {
  height: var(--height-input);
  padding: 0 var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--text);
  background: var(--surface-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}
.input::placeholder { color: var(--text-faint); }
.input:hover { border-color: var(--border-strong); }
.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(217, 119, 87, 0.15);
}
.input:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}
```

**Note.** Labels use the heading font at small size. This is a small detail that makes forms feel intentional rather than default-browser.

**Note 2.** Inputs are on `--surface-raised` (white), not on the cream — the contrast helps the input read as an interactive surface.

### Textarea

Same styling as input. Set `min-height: 120px` and `padding: var(--space-3)`. Keep the same border treatment.

### Select

If possible, build a custom select rather than styling the native one — native `<select>` looks out of place. If you must style native, at least replace the dropdown arrow with a Lucide-style chevron in `--text-muted`.

### Checkbox / Radio

```css
.checkbox {
  width: 18px;
  height: 18px;
  border: 1.5px solid var(--border-strong);
  border-radius: 3px;
  background: var(--surface-raised);
  appearance: none;
  cursor: pointer;
  position: relative;
  transition: all var(--duration-fast) var(--ease-out);
}
.checkbox:checked {
  background: var(--accent);
  border-color: var(--accent);
}
.checkbox:checked::after {
  content: "";
  position: absolute;
  inset: 3px 4px 4px 3px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 10' fill='none' stroke='%23faf9f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 5l3.5 3.5L11 1.5'/%3E%3C/svg%3E") center/contain no-repeat;
}
```

Radios: same pattern, `border-radius: 50%`, dot in center when checked.

---

## Card

The default card is **a 1px border on cream**, not a shadow on white.

```html
<article class="card">
  <h3>Card title</h3>
  <p>Body text in serif, generous line-height. The card sits on the cream and is delineated by its border, not by elevation.</p>
  <a href="#" class="link-quiet">Read more →</a>
</article>
```

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  transition: border-color var(--duration) var(--ease-out),
              transform var(--duration) var(--ease-out);
}
.card:hover {
  border-color: var(--border-strong);
  transform: translateY(-1px);
}
.card h3 {
  font-family: var(--font-heading);
  font-size: var(--text-h4);
  font-weight: 500;
  margin: 0 0 var(--space-3);
}
.card p {
  font-family: var(--font-body);
  color: var(--text-muted);
  margin: 0 0 var(--space-4);
  line-height: 1.6;
}
```

**Variant: raised card.** When you genuinely need elevation (modal-like, "this is the focal item"):

```css
.card-raised {
  background: var(--surface-raised);
  box-shadow: var(--shadow-sm);
  border-color: transparent;
}
.card-raised:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}
```

**Variant: editorial card** (article tile, like the anthropic.com news section):

```html
<article class="card-editorial">
  <span class="meta">April 16, 2026 · Announcements</span>
  <h3>Claude is a space to think</h3>
  <p>No ads. No sponsored content. Just genuinely helpful conversations.</p>
  <a href="#">Read the post</a>
</article>
```

```css
.card-editorial { border: none; padding: var(--space-4) 0; border-top: 1px solid var(--border); }
.card-editorial .meta {
  font-family: var(--font-heading);
  font-size: var(--text-caption);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: var(--space-3);
}
```

The all-caps meta line with positive tracking is a hallmark of Anthropic-style editorial content.

---

## Navigation

### Top nav

```html
<nav class="nav">
  <a href="/" class="nav-brand">Brand</a>
  <ul class="nav-links">
    <li><a href="/research">Research</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/company">Company</a></li>
  </ul>
  <a href="/start" class="btn btn-primary btn-sm">Try it</a>
</nav>
```

```css
.nav {
  height: var(--height-nav);
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  gap: var(--space-8);
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}
.nav-brand {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--text-h4);
  letter-spacing: -0.01em;
  color: var(--text);
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: var(--space-6);
  list-style: none;
  margin: 0 auto 0 var(--space-4);
  padding: 0;
}
.nav-links a {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}
.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--text); }
```

Note the link font: heading font at small size with weight 500. Nav text is one of the few places where sans + small + medium-weight is the right answer.

### Sidebar / vertical nav

```css
.sidebar {
  width: 240px;
  background: var(--surface-sunken);
  border-right: 1px solid var(--border);
  padding: var(--space-6) var(--space-4);
}
.sidebar-section {
  font-family: var(--font-heading);
  font-size: var(--text-caption);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-faint);
  padding: var(--space-2) var(--space-3);
  margin-top: var(--space-4);
}
.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  color: var(--text-muted);
  text-decoration: none;
}
.sidebar-link:hover { background: var(--surface); color: var(--text); }
.sidebar-link[aria-current="page"] {
  background: var(--surface);
  color: var(--text);
  font-weight: 500;
  box-shadow: inset 2px 0 0 var(--accent);
}
```

The active item gets a 2px terra cotta inner stripe — the only place we use the accent in navigation.

---

## Tag / status chip

Pills are *only* appropriate here.

```html
<span class="tag">Beta</span>
<span class="tag tag-info">New</span>
<span class="tag tag-success">Ready</span>
```

```css
.tag {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 var(--space-2);
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: 0.02em;
  background: var(--surface-sunken);
  color: var(--text-muted);
  border: 1px solid var(--border);
}
.tag-info    { background: var(--accent-blue-soft);  color: #3a6088; border-color: transparent; }
.tag-success { background: var(--accent-green-soft); color: #4a5a37; border-color: transparent; }
.tag-warn    { background: var(--accent-soft);       color: #8a4221; border-color: transparent; }
```

Note: tags use **darker variants of accent colors** for text, paired with the soft backgrounds. This keeps contrast readable.

---

## Banner / callout

For inline notes in articles or app messages.

```html
<aside class="callout callout-info">
  <strong>Note.</strong> Backgrounds in this system are never pure white.
</aside>
```

```css
.callout {
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius);
  border-left: 3px solid var(--border-strong);
  background: var(--surface-sunken);
  font-family: var(--font-body);
  color: var(--text);
}
.callout strong { font-weight: 600; }

.callout-info    { background: var(--accent-blue-soft);  border-left-color: var(--accent-blue); }
.callout-success { background: var(--accent-green-soft); border-left-color: var(--accent-green); }
.callout-warn    { background: var(--accent-soft);       border-left-color: var(--accent); }
```

**Don't use the full accent fill** — the soft variant on a 3px left border carries the meaning without shouting.

---

## Table

```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
}
.table th {
  text-align: left;
  font-family: var(--font-heading);
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--border-strong);
  background: var(--surface-sunken);
}
.table td {
  padding: var(--space-4);
  border-bottom: 1px solid var(--border);
  color: var(--text);
  font-size: var(--text-body);
  line-height: 1.5;
}
.table tr:hover td { background: var(--surface-sunken); }
```

The all-caps caption-tracked header is again the editorial signature.

---

## Code block

```css
pre, code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}
pre {
  background: var(--surface-sunken);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-4) var(--space-5);
  overflow-x: auto;
  line-height: 1.55;
}
code {
  background: var(--surface-sunken);
  padding: 2px 6px;
  border-radius: 4px;
}
```

For syntax highlighting, prefer a *muted* theme (Github Light, Atom Light, or a custom palette using our colors) — never a dark theme inside an Anthropic-style page. Save terra cotta for keywords, olive for strings, blue for functions, mid-gray for comments.

---

## Dialog / modal

```css
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 19, var(--opacity-overlay));
  display: grid;
  place-items: center;
  z-index: var(--z-overlay);
  animation: fade-in var(--duration) var(--ease-out);
}
.dialog {
  background: var(--surface-raised);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  max-width: 480px;
  width: calc(100% - 2 * var(--space-6));
  box-shadow: var(--shadow-lg);
  z-index: var(--z-modal);
  animation: rise-in var(--duration) var(--ease-out);
}
.dialog h2 {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  font-weight: 600;
  margin: 0 0 var(--space-3);
}
.dialog .actions {
  margin-top: var(--space-6);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-2);
}

@keyframes fade-in { from { opacity: 0; } }
@keyframes rise-in { from { opacity: 0; transform: translateY(8px); } }
```

Modals and modals only — this is the one place `--shadow-lg` and `--surface-raised` (white) are unambiguously right.

---

## Tooltip

```css
.tooltip {
  background: var(--text);
  color: var(--surface);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-family: var(--font-heading);
  font-size: var(--text-caption);
  letter-spacing: 0;
  white-space: nowrap;
  box-shadow: var(--shadow);
  animation: fade-in var(--duration-fast) var(--ease-out);
}
```

Inverted (warm-near-black on cream-text) for clear contrast at small size. Heading font at caption size — sans, not the body serif, since tooltips are tiny utilitarian moments.

---

## Component combinations to consider

Once the above are in place, common assemblies feel right by default:

- **Hero**: `<h1 class="text-display">` + `<p class="text-body-lg text-muted">` subhead + one primary `.btn` + one tertiary `.btn`. Left-aligned beats centered.
- **Feature row**: 3 `.card-editorial` cards with no surrounding box, separated by top-borders only.
- **Pricing table**: 3 `.card`s; the "recommended" one swaps to `.card-raised` and adds a tag at the top.
- **Settings page**: `.sidebar` + content using `.field` form controls; submit row uses `.btn-tertiary` (cancel) + `.btn-primary` (save).
