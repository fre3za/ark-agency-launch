import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { toast } from "@/hooks/use-toast";
import { Calendar, Clock, Video } from "lucide-react";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

const ScheduleCall = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Call Scheduled!", description: `Your demo call is booked for ${form.date} at ${form.time}.` });
      setForm({ name: "", email: "", date: "", time: "", notes: "" });
    }, 1500);
  };

  return (
    <PageLayout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Schedule a Call</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Book a <span className="text-gradient">Demo</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Schedule a free 30-minute consultation with our Shopify experts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Video, title: "Video Call", desc: "Google Meet or Zoom" },
                { icon: Clock, title: "30 Minutes", desc: "Quick & focused" },
                { icon: Calendar, title: "Flexible", desc: "Pick your time slot" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Time</label>
                  <select name="time" value={form.time} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                    <option value="">Select a time...</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Notes (Optional)</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={4}
                  placeholder="Anything you'd like us to prepare for?"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-y" />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary disabled:opacity-50">
                {submitting ? "Booking..." : "Book My Call"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleCall;
