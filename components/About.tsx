
import React from 'react';
import { Target, Users, Award, ShieldCheck, Zap, Sparkles, TrendingUp, CheckCircle, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white overflow-hidden scroll-mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Left Side: Storytelling */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 font-black text-xs uppercase tracking-widest mb-6 border border-cyan-100">
              <Sparkles className="w-3.5 h-3.5" />
              The WebCore Story
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Bridging the gap between <br />
              <span className="gradient-text">Tradition and Technology.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              At WebCore, we believe every business deserves a seat at the digital table. 
              Too many incredible local companies are invisible because they lack a modern 
              website. We started WebCore to fix that—one business at a time.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Results Driven</h4>
                <p className="text-slate-500 text-sm leading-relaxed">We don't just build "pretty" sites. We build high-performance business engines that drive calls.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Personal Approach</h4>
                <p className="text-slate-500 text-sm leading-relaxed">You aren't just a number. Every WebCore client works directly with our local lead strategy team.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Proof */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-[3.5rem] rotate-3 opacity-10"></div>
            <div className="relative bg-slate-900 rounded-[3.5rem] p-10 lg:p-14 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Animated Background Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-6xl font-black text-white mb-2 leading-none">100%</div>
                    <div className="text-cyan-400 font-black uppercase tracking-widest text-[10px]">Tailor Made</div>
                  </div>
                  <ShieldCheck className="w-12 h-12 text-cyan-500/50" />
                </div>
                
                <div className="h-px bg-slate-800"></div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-6xl font-black text-white mb-2 leading-none">24h</div>
                    <div className="text-purple-400 font-black uppercase tracking-widest text-[10px]">Communication SLA</div>
                  </div>
                  <Zap className="w-12 h-12 text-purple-500/50" />
                </div>
                
                <div className="h-px bg-slate-800"></div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-black text-xl italic tracking-tight uppercase">Risk Free</h5>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">30-Day Money Back Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The "Why WebCore" Grid */}
        <div className="bg-slate-50 rounded-[4rem] p-8 lg:p-16">
          <div className="text-center mb-12">
             <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">Our Core Philosophy</h3>
             <p className="text-slate-600 max-w-2xl mx-auto font-medium">We built WebCore on three unshakeable pillars that ensure your project is a success before we even write the first line of code.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Radical Transparency", 
                desc: "No technical jargon or hidden fees. We explain every decision and every cost so you are always in the driver's seat.", 
                icon: <CheckCircle className="w-6 h-6 text-emerald-500" /> 
              },
              { 
                title: "Hyper Velocity", 
                desc: "Speed is a feature. We deliver professional prototypes in days, not months, keeping your business moving forward.", 
                icon: <TrendingUp className="w-6 h-6 text-cyan-500" /> 
              },
              { 
                title: "Legacy Craftsmanship", 
                desc: "We don't use clunky templates. Every pixel is hand-placed to ensure your site is as unique as your business.", 
                icon: <Award className="w-6 h-6 text-purple-500" /> 
              }
            ].map((phil, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-6">{phil.icon}</div>
                <h5 className="text-xl font-black text-slate-900 mb-4">{phil.title}</h5>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">{phil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
