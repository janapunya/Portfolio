import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { div } from "framer-motion/client";

const RollingText = () => {
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);

  // content to show (edit if you want)
  const items = [
    "MERN",
    "FRONTEND",
    "BACKEND",
    "FULL-STACK",
    "WEB-DEVELOPMENT",
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const createAnimation = () => {
      if (tweenRef.current) tweenRef.current.kill();
      gsap.set(el, { x: 0 });

      const totalWidth = el.scrollWidth;
      const singleWidth = totalWidth / 2 || 0;

      const speed = 120; // pixels / second (keep or tweak)
      const duration = singleWidth / speed;

      tweenRef.current = gsap.to(el, {
        x: singleWidth,
        duration: Math.max(duration, 0.02),
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const v = parseFloat(x);
            let mod = v % singleWidth;
            if (mod > 0) mod -= singleWidth;
            return `${mod}px`;
          },
        },
      });
    };

    const ro = new ResizeObserver(() => createAnimation());
    ro.observe(el);
    window.addEventListener("resize", createAnimation);
    createAnimation();

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      ro.disconnect();
      window.removeEventListener("resize", createAnimation);
    };
  }, [items]);

  return (


    <div className=" h-15 flex items-center bg-stone-600 rotate-[-6deg] max-w-[110%] translate-x-[-10px]">

      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap gap-15 py-3 px-8"
        aria-hidden="false"
      >
        {[...items, ...items].map((text, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-4 px-6 py-2 select-none"
          >
            <h1 className="text-2xl font-medium tracking-wider">{text}</h1>
            <span className="h-4 w-4 ml-15 rounded-full bg-amber-600 inline-block" />
          </div>
        ))}
      </div>
    </div>

  );
};

export default RollingText;
