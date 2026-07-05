import { useState } from "react";
import { useTilt } from "./useTilt";

export default function ProjectCard({ project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(project.featured ? 4 : 8);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHov(false); }}
      onMouseEnter={() => setHov(true)}
      className="rounded-2xl overflow-hidden cursor-default transition-all duration-500"
      style={{
        gridColumn:     project.featured ? "span 2" : "span 1",
        background:     "#0e0e1c",
        border:         `1px solid ${hov ? "rgba(124,111,255,0.4)" : "rgba(124,111,255,0.15)"}`,
        transform:      hov ? "translateY(-10px)" : "translateY(0)",
        boxShadow:      hov
          ? `0 30px 60px ${project.glow},0 0 0 1px rgba(124,111,255,0.25)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Visual banner */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: project.featured ? 260 : 190,
          background: `radial-gradient(ellipse at 30% 50%, ${project.glow}, transparent 60%),
                       linear-gradient(135deg, #0e0e1c 0%, #060610 100%)`,
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,111,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,111,255,0.05) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: 200, height: 200,
            background: `radial-gradient(circle,${project.glow},transparent)`,
            bottom: -50, right: -40, filter: "blur(30px)",
          }}
        />
        {/* Watermark title */}
        <div
          className="absolute bottom-[-8px] left-4 font-black uppercase select-none"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize:   project.featured ? "4.5rem" : "3rem",
            color:      "rgba(255,255,255,0.06)",
            letterSpacing: "-0.04em",
          }}
        >
          {project.title}
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300"
          style={{
            background:    "rgba(6,6,16,0.75)",
            backdropFilter:"blur(6px)",
            opacity:        hov ? 1 : 0,
          }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="no-underline text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
            style={{ background: "rgba(124,111,255,0.9)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7c6fff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(124,111,255,0.9)")}
          >
            View on GitHub →
          </a>
        </div>
      </div>

      {/* Body */}
      <div className={`${project.featured ? "p-7" : "p-6"}`}>
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: project.badgeColor,
              color:      project.badgeText,
              border:     `1px solid ${project.badgeText}33`,
            }}
          >
            {project.featured ? "✦ " : ""}
            {project.badge}
          </span>
        </div>

        <h3
          className="font-black tracking-tight text-[#e8e4f0] mb-2.5"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize:   project.featured ? "1.45rem" : "1.2rem",
          }}
        >
          {project.title}
        </h3>

        <p className="text-sm text-[rgba(232,228,240,0.48)] leading-relaxed font-light mb-4">
          {project.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-3 py-1 rounded-md transition-all duration-300"
              style={{
                background: hov ? "rgba(124,111,255,0.1)"   : "rgba(255,255,255,0.04)",
                border:     `1px solid ${hov ? "rgba(124,111,255,0.3)" : "rgba(255,255,255,0.09)"}`,
                color:      hov ? "rgba(200,195,255,0.85)"  : "rgba(232,228,240,0.55)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
