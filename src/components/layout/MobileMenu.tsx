import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { productItems, serviceItems, companyItems, serviceGroups, solutionsItems } from "@/constants/navigation";
import PromotionalSection from "./PromotionalSection";

interface MobileMenuProps {
  isMenuOpen: boolean;
  openDropdown: string | null;
  setOpenDropdown: (dropdown: string | null) => void;
}

const MobileMenu = ({ isMenuOpen, openDropdown, setOpenDropdown }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

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
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
        className={`flex items-center justify-between w-full py-4 px-4 text-left font-poppins font-semibold text-base transition-colors rounded-lg ${
          openDropdown === key 
            ? 'bg-primary/10 text-primary' 
            : 'text-foreground hover:bg-primary/10 hover:text-primary'
        }`}
      >
        <span>{title}</span>
        {openDropdown === key ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {openDropdown === key && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <div key={item.name}>
              {renderLink(item.href, 
                item.name,
                "block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderGroupedDropdown = (key: string, title: string, groups: Array<{title: string, items: Array<{name: string, href: string}>}>, showGroupTitles: boolean = false) => (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
        className={`flex items-center justify-between w-full py-4 px-4 text-left font-poppins font-semibold text-base transition-colors rounded-lg ${
          openDropdown === key 
            ? 'bg-primary/10 text-primary' 
            : 'text-foreground hover:bg-primary/10 hover:text-primary'
        }`}
      >
        <span>{title}</span>
        {openDropdown === key ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {openDropdown === key && (
        <div className="pl-4 mt-2">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className={showGroupTitles ? "space-y-2 mb-4" : ""}>
              {showGroupTitles && (
                <div className="text-sm font-bold text-primary mb-2" style={{ fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  {group.title}
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <div key={item.name}>
                    {renderLink(item.href, 
                      item.name,
                      "block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="lg:hidden bg-white shadow-lg border-t border-gray-200 h-screen flex flex-col">
      {/* Scrollable Navigation Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="container mx-auto py-6 space-y-6 px-4 sm:px-6">
          {/* Mobile Navigation Items */}
          <div className="space-y-0 px-2">
            {renderDropdown('mobile-product', 'Product', productItems)}
            {renderGroupedDropdown('mobile-service', 'Service', serviceGroups, true)}
            {renderDropdown('mobile-solutions', 'Solutions', solutionsItems)}
            {renderDropdown('mobile-about', 'Company', companyItems)}
          </div>
        </div>
      </div>

      <PromotionalSection />
    </div>
  );
};

export default MobileMenu;
