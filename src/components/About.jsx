import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img from '../image/punya.png'
gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'BASED', val: 'contai, India' },
  { label: 'FOCUS', val: 'MERN Stack' },
  { label: 'STATUS', val: 'BCA, graduate' },
  { label: 'MINDSET', val: 'Always Learning' },
  { label: 'PROJECTS BUILT', val: '5+' },
  { label: 'UNIVERSITY', val: 'MAKAUT' },
]

export default function About() {
  const refs = useRef([])
  refs.current = []

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el)
  }

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })
  }, [])

  return (
    <section id="about" className="bg-panel py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2.5 text-xs tracking-[0.14em] text-grey mb-4">
          <span className="text-gold font-semibold">02</span>
          <span className="w-6 h-px eyebrow-rule" />
          <span>THE PERSON BEHIND THE WORK</span>
        </div>

        <div className="flex items-baseline gap-5 mb-16">
          <h2 className="font-script text-[clamp(40px,5vw,56px)] text-gold-2">About me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-start ">
          <div
            ref={addRef}
            className="opacity-0 translate-y-7 aspect-[4/5] border border-white/10 rounded-sm flex items-center justify-center relative overflow-hidden grain-box"
           
          >
            <img src={img} alt="punya" />
          </div>

          <div>
            <div className="flex items-center gap-2.5 text-[11px] tracking-[0.14em] text-grey mb-3.5">
              <span className="w-[22px] h-px eyebrow-rule" />
              <span>WHO AM I?</span>
            </div>

            <div
              ref={addRef}
              className="opacity-0 translate-y-7 text-[clamp(24px,3.4vw,38px)] leading-[1.28] font-bold tracking-tight mb-7"
            >
              I turn ideas into <span className="text-gold-2">interfaces</span> that
              actually <span className="text-gold-2">work.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-11">
              <p className="text-[14.5px] leading-[1.7] text-[#c7c3b8] max-w-[34ch]">
                I'm Punya — a BCA student in contai building full-stack web apps with the
                MERN stack, from database schema to the last pixel of the UI.
              </p>
              <p className="text-[14.5px] leading-[1.7] text-[#c7c3b8] max-w-[34ch]">
                I care about the details people don't notice: clean component structure,
                responsive layouts, and interfaces that hold up outside a tutorial.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-7 gap-x-5 pt-6 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[10.5px] tracking-[0.12em] text-grey mb-1.5">
                    {s.label}
                  </div>
                  <div className="text-sm text-gold-2 font-semibold">{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
