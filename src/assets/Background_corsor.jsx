import { useRef, useEffect } from "react";

export default function Background_corsor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const rpos    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const animate = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.12;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rpos.current.x + "px";
        ringRef.current.style.top  = rpos.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      if (dotRef.current)  { dotRef.current.style.width = "18px"; dotRef.current.style.height = "18px"; }
      if (ringRef.current) { ringRef.current.style.width = "56px"; ringRef.current.style.height = "56px"; ringRef.current.style.borderColor = "rgba(124,111,255,0.8)"; }
    };
    const shrink = () => {
      if (dotRef.current)  { dotRef.current.style.width = "10px"; dotRef.current.style.height = "10px"; }
      if (ringRef.current) { ringRef.current.style.width = "38px"; ringRef.current.style.height = "38px"; ringRef.current.style.borderColor = "rgba(124,111,255,0.5)"; }
    };

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  return (
    <>
      {/* hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* dot */}
      <div
        ref={dotRef}
        className="fixed z-[9999] rounded-full pointer-events-none"
        style={{
          width: 10, height: 10,
          background: "#7c6fff",
          transform: "translate(-50%,-50%)",
          transition: "width .2s, height .2s",
        }}
      />

      {/* ring */}
      <div
        ref={ringRef}
        className="fixed z-[9998] rounded-full pointer-events-none"
        style={{
          width: 38, height: 38,
          border: "1.5px solid rgba(124,111,255,0.5)",
          transform: "translate(-50%,-50%)",
          transition: "width .25s, height .25s, border-color .25s",
        }}
      />
    </>
  );
}
