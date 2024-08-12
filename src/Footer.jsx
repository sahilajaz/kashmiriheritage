import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-black mt-9  w-auto sm:w-full flex flex-col items-center bg-[url('footpic.jpg')] relative">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className='footer-container py-10 text-center mt-20 relative'>
      <h1 className='text-white mb-8 tracking-wide text-1xl sm:text-4xl font-extrabold'>KASHMIRI HERITAGE</h1>
      <div className='text-white py-10 flex flex-row justify-center gap-11 sm:gap-32'>
        <ul className='space-y-2 text-justify'>
          <Link to="/">
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Home</li>
          </Link>
          <Link to="/about">
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>About Us</li>
          </Link>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Blog</li>
        </ul>
        <ul className='space-y-2 text-justify'>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Videos</li>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Contact Us</li>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>FAQ's</li>
        </ul>
        <ul className='flex flex-col justify-center gap-4 text-justify'>
          <li className='cursor-pointer hover:scale-125 font-bold'><FaInstagram className='text-sm sm:text-2xl'/></li>
          <li className='cursor-pointer hover:scale-125 font-bold'><FaFacebook className='text-sm sm:text-2xl'/></li>
          <li className='cursor-pointer hover:scale-125 font-bold'><FaYoutube className='text-sm sm:text-2xl'/></li>
        </ul>
      </div>
    </div>
  </section>
  
  
  )
}

export default Footer
