export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 py-5 md:py-6 flex items-center justify-between mix-blend-difference">
      <div className="font-script text-2xl text-offwhite">punya</div>
      <nav className="hidden md:flex gap-8 text-[13px] tracking-wide">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#expertise" className="nav-link">Expertise</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      
    </header>
  )
}
