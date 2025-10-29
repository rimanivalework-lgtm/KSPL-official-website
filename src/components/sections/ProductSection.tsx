import { ProductCard } from "@/components/sections/ProductCard";
import { Button } from "@/components/ui/enhanced-button";
import { Product } from "@/types";
import { COLORS, SPACING, TYPOGRAPHY } from "@/lib/theme";
import OutOfStockIcon from "@/assets/icons/out-of-stock.svg";
import EmployeePerformanceIcon from "@/assets/icons/employee-performance.svg";
import BatteryExclamationIcon from "@/assets/icons/battery-exclamation.svg";
import PuzzlePieceIcon from "@/assets/icons/puzzle-piece.svg";

const ProductSection = () => {
  const products: Product[] = [
    {
      icon: OutOfStockIcon,
      title: "Digital Transformation Barriers",
      description: "Legacy systems holding back growth and innovation in your organization",
      color: `bg-gradient-to-br ${COLORS.products.blue.background}`,
      iconBg: `bg-gradient-to-br ${COLORS.products.blue.icon}`,
      borderColor: COLORS.products.blue.border,
      hoverColor: COLORS.products.blue.hover,
      shadowColor: COLORS.products.blue.shadow,
      hoverShadowColor: COLORS.products.blue.hoverShadow,
    },
    {
      icon: EmployeePerformanceIcon,
      title: "Inefficient Processes",
      description: "Manual processes reducing productivity and increasing operational costs",
      color: `bg-gradient-to-br ${COLORS.products.red.background}`,
      iconBg: `bg-gradient-to-br ${COLORS.products.red.icon}`,
      borderColor: COLORS.products.red.border,
      hoverColor: COLORS.products.red.hover,
      shadowColor: COLORS.products.red.shadow,
      hoverShadowColor: COLORS.products.red.hoverShadow,
    },
    {
      icon: BatteryExclamationIcon,
      title: "Scalability Concerns",
      description: "Solutions that can't grow with your business and market demands",
      color: `bg-gradient-to-br ${COLORS.products.green.background}`,
      iconBg: `bg-gradient-to-br ${COLORS.products.green.icon}`,
      borderColor: COLORS.products.green.border,
      hoverColor: COLORS.products.green.hover,
      shadowColor: COLORS.products.green.shadow,
      hoverShadowColor: COLORS.products.green.hoverShadow,
    },
    {
      icon: PuzzlePieceIcon,
      title: "Technology Integration",
      description: "Disconnected systems creating silos and data fragmentation",
      color: `bg-gradient-to-br ${COLORS.products.yellow.background}`,
      iconBg: `bg-gradient-to-br ${COLORS.products.yellow.icon}`,
      borderColor: COLORS.products.yellow.border,
      hoverColor: COLORS.products.yellow.hover,
      shadowColor: COLORS.products.yellow.shadow,
      hoverShadowColor: COLORS.products.yellow.hoverShadow,
    }
  ];

  return (
    <section id="products" className={SPACING.section.py}>
      <div className={`container mx-auto ${SPACING.container.px}`}>
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className={`${TYPOGRAPHY.heading.h2} text-foreground mb-3 sm:mb-4`}>
            Got Business Problems? We've Got AI based Software Solutions
          </h2>
          <p className={`${TYPOGRAPHY.body.base} text-muted-foreground max-w-3xl mx-auto leading-relaxed`}>
            Transform your business challenges into opportunities with our innovative AI-powered software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
