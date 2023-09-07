/** @type {import('tailwindcss').Config} */
export default {
  // content: ['.index.html', '.src/**/*.jsx'],
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
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
      },
      screens: {
        mobile: { min: '390px', max: '727px' },
        tablet: { min: '728px', max: '1280px' },
        desktop: { min: '1281px', max: '1920px' },
      },
      fontSize: {
        jj_60: '3.75rem',
        jj_50: '3.125rem',
        jj_48: '3rem',
        jj_34: '2.125rem',
        jj_24: '1.5rem',
        jj_22: '1.375rem',
        jj_20: '1.25rem',
        jj_18: '1.125rem',
        jj_17: '1.0625rem',
        jj_16: '1rem',
        jj_14: '0.875rem',
        jj_13: '0.8125rem',
      },
      padding: {
        jj_50: '3.125rem',
        jj_60: '3.75rem',
        jj_100: '6.25rem',
      },
    },
  },
  plugins: [],
};
