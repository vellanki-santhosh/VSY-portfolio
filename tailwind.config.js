/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ecc',
          700: '#004499',
          800: '#002b66',
          900: '#001233',
        },
        secondary: {
          50: '#f0e6ff',
          100: '#e1ccff',
          200: '#c399ff',
          300: '#a566ff',
          400: '#8733ff',
          500: '#6800ff',
          600: '#5400cc',
          700: '#400099',
          800: '#2b0066',
          900: '#150033',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};