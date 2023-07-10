import Link from "next/link";

export default function PrideAndAccomplishment() {
  return (
    <main className="flex min-h-screen flex-col items-center pw-24 h-screen animated-gradient">
      <Link href={"/"}>
        <button className="absolute right-12 top-6 bg-orange-400 w-12 h-12 z-10 drop-shadow-lg"></button>
      </Link>
      <h1 className="text-white">Pride and Accomplishment</h1>
    </main>
  );
}
