import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: '#0A0A0F',
            secondary: '#13131A',
            tertiary: '#1C1C26',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#A3A3B8',
            tertiary: '#6B6B7F',
          },
        },
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8F8FB',
            tertiary: '#EFEFF5',
          },
          text: {
            primary: '#0A0A0F',
            secondary: '#52525E',
            tertiary: '#6B6B7F',
          },
        },
        accent: {
          primary: '#6366F1',
          secondary: '#8B5CF6',
          tertiary: '#EC4899',
          light: {
            primary: '#4F46E5',
            secondary: '#7C3AED',
            tertiary: '#DB2777',
          },
        },
      },
      fontFamily: {
        sans: [
          'Satoshi',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        slideUp: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        scaleIn: 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        micro: '150ms',
        standard: '300ms',
        complex: '500ms',
        cinematic: '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
