module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black12: '#121212',
      black15: '#151515',
      black21: '#212121',
      black30: '#303030',
      black50: '#505050',
      black80: '#808080',
      orange: '#f39c12',
      white: '#FFFFFF',

    },
    extend: {
      spacing: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '35p': '35%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
        '8p': '8%',
        '92p': '92%',
        '5p': '5%',
        '8p': '8%',
        '15p': '15%',
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      backgroundImage: {
        'sea': "url('/src/img/plage.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
