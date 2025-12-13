---
name: visual-to-code-pipeline
description: "Enable Claude to 'see' designs by generating design tokens and v0.app prompts. Converts DNA files → design tokens → v0.dev prompts → exportable code → implementation reference. THE KEY SKILL for producing unique, non-generic designs. Triggers: design tokens, v0 prompt, visual reference, generate components, design package, token export, Figma sync, component generation."
version: 1.0.0
---

# Visual-to-Code Pipeline

**THE CRITICAL SKILL** that solves Claude's inability to "see" visual designs.

## The Core Problem

Claude CANNOT see images. This causes:
- Generic, similar-looking designs across all sites
- No visual reference to work from
- Imagination-based output instead of design-based
- "Safe" choices that look like every other AI output

## The Solution: Visual-to-Code Pipeline

Claude CAN:
1. **Generate exact design tokens** (CSS, Tailwind, Figma JSON)
2. **Generate detailed v0.app prompts** for visual components
3. **Read exported code** from v0.dev as implementation reference
4. **Match code output** to the v0 reference exactly

### The Pipeline Flow

```
DNA File 
    ↓
Design Tokens (CSS + Tailwind + Figma JSON)
    ↓
v0.app Prompts (Claude generates detailed prompts)
    ↓
User executes in v0.dev (generates visual component)
    ↓
Export code to project folder
    ↓
Claude Code implements from code reference (not imagination)
```

## Quick Start

### Command: Generate Design Package

```
Generate complete design package for [SITE_NAME] including:
1. CSS custom properties (variables.css)
2. Tailwind config (tailwind.config.js)  
3. Figma variables JSON (figma-variables.json)
4. v0.app prompts for: hero, navigation, cards, footer, newsletter
5. Updated CLAUDE.md with visual reference section
```

### Command: Generate Single Component

```
Generate a v0.app prompt for [COMPONENT] based on [SITE_NAME] DNA.
Include exact colors, fonts, spacing, and anti-patterns.
```

### Command: Implement from Reference

```
Implement the [COMPONENT] in WordPress based on the v0 reference code at [PATH].
Match the structure and styling exactly, adapting for PHP/WordPress.
```

---

## Phase 1: Design Token Generation

### Token Format 1: CSS Custom Properties

For WordPress/vanilla CSS implementations:

```css
/* [SITE_NAME] Design Tokens */
/* Generated from DNA - DO NOT EDIT MANUALLY */

:root {
  /* ═══════════════════════════════════════
     COLOR SYSTEM
     ═══════════════════════════════════════ */
  
  /* Primary Palette */
  --color-primary: [HEX];
  --color-primary-light: [HEX];
  --color-primary-dark: [HEX];
  
  /* Secondary Palette */
  --color-secondary: [HEX];
  --color-secondary-light: [HEX];
  --color-secondary-dark: [HEX];
  
  /* Accent Colors */
  --color-accent: [HEX];
  --color-accent-hover: [HEX];
  
  /* Neutrals */
  --color-background: [HEX];
  --color-surface: [HEX];
  --color-surface-elevated: [HEX];
  --color-text: [HEX];
  --color-text-muted: [HEX];
  --color-text-inverse: [HEX];
  --color-border: [HEX];
  
  /* Functional */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* ═══════════════════════════════════════
     TYPOGRAPHY
     ═══════════════════════════════════════ */
  
  /* Font Families */
  --font-display: '[DISPLAY_FONT]', [FALLBACK];
  --font-body: '[BODY_FONT]', [FALLBACK];
  --font-accent: '[ACCENT_FONT]', [FALLBACK];
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes - Fluid Scale */
  --font-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-xl: clamp(1.25rem, 1rem + 1.25vw, 1.75rem);
  --font-2xl: clamp(1.5rem, 1.125rem + 1.875vw, 2.25rem);
  --font-3xl: clamp(1.875rem, 1.25rem + 3.125vw, 3rem);
  --font-4xl: clamp(2.25rem, 1.25rem + 5vw, 4rem);
  --font-hero: clamp(2.5rem, 1rem + 7.5vw, 6rem);
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.75;
  
  /* Letter Spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  
  /* ═══════════════════════════════════════
     SPACING
     ═══════════════════════════════════════ */
  
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  
  /* Fluid Section Spacing */
  --section-gap: clamp(4rem, 8vw, 8rem);
  --content-gap: clamp(2rem, 4vw, 4rem);
  
  /* ═══════════════════════════════════════
     LAYOUT
     ═══════════════════════════════════════ */
  
  --container-max: 75rem;    /* 1200px */
  --container-narrow: 50rem; /* 800px */
  --container-wide: 90rem;   /* 1440px */
  --content-width: 65ch;
  
  /* ═══════════════════════════════════════
     BORDERS & RADIUS
     ═══════════════════════════════════════ */
  
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  --border-thin: 1px;
  --border-normal: 2px;
  --border-thick: 4px;
  
  /* ═══════════════════════════════════════
     SHADOWS
     ═══════════════════════════════════════ */
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
               0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px [PRIMARY_HEX_ALPHA];
  
  /* ═══════════════════════════════════════
     ANIMATION
     ═══════════════════════════════════════ */
  
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Token Format 2: Tailwind Config

For v0.dev/React/Next.js implementations:

```javascript
// tailwind.config.js
// [SITE_NAME] Design System
// Generated from DNA - Source of truth for visual design

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        primary: {
          DEFAULT: '[HEX]',
          light: '[HEX]',
          dark: '[HEX]',
        },
        // Secondary Palette
        secondary: {
          DEFAULT: '[HEX]',
          light: '[HEX]',
          dark: '[HEX]',
        },
        // Accent
        accent: {
          DEFAULT: '[HEX]',
          hover: '[HEX]',
        },
        // Neutrals
        background: '[HEX]',
        surface: {
          DEFAULT: '[HEX]',
          elevated: '[HEX]',
        },
        text: {
          DEFAULT: '[HEX]',
          muted: '[HEX]',
          inverse: '[HEX]',
        },
        border: '[HEX]',
      },
      fontFamily: {
        display: ['[DISPLAY_FONT]', '[FALLBACK]'],
        body: ['[BODY_FONT]', '[FALLBACK]'],
        accent: ['[ACCENT_FONT]', '[FALLBACK]'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.5' }],
        'xl': ['clamp(1.25rem, 1rem + 1.25vw, 1.75rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 1.125rem + 1.875vw, 2.25rem)', { lineHeight: '1.3' }],
        '3xl': ['clamp(1.875rem, 1.25rem + 3.125vw, 3rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.25rem + 5vw, 4rem)', { lineHeight: '1.1' }],
        'hero': ['clamp(2.5rem, 1rem + 7.5vw, 6rem)', { lineHeight: '1.05' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'content': 'clamp(2rem, 4vw, 4rem)',
      },
      maxWidth: {
        'container': '75rem',
        'narrow': '50rem',
        'wide': '90rem',
        'content': '65ch',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.02)',
        'lift': '0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.04)',
        'glow': '0 0 20px [PRIMARY_HEX]40',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
```

### Token Format 3: Figma Variables JSON

For Figma Design System sync:

```json
{
  "name": "[SITE_NAME] Design System",
  "version": "1.0.0",
  "collections": [
    {
      "name": "Colors",
      "modes": ["Light", "Dark"],
      "variables": [
        {
          "name": "primary/default",
          "type": "COLOR",
          "values": {
            "Light": "[HEX]",
            "Dark": "[HEX_DARK]"
          }
        },
        {
          "name": "primary/light",
          "type": "COLOR",
          "values": {
            "Light": "[HEX]",
            "Dark": "[HEX_DARK]"
          }
        }
      ]
    },
    {
      "name": "Typography",
      "modes": ["Default"],
      "variables": [
        {
          "name": "font-display",
          "type": "STRING",
          "values": { "Default": "[FONT_NAME]" }
        },
        {
          "name": "font-body",
          "type": "STRING",
          "values": { "Default": "[FONT_NAME]" }
        }
      ]
    },
    {
      "name": "Spacing",
      "modes": ["Default"],
      "variables": [
        { "name": "space-1", "type": "FLOAT", "values": { "Default": 4 } },
        { "name": "space-2", "type": "FLOAT", "values": { "Default": 8 } },
        { "name": "space-4", "type": "FLOAT", "values": { "Default": 16 } },
        { "name": "space-8", "type": "FLOAT", "values": { "Default": 32 } },
        { "name": "space-16", "type": "FLOAT", "values": { "Default": 64 } }
      ]
    }
  ]
}
```

---

## Phase 2: v0.app Prompt Generation

### v0 Prompt Template Structure

Every v0 prompt MUST include these sections:

```markdown
Create a [COMPONENT_TYPE] with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: [exact hex]
- Primary color: [exact hex]
- Secondary color: [exact hex]
- Accent color: [exact hex]
- Text color: [exact hex]
- Text muted: [exact hex]
- Border color: [exact hex]

## TYPOGRAPHY
- Display/Heading font: [exact font name] (import from Google Fonts)
- Body font: [exact font name] (import from Google Fonts)
- Headline size: [size with unit]
- Body size: [size with unit]

## COMPONENT SPECIFICATIONS
[Detailed layout, dimensions, spacing]
[Content structure]
[Interactive elements]

## STYLE & ATMOSPHERE
[Mood description]
[Texture/effect notes]
[Animation requirements]

## MUST INCLUDE
- [Required element 1]
- [Required element 2]
- [etc.]

## MUST NOT INCLUDE (Critical Anti-Patterns)
- [Anti-pattern 1]
- [Anti-pattern 2]
- [etc.]

## COPY/TEXT
- Headline: "[exact text]"
- Subhead: "[exact text]"
- CTA button: "[exact text]" (NOT "Learn More")

Output as: React component with Tailwind CSS
Include Google Font imports in the component
```

### Example v0 Prompts by Site Type

#### WitchcraftForBeginners - Hero Section

```markdown
Create a full-viewport hero section with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #0D0D0D (near-black)
- Primary: #4A1C6F (deep purple)
- Secondary: #C9A962 (gold)
- Accent: #1E3A5F (midnight blue)
- Text: #E8E8E8 (light gray)
- Text muted: #A0A0A0

## TYPOGRAPHY
- Display font: Cinzel (Google Fonts - serif, mystical)
- Body font: Lora (Google Fonts - elegant serif)
- Headline: 4.2rem, gold color (#C9A962), letter-spacing: 0.02em
- Subhead: 1.25rem, light gray, line-height: 1.8

## COMPONENT SPECIFICATIONS
- Full viewport height (100vh)
- Content positioned left of center (not centered)
- Max content width: 600px
- Padding: 6rem horizontal
- Subtle radial gradient from center: rgba(74, 28, 111, 0.15) to transparent
- Very subtle star particle effect in background (CSS only, not animated)

## STYLE & ATMOSPHERE
- Candlelit study atmosphere
- Mystical but grounded (not Halloween)
- Wisdom and ancient knowledge feeling
- Content emerges from darkness with 1.2s fade-in animation
- Subtle text shadow on headline for glow effect

## MUST INCLUDE
- Navigation slot at top (transparent background)
- Decorative moon phase icon (small, gold, near headline)
- Scroll indicator at bottom (subtle, animated bounce)
- Staggered animation delays for headline → subhead → CTA

## MUST NOT INCLUDE
- Halloween imagery (no skulls, no spooky)
- Centered text alignment
- Sans-serif fonts
- Purple-to-blue gradients
- Stock photo backgrounds
- "Learn More" as CTA text
- Excessive decorative elements

## COPY/TEXT
- Headline: "Where Ancient Wisdom Meets Modern Seekers"
- Subhead: "Your trusted guide into authentic witchcraft practice. Learn the craft with respect, wisdom, and grounded intention."
- CTA Primary: "Begin Your Journey" (transparent bg, gold border, gold text)
- CTA Secondary: "Explore the Grimoire" (text link style)

Output as: React component with Tailwind CSS
Include Cinzel and Lora font imports from Google Fonts
Make the component responsive with mobile-first approach
```

#### SmartHomeWizards - Hero Section

```markdown
Create a split-layout hero section with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #FFFFFF (white)
- Surface: #F5F7FA (light gray)
- Primary: #0066CC (electric blue)
- Secondary: #C0C0C0 (silver)
- Accent: #00CC88 (green - success/connected)
- Text: #1A1A2E (dark navy)
- Text muted: #666680

## TYPOGRAPHY
- Display font: Space Grotesk (Google Fonts - modern tech)
- Body font: Inter (Google Fonts - clean, readable)
- Headline: 3.5rem, dark navy, font-weight: 700
- Subhead: 1.125rem, muted gray, line-height: 1.7

## COMPONENT SPECIFICATIONS
- Split layout: 55% content left, 45% visual right
- Min height: 80vh
- Content side: white background
- Visual side: light gray with floating device mockup placeholder
- Content padding: 4rem left, 3rem right
- Grid of 3 small trust indicators below CTA

## STYLE & ATMOSPHERE
- Clean, professional, trustworthy
- Tech-forward but accessible
- Slight geometric pattern overlay on visual side (very subtle)
- Device mockup area with subtle shadow suggesting depth

## MUST INCLUDE
- Trust badges row (e.g., "500+ Smart Homes Connected")
- Star rating indicator
- Two CTAs side by side
- Subtle blue accent line above headline
- Animation: content slides in from left, visual fades in

## MUST NOT INCLUDE
- Dark mode (this is light theme)
- Gradients
- Rounded blob shapes
- Generic stock photo placeholders
- "Learn More" button text
- Cluttered layout

## COPY/TEXT
- Headline: "Your Smart Home, Simplified"
- Subhead: "Expert reviews, setup guides, and recommendations from someone who's tested every device. Make your home smarter, not more complicated."
- CTA Primary: "Find Your Setup" (blue bg, white text, rounded)
- CTA Secondary: "Compare Devices" (outline style)
- Trust indicator: "★ 4.9 from 2,400+ readers"

Output as: React component with Tailwind CSS
Include Space Grotesk and Inter font imports
Responsive: stack vertically on mobile
```

---

## Phase 3: User Workflow

### Instructions for User

After Claude generates v0 prompts:

1. **Go to https://v0.dev**
2. **Start a new generation**
3. **Paste Claude's prompt exactly**
4. **Generate the component**
5. **Review and iterate if needed** (ask v0 for adjustments)
6. **Export the code:**
   - Click "Code" tab
   - Copy the React component
   - Save to project folder

### File Organization

```
/project-folder/
├── CLAUDE.md                        # Main project config
├── design-reference/
│   ├── tokens/
│   │   ├── variables.css            # CSS tokens
│   │   ├── tailwind.config.js       # Tailwind config
│   │   └── figma-variables.json     # Figma sync
│   ├── v0-prompts/
│   │   ├── hero.md                  # v0 prompt for hero
│   │   ├── navigation.md            # v0 prompt for nav
│   │   ├── cards.md                 # v0 prompt for cards
│   │   ├── footer.md                # v0 prompt for footer
│   │   └── newsletter.md            # v0 prompt for newsletter
│   └── v0-components/
│       ├── Hero.tsx                 # v0 EXPORTED code
│       ├── Navigation.tsx           # v0 EXPORTED code
│       ├── Cards.tsx                # v0 EXPORTED code
│       ├── Footer.tsx               # v0 EXPORTED code
│       └── Newsletter.tsx           # v0 EXPORTED code
└── BUILD-GUIDE.md
```

---

## Phase 4: Implementation from Reference

### The Critical Rule

**NEVER implement visual designs without either:**
1. v0 component code as reference, OR
2. Figma specs via MCP, OR  
3. Explicit token values from CLAUDE.md

### Reading v0 Reference Code

When implementing, Claude Code should:

1. **Read the v0 component file**
2. **Extract the structure:**
   - HTML element hierarchy
   - Class names and their purposes
   - Inline styles if any
3. **Map Tailwind → CSS:**
   - `bg-primary` → `background: var(--color-primary)`
   - `text-xl` → `font-size: var(--font-xl)`
   - `p-8` → `padding: var(--space-8)`
4. **Adapt for WordPress:**
   - Convert JSX to PHP/HTML
   - Replace Tailwind with CSS custom properties
   - Make Blocksy/Gutenberg compatible

### Example Conversion

**v0 Output (React/Tailwind):**
```jsx
<section className="min-h-screen bg-background flex items-center">
  <div className="max-w-[600px] px-24 py-16">
    <h1 className="font-display text-hero text-secondary leading-tight">
      Where Ancient Wisdom Meets Modern Seekers
    </h1>
    <p className="font-body text-lg text-text-muted mt-6 leading-relaxed">
      Your trusted guide into authentic witchcraft practice.
    </p>
    <button className="mt-8 px-8 py-4 border-2 border-secondary text-secondary 
                       hover:bg-secondary hover:text-background transition-colors">
      Begin Your Journey
    </button>
  </div>
</section>
```

**WordPress Implementation (CSS Custom Properties):**
```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-headline">
      Where Ancient Wisdom Meets Modern Seekers
    </h1>
    <p class="hero-subhead">
      Your trusted guide into authentic witchcraft practice.
    </p>
    <a href="/start" class="hero-cta">Begin Your Journey</a>
  </div>
</section>
```

```css
.hero-section {
  min-height: 100vh;
  background: var(--color-background);
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 600px;
  padding: var(--space-24) var(--space-16);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: var(--font-hero);
  color: var(--color-secondary);
  line-height: var(--leading-tight);
}

.hero-subhead {
  font-family: var(--font-body);
  font-size: var(--font-lg);
  color: var(--color-text-muted);
  margin-top: var(--space-6);
  line-height: var(--leading-relaxed);
}

.hero-cta {
  display: inline-block;
  margin-top: var(--space-8);
  padding: var(--space-4) var(--space-8);
  border: 2px solid var(--color-secondary);
  color: var(--color-secondary);
  background: transparent;
  transition: all var(--duration-normal) var(--ease-out);
}

.hero-cta:hover {
  background: var(--color-secondary);
  color: var(--color-background);
}
```

---

## CLAUDE.md Visual Reference Section

Add this to every project CLAUDE.md:

```markdown
## Visual Implementation References

### Design Tokens Location
| Format | Path | Purpose |
|--------|------|---------|
| CSS | `/design-reference/tokens/variables.css` | WordPress/vanilla |
| Tailwind | `/design-reference/tokens/tailwind.config.js` | v0/React |
| Figma | `/design-reference/tokens/figma-variables.json` | Design sync |

### v0 Component References
Components generated via v0.dev serve as visual implementation targets:

| Component | Prompt | Code Reference | Status |
|-----------|--------|---------------|--------|
| Hero | `/v0-prompts/hero.md` | `/v0-components/Hero.tsx` | ⏳ Pending |
| Navigation | `/v0-prompts/navigation.md` | `/v0-components/Navigation.tsx` | ⏳ Pending |
| Cards | `/v0-prompts/cards.md` | `/v0-components/Cards.tsx` | ⏳ Pending |
| Footer | `/v0-prompts/footer.md` | `/v0-components/Footer.tsx` | ⏳ Pending |
| Newsletter | `/v0-prompts/newsletter.md` | `/v0-components/Newsletter.tsx` | ⏳ Pending |

### Implementation Protocol
1. Read v0 component code at reference path
2. Match the visual structure EXACTLY
3. Adapt for WordPress using CSS custom properties
4. Test against v0 output visually

### Critical Rule
**Match v0 reference components EXACTLY in visual output.**
Adapt code for WordPress but maintain 100% visual fidelity.
```

---

## Figma MCP Integration

When Figma MCP is available, enhance the pipeline:

### Push Tokens to Figma
```
Use Figma MCP to create variables in [FILE_KEY]:
- Import /design-reference/tokens/figma-variables.json
- Create color collection
- Create typography collection
- Create spacing collection
```

### Extract from Figma for Implementation
```
Use Figma:get_design_context for node [NODE_ID] in [FILE_KEY].
Extract exact specifications for implementation.
```

### Compare Implementation to Figma
```
Use Figma:get_screenshot for [NODE_ID].
Compare against WordPress implementation visually.
Document any deviations.
```

---

## Site-Specific Token Templates

See `/templates/` directory for pre-built token sets:
- `witchcraft-tokens.css`
- `smarthome-tokens.css`
- `aiinaction-tokens.css`
- `mythical-tokens.css`
- `family-tokens.css`
- `bulletjournals-tokens.css`

---

## Success Criteria

After using this skill, the system should:
- ✓ Generate exact design tokens from any DNA file
- ✓ Generate detailed v0.app prompts for any component
- ✓ Provide clear workflow for executing v0 prompts
- ✓ Have v0 exported code as implementation reference
- ✓ Enable Claude Code to implement from code (not imagination)
- ✓ Prevent generic "safe" design output
- ✓ Produce Awwward-worthy unique designs per site

---

## Quick Reference

### Commands
| Command | Purpose |
|---------|---------|
| `Generate design package for [SITE]` | Full token + prompt set |
| `Generate v0 prompt for [COMPONENT]` | Single component prompt |
| `Implement from v0 reference at [PATH]` | WordPress implementation |
| `Export tokens for [SITE]` | All 3 token formats |

### File Structure
```
design-reference/
├── tokens/           # Source of truth
├── v0-prompts/       # Claude-generated prompts
└── v0-components/    # User-exported v0 code
```

### The Pipeline
```
DNA → Tokens → v0 Prompts → User runs v0 → Export code → Claude implements
```
