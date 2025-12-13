// tailwind.config.js
// WitchcraftForBeginners Design System
// Generated from DNA - Source of truth for visual design

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Deep Purple (wisdom, mystery)
        primary: {
          DEFAULT: '#4A1C6F',
          light: '#6B3FA0',
          dark: '#2D1149',
          50: '#F5F0FA',
          100: '#E8DDF2',
          200: '#D1BBE5',
          300: '#B08FD4',
          400: '#8B5CB8',
          500: '#4A1C6F',
          600: '#3D1759',
          700: '#2D1149',
          800: '#1F0B33',
          900: '#10061A',
        },
        // Secondary - Gold (sacred, magical)
        secondary: {
          DEFAULT: '#C9A962',
          light: '#E5D4A1',
          dark: '#9A7B3D',
          50: '#FBF8F0',
          100: '#F5EDD9',
          200: '#EBD9B3',
          300: '#DEC78A',
          400: '#C9A962',
          500: '#B8944A',
          600: '#9A7B3D',
          700: '#7A612F',
          800: '#5A4722',
          900: '#3A2E16',
        },
        // Accent - Midnight Blue (depth)
        accent: {
          DEFAULT: '#1E3A5F',
          light: '#2D5A8A',
          dark: '#0F1F33',
        },
        // Dark Theme Neutrals
        background: '#0D0D0D',
        surface: {
          DEFAULT: '#1A1A1A',
          elevated: '#242424',
          overlay: '#2D2D2D',
        },
        text: {
          DEFAULT: '#E8E8E8',
          muted: '#A0A0A0',
          inverse: '#0D0D0D',
        },
        border: {
          DEFAULT: '#333333',
          subtle: '#222222',
          accent: '#C9A962',
        },
        // Magical glow colors (for effects)
        glow: {
          gold: 'rgba(201, 169, 98, 0.3)',
          purple: 'rgba(74, 28, 111, 0.4)',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'Playfair Display', 'serif'],
        body: ['Lora', 'Crimson Text', 'EB Garamond', 'serif'],
        accent: ['Tangerine', 'Great Vibes', 'cursive'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.7' }],
        'lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.25rem, 1rem + 1.25vw, 1.75rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 1.125rem + 1.875vw, 2.25rem)', { lineHeight: '1.3' }],
        '3xl': ['clamp(1.875rem, 1.25rem + 3.125vw, 3rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.25rem + 5vw, 4rem)', { lineHeight: '1.15' }],
        'hero': ['clamp(2.5rem, 1rem + 7.5vw, 5rem)', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tighter: '-0.015em',
        tight: '-0.005em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        display: '0.02em',
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.7',
        'loose': '1.9',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section': 'clamp(5rem, 10vw, 10rem)',
        'content': 'clamp(2rem, 4vw, 4rem)',
      },
      maxWidth: {
        'container': '72rem',
        'narrow': '48rem',
        'wide': '85rem',
        'content': '60ch',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.6)',
        'glow-gold': '0 0 20px rgba(201, 169, 98, 0.3), 0 0 40px rgba(201, 169, 98, 0.15)',
        'glow-purple': '0 0 30px rgba(74, 28, 111, 0.4), 0 0 60px rgba(74, 28, 111, 0.2)',
        'text-glow': '0 0 10px rgba(201, 169, 98, 0.5), 0 0 20px rgba(201, 169, 98, 0.3)',
      },
      backgroundImage: {
        'mystical-gradient': 'radial-gradient(ellipse at center, rgba(74, 28, 111, 0.15) 0%, transparent 70%)',
        'night-sky': 'linear-gradient(180deg, #0D0D0D 0%, #0F1F33 50%, #0D0D0D 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.2), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'emerge': 'fadeFromDarkness 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-gentle': 'gentlePulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
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
        fadeFromDarkness: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
        'normal': '400ms',
        'slow': '600ms',
        'slower': '1000ms',
        'mystical': '1200ms',
      },
      transitionTimingFunction: {
        'mystical': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    // Custom plugin for text-glow utility
    function({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(201, 169, 98, 0.5), 0 0 20px rgba(201, 169, 98, 0.3), 0 0 30px rgba(201, 169, 98, 0.1)',
        },
        '.text-gradient-gold': {
          'background': 'linear-gradient(135deg, #E5D4A1, #C9A962, #9A7B3D)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      })
    },
  ],
}
