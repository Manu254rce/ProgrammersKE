// const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
    textShadow:
      {
        default:'0px 2px 8px var(--tw-shadow-color)',
        sm: '0px 0px 2px var(--tw-shadow-color)',
        md: '0px 0px 8px var(--tw-shadow-color)',
        lg: '0px 0px 16px var(--tw-shadow-color)',
      },

      backgroundImage: {
        'hero-image': 'url(./assets/images/Nairobi.jpeg)',
        'error-image': 'url(./assets/blurry-gradient-haikei.svg)',
        'footer-image': 'url(./assets/wave-haikei.svg)',
        'nav-image1':'url(./assets/images/Tutorials2.png)',
        'nav-image2':'url(./assets/images/Tech.png)',
        'nav-image3':'url(./assets/images/Community.png)',
        'war-image': 'url(./assets/images/Mariupol.png)',
      },

      colors:
      {
        transparent: 'transparent',
        currentColor: 'currentColor',
        primary: '#6600cc',
        secondary: '#00ff55',
        'sky-blue': '#33ffff',
      },
      fontFamily:
      {
        'adventpro': '"Advent Pro"',
        'zrnic': 'Zrnic',
        'audiowide': 'Audiowide',
        'novaflat' : '"Nova Flat"',
      }
    },
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    require("tailwindcss-textshadow"),

    plugin(function ({matchUtilities, theme})
    {
      matchUtilities(
        {
          'text-shadow' : (value) => ({
            textShadow : value,
          }),
        },
        { values: theme('textShadow')}
      )
    }),
  ],
}
