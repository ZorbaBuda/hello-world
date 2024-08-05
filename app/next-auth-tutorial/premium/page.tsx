import { getSession } from "@/lib/actions/actions"
import Link from "next/link"
import { redirect } from "next/navigation"

const PremiumPage = async () => {
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/next-auth-tutorial")
  }

  if(!session.isPro) {
    return(
      <div className="text-red-600 text-xl">
        <h1>Only premium users can see the content!</h1>
        <Link href="/next-auth-tutorial/profile">Go to the profile page to upgrade to premium</Link>
      </div>
    )
  }
    return (
      <div> premium page</div>
    )
  }
  
  export default PremiumPage