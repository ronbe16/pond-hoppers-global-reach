import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection
          headline="Ready to Start Your Journey?"
          subtext="Let us take the stress out of your move. Contact us today for a personalized quote and expert advice."
          buttonText="Get Your Free Quote Today"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
