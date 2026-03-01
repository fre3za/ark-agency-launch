import { useEffect, useRef, useState } from "react";
import worldMapSrc from "@/assets/world-map.png";

const WorldMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = container.offsetWidth * dpr;
      canvas.height = container.offsetHeight * dpr;
    };
    resize();

    // Draw hover glow + ripple effects over the image
    const draw = (t: number) => {
      const cw = container.offsetWidth;
      const ch = container.offsetHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      if (mx > 0 && my > 0) {
        // Glow under cursor
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
        grad.addColorStop(0, "hsla(168, 80%, 48%, 0.25)");
        grad.addColorStop(0.5, "hsla(168, 80%, 48%, 0.08)");
        grad.addColorStop(1, "hsla(168, 80%, 48%, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, cw, ch);

        // Ripple rings
        for (let i = 0; i < 3; i++) {
          const wave = ((t * 0.04) + i * 40) % 120;
          const alpha = Math.max(0, 0.18 - wave * 0.0015);
          ctx.beginPath();
          ctx.arc(mx, my, wave, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(168, 80%, 48%, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Floating particles near cursor
        for (let i = 0; i < 8; i++) {
          const angle = (t * 0.001 + i * 0.785);
          const dist = 30 + 20 * Math.sin(t * 0.002 + i);
          const px = mx + Math.cos(angle) * dist;
          const py = my + Math.sin(angle) * dist;
          const r = 1.5 + Math.sin(t * 0.003 + i) * 0.8;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(168, 80%, 48%, ${0.4 + 0.2 * Math.sin(t * 0.003 + i)})`;
          ctx.fill();
        }
      }

      // Subtle ambient floating particles
      for (let i = 0; i < 12; i++) {
        const px = (cw * 0.1) + ((i * 97 + t * 0.008) % (cw * 0.8));
        const py = (ch * 0.1) + ((i * 67 + Math.sin(t * 0.001 + i) * 30) % (ch * 0.8));
        const r = 1 + 0.5 * Math.sin(t * 0.002 + i * 2);
        const alpha = 0.15 + 0.1 * Math.sin(t * 0.002 + i);
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(168, 80%, 48%, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };

    const onResize = () => { resize(); };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <img
        src={worldMapSrc}
        alt="World map"
        className={`absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ${imageLoaded ? "opacity-60" : ""}`}
        onLoad={() => setImageLoaded(true)}
        draggable={false}
        style={{ pointerEvents: "none", filter: "brightness(1.2) contrast(1.1)" }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default WorldMap;
