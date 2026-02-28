import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => (
  <section id="cta" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-12 md:p-16 relative overflow-hidden hover:border-primary/30 transition-all duration-500">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Scale</span> Your Store?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Let's discuss how ARK Technologies can help you achieve your e-commerce goals. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/schedule-call"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
