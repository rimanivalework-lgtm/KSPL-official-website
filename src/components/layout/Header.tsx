import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import kanishkaLogo from "@/assets/kspl-logo.webp";
import { useNavigation } from "@/hooks/useNavigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const navigation = useNavigation();
  const { 
    isMenuOpen, 
    openDropdown, 
    setIsMenuOpen,
    setOpenDropdown
  } = navigation;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 w-full">
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={kanishkaLogo} 
            alt="Kanishka Software" 
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {/* Navigation items would go here */}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Get Quote Button */}
          <Button 
            variant="cta" 
            size="sm" 
            className="text-sm sm:text-base"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="hidden sm:inline">Get Quote</span>
            <span className="sm:hidden">Quote</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        openDropdown={openDropdown} 
        setOpenDropdown={setOpenDropdown} 
      />
    </header>
  );
};

export default Header;
