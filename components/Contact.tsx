import React, { useState, useEffect } from 'react';
import { Send, Mail, MessageSquare, CheckCircle2, ChevronDown, X } from 'lucide-react';

interface ContactProps {
  isModal?: boolean;
  initialPlan?: string;
  onClose?: () => void;
}

const Contact: React.FC<ContactProps> = ({ isModal = false, initialPlan, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState('');
  
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isModal) {
      setSubmitted(false);
      setPhone('');
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    }
  }, [isModal]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '').substring(0, 10);
    const length = numericValue.length;

    let formattedValue = '';
    if (length > 0) {
      formattedValue += '(' + numericValue.substring(0, 3);
      if (length > 3) {
        formattedValue += ') ' + numericValue.substring(3, 6);
        if (length > 6) {
          formattedValue += '-' + numericValue.substring(6, 10);
        }
      }
    }
    setPhone(formattedValue);
  };

  const startCloseSequence = () => {
    if (!isModal) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setPhone('');
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error. If you are running this locally, the form won't send until you deploy to Netlify!");
        setIsSubmitting(false);
      });
  };

  const modalAnimationClasses = isModal 
    ? `transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible && !isClosing 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-32 scale-90'
      }`
    : 'animate-in fade-in zoom-in duration-1000';

  const content = (
    <div className={`bg-slate-950 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row border border-slate-800 relative ${isModal ? 'max-w-6xl w-full pointer-events-auto' : ''} ${modalAnimationClasses}`}>
      
      {isModal && (
        <button 
          onClick={startCloseSequence}
          className="absolute top-6 right-6 z-20 p-2 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all focus:outline-none"
          aria-label="Close form"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      <div className="p-8 lg:p-14 lg:w-5/12 text-white bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -mr-32 -mt-32"></div>
        
        <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
          Let's talk <br />
          <span className="text-cyan-400">Business.</span>
        </h2>
        <p className="text-slate-400 text-base mb-10 leading-relaxed font-medium">
          Every message goes straight to our team. We're ready to help you dominate your local market.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Direct Line</p>
              <p className="font-bold text-lg text-slate-200">webcore112@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Fast Response</p>
              <p className="font-bold text-lg text-slate-200">Within 12 Business Hours</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8 lg:p-12 lg:w-7/12 bg-white flex flex-col justify-center">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl shadow-cyan-100">
              <CheckCircle2 className="w-10 h-10 text-cyan-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">Request Received!</h3>
            <p className="text-slate-600 text-base max-w-sm mx-auto mb-8">
              Your message has been sent. Check your email for a confirmation soon.
            </p>
            {isModal ? (
              <button 
                onClick={startCloseSequence}
                className="px-8 py-3 rounded-xl gradient-bg text-white font-black shadow-xl hover:opacity-90 transition-all"
              >
                Close Preview
              </button>
            ) : (
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-500 hover:bg-slate-50 transition-all"
              >
                Send another request
              </button>
            )}
          </div>
        ) : (
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit} 
            className="space-y-4 md:space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">Your Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  required 
                  className="w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base placeholder:text-slate-300" 
                  placeholder="Jane Smith" 
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">Business Name</label>
                <input 
                  name="business"
                  type="text" 
                  required 
                  className="w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base placeholder:text-slate-300" 
                  placeholder="Smith's Hardware" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  required 
                  className="w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base placeholder:text-slate-300" 
                  placeholder="jane@smithshardware.com" 
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  required 
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base placeholder:text-slate-300" 
                  placeholder="(555) 000-0000" 
                />
              </div>
            </div>

            <div className="group relative">
              <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">
                {isModal ? "The plan you're interested in." : "What plan interested you?"}
              </label>
              <div className="relative">
                <select 
                  name="plan"
                  required
                  defaultValue={initialPlan || ""}
                  disabled={isModal && !!initialPlan}
                  className={`w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base appearance-none pr-10 ${isModal && !!initialPlan ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                >
                  <option value="" disabled>Select a plan...</option>
                  <option value="essential">Essential Plan — $59/mo</option>
                  <option value="growth">The Growth Plan — $69/mo</option>
                  <option value="not_sure">I'm not sure yet / Let's talk</option>
                </select>
                {!isModal && (
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                )}
                {isModal && initialPlan && <input type="hidden" name="plan" value={initialPlan} />}
              </div>
            </div>
            
            <div className="group">
              <label className="block text-[10px] font-black text-slate-900 mb-2 uppercase tracking-wider transition-colors group-focus-within:text-cyan-500">What can we help you achieve?</label>
              <textarea 
                name="message"
                rows={2} 
                required 
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-medium text-base placeholder:text-slate-300 resize-none" 
                placeholder="Tell us about your project goals..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full gradient-bg text-white font-black text-base md:text-lg py-4 px-6 md:px-8 rounded-xl shadow-2xl shadow-cyan-100 flex items-center justify-center gap-2 md:gap-3 transition-all group ${isSubmitting ? 'opacity-50 cursor-wait' : 'hover:opacity-95 hover:scale-[0.99] active:scale-95'}`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <span className="hidden md:inline">Take the next step to my website</span>
                  <span className="md:hidden">Take the next step</span>
                </>
              )}
              {!isSubmitting && <Send className="w-4 h-4 md:w-5 h-5 group-hover:rotate-12 transition-transform shrink-0" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className={`fixed inset-0 z-[300] bg-slate-950/60 backdrop-blur-md pointer-events-auto overflow-y-auto px-4 py-6 md:p-8 flex justify-center items-start md:items-center transition-opacity duration-[600ms] ${
          isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) startCloseSequence();
        }}
      >
        <div className="w-full max-w-6xl my-auto">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-10 md:py-16 bg-white relative overflow-hidden scroll-mt-2">
      <div className="max-w-7xl mx-auto px-4">
        {content}
      </div>
    </section>
  );
};

export default Contact;
