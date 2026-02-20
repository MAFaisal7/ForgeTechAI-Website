/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A',
        'accent': '#F97316',
        'neutral': '#E6E3D6',
        'dark': '#111827',
      },
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'newsreader': ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 60px rgba(30, 58, 138, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}