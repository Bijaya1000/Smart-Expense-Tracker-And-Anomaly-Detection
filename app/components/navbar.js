'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
export default function Navbar() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  
  return (

    <div className="relative h-20  pl-2 pr-2 text-gray-800">
      <header className="relative m-auto h-[56px] max-w-4xl pt-3">
        <div className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between">
          <Link href={"/"} className="flex w-auto items-center p-3 text-2xl">
            <Image
              src="/icons/logo.png"
              width={30}
              height={30}
              alt="expense.fyi logo"
              className="mr-2"
            />
            <span className="font-black tracking-[-0.03em] text-gray-900">
              Smart Expense Tracker
            </span>
          </Link>
          <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            
            
            <button type='button' onClick={signOut} className='inline-flex mx-1 h-[34px] items-center overflow-hidden rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90'>
              Sign Out
            </button>

            <Link href='/'>
              {/* <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              /> */}
            </Link>
          </div>
        ) : (
          <>
             <Link
              href="/signin"
              className="inline-flex mx-1 h-[34px] items-center overflow-hidden rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              Sign in
            </Link>
          </>
        )}
      </div>

         
        </div>
      </header>
      
    </div>
  );
}
