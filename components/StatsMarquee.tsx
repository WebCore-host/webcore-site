
import React from 'react';
import { TrendingUp, BarChart3, Globe2, Target, Users2 } from 'lucide-react';

const stats = [
  {
    value: "97%",
    label: "Customers say a website influences their purchasing decisions",
    source: "Source: BusinessDasher",
    icon: <Target className="w-5 h-5 text-cyan-500" />,
    tag: "PURCHASE POWER"
  },
  {
    value: "84%",
    label: "Consumers trust a business more if it has a professional website",
    source: "Source: BusinessDasher",
    icon: <Users2 className="w-5 h-5 text-purple-500" />,
    tag: "TRUST FACTOR"
  },
  {
    value: "76%",
    label: "Consumers search for a company’s website before visiting in person",
    source: "Source: Big Fish Local",
    icon: <Globe2 className="w-5 h-5 text-blue-500" />,
    tag: "LOCAL DISCOVERY"
  },
  {
    value: "81%",
    label: "Shoppers research online before making a purchase",
    source: "Source: Big Fish Local",
    icon: <BarChart3 className="w-5 h-5 text-emerald-500" />,
    tag: "MARKET RESEARCH"
  },
  {
    value: "50%+",
    label: "Potential revenue growth for small businesses with a website",
    source: "Source: BusinessDasher",
    icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
    tag: "REVENUE GROWTH"
  }
];

const StatCard: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => (
  <div 
    key={index} 
    className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-cyan-100 transition-all duration-500 group w-full md:min-w-[420px]"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
        {stat.icon}
      </div>
      <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black tracking-widest text-slate-400 uppercase">
        {stat.tag}
      </div>
    </div>

    <div className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tighter">
      {stat.value}
    </div>
    
    <div className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-4 whitespace-normal">
      {stat.label}
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
      <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
        {stat.source}
      </div>
    </div>
  </div>
);

const StatsMarquee: React.FC = () => {
  // Triple the stats for the infinite loop on desktop
  const displayStats = [...stats, ...stats, ...stats];

  return (
    <section id="stats" className="py-16 md:py-24 bg-white border-y border-slate-100 overflow-hidden relative scroll-mt-20">
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee-infinite {
            animation: marquee-left 50s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-100/30 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100/30 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* SECTION HEADER - Visible on all devices */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <h4 className="text-[10px] md:text-xs font-black tracking-[0.3em] text-cyan-500 uppercase mb-4">The Impact</h4>
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
          Why your business <br className="md:hidden" />
          <span className="gradient-text">needs a website.</span>
        </h2>
      </div>

      {/* MOBILE VIEW: Vertical Column */}
      <div className="md:hidden px-4 flex flex-col gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>

      {/* DESKTOP VIEW: Infinite Marquee */}
      <div className="hidden md:flex relative">
        <div className="flex animate-marquee-infinite whitespace-nowrap gap-6 px-6">
          {displayStats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
