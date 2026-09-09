import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    // Center both elements on their own position via transform, once.
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    const move = (e) => {
      // Dot: snap to the cursor instantly, no easing lag.
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      // Ring: trails behind with its own tween — only x/y are animated here,
      // so this never fights the grow/shrink tween below (different props).
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      })
    }
    window.addEventListener('mousemove', move)

    // Animate size/color directly with GSAP instead of toggling Tailwind
    // classes — inline styles from GSAP always win over utility classes,
    // so this can't lose to a CSS specificity/ordering fight like the
    // classList approach did.
    const grow = () =>
      gsap.to(ring, {
        width: 64,
        height: 64,
        backgroundColor: 'rgba(205,168,108,0.1)',
        borderColor: '#cda86c',
        duration: 0.3,
        ease: 'power3.out',
      })

    const shrink = () =>
      gsap.to(ring, {
        width: 32,
        height: 32,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(205,168,108,0.6)',
        duration: 0.3,
        ease: 'power3.out',
      })

    // Delegate from document instead of querying targets once on mount —
    // this way links/buttons added later (or re-rendered) still work,
    // instead of only whatever existed at the moment Cursor mounted.
    const handleOver = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) grow()
    }
    const handleOut = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) shrink()
    }
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-gold pointer-events-none hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-gold/60 pointer-events-none hidden md:block"
      />
    </>
  )
}
