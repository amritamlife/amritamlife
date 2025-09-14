import React from 'react';

const Logo = ({ className = "h-8 w-8" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Amritam Logo" 
      className={`${className} object-contain flex-shrink-0`}
    />
  );
};

export default Logo;
