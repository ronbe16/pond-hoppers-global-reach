import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HouseholdImage from "@/assets/images/service-household.jpg";
import CorporateImage from "@/assets/images/service-corporate.jpg";
import StorageImage from "@/assets/images/service-storage.jpg";

const services = [
  {
    title: "Household Moves",
    description: "Complete door-to-door service for your family's precious belongings, ensuring they arrive safely.",
    image: HouseholdImage,
    link: "/services",
  },
  {
    title: "Corporate Relocations",
    description: "Efficient corporate transfer solutions that minimize downtime and ensure business continuity.",
    image: CorporateImage,
    link: "/services",
  },
  {
    title: "Storage Solutions",
    description: "Secure climate-controlled storage facilities for short or long-term needs during your transition.",
    image: StorageImage,
    link: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-brand">
        {/* Eyebrow */}
        <p className="font-sans text-sm text-darkGrey text-center max-w-2xl mx-auto mb-7">
          Comprehensive moving solutions designed to cover every aspect of your international relocation
        </p>

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="heading-md text-navy mb-4 sm:mb-0">Our Services</h2>
          <Link
            to="/services"
            className="font-sans font-medium text-sm text-accent hover:underline transition-smooth inline-flex items-center gap-1"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg shadow-brand-md hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="heading-sm text-navy mb-3">{service.title}</h3>
                <p className="font-sans text-[15px] text-darkGrey leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="font-sans font-medium text-sm text-accent hover:translate-x-1 transition-all inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
