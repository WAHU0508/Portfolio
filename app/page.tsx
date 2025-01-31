import React from 'react'
import Navbar from '@//components/navbar'
import Home from '@//components/home'
import About from '@//components/about'
import Services from '@//components/services'
import Projects from '@//components/portfolio'
import Contact from '@//components/contact'

export default function Portfolio() {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}