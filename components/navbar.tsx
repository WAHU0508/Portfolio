"client"
import React from 'react'
import { Link } from 'react-scroll'

export default function NavBar() {
  // const scrollToSection = (id) => {
  //   document.getElementById(id).scrollIntoView({ behavior: 'smooth'})
  // }
  return (
    <nav className='text-white lg:w-[1440px] bg-[rgb(21,25,37)] h-auto flex flex-row justify-between lg:px-[70px]'>
        <div className='text-[24px] font-extrabold font-sen flex flex-row'>Portfolio.</div>
        <div className='flex flex-row text-[20px] font-medium gap-8'>
            {/* <p onClick={() => scrollToSection('home')} className='hover:text-[#01EEFF] cursor-pointer'>Home</p>
            <p onClick={() => scrollToSection('about')} className='hover:text-[#01EEFF] cursor-pointer'>About</p>
            <p onClick={() => scrollToSection('services')} className='hover:text-[#01EEFF] cursor-pointer'>Services</p>
            <p onClick={() => scrollToSection('portfolio')} className='hover:text-[#01EEFF] cursor-pointer'>Portfolio</p>
            <p onClick={() => scrollToSection('contact')} className='hover:text-[#01EEFF] cursor-pointer'>Contact</p> */}
            <Link to="home" smooth={true} duration={800}>Test</Link>
        </div>
    </nav>
  )
}