import arkLogo from "@/assets/ark-logo.png";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={arkLogo} alt="ARK Technologies" className="h-8 w-auto" />
          <span className="font-heading font-semibold text-sm text-foreground/80">ARK Technologies</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 ARK Technologies. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
