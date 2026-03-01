import { useEffect, useRef } from "react";

// Simplified world map as dot grid using a bitmap approach
// Each row is a string where '#' = land, '.' = water
// This is a ~80x40 grid representing the world
const MAP_DATA = [
  "................................................................................",
  "................................................................................",
  "....................####.....########..........................................",
  "...................######...##########....####.................................",
  "..................########.###########...######..........####..................",
  ".................#########.###########..########........######.................",
  "................##########.###########..#########......########................",
  "...............###########.###########..##########....##########...............",
  "..............############.###########..###########..############..............",
  ".............############..###########..###########.##############.............",
  "............#############..##########...##########..###############............",
  "...........##############..##########..##########...################...........",
  "..........###############..#########...#########....################...........",
  ".........################..#########..#########.....#################..........",
  "........####...##########..########...########......#################..........",
  ".......###.....#########...########..#######........################...........",
  "......##......#########....#######...######..........###############...........",
  ".............#########.....######....#####............##############...........",
  "............########.......#####.....####..............############............",
  "...........#######.........####.....###.................##########.............",
  "..........######...........###......##...................########..............",
  ".........#####.............##.......#.....................######...............",
  "........####..............##................................####...............",
  ".......####...............#..................................##................",
  "......####.......................................................#####........",
  ".....####......................................................#######.......",
  "....####......................................................########.......",
  "....###......................................................#########.......",
  "...###......................................................##########.......",
  "...##.......................................................#########........",
  "...#.........................................................########........",
  "..............................................................######.........",
  "...............................................................####..........",
  "................................................................##...........",
  "................................................................................",
  "................................................................................",
  "................................................................................",
  "................................................................................",
  "................................................................................",
  "................................................................................",
];

const ROWS = MAP_DATA.length;
const COLS = MAP_DATA[0].length;

// Highlighted regions (approximate grid coords): NA, Europe, Asia
const isHighlighted = (col: number, row: number): boolean => {
  // North America
  if (col >= 5 && col <= 22 && row >= 2 && row <= 18) return true;
  // Europe
  if (col >= 32 && col <= 45 && row >= 2 && row <= 14) return true;
  // Asia (partial)
  if (col >= 46 && col <= 70 && row >= 2 && row <= 20) return true;
  return false;
};

const WorldMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();

    const draw = (t: number) => {
      timeRef.current = t;
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw * 2, ch * 2);
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const dotSpacingX = cw / COLS;
      const dotSpacingY = ch / ROWS;
      const baseRadius = Math.min(dotSpacingX, dotSpacingY) * 0.22;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (MAP_DATA[row][col] !== '#') continue;

          const x = (col + 0.5) * dotSpacingX;
          const y = (row + 0.5) * dotSpacingY;

          const dx = mx - x;
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const hover = dist < 60;

          const highlight = isHighlighted(col, row);

          // Pulse animation for highlighted dots
          const pulse = highlight
            ? 0.15 * Math.sin(t * 0.002 + col * 0.08 + row * 0.06)
            : 0.05 * Math.sin(t * 0.001 + col * 0.1 + row * 0.1);

          const radius = hover
            ? baseRadius * 1.8
            : baseRadius * (1 + pulse);

          ctx.beginPath();
          ctx.arc(x, y, Math.max(radius, 0.5), 0, Math.PI * 2);

          if (highlight) {
            const alpha = hover ? 0.95 : 0.45 + pulse * 0.8;
            ctx.fillStyle = `hsla(168, 80%, 48%, ${alpha})`;
            if (hover) {
              ctx.shadowColor = "hsla(168, 80%, 48%, 0.6)";
              ctx.shadowBlur = 12;
            } else {
              ctx.shadowColor = "transparent";
              ctx.shadowBlur = 0;
            }
          } else {
            const alpha = hover ? 0.6 : 0.18 + pulse * 0.3;
            ctx.fillStyle = `hsla(200, 20%, 80%, ${alpha})`;
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      // Ripple wave from mouse
      if (mx > 0 && my > 0) {
        const wave = (t * 0.05) % 120;
        ctx.beginPath();
        ctx.arc(mx, my, wave, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(168, 80%, 48%, ${Math.max(0, 0.15 - wave * 0.0012)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
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
