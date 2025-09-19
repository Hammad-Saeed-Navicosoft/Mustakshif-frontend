/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        bagoss: ["BagossStandardTRIAL-Regular", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
      screens: {
        '3xl': '1720px',
        '4xl': '1840px',
        '5xl': '1900px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

