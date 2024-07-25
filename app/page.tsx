import { DBSpring, Repeat, Reverse, Spring, Tween } from "@/components/Examples";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen  p-24">
      <div className="mx-auto flex flex-col gap-y-16 items-center">
        <Reverse />
        <Repeat />
        <DBSpring />
        <Spring />
        <Tween />
      </div>
    </main>
  );
}
