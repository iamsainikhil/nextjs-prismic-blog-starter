const withPWA = require('next-pwa')

module.exports = withPWA({
  // for more PWA options
  // visit https://www.npmjs.com/package/next-pwa#available-options
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dest: 'public',
  },
  // To enable image optimization for image hosted on external website
  // mention the external website domain below
  // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com'],
    // next/image support `srcSet` using the below deviceSizes
    // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // visit https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  // for more info about React strict mode
  // reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  },
})
