import Navbar from "@/components/next-auth-tutorial/Navbar"


export default function layout({
    children
}: {
    children : React.ReactNode
}) {
  return (
    <div>
    <Navbar />
    <div>{children}</div>
    </div>
  )
}
