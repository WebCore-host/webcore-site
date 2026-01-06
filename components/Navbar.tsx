import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
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

  // Close menu on resize if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 group transition-all" onClick={closeMenu}>
              <Logo className="h-10" />
              <span className="text-2xl font-black text-slate-900 tracking-tighter group-hover:text-cyan-600 transition-colors ml-1">WebCore</span>
            </a>
            
            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#stats" className="text-slate-600 hover:text-slate-900 font-bold text-sm transition-colors">Impact</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 font-bold text-sm transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-bold text-sm transition-colors">About</a>
              <a href="#contact" className="gradient-bg text-white px-7 py-2.5 rounded-full font-black text-sm hover:shadow-xl hover:shadow-cyan-200 transition-all">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="relative z-[70] p-2 text-slate-900 transition-transform active:scale-90 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <div className="relative w-8 h-8">
                   <div className={`absolute inset-0 duration-500 transform transition-all ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                      <Menu className="w-8 h-8" />
                   </div>
                   <div className={`absolute inset-0 duration-500 transform transition-all ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                      <X className="w-8 h-8" />
                   </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-6 pt-8 pb-8 flex flex-col gap-4">
            {[
              { label: 'Impact', href: '#stats', delay: 'delay-[100ms]' },
              { label: 'Services', href: '#services', delay: 'delay-[200ms]' },
              { label: 'About', href: '#about', delay: 'delay-[300ms]' },
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={closeMenu}
                className={`text-3xl font-black text-slate-900 hover:text-cyan-600 transition-all duration-500 transform ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${item.delay}`}
              >
                {item.label}
              </a>
            ))}
            <div className={`mt-4 transition-all duration-500 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } delay-[400ms]`}>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="gradient-bg text-white w-full py-5 rounded-2xl font-black text-xl text-center flex items-center justify-center shadow-xl shadow-cyan-200 active:scale-95 transition-all"
              >
                Contact Us
              </a>
            </div>
            
            {/* Decorative element inside menu */}
            <div className={`mt-4 pt-4 border-t border-slate-50 flex justify-center transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'} delay-[500ms]`}>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">WebCore Digital</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[55] bg-slate-950/20 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Navbar;
