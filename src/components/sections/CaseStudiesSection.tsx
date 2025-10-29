import { Button } from '@/components/ui/enhanced-button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '@/hooks/useCarousel';

interface CaseStudy {
  image: string;
  category: string;
  name: string;
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
    {
      image: 'arpita-mehta.jpg',
      category: 'Healthcare',
      name: 'Arpita Mehta'
    },
    {
      image: 'jpmorgan.jpg',
      category: 'Finance',
      name: 'JPMorgan Chase'
    },
    {
      image: 'arpita-mehta.jpg',
      category: 'Healthcare',
      name: 'Arpita Mehta'
    },
    {
      image: 'arpita-mehta.jpg',
      category: 'Healthcare',
      name: 'Arpita Mehta'
    },
    {
      image: 'arpita-mehta.jpg',
      category: 'Healthcare',
      name: 'Arpita Mehta'
    },
    {
      image: 'solesearch.jpg',
      category: 'E-commerce',
      name: 'SoleSearch'
    }
  ];

  const {
    currentIndex,
    screenSize,
    goToNext,
    goToPrevious,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave
  } = useCarousel({
    totalItems: caseStudies.length,
    autoPlayInterval: 5000,
    enableAutoPlay: true
  });


  // Create infinite carousel by duplicating case studies
  const createInfiniteCaseStudies = () => {
    // Duplicate case studies for smooth infinite loop
    return [...caseStudies, ...caseStudies, ...caseStudies];
  };

  const infiniteCaseStudies = createInfiniteCaseStudies();
  const actualIndex = currentIndex % caseStudies.length;

  return (
    <section className="py-10 lg:py-20 relative overflow-hidden" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Centered Heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
              Case <span className="text-primary">Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
              See How We've Helped Businesses Like Yours
            </p>
          </div>
          
          {/* Navigation Arrows - Hidden on mobile, visible on tablet and desktop */}
          <div className="absolute top-0 right-0 hidden md:flex space-x-3">
            <button
              onClick={goToPrevious}
              className="bg-secondary hover:bg-primary/10 shadow-soft rounded-xl p-3 transition-all duration-300 hover:scale-105 group"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            
            <button
              onClick={goToNext}
              className="bg-primary/10 hover:bg-primary/20 shadow-soft rounded-xl p-3 transition-all duration-300 hover:scale-105 group"
              aria-label="Next case study"
            >
              <ChevronRight className="h-5 w-5 text-primary group-hover:text-primary-dark transition-colors" />
            </button>
          </div>
        </div>

        {/* Case Studies Carousel */}
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
              {infiniteCaseStudies.map((caseStudy, index) => (
                <div 
                  key={`${caseStudy.name}-${index}`} 
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / screenSize.itemsPerScreen}%` }}
                >
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                      <img
                        src={`/images/case-studies/${caseStudy.image}`}
                        alt={`${caseStudy.name} case study`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=320&fit=crop';
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary shadow-soft font-secondary">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {caseStudy.category}
                        </span>
                      </div>

                      {/* Hover Overlay Content */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl">
                          <p className="text-xs text-muted-foreground font-medium font-secondary">
                            View detailed case study →
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Company Name */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-primary">
                        {caseStudy.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm font-secondary">
                        Transforming {caseStudy.category.toLowerCase()} through innovative software solutions and cutting-edge technology.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === actualIndex 
                    ? "bg-primary w-12 shadow-soft" 
                    : "bg-muted hover:bg-primary/30 w-3"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="cta" size="lg">
            View More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
