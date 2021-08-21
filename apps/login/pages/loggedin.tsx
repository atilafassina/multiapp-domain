import { useSession } from 'next-auth/client'
const LoggedIn = () => {
  const [session] = useSession()
  return <h1>Hello {session?.user?.name}</h1>
}

export default LoggedIn
