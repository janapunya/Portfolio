import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectCard({ project, pathId }) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className="group border border-white/10 rounded grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg,#171510,#0f0e0b)' }}
    >
      <div className="p-8 md:p-11 flex flex-col justify-center gap-4">
        <div className="text-[11px] tracking-[0.12em] text-gold">{project.tag}</div>
        <h3 className="text-[clamp(24px,3vw,34px)] font-extrabold tracking-tight">
          {project.title}
        </h3>
        <p className="text-[13.5px] leading-[1.65] text-grey max-w-[44ch]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.pills.map((p) => (
            <span
              key={p}
              className="text-[10.5px] tracking-wide px-2.5 py-1.5 border border-white/10 rounded-full text-grey"
            >
              {p}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 self-start inline-flex items-center gap-2 text-xs tracking-wide px-5 py-3 rounded-full bg-gold text-black2 font-bold cursor-hover"
        >
          <span className="flex items-center gap-1.5">
          View Code 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="inline mr-1"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.427 2.865 8.187 6.839 9.525.5.091.682-.217.682-.481 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.111-1.466-1.111-1.466-.909-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.531 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.221-.252-4.555-1.114-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.269.098-2.648 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.545 1.379.202 2.395.1 2.648.64.7 1.028 1.594 1.028 2.687 0 3.848-2.337 4.696-4.566 4.944.36.309.68.92.68 1.855 0 1.339-.012 2.421-.012 2.751 0 .267.18.577.688.479C19.138 20.205 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
            
          </span>
     
        </a>
      </div>

      <div className="relative flex items-center justify-center min-h-[220px] overflow-hidden">
        <img
          src={project.mono}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          className="absolute top-5 right-5 z-10 w-[78px] h-[78px] cursor-hover"
        >
          <svg viewBox="0 0 120 120" className="w-full h-full spin-med">
            <defs>
              <path
                id={pathId}
                d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
              />
            </defs>
            <text fontSize="15" letterSpacing="1.6" fill="#e4c98d">
              <textPath href={`#${pathId}`}>VIEW PROJECT • LIVE PROJECT •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 m-auto flex items-center justify-center w-7 h-7 rounded-full text-base text-gold-2 transition-all duration-300 group-hover:rotate-45 group-hover:bg-gold-2 group-hover:text-black2">
            ↗
          </span>
        </a>
      </div>
    </div>
  )
}


