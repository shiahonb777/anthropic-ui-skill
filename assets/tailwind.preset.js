/**
 * Anthropic-style Tailwind preset.
 *
 * Usage:
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./path/to/tailwind.preset.js')],
 *     content: [...your content paths...],
 *   };
 *
 * This preset *extends* the default theme rather than replacing it,
 * so you can use `bg-surface` alongside `bg-white` etc.
 *
 * Don't forget to load the fonts in your <head>:
 *
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
 *
 * If you have Styrene/Tiempos licenses, add them via @font-face in your CSS;
 * the font stacks below already prefer them.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        surface:        '#faf9f5',
        'surface-sunken': '#f3f1ea',
        'surface-raised': '#ffffff',

        text: {
          DEFAULT: '#141413',
          muted:   '#6b6a64',
          faint:   '#b0aea5',
          'on-accent': '#faf9f5',
        },

        border: {
          DEFAULT: '#e8e6dc',
          strong:  '#c9c5b8',
        },

        accent: {
          DEFAULT: '#d97757',
          hover:   '#c4613f',
          soft:    '#f4dccf',
          blue:        '#6a9bcc',
          'blue-soft': '#dbe6f1',
          green:        '#788c5d',
          'green-soft': '#dde2d0',
        },

        success: '#788c5d',
        warning: '#d97757',
        danger:  '#b54545',
        info:    '#6a9bcc',
      },

      fontFamily: {
        heading: ['"Styrene A"', '"Styrene B"', '"Poppins"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body:    ['"Tiempos Text"', '"Tiempos"', '"Lora"', 'Georgia', '"Times New Roman"', 'serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
        // Override the framework defaults so unprefixed `font-sans` and
        // `font-serif` still feel right if used.
        sans:    ['"Styrene A"', '"Poppins"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif:   ['"Tiempos Text"', '"Lora"', 'Georgia', 'serif'],
      },

      fontSize: {
        // Anthropic-style scale. Numbers picked to feel right at 1.25 ratio.
        // Each entry is [size, { lineHeight, letterSpacing }].
        display:   ['3.5rem',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1-anth': ['2.5rem',   { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'h2-anth': ['2rem',     { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3-anth': ['1.5rem',   { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        'h4-anth': ['1.25rem',  { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        body:      ['1rem',     { lineHeight: '1.6' }],
        caption:   ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.02em' }],
        overline:  ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },

      fontWeight: {
        // Cap at 600. Anything heavier is off-brand.
        normal:   '400',
        medium:   '500',
        semibold: '600',
      },

      borderRadius: {
        sm:   '4px',
        DEFAULT: '6px',
        md:   '8px',
        lg:   '12px',
        pill: '999px',
      },

      boxShadow: {
        // Used sparingly — prefer `border` for separation.
        sm: '0 1px 2px rgba(20, 20, 19, 0.04)',
        DEFAULT: '0 2px 8px rgba(20, 20, 19, 0.06)',
        lg: '0 8px 24px rgba(20, 20, 19, 0.08)',
        none: 'none',
      },

      spacing: {
        // 4px base unit; keep Tailwind defaults but add a few editorial steps.
        prose:   '720px',
        content: '960px',
        container: '1200px',
        'page-max': '1440px',

        'nav':       '72px',
        'btn':       '40px',
        'btn-lg':    '48px',
        'btn-sm':    '32px',
        'input':     '40px',
        'input-lg':  '48px',
      },

      maxWidth: {
        prose:     '720px',
        content:   '960px',
        container: '1200px',
        'page-max': '1440px',
      },

      transitionTimingFunction: {
        'out-soft':    'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'in-soft':     'cubic-bezier(0.5, 0, 0.75, 0)',
      },

      transitionDuration: {
        fast: '150ms',
        DEFAULT: '300ms',
        slow: '600ms',
      },

      keyframes: {
        'rise-in': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        'rise-in':  'rise-in 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':  'fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },

      ringWidth: {
        DEFAULT: '2px',
      },
      ringOffsetWidth: {
        DEFAULT: '2px',
      },
      ringOffsetColor: {
        DEFAULT: '#faf9f5',
      },
    },
  },
};
