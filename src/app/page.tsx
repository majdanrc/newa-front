import Image from "next/image";
import Link from "next/link";
import { monoton } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 bg-gray-200">
      <div>
        <Link href="/about">
          <p
            style={{ color: "#3c4f3a" }}
            className={`${monoton.className} text-xl md:text-5xl md:leading-normal`}
          >
            About
          </p>
        </Link>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-green-950 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-800 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#3c4f3a] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Newa Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
