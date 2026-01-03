
import React from 'react';
import { ChevronRight, Globe, Zap, Shield, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-cyan-400 font-bold text-sm mb-8 border border-slate-800 shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          WebCore: Your Digital Launchpad
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[0.95]">
          Peace of mind<br />
          <span className="gradient-text">Starts online.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          If your business isn't online, it doesn't exist. WebCore delivers total <span className="text-slate-900 font-bold underline decoration-cyan-400 underline-offset-4">peace of mind online</span> by building and managing your entire digital footprint.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#contact" className="w-full sm:w-auto gradient-bg text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-cyan-200">
            Get Your Website
            <ChevronRight className="w-6 h-6" />
          </a>
          <a href="#services" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:border-slate-200 transition-all">
            See Our Work
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50">
           <div className="flex items-center justify-center gap-2 font-bold text-slate-500 italic"><Zap className="w-5 h-5"/> Fast</div>
           <div className="flex items-center justify-center gap-2 font-bold text-slate-500 italic"><Shield className="w-5 h-5"/> Secure</div>
           <div className="flex items-center justify-center gap-2 font-bold text-slate-500 italic"><Globe className="w-5 h-5"/> Global</div>
           <div className="flex items-center justify-center gap-2 font-bold text-slate-500 italic"><Monitor className="w-5 h-5"/> Responsive</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
