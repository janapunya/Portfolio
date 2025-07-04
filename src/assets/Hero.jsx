import Name from './Name'
function Header() {
    return <>
        <div>
          <nav  className='h-22 w-screen  flex justify-between px-15 items-center text-2xl font-semibold tracking-widest fixed nav' id='home'>
            <div>
              <h1 >PUNYABRATA JANA</h1>
            </div>
            <div className='flex gap-5 '>
              <a href="#home" aria-label="Navigate to home section"><h1>HOME</h1></a>
              <a href="#about" aria-label="Navigate to about section"><h1>ABOUT</h1></a>
              <a href="#work" aria-label="Navigate to work section"><h1>WORK</h1></a>
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
    </>
}

export default Header;