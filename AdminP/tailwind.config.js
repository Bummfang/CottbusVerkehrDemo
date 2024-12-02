/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-background': 'pulseBackground 1.5s infinite', // Animation für den Hintergrundkreis
        'fadeInAnimation': 'fadeIn 1s ease-out',
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        pulseBackground: {
          '0%': { transform: 'scale(1)', opacity: '1' },  // Anfangszustand
          '100%': { transform: 'scale(3)', opacity: '0' }, // Mittlerer Zustand 
          // Endzustand (Wiederholung)
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}