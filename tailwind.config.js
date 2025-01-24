/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        pulseGlow: 'pulseGlow 1.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px rgba(255, 223, 0, 0.5))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px rgba(255, 223, 0, 1))',
          },
        },
      },
    },
  },
  plugins: [],
};
