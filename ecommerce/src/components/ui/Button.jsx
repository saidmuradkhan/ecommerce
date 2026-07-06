import React from 'react';

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-medium transition-colors duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
    danger: "bg-red-400 text-white hover:bg-red-500", 
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
