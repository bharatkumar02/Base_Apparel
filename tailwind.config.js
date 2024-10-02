/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smallSize' : '/src/assets/hero-mobile.jpg',
        'largeSize' : '/src/assets/hero-desktop.jpg',
        'bgPattern' : "url('/src/assets/bg-pattern-desktop.svg')", 
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
}

