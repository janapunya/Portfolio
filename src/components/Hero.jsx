import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HeroText from './HeroText'
import HeroText2 from './HeroText2'
import img from '../image/img.png'
export default function Hero({ ready }) {
  const tags = useRef(null)
  const cue = useRef(null)
  const badge = useRef(null)

  useEffect(() => {
    if (!ready) return
    const tl = gsap.timeline()
    tl.from(tags.current.children, { opacity: 0, y: 10, stagger: 0.05, duration: 0.5 }, '-=0.3')
      .from(cue.current, { opacity: 0, duration: 0.6 }, '-=0.2')
      .from(badge.current, { opacity: 0, duration: 0.6 }, '-=0.4')
  }, [ready])

  return (
    <section
    id="hero"
    className="bg-cream text-ink min-h-screen flex flex-col justify-center pt-32 md:pt-36 pb-10 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 text-center relative w-full">
        <div
          className=" font-display leading-[0.86] "
        >
          <HeroText 
            text="CREATIVE"
            mediaType="image"
            src={img}
            poster={img}
            fillScale={1.45}
            parallax={10}
            reveal="rise"
            trigger="hover"
            drift={30}
            brightness={0.85}
            saturation={1.3}
            grayscale={true}
            duration={2.40}
            stagger={0.20}
            align="center"
            weight={500}
            tracking={0.03}
            lineHeight={1.06}
            textScale={0.25}
          />
        </div>
        <div>
          <HeroText2
          words={["DEVLOPER","MERN STACK","WEB DEV"]}
          flipDuration={0.12}
          stagger={0.06}
          cycleDelay={2400}
          charset="alphanumeric"
          flipsPerChar={8}
          tileColor="#39382a"
          textColor="#f8fafc"
          tileRadius={5}
          gap={12}
          fontSize={40}
          loop
          padTo={1}
          />
        </div>

        <div
          ref={tags}
          className="mt-6 flex items-center justify-center gap-4 text-[11px] tracking-[0.12em] text-[#5b574c]"
        >
          <span>VISUALS</span>
          <span className="dot-sep" />
          <span>CODE</span>
          <span className="dot-sep" />
          <span>EXPERIENCE</span>
        </div>

        <div
          ref={cue}
          className="mt-14 flex flex-col items-center gap-2.5 text-[11px] tracking-[0.12em] text-[#6b6656]"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-arrow" />
        </div>

        <div
          ref={badge}
          className="hidden md:block absolute right-0 bottom-1.5 w-[118px] h-[118px]"
        >
          <svg viewBox="0 0 120 120" className="w-full h-full spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
              />
            </defs>
            <text fontSize="9.3" letterSpacing="2" fill="#15130f">
              <textPath href="#circlePath">
                LET'S WORK TOGETHER • LET'S WORK TOGETHER •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl">↗</div>
        </div>
        <div className="hidden md:block absolute right-1.5 bottom-[-26px] text-[10px] tracking-[0.1em] text-[#6b6656]">
          BASED IN INDIA
        </div>
        <div className="hidden md:block absolute left-0 bottom-1.5 font-script text-base text-[#6b6656]">
          © 2026 punya
        </div>

        {/* mobile stacked footer info */}
        <div className="md:hidden mt-9 flex flex-col items-center gap-3">
          <div className="w-[100px] h-[100px] relative">
            <svg viewBox="0 0 120 120" className="w-full h-full spin-slow">
              <defs>
                <path
                  id="circlePathM"
                  d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                />
              </defs>
              <text fontSize="9.3" letterSpacing="2" fill="#15130f">
                <textPath href="#circlePathM">
                  LET'S WORK TOGETHER • LET'S WORK TOGETHER •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl">↗</div>
          </div>
          <div className="text-[10px] tracking-[0.1em] text-[#6b6656]">BASED IN INDIA</div>
          <div className="font-script text-base text-[#6b6656]">© 2026 punya</div>
        </div>
      </div>
    </section>
  )
}
