/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'max-bg': '#0D0D1A',
        'max-fg': '#FFFFFF',
        'max-muted': '#2D1B4E',
        'max-accent-1': '#FF3AF2',
        'max-accent-2': '#00F5D4',
        'max-accent-3': '#FFE600',
        'max-accent-4': '#FF6B35',
        'max-accent-5': '#7B2FFF',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        display: ['Bangers', 'cursive'],
      },
      boxShadow: {
        'glow-base': '0 0 20px rgba(255, 58, 242, 0.5), 0 0 40px rgba(0, 245, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 58, 242, 0.6), 0 0 80px rgba(255, 230, 0, 0.4), 0 0 120px rgba(123, 47, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
