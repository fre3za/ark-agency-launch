import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, MousePointer, Layers, CheckCircle } from "lucide-react";

const strategies = [
  "A/B testing for product pages and checkout flow",
  "Cart abandonment reduction strategies",
  "Product page layout and copy optimization",
  "Trust signal and social proof implementation",
  "Mobile experience optimization",
  "Checkout flow simplification",
  "Upsell and cross-sell strategy",
  "Heatmap and user behavior analysis",
];

const results = [
  { metric: "+45%", label: "Avg. Conversion Lift" },
  { metric: "-30%", label: "Cart Abandonment" },
  { metric: "+60%", label: "Revenue Per Visitor" },
];

const CROPage = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="text-primary" size={32} />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Conversion Rate <span className="text-gradient">Optimization</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Turn more visitors into paying customers. Our data-driven CRO strategies identify friction points and optimize every step of your customer journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 120}>
                <div className="glass rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] transition-all duration-300 hover:-translate-y-1">
                  <div className="font-heading text-3xl font-bold text-gradient mb-2">{r.metric}</div>
                  <div className="text-muted-foreground text-sm">{r.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Target, title: "Analyze", desc: "Deep dive into your funnel to find drop-off points." },
              { icon: Layers, title: "Test", desc: "A/B test changes to validate improvements." },
              { icon: MousePointer, title: "Optimize", desc: "Implement winning variations for maximum ROI." },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="glass rounded-xl p-6 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] transition-all duration-300 hover:-translate-y-1">
                  <s.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-6">CRO Strategies We Deploy</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {strategies.map((s, i) => (
                  <ScrollReveal key={s} delay={i * 60}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-foreground/80 text-sm">{s}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <Link to="/get-quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary">
                Boost Your Conversions <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CROPage;
