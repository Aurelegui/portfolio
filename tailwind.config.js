/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const daisyuiPlugin = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyuiPlugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      fontWeigth: {
        'extra-bold': '800',
      },
      container: {
        center: true,
      },
    },
  },
};
