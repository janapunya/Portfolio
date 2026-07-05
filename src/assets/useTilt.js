import { useRef, useCallback } from "react";

/**
 * Returns { ref, onMouseMove, onMouseLeave }
 * Attach to any element for a realistic 3-D tilt effect on hover.
 */
export function useTilt(intensity = 14) {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const r   = el.getBoundingClientRect();
      const x   = e.clientX - r.left;
      const y   = e.clientY - r.top;
      const rx  = ((y - r.height / 2) / r.height) * intensity;
      const ry  = -((x - r.width / 2) / r.width) * intensity;
      el.style.transform  = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
      el.style.transition = "transform 0.05s";
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = "";
      ref.current.style.transition = "transform 0.5s cubic-bezier(.23,1,.32,1)";
    }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
