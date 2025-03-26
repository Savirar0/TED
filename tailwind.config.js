/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-top': {
          '0%': { 
            transform: 'translateY(2.5rem)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'slide-in-top': 'slide-in-top 1s ease-out forwards'
      }
    }
  },
  plugins: [],
}