"use client";
import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hi! My name is Richard Li
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I'm currently studying Computer Science and Engineering @ UCLA. Some of my academic interests include computer vision, autonomous systems, robotics, and full-stack development. I also enjoy hiking, trying new restaurants, and watching movies. I'm open to any job/intership opportunities!
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Projects
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/about-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/socials"
            target="_blank"
            rel="noopener noreferrer"
          >
            Socials
          </Link>
        </div>
      </main>
    </div>
  );
}
