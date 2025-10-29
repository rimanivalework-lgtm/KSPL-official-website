import { Button } from "@/components/ui/enhanced-button";
import { Phone } from 'lucide-react';
import HeroHeader from "@/components/layout/HeroHeader";
import LiquidEther from "@/components/ui/LiquidEther";
import shopifyLogo from "@/assets/shopify-partner-logo.png";
import dpiitLogo from "@/assets/dpiit-certification-logo.png";
import awsPartnerLogo from "@/assets/aws-partner-logo.png";
import iso9001Logo from "@/assets/iso-9001-certification-logo.png";
import iso27001Logo from "@/assets/iso_27001.png";
import badge1Logo from "@/assets/Badge-1.png";

const HeroSection = () => {
  return (
    <>
      <HeroHeader />
      
      <section className="relative pt-[200px] pb-16 rounded-b-[72px] -mt-24 overflow-hidden" style={{ backgroundColor: '#195C9A' }}>
        {/* Liquid Ether Overlay */}
        <LiquidEther
          colors={['#195C9A', '#307CC3', '#87C5FF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
          takeoverDuration={0.2}
          autoResumeDelay={2000}
          autoRampDuration={0.4}
          style={{ 
            position: 'absolute', 
            inset: 0,
            zIndex: 1,
            pointerEvents: 'auto'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="hero-title mb-6 font-poppins">
              Software Solutions That Transform How You Do Business
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto font-opensans">
              Your technology partners, building impactful software together.
            </p>
            
            {/* Call to Action Button */}
            <div className="mb-10">
              <Button 
                variant="heroWhite" 
                size="lg" 
                className="flex items-center space-x-2 mx-auto"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Phone size={20} />
                <span>Book a Demo</span>
              </Button>
            </div>
            
            {/* Recognized By Section */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider mb-5 font-poppins hero-recognized-text">
                RECOGNIZED BY
              </p>
              
              {/* Partner Logos */}
              <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 xl:gap-12">
                {/* Shopify Partner Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={shopifyLogo} 
                    alt="Shopify Partner" 
                    className="h-10 w-10 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* DPIIT Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={dpiitLogo} 
                    alt="DPIIT - Department for Promotion of Industry and Internal Trade" 
                    className="h-10 w-10 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* AWS Partner Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={awsPartnerLogo} 
                    alt="AWS Partner" 
                    className="h-10 w-10 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* ISO 9001:2015 Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={iso9001Logo} 
                    alt="ISO 9001:2015 Certification" 
                    className="h-12 w-12 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-cover filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* ISO 27001 Logo */}
                <div className="flex items-center justify-center">
                  <img 
                    src={iso27001Logo} 
                    alt="ISO 27001 Certification" 
                    className="h-10 w-10 sm:h-20 sm:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 object-contain filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Business Success Awards Badge */}
                <div className="flex items-center justify-center">
                  <img 
                    src={badge1Logo} 
                    alt="Business Success Awards 2025" 
                    className="h-10 w-10 sm:h-24 sm:w-24 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain filter brightness-0 invert flex-shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;