import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CityscapeOrange from "@/assets/graphics/Logo_cityscape_and_plane_Orange.png";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  buttonText: string;
  buttonLink?: string;
}

const CTASection = ({ headline, subtext, buttonText, buttonLink = "/contact" }: CTASectionProps) => {
  return (
    <section className="relative bg-accent overflow-hidden">
      {/* Cityscape Background */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 md:h-40 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url(${CityscapeOrange})`,
          backgroundPosition: "center bottom",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="container-brand relative z-10 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-accent-foreground mb-4">
            {headline}
          </h2>
          {subtext && (
            <p className="font-sans text-base md:text-lg text-accent-foreground/95 leading-relaxed mb-8 max-w-xl mx-auto">
              {subtext}
            </p>
          )}
          <Button variant="secondary" size="lg" asChild>
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
