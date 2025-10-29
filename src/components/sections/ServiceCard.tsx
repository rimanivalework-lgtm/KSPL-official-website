import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Service } from "@/types";
import { ANIMATIONS, SHADOWS } from "@/lib/theme";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <Card 
      className={`group relative overflow-hidden border-0 ${SHADOWS.soft} hover:${SHADOWS.medium} ${ANIMATIONS.transition} ${ANIMATIONS.hover} hover:${service.cardTint} ${service.hoverBgColor || ''}`}
    >
      <CardContent className="p-8">
        <div className="space-y-4">
          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl ${service.color}`}>
            <Icon 
              src={service.icon} 
              alt={service.title}
              size="lg"
              color="primary"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          {/* Arrow */}
          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            <span className="text-sm font-medium mr-2">Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
