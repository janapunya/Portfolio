import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CHIPS = ["React", "Node.js", "MongoDB", "Express", "JS", "Git"];
const STATS = [
  { n: "8+",  l: "Repos"     },
  { n: "BCA", l: "Batch 2023-2034 .Completed"  },
  { n: "5+",  l: "Projects"  },
  { n: "1×",  l: "Live Site" },
];

export default function FloatingCard() {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ── Raw mouse position (0..1 relative to card) ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  /* ── Spring config: stiffness = snappiness, damping = bounce ── */
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  /* ── Map to rotation degrees ── */
  const rotateY = useTransform(springX, [0, 1], [-22, 22]);   // left/right tilt
  const rotateX = useTransform(springY, [0, 1], [18, -18]);   // up/down tilt

  /* ── Glare position follows mouse ── */
  const glareX = useTransform(springX, [0, 1], ["-30%", "130%"]);
  const glareY = useTransform(springY, [0, 1], ["-30%", "130%"]);

  /* ── Subtle scale on hover ── */
  const scale = useSpring(isHovered ? 1.04 : 1, { stiffness: 200, damping: 18 });

  /* ── Shadow depth follows tilt ── */
  const shadowX = useTransform(rotateY, [-22, 22], ["-20px", "20px"]);
  const shadowY = useTransform(rotateX, [-18, 18], ["20px", "-20px"]);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top)  / rect.height);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    /* spring back to centre */
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      className="hidden lg:flex items-center justify-center flex-shrink-0"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          /* dynamic depth shadow */
          filter: isHovered
            ? "drop-shadow(0 40px 60px rgba(124,111,255,0.35))"
            : "drop-shadow(0 20px 40px rgba(124,111,255,0.2))",
          transition: "filter 0.4s ease",
        }}
        className="relative w-[300px] rounded-3xl overflow-hidden cursor-none"
      >
        {/* ── Card body ── */}
        <div
          className="relative w-full rounded-3xl p-8 overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1e1e36, #0e0e22)",
            border: "1px solid rgba(124,111,255,0.35)",
            boxShadow: "inset 0 0 80px rgba(124,111,255,0.05)",
          }}
        >

          {/* ── Glare shine ── */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: glareX,
              top:  glareY,
              width: "220%",
              height: "220%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 30%, transparent 65%)",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
              zIndex: 20,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* ── Ambient glow blobs ── */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              top: "-60px", right: "-60px",
              width: 180, height: 180,
              background: "radial-gradient(circle, rgba(124,111,255,0.22), transparent)",
            }}
          />
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              bottom: "-40px", left: "-40px",
              width: 150, height: 150,
              background: "radial-gradient(circle, rgba(0,212,255,0.14), transparent)",
            }}
          />

          {/* ── Top-edge highlight (glass rim) ── */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            }}
          />

          {/* ── Content (lifted in Z so it sits above the glare) ── */}
          <div className="relative z-10">

            {/* Avatar */}
            <motion.div
              className="mb-5"
              style={{ transform: "translateZ(30px)" }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/195926311?v=4"
                alt="Punyabrata Jana"
                className="w-16 h-16 rounded-full object-cover"
                style={{
                  border: "2px solid rgba(124,111,255,0.55)",
                  boxShadow: "0 0 24px rgba(124,111,255,0.4)",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </motion.div>

            {/* Name + title */}
            <motion.div style={{ transform: "translateZ(24px)" }}>
              <div
                className="text-[#e8e4f0] font-black text-lg tracking-tight mb-0.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Punyabrata Jana
              </div>
              <div className="text-purple-400 text-[10px] tracking-widest uppercase font-mono mb-5">
                MERN Stack Developer
              </div>
            </motion.div>

            <div className="h-px bg-purple-500/15 mb-5" />

            {/* Tech chips */}
            <motion.div
              className="flex flex-wrap gap-1.5 mb-5"
              style={{ transform: "translateZ(16px)" }}
            >
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md"
                  style={{
                    background: "rgba(124,111,255,0.12)",
                    border:     "1px solid rgba(124,111,255,0.28)",
                    color:      "rgba(200,195,255,0.9)",
                  }}
                >
                  {c}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-2.5"
              style={{ transform: "translateZ(10px)" }}
            >
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border:     "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="font-black text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[10px] text-[#6868a0] mt-0.5 tracking-wide">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>{/* /z-10 content */}
        </div>{/* /card body */}
      </motion.div>{/* /motion wrapper */}
    </div>
  );
}
