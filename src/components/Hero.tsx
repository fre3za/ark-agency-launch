import { useState } from "react";
import { Link } from "react-router-dom";
import WaveCanvas from "./WaveCanvas";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer"
      style={{ background: "var(--gradient-hero)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <WaveCanvas boosted={hovered} />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2
          className="font-heading font-900 tracking-tighter leading-none text-center whitespace-nowrap transition-all duration-700"
          style={{
            fontSize: "clamp(3rem, 10vw, 10rem)",
            color: hovered ? "hsl(168 80% 48% / 0.08)" : "hsl(168 80% 48% / 0.04)",
            fontWeight: 900,
            textShadow: hovered ? "0 0 80px hsl(168 80% 48% / 0.15)" : "none",
          }}
        >
          ARKTECHIFY
        </h2>
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: hovered ? 1 : 0,
          background: "radial-gradient(circle at 50% 50%, hsl(168 80% 48% / 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading font-800 text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Your Trusted{" "}
          <span className="text-gradient">Shopify</span>
          <br />
          Growth Partner
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
          We build, optimize, and scale Shopify stores that drive real results.
          From troubleshooting to SEO, we handle the tech so you can focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/get-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
