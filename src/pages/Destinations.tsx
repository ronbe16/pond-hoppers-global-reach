import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  FileText, 
  Users, 
  TrendingUp,
  FileCheck,
  DollarSign,
  Heart,
  GraduationCap,
  Home,
  Briefcase,
  Globe,
  Bus,
  Download,
  Calculator,
  BookOpen,
  MessageCircle,
  Star
} from "lucide-react";

// Images
import destinationsHero from "@/assets/images/destinations-hero.jpg";
import destinationUK from "@/assets/images/destination-uk.jpg";
import destinationAustralia from "@/assets/images/destination-australia.jpg";
import destinationCanada from "@/assets/images/destination-canada.jpg";
import destinationSingapore from "@/assets/images/destination-singapore.jpg";
import destinationUAE from "@/assets/images/destination-uae.jpg";

const destinations = [
  {
    id: "united-kingdom",
    flag: "🇬🇧",
    name: "United Kingdom",
    image: destinationUK,
    description: "Experience rich history and modern innovation in one of the world's most influential nations. From London's bustling streets to the Scottish Highlands, the UK offers diverse opportunities for expats.",
    highlights: ["English speaking", "World-class healthcare (NHS)", "Strong job market"],
    link: "/destinations/united-kingdom"
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australia",
    image: destinationAustralia,
    description: "Embrace the laid-back lifestyle and stunning natural beauty of the land down under. Australia combines modern cities, beautiful beaches, and excellent quality of life.",
    highlights: ["High quality of life", "Outdoor lifestyle", "Strong economy"],
    link: "/destinations/australia"
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Canada",
    image: destinationCanada,
    description: "Discover friendly communities and breathtaking landscapes in one of the world's most welcoming countries. Canada offers exceptional education, healthcare, and career opportunities.",
    highlights: ["Welcoming to immigrants", "Excellent education system", "Safe and clean cities"],
    link: "/destinations/canada"
  },
  {
    id: "singapore",
    flag: "🇸🇬",
    name: "Singapore",
    image: destinationSingapore,
    description: "Thrive in Asia's most modern and efficient city-state. Singapore combines Eastern culture with Western convenience, offering world-class infrastructure and business opportunities.",
    highlights: ["Business hub of Asia", "Excellent infrastructure", "Safe and clean"],
    link: "/destinations/singapore"
  },
  {
    id: "uae",
    flag: "🇦🇪",
    name: "United Arab Emirates",
    image: destinationUAE,
    description: "Build your future in the Middle East's most dynamic region. The UAE offers tax-free living, modern amenities, and a unique blend of traditional and contemporary culture.",
    highlights: ["Tax-free income", "Luxury lifestyle", "Growing economy"],
    link: "/destinations/uae"
  }
];

const benefits = [
  {
    icon: FileText,
    title: "Comprehensive Information",
    description: "From visa requirements to cost of living, we cover everything you need to know before and after your move."
  },
  {
    icon: Users,
    title: "Local Insights",
    description: "Benefit from our years of experience helping families settle in. We share practical tips you won't find in guidebooks."
  },
  {
    icon: TrendingUp,
    title: "Regularly Updated",
    description: "Our guides are continuously updated with the latest regulations, costs, and local information to keep you informed."
  }
];

const guideTopics = [
  { icon: FileCheck, name: "Visa & Immigration", description: "Visa types, application processes, and residency requirements" },
  { icon: DollarSign, name: "Cost of Living", description: "Housing, utilities, groceries, and everyday expenses" },
  { icon: Heart, name: "Healthcare", description: "Healthcare system, insurance options, and finding doctors" },
  { icon: GraduationCap, name: "Education", description: "Schools, universities, and education system overview" },
  { icon: Home, name: "Housing", description: "Popular neighborhoods, rental market, and buying property" },
  { icon: Briefcase, name: "Employment", description: "Job market, work permits, and career opportunities" },
  { icon: Globe, name: "Culture & Lifestyle", description: "Local customs, language, social life, and activities" },
  { icon: Bus, name: "Transportation", description: "Public transport, driving licenses, and getting around" }
];

const timeline = [
  {
    number: "1",
    timeframe: "3-6 Months Before",
    title: "Research & Plan",
    description: "Start researching your destination and planning your move",
    checklist: ["Read destination guides", "Request moving quotes", "Begin visa applications"]
  },
  {
    number: "2",
    timeframe: "2-3 Months Before",
    title: "Arrange & Organize",
    description: "Handle logistics and start preparing for departure",
    checklist: ["Book moving services", "Arrange temporary housing", "Notify employers/schools"]
  },
  {
    number: "3",
    timeframe: "1 Month Before",
    title: "Prepare & Pack",
    description: "Finalize details and prepare your belongings",
    checklist: ["Complete packing", "Cancel local services", "Say farewells"]
  },
  {
    number: "4",
    timeframe: "After Arrival",
    title: "Settle & Explore",
    description: "Get settled in your new home and community",
    checklist: ["Register with authorities", "Set up utilities/banking", "Explore your neighborhood"]
  }
];

const resources = [
  { icon: Download, title: "Moving Checklist", text: "Download our comprehensive checklist", link: "Download PDF" },
  { icon: Calculator, title: "Cost Calculator", text: "Estimate your moving costs", link: "Try Calculator" },
  { icon: BookOpen, title: "Expat Blog", text: "Read stories and tips from expats", link: "Read Blog" },
  { icon: MessageCircle, title: "Ask an Expert", text: "Get personalized moving advice", link: "Contact Us" }
];

const testimonials = [
  {
    quote: "The UK guide was invaluable! It helped us understand the NHS, school system, and even where to shop. We felt prepared from day one.",
    name: "Jennifer & Mark Thompson",
    location: "USA → London, UK",
    flag: "🇬🇧"
  },
  {
    quote: "Moving to Singapore seemed daunting until we read the guide. The visa process, housing tips, and cultural insights made everything so much easier.",
    name: "Priya Sharma",
    location: "India → Singapore",
    flag: "🇸🇬"
  },
  {
    quote: "The Australia guide covered everything from Medicare to finding schools. Pond Hoppers made our family's transition smooth and stress-free.",
    name: "David Chen",
    location: "Canada → Sydney, Australia",
    flag: "🇦🇺"
  }
];

const Destinations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${destinationsHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
          <div className="container-brand relative z-10 text-center pt-[72px]">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-sans text-[13px] text-primary hover:text-accent transition-smooth">
                Home
              </Link>
              <span className="text-primary/50">&gt;</span>
              <span className="font-sans text-[13px] text-accent">Destinations</span>
            </nav>
            
            <h1 className="font-serif font-bold text-[36px] md:text-[48px] text-primary leading-tight mb-4 max-w-4xl mx-auto">
              Your Guide to Moving{" "}
              <span className="text-accent">Around the World</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              Explore comprehensive guides for our most popular destinations. From visa requirements to cultural insights, we help you prepare for your new home.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="max-w-[900px] mx-auto text-center">
              <span className="eyebrow block mb-3">DESTINATION GUIDES</span>
              <h2 className="heading-lg text-primary mb-6">
                Everything You Need to Know Before You Move
              </h2>
              <p className="font-sans text-base text-foreground leading-relaxed mb-12">
                Moving to a new country is an exciting adventure. Our detailed destination guides provide essential information about cost of living, housing, healthcare, education, and local culture to help you settle in with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">POPULAR DESTINATIONS</span>
              <h2 className="heading-lg text-primary mb-4">Where Are You Moving?</h2>
              <p className="font-sans text-[15px] text-foreground">
                Click on any destination below to explore our comprehensive moving guide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div 
                  key={destination.id}
                  className="group bg-card rounded-[10px] shadow-[var(--shadow-md)] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                >
                  {/* Image */}
                  <div className="h-[220px] md:h-[280px] overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={`${destination.name} cityscape`}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 md:p-7">
                    <span className="text-[40px] block mb-4">{destination.flag}</span>
                    <h3 className="font-serif font-bold text-[24px] md:text-[26px] text-primary mb-3">
                      {destination.name}
                    </h3>
                    <p className="font-sans text-sm text-foreground leading-relaxed mb-5">
                      {destination.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="font-sans text-[13px] text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="brand" className="w-full" asChild>
                      <Link to={destination.link}>View Guide</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Our Guides Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">WHY OUR GUIDES</span>
              <h2 className="heading-lg text-primary">Make Your Move with Confidence</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-muted p-9 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-center"
                >
                  <benefit.icon className="w-12 h-12 text-accent mx-auto mb-5" />
                  <h3 className="font-serif font-bold text-[22px] text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-[15px] text-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">GUIDE CONTENTS</span>
              <h2 className="heading-lg text-primary">What You'll Find in Each Guide</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {guideTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-primary mb-1">
                      {topic.name}
                    </h3>
                    <p className="font-sans text-sm text-foreground">
                      {topic.description}
                    </p>
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
              <span className="eyebrow block mb-3">PLAN AHEAD</span>
              <h2 className="heading-lg text-primary mb-3">International Move Timeline</h2>
              <p className="font-sans text-[15px] text-foreground">
                Start planning early for a smooth transition
              </p>
            </div>
            
            <div className="max-w-[800px] mx-auto">
              {timeline.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-6 ${index < timeline.length - 1 ? 'mb-10' : ''}`}
                >
                  {/* Number Circle */}
                  <div className="w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-[28px] text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-card border-l-4 border-accent py-6 pr-6 pl-7 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    {/* Timeframe */}
                    <span className="font-sans font-bold text-xs text-accent uppercase tracking-wider block mb-2">
                      {step.timeframe}
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-serif font-bold text-[22px] text-primary mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-[15px] text-foreground mb-4">
                      {step.description}
                    </p>
                    
                    {/* Checklist */}
                    <div className="space-y-2">
                      {step.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="font-sans text-[13px] text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">HELPFUL RESOURCES</span>
              <h2 className="heading-lg text-primary">Additional Moving Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-card p-7 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <resource.icon className="w-9 h-9 text-accent mx-auto mb-4" />
                  <h3 className="font-sans font-semibold text-base text-primary mb-2">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground mb-4">
                    {resource.text}
                  </p>
                  <Link 
                    to="/contact" 
                    className="font-sans font-medium text-sm text-accent hover:text-accent/80 hover:underline transition-smooth"
                  >
                    {resource.link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow block mb-3">SUCCESS STORIES</span>
              <h2 className="heading-lg text-primary">From Our International Movers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card border border-secondary p-8 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="font-sans text-[15px] text-foreground italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{testimonial.flag}</span>
                    <div>
                      <p className="font-sans font-semibold text-sm text-primary">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-[13px] text-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Start Your International Journey?"
          subtext="Let us help you move to your dream destination with confidence and ease."
          buttonText="Get Your Free Quote"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
