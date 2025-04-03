import { useState } from "react";
import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#1a2642] text-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            FEAR-BUSTING FAQ
          </h2>
          <p className="text-lg text-[#f8f9fa]/80 max-w-2xl mx-auto">
            Common questions answered by those who've already transformed their lives
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`faq-${faq.id}`}
                className="border border-white/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-white/5 transition-colors text-left">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-[#f8f9fa]/80">
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
