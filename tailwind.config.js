module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#894dca"
      }
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"]
    },
  },
  plugins: [],
}
