import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, AlertTriangle, ShieldCheck, Zap, Clock, CheckCircle } from "lucide-react";

const issues = [
  "Checkout errors and payment failures",
  "Theme display bugs across devices",
  "App conflicts and broken integrations",
  "Slow page loading and performance issues",
  "404 errors and broken redirects",
  "Custom code conflicts and JavaScript errors",
  "Inventory sync issues",
  "Email notification failures",
];

const TroubleshootingPage = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="text-primary" size={32} />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Shopify <span className="text-gradient">Troubleshooting</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Quick diagnosis and resolution of Shopify store issues — from broken features to checkout errors. Our experts identify root causes and implement permanent fixes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: AlertTriangle, title: "Diagnose", desc: "We identify the root cause of your issue quickly." },
              { icon: ShieldCheck, title: "Fix", desc: "Permanent solutions, not temporary patches." },
              { icon: Zap, title: "Optimize", desc: "Prevent future issues with proactive measures." },
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
              <h2 className="font-heading text-2xl font-bold mb-6">Common Issues We Solve</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {issues.map((issue, i) => (
                  <ScrollReveal key={issue} delay={i * 60}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-foreground/80 text-sm">{issue}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-primary" size={18} />
                  <span className="font-heading font-semibold">Average resolution: under 24 hours</span>
                </div>
                <p className="text-muted-foreground text-sm">Most issues are diagnosed and fixed within the same business day.</p>
              </div>
              <Link to="/get-quote" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary whitespace-nowrap">
                Get Help Now <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default TroubleshootingPage;
