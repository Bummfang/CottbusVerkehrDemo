/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-background': 'pulseBackground 3s infinite', // Animation für den Hintergrundkreis
        'fadeInAnimation': 'fadeIn 1s ease-out',
        'spin-slow': 'spin 1s linear infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
        screens: {
          'mobile': "0px",
          // => @media (min-width: 0px) { ... }
          'tablet': "640px",
          // => @media (min-width: 640px) { ... }
          'laptop': "1024px",
          // => @media (min-width: 1024px) { ... }
          'desktop': "1280px",
          // => @media (min-width: 1280px) { ... }
          'desktop-l': "1920px",
          // => @media (min-width: 1280px) { ... }
          'desktop-xl': "2560px",
          // => @media (min-width: 1280px) { ... }
          'desktop-xxl': "3840px",
          // => @media (min-width: 1280px) { ... }
          'tablet-contact' : "702px",
      },
      keyframes: {
        pulseBackground: {
          '0%': { transform: 'scale(1)', opacity: '1' },  // Anfangszustand
          '100%': { transform: 'scale(2.5)', opacity: '0' }, // Mittlerer Zustand 
          // Endzustand (Wiederholung)
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        transitionDelay: {
          '0.2s': '0.2s',
          '0.4s': '0.4s',
          '0.6s': '0.6s',
        },
      },
    },
  },
  plugins: [],
}