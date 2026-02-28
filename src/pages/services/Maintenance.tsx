import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, RefreshCw, Shield, BarChart3, CheckCircle } from "lucide-react";

const features = [
  "Regular theme and app updates",
  "Security patches and vulnerability fixes",
  "Performance monitoring and optimization",
  "Backup management and disaster recovery",
  "Content updates and product management",
  "Monthly health reports and analytics",
  "Priority support and quick response times",
  "Proactive issue detection and prevention",
];

const plans = [
  { name: "Basic", hours: "5 hrs/mo", desc: "For stores that need light maintenance and monitoring." },
  { name: "Standard", hours: "15 hrs/mo", desc: "For growing stores that need regular updates and optimization." },
  { name: "Premium", hours: "30 hrs/mo", desc: "For high-traffic stores requiring dedicated ongoing support." },
];

const MaintenancePage = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="text-primary" size={32} />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Store <span className="text-gradient">Maintenance</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Ongoing store upkeep, updates, and performance monitoring to keep everything running smoothly. We handle the tech so you can focus on sales.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: RefreshCw, title: "Regular Updates", desc: "Keep your theme, apps, and integrations current." },
              { icon: Shield, title: "Security", desc: "Proactive protection against vulnerabilities." },
              { icon: BarChart3, title: "Monitoring", desc: "24/7 uptime and performance tracking." },
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
              <h2 className="font-heading text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <ScrollReveal key={f} delay={i * 60}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-foreground/80 text-sm">{f}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-6">Maintenance Plans</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((p, i) => (
                  <ScrollReveal key={p.name} delay={i * 120}>
                    <div className="glass rounded-xl p-6 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] transition-all duration-300 hover:-translate-y-1">
                      <h3 className="font-heading text-xl font-bold mb-1">{p.name}</h3>
                      <p className="text-gradient font-semibold text-sm mb-3">{p.hours}</p>
                      <p className="text-muted-foreground text-sm">{p.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <Link to="/get-quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary">
                Get a Maintenance Quote <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default MaintenancePage;
