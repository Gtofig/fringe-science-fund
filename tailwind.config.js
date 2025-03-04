/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with class
  theme: {
    extend: {
      colors: {
        // Dark mode background (deep space blue)
        'space-dark': '#0B0D17',
        // Light mode background
        'space-light': '#F8F9FA',
        // Primary accent color (electric blue)
        'electric-blue': '#3EDBF0',
        // Secondary accent (subtle purple for some elements)
        'cosmic-purple': '#7A3FDB',
        // Additional accent for highlights
        'future-teal': '#0AC8B9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 8px rgba(62, 219, 240, 0.6)',
        'neon-strong': '0 0 15px rgba(62, 219, 240, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
