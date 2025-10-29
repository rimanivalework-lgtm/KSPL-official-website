// Spacebee-specific color constants
// This file centralizes all Spacebee color values to avoid repetition

export const SPACEBEE_COLORS = {
  // Primary colors
  primary: '#10B785',
  primaryDark: '#0E9A73',
  primaryLight: '#56D471',
  
  // Background colors
  background: '#F1FFF4',
  backgroundLight: '#C9FFD4',
  
  // Text colors
  text: '#10B785',
  textDark: '#0E9A73',
  textWhite: '#FFFFFF',
  
  // Border colors
  border: '#10B785',
  borderLight: '#10B785/20',
  borderMedium: '#10B785/30',
  
  // Shadow colors
  shadow: '#10B785/10',
  shadowMedium: '#10B785/20',
  
  // Hover states
  hover: '#0E9A73',
  hoverLight: '#10B785/10',
  hoverMedium: '#10B785/20',
  
  // Gradient colors
  gradient: {
    primary: 'from-[#10B785] to-[#0E9A73]',
    background: 'from-[#10B785]/5 to-white',
    backgroundReverse: 'from-white to-[#10B785]/5',
    card: 'from-[#10B785]/5 to-green-100',
  },
  
  // Tailwind classes for easy use
  classes: {
    primary: 'text-[#10B785]',
    primaryDark: 'text-[#0E9A73]',
    primaryLight: 'text-[#56D471]',
    background: 'bg-[#F1FFF4]',
    backgroundLight: 'bg-[#C9FFD4]',
    border: 'border-[#10B785]',
    borderLight: 'border-[#10B785]/20',
    borderMedium: 'border-[#10B785]/30',
    shadow: 'shadow-[#10B785]/10',
    shadowMedium: 'shadow-[#10B785]/20',
    hover: 'hover:text-[#0E9A73]',
    hoverBg: 'hover:bg-[#0E9A73]',
    hoverBgLight: 'hover:bg-[#10B785]/10',
    hoverBgMedium: 'hover:bg-[#10B785]/20',
    gradientPrimary: 'bg-gradient-to-r from-[#10B785] to-[#0E9A73]',
    gradientBackground: 'bg-gradient-to-b from-[#10B785]/5 to-white',
    gradientBackgroundReverse: 'bg-gradient-to-b from-white to-[#10B785]/5',
  },
} as const;

// Helper function to get color with opacity
export const getSpacebeeColor = (color: keyof typeof SPACEBEE_COLORS, opacity?: number) => {
  const baseColor = SPACEBEE_COLORS[color];
  if (typeof baseColor === 'string' && baseColor.startsWith('#')) {
    return opacity ? `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}` : baseColor;
  }
  return baseColor;
};

// Helper function to get gradient class
export const getSpacebeeGradient = (gradient: keyof typeof SPACEBEE_COLORS.gradient) => {
  return `bg-gradient-to-r ${SPACEBEE_COLORS.gradient[gradient]}`;
};
