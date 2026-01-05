
import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle,
  Zap,
  Mail,
  Smartphone,
  Search,
  ExternalLink,
  Settings,
  Bell,
  Send,
  UserCheck,
  Globe,
  Key,
  Cpu
} from 'lucide-react';

interface Step {
  title: string;
  description: string;
  details: string[];
  type: 'info' | 'action' | 'success';
  visual?: React.ReactNode;
}

const TokenVisual = () => (
  <div className="bg-slate-900 rounded-3xl p-6 border border-slate-700 font-mono text-[11px] space-y-4 shadow-2xl">
    <div className="flex items-center gap-2 text-amber-400 mb-4">
      <Key className="w-4 h-4" /> <span className="font-black uppercase tracking-widest">API Authentication</span>
    </div>
    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-300">
      <p className="mb-2 opacity-50">// Your Secret Access Token</p>
      <div className="flex items-center gap-2 bg-slate-950 p-2 rounded border border-slate-800">
        <span className="text-emerald-400">nfp_7aB2...x9Z1kLp92mQv</span>
        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>
    </div>
    <p className="text-[9px] text-slate-500 italic text-center">Do not share this token with anyone except your n8n workflow.</p>
  </div>
);

const steps: Step[] = [
  {
    title: "Step 1: Get Alerts Yourself 🔔",
    description: "Netlify can email you immediately whenever someone fills out the form. It takes 30 seconds to set up.",
    type: 'action',
    details: [
      "🏠 GO TO: Netlify Dashboard > Your Site > Site Configuration.",
      "📁 SIDEBAR: Click 'Forms' then scroll to 'Form notifications'.",
      "➕ ADD: Click 'Add notification' > 'Email notification'.",
      "📧 SETUP: Choose 'contact' form and enter your email (webcore112@gmail.com).",
      "✅ TEST: Submit a form on your live site; you should get an email in 1-2 minutes."
    ]
  },
  {
    title: "Step 2: Auto-Reply to Clients 📩",
    description: "To send a professional 'Thank you' email to your client, we use Zapier (Beginner Friendly).",
    type: 'action',
    details: [
      "🔗 CONNECT: Go to Zapier.com and create a free account.",
      "⚡ TRIGGER: Search for 'Netlify' and choose 'New Form Submission'.",
      "🔌 LINK: Link your Netlify account and select the 'contact' form.",
      "✉️ ACTION: Search for 'Gmail' and choose 'Send Email'.",
      "📝 CONTENT: Use the form fields to fill in the 'To' address and your custom message."
    ]
  },
  {
    title: "Step 3: Advanced n8n Integration 🤖",
    description: "Want to use n8n for custom workflows? You'll need a 'Personal Access Token' from your user profile.",
    type: 'action',
    visual: <TokenVisual />,
    details: [
      "👤 PROFILE: Click your Avatar (top right) > User Settings.",
      "💻 APPS: Select 'Applications' from the left sidebar.",
      "🔑 TOKENS: Find 'Personal Access Tokens' and click 'New access token'.",
      "📝 NAME: Call it 'n8n-connection' and click Generate.",
      "📋 COPY: Copy the code immediately! You will never see it again once you close the page.",
      "🔗 n8n: Paste this into the 'Access Token' field in your n8n Netlify Credential."
    ]
  }
];

const DeploymentGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl">
      <div className="bg-white rounded-[3.5rem] w-full max-w-5xl h-[750px] shadow-[0_40px_150px_-30px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in duration-500 border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-8 lg:p-12 flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <Settings className="w-7 h-7 text-white animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-black text-2xl tracking-tight">Admin & Automation Setup</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Step {currentStep + 1} of {steps.length}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-full transition-all relative z-10">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-full overflow-hidden">
          {/* Content Side */}
          <div className="lg:w-1/2 p-10 lg:p-14 bg-slate-50 border-r border-slate-100 overflow-y-auto pb-32">
            <div className="mb-10">
              <h4 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{steps[currentStep].title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">{steps[currentStep].description}</p>
            </div>
            {steps[currentStep].visual && (
              <div className="mb-8">{steps[currentStep].visual}</div>
            )}
          </div>

          {/* Checklist Side */}
          <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-between bg-white overflow-y-auto pb-40 lg:pb-14">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Instructions</p>
              {steps[currentStep].details.map((detail, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-all">
                  <div className="mt-1">
                    {detail.includes('👤') ? <UserCheck className="w-5 h-5 text-purple-500" /> :
                     detail.includes('💻') || detail.includes('🔗') ? <Cpu className="w-5 h-5 text-cyan-500" /> :
                     detail.includes('🔑') || detail.includes('📋') ? <Key className="w-5 h-5 text-amber-500" /> :
                     detail.includes('📧') ? <Mail className="w-5 h-5 text-blue-500" /> :
                     <CheckCircle className="w-5 h-5 text-emerald-500" />}
                  </div>
                  <p className="text-slate-700 font-bold text-sm leading-relaxed">{detail.replace(/[🏠📁➕📧✅⚡🔌✉️📝🚀🕵️📱🔄🌟👤💻🔑📋🔗]/g, '')}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-between items-center">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className={`text-slate-400 font-black text-xs uppercase tracking-widest ${currentStep === 0 ? 'opacity-0' : 'hover:text-slate-900'}`}
              >
                Back
              </button>

              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full ${i === currentStep ? 'bg-cyan-500' : 'bg-slate-100'}`} />
                ))}
              </div>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-slate-900 text-white font-black px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="bg-cyan-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-cyan-600 transition-all"
                >
                  Got it!
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;
