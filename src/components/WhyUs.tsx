import { Shield, Zap, Users, Award, CheckCircle } from "lucide-react";

const stats = [
  { value: "150+", label: "Stores Launched" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Avg Response Time" },
  { value: "5+", label: "Years Experience" },
];

const bullets = [
  "Shopify-focused experts with deep platform knowledge",
  "Fast turnaround — most issues resolved within 24 hours",
  "Transparent pricing with no hidden fees",
  "Proven track record of boosting store performance",
  "Dedicated support and ongoing communication",
  "End-to-end solutions from setup to scale",
];

const WhyUs = () => (
  <section id="why-us" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why ARK Technologies</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">E-Commerce</span> Success
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We don't just fix stores — we transform them into high-performing revenue engines. Our team combines technical expertise with strategic insight to deliver measurable results.
          </p>
          <div className="space-y-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                <span className="text-foreground/80 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
