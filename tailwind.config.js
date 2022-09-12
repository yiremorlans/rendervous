/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/index.ejs',
    // './views/login.ejs',
    // './views/signup.ejs',
    // './views/feed.ejs',
    './views/partials/header.ejs'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'theme': "url('/img/wave.svg')",
      },
      fontFamily: {
        'comfortaa': ["'Comfortaa'", 'cursive'],
        'kanit': ["'Kanit'", 'sans-serif']
      },
      colors: {
        'off-white': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
