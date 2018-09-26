// From Bootstrap (https://github.com/twbs/bootstrap/blob/v4-dev/build/postcss.config.js)

module.exports = (ctx) => ({
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
});
