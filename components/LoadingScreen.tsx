
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    } else {
      // Faster exit transition
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-[40px] rounded-full animate-pulse"></div>
        
        {/* The Spinning Logo */}
        <div className="relative animate-spin-slow">
          <Logo className="h-20 md:h-24" />
        </div>
        
        {/* Updated Failsafe Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-1">
            Optimizing experience
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-300 block">
            Please hang tight...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
