import { useState, useEffect } from "react";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 md:px-16 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060f]/90 border-b border-purple-500/25 backdrop-blur-xl shadow-lg shadow-purple-950/20"
          : "bg-[#06060f]/40 border-b border-purple-500/10 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <div className="font-black text-xl tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent select-none"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        punya.dev
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {NAV_ITEMS.map((id) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-[#6868a0] text-[11px] tracking-widest uppercase transition-colors duration-200 hover:text-white bg-transparent border-none cursor-pointer font-mono"
            >
              {id}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => window.open("https://drive.google.com/drive/folders/1M7DoKyIAmxdK7vSMQcfxjTKQLbIHzA70?usp=sharing")}
        className="bg-gradient-to-r from-purple-500 to-violet-400 text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full border-none cursor-pointer transition-all duration-300 hover:shadow-[0_0_32px_rgba(124,111,255,0.7)] hover:-translate-y-0.5 shadow-[0_0_18px_rgba(124,111,255,0.35)]"
      >
        Hire Me ✦
      </button>
    </nav>
  );
}
