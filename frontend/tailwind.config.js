/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B5B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        dark: '#2C3E50',
        light: '#ECF0F1',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'paw-pattern': "url('data:image/svg+xml,%3Csvg width=%2240%27 height=%2740%27 viewBox=%270 0 40 40%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%2720%27 cy=%2720%27 r=%276%27 fill=%27%23FFD700%27 opacity=%270.1%27/%3E%3C/svg%3E')",
      },
      borderRadius: {
        'dynamic': '2rem',
      }
    },
  },
  plugins: [],
}
