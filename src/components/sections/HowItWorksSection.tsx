import { FileText, ClipboardCheck, Package, Home } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Request Quote",
    description: "Fill out our simple form or call us to start the process.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Survey & Plan",
    description: "We assess your needs and create a custom moving plan.",
  },
  {
    icon: Package,
    number: "03",
    title: "Pack & Move",
    description: "Our experts pack securely and transport your items safely.",
  },
  {
    icon: Home,
    number: "04",
    title: "Settle In",
    description: "We deliver, unpack, and help you get comfortable in your new home.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-navy section-padding">
      <div className="container-brand">
        <div className="text-center mb-14">
          <h2 className="heading-md text-primary-foreground mb-3">How It Works</h2>
          <p className="font-sans text-base text-lightGrey">
            Your journey to a new home in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-9 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <step.icon className="w-11 h-11 text-primary-foreground mx-auto mb-4" />
              <span className="font-serif font-bold text-4xl text-accent block mb-3">
                {step.number}
              </span>
              <h3 className="font-sans font-bold text-base text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-lightGrey leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
