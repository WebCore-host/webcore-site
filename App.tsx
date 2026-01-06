
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeploymentGuide from './components/DeploymentGuide';
import FloatingCTA from './components/FloatingCTA';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'pricing'>('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial loading timer for a professional feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Detect screen size for mobile logic
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Custom event for deployment guide
    const handleOpenGuide = () => setShowGuide(true);
    window.addEventListener('open-deployment-guide', handleOpenGuide);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('open-deployment-guide', handleOpenGuide);
    };
  }, []);

  // Determine what to show on the main stage
  const renderMobileContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <StatsMarquee />
            <Services />
          </>
        );
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Loader */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main Website Content */}
      <div className={`transition-all duration-1000 ${isLoading ? 'blur-sm scale-[0.98] opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />
        <main>
          {isMobile ? (
            <div key={activeTab} className="animate-in fade-in slide-in-from-right-4 duration-500">
              {renderMobileContent()}
            </div>
          ) : (
            <>
              <Hero />
              <StatsMarquee />
              <Services />
              <About />
              <Pricing />
            </>
          )}
          {/* Contact is persistent on both desktop and mobile as requested */}
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Sticky Floating CTA */}
      <FloatingCTA />

      {/* Deployment Guide Modal */}
      {showGuide && <DeploymentGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;
