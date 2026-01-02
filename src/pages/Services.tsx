import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Home, 
  Briefcase, 
  Package, 
  Box, 
  Heart, 
  Truck,
  FileText,
  Shield,
  Globe,
  Boxes,
  Calendar,
  Users,
  Check,
  ArrowRight,
  Star,
  ChevronRight
} from "lucide-react";
import servicesHero from "@/assets/images/services-hero.jpg";

const mainServices = [
  {
    icon: Home,
    title: "Household Moves",
    description: "Complete door-to-door moving services for families relocating internationally. We handle everything from packing to customs clearance, ensuring your belongings arrive safely at your new home.",
    features: [
      "Full packing and unpacking services",
      "Custom crating for fragile items",
      "Furniture disassembly and reassembly",
      "Storage solutions available"
    ]
  },
  {
    icon: Briefcase,
    title: "Corporate Relocations",
    description: "Streamlined employee relocation programs that minimize downtime and ensure smooth transitions for your team. We coordinate every aspect of corporate moves with precision and care.",
    features: [
      "Dedicated relocation coordinator",
      "Group move management",
      "Policy consultation",
      "Cost management and reporting"
    ]
  },
  {
    icon: Package,
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities available both short-term and long-term. Perfect for temporary housing transitions or when you need flexible moving timelines.",
    features: [
      "Climate-controlled facilities",
      "24/7 security monitoring",
      "Flexible storage periods",
      "Easy access when needed"
    ]
  },
  {
    icon: Box,
    title: "Professional Packing",
    description: "Expert packing services using high-quality materials designed for international shipping. Our trained packers ensure everything is protected for the long journey ahead.",
    features: [
      "Quality packing materials included",
      "Inventory management",
      "Labeling and organization",
      "Specialized packing for valuables"
    ]
  },
  {
    icon: Heart,
    title: "Pet Relocation",
    description: "Your furry family members deserve special care. We coordinate all aspects of international pet transport, from veterinary documentation to comfortable travel arrangements.",
    features: [
      "Veterinary coordination",
      "Pet travel crate provision",
      "Airline booking and documentation",
      "Quarantine arrangement support"
    ]
  },
  {
    icon: Truck,
    title: "Vehicle Shipping",
    description: "Safe, reliable international vehicle shipping for cars, motorcycles, and boats. We handle export documentation, shipping logistics, and delivery to your new location.",
    features: [
      "Container and roll-on/roll-off options",
      "Full insurance coverage",
      "Customs documentation assistance",
      "Door-to-door delivery"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Contact us for a free, no-obligation assessment. We'll discuss your specific needs and provide a detailed quote."
  },
  {
    number: "02",
    title: "Plan Your Move",
    description: "Your dedicated coordinator creates a customized moving plan, handling all logistics, documentation, and scheduling."
  },
  {
    number: "03",
    title: "Pack & Ship",
    description: "Our professional team carefully packs, loads, and ships your belongings using secure, tracked international shipping."
  },
  {
    number: "04",
    title: "Settle In",
    description: "We deliver to your new address, help with unpacking, and ensure everything arrives safely and on time."
  }
];

const additionalServices = [
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert handling of all customs documentation, duties, and regulations for smooth border crossings."
  },
  {
    icon: Shield,
    title: "Insurance Services",
    description: "Comprehensive coverage options to protect your belongings throughout the entire moving process."
  },
  {
    icon: Globe,
    title: "Destination Services",
    description: "Orientation, temporary housing assistance, and settling-in support at your new location."
  },
  {
    icon: Boxes,
    title: "Specialty Items",
    description: "Custom handling for pianos, artwork, antiques, and other valuable or delicate possessions."
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "We work around your timeline with options for expedited shipping or long-term storage."
  },
  {
    icon: Users,
    title: "Expat Support",
    description: "Guidance on visa processes, local services, schools, and community connections in your new country."
  }
];

const testimonials = [
  {
    quote: "Pond Hoppers made our move from New York to London completely stress-free. Their team was professional, efficient, and handled our belongings with such care. Highly recommend!",
    name: "Sarah Mitchell",
    location: "New York → London",
    initials: "SM"
  },
  {
    quote: "We've used Pond Hoppers for three corporate relocations now. Their attention to detail and seamless coordination makes all the difference for our employees.",
    name: "David Chen",
    location: "Tech Company, San Francisco",
    initials: "DC"
  },
  {
    quote: "From packing our home to helping us settle in Singapore, every step was handled perfectly. Even our dog arrived happy and healthy. Thank you, Pond Hoppers!",
    name: "Emma Rodriguez",
    location: "Texas → Singapore",
    initials: "ER"
  }
];

const faqs = [
  {
    question: "How far in advance should I book my international move?",
    answer: "We recommend booking 6-8 weeks in advance for household moves and 8-12 weeks for corporate relocations. This allows time for proper planning, documentation, and scheduling. However, we can accommodate shorter timelines when needed."
  },
  {
    question: "What items cannot be shipped internationally?",
    answer: "Prohibited items typically include hazardous materials, perishable foods, firearms, and certain plants. We'll provide a complete list during your consultation and help you understand customs regulations for your destination country."
  },
  {
    question: "How do you calculate moving costs?",
    answer: "Costs depend on volume/weight of shipment, distance, services required (packing, storage, etc.), and destination. We provide transparent, itemized quotes with no hidden fees after assessing your specific needs."
  },
  {
    question: "Is my shipment insured during the move?",
    answer: "Yes, all shipments include basic coverage. We also offer comprehensive insurance options for complete peace of mind. Your coordinator will discuss coverage levels during planning."
  },
  {
    question: "How long does an international move typically take?",
    answer: "Transit times vary by destination and shipping method. Ocean freight typically takes 4-8 weeks, while air freight takes 1-2 weeks. We provide accurate timelines during your quote and track shipments throughout."
  },
  {
    question: "Do you handle customs clearance?",
    answer: "Absolutely. We manage all customs documentation, duties, and clearance processes. Our expertise ensures smooth border crossings and helps avoid delays or complications."
  }
];

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${servicesHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-white/85" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-sans text-[13px] text-navy hover:text-orange transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-navy" />
              <span className="font-sans text-[13px] text-orange">Services</span>
            </nav>
            
            <h1 className="font-serif font-bold text-[36px] md:text-[48px] text-navy leading-tight mb-6">
              Comprehensive Moving Solutions for <span className="text-orange">Every Need</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-darkGrey leading-relaxed max-w-3xl mx-auto">
              From household relocations to corporate transfers, we provide tailored moving services designed to make your international move seamless and stress-free.
            </p>
          </div>
        </section>

        {/* Services Intro Section */}
        <section className="py-[60px] md:py-[80px] bg-white">
          <div className="container-brand max-w-[800px] text-center">
            <span className="font-sans font-bold text-[11px] text-orange uppercase tracking-[1.5px] mb-4 block">
              OUR SERVICES
            </span>
            <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy mb-6">
              Everything You Need for a Successful International Move
            </h2>
            <p className="font-sans text-base text-darkGrey leading-[1.8]">
              Whether you're moving your family to a new country or relocating your entire business, Pond Hoppers offers comprehensive services tailored to your unique needs. We handle every detail so you can focus on your next adventure.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-[60px] md:py-[80px] bg-cream">
          <div className="container-brand">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.08)] hover:translate-y-[-6px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
                  >
                    <IconComponent className="w-[52px] h-[52px] text-orange mb-6" />
                    <h3 className="font-serif font-bold text-[24px] text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[15px] text-darkGrey leading-[1.8] mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-darkGrey">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 font-sans font-medium text-orange hover:underline transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-[60px] md:py-[80px] bg-white">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-orange uppercase tracking-[1.5px] mb-4 block">
                HOW IT WORKS
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                Your Move, Simplified in 4 Steps
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <span className="font-serif font-bold text-[52px] text-orange mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="font-serif font-bold text-[22px] text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                    {step.description}
                  </p>
                  {/* Connecting line for desktop */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-orange/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-[60px] md:py-[80px] bg-cream">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-orange uppercase tracking-[1.5px] mb-4 block">
                ADDITIONAL SERVICES
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                Complete Support for Your International Move
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-lightGrey p-7 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:translate-y-[-3px] transition-all duration-300 text-center"
                  >
                    <IconComponent className="w-11 h-11 text-navy mx-auto mb-4" />
                    <h3 className="font-serif font-bold text-[20px] text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-[60px] md:py-[80px] bg-white">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-orange uppercase tracking-[1.5px] mb-4 block">
                CLIENT STORIES
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[10px] border border-cream shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange fill-orange" />
                    ))}
                  </div>
                  
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8] italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                      <span className="font-sans font-semibold text-navy text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-navy">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-[13px] text-darkGrey">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-[60px] md:py-[80px] bg-cream">
          <div className="container-brand max-w-[900px]">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-orange uppercase tracking-[1.5px] mb-4 block">
                QUESTIONS?
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                Frequently Asked Questions
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <AccordionTrigger className="font-sans font-semibold text-base text-navy hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-[15px] text-darkGrey leading-[1.8] pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          headline="Ready to Get Started?"
          subtext="Request a free quote today and discover how easy international moving can be with Pond Hoppers."
          buttonText="Get Your Free Quote"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
