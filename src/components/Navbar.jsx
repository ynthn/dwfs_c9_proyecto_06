import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-500 p-10 gap-5 flex flex-row text-center'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Projects</Link>
        <Link href="/about">Contact</Link>
    </div>
  )
}

export default Navbar