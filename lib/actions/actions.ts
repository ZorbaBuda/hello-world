 "use server"
import {sessionOptions, SessionData, defaultSession} from "@/lib/actions/lib"
import { getIronSession } from "iron-session"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

let username = "john"
let isPro = true
let isBlocked = true

export const getSession = async () => {
  
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
  }

  //in real project, check user in DB in each request, because admin could block him anytime
  session.isBlocked = isBlocked
  session.isPro = isPro

  return session
}

export const login = async (
  prevState: { error : undefined | string },
  formData: FormData) => {
    const session = await getSession()

    const formUsername = formData.get("username") as string
    const formPassword = formData.get("password") as string 

    //check user in the db

    if(formUsername !== username) {
        return {error:"Wrong Credentials!"}
    }
    session.userId="1"
    session.username=formUsername
    session.isPro = isPro
    session.isLoggedIn = true
    
    await session.save()
    redirect('/next-auth-tutorial')
}

export const logout = async () => {
  const session = await getSession()
  session.destroy()
  redirect("/next-auth-tutorial")
 }

 export const changePremium = async () => {
  const session = await getSession() 

  isPro =!session.isPro
  session.isPro = isPro 
  await session.save() 
  revalidatePath("/next-auth-tutorial/profile")
 }

 export const changeUsername = async (formData : FormData) => {

  const session = await getSession() 
  const newUsername = formData.get("username") as string
  username = newUsername
  session.username = newUsername
  await session.save()
  revalidatePath("/next-auth-tutorial/profile")

 }