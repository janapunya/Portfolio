import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const mainRef = useRef(null)

  const handleLoaded = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (!loaded) return

    gsap.to(mainRef.current, {
      opacity: 1,
      duration: 2.4,
      ease: 'power3.in  out',
    })
  }, [loaded])

  return (
    <>
      {!loaded && <Preloader onDone={handleLoaded} />}

      <main
        ref={mainRef}
        style={{
          opacity: 0,
        }}
      >
        <Cursor />
        <Navbar />
        <Hero ready={loaded} />
        <About />
        <Expertise />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

