
import React, { useState, useEffect } from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface Tier {
  id: string;
  tierPrefix: string;
  name: string;
  oldPrice: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
  popular: boolean;
  cta: string;
  features: {
    included: boolean;
    label: React.ReactNode;
    subItems?: React.ReactNode[];
  }[];
}

const Pricing: React.FC<{ onPlanSelect?: (planId: string) => void }> = ({ onPlanSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tiers: Tier[] = [
    {
      id: "essential",
      tierPrefix: "Tier 1:",
      name: "Essential Plan",
      oldPrice: "159",
      price: "59",
      desc: "Best for new businesses needing a professional launch.",
      icon: <ShieldCheck className="w-6 h-6 text-slate-400" />,
      popular: false,
      cta: "Choose Essential",
      features: [
        { included: true, label: <span><strong>Tailormade 3-Page Website</strong> (Home, About, Contact)</span> },
        { included: true, label: <span><strong>Rapid 7-Day Launch</strong> (Get online in one week)</span> },
        { included: true, label: <span><strong>Mobile-Optimized Design</strong> (Looks great on phones too)</span> },
        { included: true, label: <span><strong>Custom Domain Setup & Management</strong></span> },
        { included: true, label: <span><strong>Premium Website Hosting Included</strong></span> },
        { included: true, label: <span><strong>SSL Security Certificate</strong> (The "Lock" icon for visitor trust)</span> },
        { included: true, label: <span><strong>Custom Favicon Set Up</strong> (Branded browser tab icon)</span> },
        { included: true, label: <span><strong>Standard Support</strong> (24-hour response time)</span> },
        { 
          included: true, 
          label: <strong>On-Demand Content Updates:</strong>,
          subItems: [
            <span><strong>1 Client-Requested Enhancements per month</strong> (Submit a request for text changes, image swaps, or new sections)</span>
          ]
        },
        { included: false, label: <span className="opacity-50">Advanced Lead Generation</span> },
        { included: false, label: <span className="opacity-50">Trust & Visibility Tools</span> }
      ]
    },
    {
      id: "growth",
      tierPrefix: "Tier 2:",
      name: "The Growth Plan",
      oldPrice: "209",
      price: "69",
      desc: "Best for established businesses looking to scale and automate.",
      icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
      popular: true,
      cta: "Get Started Now",
      features: [
        { included: true, label: <span><strong>Tailormade 6-Page Website</strong> (Home, About, Contact +3 of your choosing)</span> },
        { included: true, label: <span><strong>Priority 72-Hour Launch</strong> (Skip the queue)</span> },
        { included: true, label: <span><strong>Mobile-Optimized Design</strong> (Looks great on phones too)</span> },
        { included: true, label: <span><strong>Custom Domain Setup & Management</strong></span> },
        { included: true, label: <span><strong>Premium Website Hosting Included</strong></span> },
        { included: true, label: <span><strong>SSL Security Certificate</strong> (The "Lock" icon for visitor trust)</span> },
        { included: true, label: <span><strong>Custom Favicon Set Up</strong> (Branded browser tab icon)</span> },
        { included: true, label: <span><strong>VIP Priority Support</strong> (12-hour "Head of the Line" response time)</span> },
        { 
          included: true, 
          label: <strong>Advanced Lead Generation:</strong>,
          subItems: [
            "Custom Contact Forms with Instant Email Alerts",
            "Automated Appointment Scheduling Integration"
          ]
        },
        { 
          included: true, 
          label: <strong>Trust & Visibility Tools:</strong>,
          subItems: [
            "Google Maps Location Integration",
            "Social Media Profile Syncing",
            "Featured \"Positive Review\" Banner"
          ]
        },
        { 
          included: true, 
          label: <strong>On-Demand Content Updates:</strong>,
          subItems: [
            <span><strong>3 Client-Requested Enhancements per month</strong> (Submit a request for text changes, image swaps, or new sections)</span>
          ]
        }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50/50 scroll-mt-2 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase mb-4">Pricing</h2>
          <p className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Simple, Honest Plans.
          </p>
          
          <div className="flex flex-col items-center gap-6 mt-10">
            {/* Deposit Banner - NOW ON TOP */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-white font-black uppercase tracking-widest text-xs">DEPOSIT FOR SETUP: $500</span>
            </div>

            {/* Guarantee Section - NOW BELOW DEPOSIT */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center gap-4 bg-white px-8 py-5 rounded-2xl border border-cyan-100 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                   <ShieldCheck className="w-7 h-7 text-cyan-500" />
                </div>
                <div className="text-left">
                  <p className="text-slate-900 font-black uppercase tracking-[0.1em] text-base leading-tight">
                    30-Day Money Back Guarantee
                  </p>
                  <p className="text-cyan-600 font-black uppercase tracking-widest text-[10px] mt-1">
                    yes, this includes deposit and month one payment!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, tierIdx) => (
            <div 
              key={tierIdx}
              className={`relative bg-white rounded-[3rem] p-8 lg:p-12 transition-all duration-500 group border shadow-sm hover:shadow-2xl flex flex-col ${
                tier.popular 
                ? 'border-cyan-400 ring-4 ring-cyan-400/10 z-10 lg:-translate-y-4' 
                : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Most Popular
                </div>
              )}

              {/* Added min-h to ensure horizontal line and features line up across both cards */}
              <div className="flex justify-between items-start mb-6 lg:min-h-[180px]">
                <div>
                  <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    {tier.icon}
                  </div>
                  <h3 className="text-base font-black text-slate-400 uppercase tracking-widest mb-1">{tier.tierPrefix}</h3>
                  <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">{tier.name}</h4>
                  <p className="text-slate-500 text-sm font-medium italic leading-relaxed">{tier.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-slate-300 line-through font-bold text-xl mb-1">${tier.oldPrice}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900">${tier.price}</span>
                    <span className="text-slate-400 font-bold text-sm">/mo</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-8"></div>

              {/* Feature List */}
              <ul className="space-y-6 mb-12 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-200 shrink-0 mt-0.5" />
                      )}
                      <div className={`text-sm leading-tight ${feature.included ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                        {feature.label}
                      </div>
                    </div>
                    
                    {feature.included && feature.subItems && (
                      <ul className="ml-10 space-y-3 mt-1">
                        {feature.subItems.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2 shrink-0"></div>
                            <span className="leading-relaxed">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onPlanSelect?.(tier.id)}
                className={`w-full py-6 rounded-2xl font-black text-center flex items-center justify-center transition-all text-lg ${
                  tier.popular 
                  ? 'gradient-bg text-white shadow-2xl shadow-cyan-200 hover:opacity-90 active:scale-95' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 active:scale-95 border border-slate-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              All plans include premium infrastructure and our performance guarantee.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
