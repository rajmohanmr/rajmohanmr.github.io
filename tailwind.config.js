/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       transitionDuration: {
      '400': '400ms',
    },
    keyframes: {
        'underline-pulse': {
          '0%, 100%': { width: '0', opacity: 0 },
          '50%': { width: '100%', opacity: 1 },
        },
      },
      animation: {
        'underline-pulse': 'underline-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

