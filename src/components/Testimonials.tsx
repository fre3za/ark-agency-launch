import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom & Co.",
    text: "ARK Technologies completely transformed our Shopify store. Our page load time dropped by 60% and conversions jumped within the first month.",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "CEO, UrbanEdge Apparel",
    text: "Their SEO work was phenomenal. We went from page 3 to ranking in the top 5 for our key terms. Truly outstanding results.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Operations Lead, FreshNest",
    text: "Fast, professional, and incredibly thorough. They diagnosed and fixed critical issues we didn't even know we had. Highly recommend.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Co-founder, Luxe Home Co.",
    text: "The ongoing maintenance plan gives us complete peace of mind. Our store runs flawlessly and their support is always just a message away.",
    rating: 4,
  },
];

const Testimonials = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          What Our <span className="text-gradient">Clients</span> Say
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Don't just take our word for it — hear from the store owners we've helped grow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < t.rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground/30"
                  }
                />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
