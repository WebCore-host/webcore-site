
import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle,
  Zap,
  ShieldAlert,
  Server,
  Trash2,
  AlertTriangle,
  Fingerprint,
  MousePointer2,
  Clock,
  ExternalLink,
  HelpCircle,
  ArrowRightLeft,
  RotateCcw,
  Database,
  Code,
  Globe,
  Wifi,
  Smartphone,
  Search,
  Mail
} from 'lucide-react';

interface Step {
  title: string;
  description: string;
  details: string[];
  type: 'info' | 'action' | 'success';
  visual?: React.ReactNode;
}

const DNSStatusVisual = () => (
  <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl font-mono text-[10px] space-y-6">
    <div className="flex items-center justify-between text-cyan-400">
      <div className="flex items-center gap-3">
        <Globe className="w-5 h-5 animate-pulse" /> 
        <span className="font-black text-xs">GLOBAL PROPAGATION SCAN</span>
      </div>
      <div className="bg-cyan-500/20 px-3 py-1 rounded-full text-[8px] font-black border border-cyan-500/30 uppercase tracking-widest">In Progress</div>
    </div>
    <div className="space-y-3">
      {[
        { city: "New York (US)", status: "✅ 75.2.60.5", color: "text-emerald-400" },
        { city: "London (UK)", status: "✅ 75.2.60.5", color: "text-emerald-400" },
        { city: "Tokyo (JP)", status: "⏳ PENDING...", color: "text-amber-400" },
        { city: "Sydney (AU)", status: "❌ 76.76.21.21", color: "text-rose-400" }
      ].map((loc, i) => (
        <div key={i} className="flex justify-between border-b border-slate-800 pb-2">
          <span className="text-slate-500 font-bold">{loc.city}</span>
          <span className={`${loc.color} font-black`}>{loc.status}</span>
        </div>
      ))}
    </div>
    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-[9px] text-slate-400 leading-relaxed italic">
      Your domain name is like a physical address. When you change your A-Record, the post office (DNS servers) needs time to update their maps.
    </div>
  </div>
);

const EmailSetupVisual = () => (
  <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl font-mono text-[11px] space-y-4">
    <div className="flex items-center gap-3 mb-6 text-cyan-400">
      <Mail className="w-6 h-6" /> <span className="font-black uppercase tracking-widest">Netlify Dashboard Setup</span>
    </div>
    <div className="space-y-2 text-slate-300">
       <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
          <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">1</div>
          <span>Go to <strong>Site Configuration</strong></span>
       </div>
       <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
          <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">2</div>
          <span>Select <strong>Forms</strong> in the sidebar</span>
       </div>
       <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
          <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">3</div>
          <span>Click <strong>Form notifications</strong> &gt; <strong>Add notification</strong></span>
       </div>
       <div className="p-3 bg-slate-950 rounded-xl border border-cyan-500/30 flex items-center gap-4 bg-cyan-500/5">
          <div className="w-6 h-6 rounded bg-cyan-500 text-white flex items-center justify-center font-black">4</div>
          <span>Select <strong>Email notification</strong> & add your email!</span>
       </div>
    </div>
  </div>
);

const steps: Step[] = [
  {
    title: "Checking Your Progress 🗺️",
    description: "You asked how to know if everything is going to plan. We use tools to 'peek' into other cities.",
    type: 'info',
    visual: <DNSStatusVisual />,
    details: [
      "🔍 THE TOOL: Visit 'whatsmydns.net' and search for your A-Record.",
      "🎯 THE TARGET: You want to see '75.2.60.5' across the board.",
      "📱 THE BYPASS: Turn off your phone's Wi-Fi and use LTE/5G to see the update faster.",
      "⏳ THE REALITY: If you see the old IP, GoDaddy hasn't sent the signal to your city yet."
    ]
  },
  {
    title: "Connecting to Your Email 📧",
    description: "To keep your email secure, Netlify handles the actual sending. Here is how to link them up.",
    type: 'action',
    visual: <EmailSetupVisual />,
    details: [
      "✨ ZERO CODE: You don't need to change any more code to get emails.",
      "📁 NETLIFY LOGIN: Log in to your Netlify dashboard and click on your project.",
      "🔔 NOTIFICATIONS: Go to 'Forms' > 'Settings' > 'Form Notifications'.",
      "📨 ADD EMAIL: Choose 'Email notification' and type in webcore112@gmail.com."
    ]
  },
  {
    title: "The 'Clean Slate' Method 🧹",
    description: "Sometimes the site IS working, but your browser is 'remembering' the dead page.",
    type: 'action',
    details: [
      "🕵️ INCOGNITO: Press Ctrl+Shift+N to open a fresh browser window.",
      "📶 AIRPLANE MODE: Turn on Airplane mode for 10 seconds to reset your local signal.",
      "🧹 BROWSER CACHE: Go to Settings > Privacy > Clear Browsing Data.",
      "☕ BREW COFFEE: If it still won't show, wait 30 minutes for DNS to expire."
    ]
  }
];

const DeploymentGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-2xl">
      <div className="bg-white rounded-[3.5rem] w-full max-w-5xl h-[700px] shadow-[0_40px_150px_-30px_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in zoom-in duration-500 border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-10 flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] -mr-48 -mt-48"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-black text-3xl tracking-tight leading-none mb-2">WebCore Academy</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Master Deployment • Phase {currentStep + 1}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-4 hover:bg-white/10 rounded-full transition-all relative z-10 group bg-white/5 border border-white/10">
            <X className="w-8 h-8 text-slate-400 group-hover:text-white" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Content Side */}
          <div className="lg:w-1/2 p-12 bg-slate-50 border-r border-slate-100 overflow-y-auto">
            <div className="mb-10">
              <h4 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{steps[currentStep].title}</h4>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">{steps[currentStep].description}</p>
            </div>
            {steps[currentStep].visual && (
              <div className="mb-8 animate-in fade-in slide-in-from-left-6 duration-700">
                {steps[currentStep].visual}
              </div>
            )}
          </div>

          {/* Checklist Side */}
          <div className="lg:w-1/2 p-12 flex flex-col justify-between bg-white overflow-y-auto pb-32 md:pb-12">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Verification Checklist</p>
              {steps[currentStep].details.map((detail, idx) => (
                <div key={idx} className="flex gap-5 items-start bg-white p-6 rounded-[2rem] border border-slate-100 transition-all hover:border-cyan-200 hover:shadow-xl hover:-translate-x-1 group cursor-default">
                  <div className="mt-1 flex-shrink-0">
                    {detail.includes('🔍') || detail.includes('🕵️') ? <Search className="w-6 h-6 text-cyan-500" /> :
                     detail.includes('📱') || detail.includes('📶') ? <Smartphone className="w-6 h-6 text-purple-500" /> :
                     detail.includes('✅') || detail.includes('✨') ? <CheckCircle className="w-6 h-6 text-emerald-500" /> :
                     detail.includes('📨') || detail.includes('📧') ? <Mail className="w-6 h-6 text-blue-500" /> :
                     <Zap className="w-6 h-6 text-amber-500" />}
                  </div>
                  <p className="text-slate-700 font-bold text-base leading-relaxed">{detail.replace(/[🔑📁🖼️🔗🛑🚫✅💡🚀✏️📍🔍🗺️🏗️🌟🎓🏠⚠️🗑️⚡🔄💻📱🔎🍎🧟🏆🛡️📈📧✨🛠️🇮⚖️⏱️📥💾🔍🎉🖥️🕵️📶🧹🎯🎯☕📨]/g, '')}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex gap-3 mb-10">
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 flex-1 rounded-full transition-all duration-700 ${idx <= currentStep ? 'bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-slate-100'}`}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-3 font-black text-xs uppercase tracking-widest px-6 py-3 rounded-2xl transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900 bg-slate-100'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="flex items-center gap-4 bg-slate-950 text-white font-black px-10 py-5 rounded-[2rem] hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-slate-200"
                  >
                    CONTINUE
                    <ChevronRight className="w-6 h-6 text-cyan-400" />
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-black px-12 py-5 rounded-[2rem] hover:opacity-90 hover:scale-105 transition-all shadow-2xl shadow-cyan-200 active:scale-95 flex items-center gap-4"
                  >
                    FINISH ACADEMY
                    <ExternalLink className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;
