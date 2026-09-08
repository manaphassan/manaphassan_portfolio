/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace']
      },
      colors: {
        paper: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          150: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        accent: {
          blue: '#1D4ED8',
          hoverBlue: '#1E40AF',
          amber: '#B45309',
          emerald: '#047857',
          crimson: '#BE123C'
        }
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.35rem' }],   // 14px (Crisp, highly legible microcopy)
        'sm': ['1rem', { lineHeight: '1.5rem' }],       // 16px (Comfortable standard size)
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // 18px (Optimal editorial reading)
        'lg': ['1.25rem', { lineHeight: '1.85rem' }],   // 20px
        'xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '3xl': ['2.25rem', { lineHeight: '2.6rem' }],   // 36px
        '4xl': ['2.75rem', { lineHeight: '3rem' }],     // 44px
        'display-2xl': ['clamp(2.75rem, 7vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      }
    },
  },
  plugins: [],
}
