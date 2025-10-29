export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  left: FAQItem[];
  right: FAQItem[];
}

// General company FAQ data
export const generalFAQData: FAQData = {
  left: [
    {
      question: "What does Kanishka Software do?",
      answer: "Kanishka Software is a global software development company specializing in custom enterprise solutions, SaaS products, and AI-powered workflows. Since 2014, we've delivered 200+ projects across industries like BFSI, manufacturing, healthcare and education."
    },
    {
      question: "Where are your offices located?",
      answer: "We are headquartered in Mumbai, India"
    },
    {
      question: "What industries do you serve?",
      answer: "Our solutions are trusted by corporates, real estate groups, healthcare institutions, educational campuses, banks and global enterprises. Whether you're managing facilities, employees, or customer engagement, we provide tailored technology to simplify operations."
    },
    {
      question: "What products does Kanishka Software offer?",
      answer: "We offer a suite of SaaS platforms including: EntryIQ – Visitor Management System, Foodiisoft – Cafeteria Management Software, Spacebee – Meeting Room Management Software, Qualus – Audit & Compliance Software, SyncAsset – Asset Management System, QuickRetail– Inventory Management System, AIFlows – AI-powered Workflow Automation"
    },
    {
      question: "Can your products integrate with existing systems?",
      answer: "Yes. Our platforms are designed to integrate seamlessly with HRMS, payroll, POS, accounting systems, and other enterprise applications, ensuring smooth adoption without disrupting existing workflows."
    }
  ],
  right: [
    {
      question: "How secure are your solutions?",
      answer: "We follow ISO 9001 and ISO 27001 standards for quality and data security. Our role-based access, secure authentication, and centralized logging ensure compliance and protection of sensitive business data."
    },
    {
      question: "What sets Kanishka Software apart from other vendors?",
      answer: "11+ years of industry experience, In-house development team in India for faster customizations, Proven track record with Fortune 500 companies and leading Indian enterprises, Dedicated post-implementation support from our Mumbai and Pune teams, High customer retention rate (95%+)"
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines depend on the product and scale. For example, Foodiisoft cafeteria management can go live in 6 weeks, while Spacebee meeting room management is plug-and-play and can be deployed within days."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes. We provide end-to-end onboarding, admin/staff training, and ongoing support. Our customer success team ensures your operations run smoothly with minimal disruption."
    },
    {
      question: "How can I get started with Kanishka Software?",
      answer: "You can request a free demo through our website, email us at sales@ksoftpl.com, or call us at +91 9976226700. Our consultants will understand your needs and recommend the right solution for your organization."
    }
  ]
};
