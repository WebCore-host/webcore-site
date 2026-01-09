
import React, { useState, useEffect, useRef } from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck, Rocket, Info } from 'lucide-react';

interface FeatureItem {
  name: string;
  desc: string;
  alwaysIncluded?: boolean;
}

const features: FeatureItem[] = [
  { 
    name: "Tailormade Website", 
    desc: "A website designed and developed specifically for your business goals, brand, and content, rather than using a generic template." 
  },
  { 
    name: "SSL Security Certificate Installation", 
    desc: "Adds encryption to your site so visitor data is secure and your website shows as “safe” in browsers." 
  },
  { 
    name: "Website Hosting", 
    desc: "The server space and infrastructure that stores your website files and makes your site accessible online 24/7." 
  },
  { 
    name: "Domain Name Setup & Management", 
    desc: "Connects your website to your chosen domain name and ensures it points correctly to your hosting." 
  },
  { 
    name: "Monthly Website Maintenance", 
    desc: "Ongoing updates, backups, and checks each month to keep your site secure and running smoothly." 
  },
  { 
    name: "Mobile-Friendly Development", 
    desc: "Ensures your website looks and works properly on phones, tablets, and all screen sizes." 
  },
  { 
    name: "Contact Form with Email Alerts", 
    desc: "Allows visitors to send messages through your site and notifies you instantly by email." 
  },
  { 
    name: "Favicon Setup", 
    desc: "Adds the small icon that appears in browser tabs and bookmarks for brand recognition." 
  },
  { 
    name: "Page Loading Animation", 
    desc: "Displays a visual indicator while your site loads to improve user experience and perceived speed." 
  },
  { 
    name: "Foundational SEO Setup", 
    desc: "Optimizes site structure, metadata, and indexing basics so search engines can properly rank your website." 
  },
  { 
    name: "Bi-Weekly Website Maintenance", 
    desc: "Site updates, security checks, and performance monitoring performed every two weeks." 
  },
  { 
    name: "Monthly Website Enhancement", 
    desc: "One planned improvement or feature update added to your site each month." 
  },
  { 
    name: "Email Signup Popup", 
    desc: "A popup that collects visitor emails for newsletters, promotions, or follow-ups." 
  },
  { 
    name: "Fast Response (<12 Hour response)", 
    desc: "Priority communication ensuring your queries are handled within a guaranteed 12-hour window for total peace of mind."
  },
  { 
    name: "Live Chat Feature", 
    desc: "Enables real-time messaging so visitors can instantly communicate with AI and/or a pre-made question tree." 
  },
  { 
    name: "Advanced SEO with Structured Data", 
    desc: "Uses schema markup to help search engines better understand your content and improve search visibility." 
  },
  { 
    name: "Google Analytics 4 Setup", 
    desc: "Installs and configures GA4 so you can track visitor behavior, traffic sources, and conversions." 
  },
  { 
    name: "Weekly Website Maintenance", 
    desc: "Frequent weekly updates and monitoring to maximize security, uptime, and performance." 
  },
  { 
    name: "Three Monthly Website Enhancements", 
    desc: "Up to three improvements or feature updates added to your site each month." 
  },
  { 
    name: "Custom API Integration (Single Service)", 
    desc: "Connects your website to one external tool or platform to automate data or functionality." 
  },
  { 
    name: "Priority Support (2-Hour Response)", 
    desc: "Provides fast-response technical support with a guaranteed reply within two hours." 
  },
  { 
    name: "Monthly Website Performance Report", 
    desc: "A summary of traffic, speed, and key metrics to track your site’s growth and health." 
  },
  { 
    name: "A/B Testing Configuration", 
    desc: "Sets up experiments to compare page versions and determine which performs better." 
  },
  { 
    name: "Social Media Connectivity", 
    desc: "Integrates social platforms into your site for sharing, linking, and brand consistency." 
  }
];

const tiers = [
  {
    name: "Essential",
    id: "essential",
    oldPrice: "209",
    price: "97",
    icon: <ShieldCheck className="w-6 h-6 text-slate-400" />,
    includedCount: 7,
    popular: false,
    cta: "Choose Essential"
  },
  {
    name: "Growth",
    id: "growth",
    oldPrice: "349",
    price: "197",
    icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
    includedCount: 15,
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Pro",
    id: "pro",
    oldPrice: "899",
    price: "497",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    includedCount: 24,
    popular: false,
    cta: "Go Pro"
  }
];

interface PricingProps {
  onPlanSelect?: (planId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const desktopTooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveFeatureId(null);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopTooltipRef.current && !desktopTooltipRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement;
        if (!target.closest('.info-trigger')) {
          setActiveFeatureId(null);
        }
      }
    };

    if (activeFeatureId !== null) {
      window.addEventListener('keydown', handleEsc);
      if (!isMobile) window.addEventListener('mousedown', handleClickOutside);
      if (isMobile) document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [activeFeatureId, isMobile]);

  const handleInfoClick = (tierIdx: number, fIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const id = `${tierIdx}-${fIdx}`;
    setActiveFeatureId(activeFeatureId === id ? null : id);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50/50 scroll-mt-2 overflow-hidden relative">
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
          
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-white font-black uppercase tracking-widest text-xs">DEPOSIT FOR SETUP: $500</span>
            </div>
            
            <div className="relative group animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
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
                    Yes, this includes the plan + the deposit!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, tierIdx) => (
            <div 
              key={tierIdx}
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
                  const isIncluded = feature.alwaysIncluded || fIdx < tier.includedCount;
                  const prevIncludedCount = tierIdx > 0 ? tiers[tierIdx - 1].includedCount : 0;
                  const isNewToThisTier = isIncluded && fIdx >= prevIncludedCount && !feature.alwaysIncluded;
                  const uniqueId = `${tierIdx}-${fIdx}`;

                  return (
                    <li key={fIdx} className={`flex items-start gap-3 text-xs font-bold leading-tight relative ${isIncluded ? 'text-slate-700' : 'text-slate-300'}`}>
                      {isIncluded ? (
                        (tierIdx > 0 && isNewToThisTier) ? (
                          <Check className="w-4 h-4 text-cyan-500 stroke-[4px] shrink-0 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                        ) : (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        )
                      ) : (
                        <X className="w-4 h-4 text-slate-200 shrink-0" />
                      )}
                      
                      <div className="flex items-center gap-1 group/item">
                        <span className={`${!isIncluded ? 'line-through opacity-50' : ''} ${isNewToThisTier && tierIdx > 0 ? 'text-slate-900 font-black' : ''} ${feature.alwaysIncluded ? 'text-cyan-700 font-black' : ''}`}>
                          {feature.name}
                        </span>
                        
                        {isIncluded && (
                          <div className="relative inline-block ml-1">
                            <button 
                              onClick={(e) => handleInfoClick(tierIdx, fIdx, e)}
                              className="info-trigger w-11 h-11 -m-3.5 flex items-center justify-center text-slate-400 hover:text-cyan-500 transition-colors focus:outline-none"
                              aria-label={`More info about ${feature.name}`}
                            >
                              <Info className={`w-3.5 h-3.5 ${activeFeatureId === uniqueId ? 'text-cyan-500' : ''}`} />
                            </button>

                            {!isMobile && activeFeatureId === uniqueId && (
                              <div 
                                ref={desktopTooltipRef}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 z-[200] animate-in fade-in zoom-in-95 duration-150"
                              >
                                <p className="text-slate-900 font-black mb-1 text-sm">{feature.name}</p>
                                <p className="text-slate-500 font-medium text-[11px] leading-relaxed italic">{feature.desc}</p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <button 
                onClick={() => onPlanSelect?.(tier.id)}
                className={`w-full py-5 rounded-2xl font-black text-center flex items-center justify-center transition-all ${
                  tier.popular 
                  ? 'gradient-bg text-white shadow-xl shadow-cyan-200 hover:opacity-90 active:scale-95' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 active:scale-95 border border-slate-200'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          All plans include premium support and our 30-day performance guarantee.
        </p>
      </div>

      {isMobile && activeFeatureId !== null && (() => {
        const [tIdx, fIdx] = activeFeatureId.split('-').map(Number);
        const feature = features[fIdx];
        return (
          <>
            <div 
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[250] animate-in fade-in duration-150"
              onClick={() => setActiveFeatureId(null)}
            />
            <div 
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[3rem] p-8 pb-12 z-[260] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-200 ease-out"
            >
              <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" onClick={() => setActiveFeatureId(null)}></div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{feature.name}</h4>
                <button 
                  onClick={() => setActiveFeatureId(null)}
                  className="p-2 bg-slate-50 rounded-full text-slate-400 active:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">{feature.desc}</p>
            </div>
          </>
        );
      })()}
    </section>
  );
};

export default Pricing;
