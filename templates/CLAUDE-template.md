# CLAUDE.md - [SITE_NAME] Project Configuration

## Project Overview

**Site**: [SITE_NAME]
**Type**: [authority/affiliate/lifestyle/spiritual]
**Status**: [planning/in-progress/launched]
**Theme**: Blocksy (with child theme)

---

## Brand Identity

### Voice & Persona
[Brief description of site voice/persona from DNA]

### Tone Attributes
- [Attribute 1]
- [Attribute 2]
- [Attribute 3]

### CTA Language
Use these, NOT "Learn More":
- "[Action phrase 1]"
- "[Action phrase 2]"
- "[Action phrase 3]"

---

## Design System

### Design Tokens Location

| Format | Path | Purpose |
|--------|------|---------|
| CSS | `./design-reference/tokens/variables.css` | WordPress/child theme |
| Tailwind | `./design-reference/tokens/tailwind.config.js` | v0/React components |
| Figma JSON | `./design-reference/tokens/figma-variables.json` | Figma sync |

### Color Palette

```css
/* PRIMARY - [Color name] */
--color-primary: [HEX];
--color-primary-light: [HEX];
--color-primary-dark: [HEX];

/* SECONDARY - [Color name] */
--color-secondary: [HEX];
--color-secondary-light: [HEX];

/* ACCENT */
--color-accent: [HEX];

/* NEUTRALS */
--color-background: [HEX];
--color-surface: [HEX];
--color-text: [HEX];
--color-text-muted: [HEX];
--color-border: [HEX];
```

### Typography

| Use | Font | Fallback |
|-----|------|----------|
| Display/Headlines | [Font Name] | serif/sans-serif |
| Body | [Font Name] | serif/sans-serif |
| Accent | [Font Name] | cursive |
| Code | JetBrains Mono | monospace |

**Scale:**
- Hero: clamp(2.5rem, 7.5vw, 5rem)
- H1: clamp(2.25rem, 5vw, 4rem)
- H2: clamp(1.875rem, 3.125vw, 3rem)
- H3: clamp(1.5rem, 1.875vw, 2.25rem)
- Body: clamp(1rem, 0.5vw, 1.125rem)

---

## Visual Implementation References

### v0 Component References

Components generated via v0.dev serve as visual implementation targets.

| Component | Prompt File | Code Reference | Status |
|-----------|-------------|----------------|--------|
| Hero | `./v0-prompts/hero.md` | `./v0-components/Hero.tsx` | ⏳ Pending |
| Navigation | `./v0-prompts/navigation.md` | `./v0-components/Navigation.tsx` | ⏳ Pending |
| Cards | `./v0-prompts/cards.md` | `./v0-components/Cards.tsx` | ⏳ Pending |
| Footer | `./v0-prompts/footer.md` | `./v0-components/Footer.tsx` | ⏳ Pending |
| Newsletter | `./v0-prompts/newsletter.md` | `./v0-components/Newsletter.tsx` | ⏳ Pending |

### Implementation Protocol

1. **Read v0 component code** at reference path
2. **Match the visual structure EXACTLY**
3. **Adapt for WordPress** using CSS custom properties
4. **Test visually** against v0 output

### Critical Rule

> **Match v0 reference components EXACTLY in visual output.**
> Adapt code for WordPress but maintain 100% visual fidelity.
> NEVER implement without v0 reference OR explicit token values.

---

## Anti-Patterns (NEVER USE)

### Site-Specific
- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]

### Universal (All Sites)
- Purple-to-blue gradients
- Centered text layouts (unless specifically designed)
- "Learn More" as CTA text
- Roboto/Inter/Arial as primary fonts
- Generic stock photos
- Heavy drop shadows
- Template-obvious patterns

---

## Content Strategy

### Post Types
| Type | Purpose | Template |
|------|---------|----------|
| [Type 1] | [Purpose] | [Template name] |
| [Type 2] | [Purpose] | [Template name] |

### Category Structure
```
├── [Parent Category]
│   ├── [Child 1]
│   ├── [Child 2]
│   └── [Child 3]
├── [Parent Category 2]
│   └── ...
```

---

## Technical Stack

### Theme
- **Base**: Blocksy
- **Child Theme**: `./theme/blocksy-child/`
- **Customizations**: `./theme/customizations/`

### Essential Plugins
| Plugin | Purpose | Config |
|--------|---------|--------|
| RankMath SEO Pro | SEO | `./config/rankmath-settings.json` |
| LiteSpeed Cache | Performance | `./config/litespeed-settings.json` |
| AI Engine | MCP Connection | Bearer token auth |
| WPCode | Custom snippets | `./plugins/snippets/` |

### File Structure
```
./
├── CLAUDE.md                 # This file
├── design-reference/
│   ├── tokens/
│   │   ├── variables.css
│   │   ├── tailwind.config.js
│   │   └── figma-variables.json
│   ├── v0-prompts/
│   │   ├── hero.md
│   │   ├── navigation.md
│   │   ├── cards.md
│   │   ├── footer.md
│   │   └── newsletter.md
│   └── v0-components/        # USER exports v0 code here
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       └── ...
├── theme/
│   └── blocksy-child/
│       ├── style.css
│       ├── functions.php
│       └── assets/
├── plugins/
│   ├── custom-functionality/
│   └── snippets/
├── blocks/
│   └── patterns/
├── content/
│   └── templates/
├── config/
└── docs/
    ├── BUILD-GUIDE.md
    └── brand-guide.md
```

---

## Build Commands

### Generate Design Package
```
Generate complete design package for [SITE_NAME]:
1. CSS tokens → ./design-reference/tokens/variables.css
2. Tailwind config → ./design-reference/tokens/tailwind.config.js
3. v0 prompts for all 5 core components
```

### Generate Single v0 Prompt
```
Generate v0.app prompt for [COMPONENT] based on this CLAUDE.md.
Include all token values and anti-patterns.
Output to ./v0-prompts/[component].md
```

### Implement from v0 Reference
```
Implement [COMPONENT] in WordPress.
Reference: ./v0-components/[Component].tsx
Output: ./theme/blocksy-child/templates/[component].php + CSS
Match visual output EXACTLY.
```

---

## Quality Gates

Before any component is complete:

### Visual Check
- [ ] Matches v0 reference exactly
- [ ] No anti-patterns present
- [ ] Typography hierarchy clear
- [ ] Colors match token values
- [ ] Animations subtle and purposeful
- [ ] At least one memorable element

### Functional Check
- [ ] All links work
- [ ] CTAs prominent
- [ ] Navigation intuitive
- [ ] Forms submit correctly
- [ ] Responsive on all breakpoints

### Performance Check
- [ ] Images optimized (WebP)
- [ ] No layout shift (CLS)
- [ ] Loads under 3s
- [ ] CSS minified

### Accessibility Check
- [ ] Color contrast AA compliant
- [ ] Focus states visible
- [ ] Alt text on images
- [ ] Keyboard navigation works

---

## Quick Reference

### Emergency Anti-Pattern Check
Before pushing ANY visual work, verify NONE of these exist:
1. Purple-to-blue gradient
2. Centered text (unless intentional)
3. "Learn More" button
4. Inter/Roboto/Arial fonts
5. Template-obvious layouts
6. Heavy shadows
7. Generic stock photos

### v0 Workflow Reminder
1. Claude generates v0 prompt with tokens + anti-patterns
2. User pastes prompt into v0.dev
3. User exports code to `./v0-components/`
4. Claude implements from code reference
5. Visual QA against v0 output

---

*Generated by Visual-to-Code Pipeline v1.0*
*Last Updated: [DATE]*
