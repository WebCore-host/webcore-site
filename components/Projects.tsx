
import React, { useState } from 'react';
import { ExternalLink, Layout, Smartphone, Globe, ArrowRight, Search, MapPin, Star, ShoppingBag, Plus, Clock, Users, ChevronRight, ChevronLeft, ShieldCheck, Heart, Coffee, Instagram } from 'lucide-react';
import ProjectDemo from './ProjectDemo';

const projects = [
  {
    title: "Luxe Real Estate",
    category: "Corporate Site",
    description: "A high-end property listing site with custom search filters and lightning-fast loading.",
    icon: <Globe className="w-6 h-6 text-cyan-500" />,
    color: "cyan",
    content: (
      <div className="min-h-full bg-white text-slate-900 font-sans">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-8 py-6 flex justify-between items-center border-b border-slate-100">
          <div className="text-3xl font-serif font-black tracking-tighter">LUXE<span className="text-cyan-600">.</span></div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <span className="text-cyan-600">Properties</span>
            <span className="text-slate-400">Agents</span>
            <span className="text-slate-400">Insights</span>
            <span className="text-slate-400">Contact</span>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-cyan-900/10">Inquire</button>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" alt="Luxe Hero" className="absolute inset-0 w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-slate-950/40"></div>
          <div className="relative z-10 text-center max-w-3xl px-6">
            <h4 className="text-4xl lg:text-7xl font-serif mb-8 leading-tight">Extraordinary homes for extraordinary lives.</h4>
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-2 rounded-3xl flex flex-col md:flex-row gap-2 shadow-2xl">
              <div className="flex-1 flex items-center gap-3 px-6 text-white/90">
                <Search className="w-5 h-5 text-cyan-400" />
                <input type="text" placeholder="Search by Zip or City..." className="bg-transparent border-none outline-none w-full text-sm font-medium placeholder:text-white/50" />
              </div>
              <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black text-sm">Explore</button>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="p-10 lg:p-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <p className="text-cyan-600 font-black text-xs uppercase tracking-widest mb-4">Collection 2024</p>
              <h5 className="text-4xl lg:text-5xl font-serif font-bold">The Signature Collection</h5>
            </div>
            <div className="flex items-center gap-3 font-bold text-slate-400">
              View All Properties <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center"><ChevronRight className="w-5 h-5"/></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Villa Mariposa", price: "$12,400,000", loc: "Montecito, CA", beds: 6, baths: 8, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200" },
              { name: "The Sky Penthouse", price: "$8,900,000", loc: "Miami Beach, FL", beds: 4, baths: 5, img: "https://images.unsplash.com/photo-1600607687940-4e5a99427c33?q=80&w=1200" }
            ].map((prop, i) => (
              <div key={i} className="group">
                <div className="relative h-[400px] rounded-[2.5rem] bg-slate-100 mb-8 overflow-hidden shadow-2xl">
                  <img src={prop.img} alt={prop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/20">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-lg rounded-3xl border border-white flex justify-between items-center shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div>
                      <h6 className="font-bold text-xl">{prop.name}</h6>
                      <p className="text-slate-500 text-xs flex items-center gap-1 mt-1 font-medium tracking-tight"><MapPin className="w-3 h-3 text-cyan-600"/> {prop.loc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-600 font-black text-xl">{prop.price}</p>
                      <div className="flex gap-4 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{prop.beds} Beds</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{prop.baths} Baths</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-12 text-center">
             <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-xl mx-auto flex items-center justify-center"><ShieldCheck className="w-8 h-8 text-cyan-600"/></div>
                <h6 className="font-bold text-lg">Verified Listings</h6>
                <p className="text-slate-500 text-sm leading-relaxed">Every property undergoes a rigorous 50-point inspection before listing.</p>
             </div>
             <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-xl mx-auto flex items-center justify-center"><Users className="w-8 h-8 text-cyan-600"/></div>
                <h6 className="font-bold text-lg">Concierge Service</h6>
                <p className="text-slate-500 text-sm leading-relaxed">Dedicated agents available 24/7 to facilitate smooth transitions.</p>
             </div>
             <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-xl mx-auto flex items-center justify-center"><Star className="w-8 h-8 text-cyan-600"/></div>
                <h6 className="font-bold text-lg">Exclusive Access</h6>
                <p className="text-slate-500 text-sm leading-relaxed">View off-market properties not available on traditional platforms.</p>
             </div>
          </div>
        </section>
      </div>
    )
  },
  {
    title: "Eco-Harvest Market",
    category: "E-Commerce",
    description: "A local farm-to-table delivery platform with integrated payments and inventory.",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    color: "purple",
    content: (
      <div className="min-h-full bg-[#FDFCF8] text-slate-800 flex flex-col lg:flex-row">
        {/* Market Sidebar */}
        <div className="lg:w-80 bg-white border-r border-emerald-100 p-8 flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200"><Coffee className="w-5 h-5"/></div>
            <div>
              <h4 className="text-xl font-black text-emerald-900 tracking-tighter">EcoHarvest</h4>
              <p className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Fresh & Local</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-2 mb-4">Categories</p>
            {['All Items', 'Fresh Produce', 'Organic Dairy', 'Bakery', 'Pantry', 'Beverages'].map((cat, i) => (
              <div key={cat} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${i === 1 ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500'}`}>
                {cat}
              </div>
            ))}
          </div>

          <div className="mt-auto bg-emerald-900 rounded-[2rem] p-6 text-white text-center shadow-2xl shadow-emerald-900/20">
            <p className="text-xs font-bold mb-2">Free Delivery</p>
            <p className="text-[10px] text-emerald-300 mb-4 opacity-70">On orders over $50</p>
            <div className="h-2 bg-emerald-800 rounded-full mb-4">
              <div className="h-full bg-emerald-400 w-[60%] rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold">$20 more to go!</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 lg:p-12">
          <header className="flex justify-between items-center mb-12">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input type="text" placeholder="Search farm fresh products..." className="w-full pl-12 pr-6 py-4 rounded-2xl border-none bg-white shadow-xl shadow-emerald-900/5 outline-none transition-all text-sm font-medium" />
            </div>
            <div className="flex items-center gap-6 ml-8">
               <div className="relative">
                  <ShoppingBag className="w-6 h-6 text-emerald-800" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full text-[8px] flex items-center justify-center font-bold">3</span>
               </div>
               <div className="w-10 h-10 rounded-2xl bg-slate-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100" /></div>
            </div>
          </header>

          <div className="bg-emerald-50 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10 mb-12 relative overflow-hidden">
            <div className="flex-1 relative z-10">
              <h5 className="text-emerald-900 text-3xl font-black mb-4">Farmer's Choice Basket</h5>
              <p className="text-emerald-800/60 font-medium mb-8 leading-relaxed max-w-sm">A hand-picked selection of the season's best organic vegetables delivered straight to your door.</p>
              <button className="bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm">Add to Basket - $24.00</button>
            </div>
            <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=600" className="w-64 h-64 object-cover rounded-[2.5rem] shadow-2xl relative z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/20 blur-[80px] -mr-32 -mt-32"></div>
          </div>

          <h6 className="text-xl font-black text-slate-900 mb-8">Trending This Week</h6>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Wild Honey", price: "$12.50", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400" },
              { name: "Organic Kale", price: "$4.20", img: "https://images.unsplash.com/photo-1524179579103-91bc75836814?q=80&w=400" },
              { name: "Heirloom Eggs", price: "$8.00", img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=400" },
              { name: "Sourdough", price: "$7.50", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400" }
            ].map((prod, i) => (
              <div key={i} className="bg-white p-5 rounded-[2.5rem] border border-slate-50">
                <div className="h-40 rounded-3xl bg-emerald-50 mb-4 overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-emerald-600 font-black text-sm mb-1">{prod.price}</p>
                <h6 className="font-bold text-slate-900 text-sm mb-4">{prod.name}</h6>
                <button className="w-full py-2.5 rounded-xl border-2 border-emerald-50 text-emerald-600 font-bold text-xs">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Peak Performance Gym",
    category: "Booking System",
    description: "Complete digital presence with class scheduling and member login portal.",
    icon: <Smartphone className="w-6 h-6 text-amber-500" />,
    color: "amber",
    content: (
      <div className="min-h-full bg-slate-950 text-white flex flex-col">
        {/* Header */}
        <header className="px-8 py-8 flex justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-black text-black italic text-2xl">P</div>
             <div>
                <h4 className="text-xl font-black italic tracking-tighter">PEAK GYM</h4>
                <p className="text-[10px] font-bold text-amber-500/60 uppercase tracking-widest">Performance Hub</p>
             </div>
          </div>
          <div className="flex gap-6 items-center">
             <nav className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
                <span>Classes</span><span>Coaches</span><span>Shop</span><span>Blog</span>
             </nav>
             <button className="bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest">Member Portal</button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Stats & Profile */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-center">
               <div className="w-32 h-32 rounded-full border-4 border-amber-500/30 p-2 mx-auto mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" className="w-full h-full object-cover rounded-full" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-slate-950 rounded-full"></div>
               </div>
               <h5 className="text-2xl font-black italic mb-1">ALEX REYES</h5>
               <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">Elite Member since 2022</p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                     <p className="text-amber-500 font-black text-xl italic">24</p>
                     <p className="text-[10px] font-bold text-white/40 uppercase">Sessions</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                     <p className="text-amber-500 font-black text-xl italic">86%</p>
                     <p className="text-[10px] font-bold text-white/40 uppercase">Consistency</p>
                  </div>
               </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-[2.5rem] p-8 text-black relative overflow-hidden group">
               <Instagram className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10" />
               <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-60">Join the Community</p>
               <h6 className="text-2xl font-black italic leading-tight mb-6">Tag us @PEAKGYM for a chance to be featured.</h6>
               <button className="bg-black text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">Connect Instagram</button>
            </div>
          </div>

          {/* Right Column: Schedule */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex justify-between items-end">
               <div>
                  <h5 className="text-4xl font-black italic tracking-tight">CLASS SCHEDULE</h5>
                  <p className="text-white/40 font-bold text-sm">Wednesday, Oct 24th</p>
               </div>
            </div>

            <div className="space-y-6">
              {[
                { time: "06:00 AM", name: "HIIT REVOLUTION", coach: "Marcus V.", level: "Advanced", slots: 2, img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200" },
                { time: "07:30 AM", name: "POWER FLOW YOGA", coach: "Sarah J.", level: "Mixed", slots: 12, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=200" },
                { time: "12:00 PM", name: "STRENGTH & CONDITIONING", coach: "Mike Tyson", level: "Elite", slots: 0, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200" },
                { time: "05:30 PM", name: "BOXING MASTERCLASS", coach: "Elena G.", level: "Mixed", slots: 5, img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=200" }
              ].map((cls, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-[2rem] border ${cls.slots === 0 ? 'bg-white/[0.02] border-white/5 opacity-50' : 'bg-white/5 border-white/10'}`}>
                   <div className="text-center md:text-left min-w-[100px]">
                      <p className="text-amber-500 font-black italic text-xl">{cls.time}</p>
                      <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">{cls.level}</p>
                   </div>
                   <div className="flex-1 flex items-center gap-6">
                      <img src={cls.img} className="w-16 h-16 rounded-2xl object-cover grayscale" />
                      <div>
                         <h6 className="font-black italic text-lg uppercase leading-tight">{cls.name}</h6>
                         <p className="text-xs text-white/40 font-bold">with {cls.coach}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-8">
                      <div className="text-right">
                         <p className={`text-xs font-black ${cls.slots === 0 ? 'text-rose-500' : cls.slots < 5 ? 'text-amber-500' : 'text-emerald-500'}`}>
                            {cls.slots === 0 ? 'CLASS FULL' : `${cls.slots} SLOTS LEFT`}
                         </p>
                      </div>
                      <button disabled={cls.slots === 0} className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest ${cls.slots === 0 ? 'bg-white/5 text-white/20' : 'bg-white text-black'}`}>
                         Book Now
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-2">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h2 className="text-sm font-black tracking-[0.3em] text-cyan-400 uppercase mb-4">Our Showcase</h2>
          <h3 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">Experience the <br /><span className="gradient-text">WebCore standard.</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We build engines for growth, not just pages. Launch any of the interactive demos below to see our premium UI and functional business logic in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-800/40 border border-slate-700/50 p-8 rounded-[3rem] hover:bg-slate-800 transition-all duration-700 hover:-translate-y-2 cursor-pointer relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-slate-900 shadow-2xl shadow-cyan-400/20">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-700 border border-slate-700 shadow-2xl">
                {project.icon}
              </div>
              <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-4">{project.category}</p>
              <h4 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-10 text-base font-medium">
                {project.description}
              </p>
              <div className="flex items-center gap-3 text-white font-black group-hover:translate-x-2 transition-transform">
                Launch Experience
                <ExternalLink className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/15 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDemo 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
