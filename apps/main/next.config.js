const { LOGIN_URL } = process.env
const i18n = require('../../shared/settings/i18n')
/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  i18n,
  experimental: {
    externalDir: true,
  },
  async rewrites() {
    return [
      // special rewrite for a shared-service
      // this will make the `getSession` provider hit the
      // service in the other Zone and get the JWT if it exists
      {
        source: '/api/auth/:path*',
        destination: `${LOGIN_URL}/api/auth:path*`,
      },
      {
        source: '/login',
        destination: LOGIN_URL,
      },
      {
        source: '/login/:path*',
        destination: `${LOGIN_URL}/:path*`,
      },
    ]
  },
}
