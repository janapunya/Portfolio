import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedText() {
  const refs = useRef([]);
  const text = "PUNYABRATA JANA";

  useEffect(() => {
    gsap.from(refs.current, {
      y: 150,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: 'back.inOut',
    });
  }, []);

  return (
    <div className='flex text-8xl punya opacity-80'>
      {text.split('').map((c, i) => (
        <span  key={i} ref={el => refs.current[i] = el} style={{ whiteSpace: 'pre' }}>{c}</span>
      ))}
    </div>
  );
}