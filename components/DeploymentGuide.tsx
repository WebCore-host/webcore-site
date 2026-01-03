
import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Code, 
  CheckCircle,
  AlertCircle,
  ExternalLink,
  FolderOpen
} from 'lucide-react';

interface Step {
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    title: "1. Prepare Your Computer Folder",
    description: "Before uploading to GitHub, you need to save these files correctly on your own computer.",
    details: [
      "Create a folder on your Desktop named 'webcore-site'.",
      "Inside that folder, create another folder named 'components'.",
      "Save index.html, index.tsx, App.tsx, and metadata.json in the main folder.",
      "Save all the other files (Hero.tsx, About.tsx, etc.) inside the 'components' folder."
    ]
  },
  {
    title: "2. The GitHub Repository",
    description: "GitHub is where your code lives online.",
    details: [
      "On GitHub, click 'New' to create a repository named 'webcore-website'.",
      "Keep it 'Public' and click 'Create repository'.",
      "On the next screen, click 'uploading an existing file'.",
      "Drag your entire 'webcore-site' folder into the upload box and click 'Commit changes'."
    ]
  },
  {
    title: "3. Connecting Netlify",
    description: "Netlify turns your GitHub code into a live website link.",
    details: [
      "Log into Netlify.com using your GitHub account.",
      "Click 'Add new site' -> 'Import an existing project'.",
      "Select your 'webcore-website' repository.",
      "Netlify will automatically detect everything. Just click 'Deploy site'!"
    ]
  },
  {
    title: "4. Making Future Changes",
    description: "You can modify your site anytime through GitHub.",
    details: [
      "To change text, go to GitHub, find the file (like Hero.tsx), and click the Pencil icon.",
      "Edit the text inside the quotes, then click 'Commit changes'.",
      "Netlify will automatically update your live website in seconds!"
    ]
  }
];

const DeploymentGuide: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl">WebCore Launch Guide</h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Step {currentStep + 1} of {steps.length}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-10">
            <h4 className="text-2xl font-extrabold text-slate-900 mb-3">{steps[currentStep].title}</h4>
            <p className="text-slate-600 text-lg leading-relaxed">{steps[currentStep].description}</p>
          </div>

          <div className="space-y-4 mb-12">
            {steps[currentStep].details.map((detail, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:border-cyan-100 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 font-semibold leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-10">
            {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : 'bg-slate-100'}`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-bold px-6 py-2 rounded-xl transition-all ${currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50 active:scale-95'}`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-extrabold px-10 py-4 rounded-xl hover:opacity-90 transition-all shadow-2xl shadow-purple-200 active:scale-95 flex items-center gap-2"
              >
                Finish Guide
                <ExternalLink className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-cyan-50 p-5 flex gap-4 items-center border-t border-cyan-100">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-cyan-200">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-cyan-900 font-bold uppercase tracking-wider">Folder Tip</p>
            <p className="text-sm text-cyan-800 leading-tight">
              Make sure your files aren't buried inside extra folders. Your <b>index.html</b> should be in the main folder you upload!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;
