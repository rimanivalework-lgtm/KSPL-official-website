import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, AlertTriangle, BarChart3, Shield, Unlink, TrendingUp, Target, DollarSign, Scale, ChevronDown, ChevronUp, Building2, Heart, GraduationCap, Settings, UserPlus, Link, Play } from "lucide-react";
import PageLayout from '@/components/layout/PageLayout';
import ContactForm from '@/components/forms/ContactForm';
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { ourAttendanceFAQData } from '@/data/faq/ourAttendance';
import SEO from '@/components/SEO';


const HeroSection: React.FC = () => {

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 overflow-hidden py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_2.8fr] gap-0">
            {/* Left side - All text content */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-6 lg:p-8 text-white flex flex-col justify-center min-h-[400px] lg:min-h-auto">
              <div className="mb-4 sm:mb-6 space-y-4">
                <div className="inline-block bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl border border-white/20">
                  <img 
                    src="/src/assets/attendance/smart-attendance-management-system.png" 
                    alt="Smart Attendance Management System" 
                    className="h-8 sm:h-10 lg:h-12 w-auto"
                  />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight font-primary">
                Transform Your Workplace with{" "}
                <span className="text-yellow-300 block sm:inline">
                  Smart Attendance Management System
                </span>
              </h1>
              
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90 leading-relaxed font-secondary">
                Advanced face recognition attendance system for accurate, real-time attendance tracking and comprehensive workforce management
              </p>

              <div className="space-y-2 sm:space-y-3">
                {[
                  "99.9% accurate face detection attendance system",
                  "Real-time attendance software with GPS tracking",
                  "Location-verified attendance tracker with detailed reports",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-sm sm:text-base text-white/90 font-secondary leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Demo Form */}
            <div className="p-1 sm:p-6 lg:p-8 flex items-center">
              <div className="w-full" id="bookademo">
                <ContactForm
                  cardClassName="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    employees: 0,
    accuracy: 0,
    support: 0
  });

  const stats = [
    { 
      number: counts.projects, 
      suffix: "+", 
      label: "Projects Completed",
      target: 100,
      duration: 2000
    },
    { 
      number: counts.employees, 
      suffix: "+", 
      label: "Employees Tracked Daily",
      target: 2000,
      duration: 2500
    },
    { 
      number: counts.accuracy, 
      suffix: "%", 
      label: "System Accuracy Rate",
      target: 99.9,
      duration: 1800
    },
    { 
      number: counts.support, 
      suffix: "/7", 
      label: "Technical Support",
      target: 24,
      duration: 1500
    }
  ];

  const countUp = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;
    
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      
      callback(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset counts to 0 when entering view
          setCounts({
            projects: 0,
            employees: 0,
            accuracy: 0,
            support: 0
          });
          
          // Start counting animations with slight delays
          setTimeout(() => countUp(0, 100, 2000, (value) => setCounts(prev => ({ ...prev, projects: value }))), 100);
          setTimeout(() => countUp(0, 2000, 2500, (value) => setCounts(prev => ({ ...prev, employees: value }))), 200);
          setTimeout(() => countUp(0, 99.9, 1800, (value) => setCounts(prev => ({ ...prev, accuracy: value }))), 300);
          setTimeout(() => countUp(0, 24, 1500, (value) => setCounts(prev => ({ ...prev, support: value }))), 400);
        } else {
          // Reset counts to 0 when leaving view
          setCounts({
            projects: 0,
            employees: 0,
            accuracy: 0,
            support: 0
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const clientTypes = [
    { icon: Building2, label: "Fortune 500 Companies", count: "50+", color: "from-blue-500 to-blue-600" },
    { icon: Heart, label: "Healthcare Facilities", count: "30+", color: "from-red-500 to-red-600" },
    { icon: Shield, label: "Government Organizations", count: "25+", color: "from-green-500 to-green-600" },
    { icon: GraduationCap, label: "Educational Institutions", count: "75+", color: "from-yellow-500 to-yellow-600" }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Trusted by Leading Organizations Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Join thousands of organizations that trust our smart attendance management system
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="bg-gray-100 rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            return (
                 <div key={index} className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 w-[280px]">
                   <div className="flex items-center gap-3">
                     <div className="flex items-center justify-center flex-shrink-0">
                       <IconComponent className="h-5 w-5 text-blue-500" />
                   </div>
                     <div className="flex-1">
                       <h3 className="font-bold text-sm mb-1 text-gray-900 group-hover:text-blue-600 transition-colors font-primary">
                         {client.label}
                       </h3>
                       <p className="text-xs text-gray-600">
                     {client.count} Clients
                       </p>
                     </div>
                   </div>
                 </div>
            );
          })}
          </div>
        </div>

        {/* Stats Section */}
        <div id="stats-section" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-px h-12 bg-blue-200 transform -translate-y-1/2"></div>
                )}
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  {stat.number}{stat.suffix}
              </div>
                <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap justify-center items-center gap-4 md:gap-4 lg:gap-3">
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-sm md:w-full lg:w-auto lg:max-w-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-900">ISO Certified</span>
              </div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-sm md:w-full lg:w-auto lg:max-w-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-red-600" />
                </div>
                <span className="font-semibold text-gray-900">11+ Years Excellence</span>
              </div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-sm md:w-full lg:w-auto lg:max-w-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Settings className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-semibold text-gray-900">Expert Implementation</span>
              </div>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full max-w-sm md:w-full lg:w-auto lg:max-w-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="font-semibold text-gray-900">Industry Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Attendance Tracking",
      description: "Time-consuming manual processes, human errors in data entry, and buddy punching issues plague traditional systems."
    },
    {
      icon: AlertTriangle, 
      title: "Inaccurate Time Logging",
      description: "Proxy attendance marking, time theft, and unreliable attendance records create payroll discrepancies."
    },
    {
      icon: BarChart3,
      title: "Complex Reporting", 
      description: "Manual report generation, data inconsistencies, and limited analytics capabilities waste valuable time."
    },
    {
      icon: Shield,
      title: "Security Concerns",
      description: "Unauthorized access, identity verification issues, and data breach vulnerabilities threaten your organization."
    },
    {
      icon: Unlink,
      title: "Integration Challenges",
      description: "Disconnected systems, data silos, and manual data transfer create operational inefficiencies."
    },
    {
      icon: TrendingUp,
      title: "Scalability Issues",
      description: "System limitations, performance bottlenecks, and expensive upgrades hinder business growth."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Common Attendance Management Challenges We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Traditional attendance systems create more problems than they solve. Our smart attendance management system eliminates these pain points.
          </p>
        </div>

        {/* Desktop/Tablet Timeline layout */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-destructive/20 via-destructive/40 to-destructive/20 rounded-full"></div>
          
          <div className="space-y-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
              const isLeft = index % 2 === 0;
              
            return (
                <div key={index} className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-destructive to-destructive/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-white" />
                </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-destructive transition-colors font-primary">
                  {problem.title}
                </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-destructive rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Mobile Horizontal Scroller */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              
              return (
                <div key={index} className="flex-shrink-0 w-72 h-56">
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-left h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-destructive to-destructive/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-destructive transition-colors">
                        {problem.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3 font-primary">
              Ready to Solve These Problems?
            </h3>
            <p className="text-muted-foreground mb-6 font-secondary">
              Let us show you how our smart attendance management system can eliminate these challenges for your organization.
            </p>
          <a href="#bookademo">
              <button className="bg-gradient-to-r from-destructive to-destructive/80 text-white px-8 py-3 rounded-xl font-semibold hover:from-destructive/90 hover:to-destructive/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book A Free Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

//import { Card, CardContent } from "@/components/ui/card";



const StickyFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Real-Time Face Detection",
      subtitle: "Next-Gen Biometric Attendance",
      description: "Leverage cutting-edge facial recognition technology to automate and secure your workforce attendance with unmatched precision and speed. Our advanced AI-powered system ensures accurate employee identification without any physical contact.",
      bullets: [
        "Advanced facial recognition technology with 99.9% accuracy",
        "Instant attendance logging and real-time processing",
        "Anti-spoofing protection against photos and videos",
        "Works in all lighting conditions and environments"
      ],
      image: "/src/assets/attendance/smart-attendance-kiosk.jpeg",
      alt: "Real-time facial recognition system"
    },
    {
      title: "Smart Attendance Tracker",
      subtitle: "Seamless Real-Time Monitoring",
      description: "Track employee attendance as it happens with powerful dashboards, real-time updates, and comprehensive monitoring capabilities. Get instant insights into workforce presence across multiple locations.",
      bullets: [
        "Live attendance monitoring with real-time updates",
        "Multi-location tracking and management",
        "Advanced anti-spoofing technology",
        "Instant notifications and alerts for managers"
      ],
      image: "/src/assets/attendance/attendance-analytics-report.jpeg",
      alt: "Smart attendance monitoring dashboard"
    },
    {
      title: "Fraud-Proof Security",
      subtitle: "Advanced Identity Protection",
      description: "Ensure the integrity of attendance data with 3D facial mapping, video/photo fraud detection, and location-aware verification. Protect your organization from attendance manipulation and unauthorized access.",
      bullets: [
        "3D facial mapping for enhanced security",
        "Photo/video fraud prevention technology",
        "GPS location tracking and verification",
        "Biometric data encryption and secure storage"
      ],
      image: "/src/assets/attendance/biometric-attendance-dashboard.jpeg",
      alt: "Fraud prevention and secure identity verification"
    },
    {
      title: "Location-Based Validation",
      subtitle: "Geo-Secure Attendance Control",
      description: "Accurately verify attendance based on geographical data, ensuring employees check in from authorized locations only. Implement geo-fencing and location-based policies for enhanced security.",
      bullets: [
        "GPS-based location verification",
        "Geo-fenced attendance zones",
        "Latitude and longitude tracking",
        "Location-based policy enforcement"
      ],
      image: "/src/assets/attendance/mobile-attendance-app-interface.jpeg",
      alt: "Geo-fenced attendance validation system"
    },
    {
      title: "Comprehensive Analytics",
      subtitle: "Data-Driven Workforce Insights",
      description: "Gain actionable insights into workforce behavior with detailed reports, productivity metrics, and overtime tracking. Make informed decisions with comprehensive attendance analytics.",
      bullets: [
        "Detailed attendance reports and analytics",
        "Overtime tracking and calculation",
        "Productivity insights and trends",
        "Customizable dashboard and reporting"
      ],
      image: "/src/assets/attendance/real-time-attendance-monitoring.jpeg",
      alt: "Attendance analytics and workforce insights"
    },
    {
      title: "Seamless Integration",
      subtitle: "Connect with Your HR Ecosystem",
      description: "Effortlessly integrate attendance data with your existing HR, payroll, and business systems for smooth operations. Ensure data consistency across all platforms.",
      bullets: [
        "HR system compatibility and integration",
        "Payroll system connectivity",
        "API connectivity for custom solutions",
        "Real-time data synchronization"
      ],
      image: "/src/assets/attendance/facial-recognition-attendance-system.jpeg",
      alt: "Seamless HR and payroll system integration"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const featureElements = document.querySelectorAll('.feature-block');
    const imageContainer = document.querySelector('.sticky-image-container');

    const handleScroll = () => {
      featureElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        
        if (isInView) {
          setActiveFeature(index);
        }
      });
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [isVisible]);

  const throttle = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
        Advanced Face Recognition Attendance System Features
      </h2>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Sticky Image */}
          <div className="lg:sticky lg:top-24">
            <div className="sticky-image-container relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Descriptions */}
          <div className="space-y-24 pb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-block transition-all duration-500 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <h3 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                  activeFeature === index ? 'text-primary' : 'text-primary/70'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-secondary">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                        activeFeature === index ? 'bg-primary' : 'bg-primary/70'
                      }`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="mb-6">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary font-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-secondary">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Enhanced Accuracy",
      description: "Eliminate buddy punching, ensure precise time tracking, and maintain reliable attendance data for payroll accuracy."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction", 
      description: "Reduce administrative costs, minimize payroll errors, and lower operational expenses through automation."
    },
    {
      icon: Shield,
      title: "Improved Security",
      description: "Face-based authentication, secure data storage, and access control integration protect your organization."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automated processes, instant report generation, and reduced manual work free up valuable time for strategic tasks."
    },
    {
      icon: Scale,
      title: "Scalable Solution",
      description: "Support unlimited users, multi-site deployment, and future-ready technology that grows with your business."
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Labor law compliance, audit trail maintenance, and regulatory reporting ensure you meet all requirements."
    }
  ];

  const getColorClasses = (index: number) => {
    const colorSchemes = [
      {
        hoverBg: "hover:bg-blue-50",
        hoverIconColor: "group-hover:text-blue-600",
        hoverTitleColor: "group-hover:text-blue-700"
      },
      {
        hoverBg: "hover:bg-red-50",
        hoverIconColor: "group-hover:text-red-600",
        hoverTitleColor: "group-hover:text-red-700"
      },
      {
        hoverBg: "hover:bg-green-50",
        hoverIconColor: "group-hover:text-green-600",
        hoverTitleColor: "group-hover:text-green-700"
      },
      {
        hoverBg: "hover:bg-yellow-50",
        hoverIconColor: "group-hover:text-yellow-600",
        hoverTitleColor: "group-hover:text-yellow-700"
      }
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Why Choose Our Location Based Attendance System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Experience measurable improvements in accuracy, efficiency, and cost savings with our advanced smart attendance solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colors = getColorClasses(index);
            
            return (
              <div key={index} className={`group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 rounded-lg p-5 border transform hover:-translate-y-1 ${colors.hoverBg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent className={`h-6 w-6 text-gray-600 ${colors.hoverIconColor} transition-colors duration-300`} />
                  <h3 className={`text-lg font-semibold text-foreground ${colors.hoverTitleColor} transition-colors duration-300`}>
                  {benefit.title}
                </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-secondary">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {

  const steps = [
    {
      icon: Settings,
      title: "System Installation",
      description: "Hardware setup and configuration, software installation and testing, network connectivity establishment",
      timeline: "1-2 days",
      details: ["Hardware setup and configuration", "Software installation and testing", "Network connectivity establishment"]
    },
    {
      icon: UserPlus,
      title: "Employee Registration",
      description: "Face data capture and storage, employee profile creation, database setup and verification",
      timeline: "1 day",
      details: ["Face data capture and storage", "Employee profile creation", "Database setup and verification"]
    },
    {
      icon: Link,
      title: "System Integration",
      description: "HR system connectivity, payroll integration setup, custom workflow configuration",
      timeline: "2-3 days",
      details: ["HR system connectivity", "Payroll integration setup", "Custom workflow configuration"]
    },
    {
      icon: Play,
      title: "Go Live & Support",
      description: "System launch and monitoring, staff training and support, ongoing maintenance and updates",
      timeline: "Ongoing",
      details: ["System launch and monitoring", "Staff training and support", "Ongoing maintenance and updates"]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Simple 4-Step Face Attendance System Implementation
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop/Tablet Layout - Premium Horizontal Timeline */}
          <div className="block">
            <div className="relative">
              {/* Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
                  
                  return (
                    <div key={index} className="relative group h-full">
                      {/* Step Card */}
                      <div className="bg-white rounded-xl p-5 shadow-lg border-2 border-yellow-200 bg-yellow-50/30 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 hover:bg-yellow-50/50 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-500 text-white font-bold text-sm flex-shrink-0">
                            {index + 1}
                        </div>
                          <h3 className="text-lg font-bold text-yellow-700 font-primary leading-tight">
                            {step.title}
                          </h3>
                        </div>

                        <div className="space-y-2 mb-4 flex-1">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground font-secondary">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 mt-1.5"></div>
                              <span className="leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 w-fit">
                          <Clock className="h-4 w-4 mr-2" />
                          {step.timeline}
                          </div>
                  </div>
                </div>
              );
            })}
        </div>

            </div>
          </div>

        </div>

     
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const industries = [
    {
      title: "Corporate Offices",
      description: "Multi-floor attendance management, visitor tracking integration, meeting room access control.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop&crop=center",
      features: ["Multi-floor tracking", "Visitor management", "Access control", "Executive reporting"]
    },
    {
      title: "Manufacturing",
      description: "Shift-based attendance tracking, safety compliance monitoring, production floor access control.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=300&fit=crop&crop=center",
      features: ["Shift management", "Safety compliance", "Production tracking", "Overtime monitoring"]
    },
    {
      title: "Healthcare",
      description: "Contactless attendance system, department-wise tracking, critical area access management.", 
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=300&fit=crop&crop=center",
      features: ["Contactless scanning", "Department tracking", "Critical area access", "Hygiene compliance"]
    },
    {
      title: "Education",
      description: "Student and staff attendance, campus-wide deployment, parent notification systems.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop&crop=center",
      features: ["Student tracking", "Campus-wide system", "Parent notifications", "Academic reporting"]
    },
    {
      title: "Retail",
      description: "Store-wise attendance tracking, seasonal workforce management, multi-location reporting.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
      features: ["Multi-store tracking", "Seasonal workforce", "Location reporting", "POS integration"]
    },
    {
      title: "Construction",
      description: "Site-specific attendance, worker safety tracking, project-based reporting.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop&crop=center",
      features: ["Site-specific tracking", "Safety monitoring", "Project reporting", "Equipment access"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Attendance Tracking System Solutions Across Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const isExpanded = expandedCards.includes(index);
            
            return (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
        </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2 font-primary">
                    {industry.title}
                  </h3>
                  
                  {/* Desktop Hover Content */}
                  <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl p-4 shadow-lg mt-4">
                      <p className="text-gray-800 text-sm leading-relaxed mb-3">
                        {industry.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {industry.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                            <span className="text-gray-700 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile/Tablet Expand Content */}
                  <div className="lg:hidden">
                    {isExpanded && (
                      <div className="animate-in slide-in-from-bottom-2 duration-300 mt-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <p className="text-gray-800 text-sm leading-relaxed mb-3">
                            {industry.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-2">
                            {industry.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                                <span className="text-gray-700 text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Expand Icon - Mobile/Tablet Only */}
                  <div 
                    className="lg:hidden absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <svg 
                      className={`w-4 h-4 text-white transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-Time Face Detection",
      description: "Advanced facial recognition technology with instant attendance logging and 99.9% accuracy rate.",
      benefits: ["3D face mapping", "Anti-spoofing protection", "Works in all lighting"]
    },
    {
      title: "Smart Attendance Tracker",
      description: "Live attendance monitoring with real-time updates and comprehensive dashboard analytics.",
      benefits: ["Instant notifications", "Live status updates", "Mobile accessibility"]
    },
    {
      title: "Anti-Spoofing Technology",
      description: "Photo/video fraud prevention with advanced security measures and identity verification.",
      benefits: ["Liveness detection", "Secure authentication", "Fraud prevention"]
    },
    {
      title: "GPS Location Verification",
      description: "Latitude and longitude verification with geo-fenced attendance zones and location-based validation.",
      benefits: ["Geo-fencing", "Location verification", "Multi-site support"]
    },
    {
      title: "Comprehensive Analytics",
      description: "Detailed attendance reports, overtime tracking, and productivity insights with custom dashboards.",
      benefits: ["Custom reports", "Trend analysis", "Performance metrics"]
    },
    {
      title: "Seamless Integration",
      description: "HR system compatibility, payroll integration, and API connectivity for existing workflows.",
      benefits: ["API integration", "Data synchronization", "System compatibility"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50/80 to-yellow-100/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Advanced Technology
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Advanced Face Recognition Attendance System Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-secondary">
            Experience the power of cutting-edge technology with our comprehensive smart attendance management solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-2xl"></div>
              <img
                src="/src/assets/aws-partner-logo.png"
                alt="Smart attendance system dashboard showing real-time analytics and face recognition data"
                className="relative rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            
            <h3 className="text-3xl font-bold mb-6 text-foreground font-primary">
              Real-Time Dashboard & Analytics
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-secondary">
              Monitor attendance patterns, track employee productivity, and generate insightful reports with our intuitive dashboard that provides actionable business intelligence.
            </p>
            <div className="space-y-4">
              {["Live employee status tracking", "Automated report generation", "Customizable analytics widgets", "Mobile-responsive interface"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="pt-4 text-center">
          <a href="#bookademo">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all">
                Book A Demo
              </button>
            </a>
        </div>
      </div>
    </section>
  );
};


const FAQSection = () => {
  return (
    <ReusableFAQ 
      faqData={ourAttendanceFAQData}
      title="Frequently Asked Questions About Our Smart Attendance System"
      activeBackgroundColor="bg-yellow-50"
      sectionBackgroundColor="bg-muted/30"
      showCTA={false}
    />
  );
};
const ContactQuoteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground font-primary">
              Get Your Smart Attendance Management System Today
            </h2>
            <div className="flex justify-center">
              <a href="#bookademo">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurAttendance = () => {
  return (
    <PageLayout>
      <SEO
        title="Smart Attendance Management System | Location Based Attendance Software"
        description="Our Attendance is a face recognition attendance system with real-time tracking. Our smart attendance software streamlines attendance management with advanced face and location detection technology"
        keywords="smart attendance management system, face recognition attendance system, real time attendance system, location based attendance software, face scanning attendance system, attendance tracker, face attendance system, real time attendance software, attendance tracking system, face detection attendance system, biometric attendance, GPS attendance tracking, attendance automation, workforce management"
        url="/smart-attendance-management-system"
        image="https://kanishkasoftware.com/images/our-attendance-og.png"
        type="website"
        faqData={[...ourAttendanceFAQData.left, ...ourAttendanceFAQData.right]}
      />
      <HeroSection />
      <TrustSection />
      <ProblemsSection />
      <StickyFeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <FAQSection />
      <ContactQuoteSection />
    </PageLayout>
  );
};
export default OurAttendance;
