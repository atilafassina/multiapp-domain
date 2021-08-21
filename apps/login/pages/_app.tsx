import type { AppProps } from 'next/app'
import { Provider as AuthProvider } from 'next-auth/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider
      session={pageProps.session}
      options={{ basePath: `/login/api/auth` }}
    >
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
