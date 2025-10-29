import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children
}) => {
  const location = useLocation();
  // Don't show MainHeader on home page since HeroSection has HeroHeader
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  
  return (
    <div className="relative min-h-screen bg-white">
      {!isHomePage && <MainHeader />}
      
      {/* Desktop: Layered footer effect */}
      <div className="hidden md:block relative">
        {/* Footer - fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-0">
          <Footer />
        </div>
        
        {/* Content scrolling over footer - pointer-events-none except for content wrapper */}
        <main className="relative z-10 min-h-screen pointer-events-none">
          {/* Content - re-enable pointer events so it's interactive */}
          <div className="bg-white pointer-events-auto">
            {children}
          </div>
          {/* Transparent spacer - pointer events pass through to footer below */}
          <div className="h-screen bg-transparent"></div>
        </main>
      </div>
      
      {/* Mobile: Normal flow with footer */}
      <div className="md:hidden">
        <main className="relative min-h-screen">
          <div className="bg-white">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
