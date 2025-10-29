// Import product logos
import SyncAssetLogo from "@/assets/HeaderProduct Logos/SyncAsset.png";
import FoodiisoftLogo from "@/assets/HeaderProduct Logos/Foodiisoft.png";
import SpacebeeLogo from "@/assets/HeaderProduct Logos/Spacebee.png";
import QuickretailLogo from "@/assets/HeaderProduct Logos/Quickretail.webp";
import OurAttendanceLogo from "@/assets/HeaderProduct Logos/Our Attendance.png";
import AiLogo from "@/assets/HeaderProduct Logos/ai.png";
import QualusLogo from "@/assets/HeaderProduct Logos/Qualus.png";
import EntryIQLogo from "@/assets/HeaderProduct Logos/EntryIQ.png";

export const productItems = [
  { name: "Asset Management System", href: "/products/asset-management", logo: SyncAssetLogo },
  { name: "Cafeteria Management System", href: "/products/foodiisoft", logo: FoodiisoftLogo },
  { name: "Room Management System", href: "/products/spacebee", logo: SpacebeeLogo },
  { name: "Inventory Management System", href: "https://kanishkasoftware.com/products/inventory-management-system-with-pos/", logo: QuickretailLogo },
  { name: "Attendance Management System", href: "/smart-attendance-management-system", logo: OurAttendanceLogo },
  { name: "AI-powered Workflow Automation", href: "/products/ai-automation", logo: AiLogo },
  { name: "Audit & Compliance Software", href: "#", logo: QualusLogo },
  { name: "Visitor Management System", href: "/products/entryiq", logo: EntryIQLogo },
];

export const serviceItems = [
  { name: "Custom Software Development", href: "/services/custom-software-development" },
  { name: "Mobile App Development", href: "/services/mobile-application-development" },
  { name: "Web Development", href: "/services/website-development" },
  { name: "UI/UX Design", href: "https://kanishkasoftware.com/ui-ux-design/" },
  { name: "Software Consulting", href: "https://kanishkasoftware.com/software-development-consulting/" },
  { name: "Data Analytics", href: "https://kanishkasoftware.com/data-analytics-and-business-intelligence/" },
];

// Grouped structure for Services mega menu
export const serviceGroups = [
  {
    title: "Software Solutions",
    items: [
      { name: "Customise Software Development", href: "/services/custom-software-development" },
      { name: "Software Development Consulting", href: "https://kanishkasoftware.com/software-development-consulting/" },
      { name: "B2B Website Development", href: "https://kanishkasoftware.com/b2b-website-development/" },
      { name: "Software Development Outsourcing", href: "https://kanishkasoftware.com/software-development-outsourcing/" },
      { name: "Management & Support Services", href: "https://kanishkasoftware.com/management-and-support-services/" },
      { name: "Software Consulting & Development for Your Digital Success", href: "https://kanishkasoftware.com/software-consulting-and-development-for-your-digital-success/" },
      { name: "Customise Application Development", href: "https://kanishkasoftware.com/customise-application-development/" },
      { name: "Business Application Development", href: "https://kanishkasoftware.com/business-application-development/" },
      { name: "Data Analytics And Business Intelligence", href: "https://kanishkasoftware.com/data-analytics-and-business-intelligence/" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { name: "Mobile Application Development", href: "/services/mobile-application-development" },
      { name: "Flutter App", href: "https://kanishkasoftware.com/flutter-app/" },
      { name: "Native App", href: "https://kanishkasoftware.com/native-app/" },
      { name: "Business App", href: "https://kanishkasoftware.com/business-app/" },
      { name: "eCommerce App", href: "https://kanishkasoftware.com/ecommerce-app/" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "Static Website Development", href: "https://kanishkasoftware.com/static-website-development/" },
      { name: "Dynamic Website Development", href: "https://kanishkasoftware.com/dynamic-website-development/" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Website Designing", href: "https://kanishkasoftware.com/website-designing/" },
      { name: "Web Application Development", href: "https://kanishkasoftware.com/web-application-development/" },
      { name: "Responsive Web Application", href: "https://kanishkasoftware.com/responsive-web-application/" },
      { name: "Design Services", href: "https://kanishkasoftware.com/design-services/" },
      { name: "UI / UX Design", href: "https://kanishkasoftware.com/ui-ux-design/" },
    ],
  },
  {
    title: "Custom Solutions",
    items: [
      { name: "Custom API Development Services", href: "https://kanishkasoftware.com/custom-api-development-services/" },
    ],
  },
];

// Solutions dropdown - 3 column structure
export const solutionsGroups = [
  {
    title: "Enterprise Solutions",
    items: [
      { name: "Android Based POS for Retailer", href: "https://kanishkasoftware.com/products/android-based-pos-for-retailer/" },
      { name: "Hospital Management System", href: "https://kanishkasoftware.com/products/hospital-management-system/" },
      { name: "Fleet Management System", href: "https://kanishkasoftware.com/products/fleet-management-system/" },
      { name: "Learning Management System", href: "https://kanishkasoftware.com/products/learning-management-system/" },
      { name: "Equipment Maintenance System", href: "https://kanishkasoftware.com/products/equipment-maintenance-system/" },
    ],
  },
  {
    title: "Industry Solutions",
    items: [
      { name: "School Management System Software", href: "https://kanishkasoftware.com/products/school-management-system-software/" },
      { name: "Multi Store eCommerce Shopping Cart Solution", href: "https://kanishkasoftware.com/products/multi-store-ecommerce-shopping-cart-solution/" },
      { name: "Helpdesk Management System", href: "https://kanishkasoftware.com/products/helpdesk-management-system/" },
      { name: "QR code based Food Ordering System", href: "https://kanishkasoftware.com/products/qr-code-based-food-ordering-system/" },
      { name: "Mobile App based Food Ordering for Cafeteria", href: "https://kanishkasoftware.com/products/mobile-app-based-food-ordering-for-cafeteria/" },
    ],
  },
  {
    title: "Management Systems",
    items: [
      { name: "Self-Ordering Kiosk in Cafeteria", href: "https://kanishkasoftware.com/products/self-ordering-kiosk-in-cafeteria/" },
      { name: "Audit Checklist Management System", href: "https://kanishkasoftware.com/products/audit-checklist-management-system/" },
      { name: "Maintenance Management System", href: "https://kanishkasoftware.com/products/maintenance-management-system/" },
      { name: "Lawyer Office Management System", href: "https://kanishkasoftware.com/products/lawyer-office-management-system/" },
    ],
  },
];

// Flattened solutions items for simple dropdowns
export const solutionsItems = solutionsGroups.flatMap(group => group.items);

export const companyItems = [
  { name: "About Us", href: "/company/about-us" },
  { name: "Careers", href: "/company/careers" },
  { name: "Leadership", href: "/company/leadership" },
  { name: "Awards", href: "/company/awards" },
];

export const portfolioItems = [
  { name: "Employee Engagement", href: "#" },
  { name: "Unite Marketplace", href: "#" },
  { name: "Recruitment Software", href: "#" },
];



