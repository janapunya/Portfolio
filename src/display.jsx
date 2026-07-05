import Background_corsor from './assets/Background_corsor'
import ParticleCanvas    from './assets/ParticleCanvas'
import Navbar            from './assets/Navbar'
import Hero              from './assets/Hero'
import Rolling_text      from './assets/Rolling_text'
import AboutMe           from './assets/AboutMe'
import Technology        from './assets/Technology'
import Card              from './assets/Card'
import Contact           from './assets/Contact'
import Footer            from './assets/Footer'

export default function Display() {
  return (
    <div className="relative min-h-screen bg-[#060610] text-white overflow-x-hidden">

      {/* ── Layer 0: animated particle network ── */}
      <ParticleCanvas />

      {/* ── Layer 1: custom cursor ── */}
      <Background_corsor />

      {/* ── Layer 2: grain texture overlay (via CSS in index.css or tailwind) ── */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Layer 3: all page content ── */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Rolling_text />
        <AboutMe />
        <Technology />
        <Card />
        <Contact />
        <Footer />
      </div>

      {/* Google Fonts — Syne for headings */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap"
      />
    </div>
  )
}
