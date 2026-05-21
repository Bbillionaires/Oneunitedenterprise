/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base:    '#07070F',
        surface: '#0D0D1C',
        card:    '#12121F',
        card2:   '#18182A',
        border:  'rgba(255,255,255,0.07)',
        gold:     { DEFAULT: '#C9A84C', light: '#E8C86A', dark: '#8B6914', glow: 'rgba(201,168,76,0.25)' },
        copper:   { DEFAULT: '#B87333', light: '#D4894A', dark: '#7A4A20' },
        sector: {
          film:        '#D4A217',
          consulting:  '#4F8EF7',
          nonprofit:   '#A855F7',
          medical:     '#10C98F',
          investment:  '#F97316',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'float':        'float 7s ease-in-out infinite',
        'gradient':     'gradientShift 10s ease infinite',
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'count-up':     'countUp 2s ease-out forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
        'border-glow':  'borderGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glowPulse:     { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        float:         { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        gradientShift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        fadeUp:        { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:        { from: { opacity: '0' }, to: { opacity: '1' } },
        countUp:       { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer:       { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        borderGlow:    { from: { boxShadow: '0 0 8px var(--glow)' }, to: { boxShadow: '0 0 24px var(--glow), 0 0 48px var(--glow)' } },
      },
      boxShadow: {
        'gold':   '0 0 30px rgba(201,168,76,0.2), 0 0 60px rgba(201,168,76,0.08)',
        'card':   '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
        'glow-sm':'0 0 16px var(--glow,rgba(201,168,76,0.3))',
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
