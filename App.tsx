
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
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'pricing' | 'faq' | 'testimonials'>('home');
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleOpenGuide = () => setShowGuide(true);
    window.addEventListener('open-deployment-guide', handleOpenGuide);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handlePageLoad);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('open-deployment-guide', handleOpenGuide);
    };
  }, []);

  const renderContent = () => {
    // MOBILE VIEW: Keep original logic exactly as it was
    if (isMobile) {
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
          // Default to home if state gets into faq/testimonials on mobile resize
          return (
            <>
              <Hero />
              <StatsMarquee />
              <Services />
            </>
          );
      }
    } 
    
    // DESKTOP/TABLET VIEW: New Page Logic
    else {
      if (activeTab === 'faq' || activeTab === 'testimonials') {
        return (
          <div className="min-h-[70vh] flex items-center justify-center pt-32">
            <h1 className="text-6xl font-black text-slate-200 animate-pulse">Empty</h1>
          </div>
        );
      }
      return (
        <>
          <Hero />
          <StatsMarquee />
          <Services />
          <About />
          <Pricing onPlanSelect={(plan) => setPricingModalPlan(plan)} />
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <LoadingScreen isLoading={isLoading} />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />

      <div className={`transition-all duration-700 ${isLoading ? 'blur-md scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <main>
          <div key={`${activeTab}-${isMobile}`} className="animate-in fade-in duration-700">
            {renderContent()}
          </div>
          <Contact />
        </main>
        <Footer setActiveTab={setActiveTab} isMobile={isMobile} />
      </div>

      {pricingModalPlan && (
        <Contact 
          isModal 
          initialPlan={pricingModalPlan} 
          onClose={() => setPricingModalPlan(null)} 
        />
      )}

      <FloatingCTA />

      {showGuide && <DeploymentGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;
