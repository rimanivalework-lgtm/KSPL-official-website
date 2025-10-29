// Responsive utility classes for consistent mobile-first design
export const responsive = {
  // Text sizes
  text: {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base", 
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl lg:text-2xl",
    xl: "text-xl sm:text-2xl lg:text-3xl",
    "2xl": "text-2xl sm:text-3xl lg:text-4xl",
    "3xl": "text-3xl sm:text-4xl lg:text-5xl"
  },
  
  // Spacing
  spacing: {
    xs: "py-4 sm:py-6",
    sm: "py-6 sm:py-8", 
    base: "py-8 sm:py-12",
    lg: "py-12 sm:py-16 lg:py-20",
    xl: "py-16 sm:py-20 lg:py-24"
  },
  
  // Padding
  padding: {
    xs: "p-2 sm:p-3",
    sm: "p-3 sm:p-4",
    base: "p-4 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-8 sm:p-10"
  },
  
  // Margins
  margin: {
    xs: "mb-2 sm:mb-3",
    sm: "mb-3 sm:mb-4", 
    base: "mb-4 sm:mb-6",
    lg: "mb-6 sm:mb-8",
    xl: "mb-8 sm:mb-10"
  },
  
  // Grid columns
  grid: {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  },
  
  // Flex directions
  flex: {
    row: "flex-row",
    col: "flex-col sm:flex-row",
    "col-reverse": "flex-col-reverse sm:flex-row"
  },
  
  // Visibility
  visibility: {
    mobile: "block sm:hidden",
    desktop: "hidden sm:block",
    tablet: "hidden md:block",
    "mobile-only": "block md:hidden"
  }
} as const;

// Helper function to combine responsive classes
export const combineResponsive = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
