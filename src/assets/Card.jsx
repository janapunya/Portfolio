import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./data";

/* ── per-project accent colours ── */
const ACCENTS = [
  { dot: "#7c6fff", glow: "rgba(124,111,255,0.4)",  ring: "rgba(124,111,255,0.18)", line: "rgba(124,111,255,0.4)"  },
  { dot: "#ff6bcd", glow: "rgba(255,107,205,0.4)",  ring: "rgba(255,107,205,0.18)", line: "rgba(255,107,205,0.4)"  },
  { dot: "#00d4ff", glow: "rgba(0,212,255,0.4)",    ring: "rgba(0,212,255,0.18)",   line: "rgba(0,212,255,0.4)"    },
  { dot: "#4ade80", glow: "rgba(74,222,128,0.4)",   ring: "rgba(74,222,128,0.18)",  line: "rgba(74,222,128,0.4)"   },
  { dot: "#fbbf24", glow: "rgba(251,191,36,0.4)",   ring: "rgba(251,191,36,0.18)",  line: "rgba(251,191,36,0.4)"   },
];

const BADGE_STYLE = {
  "Featured":   { bg: "rgba(124,111,255,0.15)", color: "#a78bfa", border: "rgba(124,111,255,0.3)" },
  "Web Design": { bg: "rgba(74,222,128,0.12)",  color: "#86efac", border: "rgba(74,222,128,0.25)" },
  "Clone":      { bg: "rgba(0,212,255,0.12)",   color: "#67e8f9", border: "rgba(0,212,255,0.25)"  },
  "Full Stack": { bg: "rgba(255,107,205,0.12)", color: "#f9a8d4", border: "rgba(255,107,205,0.25)"},
};

/* ── Single timeline item ── */
function TimelineItem({ project, index, accent }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const badge = BADGE_STYLE[project.badge] || BADGE_STYLE["Clone"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative mb-12 last:mb-0"
      style={{
        paddingLeft: 40,
        opacity:     visible ? 1 : 0,
        transform:   visible ? "translateX(0)" : "translateX(28px)",
        transition:  `opacity 0.6s ease ${index * 130}ms, transform 0.6s ease ${index * 130}ms`,
      }}
    >
      {/* ── Dot on the line ── */}
      <div
        className="absolute rounded-full z-10"
        style={{
          left:      -7,
          top:       20,
          width:     14,
          height:    14,
          background: "#060610",
          border:    `2px solid ${accent.dot}`,
          boxShadow: visible
            ? `0 0 0 5px ${accent.ring}, 0 0 18px ${accent.glow}`
            : `0 0 0 4px ${accent.ring}`,
          transition: "box-shadow 0.5s ease",
        }}
      />

      {/* ── Horizontal connector from dot to card ── */}
      <div
        className="absolute"
        style={{
          left:       7,
          top:        26,
          width:      33,
          height:     1,
          background: `linear-gradient(90deg, ${accent.line}, transparent)`,
        }}
      />

      {/* ── Year label (left of the line) ── */}
      <div
        className="absolute text-right font-mono text-[10px] tracking-widest uppercase text-[#6868a0]"
        style={{ left: -80, top: 15, width: 60 }}
      >
        {project.year || "2024"}
      </div>

      {/* ── Card ── */}
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background:   "#0e0e1c",
          border:       `1px solid ${hovered ? "rgba(124,111,255,0.38)" : "rgba(124,111,255,0.13)"}`,
          transform:    hovered ? "translateX(6px)" : "translateX(0)",
          boxShadow:    hovered ? `0 16px 40px ${accent.glow}` : "none",
          padding:      "22px 26px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left glow strip */}
        <div
          className="absolute left-0 top-0 bottom-0 rounded-l-2xl transition-opacity duration-300"
          style={{
            width:      3,
            background: `linear-gradient(180deg, ${accent.dot}, ${ACCENTS[(index + 1) % ACCENTS.length].dot})`,
            opacity:    hovered ? 1 : 0,
          }}
        />

        {/* Top row: badge + number */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: badge.bg,
              color:      badge.color,
              border:     `1px solid ${badge.border}`,
            }}
          >
            {project.featured ? "✦ " : ""}{project.badge}
          </span>
          <span
            className="font-black leading-none flex-shrink-0 select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize:   "3rem",
              color:      "rgba(255,255,255,0.04)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black tracking-tight mb-2 transition-colors duration-200"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize:   "1.25rem",
            color:      hovered ? "#c4b8ff" : "#e8e4f0",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-light mb-4" style={{ color: "rgba(232,228,240,0.48)" }}>
          {project.desc}
        </p>

        {/* Footer: stack pills + link */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md transition-all duration-300"
                style={{
                  background:  hovered ? "rgba(124,111,255,0.1)"  : "rgba(255,255,255,0.04)",
                  border:      `1px solid ${hovered ? "rgba(124,111,255,0.28)" : "rgba(255,255,255,0.08)"}`,
                  color:       hovered ? "rgba(200,195,255,0.85)" : "rgba(232,228,240,0.5)",
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-wider no-underline inline-flex items-center gap-1.5 transition-all duration-200"
            style={{ color: hovered ? "#a78bfa" : "#7c6fff" }}
          >
            GitHub
            <span style={{ transition: "transform 0.2s", transform: hovered ? "translateX(3px)" : "translateX(0)" }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Card() {
  const lineRef    = useRef(null);
  const wrapRef    = useRef(null);
  const sectionRef = useRef(null);
  const [secVisible, setSecVisible] = useState(false);

  /* fill the vertical line as user scrolls */
  useEffect(() => {
    const updateLine = () => {
      const wrap = wrapRef.current;
      const fill = lineRef.current;
      if (!wrap || !fill) return;
      const rect   = wrap.getBoundingClientRect();
      const viewed = Math.max(0, window.innerHeight - rect.top);
      const pct    = Math.min(100, (viewed / rect.height) * 110);
      fill.style.height = pct + "%";
    };
    window.addEventListener("scroll", updateLine, { passive: true });
    updateLine();
    return () => window.removeEventListener("scroll", updateLine);
  }, []);

  /* fade in section heading */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSecVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 px-10 md:px-16 py-24"
      style={{ background: "rgba(14,14,28,0.4)" }}
    >
      {/* Section header */}
      <div
        style={{
          opacity:   secVisible ? 1 : 0,
          transform: secVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="flex items-center gap-3 text-purple-400 text-[11px] tracking-[0.2em] uppercase font-mono mb-3.5">
          <span className="w-6 h-px bg-purple-500 inline-block" />
          Selected Work
        </div>

        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <h2
            className="font-black tracking-tight leading-tight"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)" }}
          >
            Project{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <span className="font-mono text-[11px] text-[#6868a0] tracking-widest uppercase pb-1">
            {PROJECTS.length} projects built
          </span>
        </div>
      </div>

      {/* Timeline wrapper */}
      <div
        ref={wrapRef}
        className="relative"
        style={{ paddingLeft: 80 }}        /* room for year labels + line */
      >
        {/* ── Vertical line ── */}
        <div
          className="absolute top-0 bottom-0 rounded-full overflow-hidden"
          style={{ left: 73, width: 2, background: "rgba(124,111,255,0.1)" }}
        >
          <div
            ref={lineRef}
            className="w-full rounded-full"
            style={{
              height:     "0%",
              background: "linear-gradient(180deg,#7c6fff 0%,#00d4ff 50%,#ff6bcd 100%)",
              transition: "height 0.3s ease",
            }}
          />
        </div>

        {/* ── Items ── */}
        {PROJECTS.map((project, i) => (
          <TimelineItem
            key={project.id}
            project={project}
            index={i}
            accent={ACCENTS[i % ACCENTS.length]}
          />
        ))}
      </div>
    </section>
  );
}
