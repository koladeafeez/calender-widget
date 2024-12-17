/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--calender-widget-primary-color)',
        background: 'var(--calender-widget-bg-color)',
        text: 'var(--calender-widget-text-color)',
      },
      // You can add more customizations like fonts, spacing, etc.
    },
  },
  plugins: [],
}