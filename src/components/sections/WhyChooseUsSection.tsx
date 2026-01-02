import { Shield, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "20+ Years Experience",
    description: "Trusted by families globally for over two decades, with a spotless track record of reliability.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Our established network of trusted partners ensures your belongings are in safe hands, anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every move is unique. We tailor our services to meet your specific needs, timeline, and budget requirements.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-brand">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">WHY CHOOSE POND HOPPERS</p>
          <h2 className="heading-md text-navy">Your Trusted Moving Partner</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-5">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-sans font-bold text-lg text-navy mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-[15px] text-darkGrey leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
