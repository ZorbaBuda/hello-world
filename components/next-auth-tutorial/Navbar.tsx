import Link from "next/link"
import LogoutForm from "./LogoutForm"
import { getSession } from "@/lib/actions/actions"


const Navbar = async () => {
  const session = await getSession()
  

  return (
   <nav className="max-w-6xl flex mx-auto justify-around">
    <Link href="/next-auth-tutorial/">Homepage</Link>
    <Link href="/next-auth-tutorial/premium">Premium</Link>
    <Link href="/next-auth-tutorial/profile">Profile</Link>
    {!session.isLoggedIn && <Link href="/next-auth-tutorial/login">Login</Link>}
    {session.isLoggedIn && <LogoutForm />}
   </nav>
  )
}

export default Navbar