# Motion

Motion in this system is *quiet*. The job of animation is to confirm cause and effect, soften state changes, and add a moment of grace on first paint — not to entertain.

If a motion choice would feel out of place in a magazine app or a research website, it's wrong here.

## Principles

1. **Soft easing, never bouncy.** Use `ease-out` curves that decelerate gently. The default `--ease-out` is `cubic-bezier(0.16, 1, 0.3, 1)` — fast at first, settles slowly. Never use spring/elastic curves with overshoot.
2. **Short durations.** 150ms for hovers and presses. 300ms for fades and small slides. 600ms only for the page-load orchestra. Anything over 800ms feels labored.
3. **Stagger first paint.** When the page loads, top-level sections fade and rise in a stagger of ~80–120ms. This is the single highest-impact moment in the whole system.
4. **Subtle hovers.** Background tint shift, 1–2px translate, color change. Never scale > 1.02.
5. **Respect `prefers-reduced-motion`.** All animation should be wrapped or guarded. Reduce to instant transitions when the user has asked for it.

## Tokens

```css
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);    /* default */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);   /* bidirectional */
--ease-in:     cubic-bezier(0.5, 0, 0.75, 0);    /* exits */

--duration-fast: 150ms;
--duration:      300ms;
--duration-slow: 600ms;

--stagger-step:  80ms;   /* between siblings on page load */
```

## Page-load choreography

The signature moment. Top-level sections fade in and rise 8–12px, staggered.

```css
@keyframes rise-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.rise-in {
  animation: rise-in var(--duration-slow) var(--ease-out) both;
}

/* Stagger via inline animation-delay or these utility classes */
.rise-in-1 { animation-delay: 0ms; }
.rise-in-2 { animation-delay: 80ms; }
.rise-in-3 { animation-delay: 160ms; }
.rise-in-4 { animation-delay: 240ms; }
.rise-in-5 { animation-delay: 320ms; }
.rise-in-6 { animation-delay: 400ms; }
```

```html
<main>
  <header class="rise-in rise-in-1">…</header>
  <section class="rise-in rise-in-2">…</section>
  <section class="rise-in rise-in-3">…</section>
</main>
```

Two important constraints:

- Stagger top-level groups, not every leaf node. A page hero rises as one block; a card grid rises as one block. If you stagger 16 cards individually, it stops feeling intentional and starts feeling like a slot machine.
- Keep the rise small (8–16px). Too far and it feels gimmicky.

## Hover treatments

The vocabulary for hovers across the system:

```css
/* Color shift — links, nav items, text buttons */
.hover-color { transition: color var(--duration-fast) var(--ease-out); }

/* Background tint shift — cards, list rows, tertiary buttons */
.hover-tint  { transition: background-color var(--duration-fast) var(--ease-out); }

/* Subtle lift — cards that should feel pickable */
.hover-lift {
  transition: transform var(--duration) var(--ease-out),
              border-color var(--duration) var(--ease-out);
}
.hover-lift:hover { transform: translateY(-1px); border-color: var(--border-strong); }

/* Filled control press */
.press {
  transition: background-color var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}
.press:active { transform: translateY(1px); }
```

A button can use *one* of these treatments at a time. Don't combine lift + tint + scale.

## Scroll-triggered reveal

For long pages, sections below the fold should fade in as they enter the viewport. The cheapest way: an `IntersectionObserver` that toggles a class.

```js
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('reveal-in');
      reveal.unobserve(e.target);  // animate once, not on re-entry
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}
.reveal.reveal-in {
  opacity: 1;
  transform: translateY(0);
}
```

Animate **once**, not on re-entry. Re-animation on scroll-up is a known annoyance.

## State changes

When something changes — a banner appears, a row is added, a tab switches — let it fade or slide in *gently*. The defaults:

| Change | Animation |
|---|---|
| Element appears | `opacity` 0→1 + `translateY(8px)→0`, `--duration` |
| Element disappears | `opacity` 1→0 + `translateY(0)→-4px`, `--duration-fast`, with `--ease-in` |
| Tab content swap | Outgoing fades out (`--duration-fast`), incoming fades in after a 50ms beat |
| Modal open | Backdrop fades in `--duration`; dialog fades + rises 8px in `--duration` |
| Modal close | Reverse, half the duration, `--ease-in` |

## What to avoid

- **Bouncy springs.** Anything with overshoot. The whole system is calm — overshoot reads as toy-like.
- **Pulsing/breathing decorations.** Logos, icons, "live" dots that pulse forever. Use motion to mark events, not as ambient texture.
- **Auto-rotating carousels.** If something must rotate, it should be user-controlled.
- **Particle effects, glow trails, marquees.**
- **Scale-on-hover above 1.02.** A card that grows by 5% on hover punches the layout. Keep lifts to translation.
- **Slide transitions for page navigation.** Fades in/out are fine; sliding the whole page is jarring on the web.
- **Long entrance animations.** A 1.2s hero animation feels like an unskippable ad.

## Reduced motion

Always pair the rise-in keyframes with a `prefers-reduced-motion` guard:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This snippet is included in `assets/tokens.css` by default.

## Putting it together

A typical landing page motion plan:

1. **First paint** (0–600ms): Hero header rises; subhead rises 80ms after; CTA rises 160ms after. Total feel: ~700ms of welcome.
2. **Below fold** (on scroll): Each major section is a `.reveal` block, fades + rises once when it enters.
3. **Hovers**: Links shift color (`--duration-fast`). Cards lift -1px and gain a stronger border (`--duration`). Primary button shifts background.
4. **Click**: Tertiary buttons get a tint. Primary buttons get a 1px press translate.
5. **Forms**: Inputs gain a focus ring with `--duration-fast`. Validation errors fade in below the field with `--duration`.

If the result feels like a magazine waking up rather than a startup demo, you're there.
