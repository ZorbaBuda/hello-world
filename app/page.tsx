import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full flex min-h-screen  p-24">
      <div className="mx-auto flex flex-col gap-y-16 items-center">
       
       <Link href="/next-auth-tutorial">Next-auth-tutorial</Link>
  
      </div>
    </main>
  );
}
