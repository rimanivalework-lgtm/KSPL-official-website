import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProductSection from '@/components/sections/ProductSection';
import TechStack from '@/components/sections/TechStack';
import ProcessSection from '@/components/sections/ProcessSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustSection from '@/components/sections/TrustSection';
import BrandsSection from '@/components/sections/BrandsSection';
import FAQSection from '@/components/sections/FAQSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import SEO from '@/components/SEO';

const Home = () => {
  return (
    <div>
      <SEO
        title="Kanishka Software - Smart Software Solutions for Business"
        description="Transform your business with innovative technology solutions. We provide comprehensive software development, mobile apps, cloud solutions, and IT consulting services. 11+ years experience, 200+ projects delivered."
        keywords="software development, IT consulting, mobile app development, cloud solutions, business operations, technology solutions, digital transformation, custom software, web development, software consulting, business automation, enterprise solutions"
        url="/kanishkasoftware"
        image="https://kanishkasoftware.com/images/kanishka-software-home-og.png"
        type="website"
      />
      <HeroSection />
      <BrandsSection />
      <TrustSection />
      <ProductSection />
      <ServicesSection />
      <ProcessSection />
      <TechStack />
      <TestimonialsSection />
      <CaseStudiesSection /> 
      <BlogSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default Home;
