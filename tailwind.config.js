/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f4f8',
          100: '#f1e9f1',
          200: '#e3d3e3',
          300: '#d5bdd5',
          400: '#c7a7c7',
          500: '#b991b9',
          600: '#9f6b9f',
          700: '#7d547d',
          800: '#5b3d5b',
          900: '#4B154B', // Your primary color
        },
        secondary: {
          50: '#fdfcfc',
          100: '#EFCECF', // Your secondary color
          200: '#e7babe',
          300: '#dfa6ad',
          400: '#d7929c',
          500: '#cf7e8b',
          600: '#c16a7a',
          700: '#a85469',
          800: '#8f3e58',
          900: '#762847',
        },
        silahub: {
          primary: '#4B154B',    // Main brand color
          secondary: '#EFCECF',  // Secondary brand color
          light: '#f8f4f8',      // Very light version for backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
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
      },
    },
  },
  plugins: [],
}