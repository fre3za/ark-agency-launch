import { Link } from "react-router-dom";
import arkLogo from "@/assets/ark-logo.png";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={arkLogo} alt="ARK Technologies" className="h-10 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Your trusted Shopify agency for store development, optimization, and growth. We turn e-commerce challenges into opportunities.
          </p>
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
            <Link to="/why-us" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/process" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Our Process</Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 ARK Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
