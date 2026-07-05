import FloatingCard from "./FloatingCard";
import Name from "./Name";
export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="about"
      className="relative z-10 min-h-screen flex items-center justify-between gap-10 px-10 md:px-16 pt-28 pb-20 flex-wrap"
    >
      {/* ── Left content ── */}
      <div className="max-w-xl flex-1">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-9 text-purple-400 text-[11px] tracking-widest uppercase font-mono"
          style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.3)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Open to opportunities · MERN Stack Developer
        </div>

        {/* Name */}
        <h1
          className="font-black leading-[0.92] tracking-[-0.04em] mb-7"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3.5rem,7vw,6.5rem)" }}
        >
          <span className="block text-[#e8e4f0]"><Name /></span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg,#7c6fff 0%,#00d4ff 50%,#ff6bcd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "gradShift 4s linear infinite",
            }}
          >
            Jana.
          </span>
        </h1>

        {/* Sub-role */}
        <div className="flex items-center gap-3 text-cyan-400 text-[13px] tracking-[0.15em] uppercase font-mono mb-6">
          <span className="inline-block w-10 h-px bg-cyan-400" />
          BCA 6th Sem · MAKAUT University · West Bengal
        </div>

        {/* Description */}
        <p className="text-[rgba(232,228,240,0.52)] text-[17px] leading-[1.85] font-light max-w-lg mb-11">
          Building full-stack web experiences with React, Node.js, MongoDB &amp; Express.
          Turning ideas into real, working products — one commit at a time.
        </p>

        {/* Buttons */}
        <div className="flex gap-3.5 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg,#7c6fff,#6052e0)",
              boxShadow: "0 0 30px rgba(124,111,255,0.4),0 0 60px rgba(124,111,255,0.15)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 48px rgba(124,111,255,0.7),0 0 90px rgba(124,111,255,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 30px rgba(124,111,255,0.4),0 0 60px rgba(124,111,255,0.15)")
            }
          >
            View Projects &nbsp;→
          </button>

          <a
            href="https://github.com/janapunya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-[#e8e4f0] no-underline transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "transparent",
              border: "1px solid rgba(124,111,255,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,111,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(124,111,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(124,111,255,0.3)";
            }}
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* ── Right: 3-D floating card ── */}
      <FloatingCard />

      {/* keyframe injection */}
      <style>{`
        @keyframes gradShift {
          0%   { background-position: 0%; }
          100% { background-position: 200%; }
        }
      `}</style>
    </section>
  );
}
