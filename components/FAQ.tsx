
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
  Code2
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Technical' | 'Support';
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'General',
    icon: <HelpCircle className="w-5 h-5 text-cyan-500" />,
    question: "What exactly does WebCore do for local businesses?",
    answer: "We specialize in taking businesses with little to no online presence and turning them into digital leaders. We handle everything from custom design and coding to SEO and ongoing maintenance so you can focus on running your business. Basically, you get peace of mind online with us."
  },
  {
    id: 2,
    category: 'Process',
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    question: "How long does it take to get my website live?",
    answer: "We pride ourselves on \"Hyper Velocity.\" While a full custom build depends on the project scope, we typically deliver professional prototypes within days, not months. Most projects are completed within 2-4 weeks. If you need projects done quicker just contact our team and we’ll see what we can work out."
  },
  {
    id: 3,
    category: 'Technical',
    icon: <Code2 className="w-5 h-5 text-purple-500" />,
    question: "Do you use website templates like Wix or Squarespace?",
    answer: "No. We believe in \"Legacy Craftsmanship.\" Every site we build is hand-coded and custom-designed. This ensures your site is unique, faster, and more secure than template-based alternatives."
  },
  {
    id: 4,
    category: 'Technical',
    icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
    question: "Will my website work on mobile phones and tablets?",
    answer: "Absolutely. Every WebCore site features Responsive Design, meaning it will look and function perfectly on everything from an iPhone to a 4K desktop monitor."
  },
  {
    id: 5,
    category: 'General',
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    question: "How does a website help my business grow?",
    answer: "Statistics show that 70-80% of consumers research a company online before visiting in person. A professional website builds instant trust, influences purchasing decisions, and ensures you are \"discoverable\" when local customers search for your services."
  },
  {
    id: 6,
    category: 'General',
    icon: <SearchCheck className="w-5 h-5 text-indigo-500" />,
    question: "Is SEO (Search Engine Optimization) included?",
    answer: "Yes, we offer SEO tailored to your business goals. Our Growth Plan includes a Foundational SEO Setup to get you started, while our Pro Plan features Advanced SEO, including structured data and schema markup for maximum visibility. Our Essential Plan is focused strictly on design and performance, making it a great fit for those who already have a dedicated marketing strategy."
  },
  {
    id: 7,
    category: 'General',
    icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
    question: "What is your \"Radical Transparency\" policy?",
    answer: "It means no hidden fees and no technical jargon. We explain every decision we make and provide clear, upfront pricing so you are always in the driver’s seat of your project."
  },
  {
    id: 8,
    category: 'Support',
    icon: <UserCheck className="w-5 h-5 text-emerald-500" />,
    question: "Do you offer any guarantees?",
    answer: "Yes! We offer a 30-Day Money Back Guarantee. If you aren't satisfied with our progress or the direction of the project within the first month, we’ll make it right or refund your investment."
  },
  {
    id: 9,
    category: 'Process',
    icon: <Rocket className="w-5 h-5 text-cyan-600" />,
    question: "What happens after the website is launched?",
    answer: "We don’t just \"build and leave.\" We provide reliable ongoing support to ensure your site stays secure, updated, and performing at its best as your business grows."
  },
  {
    id: 10,
    category: 'Support',
    icon: <Clock className="w-5 h-5 text-amber-600" />,
    question: "What happens if I need to change a phone number or add a new service later?",
    answer: "We believe a website should grow with your business. All of our plans include a streamlined process for updates. Whether you want to swap out a photo, update your pricing, or add a new testimonial, just send us a quick message. We handle the edits for you to ensure your site stays professional and error-free, usually within one business day."
  },
  {
    id: 11,
    category: 'Support',
    icon: <Cpu className="w-5 h-5 text-slate-500" />,
    question: "How fast can I expect a response if I have a question?",
    answer: "We prioritize clear, fast communication. While we guarantee a response within 24 hours for all clients, those on our Growth Plan enjoy an accelerated response time of under 12 hours. For our Pro Plan partners, we provide Priority Support with a dedicated response window of less than 2 hours."
  },
  {
    id: 12,
    category: 'Process',
    icon: <Search className="w-5 h-5 text-purple-600" />,
    question: "Can you help me if I already have a website but it’s outdated?",
    answer: "Definitely. We can perform a digital audit and either refresh your current look or build a high-performance \"engine\" from the ground up to replace an underperforming site."
  },
  {
    id: 13,
    category: 'Technical',
    icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
    question: "Do you handle website hosting and security?",
    answer: "Yes. We provide total peace of mind by managing the technical heavy lifting, including high-speed hosting and SSL security certificates to keep your visitor's data safe."
  },
  {
    id: 14,
    category: 'General',
    icon: <Rocket className="w-5 h-5 text-orange-500" />,
    question: "Why should I choose WebCore over a cheap DIY builder?",
    answer: "DIY builders often produce slow, generic sites that struggle with SEO. WebCore builds \"business engines\" designed specifically to drive calls and revenue through custom UI/UX and lightning-fast load times."
  },
  {
    id: 15,
    category: 'General',
    icon: <Mail className="w-5 h-5 text-cyan-400" />,
    question: "How do I get started?",
    answer: "Simply fill out our contact form below or email us at webcore112@gmail.com. We’ll reach out to discuss your goals and provide a custom strategy for your digital launchpad."
  },
  {
    id: 16,
    category: 'Technical',
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    question: "Who owns and manages the website?",
    answer: "We provide a Fully Managed Digital Solution. This means while you own your brand, content, and domain, we provide the high-performance hosting environment and the proprietary code that keeps your site running at peak speed. By hosting the site on our optimized servers, we ensure your business stays secure, updated, and online 24/7. You focus on your business; we handle the technical infrastructure."
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

  const categories = ['General', 'Process', 'Technical', 'Support'] as const;

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
                  <span className="shrink-0">{cat} Questions</span>
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
