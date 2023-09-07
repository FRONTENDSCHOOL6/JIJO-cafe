/** @type {import('tailwindcss').Config} */
export default {
  // content: ['.index.html', '.src/**/*.jsx'],
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    // screens: {
    //   sm: '390px',
    //   md: '728px',
    //   lg: '1280px',
    //   xl: '1920px',
    // },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard-Regular'],
        Roboto: ['Roboto-Variable'],
        // GmarketSansMedium: ['GmarketSansMedium'],
      },
      colors: {
        primary: '#DBC8AB',
        secondary: '#3E3526',
        black: '#252323',
        white: '#FFFFFF',
        darkGray: '#b7b7b7',
        yellow: '#FEE500',
      },
      screens: {
        mobile: '390px',
        tablet: '728px',
        desktop: '1920px',
      },
      fontSize: {
        jj_60: '3.75rem',
        jj_48: '3rem',
        jj_43: '2.6875rem',
        jj_24: '1.5rem',
        jj_22: '1.375rem',
        jj_20: '1.25rem',
        jj_18: '1.125rem',
        jj_17: '1.0625rem',
        jj_16: '1rem',
        jj_15: '0.9375rem',
        jj_14: '0.875rem',
        jj_13: '0.8125rem',
      },
    },
  },
  plugins: [],
}
