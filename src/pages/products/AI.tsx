import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { ArrowRight, Play, Clock, AlertTriangle, Rocket, X, CheckCircle, Star, Users, Phone, MessageCircle, Bot, Headphones, Share2, FileText, Calendar, User, Mail, Building, Phone as PhoneIcon, Check } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { workflowData } from '@/data/workflowData';
import { aiFAQData } from '@/data/faq/ai';
import SEO from '@/components/SEO';
import heroImage from "@/assets/hero-automation.jpg";
import ksplLogo from "@/assets/kspl-logo.webp";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useToast } from "@/hooks/use-toast";

// Hero Section
interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="py-10 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight font-primary">
              Automate Your Work,{" "}
              <br />
              <span className="text-primary">Focus On Growth.</span>
            </h1>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-slate-600 leading-relaxed max-w-2xl font-secondary">
              Stop Wasting Time On Repetitive Tasks. Our Powerful, Pre-Built N8N Workflows Connect Your Apps And Automate Complex Processes In Minutes, Not Days.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('demo')}
                className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
              >
                <Rocket className="h-5 w-5" />
                <span>Book A Free Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => onNavigate('how-it-works')}
                className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-3"
              >
                <Play className="h-5 w-5" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src={heroImage}
                alt="Workflow automation illustration showing interconnected apps"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-100/50 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-red-100/50 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsVideoPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      observer.disconnect();
    };
  }, []);
  
  const steps = [
    {
      number: "1",
      title: "Choose Your Workflow",
      description: "Browse Our Library And Pick The Automation You Need."
    },
    {
      number: "2", 
      title: "We Configure Everything",
      description: "We Set It Up With Your API Keys And Apps. Zero Code Required From You."
    },
    {
      number: "3",
      title: "You're Live!",
      description: "Review The Process And Start Saving Time Immediately."
    }
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold text-foreground mb-2 sm:mb-4">
            How It Works in <span className="text-primary">35 Seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
              <div className="aspect-video rounded-lg overflow-hidden bg-black shadow-md mb-4 relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/Transform Your Business Today-VEED.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Poster Overlay - shown when video is not playing */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
                    <img
                      src={ksplLogo}
                      alt="KANISHKA SOFTWARE"
                      className="w-2/3 sm:w-3/4 max-w-sm h-auto object-contain mb-4 sm:mb-6"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="mb-4 sm:mb-6">
                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.play();
                          }
                        }}
                        className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="Play video"
                      >
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 ml-1" fill="currentColor" />
                      </button>
                    </div>
                    
                    {/* Overlay Text */}
                    <div className="text-center px-4">
                      <p className="text-xs sm:text-sm md:text-base font-bold text-white">
                        Transform Your Business Today
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <p className="text-sm md:text-base text-muted-foreground font-dmsans">
                  Watch How Our AI-Powered Workflows Can Transform Your Business Operations In Just 35 Seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 flex items-center">
            <div className="space-y-6 sm:space-y-8 w-full">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed font-dmsans">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section
const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      color: "orange",
      title: "Time Drain",
      description: "Too Much Effort Wasted On Repetitive Tasks."
    },
    {
      icon: AlertTriangle,
      color: "orange",
      title: "Human Error",
      description: "One Mistake Can Lead To Unhappy Customers."
    },
    {
      icon: Rocket,
      color: "blue",
      title: "Growth Blocker",
      description: "Scaling Becomes Impossible With Broken Processes."
    }
  ];

  const getColorClasses = (color: string) => {
    return {
      iconBg: "bg-red-300",
      titleText: "text-red-400",
      cardBorder: "border-red-200",
      cardBg: "bg-red-50"
    };
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold text-foreground mb-4 sm:mb-6">
            Common Business Challenges
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            These Productivity Barriers Are Holding Back Your Team's Potential And Preventing Sustainable Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const colors = getColorClasses(problem.color);
            return (
              <div
                key={problem.title}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colors.cardBorder} hover:${colors.cardBg}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${colors.iconBg} w-16 h-16 rounded-xl flex items-center justify-center shadow-md`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${colors.titleText} mb-2`}>
                      {problem.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Workflow Data now imported from external file

// Use Cases Section
interface UseCasesSectionProps {
  onWorkflowClick: (workflowId: string) => void;
}

const UseCasesSection = ({ onWorkflowClick }: UseCasesSectionProps) => {
  const workflows = [
    {
      id: "calling-agent",
      icon: Phone,
      title: "Calling Agent for Appointment Booking",
      description: "AI-powered calling agent that answers calls, books appointments automatically, and sends confirmations via SMS/WhatsApp."
    },
    {
      id: "whatsapp-bot",
      icon: MessageCircle,
      title: "WhatsApp Appointment/Personal Bot",
      description: "WhatsApp bot that handles appointment booking, personal assistant tasks, FAQs, and reminders with calendar integration."
    },
    {
      id: "interactive-ai-agent",
      icon: Bot,
      title: "AI Avatar Hub",
      description: "Bring human-like conversations to your business with AI-powered avatars that combine speech, facial expressions, and real-time intelligence."
    },
    {
      id: "customer-support-bot",
      icon: Headphones,
      title: "Customer Support Bot with Jira + Email",
      description: "AI-powered support bot that auto-replies to emails, creates tickets in Jira, and assigns issues to developers automatically."
    },
    {
      id: "social-media-bot",
      icon: Share2,
      title: "Social Media Content & Engagement Bot",
      description: "AI-powered bot that generates posts, schedules them across platforms, auto-replies to comments, and tracks performance."
    },
    {
      id: "ai-report-generator",
      icon: FileText,
      title: "AI Report & Summary Generator",
      description: "Upload documents and meeting transcripts. AI generates concise summaries, highlights key decisions, and extracts action items."
    }
  ];

  // Icon map for the workflows
  const iconMap: Record<string, any> = {
    "calling-agent": Phone,
    "whatsapp-bot": MessageCircle,
    "interactive-ai-agent": Bot,
    "customer-support-bot": Headphones,
    "social-media-bot": Share2,
    "ai-report-generator": FileText,
  };

  return (
    <section id="use-cases" className="py-10 sm:py-12 lg:py-16 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold text-foreground mb-4 sm:mb-6">
            Pre-Built Workflows, <span className="text-primary">Proven Results.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a solution and see the magic. Click on a use case to explore it in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workflows.map((workflow, index) => {
            const IconComponent = workflow.icon;
            return (
              <div
                key={workflow.id}
                className="bg-white rounded-xl shadow-md transition-all duration-300 p-6 cursor-pointer group transform will-change-transform hover:-translate-y-1 hover:scale-[1.12] hover:shadow-xl"
                onClick={() => onWorkflowClick(workflow.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="h-8 w-8 text-blue-600" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {workflow.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {workflow.description}
                </p>

                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Workflow Modal
interface WorkflowModalProps {
  workflow: any;
  onClose: () => void;
  onBookDemo: () => void;
}

const WorkflowModal = ({ workflow, onClose, onBookDemo }: WorkflowModalProps) => {
  useEffect(() => {
    if (workflow) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [workflow]);

  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      
      {/* Close button
      <button
        onClick={onClose}
        onTouchStart={onClose}
        className="fixed top-10 right-4 sm:top-6 sm:right-6 z-[60] p-3 sm:p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors cursor-pointer touch-manipulation"
        aria-label="Close workflow details"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <X className="h-6 w-6 sm:h-6 sm:w-6 text-foreground" />
      </button> */}

      {/* Content */}
      <div className="relative pt-16 sm:pt-20">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-100 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6">{workflow.icon}</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-inter">
                <span className="text-blue-600">{workflow.title.split(' ')[0]}</span>{' '}
                <span className="text-primary">{workflow.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-dmsans">
                {workflow.description}
              </p>
            </div>

            {/* Green Benefit Box */}
            <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 sm:p-5 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
              <p className="text-sm sm:text-base font-medium text-green-800">
                Sales Reps Get Clean, Qualified Bookings
              </p>
            </div>

            {/* Tabs/Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              {/* The Problem */}
              <div className="card-hover bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-300 group rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-800 group-hover:text-red-900 transition-colors duration-300 font-inter mb-3 sm:mb-4">
                  The Problem
                </h3>
                <p className="text-sm sm:text-base text-red-700 leading-relaxed group-hover:text-red-800 transition-colors duration-300 font-dmsans">
                  {workflow.problem}
                </p>
              </div>

              {/* Our Solution */}
              <div className="card-hover bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300 group rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300 font-inter mb-3 sm:mb-4">
                  Our Solution
                </h3>
                <p className="text-sm sm:text-base text-green-700 leading-relaxed group-hover:text-green-800 transition-colors duration-300 font-dmsans">
                  {workflow.solution}
                </p>
              </div>
            </div>

            {/* Apps Used */}
            <div className="card-hover mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🔗</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  Apps Connected
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {workflow.apps.map((app: string) => (
                  <div
                    key={app}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 text-center border border-blue-200 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 transition-colors duration-300">
                      <span className="text-blue-600 text-sm">📱</span>
                    </div>
                    <span className="font-medium text-blue-800 text-xs sm:text-sm group-hover:text-blue-900 transition-colors duration-300">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="card-hover mb-8 sm:mb-12">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                  Benefits & Time Saved
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {workflow.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-300 group">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </div>
                    <span className="text-xs sm:text-sm text-green-800 group-hover:text-green-900 transition-colors duration-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-red-600 rounded-xl p-6 sm:p-8 text-center text-white shadow-lg mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  20-25 hours
                </div>
                <div className="text-base sm:text-lg opacity-90">
                  Average Time Saved Per Week
                </div>
                <div className="mt-3 text-sm opacity-80">
                  ⏰ Time Is Money - Save Both With Automation
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={onBookDemo}
                onTouchStart={(e) => {
                  e.preventDefault();
                  onBookDemo();
                }}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 text-base sm:text-lg group min-h-[48px] touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span>Want This Workflow? Book A Demo</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="mt-3 text-xs sm:text-sm text-muted-foreground">
                🚀 Get Started In Minutes • No Setup Required • Free Consultation
              </div>
              
              {/* Interactive Stats */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center border border-blue-200">
                  <Users className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-blue-800 mb-1">200+</div>
                  <div className="text-sm text-blue-600">Happy Clients</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 sm:p-5 text-center border border-green-200">
                  <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">24/5</div>
                  <div className="text-sm text-green-600">Always Available</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center border border-blue-200">
                  <Star className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-blue-800 mb-1">4.7/5</div>
                  <div className="text-sm text-blue-600">Customer Rating</div>
                </div>
              </div>

              {/* Back to Use Cases Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const element = document.getElementById('use-cases');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="bg-white border-2 border-primary text-primary font-semibold py-3 px-6 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  ← Explore More Workflows
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Final CTA Section
interface FinalCTASectionProps {
  onNavigate: (section: string) => void;
}

const FinalCTASection = ({ onNavigate }: FinalCTASectionProps) => {
  return (
    <section id="demo" className="py-10 sm:py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold mb-4 sm:mb-6">
            Ready to Automate Your Operations?
          </h2>
          
          <p className="text-base sm:text-lg font-dmsans mb-6 sm:mb-8 text-primary-foreground/90 leading-relaxed">
            Let's find the perfect workflow for your business. Book a free, 30-minute demo 
            and we'll walk you through a live example.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-8 sm:mb-10">
            <button 
              onClick={() => onNavigate('demo')}
              className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base group"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Schedule Your Demo Now</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <p className="text-white text-xs sm:text-sm whitespace-nowrap">
              ✓ Free consultation ✓ No obligations ✓ Live demo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">30 min</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Free consultation</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Live demo</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">See it in action</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Same day</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">Setup available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Demo Booking Modal
interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoBookingModal = memo(({ isOpen, onClose }: DemoBookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [timeValidationError, setTimeValidationError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [countryCode, setCountryCode] = useState('91');
  const datePickerRef = useRef<HTMLDivElement>(null);
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "91",
    useCase: [] as string[],
    preferredTime: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    };

    if (showDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDatePicker]);

  useEffect(() => {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    if (selectedDate && formData.preferredTime) {
      setTimeout(() => {
        setShowNotification(true);
        notificationTimeoutRef.current = setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      }, 100);
    }

    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, [selectedDate, formData.preferredTime]);

  const useCases = [
    "E-Commerce Automation",
    "CRM Integration", 
    "Lead Generation",
    "Data Processing",
    "Slack Notifications",
    "Custom Workflow",
    "Calling Agent for Appointment Booking",
    "WhatsApp Appointment/Personal Bot"
  ];

  const timeSlots = [
    "Morning (9 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 7 PM)",
    "Flexible"
  ];

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleProduct = useCallback((product: string) => {
    setFormData(prev => {
      const products = prev.useCase as string[];
      if (products.includes(product)) {
        return { ...prev, useCase: products.filter(p => p !== product) };
      } else {
        return { ...prev, useCase: [...products, product] };
      }
    });
  }, []);

  const formatNotificationDate = (date: Date) => {
    return format(date, 'EEEE, MMM d');
  };

  const closeNotification = () => {
    setShowNotification(false);
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
  };

  const isTimeSlotAvailable = (slot: string) => {
    if (!selectedDate) return true;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);
    
    if (selected.getTime() !== today.getTime()) {
      return true;
    }
    
    const now = new Date();
    const currentHour = now.getHours();
    
    if (slot === "Morning (9 AM - 12 PM)" && currentHour >= 12) return false;
    if (slot === "Afternoon (12 PM - 4 PM)" && currentHour >= 16) return false;
    if (slot === "Evening (4 PM - 7 PM)" && currentHour >= 19) return false;
    
    return true;
  };

  const handleTimeSelection = (slot: string) => {
    setTimeValidationError("");
    
    if (!isTimeSlotAvailable(slot)) {
      setTimeValidationError("This time slot has passed for today. Please select a future time.");
      return;
    }
    
    handleInputChange("preferredTime", slot);
  };

  const handleNext = useCallback(() => {
    if (step < 3) {
      setStep(step + 1);
    }
  }, [step]);

  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
    }
  }, [step]);

  const handleSubmit = useCallback(async () => {
    try {
      // Get clean page name dynamically - same logic as ContactForm
      const currentPage =
        window.location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()) ||
        document.title ||
        "Unknown Page";

      const fullPhone = formData.phone;
      let mobileNumber = fullPhone;
      
      const dialCodeMatch = countryCode.match(/\d+/);
      const dialCodeNum = dialCodeMatch ? dialCodeMatch[0] : '91';
      
      if (fullPhone.startsWith(dialCodeNum)) {
        mobileNumber = fullPhone.substring(dialCodeNum.length);
      }

      const data: Record<string, string> = {
        page: currentPage,
        name: formData.name,
        email: formData.email,
        countrycode: countryCode,
        mobile: mobileNumber,
        companyname: formData.company,
        preferreddate: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
        preferredtime: formData.preferredTime,
        usecase: (formData.useCase as string[]).join(', '),
        message: formData.message || ''
      };

      const formBody = new URLSearchParams(data).toString();

      await fetch('https://script.google.com/macros/s/AKfycbwCmcHJViHzLb10vC2v1Nlz_kRtI_wXFnY6NRu527quQunJ7EfpYXCUHoI3xYhSsk3DQg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      setStep(4);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStep(4);
    }
  }, [formData, selectedDate, countryCode]);

  const handleCloseSuccess = useCallback(() => {
    toast({
      title: "Demo Booked Successfully! 🎉",
      description: "We'll send you a calendar invite within 15 minutes.",
    });
    
    setFormData({
      name: "", email: "", company: "", phone: "91",
      useCase: [], preferredTime: "", message: ""
    });
    setSelectedDate(undefined);
    setSelectedCountry('in');
    setCountryCode('91');
    setStep(1);
    onClose();
  }, [toast, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col shadow-2xl">
          {step !== 4 && (
            <div className="gradient-hero text-primary-foreground px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6 relative">
            <button
              onClick={onClose}
              onTouchStart={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 sm:p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer touch-manipulation z-10"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Close demo booking"
            >
              <X className="h-5 w-5 sm:h-5 sm:w-5" />
            </button>
            
            <div className="text-center">
              <Calendar className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Book Your Free Demo</h2>
              <p className="text-primary-foreground/90 text-sm sm:text-base">
                30-minute personalized workflow demonstration
              </p>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    i < step ? "bg-orange-500" : i === step ? "bg-orange-500" : "bg-blue-500"
                  }`}
                />
              ))}
            </div>
          </div>
          )}

          {showNotification && selectedDate && formData.preferredTime && step === 2 && (
            <div className="px-4 sm:px-6 pt-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-lg shadow-sm py-2.5 px-3 flex items-start gap-2.5 animate-slide-in-right">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-xs leading-tight mb-0.5">
                    Perfect! 🎯
                  </p>
                  <p className="text-[11px] leading-tight text-muted-foreground">
                    We'll reach out to you on <span className="text-primary font-semibold text-[11px]">{formatNotificationDate(selectedDate)}</span> during <span className="text-primary font-semibold text-[11px]">{formData.preferredTime}</span> to confirm your demo appointment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeNotification}
                  onTouchStart={closeNotification}
                  className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors p-2 -mt-0.5 cursor-pointer touch-manipulation"
                  aria-label="Close notification"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          <div className={`p-4 sm:p-6 flex-1 min-h-0 ${step === 4 ? '' : 'overflow-y-auto'}`}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tell us about yourself
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-600" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-gray-600" />
                      Mobile *
                    </label>
                    <PhoneInput
                      country={selectedCountry}
                      value={formData.phone}
                      onChange={(value, country: any) => {
                        handleInputChange("phone", value);
                        if (country?.iso2) {
                          setSelectedCountry(country.iso2);
                        }
                        if (country?.dialCode) {
                          setCountryCode(country.dialCode);
                        }
                      }}
                      inputClass="w-full h-[42px] px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      buttonClass="btn h-[36px]"
                      containerClass="phone-input-container"
                      containerStyle={{ width: '100%' }}
                      searchPlaceholder="Search"
                      placeholder="Mobile Number"
                      enableSearch={true}
                      specialLabel=""
                      countryCodeEditable={false}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What Interests You Most?
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Select AI Products * (Choose one or more)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {useCases.map((useCase) => {
                      const isSelected = (formData.useCase as string[]).includes(useCase);
                      return (
                        <button
                          key={useCase}
                          type="button"
                          onClick={() => toggleProduct(useCase)}
                          className={`p-4 rounded-lg border-2 flex items-start gap-3 min-h-[48px] touch-manipulation transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 bg-white hover:border-blue-300"
                          }`}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            isSelected ? "text-white fill-blue-600" : "text-gray-400 fill-transparent"
                          }`} />
                          <span className="text-sm font-medium text-gray-900 text-left">{useCase}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {formData.useCase.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-blue-600 mb-2">
                      Selected: {formData.useCase.length} products
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(formData.useCase as string[]).map((product) => (
                        <span
                          key={product}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium border border-blue-200"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={datePickerRef}>
                  <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-left flex items-center justify-between text-sm touch-manipulation hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
                        {selectedDate ? format(selectedDate, 'dd-MM-yyyy') : 'dd-mm-yyyy'}
                      </span>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </button>
                    {showDatePicker && (
                      <div className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            setShowDatePicker(false);
                            setTimeValidationError("");
                            
                            if (formData.preferredTime && !isTimeSlotAvailable(formData.preferredTime)) {
                              handleInputChange("preferredTime", "");
                              toast({
                                title: "⚠️ Time Updated",
                                description: "Previous time slot is no longer available for the selected date. Please choose a different time.",
                              });
                            }
                          }}
                          disabled={{ before: new Date() }}
                          initialFocus
                        />
                      </div>
                    )}
                  </div>
                  {selectedDate && (
                    <p className="mt-1 text-xs text-gray-500">Selected: {format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-600" />
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => {
                      const isAvailable = isTimeSlotAvailable(slot);
                      const isDisabled = !isAvailable && slot !== "Flexible";
                      
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => !isDisabled && handleTimeSelection(slot)}
                          onTouchStart={(e) => {
                            if (!isDisabled) {
                              e.preventDefault();
                              handleTimeSelection(slot);
                            }
                          }}
                          disabled={isDisabled}
                          className={`p-3 rounded-lg border-2 text-sm font-medium min-h-[48px] touch-manipulation transition-all ${
                            isDisabled
                              ? "opacity-40 cursor-not-allowed border-gray-200 bg-gray-100"
                              : formData.preferredTime === slot
                              ? "border-blue-500 bg-blue-50 text-gray-900"
                              : "border-gray-200 bg-white text-gray-900 hover:border-blue-300"
                          }`}
                          title={isDisabled ? "This time slot has passed for today" : ""}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  
                  {timeValidationError && (
                    <div className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                      ⚠️ {timeValidationError}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Almost done! Any specific requirements?
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm resize-none"
                    placeholder="Tell us about your current workflow challenges or specific requirements..."
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base">Demo Summary:</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div><strong>Contact:</strong> {formData.name} ({formData.email})</div>
                    <div><strong>Company:</strong> {formData.company}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div className="flex flex-col gap-1.5">
                      <strong>Products:</strong>
                      {(formData.useCase as string[]).length > 0 ? (
                        <div className="flex flex-wrap gap-1.5 mt-0.5">
                          {(formData.useCase as string[]).map((product, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-500">None selected</span>
                      )}
                    </div>
                    <div><strong>Date:</strong> {selectedDate ? format(selectedDate, 'dd-MM-yyyy') : 'Not selected'}</div>
                    <div><strong>Time:</strong> {formData.preferredTime}</div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5 text-center flex flex-col justify-center py-8">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demo Booked Successfully! 🎉
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xl mx-auto">
                    Thank you for choosing <strong className="text-blue-600">Kanishka Software</strong>. We'll contact you within 24 hours to schedule your personalized AI demo.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 max-w-lg mx-auto">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">What's Next?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-left">
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        1
                      </div>
                      <p className="text-sm text-gray-700 pt-1">Our team will review your requirements</p>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        2
                      </div>
                      <p className="text-sm text-gray-700 pt-1">We'll schedule your personalized demo</p>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        3
                      </div>
                      <p className="text-sm text-gray-700 pt-1">Get ready to transform your business with AI</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Join <strong className="text-blue-600">200+ organizations</strong> worldwide who trust our solutions.
                  </p>
                  
                  <button
                    onClick={handleCloseSuccess}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleCloseSuccess();
                    }}
                    className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all inline-flex items-center gap-2 min-h-[48px] touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    → Continue Exploring
                  </button>
                </div>
              </div>
            )}
          </div>

          {step !== 4 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
              <button
                onClick={handleBack}
                onTouchStart={(e) => {
                  if (step !== 1) {
                    e.preventDefault();
                    handleBack();
                  }
                }}
                disabled={step === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all text-sm min-h-[48px] touch-manipulation ${
                  step === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-900"
                }`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  onTouchStart={(e) => {
                    const isDisabled = (step === 1 && (!formData.name || !formData.email || !formData.company || !formData.phone || formData.phone === "91")) ||
                      (step === 2 && (formData.useCase.length === 0 || !selectedDate || !formData.preferredTime));
                    if (!isDisabled) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  disabled={
                    (step === 1 && (!formData.name || !formData.email || !formData.company || !formData.phone || formData.phone === "91")) ||
                    (step === 2 && (formData.useCase.length === 0 || !selectedDate || !formData.preferredTime))
                  }
                  className={`text-sm px-6 py-3 rounded-lg font-medium transition-all min-h-[48px] touch-manipulation ${
                    (step === 1 && (!formData.name || !formData.email || !formData.company || !formData.phone || formData.phone === "91")) ||
                    (step === 2 && (formData.useCase.length === 0 || !selectedDate || !formData.preferredTime))
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-sm px-6 py-3 rounded-lg min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl transition-all"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Book Demo Now 🚀
                </button>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
});

DemoBookingModal.displayName = 'DemoBookingModal';

// Main Component
const AIProduct = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Mount HeyGen widget only on the AI page and clean up on unmount
  useEffect(() => {
    const existing = document.getElementById('heygen-streaming-embed');
    if (existing) return; // prevent duplicates if hot-reloaded

    const host = "https://labs.heygen.com";
    const url = host + "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs%0D%0AInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi%0D%0AYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk%0D%0AUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiNzk0MTZkMjNhMWU5NDQ1%0D%0AYmEzZDI1ZTg3NDVmZDgyMjIiLCJ1c2VybmFtZSI6IjA2M2VlMzUwOTVmMzQyNzRiNzgwYWQ2NjE1%0D%0AZDNmMDcxIn0%3D&inIFrame=1";

    const clientWidth = document.body.clientWidth;
    const wrapDiv = document.createElement('div');
    wrapDiv.id = 'heygen-streaming-embed';
    const container = document.createElement('div');
    container.id = 'heygen-streaming-container';

    const stylesheet = document.createElement('style');
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        z-index: 9999;
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
        transition: all linear 0.1s;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${clientWidth < 540
          ? 'height: 280px; width: 90%; right: 50%; transform: translateX(50%); bottom: 20px;'
          : 'height: 400px; width: calc(400px * 16 / 9); right: 20px; bottom: 20px;'}
        border: 0;
        border-radius: 12px;
      }
      #heygen-streaming-container { width: 100%; height: 100%; }
      #heygen-streaming-container iframe { width: 100%; height: 100%; border: 0; }
      @media (max-width: 768px) { #heygen-streaming-embed { width: 100px; height: 100px; right: 15px; bottom: 15px; } }
      @media (max-width: 480px) { #heygen-streaming-embed { width: 80px; height: 80px; right: 10px; bottom: 10px; } }
    `;

    const iframe = document.createElement('iframe');
    iframe.allowFullscreen = false;
    iframe.title = 'Streaming Embed';
    iframe.role = 'dialog';
    iframe.allow = 'microphone';
    iframe.src = url;

    let visible = false;
    let initial = false;
    const messageHandler = (e: MessageEvent) => {
      if (e.origin !== host || !e.data || e.data.type !== 'streaming-embed') return;
      if (e.data.action === 'init') {
        initial = true;
        wrapDiv.classList.toggle('show', initial);
      } else if (e.data.action === 'show') {
        visible = true;
        wrapDiv.classList.toggle('expand', visible);
      } else if (e.data.action === 'hide') {
        visible = false;
        wrapDiv.classList.toggle('expand', visible);
      }
    };

    window.addEventListener('message', messageHandler);
    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    return () => {
      window.removeEventListener('message', messageHandler);
      const el = document.getElementById('heygen-streaming-embed');
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, []);

  const handleWorkflowClick = (workflowId: string) => {
    setSelectedWorkflow(workflowId);
  };

  const handleCloseWorkflow = () => {
    setSelectedWorkflow(null);
  };

  const handleBookDemo = () => {
    setSelectedWorkflow(null);
    setShowDemoModal(true);
  };

  const handleNavigate = (section: string) => {
    if (section === 'demo') {
      setShowDemoModal(true);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const workflow = selectedWorkflow ? workflowData[selectedWorkflow as keyof typeof workflowData] : null;

  return (
    <PageLayout>
      <SEO
        title="AI-Powered Workflow Automation | Intelligent Business Process Automation"
        description="Transform your business operations with AI-powered workflow automation. Automate complex processes, reduce manual work, and accelerate growth with intelligent workflows that learn and adapt."
        keywords="AI workflow automation, intelligent automation, business process automation"
        url="/products/ai-automation"
        image="https://kanishkasoftware.com/images/ai-automation-og.png"
        type="website"
        faqData={[...aiFAQData.left, ...aiFAQData.right]}
      />
      <HeroSection onNavigate={handleNavigate} />
      <BrandsSection />
      <ProblemSection />
      <HowItWorksSection />
      <UseCasesSection onWorkflowClick={handleWorkflowClick} />

      {workflow && (
        <WorkflowModal 
          workflow={workflow} 
          onClose={handleCloseWorkflow}
          onBookDemo={handleBookDemo}
        />
      )}

      <DemoBookingModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)}
      />
      
      <FinalCTASection onNavigate={handleNavigate} />
      
      <ReusableFAQ 
        faqData={aiFAQData}
        title="Frequently Asked Questions About AI Workflow Automation"
        activeBackgroundColor="bg-blue-50"
        sectionBackgroundColor="bg-muted/30"
        showCTA={false}
      />
    </PageLayout>
  );
};

export default AIProduct;
