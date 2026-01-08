
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab?: 'home' | 'about' | 'pricing' | 'faq' | 'testimonials';
  setActiveTab?: (tab: 'home' | 'about' | 'pricing' | 'faq' | 'testimonials') => void;
  isMobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (e: React.MouseEvent, tab: 'home' | 'about' | 'pricing' | 'faq' | 'testimonials', href: string) => {
    if (setActiveTab) {
      e.preventDefault();
      setActiveTab(tab);
      closeMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      closeMenu();
    }
  };

  // Define navigation items based on screen type
  const navItems = isMobile 
    ? [
        { label: 'Home', tab: 'home' as const, href: '#', delay: 'delay-[100ms]' },
        { label: 'About', tab: 'about' as const, href: '#about', delay: 'delay-[150ms]' },
        { label: 'Pricing', tab: 'pricing' as const, href: '#pricing', delay: 'delay-[200ms]' },
      ]
    : [
        { label: 'Home', tab: 'home' as const, href: '#', delay: 'delay-[100ms]' },
        { label: 'FAQ', tab: 'faq' as const, href: '#faq', delay: 'delay-[150ms]' },
        { label: 'Testimonials', tab: 'testimonials' as const, href: '#testimonials', delay: 'delay-[200ms]' },
      ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] py-2' 
            : 'bg-white/80 backdrop-blur-xl py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Brand Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 group transition-all" 
              onClick={(e) => handleNavClick(e, 'home', '#')}
            >
              <Logo className="h-9 md:h-10" />
              <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter group-hover:text-cyan-600 transition-colors ml-1">WebCore</span>
            </a>
            
            <div className="flex items-center gap-4 md:gap-8">
              {/* Desktop Secondary Links - Only visible on Home page */}
              {activeTab === 'home' && (
                <div className="hidden md:flex items-center gap-10 mr-4">
                  <a href="#stats" className="text-slate-600 hover:text-slate-900 font-bold text-[13px] uppercase tracking-wider transition-colors">Impact</a>
                  <a href="#services" className="text-slate-600 hover:text-slate-900 font-bold text-[13px] uppercase tracking-wider transition-colors">Services</a>
                  <a href="#about" className="text-slate-600 hover:text-slate-900 font-bold text-[13px] uppercase tracking-wider transition-colors">About</a>
                  <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-bold text-[13px] uppercase tracking-wider transition-colors">Pricing</a>
                </div>
              )}

              {/* Main CTA - Always Visible */}
              <a href="#contact" className="gradient-bg text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-cyan-200 transition-all active:scale-95">
                Take the next step
              </a>

              {/* Universal Menu Toggle - Always Visible */}
              <button 
                onClick={toggleMenu}
                className="relative z-[160] p-1 text-slate-900 transition-transform active:scale-90 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <div className="relative w-7 h-7 md:w-8 md:h-8">
                   <div className={`absolute inset-0 duration-500 transform transition-all ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                      <Menu className="w-full h-full" />
                   </div>
                   <div className={`absolute inset-0 duration-500 transform transition-all ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                      <X className="w-full h-full" />
                   </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dropdown Overlay */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-6 pt-10 pb-16 flex flex-col items-start max-w-7xl mx-auto gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.tab, item.href)}
                className={`text-4xl md:text-6xl font-black transition-all duration-500 transform flex items-center gap-5 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${item.delay} ${
                  activeTab === item.tab ? 'text-cyan-600 md:translate-x-4' : 'text-slate-900 hover:text-cyan-600'
                }`}
              >
                {activeTab === item.tab && <div className="w-2.5 h-10 md:h-14 bg-cyan-600 rounded-full" />}
                {item.label}
              </a>
            ))}
            <div className={`mt-6 w-full max-w-sm transition-all duration-500 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } delay-[250ms]`}>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="gradient-bg text-white w-full py-6 rounded-2xl font-black text-xl md:text-2xl text-center flex items-center justify-center shadow-2xl shadow-cyan-200 active:scale-95 transition-all"
              >
                Let's talk business
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 z-[140] bg-slate-950/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
