/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#222260',
        'primary-color2': 'rgba(34, 34, 96, .6)',
        'primary-color3': 'rgba(34, 34, 96, .4)',
        'color-green': '#42AD00',
        'color-grey': '#aaa',
        'color-accent': '#F56692',
        'color-delete': '#FF0000',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        sm: 'clamp(1rem, 1.5vw, 1.2rem)',
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
