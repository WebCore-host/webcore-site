
import React, { useState } from 'react';

/** 
 * 🛠️ SYNCED LINK: 
 * If you use a local file for the Navbar, use the same one here!
 */
const LOGO_PATH = "https://lh3.googleusercontent.com/d/1BTAXEdDxEb5bHzqS3tYhvgPE_YZQmUFZ";

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex items-center ${className} min-w-[40px]`}>
      {hasError && (
        <div className="flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-2 opacity-50">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <img 
        src={LOGO_PATH} 
        alt="WebCore Logo" 
        className={`relative z-10 h-full w-auto object-contain transition-opacity duration-300 ${hasError ? 'opacity-0 absolute' : 'opacity-100'}`}
        onError={() => setHasError(true)}
        onLoad={() => setHasError(false)}
      />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit">
              <Logo className="h-10" />
              <span className="text-2xl font-black tracking-tighter">WebCore</span>
            </a>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              We empower businesses without a digital footprint by building high-performance 
              web solutions that drive growth and provide total peace of mind online.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#stats" className="hover:text-cyan-400 transition-colors">Statistics</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Schedule a Call</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-2 group cursor-default transition-colors">
                <span className="text-slate-500">Email:</span>
                <span className="group-hover:text-cyan-400 transition-colors">webcore112@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 group cursor-default transition-colors">
                <span className="text-slate-500">Response:</span>
                <span className="group-hover:text-purple-400 transition-colors">Under 12 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} WebCore Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
