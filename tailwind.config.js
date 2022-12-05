/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'burger001': "url('../public/burgers/burger001.jpg')",
        'burger002': "url('../public/burgers/burger002.jpg')",
        'burger003': "url('../public/burgers/burger003.jpg')",
        'burger004': "url('../public/burgers/burger004.jpg')",
        'burger005': "url('../public/burgers/burger005.jpg')",
        'burger006': "url('../public/burgers/burger006.jpg')",
        'burger007': "url('../public/burgers/burger007.jpg')",
        'burger008': "url('../public/burgers/burger008.jpg')",
        'burger009': "url('../public/burgers/burger009.jpg')",
        'burger010': "url('../public/burgers/burger010.jpg')",
        'burger011': "url('../public/burgers/burger011.jpg')",
        'burger012': "url('../public/burgers/burger012.jpg')",
        'burger013': "url('../public/burgers/burger013.jpg')",
        'burger014': "url('../public/burgers/burger014.jpg')",
        'burger015': "url('../public/burgers/burger015.jpg')",
        'burger016': "url('../public/burgers/burger016.jpg')",
        'burger017': "url('../public/burgers/burger017.jpg')",
        'burger018': "url('../public/burgers/burger018.jpg')",
        'burger019': "url('../public/burgers/burger019.jpg')",
      },
      colors: {
        "range": "#ff4402"
      },
      backgroundColor: {
        "orange": "#ff4402"
      },
      borderColor: {
        "b-orange": "#ff4402"
      },
      width: {
        "width": "900px",
        "width2": "800px"
      },
      height: {
        "height": "310px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
