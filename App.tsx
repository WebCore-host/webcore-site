
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeploymentGuide from './components/DeploymentGuide';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

  // Listen for a custom event from the footer to show the guide
  useEffect(() => {
    const handleOpenGuide = () => setShowGuide(true);
    window.addEventListener('open-deployment-guide', handleOpenGuide);
    return () => window.removeEventListener('open-deployment-guide', handleOpenGuide);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Main Website Content */}
      <Navbar />
      <main>
        <Hero />
        <StatsMarquee />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Sticky Floating CTA */}
      <FloatingCTA />

      {/* Deployment Guide Modal */}
      {showGuide && <DeploymentGuide onClose={() => setShowGuide(false)} />}
    </div>
  );
};

export default App;
