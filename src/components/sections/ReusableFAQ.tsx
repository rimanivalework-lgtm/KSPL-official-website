import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  left: FAQItem[];
  right: FAQItem[];
}

interface ReusableFAQProps {
  faqData: FAQData;
  title?: string;
  subtitle?: string;
  activeBackgroundColor?: string;
  sectionBackgroundColor?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const ReusableFAQ = ({
  faqData,
  title = "Frequently Asked Questions",
  subtitle,
  activeBackgroundColor = "bg-blue-50",
  sectionBackgroundColor = "bg-muted/30",
  showCTA = true,
  ctaText = "Get in Touch",
  ctaLink = "#contact"
}: ReusableFAQProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 lg:py-24 ${sectionBackgroundColor}`} id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3 sm:mb-4 font-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items - Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {faqData.left.map((faq, index) => (
                <div
                  key={`faq-left-${index}`}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                      openIndex === `left-${index}` 
                        ? activeBackgroundColor 
                        : 'bg-background hover:bg-muted/50'
                    }`}
                    onClick={() => toggleFAQ(`left-${index}`)}
                    aria-expanded={openIndex === `left-${index}`}
                  >
                    <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                    <span className="ml-2 flex-shrink-0 text-primary">
                      {openIndex === `left-${index}` ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === `left-${index}` && faq.answer && (
                    <div className={`p-4 ${activeBackgroundColor} border-t border-border`}>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqData.right.map((faq, index) => (
                <div 
                  key={`faq-right-${index}`}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                      openIndex === `right-${index}` 
                        ? activeBackgroundColor 
                        : 'bg-background hover:bg-muted/50'
                    }`}
                    onClick={() => toggleFAQ(`right-${index}`)}
                    aria-expanded={openIndex === `right-${index}`}
                  >
                    <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                    <span className="ml-2 flex-shrink-0 text-primary">
                      {openIndex === `right-${index}` ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === `right-${index}` && faq.answer && (
                    <div className={`p-4 ${activeBackgroundColor} border-t border-border`}>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {showCTA && (
          <div className="text-center mt-12">
            <a 
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {ctaText} <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReusableFAQ;
