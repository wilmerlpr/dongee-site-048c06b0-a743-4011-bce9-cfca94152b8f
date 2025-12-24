/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dongee: {
          primary: '#10b981', // Emerald 500: Verde moderno y suave
          secondary: '#059669', // Emerald 600: Para hovers
          dark: '#0f172a', // Slate 900
          light: '#d1fae5' // Emerald 100
        }
      },
      animation: {
        rotate: 'rotate 20s linear infinite',
      },
      keyframes: {
        rotate: {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}