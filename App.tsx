
import React, { useState } from 'react';
import { 
  Settings
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeploymentGuide from './components/DeploymentGuide';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

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

      {/* Beginner Help Overlay Trigger */}
      <button
        onClick={() => setShowGuide(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-slate-800 transition-all border border-slate-700"
      >
        <Settings className="w-5 h-5 animate-spin-slow" />
        <span className="font-medium">Admin & Deployment Guide</span>
      </button>

      {/* Tutorial/Guide Modal */}
      {showGuide && (
        <DeploymentGuide onClose={() => setShowGuide(false)} />
      )}
    </div>
  );
};

export default App;
