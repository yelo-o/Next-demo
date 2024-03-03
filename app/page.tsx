'use client'

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LoginForm from './ui/login-form';


export default function Page() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-900 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div className={styles.shape} /> */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Bookkeeper.</strong> <br />
            please sign in to use this website. <br/>
            Or you can go to demo page.
          </p>
          <Link
            href="/demo"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Demo Page</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          {/* shadcn design */}
          {/* <Input type='username' placeholder='username'/>
          <Input type='password' placeholder='password'/>

          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup">SignUp</Link>
          </Button> */}

          {/* nextjs design */}
          <LoginForm />
        </div>
        <div className="flex items-center justify-center p-6 md:w-4/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src="/book-img.png" width={1000} height={760} className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/book-img.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
