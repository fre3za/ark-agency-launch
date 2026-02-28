import { ArrowRight, MessageSquare, FileSearch, Code, Rocket, BarChart3, RefreshCw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import AnimatedBackground from "./AnimatedBackground";

const steps = [
  { num: "01", title: "Discovery", desc: "We analyze your store, understand your goals, and identify opportunities for growth.", icon: FileSearch },
  { num: "02", title: "Strategy", desc: "We craft a tailored action plan covering technical fixes, SEO, and conversion optimization.", icon: MessageSquare },
  { num: "03", title: "Execution", desc: "Our team implements solutions with precision — from code-level fixes to design overhauls.", icon: Code },
  { num: "04", title: "Growth", desc: "We monitor, iterate, and optimize continuously to ensure sustained e-commerce success.", icon: Rocket },
];

const details = [
  {
    title: "Comprehensive Store Audit",
    desc: "We perform a deep dive into every aspect of your Shopify store — from page speed and mobile responsiveness to SEO health and conversion funnels. Nothing is overlooked.",
    points: ["Performance profiling", "SEO gap analysis", "UX/UI review", "Competitor benchmarking"],
  },
  {
    title: "Custom Roadmap & Timeline",
    desc: "Based on our audit findings, we create a prioritized roadmap with clear milestones, deliverables, and timelines so you always know what's happening and when.",
    points: ["Phased implementation plan", "Weekly progress updates", "Transparent task tracking", "Flexible adjustments"],
  },
  {
    title: "Continuous Optimization",
    desc: "Launch is just the beginning. We continually monitor performance metrics and iterate on strategies to keep your store growing month over month.",
    points: ["A/B testing", "Analytics monitoring", "Conversion tracking", "Monthly performance reports"],
  },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects are completed within 2-4 weeks depending on scope. Emergency troubleshooting is typically resolved within 24 hours." },
  { q: "Do you work with stores outside of Shopify?", a: "We specialize exclusively in Shopify and Shopify Plus to ensure deep expertise and the best possible results." },
  { q: "What if I need ongoing support?", a: "We offer flexible maintenance plans that include regular updates, monitoring, and priority support." },
  { q: "How do you measure success?", a: "We track key metrics like conversion rate, page speed, organic traffic, and revenue growth with detailed monthly reports." },
];

const Process = () => (
  <section id="process" className="bg-background">
    {/* Steps */}
    <div className="py-24 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A structured approach that delivers predictable, exceptional results every time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 120}>
              <div className="glass rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(168_80%_48%/0.25)] transition-all duration-500">
                  <s.icon className="text-primary" size={26} />
                </div>
                <div className="text-4xl font-heading font-bold text-primary/15 mb-2">{s.num}</div>
                <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>

    {/* Detailed Sections */}
    <div className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Deep Dive</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              What to <span className="text-gradient">Expect</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8 max-w-4xl mx-auto">
          {details.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 100}>
              <div className="glass rounded-xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{d.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{d.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {d.points.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <CheckCircle className="text-primary shrink-0" size={14} />
                      <span className="text-foreground/80 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>

    {/* FAQ */}
    <div className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Frequently <span className="text-gradient">Asked</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 80}>
              <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <h3 className="font-heading font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link to="/get-quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Process;
