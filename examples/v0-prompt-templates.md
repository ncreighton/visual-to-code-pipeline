# v0.app Prompt Examples by Component Type

Ready-to-use v0.dev prompts for each component type. Copy, customize tokens, paste into v0.dev.

---

## Hero Sections

### Type 1: Full-Screen Impact (Dark Theme)
Best for: Witchcraft, AI, Mythology sites

```markdown
Create a full-viewport hero section with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #0D0D0D
- Primary: #4A1C6F
- Secondary/Accent: #C9A962
- Text: #E8E8E8
- Text muted: #A0A0A0

## TYPOGRAPHY
- Display font: Cinzel (Google Fonts - serif)
- Body font: Lora (Google Fonts - serif)
- Headline: 4rem, secondary color, letter-spacing: 0.02em
- Subhead: 1.25rem, text-muted, line-height: 1.8

## COMPONENT SPECIFICATIONS
- Full viewport height (100vh)
- Content positioned LEFT of center (40% from left edge)
- Max content width: 550px
- Subtle radial gradient overlay from center (primary color at 15% opacity)
- Vertical rhythm: headline → subhead (mt-6) → CTA (mt-10)

## STYLE & ATMOSPHERE
- Content emerges from darkness
- Subtle glow effect on headline (text-shadow)
- Premium, mysterious feeling
- Animation: 1s fade-in with 20px upward translate, staggered

## MUST INCLUDE
- Small decorative element above headline (thin gold line or icon)
- Scroll indicator at bottom (chevron, animated bounce)
- Transparent nav area at top

## MUST NOT INCLUDE
- Centered text layout
- Sans-serif fonts
- Stock photo backgrounds
- "Learn More" as CTA text
- Gradient backgrounds (use solid + overlay)

## COPY/TEXT
- Headline: "[Your compelling headline]"
- Subhead: "[Supporting text that expands on value]"
- CTA: "[Action verb] + [benefit]" (NOT "Learn More")

Output: React component with Tailwind CSS
Include Google Font imports
Responsive: content centers on mobile
```

### Type 2: Split Layout (Light Theme)
Best for: Tech, Affiliate, Family sites

```markdown
Create a split-layout hero section with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #FFFFFF
- Surface: #F5F7FA
- Primary: #0066CC
- Secondary: #C0C0C0
- Accent: #00CC88
- Text: #1A1A2E
- Text muted: #666680

## TYPOGRAPHY
- Display font: Space Grotesk (Google Fonts)
- Body font: Inter (Google Fonts)
- Headline: 3.5rem, text color, font-weight: 700
- Subhead: 1.125rem, text-muted, line-height: 1.7

## COMPONENT SPECIFICATIONS
- Split layout: 55% content / 45% visual
- Min height: 85vh
- Content side: white, padded 4rem left
- Visual side: light surface color
- Visual side contains placeholder area for device/product mockup
- 3-column trust indicator row below CTA

## STYLE & ATMOSPHERE
- Clean, professional, trustworthy
- Subtle dot grid pattern on visual side (very light)
- Content slides in from left on load

## MUST INCLUDE
- Thin accent line above headline (3px, primary color)
- Star rating + review count
- Two CTAs (primary solid, secondary outline)
- Animation: content 0.6s slide-in, visual 0.8s fade

## MUST NOT INCLUDE
- Dark mode
- Blob shapes or organic curves
- Centered layout
- Heavy shadows
- "Learn More" text

## COPY/TEXT
- Headline: "[Clear benefit statement]"
- Subhead: "[Expand on value, build trust]"
- CTA Primary: "[Action verb]" (solid button)
- CTA Secondary: "[Alternative action]" (outline)
- Trust: "★ 4.9 from X readers"

Output: React component with Tailwind CSS
Include font imports
Responsive: stack vertically on mobile (content first)
```

---

## Navigation

### Type 1: Transparent Header (Dark Sites)

```markdown
Create a transparent navigation header with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: transparent (rgba(0,0,0,0))
- Background scrolled: rgba(13, 13, 13, 0.95) with backdrop-blur
- Text: #E8E8E8
- Accent: #C9A962
- Border: rgba(255,255,255,0.1)

## TYPOGRAPHY
- Logo font: Cinzel, 1.5rem
- Nav links: Lora, 0.9rem, letter-spacing: 0.05em

## COMPONENT SPECIFICATIONS
- Fixed position, full width
- Height: 80px
- Logo left, nav center, CTA right
- Max 6 nav items
- Transition to solid bg on scroll (add class .scrolled)

## STYLE
- Minimal, elegant
- Hover: links get accent color underline (animated)
- CTA: ghost button style (border + text only)

## MUST INCLUDE
- Logo area (text or placeholder)
- Smooth scroll-triggered background change
- Mobile hamburger icon (appears at 768px)
- Hover underline animation (scale from center)

## MUST NOT INCLUDE
- Heavy shadows
- Multiple CTA buttons
- Dropdown menus (keep flat)

Output: React component with Tailwind
Include scroll detection with useState/useEffect
Mobile: hamburger triggers slide-in menu from right
```

### Type 2: Clean Header (Light Sites)

```markdown
Create a clean navigation header with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #FFFFFF
- Text: #1A1A2E
- Text hover: #0066CC
- Border: #E0E4E8
- CTA bg: #0066CC
- CTA text: #FFFFFF

## TYPOGRAPHY
- Logo: Space Grotesk, 1.25rem, font-weight: 700
- Nav: Inter, 0.875rem, font-weight: 500

## COMPONENT SPECIFICATIONS
- Sticky position
- Height: 72px
- Border-bottom: 1px solid border color
- Logo left, nav center-right, CTA far right
- Subtle shadow on scroll

## STYLE
- Clean, professional
- Hover: text color change (smooth)
- Active nav item: primary color + subtle bottom border

## MUST INCLUDE
- Search icon (optional, beside nav)
- Rounded CTA button
- Shadow appears only after 50px scroll

## MUST NOT INCLUDE
- Transparency
- Hamburger on desktop
- Cluttered design

Output: React component with Tailwind
Responsive with hamburger menu below 1024px
```

---

## Card Grids

### Type 1: Article Cards (Dark Theme)

```markdown
Create a 3-column article card grid with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #0D0D0D
- Card bg: #1A1A1A
- Card border: #333333
- Primary: #4A1C6F
- Secondary: #C9A962
- Text: #E8E8E8
- Text muted: #A0A0A0

## TYPOGRAPHY
- Title: Cinzel, 1.25rem, text color
- Excerpt: Lora, 0.95rem, text-muted
- Meta: Inter, 0.75rem, text-muted

## COMPONENT SPECIFICATIONS
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 2rem
- Cards: rounded-lg, subtle border
- Image: 16:9 ratio, rounded-t-lg
- Content padding: 1.5rem

## CARD STRUCTURE
1. Image (placeholder or gradient)
2. Category badge (small, accent color)
3. Title (2 line max, truncate)
4. Excerpt (3 line max, truncate)
5. Meta row: date + read time

## STYLE
- Hover: card lifts 4px, border lightens
- Image: subtle zoom on hover (1.05 scale)
- Transition: 300ms ease-out

## MUST INCLUDE
- Category badge with small icon
- Proper truncation CSS
- Staggered animation on viewport enter

## MUST NOT INCLUDE
- Hard shadows
- Author avatar (keep minimal)
- Social share buttons

Output: React component with Tailwind
Include 3 sample cards with placeholder content
```

### Type 2: Product Comparison Cards (Light Theme)

```markdown
Create a product comparison card layout with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #F5F7FA
- Card bg: #FFFFFF
- Primary: #0066CC
- Accent: #00CC88
- Text: #1A1A2E
- Text muted: #666680
- Border: #E0E4E8

## TYPOGRAPHY
- Product name: Space Grotesk, 1.25rem, bold
- Price: Space Grotesk, 1.5rem, primary color
- Specs: Inter, 0.875rem
- Label: Inter, 0.75rem, uppercase

## COMPONENT SPECIFICATIONS
- Max 4 cards per row
- Card: white bg, rounded-xl, shadow-md
- Top badge for "Best Overall", "Best Value", etc.
- Product image area: square, light gray bg
- Pros/cons list (3 each max)

## CARD STRUCTURE
1. Badge ribbon (if featured)
2. Product image placeholder
3. Product name
4. Rating stars + count
5. Price (with original if discounted)
6. Key specs (3 bullet points)
7. Pros (green checks)
8. Cons (red x)
9. CTA button

## STYLE
- Featured card: subtle primary border
- Hover: shadow increases
- Clean, scannable

## MUST INCLUDE
- "View Deal" CTA (opens in new tab implied)
- Price formatting
- Rating stars component

## MUST NOT INCLUDE
- Cluttered specs
- Multiple CTAs per card
- Heavy decoration

Output: React component with Tailwind
Include 3 sample cards (1 featured)
Responsive: 2 cols tablet, 1 col mobile
```

---

## Newsletter Signup

### Type 1: Inline Mystical (Dark Theme)

```markdown
Create an inline newsletter signup section with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #1A1A1A
- Border: #333333
- Primary: #4A1C6F
- Secondary: #C9A962
- Text: #E8E8E8
- Text muted: #A0A0A0
- Input bg: #0D0D0D

## TYPOGRAPHY
- Headline: Cinzel, 2rem, secondary color
- Description: Lora, 1rem, text-muted
- Button: Inter, 0.875rem, uppercase, letter-spacing: 0.1em

## COMPONENT SPECIFICATIONS
- Full-width section
- Centered content, max-width: 600px
- Padding: 4rem vertical
- Email input + button on same row (desktop)
- Decorative elements: subtle stars or moon icon

## FORM STRUCTURE
1. Small icon above (moon, pentacle, etc.)
2. Headline
3. Description (1-2 sentences)
4. Email input + submit button
5. Privacy note (tiny text)

## STYLE
- Input: dark bg, gold border on focus
- Button: transparent bg, gold border, gold text
- Button hover: gold bg, dark text
- Subtle background glow effect

## MUST INCLUDE
- Focus states with gold glow
- Loading state for button
- Success message state
- ARIA labels

## MUST NOT INCLUDE
- Name field (email only)
- Checkboxes
- Heavy decoration

## COPY/TEXT
- Headline: "Join the Circle"
- Description: "Receive moon phase guides, spell crafting tips, and exclusive wisdom directly to your inbox."
- Button: "Subscribe"
- Privacy: "We respect your magical privacy. Unsubscribe anytime."

Output: React component with Tailwind
Include form validation
Show success state variant
```

---

## Footer

### Type 1: Multi-Column Dark Footer

```markdown
Create a multi-column footer with these EXACT specifications:

## DESIGN SYSTEM TOKENS
- Background: #0D0D0D
- Surface: #1A1A1A (for top border)
- Primary: #4A1C6F
- Secondary: #C9A962
- Text: #A0A0A0
- Text hover: #E8E8E8
- Border: #333333

## TYPOGRAPHY
- Logo: Cinzel, 1.25rem
- Column headers: Cinzel, 0.875rem, uppercase, gold
- Links: Lora, 0.875rem
- Copyright: Inter, 0.75rem

## COMPONENT SPECIFICATIONS
- Max-width container
- Top border: thin gold line
- 4-column layout: Logo+about, Links 1, Links 2, Social/Newsletter
- Bottom bar: copyright + legal links

## STRUCTURE
Column 1:
- Logo
- 2-3 sentence description
- Social icons row

Column 2:
- "Explore" header
- 5-6 page links

Column 3:
- "Resources" header  
- 5-6 resource links

Column 4:
- "Stay Connected" header
- Mini email signup
- Contact info

Bottom:
- Copyright left
- Legal links right (Privacy, Terms)

## STYLE
- Links: muted → bright on hover
- Social icons: 24px, gold on hover
- Clean spacing, lots of breathing room

## MUST NOT INCLUDE
- Heavy graphics
- Multiple CTAs
- Cluttered design

Output: React component with Tailwind
Responsive: 2 cols tablet, stack mobile
Include placeholder social icons
```

---

## Usage Instructions

1. **Select the appropriate template** based on site type and component
2. **Replace tokens** with site-specific values from DNA/brand guide
3. **Customize copy** to match site voice
4. **Paste into v0.dev** (https://v0.dev)
5. **Generate and iterate** - ask v0 for adjustments
6. **Export code** to project `/v0-components/` folder
7. **Claude Code implements** from this reference

---

## Quick Token Swaps

### For WitchcraftForBeginners:
- Background: #0D0D0D
- Primary: #4A1C6F
- Secondary: #C9A962
- Display font: Cinzel
- Body font: Lora

### For SmartHomeWizards:
- Background: #FFFFFF
- Primary: #0066CC
- Secondary: #C0C0C0
- Display font: Space Grotesk
- Body font: Inter

### For AIinActionHub:
- Background: #0A0A0F
- Primary: #00F0FF
- Secondary: #FF00FF
- Display font: Syne
- Body font: Manrope

### For MythicalArchives:
- Background: #FDF5E6
- Primary: #8B4513
- Secondary: #F5DEB3
- Display font: EB Garamond
- Body font: Spectral

### For Family-Flourish:
- Background: #FFF9F5
- Primary: #E8887C
- Secondary: #87A878
- Display font: Nunito
- Body font: Open Sans
