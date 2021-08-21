import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
})
