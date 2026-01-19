import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer for international moves?",
    answer: "We offer comprehensive international moving services including household moves, lumpsum moves, storage solutions, packing services, and pet relocation. Each service is customized to your destination and specific needs."
  },
  {
    question: "How far in advance should I book my international move?",
    answer: "We recommend booking 6-8 weeks in advance for household moves and 8-12 weeks for lumpsum moves. This allows time for proper planning, documentation, and scheduling."
  },
  {
    question: "Do you handle customs paperwork?",
    answer: "Yes, we manage all customs documentation, duties, and clearance processes. Our expertise ensures smooth border crossings and helps avoid delays or complications at your destination."
  },
  {
    question: "Can I track my shipment while it's in transit?",
    answer: "Absolutely! We provide real-time tracking for all international shipments. Your dedicated coordinator will keep you updated throughout the journey, from pickup to delivery."
  },
  {
    question: "Is insurance included in the service?",
    answer: "All shipments include basic coverage. We also offer comprehensive insurance options for complete peace of mind. Your coordinator will discuss coverage levels during planning."
  },
  {
    question: "What items are prohibited when moving internationally?",
    answer: "Prohibited items typically include hazardous materials, perishable foods, firearms, and certain plants. We'll provide a complete list during your consultation based on your destination country's regulations."
  },
  {
    question: "Can you move my car or motorcycle overseas?",
    answer: "Yes, we offer vehicle shipping services to most destinations. This includes proper documentation, containerization, and customs clearance. Contact us for a custom quote for vehicle transport."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-brand">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">COMMON QUESTIONS</span>
            <h2 className="heading-lg text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-[15px] text-foreground leading-relaxed max-w-2xl mx-auto">
              We understand moving can be challenging, so we've put together some FAQs which will help you with useful information to consider when moving.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-none px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-sans font-semibold text-[15px] text-primary">
                    Question {index + 1}: {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground font-sans text-[15px] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
