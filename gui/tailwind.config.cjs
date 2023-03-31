const plugin = require('tailwindcss/plugin');

const rem = (pt) => `${pt / 16}rem`;

const colors = {
  'blue-gray': {
    100: '#4D222B', // Dark text
    200: '#1A6682', // Some lighter-ish text
    300: '#095470', // Light-ish text
    400: '#4F9FBD', // Button hover in some places
    500: '#EEEEEE', // Darker trans white tracker list background
    600: '#FFFFFF', // Trans white tracker list background and some buttons
    700: '#F5A9B8', // Trans pink home background
    800: '#5BCEFA', // Trans blue trans outer background
    900: '#000509',
  },
  purple: {
    100: '#B53A52', // Accent text
    200: '#FCCAD4', // Lighter trans pink button
    300: '#F7B7C4', // Somewhat lighter trans pink button
    400: '#F7B7C4', // Somewhat lighter trans pink button
    500: '#F5A9B8', // Trans pink buttons
    700: '#FA91A6', // Darker trans pink button
    900: '#F77C94', // Even darker trans pink home bottom
  },
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '800px',
      sm: '900px',
      md: '1100px',
      lg: '1300px',
      xl: '1600px',
    },
    extend: {
      colors: {
        status: {
          success: '#44C27F',
          warning: '#F0DD3A',
          critical: '#DF6D8C',
          special: '#A44FED',
        },
        ...colors,
        background: Object.keys(colors['blue-gray']).reduce(
          (curr, colork, index) => ({
            ...curr,
            [(index + 1) * 10]: colors['blue-gray'][colork],
          }),
          {}
        ),
        'accent-background': Object.keys(colors.purple).reduce(
          (curr, colork, index) => ({
            ...curr,
            [(index + 1) * 10]: colors.purple[colork],
          }),
          {}
        ),
      },
      fontSize: {
        DEFAULT: rem(12),
      },
      fontWeight: {
        DEFAULT: 500,
      },
      color: {
        DEFAULT: '#1D1D1D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-gradient-mask-image'),
    plugin(function ({ addUtilities, theme }) {
      const textConfig = (fontSize, fontWeight) => ({
        fontSize,
        fontWeight,
      });

      addUtilities({
        '.text-main-title': textConfig(rem(25), 700),
        '.text-section-title': textConfig(rem(14), 700),
        '.text-standard': textConfig(rem(12), 500),
        '.text-vr-accesible': textConfig(rem(14), 500),
        '.text-vr-accesible-bold': textConfig(rem(14), 700),
        '.text-standard-bold': textConfig(rem(12), 700),
      });
    }),
  ],
};
