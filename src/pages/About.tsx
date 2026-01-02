import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { 
  Globe, 
  Shield, 
  Users, 
  Clock, 
  Heart, 
  Award,
  TrendingUp,
  Briefcase,
  Check,
  ChevronRight
} from "lucide-react";

// Images
import heroImage from "@/assets/images/about-hero.jpg";
import storyImage from "@/assets/images/about-story.jpg";
import expertiseImage from "@/assets/images/about-expertise.jpg";

const benefitCards = [
  {
    icon: Globe,
    title: "Global Network",
    text: "With partners in over 150 countries, we provide seamless door-to-door service no matter where you're headed."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    text: "Your belongings are protected every step of the way with comprehensive insurance coverage and secure handling."
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Our certified relocation specialists bring decades of combined experience to ensure your move goes smoothly."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "We pride ourselves on punctuality, with 98% of shipments delivered on or ahead of schedule."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    text: "You're assigned a dedicated move coordinator who guides you through every step of your journey."
  },
  {
    icon: Award,
    title: "Award-Winning",
    text: "Recognized by industry leaders for excellence in customer service and operational quality."
  }
];

const values = [
  {
    icon: Heart,
    title: "Care & Compassion",
    text: "We treat every move as if it were our own, handling your possessions and your trust with the utmost care."
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    text: "Transparency and honesty are at the core of everything we do, from pricing to delivery timelines."
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    text: "We continuously improve our processes and training to deliver exceptional service on every move."
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    text: "Our team maintains the highest standards of conduct, expertise, and customer service in the industry."
  }
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "25K+", label: "Successful Moves" },
  { number: "150+", label: "Countries Served" },
  { number: "98%", label: "Client Satisfaction" }
];

const certifications = [
  "FIDI-FAIM certified facilities",
  "ISO 9001 quality management",
  "Background-checked staff",
  "Ongoing professional development"
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-white/85" />
          <div className="relative z-10 container-brand text-center px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="font-sans text-[13px] text-navy hover:text-accent transition-smooth">
                Home
              </Link>
              <ChevronRight size={14} className="text-navy" />
              <span className="font-sans text-[13px] text-accent">About Us</span>
            </nav>
            
            <h1 className="font-serif font-bold text-[36px] md:text-[48px] text-navy mb-4">
              Moving Lives, Not Just <span className="text-accent">Belongings</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-darkGrey max-w-3xl mx-auto leading-relaxed">
              For over a decade, we've been helping families and businesses make seamless international moves with care, expertise, and trust.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-background section-padding">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src={storyImage} 
                  alt="Our team collaborating on moving solutions"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-[10px] shadow-brand"
                />
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="font-sans font-bold text-[11px] text-accent uppercase tracking-[1.5px] mb-4 block">
                  OUR STORY
                </span>
                <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy mb-6">
                  A Journey Built on Trust and Expertise
                </h2>
                <div className="space-y-4">
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                    Pond Hoppers was founded with a simple belief: that moving across borders shouldn't mean leaving behind the care and attention you deserve. What started as a small family operation has grown into a trusted name in international relocation.
                  </p>
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                    We understand that every move represents a significant life change. Whether you're relocating for a new career opportunity, reuniting with family, or starting a fresh chapter, we're here to make that transition as smooth as possible.
                  </p>
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                    Today, we serve clients across 150+ countries, but our commitment remains the same: treating every move with the personal attention and professional expertise it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-cream section-padding">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-accent uppercase tracking-[1.5px] mb-4 block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                What Sets Us Apart
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-background p-9 rounded-[10px] shadow-brand hover:-translate-y-1.5 hover:shadow-brand-lg transition-all duration-300"
                >
                  <card.icon size={52} className="text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif font-bold text-[22px] text-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-background section-padding">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="font-sans font-bold text-[11px] text-accent uppercase tracking-[1.5px] mb-4 block">
                OUR VALUES
              </span>
              <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy">
                The Principles That Guide Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-cream flex items-center justify-center">
                    <value.icon size={32} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[22px] text-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="font-sans text-[15px] text-darkGrey leading-[1.8]">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-cream section-padding">
          <div className="container-brand">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="font-serif text-[36px] md:text-[48px] text-accent block mb-2">
                    {stat.number}
                  </span>
                  <span className="font-sans text-[13px] md:text-[15px] text-navy uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-background section-padding">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="font-sans font-bold text-[11px] text-accent uppercase tracking-[1.5px] mb-4 block">
                  OUR EXPERTISE
                </span>
                <h2 className="font-serif font-bold text-[28px] md:text-[34px] text-navy mb-6">
                  Certified Professionals You Can Trust
                </h2>
                <p className="font-sans text-[15px] text-darkGrey leading-[1.8] mb-6">
                  Our team holds industry-leading certifications and undergoes continuous training to stay ahead of international moving regulations, customs requirements, and best practices.
                </p>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check size={14} className="text-accent" />
                      </div>
                      <span className="font-sans text-[15px] text-darkGrey">
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image */}
              <div>
                <img 
                  src={expertiseImage} 
                  alt="Professional team at work"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-[10px] shadow-brand"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          headline="Ready to Start Your Journey?"
          subtext="Get a free, no-obligation quote and discover how easy international moving can be."
          buttonText="Get Your Free Quote"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
