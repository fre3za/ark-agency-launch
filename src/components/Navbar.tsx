import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import arkLogo from "@/assets/ark-logo.png";

const serviceLinks = [
  { label: "Troubleshooting", href: "/services/troubleshooting" },
  { label: "Maintenance", href: "/services/maintenance" },
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "CRO", href: "/services/cro" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#", submenu: serviceLinks },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={arkLogo} alt="ARK Technologies" className="h-10 w-auto" />
        </Link>

        {/* Desktop - centered */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.submenu ? (
              <div
                key={l.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {l.label} <ChevronDown size={14} className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                </button>
                {serviceOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56">
                    <div className="glass rounded-xl overflow-hidden border border-primary/20 shadow-[0_8px_32px_hsl(168_80%_48%/0.15)] animate-fade-in">
                      {l.submenu.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => setServiceOpen(false)}
                          className="block px-5 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all border-b border-border/30 last:border-0"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <Link
          to="/get-quote"
          className="hidden md:inline-flex px-5 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/50 px-4 pb-4 animate-fade-in">
          {navLinks.map((l) =>
            l.submenu ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {l.label} <ChevronDown size={14} className={`transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServiceOpen && (
                  <div className="pl-4 border-l border-primary/20 ml-2 mb-2">
                    {l.submenu.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => { setOpen(false); setMobileServiceOpen(false); }}
                        className="block py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/get-quote"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center px-5 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
