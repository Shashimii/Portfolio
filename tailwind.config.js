/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}", "./*html"],
    theme: {
      extend: {
        screens: {
          'desktop' : '1441px',

          'laptop' : '1025px',

          'tablet' : '769px',

          'mobile' : '426px',
        },
      },
    },
    plugins: [],
  }