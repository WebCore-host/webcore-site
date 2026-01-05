
import React from 'react';

/**
 * 🛠️ LOGO COMPONENT
 * This component now uses your 'logo.png' file directly.
 * Ensure the file is in your root directory (same folder as index.html).
 */
const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <img 
      src="logo.png" 
      alt="WebCore Logo" 
      className={`${className} object-contain w-auto block`}
      // Error handling to help the developer if the file is missing or renamed
      onError={(e) => {
        console.error("CRITICAL: logo.png could not be loaded. Please check that the file is in the root directory and named exactly 'logo.png'.");
      }}
    />
  );
};

export default Logo;
