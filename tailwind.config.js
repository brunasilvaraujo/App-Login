/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-title': '#818283',
        'color-bg': '#F2F0F0',
        'color-input': 'rgba(176, 186, 195, 0.40)',
        'color-title-input': 'rgba(0, 0, 0, 0.50)',
        'color-btn': '#F9ED32',
      },
      container: {
        center: true,
      },
      width: {
        '670': '41.875rem',
        'input-w': '32.625rem',
      },
      height: {
        '550': '34.375rem',
      },
      boxShadow: {
        '4xl': ' 4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};

