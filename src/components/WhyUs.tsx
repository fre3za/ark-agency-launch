import { Shield, Zap, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Shopify Experts",
    desc: "Deep expertise across Shopify's entire ecosystem — themes, apps, and APIs.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "We deliver quality work on tight deadlines without cutting corners.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "A responsive team that treats your store like their own.",
  },
  {
    icon: Award,
    title: "Proven Results",
    desc: "Track record of increased conversions, traffic, and revenue for our clients.",
  },
];

const WhyUs = () => (
  <section id="why-us" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Built for <span className="text-gradient">Growth</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We're not just developers — we're growth partners invested in your success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
