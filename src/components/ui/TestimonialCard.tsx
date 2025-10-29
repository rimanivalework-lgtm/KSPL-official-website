import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// TypeScript interfaces
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  industry: string;
  content: string;
  rating: number;
  avatar?: string;
  category?: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
  showIndicators?: boolean;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000,
  showIndicators = true,
  className = ""
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoRotate, rotateInterval]);

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (testimonials.length === 0) {
    return <div className="text-center text-muted-foreground p-8">No testimonials available.</div>;
  }

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <div className={`relative ${className}`}>
      <Card className="border-0 shadow-lg bg-background hover:shadow-xl transition-all duration-300 w-full group flex flex-col h-full">
        <CardContent className="p-4 md:p-6 flex flex-col h-full justify-between">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-4 md:space-y-6">
            {/* Quote Icon */}
              <div className="inline-flex p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Quote className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(currentTestimonialData.rating)}
              </div>

            {/* Content */}
              <blockquote className="text-sm md:text-base lg:text-lg text-foreground text-left leading-relaxed">
              "{currentTestimonialData.content}"
            </blockquote>
            </div>

            {/* Company Info - Pinned to bottom of content area */}
            <div className="mt-auto flex items-center gap-2 mt-4 md:mt-6">
              <img
                src={currentTestimonialData.companyLogo}
                alt={`${currentTestimonialData.company} logo`}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <div className="font-semibold text-foreground text-xs md:text-sm">
                  {currentTestimonialData.company}
                </div>
                <div className="text-xs text-primary font-medium">
                  {currentTestimonialData.industry}
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Person Details */}
          <div className="p-3 md:p-4 rounded-b-lg mt-4 md:mt-6 -mx-4 md:-mx-6 -mb-4 md:-mb-6 flex items-center gap-2 md:gap-3" style={{ backgroundColor: '#87C5FF' }}>
            {currentTestimonialData.avatar && (
              <img
                src={currentTestimonialData.avatar}
                alt={currentTestimonialData.name}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <div>
              <div className="font-semibold text-foreground text-xs md:text-sm lg:text-base">
                {currentTestimonialData.name}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {currentTestimonialData.title}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Carousel Indicators */}
      {showIndicators && testimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentTestimonial 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
