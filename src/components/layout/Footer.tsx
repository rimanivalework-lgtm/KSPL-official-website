import { Button } from "@/components/ui/enhanced-button";
import { 
  Mail, 
  Phone, 
  // MapPin, 
  Globe,
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp 
} from "lucide-react";
import logoImage from "@/assets/kspl-logo.webp";
import footerLogo from "@/assets/KSPL-Logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
  { name: "About Us", href: "/company/about-us" },
  { name: "Careers", href: "/company/careers" },
  { name: "Leadership", href: "/company/leadership" },
  { name: "Awards", href: "/company/awards" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];
  const Products = [
    { name: "Asset Management System", href: "/products/asset-management"},
    { name: "Cafeteria Management System", href: "/products/foodiisoft"},
    { name: "Room Management System", href: "/products/spacebee"},
    { name: "Inventory Management System", href: "https://kanishkasoftware.com/products/inventory-management-system-with-pos/"},
    { name: "Attendance Management System", href: "/smart-attendance-management-system"},
    { name: "AI-powered Workflow Automation", href: "/products/ai-automation"},
  ];
  const services = [
    { name: "Custom Software Development", href: "#software-dev" },
    { name: "Web Application Development", href: "#web" },
    { name: "Mobile App Development", href: "#mobile" },
    { name: "Cloud Solutions", href: "#cloud" },
    { name: "IOT Solutions", href: "#iot" },
    { name: "Software Consulting", href: "#software-consulting" }
  ];
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Site Map", href: "/sitemap" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <footer className="bg-primary-dark w-full relative overflow-hidden min-h-[400px]">
        {/* Subtle gradient overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <div className="mb-4">
                  <img 
                    src={logoImage} 
                    alt="Kanishka Software Logo" 
                    className="h-10 w-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-opensans">
                  Simplifying business operations with smart software solutions. 
                  We help companies streamline processes and drive growth through innovation.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary text-white"
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4 text-white" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4 font-poppins">
                Our Products
              </h4>
              <ul className="space-y-2">
                {Products.map((products, index) => (
                  <li key={index}>
                    <a
                      href={products.href}
                      className="text-white/70 hover:text-white transition-colors font-opensans text-sm font-medium block"
                    >
                      {products.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4 font-poppins">
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-white/70 hover:text-white transition-colors font-opensans text-sm font-medium block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

             {/* Quick Links */}
             <div>
              <h4 className="text-base font-semibold text-white mb-4 font-poppins">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors font-opensans text-sm font-medium block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4 font-poppins">
                Contact Info
              </h4>
              <div className="space-y-4">
                {/* Global Offices */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-white" />
                    <h5 className="font-medium text-white text-sm">Global Offices</h5>
                  </div>
                  <div className="ml-6">
                    <div className="text-white/70 font-opensans text-sm font-medium">
                      India - Mumbai
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-white" />
                    <h5 className="font-medium text-white text-sm">Phone Numbers</h5>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div>
                      <a 
                        href="tel:+919967226700"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        Sales: +91-9967226700
                      </a>
                    </div>
                    <div>
                      <a 
                        href="tel:+918652340409"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        Sales: +91-8652340409
                      </a>
                    </div>
                    <div>
                      <a 
                        href="tel:+918767650738"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        HR: +91-8767650738
                      </a>
                    </div>
                    <div>
                      <a 
                        href="tel:+918767650738"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        Support: +91-8767650738
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-white" />
                    <h5 className="font-medium text-white text-sm">Email Addresses</h5>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div>
                      <a 
                        href="mailto:sales@ksoftpl.com"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        sales@ksoftpl.com
                      </a>
                    </div>
                    <div>
                      <a 
                        href="mailto:hr@ksoftpl.com"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        hr@ksoftpl.com
                      </a>
                    </div>
                    <div>
                      <a 
                        href="mailto:support@ksoftpl.com"
                        className="text-white/70 hover:text-white transition-colors block font-opensans text-sm font-medium"
                      >
                        support@ksoftpl.com
                  </a>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-xs text-white/60 font-opensans">
              © {currentYear} Kanishka Software. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors font-opensans"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

         {/* Back to Top Button */}
         <Button
          variant="gradient"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-strong z-40"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
      <div className="hidden lg:block px-16 text-center">
        <div className="flex justify-center">
          <img 
            src={footerLogo} 
            alt="Kanishka Software Logo" 
            className="h-32 w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};


export default Footer;
