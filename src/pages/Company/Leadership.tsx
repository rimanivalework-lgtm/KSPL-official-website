import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/enhanced-button';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import teamImage from "@/assets/WhatsApp Image 2025-10-14 at 5.17.41 PM.jpeg";

const Leadership = () => {
  const leadership = [
    {
      name: "Vinay Vikram Singh",
      position: "Chief Executive Officer",
      image: teamImage,
      bio: "Vinay brings over 8 years of experience in software development and business strategy. He founded Kanishka Software with a vision to democratize technology solutions for businesses of all sizes. Under his leadership, the company has grown from a small startup to a trusted technology partner for over 100+ clients across India.",
      achievements: [
        "Led company growth from startup to 100+ clients",
        "Expertise in full-stack development and cloud architecture",
        "Passionate about building scalable software solutions",
        "Strong advocate for remote work and team collaboration"
      ],
      linkedin: "https://www.linkedin.com/in/vinayvikramsingh/",
      email: "vinay@kanishkasoftware.com"
    },
    {
      name: "Snehal Umbarkar",
      position: "Chief Technology Officer",
      image: teamImage,
      bio: "Snehal is our technical visionary with 6+ years of experience in cutting-edge technologies. She leads our engineering team and drives innovation in our product development. Her expertise spans across mobile app development, AI integration, and cloud infrastructure, ensuring our solutions are always at the forefront of technology.",
      achievements: [
        "Expert in mobile app development and AI integration",
        "Led development of 50+ successful projects",
        "Specializes in scalable cloud architecture",
        "Mentor to junior developers and tech enthusiasts"
      ],
      linkedin: "https://www.linkedin.com/in/snehald/",
      email: "snehal@kanishkasoftware.com"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology, always looking for better ways to solve problems."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results."
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our business dealings."
    },
    {
      title: "Growth",
      description: "We're committed to continuous learning and development, both personally and professionally."
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
                Our Leadership Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-secondary">
                Meet the visionary leaders who drive innovation and excellence at Kanishka Software. 
                Our leadership team brings together decades of experience and a shared passion for technology.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                  Meet Our Leaders
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              </div>

              <div className="space-y-20">
                {leadership.map((leader, index) => (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative">
                        <div className="relative w-80 h-80 mx-auto rounded-lg p-2">
                          {/* Bottom accent background */}
                          <div className="absolute bottom-0 -left-8 -right-8 h-40 bg-blue-200 rounded-lg z-0"></div>
                          {/* Profile Image */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 rounded-lg overflow-hidden z-10">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                              style={{
                                objectPosition: index === 0 ? '30% 20%' : '70% 20%',
                                transform: 'scale(1.2)'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                        {leader.name}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-6">
                        {leader.position}
                      </p>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-secondary">
                        {leader.bio}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-foreground mb-4 font-primary">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground font-secondary">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Links */}
                      <div className="flex space-x-4">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-white p-3 rounded hover:bg-primary/80 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" fill="white" />
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="bg-gray-100 text-gray-700 p-3 rounded hover:bg-gray-200 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-primary">
                  Our Leadership Values
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-secondary">
                  Our leadership team is guided by core values that shape our company culture and drive our success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-secondary">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-primary">
                Want to Work With Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-secondary">
                Join our team and work alongside our experienced leaders to build innovative software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl"
                >
                  <span>View Open Positions</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex items-center space-x-2 mx-auto lg:h-14 lg:px-10 lg:text-base lg:rounded-2xl border-white text-white hover:bg-white hover:text-primary"
                >
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Leadership;
