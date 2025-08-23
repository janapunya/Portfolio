import React from 'react'
import Background_corsor from './assets/Background_corsor'

import Card from './assets/Card'
import Hero from './assets/Hero'
import Technology from './assets/Technology';
import Header from './assets/Header'
import Rolling_text from './assets/Rolling_text';
import AboutMe from './assets/AboutMe';
import Footer from './assets/Footer';
import Contact from './assets/Contact';
function Display() {
  return (
    <>
      <div  className=' relative z-1'>
        <Background_corsor />
      </div>
      <div  className=' relative z-2 '>
        <Header/>
        <div className='mt-[10%] sm:px-10 px-7'>
        <Hero/>
        </div>
        <div className='w-full h-60  flex items-center overflow-hidden scroll-auto '>
        <Rolling_text/>
        </div>
        <AboutMe/>
        <Technology/>
        <Card/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default Display
