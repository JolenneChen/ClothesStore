import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='top-0 right-0 left-0 sticky h-25 w-full bg-[#1d1d1d]'>
        <div className="flex justify-between text-center items-center p-10">
            <Link href="/" className='font-bold text-xl'>ClothesStore</Link>
            <div className="">
                <Link href="/">Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Header