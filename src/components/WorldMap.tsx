import { useEffect, useRef } from "react";

const DOTS_SPACING = 12;
const DOT_RADIUS = 1.5;

// Simplified world map coordinate boundaries (lat/lng to x/y)
// Each region is an array of [minLng, maxLng, minLat, maxLat]
const regions: { name: string; bounds: number[][]; highlight?: boolean }[] = [
  { name: "North America", bounds: [[200, 420, 60, 220]], highlight: true },
  { name: "South America", bounds: [[280, 400, 220, 420]] },
  { name: "Europe", bounds: [[440, 560, 60, 180]], highlight: true },
  { name: "Africa", bounds: [[430, 560, 180, 380]] },
  { name: "Asia", bounds: [[560, 780, 60, 280]], highlight: true },
  { name: "Oceania", bounds: [[700, 820, 280, 380]] },
];

const isInRegion = (x: number, y: number): { inRegion: boolean; highlight: boolean } => {
  for (const region of regions) {
    for (const [minX, maxX, minY, maxY] of region.bounds) {
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        return { inRegion: true, highlight: !!region.highlight };
      }
    }
  }
  return { inRegion: false, highlight: false };
};

const WorldMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let x = 0; x < w; x += DOTS_SPACING) {
        for (let y = 0; y < h; y += DOTS_SPACING) {
          const { inRegion, highlight } = isInRegion(x, y);
          if (!inRegion) continue;

          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const hover = dist < 80;

          ctx.beginPath();
          ctx.arc(x, y, hover ? DOT_RADIUS + 1 : DOT_RADIUS, 0, Math.PI * 2);

          if (highlight) {
            ctx.fillStyle = hover
              ? "hsla(168, 80%, 48%, 0.9)"
              : "hsla(168, 80%, 48%, 0.5)";
          } else {
            ctx.fillStyle = hover
              ? "hsla(200, 20%, 92%, 0.7)"
              : "hsla(200, 20%, 92%, 0.25)";
          }
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default WorldMap;
