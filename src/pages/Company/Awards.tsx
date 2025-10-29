import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/enhanced-button';
import { Award, Trophy, Star, Calendar, ArrowRight } from 'lucide-react';
import shopifyLogo from "@/assets/shopify-partner-logo.png";
import dpiitLogo from "@/assets/dpiit-certification-logo.png";
import awsPartnerLogo from "@/assets/aws-partner-logo.png";
import iso9001Logo from "@/assets/iso-9001-certification-logo.png";
import iso27001Logo from "@/assets/iso_27001.png";
import badge1Logo from "@/assets/Badge-1.png";

const Awards = () => {
  const certifications = [
    {
      title: "Shopify Partner",
      description: "Official Shopify Partner for e-commerce solutions and app development",
      image: shopifyLogo,
      year: "2023",
      category: "Partnership",
      details: "Recognized as an official Shopify partner for our expertise in e-commerce platform development and custom app solutions."
    },
    {
      title: "DPIIT Recognition",
      description: "Startup India recognition from Department for Promotion of Industry and Internal Trade",
      image: dpiitLogo,
      year: "2022",
      category: "Government Recognition",
      details: "Awarded startup recognition by DPIIT under the Startup India initiative for our innovative software solutions."
    },
    {
      title: "AWS Partner",
      description: "Amazon Web Services partner for cloud solutions and infrastructure",
      image: awsPartnerLogo,
      year: "2023",
      category: "Cloud Partnership",
      details: "Certified AWS partner providing cloud infrastructure and migration services to our clients."
    },
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification",
      image: iso9001Logo,
      year: "2022",
      category: "Quality Certification",
      details: "Certified for maintaining high-quality standards in our software development processes and client services."
    },
    {
      title: "ISO 27001:2013",
      description: "Information Security Management System certification",
      image: iso27001Logo,
      year: "2023",
      category: "Security Certification",
      details: "Certified for implementing robust information security management systems to protect client data and systems."
    },
    {
      title: "Industry Excellence Award",
      description: "Recognition for outstanding contribution to software development industry",
      image: badge1Logo,
      year: "2024",
      category: "Industry Recognition",
      details: "Awarded for our innovative approach to software development and exceptional client satisfaction rates."
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "100+ Successful Projects",
      description: "Delivered over 100 successful software projects across various industries"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "98% Client Satisfaction",
      description: "Maintained exceptional client satisfaction rates through quality delivery"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "6 Industry Certifications",
      description: "Achieved multiple industry certifications and partnerships"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-500" />,
      title: "5+ Years Experience",
      description: "Over 5 years of experience in software development and technology solutions"
    }
  ];

  const testimonials = [
    {
      quote: "Kanishka Software delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      author: "Rajesh Kumar",
      company: "TechCorp India",
      rating: 5
    },
    {
      quote: "The team's professionalism and commitment to quality is remarkable. They transformed our business processes with their innovative solutions.",
      author: "Priya Sharma",
      company: "Innovate Solutions",
      rating: 5
    },
    {
      quote: "Working with Kanishka Software has been a game-changer for our company. Their cloud solutions helped us scale efficiently.",
      author: "Amit Patel",
      company: "CloudTech Ventures",
      rating: 5
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-primary">
                Awards & Recognition
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-secondary">
                Our commitment to excellence has been recognized by industry leaders and certification bodies. 
                We're proud of our achievements and the trust our clients place in us.
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                  Our Key Achievements
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-secondary">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                  Certifications & Awards
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-secondary">
                  Our certifications and awards reflect our commitment to quality, security, and industry best practices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 font-primary">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-2">
                        {cert.category} • {cert.year}
                      </p>
                      <p className="text-muted-foreground text-sm font-secondary">
                        {cert.description}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-secondary">
                      {cert.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                  What Our Clients Say
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-secondary">
                  Our clients' success stories and feedback are our greatest achievements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed font-secondary italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground font-primary">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground font-secondary">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-primary">
                Ready to Work With an Award-Winning Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-secondary">
                Let our certified experts help you achieve your business goals with innovative software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl border-white text-white hover:bg-white hover:text-primary"
                >
                  <span>View Our Work</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Awards;
