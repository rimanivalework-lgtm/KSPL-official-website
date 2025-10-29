import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";
// import teamImage from "@/assets/team-illustration.jpg";

const AboutSection = () => {
  const features = [
    "11+ years of industry experience",
    "200+ successful projects delivered", 
    "Expert team of developers and consultants",
    "Agile development methodology",
    "24/7 technical support",
    "Scalable and maintainable solutions"
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify business operations through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: Users,
      title: "Our Team", 
      description: "A diverse group of experienced professionals dedicated to delivering excellence in every project."
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "We combine cutting-edge technology with deep business understanding to create impactful solutions."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">About Kanishka Software</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
                Make The Difference With{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Expert Technology Solutions
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 11 years, Kanishka Software has been at the forefront of digital transformation, 
                helping businesses across the globe leverage technology to achieve their goals. Our commitment 
                to excellence and innovation drives everything we do.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg" asChild>
              <a href="#contact">Start Your Project Today</a>
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img
                src="/placeholder.svg"
                alt="Kanishka Software Team"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Trusted by Businesses Worldwide
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped companies of all sizes 
              achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "55+", label: "Technologies Used" },
              { value: "7+", label: "Countries Served" },
              { value: "11+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;