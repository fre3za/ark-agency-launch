import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section id="contact" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12 md:p-16 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Scale</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Let's discuss how ARK Technologies can transform your Shopify store into a growth engine.
          </p>
          <a
            href="mailto:hello@arktechnologies.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary"
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
