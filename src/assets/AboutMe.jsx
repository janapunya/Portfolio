import { useEffect, useRef } from "react";

const ABOUT_STATS = [
  { n: "8+",  l: "GitHub Repos"    },
  { n: "5+",  l: "Live Projects"   },
  { n: "BCA", l: "Batch 2023-2034 .Completed"  },
  { n: "∞",   l: "Curiosity Level" },
];

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("opacity-100", e.isIntersecting)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 px-10 md:px-16 py-24 opacity-0 transition-opacity duration-700"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left – text */}
        <div>
          <div className="flex items-center gap-3 text-purple-400 text-[11px] tracking-[0.2em] uppercase font-mono mb-3.5">
            <span className="w-6 h-px bg-purple-500 inline-block" />
            About Me
          </div>

          <h2
            className="font-black tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Building with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              curiosity
            </span>{" "}
            &amp; code.
          </h2>

          <p className="text-[rgba(232,228,240,0.55)] text-base leading-[1.9] font-light mb-6">
            I'm <span className="text-white font-semibold">Punyabrata Jana</span>, a BCA student
            at <span className="text-purple-400 font-medium">CCLMS College</span> under{" "}
            <span className="text-purple-400 font-medium">MAKAUT University</span>, West Bengal.
          </p>
          <p className="text-[rgba(232,228,240,0.55)] text-base leading-[1.9] font-light mb-8">
            I love turning ideas into functional, beautiful digital products. From my first line of
            HTML to deploying full-stack MERN applications, I've been on a continuous journey of
            learning and building — blending technical precision with creative design thinking.
          </p>

          <a
            href="https://github.com/janapunya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold no-underline text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#7c6fff,#6052e0)",
              boxShadow: "0 0 24px rgba(124,111,255,0.4)",
            }}
          >
            View GitHub Profile →
          </a>
        </div>

        {/* Right – stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {ABOUT_STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 cursor-default"
              style={{
                background: "#0e0e1c",
                border: "1px solid rgba(124,111,255,0.18)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 16px 36px rgba(124,111,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)")
              }
            >
              <div
                className="font-black sm:text-4xl text-2xl mb-1 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                {s.n}
              </div>
              <div className="text-xs text-[#6868a0] tracking-wide">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
