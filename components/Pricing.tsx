
import React from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck, Rocket } from 'lucide-react';

const features = [
  "Tailormade Website",
  "SSL Certificate Setup (Safety Certification)",
  "Web Hosting",
  "Domain Name Setup & Configuration",
  "Monthly Website Maintenance",
  "Mobile-Responsive Development",
  "Contact Form w/ Email Notifications",
  "Favicon Implementation",
  "Loading State Animation",
  "Basic SEO Setup",
  "Bi-Weekly Website Maintenance",
  "One Website Improvement a Month",
  "Email Capture Popup",
  "Live Chat Widget",
  "Advanced SEO with Schema Markup",
  "Google Analytics 4 Integration & Setup",
  "Weekly Website Maintenance",
  "Three Website Improvements per Month",
  "Custom API Integration (1 service)",
  "Priority Support (2-hour response time)",
  "Monthly Performance Report",
  "A/B Testing Setup",
  "Social Media Integration"
];

const tiers = [
  {
    name: "Essential",
    oldPrice: "209",
    price: "97",
    icon: <ShieldCheck className="w-6 h-6 text-slate-400" />,
    includedCount: 7,
    popular: false,
    cta: "Choose Essential"
  },
  {
    name: "Growth",
    oldPrice: "349",
    price: "197",
    icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
    includedCount: 14,
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Pro",
    oldPrice: "899",
    price: "497",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    includedCount: 23,
    popular: false,
    cta: "Go Pro"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50/50 scroll-mt-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase mb-4">Pricing</h2>
          <p className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Transparent Pricing
          </p>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto mb-10">
            No hidden fees. No surprises. Just honest pricing to get your business the results it deserves.
          </p>
          
          {/* Setup Fee Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-white font-black uppercase tracking-widest text-xs">One-time setup: $500</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative bg-white rounded-[3rem] p-8 lg:p-10 transition-all duration-500 group border shadow-sm hover:shadow-2xl ${
                tier.popular 
                ? 'border-cyan-400 ring-4 ring-cyan-400/10 scale-105 z-10 lg:-translate-y-4' 
                : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{tier.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-slate-300 line-through font-bold text-lg mb-1">${tier.oldPrice}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${tier.price}</span>
                    <span className="text-slate-400 font-bold text-sm">/month</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 mb-8"></div>

              {/* Feature List */}
              <ul className="space-y-4 mb-10">
                {features.map((feature, fIdx) => {
                  const isIncluded = fIdx < tier.includedCount;
                  return (
                    <li key={fIdx} className={`flex items-start gap-3 text-xs font-bold leading-tight ${isIncluded ? 'text-slate-700' : 'text-slate-300'}`}>
                      {isIncluded ? (
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-slate-200 shrink-0" />
                      )}
                      <span className={!isIncluded ? 'line-through opacity-50' : ''}>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-5 rounded-2xl font-black text-center flex items-center justify-center transition-all ${
                  tier.popular 
                  ? 'gradient-bg text-white shadow-xl shadow-cyan-200 hover:opacity-90 active:scale-95' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 active:scale-95 border border-slate-200'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <p className="mt-16 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          All plans include premium support and our 30-day performance guarantee.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
