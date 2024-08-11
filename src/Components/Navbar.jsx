import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='bg-navcolor font-sans'>
      <div className='flex justify-between items-center py-4 px-2'>
        <h1 className='text-[1.1rem] md:text-2xl cursor-pointer text-white  font-ubuntu'>Kashmiri Heritage</h1>
        <ul className='hidden md:flex me-7 gap-4 text-white font-semibold text-xl cursor-pointer'>
          <li>Blog</li>
          <li>Videos</li>
          <li>FAQ</li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
        {
          isMenuOpen ? <MdOutlineClose className='flex md:hidden text-white' size={35} onClick={toggleMenu}/> : <IoMenuOutline className='flex md:hidden text-white' size={35} onClick={toggleMenu} />
        }
      </div>
      {isMenuOpen && (
        <ul className='bg-navcolor text-white font-ubuntu text-xl cursor-pointer absolute top-[69px] left-0 right-0 py-1 flex flex-col items-center gap-4 z-50'>
          <li className='w-full text-center py-2 border-b border-gray-500 hover:bg-gray-700 transition-all duration-300'>Blog</li>
          <li className='w-full text-center py-2 border-b border-gray-500 hover:bg-gray-700 transition-all duration-300'>Videos</li>
          <li className='w-full text-center py-2 border-b border-gray-500 hover:bg-gray-700 transition-all duration-300'>FAQ</li>
          <li className='w-full text-center py-2 border-b border-gray-500 hover:bg-gray-700 transition-all duration-300'>About</li>
          <li className='w-full text-center py-2 border-b border-gray-500 hover:bg-gray-700 transition-all duration-300'>Contact</li>
          <li className='w-full text-center py-2 hover:bg-gray-700 transition-all duration-300'>Privacy Policy</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
