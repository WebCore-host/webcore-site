
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit">
              <Logo className="h-10 w-auto" />
              <span className="text-2xl font-black tracking-tighter ml-1">WebCore</span>
            </a>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              We empower local businesses with high-performance 
              web solutions that drive growth and provide total peace of mind online.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-300 font-bold text-sm">
              <li><a href="#stats" className="hover:text-cyan-400 transition-colors">The Impact</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Company Story</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Support</h4>
            <ul className="space-y-4 text-slate-300 font-bold text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest">Email</span>
                <span className="text-cyan-400 font-black">webcore112@gmail.com</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest">Availability</span>
                <span className="font-bold">Response in Under 12 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} WebCore Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
