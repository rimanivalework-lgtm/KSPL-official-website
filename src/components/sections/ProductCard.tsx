import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/Icon";
import { Product } from "@/types";
import { ANIMATIONS, SHADOWS } from "@/lib/theme";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <Card 
      className={`${product.color} ${product.borderColor} ${product.hoverColor} ${product.shadowColor} ${product.hoverShadowColor} border-2 ${SHADOWS.large} card-hover-effect ${ANIMATIONS.fadeIn} h-full group relative overflow-hidden card-consistent`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        maxWidth: '100%'
      }}
    >
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="w-full h-full bg-gradient-to-br from-current to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
      </div>
      
      <CardContent className="p-6 h-full flex flex-col relative z-10">
        {/* Icon with Enhanced Styling */}
        <div className={`inline-flex p-3 sm:p-4 rounded-xl ${product.iconBg} mb-4 sm:mb-5 w-fit ${SHADOWS.large}`}>
          <Icon 
            src={product.icon} 
            alt={product.title}
            size="md"
            color="white"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-secondary">
            {product.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
