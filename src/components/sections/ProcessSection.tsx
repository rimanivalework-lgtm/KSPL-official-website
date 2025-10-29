import React from 'react';
import { ProcessPhase } from './ProcessPhase';
import { ProcessPhase as ProcessPhaseType } from '@/types';
import { SPACING, TYPOGRAPHY } from '@/lib/theme';
import CategoryIcon from '@/assets/icons/category.svg';
import TransparencyIcon from '@/assets/icons/transparency.svg';
import AssessmentAltIcon from '@/assets/icons/assessment-alt.svg';
import LaunchIcon from '@/assets/icons/launch.svg';

const ProcessSection = () => {
  const phases: ProcessPhaseType[] = [
    {
      icon: CategoryIcon,
      title: 'Consultation & Discovery',
      duration: 'Week 1-2',
      bgNumber: '01',
      description: 'We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.',
      gradient: 'from-primary/10 to-primary/20',
      borderColor: 'border-primary/30',
      animationDelay: '0ms'
    },
    {
      icon: TransparencyIcon,
      title: 'Design & Development',
      duration: 'Week 3-X',
      bgNumber: '02',
      description: 'Our team creates detailed wireframes, user flows, and technical architecture for your solution.',
      gradient: 'from-primary/10 to-primary/20',
      borderColor: 'border-primary/30',
      animationDelay: '200ms'
    },
    {
      icon: AssessmentAltIcon,
      title: 'Testing & Quality Assurance',
      duration: 'Ongoing',
      bgNumber: '03',
      description: 'We build your solution using modern technologies and rigorous testing methodologies.',
      gradient: 'from-primary/10 to-primary/20',
      borderColor: 'border-primary/30',
      animationDelay: '400ms'
    },
    {
      icon: LaunchIcon,
      title: 'Deployment & Support',
      duration: 'Week X+',
      bgNumber: '04',
      description: 'We deploy your solution, provide training, and ensure smooth launch with ongoing support.',
      gradient: 'from-primary/10 to-primary/20',
      borderColor: 'border-primary/30',
      animationDelay: '600ms'
    }
  ];

  return (
    <section id="process" className={SPACING.section.py}>
      <div className={`container mx-auto ${SPACING.container.px}`}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.heading.h2} text-foreground mb-3 sm:mb-4`}>
            Our <span className="text-primary">Development Process</span>
          </h2>
          <p className={`${TYPOGRAPHY.body.base} text-muted-foreground max-w-3xl mx-auto`}>
            We follow a proven methodology that ensures quality, transparency, and successful project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <ProcessPhase 
              key={index} 
              phase={phase} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;