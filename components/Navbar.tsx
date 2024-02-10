import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-center backdrop-blur-sm fixed top-0 z-50  w-full mb-16 border-b-2 border-black-200 py-7 text-white'>
        <div className='flex-between w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-16'>
            <Link href={'/'}>
                <Image src={'/jsm-logo.svg'} alt='logo' width={50} height={40} />
            </Link>
            <Image src={'/hamburger-menu.svg'} alt='menu' width={30} height={30} className='md:hidden block' />

            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href={'/'} target='_blank'>Next.js 13 course</Link>
                </li>
                <li className='body-text  !font-bold'>
                    <Link href={'/'} target='_blank'>Masterclass</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar