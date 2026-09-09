import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const techs = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'MySQL', 'Git', 'Python']
const categories = ['FULL-STACK', 'UI / UX', 'REST APIS', 'MERN']

export default function Work() {
  const hugeRef = useRef(null)

  useEffect(() => {
    gsap.from(hugeRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: hugeRef.current, start: 'top 85%' },
    })
  }, [])

  return (
    <section id="work" className="bg-panel py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="text-center text-[11px] tracking-[0.14em] text-grey mb-2">
          SCROLL TO EXPLORE MY
        </div>
        <div
          ref={hugeRef}
          className="font-display text-center leading-[0.9] tracking-tight text-gold text-[clamp(70px,16vw,220px)]"
        >
          WORK
        </div>

        <div className="overflow-hidden border-y border-white/10 mt-12 py-4">
          <div className="flex gap-12 whitespace-nowrap w-max animate-marquee text-[13px] tracking-wide text-grey">
            {[...techs, ...techs].map((t, i) => (
              <span key={i} className="opacity-70">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3.5 flex-wrap mt-7 text-xs tracking-[0.1em] text-gold-2">
          {categories.map((c, i) => (
            <span key={c} className="flex items-center gap-3.5">
              {c}
              {i < categories.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-grey-dim inline-block" />
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6 mt-20">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} pathId={`cp${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
