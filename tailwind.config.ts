import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#113A61',
        teal: '#45AEB6',
        'soft-teal': '#E7F5F6',
        ivory: '#FBF7F8',
        coral: '#E8447E',
        blush: '#FDEFF4',
        orange: '#F5A623',
        purple: '#8B7DD8',
        'soft-purple': '#EFECFB',
        'soft-orange': '#FEF3E2',
        green: '#5CB89A',
        'soft-green': '#E6F4EF',
        blue: '#5B9BD5',
        'soft-blue': '#E8F1FA',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '1340px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(17, 58, 97, 0.06), 0 1px 2px rgba(17, 58, 97, 0.04)',
        'card-hover': '0 12px 28px rgba(17, 58, 97, 0.10)',
        mega: '0 24px 60px rgba(17, 58, 97, 0.16)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // The track holds two identical copies, so -50% lands the second copy
        // exactly where the first began and the loop is seamless.
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.22s ease-out both',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
