
import React from 'react';
import { X, Globe, Lock, RotateCw, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  color: string;
  content: React.ReactNode;
}

const ProjectDemo: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8 bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Accessibility: Big floating back button for mobile/beginner users */}
      <button 
        onClick={onClose}
        className="fixed top-6 left-6 z-[110] flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all md:hidden"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Site
      </button>

      <div className="bg-white w-full max-w-7xl h-full max-h-[90vh] rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-white/20">
        
        {/* Browser Header Simulation */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-4">
          <div className="hidden md:flex gap-2 mr-4">
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors shadow-inner" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-inner" />
          </div>
          
          <div className="flex items-center gap-3 flex-1 max-w-2xl bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-400 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span className="truncate font-medium">https://{project.title.toLowerCase().replace(/\s/g, '')}.com/preview</span>
            <div className="ml-auto flex gap-3">
              <RotateCw className="w-3.5 h-3.5 hover:text-slate-800 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <div className="hidden lg:flex gap-4 text-slate-300">
              <ChevronLeft className="w-6 h-6 cursor-not-allowed" />
              <ChevronRight className="w-6 h-6 cursor-not-allowed" />
            </div>
            <button 
              onClick={onClose}
              className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-black hover:bg-slate-800 transition-all"
            >
              Exit Preview
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Content Simulation */}
        <div className="flex-1 overflow-y-auto bg-white">
          {project.content}
          
          {/* Footer of the demo to provide a clear exit point */}
          <div className="p-20 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">End of Demo</p>
            <button 
              onClick={onClose}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Return to WebCore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;
