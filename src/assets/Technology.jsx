import { useEffect, useRef, useState } from "react";
import { SKILLS } from "./data";

function SkillRow({ skill, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setVisible(true); },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, index * 60);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 py-3.5 border-b border-white/5 group transition-all duration-300 hover:border-purple-500/20"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.5s ease ${index * 55}ms, transform 0.5s ease ${index * 55}ms, border-color 0.3s`,
      }}
    >
      {/* Icon */}
      <span className="text-xl w-8 text-center flex-shrink-0">{skill.icon}</span>

      {/* Name + category */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[14px] font-medium text-[#e8e4f0] group-hover:text-purple-300 transition-colors duration-200">
            {skill.name}
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#6868a0]">
            {skill.cat}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full"
            style={{
              width:      visible ? `${skill.level}%` : "0%",
              background: `linear-gradient(90deg, #7c6fff, #00d4ff)`,
              transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${index * 55 + 200}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Technology() {
  const sectionRef = useRef(null);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Split into two columns */
  const half  = Math.ceil(SKILLS.length / 2);
  const left  = SKILLS.slice(0, half);
  const right = SKILLS.slice(half);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 px-10 md:px-16 py-24 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 text-purple-400 text-[11px] tracking-[0.2em] uppercase font-mono mb-3.5">
        <span className="w-6 h-px bg-purple-500 inline-block" />
        What I Work With
      </div>

      <div className="flex items-end justify-between mb-12">
        <h2
          className="font-black tracking-tight leading-tight"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Tech{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>

        <span className="text-[11px] font-mono text-[#6868a0] tracking-widest uppercase pb-1.5">
          {SKILLS.length} technologies
        </span>
      </div>

      {/* Two-column skill list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
          {left.map((sk, i) => (
            <SkillRow key={sk.name} skill={sk} index={i} />
          ))}
        </div>
        <div>
          {right.map((sk, i) => (
            <SkillRow key={sk.name} skill={sk} index={i + half} />
          ))}
        </div>
      </div>
    </section>
  );
}
