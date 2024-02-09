import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t-2 border-black-400 bg-black-100 px-20 py-1 max-md:flex-col'>
      <p>copyright © 2024 JS Mastery Pro | All rights reserved</p>
      <div className='flex gap-x-9'>
        <Link href={'/tems-of-use'}>Terms and Conditions</Link>
        <Link href={'/privacy'}>Privacy and Policy</Link>
      </div>
    </footer>

  )
}

export default Footer