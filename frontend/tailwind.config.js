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
        'primay-orange': '#fb923c',
        'primay-lavender': '#E1E5F2',
        'primary-columbiaBlue': '#BFDBF7',
        'primary-teal': '#1F7A8C',
        'primary-gunmetal': '#22225F',
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
