/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/index.ejs',
    './views/login.ejs',
    './views/signup.ejs',
    './views/feed.ejs',
    './views/profile.ejs',
    './views/post.ejs',
    './views/partials/header.ejs',
    './views/partials/footer.ejs',
    './views/partials/navigation.ejs'
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
        'primary': '#f97317',
        'off-white': '#F2F2F2',
      },
    },
  },
  plugins: [require("daisyui")],
}
