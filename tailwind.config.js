module.exports = {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        'sm': '600px',
        'md': '728px',
        'lg': '984px',
        'xl': '1140px',
        '2xl': '1180px',
      },
    },
    fontFamily: {
      DEFAULT: 'Roboto, sans-serif',
      roboto: 'Roboto, sans-serif',
      oswald: 'Oswald, sans-serif',
    },
    extend: {
      colors: {
        primary: {
          50: '#faf6f2',
          100: '#f4eae0',
          200: '#e8d4c0',
          300: '#d9b798',
          400: '#c8946f',
          500: '#bd7b52',
          600: '#af6847',
          700: '#92523c',
          800: '#764436',
          900: '#60392e',
          950: '#311b16',
        },
      },
    },
  },
  plugins: [],
}
