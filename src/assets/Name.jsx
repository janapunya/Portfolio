import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedText() {
  const refs = useRef([]);
  const text = " Punyabrata";

  useEffect(() => {
    gsap.from(refs.current, {
      y: 150,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: 'back.Out',
    });
  }, []);

  return (
    <span className='flex overflow-hidden '>
  {text.split('').map((c, i) => (
    <span  
      key={i} 
      ref={el => refs.current[i] = el}
     
    >
      {c}
    </span>
  ))}
</span>

  );
}