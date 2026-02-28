import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="dark">
    <Navbar />
    <Hero />
    <Services />
    <WhyUs />
    <Process />
    <Testimonials />
    <CTA />
    <Footer />
  </main>
);

export default Index;
