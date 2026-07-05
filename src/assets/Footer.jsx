export default function Footer() {
  return (
    <footer
      className="relative z-10 flex items-center justify-between px-10 md:px-16 py-6 backdrop-blur-xl"
      style={{
        borderTop: "1px solid rgba(124,111,255,0.15)",
        background: "rgba(6,6,16,0.8)",
      }}
    >
      <div
        className="font-black text-base bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        style={{ fontFamily: "'Syne',sans-serif" }}
      >
        punya.dev
      </div>

      <div className="text-[11px] font-mono tracking-wide text-[rgba(104,104,160,0.6)]">
        © 2025 · Crafted with ♥ · punyabratajana.online
      </div>
    </footer>
  );
}
