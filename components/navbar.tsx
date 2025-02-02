"use client"
import React from 'react'
import { Link } from 'react-scroll'

export default function NavBar() {
  
  return (
    <nav className='text-white lg:w-[1440px] bg-[#151925] h-auto flex flex-row justify-between lg:px-[70px]'>
        <div className='text-[24px] font-extrabold font-sen flex flex-row'>Portfolio.</div>
        <div className='flex flex-row text-[20px] font-medium gap-8'>
            <Link to="home" smooth={true} duration={800} className='hover:text-[#01EEFF] cursor-pointer'>Home</Link>
            <Link to="about" smooth={true} duration={800} className='hover:text-[#01EEFF] cursor-pointer'>About</Link>
            <Link to="services" smooth={true} duration={800} className='hover:text-[#01EEFF] cursor-pointer'>Services</Link>
            <Link to="portfolio" smooth={true} duration={800} className='hover:text-[#01EEFF] cursor-pointer'>Portfolio</Link>
            <Link to="contact" smooth={true} duration={800} className='hover:text-[#01EEFF] cursor-pointer'>Contact</Link>
        </div>
    </nav>
  )
}