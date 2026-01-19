import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/images/hero-family-moving.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with White Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Content */}
      <div className="container-brand relative z-10 py-20 md:py-28">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="heading-xl mb-6">
            <span className="text-navy block">Moving Lives</span>
            <span className="text-accent block">Across Borders</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-darkGrey leading-relaxed mb-8 max-w-xl">
            Trusted international movers making your relocation seamless and stress-free. 
            We handle the complexities so you can focus on your new beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote →</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-navy text-navy hover:bg-navy hover:text-white">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
