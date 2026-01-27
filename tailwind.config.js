/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Pfade zu deinen Dateien
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1e293b',
        'brand-slate': '#475569',
        'brand-blue': '#2563eb',
        'brand-teal': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}