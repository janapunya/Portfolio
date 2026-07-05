import { useEffect, useRef, useState } from "react";
import { CONTACT_LINKS } from "./data";

function ContactCard({ item }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-2xl p-5 no-underline block transition-all duration-300"
      style={{
        background: hov ? "#16162a" : "#0e0e1c",
        border:     `1px solid ${hov ? "rgba(124,111,255,0.45)" : "rgba(124,111,255,0.18)"}`,
        transform:  hov ? "translateY(-8px)" : "translateY(0)",
        boxShadow:  hov ? "0 24px 44px rgba(124,111,255,0.22)" : "none",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3.5"
        style={{ background: item.bg }}
      >
        {item.icon}
      </div>
      <div className="text-[10px] font-mono tracking-widest uppercase text-[#6868a0] mb-1">
        {item.label}
      </div>
      <div className="text-sm font-semibold text-[#e8e4f0]">{item.val}</div>
    </a>
  );
}

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative z-10 px-10 md:px-16 py-28 overflow-hidden opacity-0 transition-opacity duration-700"
      style={{ background: "linear-gradient(135deg,#0a0820 0%,#060610 100%)" }}
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-200px", left: "50%", transform: "translateX(-50%)",
          width: 800, height: 600,
          background: "radial-gradient(ellipse,rgba(124,111,255,0.1),transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Label */}
        <div className="inline-flex items-center gap-3 text-purple-400 text-[11px] tracking-[0.2em] uppercase font-mono mb-4 justify-center">
          <span className="w-6 h-px bg-purple-500 inline-block" />
          Let's Connect
        </div>

        {/* Headline */}
        <h2
          className="font-black tracking-[-0.04em] leading-[0.93] mb-6"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(3rem,6vw,5.2rem)",
            background: "linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.55) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Let's build<br />something great.
        </h2>

        <p className="text-base text-[rgba(232,228,240,0.42)] font-light mb-14 leading-relaxed">
          Open to internships, freelance projects and collaborations.<br />
          Reach out — I'd love to hear from you.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-3 gap-3.5 mb-11">
          {CONTACT_LINKS.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>

        {/* Portfolio CTA */}
       
      </div>
    </section>
  );
}
