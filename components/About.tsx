
import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase mb-4">Our Mission</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Bridging the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">Tradition and Technology.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              At WebCore, we believe every business deserves a seat at the digital table. 
              Too many incredible local companies are invisible because they lack a modern 
              website. We started WebCore to fix that—one business at a time.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Results Driven</h4>
                  <p className="text-slate-500">We don't just build "pretty" sites. We build tools that get you more phone calls and more customers.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Personal Approach</h4>
                  <p className="text-slate-500">You aren't just a number. Every WebCore client works directly with a lead developer.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Metric Card */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-[3rem] rotate-3 opacity-10"></div>
            <div className="relative bg-slate-900 rounded-[3rem] p-10 lg:p-16 border border-slate-800 shadow-2xl">
              <div className="grid grid-cols-1 gap-12">
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">100%</div>
                  <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Custom Built Code</div>
                </div>
                <div className="h-px bg-slate-800"></div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">24h</div>
                  <div className="text-purple-400 font-bold uppercase tracking-widest text-sm">Response Guarantee</div>
                </div>
                <div className="h-px bg-slate-800"></div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Award className="w-12 h-12 text-amber-400" />
                  </div>
                  <div className="text-white font-bold text-xl uppercase tracking-tighter">Premium Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
