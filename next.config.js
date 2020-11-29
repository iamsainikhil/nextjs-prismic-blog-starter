const withPWA = require('next-pwa')

module.exports = withPWA({
  // for more PWA options
  // visit https://www.npmjs.com/package/next-pwa#available-options
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
  },
  // To enable image optimization for image hosted on external website
  // mention the external website domain below
  // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com'],
  },
  // visit https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  // for more info about React strict mode
  // reactStrictMode: true,
})
