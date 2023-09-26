"use client"

import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    const isUserLoggedIn = false;
  return (
    <nav className='flex-between w-full mb-16 pt-3 '>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src="/assets/images/logo.svg" alt='Promptopia Logo' width={30} height={30} className='object-contain' />
            <p className='logo_text'>Promptopia</p>
        </Link>
        {/*Desktop Nav*/}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>Create Post</Link>
                    <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
                    <Link href='/profile'>
                        {/*logo.svg is a placeholder for now*/}
                        <Image src='/assets/images/logo.svg' alt='profile' width={37} height={37} className='rounded-full' />
                    </Link>
                </div>
            ) : (
                <>

                </>
            )}
        </div>
    </nav>
  )
}

export default Nav