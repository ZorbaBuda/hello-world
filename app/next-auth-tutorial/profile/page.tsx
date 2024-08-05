import { changePremium, changeUsername, getSession } from "@/lib/actions/actions"
import { redirect } from "next/navigation"

const ProfilePage = async  () => {
  const session = await getSession()
  if(!session.isLoggedIn){
    redirect("/next-auth-tutorial")
  }
    return (
      <>
        <div> Profile page</div>
        <p>Welcome, {session.username}</p>
        <span> You are a <b>{session.isPro ? "Premium" : "Free"}</b>user </span>
     
        <form action={changePremium}>
          <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
        </form>

        <form action={changeUsername}>
          <input type="text" name="username" required placeholder={session.username} />
         <button>Update</button>
        </form>
      </>
    )
  }
  
  export default ProfilePage