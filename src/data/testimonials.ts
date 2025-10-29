import { Testimonial } from '@/components/ui/TestimonialCard';

export const testimonials: Testimonial[] = [
  // Original home page testimonials
  {
    id: "1",
    name: "Jennifer Martinez",
    title: "Chief Technology Officer",
    company: "Microsoft Corporation",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    industry: "Fortune 500",
    content: "Kanishka Software's expertise in cloud migration and enterprise solutions has been instrumental in our digital transformation journey. Their team delivered exceptional results that exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "general"
  },
  {
    id: "2",
    name: "Dr. Robert Kim",
    title: "Director of IT",
    company: "Mayo Clinic",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mayo_Clinic_logo.svg",
    industry: "Healthcare",
    content: "The healthcare management system they developed has streamlined our patient care processes and improved operational efficiency by 40%. Their understanding of healthcare compliance was outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "healthcare"
  },
  {
    id: "3",
    name: "Amanda Foster",
    title: "VP of Digital Banking",
    company: "JPMorgan Chase",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/36/JPMorgan_Chase_%26_Co._logo.svg",
    industry: "Financial Services",
    content: "Kanishka Software's fintech solutions have enhanced our digital banking platform significantly. Their security-first approach and regulatory compliance expertise gave us complete confidence.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "fintech"
  },
  {
    id: "4",
    name: "Michael Chen",
    title: "Head of Engineering",
    company: "Tesla Inc.",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    industry: "Automotive",
    content: "The AI-powered analytics platform they built for us has revolutionized our manufacturing processes. The real-time insights have helped us reduce costs by 25% while improving quality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "manufacturing"
  },
  {
    id: "5",
    name: "Sarah Johnson",
    title: "CTO",
    company: "Shopify",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_black.svg",
    industry: "E-commerce",
    content: "Their e-commerce solutions have been game-changing for our platform. The scalability and performance improvements have directly impacted our merchant success rates.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    category: "ecommerce"
  },
  {
    id: "6",
    name: "David Rodriguez",
    title: "VP of Technology",
    company: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    industry: "Entertainment",
    content: "The streaming optimization solutions they delivered have significantly improved our user experience. Their technical expertise and attention to detail are unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    category: "entertainment"
  },
  // Asset Management specific testimonials
  {
    id: "7",
    name: "Jennifer Martinez",
    title: "Chief Technology Officer",
    company: "Apollo Hospitals",
    companyLogo: "/src/assets/logos/Apollo_Hospitals_Logo.svg",
    industry: "Healthcare",
    content: "SYNC reduced our asset tracking time by 75% and gave us complete visibility into our equipment across all locations. The ROI has been exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    category: "asset-management"
  },
  {
    id: "8",
    name: "Dr. Robert Kim",
    title: "Director of IT",
    company: "ICICI Bank",
    companyLogo: "/src/assets/logos/ICIC-bank.png",
    industry: "Financial Services",
    content: "Complete visibility into our equipment across 12 locations. The automated depreciation calculations saved us 40 hours monthly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "asset-management"
  },
  {
    id: "9",
    name: "Amanda Foster",
    title: "VP of Digital Banking",
    company: "Nykaa",
    companyLogo: "/src/assets/logos/Nykaa-Logo.png",
    industry: "E-commerce",
    content: "QR code scanning made inventory audits 10x faster. Their security-first approach and regulatory compliance expertise gave us complete confidence.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "asset-management"
  },
  {
    id: "10",
    name: "Michael Chen",
    title: "Head of Engineering",
    company: "SBI Life Insurance",
    companyLogo: "/src/assets/logos/SBI-Life-Insurance.webp",
    industry: "Insurance",
    content: "The AI-powered analytics platform they built for us has revolutionized our manufacturing processes. Real-time insights helped us reduce costs by 25%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "asset-management"
  }
];

// Helper function to get testimonials by category
export const getTestimonialsByCategory = (category: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.category === category);
};

// Helper function to get all testimonials
export const getAllTestimonials = (): Testimonial[] => {
  return testimonials;
};

// Helper function to get original home page testimonials (first 6)
export const getHomePageTestimonials = (): Testimonial[] => {
  return testimonials.slice(0, 6);
};
