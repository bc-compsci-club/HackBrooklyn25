/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Text",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        sfpro: ["SF Pro Text", "SF Pro Display", "-apple-system", "sans-serif"],
        spenbebgame: ["Spenbeb Game", "san-serif"],
      },

      keyframes: {
        lampReveal: {
          '0%': { opacity: '0', filter: 'brightness(0.3)' },
          '30%': { opacity: '0.4', filter: 'brightness(0.6)' },
          '60%': { opacity: '0.8', filter: 'brightness(1.2)' },
          '100%': { opacity: '1', filter: 'brightness(1)' },
        },
        warmPulse: {
          '0%, 100%': {
            textShadow: '0 0 8px rgba(255,220,150,0.3), 0 0 20px rgba(255,200,100,0.15)',
          },
          '50%': {
            textShadow: '0 0 12px rgba(255,220,150,0.5), 0 0 30px rgba(255,200,100,0.25)',
          },
        },
      },
      animation: {
        lampReveal: 'lampReveal 2s ease-out 1s forwards',
        warmPulse: 'warmPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
