import { useSession } from 'next-auth/client'
export default function About() {
  const [session] = useSession()
  console.log(session)
  return (
    <main>
      <h1>Hello /about</h1>
      {session && <span>{session?.user?.name}</span>}
    </main>
  )
}
