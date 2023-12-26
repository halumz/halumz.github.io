/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        colorText: 'var(--color-text)',
        bgHolder: 'var(--color-bgHolder)',
      },
    },
  },
  plugins: [],
};
