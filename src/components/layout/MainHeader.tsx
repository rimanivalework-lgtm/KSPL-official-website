import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import kanishkaLogo from "@/assets/kspl-logo.webp";
import { productItems, serviceItems, companyItems, serviceGroups, solutionsGroups } from "@/constants/navigation";
import { useMainHeader } from "@/hooks/useMainHeader";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
  const {
    isMenuOpen,
    openDropdown,
    hoveredDropdown,
    setIsMenuOpen,
    setOpenDropdown,
    setHoveredDropdown,
    handleMouseEnter,
    handleMouseLeave
  } = useMainHeader();

  // Helper function to determine if link is external
  const isExternalLink = (href: string) => {
    return href.startsWith('http') || href.startsWith('https') || href.startsWith('mailto:') || href.startsWith('tel:');
  };

  // Helper function to render link
  const renderLink = (href: string, children: React.ReactNode, className?: string) => {
    if (isExternalLink(href)) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  };

  const renderDropdown = (key: string, title: string, items: Array<{name: string, href: string}>) => (
    <DropdownMenu
      open={openDropdown === key || hoveredDropdown === key}
      onOpenChange={(open) => setOpenDropdown(open ? key : null)}
    >
      <DropdownMenuTrigger
        className={`flex items-center space-x-1 transition-colors font-poppins font-semibold text-base focus:outline-none nav-hover-primary ${
          openDropdown === key || hoveredDropdown === key ? 'text-primary' : 'text-foreground hover:text-primary'
        }`}
        style={{
          color: openDropdown === key || hoveredDropdown === key ? '#195C9A' : undefined
        }}
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
        aria-expanded={openDropdown === key}
        aria-haspopup="menu"
      >
        <span>{title}</span>
        {openDropdown === key || hoveredDropdown === key ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </DropdownMenuTrigger>
      {/* About dropdown */}
      {key === 'about' && (
        <DropdownMenuContent
          className="w-64 p-4 bg-gradient-to-br from-white via-green-500/30 to-primary/5 shadow-xl border border-gray-200 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-2">
            {items.map((item) => (
              <DropdownMenuItem 
                key={item.name} 
                className="group cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary rounded-md p-2 transition-all duration-200"
                style={{ 
                  fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                {renderLink(item.href, 
                  <span className="group-hover:text-primary">{item.name}</span>, 
                  "flex items-center space-x-2 font-medium text-sm text-foreground hover:text-primary group-hover:text-primary"
                )}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      )}
      {/* Portfolio dropdown */}
      {key === 'portfolio' && (
        <DropdownMenuContent
          className="w-64 p-4 bg-gradient-to-br from-white via-green-500/30 to-primary/5 shadow-xl border border-gray-200 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-2">
            {items.map((item) => (
              <DropdownMenuItem 
                key={item.name} 
                className="group cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary rounded-md p-2 transition-all duration-200"
                style={{ 
                  fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                {renderLink(item.href, 
                  <span className="group-hover:text-primary">{item.name}</span>, 
                  "flex items-center space-x-2 font-medium text-sm text-foreground hover:text-primary group-hover:text-primary"
                )}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      )}
      {/* Other dropdowns */}
      {key !== 'product' && key !== 'service' && key !== 'solutions' && key !== 'about' && key !== 'portfolio' && (
        <DropdownMenuContent
          className="w-64 p-4 bg-gradient-to-br from-white via-yellow-500/30 to-primary/5 shadow-xl border border-gray-200 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-2">
            {items.map((item) => (
              <DropdownMenuItem 
                key={item.name} 
                className="group cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary rounded-md p-2 transition-all duration-200"
                style={{ 
                  fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                {renderLink(item.href, 
                  <span className="group-hover:text-primary">{item.name}</span>, 
                  "flex items-center space-x-2 font-medium text-sm text-foreground hover:text-primary group-hover:text-primary"
                )}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      )}
      {/* Mega menu for Product */}
      {key === 'product' && (
        <DropdownMenuContent
          className="w-[400px] p-6 bg-gradient-to-br from-white via-white-500/30 to-primary/5 shadow-2xl border border-primary/20 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col gap-2">
            <ul className="space-y-2">
              {productItems.map((item) => (
                <li key={item.name}>
                  {renderLink(item.href, 
                    <>
                      <img 
                        src={item.logo} 
                        alt={`${item.name} Logo`} 
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span>{item.name}</span>
                    </>,
                    "flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                  )}
                </li>
              ))}
            </ul>
          </div>
        </DropdownMenuContent>
      )}
      {/* Mega menu for Services */}
      {key === 'service' && (
        <DropdownMenuContent
          className="w-[1000px] p-6 bg-gradient-to-br from-white via-blue-500/30 to-primary/5 shadow-2xl border border-primary/20 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {serviceGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <div className="text-sm font-bold text-primary mb-3" style={{ fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {group.title}
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      {renderLink(item.href, 
                        item.name,
                        "block text-sm text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      )}
      {/* Mega menu for Solutions */}
      {key === 'solutions' && (
        <DropdownMenuContent
          className="w-[1000px] p-6 bg-gradient-to-br from-white via-red-500/30 to-primary/5 shadow-2xl border border-primary/20 rounded-xl backdrop-blur-sm"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionsGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      {renderLink(item.href, 
                        item.name,
                        "block text-sm text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 w-full">
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={kanishkaLogo} 
              alt="Kanishka Software" 
              className="h-8 sm:h-10 lg:h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {renderDropdown('product', 'Product', productItems)}
          {renderDropdown('service', 'Service', serviceItems)}
          {renderDropdown('solutions', 'Solutions', solutionsGroups.flatMap(group => group.items))}
          {renderDropdown('about', 'Company', companyItems)}
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

      {/* Mobile Menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        openDropdown={openDropdown} 
        setOpenDropdown={setOpenDropdown} 
      />
    </header>
  );
};

export default MainHeader;