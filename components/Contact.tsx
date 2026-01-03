
import React, { useState } from 'react';
import { Send, Calendar, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-950 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row border border-slate-800">
          
          {/* INFO PANEL */}
          <div className="p-10 lg:p-20 lg:w-5/12 text-white bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              Let's talk <br />
              <span className="text-cyan-400">Business.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
              We don't just build sites; we build growth engines. Tell us about your company and we'll reach out to schedule your free strategy session.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <Mail className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="font-bold text-xl text-slate-200">webcore112@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                  <MessageSquare className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Fast Response</p>
                  <p className="font-bold text-xl text-slate-200">Within 12 Business Hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FORM PANEL */}
          <div className="p-10 lg:p-20 lg:w-7/12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl shadow-cyan-100">
                  <CheckCircle2 className="w-12 h-12 text-cyan-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
                <p className="text-slate-600 text-lg max-w-sm mx-auto mb-10">
                  A WebCore strategist will email you shortly to find a time that works for your schedule.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-500 hover:bg-slate-50 transition-all"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">Your Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-lg placeholder:text-slate-300" 
                      placeholder="Jane Smith" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">Business Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-lg placeholder:text-slate-300" 
                      placeholder="Smith's Hardware" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-lg placeholder:text-slate-300" 
                    placeholder="jane@smithshardware.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-wider">What can we help you achieve?</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-lg placeholder:text-slate-300 resize-none" 
                    placeholder="We've been in business for 20 years and need a modern website to reach new customers..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full gradient-bg text-white font-black text-xl py-6 rounded-2xl shadow-2xl shadow-cyan-100 flex items-center justify-center gap-3 hover:opacity-95 hover:scale-[0.99] transition-all"
                >
                  Request a Call
                  <Calendar className="w-6 h-6" />
                </button>
                <p className="text-center text-sm font-bold text-slate-300">
                  Privacy guaranteed. We respect your inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
