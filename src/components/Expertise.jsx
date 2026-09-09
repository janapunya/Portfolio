import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { expertise } from '../data/expertise'

gsap.registerPlugin(ScrollTrigger)

const stack = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML5', 'CSS3', 'Git']

export default function Expertise() {
  const itemRefs = useRef([])
  itemRefs.current = []
  const addItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el)
  }
  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: i * 0.05,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })
  }, [])

  return (
    <section id="expertise" className="bg-black2 py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2.5 text-xs tracking-[0.14em] text-grey mb-14">
          <span className="text-gold font-semibold">03</span>
          <span className="w-6 h-px eyebrow-rule" />
          <span>EXPERTISE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-16">
          <div>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] text-grey-dim">
              MY<span className="block text-offwhite">EXPERTISE</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.75] text-[#b9b5aa] max-w-[34ch]">
              I build across the full stack, pairing{' '}
              <b className="text-gold-2 font-semibold">React</b> on the front end with{' '}
              <b className="text-gold-2 font-semibold">Node, Express and MongoDB</b>{' '}
              underneath — so the interface and the data behind it are designed together.
            </p>
            <div className="flex flex-wrap gap-2 mt-7">
              {stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] tracking-wide px-3 py-1.5 border border-white/10 rounded-full text-grey"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div >
            {expertise.map((item, i) => (
              
              <div
                key={item.idx}
                ref={addItemRef}
                className={`group border-t border-white/10 py-6 grid grid-cols-[34px_1fr] gap-5 transition-all duration-300 hover:pl-3 cursor-hover ${
                  i === expertise.length - 1 ? 'border-b' : ''
                }`}
              >

                <div className="text-[11px] text-grey-dim pt-1">{item.idx}</div>
                <div>
                  <div className="flex items-center justify-between gap-3.5">
                    <h3 className="text-[19px] font-bold">{item.title}</h3>
                    <div className="w-6.5 h-6.5 w-[26px] h-[26px] border border-white/10 rounded-full flex items-center justify-center text-xs text-grey flex-shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:text-black2 group-hover:border-gold group-hover:rotate-45">
                      ↗
                    </div>
                  </div>
                  <p className="text-[13.5px] text-grey mt-2 max-w-[52ch] leading-[1.6]">
                    {item.description}
                  </p>
                  <div className="text-[10.5px] tracking-wide text-grey-dim mt-2.5">
                    {item.tags}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
