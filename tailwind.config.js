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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

