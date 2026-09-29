/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        ink: '#0f172a',
        mist: '#eef4ff',
        cloud: '#f6f8ff',
        primary: '#5b7cff',
        accent: '#8a6bff',
        sky: '#76d2ff'
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(120, 119, 255, 0.18), transparent 50%)'
      }
    }
  },
  plugins: []
}
