import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import { getHomePageTestimonials } from '@/data/testimonials';
import { CheckCircle, Users, Clock, BarChart3, X, AlertTriangle, FileText, TrendingDown, Eye, Shield, Building2, LayoutDashboard, Globe, Settings, Heart, Zap, Upload, Palette, Rocket } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SpacebeeLogo from "@/assets/spacebee/spacebee-left-side.png";
import ContactForm from '@/components/forms/ContactForm';
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { spacebeeFAQData } from '@/data/faq/spacebee';
import { SPACEBEE_COLORS } from '@/lib/spacebee-colors';
import SEO from '@/components/SEO';

// Hero Component
const Hero: React.FC = () => {
  return (
    <section className="relative py-6 sm:py-8 lg:py-16 overflow-hidden" style={{ backgroundColor: SPACEBEE_COLORS.background }}>
      
      <div className="container mx-auto px-4 py-8 relative z-10 flex items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center py-2">
              <img
                src={SpacebeeLogo}
                alt="Spacebee"
                className="mx-auto lg:mx-0 w-full max-w-[200px] bg-white rounded-lg"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-4 leading-relaxed font-primary">
              End Meeting Room Chaos with<span className={SPACEBEE_COLORS.classes.primary}> Smart Room Booking</span> Software
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-slate-600 leading-relaxed max-w-2xl font-secondary">
              Powerful room management system that eliminates double bookings,
              saves 10+ admin hours weekly, and delivers real-time visibility
              across all office locations.
            </p>
          </div>

          {/* Right Form */}
          <div className="relative" id="bookademo">
            <div className={`bg-white backdrop-blur-md rounded-2xl p-8 border ${SPACEBEE_COLORS.classes.borderLight} shadow-large`}>
              <ContactForm 
                cardClassName="bg-transparent p-0 border-0 shadow-none"
                showTitle={true}
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-2 md:p-6 lg:p-6 shadow-glow animate-pulse">
              <div className={`text-2xl font-bold ${SPACEBEE_COLORS.classes.primary}`}>100%</div>
              <div className="text-sm text-muted-foreground">
                Double-Booking Prevention
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-2 md:p-6 lg:p-6 shadow-glow animate-pulse animation-delay-1000">
              <div className={`text-2xl font-bold ${SPACEBEE_COLORS.classes.primary}`}>10+</div>
              <div className="text-sm text-muted-foreground">
                Hours Saved Weekly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PainPoints Component
const PainPoints = () => {
  const painPoints = [
    {
      icon: X,
      text: "Double bookings causing awkward meeting crashes"
    },
    {
      icon: Clock,
      text: "10-15 hours/week wasted on back-and-forth coordination"
    },
    {
      icon: AlertTriangle,
      text: "No visibility into which rooms are actually free"
    },
    {
      icon: FileText,
      text: "Manual admin work eating up productive time"
    },
    {
      icon: Users,
      text: "Frustrated employees fighting over meeting spaces"
    },
    {
      icon: TrendingDown,
      text: "Underutilized rooms while others stay overbooked"
    }
  ];

  return (
    <section className={`py-20 ${SPACEBEE_COLORS.classes.gradientBackground}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            The Daily Meeting Room Scheduling{" "} 
            <span className="text-red-600">Nightmare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Does this sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-red-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed font-secondary">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className={`w-full ${SPACEBEE_COLORS.classes.hoverBgLight} rounded-2xl p-8 shadow-soft`}>
            <p className="text-lg font-semibold mb-2 font-secondary">
              Spacebee is the room management software built to eliminate these issues
            </p>
            <p className="text-2xl font-bold text-foreground font-primary">
              in just 24 hours.
            </p>
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#bookademo">
                  <button className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${SPACEBEE_COLORS.classes.gradientPrimary} text-white ${SPACEBEE_COLORS.classes.hoverBg} h-10 rounded-lg px-6 text-base`}>
                  Book a Demo
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeatureCard Component
const FeatureCard = ({ 
  feature, 
  index, 
  isSelected, 
  isHovered, 
  onSelect, 
  onHover, 
  onLeave 
}: {
  feature: any;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const IconComponent = feature.icon;
  
  return (
    <div
      className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
        isSelected
          ? 'border-[#10B785] bg-[#10B785]/10 shadow-medium'
          : isHovered
          ? 'border-[#10B785]/50 bg-[#10B785]/5 shadow-soft'
          : 'border-gray-200 bg-white hover:border-[#10B785]/30 hover:shadow-soft'
      }`}
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isSelected
            ? 'bg-transparent text-[#10B785] scale-110'
            : isHovered
            ? 'bg-[#10B785]/20 text-[#10B785] scale-110'
            : 'bg-gray-100 text-gray-600 group-hover:bg-[#10B785]/10 group-hover:text-[#10B785]'
        }`}>
          <IconComponent className="h-5 w-5" />
        </div>
        
        <div className="flex-1">
          <h4 className={`text-sm font-semibold transition-colors duration-300 ${
            isSelected || isHovered
              ? 'text-[#10B785]'
              : 'text-foreground group-hover:text-[#10B785]'
          }`}>
            {feature.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Eye,
      title: "Live Room Availability Across All Branches",
      description: "Know which meeting rooms are free, occupied, or reserved at a glance with our real-time room management system."
    },
    {
      icon: Shield,
      title: "Smart Conflict Detection",
      description: "Our room booking software automatically prevents overlapping bookings to ensure seamless meeting scheduling."
    },
    {
      icon: Building2,
      title: "Multi-Location Room Management",
      description: "Centralized dashboard to manage all rooms across branches, campuses, or floors—ideal for large teams and growing companies."
    },
    {
      icon: Users,
      title: "Role-Based Room Booking Access",
      description: "Custom roles and permissions for admins, employees, and department heads. Simplify room booking based on organizational structure."
    },
    {
      icon: LayoutDashboard,
      title: "Dedicated Dashboards for Admins & Employees",
      description: "Admins manage, analyze, and audit—all from one portal. Employees enjoy a simple, intuitive booking experience."
    },
    {
      icon: Globe,
      title: "Web-Based Room Management Software",
      description: "Access from any device—laptop, desktop, tablet, or mobile. No downloads or installations needed."
    },
    {
      icon: BarChart3,
      title: "Room Booking Analytics",
      description: "Optimize space usage with data on peak hours, booking trends, and usage frequency."
    },
    {
      icon: Settings,
      title: "Booking Rules & Permissions",
      description: "Set who can book which room, for how long, and when. Control access while maintaining flexibility."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -200px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayFeature = hoveredFeature !== null ? features[hoveredFeature] : selectedFeature !== null ? features[selectedFeature] : null;

  return (
    <section ref={sectionRef} className="py-20 flex items-center bg-background">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Powerful Features for{" "}
            <span className="text-[#10B785]">
              Complete Control
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Everything you need to transform your meeting room management from chaos to control
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - First 4 Features */}
          <div className={`space-y-4 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}>
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard
                  key={index}
                feature={feature}
                index={index}
                isSelected={selectedFeature === index}
                isHovered={hoveredFeature === index}
                onSelect={() => setSelectedFeature(index)}
                onHover={() => setHoveredFeature(index)}
                onLeave={() => setHoveredFeature(null)}
              />
            ))}
          </div>

          {/* Middle Column - Feature Card */}
          <div className={`lg:sticky lg:top-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-large border border-[#10B785]/10 h-fit">
              {displayFeature ? (
                <>
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#10B785] to-[#0E9A73] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <displayFeature.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-primary mb-2">
                      {displayFeature.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed font-secondary text-lg">
                      {displayFeature.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src={SpacebeeLogo}
                      alt="Spacebee Room Management"
                      className="mx-auto w-full max-w-[300px] bg-white rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-primary mb-4">
                    Choose a Feature to Learn More
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-secondary text-lg">
                    Click on any feature card to explore how Spacebee transforms your room management experience.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Last 4 Features */}
          <div className={`space-y-4 transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12'
          }`}>
            {features.slice(4, 8).map((feature, index) => {
              const actualIndex = index + 4;
              return (
                <FeatureCard
                  key={actualIndex}
                  feature={feature}
                  index={actualIndex}
                  isSelected={selectedFeature === actualIndex}
                  isHovered={hoveredFeature === actualIndex}
                  onSelect={() => setSelectedFeature(actualIndex)}
                  onHover={() => setHoveredFeature(actualIndex)}
                  onLeave={() => setHoveredFeature(null)}
                />
              );
            })}
            </div>
          </div>
        </div>
      </section>
  );
};

// Benefits Component
const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      stat: "10+",
      title: "Save 10+ Admin Hours Weekly",
      description: "Eliminate manual coordination. Automated room booking and conflict prevention means your admin team focuses on strategic work, not room logistics."
    },
    {
      icon: Shield,
      stat: "100%",
      title: "Double-Booking Elimination",
      description: "Real-time availability and smart conflict detection ensure no more awkward \"who booked this room?\" moments."
    },
    {
      icon: TrendingDown,
      stat: "80%",
      title: "Reduction in Room Complaints",
      description: "Clear visibility and fair room booking rules mean happier employees and fewer frustrated emails to admin."
    },
    {
      icon: Building2,
      stat: "Full",
      title: "Multi-Branch Visibility",
      description: "See and manage all spaces and rooms from one dashboard, whether you have 2 offices or 20."
    },
    {
      icon: Heart,
      stat: "95%",
      title: "User Satisfaction Rate",
      description: "Intuitive interface that employees actually want to use. No training headaches, no adoption issues."
    },
    {
      icon: Zap,
      stat: "24h",
      title: "24-Hour Implementation",
      description: "Get up and running fast. Import your team, set up rooms, define rules and go live in under a day."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#10B785]/5 to-white">
      <div className="container mx-auto px-4">
            <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            From Chaos to{" "}
            <span className="bg-gradient-to-r from-[#10B785] to-[#10B785] bg-clip-text text-transparent">
              Control
            </span>{" "}
            in 24 Hours
              </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Transform your meeting room management and see immediate results across your organization
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-[#10B785]/10 hover:border-[#10B785]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B785]/5 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-[#10B785]" />
                    </div>
                    <div className="text-xl font-bold text-[#10B785] group-hover:text-[#0E9A73] transition-colors duration-300">
                      {benefit.stat}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight font-primary">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-secondary">
                    {benefit.description}
                        </p>
                      </div>
                    </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <div className="inline-block bg-[#10B785]/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#bookademo">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-[#10B785] text-white hover:bg-[#0E9A73] h-14 rounded-lg px-10 text-xl">
                  Book a Demo
                </button>
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
  );
};

const SocialProofSection = () => {
  const stats = [
    { number: "100+", label: "Happy Clients", color: "blue" },
    { number: "95%", label: "Retention Rate", color: "red" },
    { number: "50+", label: "Team Members", color: "green" },
    { number: "95%", label: "Hours saved", color: "yellow" }
  ];

  // Get the same testimonials as home page
  const homePageTestimonials = getHomePageTestimonials();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
          Trusted Room Management System by 200+ Organizations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start md:items-center">
          {/* Single Testimonial Card - Left Side */}
          <div className="w-full order-1 lg:order-1">
            <TestimonialCarousel 
              testimonials={homePageTestimonials}
              variant="single"
              autoPlayInterval={5000}
              enableAutoPlay={true}
              className="w-full"
            />
          </div>

          {/* Stats Grid - Right Side */}
          <div className="w-full order-2 lg:order-2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const colorClasses = {
                  blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-blue-700",
                  red: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 text-red-700", 
                  green: "bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-700",
                  yellow: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-700"
                };
                
                return (
                  <div key={index} className="text-center group">
                    <div className={`rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border h-full flex flex-col justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm font-medium opacity-80">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </section>
  );
};

// Onboarding Component
const Onboarding = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: Building2,
      step: "Step 1",
      title: "Add branches and meeting rooms",
      description: "Add all your branches and meeting spaces in minutes. Our team helps with bulk import if needed."
    },
    {
      icon: Upload,
      step: "Step 2", 
      title: "Import employee data (CSV supported)",
      description: "Upload employee data with instant location mapping. CSV import makes it effortless."
    },
    {
      icon: Settings,
      step: "Step 3",
      title: "Set room booking permissions",
      description: "Control who can book what, when, and how far in advance. Set it once, forget it forever."
    },
    {
      icon: Palette,
      step: "Step 4",
      title: "Customize with Your Branding",
      description: "Match the platform to your company colors, logo, and theme. Make it feel like your own."
    },
    {
      icon: Rocket,
      step: "Step 5",
      title: "Go Live in 24 Hours",
      description: "Launch organization-wide booking with full team onboarding and support."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            if (entry.isIntersecting) {
              // Card comes into view - add to visible set
              setVisibleSteps(prev => new Set([...prev, index]));
            } else {
              // Card goes out of view - remove from visible set
              setVisibleSteps(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation 100px before element enters viewport
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-[#10B785]/5 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/spacebee/steps_bg.png')`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground font-primary">
            Easy Setup for Your{" "}
            <span className="bg-gradient-to-r from-[#10B785] to-[#10B785] bg-clip-text text-[#10B785]">
              Room Booking Software
            </span>
              </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-secondary px-4">
            Get your entire organization up and running with our simple 5-step process
              </p>
            </div>
            
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            const isVisible = visibleSteps.has(index);
            
            return (
              <div 
                key={index} 
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-500 border border-[#10B785]/10 mb-6 relative overflow-hidden min-h-[200px] md:min-h-[180px] lg:h-48 flex flex-col justify-between">
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10B785]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Step number in top right corner */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#10B785]/10 rounded-full flex items-center justify-center border border-[#10B785]/20">
                      <span className="text-[#10B785] font-bold text-sm md:text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pr-12 md:pr-16">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 font-primary">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-secondary text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
          </div>
        </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#10B785] via-[#0E9A73] to-[#10B785]/80 rounded-2xl p-12 shadow-medium border border-[#10B785]/20">
            <h3 className="text-3xl font-bold text-white mb-4 font-primary">
              Ready to get started?
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-secondary">
              Most organizations are live within 24 hours
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#bookademo">
                <button className="bg-white text-[#10B785] hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book a Free Demo
                </button>
              </a>
                </div>
            </div>
          </div>
        </div>
      </section>
  );
};

// FAQ Component
const FAQ = () => {
  return (
    <ReusableFAQ 
      faqData={spacebeeFAQData}
      title="Frequently Asked Questions About Room Booking Software"
      activeBackgroundColor="bg-[#10B785]/5"
      sectionBackgroundColor="bg-muted/30"
      showCTA={false}
    />
  );
};

const Spacebee = () => {
  return (
    <PageLayout>
      <SEO
        title="Room Management System | Spacebee"
        description="Transform your room booking with Spacebee - smart room management system with live availability, conflict detection, and multi-location support. Save 10+ admin hours weekly and eliminate double-bookings."
        keywords="room management system, room booking software, meeting room booking, conference room management, room scheduling, office space management, room availability, booking system, facility management, room reservation, meeting room scheduler, office booking system"
        url="/products/spacebee"
        image="https://kanishkasoftware.com/images/spacebee-og.png"
        type="website"
      />
      <Hero />
      <PainPoints />
      <Features />
      <Benefits />
      <SocialProofSection />
      <Onboarding />
      <FAQ />
    </PageLayout>
  );
};

export default Spacebee;
