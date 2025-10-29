import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";

// TypeScript interfaces
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  industry: string;
  content: string;
  rating?: number;
  avatar?: string;
  category?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  showNavigation?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  autoPlayInterval?: number;
  enableAutoPlay?: boolean;
  variant?: 'default' | 'compact' | 'single';
  className?: string;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  title = "What Our Clients Say",
  subtitle,
  showNavigation = true,
  showCTA = true,
  ctaText = "Read More Testimonials",
  ctaLink = "/testimonials",
  autoPlayInterval = 5000,
  enableAutoPlay = true,
  variant = 'default',
  className = ""
}) => {
  const {
    currentIndex,
    screenSize,
    isAutoPlaying,
    isHovered,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToSlide,
    startAutoPlay,
    stopAutoPlay,
    handleMouseEnter,
    handleMouseLeave
  } = useCarousel({
    totalItems: testimonials.length,
    autoPlayInterval,
    enableAutoPlay
  });

  // Create infinite carousel by duplicating testimonials
  const createInfiniteTestimonials = () => {
    return [...testimonials, ...testimonials, ...testimonials];
  };

  const infiniteTestimonials = createInfiniteTestimonials();
  const totalItems = infiniteTestimonials.length;
  const actualIndex = currentIndex % testimonials.length;

  // Single testimonial variant (for product pages)
  if (variant === 'single') {
    return (
      <div className={`relative ${className}`}>
        <Card className="border-0 shadow-lg bg-background hover:shadow-xl transition-all duration-300 h-full group flex flex-col">
          <CardContent className="p-6 flex flex-col h-full justify-between">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Quote className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="testimonial-scroll max-h-40 overflow-y-auto">
                  <blockquote className="text-base lg:text-lg text-foreground text-left leading-relaxed pr-2">
                    {testimonials[actualIndex]?.content}
                  </blockquote>
                </div>
              </div>

              {/* Company Info - Pinned to bottom of content area */}
              <div className="flex items-center gap-2 mt-6">
                <img
                  src={testimonials[actualIndex]?.companyLogo}
                  alt={`${testimonials[actualIndex]?.company} logo`}
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-foreground text-sm">
                    {testimonials[actualIndex]?.company}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonials[actualIndex]?.industry}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Person Details */}
            <div className="p-4 rounded-b-lg mt-6 -mx-6 -mb-6 flex items-center gap-3" style={{ backgroundColor: '#307CC3' }}>
              <div>
                <div className="font-semibold text-white text-sm lg:text-base">
                  {testimonials[actualIndex]?.name}
                </div>
                <div className="text-xs lg:text-sm text-white/90">
                  {testimonials[actualIndex]?.title}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === actualIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Compact variant (for smaller sections)
  if (variant === 'compact') {
    return (
      <div className={`py-8 ${className}`}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          {title && (
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-primary font-bold text-foreground mb-2">
                {title}
              </h3>
              {subtitle && (
                <p className="text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}

          {/* Compact Carousel */}
          <div 
            className="relative max-w-4xl mx-auto mb-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / screenSize.itemsPerScreen)}%)` 
                }}
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / screenSize.itemsPerScreen}%` }}
                  >
                    <Card className="border-0 shadow-lg bg-background hover:shadow-xl transition-all duration-300 h-full group flex flex-col">
                      <CardContent className="p-4 flex flex-col h-full justify-between">
                        <div className="space-y-4">
                          <div className="inline-flex p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <Quote className="h-5 w-5 text-primary" />
                          </div>
                          <blockquote className="text-sm text-foreground text-left leading-relaxed">
                            {testimonial.content}
                          </blockquote>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <img
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="flex flex-col">
                            <div className="font-semibold text-foreground text-xs">
                              {testimonial.company}
                            </div>
                            <div className="text-xs text-primary font-medium">
                              {testimonial.industry}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === actualIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant (full home page style)
  return (
    <section className={`py-16 lg:py-24 bg-muted/30 ${className}`} id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Centered Heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
              {title} <span className="text-primary">Clients</span>
            </h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {/* Navigation Arrows - Hidden on mobile, visible on tablet and desktop */}
          {showNavigation && (
            <div className="absolute top-0 right-0 hidden md:flex space-x-3">
              <button
                onClick={goToPrevious}
                className="bg-secondary hover:bg-primary/10 shadow-soft rounded-xl p-3 transition-all duration-300 hover:scale-105 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <button
                onClick={goToNext}
                className="bg-primary/10 hover:bg-primary/20 shadow-soft rounded-xl p-3 transition-all duration-300 hover:scale-105 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-primary group-hover:text-primary-dark transition-colors" />
              </button>
            </div>
          )}
        </div>

        {/* Enhanced Testimonials Carousel */}
        <div 
          className="relative max-w-7xl mx-auto mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / screenSize.itemsPerScreen)}%)` 
              }}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / screenSize.itemsPerScreen}%` }}
                >
                  <Card className="border-0 shadow-lg bg-background hover:shadow-xl transition-all duration-300 h-full group flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full justify-between">
                      {/* Main Content Area */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-6">
                        {/* Quote Icon */}
                          <div className="inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <Quote className="h-6 w-6 text-primary" />
                        </div>

                          {/* Content */}
                          <div className="testimonial-scroll max-h-40 overflow-y-auto">
                            <blockquote className="text-base lg:text-lg text-foreground text-left leading-relaxed pr-2">
                              {testimonial.content}
                            </blockquote>
                          </div>
                        </div>

                        {/* Company Info - Pinned to bottom of content area */}
                        <div className="flex items-center gap-2 mt-6">
                          <img
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="flex flex-col">
                            <div className="font-semibold text-foreground text-sm">
                              {testimonial.company}
                            </div>
                            <div className="text-xs text-primary font-medium">
                              {testimonial.industry}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer - Person Details */}
                      <div className="p-4 rounded-b-lg mt-6 -mx-6 -mb-6 flex items-center gap-3" style={{ backgroundColor: '#307CC3' }}>
                        <div>
                          <div className="font-semibold text-white text-sm lg:text-base">
                            {testimonial.name}
                          </div>
                          <div className="text-xs lg:text-sm text-white/90">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === actualIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        {showCTA && (
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="group text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              asChild
            >
              <a href={ctaLink} className="inline-flex items-center space-x-2">
                <span className="group-hover:text-primary-foreground">{ctaText}</span>
                <ArrowRight className="h-4 w-4 group-hover:text-primary-foreground" />
              </a>
            </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
