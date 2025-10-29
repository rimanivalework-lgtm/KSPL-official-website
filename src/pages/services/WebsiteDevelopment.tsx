import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { ArrowRight, CheckCircle, Globe, Code, Palette, Zap } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Static Websites",
      description: "Fast, secure, and SEO-optimized static websites"
    },
    {
      icon: Code,
      title: "Dynamic Websites",
      description: "Interactive websites with database integration"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity"
    },
    {
      icon: Zap,
      title: "E-commerce Solutions",
      description: "Online stores with payment integration and inventory management"
    }
  ];

  const technologies = [
    "React & Next.js",
    "Vue.js & Nuxt.js",
    "Angular & TypeScript",
    "Node.js & Express",
    "PHP & Laravel",
    "WordPress & Custom Themes",
    "Shopify & WooCommerce",
    "MongoDB & MySQL"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Website Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build stunning, responsive websites that captivate your audience and drive conversions. 
              From simple landing pages to complex web applications, we create digital experiences that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Start Your Website
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
                Our Web Development Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete web solutions from concept to deployment
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

      {/* Technologies Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-muted-foreground">
                Modern frameworks and tools for optimal performance
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-lg p-4 mb-2">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{tech}</p>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your web development needs and create something amazing
            </p>
            <Button variant="cta" size="lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WebsiteDevelopment;
