
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
  const [isLoading, setIsLoading] = useState(true); // Start as true to show the intro
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'pricing'>('home');
  const [isMobile, setIsMobile] = useState(false);
  const [pricingModalPlan, setPricingModalPlan] = useState<string | null>(null);

  useEffect(() => {
    let minTimerFinished = false;
    let pageLoaded = false;

    const checkComplete = () => {
      if (minTimerFinished && pageLoaded) {
        setIsLoading(false);
      }
    };

    // Minimum display time of 500ms (0.5s) for branding impact
    const timer = setTimeout(() => {
      minTimerFinished = true;
      checkComplete();
    }, 500);

    const handlePageLoad = () => {
      pageLoaded = true;
      checkComplete();
    };

    if (document.readyState === 'complete') {
      pageLoaded = true;
      checkComplete();
    } else {
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
      clearTimeout(timer);
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
      {/* Loading Screen - Always appears for at least 0.5s */}
      <LoadingScreen isLoading={isLoading} />

      {/* Navbar stays fixed */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />

      {/* Main Website Content Wrapper */}
      <div className={`transition-all duration-700 ${isLoading ? 'blur-md scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
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
