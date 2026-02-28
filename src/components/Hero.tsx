import WaveCanvas from "./WaveCanvas";
import arkLogo from "@/assets/ark-logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <WaveCanvas />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2
          className="font-heading font-900 tracking-tighter leading-none text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(3rem, 10vw, 10rem)",
            color: "hsl(168 80% 48% / 0.04)",
            fontWeight: 900,
          }}
        >
          ARK TECHNOLOGY
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-background/40 backdrop-blur-sm border border-border/30 flex items-center justify-center p-4 animate-float">
            <img src={arkLogo} alt="ARK Technologies Logo" className="w-full h-full object-contain" />
          </div>
        </div>

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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary"
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
          >
            View Our Services
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
