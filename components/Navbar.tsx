
import React, { useState } from 'react';
import { HelpCircle, XCircle, Zap, Activity } from 'lucide-react';

/** 
 * 🛠️ BEGINNER TIP: HOW TO FIX YOUR LOGO
 * 1. Rename your logo file to 'logo.png'
 * 2. Put it in the same folder as your 'index.html'
 * 3. Change the path below to "./logo.png"
 * 
 * Currently, it uses a Google Drive link, which often fails on 'localhost' 
 * due to browser security (CORS) or if the file sharing is private.
 */
const LOGO_SETTINGS = {
  // If you have a local file, change this to "./logo.png"
  path: "https://lh3.googleusercontent.com/d/1BTAXEdDxEb5bHzqS3tYhvgPE_YZQmUFZ", 
  altText: "WebCore Logo"
};

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  const [hasError, setHasError] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  
  return (
    <div className="relative flex items-center gap-2">
      <div className={`relative flex items-center ${className} min-w-[40px]`}>
        {/* The "Ghost" Fallback - This shows if the logo fails to load */}
        {hasError && (
          <div className="flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl p-2 shadow-inner animate-pulse">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        <img 
          src={LOGO_SETTINGS.path} 
          alt={LOGO_SETTINGS.altText} 
          className={`relative z-10 h-full w-auto object-contain transition-all duration-500 ${hasError ? 'opacity-0 scale-90 absolute' : 'opacity-100 scale-100'}`}
          onLoad={() => setHasError(false)}
          onError={() => {
            console.error("Logo failed to load. Check sharing permissions or use a local file.");
            setHasError(true);
          }}
        />
      </div>

      {hasError && (
        <button 
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          className="bg-rose-50 text-rose-400 p-1.5 rounded-full hover:bg-rose-100 hover:text-rose-600 transition-all border border-rose-100"
          title="Why is my logo missing?"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      )}

      {showDiagnostics && (
        <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-[100] animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-start mb-4">
            <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Activity className="w-4 h-4 text-rose-500" />
              Logo Connection Diagnostic
            </h5>
            <button onClick={() => setShowDiagnostics(false)}><XCircle className="w-4 h-4 text-slate-300 hover:text-rose-400" /></button>
          </div>
          
          <div className="space-y-4">
            <p className="text-[12px] text-slate-600 leading-relaxed">
              It looks like your browser is blocking the Google Drive image. This is common on <code className="bg-slate-100 px-1 rounded text-rose-500">localhost</code>.
            </p>

            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-[11px] text-indigo-900">
              <strong>The Fix:</strong> Put your logo file in your project folder and change the code to use <code className="font-bold underline">./your-logo.png</code> instead of a web link.
            </div>
          </div>
          
          <button 
            onClick={() => window.location.reload()}
            className="mt-5 w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Try Refreshing
            <Zap className="w-3 h-3 text-cyan-400" />
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Logo className="h-10" />
            <span className="text-2xl font-black text-slate-900 tracking-tighter ml-2">WebCore</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#stats" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Statistics</a>
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
