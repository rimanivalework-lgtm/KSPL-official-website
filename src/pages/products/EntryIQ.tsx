import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ArrowRight, CheckCircle, Shield, Users, Clock, Smartphone, BarChart3, Camera } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SEO from '@/components/SEO';

const EntryIQ = () => {
  const features = [
    "Digital Visitor Registration",
    "Photo Capture & ID Verification",
    "Badge Printing",
    "Host Notifications",
    "Visitor Analytics",
    "Security Integration"
  ];

  const benefits = [
    "Enhance security and compliance",
    "Streamline visitor check-in process",
    "Improve visitor experience",
    "Reduce security risks"
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Security Management",
      description: "Comprehensive security and access control"
    },
    {
      icon: Users,
      title: "Visitor Registration",
      description: "Quick and easy visitor check-in process"
    },
    {
      icon: Camera,
      title: "Photo & ID Capture",
      description: "Automatic photo capture and ID verification"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track visitor entry and exit times"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Mobile app for hosts and security staff"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Visitor insights and security reports"
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="Visitor Management System | EntryIQ"
        description="Transform your visitor management with EntryIQ - digital visitor registration, photo capture, ID verification, and comprehensive security integration. Enhance security and streamline visitor check-in process."
        keywords="visitor management system, visitor registration, visitor tracking, digital visitor check-in, visitor security, visitor analytics, visitor badge printing, visitor management software, visitor monitoring, guest management, visitor compliance, visitor management app"
        url="/products/entryiq"
        image="https://kanishkasoftware.com/images/entryiq-og.png"
        type="website"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              EntryIQ Visitor Management System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Secure your premises with our advanced visitor management solution. 
              Streamline check-ins, enhance security, and track visitor data efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to manage visitors securely
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                        <p className="text-sm text-muted-foreground">
                          Advanced visitor management capabilities
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                System Capabilities
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive visitor and security management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-0">
                    <capability.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose EntryIQ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Secure Your Premises?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to learn more about EntryIQ Visitor Management System
            </p>
            <Button variant="cta" size="lg">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EntryIQ;
