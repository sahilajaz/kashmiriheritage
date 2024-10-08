import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='bg-white font-sans fixed top-0 left-0 right-0 z-50 shadow-2xl'>
      <div className='flex justify-between items-center py-3 px-2'>
      <div className='flex items-center'>
       <Link to="/"><img src='/1.jpg' alt='logo' className='border rounded-3xl' width={60} /></Link>
       <Link to="/"> <h1 className='text-black ms-3 text-1xl sm:text-lg lg:text-[1.8rem] font-bold hover:text-blue-400'>KASHMIRI HERITAGE</h1></Link>
      </div>
        <ul className='hidden md:flex me-7 gap-4 text-black font-semibold text-1xl lg:text-[1.3rem] cursor-pointer'>
          <Link to="/blog"><li className='hover:text-blue-400'>Blog</li></Link>
          <Link to="/video"><li className='hover:text-blue-400'>Videos</li></Link>  
          <Link to="/login"><li className='hover:text-blue-400'>Admin</li></Link>
          <Link to="/about"><li className='hover:text-blue-400'>About Us</li></Link>
          <Link to="/contact"><li className='hover:text-blue-400'>Contact</li></Link>
          <Link to="/podcast"><li className='hover:text-blue-400'>Podcast</li></Link>
        </ul>
        {
          isMenuOpen ? <MdOutlineClose className='flex md:hidden text-black' size={35} onClick={toggleMenu}/> : <IoMenuOutline className='flex md:hidden text-black' size={35} onClick={toggleMenu} />
        }
      </div>
      {isMenuOpen && (
        <ul className='bg-white text-black font-ubuntu text-xl cursor-pointer absolute top-[69px] left-0 right-0 py-1 flex flex-col items-center gap-4 z-50'>
          <Link to="/blog" className='py-1 border-b border-gray-500 w-full' onClick={toggleMenu}>
          <li className='w-full h-full text-center py-1  hover:text-blue-400'>Blog</li>
          </Link>
          <Link to="/video" className='py-1 border-b border-gray-500 w-full text-center' onClick={toggleMenu}><li className='hover:text-blue-400'>Videos</li></Link>
          <Link to="/login" className='py-1 border-b border-gray-500 w-full text-center' onClick={toggleMenu}><li className='hover:text-blue-400'>Admin</li></Link>
          <Link to="/about" className='py-1 border-b border-gray-500 w-full' onClick={toggleMenu}>
          <li className='w-full h-full text-center py-1  hover:text-blue-400'>About Us</li>
          </Link>
          <Link to="/contact" className='py-1 border-b border-gray-500 w-full' onClick={toggleMenu}>
          <li className='w-full h-full text-center py-1  hover:text-blue-400'>Contact</li>
          </Link>
          
          <Link to="/podcast" className='py-1 border-b border-gray-500 w-full' onClick={toggleMenu}>
          <li className='w-full h-full text-center py-1  hover:text-blue-400'>Podcast</li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
