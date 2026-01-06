
import React from 'react';
import { Monitor, Layout, Zap, Search, Globe, Shield } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-cyan-500" />,
    title: "Responsive Design",
    description: "Websites that look stunning on every device, from the latest iPhone to high-resolution desktop monitors."
  },
  {
    icon: <Layout className="w-8 h-8 text-purple-500" />,
    title: "Modern UI/UX",
    description: "Clean, intuitive layouts designed to build instant trust and keep your visitors engaged with your brand."
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: "Lightning Speed",
    description: "Built with the latest technology for near-instant load times, ensuring you never lose a customer to a slow page."
  },
  {
    icon: <Search className="w-8 h-8 text-emerald-500" />,
    title: "SEO Optimized",
    description: "We build with search engines in mind, helping your business climb the rankings and get found by local customers."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Digital Presence",
    description: "From zero to live. We handle the technical heavy lifting so you can focus on running your business."
  },
  {
    icon: <Shield className="w-8 h-8 text-rose-500" />,
    title: "Reliable Support",
    description: "We don't just build and leave. We ensure your site stays secure, updated, and performing at its best."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50/50 scroll-mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-3">Our Expertise</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">How We Help You Grow</p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We specialize in taking businesses with no online footprint and turning them into 
            digital leaders with high-performance, custom-built websites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl transition-colors group-hover:bg-cyan-50">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors group-hover:text-cyan-600">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
