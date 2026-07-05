const ITEMS = [
  "React", "Node.js", "MongoDB", "Express", "JavaScript",
  "HTML5", "CSS3", "EJS", "Git", "Python", "MySQL", "REST APIs",
  "MERN Stack", "Full Stack Dev", "BCA · MAKAUT",
];

export default function Rolling_text() {
  const doubled = [...ITEMS, ...ITEMS]; // seamless loop

  return (
    <div className="w-full overflow-hidden py-3 border-y border-purple-500/15 bg-[#0e0e1c]/60 backdrop-blur-sm">
      <div
        className="inline-flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase font-mono text-slate-400">
            {item}
            <span className="text-purple-500 text-[7px]">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
