import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import arkLogo from "@/assets/ark-logo.png";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <img src={arkLogo} alt="ArkTechify" className="h-20 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">Your trusted Shopify agency for store development, optimization, and growth. We turn e-commerce challenges into opportunities.</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <div className="space-y-2">
            <Link to="/services/troubleshooting" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Troubleshooting</Link>
            <Link to="/services/maintenance" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Maintenance</Link>
            <Link to="/services/seo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">SEO Optimization</Link>
            <Link to="/services/cro" className="block text-sm text-muted-foreground hover:text-primary transition-colors">CRO</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/why-us" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Why Us</Link>
            <Link to="/process" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Our Process</Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/terms-and-conditions" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms and Conditions</Link>
            <Link to="/privacy-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Location</h4>
          <div className="space-y-1 text-sm text-muted-foreground mb-6">
            <p className="font-medium text-foreground">Global Operations</p>
            <p>Headquarters: Chicago, IL, USA</p>
            <p>Operations: India</p>
            <p>Remote Team: Global</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ArkTechify. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {[
            { icon: Instagram, href: "https://www.instagram.com/arktechify?utm_source=qr&igsh=aHE0c2t4aDFiNzlv" },
            { icon: Linkedin, href: "https://www.linkedin.com/company/arktechify/" },
            { icon: Twitter, href: "https://x.com/Arktechify" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300">
              <Icon size={16} />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <a href="mailto:sales@arktechify.com" className="hover:text-primary transition-colors flex items-center gap-1">
            <Mail size={14} /> sales@arktechify.com
          </a>
          <span>|</span>
          <a href="tel:+1(570)240-3784" className="hover:text-primary transition-colors flex items-center gap-1">
            <Phone size={14} /> +1(570) 240-3784
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
