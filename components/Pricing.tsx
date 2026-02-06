import React, { useState, useEffect } from 'react';
import { Check, X, Shield, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface Tier {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  popular: boolean;
  cta: string;
  icon: React.ReactNode;
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
      name: "ESSENTIAL PLAN",
      description: "Best for new businesses needing a professional launch.",
      price: "59",
      originalPrice: "159",
      popular: false,
      cta: "Choose Essential",
      icon: <Shield className="w-6 h-6 text-slate-400" />,
      features: [
        { included: true, label: <span><strong>Tailormade 3-Page Website</strong> (Home, About, Contact)</span> },
        { included: true, label: <span><strong>Rapid 7-Day Launch</strong> (Get online in one week)</span> },
        { included: true, label: <span><strong>Mobile-Optimized Design</strong> (Looks great on phones too)</span> },
        { included: true, label: <span><strong>Custom Domain Setup & Management</strong></span> },
        { included: true, label: <span><strong>Premium Website Hosting Included</strong></span> },
        { included: true, label: <span><strong>SSL Security Certificate</strong> (The "Lock" icon for visitor trust)</span> },
        { included: true, label: <span><strong>Custom Favicon Set Up</strong> (Branded browser tab icon)</span> },
        { included: true, label: <span><strong>Standard Support</strong> (48-hour response time)</span> },
        { 
          included: true, 
          label: <strong>On-Demand Content Updates:</strong>,
          subItems: [
            <span><strong>1 Client-Requested Enhancements per month</strong> (Submit a request for text changes, image swaps, or new sections)</span>
          ]
        }
      ]
    },
    {
      id: "growth",
      name: "GROWTH PLAN",
      description: "Perfect for scaling businesses ready to dominate.",
      price: "69",
      originalPrice: "199",
      popular: true,
      cta: "Scale My Business",
      icon: <Zap className="w-6 h-6 text-cyan-500" />,
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
            <strong>Custom Contact Forms with Instant Email Alerts</strong>,
            <strong>Automated Appointment Scheduling Integration</strong>
          ]
        },
        { 
          included: true, 
          label: <strong>Trust & Visibility Tools:</strong>,
          subItems: [
            <strong>Google Maps Location Integration</strong>,
            <strong>Social Media Profile Syncing</strong>,
            <strong>Featured "Positive Review" Banner</strong>
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
    <section id="pricing" className="py-24 bg-white scroll-mt-2 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.4em] text-cyan-600 uppercase mb-4">Investment</h2>
          <p className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">
            Plans.
          </p>
          
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-white font-black uppercase tracking-widest text-[10px]">DEPOSIT FOR SETUP: $500</span>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                <p className="text-slate-900 font-black uppercase tracking-widest text-[10px]">
                  30-Day Money Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, tierIdx) => (
            <div 
              key={tierIdx}
              className={`relative bg-white rounded-[4rem] p-10 lg:p-14 transition-all duration-500 group border flex flex-col ${
                tier.popular 
                ? 'border-cyan-400 shadow-[0_32px_80px_-20px_rgba(34,211,238,0.15)] ring-1 ring-cyan-100' 
                : 'border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                  Most Requested
                </div>
              )}

              {/* Card Header matching Screenshot */}
              <div className="flex justify-between items-start mb-2">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                  {tier.icon}
                </div>
                <div className="text-right">
                  <span className="text-slate-300 text-2xl font-black line-through block mb-1">
                    ${tier.originalPrice}
                  </span>
                  <div className="flex items-baseline justify-end gap-1 leading-none">
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">${tier.price}</span>
                    <span className="text-slate-400 font-black text-sm uppercase tracking-widest">/mo</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-8">
                <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">
                  {tier.name}
                </h4>
                <p className="text-slate-400 italic font-medium text-lg leading-snug max-w-[260px]">
                  {tier.description}
                </p>
              </div>

              <div className="h-px bg-slate-100 w-full mb-10"></div>

              {/* Feature List */}
              <ul className="space-y-5 mb-14 flex-1 text-[13px]">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex flex-col gap-2">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-emerald-50' : 'bg-slate-50'}`}>
                        {feature.included ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-slate-300 stroke-[3]" />
                        )}
                      </div>
                      <div className={`${feature.included ? 'text-slate-900' : 'text-slate-300'}`}>
                        {feature.label}
                      </div>
                    </div>
                    
                    {feature.included && feature.subItems && (
                      <ul className="ml-9 space-y-2 mt-1">
                        {feature.subItems.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-[11px] text-slate-500 uppercase tracking-wider">
                            <span className="text-cyan-400 font-black">•</span>
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
                className={`group/btn w-full py-6 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all text-sm uppercase tracking-widest ${
                  tier.popular 
                  ? 'gradient-bg text-white shadow-xl shadow-cyan-200/50 hover:scale-[1.02] active:scale-95' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] opacity-50">
              Infrastructure monitored 24/7 for maximum uptime.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
