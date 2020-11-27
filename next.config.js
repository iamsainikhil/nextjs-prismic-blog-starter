const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
module.exports = withSass(
  withFonts({
    /* config options here */
  })
)
