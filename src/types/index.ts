// Type definitions for the application
import React from 'react';

export interface Product {
  icon: string;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  borderColor: string;
  hoverColor: string;
  shadowColor: string;
  hoverShadowColor: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  cardTint: string;
  hoverBgColor?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  logo?: string;
}

export interface ProcessPhase {
  icon: string;
  title: string;
  duration: string;
  bgNumber: string;
  description: string;
  gradient?: string;
  borderColor?: string;
  animationDelay?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  left: FAQItem[];
  right: FAQItem[];
}

// ContactFormData interface for form validation
export interface ContactFormData {
  name: string;
  companyName: string;
  phoneNumber: string;
  businessEmail: string;
  helpWith: string;
  businessDescription: string;
  location: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface IconProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'white' | 'muted' | 'custom';
  customColor?: string;
  style?: React.CSSProperties;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'card';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
  href?: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
  href?: string;
}

export interface StatCard {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description?: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  tags: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
  technologies: string[];
  results: string[];
}
