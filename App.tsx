
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

  useEffect(() => {
    // Initial loading timer for a professional feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Custom event for deployment guide
    const handleOpenGuide = () => setShowGuide(true);
    window.addEventListener('open-deployment-guide', handleOpenGuide);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-deployment-guide', handleOpenGuide);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Loader */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main Website Content */}
      <div className={`transition-all duration-1000 ${isLoading ? 'blur-sm scale-[0.98] opacity-0' : 'blur-0 scale-100 opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <StatsMarquee />
          <Services />
          <About />
          <Pricing />
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
