import React from 'react';
import { ProcessPhase as ProcessPhaseType } from "@/types";
import { ANIMATIONS, SHADOWS, TYPOGRAPHY } from "@/lib/theme";

interface ProcessPhaseProps {
  phase: ProcessPhaseType;
  index: number;
}

export const ProcessPhase: React.FC<ProcessPhaseProps> = ({ phase, index }) => {
  return (
      <div
        className={`relative bg-white rounded-2xl p-6 ${SHADOWS.large} hover:${SHADOWS.xl} ${ANIMATIONS.transition} border-2 ${phase.borderColor || 'border-primary/20'} bg-gradient-to-r ${phase.gradient} p-[2px] ${ANIMATIONS.fadeIn}`}
        style={{ animationDelay: phase.animationDelay }}
        role="listitem"
        aria-labelledby={`phase-${index + 1}-title`}
        aria-describedby={`phase-${index + 1}-description`}
      >
      <div className="bg-white rounded-2xl p-6 h-full relative">
        {/* Background Number */}
        <div 
          className="absolute -top-2 -right-0 text-8xl font-bold text-primary/15 select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          {phase.bgNumber}
        </div>
        
        {/* Icon */}
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative z-20">
          <img 
            src={phase.icon} 
            alt={phase.title}
            className="h-6 w-6 text-primary"
            aria-hidden="true"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              {phase.duration}
            </span>
          </div>
          
          <h3 
            id={`phase-${index + 1}-title`}
            className="text-lg font-bold text-primary mb-2"
          >
            {phase.title}
          </h3>
          
          <p 
            id={`phase-${index + 1}-description`}
            className="text-sm text-muted-foreground sr-only"
          >
            {phase.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessPhase;
