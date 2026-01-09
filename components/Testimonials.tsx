
import React from 'react';
import { Quote, Star, Fan, Zap, Hammer, Leaf, Droplets, Layout, Home, Paintbrush, TrendingUp, CheckCircle2 } from 'lucide-react';

interface TestimonialItem {
  name: string;
  industry: string;
  quote: string;
  icon: React.ReactNode;
  highlight?: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Marcus",
    industry: "HVAC",
    quote: "We used to just wait for word-of-mouth. Now the phone actually rings. Our monthly calls doubled in the first month—it's been the best move for our business.",
    icon: <Fan className="w-5 h-5 text-cyan-500" />,
    highlight: "Calls doubled in 1st month"
  },
  {
    name: "Sarah",
    industry: "Electrical",
    quote: "New clients always tell us they picked us because our site looked so much more professional than the other guys. It gave us the credibility we needed.",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    highlight: "Professional Credibility"
  },
  {
    name: "David",
    industry: "Construction",
    quote: "I thought a new site would take months. WebCore had a demo ready in days and the whole thing live in weeks. These guys move fast.",
    icon: <Hammer className="w-5 h-5 text-slate-600" />,
    highlight: "Live in weeks, not months"
  },
  {
    name: "Leo",
    industry: "Landscaping",
    quote: "I'm not a tech person. Having the team handle all the hosting and updates means I can just focus on my jobs without worrying about the website.",
    icon: <Leaf className="w-5 h-5 text-emerald-500" />,
    highlight: "Zero-worry management"
  },
  {
    name: "Jim",
    industry: "Plumbing",
    quote: "We were invisible on Google before. Now we actually show up when people search for a plumber nearby. It’s made a huge difference in our leads.",
    icon: <Droplets className="w-5 h-5 text-blue-500" />,
    highlight: "Dominating local search"
  },
  {
    name: "Elena",
    industry: "Cabinetry",
    quote: "Our old site was a mess on phones. The new one looks great on every device and finally shows off the quality of our work properly.",
    icon: <Layout className="w-5 h-5 text-purple-500" />,
    highlight: "Perfect mobile display"
  },
  {
    name: "Robert",
    industry: "Roofing",
    quote: "No hidden fees or tech talk I didn't understand. They were honest about the costs and always picked up the phone when I had a question.",
    icon: <Home className="w-5 h-5 text-rose-500" />,
    highlight: "Radical Transparency"
  },
  {
    name: "Amanda",
    industry: "Painting",
    quote: "WebCore brought us into the modern age. People in town view us as a much more established company now that we have a professional online presence.",
    icon: <Paintbrush className="w-5 h-5 text-orange-500" />,
    highlight: "Established brand image"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-[120px] -ml-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] -mr-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase mb-4">Proof of Impact</h2>
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-none">
            Voices of <span className="gradient-text">Success.</span>
          </h1>
          <p className="text-slate-500 text-lg lg:text-xl font-medium max-w-3xl mx-auto mb-10">
            We don't just build websites; we build growth engines. See how WebCore has transformed local businesses across industries.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
               <TrendingUp className="w-5 h-5 text-emerald-500" />
               <span className="text-xs font-black uppercase tracking-widest text-slate-900">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
               <CheckCircle2 className="w-5 h-5 text-cyan-500" />
               <span className="text-xs font-black uppercase tracking-widest text-slate-900">Proven ROI</span>
            </div>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`group relative bg-white rounded-[3rem] p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-50 opacity-[0.05] group-hover:text-cyan-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-cyan-50 transition-colors border border-slate-100 group-hover:border-cyan-100">
                  {t.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{t.name}</h4>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-cyan-600 transition-colors">{t.industry}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                  "{t.quote}"
                </p>
              </div>

              {t.highlight && (
                <div className="pt-6 border-t border-slate-50">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-all">
                    <Zap className="w-3 h-3 fill-current" />
                    {t.highlight}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Ready to be our next success story?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-slate-200"
          >
            Join our Success Partners
            <CheckCircle2 className="w-6 h-6 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
