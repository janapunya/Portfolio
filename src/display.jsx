import React from 'react'
import Background_corsor from './assets/Background_corsor'
import Name from './assets/Name'
import TiltedCard from './reactBits/Tilted_card';
import './display.css'
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Display() {
  return (
    <>
      <Background_corsor />
      <div  >
        <nav  className='h-22 w-screen  flex justify-between px-15 items-center text-2xl font-semibold tracking-widest fixed nav' id='home'>
          <div>
            <h1 >PUNYABRATA JANA</h1>
          </div>
          <div className='flex gap-5 '>
            <a href="#home"><h1>HOME</h1></a>
            <a href="#about"><h1>ABOUT</h1></a>
            <a href="#work"><h1>WORK</h1></a>
          </div>
        </nav>
        <div className='h-120  px-15 grid items-center total_name'>
          <div>
            <h1 className='text-8xl hello'>Hello,I'm</h1>
            <Name />
          </div>
        </div>
        <div className='px-15 h-auto about_me' id='about'>
          <h1 className='text-4xl mb-5'>About Me</h1>
          <p className='text-2xl '>Hello! I'm Punyabrata Jana, a passionate and dedicated BCA student currently pursuing my 5th semester at CCLMS College under MAKAUT. I have a strong interest in web development, with a growing skill set in languages like JavaScript, HTML, CSS, and backend technologies like Node.js.
            I'm constantly exploring new tools and technologies to expand my knowledge and improve my projects..</p>
        </div>
      </div>


      <div className=' mt-10 px-15 work_container' id='work'>
        <h1 className='text-4xl mb-10'>My Work</h1>
        <div className='card grid gap-3'>

          <TiltedCard
            imageSrc="/images/e-f.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a href='https://trendnest-ydh9.onrender.com'><p className="tilted-card-demo-text ml-15 mt-40 bg-zinc-800 p-1 rounded-xl">
                Check Project
              </p></a>
              
            }
          />

          <TiltedCard
            imageSrc="/images/bike.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="200px"
            containerWidth="200px"
            imageHeight="200px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a href='https://janapunya.github.io/Bike-website/'><p className="tilted-card-demo-text ml-15 mt-40 bg-zinc-800 p-1 rounded-xl">
               Check Project
              </p></a>
            }
          />







        </div>
      </div>


      <div className='h-30  px-15 mt-10 contact_container'>
        <div className='grid nav text-2xl'>
          <h1 className='flex'><HiOutlineMail className='pt-1.5 ' size={30} />punyabratajana022@gmail.com</h1>
          <h1 className='flex'> <IoCallOutline className='pt-1.5 ' size={30} />+91 7477862227</h1>
        </div>
        <div className='grid icon gap-1.5 mt-5'>
          <a href="https://github.com/"><FaGithub size={30}/></a>
          <a href="https://www.linkedin.com/in/punya-brata-jana-01837627b/"><IoLogoLinkedin size={30}/></a>
          <a href="https://www.facebook.com/share/14Df478QU6f/"><FaFacebook size={30}/></a>
          <a href="https://www.instagram.com/punya.brata/profilecard/?igsh=MTh4czZ3eG14dGloYQ=="><FaInstagramSquare size={30}/></a>
        </div>
      </div>
    </>
  )
}

export default Display
