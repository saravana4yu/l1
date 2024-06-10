// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        large: '900',
      },
      height: {
        '960': '960px',
        '80': '80px'
      },
      width: {
        '280': '280px',
        '1161': '1161px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thumb-custom': {
          '&::-webkit-scrollbar': {
            width: '10px', 
            height: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: '#A9A9A9', 
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent', 
          },
        },
      });
    },
  ],
};
