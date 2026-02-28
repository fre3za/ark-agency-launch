const steps = [
  { num: "01", title: "Discovery", desc: "We analyze your store, understand your goals, and identify opportunities for growth." },
  { num: "02", title: "Strategy", desc: "We craft a tailored action plan covering technical fixes, SEO, and conversion optimization." },
  { num: "03", title: "Execution", desc: "Our team implements solutions with precision — from code-level fixes to design overhauls." },
  { num: "04", title: "Growth", desc: "We monitor, iterate, and optimize continuously to ensure sustained e-commerce success." },
];

const Process = () => (
  <section id="process" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">How We Work</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A structured approach that delivers predictable, exceptional results.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="glass rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-[0_0_20px_hsl(168_80%_48%/0.1)] transition-all duration-300">
            <div className="text-5xl font-heading font-bold text-primary/15 mb-4">{s.num}</div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
