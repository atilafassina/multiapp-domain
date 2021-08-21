import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function Login() {
  const [session, loading] = useSession()
  console.log(session)
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push('/loggedin')
    }
  })
  return (
    <div>
      {/* <a href="/login/api/auth/signin">Sign in</a> */}
      <button
        onClick={() =>
          signIn('github', { callbackUrl: 'http://localhost:3001/about' })
        }
      >
        Sign in
      </button>
    </div>
  )
}
