import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* The "Status" badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 font-semibold text-sm mb-8 border border-cyan-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
          </span>
          Helping Businesses Go Digital
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
          Professional Websites for <br />
          <span className="gradient-text">Future-Ready</span> Businesses
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Does your company lack an online presence? We specialize in creating high-performance, 
          beautiful websites for local businesses and startups.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-cyan-100">
            Get Started Today
            <ChevronRight className="w-5 h-5" />
          </a>
          <a href="#services" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            See Our Services
          </a>
        </div>

        {/* This is a placeholder image representing your work */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-32 bottom-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
            alt="Web Design Preview" 
            className="rounded-2xl shadow-2xl border border-slate-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
