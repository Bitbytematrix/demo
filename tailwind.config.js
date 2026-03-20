/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f3',
          100: '#dcede3',
          200: '#bbdac9',
          300: '#8fc0a7',
          400: '#5fa082',
          500: '#3d8265',
          600: '#2d6750',
          700: '#255241',
          800: '#1f4235',
          900: '#1a372d',
          950: '#0d1f19',
        },
        gold: {
          300: '#e8d5a3',
          400: '#dfc27a',
          500: '#c9a84c',
          600: '#b08c30',
          700: '#8e6f22',
        },
        cream: '#faf7f2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease forwards',
        'fade-in':  'fadeIn 0.6s ease forwards',
        'float':    'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
