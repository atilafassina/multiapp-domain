import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [session] = useSession()
  const userName = session?.user?.name
  return (
    <div className={styles.container}>
      <Head>
        <title>Jamstacky Micro-Frontend</title>
        <meta name="description" content="yup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {userName ? (
            `Hello, ${userName}`
          ) : (
            <>
              Welcome to <a href="/">main</a> app
            </>
          )}
        </h1>

        <p className={styles.description}>
          This is a <b>Jamstack micro-frontend</b>.
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
            href="https://github.com/atilafassina/nextjs-multi-zone"
            className={styles.card}
          >
            <h2>Source &#8599;</h2>
            <p>Check the code and documentation on Github</p>
          </a>

          <a
            href="https://nextjs.org/docs/advanced-features/multi-zones"
            className={styles.card}
          >
            <h2>Next.js Multi-Zone &#8599;</h2>
            <p>Documentation on Next.js Multi-Zone</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://atila.io" rel="noopener noreferrer" target="_blank">
          <img src="/atila-logo.png" alt="Atila.io logo" />
        </a>
      </footer>
    </div>
  )
}
