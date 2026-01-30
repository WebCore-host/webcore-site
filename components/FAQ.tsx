
import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Clock, 
  Rocket, 
  UserCheck,
  Mail,
  SearchCheck,
  Code2,
  Lock,
  MapPin,
  Plus,
  Star,
  Target,
  Globe,
  Sparkles
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'Getting Started' | 'Pricing & Plans' | 'Maintenance & Updates' | 'Technical & Security' | 'Features & Integration';
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    id: 1,
    category: 'Getting Started',
    icon: <Clock className="w-5 h-5 text-cyan-500" />,
    question: "How long does it take to get my website live?",
    answer: "We value speed. Our Essential Plan typically launches within 7 days, while our Growth Plan offers a priority 72-hour turnaround (from the moment we receive your content), ensuring your business starts reaching customers as quickly as possible."
  },
  {
    id: 2,
    category: 'Getting Started',
    icon: <Target className="w-5 h-5 text-amber-500" />,
    question: "What do I need to provide to start the process?",
    answer: "To hit the ground running, we’ll start with a 15-minute Strategy Call. You bring the vision. We’ll do all the technical heavy lifting so you can stay focused on your clients while we build the engine."
  },
  {
    id: 3,
    category: 'Getting Started',
    icon: <Globe className="w-5 h-5 text-purple-500" />,
    question: "Do I have to buy my own domain?",
    answer: "No, we take care of that for you! WebCore maintains the domain registration to ensure it is always optimized and secure. Think of it like a \"managed lease\", we handle the paperwork and the costs so you can focus on your business. If you ever need to take full ownership later on, we can facilitate a transfer for a small administrative fee."
  },
  // Pricing & Plans
  {
    id: 4,
    category: 'Pricing & Plans',
    icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    question: "What is the difference between the Essential and Growth plans?",
    answer: "The Essential Plan ($59/mo) is perfect for a professional launch with 3 pages. The Growth Plan ($69/mo) is built for businesses ready to scale, offering 6 pages, faster support, lead generation tools (like appointment booking), and monthly website enhancements."
  },
  {
    id: 5,
    category: 'Pricing & Plans',
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    question: "Are there any hidden setup fees?",
    answer: "No. Our goal is to provide total peace of mind. Your monthly subscription covers your website design, hosting, security, and ongoing support without surprise \"activation\" fees."
  },
  {
    id: 6,
    category: 'Pricing & Plans',
    icon: <Rocket className="w-5 h-5 text-indigo-500" />,
    question: "Can I upgrade from Essential to Growth later?",
    answer: "Absolutely. As your business grows and you need more features—like social media syncing or appointment scheduling—you can upgrade to the Growth Plan at any time."
  },
  // Maintenance & Updates
  {
    id: 7,
    category: 'Maintenance & Updates',
    icon: <Code2 className="w-5 h-5 text-rose-500" />,
    question: "How do the \"3 Monthly Enhancements\" work in the Growth Plan?",
    answer: "On the Growth Plan, you can contact us up to 3 times per month to request updates. This includes things like changing a photo, updating a price list, adding a new testimonial, or tweaking text. It’s like having a web developer on call!"
  },
  {
    id: 8,
    category: 'Maintenance & Updates',
    icon: <Clock className="w-5 h-5 text-emerald-500" />,
    question: "What happens if I don't use my 3 updates in a month?",
    answer: "To keep our workflow predictable and your site fresh, updates do not roll over to the following month. We encourage you to use them to keep your content current!"
  },
  {
    id: 9,
    category: 'Maintenance & Updates',
    icon: <Plus className="w-5 h-5 text-cyan-600" />,
    question: "What if I need more than 3 updates in a month?",
    answer: "If you have a busy month with lots of changes, just reach out! We can provide a quick quote for additional edits beyond your monthly credits."
  },
  // Technical & Security
  {
    id: 10,
    category: 'Technical & Security',
    icon: <Smartphone className="w-5 h-5 text-amber-600" />,
    question: "Will my website work on mobile phones?",
    answer: "Yes. Every site we build is \"Mobile-Optimized,\" meaning it will look and function perfectly on smartphones, tablets, and desktop computers."
  },
  {
    id: 11,
    category: 'Technical & Security',
    icon: <Lock className="w-5 h-5 text-slate-500" />,
    question: "Is my website secure?",
    answer: "Security is included in every plan. We install an SSL Security Certificate (the \"lock\" icon in the browser) to ensure your data and your visitors' information are encrypted and safe."
  },
  {
    id: 12,
    category: 'Technical & Security',
    icon: <UserCheck className="w-5 h-5 text-purple-600" />,
    question: "What kind of support do you offer?",
    answer: "We offer dedicated email support. Essential Plan members receive a response within 48 hours, while Growth Plan members get VIP Priority Support with a response in under 12 hours."
  },
  // Features & Integration
  {
    id: 13,
    category: 'Features & Integration',
    icon: <MapPin className="w-5 h-5 text-cyan-500" />,
    question: "Can you help me show up on Google Maps?",
    answer: "Yes! Our Growth Plan includes Google Maps integration, making it easy for local customers to find your physical location directly from your website."
  },
  {
    id: 14,
    category: 'Features & Integration',
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    question: "Can customers book appointments through the site?",
    answer: "Yes, this is a core feature of our Growth Plan. We integrate automated scheduling tools so your customers can book your services 24/7 without you having to pick up the phone."
  },
  {
    id: 15,
    category: 'Features & Integration',
    icon: <Star className="w-5 h-5 text-blue-600" />,
    question: "Can I show reviews from my happy customers?",
    answer: "Definitely. The Growth Plan includes a \"Positive Review Banner\" specifically designed to showcase your best feedback and build instant trust with new visitors."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const categories = [
    'Getting Started', 
    'Pricing & Plans', 
    'Maintenance & Updates', 
    'Technical & Security', 
    'Features & Integration'
  ] as const;

  return (
    <section className="pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.3em] text-cyan-600 uppercase mb-4">Support Hub</h2>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto mb-10">
            Everything you need to know about our high-performance web solutions and process.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search for questions (e.g. 'SEO' or 'Time')"
              className="w-full pl-14 pr-6 py-5 rounded-[2rem] bg-slate-50 border-2 border-slate-100 focus:bg-white focus:border-cyan-400 focus:outline-none transition-all text-slate-900 font-bold shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const catFaqs = filteredFaqs.filter(f => f.category === cat);
            if (catFaqs.length === 0) return null;

            return (
              <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 flex items-center gap-4">
                  <span className="shrink-0">{cat}</span>
                  <div className="h-px bg-slate-100 flex-1"></div>
                </h3>
                
                <div className="space-y-4">
                  {catFaqs.map((faq) => (
                    <div 
                      key={faq.id}
                      className={`group rounded-[2.5rem] border transition-all duration-300 ${
                        openId === faq.id 
                        ? 'bg-white border-cyan-200 shadow-xl shadow-cyan-900/5' 
                        : 'bg-slate-50 border-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <button 
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-5">
                          <div className={`p-3 rounded-2xl transition-all duration-300 ${
                            openId === faq.id ? 'bg-cyan-50 scale-110' : 'bg-white'
                          }`}>
                            {faq.icon}
                          </div>
                          <span className={`font-black text-lg lg:text-xl tracking-tight transition-colors ${
                            openId === faq.id ? 'text-slate-900' : 'text-slate-800 group-hover:text-cyan-600'
                          }`}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`shrink-0 transition-transform duration-500 p-2 ${openId === faq.id ? 'rotate-180 text-cyan-500' : 'text-slate-300'}`}>
                          <ChevronDown className="w-6 h-6" />
                        </div>
                      </button>

                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-8 pb-8 pt-2">
                          <div className="h-px bg-slate-100 mb-6"></div>
                          <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-3xl italic">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-20 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-2">No results found.</h4>
            <p className="text-slate-500 font-medium">Try searching for something else or contact us below.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 p-12 lg:p-16 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">Still have questions?</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              We're here to help. Reach out to our strategy team for a direct answer within 12 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="gradient-bg text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-cyan-900/20 active:scale-95 transition-all"
              >
                Get in Touch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
