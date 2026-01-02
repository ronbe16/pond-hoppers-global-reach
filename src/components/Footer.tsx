import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import MainLogo from "@/assets/logos/Pond_Hoppers_Main_logo_FINAL.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Country Guides", href: "/destinations" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/contact" },
];

const serviceLinks = [
  { name: "Household Moves", href: "/services" },
  { name: "Corporate Relocations", href: "/services" },
  { name: "Storage Solutions", href: "/services" },
  { name: "Packing Services", href: "/services" },
  { name: "Pet Relocation", href: "/services" },
  { name: "Vehicle Shipping", href: "/services" },
];

const contactInfo = [
  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, text: "info@pondhoppers.com", href: "mailto:info@pondhoppers.com" },
  { icon: MapPin, text: "123 Logistics Way, Port City, NY 10001" },
  { icon: Clock, text: "Mon-Fri, 9am - 6pm EST" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-cream text-darkGrey">
      <div className="container-brand py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Logo & Social */}
          <div className="text-center md:text-left">
            <img
              src={MainLogo}
              alt="Pond Hoppers International Movers"
              className="w-[195px] h-auto mx-auto md:mx-0"
            />
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-navy hover:text-accent transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold text-sm text-navy uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-darkGrey hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold text-sm text-navy uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-darkGrey hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold text-sm text-navy uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 justify-center md:justify-start">
                  <item.icon size={16} className="text-navy mt-0.5 flex-shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[13px] text-darkGrey hover:text-accent transition-smooth"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[13px] text-darkGrey">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy/10">
        <div className="container-brand py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-darkGrey/70">
            © 2025 Pond Hoppers International Movers. All rights reserved.
          </p>
          <div className="flex gap-2 text-[11px] text-darkGrey/70">
            <Link to="/privacy" className="hover:text-accent transition-smooth">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-accent transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
