import { useRef, useEffect } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();

    const onResize = () => resize();
    const onMove   = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    const COLORS = ["124,111,255", "0,212,255", "232,228,240"];

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x     = Math.random() * W;
        this.y     = Math.random() * H;
        this.size  = Math.random() * 1.4 + 0.3;
        this.vx    = (Math.random() - 0.5) * 0.18;
        this.vy    = (Math.random() - 0.5) * 0.18;
        this.alpha = Math.random() * 0.45 + 0.08;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const d  = Math.hypot(dx, dy);
        if (d < 110) { this.x -= dx * 0.014; this.y -= dy * 0.014; }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 130; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      /* connection lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < 105) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,111,255,${0.09 * (1 - d / 105)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => { p.update(); p.draw(); });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
