module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bg1: '#1A1A26',
      bg2: '#364559',
      bg3: '#5D84A6',
      highlight: '#9AB5D9',
      text: '#BDD9F2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
