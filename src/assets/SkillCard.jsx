import { useState } from "react";
import { useTilt } from "./useTilt";

export default function SkillCard({ skill }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(12);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHov(false); }}
      onMouseEnter={() => setHov(true)}
      className="rounded-2xl p-5 text-center cursor-default transition-colors duration-300"
      style={{
        background:   hov ? "#16162a" : "#0e0e1c",
        border:       `1px solid ${hov ? "rgba(124,111,255,0.5)" : "rgba(124,111,255,0.18)"}`,
        boxShadow:    hov ? "0 20px 40px rgba(124,111,255,0.25),0 0 0 1px rgba(124,111,255,0.35)" : "none",
        transformStyle: "preserve-3d",
      }}
    >
      <span
        className="block text-3xl mb-2.5 transition-all duration-300"
        style={{ filter: hov ? "drop-shadow(0 0 10px rgba(124,111,255,0.5))" : "none" }}
      >
        {skill.icon}
      </span>
      <span
        className="block text-sm font-semibold mb-1 transition-colors duration-300"
        style={{ color: hov ? "#e8e4f0" : "#c4c0d8" }}
      >
        {skill.name}
      </span>
      <span className="text-[10px] text-[#6868a0] font-mono tracking-wide">
        {skill.cat}
      </span>
    </div>
  );
}
