import PageLayout from "@/components/PageLayout";
import { Calendar, Clock, Video, ExternalLink } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/arktechify-sales/arktechify-sales-call-30-mins";

const ScheduleCall = () => {
  return (
    <PageLayout>
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Schedule a Call</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Book a <span className="text-gradient">Meeting</span>
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

            <div className="glass rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Ready to <span className="text-gradient">Connect?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Click below to open our scheduling page and pick a time that works best for you.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-primary"
              >
                Schedule on Calendly <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ScheduleCall;
