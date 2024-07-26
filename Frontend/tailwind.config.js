/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'Black-primary': '#1E2020',
        'Black-secondary':'#171717',
        'White-primary':'#ffffff',
        'White-secondary':'#f0f2f5',
        // 'gradient-background': 'linear-gradient(90deg, #b16cea 14.06%, #ff5e69 44.79%, #ff8a56 71.88%, #ffa84b)',
     
      },
    },
  },
  plugins: [],
}

