import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ArrowRight, CheckCircle, Utensils, Smartphone, CreditCard, Users, BarChart3, Clock, ChefHat, Building2, MapPin, Shield, TrendingUp, Zap, Building, GraduationCap, Hospital, Home, Database, Wifi, RefreshCw,  Lock, Settings, Globe} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ContactForm from '@/components/forms/ContactForm';
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { foodiisoftFAQData } from '@/data/faq/foodiisoft';
import SEO from '@/components/SEO';

const Foodiisoft = () => {
  const headlines = [
    "Turn Your Cafeteria into a Smart Dining Experience.",
    "The Future of Workplace Dining Is Here.",
    "Feed 500+ Employees. Manage It Like 10."
  ];

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = headlines[currentHeadlineIndex];
    
    const typingSpeed = 75; // From customization panel
    const deletingSpeed = 50; // From customization panel
    const pauseDuration = 1500; // From customization panel
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next headline
          setIsDeleting(false);
          setCurrentHeadlineIndex((prevIndex) => 
            prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentHeadlineIndex, headlines]);
  const comprehensiveFeatures = [
    {
      icon: Smartphone,
      title: "Smart Mobile Cafeteria System",
      description: "Smart Mobile Cafeteria Management System with Self-Service Ordering and Seamless Digital Payments.",
      highlights: ["Self-Ordering", "Live Menu Updates", "Pre-orders", "Digital Payments"]
    },
    {
      icon: ChefHat,
      title: "Kitchen Management & Chef Display",
      description: "Canteen Management System to Streamline Kitchen Operations with Real-Time Orders and Inventory Tracking.",
      highlights: ["Live Orders", "Order Tracking", "Inventory Sync", "Recipe Management"]
    },
    {
      icon: Building2,
      title: "Corporate Cafeteria Management Solutions",
      description: "Corporate Cafeteria Management System for Employee Meals, Billing, Nutrition, and Attendance Tracking.",
      highlights: ["Meal Management", "Departmental Billing", "Nutritional Tracking", "Attendance Sync"]
    },
    {
      icon: MapPin,
      title: "Multi-Location Management",
      description: "Multi-Location Canteen Management System with Centralized Control and Consolidated Reporting Across Sites.",
      highlights: ["Centralized Control", "Location-Specific Menus", "Unified Reports", "Chain Management"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Advanced Cafeteria Management System Analytics to Optimize Sales, Inventory, and Customer Behavior.",
      highlights: ["Sales Insights", "Inventory Optimization", "Customer Analysis", "Financial Reports"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure Canteen Management System with Data Encryption, PCI Compliance, and Full Audit Trails.",
      highlights: ["Data Encryption", "PCI Compliance", "User Access Control", "Audit Trail"]
    }
  ];

  const additionalFeatures = [
    { icon: CreditCard, title: "Multiple Payment Options", description: "Support for various payment methods" },
    { icon: Clock, title: "Real-time Updates", description: "Instant synchronization across all devices" },
    { icon: Users, title: "User Management", description: "Role-based access and permissions" },
    { icon: Utensils, title: "Menu Customization", description: "Flexible menu management system" },
    { icon: TrendingUp, title: "Performance Analytics", description: "Detailed insights and metrics" },
    { icon: Zap, title: "Quick Setup", description: "Fast deployment and configuration" }
  ];


  const solutions = [
    {
      icon: Building,
      title: "Corporate Offices",
      subtitle: "Best Cafeteria Management System for Corporate Offices",
      features: [
        "Employee dining programs with comprehensive cafeteria management software",
        "Flexible employee meals",
        "Department-wise billing",
        "Productivity-focused dining",
      ],
      stats: { clients: "200+", satisfaction: "98%" },
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      subtitle: "Complete Canteen Management System for Schools, Colleges, and Hostels",
      features: [
        "Student meal management",
        "Dietary compliance",
        "Mess & cafeteria solutions",
        "Campus-wide oversight",
      ],
      stats: { clients: "150+", satisfaction: "96%" },
    },
    {
      icon: Hospital,
      title: "Healthcare Facilities",
      subtitle: "Specialized Cafeteria Management System for Hospitals and Healthcare Centers",
      features: [
        "Patient meal tracking",
        "Staff cafeteria operations",
        "Dietary compliance",
        "Multi-department coordination",
      ],
      stats: { clients: "100+", satisfaction: "99%" },
    },
    {
      icon: Home,
      title: "Multi-Tenant Complexes",
      subtitle: "Multi-Location Cafeteria Management System for Residential and Commercial Complexes",
      features: [
        "Shared dining facilities",
        "Tenant-specific billing",
        "Scalable operations",
        "Community dining & events",
      ],
      stats: { clients: "80+", satisfaction: "97%" },
    },
  ];

  const technologyFeatures = [
    {
      icon: null,
      title: "Android-Powered Efficiency",
      features: [
        {
          icon: Globe,
          title: "Cross-Device Compatibility",
          description: "Works seamlessly on tablets, smartphones, and desktops"
        },
        {
          icon: Wifi,
          title: "Offline Capabilities", 
          description: "Continue cafeteria operations during connectivity issues"
        },
        {
          icon: RefreshCw,
          title: "Cloud Synchronization",
          description: "Real-time data sync across devices with our cafeteria management solution"
        },
        {
          icon: Zap,
          title: "Regular Updates",
          description: "Continuous feature enhancements for optimal performance"
        }
      ]
    },
    {
      icon: Settings,
      title: "Integration Capabilities",
      features: [
        {
          icon: Database,
          title: "ERP Integration",
          description: "Connect our canteen management system with existing business systems"
        },
        {
          icon: CheckCircle,
          title: "HR System Integration",
          description: "Employee data synchronization with our corporate cafeteria management software"
        },
        {
          icon: CreditCard,
          title: "Accounting Software",
          description: "Automated financial reporting and cost tracking"
        },
        {
          icon: Smartphone,
          title: "POS System Integration",
          description: "Seamless payment processing with our cafeteria system"
        }
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      features: [
        {
          icon: Lock,
          title: "Data Encryption",
          description: "Secure customer and business information in our cafeteria management software"
        },
        {
          icon: CreditCard,
          title: "PCI Compliance",
          description: "Safe payment processing standards"
        },
        {
          icon: CheckCircle,
          title: "User Access Control",
          description: "Role-based permissions for different user types"
        },
        {
          icon: Database,
          title: "Audit Trail",
          description: "Complete transaction tracking and compliance reporting"
        }
      ]
    }
  ];


  return (
    <PageLayout>
      <SEO
        title="Best Cafeteria Management System | Foodiisoft"
        description="Transform your cafeteria operations with Foodiisoft - the leading cafeteria management system designed for corporate offices, educational institutions, hospitals, and multi-tenant facilities. Increase revenue by 40% and reduce food waste by 30%."
        keywords="cafeteria management system, corporate cafeteria management, food ordering system, canteen management software, employee dining solutions, cafeteria automation, digital menu management, online food ordering, corporate dining, hospital cafeteria, school canteen management, multi-location cafeteria, Android-based cafeteria system"
        url="/products/foodiisoft"
        image="https://kanishkasoftware.com/images/foodiisoft-og.png"
        type="website"
      />
      
      {/* Hero Section */}
      <section className="relative py-4 sm:py-6 md:py-8 lg:py-12 bg-gradient-to-br from-green-50 via-green-100 to-green-50 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Main Capsule Container */}
          <div className="bg-green-50/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[6rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-green-200/60">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Hero content */}
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left lg:flex-1">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start py-2">
                  <img
                    src="/src/assets/Foodiisoft/Foodiisoft.png"
                    alt="Foodiisoft"
                    className="w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] bg-white rounded-lg p-2"
                  />
                </div>
                
                <div className="relative h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center lg:justify-start">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-800 font-primary">
                    <span className="block">
                      {displayedText}
                      <span className="animate-pulse text-green-600">_</span>
                    </span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-secondary px-2 lg:px-0">
                  Complete Cafeteria Management System to automate food ordering, payments and inventory tracking.
                </p>
              </div>

              {/* Right side - Demo Form */}
              <div className="w-full lg:w-auto lg:flex-shrink-0" id="bookademo">
                <ContactForm
                  cardClassName="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Features Section */}
      <section id="features" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
              Comprehensive Cafeteria Management System Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {comprehensiveFeatures.map((feature, index) => {
              const colors = [
                { 
                  icon: 'text-green-600 group-hover:text-blue-700', 
                  title: 'text-foreground group-hover:text-blue-700',
                  gradient: 'from-blue-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-blue-500 group-hover:to-blue-600',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-red-700', 
                  title: 'text-foreground group-hover:text-red-700',
                  gradient: 'from-red-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-red-500 group-hover:to-red-600',
                  border: 'hover:border-red-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-green-700', 
                  title: 'text-foreground group-hover:text-green-700',
                  gradient: 'from-green-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-green-500 group-hover:to-green-600',
                  border: 'hover:border-green-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-yellow-700', 
                  title: 'text-foreground group-hover:text-yellow-700',
                  gradient: 'from-yellow-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-yellow-500 group-hover:to-yellow-600',
                  border: 'hover:border-yellow-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-blue-700', 
                  title: 'text-foreground group-hover:text-blue-700',
                  gradient: 'from-blue-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-blue-500 group-hover:to-blue-600',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-red-700', 
                  title: 'text-foreground group-hover:text-red-700',
                  gradient: 'from-red-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-red-500 group-hover:to-red-600',
                  border: 'hover:border-red-200/50'
                }
              ];
              
              const colorScheme = colors[index % colors.length];
              
              return (
                <Card key={index} className={`group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${colorScheme.border} overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardHeader className="space-y-4 relative z-10">
                    <div className="flex items-center space-x-3">
                      <feature.icon className={`h-6 w-6 ${colorScheme.icon} transition-colors duration-300`} />
                      <CardTitle className={`text-xl ${colorScheme.title} transition-colors duration-300`}>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <CardDescription className="text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-gray-600 transition-colors duration-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${colorScheme.bullet} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => {
              const colors = [
                { 
                  icon: 'text-blue-600 group-hover:text-blue-700', 
                  title: 'group-hover:text-blue-700',
                  background: 'bg-blue-50 group-hover:bg-blue-100',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  icon: 'text-red-600 group-hover:text-red-700', 
                  title: 'group-hover:text-red-700',
                  background: 'bg-red-50 group-hover:bg-red-100',
                  border: 'hover:border-red-200/50'
                },
                { 
                  icon: 'text-green-600 group-hover:text-green-700', 
                  title: 'group-hover:text-green-700',
                  background: 'bg-green-50 group-hover:bg-green-100',
                  border: 'hover:border-green-200/50'
                },
                { 
                  icon: 'text-yellow-600 group-hover:text-yellow-700', 
                  title: 'group-hover:text-yellow-700',
                  background: 'bg-yellow-50 group-hover:bg-yellow-100',
                  border: 'hover:border-yellow-200/50'
                },
                { 
                  icon: 'text-blue-600 group-hover:text-blue-700', 
                  title: 'group-hover:text-blue-700',
                  background: 'bg-blue-50 group-hover:bg-blue-100',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  icon: 'text-red-600 group-hover:text-red-700', 
                  title: 'group-hover:text-red-700',
                  background: 'bg-red-50 group-hover:bg-red-100',
                  border: 'hover:border-red-200/50'
                }
              ];
              
              const colorScheme = colors[index % colors.length];
              
              return (
                <Card key={index} className={`group text-center p-6 border-0 shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 ${colorScheme.background} ${colorScheme.border}`}>
                  <feature.icon className={`h-10 w-10 mx-auto mb-4 group-hover:scale-110 ${colorScheme.icon} transition-all duration-300`} />
                  <h3 className={`font-semibold text-sm mb-2 ${colorScheme.title} transition-colors duration-300`}>{feature.title}</h3>
                <p className="text-xs text-muted-foreground group-hover:text-gray-600 transition-colors duration-300">{feature.description}</p>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
              Cafeteria Management System Solutions by Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const colors = [
                { 
                  title: 'group-hover:text-blue-700',
                  subtitle: 'text-green-600 group-hover:text-blue-700',
                  stats: 'text-green-600 group-hover:text-blue-700',
                  statsSecondary: 'text-green-500 group-hover:text-blue-600',
                  gradient: 'from-blue-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-blue-500 group-hover:to-blue-600',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  title: 'group-hover:text-red-700',
                  subtitle: 'text-green-600 group-hover:text-red-700',
                  stats: 'text-green-600 group-hover:text-red-700',
                  statsSecondary: 'text-green-500 group-hover:text-red-600',
                  gradient: 'from-red-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-red-500 group-hover:to-red-600',
                  border: 'hover:border-red-200/50'
                },
                { 
                  title: 'group-hover:text-green-700',
                  subtitle: 'text-green-600 group-hover:text-green-700',
                  stats: 'text-green-600 group-hover:text-green-700',
                  statsSecondary: 'text-green-500 group-hover:text-green-600',
                  gradient: 'from-green-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-green-500 group-hover:to-green-600',
                  border: 'hover:border-green-200/50'
                },
                { 
                  title: 'group-hover:text-yellow-700',
                  subtitle: 'text-green-600 group-hover:text-yellow-700',
                  stats: 'text-green-600 group-hover:text-yellow-700',
                  statsSecondary: 'text-green-500 group-hover:text-yellow-600',
                  gradient: 'from-yellow-100/50',
                  bullet: 'from-green-500 to-green-600 group-hover:from-yellow-500 group-hover:to-yellow-600',
                  border: 'hover:border-yellow-200/50'
                }
              ];
              
              const colorScheme = colors[index % colors.length];
              
              return (
              <Card
                key={index}
                  className={`group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${colorScheme.border} overflow-hidden relative`}
              >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardHeader className="space-y-4 relative z-10">
                  <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className={`text-2xl mb-2 ${colorScheme.title} transition-colors duration-300`}>
                          {solution.title}
                        </CardTitle>
                        <div className={`text-sm font-medium ${colorScheme.subtitle} transition-colors duration-300`}>
                          {solution.subtitle}
                        </div>
                    </div>
                      <div className="text-right ml-4">
                      <div className="flex space-x-4">
                        <div>
                            <div className={`text-2xl font-bold ${colorScheme.stats} transition-colors duration-300`}>
                            {solution.stats.clients}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Clients
                          </div>
                        </div>
                        <div>
                            <div className={`text-2xl font-bold ${colorScheme.statsSecondary} transition-colors duration-300`}>
                            {solution.stats.satisfaction}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Satisfaction
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                  <CardContent className="space-y-3 relative z-10">
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground group-hover:text-gray-600 transition-colors duration-300"
                      >
                          <div className={`w-2 h-2 bg-gradient-to-r ${colorScheme.bullet} rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-large">
              <CardContent className="py-12">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Cafeteria Operations?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Join hundreds of organizations already using our cafeteria
                  management system
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#bookademo">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      Book a Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
              Advanced Android-Based Cafeteria Management Software
            </h2>
          </div>

          {/* Technology Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((section, index) => {
              const colors = [
                { 
                  title: 'text-yellow-700 group-hover:text-yellow-800',
                  background: 'bg-yellow-50 group-hover:bg-yellow-100',
                  gradient: 'from-yellow-100/50',
                  icon: 'text-yellow-600 group-hover/feature:text-yellow-700',
                  featureTitle: 'text-foreground group-hover/feature:text-yellow-700',
                  border: 'hover:border-yellow-200/50'
                },
                { 
                  title: 'text-blue-700 group-hover:text-blue-800',
                  background: 'bg-blue-50 group-hover:bg-blue-100',
                  gradient: 'from-blue-100/50',
                  icon: 'text-blue-600 group-hover/feature:text-blue-700',
                  featureTitle: 'text-foreground group-hover/feature:text-blue-700',
                  border: 'hover:border-blue-200/50'
                },
                { 
                  title: 'text-red-700 group-hover:text-red-800',
                  background: 'bg-red-50 group-hover:bg-red-100',
                  gradient: 'from-red-100/50',
                  icon: 'text-red-600 group-hover/feature:text-red-700',
                  featureTitle: 'text-foreground group-hover/feature:text-red-700',
                  border: 'hover:border-red-200/50'
                }
              ];
              
              const colorScheme = colors[index % colors.length];
              
              return (
                <Card key={index} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${colorScheme.background} ${colorScheme.border} overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <CardHeader className="pb-6 relative z-10">
                    <CardTitle className={`text-2xl mb-6 ${colorScheme.title} transition-colors duration-300`}>{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                    <div className="space-y-4">
                    {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/feature">
                          <feature.icon className={`h-5 w-5 ${colorScheme.icon} transition-colors duration-300 mt-1 flex-shrink-0`} />
                          <div>
                            <h3 className={`font-semibold text-sm ${colorScheme.featureTitle} transition-colors duration-300 mb-1`}>{feature.title}</h3>
                            <p className="text-xs text-muted-foreground group-hover/feature:text-gray-600 transition-colors duration-300">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground font-primary">
              Ready to Transform Your Cafeteria?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-secondary">
              Contact us today to learn more about Foodiisoft Cafeteria Management System
            </p>      
          <a href="#bookademo">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
          </div>
        </div>
      </section>

       {/* FAQ Section */}
       <ReusableFAQ 
        faqData={foodiisoftFAQData}
        title="Frequently Asked Questions About Cafeteria Management System"
        activeBackgroundColor="bg-green-50"
        sectionBackgroundColor="bg-background"
        showCTA={false}
      />
    </PageLayout>
  );
};

export default Foodiisoft;
