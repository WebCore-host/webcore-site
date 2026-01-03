import React, { useState } from 'react';
import { Send, Calendar, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where the magic happens. 
    // For now, it just shows a "Thank You" message.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* LEFT SIDE: Your Information */}
          <div className="p-8 lg:p-16 lg:w-1/2 text-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to build your <br />
              <span className="text-cyan-400">digital future?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Schedule a quick 15-minute introductory call to discuss your business goals. 
              We'll show you how WebCore can put your business on the map.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email Us</p>
                  {/* CHANGE THE EMAIL BELOW TO YOUR OWN LATER */}
                  <p className="font-semibold text-lg">hello@webcore.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Quick Chat</p>
                  <p className="font-semibold text-lg">Available Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE: The Form */}
          <div className="p-8 lg:p-16 lg:w-1/2 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. A WebCore strategist will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-cyan-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all bg-slate-50" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all bg-slate-50" 
                      placeholder="jane@company.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Business Goals</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all bg-slate-50" 
                    placeholder="Tell us a little bit about what you need..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full gradient-bg text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-100 flex items-center justify-center gap-2 hover:opacity-95 hover:scale-[0.99] transition-all"
                >
                  Schedule My Call
                  <Calendar className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-slate-400">
                  By clicking, you agree to our privacy policy. We'll never spam you.
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
