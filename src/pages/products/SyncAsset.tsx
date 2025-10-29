import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, QrCode, Eye, Settings, AlertTriangle, MapPin, Calculator, Wrench, FileCheck, Puzzle, Building2, Hospital, Factory, GraduationCap, Monitor, Phone, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import CardSwap, { Card as CardSwapCard } from '@/components/ui/CardSwap';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import { getHomePageTestimonials } from '@/data/testimonials';
import ContactForm from '@/components/forms/ContactForm';
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { syncAssetFAQData } from '@/data/faq/syncAsset';
import SEO from '@/components/SEO';
// Using local images
import problemSolutionImage from "@/assets/syncasset/problem_solution.jpg";
const qrScanningImage = problemSolutionImage; // QR code scanning


const HeroSection: React.FC = () => {

  return (
    <section className="relative py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 overflow-hidden">
      
      
      <div className="container mx-auto px-2 sm:px-4">
        <div className="w-full">
            <div className="bg-blue-50/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100/60 overflow-hidden p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left side - Content */}
                <div className="space-y-4 lg:space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-sm">
                    <img 
                    src="/src/assets/syncasset/asset-management.png" 
                    alt="Asset Management System" 
                    className="h-16 w-auto"
                />
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight font-primary">
                    Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Asset Management</span> with SYNC's Digital Solutions
            </h1>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-secondary">
                    Track, maintain, and optimize every asset seamlessly from procurement to disposal. QR code tracking meets automated workflows for complete visibility.
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-blue-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <QrCode className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-slate-800 font-semibold text-sm">QR Tracking</h3>
                          <p className="text-slate-600 text-xs">Instant ID</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-blue-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="text-slate-800 font-semibold text-sm">Live Monitoring</h3>
                          <p className="text-slate-600 text-xs">Real-time</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-blue-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Settings className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                          <h3 className="text-slate-800 font-semibold text-sm">Auto Workflows</h3>
                          <p className="text-slate-600 text-xs">Smart AI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - CardSwap Component (Desktop only) */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] h-[400px]">
                    {/* Animated CardSwap Component */}
                    <CardSwap
                      width="100%"
                      height="100%"
                      cardDistance={40}
                      verticalDistance={50}
                      delay={4000}
                      pauseOnHover={false}
                      skewAmount={0}
                    >
                      <CardSwapCard>
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=center" 
                            alt="QR Code scanning for asset tracking"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <QrCode className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">QR Code Tracking</h3>
                            <p className="text-sm opacity-90">Instant asset identification with 99.9% accuracy</p>
                          </div>
                        </div>
                      </CardSwapCard>
                      <CardSwapCard>
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop&crop=center" 
                            alt="Digital dashboard monitoring assets"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <Eye className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                            <p className="text-sm opacity-90">Live tracking and instant status updates</p>
                          </div>
                        </div>
                      </CardSwapCard>
                      <CardSwapCard>
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=center" 
                            alt="Automated warehouse with smart systems"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <Settings className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
                            <p className="text-sm opacity-90">Automated workflows and maintenance alerts</p>
                          </div>
                        </div>
                      </CardSwapCard>
                    </CardSwap>
                  </div>
                </div>

                {/* Desktop Only - Explore Now Button at bottom of left column */}
                <div className="hidden lg:block">
                  <button 
                    onClick={() => {
                      // Responsive scroll behavior
                      console.log('Explore Now button clicked');
                      
                      // Check if desktop (lg and above)
                      if (window.innerWidth >= 1024) {
                        // Desktop: scroll to ValueProposition form
                        const formElement = document.querySelector('[data-form="desktop-value-proposition"]');
                        console.log('Desktop form element found:', formElement);
                        
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else {
                          console.log('Desktop form not found, trying fallback');
                          const section = document.querySelector('section');
                          if (section) {
                            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      } else {
                        // Mobile/Tablet: scroll to Hero form
                        const heroForm = document.querySelector('[data-form="mobile-hero"]');
                        console.log('Mobile/Tablet hero form element found:', heroForm);
                        
                        if (heroForm) {
                          heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else {
                          console.log('Hero form not found, scrolling to top');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>Get Free Demo</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                      </div>

                {/* Mobile/Tablet Form */}
                <div className="lg:hidden" data-form="mobile-hero">
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

const ValueProposition = () => {

  const features = [
    {
      icon: Eye,
      title: "Complete Visibility",
      points: [
        "QR/Barcode tracking for instant identification",
        "Real-time location monitoring across departments",
        "Digital audit trails for compliance",
      ],
    },
    {
      icon: Zap,
      title: "Automated Intelligence",
      points: [
        "Automated depreciation calculations",
        "Preventive maintenance alerts",
        "AMC renewal notifications",
      ],
    },
    {
      icon: Puzzle,
      title: "Seamless Integration",
      points: [
        "HRMS/ERP system compatibility",
        "Customizable workflows",
        "Department-wise reporting",
      ],
    },
  ];

  return (
      <section className="py-20">
      <div className="container mx-auto px-4">
            <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Why Choose SYNC Asset Management System?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Experience the power of comprehensive asset tracking with our advanced digital solutions.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
            {/* Left side - Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, index) => {
                const colorSchemes = [
                  {
                    iconBg: 'bg-red-50',
                    iconHover: 'group-hover:bg-red-100',
                    iconColor: 'text-red-600',
                    iconHoverColor: 'group-hover:text-red-700',
                    accentLine: 'bg-red-500',
                    titleHover: 'group-hover:text-red-700',
                    bulletColor: 'bg-red-500'
                  },
                  {
                    iconBg: 'bg-green-50',
                    iconHover: 'group-hover:bg-green-100',
                    iconColor: 'text-green-600',
                    iconHoverColor: 'group-hover:text-green-700',
                    accentLine: 'bg-green-500',
                    titleHover: 'group-hover:text-green-700',
                    bulletColor: 'bg-green-500'
                  },
                  {
                    iconBg: 'bg-yellow-50',
                    iconHover: 'group-hover:bg-yellow-100',
                    iconColor: 'text-yellow-600',
                    iconHoverColor: 'group-hover:text-yellow-700',
                    accentLine: 'bg-yellow-500',
                    titleHover: 'group-hover:text-yellow-700',
                    bulletColor: 'bg-yellow-500'
                  }
                ];
                
                const colors = colorSchemes[index % colorSchemes.length];
                
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden border-0 ${colors.iconBg} hover:${colors.iconBg.replace('50', '100')} transition-all duration-300 hover:shadow-lg`}
                  >
                    <CardContent className="p-8">
                      {/* Modern Icon Design */}
                      <div className="relative mb-6">
                        <div className={`w-14 h-14 ${colors.iconBg.replace('50', '100')} rounded-2xl flex items-center justify-center transition-colors duration-300`}>
                          <feature.icon className={`w-7 h-7 ${colors.iconColor.replace('600', '700')} transition-colors duration-300`} />
                        </div>
                        {/* Subtle accent line */}
                        <div className={`absolute -bottom-2 left-0 w-8 h-0.5 ${colors.accentLine} rounded-full opacity-100 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-xl font-semibold text-slate-900 mb-4 ${colors.titleHover} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      
                      {/* Points List - Minimal Design */}
                      <ul className="space-y-3">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                            <div className={`w-1.5 h-1.5 ${colors.bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Right side - Form  */}
            <div className="hidden lg:block lg:sticky lg:top-8 w-full" data-form="desktop-value-proposition">
              <ContactForm 
                cardClassName="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-200/50 w-full"
              />
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const problems = [
    "Lost or misplaced assets",
    "Missed maintenance schedules", 
    "Manual audit complications",
    "Lack of accountability"
  ];

  const solutions = [
    "QR code asset identification system",
    "Automated maintenance scheduling",
    "One-click digital audit reports", 
    "Complete asset history tracking"
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Eliminate Manual Asset Tracking Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Transform your asset management with our comprehensive digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <span>Common Challenges</span>
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 border-r-0 border-t-0 border-b-0 bg-red-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-800 font-medium">{problem}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={qrScanningImage} 
                alt="Professional scanning QR code on equipment"
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                      </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <span>SYNC Solutions</span>
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 border-r-0 border-t-0 border-b-0 bg-blue-50/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-800 font-medium">{solution}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>
  );
};

const FeaturesShowcase = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR/Barcode Tracking",
      description: "Generate and print custom QR codes, mobile scanning capabilities, instant asset identification"
    },
    {
      icon: MapPin,
      title: "Real-time Monitoring", 
      description: "Location tracking across branches, ownership assignment, status updates"
    },
    {
      icon: Calculator,
      title: "Automated Calculations",
      description: "Depreciation tracking, asset valuation reports, financial compliance"
    },
    {
      icon: Wrench,
      title: "Maintenance Management",
      description: "Preventive maintenance alerts, AMC renewal reminders, service history tracking"
    },
    {
      icon: FileCheck,
      title: "Audit & Compliance",
      description: "Digital audit logs, compliance reporting, role-based access control"
    },
    {
      icon: Puzzle,
      title: "Integration Ready",
      description: "HRMS system integration, ERP compatibility, custom API connections"
    }
  ];

  const getColorClasses = (index: number) => {
    const colorSchemes = [
      {
        bg: "bg-blue-50",
        iconColor: "text-blue-600",
        titleColor: "text-blue-700"
      },
      {
        bg: "bg-red-50",
        iconColor: "text-red-600",
        titleColor: "text-red-700"
      },
      {
        bg: "bg-green-50",
        iconColor: "text-green-600",
        titleColor: "text-green-700"
      },
      {
        bg: "bg-yellow-50",
        iconColor: "text-yellow-600",
        titleColor: "text-yellow-700"
      }
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-cyan-100/20"></div>
      <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Comprehensive Asset Lifecycle Management Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Discover the powerful features that make SYNC the leading asset management solution.
          </p>
            </div>
            
        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <img 
              src="/src/assets/syncasset/warehouse-assets.jpg" 
              alt="Modern warehouse with QR coded equipment and digital asset management"
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center">
              <div className="text-white p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Real-World Asset Management in Action
                </h3>
                <p className="text-lg text-white/90">
                  See how SYNC transforms traditional warehouses into smart, digitally-tracked environments
                        </p>
                      </div>
                    </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(index);
            
            return (
              <Card key={index} className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group ${colors.bg} border-white/20 hover:border-white/30 relative overflow-hidden`}>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 pointer-events-none"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-6 h-6 ${colors.iconColor} transition-colors duration-300`} />
                  </div>
                  <CardTitle className={`text-lg font-semibold ${colors.titleColor} transition-colors duration-300`}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const IndustryApplications = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const industries = [
    {
      title: "Banks & NBFCs",
      description: "Secure asset tracking with compliance reporting for regulatory compliance, and audit trail management.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      icon: Building2,
      features: ["Regulatory Compliance", "Audit Trail Management", "Secure Asset Tracking", "Financial Reporting"]
    },
    {
      title: "Hospitals & Labs",
      description: "Medical equipment tracking with maintenance scheduling, compliance monitoring.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-red-600 to-red-800",
      icon: Hospital,
      features: ["Medical Equipment Tracking", "Maintenance Scheduling", "Compliance Monitoring", "Critical Asset Management"]
    },
    {
      title: "Manufacturing Plants", 
      description: "Industrial equipment monitoring with preventive maintenance alerts, production line asset tracking, and safety compliance.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-green-600 to-green-800",
      icon: Factory,
      features: ["Industrial Equipment Monitoring", "Preventive Maintenance", "Production Line Tracking", "Safety Compliance"]
    },
    {
      title: "Educational Institutes",
      description: "Campus-wide asset management for equipment and facilities, student resource tracking.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-yellow-600 to-yellow-800",
      icon: GraduationCap,
      features: ["Campus-wide Management", "Student Resource Tracking", "Educational Technology", "Facility Management"]
    },
    {
      title: "IT & Tech Companies",
      description: "Technology asset lifecycle management with automated workflows, software license tracking, and hardware inventory.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-blue-600 to-blue-800",
      icon: Monitor,
      features: ["Technology Lifecycle Management", "Software License Tracking", "Hardware Inventory", "Automated Workflows"]
    },
    {
      title: "Facility Management",
      description: "Multi-location facility asset tracking and maintenance coordination, building management.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-red-600 to-red-800",
      icon: Settings,
      features: ["Multi-location Tracking", "Maintenance Coordination", "Building Management", "Operational Efficiency"]
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
    <section className="py-12 md:py-20 bg-background" id="industries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Asset Management Solutions Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            SYNC serves diverse industries with tailored asset management solutions.
          </p>
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
                    onError={(e) => {
                      // Fallback to a gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div className={`hidden absolute inset-0 bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <industry.icon className="w-8 h-8" />
                </div>
                      <span className="text-sm font-medium">{industry.title}</span>
                    </div>
                  </div>
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

const SocialProofSection = () => {
  const stats = [
    { number: "500+", label: "Assets Tracked", color: "blue" },
    { number: "99%", label: "Accuracy Rate", color: "red" },
    { number: "50+", label: "Happy Clients", color: "green" },
    { number: "75%", label: "Time Saved", color: "yellow" }
  ];

  // Get the same testimonials as home page
  const homePageTestimonials = getHomePageTestimonials();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
            Join Organizations Saving Time and Money with SYNC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            See what our clients say about their experience with SYNC.
          </p>
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

const FAQ = () => {
  return (
    <ReusableFAQ 
      faqData={syncAssetFAQData}
      title="Frequently Asked Questions About SYNC Asset Management"
      activeBackgroundColor="bg-blue-50"
      sectionBackgroundColor="bg-muted/30"
      showCTA={false}
    />
  );
};

const DemoCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-50/50 border-t border-b border-blue-200/30">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-800">
            See SYNC in Action
          </h3>
          <p className="text-slate-600">
            Ready to streamline your asset management? Book a personalized demo and see how SYNC can transform your operations.
          </p>
       <div className="pt-4 text-center">
          <Button 
            size="lg" 
            onClick={() => {
              // Responsive scroll behavior
              console.log('DemoCTA button clicked');
              
              // Check if desktop (lg and above)
              if (window.innerWidth >= 1024) {
                // Desktop: scroll to ValueProposition form
                const formElement = document.querySelector('[data-form="desktop-value-proposition"]');
                console.log('Desktop form element found:', formElement);
                
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  console.log('Desktop form not found, trying fallback');
                  const section = document.querySelector('section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              } else {
                // Mobile/Tablet: scroll to Hero form
                const heroForm = document.querySelector('[data-form="mobile-hero"]');
                console.log('Mobile/Tablet hero form element found:', heroForm);
                
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  console.log('Hero form not found, scrolling to top');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl"
          >
            Book a Free Demo
          </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold mb-4 text-white font-primary">
              Ready to Transform Your Asset Management?
            </h2>
          <p className="text-xl text-white/90 leading-relaxed font-secondary">
            Join hundreds of organizations already saving time and money with SYNC's comprehensive asset management solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => {
                // Responsive scroll behavior
                console.log('CTA button clicked');
                
                // Check if desktop (lg and above)
                if (window.innerWidth >= 1024) {
                  // Desktop: scroll to ValueProposition form
                  const formElement = document.querySelector('[data-form="desktop-value-proposition"]');
                  console.log('Desktop form element found:', formElement);
                  
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    console.log('Desktop form not found, trying fallback');
                    const section = document.querySelector('section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                } else {
                  // Mobile/Tablet: scroll to Hero form
                  const heroForm = document.querySelector('[data-form="mobile-hero"]');
                  console.log('Mobile/Tablet hero form element found:', heroForm);
                  
                  if (heroForm) {
                    heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    console.log('Hero form not found, scrolling to top');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
              className="bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl"
            >
              Book a Free Demo 
            </Button>
          </div>
          </div>
        </div>
      </section>
  );
};

const DemoForm = () => {
  return (
    <section className="py-20" id="bookademo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
              Get Your Free Demo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-secondary">
              See how SYNC can transform your asset management. Book a personalized demo and discover the power of digital asset tracking.
            </p>
          </div>

          <ContactForm
            showTitle={false}
            cardClassName="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-200/50"
          />
          </div>
        </div>
      </section>
  );
};

const SyncAsset = () => {
  return (
    <PageLayout>
      <SEO
        title="Complete Asset Management Solutions | Asset Tracking Platform"
        description="Streamline asset tracking from procurement to disposal with Sync Assets QR code system, automated maintenance alerts and real-time monitoring."
        keywords="asset management system, QR code asset tracking, asset tracking software, inventory management, asset maintenance, asset lifecycle management, QR code scanning, asset optimization, digital asset management, asset monitoring, equipment tracking, facility management, complete asset management solutions, asset tracking platform"
        url="/products/asset-management"
        image="https://kanishkasoftware.com/images/sync-asset-og.png"
        type="website"
        faqData={[...syncAssetFAQData.left, ...syncAssetFAQData.right]}
      />
      <HeroSection />
      <ValueProposition />
      <ProblemSolution />
      <FeaturesShowcase />
      <DemoCTA />
      <IndustryApplications />
      <SocialProofSection />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default SyncAsset;


