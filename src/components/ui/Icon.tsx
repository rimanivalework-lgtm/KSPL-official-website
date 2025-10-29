import React from 'react';

export interface IconProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'white' | 'muted' | 'custom';
  customColor?: string;
  style?: React.CSSProperties;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const colorFilters = {
  primary: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)',
  white: 'brightness(0) saturate(100%) invert(100%)',
  muted: 'brightness(0) saturate(100%) invert(39%) sepia(8%) saturate(1234%) hue-rotate(201deg) brightness(95%) contrast(89%)',
  custom: '',
};

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  className = '',
  size = 'md',
  color = 'primary',
  customColor,
  style = {},
  ...props
}) => {
  const sizeClass = sizeClasses[size];
  const filter = customColor || colorFilters[color];
  
  const iconStyle = {
    ...style,
    ...(filter && { filter }),
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClass} ${className}`}
      style={iconStyle}
      {...props}
    />
  );
};

export default Icon;
