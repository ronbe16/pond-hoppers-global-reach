import { Link } from "react-router-dom";
import HeroImage from "@/assets/images/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Base Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(90deg, 
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

      {/* Blob 1 - Top-Left Orange */}
      <div
        className="absolute z-[1] animate-morph-blob-1
          w-[350px] h-[350px] -top-[100px] -left-[50px]
          md:w-[600px] md:h-[600px] md:-top-[200px] md:-left-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(226, 117, 70, 0.5) 0%, rgba(240, 135, 90, 0.25) 50%, transparent 100%)`,
          filter: 'blur(80px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
        }}
      />

      {/* Blob 2 - Bottom-Left Navy */}
      <div
        className="absolute z-[1] animate-morph-blob-2
          w-[300px] h-[300px] -bottom-[80px] left-[5%]
          md:w-[500px] md:h-[500px] md:-bottom-[150px] md:left-[10%]"
        style={{
          background: `radial-gradient(circle, rgba(23, 45, 77, 0.4) 0%, rgba(23, 45, 77, 0.15) 50%, transparent 100%)`,
          filter: 'blur(70px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}
      />

      {/* Blob 3 - Center-Left Coral */}
      <div
        className="absolute z-[1] animate-morph-blob-3
          w-[280px] h-[280px] top-[40%] left-[10%]
          md:w-[450px] md:h-[450px] md:top-[30%] md:left-[20%]"
        style={{
          background: `radial-gradient(circle, rgba(251, 161, 123, 0.45) 0%, rgba(251, 161, 123, 0.2) 50%, transparent 100%)`,
          filter: 'blur(65px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-10 md:px-[60px] h-full flex items-center w-full">
        <div className="max-w-[580px]">
          <h1 
            className="font-serif font-bold text-[48px] md:text-[76px] leading-[1.1] mb-7"
            style={{ color: '#172d4d' }}
          >
            Moving Lives<br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #e27546 0%, #f0875a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Across Borders
            </span>
          </h1>
          
          <p 
            className="font-sans text-[18px] md:text-[21px] leading-[1.7] mb-12 py-2"
            style={{ 
              color: '#3e3e3e',
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(5px)'
            }}
          >
            Trusted international movers making your relocation seamless and stress-free. 
            We handle the complexities so you can focus on your new beginning.
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <Link
              to="/contact"
              className="inline-block text-center text-[17px] font-semibold text-white px-10 py-5 rounded-[10px] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #e27546 0%, #f0875a 100%)',
                boxShadow: '0 12px 35px rgba(226, 117, 70, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 18px 50px rgba(226, 117, 70, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(226, 117, 70, 0.4)';
              }}
            >
              Get Your Free Quote →
            </Link>
            
            <Link
              to="/services"
              className="inline-block text-center text-[17px] font-semibold px-10 py-5 rounded-[10px] border-2 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:bg-[#172d4d] hover:text-white"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#172d4d',
                borderColor: '#172d4d',
                backdropFilter: 'blur(10px)'
              }}
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
