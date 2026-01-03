
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            {/* FIXED: Relative path and flexible width to accommodate brand aspect ratio */}
            <img 
              src="assets/webcore-logo.png" 
              alt="WebCore Logo" 
              className="h-10 w-auto object-contain"
            />
            {/* UPDATED: Branding typography to match the high-fidelity image */}
            <span className="text-2xl font-black text-slate-900 tracking-tighter">WebCore</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</a>
            <a href="#contact" className="gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-200">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
