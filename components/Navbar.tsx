
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
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

          {/* Mobile Menu Toggle Button (Visible only on Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 animate-in spin-in duration-300" />
              ) : (
                <Menu className="w-8 h-8 animate-in fade-in duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-8">
          <a 
            href="#stats" 
            onClick={closeMenu}
            className="text-2xl font-black text-slate-900 hover:text-cyan-600 transition-colors border-b border-slate-50 pb-2"
          >
            Impact
          </a>
          <a 
            href="#services" 
            onClick={closeMenu}
            className="text-2xl font-black text-slate-900 hover:text-cyan-600 transition-colors border-b border-slate-50 pb-2"
          >
            Services
          </a>
          <a 
            href="#about" 
            onClick={closeMenu}
            className="text-2xl font-black text-slate-900 hover:text-cyan-600 transition-colors border-b border-slate-50 pb-2"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="gradient-bg text-white px-8 py-4 rounded-2xl font-black text-xl text-center shadow-xl shadow-cyan-200 active:scale-95 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
