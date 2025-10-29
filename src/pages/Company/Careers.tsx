import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/enhanced-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Phone, Download } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import shopifyLogo from "@/assets/shopify-partner-logo.png";
import dpiitLogo from "@/assets/dpiit-certification-logo.png";
import awsPartnerLogo from "@/assets/aws-partner-logo.png";
import iso9001Logo from "@/assets/iso-9001-certification-logo.png";
import iso27001Logo from "@/assets/iso_27001.png";
import badge1Logo from "@/assets/Badge-1.png";
import ReusableFAQ from '@/components/sections/ReusableFAQ';
import { careersFAQData } from '@/data/faq/careers';
import CareersContactSection from '@/components/sections/CareersContactSection';
import { getDepartmentOptions } from '@/data/departments';

// Reusable Checkmark Icon Component
const CheckmarkIcon = () => (
  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>
);

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      title: "QA Tester Manual+Automation",
      department: "Operations",
      location: "Ghatkopar East, Mumbai",
      pdf: "/jobdescriptions-pdf/JD _ QA Tester.pdf"
    },
    {
      title: "Trainee Project Coordinator",
      department: "Internship",
      location: "Ghatkopar East, Mumbai",
      pdf: "/jobdescriptions-pdf/Trainee Project Coordinator.pdf"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai, Maharashtra",
      pdf: "/jobdescriptions-pdf/JD - Sales Executive.pdf"
    }
  ];

  // Filter job openings based on selected department
  const filteredJobOpenings = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department.toLowerCase() === selectedDepartment);

  // Group filtered jobs by department
  const groupedJobs = filteredJobOpenings.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {} as Record<string, typeof jobOpenings>);

  
  return (
    <PageLayout>
       {/* Hero Section */}
       <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight font-primary lg:whitespace-nowrap">
            Code. Collaborate. Celebrate.
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground leading-relaxed font-secondary max-w-3xl mx-auto">
            A culture where innovation meets fun, every day is a chance to build something smarter.
            </p>
            
            {/* Call to Action Button */}
            <div className="mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl"
                onClick={() => {
                  const contactSection = document.getElementById('career-contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Phone size={20} />
                <span>Get in Touch</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognised By Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 font-primary">
              Recognised By
            </h2> */}
            <h2 className="font-bold text-foreground mb-4 font-primary text-center" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
              Recognised By
            </h2>
            <div className="w-16 h-1 bg-foreground mx-auto mb-16"></div>
            
            {/* Partner Logos */}
            <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-6 lg:gap-12">
                {/* Shopify Partner Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={shopifyLogo} 
                    alt="Shopify Partner" 
                    className="h-10 w-10 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain filter brightness-0 saturate-100 invert-0 sepia-0 hue-rotate-0 contrast-100 flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* DPIIT Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={dpiitLogo} 
                    alt="DPIIT - Department for Promotion of Industry and Internal Trade" 
                    className="h-10 w-10 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* AWS Partner Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={awsPartnerLogo} 
                    alt="AWS Partner" 
                    className="h-10 w-10 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* ISO 9001:2015 Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={iso9001Logo} 
                    alt="ISO 9001:2015 Certification" 
                    className="h-12 w-12 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-cover flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* ISO 27001 Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={iso27001Logo} 
                    alt="ISO 27001 Certification" 
                    className="h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 object-contain flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Business Success Awards Badge */}
                <div className="flex items-center justify-center">
                  <img 
                    src={badge1Logo} 
                    alt="Business Success Awards 2025" 
                    className="h-10 w-10 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain flex-shrink-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)' }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
            </div>
          </div>
        </div>
      </section>


        {/* Our Benefits */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-blue-50 rounded-2xl p-8 sm:p-12">
                <div className="text-left mb-12">
                  <h2 className="font-bold text-foreground mb-4 font-primary" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
                    Our benefits
                  </h2>
                  <div className="w-full h-0.5 bg-primary/30 mb-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Competitive salary</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Performance Bonuses</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Professional Growth</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Festival Holidays</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Special Occasions Optional Leave</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Generous parental leave programs</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Festive Celebrations & Events</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <CheckmarkIcon />
                      <span className="text-foreground font-medium font-secondary">Team Outings & Engagement Activities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-primary">
                  Open positions
                </h2>
                <div className="flex items-center">
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger 
                      className="w-full md:w-48 bg-white border-2 border-primary/40 text-foreground rounded-md hover:border-primary focus:border-primary focus:ring-0 focus:outline-none shadow-none"
                      style={{
                        border: '2px solid rgb(59 130 246 / 0.4)',
                        boxShadow: 'none',
                        outline: 'none'
                      }}
                    >
                      <SelectValue placeholder="All departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All departments</SelectItem>
                      {getDepartmentOptions().map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Job Categories */}
              <div className="space-y-12">
                {Object.keys(groupedJobs).length > 0 ? (
                  Object.entries(groupedJobs).map(([department, jobs]) => (
                    <div key={department}>
                      <h3 className="text-2xl font-bold text-primary mb-6 font-primary">
                        {department}
                      </h3>
                      <div className="space-y-0">
                        {jobs.map((job, index) => (
                          <div key={index} className="border-b border-gray-200 last:border-b-0">
                            <div 
                              className="py-6 hover:bg-white/50 transition-colors cursor-pointer group"
                              onClick={() => {
                                const contactSection = document.getElementById('career-contact');
                                if (contactSection) {
                                  contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-primary">
                                    {job.title}
                                  </h4>
                                  <p className="text-sm text-primary/70 font-secondary">
                                    {job.location}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {job.pdf && (
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <a
                                          href={job.pdf}
                                          download
                                          onClick={(e) => e.stopPropagation()}
                                          className="inline-flex items-center justify-center w-8 h-8 rounded-md text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-200 hover:scale-110"
                                        >
                                          <Download className="w-4 h-4" />
                                        </a>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Download Job Description</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  )}
                                  <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg font-secondary">
                      No positions found for the selected department.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Grow With Us Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4 font-primary text-center" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
                Grow With Us
              </h2>
              <div className="w-16 h-1 bg-foreground mx-auto mb-8"></div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-secondary max-w-3xl mx-auto">
                Collaborate with entrepreneurs, solve real challenges, and shape businesses. At Kanishka Software, you'll make an impact, fuel your passion for technology, and enjoy the journey!
              </p>
            </div>
            
            {/* Image Grid - Varied Layout for All Screens */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Top Row - Two Equal Images */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Top Left - Team Adventure */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Adventure"
                    className="w-full h-48 sm:h-56 object-cover object-center rounded-lg"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                
                {/* Top Right - Office Environment */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Office Environment"
                    className="w-full h-48 sm:h-56 object-cover object-center rounded-lg"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              
              {/* Bottom Row - Wide Left, Narrow Right */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {/* Bottom Left - Team Gathering (Wide) */}
                <div className="col-span-2 relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Gathering"
                    className="w-full h-48 sm:h-56 object-cover object-center rounded-lg"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                
                {/* Bottom Right - Team Portrait (Narrow) */}
                <div className="col-span-1 relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team Portrait"
                    className="w-full h-48 sm:h-56 object-cover object-center rounded-lg"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ReusableFAQ 
        faqData={careersFAQData}
        title="Have Questions?"
        activeBackgroundColor="bg-blue-50"
        sectionBackgroundColor="bg-white"
        showCTA={false}
      />

      {/* Careers Contact Section */}
      <CareersContactSection />
    </PageLayout>
  );
};

export default Careers;
