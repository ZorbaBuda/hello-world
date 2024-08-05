import { logout } from "@/lib/actions/actions"


const LogoutForm = () => {
  return (
   
    <form action={logout}>
        <button>logout</button>
    </form>
  )
}

export default LogoutForm