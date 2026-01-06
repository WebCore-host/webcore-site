import React, { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Allow time for the fade-out animation before removing from DOM
      const timer = setTimeout(() => setShouldRender(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
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
        
        {/* Subtle Progress Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">
            Initializing Core
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
