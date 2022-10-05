/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'theme' : '#EB3F36',
      'dark' : '#730C07',
      'authformtext' : '#868686',
      'textWhite' : '#ffffff',
      'authline' : '#c2c2c2',
      'authBottomText' : '#7c7c7c',
      'navicon' : '#696969',
      'sliderbg' : '#757575',
    },
    fontFamily: {
      gotham100 : ["Gotham100", "sans-serif"],
      gotham200 : ["Gotham200", "sans-serif"],
      gotham300 : ["Gotham300", "sans-serif"],
      gotham : ["Gotham", "sans-serif"],
      gotham500 : ["Gotham500", "sans-serif"],
      gotham600 : ["Gotham600", "sans-serif"],
      gotham700 : ["Gotham700", "sans-serif"],
      gotham800 : ["Gotham800", "sans-serif"],
      gotham900 : ["Gotham900", "sans-serif"],
    },
    extend: {
      dropShadow: {
        'authcard' : '0px 1px 12px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        'authcard' : '0px 1px 12px rgba(0, 0, 0, 0.25)',
        'authform' : '0px 1px 4px rgba(0, 0, 0, 0.25)',
        'authbutton' : '0px 7px 6px rgba(0, 0, 0, 0.17)',
        'searchbox' : '0px 4px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
