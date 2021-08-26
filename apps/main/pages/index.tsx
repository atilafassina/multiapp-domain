import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [session] = useSession()
  return (
    <div className={styles.container}>
      <Head>
        <title>😎</title>
        <meta name="description" content="yup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">main</a> app
        </h1>

        <p className={styles.description}>
          Root is <code className={styles.code}>apps/main</code> in the monorepo
        </p>

        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Login &#8599;</h2>
            <p>The login is a completely separated app</p>
          </a>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About &rarr;</h2>
              <p>
                About is a root on <code>main</code> app that fetches the{' '}
                <code>session</code> token
              </p>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &#8599;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span role="img" aria-label="mate">
          🧉
        </span>
      </footer>
    </div>
  )
}
