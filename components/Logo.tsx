import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="WebCore Logo" 
      className={`${className} object-contain w-auto block`}
      onError={(e) => {
        console.error("CRITICAL: logo.png could not be loaded. Please check that the file is in the public directory.");
      }}
    />
  );
};

export default Logo;
