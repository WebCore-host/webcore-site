import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            {/* This is the SVG code for your WebCore logo */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#22d3ee' }} />
                    <stop offset="100%" style={{ stopColor: '#9333ea' }} />
                  </linearGradient>
                </defs>
                <path
                  d="M10,30 L30,70 L50,40 L70,70 L90,30"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="30" r="6" fill="url(#logoGradient)" />
                <circle cx="30" cy="70" r="6" fill="url(#logoGradient)" />
                <circle cx="50" cy="40" r="6" fill="url(#logoGradient)" />
                <circle cx="70" cy="70" r="6" fill="url(#logoGradient)" />
                <circle cx="90" cy="30" r="6" fill="url(#logoGradient)" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">WebCore</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</a>
            <a href="#contact" className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
