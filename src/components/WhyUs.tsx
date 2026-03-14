import { CheckCircle, Globe, Shield, Zap, Clock, Award, TrendingUp, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WorldMap from "./WorldMap";

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

const advantages = [
  { icon: Shield, title: "Certified Experts", desc: "Our team holds Shopify Partner certifications and stays current with the latest platform updates." },
  { icon: Zap, title: "Lightning Fast", desc: "We pride ourselves on rapid response times and quick turnarounds without sacrificing quality." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock monitoring and support ensures your store is always performing at its best." },
  { icon: Award, title: "Award-Winning", desc: "Recognized in the industry for delivering exceptional e-commerce solutions." },
  { icon: TrendingUp, title: "Growth Focused", desc: "Every strategy we implement is designed to drive revenue growth and long-term success." },
  { icon: Headphones, title: "Dedicated Manager", desc: "Get a dedicated project manager who understands your business inside and out." },
];

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "India", flag: "🇮🇳" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
];

const WhyUs = () => (
  <section id="why-us" className="bg-secondary/30">
    {/* Main Why Us */}
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why ArkTechify</p>
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
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">{s.value}</div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Advantages Grid */}
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Advantages</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We go beyond standard solutions to deliver exceptional value at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80}>
              <div className="glass rounded-xl p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(168_80%_48%/0.12)] transition-all duration-500 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(168_80%_48%/0.25)] transition-all duration-500">
                  <a.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>

    {/* World Map - Global Reach */}
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Global Presence</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Trusted <span className="text-gradient">Worldwide</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We work with Shopify merchants across the globe, delivering results that transcend borders.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative h-[420px] rounded-2xl overflow-hidden glass mb-10">
          <WorldMap />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {countries.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 80}>
              <div className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{c.flag}</div>
                <div className="text-foreground/80 text-sm font-medium">{c.name}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
