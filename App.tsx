
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
  const [isLoading, setIsLoading] = useState(false); // Default to false for instant visibility
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'pricing'>('home');
  const [isMobile, setIsMobile] = useState(false);
  const [pricingModalPlan, setPricingModalPlan] = useState<string | null>(null);

  useEffect(() => {
    let failsafeTimer: number;

    const handlePageLoad = () => {
      clearTimeout(failsafeTimer);
      setIsLoading(false);
    };

    // If the document is already loaded, we don't need a failsafe
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      // If the page takes more than 2.5 seconds to load, show the failsafe loader
      failsafeTimer = window.setTimeout(() => {
        setIsLoading(true);
      }, 2500);

      window.addEventListener('load', handlePageLoad);
    }

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
      clearTimeout(failsafeTimer);
      window.removeEventListener('load', handlePageLoad);
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
        return <Pricing onPlanSelect={(plan) => setPricingModalPlan(plan)} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Failsafe Loader - Only shown if connection is slow */}
      <LoadingScreen isLoading={isLoading} />

      {/* Navbar stays fixed */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />

      {/* Main Website Content Wrapper */}
      <div className={`transition-all duration-500 ${isLoading ? 'blur-sm scale-[0.99] opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <main>
          {isMobile ? (
            <div key={activeTab} className="pt-10 animate-in fade-in slide-in-from-right-4 duration-500">
              {renderMobileContent()}
            </div>
          ) : (
            <>
              <Hero />
              <StatsMarquee />
              <Services />
              <About />
              <Pricing onPlanSelect={(plan) => setPricingModalPlan(plan)} />
            </>
          )}
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Pricing Modal Overlay */}
      {pricingModalPlan && (
        <Contact 
          isModal 
          initialPlan={pricingModalPlan} 
          onClose={() => setPricingModalPlan(null)} 
        />
      )}

      {/* Sticky Floating CTA */}
      <FloatingCTA />

      {/* Deployment Guide Modal */}
      {showGuide && <DeploymentGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;
