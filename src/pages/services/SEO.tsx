import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp, FileText, Globe, CheckCircle } from "lucide-react";

const services = [
  "Technical SEO audits and fixes",
  "Keyword research and content strategy",
  "Meta tag and schema markup optimization",
  "Page speed and Core Web Vitals improvement",
  "Internal linking structure optimization",
  "Product page SEO optimization",
  "Blog content creation and optimization",
  "Competitor analysis and gap identification",
];

const SEOPage = () => (
  <PageLayout>
    <section className="py-24 bg-background min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="text-primary" size={32} />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                SEO <span className="text-gradient">Optimization</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Data-driven SEO strategies to boost your store's visibility, drive organic traffic, and increase revenue without relying solely on paid ads.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Globe, title: "Technical SEO", desc: "Fix crawl errors, improve site speed, and optimize structure." },
              { icon: FileText, title: "Content Strategy", desc: "Targeted content that ranks and converts visitors." },
              { icon: TrendingUp, title: "Analytics", desc: "Track rankings, traffic, and ROI with detailed reports." },
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
              <h2 className="font-heading text-2xl font-bold mb-6">Our SEO Services</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {services.map((s, i) => (
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
            <div className="glass rounded-xl p-8 mb-16">
              <h2 className="font-heading text-2xl font-bold mb-4">Why SEO Matters for Shopify</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over 50% of all website traffic comes from organic search. By investing in SEO, you're building a sustainable traffic source that compounds over time. Unlike paid ads, SEO continues to deliver results long after the initial investment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Shopify-specific SEO strategies account for the platform's unique architecture, ensuring your store ranks for high-intent commercial keywords that drive sales.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <Link to="/get-quote" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary">
                Start Your SEO Strategy <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default SEOPage;
