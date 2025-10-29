import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ArrowRight, CheckCircle, Smartphone, Code, Globe, Zap } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const MobileApplicationDevelopment = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Apps",
      description: "High-performance apps built with Swift and Objective-C"
    },
    {
      icon: Code,
      title: "Native Android Apps",
      description: "Robust apps developed with Kotlin and Java"
    },
    {
      icon: Globe,
      title: "Cross-Platform Apps",
      description: "Single codebase for iOS and Android using React Native or Flutter"
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "Web apps that work like native mobile applications"
    }
  ];

  const platforms = [
    "iOS Development (Swift, Objective-C)",
    "Android Development (Kotlin, Java)",
    "React Native Cross-Platform",
    "Flutter Cross-Platform",
    "Xamarin Cross-Platform",
    "Progressive Web Apps (PWA)"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mobile Application Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create powerful mobile applications that engage users and drive business growth. 
              We develop native and cross-platform apps for iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Start Your App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Mobile Development Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive mobile solutions for all platforms and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-0">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern tools and frameworks for optimal performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-foreground">{platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your mobile app requirements and create something amazing
            </p>
            <Button variant="cta" size="lg">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MobileApplicationDevelopment;
