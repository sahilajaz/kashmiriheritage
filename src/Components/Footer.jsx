import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-black mt-9  w-auto sm:w-full flex flex-col items-center bg-[url('/footpic.jpg')] relative">
      <div className='overlay absolute inset-0 bg-black/45 z-10'></div>
    <div className="absolute inset-0 bg-black/20"></div>
    <div className='footer-container py-10 text-center mt-20 relative z-50'>
      <h1 className='text-white mb-8 tracking-wide text-1xl sm:text-4xl font-extrabold'>KASHMIRI HERITAGE</h1>
      <div className='text-white py-10 flex flex-row justify-center gap-11 sm:gap-32'>
        <ul className='space-y-2 text-justify '>
          <Link to="/">
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold mb-2'>Home</li>
          </Link>
          <Link to="/about">
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold mb-2'>About Us</li>
          </Link>
          <Link to="/login">
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Admin</li>
          </Link>
        </ul>
        <ul className='space-y-2 text-justify'>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Videos</li>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>Contact Us</li>
          <li className='cursor-pointer hover:text-green-300 text-sm sm:text-2xl font-bold'>
            <a href="https://x.com/HeritageIs50684?t=YTTC1ouf1sL0sDfQuar48Q&s=09" target='blank'>Twitter</a>
          </li>
        </ul>
        <ul className='flex flex-col justify-center gap-4 text-justify'>
          <li className='cursor-pointer hover:scale-125 font-bold'>
            <a href="http://www.instagram.com/kashmiri_islamic_heritage_" target='blank'><FaInstagram className='text-sm sm:text-2xl'/></a>
          </li>
          <li className='cursor-pointer hover:scale-125 font-bold'>
            <a href="https://www.facebook.com/profile.php?id=61555199787522&mibextid=ZbWKwL" target='blank'><FaFacebook className='text-sm sm:text-2xl'/></a>
          </li>
          <li className='cursor-pointer hover:scale-125 font-bold'>
            <a href="https://m.youtube.com/@kashmiriislamicheritage" target='blank'><FaYoutube className='text-sm sm:text-2xl'/></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  
  
  )
}

export default Footer
