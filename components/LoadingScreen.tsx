
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    } else {
      // Very fast exit transition
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${
        isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
      }`}
    >
      <div className="relative">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-[40px] rounded-full animate-pulse"></div>
        
        {/* The Spinning Logo */}
        <div className={`relative transition-transform duration-700 ${isLoading ? 'scale-100 rotate-0' : 'scale-150 rotate-12'}`}>
          <div className="animate-spin-slow">
            <Logo className="h-16 md:h-20" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-max text-center transition-all duration-500 ${isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 block mb-1">
            Initializing Core
          </span>
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
