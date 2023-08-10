import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-8 h-8 mr-2" src="logo.png" alt="MyTinerary Logo" />
      <span className="text-xl font-bold">MyTinerary</span>
    </div>
  );
};

export default Logo;
