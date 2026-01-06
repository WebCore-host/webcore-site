
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      <a
        href="#contact"
        onClick={scrollToContact}
        className="gradient-bg text-white px-6 py-4 rounded-full font-black text-sm md:text-base flex items-center gap-2 shadow-[0_20px_50px_rgba(34,211,238,0.3)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 transition-all group"
      >
        <span>Get Your Website</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingCTA;
