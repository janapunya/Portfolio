
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onDone }) {
  const [text, setText] = useState('')
  const wrapRef = useRef(null)

  const fullText = "Hello, it's punya"

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let index = 0

    // Type one character at a time
    const typing = gsap.timeline({
      onComplete: () => {
        // Wait after the complete text appears
        gsap.delayedCall(0.5, () => {
          gsap.to(wrapRef.current, {
            opacity: 2,
            duration: 0.7,
            ease: 'power1.inOut',
            onComplete: () => {
              document.body.style.overflow = 'auto'
              onDone()
            },
          })
        })
      },
    })

    // Show each letter one by one
    for (let i = 0; i < fullText.length; i++) {
      typing.call(() => {
        index++
        setText(fullText.slice(0, index))
      })

      typing.to({}, {
        duration: 0.09,
      })
    }

    return () => {
      typing.kill()
      document.body.style.overflow = 'auto'
    }
  }, [onDone])

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9998] bg-black2 flex items-center justify-center"
    >
      <div
        className="
          font-script
          text-gold-2
          text-[clamp(40px,6vw,64px)]
          tracking-wide
          whitespace-pre
        "
      >
        {text}
      </div>
    </div>
  )
}

