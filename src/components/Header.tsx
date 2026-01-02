import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLogo from "@/assets/logos/Pond_Hoppers_Main_logo_FINAL.png";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-brand-sm" : "bg-background"
      }`}
    >
      <nav className="container-brand flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={MainLogo}
            alt="Pond Hoppers International Movers"
            className="h-[75px] md:h-[88px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-sans text-[15px] transition-smooth ${
                location.pathname === link.href
                  ? "text-accent border-b-2 border-accent pb-0.5"
                  : "text-navy hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="brand" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-background transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-sans text-lg py-2 border-b border-border transition-smooth ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-navy hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="brand" className="mt-4 w-full" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
