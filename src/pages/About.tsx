import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Lightbulb, Award, ShoppingBag, Globe, Heart, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every decision we make is backed by data and aimed at measurable outcomes for your store." },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead of e-commerce trends to give your store a competitive edge." },
  { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We build lasting partnerships, not just projects." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every line of code and strategy." },
];

const milestones = [
  { year: "2021", title: "Founded", desc: "ARK Technologies was born with a mission to empower Shopify merchants worldwide." },
  { year: "2022", title: "50+ Stores", desc: "Reached our first major milestone helping over 50 stores optimize their performance." },
  { year: "2023", title: "Global Expansion", desc: "Expanded our team and client base across USA, UK, Canada, and India." },
  { year: "2024", title: "100+ Clients", desc: "Surpassed 100 happy clients with a 98% satisfaction rate." },
  { year: "2025", title: "Industry Leader", desc: "Recognized as a top Shopify agency for troubleshooting and optimization." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & CEO", desc: "10+ years in e-commerce with a passion for Shopify excellence." },
  { name: "Sarah Chen", role: "Lead Developer", desc: "Full-stack expert specializing in Shopify Liquid and custom apps." },
  { name: "James Wilson", role: "SEO Strategist", desc: "Data-driven SEO specialist with proven e-commerce results." },
  { name: "Priya Sharma", role: "CRO Specialist", desc: "Conversion optimization expert focused on revenue growth." },
];

const AboutPage = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Floating Shopify bags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-[0.04]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i * 0.8}s`,
            }}
          >
            <ShoppingBag size={60 + i * 10} className="text-primary" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About ARK Technologies</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              We Build <span className="text-gradient">E-Commerce</span> Success Stories
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ARK Technologies is a Shopify-focused agency dedicated to helping merchants build, optimize, and scale their online stores. From troubleshooting critical issues to driving conversions, we're your trusted growth partner.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { icon: ShoppingBag, value: "150+", label: "Stores Launched" },
            { icon: Users, value: "98%", label: "Client Satisfaction" },
            { icon: Globe, value: "12+", label: "Countries Served" },
            { icon: TrendingUp, value: "3x", label: "Avg Revenue Growth" },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="glass rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] transition-all duration-300 group">
                <s.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div className="font-heading text-3xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Our Values */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="glass rounded-xl p-8 text-center hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(168_80%_48%/0.12)] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(168_80%_48%/0.25)] transition-all duration-500">
                  <v.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Timeline */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Journey</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto mb-24">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.year} delay={i * 100}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary font-heading font-bold text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-primary/20 mt-2" />}
                </div>
                <div className="glass rounded-xl p-6 flex-1 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-heading font-semibold text-lg mb-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Team */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">The People Behind ARK</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="glass rounded-xl p-8 text-center hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-semibold mb-1">{t.name}</h3>
                <p className="text-primary text-xs font-semibold mb-2">{t.role}</p>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Work <span className="text-gradient">Together?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Let's discuss how we can help your Shopify store reach its full potential.
              </p>
              <Link to="/get-quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
