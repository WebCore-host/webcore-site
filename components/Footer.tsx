
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* FIXED: Relative path and flexible width */}
              <img 
                src="assets/webcore-logo.png" 
                alt="WebCore Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-black tracking-tighter">WebCore</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              We empower businesses without a digital footprint by building high-performance 
              web solutions that drive growth and provide total peace of mind online.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About WebCore</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Schedule a Call</a></li>
            </ul>
          </div>

          {/* Social/Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors">
                Email: webcore112@gmail.com
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors">
                LinkedIn
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors">
                Instagram
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} WebCore Digital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
