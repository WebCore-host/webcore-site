
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
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
    </div>
  );
};

export default App;
