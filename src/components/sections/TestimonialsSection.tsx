import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { getHomePageTestimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const testimonials = getHomePageTestimonials();

  return (
    <TestimonialCarousel 
      testimonials={testimonials}
      title="What Our"
      showNavigation={true}
      showCTA={true}
      ctaText="Read More Testimonials"
      ctaLink="/testimonials"
      autoPlayInterval={5000}
      enableAutoPlay={true}
      variant="default"
    />
  );
};

export default TestimonialsSection;