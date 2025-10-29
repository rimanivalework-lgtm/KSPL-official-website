import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/enhanced-button";
import { Service } from "@/types";
import { SPACING, TYPOGRAPHY, COLORS } from "@/lib/theme";
import CustomizationCogwheelIcon from "@/assets/icons/customization-cogwheel.svg";
import SiteAltIcon from "@/assets/icons/site-alt.svg";
import BoxMobileIcon from "@/assets/icons/box-mobile.svg";
import SystemCloudIcon from "@/assets/icons/system-cloud.svg";
import SmartHomeCloudIcon from "@/assets/icons/smart-home-cloud.svg";
import TowerChainIcon from "@/assets/icons/tower-chain.svg";
import BrainCircuitIcon from "@/assets/icons/brain-circuit.svg";

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: CustomizationCogwheelIcon,
      title: "Custom Software Development",
      description: "Tailored solutions aligned with your business objectives",
      color: "text-primary bg-primary/10",
      cardTint: "card-blue-tint",
      hoverBgColor: "hover:bg-blue-50",
    },
    {
      icon: BoxMobileIcon,
      title: "Mobile App Development",
      description: "iOS and Android apps focused on user experience",
      color: "text-primary bg-primary/10",
      cardTint: "card-red-tint",
      hoverBgColor: "hover:bg-red-50",
    },
    {
      icon: BrainCircuitIcon,
      title: "AI Workflows & Agents",
      description: "Automate tasks, connect tools, boost productivity intelligently.",
      color: "text-primary bg-primary/10",
      cardTint: "card-green-tint",
      hoverBgColor: "hover:bg-green-50",
    },
    {
      icon: SystemCloudIcon,
      title: "Cloud Solutions",
      description: "Scalable, secure cloud migration and new applications",
      color: "text-primary bg-primary/10",
      cardTint: "card-yellow-tint",
      hoverBgColor: "hover:bg-yellow-50",
    },
    {
      icon: SiteAltIcon,
      title: "Web Application Development",
      description: "Dynamic, user-friendly web apps using latest technologies",
      color: "text-primary bg-primary/10",
      cardTint: "card-blue-tint",
      hoverBgColor: "hover:bg-blue-50",
    },
    {
      icon: SmartHomeCloudIcon,
      title: "IoT Solutions",
      description: "Smart connectivity for healthcare, manufacturing, logistics",
      color: "text-primary bg-primary/10",
      cardTint: "card-red-tint",
      hoverBgColor: "hover:bg-red-50",
    },
    {
      icon: TowerChainIcon,
      title: "Software Consulting",
      description: "Strategic guidance for informed technology decisions",
      color: "text-primary bg-primary/10",
      cardTint: "card-green-tint",
      hoverBgColor: "hover:bg-green-50",
    },
  ];

  return (
    <section id="services" className={`${SPACING.section.pyLarge} bg-muted/30`}>
      <div className={`container mx-auto ${SPACING.container.px}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`${TYPOGRAPHY.heading.h2} text-foreground mb-3 sm:mb-4`}>
            Pretty Much Any Software You Can Think Of, We Can Build
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 mb-12">
          {/* First Row - 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service}
                index={index}
              />
            ))}
          </div>
          
          {/* Second Row - 3 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {services.slice(4).map((service, index) => (
                <ServiceCard 
                  key={index + 4} 
                  service={service}
                  index={index + 4}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Explore All Services Button */}
        <div className="text-center mb-12">
          <Button 
            variant="outlinePrimary" 
            size="lg" 
            asChild
          >
            <a href="/services">Explore All Services</a>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Let's discuss how our innovative solutions can help you achieve your goals 
                and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="card" size="lg" asChild>
                  <a href="#contact">Get Free Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;