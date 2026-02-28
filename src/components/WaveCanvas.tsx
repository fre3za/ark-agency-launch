import { useEffect, useRef } from "react";

interface WaveCanvasProps {
  boosted?: boolean;
}

const WaveCanvas = ({ boosted = false }: WaveCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boostedRef = useRef(boosted);

  useEffect(() => {
    boostedRef.current = boosted;
  }, [boosted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawWave = (
      yBase: number, amplitude: number, frequency: number,
      speed: number, color: string, lineWidth: number
    ) => {
      const w = canvas.offsetWidth;
      const b = boostedRef.current;
      const amp = b ? amplitude * 1.8 : amplitude;
      const spd = b ? speed * 1.5 : speed;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      for (let x = 0; x <= w; x += 2) {
        const y = yBase +
          Math.sin(x * frequency + time * spd) * amp +
          Math.sin(x * frequency * 0.5 + time * spd * 1.3) * amp * 0.5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const b = boostedRef.current;
      const alpha = b ? 0.18 : 0.08;

      drawWave(h * 0.55, 30, 0.003, 0.8, `rgba(0, 200, 180, ${alpha})`, 2);
      drawWave(h * 0.5, 40, 0.004, 1.0, `rgba(0, 200, 180, ${alpha + 0.04})`, 1.5);
      drawWave(h * 0.6, 25, 0.005, 1.2, `rgba(50, 220, 160, ${alpha + 0.02})`, 1);
      drawWave(h * 0.45, 35, 0.003, 0.6, `rgba(0, 150, 200, ${alpha})`, 2);
      drawWave(h * 0.65, 20, 0.006, 1.4, `rgba(0, 180, 220, ${alpha - 0.02})`, 1.5);
      drawWave(h * 0.7, 15, 0.004, 0.9, `rgba(50, 200, 150, ${alpha - 0.03})`, 1);

      const particleCount = b ? 50 : 30;
      for (let i = 0; i < particleCount; i++) {
        const px = (Math.sin(time * 0.3 + i * 2.1) * 0.5 + 0.5) * w;
        const py = (Math.cos(time * 0.2 + i * 1.7) * 0.5 + 0.5) * h;
        const size = Math.sin(time + i) * 1.5 + (b ? 3 : 2);
        ctx.beginPath();
        ctx.arc(px, py, Math.max(size, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 200, 180, ${(b ? 0.2 : 0.1) + Math.sin(time + i) * 0.05})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-500"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default WaveCanvas;
