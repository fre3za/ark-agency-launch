import { Wrench, Settings, Search, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Troubleshooting",
    desc: "Quick diagnosis and resolution of Shopify store issues — from broken features to checkout errors.",
    href: "/services/troubleshooting",
  },
  {
    icon: Settings,
    title: "Maintenance",
    desc: "Ongoing store upkeep, updates, and performance monitoring to keep everything running smoothly.",
    href: "/services/maintenance",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies to boost your store's visibility and drive organic traffic.",
    href: "/services/seo",
  },
  {
    icon: BarChart3,
    title: "CRO",
    desc: "Conversion rate optimization that transforms visitors into paying customers.",
    href: "/services/cro",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive Shopify solutions tailored to accelerate your e-commerce success.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <Link
              to={s.href}
              className="group block p-8 rounded-xl glass hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(168_80%_48%/0.15),inset_0_1px_0_hsl(168_80%_48%/0.2)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(168_80%_48%/0.3)] transition-all duration-500">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
