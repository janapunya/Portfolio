import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  {
    icon: '✉',
    label: 'Email me',
    sub: 'punyabratajana74@gmail.com',
    href: 'mailto:punyabratajana74@gmail.com',
    external: false,
  },
  {
    icon: 'in',
    label: 'Connect',
    sub: 'LinkedIn',
    href: 'https://www.linkedin.com/in/punya-brata-jana-01837627b',
    external: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    sub: '7477842227',
    href: 'tel:7477842227',
    external: false,
  },
  {
    icon: '⌘',
    label: 'Code',
    sub: 'GitHub',
    href: 'https://github.com/janapunya',
    external: true,
  },
  {
    icon: '📍',
    label: 'Based in',
    sub: 'contai, West Bengal, India',
    href: '#',
    external: false,
  },
]

export default function Contact() {
  const headRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    gsap.to(headRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your form backend / API route of choice.
    console.log('Contact form submitted:', form)
  }

  return (
    <section id="contact" className="bg-black2 py-28 md:py-36">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="">
          <div>
            <div
              ref={headRef}
              className="opacity-0 translate-y-7 text-[clamp(34px,5vw,54px)] font-extrabold leading-[1.15] tracking-tight"
            >
              Let's build
              <br />
              something{' '}
              <span className="font-script font-normal text-gold-2 text-[1.15em]">real.</span>
            </div>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-grey max-w-[38ch]">
              Have a project in mind, an internship opening, or just want to talk MERN
              stack? I'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between gap-3.5 border border-white/10 rounded-lg px-4.5 py-4 hover:border-gold hover:bg-gold/5 transition-colors cursor-hover px-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8.5 h-8.5 w-[34px] h-[34px] rounded-full bg-gold/10 flex items-center justify-center text-sm text-gold-2">
                      {l.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold">{l.label}</div>
                      <div className="text-xs text-grey mt-0.5">{l.sub}</div>
                    </div>
                  </div>
                  {l.label !== 'Based in' && <span>↗</span>}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
