import Marquee from "react-fast-marquee"; 
import { Badge } from "@/components/ui/badge";
import { Building2, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import ApolloLogo from "@/assets/logos/Apollo_Hospitals_Logo.svg";
import DBSLogo from "@/assets/logos/dbs-bank-logo.png";
import IciciLogo from "@/assets/logos/ICIC-bank.png";
import NykaaLogo from "@/assets/logos/Nykaa-Logo.png";
import SbiLifeLogo from "@/assets/logos/SBI-Life-Insurance.webp";
import AxisLogo from "@/assets/logos/axis-bank.png";
import InnomindsLogo from "@/assets/logos/Innominds-logo.png";
import SodexoLogo from "@/assets/logos/logo-sodexo-removebg-preview.png";
import QuessLogo from "@/assets/logos/Quess_Logo-removebg-preview.png";
import ManipalhospitalLogo from "@/assets/logos/images-removebg-preview.png";
import VihangLogo from "@/assets/logos/vihnag-logo-removebg-preview.png";
import IDBILogo from "@/assets/logos/IDBI-Bank-logo-removebg-preview.png";


export const BrandsSection = () => {
  const [visibleLogos, setVisibleLogos] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const brandLogos = [
    ApolloLogo,
    DBSLogo,
    IciciLogo,
    NykaaLogo,
    AxisLogo,
    SbiLifeLogo,
    InnomindsLogo,
    SodexoLogo,
    QuessLogo,
    ManipalhospitalLogo,
    VihangLogo,
    IDBILogo,
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const visibleRange = containerRect.width * 0.3; // 30% of container width as visible area

      const newVisibleLogos = new Set<number>();
      
      // Check each logo's position
      const logoElements = container.querySelectorAll('[data-logo-index]');
      logoElements.forEach((element) => {
        const logoRect = element.getBoundingClientRect();
        const logoCenterX = logoRect.left + logoRect.width / 2;
        const distanceFromCenter = Math.abs(logoCenterX - centerX);
        
        if (distanceFromCenter < visibleRange) {
          const logoIndex = parseInt(element.getAttribute('data-logo-index') || '0');
          newVisibleLogos.add(logoIndex);
        }
      });

      setVisibleLogos(newVisibleLogos);
    };

    const interval = setInterval(handleScroll, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="brands" className="py-10 bg-muted/50">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-foreground mb-3 sm:mb-4">
               Trusted by Fortune <span className="text-primary">500+</span> and Corporates
          </h2>
        </div>

       {/* Logo Scroller */}
        <div ref={containerRef} className="relative overflow-hidden">
          <Marquee gradient={false} speed={50} pauseOnHover>
            {duplicatedLogos.map((logo, idx) => {
              const originalIndex = idx % brandLogos.length;
              const isVisible = visibleLogos.has(originalIndex);
              
              return (
                <div 
                  key={`${originalIndex}-${idx}`} 
                  className="mx-10 flex items-center"
                  data-logo-index={originalIndex}
                >
                  <img
                    src={logo}
                    alt={`brand-logo-${originalIndex}`}
                    className={`h-16 w-32 object-contain transition-all duration-500 ease-in-out hover:scale-110 ${
                      isVisible 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-50 scale-95'
                    }`}
                    style={{ 
                      filter: isVisible 
                        ? 'brightness(0) saturate(100%) invert(9%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' 
                        : 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)'
                    }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
