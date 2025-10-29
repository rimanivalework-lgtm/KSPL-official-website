// Theme constants for consistent styling across the application

export const COLORS = {
  // Primary brand colors - Updated with new palette
  primary: '#195C9A',
  primaryDark: '#002648',
  primaryLight: '#307CC3',
  
  // Text colors
  text: {
    primary: '#1a1a1a',
    secondary: '#64748B',
    white: '#FFFFFF',
    muted: '#6B7280',
  },
  
  // Background colors
  background: {
    white: '#FFFFFF',
    muted: '#F8FAFC',
    primary: '#195C9A',
    primaryDark: '#002648',
  },
  
  // Product section colors - Updated with new palette
  products: {
    blue: {
      background: 'from-[#BADEFF] to-[#EEF7FF]',
      icon: 'from-[#195C9A] to-[#307CC3]',
      border: 'border-[#195C9A]/20',
      hover: 'hover:border-[#195C9A]/40',
      shadow: 'shadow-[#195C9A]/10',
      hoverShadow: 'hover:shadow-[#195C9A]/20',
    },
    red: {
      background: 'from-[#FFB6B7] to-[#FFEDED]',
      icon: 'from-[#C42A2D] to-[#ED4447]',
      border: 'border-[#C42A2D]/20',
      hover: 'hover:border-[#C42A2D]/40',
      shadow: 'shadow-[#C42A2D]/10',
      hoverShadow: 'hover:shadow-[#C42A2D]/20',
    },
    green: {
      background: 'from-[#A0FFB5] to-[#F1FFF4]',
      icon: 'from-[#3BAB53] to-[#56D471]',
      border: 'border-[#3BAB53]/20',
      hover: 'hover:border-[#3BAB53]/40',
      shadow: 'shadow-[#3BAB53]/10',
      hoverShadow: 'hover:shadow-[#3BAB53]/20',
    },
    yellow: {
      background: 'from-[#FFEA80] to-[#FFFCED]',
      icon: 'from-[#E5C833] to-[#FFE149]',
      border: 'border-[#E5C833]/20',
      hover: 'hover:border-[#E5C833]/40',
      shadow: 'shadow-[#E5C833]/10',
      hoverShadow: 'hover:shadow-[#E5C833]/20',
    },
    cyan: {
      background: 'from-[#BADEFF] to-[#EEF7FF]',
      icon: 'from-[#4EA0EC] to-[#87C5FF]',
      border: 'border-[#4EA0EC]/20',
      hover: 'hover:border-[#4EA0EC]/40',
      shadow: 'shadow-[#4EA0EC]/10',
      hoverShadow: 'hover:shadow-[#4EA0EC]/20',
    },
  },
  
  // Button colors - Updated with new palette
  button: {
    primary: '#195C9A',
    secondary: '#307CC3',
    outline: '#195C9A',
    hover: '#093F71',
    // Specific button variants
    hero: {
      background: '#FFFFFF',
      text: '#195C9A',
      hover: 'rgba(255, 255, 255, 0.9)',
    },
    cta: {
      background: 'linear-gradient(135deg, #195C9A, #002648)',
      text: '#FFFFFF',
      hover: 'linear-gradient(135deg, #002648, #195C9A)',
    },
    form: {
      background: '#195C9A',
      text: '#FFFFFF',
      hover: '#093F71',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #195C9A, #002648)',
      hero: 'linear-gradient(135deg, #195C9A, #307CC3)',
    },
  },
  
  // Brand colors for logos
  brand: {
    logos: '#64748B',
  },
  
  // Spacebee-specific colors
  spacebee: {
    primary: '#10B785',
    primaryDark: '#0E9A73',
    primaryLight: '#56D471',
    background: '#F1FFF4',
    backgroundLight: '#C9FFD4',
    text: '#10B785',
    textDark: '#0E9A73',
    border: '#10B785',
    borderLight: '#10B785/20',
    shadow: '#10B785/10',
    hover: '#0E9A73',
  },
  
  // New color palette variations
  palette: {
    blue: {
      50: '#EEF7FF',
      100: '#BADEFF',
      200: '#87C5FF',
      300: '#4EA0EC',
      400: '#307CC3',
      500: '#195C9A',
      600: '#093F71',
      700: '#002648',
    },
    red: {
      50: '#FFEDED',
      100: '#FFB6B7',
      200: '#FF7F82',
      300: '#ED4447',
      400: '#C42A2D',
      500: '#9B1619',
      600: '#72080A',
      700: '#4A0002',
    },
    yellow: {
      50: '#FFFCED',
      100: '#FFF3B6',
      200: '#FFEA80',
      300: '#FFE149',
      400: '#E5C833',
      500: '#BCA21E',
      600: '#937E0E',
      700: '#6B5A03',
    },
    green: {
      50: '#F1FFF4',
      100: '#C9FFD4',
      200: '#A0FFB5',
      300: '#77FD94',
      400: '#56D471',
      500: '#3BAB53',
      600: '#258239',
      700: '#145923',
    },
    darkGreen: {
      50: '#F0FFF6',
      100: '#C5FFDA',
      200: '#99FFBF',
      300: '#6CFAA1',
      400: '#48D27B',
      500: '#2BA95A',
      600: '#075725',
      700: '#15803D',
    },
    spacebee: {
      50: '#F1FFF4',
      100: '#C9FFD4',
      200: '#A0FFB5',
      300: '#77FD94',
      400: '#56D471',
      500: '#10B785',
      600: '#0E9A73',
      700: '#0A7A5F',
      800: '#075A4B',
      900: '#043A37',
    },
  },
} as const;

export const SPACING = {
  section: {
    py: 'py-10 sm:py-12 lg:py-16',
    pyLarge: 'py-16 lg:py-24',
  },
  container: {
    px: 'px-4 sm:px-6 lg:px-8',
  },
  card: {
    p: 'p-6',
    pLarge: 'p-8',
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    h1: 'text-2xl sm:text-3xl lg:text-4xl font-inter font-bold',
    h2: 'text-2xl sm:text-3xl lg:text-4xl font-inter font-bold',
    h3: 'text-lg sm:text-xl lg:text-2xl font-dmsans font-bold',
  },
  body: {
    base: 'text-base sm:text-lg font-dmsans',
    small: 'text-sm sm:text-base font-dmsans',
  },
  font: {
    primary: 'font-inter',
    secondary: 'font-dmsans',
  },
} as const;

export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  bounce: 'icon-bounce',
  hover: 'hover:-translate-y-2',
  transition: 'transition-all duration-300',
} as const;

export const GRADIENTS = {
  primary: 'bg-gradient-primary',
  hero: 'bg-gradient-hero',
  card: 'bg-gradient-to-br',
} as const;

export const SHADOWS = {
  soft: 'shadow-soft',
  medium: 'shadow-medium',
  large: 'shadow-lg',
  xl: 'shadow-xl',
} as const;
