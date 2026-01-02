import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  CheckCircle,
  Award,
  Star,
  Users,
  Globe,
  Loader2,
} from "lucide-react";
import contactHero from "@/assets/images/contact-hero.jpg";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    subtext: "Mon-Fri, 9am - 6pm EST",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@pondhoppers.com",
    subtext: "We respond within 24 hours",
    href: "mailto:info@pondhoppers.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Logistics Way",
    subtext: "Port City, NY 10001",
    link: { text: "Get Directions", href: "https://maps.google.com" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon-Fri: 9am - 6pm",
    subtext: "Saturday: 10am - 2pm",
    additionalText: "Sunday: Closed",
  },
];

const benefits = [
  "Free, no-obligation quotes",
  "Response within 24 hours",
  "Expert moving consultants",
  "Transparent pricing",
  "Personalized moving plans",
  "Available 6 days a week",
];

const faqs = [
  {
    question: "How quickly can I get a quote?",
    answer:
      "Most quotes are provided within 24 hours of your inquiry. For urgent moves, we can often provide same-day estimates.",
  },
  {
    question: "Is the quote really free?",
    answer:
      "Yes! Our quotes are completely free with no obligation. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "What information do you need for a quote?",
    answer:
      "We need your origin/destination locations, estimated move date, type of move, and approximate volume of items to provide an accurate quote.",
  },
  {
    question: "Can I speak with someone directly?",
    answer:
      "Absolutely! Call us at +1 (555) 123-4567 during business hours to speak with a moving consultant right away.",
  },
];

const trustStats = [
  { icon: Award, stat: "15+", label: "Years In Business" },
  { icon: Star, stat: "4.9/5", label: "Average Rating" },
  { icon: Users, stat: "25K+", label: "Successful Moves" },
  { icon: Globe, stat: "150+", label: "Countries Served" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveType: "",
    moveDate: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters)";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.phone && !/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.movingFrom) {
      newErrors.movingFrom = "Please enter your current location";
    }
    if (!formData.movingTo) {
      newErrors.movingTo = "Please enter your destination";
    }
    if (!formData.moveType) {
      newErrors.moveType = "Please select a move type";
    }
    if (formData.message && formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      movingFrom: "",
      movingTo: "",
      moveType: "",
      moveDate: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHero})` }}
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="relative z-10 container-brand h-full flex flex-col items-center justify-center text-center">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-[13px]">
                <li>
                  <Link to="/" className="text-primary hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-primary">&gt;</li>
                <li className="text-accent font-medium">Contact</li>
              </ol>
            </nav>

            <h1 className="font-serif font-bold text-[32px] md:text-[48px] text-primary leading-tight mb-4">
              Let's Start Your <span className="text-accent">Moving Journey</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-foreground max-w-2xl leading-relaxed">
              Get in touch with our team for a free quote, expert advice, or answers to any
              questions about your international move.
            </p>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow mb-3 block">GET IN TOUCH</span>
              <h2 className="heading-lg text-primary mb-4">We're Here to Help</h2>
              <p className="font-sans text-base text-foreground max-w-[700px] mx-auto leading-relaxed">
                Whether you prefer to call, email, or fill out our form, our dedicated team is
                ready to assist you with your international move.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-[10px] shadow-[var(--shadow-md)] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-[44px] h-[44px] text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-primary mb-2">
                    {method.title}
                  </h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="font-sans font-medium text-base text-primary hover:text-accent transition-colors block mb-1"
                    >
                      {method.detail}
                    </a>
                  ) : (
                    <p className="font-sans font-medium text-base text-primary mb-1">
                      {method.detail}
                    </p>
                  )}
                  <p className="font-sans text-[13px] text-muted-foreground">{method.subtext}</p>
                  {method.additionalText && (
                    <p className="font-sans text-[13px] text-muted-foreground">
                      {method.additionalText}
                    </p>
                  )}
                  {method.link && (
                    <a
                      href={method.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-accent hover:underline mt-2 inline-block"
                    >
                      {method.link.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="form" className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-card p-6 md:p-10 rounded-[10px] shadow-[var(--shadow-md)]">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-primary mb-3">
                        Thank You!
                      </h3>
                      <p className="font-sans text-base text-foreground max-w-md mx-auto leading-relaxed">
                        We've received your inquiry and our team will contact you within 24 hours
                        with a detailed quote.
                      </p>
                      <Button
                        variant="brand"
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-serif font-bold text-[28px] text-primary mb-2">
                        Request a Free Quote
                      </h3>
                      <p className="font-sans text-sm text-foreground mb-8">
                        Fill out the form below and we'll get back to you within 24 hours with a
                        detailed quote.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Full Name */}
                          <div>
                            <Label
                              htmlFor="fullName"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Full Name *
                            </Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              type="text"
                              placeholder="John Smith"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              autoComplete="name"
                              aria-required="true"
                              className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                errors.fullName ? "border-destructive" : ""
                              }`}
                            />
                            {errors.fullName && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.fullName}
                              </p>
                            )}
                          </div>

                          {/* Email */}
                          <div>
                            <Label
                              htmlFor="email"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              autoComplete="email"
                              aria-required="true"
                              className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                errors.email ? "border-destructive" : ""
                              }`}
                            />
                            {errors.email && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.email}
                              </p>
                            )}
                          </div>

                          {/* Phone */}
                          <div>
                            <Label
                              htmlFor="phone"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={handleInputChange}
                              autoComplete="tel"
                              className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                errors.phone ? "border-destructive" : ""
                              }`}
                            />
                            {errors.phone && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </div>

                          {/* Move Type */}
                          <div>
                            <Label
                              htmlFor="moveType"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Type of Move *
                            </Label>
                            <Select
                              value={formData.moveType}
                              onValueChange={(value) => {
                                setFormData((prev) => ({ ...prev, moveType: value }));
                                if (errors.moveType) {
                                  setErrors((prev) => ({ ...prev, moveType: "" }));
                                }
                              }}
                            >
                              <SelectTrigger
                                className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                  errors.moveType ? "border-destructive" : ""
                                }`}
                              >
                                <SelectValue placeholder="Select move type" />
                              </SelectTrigger>
                              <SelectContent className="bg-card border-border">
                                <SelectItem value="household">Household Move</SelectItem>
                                <SelectItem value="corporate">Lumpsum Move</SelectItem>
                                <SelectItem value="storage">Storage Only</SelectItem>
                                <SelectItem value="packing">Packing Services</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.moveType && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.moveType}
                              </p>
                            )}
                          </div>

                          {/* Moving From */}
                          <div>
                            <Label
                              htmlFor="movingFrom"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Moving From *
                            </Label>
                            <Input
                              id="movingFrom"
                              name="movingFrom"
                              type="text"
                              placeholder="Current country/city"
                              value={formData.movingFrom}
                              onChange={handleInputChange}
                              aria-required="true"
                              className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                errors.movingFrom ? "border-destructive" : ""
                              }`}
                            />
                            {errors.movingFrom && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.movingFrom}
                              </p>
                            )}
                          </div>

                          {/* Moving To */}
                          <div>
                            <Label
                              htmlFor="movingTo"
                              className="font-sans font-medium text-sm text-primary mb-2 block"
                            >
                              Moving To *
                            </Label>
                            <Input
                              id="movingTo"
                              name="movingTo"
                              type="text"
                              placeholder="Destination country/city"
                              value={formData.movingTo}
                              onChange={handleInputChange}
                              aria-required="true"
                              className={`h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent ${
                                errors.movingTo ? "border-destructive" : ""
                              }`}
                            />
                            {errors.movingTo && (
                              <p className="font-sans text-xs text-destructive mt-1">
                                {errors.movingTo}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Move Date */}
                        <div>
                          <Label
                            htmlFor="moveDate"
                            className="font-sans font-medium text-sm text-primary mb-2 block"
                          >
                            Estimated Move Date
                          </Label>
                          <Input
                            id="moveDate"
                            name="moveDate"
                            type="date"
                            value={formData.moveDate}
                            onChange={handleInputChange}
                            className="h-12 font-sans text-[15px] border-border focus:border-accent focus:ring-accent"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <Label
                            htmlFor="message"
                            className="font-sans font-medium text-sm text-primary mb-2 block"
                          >
                            Additional Details
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us more about your move, special requirements, or any questions you have..."
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className={`font-sans text-[15px] border-border focus:border-accent focus:ring-accent resize-y ${
                              errors.message ? "border-destructive" : ""
                            }`}
                          />
                          {errors.message && (
                            <p className="font-sans text-xs text-destructive mt-1">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <p className="font-sans text-xs text-muted-foreground italic">
                          * Required fields
                        </p>

                        <Button
                          type="submit"
                          variant="brand"
                          size="lg"
                          className="w-full md:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            "Get My Free Quote"
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column - Why Choose Us */}
              <div className="lg:col-span-2">
                <div className="lg:pl-4">
                  <h3 className="font-serif font-bold text-2xl text-primary mb-6">
                    Why Choose Pond Hoppers?
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-secondary p-6 rounded-lg">
                    <p className="font-sans font-semibold text-[15px] text-primary mb-2">
                      Prefer to talk?
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="font-sans font-medium text-lg text-accent hover:underline block mb-1"
                    >
                      +1 (555) 123-4567
                    </a>
                    <p className="font-sans text-[13px] text-muted-foreground">
                      Mon-Fri, 9am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow mb-3 block">QUICK QUESTIONS</span>
              <h2 className="heading-lg text-primary">Common Questions About Getting Started</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="font-sans font-semibold text-base text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-sans text-sm text-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="section-padding bg-secondary">
          <div className="container-brand">
            <div className="text-center mb-12">
              <span className="eyebrow mb-3 block">TRUSTED BY THOUSANDS</span>
              <h2 className="heading-lg text-primary mb-4">Join 25,000+ Happy Customers</h2>
              <p className="font-sans text-[15px] text-foreground">
                See why families and businesses worldwide trust Pond Hoppers for their
                international moves.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {trustStats.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon
                    className="w-10 h-10 text-accent mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <p className="font-serif font-bold text-[32px] text-primary mb-1">
                    {item.stat}
                  </p>
                  <p className="font-sans text-[13px] text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Make Your Move?"
          subtext="Get your free quote today and take the first step toward your international relocation."
          buttonText="Request Free Quote"
          buttonLink="#form"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
