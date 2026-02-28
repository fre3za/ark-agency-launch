import { ShoppingBag, Search, Code, Wrench, BarChart3, Palette } from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Store Setup & Design",
    desc: "Custom Shopify store design and development tailored to your brand identity.",
  },
  {
    icon: Code,
    title: "Custom Development",
    desc: "Liquid theme customization, app integrations, and bespoke functionality.",
  },
  {
    icon: Search,
    title: "SEO & Optimization",
    desc: "Drive organic traffic with technical SEO, speed optimization, and content strategy.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Support",
    desc: "Quick fixes, bug resolution, and ongoing maintenance for your store.",
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    desc: "Data-driven strategies to increase your store's conversion rate and revenue.",
  },
  {
    icon: Palette,
    title: "Theme Customization",
    desc: "Transform any Shopify theme to match your vision with pixel-perfect design.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          End-to-end Shopify solutions designed to help your business thrive online.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-xl glass hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
