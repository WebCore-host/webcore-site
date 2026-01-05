import React from 'react';
import logoImage from './logo.png'; // Add this import

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <img 
      src={logoImage}  // Use the imported variable
      alt="WebCore Logo" 
      className={`${className} object-contain w-auto block`}
      onError={(e) => {
        console.error("CRITICAL: logo.png could not be loaded.");
      }}
    />
  );
};

export default Logo;
