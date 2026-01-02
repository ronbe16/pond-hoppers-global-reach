import SarahImage from "@/assets/images/testimonial-sarah.jpg";
import MichaelImage from "@/assets/images/testimonial-michael.jpg";
import EmmaImage from "@/assets/images/testimonial-emma.jpg";

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Moved from London to Dubai",
    quote: "Pond Hoppers made our move from London to Dubai seamless and stress-free. Their expertise in handling customs and their friendly approach made all the difference.",
    image: SarahImage,
  },
  {
    name: "Michael Chen",
    location: "Moved from Singapore to Toronto",
    quote: "I was worried about the logistics of moving my entire household. But Pond Hoppers' team was professional, efficient, and incredibly thoughtful throughout the process.",
    image: MichaelImage,
  },
  {
    name: "Emma Thompson",
    location: "Moved from New York to Sydney",
    quote: "Fantastic service from start to finish! The packing crew was efficient and careful, and everything arrived in perfect condition on time, just as promised.",
    image: EmmaImage,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-brand">
        <h2 className="heading-md text-navy text-center mb-6">What People Say</h2>
        <p className="font-sans text-sm text-darkGrey text-center max-w-[720px] mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-cream rounded-lg p-9 text-center shadow-brand-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-[3px] border-primary-foreground shadow-brand-sm"
                  loading="lazy"
                />
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-5xl text-accent/25 font-serif">
                  "
                </span>
              </div>
              <p className="font-sans text-[15px] italic text-darkGrey leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <h4 className="font-sans font-bold text-[15px] text-navy mb-1">
                {testimonial.name}
              </h4>
              <p className="font-sans text-[13px] text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
