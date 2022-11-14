/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '990px',
      // => @media (min-width: 990px) { ... }
    },


    extend: {
      fontFamily: {
        outfit: "outfit , sans-serif"
      },

      backgroundImage: {
        'info-1': "url('./images/derma-1.png')",
        'info-2': "url('./images/derma-2.png')",
        'info-3': "url('./images/derma-3.png')",
        'info-4': "url('./images/derma-4.png')",
        'info-5': "url('./images/derma-5.png')",
        'info-6': "url('./images/derma-6.png')",
      },

      colors : {
        'greylight': '#f0ede8',
        'greydark': '#ddd8d1',
        'greydark2': '#afa492',
        'brown2': '#d48d78',
        'brown3': '#a06857',
      },

      borderRadius:{
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      }
    },
  },
  plugins: [],
}
