import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { toast } from "@/hooks/use-toast";

const serviceTypes = ["Troubleshooting", "Maintenance", "SEO Optimization", "CRO"];
const budgets = ["Under $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];

const GetQuote = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", website: "",
    service: "", budget: "", shopifyPlan: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/sales@arktechify.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "New Quote Request from ArkTechify Website",
        }),
      });
      if (res.ok) {
        toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours." });
        setForm({ name: "", email: "", phone: "", business: "", website: "", service: "", budget: "", shopifyPlan: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Get a Quote</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Let's <span className="text-gradient">Chat</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and we'll get back to you with a custom quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Are You On Shopify Plus Plan?</label>
                <select name="shopifyPlan" value={form.shopifyPlan} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Business Name</label>
                <input name="business" value={form.business} onChange={handleChange} placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Website URL</label>
                <input name="website" value={form.website} onChange={handleChange} placeholder="https://yourstore.com"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Type</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option value="">Select...</option>
                  {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">What Is Your Budget?</label>
                <select name="budget" value={form.budget} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option value="">Select...</option>
                  {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">What's On Your Mind?</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="The more details you share, the better we can explore the right approach for you."
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={submitting}
                  className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary disabled:opacity-50">
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetQuote;
