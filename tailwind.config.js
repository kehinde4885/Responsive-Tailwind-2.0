/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "outfit , sans-serif"
      },
      colors : {
        'greylight': '#f0ede8',
        'greydark': '#ddd8d1',
        'greydark2': '#afa492',
        'brown2': '#d48d78',
        'brown3': '#a06857',
      }
    },
  },
  plugins: [],
}
