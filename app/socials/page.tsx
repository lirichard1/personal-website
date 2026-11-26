"use client";
import Link from "next/link"
export default function Socials() {
    return (
        <div className="flex flex-col items-center justify-center bg-white font-sans dark:bg-black">
            <Link href="/" className="inline-block self-start ml-4 mt-4 max-w-xs items-left gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                    ← Back Home
            </Link>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
                <div className="flex flex-col space-y-5 mt-6">
                    <h1 className="max-w-s text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Check out my socials!
                    </h1>
                    <p className="max-w-s text-lg leading-7 text-gray-600 dark:text-zinc-400">
                        Feel free to reach out to me through any of the following platforms:
                    </p>
                </div>
                <div className="flex flex-col space-y-5 mt-6">
                    <a href="mailto:li.richard6529@gmail.com" className="inline-flex gap-2 items-center bg-gray-600 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" opacity="0" />
                            <path fill="#4285F4" d="M5.45 21H1.64A1.64 1.64 0 0 1 0 19.36V5.46c0-2.02 2.31-3.18 3.93-1.96L5.45 4.64v16.36z" />
                            <path fill="#34A853" d="M18.55 21h3.81A1.64 1.64 0 0 0 24 19.36V5.46c0-2.02-2.31-3.18-3.93-1.96l-1.52 1.14V21z" />
                            <path fill="#FBBC04" d="M18.55 4.64V11.73l1.52-1.14 3.93-2.95V5.46c0-2.02-2.31-3.18-3.93-1.96l-1.52 1.14z" />
                            <path fill="#EA4335" fillRule="evenodd" d="M5.45 11.73V4.64L12 9.55l6.55-4.91v7.09L12 16.64l-6.55-4.91z" clipRule="evenodd" />
                            <path fill="#C5221F" d="M0 5.46v2.18l5.45 4.09V4.64L3.93 3.5C2.31 2.28 0 3.44 0 5.46z" />
                        </svg>
                        Gmail 
                    </a>
                    <a href="https://github.com/lirichard1" className="inline-flex items-center gap-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Github 
                    </a>
                    <a href="https://www.linkedin.com/in/richard-li-479293273/" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                        <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                        Linkedin 
                    </a>
                </div>
            </main>
        </div>
    
    );
}