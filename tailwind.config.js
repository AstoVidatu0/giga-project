/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px', 
        '2xl': '1140px',
      },
    },

    extend: {
      fontFamily:{
        gemunu: ['Gemunu Libre', 'serif'],
        open: ["Open Sans", "serif"]
      },

        colors : {
          'giga-red' : '#BC1A45',
          'giga-melon' : '#FFD369',
          'giga-grey' : '#DDDDDD',
          'giga-white' : '#F7F7F7',
        },
      
        spacing:{
          128: '32rem'
        }
    
    },
  },
  plugins: [],
}

