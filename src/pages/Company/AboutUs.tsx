import React, { useState } from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Phone, Linkedin } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import shopifyLogo from "@/assets/shopify-partner-logo.png";
import dpiitLogo from "@/assets/dpiit-certification-logo.png";
import awsPartnerLogo from "@/assets/aws-partner-logo.png";
import iso9001Logo from "@/assets/iso-9001-certification-logo.png";
import iso27001Logo from "@/assets/iso_27001.png";
import badge1Logo from "@/assets/Badge-1.png";
import teamImage from "@/assets/WhatsApp Image 2025-10-14 at 5.17.41 PM.jpeg";
import ContactSection from '@/components/sections/ContactSection';

// Values data
const companyValues = [
  {
    title: "Proactive",
    description: "We anticipate client needs and address challenges before they arise, ensuring we always deliver solutions that stay one step ahead.",
    color: "blue"
  },
  {
    title: "Flexible", 
    description: "We foster adaptability in our approach, shaping unique solutions that excite our teams and perfectly fit our clients' businesses.",
    color: "red"
  },
  {
    title: "Tech-Driven",
    description: "We leverage the power of technology to simplify processes, enhance efficiency, and introduce ease and brightness into every client's day.",
    color: "green"
  },
  {
    title: "Competent",
    description: "Precision, reliability, and a commitment to delivering the highest quality mean our clients can always count on us to get things right, on time.",
    color: "yellow"
  },
  {
    title: "Vested",
    description: "We treat every client's success as our own, fully investing ourselves in your growth and business journey as true long-term partners.",
    color: "blue"
  }
];

// Value Card Component
const ValueCard = ({ title, description, color }: { title: string; description: string; color: string }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-900 text-blue-700",
    red: "bg-red-50 border-red-200 text-red-900 text-red-700", 
    green: "bg-green-50 border-green-200 text-green-900 text-green-700",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-900 text-yellow-700"
  };

  const [bgClass, borderClass, titleClass, textClass] = colorClasses[color as keyof typeof colorClasses].split(' ');

  return (
    <div className={`${bgClass} border-2 ${borderClass} ${titleClass} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group`}>
      <div className="flex flex-col items-center text-center h-full justify-center">
        <h3 className="text-2xl font-bold mb-3 font-primary group-hover:text-opacity-90 transition-all duration-300">{title}</h3>
        <p className={`text-sm leading-relaxed font-secondary ${textClass} group-hover:text-opacity-80 transition-all duration-300`}>
          {description}
        </p>
      </div>
    </div>
  );
};
const AboutUs = () => {
  const [selectedYear, setSelectedYear] = useState('2018');
  const [imageLoading, setImageLoading] = useState(true);

  // Reset loading state when year changes
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setImageLoading(true);
  };

  const historyData = {
    '2018': {
      year: '2018',
      title: 'The Beginning',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kanishka Software Team 2018',
      content: 'Kanishka Software was founded to address a critical challenge faced by businesses in India: managing their digital transformation. With in-house development teams being expensive and outsourcing often delivering inconsistent quality, we set out to provide reliable software development, mobile applications, and technology solutions. Our mission was clear – to empower businesses with cost-effective and high-quality software solutions.'
    },
    '2020': {
      year: '2020',
      title: 'Expansion & Growth',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kanishka Software Office 2020',
      content: 'By 2020, we had established ourselves as a trusted technology partner. We expanded our team and services, focusing on mobile app development and web solutions. This period marked our first major growth phase, where we began serving clients across different industries and building our reputation for quality and reliability.'
    },
    '2022': {
      year: '2022',
      title: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kanishka Software Remote Work 2022',
      content: 'The year 2022 brought unprecedented challenges and opportunities. We quickly adapted to remote work and helped businesses navigate digital transformation during the pandemic. This period accelerated our focus on cloud solutions, remote collaboration tools, and scalable software architectures that could support businesses in any environment.'
    },
    '2024': {
      year: '2024',
      title: 'Innovation & Recognition',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kanishka Software Awards 2024',
      content: 'In 2024, we achieved significant milestones in innovation and recognition. We launched our first AI-powered solutions and received industry awards for excellence in software development. Our team grew to over 65+ members, and we established partnerships with leading technology companies, solidifying our position as a premier software development firm.',
      achievements: [
        'Renewed focus on building our brand and engaging deeply with businesses across India.',
        'Established a strong distribution network nationwide.',
        'Began productizing our service experience, laying the groundwork for scalable, technology-driven solutions.'
      ]
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight font-primary lg:whitespace-nowrap">
              Transforming Ideas into Impactful <span className="text-primary">Software</span>
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground leading-relaxed font-secondary max-w-3xl mx-auto">
              We build intelligent, reliable and scalable software solutions that power business growth.
            </p>
            
            {/* Call to Action Button */}
            <div className="mb-8">
              <Button 
                variant="cta" 
                size="lg"
                className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Phone size={20} />
                <span>Book a Call</span>
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

      {/* Who We Are Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bold text-foreground mb-4 font-primary text-center" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-foreground mx-auto mb-12"></div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed font-secondary">
                Founded in 2014, <span className="font-bold text-primary">Kanishka Software</span> is a leading software development company recognised for delivering <span className="font-bold text-primary">200+</span> successful projects across industries.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed font-secondary">
                With a talented team of over <span className="font-bold text-primary">65+</span> members, we specialise in building high-quality, custom software solutions that align with every client's business goals.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed font-secondary">
                Our focus on innovation, reliability, and collaboration drives digital transformation and lasting business impact.
              </p>
            </div>
            
            <div className="mt-12">
              <Button 
                variant="cta" 
                size="lg"
                className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Phone size={20} />
                <span>Book a Call</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-20">
              {/* Mission Image - appears first on mobile, second on desktop */}
              <div className="relative order-first md:order-last">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Mission - Digital Innovation" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Mission Text - appears second on mobile, first on desktop */}
              <div className="space-y-6 order-last md:order-first">
                <h2 className="font-bold text-foreground mb-4 font-primary" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
                  OUR MISSION
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 font-secondary leading-relaxed">
                  Our Mission Is To Transform The Digital Landscape By Creating Innovative And Reliable Software Solutions.
                </p>
                  <p className="text-lg text-gray-700 font-secondary leading-relaxed">
                  Through A Commitment To Excellence, Continuous Learning, And Customer Satisfaction, We Aim To Be A Trusted Partner In Our Clients' Success.
                </p>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Vision Image */}
              <div className="relative md:order-1">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Vision - Strategic Planning" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Vision Text */}
              <div className="space-y-6 md:order-2">
                <h2 className="font-bold text-foreground mb-4 font-primary" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
                  OUR VISION
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 font-secondary leading-relaxed">
                  Our Vision Is To Be A Global Leader In Providing Software Solutions That Drive Progress And Transform Industries.
                </p>
                  <p className="text-lg text-gray-700 font-secondary leading-relaxed">
                  By Staying At The Forefront, We Aspire To Shape A World Where Software Seamlessly Integrates With Daily Life, Making A Positive Impact On Society.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4 font-primary text-center" style={{ fontSize: '36px', lineHeight: '40px', fontWeight: '700', letterSpacing: 'normal' }}>
                Our Values
              </h2>
              <div className="w-16 h-1 bg-foreground mx-auto mb-8"></div>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
              {companyValues.map((value, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ValueCard
                    title={value.title}
                    description={value.description}
                    color={value.color}
                  />
                </div>
              ))}
                </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 font-primary">
              Our History
            </h2>
            
            {/* Dynamic Content */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              {/* Image - Above on mobile/tablet, Left on desktop */}
              <div className="order-1 lg:order-1">
                <div className="relative rounded-lg overflow-hidden">
                  {imageLoading && (
                    <div className="w-full h-64 md:h-80 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                      <div className="text-gray-400">Loading image...</div>
                    </div>
                  )}
                  <img 
                    src={historyData[selectedYear].image}
                    alt={historyData[selectedYear].alt}
                    className={`w-full h-64 md:h-80 object-cover rounded-lg transition-all duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)}
                  />
                </div>
              </div>
              
              {/* Content - Below on mobile/tablet, Right on desktop */}
              <div className="order-2 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 font-primary">
                  {historyData[selectedYear].year}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-secondary mb-4">
                  {historyData[selectedYear].content}
                </p>
                {historyData[selectedYear].achievements && (
                  <ul className="space-y-3 text-muted-foreground font-secondary">
                    {historyData[selectedYear].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="relative">
              <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
                {Object.keys(historyData).map((year, index) => (
                  <React.Fragment key={year}>
                    <div 
                      className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110"
                      onClick={() => handleYearChange(year)}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mb-1 sm:mb-2 transition-all duration-300 ${
                        selectedYear === year 
                          ? 'bg-primary scale-125' 
                          : 'border-2 border-gray-300 hover:border-primary'
                      }`}></div>
                      <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                        selectedYear === year 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}>
                        {year}
                      </span>
                    </div>
                    {index < Object.keys(historyData).length - 1 && (
                      <div className="flex-1 h-0.5 bg-gray-300"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-primary text-center">
              Our Team
            </h2>
            <div className="w-16 h-1 bg-foreground mx-auto mb-16"></div>
            
            {/* Team Members Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Vinay Vikram Singh*/}
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image with accent backgrounds */}
                  <div className="relative mb-6">
                    <div className="relative w-72 h-72 rounded-lg p-2">
                      {/* Bottom accent background - half height */}
                      <div className="absolute bottom-0 -left-8 -right-8 h-36 bg-blue-200 rounded-lg z-0"></div>
                      {/* Profile Image */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-lg overflow-hidden z-10">
                        <img 
                          src={teamImage}
                          alt="Vinay Vikram Singh"
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: '30% 20%', // Focus on the left person's face
                            transform: 'scale(1.2)' // Zoom in on the face
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground font-primary">
                      Vinay Vikram Singh
                    </h3>
                    <a 
                      href="https://www.linkedin.com/in/vinayvikramsingh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-1.5 rounded hover:bg-primary/80 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" fill="white" />
                    </a>
                  </div>
                  <p className="text-primary font-medium">
                  Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* Snehal Umbarkar */}
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Image with accent backgrounds */}
                  <div className="relative mb-6">
                    <div className="relative w-72 h-72 rounded-lg p-2">
                      {/* Bottom accent background - half height */}
                      <div className="absolute bottom-0 -left-8 -right-8 h-36 bg-blue-200 rounded-lg z-0"></div>
                      {/* Profile Image */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-lg overflow-hidden z-10">
                        <img 
                          src={teamImage}
                          alt="Snehal Umbarkar"
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: '70% 20%', // Focus on the right person's face
                            transform: 'scale(1.2)' // Zoom in on the face
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground font-primary">
                      Snehal Umbarkar
                    </h3>
                    <a 
                      href="https://www.linkedin.com/in/snehald/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-1.5 rounded hover:bg-primary/80 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" fill="white" />
                    </a>
                  </div>
                  <p className="text-primary font-medium">
                  Chief Technology Officer
                  </p>
                </div>
              </div>
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

       <div className="py-10">
         <ContactSection/>
       </div>
    </PageLayout>
  );
};

export default AboutUs;
