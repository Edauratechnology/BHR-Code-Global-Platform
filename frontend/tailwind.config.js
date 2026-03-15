/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          700: '#0f3d66',
          800: '#0b2e4d',
          900: '#071f33'
        }
      }
    }
  },
  plugins: []
};
