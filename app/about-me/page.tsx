import Link from "next/link";
import Image from "next/image";
import {EmblaCarousel} from "../components/embla_carousel";
export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Link href="/" className="inline-block self-start ml-4 mt-4 max-w-xs items-left gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                ← Back Home
            </Link>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl pb-4 font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    About Me
                </h1>
                <EmblaCarousel />
                <p className="max-w-md text-md text-black dark:text-zinc-400 mt-8">
                    ☀️ Born in Mountain View, California
                    <br></br> 👁️ Nearsighted in one eye and farsighted in the other
                    <br></br> 🇯🇵 Traveled to Japan over the summer
                    <br></br> 🧋 Avid boba fanatic
                    <br></br> 📷 Getting into photography

                </p>
            </main>
        </div>
    
    );
}