import ReusableFAQ from './ReusableFAQ';
import { generalFAQData } from '@/data/faq/general';

const FAQSection = () => {
  return (
    <ReusableFAQ 
      faqData={generalFAQData}
      title="Frequently Asked Questions"
      activeBackgroundColor="bg-blue-50"
      sectionBackgroundColor="bg-muted/30"
      showCTA={true}
      ctaText="Get in Touch"
      ctaLink="#contact"
    />
  );
};

export default FAQSection;