import Link from "next/link";


export default function page() {
  return (
    <div className="w-full h-screen flex">
        <Link href="/" className="text-3xl hover:underline hover:text-red-600 flex mx-auto  items-center">Return</Link>
    </div>
  )
}
