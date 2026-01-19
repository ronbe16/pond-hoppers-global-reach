import { Link } from "react-router-dom";
import HeroImage from "@/assets/images/hero-family-unpacking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Base Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to right, 
            rgba(241, 237, 225, 0.95) 0%, 
            rgba(241, 237, 225, 0.85) 30%, 
            rgba(241, 237, 225, 0.4) 60%, 
            transparent 100%)`
        }}
      />

      {/* Mobile Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1] md:hidden"
        style={{
          background: `linear-gradient(180deg, 
            rgba(241, 237, 225, 0.95) 0%, 
            rgba(241, 237, 225, 0.90) 40%, 
            rgba(241, 237, 225, 0.70) 100%)`
        }}
      />

      {/* Animated Blob 1 - Top-Left Orange */}
      <div 
        className="absolute z-[1] w-[350px] h-[350px] md:w-[600px] md:h-[600px] -top-[100px] -left-[50px] md:-top-[200px] md:-left-[100px] animate-morph-blob-1"
        style={{
          background: `radial-gradient(circle, rgba(226, 117, 70, 0.5) 0%, rgba(240, 135, 90, 0.25) 50%, transparent 100%)`,
          filter: 'blur(80px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />

      {/* Animated Blob 2 - Bottom-Left Navy */}
      <div 
        className="absolute z-[1] w-[300px] h-[300px] md:w-[500px] md:h-[500px] -bottom-[80px] left-[5%] md:-bottom-[150px] md:left-[10%] animate-morph-blob-2"
        style={{
          background: `radial-gradient(circle, rgba(23, 45, 77, 0.4) 0%, rgba(23, 45, 77, 0.15) 50%, transparent 100%)`,
          filter: 'blur(70px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      {/* Animated Blob 3 - Center-Left Coral */}
      <div 
        className="absolute z-[1] w-[280px] h-[280px] md:w-[450px] md:h-[450px] top-[40%] left-[10%] md:top-[30%] md:left-[20%] animate-morph-blob-3"
        style={{
          background: `radial-gradient(circle, rgba(251, 161, 123, 0.45) 0%, rgba(251, 161, 123, 0.2) 50%, transparent 100%)`,
          filter: 'blur(65px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
      />

      {/* Content Area */}
      <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-10 md:px-[60px] h-full flex items-center">
        <div className="max-w-[580px]">
          {/* Headline */}
          <h1 className="font-serif font-semibold text-[42px] md:text-[56px] leading-[1.2] mb-5">
            <span className="block text-navy">Moving Lives</span>
            <span 
              className="block"
              style={{
                background: 'linear-gradient(135deg, #e27546 0%, #f0875a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Across Borders
            </span>
          </h1>

          {/* Subtitle - NO background */}
          <p className="font-sans text-base md:text-lg text-darkGrey leading-relaxed mb-8 max-w-xl">
            Trusted international movers making your relocation seamless and stress-free. 
            We handle the complexities so you can focus on your new beginning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center font-sans text-base font-medium text-white px-7 py-3.5 rounded transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #e27546 0%, #f0875a 100%)',
                boxShadow: '0 4px 12px rgba(226, 117, 70, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(226, 117, 70, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(226, 117, 70, 0.25)';
              }}
            >
              Get Your Free Quote →
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center font-sans text-base font-medium text-navy bg-transparent border-2 border-navy px-[26px] py-3 rounded transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
