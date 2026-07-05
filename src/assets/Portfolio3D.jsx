import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */
const PROJECTS = [
  {
    id: 1, title: "TrendNest", badge: "Featured",
    desc: "Full-stack e-commerce / trend platform with dynamic product listings, user auth, and a polished responsive UI.",
    stack: ["EJS", "Node.js", "Express", "MongoDB"],
    color: "#7c6fff", glow: "rgba(124,111,255,0.45)",
    accent: "#a78bfa", link: "https://github.com/janapunya/trendnest", featured: true,
  },
  {
    id: 2, title: "Bike Website", badge: "Web Design",
    desc: "Pixel-perfect bike showcase with smooth hover interactions and a striking visual layout.",
    stack: ["HTML", "CSS"],
    color: "#ff6bcd", glow: "rgba(255,107,205,0.4)",
    accent: "#f9a8d4", link: "https://github.com/janapunya/Bike-website",
  },
  {
    id: 3, title: "GPT Clone", badge: "Clone",
    desc: "ChatGPT-inspired UI with API integration and a dynamic real-time chat interface.",
    stack: ["JavaScript", "HTML/CSS"],
    color: "#00d4ff", glow: "rgba(0,212,255,0.35)",
    accent: "#67e8f9", link: "https://github.com/janapunya/GPTclone",
  },
  {
    id: 4, title: "Spotify Clone", badge: "Clone",
    desc: "Full Spotify UI clone — music player controls, playlist layout, responsive design.",
    stack: ["JavaScript", "CSS"],
    color: "#4ade80", glow: "rgba(74,222,128,0.35)",
    accent: "#86efac", link: "https://github.com/janapunya/spotify",
  },
  {
    id: 5, title: "PrimeBazaar", badge: "Full Stack",
    desc: "Marketplace app with product listings, user flows, and database integration.",
    stack: ["JavaScript", "Node.js", "MongoDB"],
    color: "#fbbf24", glow: "rgba(251,191,36,0.35)",
    accent: "#fde68a", link: "https://github.com/janapunya/PrimeBazaar",
  },
];

const SKILLS = [
  { name: "React", cat: "Frontend", icon: "⚛️" },
  { name: "Node.js", cat: "Backend", icon: "🟩" },
  { name: "MongoDB", cat: "Database", icon: "🍃" },
  { name: "Express", cat: "Framework", icon: "🚀" },
  { name: "JavaScript", cat: "Language", icon: "⚡" },
  { name: "CSS3", cat: "Styling", icon: "🎨" },
  { name: "HTML5", cat: "Markup", icon: "📄" },
  { name: "EJS", cat: "Templating", icon: "📦" },
  { name: "Git", cat: "Version Control", icon: "🐙" },
  { name: "Python", cat: "Scripting", icon: "🐍" },
  { name: "MySQL", cat: "Database", icon: "🗄️" },
  { name: "REST APIs", cat: "Integration", icon: "🔧" },
];

/* ─────────────────────────── CANVAS PARTICLES ─────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.current = { x: e.clientX, y: e.clientY }; });

    const COLORS = ["124,111,255", "0,212,255", "232,228,240"];
    class P {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.size = Math.random() * 1.4 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.18; this.vy = (Math.random() - 0.5) * 0.18;
        this.alpha = Math.random() * 0.45 + 0.08;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
        const dx = mouse.current.x - this.x, dy = mouse.current.y - this.y;
        const d = Math.hypot(dx, dy);
        if (d < 110) { this.x -= dx * 0.014; this.y -= dy * 0.014; }
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`; ctx.fill();
      }
    }
    for (let i = 0; i < 130; i++) particles.push(new P());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 105) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,111,255,${0.09 * (1 - d / 105)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
        particles[i].update(); particles[i].draw();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={ref} style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
    }} />
  );
}

/* ─────────────────────────── CURSOR ─────────────────────────── */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const rpos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
    };
    window.addEventListener("mousemove", move);
    let raf;
    const animate = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.12;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.12;
      if (ring.current) { ring.current.style.left = rpos.current.x + "px"; ring.current.style.top = rpos.current.y + "px"; }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} id="cur-dot" style={{
        position: "fixed", width: 10, height: 10, background: "#7c6fff",
        borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%,-50%)", transition: "width .2s,height .2s",
      }} />
      <div ref={ring} id="cur-ring" style={{
        position: "fixed", width: 38, height: 38, border: "1.5px solid rgba(124,111,255,0.5)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 9998,
        transform: "translate(-50%,-50%)", transition: "width .25s,height .25s,border-color .25s",
      }} />
    </>
  );
}

/* ─────────────────────────── 3D TILT HOOK ─────────────────── */
function useTilt(intensity = 14) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / r.height) * intensity;
    const ry = -((x - r.width / 2) / r.width) * intensity;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    el.style.transition = "transform .05s";
  }, [intensity]);
  const onLeave = useCallback(() => {
    if (ref.current) { ref.current.style.transform = ""; ref.current.style.transition = "transform .5s cubic-bezier(.23,1,.32,1)"; }
  }, []);
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

/* ─────────────────────────── NAV ──────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const s = {
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 60px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      backdropFilter: "blur(20px)",
      background: scrolled ? "rgba(6,6,16,0.85)" : "rgba(6,6,16,0.4)",
      borderBottom: `1px solid ${scrolled ? "rgba(124,111,255,0.25)" : "rgba(124,111,255,0.1)"}`,
      transition: "all .4s",
    },
    logo: {
      fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800,
      letterSpacing: "-.02em", cursor: "default",
      background: "linear-gradient(135deg,#7c6fff,#00d4ff)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    },
    links: { display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 },
    a: {
      fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: ".12em",
      textTransform: "uppercase", color: "#6868a0", textDecoration: "none",
      transition: "color .2s", cursor: "none",
    },
    btn: {
      background: "linear-gradient(135deg,#7c6fff,#a78bfa)",
      color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: ".08em",
      textTransform: "uppercase", padding: "10px 24px", borderRadius: 100,
      border: "none", cursor: "none", fontFamily: "'Space Grotesk',sans-serif",
      boxShadow: "0 0 20px rgba(124,111,255,0.35)",
    },
  };

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={s.nav}>
      <div style={s.logo}>punya.dev</div>
      <ul style={s.links}>
        {["about","skills","projects","contact"].map(id => (
          <li key={id}><a style={s.a} onClick={() => scroll(id)}
            onMouseEnter={e => e.target.style.color="#e8e4f0"}
            onMouseLeave={e => e.target.style.color="#6868a0"}>{id}</a></li>
        ))}
      </ul>
      <button style={s.btn} onClick={() => scroll("contact")}>Hire Me ✦</button>
    </nav>
  );
}

/* ─────────────────────────── FLOATING CARD ───────────────── */
function FloatingCard() {
  const cardRef = useRef(null);
  const wrapRef = useRef(null);
  const animRef = useRef(null);
  const angleRef = useRef(0);
  const floating = useRef(true);

  // Floating animation loop
  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.008;
      if (floating.current && cardRef.current) {
        const rx = Math.sin(t * 0.7) * 7 + 5;
        const ry = Math.sin(t) * -10 - 8;
        const ty = Math.sin(t * 0.8) * -12;
        cardRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(${ty}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const onMove = (e) => {
    floating.current = false;
    const r = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / r.height) * 18;
    const ry = -((x - r.width / 2) / r.width) * 20;
    if (cardRef.current) cardRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px)`;
  };
  const onLeave = () => { floating.current = true; };

  const CHIPS = ["React", "Node.js", "MongoDB", "Express", "JS", "Git"];
  const STATS = [{ n: "8+", l: "Repos" }, { n: "6th", l: "Semester" }, { n: "5+", l: "Projects" }, { n: "1×", l: "Live Site" }];

  return (
    <div ref={wrapRef} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ perspective: 1000, flexShrink: 0 }}>
      <div ref={cardRef} style={{
        width: 320, borderRadius: 24,
        background: "linear-gradient(145deg,#1a1a32,#0e0e22)",
        border: "1px solid rgba(124,111,255,0.3)",
        padding: 32, position: "relative", overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(124,111,255,0.08), 0 24px 70px rgba(124,111,255,0.22), 0 40px 100px rgba(0,0,0,0.7)",
        transition: "transform .05s",
      }}>
        {/* Glow blobs */}
        {[{top:"-60px",right:"-60px",bg:"rgba(124,111,255,0.18)"},{bottom:"-40px",left:"-40px",bg:"rgba(0,212,255,0.1)"}].map((g,i)=>(
          <div key={i} style={{ position:"absolute", width:180, height:180, borderRadius:"50%",
            background:`radial-gradient(circle,${g.bg},transparent)`, ...g, pointerEvents:"none" }} />
        ))}
        {/* Shimmer overlay */}
        <div style={{
          position:"absolute",inset:0,borderRadius:24,pointerEvents:"none",
          background:"linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 50%,rgba(0,212,255,0.04) 100%)"
        }}/>

        {/* Avatar */}
        <div style={{ position:"relative",zIndex:1,marginBottom:18 }}>
          <img src="https://avatars.githubusercontent.com/u/195926311?v=4" alt="PJ"
            style={{ width:72,height:72,borderRadius:"50%",objectFit:"cover",
              border:"2px solid rgba(124,111,255,0.5)",boxShadow:"0 0 22px rgba(124,111,255,0.35)",display:"block" }}
            onError={e=>{e.target.style.display="none"}} />
        </div>

        <div style={{ position:"relative",zIndex:1 }}>
          <div style={{ fontFamily:"'Syne',sans-serif",fontSize:"1.28rem",fontWeight:800,color:"#e8e4f0",marginBottom:3 }}>
            Punyabrata Jana
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:"#7c6fff",marginBottom:22 }}>
            MERN Stack Developer
          </div>
          <div style={{ height:1,background:"rgba(124,111,255,0.15)",marginBottom:20 }}/>
          <div style={{ display:"flex",flexWrap:"wrap",gap:7,marginBottom:22 }}>
            {CHIPS.map(c=>(
              <span key={c} style={{ background:"rgba(124,111,255,0.12)",border:"1px solid rgba(124,111,255,0.25)",
                borderRadius:6,padding:"4px 11px",fontSize:10,color:"rgba(200,195,255,0.85)",
                fontFamily:"'DM Mono',monospace" }}>{c}</span>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
            {STATS.map(s=>(
              <div key={s.l} style={{ background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,padding:"11px 13px" }}>
                <div style={{ fontFamily:"'Syne',sans-serif",fontSize:"1.35rem",fontWeight:800,
                  background:"linear-gradient(135deg,#7c6fff,#00d4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
                  {s.n}
                </div>
                <div style={{ fontSize:10,color:"#6868a0",marginTop:2,letterSpacing:".06em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section id="about" style={{
      position:"relative",zIndex:2,minHeight:"100vh",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"120px 60px 80px",gap:40,flexWrap:"wrap",
    }}>
      {/* Left text */}
      <div style={{ maxWidth:620 }}>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:10,
          background:"rgba(124,111,255,0.1)",border:"1px solid rgba(124,111,255,0.3)",
          borderRadius:100,padding:"8px 20px",marginBottom:36,
          fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".12em",
          textTransform:"uppercase",color:"#7c6fff",
        }}>
          <span style={{ width:8,height:8,background:"#4ade80",borderRadius:"50%",
            animation:"pulse 2s infinite",display:"inline-block" }}/>
          Open to opportunities · MERN Stack Developer
        </div>

        <h1 style={{
          fontFamily:"'Syne',sans-serif",fontSize:"clamp(3.6rem,7vw,6.8rem)",
          fontWeight:800,lineHeight:.92,letterSpacing:"-.04em",marginBottom:28,margin:"0 0 28px",
        }}>
          <span style={{ display:"block",color:"#e8e4f0" }}>Punyabrata</span>
          <span style={{
            display:"block",
            background:"linear-gradient(135deg,#7c6fff 0%,#00d4ff 50%,#ff6bcd 100%)",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
            backgroundSize:"200% auto",animation:"gradShift 4s linear infinite",
          }}>Jana.</span>
        </h1>

        <div style={{
          fontFamily:"'DM Mono',monospace",fontSize:13,letterSpacing:".15em",textTransform:"uppercase",
          color:"#00d4ff",marginBottom:22,display:"flex",alignItems:"center",gap:12,
        }}>
          <span style={{ width:40,height:1,background:"#00d4ff",display:"inline-block" }}/>
          BCA 6th Sem · MAKAUT University · West Bengal
        </div>

        <p style={{ fontSize:17,lineHeight:1.85,color:"rgba(232,228,240,0.52)",maxWidth:520,fontWeight:300,marginBottom:44 }}>
          Building full-stack web experiences with React, Node.js, MongoDB &amp; Express.
          Turning ideas into real, working products — one commit at a time.
        </p>

        <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
          <GlowBtn onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})}>
            View Projects &nbsp;→
          </GlowBtn>
          <GhostBtn href="https://github.com/janapunya" target="_blank">
            GitHub Profile
          </GhostBtn>
        </div>
      </div>

      <FloatingCard />
    </section>
  );
}

/* ─────────────────────────── BUTTONS ──────────────────────── */
function GlowBtn({ children, onClick, href, target }) {
  const [hov, setHov] = useState(false);
  const s = {
    display:"inline-flex",alignItems:"center",gap:10,
    background:"linear-gradient(135deg,#7c6fff,#6052e0)",
    color:"#fff",fontSize:14,fontWeight:600,padding:"14px 30px",borderRadius:12,
    border:"none",cursor:"none",fontFamily:"'Space Grotesk',sans-serif",
    textDecoration:"none",
    boxShadow: hov ? "0 0 48px rgba(124,111,255,0.7),0 0 90px rgba(124,111,255,0.25)" : "0 0 30px rgba(124,111,255,0.4),0 0 60px rgba(124,111,255,0.15)",
    transform: hov ? "translateY(-3px)" : "translateY(0)",
    transition:"all .3s",
  };
  const props = { style:s, onMouseEnter:()=>setHov(true), onMouseLeave:()=>setHov(false) };
  return href
    ? <a href={href} target={target} {...props}>{children}</a>
    : <button onClick={onClick} {...props}>{children}</button>;
}

function GhostBtn({ children, href, target }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={target} style={{
      display:"inline-flex",alignItems:"center",gap:10,
      background: hov ? "rgba(124,111,255,0.12)" : "transparent",
      color:"#e8e4f0",fontSize:14,fontWeight:500,padding:"14px 30px",borderRadius:12,
      border:`1px solid ${hov ? "rgba(124,111,255,0.6)" : "rgba(124,111,255,0.3)"}`,
      cursor:"none",fontFamily:"'Space Grotesk',sans-serif",textDecoration:"none",
      transform: hov ? "translateY(-3px)" : "translateY(0)",
      transition:"all .25s",
    }} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      {children}
    </a>
  );
}

/* ─────────────────────────── SKILLS ───────────────────────── */
function SkillCard({ skill, index }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(12);
  const [hov, setHov] = useState(false);

  return (
    <div ref={ref} onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHov(false); }}
      onMouseEnter={() => setHov(true)}
      style={{
        background: hov ? "#16162a" : "#0e0e1c",
        border: `1px solid ${hov ? "rgba(124,111,255,0.5)" : "rgba(124,111,255,0.18)"}`,
        borderRadius:16,padding:"22px 16px",textAlign:"center",cursor:"none",
        boxShadow: hov ? "0 20px 40px rgba(124,111,255,0.25),0 0 0 1px rgba(124,111,255,0.35)" : "none",
        transformStyle:"preserve-3d",transition:"background .25s,border-color .25s,box-shadow .25s",
        animationDelay: `${index * 60}ms`,
      }}>
      <span style={{ fontSize:28,marginBottom:10,display:"block",
        filter: hov ? "drop-shadow(0 0 10px rgba(124,111,255,0.5))" : "none",transition:"filter .25s" }}>
        {skill.icon}
      </span>
      <span style={{ display:"block",fontSize:13,fontWeight:600,color: hov ? "#e8e4f0" : "#c4c0d8",marginBottom:4,transition:"color .25s" }}>
        {skill.name}
      </span>
      <span style={{ fontSize:10,color:"#6868a0",fontFamily:"'DM Mono',monospace",letterSpacing:".08em" }}>
        {skill.cat}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ position:"relative",zIndex:2,padding:"100px 60px" }}>
      <SectionLabel>What I Work With</SectionLabel>
      <SectionTitle><Grad>Tech</Grad> Stack</SectionTitle>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:14,perspective:800 }}>
        {SKILLS.map((sk, i) => <SkillCard key={sk.name} skill={sk} index={i} />)}
      </div>
    </section>
  );
}

/* ─────────────────────────── PROJECT CARD ─────────────────── */
function ProjectCard({ project, featured }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(featured ? 4 : 8);
  const [hov, setHov] = useState(false);

  const badgeColor = {
    "Featured":"rgba(124,111,255,0.15)", "Clone":"rgba(0,212,255,0.12)",
    "Full Stack":"rgba(255,107,205,0.12)", "Web Design":"rgba(74,222,128,0.12)",
  };
  const badgeText = {
    "Featured":"#a78bfa","Clone":"#67e8f9","Full Stack":"#f9a8d4","Web Design":"#86efac",
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove}
      onMouseLeave={() => { onMouseLeave(); setHov(false); }}
      onMouseEnter={() => setHov(true)}
      style={{
        gridColumn: featured ? "span 2" : "span 1",
        background:"#0e0e1c",
        border:`1px solid ${hov ? "rgba(124,111,255,0.4)" : "rgba(124,111,255,0.15)"}`,
        borderRadius:20,overflow:"hidden",cursor:"none",
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hov ? `0 30px 60px ${project.glow},0 0 0 1px rgba(124,111,255,0.25)` : "0 4px 20px rgba(0,0,0,0.3)",
        transformStyle:"preserve-3d",transition:"transform .4s cubic-bezier(.23,1,.32,1),box-shadow .4s,border-color .3s",
      }}>

      {/* Visual area */}
      <div style={{ position:"relative",height: featured ? 260 : 190,overflow:"hidden",
        background:`radial-gradient(ellipse at 30% 50%, ${project.glow}, transparent 60%),
        linear-gradient(135deg, #0e0e1c 0%, #060610 100%)` }}>
        {/* Grid */}
        <div style={{ position:"absolute",inset:0,
          backgroundImage:`linear-gradient(rgba(124,111,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,111,255,0.05) 1px,transparent 1px)`,
          backgroundSize:"32px 32px" }}/>
        {/* Extra glow */}
        <div style={{ position:"absolute",width:200,height:200,borderRadius:"50%",
          background:`radial-gradient(circle,${project.glow},transparent)`,
          bottom:-50,right:-40,filter:"blur(30px)" }}/>
        {/* Title watermark */}
        <div style={{ position:"absolute",bottom:-8,left:16,
          fontFamily:"'Syne',sans-serif",fontSize: featured ? "4.5rem" : "3rem",
          fontWeight:800,color:"rgba(255,255,255,0.06)",letterSpacing:"-.04em",userSelect:"none",
          textTransform:"uppercase" }}>{project.title}</div>

        {/* Hover overlay */}
        <div style={{
          position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",gap:12,
          background:"rgba(6,6,16,0.72)",backdropFilter:"blur(6px)",
          opacity: hov ? 1 : 0, transition:"opacity .3s",
        }}>
          <a href={project.link} target="_blank" rel="noreferrer" style={{
            background:"rgba(124,111,255,0.9)",color:"#fff",border:"none",borderRadius:9,
            padding:"11px 22px",fontSize:13,fontWeight:600,cursor:"none",
            fontFamily:"'Space Grotesk',sans-serif",textDecoration:"none",
          }}>View on GitHub →</a>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: featured ? "26px 30px" : "20px 24px" }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12 }}>
          <span style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".12em",
            textTransform:"uppercase",padding:"4px 12px",borderRadius:100,
            background: badgeColor[project.badge] || "rgba(124,111,255,0.1)",
            color: badgeText[project.badge] || "#a78bfa",
            border:`1px solid ${(badgeText[project.badge] || "#a78bfa")}33`,
          }}>
            {project.featured ? "✦ " : ""}{project.badge}
          </span>
        </div>
        <div style={{ fontFamily:"'Syne',sans-serif",fontSize: featured ? "1.45rem" : "1.2rem",
          fontWeight:800,color:"#e8e4f0",marginBottom:10,letterSpacing:"-.02em" }}>
          {project.title}
        </div>
        <p style={{ fontSize:14,color:"rgba(232,228,240,0.48)",lineHeight:1.7,fontWeight:300,marginBottom:18 }}>
          {project.desc}
        </p>
        <div style={{ display:"flex",gap:7,flexWrap:"wrap" }}>
          {project.stack.map(s => (
            <span key={s} style={{
              fontFamily:"'DM Mono',monospace",fontSize:11,padding:"4px 12px",borderRadius:6,
              background: hov ? "rgba(124,111,255,0.1)" : "rgba(255,255,255,0.04)",
              border:`1px solid ${hov ? "rgba(124,111,255,0.3)" : "rgba(255,255,255,0.09)"}`,
              color: hov ? "rgba(200,195,255,0.85)" : "rgba(232,228,240,0.55)",
              transition:"all .3s",
            }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ position:"relative",zIndex:2,padding:"100px 60px",background:"rgba(14,14,28,0.4)" }}>
      <SectionLabel>Selected Work</SectionLabel>
      <SectionTitle>Featured <Grad>Projects</Grad></SectionTitle>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,perspective:1000 }}>
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} featured={p.featured} />)}
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ──────────────────────── */
function ContactCard({ icon, label, val, href, bg }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      background: hov ? "#16162a" : "#0e0e1c",
      border:`1px solid ${hov ? "rgba(124,111,255,0.45)" : "rgba(124,111,255,0.18)"}`,
      borderRadius:16,padding:"22px 18px",textDecoration:"none",cursor:"none",
      transform: hov ? "translateY(-8px)" : "translateY(0)",
      boxShadow: hov ? "0 24px 44px rgba(124,111,255,0.22)" : "none",
      textAlign:"left",display:"block",transition:"all .3s",
    }} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{ width:44,height:44,borderRadius:11,background:bg,display:"flex",alignItems:"center",
        justifyContent:"center",fontSize:20,marginBottom:14 }}>{icon}</div>
      <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"#6868a0",marginBottom:5 }}>{label}</div>
      <div style={{ fontSize:13,fontWeight:600,color:"#e8e4f0" }}>{val}</div>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" style={{
      position:"relative",zIndex:2,padding:"120px 60px",
      background:"linear-gradient(135deg,#0a0820 0%,#060610 100%)",overflow:"hidden",
    }}>
      <div style={{ position:"absolute",top:-200,left:"50%",transform:"translateX(-50%)",
        width:800,height:600,background:"radial-gradient(ellipse,rgba(124,111,255,0.1),transparent 70%)",
        pointerEvents:"none" }}/>
      <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
        <SectionLabel style={{ justifyContent:"center" }}>Let's Connect</SectionLabel>
        <h2 style={{
          fontFamily:"'Syne',sans-serif",fontSize:"clamp(3rem,6vw,5.2rem)",fontWeight:800,
          letterSpacing:"-.04em",lineHeight:.93,marginBottom:24,
          background:"linear-gradient(135deg,#fff 0%,rgba(255,255,255,.55) 100%)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
        }}>Let's build<br/>something great.</h2>
        <p style={{ fontSize:16,color:"rgba(232,228,240,0.42)",fontWeight:300,marginBottom:52,lineHeight:1.7 }}>
          Open to internships, freelance projects and collaborations.<br/>Reach out — I'd love to hear from you.
        </p>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:44 }}>
          <ContactCard icon="⌥" label="GitHub" val="github.com/janapunya" href="https://github.com/janapunya" bg="rgba(255,255,255,0.08)" />
          <ContactCard icon="in" label="LinkedIn" val="punya-brata-jana" href="https://www.linkedin.com/in/punya-brata-jana-01837627b" bg="rgba(0,119,181,0.18)" />
          <ContactCard icon="◎" label="Instagram" val="@punya.brata" href="https://www.instagram.com/punya.brata" bg="rgba(225,48,108,0.14)" />
        </div>
        <GlowBtn href="https://punyabratajana.online" target="_blank">
          Visit Live Portfolio &nbsp;↗
        </GlowBtn>
      </div>
    </section>
  );
}

/* ─────────────────────────── HELPERS ──────────────────────── */
function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",
      color:"#7c6fff",marginBottom:14,display:"flex",alignItems:"center",gap:12 }}>
      <span style={{ width:24,height:1,background:"#7c6fff",display:"inline-block" }}/>
      {children}
    </div>
  );
}
function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:800,
      letterSpacing:"-.03em",lineHeight:1.05,marginBottom:52,color:"#e8e4f0" }}>
      {children}
    </h2>
  );
}
function Grad({ children }) {
  return (
    <span style={{ background:"linear-gradient(135deg,#7c6fff,#00d4ff)",
      WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
      {children}
    </span>
  );
}

/* ─────────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer style={{
      position:"relative",zIndex:2,borderTop:"1px solid rgba(124,111,255,0.15)",
      padding:"26px 60px",display:"flex",alignItems:"center",justifyContent:"space-between",
      background:"rgba(6,6,16,0.8)",backdropFilter:"blur(20px)",
    }}>
      <div style={{ fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:800,
        background:"linear-gradient(135deg,#7c6fff,#00d4ff)",
        WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>punya.dev</div>
      <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:"rgba(104,104,160,0.6)",letterSpacing:".08em" }}>
        © 2025 · Crafted with ♥ · punyabratajana.online
      </div>
    </footer>
  );
}

/* ─────────────────────────── ROOT ─────────────────────────── */
export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#060610;color:#e8e4f0;font-family:'Space Grotesk',sans-serif;overflow-x:hidden;cursor:none}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#060610}
        ::-webkit-scrollbar-thumb{background:rgba(124,111,255,0.4);border-radius:2px}
        @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(74,222,128,0.4)}50%{opacity:.7;box-shadow:0 0 0 7px rgba(74,222,128,0)}}
        @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
      `}</style>

      <Cursor />
      <ParticleCanvas />

      {/* Grain overlay */}
      <div style={{ position:"fixed",inset:0,zIndex:1,pointerEvents:"none",opacity:0.35,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }}/>

      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
