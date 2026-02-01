
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
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'pricing' | 'faq'>('home');
  const [isMobile, setIsMobile] = useState(false);
  const [pricingModalPlan, setPricingModalPlan] = useState<string | null>(null);
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

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

  useEffect(() => {
    if (pendingAnchor) {
      const element = document.getElementById(pendingAnchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setPendingAnchor(null);
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(pendingAnchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setPendingAnchor(null);
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [activeTab, pendingAnchor]);

  const handleTabChange = (tab: 'home' | 'about' | 'pricing' | 'faq', anchor?: string) => {
    setActiveTab(tab);
    if (anchor) {
      setPendingAnchor(anchor);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (isMobile) {
      switch (activeTab) {
        case 'home':
          return (
            <>
              <Hero />
              <div id="stats"><StatsMarquee /></div>
              <div id="services"><Services /></div>
              <Projects />
              <Testimonials />
            </>
          );
        case 'about':
          return <div id="about" className="pt-20"><About /></div>;
        case 'pricing':
          return <div id="pricing" className="pt-20"><Pricing onPlanSelect={(plan) => setPricingModalPlan(plan)} /></div>;
        case 'faq':
          return <FAQ />;
        default:
          return (
            <>
              <Hero />
              <div id="stats"><StatsMarquee /></div>
              <div id="services"><Services /></div>
            </>
          );
      }
    } else {
      if (activeTab === 'faq') {
        return <FAQ />;
      }
      return (
        <>
          <Hero />
          <div id="stats"><StatsMarquee /></div>
          <div id="services"><Services /></div>
          <Projects />
          <Testimonials />
          <div id="about"><About /></div>
          <div id="pricing"><Pricing onPlanSelect={(plan) => setPricingModalPlan(plan)} /></div>
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <LoadingScreen isLoading={isLoading} />
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} isMobile={isMobile} />
      <div className={`transition-all duration-700 ${isLoading ? 'blur-md scale-95 opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <main>
          <div key={`${activeTab}-${isMobile}`} className="animate-in fade-in duration-700">
            {renderContent()}
          </div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer setActiveTab={handleTabChange} isMobile={isMobile} />
      </div>
      {pricingModalPlan && (
        <Contact isModal initialPlan={pricingModalPlan} onClose={() => setPricingModalPlan(null)} />
      )}
      <FloatingCTA />
      {showGuide && <DeploymentGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;
