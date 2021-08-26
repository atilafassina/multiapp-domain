import { useSession } from 'next-auth/client'
import styles from '@styles/loggedin.module.css'

const LoggedIn = () => {
  const [session] = useSession()

  if (!session || !session.user) return null

  const { user } = session

  return (
    <article className={styles.container}>
      <h1>Hello, {user.name}</h1>
      {user.image && (
        <img
          className={styles.avatar}
          src={user.image}
          alt={`avatar for ${user.name}'s Github account`}
        />
      )}
      <p>Github public e-mail: {user.email}</p>
      <p>
        you are logged in on the <code>login</code> app
      </p>
    </article>
  )
}

export default LoggedIn
