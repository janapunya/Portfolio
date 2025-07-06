import React from 'react'
import Background_corsor from './assets/Background_corsor'

import Card from './assets/Card'
import './display.css'
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Hero from './assets/Hero'
import Technology from './assets/Technology';
function Display() {
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Background_corsor />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero/>
      <Technology/>

        <div className=' mt-10 px-15 work_container' id='work'>
          <h1 className='text-4xl my-10'>My Work</h1>
          <div className='card grid gap-3'>
            <Card />
          </div>
        </div>


        <div className='h-30  px-15 mt-10 contact_container'>
          <div className='grid nav text-2xl'>
            <h1 className='flex'><HiOutlineMail className='pt-1.5 ' size={30} />punyabratajana022@gmail.com</h1>
            <h1 className='flex'> <IoCallOutline className='pt-1.5 ' size={30} />+91 7477862227</h1>
          </div>
          <div className='grid icon gap-1.5 mt-5 relative' style={{ zIndex: 3 }}>
            <a href="https://github.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit GitHub profile"
               className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/punya-brata-jana-01837627b/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit LinkedIn profile"
               className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <IoLogoLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/share/14Df478QU6f/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit Facebook profile"
               className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/punya.brata/profilecard/?igsh=MTh4czZ3eG14dGloYQ==" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit Instagram profile"
               className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display
