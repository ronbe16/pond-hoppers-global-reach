import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Check, 
  FileCheck, 
  DollarSign, 
  Heart, 
  GraduationCap, 
  Home, 
  Briefcase, 
  Globe, 
  Bus,
  Star,
  MapPin,
  Sun,
  Users,
  Clock,
  Coins,
  Languages,
  Thermometer,
  ChevronRight
} from "lucide-react";

import destinationSpain from "@/assets/images/destination-spain.jpg";

// Quick facts about Spain
const quickFacts = [
  { icon: MapPin, label: "Capital", value: "Madrid" },
  { icon: Users, label: "Population", value: "47.4 Million" },
  { icon: Languages, label: "Language", value: "Spanish (Castilian)" },
  { icon: Coins, label: "Currency", value: "Euro (€)" },
  { icon: Clock, label: "Time Zone", value: "CET (UTC+1)" },
  { icon: Thermometer, label: "Climate", value: "Mediterranean" }
];

// Key information sections
const keyInfo = [
  {
    icon: FileCheck,
    title: "Visa & Immigration",
    description: "Spain offers various visa options for non-EU citizens including the Non-Lucrative Visa for retirees, work visas, and the popular Digital Nomad Visa introduced in 2023.",
    details: [
      "Non-lucrative visa for those with passive income",
      "Work visa requires job offer from Spanish employer",
      "Digital Nomad Visa for remote workers",
      "NIE number required for all residents",
      "EU/EEA citizens have freedom of movement"
    ]
  },
  {
    icon: DollarSign,
    title: "Cost of Living",
    description: "Spain offers one of the most affordable costs of living in Western Europe, especially outside major cities like Madrid and Barcelona.",
    details: [
      "Monthly rent: €600-1,500 (city dependent)",
      "Utilities: €100-150/month average",
      "Groceries: €200-400/month per person",
      "30-50% cheaper than UK/Germany",
      "Excellent value for quality of life"
    ]
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Spain has an excellent public healthcare system (SNS) ranked among the best in the world. Private insurance is affordable and widely used by expats.",
    details: [
      "Public healthcare via Social Security contributions",
      "Private insurance from €50-150/month",
      "High-quality hospitals and clinics",
      "Many English-speaking doctors in expat areas",
      "Pharmacies are widespread and accessible"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Spain offers free public education, quality international schools, and world-renowned universities with lower tuition than many other European countries.",
    details: [
      "Free public schooling (3-16 years)",
      "International schools in major cities",
      "Bilingual programs available",
      "Top universities including IE Business School",
      "Growing number of English-taught programs"
    ]
  },
  {
    icon: Home,
    title: "Housing",
    description: "The Spanish property market offers diverse options from city apartments to coastal villas. Rental and buying processes are straightforward with proper documentation.",
    details: [
      "Rental contracts typically 1-5 years",
      "2-3 months deposit usually required",
      "Golden Visa for property investment €500k+",
      "Popular areas: Costa del Sol, Valencia, Barcelona",
      "Lower prices in smaller cities and rural areas"
    ]
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Spain's job market is growing, particularly in tech, tourism, and renewable energy. Remote work culture has expanded significantly since 2020.",
    details: [
      "Strong tech sector in Barcelona & Madrid",
      "Tourism is a major employer",
      "Autónomo (self-employed) registration required",
      "Average salary: €24,000-35,000/year",
      "14 monthly payments traditional in Spain"
    ]
  },
  {
    icon: Globe,
    title: "Culture & Lifestyle",
    description: "Famous for its relaxed pace of life, incredible cuisine, festivals, and warm social culture. The Spanish lifestyle emphasizes family, food, and enjoying life.",
    details: [
      "Siesta tradition still observed in smaller towns",
      "Late dinner times (9-10 PM typical)",
      "Rich festival calendar (Feria, Semana Santa)",
      "Emphasis on family and social gatherings",
      "Excellent wine, tapas, and Mediterranean diet"
    ]
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Spain has excellent infrastructure with high-speed AVE trains, affordable domestic flights, and reliable public transport in cities.",
    details: [
      "AVE high-speed rail connects major cities",
      "Metro systems in Madrid, Barcelona, Valencia",
      "Driving license exchange for some countries",
      "Affordable domestic flights",
      "Well-maintained highway network"
    ]
  }
];

// Popular regions
const regions = [
  {
    name: "Madrid",
    description: "Spain's vibrant capital offering world-class culture, business opportunities, and central location.",
    highlights: ["Business hub", "Cultural capital", "Central location"]
  },
  {
    name: "Barcelona",
    description: "Cosmopolitan Mediterranean city known for tech startups, architecture, and beach lifestyle.",
    highlights: ["Tech scene", "Beach lifestyle", "International community"]
  },
  {
    name: "Valencia",
    description: "Growing expat favorite combining affordability, beaches, and excellent quality of life.",
    highlights: ["Affordable", "Great weather", "Arts & Sciences"]
  },
  {
    name: "Costa del Sol",
    description: "Popular retirement destination with established expat communities and year-round sunshine.",
    highlights: ["Expat communities", "Golf courses", "300+ sunny days"]
  },
  {
    name: "Seville",
    description: "Andalusian charm with traditional Spanish culture, flamenco, and stunning architecture.",
    highlights: ["Traditional culture", "Lower costs", "Historic beauty"]
  },
  {
    name: "Basque Country",
    description: "Unique culture, world-renowned gastronomy, and green landscapes in northern Spain.",
    highlights: ["Gastronomy capital", "Green landscapes", "Unique culture"]
  }
];

// Spain-specific timeline
const spainTimeline = [
  {
    number: "1",
    timeframe: "4-6 Months Before",
    title: "Research & Documentation",
    description: "Begin visa process and research your destination",
    checklist: ["Apply for visa (if non-EU)", "Research regions", "Gather apostilled documents"]
  },
  {
    number: "2",
    timeframe: "2-3 Months Before",
    title: "Housing & Logistics",
    description: "Secure housing and arrange your move",
    checklist: ["Book moving services", "Find accommodation", "Plan travel arrangements"]
  },
  {
    number: "3",
    timeframe: "1 Month Before",
    title: "Final Preparations",
    description: "Complete packing and final arrangements",
    checklist: ["Complete packing", "Transfer money to Spanish bank", "Cancel local services"]
  },
  {
    number: "4",
    timeframe: "First Month in Spain",
    title: "Get Established",
    description: "Complete registration and settle in",
    checklist: ["Obtain NIE number", "Register with local authorities", "Set up utilities & banking"]
  }
];

// Testimonials
const testimonials = [
  {
    quote: "Moving to Valencia was the best decision we ever made. The quality of life here is incredible, and Pond Hoppers made the whole process so smooth.",
    name: "James & Sophie Williams",
    location: "UK → Valencia, Spain",
    initials: "JW"
  },
  {
    quote: "The Spain guide helped us understand everything from the NIE process to finding the right neighborhood in Barcelona. We felt prepared from day one.",
    name: "Maria Santos",
    location: "Brazil → Barcelona, Spain",
    initials: "MS"
  }
];

// Spain-specific FAQs
const spainFaqs = [
  {
    question: "Do I need to speak Spanish to live in Spain?",
    answer: "While you can get by with English in major tourist areas and expat communities, learning Spanish significantly improves your experience and opportunities. Most official processes require Spanish, though many areas have English-speaking services for expats."
  },
  {
    question: "How do I get an NIE number?",
    answer: "The NIE (Número de Identificación de Extranjero) is your foreigner identification number, required for virtually everything in Spain. You can apply at a police station with an Extranjería office, Spanish consulate abroad, or through a gestor (administrative agent). You'll need your passport, visa, proof of address, and the EX-15 form."
  },
  {
    question: "Can I work remotely in Spain?",
    answer: "Yes! Spain introduced the Digital Nomad Visa in 2023, allowing non-EU remote workers to live in Spain for up to 5 years. Requirements include working for non-Spanish companies, minimum income thresholds, and health insurance. EU citizens can work remotely without a special visa."
  },
  {
    question: "What's the healthcare system like?",
    answer: "Spain's public healthcare (SNS) is excellent and available to legal residents who contribute to Social Security. Many expats also take private insurance (€50-150/month) for faster access and English-speaking doctors. Private healthcare is high quality and affordable by European standards."
  },
  {
    question: "Is Spain family-friendly for expats?",
    answer: "Absolutely! Spain is known for being very family-oriented. Children are welcomed everywhere, there's free public education, excellent international schools in major cities, safe neighborhoods, and a culture that values family time. Many expat families cite the outdoor lifestyle and social environment as major benefits."
  },
  {
    question: "What are the best cities for expats in Spain?",
    answer: "Popular expat destinations include Madrid (business & culture), Barcelona (tech & Mediterranean lifestyle), Valencia (affordable & beach), Málaga/Costa del Sol (retirement & sunshine), and Seville (traditional Spain). Each offers different lifestyles, costs, and communities."
  },
  {
    question: "How does the Spanish tax system work?",
    answer: "Tax residents pay progressive income tax (19-47%) on worldwide income. The Beckham Law offers a flat 24% rate for qualifying new residents for 6 years. Non-residents pay tax only on Spanish income. Property owners pay IBI (property tax) and potentially wealth tax. We recommend consulting a Spanish tax advisor for your specific situation."
  }
];

const SpainGuide = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${destinationSpain})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
          <div className="container-brand relative z-10 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-sans text-[13px] text-primary hover:text-accent transition-smooth">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-primary/50" />
              <Link to="/destinations" className="font-sans text-[13px] text-primary hover:text-accent transition-smooth">
                Destinations
              </Link>
              <ChevronRight className="w-4 h-4 text-primary/50" />
              <span className="font-sans text-[13px] text-accent">Spain</span>
            </nav>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl">🇪🇸</span>
            </div>
            <h1 className="font-serif font-bold text-[36px] md:text-[48px] text-primary leading-tight mb-4 max-w-4xl mx-auto">
              Moving to <span className="text-accent">Spain</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              Your complete guide to embracing the Mediterranean lifestyle. From visa requirements to finding your perfect Spanish home, we cover everything you need to know.
            </p>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-10">
              <span className="eyebrow block mb-3">AT A GLANCE</span>
              <h2 className="heading-lg text-primary">Quick Facts About Spain</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-5 rounded-lg text-center"
                >
                  <fact.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {fact.label}
                  </p>
                  <p className="font-serif font-bold text-base text-primary">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="max-w-[900px] mx-auto">
              <div className="flex items-start gap-6">
                <Sun className="w-16 h-16 text-accent flex-shrink-0 hidden md:block" />
                <div>
                  <h2 className="heading-md text-primary mb-4">
                    Why Move to Spain?
                  </h2>
                  <p className="font-sans text-base text-foreground leading-relaxed mb-4">
                    Spain consistently ranks among the top destinations for expats worldwide, and it's easy to see why. With over 300 days of sunshine annually, a world-renowned healthcare system, delicious cuisine, and a relaxed pace of life, Spain offers an unbeatable quality of life at an affordable cost.
                  </p>
                  <p className="font-sans text-base text-foreground leading-relaxed">
                    Whether you're drawn to the cosmopolitan energy of Barcelona, the cultural richness of Madrid, the beach lifestyle of Valencia, or the traditional charm of Andalusia, Spain has a perfect place for everyone. The country's excellent infrastructure, safety, and welcoming attitude toward foreigners make it an ideal destination for families, retirees, digital nomads, and professionals alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">ESSENTIAL INFORMATION</span>
              <h2 className="heading-lg text-primary">Everything You Need to Know</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card p-8 rounded-[10px] shadow-[var(--shadow-md)] hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <IconComponent className="w-12 h-12 text-accent mb-5" />
                    <h3 className="font-serif font-bold text-[22px] text-primary mb-3">
                      {info.title}
                    </h3>
                    <p className="font-sans text-[15px] text-foreground leading-relaxed mb-5">
                      {info.description}
                    </p>
                    <ul className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="font-sans text-sm text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Regions Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">WHERE TO LIVE</span>
              <h2 className="heading-lg text-primary">Popular Regions for Expats</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <div 
                  key={index}
                  className="bg-card p-7 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
                >
                  <h3 className="font-serif font-bold text-[20px] text-primary mb-3">
                    {region.name}
                  </h3>
                  <p className="font-sans text-sm text-foreground leading-relaxed mb-4">
                    {region.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="font-sans text-xs bg-secondary text-primary px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Moving Timeline Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">PLAN YOUR MOVE</span>
              <h2 className="heading-lg text-primary mb-3">Your Spain Relocation Timeline</h2>
              <p className="font-sans text-[15px] text-foreground">
                A step-by-step guide to planning your move to Spain
              </p>
            </div>
            
            <div className="max-w-[800px] mx-auto">
              {spainTimeline.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-6 ${index < spainTimeline.length - 1 ? 'mb-10' : ''}`}
                >
                  {/* Number Circle */}
                  <div className="w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-2xl text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <span className="font-sans text-sm text-accent font-medium block mb-1">
                      {step.timeframe}
                    </span>
                    <h3 className="font-serif font-bold text-[20px] text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[15px] text-foreground mb-3">
                      {step.description}
                    </p>
                    <ul className="space-y-1">
                      {step.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="font-sans text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">SUCCESS STORIES</span>
              <h2 className="heading-lg text-primary">What Our Clients Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  
                  <p className="font-sans text-[15px] text-foreground leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-sans font-semibold text-primary text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-primary">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-[13px] text-muted-foreground">
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
        <section className="section-padding bg-background">
          <div className="container-brand max-w-[900px]">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">QUESTIONS?</span>
              <h2 className="heading-lg text-primary">Frequently Asked About Spain</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-3">
              {spainFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg border-none shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                    <span className="font-sans font-semibold text-base text-primary">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="font-sans text-[15px] text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Back to Destinations */}
        <section className="py-8 bg-background border-t border-border">
          <div className="container-brand text-center">
            <Button variant="outline" asChild>
              <Link to="/destinations">
                ← Back to All Destinations
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          headline="Ready to Make Spain Your New Home?"
          subtext="Let us handle the logistics of your move while you prepare for your new Mediterranean adventure."
          buttonText="Get a Free Quote"
        />
      </main>

      <Footer />
    </div>
  );
};

export default SpainGuide;
