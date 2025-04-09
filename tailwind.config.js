/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'background': '#0F172A',
        'card': '#1E293B',
        'primary': '#2DD4BF',
        'primary-focus': '#5EEAD4',
        'secondary': '#94A3B8',
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        'border-color': '#334155',
      },
      boxShadow: {
        'custom-light': '0 4px 14px 0 rgba(45, 212, 191, 0.1)',
        'custom-hover': '0 6px 20px 0 rgba(45, 212, 191, 0.18)',
      },
      keyframes: {
         blob: {
           '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', filter: 'blur(20px)' },
           '33%': { transform: 'translate(20px, -30px) scale(1.05)', filter: 'blur(25px)' },
           '66%': { transform: 'translate(-15px, 15px) scale(0.95)', filter: 'blur(15px)' },
         }
      },
      animation: {
         blob: 'blob 8s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}