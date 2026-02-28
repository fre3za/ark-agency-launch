const steps = [
  { num: "01", title: "Discovery", desc: "We learn about your business, goals, and challenges." },
  { num: "02", title: "Strategy", desc: "We create a tailored plan to achieve your objectives." },
  { num: "03", title: "Execution", desc: "Our team builds, optimizes, and launches with precision." },
  { num: "04", title: "Growth", desc: "Ongoing support, analytics, and iteration to scale results." },
];

const Process = () => (
  <section id="process" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">How We Work</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A structured approach that delivers predictable, exceptional results.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="relative">
            <div className="text-6xl font-heading font-bold text-primary/10 mb-4">{s.num}</div>
            <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-primary/20 to-transparent translate-x-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
